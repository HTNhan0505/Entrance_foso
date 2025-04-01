import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import EmptyState from "../components/EmptyState";
import LeftActionSheet from "../components/LeftActionSheet";

const ProductionOrderScreen = () => {
  
  return (
    <View style={styles.container}>
      <EmptyState />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F9FA",
  },
});

export default ProductionOrderScreen;
