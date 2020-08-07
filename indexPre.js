window.onload = ()=>{
   fetchData() 
}

fetchData = ()=>{
    fetch("https://xkcd.now.sh/?comic=latest")
    .then(res=>res.json())
    .then(res=>{
        fetchNum(res.num)
        .then(res=>console.log(res))
    })
}

fetchNum = async ( num )=>{
    let arr = []
    
    for(let i=0; i<10; i++){
        
        try{
            if(i===4){
                throw("Err")
            }
            arr[i] = await fetch(`https://xkcd.now.sh/?comic=${num-i}`)
            .then(res=>res.json())

            throw new Error
        }
        catch(err){console.log(err)}
    }
    // return Promise.all(arr)
    return arr
}

