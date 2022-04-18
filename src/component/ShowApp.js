import React from 'react';
import App from './App';
import useDataFetcher from '../hooks/dataFetcher';
import '..';
const Showticket = (props) => {
  const { isLoading, apps,taq } = useDataFetcher();
console.log(taq)
console.log(apps)

  return (
    <React.Fragment>
      {isLoading ? (
        <p className="loading">Loading...</p>
      ) : (
        <React.Fragment>
          {apps.map((app) => (
            <App key={app.id} app={app} taq={taq} />
          ))}
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export default Showticket;