import { makeStyles } from '@material-ui/core/styles';

export function getModalStyle() {
    const top = 50 ;
    const left = 50;
  
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
}

export const useStyles = makeStyles(theme => ({
    paper: {
        position: 'absolute',
        [theme.breakpoints.down('sm')]: {
          width: '100%',  
        },
        [theme.breakpoints.up('sm')]: {
          width: 450,  
        },
        maxHeight: 500,
        overflowY: 'auto',
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
      },
}));