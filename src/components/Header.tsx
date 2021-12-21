import { Box, Icon, Text } from 'native-base';
import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import color from 'utils/color';
import { useNavigation } from '@react-navigation/core';

const Header = (props: any) => {
  const { title } = props;
  const navigation = useNavigation();
  return (
    <Box style={styles.root}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Box style={styles.icon}>
          <Icon as={Ionicons} name="arrow-back-sharp" size={10} />
        </Box>
      </TouchableOpacity>
      <Text bold fontSize={28} textTransform="uppercase">
        {title}
      </Text>
      <Box style={{ width: 20 }} />
    </Box>
  );
};

export default Header;

const styles = StyleSheet.create({
  root: {
    position: 'absolute',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    width: '100%',
  },
  icon: {
    borderWidth: 1,
    backgroundColor: color.light_red,
    marginRight: 12,
    borderRadius: 8,
  },
});
