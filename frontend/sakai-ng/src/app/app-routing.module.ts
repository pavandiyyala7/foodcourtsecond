import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { NotfoundComponent } from './demo/components/notfound/notfound.component';
import { AppLayoutComponent } from "./layout/app.layout.component";
import { authGuard } from './guards/auth.guard';

import { ShiftSkillComponent } from './components/resource/resource-dashboard/shift-skill/shift-skill.component';
import { ConfigComponent } from './components/configuration/config/config.component';
import { EmployeeMasterComponent } from './components/resource/employee-master/employee-master.component';
import { DailyReportComponent } from './components/resource/daily-report/daily-report.component';
import { ShiftStrengthComponent } from './components/resource/resource-dashboard/shift-strength/shift-strength.component';
import { EvacuationComponent } from './components/resource/resource-dashboard/evacuation/evacuation.component';
import { AddEditEmployeeComponent } from './components/resource/employee-master/add-edit-employee/add-edit-employee.component';
import { MonthlyInOutComponent } from './components/resource/monthly-in-out/monthly-in-out.component';
// import { MissedPunchComponent } from './components/resource/attendance-reg/missed-punch/missed-punch.component';
import { AbsentComponent } from './components/resource/absent/absent.component';
import { LateEntryComponent } from './components/resource/late-entry/late-entry.component';
import { EarlyExitComponent } from './components/resource/early-exit/early-exit.component';
import { OvertimeComponent } from './components/resource/overtime/overtime.component';
import { PresentComponent } from './components/resource/present/present.component';
import { MissedPunchReportComponent } from './components/resource/missed-punch-report/missed-punch-report.component';
import { InsufficientHoursReportComponent } from './components/resource/insufficient-hours-report/insufficient-hours-report.component';
import { MandaysComponent } from './components/resource/mandays/mandays.component';
import { LogsComponent } from './components/configurations/logs/logs.component';
import { MissedPunchComponent } from './components/resource/attendance-regularization/missed-punch/missed-punch.component';
import { DepStrengthComponent } from './components/resource/resource-dashboard/dep-strength/dep-strength.component';
import { EmployeeStrengthComponent } from './components/resource/resource-dashboard/employee-strength/employee-strength.component';
import { EmpIntervalStrengthComponent } from './components/resource/resource-dashboard/emp-interval-strength/emp-interval-strength.component';
import { EvacuationManageComponent } from './components/resource/resource-dashboard/evacuation-manage/evacuation-manage.component';
import { AgencyStrengthComponent } from './components/resource/resource-dashboard/agency-strength/agency-strength.component';
import { OperatorworkalocationComponent } from './components/resource/resource-dashboard/operatorworkalocation/operatorworkalocation.component';
import { FoodcourtSecondComponent } from './components/resource/resource-dashboard/foodcourt-second/foodcourt-second.component';
import { ShopFloorNewComponent } from './components/resource/resource-dashboard/shop-floor-new/shop-floor-new.component';
import { WorkStationComponent } from './components/resource/resource-dashboard/work-station 001/work-station.component';
import { ProductionPerformenceComponent } from './components/resource/resource-dashboard/production-performence/production-performence.component';
import { CanteenMenuComponent } from './components/resource/resource-dashboard/canteen-menu/canteen-menu.component';
import { MttrMtbfComponent } from './components/resource/resource-dashboard/mttr-mtbf/mttr-mtbf.component';
import { PDCComponent } from './components/resource/resource-dashboard/pdc/pdc.component';
import { OperationReportComponent } from './components/resource/resource-dashboard/operation-report/operation-report.component';
import { OEEComponent } from './components/resource/resource-dashboard/oee/oee.component';
import { BreakdownReportComponent } from './components/resource/resource-dashboard/breakdown-report/breakdown-report.component';
import { QualityReportComponent } from './components/resource/resource-dashboard/quality-report/quality-report.component';
import { OEEReportComponent } from './components/resource/resource-dashboard/oee-report/oee-report.component';
import { OperatorSupervisorPerformanceComponent } from './components/resource/resource-dashboard/operator-supervisor-performance/operator-supervisor-performance.component';
import { SheduledActualComponent } from './components/resource/resource-dashboard/sheduled-actual/sheduled-actual.component';

