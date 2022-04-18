import { useState, useEffect } from 'react';
import { getSearcApp} from '../utils/apis';
import { DATA_URL, TAQS_URL} from '../utils/constants';

export const useDataFetcher = () => {
    const [apps, setApps] = useState([]);
    const [taq, setTaq] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
        setIsLoading(true);
        getSearcApp(DATA_URL)
          .then((app) => {
            setApps(app.data.data);
          
            getSearcApp(TAQS_URL)
              .then((taq) => {
                setTaq(taq.data.data);
             
                setIsLoading(false);
              })
            
          })
          .catch(() => {
            setIsLoading(false);
          });
      }, []);
   
      return { isLoading, apps, taq };
};
export default useDataFetcher;