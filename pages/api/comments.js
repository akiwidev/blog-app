/***********************************************
 * Any file inside the folder pages/api is mapped to /api/ and will be treated as an API endpoint instead of a page.
 ************************************************/

export default function helloAPI(req, res) {
  res.status(200).json({ name: "John Doe" });
}
