import { FC } from "react";

interface MessageDisplayProps {}

const MessageDisplay: FC<MessageDisplayProps> = () => {
  return (
    <div className="message-display">
      <p id="icon">X</p>
      <p>user</p>
      <p>message</p>
    </div>
  );
};

export default MessageDisplay;
