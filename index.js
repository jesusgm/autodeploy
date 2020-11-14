const express = require("express");
var bodyParser = require("body-parser");

const app = express();
const port = 3000;

app.use(bodyParser.json());

const exectScript = (path) => {
  const { exec } = require("child_process");
  var yourscript = exec(`sh autodeploy.sh ${path}`, (error, stdout, stderr) => {
    if (error !== null) {
      return `exec error: ${error}`;
    } else {
      return stdout;
    }
  });
};

app.post("/autodeploy", (req, res) => {
  const body = req.body;

  let gitProjectPath = body.repository.name;

  res.send(exectScript(gitProjectPath));
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
