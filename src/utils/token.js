// 管理token
const KEY = 'CLOUD_SHARE_TOKEN';

const get = function() {
	let ret = '';
	ret = localStorage.getItem(KEY);
	if (!ret) {
		ret = '[]';
	}
	return JSON.parse(ret);
}

const set = function(userInfo) {
	let users = get();
	// console.log(users)
	users = [{
		token:userInfo.token,
		time:userInfo.time
		// account: userInfo.account,
		// password: userInfo.password
	}];
	localStorage.setItem(KEY, JSON.stringify(users));
}

export default {
	get,
	set
}
