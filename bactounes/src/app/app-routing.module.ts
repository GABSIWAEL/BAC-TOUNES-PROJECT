import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './Landing/landing/landing.component';
import { SciencesComponent } from './section/science/sciences/sciences.component';
import { MathsComponent } from './section/Math/maths/maths.component';
import { TechniqueComponent } from './section/Tech/technique/technique.component';
import { LettreComponent } from './section/Lettre/lettre/lettre.component';
import { InformatiqueComponent } from './section/Info/informatique/informatique.component';
import { GestionComponent } from './section/gest/gestion/gestion.component';
import { SVTScienceExpComponent } from './section/science/Matiere/svt-science-exp/svt-science-exp.component';
import { SVTresumeComponent } from './section/science/Resume/svtresume/svtresume.component';
import { SVTresumeDetailsComponent } from './section/science/Resume/svtresume-details/svtresume-details.component';
import { VideoListComponent } from './section/science/video/video-list/video-list.component';
import { VideoYoutubeComponent } from './section/science/video/video-youtube/video-youtube.component';
import { BacExmListComponent } from './section/science/bacExm/bac-exm-list/bac-exm-list.component';
import { BacExmDetComponent } from './section/science/bacExm/bac-exm-det/bac-exm-det.component';

const routes: Routes = [
  { path: '', component: LandingComponent },
  {
    path: 'ScienceExprimentales', component: SciencesComponent
  },
  { path: 'ScienceExprimentales/SVT', component: SVTScienceExpComponent },
  { path: 'ScienceExprimentales/SVT/Resume', component: SVTresumeComponent },
  {
    path: 'ScienceExprimentales/SVT/Resumes/:id',
    component: SVTresumeDetailsComponent
  },
  { path: 'ScienceExprimentales/SVT/Videos', component: VideoListComponent },
  { path: 'ScienceExprimentales/SVT/Videos/:id', component: VideoYoutubeComponent },

  { path: 'ScienceExprimentales/SVT/BacExamples', component: BacExmListComponent },
  { path: 'ScienceExprimentales/SVT/BacExamples/:id', component: BacExmDetComponent },


  { path: 'Mathematiques', component: MathsComponent },
  { path: 'Technique', component: TechniqueComponent },
  { path: 'Letter', component: LettreComponent },
  { path: 'Informatiques', component: InformatiqueComponent },
  { path: 'Gestion', component: GestionComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
