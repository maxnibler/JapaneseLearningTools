import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import { Box, Paper, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexGrow: 3,
    justifyContent: 'center',
    width: window.innerWidth,
    '& > *': {
      margin: theme.spacing(1),
      width: theme.spacing(16),
      height: theme.spacing(16),
    },
  },
  paper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  kanji: {
    fontSize: '30pt',
  },
}));

/**
 * @param {string} character
 * @return {JSX}
 */
function kanjiDisplay(character) {
  const classes = useStyles();

  return (
    <div>
      <Box className={classes.root}>
        <Paper elevation={2} className={classes.paper}>
          <Typography className={classes.kanji}>
            {character}
          </Typography>
        </Paper>
      </Box>
    </div>
  );
}

/**
 * @param {int} page
 * @param {function} changePage
 * @return {JSX}
 */
function pageSelect(page, changePage) {
  return (
    <div>
      {kanjiDisplay('\u3042')}
    </div>
  );
}

export default pageSelect;