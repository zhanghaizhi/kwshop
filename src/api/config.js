
import Qs from 'qs'
export default{

	  url: '/route',
	  baseURL: 'http://textbookdemo.e-edusunshine.com/webusiness',
	  method:'POST',
	  
	  transformRequest: [function (data) {
	    //为了避免qs格式化时对内层对象的格式化先把内层的对象转为
	    data.params = JSON.stringify(data.params);
	    //由于使用的form-data传数据所以要格式化
	    data = Qs.stringify(data);
	    return data;
	  }],

	  
	  transformResponse: [function (data) {
	    
	    return data;
	  }],

	  headers: {'Content-Type':'application/x-www-form-urlencoded'},

	  
	  params: {
	    // eid:8484662,
	    // openid:'57c80528e4b07e300ed4ffbb',
	    // pubacckey:'',
	    // timestamp:'',
	    // nonce:'',
	    // pubaccid:'',
	  },
	  paramsSerializer: function(params) {
	    return Qs.stringify(params)
	  },
  	data: {
    	// EID:"8484662",
    	// Method:"kis.APP003678.ueanalysis.UEStockAnalysis.",
    	// NetID:"8484662159954",
	    params:{
	     	// "Result": "",
	      // 	"ErrMsg": "",
	      // 	"AccountDB": "",
	      //   "TotalPage": "",
	      //   "CurrentPage": "1",
	      //   "ItemsOfPage": "100",
	      // "Data": {}
	    }
  	},

	  
	// timeout: 1000000,

	  
	withCredentials: false, // default不携带cookie信息

	  
	responseType: 'json', // default

	 
	  
	// onUploadProgress: function (progressEvent) {
	//     // Do whatever you want with the native progress event
	// },

	  
	onDownloadProgress: function (progressEvent) {
	    // Do whatever you want with the native progress event
	},

	  
	maxContentLength: 20000,

	  
	validateStatus: function (status) {
	    return status >= 200 && status < 300; // default
	},

	  
	maxRedirects: 5000, // default
}
