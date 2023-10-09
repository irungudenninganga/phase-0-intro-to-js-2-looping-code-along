// Code your solutions in this file
let names=["Guadalupe", "Ollie", "Aki"];

// let messages;
function writeCards(names,events){
    let messagesArr=[];
    for (let i=0;i < names.length; i++){
        
       messagesArr.push  (`Thank you, ${names[i]}, for the wonderful ${events} gift!`)
        
    }
    return messagesArr
 
    }
     

writeCards(names,'suprise')

function countDown(){
    let count=0;
    while (count < 11){
        console.log(count++)
    }
}
countDown()