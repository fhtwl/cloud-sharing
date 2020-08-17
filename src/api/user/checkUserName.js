import vm from '@/main'
function checkUserName(data) {
    return vm.$http.get('/user/checkUserName.do',data);
}
export default checkUserName