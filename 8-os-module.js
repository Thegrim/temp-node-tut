//os is built in module (not exterior) so it doesn't reauire './'
const os = require('os')

//info about current user
const user = os.userInfo()
console.log(user);

// method returns the system uptime in seconds 
console.log(`The System Uptimes is ${os.uptime} seconds`);

const currentOS = {
    names: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
}

console.log(currentOS);