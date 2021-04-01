const { exec } = require("child_process");
const glob = require("glob");
const { workspaces } = require("../package.json");

function runPackagesCommand(command) {
  glob(workspaces[0], (err, files) => {
    for (const file of files) {
      const dir = file.split("/").slice(0, -1).join("/");
      exec(`cd ${dir} && ${command}`);
    }
  });
}

module.exports = { runPackagesCommand };
