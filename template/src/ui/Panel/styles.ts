import EStyleSheet from 'react-native-extended-stylesheet';

export const styles = EStyleSheet.create({
  panel: {
    backgroundColor: '$white',
  },
  panel_topRadius: {
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  panel_bottomRadius: {
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
  },

  panel_borderBottom: {
    borderBottomWidth: 1,
    borderBottomColor: '$gray30',
  },

  panel__item: {
    padding: 16,
  },
  panel__item_withBorder: {
    borderTopWidth: 1,
    borderTopColor: '$gray30',
  },
});
