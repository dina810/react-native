import React, { Component } from 'react'
import { StyleSheet, TouchableOpacity, Text, View, Button} from 'react-native'

export default class Counter extends React.Component  {
  state = {
    value:0,
  }


  incrementValue =()=>{
    this.setState({
      value :this.state.value + 1
    })

  }
 
  decrementValue =()=>{
    this.setState({
      value :this.state.value - 1
    })
   
  }
 render() {
    return (
    <View>
     
        <View >
          <TouchableOpacity onPress={this.incrementValue}>
          <Text style={{color:'red'}} >increament</Text>
          <Button 
        title="+ "
        onPress={this.incrementValue}
      />
          
          </TouchableOpacity>
                <TouchableOpacity onPress={this.decrementValue}>
                <Text style={{color:'red'}} >decreament</Text>
                <Button
                title="-"
        onPress={this.decrementValue}
      />
      <Text style={{color:'red'}} >The Counter</Text>
      
          </TouchableOpacity>
          
          

        </View>
        <Text style={{textAlign:'center'}}>{this.state.value}</Text>


    </View>
    )
  }
}

const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      justifyContent: 'center',
      padding: 24,
    },
    paragraph: {
      margin: 24,
      marginTop: 0,
      fontSize: 14,
      fontWeight: 'bold',
      textAlign: 'center',
    },
    logo: {
      height: 128,
      width: 128,
    }

})

