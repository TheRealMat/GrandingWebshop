namespace GrandingWebshop.Models
{
    public class ProductModel
    {
        public Int64 Id { get; set; }

        public Int64 ProductId { get; set; }

        public string? Name { get; set; }

        public string? Description { get; set; }

        public Int64 Price { get; set; }

        public Int64 Amount { get; set; }

        public string? ImageUrl { get; set; }
    }

	public class Meta
	{
		public string? served_by { get; set; }
		public double duration { get; set; }
		public int changes { get; set; }
		public int last_row_id { get; set; }
		public bool changed_db { get; set; }
		public int size_after { get; set; }
		public int rows_read { get; set; }
		public int rows_written { get; set; }
	}

	public class Root
	{
		public bool success { get; set; }
		public Meta? meta { get; set; }
		public ProductModel[]? results { get; set; }
	}
}
