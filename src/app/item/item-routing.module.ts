import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";


import { ItemComponent } from './item.component';

const routes: Routes = [
    { path: "", component:ItemComponent},
];

@NgModule({
    exports: [RouterModule],
    imports: [RouterModule.forChild(routes)]
})
export class ItemRoutingModule { }