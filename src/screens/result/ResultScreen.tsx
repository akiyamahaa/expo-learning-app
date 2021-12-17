import { useNavigation, useRoute } from '@react-navigation/native';
import { Box, Image, Text } from 'native-base';
import { RootStackProps } from 'navigation/RootStack';
import React, { useEffect, useState } from 'react';
import { ImageBackground, StyleSheet, TouchableOpacity } from 'react-native';
import color from 'utils/color';
import { evaluateSentence, answer_topic } from 'utils/mockup_data';

const ResultScreen = () => {
  const route = useRoute();
  const navigation = useNavigation<RootStackProps['navigation']>();
  const { params }: any = route;
  const [result, setResult] = useState('');
  const [point, setPoint] = useState(0);

  useEffect(() => {
    if (params.id) {
      const answer = answer_topic[params.id];
      const mark = answer.reduce((total, currResult, currIndex) => {
        const index = currIndex + 1;
        if (params.resultObj[index] == currResult) {
          return total + 1;
        }
        return total;
      }, 0);
      setPoint(mark);
      const evaluateList = evaluateSentence(mark);
      setResult(evaluateList[Math.floor(Math.random() * evaluateList.length)]);
    }
  }, []);
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
        <Box mt="5" width="90%">
          <Text fontSize={24} bold textAlign="center" mb="4">
            Bạn đúng {point}/10 câu nè!
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
    backgroundColor: color.yellow,
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
