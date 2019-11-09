import EStyleSheet from 'react-native-extended-stylesheet';

export const styles = EStyleSheet.create({
  input: {
    height: 56,
    paddingVertical: 8,
    paddingHorizontal: 16,
    fontFamily: '$fontRegular',
    fontSize: 16,
    borderWidth: 1,
    borderColor: '$gray80',
    borderRadius: 4,
    backgroundColor: '$white',
  },

  input_multiline: {
    height: 84,
    lineHeight: 22,
    textAlignVertical: 'top',
  },

  code: {
    textAlign: 'center',
    letterSpacing: 4,
  },

  error: {
    borderColor: '$red',
  },
});
