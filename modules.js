//Modules -Encapsulated code (only share minimum)
// Node uses the CommonJs Library -every file is the module by default
// We cannot acess the variable outside the file as it is encapsulated
// const names=require('./names');
// const sayhi=require('./file2'); // importing the function from the file2
const data=require('./file3');
console.log(data);
// sayhi('Susan');
// sayhi(names.john);
// sayhi(names.peter);