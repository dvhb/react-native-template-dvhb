import React, { FC, ReactNode, useCallback, useState } from 'react';
import { View } from 'react-native';

import { Btn, Icon } from '../../ui';
import { styles } from './styles';

export type LayoutProps = {
  djView?: ReactNode;
  otherViews?: ReactNode[];
  localView?: ReactNode;
};

export const Layout: FC<LayoutProps> = ({ djView, otherViews, localView }) => {
  const [isVideoEnabled, setIsVideoEnabled] = useState<boolean>(false);

  const participantsLimit = isVideoEnabled ? 1 : 2;
  const participants: ReactNode[] = [];

  otherViews?.forEach((p, index) => {
    if (index < participantsLimit) {
      participants.push(p);
    }
  });

  const onButtonEnableLocal = useCallback(() => {
    setIsVideoEnabled(!isVideoEnabled);
  }, [isVideoEnabled, setIsVideoEnabled]);

  return (
    <View style={styles.layout}>
      <View style={styles.djView}>{djView}</View>

      {(participants?.length || localView) && (
        <View style={styles.otherViews}>
          {participants?.map((view, index) => (
            <View key={index} style={styles.otherView}>
              {view}
            </View>
          ))}
          {isVideoEnabled && localView && <View style={styles.otherView}>{localView}</View>}
        </View>
      )}
      <View style={styles.userControls}>
        <View style={styles.userControlsItem}>
          <Btn style={styles.userControlsButton} onPress={onButtonEnableLocal}>
            {isVideoEnabled ? (
              <Icon name="CameraDisabled" color="$blue" height={32} width={32} />
            ) : (
              <Icon name="Camera" color="$blue" height={32} width={32} />
            )}
          </Btn>
        </View>
      </View>
    </View>
  );
};
