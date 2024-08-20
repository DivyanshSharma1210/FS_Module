const fs=require('fs');

// Check the execution of code in Synchronous way

   fs.writeFileSync('./Readme.txt',"Hyy! there My name is Dibyansh Sharma");

   const data=fs.readFileSync('./Readme.txt','utf-8')
   console.log(data);
   console.log("fs.readFileSync is currently reading the data form the file....")

/*Here the Expected output:
 Hyy! there My name is Dibyansh Sharma
  fs.readFileSync is currently reading the data form the file....*/

// Check the execution of the code in Asynchronous way

fs.mkdir('Async_mode',(err)=>{
    console.log('Your Folder is Successfully Created');
    console.log(err);
});

fs.writeFile('./Async_mode/Readme.txt',"Hello there! Would you like the concept of Asynchronous...",(err)=>{
    console.log('File is Successfully Created...');
    console.log(err);
});

fs.readFile('./Async_mode/Readme.txt','utf-8',(err,data)=>{
    console.log(data);
});
console.log('fs.readFile is currently reading the data from the given file and it will be displayed to you in a moment ...');

/* Expexted Output:

fs.readFile is currently reading the data from the given file and it will be displayed to you in a moment ...
Hello there! Would you like the concept of Asynchronous...

*/
