class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        let map=new Map<string, number>();
        let newArr=[];
        let index=0;
        for(let i=0;i<strs.length;i++){
            let str=strs[i].split("").sort().join("");
            if(!map.has(str)){
                newArr[index]=[strs[i]];
                map.set(str,index++);
            }
            else{
                newArr[map.get(str)].push(strs[i]);
            }
        }

        return newArr;
    }
}
