import * as React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from './src/screens/HomeScreen/HomeScreen';
import InitialScreen from './src/screens/InitialScreen/InitialScreen';

const Tab = createBottomTabNavigator();

const SplashScreen = createStackNavigator();

function SplashStack() {
  return (
    <SplashScreen.Navigator headerMode="none">
      <SplashScreen.Screen name="Splash" component={InitialScreen} />
      <SplashScreen.Screen
        options={{gestureEnabled: false}}
        name="Home"
        component={HomeTab}
      />
    </SplashScreen.Navigator>
  );
}

function HomeTab() {
  return (
    <Tab.Navigator
      headerMode={'none'}
      tabBarOptions={{
        activeTintColor: 'white',
        // activeBackgroundColor: 'red',
        tabStyle: {backgroundColor: '#002B52'},
      }}>
      <Tab.Screen name="Home" component={HomeScreen} />
    </Tab.Navigator>
  );
}

function App() {
  // StatusBar.setBarStyle('light-content', true);
  return (
    <NavigationContainer>
      <SplashStack />
    </NavigationContainer>
  );
}

export default App;
