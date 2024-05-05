export async function onRequest(context) {
    let preparedStatement;
    const contextInt = parseInt(context.params.get_products);
    if (contextInt == 0)
    {
        // get all products
        preparedStatement = context.env.WebshopDB.prepare('SELECT * FROM Product');

    } else
    {
        // get products of category
        preparedStatement = context.env.WebshopDB.prepare('SELECT * FROM ProductCategories INNER JOIN Product ON Product.Id = ProductCategories.ProductId WHERE CategoryId = ?1').bind(contextInt);

    }
    const data = await preparedStatement.all();
    return Response.json(data);
}