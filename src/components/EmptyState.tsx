import React, { useState } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import LeftActionSheet from "./LeftActionSheet";
import { useActionSheet } from "./context/ActionSheetContext";
const EmptyState = () => {
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
    <View style={styles.container}>
      <View style={styles.imageContent}>
        <Image
          source={require("../assets/empty_product_image.png")}
          style={styles.image}
        />
      </View>
      <Text style={styles.text}>Chưa có Lệnh sản xuất.</Text>
      <TouchableOpacity style={styles.button} onPress={handleShowActionSheet}>
        <Image source={require("../assets/pin_ic.png")} style={styles.pinIc} />
        <Text style={styles.buttonText}> Bắt đầu ghim lệnh ngay</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  imageContent: {
    width: 400,
    height: 250,
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  pinIc: {
    width: 16,
    height: 18,
    marginHorizontal: 10,
    resizeMode: "cover",
  },
  text: {
    fontSize: 18,
    color: "#11315B",
    margin: 20,
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#0375F3",
    paddingVertical: 14,
    paddingHorizontal: 22,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#0375F3",
    shadowColor: "#101828",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05, // 5% = 0.05 trong React Native
    shadowRadius: 2,
    elevation: 1, // Dành cho Android
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: 500,
  },
});

export default EmptyState;
