import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import Content from "./Content";

const AppGradient = ({
  children,
  colors,
}: {
  children: any;
  colors: string[];
}) => {
  return (
    <LinearGradient colors={colors} style={{ height: "100%" }}>
      <Content>{children}</Content>
    </LinearGradient>
  );
};

export default AppGradient;