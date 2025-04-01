import React from "react";
import { SafeAreaView } from "react-native";
import BottomTabNavigator from "./src/navigation/BottomTabNavigator";
import Header from "./src/components/Header";
import { ActionSheetProvider } from "./src/components/context/ActionSheetContext";

const App = () => {
  return (
    <ActionSheetProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <Header />
        <BottomTabNavigator />
      </SafeAreaView>
    </ActionSheetProvider>
  );
};

export default App;
