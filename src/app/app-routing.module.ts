import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MamunComponent } from './mamun/mamun.component';

const routes: Routes = [
    { path: 'mamun', component: MamunComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
