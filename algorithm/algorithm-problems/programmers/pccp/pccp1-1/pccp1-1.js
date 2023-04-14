function solution(input_string) {
    let count = {};
    let lonely = [];
   [...input_string].forEach( x => {
       count[x] = count[x] ? ++count[x] : 1;
   })

    for (let key in count) {
        if (input_string.lastIndexOf(key) - input_string.indexOf(key) !== count[key] - 1) lonely.push(key)
    }


    return lonely.sort().join("") || "N"
}