import React from "react";
import {View,Image,StyleSheet,Text} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import{Ionicons}from '@expo/vector-icons';


export  default class Midcard extends React.Component {
    render() {
        return(
            <View style={styles.main}>
             
             <Image style={styles.midimage} source={{uri:this.props.photo}}/>
             <LinearGradient colors={['rgba(0,0,0,0)','rgba(0,0,0,1)']}
           style={{
               position:'absolute',
               width:'100%',
               height:"55%",
               top:70,
            

              
               
           }} />
           <Ionicons name="play-sharp" size={32} color="white" style={styles.iconplay} />
          
             
             <Text style={styles.mname}>{this.props.moviename}</Text>

            </View>

            
        );
    }
}


const styles = StyleSheet.create({
    main:{
        width:230,
        height:130,
       
        backgroundColor:"green",
        marginLeft:5,
        borderRadius:10,
        overflow:"hidden"
        
        


    },
    midimage:{
        width:"100%",
        height:"100%",
    },
    mname:{
        position:"absolute",
        color:"white",
        fontWeight:"bold",
        fontSize:20,
        bottom:10,
        left:40,


    },
    iconplay:{
        position:"absolute",
        bottom:8
    }


})