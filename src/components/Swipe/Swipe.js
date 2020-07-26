import React, {PureComponent} from 'react';
import {Text, Dimensions, Image, StyleSheet, View} from 'react-native';

import SwiperFlatList from 'react-native-swiper-flatlist';

export default class App extends PureComponent {
  render() {
    return (
      <View style={styles.container}>
        <SwiperFlatList
          autoplay
          autoplayDelay={2}
          autoplayLoop
          index={2}
          showPagination>
          {/* <View style={[styles.child, ]}> */}
          <Image
            style={styles.userImagen}
            source={require('../../assets/thumbs_b_c_e744e82b1ea080043a7a807cf4a29aca.jpg')}
          />

          <Image
            style={styles.userImagen}
            source={require('../../assets/machinethato.jpg')}
          />

          <Image
            style={styles.userImagen}
            source={require('../../assets/maxresdefault.jpg')}
          />
        </SwiperFlatList>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  userImagen: {
    height: 200,
    width: 380,
  },
});
