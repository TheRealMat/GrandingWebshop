export async function onRequest(context) {
    console.log("hello")
    //const preparedStatement = context.env.WebshopDB.prepare('SELECT * FROM Product LIMIT 10 OFFSET 0');
    const preparedStatement = context.env.WebshopDB.prepare('SELECT * FROM Product');
    const data = await preparedStatement.all();
    console.log(context);
    console.log(data);
    return Response.json(data);
}