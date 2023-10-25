
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

// function GreatingName(Greeting){
//     let Great = "Good morning"  + " " + Greeting 
//     return Great;
// }

// console.log(GreatingName("Bashir"));

//loop
// for (let i = 0; i < 10, i++) {}
// while

// let sentence = "new sentences"

// function iterably(str1){
  
//     return fi;
//  }


//   let str1 = "the quick brown fox"

//  function charcteOfInterest (str1){
//     for ( i = 0; i < str1.length; i++) {
//         let output = str1[i]
//         console.log(output);
//  }
//  return output
//    }
//  charcteOfInterest ("the quick brown fox")
 
// let str1 = "the quick brown fox"
// let str3 = " "
// for (let i = 0; i < str1.length; i++) {
//     let nestWord = str1[0].toUpperCase() + str1.slice(1, str1.indexOf(" "))
//     str3 = str3 + nestWord
//     str1 = str1.slice(nestWord.length)
// }



//Assignment

// function checkAnagrams(s, t) {
//   if (s.length !== t.length) {
//     console.log(false);  // Anagrams must have the same length
//     return;
//   }
//   for (let i = 0; i < s.length  ; i++) {
//     if (s.includes(t[i]) && t.includes(s[i]))  {
//          console.log(true);
//     }else 
//     console.log(false);
// }
//   }


// // Example usage
// const s = "atae";
// const t = "tea";
// checkAnagrams(s, t);

// correction for assignment

// function checkAnagrams(s, t) {
//       if (s.length !== t.length) {
//           // Anagrams must have the same length
//         return false
//       }
//       for (let i = 0; i < s.length ; i++) {
//         for (let i = 0; j < t.length ; j++) {
//         if (s[i] == t[j]) {
//             t=t.replace(t[j],"")
//             break;
//         }
//     }
// }
// if (t.length == 0) {
//          return true
//      }else  {
//         return false
//       }

//       }



// let array1 = ["Afica", "America", "Asia", ["Nig", "SA", "Egy", "Ken", ['Lag', 'Abj', 'PH'], ["J'borg"], 'Mar', ['Rabat', "Marakech"]]]
// //Marakech is in Mar not in Egy and is bigger than PH. Lag is bigger than most cities in Asia.

// let cities = `${array1[3][7][1]} is in ${array1[3][6]} not in ${array1[3][2]} and is bigger than ${array1[3][4][2]}. ${array1[3][4] [0]} is bigger than most cities in ${array1[2]}` 
// console.log(cities)

// let names = ["fola", "funso", "mj", "frank", "semiu"]
// let scores = [45, 78, 89, 67, 99]

// //Output:   fola: 45
//  //         funso: 78
//  //         mj: 89
//  //        frank: 76
//  //         semiu: 99

// let nameScore = `${names[0]}: ${scores[0]} 
// ${names[1]}: ${scores[1]}
// ${names[2]}: ${scores[2]}
// ${names[3]}: ${scores[3]}
// ${names[4]}: ${scores[4]}`
// console.log(nameScore);

//my solution
// let strings = "{";

// function stringsChar() {
// if ( strings[0] === "{"  && strings[1] ==="}") {
//     console.log(true);
//   }else if ( strings[0] === "{"  && strings[1] !="}") {
//     console.log(false);
//   }
// else if( strings[0] === "("  && strings[1] ===")"){
//    console.log(true);
//  }
// else if( strings[0] === "("  && strings[1] !=")"){
//     console.log(false);
//  }
//  else if( strings[0] === "["  && strings[1] ==="]"){
//    console.log(true);
//  }
//  else if( strings[0] === "["  && strings[1] !="]"){
//     console.log(false);
//   }
//   return strings;
// }
// console.log(stringsChar(strings));

//Correction
// const isvalid = function(s){
//     let count = 0
//     if (s.length % 2 !== 0){
//         return false
//     }
//     else {
//         for (let i = 0; i < s.length; i+=2){
//             if ((s[i]=="[" && s[i+1] == "]") ||(s[i]=="(" && s[i+1] == ")") ||(s[i]=="{" && s[i+1] == "}"))
//             pair ++
//         }
//         if (pair === s.length/2) return true
//         else return false
//     }
// }


//how to make use of more than a strings
// let tree = {
//     height: 110,
//     color: 'green',
//     grow() {
//         this.height += 2;
//     }
// };
// tree.grow();
// console.log(tree.height);

// let prop = 'name';
// let id = '1234'
// let mobile = '08111'

// let user = {
//     [prop]: 'jack',
//     [`user_${id}`] : `${mobile}`
// }

// console.log(user.name);
// console.log(user.user_1234);



//3
// function checkAnagrams(s, t) {
//           if (s.length !== t.length) {
//               // Anagrams must have the same length
//             return false
//           }
//           for (let i = 0; i < s.length ; i++) {
//             for (let i = 0; j < t.length ; j++) {
//             if (s[i] == t[j]) {
//                 t=t.replace(t[j],"")
//                 break;
//             }
//         }
//     }
//     if (t.length == 0) {
//              return true
//          }else  {
//             return false
//           }
    
//           }





// //class work

// //define an empty array
// let arr1 = []

// // put some elements in the array
// arr1.push(1,2,3,4,5,6,7)

// //remove some elements from the array and add them to another array
// let poopeditems = []
// poopeditems.push(arr1.pop())

// // output the original array and removed arrays
// console.log(arr1)
// console.log(poopeditems)





 const removeLastWord = (s)=>{
         let  trimmedString =  s.trim()
         let  slplitedstring = trimmedString.split(" ")
         let  popeditems = slplitedstring.pop()
        if(popeditems.length > 0){
            return popeditems.length
        }
        else {
            return 0;
        }
    }

    console.log(removeLastWord("my matrix with spaces aaa hhhu"));



// var param = 'size' ;
// var config = {
//     [param] : 12
//     [ 'mobile' + param.charAt(0).toUpperCase() + param.slice(1) : 4


//     ]
// }


// let newArr = [2,4,"car","bike",7,'tesla']
// let remARR = newArr.splice(2,2)
// console.log (remARR)

// console.log('----------removed-----');
// let addarr = newArr.splice(2,0,"toyota","ram")
// console.log(newArr);




// //Sorting
// let numArr2 = [89,9,56,1,45,102,6,7,0,45,66]
// function sortFunc(a,b){
//     return a-b
// }

// find the highest third Number
// const thirdhighest = function(arr){
//     let sortedarr = arr.sort(function(a,b){
//              return a-b
//     }
//            return 
//         )
// }

// let flower = ['hibicus' , 'sunflower', 'lilly']
//    let mappedFlower = flower.map (function(item,i,arry){
//        return item[0].toUpperCase
//    })
 
// console.log(flower);

// function sotFunc(a,b){
//     return b-a
// }
// console.log(numArr2.sort(sortFunc));
// console.log(numArr2.sort(sotFunc));

