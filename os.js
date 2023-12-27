
const os = require('os')
const user = os.userInfo()
console.log(user);

//Return uptime
console.log(`The uptime is ${os.uptime()}`);