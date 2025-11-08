import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-svtresume-details',
  templateUrl: './svtresume-details.component.html',
  styleUrls: ['./svtresume-details.component.css']
})
export class SVTresumeDetailsComponent implements OnInit {
  resumeId!: number;
  resumeTitle: string = '';
  pdfUrl: string = '';

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.resumeId = Number(this.route.snapshot.paramMap.get('id'));
    this.loadResume();
  }

  loadResume() {
    // Example PDF URLs — replace with real ones later
    const resumes = [
      { id: 1, title: 'Résumé 1 resume svt ', url: '/assets/pdfs/SVT/resume/resume svt.pdf' },
      { id: 2, title: 'Résumé 2: evolution biologique', url: '/assets/pdfs/SVT/resume/evolution biologique.pdf' },
      { id: 3, title: 'Résumé 3: La fonction reproductrice chez lhomme ', url: '/assets/pdfs/SVT/resume/aaa.pdf' },
      { id: 4, title: 'Résumé 4:ecolution ', url: '/assets/pdfs/SVT/resume/ecolution.pdf' },
      { id: 5, title: 'Résumé 5:sida ', url: '/assets/pdfs/SVT/resume/sida.pdf' },
      { id: 6, title: 'Résumé 6:reproduction femme ', url: '/assets/pdfs/SVT/resume/reproduction femme.pdf' },
      { id: 7, title: 'Résumé 7:reproduction homme ', url: '/assets/pdfs/SVT/resume/reproduction homme.pdf' },
      { id: 8, title: 'Résumé 8:Réponseimmunitaire ', url: '/assets/pdfs/SVT/resume/Réponseimmunitaire.pdf' },
      { id: 9, title: 'Résumé 9:Réflexe myotatique ', url: '/assets/pdfs/SVT/resume/Réflexe myotatique.pdf' },
      { id: 10, title: 'Résumé 10:procreation ', url: '/assets/pdfs/SVT/resume/procreation.pdf' },
      { id: 11, title: 'Résumé 11:La Génétique des diploïdes ', url: '/assets/pdfs/SVT/resume/La Génétique des diploïdes.pdf' },
      { id: 12, title: 'Résumé 12:Hygiène du système nerveux ', url: '/assets/pdfs/SVT/resume/Hygiène du système nerveux.pdf' },
      { id: 13, title: 'Résumé 13: Génétique Humaine ', url: '/assets/pdfs/SVT/resume/Génétique Humaine.pdf' },
      { id: 14, title: 'Résumé 14: Fonctionnement du muscle squelettique ', url: '/assets/pdfs/SVT/resume/Fonctionnement du muscle squelettique.pdf' },
      { id: 15, title: 'Résumé 15: evolution2', url: '/assets/pdfs/SVT/resume/evolution2.pdf' },
      { id: 16, title: 'Résumé 16: evolution biologique ', url: '/assets/pdfs/SVT/resume/evolution biologique.pdf' },
      { id: 17, title: 'Résumé 17: Brassage de l"information Génétique ', url: '/assets/pdfs/SVT/resume/AAAA.pdf' },
      { id: 18, title: 'Résumé 18: Régulation de la pression artérielle ', url: '/assets/pdfs/SVT/resume/Régulation delapression artérielle.pdf' },
      { id: 19, title: 'Résumé 19: immunite ', url: '/assets/pdfs/SVT/resume/Régulation delapression artérielle.pdf' },
      { id: 20, title: 'Résumé 20: reflexe myotatique ', url: '/assets/pdfs/SVT/resume/reflexe myotatique.pdf' },
      { id: 21, title: 'Résumé 21: tissu nerveu  ', url: '/assets/pdfs/SVT/resume/tissu nerveu.pdf' },
      { id: 22, title: 'Résumé 22: genetique humaine  ', url: '/assets/pdfs/SVT/resume/genetique humaine.pdf' },
      { id: 23, title: 'Résumé 23: monohybridisme  ', url: '/assets/pdfs/SVT/resume/monohybridisme.pdf' },
      { id: 24, title: 'Résumé 24: brassage de linformation genetique  ', url: '/assets/pdfs/SVT/resume/brassagedelinformationgenetique.pdf' },
      { id: 25, title: 'Résumé 25: procreation2  ', url: '/assets/pdfs/SVT/resume/procreation2.pdf' },
      { id: 26, title: 'Résumé 26: reproduction Femme.pdf  ', url: '/assets/pdfs/SVT/resume/reproFemme.pdf' },
      { id: 27, title: 'Résumé 27: genetique humaine3.pdf  ', url: '/assets/pdfs/SVT/resume/genetique humaine3.pdf' },
      { id: 28, title: 'Résumé 28: deploides  ', url: '/assets/pdfs/SVT/resume/deploides.pdf' },
      { id: 29, title: 'Résumé 29: procreation  ', url: '/assets/pdfs/SVT/resume/procreation3.pdf' },
      { id: 30, title: 'Résumé 30: Reproduction Femme  ', url: '/assets/pdfs/SVT/resume/Femme.pdf' },
      { id: 31, title: 'Résumé 31: Reproduction Femme  ', url: '/assets/pdfs/SVT/resume/FEMME2.pdf' },

    ];

    const found = resumes.find(r => r.id === this.resumeId);
    if (found) {
      this.resumeTitle = found.title;
      this.pdfUrl = found.url;
    }
  }
}

