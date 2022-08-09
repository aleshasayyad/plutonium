function trim(){
    let name = "   Alesha Sayyad   "
    let fullName = name.trim();
    console.log(fullName)
}
trim()

function lowercase(){
    let name1 = "Alesha Sayyad"
    let fullName1 = name1.toLowerCase();
    console.log(fullName1)
}
lowercase()

function uppercase(){
    let name2 =  "Alesha Sayyad"
    let fullName2 = name2.toUpperCase();
    console.log(fullName2)
}
uppercase()

module.exports.cutt = trim
module.exports.case1 = lowercase
module.exports.case2 = uppercase