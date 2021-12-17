import { useNavigation, useRoute } from '@react-navigation/native';
import Header from 'components/Header';
import { Box, Radio, ScrollView, Text, Button } from 'native-base';
import React, { useEffect, useState } from 'react';
import { ImageBackground, StyleSheet, TouchableOpacity } from 'react-native';
import color from 'utils/color';
import { RootStackProps } from 'navigation/RootStack';

const QuizScreen = () => {
  const route = useRoute();
  const { params }: any = route;
  const navigation = useNavigation<RootStackProps['navigation']>();
  const [value, setValue] = useState<any>({
    '1': '',
    '2': '',
    '3': '',
    '4': '',
    '5': '',
    '6': '',
    '7': '',
    '8': '',
    '9': '',
    '10': '',
  });

  const submitQuiz = () => {
    navigation.navigate('ResultScreen', { id: params.id, resultObj: value });
  };

  useEffect(() => {
    if (params.id) {
    }
  }, []);

  return (
    <Box>
      <ImageBackground
        source={require('assets/images/bg.png')}
        style={styles.bgStyle}
      />
      <Header title="Trả lời câu hỏi" />
      <ScrollView style={styles.quizContainer}>

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
