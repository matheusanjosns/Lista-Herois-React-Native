import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import {toUpperFirst} from '../util'
 
const PeopleListItem = props => {
    const {people, onPressItemDetails} = props
    const {id, nome} = people
    return (
        <TouchableOpacity onPress={() => {
            onPressItemDetails(people)
        }}>
        <View style={style.line}>
        <Image style={style.avatar} source={{uri: people.imagem}}/>
            <Text style={style.linetext} key={id}>
                {`${
                    toUpperFirst(nome)
                }  
                `}
            </Text>            
        </View>
        </TouchableOpacity>
    )
}
 
const style = StyleSheet.create({
    line: {
        height: 66,
        borderBottomWidth: 1,
        borderBottomColor: '#cfe3ff',
        alignItems: 'flex-end',
        flexDirection: 'row'
    },
    linetext:{
        fontSize:20,
        paddingLeft: 20,
        flex: 7,
    },
    avatar:{        
        aspectRatio: 1,
        flex: 1,
        marginLeft: 10,
        borderRadius: 50,
    }
}
)
 
export default PeopleListItem