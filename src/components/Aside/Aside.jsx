import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './styles.scss';
import UploadAside from '../UploadAside';

const pathPrefix = process.env.PATH_PREFIX || '';

const Aside = () => {

  return (
    <div className='aside'>
      <Switch>
        <Route path={`${pathPrefix}/dashboard`} component={null}></Route>
        <Route path={`${pathPrefix}/sessions`} component={null}></Route>
        <Route path={`${pathPrefix}/events`} component={UploadAside}></Route>
        <Route path={`${pathPrefix}/files`} component={null}></Route>
        <Route path={`${pathPrefix}/conversations`} component={null}></Route>
        <Route path={`${pathPrefix}/settings`} component={null}></Route>
      </Switch>
    </div>
  );

};

export default Aside;
