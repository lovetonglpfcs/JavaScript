const promise = new Promise((resolve,reject) =>{
    const res = false;
    if(res){
        resolve("Resoled!");
    }else{
        reject(Error("Fatal Error"))
    }
});

promise.then(
    (res) => console.log(res),
    (err) => console.log(err)
)