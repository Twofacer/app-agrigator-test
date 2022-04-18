import { useState, useEffect } from 'react';
import { getIcon} from '../utils/apis';
import { ICON_URL} from '../utils/constants';

export const useIconFethcer = (iconurl) => {
    const [icons, setIcon] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
        setIsLoading(true);
        getIcon(ICON_URL+iconurl)
          .then((icon) => {
            setIcon(icon);
             setIsLoading(false);
          })
          .catch(() => {
            setIsLoading(false);
          });
      }, []);
      return { isLoading, icons };
};
export default useIconFethcer;