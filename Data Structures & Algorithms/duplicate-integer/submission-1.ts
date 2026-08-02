class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        let numsMap=new Set<number>();
        for(let i=0;i<nums.length;i++){
            if(numsMap.has(nums[i])){
                return true;
            }
            numsMap.add(nums[i]);
        }
        return false;
    }
}
