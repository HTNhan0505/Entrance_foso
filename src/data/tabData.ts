// src/config/tabData.ts
import GanChartScreen from "../screens/GantChartScreen";
import HomeScreen from "../screens/HomeScreen";
import OrderScreen from "../screens/OrderScreen";
import ProductionOrderScreen from "../screens/ProductionOrderScreen";
import SeemoreScreen from "../screens/SeemoreScreen";

export const tabData = [
  {
    name: "Tổng quan",
    component: HomeScreen,
    icon: require("../assets/group_ic.png"),
  },
  {
    name: "Đơn hàng",
    component: OrderScreen,
    icon: require("../assets/order_ic.png"),
  },
  {
    name: "Sơ đồ Gantt",
    component: GanChartScreen,
    icon: require("../assets/gant_chart_ic.png"),
  },
  {
    name: "Lệnh SX",
    component: ProductionOrderScreen,
    icon: require("../assets/product_ic.png"),
  },
  {
    name: "Xem thêm",
    component: SeemoreScreen,
    icon: require("../assets/see_more_ic.png"),
  },
];
