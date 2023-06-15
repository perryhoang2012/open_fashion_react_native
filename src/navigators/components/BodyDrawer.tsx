import CustomText from '@components/CustomText';
import * as React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';

export interface BodyDrawerProps {}

export default function BodyDrawer() {
  return (
    <View style={styles.viewBody}>
      <FlatList
        data={[1, 2, 3]}
        renderItem={({item}) => (
          <View>
            <CustomText>{item}</CustomText>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  viewBody: {
    marginTop: 31,
  },
});
