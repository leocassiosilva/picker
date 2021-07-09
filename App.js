import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Picker} from '@react-native-community/picker';
import { render } from 'react-dom';

export default class App extends Component {
  
  constructor(props){
    super(props);
    this.state={
      pizza:0, 
      pizzas:[
        {key:1, nome:'Strogonoff', valor:35.90},
        {key:2, nome:'Calabresa', valor:38.90},
        {key:3, nome:'Brigadeiro', valor:36.90}
      
      ]
    }
  }
  render(){
    
    let pizzasItem = this.state.pizzas.map((v, k) =>{
      return <Picker.Item key={k} value={k} label={v.nome}/>
    })

    return (

      <View style={styles.container}>
        <Text style={styles.logo}>Menu Pizza</Text>
        
        <Picker selectedValue={this.state.pizza}
        onValueChange={(itemValue, itemIndex) => this.setState({pizza:itemValue})}>
          {pizzasItem}
        </Picker>

        <Text style={styles.pizzas}>Você escolheu:{this.state.pizzas[this.state.pizza].nome}</Text>
        <Text style={styles.pizzas}>R$:{this.state.pizzas[this.state.pizza].valor}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:20,
    backgroundColor: '#fff',
  },
  logo:{
    textAlign:'center',
    fontSize:28,
    fontWeight:'bold'
  }, 
  pizzas:{
    marginTop:15,
    fontSize:28,
    textAlign:'center'
  }
});
