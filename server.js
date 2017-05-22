import config, {nodeEnv, logStars} from './config';
import https from 'https';

https.get('https://www.lynda.com'), res => {
  console.log('Status Code:', res.statusCode);
  console.log

}
