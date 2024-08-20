const fs=require('fs');

                        // To Create a Folder Synchronously

     fs.mkdirSync('./FS_Synchronous');

                        // To create a file and write some data in it in Synchronouly

      fs.writeFileSync('./Readme.txt',"Hyy there! Hope you enjoying Learning NodeJs")


                      // Now in order to Append data in a file in a Synchronous Way


      fs.appendFileSync('./Readme.txt'," Hyy! I am Dibyansh Sharma a Full Stack Developer and a undergrad at Chitkara University Baddi.")

                      // To rename a file in Synchronous order
 
     fs.renameSync('./Readme.txt','myBio.txt')

                       // To read data from a file in Synchronous way

      const buffer_data=fs.readFileSync('./myBio.txt');
      console.log(buffer_data);

      /*<Buffer 48 79 79 20 74 68 65 72 65 21 20 48 6f 70 65 20 79 6f 75 20 65 6e 6a 6f 79 69 6e 67 20 4c 65 61 72 6e 69 6e 67 20 4e 6f 64 65 4a 73 20 48 79 79 21 20 ... 89 more bytes>*/


      /* Here the reason i use name of the variable is buffer_data is because by default in readFileSync method if no encoding is specified then in that case it returns data in buffer format as we can seen above*/


              /* To read data from a file in its original format rather than buffer format  we use a encoding technique known as "utf-8" */


    const data=fs.readFileSync('./myBio.txt','utf-8');
     console.log(data);

                    // To remove a file in Synchronous way

     fs.unlink('./myBio.txt')

                    // To remove a folder in NodeJS Synchronously

      fs.rmdirSync('./FS_Synchronous')