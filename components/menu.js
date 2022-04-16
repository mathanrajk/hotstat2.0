import React from "react";
import {Text,View,StyleSheet,Animated,Image, TouchableOpacity,Dimensions,Alert} from"react-native";
import{Ionicons}from '@expo/vector-icons';
import{connect}from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";


const sw = Dimensions.get("window").width;

const sh = Dimensions.get("window").height;

function mapStateToProps(state){

return {menu : state.menu}

}
function mapDispatchToProps(dispatch) {
    return {closemenu :()=> dispatch(
      {


         type : "CLOSEMENU"
      }
    ),
    openlogin:()=> dispatch(
        {
            type:"OPENLOGIN"}
        )
        

}
    

}

class Menu extends React.Component{
state={
        top :new Animated.Value(sh)

    };

    componentDidMount(){
      
        this.menu();
        

    }
    componentDidUpdate(){
        this.menu();
    }


    menu=()=>{
        if (this.props.menu=="open"){
            Animated.spring(this.state.top,{toValue:0,useNativeDriver:false}).start();

        }
        if(this.props.menu=="close"){
            Animated.spring(this.state.top,{toValue:sh,useNativeDriver:false}).start();


        }



    };


   login=()=>{

    setTimeout(() => {
        this.props.openlogin();
    }, 500);
    this.props.closemenu(); 

       
    
        
    }

    logout=()=>{
   setTimeout(() => {
       AsyncStorage.clear();
       Alert.alert("logout successfully")
   }, 500);
   this.props.closemenu(); 



    }
    
    render(){
        return(
            <Animated.View style={[styles.container,{top : this.state.top,zIndex:100,position:"absolute",width:sw,height:sh}] }>
            
            <View style={[styles.menu,{width:sw}]}>
            

            <Text style={styles.some}>Hello User</Text> 
            <Image style={styles.profile} source={require("../assets/sk.jpg")}/>
            <TouchableOpacity onPress={this.props.closemenu}
            
            style={{
                position: "absolute",
                backgroundColor:"white",
                width:45,
                height:45,
                borderRadius:55,
               left:165,
                top:120,zIndex:300
            }}

            
            
            >
            <View style={styles.cancel}>
            <Ionicons name ="close-circle" color="black" size={40}/>
            

            </View>
            </TouchableOpacity>

          










</View>
<TouchableOpacity style={[styles.setting,{width:sw}]} onPress={()=>{this.login()}}>
<View>
<Ionicons name ="exit" color="black" size={40}/>
 <Text style={styles.account}> LogIn</Text>
</View>
</TouchableOpacity>


<TouchableOpacity style={[styles.setting1,{width:sw}]} onPress={()=>{this.logout()}}>
<View>
<Ionicons name ="exit" color="black" size={40}/>
 <Text style={styles.account1}> Logout</Text>
</View>
</TouchableOpacity>



            </Animated.View>
        );
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Menu);

const styles = StyleSheet.create({

container: {
   
    
  
    marginTop:200,
    backgroundColor:"white"
   
    
    
    
},
menu:{
    position:"absolute",
   
    height:150,
    backgroundColor:"#1F2933",
   borderTopLeftRadius:10,
   borderTopRightRadius:10,
   
    
},
 

below:{
    position: 'absolute',
    top: 200,

    
   
},
setting:{

top:180,position: 'absolute',


height:50,justifyContent: 'center',






},
account:{
    position: "absolute",
    fontSize:20,
    fontWeight:"bold",
    left:40,
    top:5

},
setting1:{

    top:250,position: 'absolute',
    
 
    height:50,justifyContent: 'center',
    
    
    
    
    
    
    },
    account1:{
        position: "absolute",
        fontSize:20,
        fontWeight:"bold",
        left:40,
        top:5
    
    },
    





some: {
    justifyContent: 'center',
    alignItems: 'center',
    
      fontSize:25,top:5,
      fontWeight:"bold",
      color:"white",
      textShadowRadius:15,
      textShadowColor:"gold",
      left:40,
      top:60
      
   
},
profile:{
    width:70,height:70,backgroundColor:"white",
    position: "absolute",
    top:50,
    borderRadius:55,
    right:10,
}, 
cancel:{
    justifyContent: 'center',
    alignItems: 'center',
    left:1
}







})

