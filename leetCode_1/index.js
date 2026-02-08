let sumTwoNumbers =(nums, target)=>{

let map = new Map();

for(let i = 0; i < nums.length; i++){
    let need = target - nums[i];

    if(map.has(need)){
        return [map.get(need), i];

    }
    map.set(nums[i], i);
}

}

let nums = [2,7,8,9];
target = 10;
console.log(sumTwoNumbers(nums, target));
