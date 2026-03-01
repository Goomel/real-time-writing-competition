import { Player } from "@/types";

const Leaderboard = ({ players }: { players: Player[] }) => {
    return (
        <table className="w-full border-collapse">
            <thead>
                <tr>
                    <th className="px-5 py-3 font-normal border border-gray-700">Name</th>
                    <th className="px-5 py-3 font-normal border border-gray-700">WPM</th>
                    <th className="px-5 py-3 font-normal border border-gray-700">Accuracy</th>
                </tr>
            </thead>
            <tbody>
                {players.map((player) => (
                    <tr key={player.id} className="bg-gray-900 text-base">
                        <td className="px-5 py-3 border border-gray-800">{player.name}</td>
                        <td className="px-5 py-3 border border-gray-800">{player.wpm}</td>
                        <td className="px-5 py-3 border border-gray-800">{player.accuracy}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default Leaderboard;
