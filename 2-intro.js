// Globals - no window!!

// __dirname - path to current directory 
// __filename - file name
// require - funciton to use modules (commonJS)
// module - info about current module (file)
// process - info about environment where the program is being executed 

console.log(__dirname);

setInterval(() => {
    console.log('hello world');
}, 1000)