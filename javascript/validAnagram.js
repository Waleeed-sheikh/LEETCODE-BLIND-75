var isAnagram = function (s, t) {
    let ssorted = s.split("").sort().join("")
    let tsorted = t.split("").sort().join("")
    return ssorted === tsorted
  };