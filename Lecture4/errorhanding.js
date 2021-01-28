function criticalCode(){
    throw "throwing an exception";
}

function logError(theEnception){
    console.log(theEnception);
}

console.log("\n*******try..catch******\n");

try{
    criticalCode();
}catch(ex){
    console.log("Got an error");
    logError(ex);
}

console.log("\n*******throwing in try******\n");

try{
    throw "An exception that is throw every time";
}catch(ex){
    console.log("Got an error");
    logError(ex);
}

console.log("\n*******try..catch..finally******\n");

try{
    //criticalCode();
    
}catch(ex){
    console.log("Got an error");
    logError(ex);
}finally{
    console.log("Code that always will run");
}
function hello(){
    console.log("\n*******Throwing Exceptions******\n");
}