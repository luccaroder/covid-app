import { makeStyles } from '@material-ui/core/styles';

const monitorStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(2)
      },
    },
  }));

export { monitorStyles };