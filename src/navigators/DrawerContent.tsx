import {
  BODY,
  LABEL,
  PLACEHOLDER,
  SECONDARY,
  TITLE_ACTIVE,
  WHITE,
} from '@assets/colors';
import {AppIcon} from '@assets/icons';
import Button from '@components/Button';
import CustomText from '@components/CustomText';
import IconSvg from '@components/IconSvg';
import {useSafeAreaInsetsCustom} from '@hooks/useSafeAreaInsetsCustom';
import {pxScale} from '@utils/func';
import {RootNavigationProp} from 'models/navigation';
import React, {useState} from 'react';
import {
  LayoutAnimation,
  Platform,
  StyleSheet,
  UIManager,
  View,
} from 'react-native';
import BodyDrawer from './components/BodyDrawer';
import {FooterDrawer} from './components/FooterDrawer';

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

  const _renderTabs = React.useCallback(() => {
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
            <CustomText
              subTitle14
              height={35}
              color={item.value === tabActive.value ? TITLE_ACTIVE : BODY}
              style={{height: 35}}>
              {item.title.toUpperCase()}
            </CustomText>
            {item.value === tabActive.value && (
              <View style={styles.viewBorderBottomTab}>
                <View
                  style={[
                    styles.viewLozenge,
                    {backgroundColor: SECONDARY, borderColor: SECONDARY},
                  ]}
                />
              </View>
            )}
          </Button>
        ))}
      </View>
    );
  }, [tabActive]);

  return (
    <View
      style={[styles.container, {marginTop: useSafeAreaInsetsCustom().top}]}>
      <Button onPress={() => closeDrawer()}>
        <IconSvg source={AppIcon.CLOSE} width={24} height={24} />
      </Button>
      {_renderTabs()}
      <BodyDrawer />
      <FooterDrawer />
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
  viewBorderBottomTab: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 0,
  },
});
