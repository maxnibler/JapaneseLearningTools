import React from 'react';
import homeView from './Homeview.js';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
}));

/**
 * The main controller for mobile display
 *
 * @return {object} JSX
 */
function MobileView() {

  return (
    <div>
      {homeView()}
    </div>
  );
}

export default MobileView
