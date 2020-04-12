import React from 'react';
import { Platform } from 'react-native';
import { NavigationStackScreenProps } from 'react-navigation-stack';
import { check, request, PERMISSIONS } from 'react-native-permissions';
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';

import { Red5Test1 } from './Red5Test1';

type Params = {
  publisherStream?: string[];
  subscriberStream?: string[];
};
type Props = {} & NavigationStackScreenProps<Params>;

export class Red5Test1Container extends React.Component<Props, any> {
  constructor(props: any) {
    super(props);

    this.state = {
      hasPermissions: true,
    };
  }

  componentDidMount() {
    Promise.all([
      check(
        // @ts-ignore
        Platform.select({
          android: PERMISSIONS.ANDROID.CAMERA,
          ios: PERMISSIONS.IOS.CAMERA,
        }),
      ),
      check(
        // @ts-ignore
        Platform.select({
          android: PERMISSIONS.ANDROID.RECORD_AUDIO,
          ios: PERMISSIONS.IOS.MICROPHONE,
        }),
      ),
    ]).then(([camera, microphone]: any) => {
      const isAuthorized = /granted/;
      const hasCamera = isAuthorized.test(camera);
      const hasMic = isAuthorized.test(microphone);

      if (!hasCamera || !hasMic) {
        this.requestPermissions();
        this.setState({
          hasPermissions: false,
        });
      } else {
        this.setState({
          hasPermissions: true,
        });
      }
    });
  }

  render() {
    const { navigation } = this.props;
    const { hasPermissions } = this.state;

    const stream = `stream${uuidv4()}`;
    const publisherStream = navigation.getParam('publisherStream') || [stream];
    const subscriberStream = navigation.getParam('subscriberStream') || [];

    return (
      <Red5Test1
        publisherStream={publisherStream}
        subscriberStream={subscriberStream}
        hasPermissions={hasPermissions}
      />
    );
  }

  requestPermissions() {
    const isAuthorized = /granted/;
    let camPermission = false;
    let micPermission = false;

    request(
      // @ts-ignore
      Platform.select({
        android: PERMISSIONS.ANDROID.CAMERA,
        ios: PERMISSIONS.IOS.CAMERA,
      }),
    ).then((camResponse: any) => {
      camPermission = isAuthorized.test(camResponse);
      request(
        // @ts-ignore
        Platform.select({
          android: PERMISSIONS.ANDROID.RECORD_AUDIO,
          ios: PERMISSIONS.IOS.MICROPHONE,
        }),
      ).then((micResponse: any) => {
        micPermission = isAuthorized.test(micResponse);

        this.setState({
          hasPermissions: camPermission && micPermission,
        });
      });
    });
  }
}
