import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-video-youtube',
  templateUrl: './video-youtube.component.html',
  styleUrls: ['./video-youtube.component.css']
})
export class VideoYoutubeComponent implements OnInit {
  videoTitle = '';
  videoUrl: string | null = null;
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    // Example database (you can replace this with data from a service)
    const videos: any = {
      '1': {
        title: 'Procréation et Reproduction Humaine – Révision avec Exercices Corrigés',
        youtube: 'https://www.youtube.com/embed/t0ozvqAr8Qw'
      },
      '2': {
        title: 'Lovogenèse expliquée simplement | Révision complète',
        youtube: 'https://www.youtube.com/embed/sHXfpFEGGEk'
      },
      '3': {
        title: 'Fonction Reproductrice Chez La Femme',
        youtube: 'https://www.youtube.com/embed/zPqcvGGcJ7I'
      },
      '4': {
        title: ' La fonction reproductrice chez l homme ',
        youtube: 'https://www.youtube.com/embed/8wfCjVRtLEw'
      }
      ,
      '5': {
        title: '  SVT - La génétique humaine partie 2 ',
        youtube: 'https://www.youtube.com/embed/VgfX0LaMtDs'
      }
      ,
      '6': {
        title: ' 🧬 Les bases de la génétique  ',
        youtube: 'https://www.youtube.com/embed/f8xPf9ylCjs'
      },
      '7': {
        title: ' SVT - La génétique humaine partie 1',
        youtube: 'https://www.youtube.com/embed/1wc4_25jsNk'
      }
      ,
      '8': {
        title: 'SVT: Dihybridisme',
        youtube: 'https://www.youtube.com/embed/8Eg_smMoz2E'
      }
      ,
      '9': {
        title: 'la méiose expliquée',
        youtube: 'https://www.youtube.com/embed/vpz6mDrFmaA'
      }

    };

    if (id && videos[id]) {
      this.videoTitle = videos[id].title;
      this.videoUrl = videos[id].youtube;
    }
  }
}
