import vm from '@/main'
function login(data) {
    return vm.$http.post('/user/login.do',data);
}
export default login