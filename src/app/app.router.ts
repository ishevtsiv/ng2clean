import { RouterModule, Route } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

const routes: Route[] = [
  { path: '', pathMatch: 'full', redirectTo: 'home'},
  { loadChildren: 'app/home/home.module#HomeModule', path: 'home' },
  { loadChildren: 'app/patient/patient.module#PatientModule', path: 'patients' },
  { loadChildren: 'app/provider/provider.module#ProviderModule', path: 'providers' },
  { loadChildren: 'app/appointment/appointment.module#AppointmentModule', path: 'appointments' }
];

export const Routing: ModuleWithProviders = RouterModule.forRoot(
  routes,
  {
    useHash: false
  }
);
