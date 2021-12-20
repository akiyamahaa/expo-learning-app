import { useNavigation } from '@react-navigation/core';
import { Box, Button, Image, Text } from 'native-base';
import { RootStackProps } from 'navigation/RootStack';
import React from 'react';
import { ImageBackground, StyleSheet, TouchableOpacity } from 'react-native';
import color from 'utils/color';

interface Props {}

const HomeScreen = (props: Props) => {
  const navigation = useNavigation<RootStackProps['navigation']>();
  return (
    <Box style={styles.root}>
      <ImageBackground
        source={require('assets/images/bg.png')}
        style={styles.bgStyle}
      />
      <Box style={styles.logoContainer}>
        <Image
          source={require('assets/icons/big_logo.png')}
          style={styles.imageStyle}
          alt="logo"
        />
        <Box mt="5">
          <TouchableOpacity onPress={() => navigation.navigate('TheoryScreen')}>
            <Box style={styles.btnStyle}>
              <Text style={styles.textStyle}>Lý thuyết</Text>
            </Box>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('QuestionScreen')}
          >
            <Box style={styles.btnStyle}>
              <Text style={styles.textStyle}>Trắc nghiệm</Text>
            </Box>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('PracticeScreen')}
          >
            <Box style={styles.btnStyle}>
              <Text style={styles.textStyle}>Thực hành</Text>
            </Box>
          </TouchableOpacity>
        </Box>
      </Box>
    </Box>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  root: {},
  bgStyle: {
    width: '100%',
    height: '100%',
  },
  logoContainer: {
    marginTop: '20%',
    position: 'absolute',
    alignItems: 'center',
    width: '100%',
  },
  imageStyle: {
    width: 220,
    height: 220,
  },
  btnStyle: {
    backgroundColor: color.yellow,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    paddingVertical: 10,
    paddingHorizontal: 30,
  },
  textStyle: {
    fontWeight: 'bold',
    fontSize: 18,
    fontFamily: 'Chewy-Regular',
  },
});
