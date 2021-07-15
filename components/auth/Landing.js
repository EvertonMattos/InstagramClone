import React from "react";
import { View, Text, Button } from "react-native";
const Landing = ({ navigation }) => (
  <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
    <Text style={{ marginBottom: "2rem" }}>HelloW Navigate</Text>
    <Button
      title="Register"
      onPress={() => navigation.navigate("Register")}
    ></Button>
    <Button title="Login" onPress={() => navigation.navigate("Login")}></Button>
  </View>
);

export default Landing;
