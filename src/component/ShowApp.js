import React from 'react';
import App from './App';
import useDataFetcher from '../hooks/dataFetcher';
import Appholder from './AppHolder';
const Showticket = (props) => {
  const { isLoading, apps,taq } = useDataFetcher();

  return (
    <React.Fragment>
      {isLoading ? (
        <p className="loading">Loading...</p>
      ) : (
        <div className='app-holder'>
          <Appholder app={apps} taq={taq}></Appholder>
        </div>
      )}
    </React.Fragment>
  );
};

export default Showticket;