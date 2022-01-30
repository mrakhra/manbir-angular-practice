import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { RouterModule } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductAlertsComponent } from './product-alerts/product-alerts.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { CartService } from './services/cart.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: ProductListComponent },
      { path: 'product/:productId', component: ProductDetailComponent },
    ]),
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    ProductListComponent,
    ProductAlertsComponent,
    ProductDetailComponent,
  ],
  providers: [CartService],
  bootstrap: [AppComponent],
})
export class AppModule {}
