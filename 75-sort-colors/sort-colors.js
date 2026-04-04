/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    let count0=0;
    let count1=0;
    let count2=0;
    for(let i=0;i<nums.length;i++){
        if(nums[i]===0){
         count0++
        }
        else if(nums[i]===1){
            count1++
        }
        count2++
    }
    for(let i=0;i<count0;i++){
        nums[i]=0
    }
    for(let i=count0;i<count0+count1;i++){
        nums[i]=1
    }
    for(let i=count0+count1;i<nums.length;i++){
        nums[i]=2
    }
}
  