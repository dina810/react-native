import React from "react"
import { View,Text,Button,TouchableOpacity,StyleSheet} from "react-native"

export default class Like extends React.Component {
  
    state={
      like:100,
      isliked:false
    }
    
    like=()=>{
     if(this.state.isliked){
       this.setState({
            like:this.state.like-1,
            isliked:false
        })
        
     }
     else{
       this.setState({
            like:this.state.like+1,
            isliked:true
        })
     }

    }
render(){
    return(
        <View >

              <TouchableOpacity onPress={this.like}  style={styles.button}> 
                   <Text  style={styles.buttonText}>Like | {this.state.like}</Text> 
                      </TouchableOpacity>
        </View>
    )
}


}

const styles = StyleSheet.create({ 

  button: { 
    width: 200,
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    margin:50,
    backgroundColor: '#000',
  }, 
  buttonText: { 
    fontSize: 25, 
    color: '#fff' 
  } 
});