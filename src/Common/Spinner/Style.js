import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  pageSpinnerRoot: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    zIndex: 1,
    background: 'rgba(0,0,0,0.1)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  pageSpinner: {
    position: 'relative'
  }
}));

export default useStyles;
