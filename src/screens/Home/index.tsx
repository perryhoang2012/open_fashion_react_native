import {WHITE} from '@assets/colors';
import CustomText from '@components/CustomText';
import Header from '@components/Header';
import React from 'react';
import {StyleSheet, View} from 'react-native';

type Props = {};

const Home = (props: Props) => {
  // const getData = async () => {
  //   const res = await productApi.getAll({filter: 'test'});
  //   console.log(res);
  // };
  // useEffect(() => {
  //   getData();
  // }, []);
  return (
    <View style={styles.container}>
      <Header />
      <CustomText>Home</CustomText>
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
