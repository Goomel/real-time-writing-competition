"use client";

const TypingBox = ({ currentSentence, timeLeft }: { currentSentence: string; timeLeft: number }) => {
    return (
        <div>
            <p className="text-base font-semibold mb-4">{currentSentence}</p>
            <span>Time left: {timeLeft}s</span>

            <input type="text" />
        </div>
    );
};

export default TypingBox;
