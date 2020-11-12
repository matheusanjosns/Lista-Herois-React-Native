import React from 'react';
import {View, StyleSheet} from 'react-native'
import PeopleListItem from './PeopleListItem'
 
const PeopleList = props => {
    const {hero, onPressItem} = props
    const items = hero.map(hero => {
          return (
              <PeopleListItem 
                    key={hero.id} 
                    hero={hero}
                    onPressItemDetails={onPressItem}/>
          )
        }
      )
    return (
        <View style={style.container}>
            {items}
        </View>
    )
}
 
const style = StyleSheet.create({
    container: {
        backgroundColor: '#cfcaff'
    },
}
)
export default PeopleList