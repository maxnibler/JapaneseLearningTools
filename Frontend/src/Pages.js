import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import { Box, Paper, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    height: window.innerHeight,
    width: window.innerWidth,
  },
  topRoot: {
    display: 'flex',
    flexGrow: 3,
    justifyContent: 'center',
    width: '100%',
  },
  bottomRoot: {
    marginTop: theme.spacing(2),
    display: 'flex',
    width: '100%',
    justifyContent: 'center',
  },
  paperKanji: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: theme.spacing(16),
    height: theme.spacing(16),
  },
  kanji: {
    fontSize: '30pt',
  },
  paperCard: {
    display: 'flex',
    justifyContent: 'center',
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: theme.spacing(16),
  },
}));

/**
 * @param {string} character
 * @return {JSX}
 */
function kanjiDisplay(character) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Box className={classes.topRoot}>
        <Paper elevation={2} className={classes.paperKanji}>
          <Typography className={classes.kanji}>
            {character}
          </Typography>
        </Paper>
      </Box>
      <Box className={classes.bottomRoot}>
        <Paper className={classes.paperCard}>
          pronuciation
        </Paper>
        <Paper className={classes.paperCard}>
          pronuciation
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