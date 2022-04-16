import React from 'react';
import { StyleSheet, Text, View,ScrollView,Image,TouchableOpacity,StatusBar,LogBox,Dimensions} from 'react-native';
import Bigcard from '../components/bigcard';
import Midcard from '../components/midcard';
import Lastcard from '../components/lastcard';
import Login from '../components/login';
import app from '../firebasedata';
import Menu from '../components/menu';
import{Ionicons}from '@expo/vector-icons';
import{connect}from 'react-redux';
const sh = Dimensions.get("window").height;
const sw = Dimensions.get("window").width;


function mapStateToProps(state) {

return {open: state.menu,log:state.log}

}


function mapDispatchToProps(dispatch) {
    return {openmenu :()=> dispatch(
      {


         type : "OPENMENU"
      }
    ),


}



}






 class Homescreen extends React.Component {
    static navigationOptions = {
        headerShown: false,
      };

      state = {
      bigcarddata:[],
      midcarddata:[],
      lastcarddata:[],

      };

componentDidMount() {
LogBox.ignoreAllLogs()
this.database = app.database().ref().child('Bigcard');
 this.getBigcarddata(this.database)
 this.database = app.database().ref().child('Midcard');
 this.getmidcarddata(this.database)
 this.database = app.database().ref().child('lastcard');
 this.getlastcarddata(this.database)

}

getBigcarddata=(big)=>{

    big.on("value",snap =>{
        let Bigcardfdata=[];
        snap.forEach(child =>{
            Bigcardfdata.push({
         image : child.val().image,
         
        
        
            }
        
            );
        }
        
        );
        
        this.setState({
            bigcarddata:Bigcardfdata
        })
        
        
         }
         )
        
}


getmidcarddata =(mid)=> {
    mid.on("value",snap =>{
        let Bigcardfdata=[];
        snap.forEach(child =>{
            Bigcardfdata.push({
         image : child.val().image,
         movie:child.val().movie,
         video:child.val().video,
        
        
            }
        
            );
        }
        
        );
        
        this.setState({
           midcarddata:Bigcardfdata
        })
        
        
         }
         )



    
}

getlastcarddata=(last)=>{

    last.on("value",snap =>{
        let Bigcardfdata=[];
        snap.forEach(child =>{
            Bigcardfdata.push({
         image : child.val().image,
         movie:child.val().movie,
         video:child.val().video,
        
        
            }
        
            );
        }
        
        );
        
        this.setState({
           lastcarddata:Bigcardfdata
        })
        
        
         }
         )



}







    render() {
  return (
      
    <View style={[styles.container,{width:sw,height:sh}]}>
         
        <StatusBar  hide={true}/>
     <Menu style={{position: 'absolute'}}/>
    
     <View style={styles.bar}>
     <TouchableOpacity style={styles.menu} onPress={this.props.openmenu}

>
<Ionicons name="menu" color="white" size={32}/>
</TouchableOpacity>
         < Text style={styles.title}>Hotstar</Text>
         <Image style={styles.profile} source={require("../assets/sk.jpg")}/>

     </View>
     <ScrollView vertical={true} showsVerticalScrollIndicator={false}>
     <View style={styles.bigcard}>
     
                 <Bigcard data={this.state.bigcarddata}/>
             
         

     </View>
     <Text style={styles.today}>Movies Today</Text>
     <View style={styles.midcard}>

     <ScrollView horizontal={true}  showsHorizontalScrollIndicator={false}> 
        {
       this.state.midcarddata.map((mdata, index)=>(
           <TouchableOpacity key={index}  onPress={()=>{this.props.navigation.push("Video",{
               mid:mdata,
               middata:this.state.midcarddata,
               lastdata:this.state.lastcarddata,
           
           
           
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
      this.state.lastcarddata.map((data2,index)=>(
        <TouchableOpacity key={index}  onPress={()=>{this.props.navigation.push("Video",{
            mid:data2,
            middata:this.state.midcarddata,
            lastdata:this.state.lastcarddata,
        
        });}}>
           <Lastcard key={index} img={data2.image} moviename={data2.movie}/>
           </TouchableOpacity>
       ))



       }
       

         </ScrollView>
         

     </View>
</ScrollView>
     <Login/>
    </View>
    
  );
}
}
export default connect(mapStateToProps,mapDispatchToProps)(Homescreen);


const styles = StyleSheet.create({
  container: {
   
    flex: 1,
    backgroundColor: '#fff',
    
  },
  bar:{
    width: '100%',
    height:55,
    backgroundColor:"#1F2933"
  
  },
  bigcard:{
      flexDirection:"row",
      marginTop:5,
     

  },
  today:{
      fontSize:20,
      fontWeight:"bold",
      marginLeft:10,top:5
  },
  lastcard:{
      marginTop:10,
      

  },
  midcard:{
      marginTop:10,
      

  },
  profile:{
      position:"absolute",
      width:45,
      height:45,
      borderRadius:55,
      backgroundColor:"white",
      right:10,
      top:5,

  },
  title:{
      position:"absolute",
      fontSize:25,top:5,
      fontWeight:"bold",
      color:"white",
      textShadowRadius:15,
      textShadowColor:"gold",
      left:55,
      
      




  },
  menu:{
    position:"absolute",
    bottom:15,
    left:5
    
   
  
  }
  


});


    
