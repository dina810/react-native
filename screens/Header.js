import { View, Text, StyleSheet,Linking,Alert} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import Home from '../screens/Home';

const url1="http://www.google.com"


export default class Header extends React.Component  {
 
      openUrl=async(url)=>{
    const isSupported=await Linking.canOpenURL(url);
    if(isSupported){
      await Linking.openURL(url);
    }else{
      Alert.alert(`Don't know to open url go to:${url}`)
    }
  }
    render() {
    return (
      <View style={{ flex:1,alignItems:'center',justifyContent:'center'}}>
      
      <View style={styles.headerFooterStyle}>
        <View style={styles.textStyle}>
            <Icon.Button
            name="google"
            backgroundColor=""
            size={35}
             onPress={()=>{
              Linking.openURL(url1)
             }}
             style={{ 
                  position:'fixed',
                  left:10    ,
                  top:3
  

             }}

          />

            <Icon.Button
            name="home"
            backgroundColor=""
            size={35}
            style={{ 
              position:'fixed',
              right:10,         
              top:3   

         }}
           onPress={()=>{this.props.navigation.navigate('Home')}}
          

          
          />
          </View>
          <View style={styles.textStyle}> 
          </View>
      </View>
      </View>
    )
    }
    
    

  }

  const styles = StyleSheet.create({
  
  
    headerFooterStyle: {
      width: '100%',
      height: 50,
      backgroundColor: '#1d3557',
      position: 'fixed',
      top: 0,
     
    },
    textStyle: {
        textAlign: 'center',
        color: '#fff',
        fontSize: 18,
        padding: 7,
      },
  });