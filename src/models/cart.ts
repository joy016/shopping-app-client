export interface CartDetails {
  id: number;
  brand: string;
  description?: string;
  name: string;
  price: number;
  productImage: string;
  quantityInStock: number;
  type: string;
  qty?: number;
  amount?: number;
  total?: number;
}
