import vm from '@/main'
async function register(data) {
    let datamsg = JSON.stringify(data)
    console.log(datamsg)
    return vm.$http.post('/user/register.do',{datamsg:datamsg});
}
export default register