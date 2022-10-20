import * as React from 'react';
import * as RN from 'react-native';

import { useNavigation } from '@react-navigation/native';
import * as NB from 'native-base';
import { RFValue } from 'react-native-responsive-fontsize';
import NavigationBar from '../../components/NavigationBar';
import OrderHistoryItem from '../../components/OrderHistoryItem';
import { PrimaryColor, ScreenBG } from '../../modules/colors';
import { CalendarIcon } from '../../svg/CalendarIcon';

export interface OrderHistoryProps {}

export interface OrderHistoryState {}

// TODO ::  View order full details
// TODO ::  Swipe order item to delete or other actions

export default function OrderHistory(props: OrderHistoryProps) {
  const navigation = useNavigation();

  const renderEmptyHistory = () => (
    <RN.View style={styles.emptyWrapper}>
      <RN.View style={styles.iconWrapper}>
        <CalendarIcon style={styles.icon} />
      </RN.View>

      <RN.View style={styles.descWrapper}>
        <RN.Text style={styles.title}>No History Yet</RN.Text>
        <RN.Text style={styles.subtitle}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Facilisi arcu ut aliquet et cursus.
        </RN.Text>
      </RN.View>
    </RN.View>
  );

  const renderHistoryList = () => (
    <RN.View>
      <OrderHistoryItem orderId={'1234567'} status={'Pending'} />
      <OrderHistoryItem orderId={'1234567'} status={'Canceled'} />
      <OrderHistoryItem orderId={'1234567'} status={'delivered'} />
    </RN.View>
  );

  return (
    <NB.Box style={styles.container}>
      <RN.StatusBar
        barStyle={'dark-content'}
        backgroundColor={ScreenBG}
      />
      <NavigationBar
        title={'Order History'}
        leftOnPress={() => navigation.goBack()}
      />
      <NB.ScrollView
        px={2.5}
        style={styles.content}
        contentContainerStyle={styles.contentContainerStyle}
      >
        {renderHistoryList()}
        {/*{renderEmptyHistory()}*/}
      </NB.ScrollView>
    </NB.Box>
  );
}

const styles = RN.StyleSheet.create({
  container: {
    backgroundColor: ScreenBG,
    flex: 1,
  },
  content: { paddingTop: RFValue(20) },
  contentContainerStyle: {
    // justifyContent: 'center',
    // justifyContent: 'center',
    flex: 1,
  },
  iconWrapper: {
    backgroundColor: PrimaryColor + '18',
    width: RFValue(255 - 8),
    height: RFValue(255 - 8),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: RFValue(255 / 2),
    marginBottom: RFValue(20),
  },
  icon: {},
  descWrapper: { marginTop: RFValue(20) },
  title: {
    fontSize: RFValue(18),
    color: '#444444',
    textAlign: 'center',
    fontFamily: 'AvenirNextW04-Demi',
    marginBottom: RFValue(10),
  },
  subtitle: {
    fontSize: RFValue(14),
    color: '#666666',
    textAlign: 'center',
    fontFamily: 'AvenirNextLTPro-Regular',
    paddingVertical: RFValue(10),
    paddingHorizontal: RFValue(20),
    letterSpacing: 1,
    lineHeight: 25,
  },
  emptyWrapper: { marginTop: RFValue(30), alignItems: 'center' },
});
