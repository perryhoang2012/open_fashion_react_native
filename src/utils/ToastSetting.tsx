/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/react-in-jsx-scope */
import Button from '@components/Button';
import CustomText from '@components/CustomText';
import {useSafeAreaInsetsCustom} from '@hooks/useSafeAreaInsetsCustom';
import {StyleSheet, View} from 'react-native';
import Toast, {BaseToastProps} from 'react-native-toast-message';

export default function ToastSettings() {
  const toastConfig = {
    success: ({text1}: BaseToastProps) => (
      // eslint-disable-next-line react/react-in-jsx-scope
      <Button
        opacity={0.9}
        onPress={() => Toast.hide()}
        style={{width: '100%'}}>
        <View style={[styles.container, {backgroundColor: '#4285f4'}]}>
          <CustomText center color="white" style={{zIndex: 3}}>
            {text1}
          </CustomText>
        </View>
      </Button>
    ),
    error: ({text1}: BaseToastProps) => (
      <Button
        opacity={0.9}
        onPress={() => {
          Toast.hide();
        }}
        style={{width: '100%'}}>
        <View style={[styles.container, {backgroundColor: '#ff3547'}]}>
          <CustomText center color="white" style={{zIndex: 3}}>
            {text1}
          </CustomText>
        </View>
      </Button>
    ),
    info: ({text1}: BaseToastProps) => (
      <Button
        opacity={0.9}
        onPress={() => Toast.hide()}
        style={{width: '100%'}}>
        <View style={[styles.container, {backgroundColor: '#ffa000'}]}>
          <CustomText center color="white" style={{zIndex: 3}}>
            {text1}
          </CustomText>
        </View>
      </Button>
    ),
  };

  return (
    <Toast topOffset={useSafeAreaInsetsCustom().top} config={toastConfig} />
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    marginHorizontal: 15,
    paddingHorizontal: 15,
    paddingVertical: 12,
    borderRadius: 5,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
