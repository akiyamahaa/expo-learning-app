import Header from 'components/Header';
import { Box, Icon, Image, ScrollView, Text } from 'native-base';
import React from 'react';
import { ImageBackground, StyleSheet } from 'react-native';
import { useRoute } from '@react-navigation/native';
import bai1 from 'utils/data/tbai1';
import bai2 from 'utils/data/tbai2';
import bai3 from 'utils/data/tbai3';
import bai4 from 'utils/data/tbai4';
import bai5 from 'utils/data/tbai5';
import bai6 from 'utils/data/tbai6';

const renderImgWithContent = (listData: any) => {
  return (
    <>
      {listData.map((item: any, index: number) => (
        <Box key={`${item.img}-${index}`} marginY="2">
          <Box flexDirection={'row'} alignItems={'flex-start'} my="1">
            <Text width="100%" fontSize={20}>
              <Text bold fontSize={22}>
                Bài {index + 1}:
              </Text>{' '}
              {item.content}
            </Text>
          </Box>
          <Image
            source={item.img}
            alt="lmao"
            style={{
              width: '100%',
              height: 160,
              borderRadius: 12,
              resizeMode: 'contain',
            }}
          />
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
const PracticeDetailScreen = (props: any) => {
  const {} = props;
  const route = useRoute();
  const { params }: any = route;

  const detail_data = baihoc[params.file];

  return (
    <Box width="100%">
      <ImageBackground
        source={require('assets/icons/bg.png')}
        style={styles.bgStyle}
      />
      <Header title={'Nội dung thực hành'} />
      <ScrollView style={styles.cardContainer}>
        {renderImgWithContent(detail_data[0].contentWithImg)}
      </ScrollView>
    </Box>
  );
};

export default PracticeDetailScreen;

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
