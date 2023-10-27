import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  ContactData : any[] = []

  Products =[
    {
        category: "drinks",
        itemName: "Cappuccino",
        img:"../assets/Coffee/cup-cofee.jpeg",
        price : 230
    },
    {
        category: "drinks",
        itemName: "Americano",
        img:"../assets/Coffee/americano.jpeg",
        price:210
    },
    {
        category: "drinks",
        itemName: "Espresso",
        img:"../assets/Coffee/whitecup-coffee.jpeg",
        descriptions:"A traditional cappuccino should taste creamy and smooth with enough microfoam for the drink to hold well.",
        price:180
    },
    {
        category: "drinks",
        itemName: "cold coffee",
        img:"../assets/Coffee/cold-coffee.jpeg",
        price:150
    },
    {
      category: "breads",
      itemName: "Croasant Stawberry",
      img:"../assets/Coffee/croasant-red.jpeg",
      price:150
    },{
      category: "breads",
      itemName: "Croasant",
      img:"../assets/Coffee/croasant-staw.jpeg",
      price:150
    },
    {
      category: "desserts",
      itemName: "Cheese Pudding",
      img:"../assets/Coffee/dessert-cheese.jpeg",
      price : 230
    },
    {
      category: "desserts",
      itemName: "Waffle Honey",
      img:"../assets/Coffee/waffle-honey.jpeg",
      price : 230
    },
    {
      category: "desserts",
      itemName: "French Cheeese cake",
      img:"../assets/Coffee/cut-cake.jpeg",
      price : 230
    },
]

  constructor() { }

}
