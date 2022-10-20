import { Image, View } from 'native-base';
import * as React from 'react';
import { StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

export interface AdvertItemProps {
  imageSource: any;
}

export interface AdvertItemState {}

export default class AdvertItem extends React.Component<
  AdvertItemProps,
  AdvertItemState
> {
  constructor(props: AdvertItemProps) {
    super(props);

    this.state = {};
  }

  public render() {
    return (
      <View style={[styles.container]}>
        <Image
          alt={'advert'}
          source={this.props.imageSource}
          style={styles.image}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    overflow: 'hidden',
    width: RFValue(309 - 8),
    height: RFValue(129 - 8),
    borderRadius: RFValue(10),
    elevation: RFValue(2),
    margin: RFValue(1),
  },
  image: { width: null, height: null, flex: 1 },
});
