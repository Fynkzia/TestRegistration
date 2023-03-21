import React, {FC, ReactElement, useEffect, useState} from 'react';
import {Text, SafeAreaView, Button, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';

export const WelcomeScreen = ({ route })  => {
  const { username } = route.params;
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <Text>{`Hello ${username}!`}</Text>
      <Button title="Go back" onPress={() => navigation.navigate('UserRegistration', {
        username : '',
        password : '',
      })} />
    </SafeAreaView>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
});