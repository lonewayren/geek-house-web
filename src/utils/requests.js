import axios from 'axios';
import { notification } from 'ant-design-vue';

function requests(options) {
  return axios(options)
    .then(response => {
      return response;
    })
    .catch(error => {
      const {
        response: { status, msg }
      } = error;
      notification.error({
        message: status,
        description: msg
      });
      // return Promise.reject(error);
    })
    .then(response => {
      const {
        data: { msg, code, result }
      } = response;
      if (code) {
        console.error(code, msg);
        return Promise.reject({ code, msg });
      } else {
        return result;
      }
    })
    .catch(error => {
      const { code, msg } = error;
      const commonCode = parseInt(code / 100);
      notification.error({
        message: commonCode,
        description: msg
      });
      // return Promise.reject(error);
    });
}

export default requests;
