import React from 'react';
import { ScrollView, SafeAreaView } from 'react-native';
import { NavigationScreenProps } from 'react-navigation';

import { Drawer } from '../../screens';

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
