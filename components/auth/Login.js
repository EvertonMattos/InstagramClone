import React, { useState } from "react";
import firebase from "firebase";
import { View, TextInput, Button } from "react-native";

const Register = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async () => {
    const response = await firebase
      .auth()
      .signInWithEmailAndPassword(email, password);
    console.log(response);
  };
  return (
    <View>
      <TextInput placeholder="E-mail" onChangeText={setEmail} />
      <TextInput
        placeholder="Senha"
        secureTextEntry
        onChangeText={setPassword}
      />
      <Button title="Entrar" onPress={handleSubmit} />
    </View>
  );
};

export default Register;
