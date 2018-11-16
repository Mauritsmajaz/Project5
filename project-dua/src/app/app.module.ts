import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {AppRoutingModule} from './App-routing.module';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecipeComponent } from './recipe/recipe.component';
import { ShoopingListComponent } from './shooping-list/shooping-list.component';
import {RecipeListComponent} from"./recipe/recipe-list/recipe-list.component";
import {RecipeDetailComponent} from"./recipe/recipe-detail/recipe-detail.component";
import {RecipeItemComponent} from"./recipe/recipe-list/recipe-item/recipe-item.component";
import {ShoopingEditComponent} from"./Shooping-list/Shooping-edit/Shooping-edit.component";
import {DropdownDirective}from './shared/Dropdown.directive';
import { ShoopingListService } from './shooping-list/shooping-list.service';
import {RecipeStartComponent} from './recipe/recipe-start/recipe-start.component';
import {RecipeEditComponent} from './recipe/recipe-edit/recipe-edit.component';
@NgModule({
   declarations: [
      AppComponent,
      HeaderComponent,
      RecipeComponent,
      ShoopingListComponent,
      RecipeListComponent,
      RecipeDetailComponent,
      RecipeItemComponent,
      ShoopingEditComponent,
      DropdownDirective,
      RecipeStartComponent,
      RecipeEditComponent

   ],
   imports: [
      BrowserModule,
      FormsModule,
      HttpModule,
      AppRoutingModule
   ],
   providers: [ShoopingListService],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
