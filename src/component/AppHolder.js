import React from 'react';
import App from './App';
import useDataFetcher from '../hooks/dataFetcher';
import '..';
import update from 'immutability-helper';
import { useState, useCallback } from 'react';
const Appholder = (props) => {
  const [appsState, setAppsState] = useState(props.app);
  const [taqState, setTaqState] = useState(props.taq);
  console.log(props);
  return (
    <React.Fragment>
      
        <React.Fragment>
         {appsState.map((app) => (
             <App key={app.id} app={app} taq={taqState}></App>
            ))}
        </React.Fragment>
      
    </React.Fragment>
  );
};

export default Appholder;