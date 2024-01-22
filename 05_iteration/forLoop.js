for(let i=0;i<10;i++){
    // console.log(i);
}

for(let i = 0;i<10;i++){
    if(i==5){
        console.log("detected " + 5);
        break;
    }
    console.log(`value of i is `+i)
}

for(let i = 0;i<10;i++){
    if(i==5){
        console.log("detected " + 5);
        continue;
    }
    console.log(`value of i is `+i)
}

