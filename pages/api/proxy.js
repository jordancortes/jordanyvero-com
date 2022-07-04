const request = require("request");

export default function handler(req, res) {
  // path to file
  const base_url = "https://f002.backblazeb2.com/file/";
  const file_path = req.query.filename;
  const file_name = file_path.substring(file_path.lastIndexOf("/") + 1);

  console.log("vv", file_name, encodeURIComponent(file_path));

  res.setHeader("content-disposition", "attachment; filename=" + file_name);

  request
    .get(base_url + encodeURIComponent(file_path))
    .on("error", function (err) {
      res.writeHead(404, { "Content-Type": "text/html" });
      res.write(`<h1>404 not found: ${err}</h1>`);
      res.end();
      return;
    })
    .pipe(res); // pipe converted image to HTTP response
}
