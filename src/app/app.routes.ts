import { Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { MensCollactionComponent } from './component/mens-collaction/mens-collaction.component';
import { AddProductDetailsComponent } from './component/add-product-details/add-product-details.component';
import { RequisitionComponent } from './component/requisition/requisition.component';

export const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path:'home', component: HomeComponent},
    {path:'mens',component:MensCollactionComponent},
    {path:'add-details',component:AddProductDetailsComponent},
   {path:"requisition", component:RequisitionComponent},
];
