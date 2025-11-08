import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css']
})
export class VideoListComponent implements OnInit {
  videos = [
    {
      id: 1,
      title: 'Procréation et Reproduction Humaine – Révision avec Exercices Corrigés',
      thumbnail: 'assets/img/svtvideos/video1.jpg',
      duration: '1:40:10'
    },
    {
      id: 2,
      title: 'Lovogenèse expliquée simplement | Révision complète',
      thumbnail: 'assets/img/svtvideos/video2.jpg',
      duration: '6:20'
    },
    {
      id: 3,
      title: 'Fonction Reproductrice Chez La Femme',
      thumbnail: 'assets/img/svtvideos/video3.jpg',
      duration: '7:15'
    }
    ,
    {
      id: 4,
      title: 'Fonction Reproductrice Chez La lhomme',
      thumbnail: 'assets/img/svtvideos/video3.jpg',
      duration: '7:15'
    }
    , {
      id: 5,
      title: ' SVT - La génétique humaine partie 2',
      thumbnail: 'assets/img/svtvideos/video3.jpg',
      duration: '7:15'
    }, {
      id: 6,
      title: '  Les bases de la génétique ',
      thumbnail: 'assets/img/svtvideos/video3.jpg',
      duration: '7:15'
    }
    , {
      id: 7,
      title: '  SVT - La génétique humaine partie 1 ',
      thumbnail: 'assets/img/svtvideos/video3.jpg',
      duration: '7:15'
    }
    , {
      id: 8,
      title: '  SVT: Dihybridisme ',
      thumbnail: 'assets/img/svtvideos/video3.jpg',
      duration: '7:15'
    }
    , {
      id: 9,
      title: '  la méiose expliquée ',
      thumbnail: 'assets/img/svtvideos/video3.jpg',
      duration: '7:15'
    }
  ];

  constructor() { }
  ngOnInit(): void { }

}
