let a = 10;
let b = 0;

let awaiteddata = new Promise((res,rej)=>{
    setTimeout(()=>{

        res(30)
    })
})
awaiteddata.then((data)=>{
    b=data
    console.log(a+b)
})