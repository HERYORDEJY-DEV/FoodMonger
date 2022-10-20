import * as React from 'react';
import * as RN from 'react-native';

import * as NB from 'native-base';
import { RFValue } from 'react-native-responsive-fontsize';
import { specialCombosData } from '../../api/datas';
import HomeSearchBar from '../../components/HomeSearchBar';
import SearchItemHorizontal from '../../components/SearchItemHorizontal';
import {
  PrimaryColor,
  ScreenBG,
  SecondaryColor,
} from '../../modules/colors';
import { GridViewIcon, ListViewIcon } from '../../svg/ViewIcons';
import SpecialComboItem from './../../components/SpecialComboItem';

export interface SearchProps {}

export interface SearchState {}

export default function Search(props: SearchProps) {
  const [state, setState] = React.useState({
    GridColumnsValue: true,
    ButtonDefaultText: 'CHANGE TO GRIDVIEW',
  });

  const changeGridValueFunction = (
    GridColumnsValue: boolean,
    ButtonDefaultText: string,
  ) => {
    // if (state.GridColumnsValue === true) {
    //   setState({
    //     GridColumnsValue: false,
    //     ButtonDefaultText: 'CHANGE TO LISTVIEW',
    //   });
    // } else {
    //   setState({
    //     GridColumnsValue: true,
    //     ButtonDefaultText: 'CHANGE TO GRIDVIEW',
    //   });
    // }
    setState(() => ({
      ...state,
      GridColumnsValue,
      ButtonDefaultText,
    }));
  };

  const renderViewbar = () => (
    <NB.View style={styles.viewBarWrapper}>
      <RN.Text style={styles.resultCount}>6 Results Found</RN.Text>
      <NB.View style={styles.viewButtonsWrapper}>
        <RN.Pressable
          style={styles.viewButton}
          onPress={() =>
            changeGridValueFunction(true, 'CHANGE TO GRIDVIEW')
          }
        >
          <GridViewIcon
            stroke={state.GridColumnsValue ? PrimaryColor : '#353534'}
          />
        </RN.Pressable>
        <RN.Pressable
          style={[styles.viewButton, { paddingRight: 0 }]}
          onPress={() =>
            changeGridValueFunction(false, 'CHANGE TO LISTVIEW')
          }
        >
          <ListViewIcon
            stroke={
              !state.GridColumnsValue ? PrimaryColor : '#353534'
            }
          />
        </RN.Pressable>
      </NB.View>
    </NB.View>
  );

  const renderListHeader = () => (
    <NB.View mt={3} mx={2.5}>
      <HomeSearchBar />
      {renderViewbar()}
    </NB.View>
  );

  const renderItem = desc =>
    !state.GridColumnsValue ? (
      <SearchItemHorizontal
        {...desc}
        addition={3}
        // {...name}
        // percentDiscount={12}
        // amount={231}
        // containerStyles={{
        //   paddingHorizontal: RFValue(5),
        //   marginBottom: RFValue(10),
        // }}
      />
    ) : (
      <SpecialComboItem
        {...desc}
        // containerStyle={{ marginBottom: RFValue(20) }}
      />
    );

  return (
    <NB.Box safeAreaY={true} style={styles.container}>
      <RN.StatusBar
        barStyle={'dark-content'}
        backgroundColor={ScreenBG}
      />
      {renderListHeader()}
      <RN.FlatList
        horizontal={false}
        style={styles.content}
        numColumns={state.GridColumnsValue ? 2 : 1}
        key={state.GridColumnsValue ? 'TWO COLUMN' : 'ONE COLUMN'}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[
          styles.contentContainerStyle,
          // {
          //   alignItems: state.GridColumnsValue ? 'center' : null,
          //   justifyContent: 'space-between',
          // },
        ]}
        columnWrapperStyle={
          state.GridColumnsValue
            ? {
                justifyContent: 'space-between',
                width: '100%',
              }
            : null
        }
        data={specialCombosData}
        renderItem={({ item, index }) => renderItem(item)}
      />
    </NB.Box>
  );
}

const styles = RN.StyleSheet.create({
  container: {},
  content: {},
  contentContainerStyle: {
    // paddingVertical: RFValue(20),
    paddingHorizontal: RFValue(10),
    margin: 0,
    // alignItems: 'center',
  },
  viewBarWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  resultCount: {
    fontSize: RFValue(14),
    color: SecondaryColor,
    fontFamily: 'AvenirNextW04-Demi',
  },
  viewButtonsWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    // flex: 0.25,
  },
  viewButton: { padding: RFValue(10) },
});
