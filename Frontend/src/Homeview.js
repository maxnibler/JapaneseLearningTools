import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import clsx from 'clsx';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Drawer from '@material-ui/core/Drawer';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Box from '@material-ui/core/Box';


const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    width: '100%',
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 0,
  },
  menuButtonHidden: {
    display: 'none',
  },
  centerLogo: {
    flexGrow: 1,
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
  },
}));


/**
 * The home page for the Mobile View
 *
 * @return {JSX} JSX
 */
function homeView() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <div>
      <AppBar
        position="absolute"
        className={classes.appBar}
        width={100}
      >
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={toggleDrawer}
            className={clsx(classes.menuButton,
                open && classes.menuButtonHidden)}
          >
            <MenuIcon />
          </IconButton>
          <Box className={classes.centerLogo}>
            <Typography>
              Insert Name
            </Typography>
          </Box>
          <IconButton color="inherit">
            <AccountCircleIcon/>
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
        }}
        open={open}
        onClose={toggleDrawer}
      >
        <div className={classes.toolbarHeader}>
          <Typography>
            Insert Name
          </Typography>
        </div>
        <Divider />
        Taskbar
      </Drawer>
    </div>
  );
}

export default homeView
