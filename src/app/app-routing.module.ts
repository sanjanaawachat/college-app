import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { AcademicComponent } from './academic/academic.component';
import { AdmissionComponent } from './admission/admission.component';
import { AluminiComponent } from './alumini/alumini.component';
import { CommiteeComponent } from './commitee/commitee.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { CourseComponent } from './course/course.component';
import { EventComponent } from './event/event.component';
import { FooterComponent } from './footer/footer.component';
import { GallaryComponent } from './gallary/gallary.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'about-us',
    component:AboutUsComponent
  },
  {
    path:'commitee',
    component:CommiteeComponent
  },
  {
    path:'admission',
    component:AdmissionComponent
  },
  {
    path:'academic',
    component:AcademicComponent
  },
  {
    path:'alumini',
    component:AluminiComponent
  },
  {
    path:'course',
    component:CourseComponent
  },
  {
    path:'event',
    component:EventComponent
  },
  {
    path:'gallary',
    component:GallaryComponent
  },
  {
    path:'contact-us',
    component:ContactUsComponent
  },
  {
    path:'header',
    component:HeaderComponent
  },
  {
    path:'footer',
    component:FooterComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
