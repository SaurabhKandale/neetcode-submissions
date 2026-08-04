class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    toSkip(s:string): boolean{
        if(!((s[0]>="a" && s[0]<="z") || (s[0]>="A" && s[0]<="Z") || (s[0]>="0" && s[0]<="9")) || s[0]===" "){
            return true;
        }
        return false;
    }
    isPalindrome(s: string): boolean {
        let i=0,j=s.length-1;
        while(i<j){
            if(this.toSkip(s[i])){
                i++;
            }
            else if(this.toSkip(s[j])){
                j--;
            }
            else if(s[i].toLowerCase()!==s[j].toLowerCase()){
                return false;
            }
            else{
                i++;j--;
            }
        }
        return true;
    }
}