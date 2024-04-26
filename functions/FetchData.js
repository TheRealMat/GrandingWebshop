export async function onRequest(context) {
  // Create a prepared statement with our query
  const preparedStatement = context.env.WebshopDB.prepare('SELECT * from Product');
  const data = await preparedStatement.raw();
  console.log(context);
  console.log(context.env);
  console.log(context.env.WebshopDB);
  return Response.json(data);
}
