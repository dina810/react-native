import * as React from 'react';
import { View, Text,Button ,StyleSheet,ScrollView} from 'react-native';
import Header from '../screens/Header';
import Footer from '../screens/Footer'
import Card from '../screens/Card';

export default class Home extends React.Component  {
    render() {
    return (
      <View>
        <Header navigation={this.props.navigation}   />
        <Text style={{ position:'absolute',top:10,color:'white',fontSize:21 ,right:70 }}>اخبار السيارات الكهربائيه</Text>
        <Card navigation={this.props.navigation} />
         <Footer navigation={this.props.navigation}  />
      </View>
    )
    }
  }

