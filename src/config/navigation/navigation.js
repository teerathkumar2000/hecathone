import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {SplashScreen, HomeScreen, Country, Map} from '../../screens';

import Menu from '../../components/myDrawer/drawer';
import {HeaderLeft} from '../../components';
const Stack = createStackNavigator();

const Drawer = createDrawerNavigator();

// HomeScreen

function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        options={{
          headerTitle: null,
          headerLeft: ({}) => <HeaderLeft />,
        }}
        component={HomeScreen}
      />
    </Stack.Navigator>
  );
}

function ProfileStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Profile"
        options={{headerShown: false}}
        component={Country}
      />
    </Stack.Navigator>
  );
}

function MapStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Map"
        options={{headerShown: false}}
        component={MapScreen}
      />
    </Stack.Navigator>
  );
}

function MyDrawer() {
  return (
    <Drawer.Navigator drawerContent={(props) => <Menu {...props} />}>
      <Drawer.Screen name="Home" component={HomeStack} />
      <Drawer.Screen name="Country" component={ProfileStack} />
      <Drawer.Screen name="Map" component={MapStack} />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Splash"
          options={{headerShown: false}}
          component={SplashScreen}
        />

        <Stack.Screen
          options={{headerShown: false}}
          name="Home"
          component={MyDrawer}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
