import { FC } from "react";
import MessagesDisplay from "./components/MessagesDisplay";
import CodeDisplay from "./components/CodeDisplay";

interface AppProps {}

const App: FC<AppProps> = () => {
  return (
    <div className="app">
      <MessagesDisplay />
      <input type="text" />
      <CodeDisplay />
      <div className="button-container">
        <button id="get-query">Get Query!</button>
        <button id="clear-chat">Clear Chat</button>
      </div>
    </div>
  );
};

export default App;
