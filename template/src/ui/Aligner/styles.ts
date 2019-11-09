import EStyleSheet from 'react-native-extended-stylesheet';

export const styles = EStyleSheet.create({
  aligner: {
    flexDirection: 'row',
  },

  aligner_wrap: {
    flexWrap: 'wrap',
  },

  aligner_center: {
    alignItems: 'center',
  },

  aligner_top: {
    alignItems: 'flex-start',
  },

  aligner_bottom: {
    alignItems: 'flex-end',
  },

  aligner_baseline: {
    alignItems: 'baseline',
  },

  alignerLeft: {
    flex: 1,
    minWidth: 0,
  },

  alignerRight: {
    marginLeft: 'auto',
    paddingLeft: 0,
    flex: 0,
    maxWidth: '100%',
  },

  alignerCenter: {
    marginLeft: 'auto',
    marginRight: 'auto',
  },
});
