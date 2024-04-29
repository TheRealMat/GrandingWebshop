export async function onRequest(context) {
    //const preparedStatement = context.env.WebshopDB.prepare('SELECT * FROM Product LIMIT 10 OFFSET 0');
    const preparedStatement = context.env.WebshopDB.prepare('SELECT * FROM Product');
    const data = await preparedStatement.all();

    return Response.json(data);
}