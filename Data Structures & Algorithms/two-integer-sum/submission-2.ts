class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        let numsMap=new Map<number, number>();
        for(let i=0;i<nums.length;i++){
            numsMap.set(nums[i],i);
        }
        for(let i=0;i<nums.length;i++){
            let num=numsMap.get(target-nums[i]);
            if(numsMap.has(target-nums[i]) && num!==i){
                return [i,num];
            }
        }
    }
}
