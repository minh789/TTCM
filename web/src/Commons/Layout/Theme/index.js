import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  color: {
    primary: '#D32F2F',
    secondary: '#00BCD4',
    error: '#E64A19',
    textColor: '#00FFFF',
    defaultTextColor: '#FF1493',
    hover: '#7FFFD4',
  },
  typoraphy: {
    fontFamily: 'Roboto',
    fontSize: 20
  },
  shape: {
    borderRadius: 4,
    backgroundColor: '#7B1FA2',
    textColor: '#FFFFFF',
    border: '#CCCCCC',
  },
});
export default theme;