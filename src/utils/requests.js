import axios from 'axios';
import { notification } from 'ant-design-vue';

function requests(options) {
  return axios(options)
    .then(res => {
      return res;
    })
    .catch(error => {
      const {
        response: { status, msg }
      } = error;
      notification.error({
        message: status,
        description: msg
      });
      return Promise.reject(error);
    });
}

export default requests;
