import React, {Component} from 'react';
import {StyleSheet, View, Text, ScrollView} from 'react-native';
import {Dropdown, Card, Chart} from '../../components';
const axios = require('axios');

const chartData = [
  {
    name: 'Confirmed Case',
    color: '#FF6830',
    legendFontColor: '#005D66',
    legendFontSize: 10,
  },
  {
    name: 'Recovered',
    color: '#005D66',
    legendFontColor: '#FF6830',
    legendFontSize: 10,
  },
  {
    name: 'Deaths',
    color: '#CC0404',
    legendFontColor: 'red',
    legendFontSize: 10,
  },
];

export default class CountriesScreen extends Component {
  constructor() {
    super();
    this.state = {
      contury: '',
      showCard: false,
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

  handelCity = async (itemValue) => {
    let {data} = this.state;
    this.setState({contury: itemValue});
    if (itemValue) {
      try {
        const getData = await axios.get(
          `https://covid19.mathdro.id/api/countries/${itemValue}`,
        );
        let confirmed = getData.data.confirmed.value;
        let recovered = getData.data.recovered.value;
        let deaths = getData.data.deaths.value;
        data[0].number = confirmed;
        data[1].number = recovered;
        data[2].number = deaths;
        // data[3].number = getData.data.lastUpdate;

        chartData[0].population = confirmed;
        chartData[1].population = recovered;
        chartData[2].population = deaths;

        this.setState({
          data,
          showCard: true,
          chartData,
        });
      } catch (err) {
        alert(err);
      }
    } else {
      this.setState({
        data,
        showCard: false,
      });
    }
  };

  render() {
    let {contury, data, showCard, chartData} = this.state;
    return (
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.headingContainer}>
            <Text style={styles.heading}>All countries Report</Text>
            <Dropdown language={contury} onValueChange={this.handelCity} />
          </View>
          {showCard ? (
            <>
              {data &&
                data.map((val, i) => {
                  return (
                    <Card data={val} key={i} dataObj={this.state.dataObj} />
                  );
                })}
              <Chart data={chartData} />
            </>
          ) : null}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headingContainer: {
    marginVertical: 20,
  },
  heading: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FF6830',
  },
});
