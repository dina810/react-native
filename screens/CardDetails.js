import { View, Text,Button ,StyleSheet,ScrollView,Image} from 'react-native';
import * as React from 'react';
import Header from '../screens/Header';
import Footer from '../screens/Footer'


export default class CardDetails extends React.Component  {
    render() {
    return (
      <View>
        <Header navigation={this.props.navigation}  />
        <View style={{ flexDirection: "row", padding: 5}}>
        <View style={{marginTop:300 }}>
          <Image
            source={require("../images/car.jpg")}
            style={{ width: 150, borderRadius: 10, height: 200,marginTop:20 }}
          />
        </View>
        <View style={{ flex:3,padding:20,marginTop:300 }}>
            <Text>
            orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
               when an unknown printer took a galley of type and scrambled it to make a type specimen book.  orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
              
            </Text>
            

        </View>
      </View>
         <Footer navigation={this.props.navigation}  />
      </View>
    )
    }
  }

