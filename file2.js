//Globals -- No Window !!!
// __dirname - path to the current directory
// __filename - file name
// require - function to use modules (Common JS)
// module - info about the current module (file)
// process - info about the env variable where the program is  being executed
// console.log(__dirname);
// // Repeats the value after every second
// SetInterval(()=>{
//     console.log("Hello World")
// },1000)
const sayhi=(name)=>{
    console.log(`Hello There ${name}`);
}
// here we are calling the function newfunction to export the sayhi 
newFunction(); 
function newFunction() {
    module.exports = sayhi;
}
