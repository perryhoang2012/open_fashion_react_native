import {WHITE} from '@assets/colors';
import CustomImage from '@components/CustomImage';
import Footer from '@components/Footer';
import Header from '@components/Header';
import React, {useRef} from 'react';
import {Dimensions, ScrollView, StyleSheet, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import Carousel, {Pagination} from 'react-native-snap-carousel';

const Home = () => {
  const [indexBanner, setIndexBanner] = React.useState<number>(0);

  const carouselRef = useRef(null);

  const listImage = [
    {
      uri: 'https://i.pinimg.com/564x/ff/7a/14/ff7a14814ac8bf146da97adb01db2a12.jpg',
    },
    {
      uri: 'https://i.pinimg.com/564x/fc/f0/47/fcf0471d8c0ea7206d44f5a4ee940ac8.jpg',
    },
    {
      uri: 'https://i.pinimg.com/564x/fc/f0/47/fcf0471d8c0ea7206d44f5a4ee940ac8.jpg',
    },
    {
      uri: 'https://i.pinimg.com/564x/fc/f0/47/fcf0471d8c0ea7206d44f5a4ee940ac8.jpg',
    },
  ];

  const _renderItem = React.useCallback(({item}: any) => {
    return (
      <View style={{flex: 1}}>
        <CustomImage
          source={{
            uri: item.uri,
          }}
          style={{width: '100%', height: 600}}
          resizeMode={FastImage.resizeMode.cover}
        />
      </View>
    );
  }, []);
  return (
    <View style={styles.container}>
      <Header />
      <ScrollView style={{flex: 1}}>
        <View>
          <Carousel
            ref={carouselRef}
            loop={true}
            autoplay={true}
            autoplayDelay={100}
            autoplayInterval={4000}
            lockScrollTimeoutDuration={3000}
            activeAnimationType={'timing'}
            enableSnap={true}
            loopClonesPerSide={2}
            data={listImage}
            lockScrollWhileSnapping={true}
            renderItem={_renderItem}
            sliderWidth={Dimensions.get('screen').width}
            sliderHeight={600}
            itemWidth={Dimensions.get('screen').width}
            layout={'tinder'}
            onSnapToItem={i => setIndexBanner(i)}
          />
          <Pagination
            activeDotIndex={indexBanner}
            dotsLength={listImage?.length}
            containerStyle={styles.containerPagination}
            renderDots={(activeIndex, total) => {
              const arr: any[] = Array(total).fill(0);
              return (
                <View style={styles.viewPagination}>
                  {arr.map((item, index) => {
                    return (
                      <View
                        key={index}
                        style={[
                          {
                            backgroundColor:
                              activeIndex === index ? WHITE : 'transparent',
                          },
                          styles.buttonPagination,
                        ]}
                      />
                    );
                  })}
                </View>
              );
            }}
          />
        </View>
        <Footer />
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    backgroundColor: WHITE,
    flex: 1,
  },
  buttonPagination: {
    width: 8,
    height: 8,
    borderColor: WHITE,
    borderWidth: 0.5,
    marginLeft: 8,
    transform: [{rotate: '45deg'}],
  },
  viewPagination: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  containerPagination: {
    paddingVertical: 0,
    position: 'absolute',
    bottom: 19,
    width: '100%',
  },
});
