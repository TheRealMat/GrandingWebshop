export async function onRequestGet(context) {
    console.log("Debug 4");
    //const preparedStatement = context.env.WebshopDB.prepare('SELECT * FROM Product LIMIT 10 OFFSET 0');
    const preparedStatement = context.env.WebshopDB.prepare('SELECT * FROM Product');
    const data = await preparedStatement.all();
    console.log("Debug 5");
    return data;
}