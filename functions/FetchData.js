export async function onRequest(context) {
  // Create a prepared statement with our query
  const preparedStatement = context.env.WebshopDB.prepare('SELECT * FROM Product LIMIT 10 OFFSET 0');
  const data = await preparedStatement.raw();

  return Response.json(data);
}
