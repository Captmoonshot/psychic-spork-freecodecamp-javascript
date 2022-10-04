function caseInSwitch(val) {
    var answer = "";
    switch(val) {
        case 1:  // no type conversion, val has to be integer 1
            answer = "alpha";
            break;
        case 2:
            answer = "beta";
            break;
        case 3:
            answer = "delta";
            break;
    }
    return answer;
}

console.log(caseInSwitch(1));       // alpha
console.log(caseInSwitch("1"));     // nothing happens because "1" isn't a case 



