import { NgModule,DEFAULT_CURRENCY_CODE, LOCALE_ID } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './components/products/products.component';

import { registerLocaleData } from '@angular/common';
import ptBr from '@angular/common/locales/pt';
import { HeaderComponent } from './components/header/header.component';
import { InventoryComponent } from './components/inventory/inventory.component';
import { OrderComponent } from './components/order/order.component';
import { AuthComponent } from './pages/auth/auth.component';

registerLocaleData(ptBr);
@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    HeaderComponent,
    InventoryComponent,
    OrderComponent,
    AuthComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt' },
    {
      provide: DEFAULT_CURRENCY_CODE,
      useValue: 'BRL',
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
