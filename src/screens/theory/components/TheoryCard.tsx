import { Box, Text } from 'native-base';
import React from 'react';
import { StyleSheet } from 'react-native';
import color from 'utils/color';

const TheoryCard = (props: any) => {
  const { index, title } = props;
  return (
    <Box style={styles.root}>
      <Box style={styles.index}>
        <Text bold fontSize={32}>
          {index}
        </Text>
      </Box>
      <Box style={styles.titleContainer}>
        <Text bold fontSize={20}>
          {title}
        </Text>
      </Box>
    </Box>
  );
};

export default TheoryCard;

const styles = StyleSheet.create({
  root: {
    borderWidth: 1,
    width: '100%',
    height: 80,
    borderRadius: 10,
    flexDirection: 'row',
  },
  index: {
    width: '20%',
    height: '100%',
    backgroundColor: color.light_red,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleContainer: {
    width: '80%',
    backgroundColor: '#fff',
    height: '100%',
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
});
