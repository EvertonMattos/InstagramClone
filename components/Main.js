import React, { useEffect } from "react";
import { View, Text } from "react-native";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchUser } from "../redux/actions";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import Feed from "./Main/Feed";
import Profile from "./Main/Profile";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { event } from "react-native-reanimated";
const Tab = createMaterialBottomTabNavigator();
const Null = () => {
  return null;
};
const Main = (props) => {
  useEffect(() => {
    fetchUser();
  }, []);
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      backBehavior="initialRoute"
      labeled={false}
    >
      <Tab.Screen
        name="feed"
        component={Feed}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="newspaper-variant" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="AddContainer"
        component={Null}
        listeners={({ navigation }) => ({
          tabPress: (e) => {
            e.preventDefault();
            navigation.navigate("Add");
          },
        })}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="plus-box-outline" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="account-circle" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
const mapDispatchProps = (dispatch) => {
  bindActionCreators({ fetchUser }, dispatch);
};
export default connect(null, mapDispatchProps)(Main);
