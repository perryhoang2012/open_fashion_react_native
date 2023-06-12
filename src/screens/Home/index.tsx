import {WHITE} from '@assets/colors';
import Button from '@components/Button';
import CustomText from '@components/CustomText';
import Header from '@components/Header';
import {useReduxDispatch} from '@redux/configureStore';
import {setLoading} from '@redux/slices/generalSlice';
import {fetchListProduct} from '@redux/slices/productSlice';
import React, {useEffect} from 'react';
import {StyleSheet, View} from 'react-native';

const Home = () => {
  const dispatch = useReduxDispatch();

  // const listProduct = useReduxSelector(state => state.product.listProducts);
  // const loading = useReduxSelector(state => state.general.loading);

  // console.log(listProduct, loading);
  const getData = React.useCallback(async () => {
    dispatch(fetchListProduct());
  }, [dispatch]);

  useEffect(() => {
    getData();
  }, [getData]);

  return (
    <View style={styles.container}>
      <Header />
      <Button
        style={{backgroundColor: 'red'}}
        onPress={() => dispatch(setLoading(true))}>
        <CustomText>Home</CustomText>
      </Button>
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
