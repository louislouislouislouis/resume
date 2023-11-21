import { Text } from "@react-pdf/renderer";
import React from "react";

const TextSection = ({ children }: { children: React.ReactNode }) => {
  return (
    <Text
      style={{
        fontSize: 8,
        marginTop: 5,
        textAlign: "justify",
        fontWeight: "ultralight",
      }}
    >
      {children}
    </Text>
  );
};

export default TextSection;
