import EStyleSheet from 'react-native-extended-stylesheet';

export const styles = EStyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
  },
  formField: {
    padding: 10,
  },
  inputField: {
    paddingLeft: 10,
    height: 36,
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
  },
  inputFieldAuth: {
    padding: 10,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 10,
    height: 36,
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
  },
  text: {
    left: 0,
    right: 0,
    textAlign: 'center',
    padding: 20,
  },
});
