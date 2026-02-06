let removeElement = (num,val)=>{

    let slow = 0;
    for(let fast = 0; fast < num.length; fast ++){
        if(num[fast] !== val){

            num[fast] = num[slow];
            slow ++;
        }
    }
    return slow;
}

let num = [1,2,3,4,5];
let val = 5;

let k = removeElement(num, val);
console.log(k);
console.log(num)