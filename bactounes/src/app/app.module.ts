import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './Landing/footer/footer.component';
import { HeaderComponent } from './Landing/header/header.component';
import { LandingComponent } from './Landing/landing/landing.component';
import { GestionComponent } from './section/gest/gestion/gestion.component';
import { InformatiqueComponent } from './section/Info/informatique/informatique.component';
import { LettreComponent } from './section/Lettre/lettre/lettre.component';
import { MathsComponent } from './section/Math/maths/maths.component';
import { SciencesComponent } from './section/science/sciences/sciences.component';
import { TechniqueComponent } from './section/Tech/technique/technique.component';
import { SVTScienceExpComponent } from './section/science/Matiere/svt-science-exp/svt-science-exp.component';
import { SVTresumeComponent } from './section/science/Resume/svtresume/svtresume.component';
import { SVTresumeDetailsComponent } from './section/science/Resume/svtresume-details/svtresume-details.component';
import { SafePipe } from './safe.pipe';
import { VideoYoutubeComponent } from './section/science/video/video-youtube/video-youtube.component';
import { VideoListComponent } from './section/science/video/video-list/video-list.component';
import { BacExmListComponent } from './section/science/bacExm/bac-exm-list/bac-exm-list.component';
import { BacExmDetComponent } from './section/science/bacExm/bac-exm-det/bac-exm-det.component';
import { AnnoncesInArticleComponent } from './AdsenceBloc/annonces-in-article/annonces-in-article.component';
import { AnnoncesInFeedComponent } from './AdsenceBloc/annonces-in-feed/annonces-in-feed.component';
import { AnnoncesDisplayComponent } from './AdsenceBloc/annonces-display/annonces-display.component';
import { AnnoncesMultiplexComponent } from './AdsenceBloc/annonces-multiplex/annonces-multiplex.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    LandingComponent,
    GestionComponent,
    InformatiqueComponent,
    LettreComponent,
    MathsComponent,
    SciencesComponent,
    TechniqueComponent,
    SVTScienceExpComponent,
    SVTresumeComponent,
    SVTresumeDetailsComponent,
    SafePipe,
    VideoYoutubeComponent,
    VideoListComponent,
    BacExmListComponent,
    BacExmDetComponent,
    AnnoncesInArticleComponent,
    AnnoncesInFeedComponent,
    AnnoncesDisplayComponent,
    AnnoncesMultiplexComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
