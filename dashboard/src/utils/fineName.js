export default function fileName(url) {
  const url_arr = url.split("/");
  const name = url_arr[url_arr.length - 1].split("%");
  return name[name.length - 1].split("?")[0].replace("2F", "");
}
