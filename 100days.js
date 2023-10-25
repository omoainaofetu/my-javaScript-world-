//  QUESTION
//Given an Array of integers, nums and an integers,target,return indices of the two numbers
//such that they add up to target

/*example:
input:nums=[3,2,4],target=6 output:[1,2]*/

// solution
// function twoSum (num,terget) {                            
    //    for(let i = 0; i < num.length; i++) {
    //     for(let j = i+1 ; j < num.length; j++ ) {
    //         if(num[i] + num[j] === terget){
    //             return[i,j];
    //         }
    //    }
    // }
    // return null;
    // }
    
    // or 

    // const twoSum (num,terget) {
    //    for(let i = 0; i < num.length; i++) {
    //     for(let j = i+1 ; j < num.length; j++ ) {
    //         if(num[i] + num[j] === terget){
    //             return[i,j];
    //         }
    //    }
    // }
    // return null;
    // }

    // let number = [3,4,5,6,7,8,9,10,11]
    // let tesla = 20
    
    // console.log(twoSum(number, tesla));


    //Question
 //Given ann array,nums and a value val, write a function that removes all instances of that value in place and replace it with an underscore

// function  removeElement (nums, val){
     
//     nums.forEach (function(num, index){
//               if(num === val){
//                  nums[index] ='_';
//                   nums.push()
//                }
//      })     
//      return nums;   
// }

// console.log (removeElement([2, 6, 8, 3, 9, 4, 3, 5, 3, 7, 1, 3],3))


//     // QUE2.
// // Return the First Element in an Array
// // Create a function that takes an array containing only numbers and return the first element.

// // Sample Cases
// // getFirstValue([1, 2, 3]) ➞ 1
// // getFirstValue([80, 5, 100]) ➞ 80
// // getFirstValue([-500, 0, 50]) ➞ -500

//     //  SOLUTION

    // const getFirstValue = function(val){
    //  let poppedVal = val.shift()
    //  return poppedVal

    //  }   
    // let randomNumbersInAnArray = [10,20,30,40,50]
    // console.log(getFirstValue(randomNumbersInAnArray))

//     // QUE3. 
// //  Convert an Array to a String  �
// // Create a function that takes an array of numbers or letters and returns a string.

// // Sample Case
// // arrayToString([1, 2, 3, 4, 5, 6]) ➞ "123456"
// // arrayToString(["a", "b", "c", "d", "e", "f"]) ➞ "abcdef"
// // arrayToString([1, 2, 3, "a", "s", "dAAAA"]) ➞ "123asdAAAA"

// const arrayToString = function(str){
//     let toString = str.join('')
//     return toString
//     }
//     console.log(arrayToString([1, 2, 3, "a", "s", "dAAAA"]))

    //  QUE4. 
// Given an array of integers, find the sum of its elements.

// For example, if the array [1,2,3]  is given, so return 6 . (ie 1+2+3) .

// Print the sum of the array's elements as a single integer.

// Sample Input
// {1 2 3 4 10 11}
// Sample Output = 31

// Explanation: We print the sum of the array's elements: 1+2+3+4+10+11

    // SOLUTION

//  const sumOfArray = function(arr){
//      let output = 0
//      for(let i=0; i<arr.length; i++){
//         //  let output = 0
//          output = output + arr[i]
//      }
//      return output
//      }

//     let randomNumberInArray = [10,30,50,70,90,20,40,60,80]

//     console.log(sumOfArray(randomNumberInArray))

 




//remove the last array and return the Length

// const removeLastWord = (s) =>{
//     let  trimmedString =  s.trim()
//     let  slplitedstring = trimmedString.split(" ")
//     let  popeditems = slplitedstring.pop()
//    if(popeditems.length > 0){
//        return popeditems.length
//    }
//    else {
//        return 0;
//    }
// }
// console.log(removeLastWord("  my matrix with spaces aaa hhh "));