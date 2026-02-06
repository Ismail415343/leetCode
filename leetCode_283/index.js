let moveZero = (num)=>{

    let j = 0;
    for(let i = 0; i < num.length;i++){
        if(num[i] !== 0){
            [num[i],num[j]] = [num[j],num[i]];
            j++;
        }
    }
};

let num = [0,1,2,3,0,4,5]
moveZero(num)
console.log(num)