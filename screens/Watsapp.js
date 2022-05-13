
import React from 'react';
 
import {Linking} from 'react-native';
 
const Whatsapp = () => {
 
  const initiateWhatsApp = () => {
    let url =
      'whatsapp://send?text=Hello&phone=+201009980714' ;
    Linking.openURL(url)
      .then(()=> {
        console.log('WhatsApp Opened');
      })
      .catch(() => {
        alert('Make sure Whatsapp installed on your device');
      });
  };
 
  return (
    initiateWhatsApp()
  );
};
 
export default Whatsapp;
 
