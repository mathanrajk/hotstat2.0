import React from "react";
import {View,Image,StyleSheet,Text} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import{Ionicons}from '@expo/vector-icons';


export  default class Lastcard extends React.Component {
    render() {
        return(
            <View style={styles.main}>
           
             
             <Image style={styles.lastimage} source={{uri:this.props.img}}/>
             <LinearGradient colors={['rgba(0,0,0,0)','rgba(0,0,0,1)']}
           style={{
               position:'absolute',
               width:'100%',
               height:"55%",
               top:100,

              
               
           }} />
           <Ionicons name="play-sharp" size={32} color="white"  style={styles.iconplay}  />

            <Text style={styles.lasttext}>{this.props.moviename}</Text>
            </View>

            
        );
    }
}


const styles = StyleSheet.create({
    main:{
        width:170,
        height:210,
       
        backgroundColor:"green",
        marginLeft:5,
        borderRadius:10,
        overflow:"hidden",
        
        


    },
    lastimage:{
        width:"100%",
        height:"100%",
    },
    lasttext:{
       
        color:"white",
        fontWeight:"bold",
        fontSize:20,
        position:"absolute",
        bottom:10,
        left:40,
      
    },
    iconplay:{
        position:"absolute",
        top:170,
    }

})