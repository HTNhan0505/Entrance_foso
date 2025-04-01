import React, { useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  Dimensions,
} from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
} from "react-native-reanimated";

const SCREEN_WIDTH = Dimensions.get("window").width;

interface LeftActionSheetProps {
  visible: boolean;
  onClose: () => void;
}

const LeftActionSheet: React.FC<LeftActionSheetProps> = ({
  visible,
  onClose,
}) => {
  const translateX = useSharedValue(-SCREEN_WIDTH); // Bắt đầu ngoài màn hình

  useEffect(() => {
    if (visible) {
      translateX.value = withSpring(-SCREEN_WIDTH / 2); // Hiện ra giữa màn hình
    } else {
      translateX.value = withSpring(-SCREEN_WIDTH); // Trở về ngoài màn hình
    }
  }, [visible]);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: translateX.value }],
  }));

  return (
    <View
      style={[
        styles.overlay,
        visible ? { display: "flex" } : { display: "none" },
      ]}
    >
      {/* Nhấn ra ngoài để đóng */}
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={styles.outsideArea} />
      </TouchableWithoutFeedback>

      {/* Animated View cho Action Sheet */}
      <Animated.View style={[styles.sheet, animatedStyle]}>
        <Text style={styles.title}>Trạng thái</Text>
        <View style={styles.item}>
          <Text>✅ Chưa sản xuất</Text>
        </View>
        <View style={styles.item}>
          <Text>🔵 Đang sản xuất</Text>
        </View>
        <View style={styles.item}>
          <Text>🟢 Hoàn thành</Text>
        </View>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    flexDirection: "row",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  outsideArea: {
    flex: 1, // Click ra ngoài để đóng
  },
  sheet: {
    width: SCREEN_WIDTH / 2, // Chiếm 50% màn hình
    backgroundColor: "white",
    height: "100%",
    padding: 20,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  item: {
    paddingVertical: 10,
  },
});

export default LeftActionSheet;
