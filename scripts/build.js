const { exec } = require("child_process");
const glob = require("glob");

glob("packages/**/package.json", (err, files) => {
  files = files.filter((file) =>
    file.includes("node_modules") ? false : true
  );

  for (const file of files) {
    const dir = file.split("/").slice(0, -1).join("/");
    exec(`cd ${dir} && npm i && npm run build`);
  }
});
