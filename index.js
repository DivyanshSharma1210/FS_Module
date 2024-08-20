const fs=require('fs')

                  // How to create new files in FS module in Asynchronous Way
    fs.writeFile('./Read.txt','Hello There!',(err)=>{
    console.log("Your folder is Successfully created");
    console.log(err);

});

/* We pass them a function as an argument - a callback -
that gets called when that task completes.The callback
has an argument that tells you whether the operation completed successfully.
Now we need to say what to do when fs.writeFile has completed  (even if it is nothing),
and start checking for errors.*/


       // How to Append data in a file in Asynchronous way
 
  fs.appendFile('./Read.txt',"How's your journey going with NodeJS",(err)=>{

    console.log("Data is Successfully Appended in the file.")
    console.log(err);
  });

      // How to read data from a file in Asynchronous way


    fs.readFile('./Read.txt','utf-8',(err,data)=>{
        console.log(data);
        console.log(err);
    });

        // How to rename an existing file in Asynchronous Way
    
    fs.rename('./Read.txt','Readme.txt',(err)=>{
        console.log("File is Renamed Successfully...");
        console.log(err);
    });

       // How to delete file in Asynchronous way
       fs.unlink('./readme.txt',(err)=>{
        console.log("Your File is Successfully Deleted...");
        console.log(err);
       });