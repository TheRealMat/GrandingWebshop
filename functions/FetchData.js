export async function onRequest(context) {
  // Create a prepared statement with our query
  const preparedStatement = context.env.WebshopDB.prepare('SELECT * from Product');
  const data = await preparedStatement.raw();

  return Response.json(data);
}
