export interface ProductDetails {
  id: number;
  name: string;
  description: string;
  price: number;
  productImage: string;
  type: string;
  brand: string;
  quantityInStock: number;
}

export interface ProductFormValues {
  ProductName: string;
  ProductDesc: string;
  Price: string;
  PictureUrl: string;
  ProductType: string;
  ProductBrand: string;
  ProductQuantity: number;
}
