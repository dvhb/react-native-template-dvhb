import { StyleSheet } from 'react-native';
import { getBottomSpace } from 'react-native-iphone-x-helper';

export const styles = StyleSheet.create({
  layout: {
    flex: 1,
    backgroundColor: '#000',
  },
  djView: {
    flex: 1,
  },
  otherViews: {
    height: '40%',
    flexDirection: 'row',
  },
  otherView: {
    flex: 1,
  },
  userControls: {
    position: 'absolute',
    bottom: getBottomSpace() > 0 ? getBottomSpace() : 16,
    right: 16,
    flexDirection: 'row',
  },
  userControlsItem: {
    marginLeft: 12,
  },
  userControlsButton: {
    height: 48,
    minWidth: 48,
    backgroundColor: '#ffffff',
    borderRadius: 24,
    paddingHorizontal: 8,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
});
