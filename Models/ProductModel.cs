namespace GrandingWebshop.Models
{
    public class ProductModel
    {
        public Int64 Id { get; set; }

        public string? Name { get; set; }

        public string? Description { get; set; }

        public Int64 Price { get; set; }

        public Int64 Amount { get; set; }
    }
}
