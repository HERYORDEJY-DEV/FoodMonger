import * as React from 'react';
import * as RN from 'react-native';

import { Formik } from 'formik';
import * as NB from 'native-base';
import { RFValue } from 'react-native-responsive-fontsize';
import Feather from 'react-native-vector-icons/Feather';

import { useNavigation } from '@react-navigation/native';
import ButtonPrimaryBig from '../../components/ButtonPrimaryBig';
import InputBar from '../../components/InputBar';
import NavigationBar from '../../components/NavigationBar';
import {
  PrimaryColor,
  ScreenBG,
  SecondaryColor,
} from '../../modules/colors';
import {
  AccountSettingsDataSchema,
  accountSettingsInitialValues,
} from '../../modules/dataSchema';

export interface AccountSettingsProps {}

export interface AccountSettingsState {}

// TODO ::  Uploading of picture
// TODO ::  Updating data

export default function AccountSettings(props: AccountSettingsProps) {
  const navigation = useNavigation();

  const renderAvatar = (
    <NB.Center
      position={'absolute'}
      top={RFValue(-40)}
      left={'40%'}
      style={styles.imageWrapper}
    >
      <NB.View style={styles.imageSubWrapper}>
        <NB.Avatar
          source={require('../../assets/images/user2.jpg')}
          style={styles.thumbnail}
          rounded={'full'}
          size={'md'}
        />
        <NB.View style={styles.overlay} />
      </NB.View>

      <NB.Pressable
        style={styles.addPhotoWrapper}
        position={'absolute'}
        bottom={-6}
        right={-6}
      >
        <NB.Circle
          size={8}
          backgroundColor={PrimaryColor}
          alignItems={'center'}
          justifyContent={'center'}
          borderColor={'#FFFFFF'}
          borderWidth={2}
        >
          <NB.Icon name={'camera'} as={Feather} color={'#FFFFFF'} />
        </NB.Circle>
      </NB.Pressable>
    </NB.Center>
  );

  return (
    <NB.Box safeAreaBottom={true} style={styles.container}>
      <RN.StatusBar
        barStyle={'dark-content'}
        backgroundColor={ScreenBG}
      />
      <NavigationBar
        leftOnPress={() => navigation.goBack()}
        title={'Account Settings'}
      />
      <NB.ScrollView
        px={2.5}
        style={styles.content}
        contentContainerStyle={styles.contentContainerStyle}
      >
        <NB.View style={styles.formWrapper}>
          <Formik
            validationSchema={AccountSettingsDataSchema}
            onSubmit={values => console.log(JSON.stringify(values))}
            initialValues={accountSettingsInitialValues}
          >
            {({
              values,
              handleChange,
              errors,
              setFieldTouched,
              touched,
              isValid,
              handleSubmit,
            }) => (
              <NB.View>
                <NB.View style={styles.inputsWrapper} pt={10}>
                  {renderAvatar}
                  <InputBar
                    placeholder={'Full Name'}
                    placeholderTextColor={'transparent'}
                    value={values.fullname}
                    onChangeText={handleChange('fullname')}
                    onBlur={() => setFieldTouched('fullname')}
                    touched={touched.fullname}
                    errors={errors.fullname}
                    containerStyles={{ marginBottom: RFValue(20) }}
                  />
                  <InputBar
                    placeholder={'Email Address'}
                    placeholderTextColor={'transparent'}
                    keyboardType={'email-address'}
                    value={values.email}
                    onChangeText={handleChange('email')}
                    onBlur={() => setFieldTouched('email')}
                    touched={touched.email}
                    errors={errors.email}
                    containerStyles={{ marginBottom: RFValue(20) }}
                  />
                  <InputBar
                    secureTextEntry={true}
                    placeholder={'Date of Birth'}
                    placeholderTextColor={'transparent'}
                    value={values.dateOfBirth}
                    onChangeText={handleChange('dateOfBirth')}
                    onBlur={() => setFieldTouched('dateOfBirth')}
                    touched={touched.dateOfBirth}
                    errors={errors.dateOfBirth}
                    keyboardType={'phone-pad'}
                    containerStyles={{ marginBottom: RFValue(20) }}
                  />
                  <InputBar
                    secureTextEntry={true}
                    placeholder={'Phone Number'}
                    placeholderTextColor={'transparent'}
                    value={values.phoneNumber}
                    onChangeText={handleChange('phoneNumber')}
                    onBlur={() => setFieldTouched('phoneNumber')}
                    touched={touched.phoneNumber}
                    errors={errors.phoneNumber}
                    keyboardType={'phone-pad'}
                    containerStyles={{ marginBottom: RFValue(20) }}
                  />
                  <InputBar
                    secureTextEntry={true}
                    placeholder={'Password'}
                    placeholderTextColor={'transparent'}
                    value={values.password}
                    onChangeText={handleChange('password')}
                    onBlur={() => setFieldTouched('password')}
                    touched={touched.password}
                    errors={errors.password}
                    containerStyles={{ marginBottom: RFValue(20) }}
                  />
                </NB.View>
                <NB.View style={styles.updateWrapper}>
                  <ButtonPrimaryBig
                    title={'Update'}
                    onPress={() => {}}
                  />
                </NB.View>
              </NB.View>
            )}
          </Formik>
        </NB.View>
      </NB.ScrollView>
    </NB.Box>
  );
}

const styles = RN.StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: ScreenBG,
  },
  content: { flex: 1 },
  contentContainerStyle: { alignItems: 'center' },
  imageWrapper: {
    flex: 1,
    zIndex: 10000,
  },
  formWrapper: {
    flex: 0.7,

    width: '100%',
  },
  inputsWrapper: {
    justifyContent: 'space-between',
    // flex: 1,
    padding: RFValue(20),
    backgroundColor: '#FFF',
    borderRadius: RFValue(10),
    marginTop: RFValue(60),
    marginBottom: RFValue(20),
    paddingTop: RFValue(50),
  },

  thumbnail: {
    width: RFValue(80 - 8),
    height: RFValue(80 - 8),
    borderRadius: RFValue(109 / 2),
  },
  imageSubWrapper: {
    width: RFValue(80 - 8),
    height: RFValue(80 - 8),
    borderRadius: RFValue(109 / 2),
  },
  overlay: {
    ...RN.StyleSheet.absoluteFillObject,
    backgroundColor: SecondaryColor + '50',
    borderRadius: RFValue(109 / 2),
  },
  addPhotoWrapper: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
  },
  updateWrapper: {
    position: 'relative',
    bottom: 0,
    marginTop: RFValue(20),
  },
});
