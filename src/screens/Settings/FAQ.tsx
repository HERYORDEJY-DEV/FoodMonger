import * as React from 'react';
import * as RN from 'react-native';

import { useNavigation } from '@react-navigation/native';
import * as NB from 'native-base';
import { RFValue } from 'react-native-responsive-fontsize';
import FAQItem from '../../components/FAQItem';
import NavigationBar from '../../components/NavigationBar';
import { ScreenBG } from '../../modules/colors';

export interface FAQProps {}

export interface FAQState {}

export default function FAQ(props: FAQProps) {
  const navigation = useNavigation();

  return (
    <NB.Box style={styles.container}>
      <RN.StatusBar
        barStyle={'dark-content'}
        backgroundColor={ScreenBG}
      />
      <NavigationBar
        title={'FAQ'}
        leftOnPress={() => navigation.goBack()}
      />
      <NB.ScrollView
        px={2.5}
        style={styles.content}
        contentContainerStyle={styles.contentContainerStyle}
      >
        <FAQItem />
      </NB.ScrollView>
    </NB.Box>
  );
}

const styles = RN.StyleSheet.create({
  container: {
    backgroundColor: ScreenBG,
  },
  content: { paddingTop: RFValue(20) },
  contentContainerStyle: {},
});
