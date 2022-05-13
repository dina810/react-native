import React from "react";
import { View, Text, Image } from "react-native";
import { TouchableOpacity } from "react-native-web";

export default class Card extends React.Component {
  render() {
    return (
      <View style={{marginTop:80 }}>
        <View style={{ display:'flex',flexDirection: "row", padding: 5 ,alignContent:"center"}}>
            <View>
                <TouchableOpacity  onPress={       () =>{this.props.navigation.navigate('CardDetails')}
        }>
                <Image
                    source={require("../images/car.jpg")}
                    style={{ width: 150, borderRadius: 10, height: 200,marginTop:20}}
                   
                />
                </TouchableOpacity>
            </View>
            <View style={{ flex:3,padding:20 }}>
                <Text>
                    orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book. orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
                </Text>
            </View>
      </View>
      <View style={{ flexDirection: "row", padding: 5}}>
        <View>
        <TouchableOpacity  onPress={       () =>{this.props.navigation.navigate('CardDetails')}
        }>
          <Image
            source={require("../images/car.jpg")}
            style={{ width: 150, borderRadius: 10, height: 200,marginTop:20 }}
        
        />
        </TouchableOpacity>
        
        </View>
        <View style={{ flex:3,padding:20 }}>
            <Text>
            orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
               when an unknown printer took a galley of type and scrambled it to make a type specimen book. orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
              
            </Text>
            

        </View>
      </View>
      <View style={{ flexDirection: "row", padding: 5}}>
        <View>
        <TouchableOpacity  onPress={       () =>{this.props.navigation.navigate('CardDetails')}
        }>
          <Image
            source={require("../images/car.jpg")}
            style={{ width: 150, borderRadius: 10, height: 200,marginTop:20 }}
            onPress={       () =>{this.props.navigation.navigate('CardDetails')}
        }
          />
          </TouchableOpacity>
        </View>
        <View style={{ flex:3,padding:20 }}>
            <Text>
            orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
               when an unknown printer took a galley of type and scrambled it to make a type specimen book.  orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
              
            </Text>
            

        </View>
      </View>
      </View>
      
    );
  }
}
