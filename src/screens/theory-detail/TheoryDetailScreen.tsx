import Header from 'components/Header';
import { Box, FlatList, Icon, Image, ScrollView, Text } from 'native-base';
import React, { useEffect, useState } from 'react';
import { Dimensions, ImageBackground, StyleSheet } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { Entypo } from '@expo/vector-icons';
import bai1 from 'utils/data/bai1';
import bai2 from 'utils/data/bai2';
import bai3 from 'utils/data/bai3';
import bai4 from 'utils/data/bai4';
import bai5 from 'utils/data/bai5';
import bai6 from 'utils/data/bai6';

const renderImgWithContent = (listData: any) => {
  return (
    <>
      {listData.map((item: any, index: number) => (
        <Box key={`${item.img}-${index}`} marginY="2">
          <Image
            source={item.img}
            alt="lmao"
            style={{ width: '100%', height: 200, resizeMode:'contain' }}
          />
          {item.contents.map((i: any, idx: number) => (
            <Box
              flexDirection={'row'}
              alignItems={'flex-start'}
              key={`${i}-${idx}`}
              my="1"
            >
              <Icon as={Entypo} name="dot-single" />
              <Text width="90%" fontSize={20}>
                {i}
              </Text>
            </Box>
          ))}
        </Box>
      ))}
    </>
  );
};

const baihoc: any = {
  bai1,
  bai2,
  bai3,
  bai4,
  bai5,
  bai6,
};
const TheoryDetailScreen = (props: any) => {
  const {} = props;
  const route = useRoute();
  const { params }: any = route;
  // const fileName = params.file;

  const detail_data = baihoc[params.file];
  const [partOne, partTwo, partThree] = detail_data;

  useEffect(() => {}, []);

  return (
    <Box width="100%">
      <ImageBackground
        source={require('assets/icons/bg.png')}
        style={styles.bgStyle}
      />
      <Header title={'Nội dung bài học'} />
      <ScrollView style={styles.cardContainer}>
        {/* Module -1 */}
        <Box>
          <Text bold fontSize={24}>
            1. {partOne.title}
          </Text>
          {partOne.contents.map((item: any) => (
            <Box
              flexDirection={'row'}
              alignItems={'flex-start'}
              key={item}
              my="1"
            >
              <Icon as={Entypo} name="dot-single" />
              <Text width="90%" fontSize={20}>
                {item}
              </Text>
            </Box>
          ))}
        </Box>
        {/* Module - 2 */}
        <Box>
          <Text bold fontSize={24}>
            2. {partTwo.title}
          </Text>
          {renderImgWithContent(partTwo.contentWithImg)}
        </Box>
        {/* Module - 3*/}
        <Box>
          <Text bold fontSize={24}>
            3. {partThree.title}
          </Text>
          {partThree.subcontents.map((content: any, index: number) => (
            <Box key={content.title}>
              <Text bold fontSize={20}>
                3.{index + 1}. {content.title}
              </Text>
              {renderImgWithContent(content.contentWithImg)}
            </Box>
          ))}
        </Box>
      </ScrollView>
    </Box>
  );
};

export default TheoryDetailScreen;

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
    marginBottom: 20,
    paddingHorizontal: '10%',
  },
});
