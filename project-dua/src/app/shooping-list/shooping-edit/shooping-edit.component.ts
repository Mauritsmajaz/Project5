import { Component, OnInit, ViewChild, ElementRef, EventEmitter, Output} from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import {ShoopingListService} from '../shooping-list.service';

@Component({
  selector: 'app-shooping-edit',
  templateUrl: './shooping-edit.component.html',
  styleUrls: ['./shooping-edit.component.css']
})
export class ShoopingEditComponent implements OnInit {
  

  @ViewChild('nameInput') nameRef:ElementRef;
  @ViewChild('amountInput') amountRef:ElementRef;
  //@Output() ingredientAdded= new EventEmitter<Ingredient>();

  constructor(private slsService:ShoopingListService) { }

  ngOnInit() {
  }

  onAddItem(){
  const ingName=this.nameRef.nativeElement.value;
  const ingAmount=this.amountRef.nativeElement.value;
  const newIngredient= new Ingredient(ingName,ingAmount);
  this.slsService.addIngredient(newIngredient);
    //this.ingredientAdded.emit(newingredient);
  }
 

}
