using GrandingWebshop.Models;
using System.Net.Http.Json;

namespace GrandingWebshop
{
    public class Cart
    {

        public List<ProductModel> products { get; set; } = new();

        public async Task AddProductToCartAsync(ProductModel product)
        {
			products.Add(product);
		}
    }
}
