import { Pressable, View } from 'native-base';
import * as React from 'react';
import * as RN from 'react-native';

import { RFValue } from 'react-native-responsive-fontsize';
import { PrimaryColor, SecondaryColor } from '../modules/colors';
import { PlusBoxIcon } from '../svg/PlusBoxIcon';

export interface SpecialComboItemProps {
  title: string;
  imageSource: any;
  price: string;
  potion?: string;
  addition?: string;
}

export interface SpecialComboItemState {}

export default class SpecialComboItem extends React.Component<
  SpecialComboItemProps,
  SpecialComboItemState
> {
  constructor(props: SpecialComboItemProps) {
    super(props);

    this.state = {};
  }

  public render() {
    return (
      <Pressable shadow={3}>
        <View overflow={'hidden'} style={[styles.container]}>
          <RN.View style={styles.imageWrapper}>
            <RN.Image
              style={styles.image}
              source={this.props.imageSource}
            />
          </RN.View>
          <RN.View style={styles.bottomWrapper}>
            <RN.Text
              style={styles.title}
              lineBreakMode={'tail'}
              numberOfLines={1}
            >
              {this.props.title}
            </RN.Text>

            <RN.Text style={styles.price}>
              ₦
              <RN.Text style={styles.priceNumber}>
                {this.props.price}
              </RN.Text>
            </RN.Text>

            <RN.View style={styles.last}>
              {this.props.potion && (
                <RN.Text style={[styles.potion]}>
                  {this.props.potion} Potion
                </RN.Text>
              )}
              {this.props.addition && (
                <RN.Text style={[styles.potion]}>
                  {this.props.potion} Potion
                </RN.Text>
              )}
              <RN.View style={styles.iconWrapper}>
                <PlusBoxIcon />
              </RN.View>
            </RN.View>
          </RN.View>
        </View>
      </Pressable>
    );
  }
}

const styles = RN.StyleSheet.create({
  container: {
    width: RFValue(164 - 8),
    height: RFValue(179 - 8),
    // overflow: 'hidden',
    borderRadius: RFValue(10),
    // alignItems: 'center',
    backgroundColor: '#FFFF',
    marginVertical: RFValue(5),
    // marginRight: RFValue(10),
  },
  imageWrapper: {
    width: RFValue(164 - 8),
    height: RFValue(100 - 8),
    overflow: 'hidden',
  },
  image: { flex: 1, height: null, width: null },
  bottomWrapper: {
    // alignItems: 'center',
    justifyContent: 'space-between',
    flex: 1,
    padding: RFValue(10),
    paddingBottom: 0,
    paddingRight: 0,
  },
  title: {
    fontSize: RFValue(14),
    fontFamily: 'AvenirNextLTPro-Regular',
    color: SecondaryColor,
    textTransform: 'capitalize',
  },
  price: {
    color: PrimaryColor,
    fontSize: RFValue(12),
    fontFamily: 'AvenirNextW10-Medium',
  },
  priceNumber: {
    fontSize: RFValue(16),
    color: SecondaryColor,
    fontFamily: 'AvenirNextW04-Demi',
  },
  iconWrapper: {
    height: RFValue(34 - 8),
    width: RFValue(34 - 8),
    backgroundColor: PrimaryColor,
    alignItems: 'center',
    justifyContent: 'center',
    borderTopLeftRadius: RFValue(10),
  },
  potion: { color: '#898A8D', fontSize: RFValue(12) },
  last: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
