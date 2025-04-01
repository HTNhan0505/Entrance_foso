import { Ionicons } from "@expo/vector-icons";
import React from "react";

type Props = {
  name: string;
  focused: boolean;
};

const TabBarIcon = ({ name, focused }: Props) => {
  return (
    <Ionicons
      name={name as any}
      size={24}
      color={focused ? "#007AFF" : "black"}
    />
  );
};

export default TabBarIcon;
