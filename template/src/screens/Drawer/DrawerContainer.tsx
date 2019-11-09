import React from 'react';
import { ScrollView, SafeAreaView } from 'react-native';
import { NavigationScreenProps } from 'react-navigation';

import { Drawer } from './Drawer';

type Props = NavigationScreenProps;

export function DrawerContainer({  }: Props) {
  return (
    <SafeAreaView>
      <ScrollView>
        <Drawer />
      </ScrollView>
    </SafeAreaView>
  );
}
