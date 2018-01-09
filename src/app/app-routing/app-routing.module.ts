import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PlotComponent } from '../plot/plot.component'
import { DashboardComponent } from '../dashboard/dashboard.component'

const routes: Routes = [
		{
			path: 'plot',
            component: PlotComponent,
		},
        {
            path: '',
            component: DashboardComponent,
        },
    ];

@NgModule({
	imports: [
		CommonModule,
		RouterModule.forRoot(routes)
	],
	exports: [
	    RouterModule
	],
  declarations: []
})

export class AppRoutingModule { }