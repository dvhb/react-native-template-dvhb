import firestore, { FirebaseFirestoreTypes } from '@react-native-firebase/firestore';
import database, { FirebaseDatabaseTypes } from '@react-native-firebase/database';

import { DjvidLive } from '../store/djvid/types';

export class DjvidService {
  private firestore: FirebaseFirestoreTypes.Module;
  private database: FirebaseDatabaseTypes.Module;

  constructor() {
    this.firestore = firestore();
    this.database = database();
  }

  refLive() {
    return this.database.ref('live');
  }

  setLiveParticipants(data: DjvidLive) {
    this.refLive()
      .update(data)
      .then(() => {});
  }

  setMasterOffline() {
    this.setLiveParticipants({ master: null /* , selected: [null] */ });
  }

  setMasterOnline(identity: string) {
    this.setLiveParticipants({ master: identity /* , selected: [identity] */ });
  }

  setSelected(identity: string[]) {
    this.setLiveParticipants({ selected: identity });
  }

  unsetSelected(selected: string[], removeIdentity: string) {
    if (selected.find(identity => identity === removeIdentity)) {
      djvidService.setSelected(selected.filter(identity => identity !== removeIdentity));
    }
  }
}

export const djvidService = new DjvidService();
