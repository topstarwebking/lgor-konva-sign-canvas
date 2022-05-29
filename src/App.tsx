import React from "react";
import { Stage } from "react-konva";
import Background from "./components/background";
import SignInPanel from "./components/signInPanel";

const App: React.FC = () => {
  return (
    <>
      <Stage width={window.innerWidth} height={window.innerHeight}>
        <Background />
        <SignInPanel />
      </Stage>
    </>
  );
};

export default App;
