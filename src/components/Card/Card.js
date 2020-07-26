import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default class Card extends Component {
  render() {
    let allpropsData = this.props.data;
    return (
      <>
        {allpropsData ? (
          <View
            style={[
              styles.card,
              {
                backgroundColor: allpropsData.backgroundColor,
              },
            ]}>
            <Text style={[styles.heading, {color: 'white'}]}>
              {allpropsData && allpropsData.title}
            </Text>
            <Text style={[styles.text, {color: 'white'}]}>
              {allpropsData && allpropsData.number}
            </Text>
          </View>
        ) : null}
      </>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    justifyContent: 'center',
    marginHorizontal: 5,
    margin: 8,
    height: 100,
    borderRadius: 20,
  },
  heading: {
    alignSelf: 'center',
    fontWeight: 'bold',
    fontSize: 25,
  },
  text: {
    alignSelf: 'center',
    fontWeight: 'bold',
    fontSize: 20,
  },
});
