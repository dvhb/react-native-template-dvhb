import React, { FC, ReactNode } from 'react';
import { View } from 'react-native';

import { Btn, Icon } from '../../ui';
import { styles } from './styles';

export type LayoutProps = {
  djView?: ReactNode;
  otherViews?: ReactNode[];
  localView?: ReactNode;
  controls?: boolean;
};

export const Layout: FC<LayoutProps> = ({ controls = true, djView, otherViews, localView }) => {
  return (
    <View style={styles.layout}>
      <View style={styles.djView}>{djView}</View>

      {(otherViews || localView) && (
        <View style={styles.otherViews}>
          {otherViews &&
            otherViews.map((view, index) => (
              <View key={index} style={styles.otherView}>
                {view}
              </View>
            ))}
          {localView && <View style={styles.otherView}>{localView}</View>}
        </View>
      )}
      {controls && (
        <View style={styles.userControls}>
          <View style={styles.userControlsItem}>
            <Btn style={styles.userControlsButton}>
              <Icon name="Calendar" color="$blue" height={32} width={32} />
            </Btn>
          </View>
          <View style={styles.userControlsItem}>
            <Btn style={styles.userControlsButton}>
              <Icon name="Fav" color="$blue" height={32} width={32} />
            </Btn>
          </View>
        </View>
      )}
    </View>
  );
};
