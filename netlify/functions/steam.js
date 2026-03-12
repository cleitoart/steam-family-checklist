exports.handler = async (event) => {
  const appId = event.queryStringParameters?.appId;

  if (!appId) {
    return { statusCode: 400, body: JSON.stringify({ error: "appId obrigatório" }) };
  }

  const url = `https://store.steampowered.com/api/appdetails?appids=${appId}&cc=br&l=portuguese`;

  const response = await fetch(url);
  const data = await response.json();

  return {
    statusCode: 200,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  };
};
