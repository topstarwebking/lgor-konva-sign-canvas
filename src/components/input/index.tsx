import React from "react";
import { Layer, Rect, Text } from "react-konva";

interface Props {
  x?: number;
  y?: number;
  width?: number;
  text?: string;
  onClick?: () => void;
  rectProp?: any;
  textProp?: any;
}

const Input: React.FC<Props> = ({
  x = 0,
  y = 0,
  width = 0,
  text = "",
  rectProp,
  textProp,
  onClick,
}) => {
  return (
    <Layer onClick={onClick}>
      <Rect
        x={x}
        y={y}
        width={width}
        height={textProp.fontSize + textProp.padding * 2}
        fill={rectProp.fill ? rectProp.fill : null}
        stroke={rectProp.stroke ? rectProp.stroke : null}
        strokeWidth={rectProp.strokeWidth ? rectProp.strokeWidth : null}
        shadowBlur={rectProp.shadowBlur ? rectProp.shadowBlur : null}
        shadowColor={rectProp.shadowColor ? rectProp.shadowColor : null}
        shadowOffsetX={rectProp.shadowOffsetX ? rectProp.shadowOffsetX : null}
        shadowOffsetY={rectProp.shadowOffsetY ? rectProp.shadowOffsetY : null}
        shadowOpacity={rectProp.shadowOpacity ? rectProp.shadowOpacity : null}
        cornerRadius={rectProp.cornerRadius ? rectProp.cornerRadius : null}
      />
      <Text
        x={x}
        y={y}
        width={width}
        text={text}
        fontSize={textProp.fontSize ? textProp.fontSize : null}
        fontFamily={textProp.fontFamily ? textProp.fontFamily : null}
        fill={textProp.fill ? textProp.fill : null}
        padding={textProp.padding ? textProp.padding : null}
        align="left"
      />
    </Layer>
  );
};

export default Input;
