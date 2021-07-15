import React, { useEffect } from "react";
import { View, Text } from "react-native";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchUser } from "../redux/actions";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Feed from "./Main/Feed";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
const Tab = createBottomTabNavigator();
const Main = (props) => {
  useEffect(() => {
    fetchUser();
  }, []);
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="feed"
        component={Feed}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="newspaper-variant" color={color} size={26} />
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
