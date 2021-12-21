import { useNavigation, useRoute } from '@react-navigation/native';
import Header from 'components/Header';
import { Box, Radio, ScrollView, Text, Button } from 'native-base';
import React, { useEffect, useState } from 'react';
import { ImageBackground, StyleSheet, TouchableOpacity } from 'react-native';
import color from 'utils/color';
import { RootStackProps } from 'navigation/RootStack';
import bai1 from 'utils/data/qbai1';
import bai2 from 'utils/data/qbai2';
import bai3 from 'utils/data/qbai3';
import bai4 from 'utils/data/qbai4';
import bai5 from 'utils/data/qbai5';
import bai6 from 'utils/data/qbai6';

const qbaihoc: any = {
  bai1,
  bai2,
  bai3,
  bai4,
  bai5,
  bai6,
};

const QuizScreen = () => {
  const route = useRoute();
  const { params }: any = route;
  const navigation = useNavigation<RootStackProps['navigation']>();
  const [value, setValue] = useState<any>({
    '1': '',
    '2': '',
    '3': '',
    '4': '',
  });

  const submitQuiz = () => {
    console.log(value);
    navigation.navigate('ResultScreen', {
      file: params.file,
      resultObj: value,
    });
  };

  const detail_data = qbaihoc[params.file];

  return (
    <Box>
      <ImageBackground
        source={require('assets/icons/bg.png')}
        style={styles.bgStyle}
      />
      <Header title="Trả lời câu hỏi" />
      <ScrollView style={styles.quizContainer}>
        {detail_data.map((item: any) => (
          <Box style={styles.boxQuiz} key={item.quesNum}>
            <Text fontSize={20} bold>
              Câu {item.quesNum}:<Text fontSize={18}>{item.ques}</Text>
            </Text>
            <Radio.Group
              name="myRadioGroup"
              accessibilityLabel="favorite number"
              value={value[item.quesNum]}
              onChange={(nextValue) => {
                setValue({ ...value, [item.quesNum]: nextValue });
              }}
            >
              {item.choose.map((kq: any, index: number) => (
                <Radio
                  value={`${index + 1}`}
                  my={1}
                  size="lg"
                  key={`${kq}-${index}`}
                >
                  <Text m="3" fontSize={17} width="80%">
                    {kq}
                  </Text>
                </Radio>
              ))}
            </Radio.Group>
          </Box>
        ))}
        <TouchableOpacity onPress={submitQuiz}>
          <Box style={styles.btnStyle}>
            <Text style={styles.textStyle}>Nộp bài</Text>
          </Box>
        </TouchableOpacity>
      </ScrollView>
    </Box>
  );
};

export default QuizScreen;

const styles = StyleSheet.create({
  bgStyle: {
    width: '100%',
    height: '100%',
  },
  quizContainer: {
    paddingHorizontal: '5%',
    position: 'absolute',
    top: '10%',
    bottom: 0,
    left: 0,
    right: 0,
    width: '100%',
  },
  boxQuiz: {
    width: '100%',
    borderRadius: 10,
    backgroundColor: '#fff',
    padding: 16,
    marginBottom: 20,
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
