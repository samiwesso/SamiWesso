import { Injectable } from '@angular/core';
import { Product } from '../app/entities/product.entity';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private products: Product[];

  constructor() {

    this.products = [
      { id: 'Nike1', name: 'Nike Tanjun', price: 99, img: '../assets/blue-nike-low-top-shoes-637076.jpg' },
      { id: 'Nike2', name: 'Nike Revolution', price: 89, img: '../assets/blur-close-up-depth-of-field-fashion-1478442.jpg' },
      { id: 'Nike3', name: 'Nike Tensaur', price: 119, img: '../assets/photo-of-nike-shoes-1598505.jpg' },
      { id: 'Nike4', name: 'Nike Air Max', price: 129, img: '../assets/photo-of-pair-of-vans-sneakers-1598508.jpg' },
      { id: 'Tensaur5', name: 'Tensaur C', price: 1099, img: '../assets/shallow-focus-photography-of-pair-of-red-low-top-sneakers-1240892.jpg' },
      { id: 'Crazychaos6', name: 'Crazychaos w', price: 68, img: '../assets/fashion-shoes-footwear-19090.jpg' },
      { id: 'Baseline7', name: 'Baseline CMF', price: 80, img: '../assets/footwear-leather-shoes-wear-267320.jpg' },
      { id: 'Grand8', name: 'Grand Court', price: 132, img: '../assets/photo-of-nike-shoes-1598505.jpg' },
    ];
  }

  getAllProducts(): Product[] {
    return this.products;
  }

  getOneProduct(id: string): Product {
    return this.products[this.getSelectedIndex(id)];
  }

  private getSelectedIndex(id: string) {
    for (var i = 0; i < this.products.length; i++) {
      if (this.products[i].id == id) {
        return i;
      }
    }
    return -1;
  }


}
