export default async function handler(req, res) {
  const { q } = req.query;

  if (!q) {
    return res.status(400).json({ error: "q obrigatório" });
  }

  const url = `https://store.steampowered.com/api/storesearch/?term=${encodeURIComponent(q)}&l=portuguese&cc=br`;

  const response = await fetch(url);
  const data = await response.json();

  res.status(200).json(data);
}
