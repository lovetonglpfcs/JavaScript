function promiseTimeout(ms){
    return new Promise((resolve,reject)=>{
        setTimeout(resolve,ms);
    }) 
}

async function run(){
    console.log("Start!!");
    await promiseTimeout(2000);
    console.log("Stop");
}
console.log("Stop");
run();
console.log("AStop");