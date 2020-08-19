import vm from '@/main'
function checkUserName(data) {
    return vm.$http.get('/user/checkUserName',data);
}
export default checkUserName
