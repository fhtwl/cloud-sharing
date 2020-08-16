import vm from '@/main'
export async function messages(type,msg) {
    console.log(vm)
    vm.$message({
        message: msg,
        type: type
    });
}
// module.exports = {
//     messages
// }
// export messages
