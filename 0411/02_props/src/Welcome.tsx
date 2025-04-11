import React, { CSSProperties, ReactNode } from "react";

interface WelcomeProps {
  name: String;
  style?: CSSProperties;
  children?: ReactNode;
}

const Welcome = ({ name, style, children }: WelcomeProps) => {
  return (
    <div>
      <h1 style={style}>Hello, {name}</h1>
      <h2>content: {children}</h2>{" "}
    </div>
  );
};

export default Welcome;
