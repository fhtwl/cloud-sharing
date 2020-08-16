// import http from '@/utils/http'; 
import vm from '@/main'
// const http = require('@/utils/http.js')
function login() {
    return vm.$http.get('/user/checkPassword.do?password=12342qwe365236');
}
export default login