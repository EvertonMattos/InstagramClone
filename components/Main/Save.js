import React, { useState } from "react";
import { View, TextInput, Button } from "react-native";

import firebase from "firebase";
import "firebase/firestore";
import "firebase/firebase-storage";
import fetch from "node-fetch";

const Save = ({ route }) => {
  const path = `post/${
    firebase.auth().currentUser.uid
  }/${Math.random().toString(36)}`;
  const { image } = route.params;
  const [caption, setCaption] = useState("");

  const uploadImage = async () => {
    const resp = await fetch(image);
    const blob = await res.blob();

    const task = firebase.storage().ref().child(path).put(blob);
  };
  return (
    <View style={{ flex: 1 }}>
      <Image source={{ uri: image }} />
      <TextInput
        placeholder="Enter a description"
        onChangeText={(caption = setCaption)}
      />
      <Button title="Save" onPress={() => uploadImage()} />
    </View>
  );
};

export default Save;
