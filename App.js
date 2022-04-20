import { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './components/Home';
import Desc from './components/Desc';
import Logo from './components/Logo';
import styleConstant from './styleConstants';
import { FontAwesome } from '@expo/vector-icons';

function HomeScreen({ navigation }) {
  return(
    <Home />
  )
}

function DescScreen ({route, navigation}) {
  const { launchpad, name } = route.params;
  return (
    <Desc launchpad ={launchpad} name={name} />
  )
}

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
         name="Home"
         component={HomeScreen}
         options={({ navigation, route }) => ({
           headerTitle: props => <Logo />,
           headerTitleAlign: 'center',
           headerLeft: props => <FontAwesome name="space-shuttle" size={30} style={{ color: "#fff" }} />,
           headerTintColor: '#fff',
           headerStyle: {
            backgroundColor: '#3026a9',
           }
         })} />
        <Stack.Screen
         name="Description"
         component={DescScreen}
         options={
          ({ route }) => ({ 
            title: route.params.name,
            headerStyle: {
              backgroundColor: "#3026a9"
            },
            headerTintColor: "#fff",
          }) 
         } />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
