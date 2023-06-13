import {LABEL, PLACEHOLDER, SECONDARY, WHITE} from '@assets/colors';
import {AppIcon} from '@assets/icons';
import Button from '@components/Button';
import CustomText from '@components/CustomText';
import IconSvg from '@components/IconSvg';
import {useSafeAreaInsetsCustom} from '@hooks/useSafeAreaInsetsCustom';
import {pxScale} from '@utils/func';
import {RootNavigationProp} from 'models/navigation';
import React, {useState} from 'react';
import {FlatList, LayoutAnimation} from 'react-native';
import {Platform, UIManager, StyleSheet, View} from 'react-native';

if (Platform.OS === 'android') {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}

type Props = {
  navigation: RootNavigationProp;
};

const DrawerContent = (props: Props) => {
  const {navigation} = props;

  const [tabActive, setTabActive] = useState({title: 'Women', value: 'women'});

  // const navigateToScreen = (screenName: any) => {
  //   navigation.navigate(screenName);
  // };

  const closeDrawer = () => {
    navigation.closeDrawer();
  };

  const _renderTabs = () => {
    const tabs = [
      {title: 'Women', value: 'women'},
      {title: 'Man', value: 'man'},
      {title: 'Kids', value: 'Kids'},
    ];
    return (
      <View style={styles.viewTab}>
        {tabs.map((item, index) => (
          <Button
            key={index}
            style={[
              styles.buttonTab,
              {
                borderBottomColor:
                  item.value === tabActive.value ? SECONDARY : PLACEHOLDER,
              },
            ]}
            onPress={() => {
              setTabActive(item);
              LayoutAnimation.configureNext(
                LayoutAnimation.Presets.easeInEaseOut,
              );
            }}>
            <CustomText subTitle14 height={35}>
              {item.title.toUpperCase()}
            </CustomText>
          </Button>
        ))}
      </View>
    );
  };

  const _renderBody = () => {
    return (
      <View style={styles.viewBody}>
        <FlatList
          data={[]}
          renderItem={() => <></>}
          ListFooterComponent={() => _renderFooter()}
        />
      </View>
    );
  };

  const _renderFooter = () => {
    return (
      <View>
        <View style={styles.itemFooter}>
          <IconSvg source={AppIcon.CALL} width={24} height={24} />
          <CustomText subTitle16 ml={15}>
            (786) 713-8616
          </CustomText>
        </View>
        <View style={styles.itemFooter}>
          <IconSvg source={AppIcon.LOCATION} width={24} height={24} />
          <CustomText subTitle16 ml={15}>
            Store locator
          </CustomText>
        </View>
        <View style={styles.viewLineAndLozenge}>
          <View style={styles.line} />
          <View style={styles.viewLozenge} />
        </View>

        <View style={styles.containerSocial}>
          <View style={styles.viewSocial}>
            <Button>
              <IconSvg source={AppIcon.TWITTER} width={24} height={24} />
            </Button>
            <Button>
              <IconSvg source={AppIcon.INSTAGRAM} width={24} height={24} />
            </Button>
            <Button>
              <IconSvg source={AppIcon.YOUTUBE} width={24} height={24} />
            </Button>
          </View>
        </View>
      </View>
    );
  };

  return (
    <View
      style={[styles.container, {marginTop: useSafeAreaInsetsCustom().top}]}>
      <Button onPress={() => closeDrawer()}>
        <IconSvg source={AppIcon.CLOSE} width={24} height={24} />
      </Button>
      {_renderTabs()}
      {_renderBody()}
    </View>
  );
};

export default DrawerContent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: pxScale.hp(10),
    paddingLeft: pxScale.wp(16),
    paddingRight: pxScale.wp(41),
  },
  viewTab: {
    flexDirection: 'row',
    marginTop: pxScale.hp(20),
    justifyContent: 'space-between',
  },
  buttonTab: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    borderBottomWidth: 1,
    height: 35,
    paddingBottom: 10,
  },
  viewBody: {
    flex: 1,
    marginTop: 31,
  },
  itemFooter: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  containerSocial: {
    marginTop: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 40,
  },
  viewSocial: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 140,
  },
  viewLozenge: {
    width: 10,
    height: 10,
    borderColor: LABEL,
    borderWidth: 1,
    transform: [{rotate: '45deg'}],
    position: 'absolute',
    backgroundColor: WHITE,
  },

  line: {
    width: pxScale.wp(125),
    height: pxScale.hp(1),
    backgroundColor: LABEL,
  },
  viewLineAndLozenge: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 28,
  },
});
