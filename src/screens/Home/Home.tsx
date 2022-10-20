import * as React from 'react';
import { FlatList, StatusBar, StyleSheet, Text } from 'react-native';

import SearchItemHorizontal from '@components/SearchItemHorizontal';
import { useNavigation } from '@react-navigation/native';
import { Box, Pressable, ScrollView, View } from 'native-base';
import { RFValue } from 'react-native-responsive-fontsize';
import {
  advertData,
  specialCombosData,
  topCategoryData,
} from '../../api/datas';
import AdvertItem from '../../components/AdvertItem';
import HomeHeaderBar from '../../components/HomeHeaderBar';
import HomeSearchBar from '../../components/HomeSearchBar';
import SpecialComboItem from '../../components/SpecialComboItem';
import Swiper from '../../components/Swiper';
import TopCategoryItem from '../../components/TopCategoryItem';
import { ScreenBG, SecondaryColor } from '../../modules/colors';

export interface HomeProps {}

export interface HomeState {}

export default function Home(props: HomeProps) {
  const navigation = useNavigation();

  const renderAdverts = () => (
    <Swiper
      contentContainerStyle={styles.renderAdvertsContainer}
      data={advertData}
      horizontal={true}
    >
      {advertData.map((advert: { id: string }, index) => (
        <Pressable mr={2.5} key={advert.id} shadow={3}>
          <AdvertItem
            imageSource={require('../../assets/images/advertImage.png')}
          />
        </Pressable>
      ))}
    </Swiper>
  );

  const renderTopCategory = () => (
    <View style={styles.topCategoryWrapper}>
      <View style={styles.topCategoryHeaderWrapper}>
        <Text style={styles.topCategoryTitle}>Top Categories</Text>
        <Pressable>
          <Text style={styles.topCategorySubtitle}>See All</Text>
        </Pressable>
      </View>
      <ScrollView
        style={styles.renderTopCategory}
        contentContainerStyle={styles.renderTopCategoryContainer}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      >
        {topCategoryData.map(
          (
            cat: { id: string; title: string; imageSource: any },
            index,
          ) => (
            <Pressable style={styles.topCategoryItem} key={cat.id}>
              <TopCategoryItem
                title={cat.title}
                imageSource={cat.imageSource}
              />
            </Pressable>
          ),
        )}
      </ScrollView>
    </View>
  );

  // TODO layout of 2 columns yet to be done
  const renderSpecialCombos = () => (
    <View style={styles.combosWrapper}>
      <View style={styles.topCategoryHeaderWrapper}>
        <Text style={styles.topCategoryTitle}>Special Combos</Text>
        <Pressable>
          <Text style={styles.topCategorySubtitle}>See All</Text>
        </Pressable>
      </View>
      <ScrollView
        style={styles.renderTopCategory}
        contentContainerStyle={[
          styles.renderTopCategoryContainer,
          { marginBottom: 0 },
        ]}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      >
        {specialCombosData.map(
          (
            cat: {
              id: string;
              title: string;
              price: string;
              potion: string;
              imageSource: any;
            },
            index,
          ) => (
            <Pressable style={styles.topCategoryItem} key={cat.id}>
              <SpecialComboItem
                title={cat.title}
                imageSource={cat.imageSource}
                price={cat.price}
                potion={cat.potion}
              />
            </Pressable>
          ),
        )}
      </ScrollView>
    </View>
  );

  const renderHeader = () => {
    return (
      <View>
        {renderAdverts()}
        {renderTopCategory()}
        {renderSpecialCombos()}
        <View m={2.5}>
          <Text style={styles.topCategoryTitle}>Trending Combos</Text>
        </View>
      </View>
    );
  };

  return (
    <Box style={styles.container} bg={'red.200'}>
      <StatusBar
        barStyle={'dark-content'}
        backgroundColor={ScreenBG}
      />
      <View style={styles.topWrapper} mx={2.5}>
        <HomeHeaderBar />
        <HomeSearchBar />
      </View>

      <FlatList
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={renderHeader()}
        data={specialCombosData}
        contentContainerStyle={{}}
        renderItem={({ item, index }) => (
          <SearchItemHorizontal
            {...item}
            containerStyles={{ marginHorizontal: RFValue(10) }}
            onPress={() => navigation.navigate('FoodInfo')}
          />
        )}
      />
    </Box>
  );
}

const styles = StyleSheet.create({
  container: { backgroundColor: ScreenBG },
  content: {},
  contentContainerStyle: {},
  topWrapper: {
    paddingTop: RFValue(0),
  },
  renderAdvertsContainer: {
    paddingHorizontal: RFValue(10),
    // paddingRight: RFValue(150),
    marginBottom: RFValue(20),
    // flex: 1,
  },
  advertItem: { marginRight: RFValue(10) },
  renderTopCategoryContainer: {
    paddingHorizontal: RFValue(10),
    marginBottom: RFValue(20),
  },
  topCategoryItem: { marginRight: RFValue(10) },
  topCategoryWrapper: { marginTop: RFValue(30) },
  combosWrapper: { marginBottom: RFValue(20) },
  topCategoryHeaderWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: RFValue(10),
  },
  topCategoryTitle: {
    fontSize: RFValue(18),
    color: SecondaryColor,
    fontFamily: 'AvenirNextW04-Demi',
  },
  topCategorySubtitle: {
    fontSize: RFValue(14),
    color: SecondaryColor,
    fontFamily: 'AvenirNextW10-Medium',
  },
  renderTopCategory: { marginTop: RFValue(20) },
});
