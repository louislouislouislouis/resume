import { View } from "@react-pdf/renderer";
import React from "react";

const LeftColumn = ({ children }: { children: React.ReactNode }) => {
  return (
    <View
      style={{
        flex: 9,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      {children}
    </View>
  );
};

export default LeftColumn;
