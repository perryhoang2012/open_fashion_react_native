import {WHITE} from '@assets/colors';
import Footer from '@components/Footer';
import Header from '@components/Header';
import React from 'react';
import {StyleSheet, View} from 'react-native';

const Home = () => {
  return (
    <View style={styles.container}>
      <Header />
      <View style={{flex: 1}}></View>
      <Footer />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    backgroundColor: WHITE,
    flex: 1,
  },
});
