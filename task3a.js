var cat = {
    name: "Fluffy",
    activities: ["play", "eat cat food"],
    catFriends: [
    {
    name: "bar",
    activities: ["be grumpy", "eat bread omblet"],
    weight: 8,
    furcolor: "white"
    }, 
    {
    name: "foo",
    activities: ["sleep", "pre-sleep naps"],
    weight: 3
    }
    ]
   }
   
   //1. Add height and weight to fluffy
cat.height=10;
cat.weight=20;
console.log(cat.activities);
   console.log("Cat Weight:",cat.weight);
   console.log("Cat height:",cat.height);
 //*************************************************************************************************************************************************************************//
   //2.Fluffy name is spelled wrongly. Update it to Fluffyy

   cat.name="Fluffyy";
   console.log("Updated cat name:",cat.name);
 //*************************************************************************************************************************************************************************//
   //3.List all the activities of Fluffyy’s catFriends
   for(let i in cat.catFriends)
   {
       console.log("CatFriendsActivities:",cat.catFriends[i].activities);
   }
    //*************************************************************************************************************************************************************************//
   //4.CatFriend Names
   for(let i in cat.catFriends)
   {
       console.log("CatFriendsName:",cat.catFriends[i].name);
   }
    //*************************************************************************************************************************************************************************//
   //5.Total weight of catfriends
   let totalWeight=0;
   for(let i in cat.catFriends)
   {
       totalWeight=totalWeight + cat.catFriends[i].weight;
   
   }
    //*************************************************************************************************************************************************************************//
   console.log("totalWeight:",totalWeight);
   //6.Total Activities
   console.log(cat.activities);
   for(let i in cat.catFriends)
   {
       console.log(cat.catFriends[i].activities);
   }
    //*************************************************************************************************************************************************************************//
   //7.Add 2 more activities to bar and foo
   cat.catFriends[0].activities.push("scratching posts","scratchig tables");
   cat.catFriends[0].activities.push("Disturb","eat milk");
    //*************************************************************************************************************************************************************************//
   //8.Update the furcolor to brown
   cat.catFriends[0].furcolor="Brown";
 //*************************************************************************************************************************************************************************//
   //Problem 0 : Part B (15 mins):
//Iterating with JSON object’s Values
   
   var myCar = {
    make: "Bugatti",
    model: "Bugatti La Voiture Noire",
    year: 2019,
    accidents: [
    {
    date: "3/15/2019",
    damage_points: "5000",
    atFaultForAccident: true
    },
    {
    date: "7/4/2022",
    damage_points: "2200",
    atFaultForAccident: true
    },
    {
    date: "6/22/2021",
    damage_points: "7900",
    atFaultForAccident: true
    }
    ]
   }
   //1.Loop over the accidents array. Change atFaultForAccident from true to false.
   //2.MyAccidentDate
   for(let i in myCar.accidents)
   {
       myCar.accidents[i].atFaultForAccident="false";
console.log("MyAccidentDate:",myCar.accidents[i].date);
   }
    //*************************************************************************************************************************************************************************//
//Problem 1 (5 mins):
//Parsing an JSON object’s Values:
//1.Write a function called “printAllValues” which returns an newArray of all the input object’s values.
//2.Write a function called “printAllValues” which returns an newArray of all the input object’s values.

    var obj = {name : 'RajiniKanth', age : 33, hasPets : false};
function printAllValues(obj)
 {
     
    console.log(Object.values(obj));
    console.log(Object.keys(obj));
 
}
printAllValues(obj);
 //*************************************************************************************************************************************************************************//

//problem 4

var arr = ['GUVI', 'I', 'am', 'a geek'];
function transformFirstAndLast(arr) {
   let newObj={}
    newObj[arr[0]] = arr[arr.length - 1];
 return newObj;
}
console.log(transformFirstAndLast(arr));
 //*************************************************************************************************************************************************************************//

//problem 5
var arr = [['make', 'Ford'], ['model', 'Mustang'], ['year', 1964]];
function fromListToObject(arr) {
 var newObject = {};
 for(i=0;i<arr.length;i++)
 {
     let key=arr[i][0];
     let obj=arr[i][1]
     newObject[key]=obj;
 }
 return newObject;
}
console.log(fromListToObject(arr));
 //*************************************************************************************************************************************************************************//
//problem 6
var arr= [[['firstName', 'Vasanth'], ['lastName', 'Raja'], ['age', 24], ['role', 'JSWizard']], [['firstName', 'Sri'], ['lastName', 'Devi'], ['age', 28], ['role', 'Coder']]];

function transformEmployeeData(arr) {

let transformEmployeeList = [];
 
    for (i = 0; i < arr.length; i ++)

    {
        
        let employee = arr[i];
        let newEmployee = {};

        for (j = 0; j < employee.length; j++)
        {
            let eachDetail = employee[j];
            let toBeAdded = {};
            toBeAdded[eachDetail[0]] = eachDetail[1];
            newEmployee = Object.assign(newEmployee, toBeAdded);

        }
        transformEmployeeList.push(newEmployee);

     }
 return transformEmployeeList;
}
console.log(transformEmployeeData(arr));

 //*************************************************************************************************************************************************************************//
//problem 7
var expected = {foo: 5, bar: 6};
       var actual = {foo: 5, bar: 6}
       function assertObjectsEqual(actual, expected, testName){
        // your code here
           if (JSON.stringify(expected) == JSON.stringify(actual))
               console.log("Passed");
           
           else
               console.log("FAILED", testName, "Expected", expected, ",but got", actual);
       }
       
       assertObjectsEqual(actual, expected, 'detects that two objects are  not equal');
 //*************************************************************************************************************************************************************************//
      //problem 8
       var securityQuestions = [
        {
        question: 'What was your first pet’s name?',
        expectedAnswer: 'FlufferNutter'
        },
        {
        question: 'What was the model year of your first car?',
        expectedAnswer: '1985'
        },
        {
        question: 'What city were you born in?',
        expectedAnswer: 'NYC'
        }
       ]
       function chksecurityQuestions(securityQuestions,question,answer) {
       
           for (i = 0; i < securityQuestions.length; i++)
           {
               if (securityQuestions[i].question == question) {
                   if (securityQuestions[i].expectedAnswer == answer)
                       return true;
               }
       
               else
                   return false;
           }
        
       }
       var ques = 'What was your first pet’s name?';
       var ans  =  'FlufferNutter';
       
       console.log(chksecurityQuestions(securityQuestions, ques, ans));
 //*************************************************************************************************************************************************************************//      
//problem 9

var students = [
    {name: 'Siddharth Abhimanyu', age: 21},
     { name: 'Malar', age: 25},
    {name: 'Maari',age: 18},{name: 'Bhallala Deva',age: 17},
    {name: 'Baahubali',age: 16},{name: 'AAK chandran',age: 23},   {name:'Gabbar Singh',age: 33},{name: 'Mogambo',age: 53},
    {name: 'Munnabhai',age: 40},{name: 'Sher Khan',age: 20},
    {name: 'Chulbul Pandey',age: 19},{name: 'Anthony',age: 28},
    {name: 'Devdas',age: 56} 
    ];
    function returnminor(arr){
        let minor=[];
        for(i=0;i<students.length;i++){
            if(students[i].age < 20){
                minor.push(students[i]);
            }
        }
        return minor;
    }
    console.log(returnminor(students));






   