@NgModule({
    imports: [
        RouterModule.forRoot([
            // { path: '', redirectTo: 'auth/login', pathMatch: 'full' },
            {
                path: '', component: AppLayoutComponent,
                children: [
                    { path: '', loadChildren: () => import('./demo/components/dashboard/dashboard.module').then(m => m.DashboardModule), canActivate: [authGuard] },
                    { path: 'uikit', loadChildren: () => import('./demo/components/uikit/uikit.module').then(m => m.UIkitModule), canActivate: [authGuard] },
                    { path: 'utilities', loadChildren: () => import('./demo/components/utilities/utilities.module').then(m => m.UtilitiesModule), canActivate: [authGuard] },
                    { path: 'documentation', loadChildren: () => import('./demo/components/documentation/documentation.module').then(m => m.DocumentationModule), canActivate: [authGuard] },
                    { path: 'blocks', loadChildren: () => import('./demo/components/primeblocks/primeblocks.module').then(m => m.PrimeBlocksModule), canActivate: [authGuard] },
                    { path: 'pages', loadChildren: () => import('./demo/components/pages/pages.module').then(m => m.PagesModule), canActivate: [authGuard] },

                    { path: 'shift_skill', component: ShiftSkillComponent, canActivate: [authGuard] },

                    // Resource
                    { path: 'employee_master', component: EmployeeMasterComponent, canActivate: [authGuard] },
                    { path: 'add_employee', component: AddEditEmployeeComponent, canActivate: [authGuard] },
                    { path: 'view_edit_employee/:id', component: AddEditEmployeeComponent, canActivate: [authGuard] },
                    { path: 'daily_report', component: DailyReportComponent, canActivate: [authGuard] },
                    { path: 'present_report', component: PresentComponent, canActivate: [authGuard] },
                    { path: 'absent_report', component: AbsentComponent, canActivate: [authGuard] },
                    { path: 'late_entry_report', component: LateEntryComponent, canActivate: [authGuard] },
                    { path: 'early_exit_report', component: EarlyExitComponent, canActivate: [authGuard] },
                    { path: 'overtime_report', component: OvertimeComponent, canActivate: [authGuard] },
                    { path: 'missed_punch_report', component: MissedPunchReportComponent, canActivate: [authGuard] },
                    { path: 'insufficient_hours_report', component: InsufficientHoursReportComponent, canActivate: [authGuard] },
                    { path: 'Monthly_In_Out', component: MonthlyInOutComponent, canActivate: [authGuard] },
                    { path: 'shift_strength', component: ShiftStrengthComponent, canActivate: [authGuard] },
                    { path: 'evacuation', component: EvacuationComponent, canActivate: [authGuard] },
                    { path: 'emp_strength', component: EmployeeStrengthComponent, canActivate: [authGuard] },
                    { path: 'emp_interval_strength', component: EmpIntervalStrengthComponent, canActivate: [authGuard] },
                    { path: 'dep_strength', component: DepStrengthComponent, canActivate: [authGuard] },
                    { path: 'evacuation_manage', component: EvacuationManageComponent, canActivate: [authGuard] },
                    { path: 'agency_strength', component: AgencyStrengthComponent, canActivate: [authGuard] },
                    { path: 'operator_work_alocation', component: OperatorworkalocationComponent, canActivate: [authGuard] },
                    { path: 'foodcourt_second', component: FoodcourtSecondComponent, canActivate: [authGuard] },
                    { path: 'shopfloor_new', component: ShopFloorNewComponent, canActivate: [authGuard] },
                    { path: 'work_station1', component: WorkStationComponent, canActivate: [authGuard] },
                    { path: 'production_performance', component: ProductionPerformenceComponent, canActivate: [authGuard] },
                    { path: 'mttr_mtbf', component: MttrMtbfComponent, canActivate: [authGuard] },
                    { path: 'sheduled_actual', component: SheduledActualComponent, canActivate: [authGuard] },
                    { path: 'operator_supervisor_performance', component: OperatorSupervisorPerformanceComponent, canActivate: [authGuard] },
                    { path: 'oee', component: OEEComponent, canActivate: [authGuard] },
                    { path: 'quality_report', component: QualityReportComponent, canActivate: [authGuard] },
                    { path: 'breakdown_report', component: BreakdownReportComponent, canActivate: [authGuard] },
                    { path: 'oee_report', component: OEEReportComponent, canActivate: [authGuard] },
                    { path: 'operation_report', component: OperationReportComponent, canActivate: [authGuard] },
                    { path: 'pdc', component: PDCComponent, canActivate: [authGuard] },
                    { path: 'canteenmenu', component: CanteenMenuComponent, canActivate: [authGuard] },
                    // { path: 'missed_punch', component: MissedPunchComponent, canActivate: [authGuard] },
                    { path: 'mandays_report', component: MandaysComponent, canActivate: [authGuard] },

                    // Attendance Regularization
                    { path: 'missed_punch', component: MissedPunchComponent, canActivate: [authGuard] },
                    // { path: 'missed_punch_2', component: MissedPunchComponent, canActivate: [authGuard] },


                    // Configuration
                    { path: 'configuration', component: ConfigComponent, canActivate: [authGuard] },
                    { path: 'logs', component: LogsComponent, canActivate: [authGuard] },
                ]
            },
            { path: 'auth', loadChildren: () => import('./demo/components/auth/auth.module').then(m => m.AuthModule) },
            { path: 'landing', loadChildren: () => import('./demo/components/landing/landing.module').then(m => m.LandingModule) },
            { path: 'notfound', component: NotfoundComponent },
            { path: '**', redirectTo: '/notfound' },
        ], { scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled', onSameUrlNavigation: 'reload' })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
