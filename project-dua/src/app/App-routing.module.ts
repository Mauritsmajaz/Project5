import {NgModule} from '@angular/core';
import {Routes,RouterModule} from '@angular/router';
import {RecipeComponent} from './recipe/recipe.component';
import { ShoopingListComponent } from './shooping-list/shooping-list.component';
import { RecipeStartComponent } from './recipe/recipe-start/recipe-start.component';
import { RecipeDetailComponent } from './recipe/recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from './recipe/recipe-edit/recipe-edit.component';

const appRoutes:Routes=[
    {path:'',redirectTo:'/recipes',pathMatch: 'full'},
    {path: 'recipes',component:RecipeComponent,children:[{path:'',component:RecipeStartComponent},
    {path:'new',component:RecipeEditComponent},
    {path: ':id',component:RecipeDetailComponent},
    {path:':id/edit',component:RecipeEditComponent},
],},
    {path: 'shooping-list',component:ShoopingListComponent},

];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class AppRoutingModule{}