
//  1. Given a string 'str' write program to check if string contains "script"

// let str_1 = "we can write a script to automate stuffs"
// let str_2 = "Promming langs include: 'java', 'python', 'javascript', and 'Go'"
// let str_3 = "we'll all have a swell weekend of coding!"

// if (str_1.includes("script")) {
//   console.log ("yes, I can find script");
// } 
// else {
//     console.log ("No!, I can't find script");        
// }
// if (str_2.includes("script")) {
//   console.log ("yes, I can find script");
// } 
// else {
//     console.log ("No!, I can't find script");        
// }

// if (str_3.includes("script")) {
//    console.log ("yes, I can find script");
// } 
// else {
//     console.log ("No!, I can't find script");        
// }

// 2. Given a string name write a program to check if this string is big or not. a string is big if length of string ios over 10 characters
// And print output true or fasle


// if ( str_1.length > 10){
//     console.log(True);
// }
// else{
//     consle.log(False);
// }

// 3.  
 
// let sCase= "frank is tough buddy"
// let firstOcc = sCase.indexOf(" ")
// let subStr1 = sCase[0].toUpperCase() + sCase.slice(1, firstOcc)
// let secondOcc = sCase.indexOf(" ", firstOcc + 1)
// let thirdOcc = sCase.indexOf(" ", secondOcc + 1)
// let subStr2 = sCase.charAt(firstOcc + 1).toUpperCase() + sCase.slice(firstOcc + 2, secondOcc )
// let subStr3 = sCase.charAt(secondOcc + 1).toUpperCase() + sCase.slice(secondOcc + 2, thirdOcc)
// let subStr4 = sCase.charAt(thirdOcc + 1).toUpperCase() + sCase.slice(thirdOcc + 2)
// let uCase = subStr1 + " " + subStr2  + " " + subStr3 + " " + subStr4
// console.log(uCase)


// let value1 = 20
// let value2 = 30
// let sumOfValue = (value1 + value2)
// console.log(sumOfValue)

// let value3 = 40
// let value4 = 50
// let subtrOfValue = (value3 - value4)
// console.log (subtrOfValue)

// let value5 = 70
// let value6 = 80
// let multiOfValue = (value5 * value6)
// console.log (multiOfValue)

// let value7 = 90
// let value8 = 7
// let medOfValue = (value8 % value7)
// console.log (medOfValue)

// let value9 = "small"
// let value10 = "big"
// let medddOfValu = (value9 - value10)
// console.log  (medddOfValu)

// let value11 = "small"
// let value12 = "big"
// let addMe = (value11 + value12)
// console.log (addMe)


// let bash = "" + 1 + 10 + 2 - 5 + "7"
// console.log (bash)

// let value13 = ""
// console.log (value13)

// let value14
// console.log (value14)

// let sam = 40
// let chucks = 50
// let valueCalculated = sam == chucks
// console.log (valueCalculated)


// let kule = 60
// let sami = 70
// let valueC = kule <= sami
// console.log (valueC)

// //length of a string (string.length)
// console.log ("This is a Javascript class. it is getting interestin!".length)
 
// //Index-ing and indexOf()
// let sentence = "This is a Javascript class. it is getting interestin!"

// console.log (sentence.indexOf('i'))
// console.log (sentence.indexOf('g',35)) 
  
// // concatenation 
// let firstName = "Bashir"
// let sunName = "Aina"
// let fullName = firstName + " " + sunName
// console.log (fullName)

// // charAt
// let characterOfInterest = sentence.charAt(3)
// console.log (characterOfInterest)

// let chaacterOfInterest = sentence.charAt(sentence.length-1)
// console.log (chaacterOfInterest)


// let characteOfInterest = sentence[3]
// console.log (characteOfInterest)

// //case manipulation
// let bigSentence = sentence.toUpperCase()
// console.log (bigSentence)

// let smallSentence = sentence.toLowerCase()
// console.log (smallSentence)

//1.
//  let ooldStr = "judgggg not, that ye be not judged";

// function replace(oldStr){
//  oldStr = oldStr.replaceAll('a',4)
//    .replaceAll('e',3)
//    .replaceAll('i', 1)
//    .replaceAll('o', 0)
//    .replaceAll('s', 5)
//   return oldStr;
// }

// console.log (replace(ooldStr))

//2.
// let str1 = "flower"
// let str2 = "float"
// let str3 = "flong"
// let output_ = ""


