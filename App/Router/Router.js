import React, { Component } from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';



import Inicio from '../Components/Inicio';
import Monitoreo from '../Components/Monitoreo';
import Login from '../Components/Login';
import SideBar from '../Components/SideBar';
import HomeScreen from "../Components/HomeScreen";
import Control from "../Components/Control";
import Responsables from '../Components/Responsables';
import SplashScreen from '../Components/SplashScreeen';
//here i did a stack 
 const  MainNavigator =  createDrawerNavigator ({
        HomeScreen: { screen: HomeScreen }, 
        Inicio: { screen: Inicio },
        Monitoreo: { screen: Monitoreo},
        Control: { screen: Control},
        Responsables: { screen: Responsables},



    },
    {
        contentComponent: props => <SideBar {...props} />,
       
    }
   
); 
/* const interiro= new createStackNavigator({
  monitoreo:{screen:monitoreo}
}); */
//esta es para que inicie en el Login
const Aplication=new createStackNavigator({
Splash: SplashScreen, //aca inicia el puto splash!
Home:{screen:Login},
//Login:{ screen: Login },

Profile:{screen:MainNavigator},
},
{
  headerMode: 'none',
  navigationOptions: {
  headerVisible: false,
  }
 });
const App = createAppContainer(Aplication); 

export default App;
