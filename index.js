
const express = require('express')

const app = express()
const port = 3000

app.get('/', (req, res) => {
 	res.send('Hello World modificado!')
})

app.get("/autodeploy", (req, res) => {
	const { exec } = require('child_process');
	var yourscript = exec('sh autodeploy.sh',
        (error, stdout, stderr) => {

            if (error !== null) {
                res.send(`exec error: ${error}`);
            }else{
	    	res.send(stdout);
	    }
        });
}),

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

