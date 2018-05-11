import { StyleSheet } from 'react-native';

// FIXME: Refactor into a grouped styles per component or themes
// TODO: Add group for color palettes

const styles = StyleSheet.create({
  baseText: {
    textAlign: 'left',
    fontSize: 16,
    marginBottom: 5,
  },
  centerText: {
    alignSelf: 'center',
    textAlign: 'center',
    fontSize: 16,
    marginBottom: 5,
  },
  button: {
    height: 40,
    fontSize: 20,
    color: 'white',
  },
  container: {
    alignItems: 'stretch',
    backgroundColor: '#ffffff',
    flex: 1,
    justifyContent: 'flex-start',
    paddingHorizontal: 20,
    paddingVertical: 5,
  },
  centerContainer: {
    alignItems: 'center',
    backgroundColor: '#f5fcff',
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  heading: {
    fontSize: 20,
    marginBottom: 10,
    textAlign: 'center',
    width: 300,
  },
  gistControls: {
    paddingBottom: 2,
    borderBottomWidth: 1,
    borderColor: '#d4d4d4',
  },
  inputGroup: {
    paddingBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#d4d4d4',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 3,
    marginVertical: 5,
  },
  submit: {
    paddingBottom: 5,
  },
  label: {
    marginBottom: 2,
    color: '#3478f6',
  },
  strong: {
    fontWeight: 'bold',
  },
  gistList: {
    paddingTop: 10,
    paddingBottom: 150,
  },
  gistDetailsNav: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  gisDetailsHeader: {
    paddingBottom: 20,
  },
  gisDetailsFooter: {
    paddingTop: 20,
    alignItems: 'flex-end',
  },
  textarea: {
    backgroundColor: '#fafbfc',
    borderWidth: 1,
    borderColor: '#d4d4d4',
    height: 200,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 3,
    marginVertical: 10,
  },
});

export default styles;
