export async function onRequest(context) {
    console.log("context: ");
    console.log(context);
    console.log("context.request: ");
    console.log(context.request);
    const preparedStatement = context.env.WebshopDB.prepare('SELECT * FROM ProductCategories INNER JOIN Product ON Product.Id = ProductCategories.ProductId WHERE CategoryId = ?1').bind(1);
    const data = await preparedStatement.all();
    return Response.json(data);
}