export async function onRequest(context) {
    debug.log(context);
    debug.log(context.request);
    const preparedStatement = context.env.WebshopDB.prepare('SELECT * FROM ProductCategories INNER JOIN Product ON Product.Id = ProductCategories.Product_Id WHERE Category_Id = ? LIMIT 10 OFFSET ?').bind(context.request,0);
    const data = await preparedStatement.all();
    return Response.json(data);
}