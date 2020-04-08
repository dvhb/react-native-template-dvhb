import EStyleSheet from 'react-native-extended-stylesheet';

export const styles = EStyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
  },
  videoView: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'black',
  },
  buttonContainer: {
    position: 'absolute',
    backgroundColor: 'black',
    bottom: 0,
    left: 0,
    right: 0,
    flex: 1,
    flexDirection: 'column',
    height: 120,
  },
  toast: {
    color: 'white',
    left: 0,
    right: 0,
    bottom: 0,
    padding: 10,
    textAlign: 'center',
    backgroundColor: 'rgba(0, 0, 0, 1.0)',
  },
});
