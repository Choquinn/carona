import React from "react";
import { Image } from "react-native";

interface Props {
  backgroundImage: string;
  children?: React.ReactNode;
  height: string;
  onClick: () => void;
  radius: string;
  width: string;
  alignSelf: string;
  marginTop: string;
  marginBottom: string;
}

const Button: React.FC<Props> = ({ 
    backgroundImage,
    children,
    height,
    onClick, 
    radius,
    width,
    alignSelf,
    marginTop,
    marginBottom
  }) => { 
  return (
    <>
    <Image source={ require(`../assets/${backgroundImage}`)} />
    <button 
      onClick={onClick}
      style={{
          backgroundImage,
          borderRadius: radius,
          height,
          width,
          alignSelf,
          marginTop,
          marginBottom
        }}
        >
    {children}
    </button>
        </>
  );
}

export default Button;