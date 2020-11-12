import React from 'react'
//import {View, Text} from 'react-native'
import {View,Text,StyleSheet} from 'react-native'
export default class PeopleDetailsPage extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            'people': props.route.params.people
        }
    }

    render(){
        return(
            <View style={style.container}>
                
            <View style={style.caixa}>   
                <Text style={style.linetext}> IDENTIFICAÇÃO: {this.state.people.id}</Text>
                <Text style={style.linetext}> NOME: {this.state.people.nome}</Text> 
                <Text style={style.linetext}> CODINOME: {this.state.people.codinome}</Text> 
                <Text style={style.linetext}> OCUPAÇÃO: {this.state.people.ocupacao}</Text>     
                <Text style={style.linetext}> SEXO: {this.state.people.sexo}</Text>  
                <Text style={style.linetext}> CIDADE: {this.state.people.cidade}</Text>        
                </View> 
            
            </View>
        )
    }
}

const style = StyleSheet.create({
    container: {
        backgroundColor:'#f1f0e7',
        height: 80
    },
    caixa:{
      backgroundColor:'#f1f0e7'  
    },
    linetext:{
       marginTop:50, 
       marginLeft:7
          
    },
    avatar:{
        aspectRatio: 1,
        flex: 1,
        marginLeft: 10,
        borderRadius: 50
    }
}
)
