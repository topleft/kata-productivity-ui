import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import './styles.scss';
import UploadAside from '../UploadAside';
class Aside extends React.Component {
  state = {}
  propTypes = {}

  constructor() {
    super();
  }

  render() {
    return (
      <div className='aside'>
        <Switch>
          <Route path='/dashboard' component={null}></Route>
          <Route path='/sessions' component={null}></Route>
          <Route path='/events' component={UploadAside}></Route>
          <Route path='/files' component={null}></Route>
          <Route path='/conversations' component={null}></Route>
          <Route path='/settings' component={null}></Route>
          <Route component={null}></Route>
        </Switch>
      </div>

    );
  }

}

export default Aside;
