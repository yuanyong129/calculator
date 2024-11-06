import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { routes as calculators } from './routes/calculators/calculators.routes';
import { routes as settings } from './routes/settings/settings.routes';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', redirectTo: 'standard', pathMatch: 'full' },
      ...calculators,
      ...settings
    ]
  }
];
