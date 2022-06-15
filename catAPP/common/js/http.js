const BaseURL = "https://ybmini.oripetlife.com"


export function requestGet(url, params) {
	return new Promise((resolve, reject) => {
		// #ifdef MP-WEIXIN
		url = BaseURL + url;
		// #endif
		uni.request({
			url: url,
			method: 'GET',
			data: params,
			success: res => {
				resolve(res.data)
			},
			fail: (err) => {
				reject(err)
			}
		});
	})
}


export function requestPost(url, params) {
	return new Promise((resolve, reject) => {
		// #ifdef MP-WEIXIN
		url = BaseURL + url;
		// #endif
		uni.request({
			url: url,
			method: 'POST',
			header: {
				'Content-Type': 'application/x-www-form-urlencoded'
			},
			data: params,
			success: res => {
				resolve(res.data)
			},
			fail: (err) => {
				reject(err)
			}
		});
	})
}
