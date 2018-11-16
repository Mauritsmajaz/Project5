import { Component, OnInit } from '@angular/core';
import { Ingredient} from '../shared/ingredient.model';
import { ShoopingListService } from './shooping-list.service';

@Component({
  selector: 'app-shooping-list',
  templateUrl: './shooping-list.component.html',
  styleUrls: ['./shooping-list.component.css']
})
export class ShoopingListComponent implements OnInit {

  ingredients:Ingredient[]
  //=[
    //new Ingredient('Apples',23),
    //new Ingredient('tomato',10),
  //]

  constructor(private slsService:ShoopingListService) { }
 
  ngOnInit() {
    this.ingredients=this.slsService.getIngredient();
    this.slsService.IngredientChange
    .subscribe(
      (Ingredient:Ingredient[])=>{
        this.ingredients=Ingredient;
      }
    )
  }
  //onIngredientAdded(ingredient:Ingredient)
  //{
    //this.ingredients.push(ingredient);
  //}
}
