import React, { useState } from "react";

const ChatRooms = () => {
  const [chats, setChats] = useState([]); // Példa: chat-ek tárolására

  const handleCreateChat = () => {
    // Logika a chat létrehozására - példa:
    const newChat = { id: chats.length + 1, name: `Chat ${chats.length + 1}` };
    setChats([...chats, newChat]);
  };

  return (
    <div className="w-full h-fullp-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-bold">ChatRooms</h2>
        <button
          onClick={handleCreateChat}
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
        >
          Create new Chat
        </button>
      </div>
      <div className="h-full overflow-y-auto">
        {chats.map((chat) => (
          <div key={chat.id} className="border-b py-2">
            {chat.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChatRooms;
