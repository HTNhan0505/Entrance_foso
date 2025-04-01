import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { tabData } from "../data/tabData";
import { Text, Image, View } from "react-native";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            backgroundColor: "#fff",
            borderTopWidth: 0,
            height: 60,
            paddingBottom: 5,
          },
          tabBarLabelStyle: {
            fontSize: 12,
            fontWeight: "500",
          },
        }}
      >
        {tabData.map((tab) => (
          <Tab.Screen
            key={tab.name}
            name={tab.name}
            component={tab.component}
            options={{
              tabBarIcon: ({ focused }) => (
                <View style={{ alignItems: "center" }}>
                  <Image
                    source={tab.icon}
                    style={{
                      tintColor: focused ? "#007AFF" : "#A0A0A0",
                      width: 24,
                      height: 24,
                      resizeMode: "contain",
                    }}
                  />
                </View>
              ),
              tabBarLabel: ({ focused }) => (
                <Text
                  style={{
                    color: focused ? "#007AFF" : "#A0A0A0",
                    fontSize: 12,
                  }}
                >
                  {tab.name}
                </Text>
              ),
            }}
          />
        ))}
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default BottomTabNavigator;
