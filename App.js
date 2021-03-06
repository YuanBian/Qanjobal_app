import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Button, Menu, Divider, Provider } from 'react-native-paper';
import { SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// importing screen components
import { WelcomeScreen } from './screens/WelcomeScreen';
import { TopicScreen } from './screens/TopicScreen';
import { GlossaryScreen } from './screens/GlossaryScreen';
import { TransitionScreen } from './screens/TransitionScreen';
import { AboutScreen } from './screens/AboutScreen';

const App = () => {
  //const
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='WelcomeScreen'
          component={WelcomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='TransitionScreen'
          component={TransitionScreen}
          options={{ headerLeft: (props) => null, headerShown: false }}
        />
        <Stack.Screen
          name='AboutScreen'
          component={AboutScreen}
          options={{ headerShown: true }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  welcomeContainter: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
