class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        const map=new Map<string, number>();
        for(let i of s){
            map.set(i, map.has(i)?map.get(i)+1:1);
        }
        for(let i of t){
            map.set(i, map.has(i)?map.get(i)-1:1);
            if(map.get(i)===0){
                map.delete(i);
            }
        }
        return map.size===0;
    }
}
