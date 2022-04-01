import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '',
   loadChildren: () =>
      import('./auth/auth.module').then((m) => m.AuthModule)
  },
  {path: '**',
   redirectTo: 'auth/login', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
