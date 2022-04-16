import React from "react";
import  {View,Text,StyleSheet,Dimensions} from "react-native";
import {Video} from "expo-av";

const sh = Dimensions.get("window").height;
const sw = Dimensions.get("window").width;


export default class Evideos extends React.Component {


    
            
    
   
    static navigationOptions = {
        headerShown: false,
      };
      
  
    render() {


        const {navigation} = this.props;
        const movies = navigation.getParam('moviedata');
       
        

        return (
            <View style={[styles.container,{width:sw,height:sh}]}>
         <View style= {styles.video}>
         <Video source={{
          uri:movies.video



     }}
     
     shouldPlay
     resizeMode ="cover"
     useNativeControls
     style={{width:"100%",height:"100%" }}
     />




             
             
              </View>
              <View style={styles.textbox}>
              <View style={styles.textContainer}>

              <Text style={styles.todaym}>Movie: {movies.movie}</Text>
            </View>
            </View>
            <View style={styles.ads}>

              <Text style={styles.mask}>
                  Use mask in Public places
              </Text>
              <Text style={styles.mask1}>
                  For ads
              </Text>

            </View>
           

                </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        
       
    },
    video:{
        position:"absolute",
        width: '100%',
        height: 215,
        backgroundColor:"black"

    },
    todaym:{
        color:"black",
     
        fontSize:20,
        fontWeight:"bold",
        paddingLeft:10,
        paddingRight:20

    
      
    
    },
    textbox:{ alignItems: 'baseline'
    },
    textContainer:{
        marginTop:230,
        backgroundColor:"#7E8274",
        borderRadius:15
        

    },
    
    ads:{
          position:"absolute",
      
        marginTop:300,
        width:"90%",
        height:200,
        backgroundColor:"#49EBE3",
        left:20
        
    },
    mask:{position:"absolute",
fontWeight:"bold",
fontSize:30,
marginLeft:10

},
mask1:{
    position:"absolute",
fontWeight:"bold",
fontSize:30,
marginLeft:10,
top:60,
left:120


}
})