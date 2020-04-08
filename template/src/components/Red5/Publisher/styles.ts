import EStyleSheet from 'react-native-extended-stylesheet';

export const styles = EStyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
  },
  subcontainer: {
    flex: 1,
  },
  videoView: {
    position: 'absolute',
    backgroundColor: 'black',
    top: 0,
    right: 0,
    bottom: 120,
    left: 0,
  },
  buttonContainer: {
    position: 'absolute',
    backgroundColor: 'black',
    bottom: 0,
    left: 0,
    right: 0,
    flex: 1,
    flexDirection: 'column',
    height: 140,
  },
  button: {
    backgroundColor: '#2089dc',
    height: 46,
    marginTop: 2,
    alignContent: 'center',
  },
  buttonLabel: {
    color: 'white',
    fontSize: 20,
    padding: 8,
    textAlign: 'center',
  },
  toast: {
    flex: 1,
    color: 'white',
    left: 0,
    right: 0,
    bottom: 0,
    padding: 14,
    textAlign: 'center',
    backgroundColor: 'rgba(0, 0, 0, 1.0)',
  },
});
