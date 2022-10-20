import * as React from 'react';
import * as RN from 'react-native';

import { useNavigation } from '@react-navigation/native';
import * as NB from 'native-base';
import { RFValue } from 'react-native-responsive-fontsize';
import Feather from 'react-native-vector-icons/Feather';
import { cartItemData } from '../../api/datas';
import ButtonPrimaryBig from '../../components/ButtonPrimaryBig';
import MyCartItem from '../../components/MyCartItem';
import NavigationBar from '../../components/NavigationBar';
import OrderSummaryPayment from '../../components/OrderSummaryPayment';

import {
  PrimaryColor,
  ScreenBG,
  SecondaryColor,
} from '../../modules/colors';

export interface CheckOutProps {}

export interface CheckOutState {}

interface CartItemProps {
  id: string;
  title: string;
  price: string;
  discountPercent: string;
  quantity: string;
  addition: string;
  imageSource: any;
}

export default function CheckOut(props: CheckOutProps) {
  const navigation = useNavigation();
  const [state, setState] = React.useState({
    showAddressInput: false,
  });

  const toggleShowAddressInput = () =>
    setState(prev => ({
      ...prev,
      showAddressInput: !prev.showAddressInput,
    }));

  const subTotalPrice = () => {};

  return (
    <NB.Box safeAreaBottom={true} style={styles.container}>
      <RN.StatusBar
        barStyle={'dark-content'}
        backgroundColor={ScreenBG}
      />
      <NavigationBar
        title={'Check Out'}
        leftOnPress={() => navigation.goBack()}
      />
      <NB.ScrollView
        px={2.5}
        style={styles.content}
        contentContainerStyle={styles.contentContainerStyle}
        showsVerticalScrollIndicator={false}
      >
        <NB.View mt={5}>
          <NB.View
            style={styles.deliveryAddressWrapper}
            mb={state.showAddressInput ? 2 : 5}
          >
            <RN.Text style={styles.deliveryAddressTitle}>
              Delivery Address
            </RN.Text>
            <NB.Pressable
              onPress={toggleShowAddressInput}
              style={styles.enterAddressWrapper}
            >
              <NB.View style={styles.plusWrapper}>
                <NB.Icon
                  name={'plus'}
                  as={Feather}
                  color={PrimaryColor}
                  size={'lg'}
                />
              </NB.View>
              <RN.Text style={styles.enterAddressTitle}>
                Enter your address
              </RN.Text>
            </NB.Pressable>
          </NB.View>

          {state.showAddressInput && (
            <NB.View style={styles.inputAddressWrapper} mb={5}>
              <RN.TextInput
                placeholder={'Enter your address here'}
                style={styles.addressInput}
              />
              <NB.View style={[styles.flexRow]}>
                <ButtonPrimaryBig
                  containerStyles={styles.cancelButton}
                  titleStyles={styles.cancelText}
                  title={'Cancel'}
                />
                <ButtonPrimaryBig
                  containerStyles={styles.saveButton}
                  titleStyles={styles.saveText}
                  title={'Save'}
                />
              </NB.View>
            </NB.View>
          )}
        </NB.View>

        <OrderSummaryPayment />

        <NB.View style={styles.orderList}>
          <RN.Text style={styles.deliveryAddressTitle}>
            Order Summary
          </RN.Text>
          {cartItemData.map((item: CartItemProps, index) => (
            <MyCartItem
              key={item.id + index}
              title={item.title}
              price={item.price}
              quantity={+item.quantity}
              imageSource={item.imageSource}
              addition={item.addition}
              summary={true}
              id={item.id}
            />
          ))}
        </NB.View>
        <ButtonPrimaryBig
          title={'Confirm Order'}
          containerStyles={{ marginVertical: RFValue(20) }}
          onPress={() => navigation.navigate('OrderSuccesful')}
        />
      </NB.ScrollView>
    </NB.Box>
  );
}

const styles = RN.StyleSheet.create({
  container: {
    backgroundColor: ScreenBG,
  },
  content: {},
  contentContainerStyle: {
    paddingBottom: RFValue(100),
  },
  deliveryAddressWrapper: {
    marginVertical: RFValue(10),
  },
  deliveryAddressTitle: {
    fontSize: RFValue(16),
    color: '#999999',
    fontFamily: 'AvenirNextW10-Medium',
    marginBottom: RFValue(10),
  },
  enterAddressWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: RFValue(64 - 8),
    borderRadius: RFValue(10),
    backgroundColor: '#FFFFFF',
    elevation: RFValue(2),
    margin: RFValue(1),
    paddingHorizontal: RFValue(10),
  },
  plusWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    height: RFValue(37.47 - 8),
    width: RFValue(37.47 - 8),
    borderRadius: RFValue(5),
    backgroundColor: '#FF3B30' + 14,
    borderWidth: RFValue(0.5),
    borderColor: PrimaryColor,
    borderStyle: 'dashed',
  },
  plusIcon: { fontSize: RFValue(16), color: PrimaryColor },
  enterAddressTitle: {
    flex: 1,
    textAlign: 'center',
    fontSize: RFValue(18),
    color: SecondaryColor,
  },
  orderList: {},
  flexRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  inputAddressWrapper: {
    backgroundColor: '#FFF',
    padding: RFValue(10),
    borderRadius: RFValue(10),
  },
  cancelButton: {
    backgroundColor: '#F2F2F2',
    flex: 1,
    marginRight: RFValue(30),
  },
  cancelText: { color: SecondaryColor },
  saveButton: {
    backgroundColor: PrimaryColor + 20,
    flex: 1,
    marginLeft: RFValue(30),
  },
  saveText: { color: PrimaryColor },
  addressInputWrapper: { marginBottom: RFValue(10) },
  addressInput: {
    fontSize: RFValue(16),
    marginBottom: RFValue(10),
    height: RFValue(50),
  },
});
