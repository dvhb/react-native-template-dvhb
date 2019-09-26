import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import { View, Text } from 'react-native';

export function Boot() {
  return (
    <View style={styles.boot}>
      <Text style={styles.text}>DvhbApp</Text>
    </View>
  );
}

const styles = EStyleSheet.create({
  boot: {
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    textAlign: 'center',
    fontSize: 36,
  },
});
