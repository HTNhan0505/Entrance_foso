import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  Image,
} from "react-native";
import LeftActionSheet from "./LeftActionSheet";
import { SafeAreaView } from "react-native-safe-area-context";
import { useActionSheet } from "./context/ActionSheetContext";

const Header = () => {
  const { showActionSheet } = useActionSheet();

  const handleShowActionSheet = () => {
    const actions = [
      { text: "Action 1", callback: () => console.log("Action 1 clicked") },
      { text: "Action 2", callback: () => console.log("Action 2 clicked") },
      { text: "Action 3", callback: () => console.log("Action 3 clicked") },
    ];
    showActionSheet(actions);
  };

  return (
    <>
      <SafeAreaView style={styles.safeArea}>
        <StatusBar barStyle="light-content" backgroundColor="#0375F3" />
        <View style={styles.container}>
          <TouchableOpacity
            style={styles.iconButton}
            onPress={handleShowActionSheet}
          >
            <Image
              source={require("../assets/menu_header_ic.png")}
              style={styles.icon}
            />
          </TouchableOpacity>

          <Text style={styles.title}>Lệnh Sản Xuất</Text>

          <TouchableOpacity style={styles.iconButton}>
            <Image
              source={require("../assets/scanner_header_ic.png")}
              style={styles.scannerIcon}
            />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: "#0375F3",
  },
  container: {
    height: 56,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: "500",
    color: "white",
  },
  iconButton: {
    padding: 8,
  },
  icon: {
    width: 18,
    height: 18,
    resizeMode: "contain",
  },
  scannerIcon: {
    width: 22,
    height: 22,
    resizeMode: "cover",
  },
});

export default Header;