// function prefix(pre1, pre2, pre3){
//     if (str1[0] == str2[0] && str1[0] == str3[0] && str2[0] == str3[0]) {
//     output_ = output_ + str1[0]
//     }
//     else output_ = output_
//     if (output_ == str1[0] && str1[1] == str2[1] && str1[1] == str3[1] && str2[1] == str3[1]) {
//     output_ = output_ + str1[1]
//     }
//     else output_ = output_
//     if (output_ == str1[0] + str1[1] && str1[2] == str2[2] && str1[2] == str3[2] && str2[2] == str3[2]) {
//     output_ = output_ + str1[2]
//     }
//     else output_ = output_
//     if (output_ == str1[0] + str1[1] + str1[2] && str1[3] == str2[3] && str1[3] == str3[3] && str2[3] == str3[3]) {
//     output_ = output_ + str1[3]
//     }
//     else output_ = output_
  
//    return output_
// }

// console.log (prefix (str1, str2, str3))


// //3
// let  num = "CCXCV"
// let output = 0

// //charcter1
// function convertNum(pr1, pr2, pr3, pr4, pr5) { 
//   if (num[0] =="C") {
//     output = output + 100
//     }
//     else if(num[0] == "L") {
//         output = output + 50
//     }
//     else if(num[0] == "X") {
//         output = output + 10
//     }
//     else if(num[0] == "V") {
//         output = output + 5
//     }
//     else if(num[0] == "I") {
//         output = output + 1
//     }


// //character2
// if (num[1] == "C" && num[0] != "X") {
//     output = output + 100
//     }
//     else if (num[1] == "C" && num[0] == "X") {
//         output = output + 80
//     }
//     else if (num[1] == "L" && num[0] != "X") {
//         output = output + 50
//     }
//     else if (num[1] == "L" && num[0] == "X") {
//         output = output + 30
//     }
//     else if (num[1] == "X" && num[0] != "I") {
//         output = output + 10
//     }
//     else if (num[1] == "X" && num[0] == "I") {
//         output = output + 8
//     }
//     else if (num[1] == "V" && num[0] != "I") {
//         output = output + 5
//     }
//     else if (num[1] == "V" && num[0] == "I") {
//         output = output + 3
//     }
//     else if (num[1] == "I") {
//         output = output + 1
//     }


// //character3
// if (num[2] == "C" && num[1] != "X") {
//     output = output + 100
//     }
//     else if (num[2] == "C" && num[1] == "X") {
//         output = output + 80
//     }
//     else if (num[2] == "L" && num[1] != "X") {
//         output = output + 50
//     }
//     else if (num[2] == "L" && num[1] == "X") {
//         output = output + 30
//     }
//     else if (num[2] == "X" && num[1] != "I") {
//         output = output + 10
//     }
//     else if (num[2] == "X" && num[1] == "I") {
//         output = output + 8
//     }
//     else if (num[2] == "V" && num[1] != "I") {
//         output = output + 5
//     }
//     else if (num[2] == "V" && num[1] == "I") {
//         output = output + 3
//     }
//     else if (num[2] == "I") {
//         output = output + 1
//     }


// //character4
// if (num[3] == "C" && num[2] != "X") {
//     output = output + 100
//     }
//     else if (num[3] == "C" && num[2] == "X") {
//         output = output + 80
//     }
//     else if (num[3] == "L" && num[2] != "X") {
//         output = output + 50
//     }
//     else if (num[3] == "L" && num[2] == "X") {
//         output = output + 30
//     }
//     else if (num[3] == "X" && num[2] != "I") {
//         output = output + 10
//     }
//     else if (num[3] == "X" && num[2] == "I") {
//         output = output + 8
//     }
//     else if (num[3] == "V" && num[2] != "I") {
//         output = output + 5
//     }
//     else if (num[3] == "V" && num[2] == "I") {
//         output = output + 3
//     }
//     else if (num[3] == "I") {
//         output = output + 1
//     }


// //character5
// if (num[4] == "C" && num[3] != "X") {
//     output = output + 100
//     }
//     else if (num[4] == "C" && num[3] == "X") {
//         output = output + 80
//     }
//     else if (num[4] == "L" && num[3] != "X") {
//         output = output + 50
//     }
//     else if (num[4] == "L" && num[3] == "X") {
//         output = output + 30
//     }
//     else if (num[4] == "X" && num[3] != "I") {
//         output = output + 10
//     }
//     else if (num[4] == "X" && num[3] == "I") {
//         output = output + 8
//     }
//     else if (num[4] == "V" && num[3] != "I") {
//         output = output + 5
//     }
//     else if (num[4] == "V" && num[3] == "I") {
//         output = output + 3
//     }
//     else if (num[4] == "I") {
//         output = output + 1
//     }
//   return output;
// }

// console.log (convertNum(num))

// //4
// let strrA = "Life, the universe and everything.";
// let strrB = "your bad manner are exceeded only by your bad manner";


// function capitalizer(string1, string2){
//   if (string1.length == string2.length) {
//     return "true"
//   } else {
//     return "false"
//   }
 
// }

//  console.log (capitalizer(strrA, strrB))




