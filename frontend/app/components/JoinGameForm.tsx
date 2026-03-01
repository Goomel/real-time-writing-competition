"use client";

const JoinGameForm = ({ handleJoin, setName, name }: { handleJoin: (e: React.SyntheticEvent) => void, setName: (name: string) => void, name: string }) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <form onSubmit={handleJoin} className="p-8 bg-gray-900 rounded-lg">
        <h2 className="text-xl mb-4 font-bold">Nickname:</h2>
          <input 
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border border-gray-500 p-2 rounded w-full mb-4 text-gray-200"
            placeholder="Type your nickname..."
          />
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded w-full">
            Start typing!
          </button>
        </form>
      </div>
    );
};

export default JoinGameForm;