const path = require("path");
export default function fileRename(name) {
  const extName = path.extname(name);
  const filename =
    name.replace(extName, "").toLowerCase().split(" ").join("-") +
    "-" +
    Date.now();
  return filename + extName;
}
