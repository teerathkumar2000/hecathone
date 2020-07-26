import React, {Component} from 'react';
import {View, Text} from 'native-base';
import {StyleSheet, ScrollView, Image} from 'react-native';
import {Card, Swipe} from '../../components/index';

const axios = require('axios');

export default class HomeScreen extends Component {
  constructor() {
    super();
    this.state = {
      data: [
        {
          title: 'Confirmed',
          backgroundColor: '#FF6830',
        },
        {
          title: 'Recovered Cases',
          backgroundColor: '#005D66',
        },

        {
          title: 'Deaths',
          backgroundColor: '#CC0404',
        },
      
       
      ],
    };
  }

  //

  async componentDidMount() {
    try {
      let {data} = this.state;
      const getData = await axios.get('https://covid19.mathdro.id/api');
      data[0].number = getData.data.confirmed.value;
      data[1].number = getData.data.recovered.value;
      data[2].number = getData.data.deaths.value;


      this.setState({
        data,
      });
    } catch (err) {
      alert(err);
    }
  }

  render() {
    let {data} = this.state;
    return (
      <View style={styles.container}>
        <ScrollView>

          <Swipe />
          {data &&
            data.map((val, i) => {
              return <Card data={val} key={i} dataObj={this.state.dataObj} />;
            })}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
