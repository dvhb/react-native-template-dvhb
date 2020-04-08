import React from 'react';
import { View } from 'react-native';

import { Spacer, Link } from '../../ui';

type Props = {
  onRed5Test1?: () => void;
  onRed5Test2?: () => void;
  onRed5Test3?: () => void;
};

export function Drawer({ onRed5Test1, onRed5Test2, onRed5Test3 }: Props) {
  return (
    <View style={{ paddingLeft: 20, paddingTop: 60, flex: 1 }}>
      <Spacer margin="lg">
        <Link size="body2" onPress={onRed5Test1}>
          Test1
        </Link>
      </Spacer>
      <Spacer margin="lg">
        <Link size="body2" onPress={onRed5Test2}>
          Test2
        </Link>
      </Spacer>
      <Spacer margin="lg">
        <Link size="body2" onPress={onRed5Test3}>
          Test3
        </Link>
      </Spacer>
    </View>
  );
}
