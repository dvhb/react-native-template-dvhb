import React from 'react';
import { ScrollView, SafeAreaView } from 'react-native';

import { Drawer } from './Drawer';

type Props = {};

export function DrawerContainer({}: Props) {
  return (
    <SafeAreaView>
      <ScrollView>
        <Drawer />
      </ScrollView>
    </SafeAreaView>
  );
}
