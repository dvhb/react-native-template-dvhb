import EStyleSheet from 'react-native-extended-stylesheet';

export const styles = EStyleSheet.create({
  btn: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 56,
    paddingHorizontal: 16,
    backgroundColor: '$black',
    borderRadius: 12,
  },
  btnBordered: {
    backgroundColor: '$white',
    borderWidth: 2,
    borderColor: '$black',
  },
  btnDisabled: {
    backgroundColor: '$gray50',
  },
  btnInverse: {
    backgroundColor: '$white50',
  },
  btnDanger: {
    backgroundColor: '$red',
  },
  btnSmall: {
    height: 36,
    fontSize: 16,
    borderRadius: 4,
  },
  btnTransparent: {
    backgroundColor: 'transparent',
    padding: 0,
    paddingHorizontal: 0,
    height: 'auto',
    flex: 0,
    alignSelf: 'flex-start',
  },
});
