import React from "react";
import { Layer, Rect, Text } from "react-konva";

interface Props {
  x?: number;
  y?: number;
  width?: number;
  onClick?: () => void;
  anyRectProp?: any;
  anyTextProp?: any;
}

const Button: React.FC<Props> = ({
  x = 0,
  y = 0,
  width = 0,
  anyRectProp,
  anyTextProp,
  onClick,
}) => {
  return (
    <Layer onClick={onClick}>
      <Rect
        x={x}
        y={y}
        width={width}
        height={anyTextProp.fontSize + anyTextProp.padding * 2}
        fill={anyRectProp.fill ? anyRectProp.fill : null}
        shadowBlur={anyRectProp.shadowBlur ? anyRectProp.shadowBlur : null}
        shadowColor={anyRectProp.shadowColor ? anyRectProp.shadowColor : null}
        shadowOffsetX={
          anyRectProp.shadowOffsetX ? anyRectProp.shadowOffsetX : null
        }
        shadowOffsetY={
          anyRectProp.shadowOffsetY ? anyRectProp.shadowOffsetY : null
        }
        shadowOpacity={
          anyRectProp.shadowOpacity ? anyRectProp.shadowOpacity : null
        }
        cornerRadius={
          anyRectProp.cornerRadius ? anyRectProp.cornerRadius : null
        }
      />
      <Text
        x={x}
        y={y}
        width={width}
        text={anyTextProp.text ? anyTextProp.text : null}
        fontSize={anyTextProp.fontSize ? anyTextProp.fontSize : null}
        fontFamily={anyTextProp.fontFamily ? anyTextProp.fontFamily : null}
        fill={anyTextProp.fill ? anyTextProp.fill : null}
        padding={anyTextProp.padding ? anyTextProp.padding : null}
        align={anyTextProp.align ? anyTextProp.align : null}
      />
    </Layer>
  );
};

export default Button;
