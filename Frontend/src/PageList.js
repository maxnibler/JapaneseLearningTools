import React from 'react';
import {List, ListItem, Typography} from '@material-ui/core';

/**
 * @param {function} changePage
 * @return {JSX}
 */
function pageList(page, changePage) {
  return (
    <div>
      <List>
        <ListItem>
          <Typography button='true'>
            page 1
          </Typography>
        </ListItem>
        <ListItem>
          <Typography>
            page 2
          </Typography>
        </ListItem>
      </List>
    </div>
  )
}

export default pageList;