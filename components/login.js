import React from 'react';
import {View,Text,StyleSheet,TextInput,TouchableOpacity,Dimensions,Animated,TouchableWithoutFeedback,Alert} from 'react-native';
import Loading from './loading';
import AsyncStorage from "@react-native-async-storage/async-storage";
import Ok from './ok';
import {connect} from "react-redux";
import app from '../firebasedata';






function mapStateToProps(state){
    return {menu:state.menu};
}


function mapDispatchToProps(dispatch) {

return{ closelogin:()=>
 dispatch({
     type: 'CLOSELOGIN',
 }),

 Login:(email)=> dispatch(
     {
       type : "LOG" ,
       email : email, 
     }
 )

 }

}



const sh = Dimensions.get("window").height;
const sw = Dimensions.get("window").width;
class Login extends React.Component {
    state={
        email:"",
        password:"",
        isloading : false,
        isok:false,
        top :new Animated.Value(sh),
        
    };

    componentDidMount(){
        this.getUser();
    }


    setUser=async(name)=>{
        try{
         await AsyncStorage.setItem("username",name)

        }
        catch(e){
            console.log("not stored")
        }
    };


    getUser=async()=>{
 try{
     const name = await AsyncStorage.getItem("username");
     if (name !== null){
        this.props.Login(name);
     }
 }
 catch(e){
     console.log("get value error")
 }


    };

    getvalue=()=>{
       this. setState({isloading : true})
   const email= this.state.email;
   const password= this.state.password;

  app.auth().signInWithEmailAndPassword(email,password).catch(function(error){
 Alert.alert("Error",error.message)

  }).then(response => {
      console.log(response);
      this.setUser(response.user.email);
      this.props.Login(response.user.email);
      this.setState({isloading:false});
  if (response){
      this.setState({isok:true});
      setTimeout(() => {
           this.setState({isok:false});
           this.props.closelogin();
      }, 3000);
      
  }
  })
       
    };

componentDidUpdate(){
    if(this.props.menu=="openlogin"){
  Animated.timing(this.state.top,{toValue : 0,duration :0,useNativeDriver:false}).start();
  

    }
    if(this.props.menu=="closelogin"){
        
        Animated.timing(this.state.top,{toValue : sh,duration :0,useNativeDriver:false}).start();
      
          }
          
    
}



    render() {
        return(

    <Animated.View style={[styles.container,{top:this.state.top,width:sw,height:sh}]}>
        <TouchableWithoutFeedback onPress={this.props.closelogin}>
      <View style={[styles.black,{width:sw,height:sh}]}/>
      </TouchableWithoutFeedback>
      <View style={[styles.box,{width:sw}]}>
       <Text style={styles.top}> Login</Text>
        <TextInput style={styles.textbox} placeholder="Email"keyboardType="email-address"onChangeText={(email)=>{this.setState({email:email})}} ></TextInput>
        <TextInput style={styles.textbox} placeholder="password" secureTextEntry={true} onChangeText={(password)=>{this.setState({password:password})}}></TextInput>

        <TouchableOpacity style={styles.botton} onPress={this.getvalue}>
        <View>
            <Text style={styles.bottontext}> Submit
                </Text>
        </View>
        </TouchableOpacity>
     
     


      </View>






       <Loading isload = {this.state.isloading}/>
       <Ok isload={this.state.isok}/>
        </Animated.View>

        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
const styles = StyleSheet.create({

    container:{
        position:"absolute",
       
        top:0,
        left:0,
       
        justifyContent:"center",
        alignItems: "center",
        paddingLeft:20
        
    },


    black:{
   
        position:"absolute",
        
        backgroundColor:'rgba(0, 0, 0, 0.7)',
        top:0,
        left:0,



    },
    box:{
        position:"absolute",
        
        height:300,
        backgroundColor:'white',
        alignItems: "center",
        padding:10,
        borderRadius:20,
        left:20,
        

    },
    top:{
        fontSize:30,
        fontWeight:"bold",
        right:10

    },
    textbox:{
       backgroundColor:'#92B6AE',
       width:250,
       height:35,
       marginTop:50,
       color:'black',
       borderRadius:10,
       fontSize:20,
       paddingLeft:5
       

       
    },
    botton:{
       
        backgroundColor:'skyblue',
        width:100,
        height:30,
        top:30,
        borderRadius:10,
       
        

    },
    bottontext:{
        right:5,
        fontSize:20,
        fontWeight:"bold",
        left:15
      
    }



})
