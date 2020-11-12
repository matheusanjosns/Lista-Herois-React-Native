import React from 'react';
import { View } from 'react-native';
import axios from 'axios';
import PeoppleList from '../component/PeopleList'

export default class PeoplePage extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      hero: []
    }
  }
 
  componentDidMount(){
    axios
    .get('https://run.mocky.io/v3/19f1995c-ff33-492e-8d7d-6711a8048acf') // 'https://run.mocky.io/v3/4350d3b7-390d-4012-b637-cc94f1accd02' 
    .then(response => {
      const results = response.data
      this.setState({
        hero: results
      })
    })
  }
 
  render(){
    return (
      <View>
        <PeoppleList hero={this.state.hero} 
                     onPressItem={ (hero) => {
                         this.props.navigation.navigate('Descrição dos Heróis',
                         {"hero": hero})
                     }}
        />
      </View>
    );
  }
}