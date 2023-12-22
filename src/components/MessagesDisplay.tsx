import { FC } from "react";
import MessageDisplay from "./MessageDisplay";

interface MessagesDisplayProps {}

const MessagesDisplay: FC<MessagesDisplayProps> = () => {
  return (
    <div className="messages-display">
      <MessageDisplay />
      <MessageDisplay />
      <MessageDisplay />
      <MessageDisplay />
      <MessageDisplay />
      <MessageDisplay />
      <MessageDisplay />
    </div>
  );
};

export default MessagesDisplay;
