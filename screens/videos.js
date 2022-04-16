import React from "react";
import {Text,View,StyleSheet,TouchableOpacity,ScrollView,Dimensions} from "react-native";
import Midcard from "../components/midcard";
import Lastcard from "../components/lastcard";
import {Video} from "expo-av";
const sh = Dimensions.get("window").height;
const sw = Dimensions.get("window").width;


export default class Videos extends React.Component {

    static navigationOptions = {
        headerShown: false,
      };

   
    
    render() {
        const {navigation} = this.props;
        const midmovie = navigation.getParam('mid');
        const midcarddata = navigation.getParam('middata');
        const lastcarddata = navigation.getParam('lastdata');

        
        

        
        return(

<View style={[styles.container,{width:sw,height:sh}]}>
 <View style={styles.videoContainer}>
     <Video source={{
     uri:midmovie.video


     }}
     
     shouldPlay
     resizeMode ="cover"
     useNativeControls
     style={{width:"100%",height:"100%" }}
     />



   


 </View>
 <View style={styles.textbox}>
<View style={styles.textContainer1}>
 <Text style={styles.todaym}>Movie: {midmovie.movie}</Text>
 </View>
 </View>
 
 <ScrollView vertical={true} showsVerticalScrollIndicator={false}>
 <Text style={styles.today}>Movies Today</Text>
 <View style={styles.midcard}>

     <ScrollView horizontal={true}  showsHorizontalScrollIndicator={false}> 
        {
       midcarddata.map((mdata, index)=>(
           <TouchableOpacity key={index}  onPress={()=>{this.props.navigation.navigate("Video",
           {
            mid:mdata,
            middata:midcarddata,
            lastdata:lastcarddata,
           })}}>
           <Midcard photo={mdata.image} moviename={mdata.movie} />
           </TouchableOpacity>
       ))

        }
         </ScrollView>
         

     </View>
     <Text style={styles.today}>Movies Tomorrow</Text>
     <View style={styles.lastcard}>

<ScrollView horizontal={true}  showsHorizontalScrollIndicator={false}> 
  {
  lastcarddata.map((data2,index)=>(
   <TouchableOpacity key={index}  onPress={()=>{this.props.navigation.navigate("Video",{
    mid:data2,
    middata:midcarddata,
    lastdata:lastcarddata,


   });}}>
      <Lastcard key={index} img={data2.image}  moviename={data2.movie}/>
      </TouchableOpacity>
  ))



  }
  

    </ScrollView>
    

</View>






</ScrollView>

</View>




        );
    }
}
const styles = StyleSheet.create({

container: {
    flex: 1,
    

},
videoContainer:{
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

textbox:{alignItems: 'baseline'},
textContainer1:{
    marginTop:10,
    backgroundColor:"#7E8274",
    borderRadius:15
},



midcard:{
    marginTop:10},
lastcard:{
        marginTop:10,
  
    },
    today:{
        fontSize:20,
        fontWeight:"bold",
        marginLeft:10,top:5
    },


})



