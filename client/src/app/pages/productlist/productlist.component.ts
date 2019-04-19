import { Component, OnInit } from '@angular/core';
import { IProducts } from '../../models/product';
import { Subject } from 'rxjs';

export class ButtonTypesExample {}
@Component({

  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {

  products: IProducts[];
  upproducts: IProducts[] = [];
  selectedProduct : Subject<any> = new Subject;
  total:number = 0;

  constructor() {
    this.products = [
      {
        product_id : "C1",
        product_img : "/assets/images/koala.jpg" ,
        product_name : "Koala Jumbo Sour Suckers",
        product_price : 1.33,
        product_details : "Jumbo Sour Suckers are the Original Gummy Candy imported from Holland. Red Band is the premier Candy Brand in Europe. Accept no substitute!",
        product_quality : 2
      },
      {
        product_id : "C2",
        product_img : "/assets/images/efrutti.jpg",
        product_name : "efrutti Gummi Candy",
        product_price : 2.0,
        product_details : "efrutti Gummy Candy is the fun and crazy way to combine your creative mind with your taste buds. Eating your sweet food has never been so delicious! ",
        product_quality : 3
      },
      {
        product_id : "C3",
        product_img : "/assets/images/atomic.gif",
        product_name : "Atomic Fireball",
        product_price : 24,
        product_details : "Atomic Fireball... Even the name is hot, hot, hot! It's got the strongest, hottest cinnamon flavour. When you pop it in your mouth,  the taste transforms into a sweet, long lasting candy. Delicious and sweet with heat. The perfect retro candy!",
        product_quality : 0
      },
      {
        product_id : "C4",
        product_img : "/assets/images/hershey.jpg",
        product_name : "Hershey's Kisses",
        product_price : 40.00,
        product_details : "Hershey's Kisses are an old fashioned candy that has been around since 1907! Made from the most delicious Hershey's creamy milk chocolate. Urban legend has it that these delicious candies were named kisses because of the sounds the machinery made when depositing the candies. ",
        product_quality : 0
      },
      {
        product_id : "C50",
        product_img : "/assets/images/choco.jpg",
        product_name : "Milk Chocolate Toonies",
        product_price : 40.00,
        product_details : "These Milk Chocolate Toonies are so good that some might accept them instead of money. A sweet novelty candy that will make you richer, in a sweet way. ",
        product_quality : 0
      }
    ];
   }

  ngOnInit() {
    this.totalPrice();
  }

  getpopup(det) {
    this.selectedProduct.next(det);
  }

  delpopup(pid){
    console.log(pid);
    for(var i=0;i<this.products.length;i++){
      if(this.products[i].product_id === pid)
      {
        this.products.splice(i,1);
      }
    }
    this.totalPrice();
    console.log(this.products);
  }


  totalPrice(){
    this.total = 0;
    for(var i=0;i<this.products.length;i++){
      this.total += (this.products[i].product_price * this.products[i].product_quality);
    }
  }

  add(pid){
    console.log(pid);
    for(var i=0;i<this.products.length;i++){
      if(this.products[i].product_id === pid)
      {
        this.products[i].product_quality += 1;
      }
    }
    this.totalPrice();
    console.log(this.products);
  }

  del(pid){
    console.log(pid);
    for(var i=0;i<this.products.length;i++){
      if(this.products[i].product_id === pid)
      {
        this.products[i].product_quality -= 1;
      }
    }
    this.totalPrice();
    console.log(this.products);
  }

}
