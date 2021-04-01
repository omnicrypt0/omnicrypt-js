const { exec } = require("child_process");
const glob = require("glob");

function runPackagesCommand(command) {
  glob("packages/**/package.json", (err, files) => {
    files = files.filter((file) => !file.includes("node_modules"));

    for (const file of files) {
      const dir = file.split("/").slice(0, -1).join("/");
      exec(`cd ${dir} && ${command}`);
    }
  });
}

module.exports = { runPackagesCommand };
