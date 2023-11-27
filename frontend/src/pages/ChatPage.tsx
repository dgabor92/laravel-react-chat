import ChatRooms from "../components/ChatRooms";
import Dashboard from "../components/Dashboard";
import Messages from "../components/Messages";

const ChatPage = () => {
  return (
    <Dashboard>
      <div className="flex">
        <div className="w-1/3  overflow-y-auto">
          <ChatRooms />
        </div>
        <div className="w-2/3 overflow-y-auto">
          <Messages />
        </div>
      </div>
    </Dashboard>
  );
};

export default ChatPage;
