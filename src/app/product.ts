export class Product {
    id: number;
    images: string;
    name: string;
    price: number;
    rating: string;
    description : string;
}

export class ShoppingCartItem
 {
     product : Product;
     quantity : number;
 }