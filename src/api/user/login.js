import vm from '@/main'
function login(data) {
    let datamsg = JSON.stringify(data)
    return vm.$http.post('/user/login',{datamsg:datamsg});
}
export default login
