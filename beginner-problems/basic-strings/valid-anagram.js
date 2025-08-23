function anagramStrings(s, t) {
  if (s.length !== t.length) return false;

  let obj1 = createFrequencyObj(s);
  let obj2 = createFrequencyObj(t);

  function createFrequencyObj(string) {
    let obj = {};
    for (const char of string) {
      if (obj[char]) obj[char]++;
      else obj[char] = 1;
    }
    return obj;
  }

  for (const char of s) {
    if (obj1[char] !== obj2[char]) return false;
  }

  return true;
}

console.log(anagramStrings("tea", "eat"));
console.log(anagramStrings("abc", "abcd"));
console.log(anagramStrings("listen", "silent"));
console.log(anagramStrings("tea", "ter"));
console.log(anagramStrings("anagram", "garmana"));
