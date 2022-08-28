alert("Welome to ToDo List \n ")
let list=[]
let command ="0"
while(command!=="quit"|| command !== "q"){    
    if (command === 'add'){
        list.push(prompt("Enter the task"));
        command = prompt("What would you like to do :").toLocaleLowerCase();
    }if (command === 'remove'){
        let loc = prompt("Enter the location of the ")
    }
    
}
console.log("YOu have quit the application ");

