function getElement(id){
    
    return document.getElementById(id);
}

const heartBtns = document.getElementsByClassName('heart-btn')
// console.log(heartBtns)

for(const btn of heartBtns){
    btn.addEventListener('click',function(){
        const heartCount = document.getElementById('heart-count').innerText;
        const totalCount = Number(heartCount) + 1;
        document.getElementById('heart-count').innerText = totalCount;
    })
}


// document.getElementsByClassName('heart-btn').add

// // document.getElementById('heart-btn').addEventListener('click',
// //     function(e){
// //         const heartCount = document.getElementById("heart-count").innerText;
// //         const totalCount = Number(heartCount) + 1;
// //         console.log(heartCount, totalCount)
// //         document.getElementById('heart-count').innerText = totalCount;
// //     }
// // )


