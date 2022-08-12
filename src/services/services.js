import axios from 'axios';

const GATSBY_TOKEN = process.env.GATSBY_TOKEN;
const CHAT_ID = process.env.CHAT_ID;
const TG_URL = `https://api.telegram.org/bot${GATSBY_TOKEN}/sendMessage?chat_id=${CHAT_ID}`;

await axios
  .post(TG_URL, {
    text: message,
    parse_mode: 'HTML',
  })
  .then(() => alert('Заявка отправлена!'))
  .catch(error => alert(error));

axios('https://api.db-ip.com/v2/free/self')
  .then(data => {
    const location = data.data.countryCode;
    setUserLocation(location.toLowerCase());
  })
  .catch(err => console.log(err));
