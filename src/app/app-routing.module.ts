import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InventoryComponent } from './components/inventory/inventory.component';
import { OrderComponent } from './components/order/order.component';
import { ProductsComponent } from './components/products/products.component';
import { AuthComponent } from './pages/auth/auth.component';

const routes: Routes = [
  {path: 'products', component: ProductsComponent},
  {path: 'inventory', component: InventoryComponent},
  {path: 'order', component: OrderComponent},
  {path: 'auth', component: AuthComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
