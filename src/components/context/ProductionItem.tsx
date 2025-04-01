import React from "react";
import { View, StyleSheet, Text, Image, TouchableOpacity } from "react-native";
import { Fontisto, Ionicons, MaterialIcons } from "@expo/vector-icons";
export const ProductionItem = ({ item, onPinToggle }) => {
  return (
    <View>
      <View style={styles.card}>
        <View style={styles.cardHeader}>
          <Text
            style={[
              styles.status,
              {
                backgroundColor: item.statusColor,
                color: item.statusTextColor,
              },
            ]}
          >
            {item.status}
          </Text>
          <TouchableOpacity onPress={() => onPinToggle(item.id)}>
            <Image
              style={{ width: 18, height: 18 }}
              source={
                item.pinned
                  ? require("../../assets/in_pin_ic.png")
                  : require("../../assets/un_pin_ic.png")
              }
            />
          </TouchableOpacity>
        </View>
        <Text style={styles.code}>{item.code}</Text>
        <Text style={styles.deadline}>Deadline: {item.deadline}</Text>
        <View style={styles.progressContainer}>
          <View
            style={[
              styles.progressBar,
              { width: "40%", backgroundColor: "#FF811A26" },
            ]}
          >
            <View
              style={[
                styles.progressBar,
                {
                  width: "50%",
                  backgroundColor: "#FF9432",
                  flexDirection: "row",
                  alignItems: "center",
                },
              ]}
            >
              <Text style={[{ color: "white", fontSize: 12, marginLeft: 10 }]}>
                50%
              </Text>
            </View>
          </View>
          <View
            style={[
              styles.progressBar,
              { width: "40%", backgroundColor: "#3EC3F733" },
            ]}
          >
            <View
              style={[
                styles.progressBar,
                {
                  width: "90%",
                  backgroundColor: "#0375F3",
                  flexDirection: "row",
                  alignItems: "center",
                },
              ]}
            >
              <Text style={[{ color: "white", fontSize: 12, marginLeft: 10 }]}>
                90%
              </Text>
            </View>
          </View>

          <Image
            style={{ width: 18, height: 18 }}
            source={require("../../assets/warning_ic.png")}
          />
        </View>
      </View>

      <View
        style={{
          width: "100%",
          backgroundColor: "#D0D5DD",
          marginBottom: 10,
          height: 2,
        }}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  card: {
    backgroundColor: "#C7DFFB36",
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    borderLeftWidth: 5,
    borderLeftColor: "#0375F3",
  },
  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  status: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
    marginBottom: 6,
    fontWeight: "bold",
    fontSize: 14,
  },
  code: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#003DA0",
    marginVertical: 6,
  },
  deadline: { fontSize: 14, color: "#667085", marginVertical: 4 },
  progressContainer: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 10,
  },
  progressBar: { height: 16, borderRadius: 10, marginRight: 5 },
});
