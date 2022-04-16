import React from 'react';
import{View,Text,StyleSheet,Animated,Dimensions} from "react-native";
import LottieView from "lottie-react-native";
const sh = Dimensions.get("window").height;
const sw = Dimensions.get("window").width;
export default class Loading extends React.Component{
    state= {
 
   top :new Animated.Value(0),
  opacity:new Animated.Value(1)

    }

 componentDidMount(){
    
 }

 componentDidUpdate(){
     if(this.props.isload){
         Animated.timing(this.state.top,{toValue:0,duration:0,useNativeDriver: false}).start();
         Animated.timing(this.state.opacity,{toValue:1,useNativeDriver:false}).start(); 
         this.animation.play();
     }
     else{
        Animated.timing(this.state.top,{toValue:sh,duration:0,useNativeDriver: false}).start();
        Animated.timing(this.state.opacity,{toValue:0,useNativeDriver: false}).start();


     }
 }



    render() {
        return (

            <Animated.View style={[styles.loadcontainer,{top : this.state.top,opacity : this.state.opacity,width:sw,height:sh}]} >

     <LottieView source={require("../assets/loading.json")}
     autoPlay={false}
     loop
     ref={animation=>{

        this.animation = animation;
     }
    
    }
     />


       </Animated.View>
        )
    }
}


const styles = StyleSheet.create({

loadcontainer:{
    position: 'absolute',
    width: '100%',
    height: '100%',
    top:0,
    left:0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.9)'
}

})