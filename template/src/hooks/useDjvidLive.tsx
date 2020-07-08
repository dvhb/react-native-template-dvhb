import { useEffect, useState } from 'react';
import { FirebaseDatabaseTypes } from '@react-native-firebase/database';

import { DjvidLive } from '../store/djvid/types';
import { djvidService } from '../services/djvidService';

export function useDjvidLive() {
  const [state, setState] = useState<DjvidLive>({});

  useEffect(() => {
    const refLive = djvidService.refLive();
    const setLive = (snapshot: FirebaseDatabaseTypes.DataSnapshot) => {
      setState(snapshot.val());
    };

    const onValueChange = refLive.on('value', setLive);
    return () => {
      refLive.off('value', onValueChange);
    };
  }, []);

  return state;
}
