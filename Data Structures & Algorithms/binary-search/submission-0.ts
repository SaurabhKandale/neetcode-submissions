class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums: number[], target: number): number {
        let i=0,j=nums.length-1;
        while(i<=j){
            let mid=(i+j)/2;
            let num=nums[Math.floor(mid)];
            if(num===target){
                return Math.floor(mid);
            }
            else if(num<target){
                i=Math.floor(mid)+1;
            }
            else{
                j=Math.floor(mid)-1;
            }
        }
        return -1;
    }
}
