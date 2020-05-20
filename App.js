import React, {Fragment} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';


import AppNavigator from './App/Router/Router';
import { tsConstructorType } from '@babel/types';
const App = () => {
  return (
   <AppNavigator></AppNavigator>
  );
};



export default App;

