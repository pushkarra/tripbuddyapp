import { alpha, makeStyles } from '@material-ui/core/styles';


export default makeStyles((theme) => ({
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': { backgroundColor: alpha(theme.palette.common.white, 0.25) },
    marginRight: theme.spacing(-30),
    marginLeft: theme.spacing(0),
    // marginLeft: '20%',
    width: '100%',
    [theme.breakpoints.up('sm')]: { marginLeft: theme.spacing(3), width: 'auto' },
  },
  searchIcon: {
    padding: theme.spacing(0, 2), height: '100%', position: 'absolute', pointerEvents: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0), paddingLeft: `calc(1em + ${theme.spacing(4)}px)`, transition: theme.transitions.create('width'), width: '100%', [theme.breakpoints.up('md')]: { width: '20ch' },
  },
  btns: {
    variant:"contained",  float:"right",marginRight: theme.spacing(0),color: 'white',backgroundColor: 'green',
  },
  btnsi: {
    variant:"contained",  float:"right",marginRight: theme.spacing(0),color: 'white',backgroundColor: 'red',
  },
  liod: {
    variant:"contained",  float:"right",marginRight: theme.spacing(0),marginLeft: theme.spacing(75),color: 'white',backgroundColor: 'green',borderRadius: '16px',padding: '5px',margin: '6px',
  },
  
  
  toolbar: {
    display: 'flex', justifyContent: 'space-between',
  },
}));