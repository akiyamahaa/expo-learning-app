import { useNavigation } from '@react-navigation/native';
import { Box, ScrollView, Text } from 'native-base';
import React from 'react';
import {
  Dimensions,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

const TheoryItemDetail = (props: any) => {
  const { item } = props;
  const { width, height } = Dimensions.get('window');
  const navigation = useNavigation();

  return (
    <Box width={width} height={height}>
      <ImageBackground source={item.image} style={styles.bgStyle} />
      <TouchableOpacity
        style={styles.btnFinish}
        onPress={() => navigation.goBack()}
      >
        <Box>
          <Text fontSize={20}>Kết thúc</Text>
        </Box>
      </TouchableOpacity>
      <ScrollView
        nestedScrollEnabled
        style={styles.contentContainer}
        showsVerticalScrollIndicator={false}
      >
        {item.content.map((value: any, index: number) => (
          <Text fontSize={18} key={`${value}-${index}`}>
            {value}
          </Text>
        ))}
      </ScrollView>
    </Box>
  );
};

export default TheoryItemDetail;

const styles = StyleSheet.create({
  bgStyle: {
    width: '100%',
    height: '100%',
  },
  contentContainer: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
    height: '40%',
    marginHorizontal: '5%',
  },
  btnFinish: {
    position: 'absolute',
    top: 12,
    right: 12,
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 12,
    borderWidth: 1,
  },
});
