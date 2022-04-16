import React from "react";
import{createAppContainer} from "react-navigation";
import{createStackNavigator} from "react-navigation-stack";
import {createMaterialBottomTabNavigator}from "react-navigation-material-bottom-tabs";
import Homescreen from "./screens/homescreen";
import Videos from "./screens/videos";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Status from "./screens/Books";
import Evideos from "./screens/evideos";

const Homestack = createStackNavigator(

    {
        Home :Homescreen,
        Video:Videos
    }
);

Homestack.navigationOptions = {
    tabBarlabel:"Home",

tabBarIcon:({focused})=>(
  <Icon name="home" size={25} color={focused ? "blue" : "black"}/>
)

};



const Bookstack = createStackNavigator(
    {
        Status :Status,
        Evideo:Evideos
    }
);
Bookstack.navigationOptions = {
    tabBarlabel:"Status",
    tabBarIcon:({focused})=>(
      <Icon name="book-open-variant" size={25} color={focused ? "blue" : "black"}/>
    )
    
    
    };

const MaterialTab = createMaterialBottomTabNavigator(
    {
     Home:{screen:Homestack},
     Status:{screen:Bookstack},
    


    },
    {
  initialRouteName:"Home",
  activeColor:"blue",
  inactiveColor:"black",
  shifting:"true",
  
  barStyle:{backgroundColor:"#330A16",fontSize:20,fontWeight:"bold"}

    }
);

export default createAppContainer(MaterialTab);


