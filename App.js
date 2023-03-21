import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { UserRegistration } from "./app/screens/UserRegistration";
import { WelcomeScreen } from "./app/screens/WelcomeScreen";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <>
      <StatusBar />
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="UserRegistration"
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="UserRegistration" component={UserRegistration} />
          <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
