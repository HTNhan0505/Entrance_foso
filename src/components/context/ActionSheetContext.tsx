// ActionSheetContext.js
import React, { createContext, useContext, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
  TextInput,
  StyleSheet,
} from "react-native";
import Modal from "react-native-modal";
import { Fontisto, Ionicons, MaterialIcons } from "@expo/vector-icons";
import { productData } from "../../data/productData";
import { statusListData } from "../../data/statusData";
import { ProductionItem } from "./ProductionItem";

const ActionSheetContext = createContext();

export const useActionSheet = () => {
  return useContext(ActionSheetContext);
};

export const ActionSheetProvider = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [actions, setActions] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [statusData, setStatusData] = useState(statusListData);

  const [productionData, setProductionData] = useState(productData);

  const onPinToggle = (id) => {
    setProductionData((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, pinned: !item.pinned } : item
      )
    );
  };

  const showActionSheet = (actionsList) => {
    setActions(actionsList);
    setIsVisible(true);
  };

  const hideActionSheet = () => {
    setIsVisible(false);
  };

  const handleSearch = (text) => {
    setSearchText(text);
  };

  const toggleStatus = (id) => {
    setStatusData((prevState) =>
      prevState.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item
      )
    );
  };

  return (
    <ActionSheetContext.Provider value={{ showActionSheet, hideActionSheet }}>
      {children}
      <Modal
        isVisible={isVisible}
        onBackdropPress={hideActionSheet}
        animationIn="slideInLeft"
        animationOut="slideOutLeft"
        useNativeDriver
        style={{ justifyContent: "flex-start", margin: 0 }}
      >
        <View style={styles.container}>
          {/* Tiêu đề Modal */}
          <Text style={styles.title}>Lệnh sản xuất</Text>

          {/* Thanh tìm kiếm */}
          <View style={styles.searchContainer}>
            <TextInput
              value={searchText}
              onChangeText={handleSearch}
              placeholder="Tìm kiếm mã lệnh sản xuất"
              placeholderTextColor="#9295A4"
              style={styles.searchInput}
            />
            <TouchableOpacity style={styles.searchButton}>
              <Ionicons name="search" size={20} color="#11315B" />
            </TouchableOpacity>
          </View>

          {/* Bộ lọc trạng thái */}
          <View style={styles.filterContainer}>
            <View style={styles.filterHeader}>
              <View style={styles.statusContent}>
                <Image
                  style={[{ width: 18, height: 18 }]}
                  source={require("../../assets/status_ic.png")}
                />

                <Text style={styles.filterTitle}>Trạng thái</Text>
              </View>

              <MaterialIcons name="arrow-drop-up" size={22} color="#9295A4" />
            </View>
            <View style={styles.statusList}>
              {statusData.map((item) => (
                <TouchableOpacity
                  key={item.id}
                  style={styles.statusItem}
                  onPress={() => toggleStatus(item.id)}
                >
                  {item.checked ? (
                    <Ionicons name="checkbox" size={18} color="#25387A" />
                  ) : (
                    <Fontisto
                      name="checkbox-passive"
                      size={18}
                      color="#25387A"
                    />
                  )}

                  <Text
                    style={[
                      styles.statusLabel,
                      { backgroundColor: item.color, color: item.colorText },
                    ]}
                  >
                    {item.label}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>

          <TouchableOpacity style={styles.unpinButton}>
            <Text style={styles.unpinText}>Bỏ ghim toàn bộ</Text>
            <Image
              style={{ width: 18, height: 18 }}
              source={require("../../assets/un_pin_section_ic.png")}
            />
          </TouchableOpacity>

          <FlatList
            showsVerticalScrollIndicator={false}
            data={productionData}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <ProductionItem item={item} onPinToggle={onPinToggle} />
            )}
            contentContainerStyle={styles.list}
          />
        </View>
      </Modal>
    </ActionSheetContext.Provider>
  );
};

const styles = StyleSheet.create({
  list: { paddingBottom: 100 },
  checkboxContainer: {
    width: 24,
    height: 24,
    borderRadius: 5, // Bo góc checkbox
    justifyContent: "center",
    borderColor: "#D0D5DD",
    alignItems: "center",
  },
  container: {
    width: "70%",
    height: "100%",
    backgroundColor: "white",
    padding: 15,
    justifyContent: "flex-start",
  },
  title: {
    fontSize: 18,
    fontWeight: "500",
    marginVertical: 20,
    color: "#25387A",
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#D0D5DD",
    overflow: "hidden",
  },
  searchInput: {
    flex: 1,
    height: 45,
    paddingLeft: 15,
    fontSize: 12,
  },
  searchButton: {
    backgroundColor: "#92BFF7",
    padding: 15,
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  filterContainer: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 10,
    marginVertical: 15,
    borderWidth: 1,
    borderColor: "#E0E0E0",
  },
  filterHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingBottom: 10,
  },
  filterTitle: {
    fontSize: 16,
    fontWeight: 400,
    marginLeft: 12,
    color: "#3A3E4C",
  },
  statusContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  statusList: {
    paddingVertical: 10,
  },
  statusItem: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
  },
  statusLabel: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
    fontWeight: "bold",
    marginLeft: 10,
  },
  unpinButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderRadius: 10,
    marginTop: 10,
    backgroundColor: "#fff",
    marginVertical: 15,
    borderWidth: 1,
    borderColor: "#E0E0E0",
  },
  unpinText: {
    fontSize: 14,
    color: "#25387A",
    fontWeight: "bold",
  },
});
