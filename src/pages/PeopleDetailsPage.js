import React from 'react'
//import {View, Text} from 'react-native'
import {View,Text,StyleSheet} from 'react-native'
export default class PeopleDetailsPage extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            'hero': props.route.params.hero
        }
    }

    render(){
        return(
            <View style={style.caixa}>   
                <Text style={style.detalhesLine}> IDENTIFICAÇÃO: {this.state.hero.id}</Text>
                <Text style={style.detalhesLine}> NOME: {this.state.hero.nome}</Text> 
                <Text style={style.detalhesLine}> CODINOME: {this.state.hero.codinome}</Text> 
                <Text style={style.detalhesLine}> OCUPAÇÃO: {this.state.hero.ocupacao}</Text>     
                <Text style={style.detalhesLine}> SEXO: {this.state.hero.sexo}</Text>  
                <Text style={style.detalhesLine}> CIDADE: {this.state.hero.cidade}</Text>        
            </View> 
        )
    }
}

const style = StyleSheet.create({
    caixa:{
      backgroundColor:'#f1f0e7'  
    },
    detalhesLine:{
       marginTop:50, 
       marginLeft:7
          
    }
});