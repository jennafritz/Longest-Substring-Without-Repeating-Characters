function lengthOfLongestSubstring(s) {
  // type your code here
  let longestSubstring = ""

  let substring = ""

  let substringSet = new Set()
  
  for(j = 0; j < s.length; j++){
    substring = s[j]
    substringSet.add(s[j])
    for(i = j + 1; i < s.length; i++){
      if(substringSet.has(s[i])){
        if(substring.length > longestSubstring.length){
          longestSubstring = substring
        }
        substringSet.clear()
        break
      } else {
        substringSet.add(s[i])
        substring += s[i]
      }
    }
  }
  return longestSubstring.length
}

if (require.main === module) {

// add your own tests in here
console.log("Expecting: 3");
console.log("=>", lengthOfLongestSubstring("abcabcbb"));

console.log("")

console.log("Expecting: 3");
console.log("=>", lengthOfLongestSubstring("pwwkew"));

console.log("")

console.log("Expecting: 0");
console.log("=>", lengthOfLongestSubstring(""));

}

module.exports = lengthOfLongestSubstring

// Please add your pseudocode to this file
// And a written explanation of your solution