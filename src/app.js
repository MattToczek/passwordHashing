const bcrypt = require('bcryptjs');

let pass = 'lolers'

const hashItUp = async (pWord) => {
    const HashedPass = await bcrypt.hash(pWord, 10);
    console.log(HashedPass);
    const checkMatch = await bcrypt.compare(pWord, HashedPass)
    if (checkMatch){
        console.log("That is the correct password");   
    }
    
}

hashItUp(pass);


