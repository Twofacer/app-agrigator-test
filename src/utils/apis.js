import axios from 'axios';
export const getSearcApp = async (url) => {
    try {
      const App = await axios.get(url);
     
      return App;
    } catch (error) {
      console.log('Error while getting a App.');
    }
  };

  export const getIcon = async(url) => {
    try {
      return url;
    } catch (error) {
      console.log('Error while getting a App.');
    }
  };
  