const os = require('os')
const path = require('path')
const {readFileSync, writeFileSync} = require('fs')
const { readFile, writeFile } = require('fs')



const getInfo = () => {
    const info = {
        name: os.type(),
        release: os.release(),
        totalMemory: os.totalmem(),
        freMemory: os.freemem()
    }

    return info
}

const file = readFileSync('./subfolder/text1.txt','utf8')
const file2 = readFileSync('./subfolder/file2.txt', 'utf8')

const name = 'hanan'
//writeFileSync('./subfolder/text1.txt',`My name is ${name}`, { flag: 'a'})
readFile('./subfolder/text1.txt', 'utf8', (err,result) =>{
    if(err){
        console.log(err, "Error Here")
        return;
    }
    console.log(result)
}
)