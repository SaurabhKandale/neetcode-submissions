class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        let numsMap=new Map<number, number>();
        for(let i=0;i<nums.length;i++){
            if(numsMap.has(nums[i])){
                return true;
            }
            numsMap.set(nums[i],numsMap.get(nums[i])+1);
        }
        return false;
    }
}
