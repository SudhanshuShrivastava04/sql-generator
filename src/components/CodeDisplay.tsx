import { FC } from "react";

interface CodeDisplayProps {}

const CodeDisplay: FC<CodeDisplayProps> = () => {
  return (
    <div className="code-display">
      <div className="buttons">
        <div className="button first"></div>
        <div className="button middle"></div>
        <div className="button last"></div>
      </div>
      <div className="code-output">
        <p></p>
      </div>
    </div>
  );
};

export default CodeDisplay;
