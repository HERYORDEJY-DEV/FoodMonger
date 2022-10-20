import * as React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import FoodInfo from '@screens/Home/FoodInfo';
import Search from '@screens/Home/Search';
import CheckOut from '../screens/Cart/CheckOut';
import OrderSuccesful from '../screens/Cart/OrderSuccesful';
import AboutApp from '../screens/Settings/AboutApp';
import AccountSettings from '../screens/Settings/AccountSettings';
import FAQ from '../screens/Settings/FAQ';
import OrderHistory from '../screens/Settings/OrderHistory';
import { BottomTabNavigation } from './TabNavigation';
import FoodInfo2 from '@screens/Home/FoodInfo2';

const StackNavigator = createStackNavigator();

export function StackNavigation() {
  return (
    <StackNavigator.Navigator
      initialRouteName={'Home'}
      screenOptions={{ headerShown: false }}
    >
      <StackNavigator.Screen
        name={'Home'}
        component={BottomTabNavigation}
      />
      <StackNavigator.Screen name={'Search'} component={Search} />
      <StackNavigator.Screen name={'FoodInfo'} component={FoodInfo} />
      <StackNavigator.Screen
        name={'FoodInfo2'}
        component={FoodInfo2}
      />

      {/*  Cart Stacks*/}
      <StackNavigator.Screen name={'CheckOut'} component={CheckOut} />
      <StackNavigator.Screen
        name={'OrderSuccessful'}
        component={OrderSuccesful}
      />

      {/*  Settings Stack*/}
      <StackNavigator.Screen
        name={'AccountSettings'}
        component={AccountSettings}
      />
      <StackNavigator.Screen
        name={'OrderHistory'}
        component={OrderHistory}
      />
      <StackNavigator.Screen name={'AboutApp'} component={AboutApp} />
      <StackNavigator.Screen name={'FAQ'} component={FAQ} />
    </StackNavigator.Navigator>
  );
}
