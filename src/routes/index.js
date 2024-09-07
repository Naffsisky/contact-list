import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import tw from 'twrnc';
import {Home, Tambah} from '../pages';

const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Contact List"
        component={Home}
        // options={{headerShown: false}}
        style={tw`text-center`}
        options={{
          headerTitleAlign: 'center',
          headerTitleStyle: {textAlign: 'center'},
        }}
      />
      <Stack.Screen name="Tambah" component={Tambah} />
    </Stack.Navigator>
  );
};

export default Router;
