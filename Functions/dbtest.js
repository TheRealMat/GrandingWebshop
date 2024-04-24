export async function onRequest(context) {
  // Create a prepared statement with our query
  const ps = context.env.WebshopDB.prepare('SELECT * from Product');
  const data = await ps.first();

  return Response.json(data);
}
