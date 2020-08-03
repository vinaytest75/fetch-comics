// alert('Hi')
window.onload = function(){
    fetchComic()
}

fetchComic = ()=>{
    fetch('https://xkcd.now.sh/?comic=latest')
    .then(res=>res.json())
    .then(res=>{
        fetchImages(res.num)
        .then(res=>console.log(res))
    }
    )
}

fetchImages = (num) =>{
    let arr = []
    for(let i=0;i<10;i++){
       
        arr[i] = fetch(`https://xkcd.now.sh/?comic=${num-i}`)
        .then(res=>res.json())
        
    }
    return Promise.all(arr)
    
} 

