import React from "react";
import {Image,View,StyleSheet,LogBox,Text,TouchableOpacity,Dimensions} from "react-native";
import Carousel from 'react-native-snap-carousel';
import app from "../firebasedata";
const sh = Dimensions.get("window").height;
const sw = Dimensions.get("window").width;
export default class Status extends React.Component {
state={
    moviecart:[]
} 

componentDidMount(){
    LogBox.ignoreAllLogs()
this.database = app.database().ref().child('moviecart');
 this.getmoviecart(this.database)
}

getmoviecart=(mov)=>{
    mov.on("value",snap =>{
        let Bigcardfdata=[];
        snap.forEach(child =>{
            Bigcardfdata.push({
         image : child.val().image,
         movie: child.val().movie,
         video: child.val().video
         
        
        
            }
        
            );
        }
        
        );
        
        this.setState({
            moviecart:Bigcardfdata
        })
        
        
         }
         )
        

}



_renderItem =( {item,index} )=> {
    return(
       
        <View style={{borderRadius:10,overflow: 'hidden'}}>
 <TouchableOpacity key={index} onPress={()=>{this.props.navigation.push("Evideo",{
   
   moviedata:item,
   movielist : this.state.moviecart

 })}}>
         <Image source={{ uri:item.image}}  style={{width:"100%", height:350}}/>
       
       </TouchableOpacity>
        </View>
 
    )

}

    
    static navigationOptions = {
        headerShown: false,
      };
    render() {


     
        
        return(

<View style={[styles.container,{width:sw,height:sh}]}>
<View style={styles.cc}>
    <View style={styles.lable}>
   <Text style={styles.ltext}>Latest</Text>

    </View>
<Carousel
   ref={c => this._slider1Ref = c}
   data={this.state.moviecart}
   renderItem = {this._renderItem}
   sliderWidth ={400}
   itemWidth ={250}
   inactiveSlideScale={0.9}
   inactiveSlideOpacity={1}
   inactiveSlideShift={30}
   enableMomentum ={true}
   loop={true}
   autoplay={true}
   autoplayDelay={1000}
   autoplayInterval={1500}
   





/>




</View>


</View>




        );
    }
}
const styles = StyleSheet.create({

container: {


  
    alignItems: 'center',
 

},
cc:{
    marginTop:60
},
lable:{
    width:200,
    height:50,
    backgroundColor:"#4CE683",
    marginBottom:30,
    marginLeft:110, 
    borderRadius:20,
    justifyContent:"center",
    alignItems: "center",
    
    borderColor:"black",
    borderWidth:3,
   
    
},
ltext:{
    position:"absolute",
    fontSize:30,
    fontWeight:"bold",
   
    
    
    
}



})



