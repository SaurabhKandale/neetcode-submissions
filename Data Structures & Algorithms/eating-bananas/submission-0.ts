class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles: number[], h: number): number {
        let max=Math.max(...piles);
        let i=1,j=max;
        let ans=max;
        while(i<=j){
            let mid=Math.floor((i+j)/2);
            let count=0;
            for(let x of piles){
                count+=Math.ceil(x/mid);
            }
            if(count>h){
                i=mid+1;
            }
            else{
                ans=Math.min(ans,mid);
                j=mid-1;
            }
        }
        return ans;
    }
}
