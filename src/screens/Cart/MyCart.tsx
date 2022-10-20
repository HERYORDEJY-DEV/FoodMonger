import * as React from 'react';
import * as RN from 'react-native';

import { useNavigation } from '@react-navigation/native';
import * as NB from 'native-base';
import { RFValue } from 'react-native-responsive-fontsize';
import { cartItemData, promoCodeData } from '../../api/datas';
import ButtonPrimaryBig from '../../components/ButtonPrimaryBig';
import MyCartinvoice from '../../components/MyCartInvoice';
import MyCartItem from '../../components/MyCartItem';
import NavigationBar from '../../components/NavigationBar';
import PromoCodeBar from '../../components/PromoCodeBar';
import {
  PrimaryColor,
  ScreenBG,
  SecondaryColor,
} from '../../modules/colors';
import { CartIcon } from '../../svg/CartIcon';

export interface MyCartProps {}

export interface MyCartState {}

interface CartItemProps {
  id: string;
  title: string;
  price: string;
  discountPercent: string;
  quantity: string;
  addition: string;
  imageSource: any;
}

interface PromoCodeProps {
  id: string;
  title: string;
  code: string;
  discountPercent: string;
}

export default function MyCart(props: MyCartProps) {
  //cart item (price & quamtity) state
  const [priceQuantity, setPriceQuantity] = React.useState([{}]);

  //useEffect for loading price & quantity of cart items
  React.useEffect(
    () =>
      setPriceQuantity(
        cartItemData.map(
          (
            { id, price, quantity, discountPercent }: CartItemProps,
            index,
          ) => ({
            id,
            price,
            quantity,
            // discountPercent,
          }),
        ),
      ),
    [],
  );

  // render if promo code is invalid
  const renderInvalidPromoCode = () =>
    RN.Alert.alert(
      'Sorry D;',
      'The code you entered is invalid or has expired, please, check again',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        // { text: 'OK', onPress: () => console.log('OK Pressed') },
      ],
    );

  //Promo code state
  const [promoCode, setPromoCode] = React.useState({
    code: '',
    info: {},
    valid: false,
  });

  //on Enter promo code
  const onEnterPromoCode = (code: string) => {
    setPromoCode({ code, info: {} });
    console.log(code);
  };

  //  Apply promo code
  const onApplyPromoCode = () => {
    for (const code in promoCodeData) {
      if (promoCodeData[code].code === promoCode.code) {
        setPromoCode({
          ...promoCode,
          valid: true,
          info: promoCodeData[code],
        });
      } else {
        setPromoCode({
          code: '',
          info: {},
          valid: false,
        });
        // renderInvalidPromoCode();
      }
    }
  };
  console.log(promoCode);

  // navigation instance
  const navigation = useNavigation();

  //calculate Subtotal
  const subTotalPrice = priceQuantity
    .map((li: CartItemProps) => +li.price * +li.quantity)
    .reduce((sum, val) => sum + val, 0);

  //calculate Discount
  // const discountPrice = Math.ceil(
  //   priceQuantity
  //     .map(
  //       (li: CartItemProps) =>
  //         (+li.discountPercent / 100) * +li.price * +li.quantity,
  //     )
  //     .reduce((sum, val) => sum + val, 0),
  // );

  const discountPrice = Math.ceil(
    Math.ceil(
      subTotalPrice * (+(promoCode.info.discountPercent ?? 0) / 100),
    ),
  );

  //change item quantity
  const changeQuantity = (id, quantity) =>
    setPriceQuantity(
      priceQuantity.map((item: CartItemProps, index) =>
        item.id === id ? { ...item, quantity } : item,
      ),
    );

  //render for if cart is empty
  const renderEmptyCart = () => (
    <RN.View style={styles.emptyCartWrapper}>
      <RN.View style={styles.cartIconWrapper}>
        <CartIcon />
      </RN.View>
      <RN.View style={styles.contentWrapper}>
        <RN.Text style={styles.contentTitle}>
          Your Cart is Empty
        </RN.Text>
        <RN.Text style={styles.contentSubtitle}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Facilisi arcu ut aliquet et cursus.
        </RN.Text>
      </RN.View>
    </RN.View>
  );

  // render for if cart is not empty
  const renderCartList = () => (
    <RN.View style={styles.cartListWrapper}>
      {cartItemData.map((item: CartItemProps, index) => (
        <MyCartItem
          key={item.id + index}
          title={item.title}
          price={item.price}
          quantity={+item.quantity}
          imageSource={item.imageSource}
          addition={item.addition}
          onChangeQuantity={changeQuantity}
          id={item.id}
        />
      ))}
      <PromoCodeBar
        onEnterCode={onEnterPromoCode}
        onApplyCode={onApplyPromoCode}
      />
      <MyCartinvoice
        subtotal={subTotalPrice}
        discount={discountPrice}
      />
      <ButtonPrimaryBig
        title={'Check Out'}
        onPress={() => navigation.navigate('CheckOut')}
        containerStyles={styles.checkOutButtonWrapper}
      />
    </RN.View>
  );

  return (
    <NB.Box style={styles.container}>
      <RN.StatusBar
        barStyle={'dark-content'}
        backgroundColor={ScreenBG}
      />
      <NavigationBar
        leftComponent={
          <RN.Text style={styles.screenTitle}>My Cart</RN.Text>
        }
      />
      <NB.ScrollView
        px={2.5}
        style={styles.content}
        contentContainerStyle={styles.contentContainerStyle}
        showsVerticalScrollIndicator={false}
      >
        {cartItemData.length > 0
          ? renderCartList()
          : renderEmptyCart()}
      </NB.ScrollView>
    </NB.Box>
  );
}

const styles = RN.StyleSheet.create({
  container: {
    paddingBottom: RFValue(80),
    backgroundColor: ScreenBG,
    paddingTop: 0,
  },
  content: {},
  contentContainerStyle: {
    // alignItems: 'center',
    // justifyContent: 'center',
    paddingBottom: RFValue(20),
  },
  emptyCartWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    marginTop: RFValue(30),
  },
  cartListWrapper: {
    // alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    // marginTop: RFValue(30),
  },
  headerWrapper: {
    alignItems: 'flex-start',
    paddingHorizontal: RFValue(20),
  },
  headerTitle: {
    fontSize: RFValue(20),
    fontFamily: 'AvenirNextW04-Demi',
    color: SecondaryColor,
  },
  cartIconWrapper: {
    height: RFValue(255 - 8),
    width: RFValue(255 - 8),
    borderRadius: 255,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: PrimaryColor + '18',
  },
  contentWrapper: {
    margin: RFValue(40),
    alignItems: 'center',
  },
  contentTitle: {
    fontSize: RFValue(18),
    fontFamily: 'AvenirNextW04-Demi',
    color: '#444444',
    marginBottom: RFValue(20),
  },
  contentSubtitle: {
    fontSize: RFValue(14),
    fontFamily: 'AvenirNextLTPro-Regular',
    color: '#666666',
    textAlign: 'center',
    lineHeight: RFValue(20),
  },
  screenTitle: {
    fontSize: RFValue(20),
    color: SecondaryColor,
    fontFamily: 'AvenirNextW04-Demi',
  },
  checkOutButtonWrapper: { marginVertical: RFValue(10) },
});
