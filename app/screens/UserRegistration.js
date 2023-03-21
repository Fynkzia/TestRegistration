import React, { useEffect, useState } from "react";
import { Button, StyleSheet, TextInput, SafeAreaView, Keyboard, Alert, TouchableWithoutFeedback} from "react-native";
import {useNavigation} from '@react-navigation/native';

export const UserRegistration = ({ route }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();

  useEffect(() => {
    if (route.params) {
      setUsername(route.params.username);
      setPassword(route.params.password);
    }
  }, [route.params]);

  tryLogin = () => {
    if (username && password) {
      return (navigation.navigate('WelcomeScreen', {
        username,
      }))
    }

    return Alert.alert('Error!', 'Username or Password can\'t be empty');
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <SafeAreaView style={styles.container}>
        <TextInput
          style={styles.input}
          value={username}
          placeholder={"Username"}
          onChangeText={(text) => setUsername(text)}
          autoCapitalize={"none"}
        />
        <TextInput
          style={styles.input}
          value={password}
          placeholder={"Password"}
          secureTextEntry
          onChangeText={(text) => setPassword(text)}
        />
        <Button title={"Sign Up"} onPress={tryLogin} />
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
    justifyContent: 'center',
  },
  input: {
    height: 40,
    padding: 10,
    marginBottom: 10,
    backgroundColor: "#fff",
  },
});