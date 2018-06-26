import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HeaderComponent } from './header/header.component';
import { ReceipeItemComponent } from './receipes/receipe-list/receipe-item/receipe-item.component';
import { ReceipeDetailComponent } from './receipes/receipe-detail/receipe-detail.component';
import { ReceipesComponent } from './receipes/receipes.component';
import { ReceipeListComponent } from './receipes/receipe-list/receipe-list.component';
import { ShoppingComponent } from './shopping/shopping.component';
import { ShoppingEditComponent } from './shopping/shopping-edit/shopping-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ReceipeItemComponent,
    ReceipeDetailComponent,
    ReceipesComponent,
    ReceipeListComponent,
    ShoppingComponent,
    ShoppingEditComponent
    
   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
