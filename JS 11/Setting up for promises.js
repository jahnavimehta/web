//without callback
function savetoDb(data){
    let internetSpeed = Math.floor(Math.random()*10) + 1;
    if(internetSpeed>4){
        console.log("success: data saved");
       // success();
    }else{
        console.log("failure: data not saved");
       // failure();
    }
}
/**********************************************************************/
//with one callback
function savetoDb(data, success, failure){
    let internetSpeed = Math.floor(Math.random()*10) + 1;
    if(internetSpeed>4){
        success();
    }else{
        failure();
    }
}

savetoDb(
    "apna college",
    ()=>{
        console.log("success: data saved");
    },
    ()=>{
        console.log("failure: data not saved");
    }
);
/********************************************************************/
//with two nested callbacks
function savetoDb(data, success, failure){
    let internetSpeed = Math.floor(Math.random()*10) + 1;
    if(internetSpeed>4){
        success();
    }else{
        failure();
    }
}

savetoDb(
    "apna college",
    ()=>{
        console.log("success: data saved");
        savetoDb(
            "apna college part 2",
            ()=>{
                console.log("success: data saved part 2");
                
            },
            ()=>{
                console.log("failure: data not saved part 2");
            }
        );
    },
    ()=>{
        console.log("failure: data not saved");
    }
);
/******************************************************************************/
//write code for 3 nested callbacks :)
