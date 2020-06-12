import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import Signin from '../pages/Signin';

const AuthStack = createStackNavigator();

const AuthRoutes: React.FC = () => (
  <AuthStack.Navigator>
    <AuthStack.Screen name="SignIn" component={Signin} />
  </AuthStack.Navigator>
);

export default AuthRoutes;
