import vm from '@/main'
async function register(data) {
    let datamsg = JSON.stringify(data)
    console.log(datamsg)
    return vm.$http.post('/user/register',{datamsg:datamsg});
}
export default register
