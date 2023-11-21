import { View } from "@react-pdf/renderer";
import React from "react";

const RightColumn = ({ children }: { children: React.ReactNode }) => {
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        flex: 5,
      }}
    >
      {children}
    </View>
  );
};

export default RightColumn;
