import { useNavigation, useRoute } from '@react-navigation/native';
import { Box, Image, Text } from 'native-base';
import { RootStackProps } from 'navigation/RootStack';
import React, { useEffect, useState } from 'react';
import { ImageBackground, StyleSheet, TouchableOpacity } from 'react-native';
import color from 'utils/color';
import bai1 from 'utils/data/qbai1';
import bai2 from 'utils/data/qbai2';
import bai3 from 'utils/data/qbai3';
import bai4 from 'utils/data/qbai4';
import bai5 from 'utils/data/qbai5';
import bai6 from 'utils/data/qbai6';
import { evaluateSentence } from 'utils/mockup_data';

const qbaihoc: any = {
  bai1,
  bai2,
  bai3,
  bai4,
  bai5,
  bai6,
};

const ResultScreen = () => {
  const route = useRoute();
  const navigation = useNavigation<RootStackProps['navigation']>();
  const { params }: any = route;
  // Ques Arr
  const detail_data = qbaihoc[params.file];
  // Choose Dict
  const chose_result = params.resultObj;

  const result_arr = detail_data.map((item: any) => item.answer);
  const mark = result_arr.reduce(
    (total: any, currResult: any, currIndex: any) => {
      const index = currIndex + 1;
      if (chose_result[index] == currResult) {
        return total + 1;
      }
      return total;
    },
    0
  );
  const evaluateList = evaluateSentence(mark);

  const [result] = useState(
    evaluateList[Math.floor(Math.random() * evaluateList.length)]
  );
  const [point] = useState(mark);

  return (
    <Box style={styles.root}>
      <ImageBackground
        source={require('assets/icons/bg.png')}
        style={styles.bgStyle}
      />
      <Box style={styles.logoContainer}>
        <Image
          source={require('assets/icons/logo.png')}
          style={styles.imageStyle}
          resizeMode="contain"
          alt="logo"
        />
        <Box mt="5" width="90%">
          <Text fontSize={24} bold textAlign="center" mb="4">
            Bạn đúng {point}/4 câu nè!
          </Text>
          <Text fontSize={20}>{result}</Text>
        </Box>
        <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}>
          <Box style={styles.btnStyle}>
            <Text style={styles.textStyle}>Quay trờ lại học tập</Text>
          </Box>
        </TouchableOpacity>
      </Box>
    </Box>
  );
};

export default ResultScreen;

const styles = StyleSheet.create({
  root: {},
  bgStyle: {
    width: '100%',
    height: '100%',
  },
  logoContainer: {
    marginTop: '10%',
    position: 'absolute',
    alignItems: 'center',
    width: '100%',
  },
  imageStyle: {
    width: 220,
    height: 220,
  },
  btnStyle: {
    backgroundColor: color.light_red,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 40,
    paddingVertical: 10,
    paddingHorizontal: 30,
  },
  textStyle: {
    fontWeight: 'bold',
    fontSize: 18,
    fontFamily: 'Chewy-Regular',
  },
});
