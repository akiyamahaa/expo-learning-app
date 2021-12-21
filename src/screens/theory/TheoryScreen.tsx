import Header from 'components/Header';
import { Box, ScrollView } from 'native-base';
import React from 'react';
import { ImageBackground, StyleSheet, TouchableOpacity } from 'react-native';
import TheoryCard from './components/TheoryCard';
import { TOPIC } from 'utils/mockup_data';
import { useNavigation } from '@react-navigation/core';
import { RootStackProps } from 'navigation/RootStack';

const TheoryScreen = () => {
  const navigation = useNavigation<RootStackProps['navigation']>();

  const handleTheoryScreen = (fileName: any) => {
    navigation.navigate('TheoryDetailScreen', { ...fileName });
  };

  return (
    <Box>
      <ImageBackground
        source={require('assets/icons/bg.png')}
        style={styles.bgStyle}
      />
      <Header title="Lý thuyết" />
      <ScrollView style={styles.cardContainer}>
        {TOPIC.map((item, index) => (
          <TouchableOpacity
            key={item.file}
            onPress={() => handleTheoryScreen(item)}
          >
            <Box mb="4">
              <TheoryCard index={index + 1} title={item.title} />
            </Box>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </Box>
  );
};

export default TheoryScreen;

const styles = StyleSheet.create({
  bgStyle: {
    width: '100%',
    height: '100%',
  },
  cardContainer: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    marginTop: 80,
    paddingHorizontal: '10%',
  },
});
