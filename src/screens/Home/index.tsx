import {StyleSheet, View} from 'react-native';
import React, {useEffect} from 'react';
import CustomText from '@components/CustomText';
import productApi from '@api/product';

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
    <View>
      <CustomText>Home</CustomText>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
