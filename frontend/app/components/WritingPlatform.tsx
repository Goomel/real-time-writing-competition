import { useState, useEffect } from 'react';
import { socket } from '@/lib/socket';
import { Player } from '@/types';
import JoinGameForm from "./JoinGameForm";
import TypingBox from "./TypingBox";

const WritingPlatform = () => {
    const [name, setName] = useState("");
    const [hasJoined, setHasJoined] = useState(false);
    const [players, setPlayers] = useState<Player[]>([]);
    const [currentSentence, setCurrentSentence] = useState("");
    const [timeLeft, setTimeLeft] = useState(0);

    useEffect(() => {
        if (!socket.connected) {
            socket.connect();
        }

        socket.on("game_state", (data) => {
            console.log("game_state received:", data);
            if (data.players) setPlayers(data.players);
            if (data.currentSentence) setCurrentSentence(data.currentSentence);
            if (data.timeLeft !== undefined) setTimeLeft(data.timeLeft);
        });

        return () => {
            socket.off("game_state");
        };
    }, []);

    const handleJoin = (e: React.SyntheticEvent) => {
        e.preventDefault();
        if (!name.trim()) return;

        socket.emit("join_game", { name });
        setHasJoined(true);
    };

    return (
        <div>
            {!hasJoined ? (
                <JoinGameForm handleJoin={handleJoin} setName={setName} name={name} />
            ) : (
                <div className="w-full max-w-5xl mx-auto p-4 md:p-6 lg:p-8">
                    <TypingBox currentSentence={currentSentence} timeLeft={timeLeft} />

                    <p className="text-base font-semibold mb-4">
                        {players.length} {players.length === 1 ? 'Player' : 'Players'} Connected
                    </p>

                    <div className="flex flex-col gap-1">
                        <div className="flex justify-between bg-gray-800 px-5 py-3 border border-gray-700 text-base">
                            <p>Name</p>
                            <p>WPM</p>
                            <p>Accuracy</p>
                        </div>
                        {players.map((player) => (
                            <div key={player.id} className="flex justify-between bg-gray-900 px-5 py-3 border border-gray-800 text-base">
                                <p>{player.name}</p>
                                <p>{player.wpm}</p>
                                <p>{player.accuracy}</p>
                            </div>
                    ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default WritingPlatform;