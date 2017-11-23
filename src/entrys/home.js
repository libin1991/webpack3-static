import 'normalize.css';
import '../styles/index.less'
import '../styles/home.less'
const delay = (time) => {
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            res();
        },time)
    });
};
async function getNice() {
    console.log('start:');
    await delay(4000);
    console.log('after 4000s')
}
getNice();