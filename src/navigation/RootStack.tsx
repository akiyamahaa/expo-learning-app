import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import React from 'react';
import HomeScreen from 'screens/home/HomeScreen';
import PracticeDetailScreen from 'screens/practice-detail/PracticeDetailScreen';
import PracticeScreen from 'screens/practice/PracticeScreen';
import QuestionScreen from 'screens/question/QuestionScreen';
import QuizScreen from 'screens/quiz/QuizScreen';
import ResultScreen from 'screens/result/ResultScreen';
import TheoryDetailScreen from 'screens/theory-detail/TheoryDetailScreen';
import TheoryScreen from 'screens/theory/TheoryScreen';

interface Props {}

export type RootStackParamList = {
  HomeScreen: undefined;
  TheoryScreen: undefined;
  QuestionScreen: undefined;
  TheoryDetailScreen: { file: any };
  QuizScreen: { file: string };
  ResultScreen: { file: string; resultObj: any };
  PracticeScreen: undefined;
  PracticeDetailScreen: { file: string };
};

export type RootStackProps = NativeStackScreenProps<RootStackParamList>;

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootStack = (props: Props) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="HomeScreen"
    >
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="TheoryScreen" component={TheoryScreen} />
      <Stack.Screen name="QuestionScreen" component={QuestionScreen} />
      <Stack.Screen name="TheoryDetailScreen" component={TheoryDetailScreen} />
      <Stack.Screen name="QuizScreen" component={QuizScreen} />
      <Stack.Screen name="ResultScreen" component={ResultScreen} />
      <Stack.Screen name="PracticeScreen" component={PracticeScreen} />
      <Stack.Screen name="PracticeDetailScreen" component={PracticeDetailScreen} />
    </Stack.Navigator>
  );
};

export default RootStack;
