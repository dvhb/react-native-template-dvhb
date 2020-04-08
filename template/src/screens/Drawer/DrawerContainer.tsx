import React, { useCallback } from 'react';
import { connect } from 'react-redux';
import { NavigationStackScreenProps } from 'react-navigation-stack';

import { Drawer } from './Drawer';

type Params = {};
type Props = {} & NavigationStackScreenProps<Params> & ReturnType<typeof mapStateToProps>;

const mapStateToProps = () => ({});

function DrawerContainerPure({ navigation }: Props) {
  const handleRed5Test1 = useCallback(
    () => navigation.navigate('red5test1', { subscriberStream: [], publisherStream: ['stream1'] }),
    [],
  );
  const handleRed5Test2 = useCallback(
    () => navigation.navigate('red5test1', { subscriberStream: ['stream1'], publisherStream: ['stream2'] }),
    [],
  );

  const handleRed5Test3 = useCallback(
    () => navigation.navigate('red5test1', { subscriberStream: ['stream1', 'stream2'], publisherStream: [] }),
    [],
  );

  return <Drawer onRed5Test1={handleRed5Test1} onRed5Test2={handleRed5Test2} onRed5Test3={handleRed5Test3} />;
}

export const DrawerContainer = connect(mapStateToProps)(DrawerContainerPure);
