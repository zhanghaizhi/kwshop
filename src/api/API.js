import axios from 'axios'
import config from './config'
import qs from 'qs'

// axios(config);
class API {
	placeanorder (param) {
		config.data.params = param;
		return axios.post('/pay/placeanorder',{},config);
	}
}
export default API;