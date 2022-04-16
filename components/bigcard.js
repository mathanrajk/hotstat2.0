import React from "react";
import {View,Image,StyleSheet,Dimensions} from "react-native";
import Carousel from 'react-native-snap-carousel';
const sh = Dimensions.get("window").height;
const sw = Dimensions.get("window").width;

export  default class Bigcard extends React.Component {


    _renderItem( {item,index} ) {
        return(
            <View style={{borderRadius:10,overflow: 'hidden'}}>
    
             <Image source={{ uri:item.image}}  style={{width:"100%", height:180}}/>
           
    
            </View>
        )}

    render() {
        return(
            <View style={[styles.main,{width:sw}]}>
             
           
<Carousel
   ref={c => this._slider1Ref = c}
   data={this.props.data}
   renderItem = {this._renderItem}
   sliderWidth ={sw}
   itemWidth ={sw}
   inactiveSlideScale={0.8}
   inactiveSlideOpacity={1}
   inactiveSlideShift={30}
   enableMomentum ={true}
   loop={true}
   autoplay={true}
   autoplayDelay={1000}
   autoplayInterval={1500}
   Carousel layout={"stack"}
    layoutCardOffset={18}
   





/>

            </View>

            
        );
    }
}


const styles = StyleSheet.create({
    main:{
        
        height:190,
       
       
        borderRadius:10,
        overflow:"hidden"
        
        


    },
  
})