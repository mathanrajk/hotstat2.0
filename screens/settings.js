import React from "react";
import {Text,View,StyleSheet} from "react-native";
export default class Settings extends React.Component {
    static navigationOptions = {
        headerStyle: {
            backgroundColor: 'green',
          },
      };
    render() {
        return(

<View style={styles.container}>



<Text>Settings page</Text>




</View>




        );
    }
}
const styles = StyleSheet.create({

container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

}

})