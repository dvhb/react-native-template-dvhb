import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';

const AnonymousPrefix = 'anonymous-';

export const getUniqueIdentity = () => `${AnonymousPrefix}${uuidv4()}`;
