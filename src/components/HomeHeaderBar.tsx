import * as React from 'react';
import { StyleSheet, Text } from 'react-native';

import { Avatar, Box, HStack, Pressable, View } from 'native-base';
import { RFValue } from 'react-native-responsive-fontsize';

import { ScreenBG, SecondaryColor } from '../modules/colors';
import { rfv } from '../modules/sizing';
import { BellIcon } from '../svg/BellIcon';

export interface HomeHeaderBarProps {}

export interface HomeHeaderBarState {}

export default class HomeHeaderBar extends React.Component<
  HomeHeaderBarProps,
  HomeHeaderBarState
> {
  constructor(props: HomeHeaderBarProps) {
    super(props);

    this.state = {};
  }

  public render() {
    return (
      <Box safeAreaTop={true}>
        <HStack style={[styles.container]}>
          <HStack style={styles.bioWrapper}>
            <Avatar
              alignSelf="center"
              size="md"
              source={require('../assets/images/user2.jpg')}
              mr={3}
            />
            <View>
              <Text style={styles.greeting}>Good Morning</Text>
              <Text style={styles.name}>Ayodeji</Text>
            </View>
          </HStack>
          <Pressable style={styles.iconWrapper}>
            <BellIcon />
          </Pressable>
        </HStack>
      </Box>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: RFValue(56 - 8),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: RFValue(20),
    backgroundColor: ScreenBG,
  },
  bioWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  thumbnail: {
    // borderRadius: RFValue(10),
    width: RFValue(42),
    height: RFValue(42),
    marginRight: RFValue(10),
  },
  greeting: {
    fontSize: RFValue(12),
    color: SecondaryColor,
    fontFamily: 'SFProDisplay-Regular',
  },
  name: {
    fontSize: RFValue(20),
    color: SecondaryColor,
    // paddingTop: RFValue(1),
    fontFamily: 'SFProDisplay-Semibold',
  },
  iconWrapper: {
    width: RFValue(56 - 8),
    height: rfv(56),
    alignItems: 'center',
    justifyContent: 'center',
  },
});
