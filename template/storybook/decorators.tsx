import React from 'react';
import { View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export const styles = EStyleSheet.create({
  container: {
    padding: 20,
    paddingTop: getStatusBarHeight() + 40,
  },
});

type ContainerProps = {
  children: any;
  style?: any;
};

export const Container = ({ children, style }: ContainerProps) => (
  <View style={[styles.container, style]}>{children}</View>
);
