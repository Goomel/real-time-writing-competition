"use client";

import { useEffect, useState } from "react";

const TypingBox = ({ currentSentence, timeLeft }: { currentSentence: string; timeLeft: number }) => {
    const [inputValue, setInputValue] = useState("");

    useEffect(() => {
        if (timeLeft === 0) {
            setInputValue("");
        }
    }, [timeLeft]);

    return (
        <div className="p-8 bg-gray-900 rounded-lg mb-4 lg:mb-6">
            <div className="flex flex-col gap-5">
                <span className="self-end">Time left: {timeLeft}s</span>

                <p className="text-lg font-semibold mb-4">
                    {currentSentence.split("").map((char, index) => {
                        let color = "text-gray-100";
                        if (index < inputValue.length) {
                            color = char === inputValue[index] ? "text-green-500" : "text-red-600";
                        }
                        return (
                            <span key={index} className={color}>
                                {char}
                            </span>
                        );
                    })}
                </p>
            </div>

            <input
                className="border border-gray-500 p-2 rounded w-full mb-4 text-gray-200"
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
        </div>
    );
};

export default TypingBox;
