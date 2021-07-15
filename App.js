import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import firebase from "firebase";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Landing from "./components/auth/Landing";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import Main from "./components/Main";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import rootReducers from "./redux/reducers";
import thunk from "redux-thunk";

const store = createStore(rootReducers, applyMiddleware(thunk));
const firebaseConfig = {
  apiKey: "AIzaSyASoTHIk0C12rKbK34YpuRgC-UXkUqhiHs",
  authDomain: "imagincran.firebaseapp.com",
  projectId: "imagincran",
  storageBucket: "imagincran.appspot.com",
  messagingSenderId: "741457424442",
  appId: "1:741457424442:web:14625897ca8141c3f70503",
};
if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}
const Stack = createStackNavigator();

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isLogoutIn, setIsLogoutIn] = useState(false);
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (!user) {
        setIsLogoutIn(false);
      } else {
        setIsLogoutIn(true);
      }
      setIsLoading(false);
    });
  }, []);
  const Loading = () => (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Loading</Text>
    </View>
  );
  const Lougout = () => (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Landing"
          component={Landing}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
  );
  const LoggendIn = () => (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Main"
            component={Main}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
  if (isLoading) {
    return <Loading />;
  }
  if (isLogoutIn) {
    return <LoggendIn />;
  }
  return <Lougout />;
};

export default App;
