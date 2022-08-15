import axios from 'axios';

const locationApi = async () => {
  try {
    const data = await axios('https://api.db-ip.com/v2/free/self');
    const location = data.data.countryCode;
    if (location) {
      return location.toLowerCase();
    }
  } catch (error) {
    console.log(error);
  }
};

export default locationApi;
