import React, { useState } from "react";
import firebase from "firebase";
import { View, TextInput, Button } from "react-native";

const Register = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async () => {
    const response = await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password);
    try {
      await firebase
        .firestore()
        .collection("users")
        .doc(firebase.auth().currentUser.uid)
        .set({ name, email });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <View>
      <TextInput placeholder="name" onChangeText={name} />
      <TextInput placeholder="E-mail" onChangeText={setEmail} />
      <TextInput
        placeholder="Senha"
        secureTextEntry
        onChangeText={setPassword}
      />
      <Button title="Criar conta" onPress={handleSubmit} />
    </View>
  );
};

export default Register;
