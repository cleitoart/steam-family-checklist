export default async function handler(req, res) {
  const { appId } = req.query;

  if (!appId) {
    return res.status(400).json({ error: "appId obrigatório" });
  }

  const url = `https://store.steampowered.com/api/appdetails?appids=${appId}&cc=br&l=portuguese`;

  const response = await fetch(url);
  const data = await response.json();

  res.status(200).json(data);
}
