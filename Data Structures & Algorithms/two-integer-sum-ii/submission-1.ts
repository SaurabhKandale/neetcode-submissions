class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        let i=0,j=nums.length-1;
        while(i<j){
            if(nums[i]+nums[j]<target){
                i++;
            }
            else if(nums[i]+nums[j]>target){
                j--;
            }
            else{
                return [i+1,j+1];
            }
        }
    }
}
