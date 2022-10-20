import * as React from 'react';
import * as RN from 'react-native';

import * as NB from 'native-base';
import { RFValue } from 'react-native-responsive-fontsize';
import { menuData } from '../../api/datas';
import MenuItem from '../../components/MenuItem';
import NavigationBar from '../../components/NavigationBar';
import { ScreenBG, SecondaryColor } from '../../modules/colors';

export interface MenuProps {}

export interface MenuState {}

export default function Menu(props: MenuProps) {
  return (
    <NB.Box style={styles.container}>
      <RN.StatusBar
        barStyle={'dark-content'}
        backgroundColor={ScreenBG}
      />
      <NavigationBar
        leftComponent={
          <RN.Text style={styles.screenTitle}>Menu</RN.Text>
        }
      />
      <NB.View px={2.5}>
        <RN.FlatList
          style={styles.content}
          contentContainerStyle={styles.contentContainerStyle}
          showsVerticalScrollIndicator={false}
          data={menuData}
          numColumns={2}
          columnWrapperStyle={{
            justifyContent: 'space-between',
            width: '100%',
          }}
          renderItem={({
            item: { id, title, imageSource },
            index,
          }) => (
            <MenuItem
              title={title}
              imageSource={imageSource}
              key={id + index}
            />
          )}
        />
      </NB.View>
    </NB.Box>
  );
}

const styles = RN.StyleSheet.create({
  container: {
    backgroundColor: ScreenBG,
  },
  content: {},
  contentContainerStyle: {
    // alignItems: 'center',
    //justifyContent: 'space-between',
    paddingBottom: RFValue(200),
    paddingTop: RFValue(10),
  },
  screenTitle: {
    fontSize: RFValue(20),
    color: SecondaryColor,
    fontFamily: 'AvenirNextW04-Demi',
  },
});
