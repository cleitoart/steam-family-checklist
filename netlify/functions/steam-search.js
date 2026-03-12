exports.handler = async (event) => {
  const { q } = event.queryStringParameters;
  if (!q) return { statusCode: 400, body: JSON.stringify({ error: "q required" }) };

  const url = `https://store.steampowered.com/api/storesearch/?term=${encodeURIComponent(q)}&l=portuguese&cc=br`;
  const response = await fetch(url);
  const data = await response.json();

  return {
    statusCode: 200,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  };
};
