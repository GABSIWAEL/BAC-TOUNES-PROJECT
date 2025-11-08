import { Component } from '@angular/core';

@Component({
  selector: 'app-svtresume',
  templateUrl: './svtresume.component.html',
  styleUrls: ['./svtresume.component.css']
})
export class SVTresumeComponent {
  resumes = [
    { id: 1, title: 'Résumé 1: resume svt', image: '/assets/pdfs/SVT/bacEX/BAC.jpg', pages: 12, link: '/assets/pdfs/SVT/resume/resume svt.pdf' },
    { id: 2, title: 'Résumé 2: evolution biologique', image: '/assets/pdfs/SVT/bacEX/BAC.jpg', pages: 10, link: '/assets/pdfs/SVT/resume/evolution biologique.pdf' },
    { id: 3, title: 'Résumé 3: La fonction reproductrice chez lhomme', image: '/assets/pdfs/SVT/bacEX/BAC.jpg', pages: 8, link: '/assets/pdfs/SVT/resume/aaa.pdf' },
    { id: 4, title: 'Résumé 4: ecolution', image: '/assets/pdfs/SVT/bacEX/BAC.jpg', pages: 11, link: '/assets/pdfs/SVT/resume/ecolution.pdf' },
    { id: 5, title: 'Résumé 5: sida', image: '/assets/pdfs/SVT/bacEX/BAC.jpg', pages: 9, link: '/assets/pdfs/SVT/resume/sida.pdf' },
    { id: 6, title: 'Résumé 6: reproduction femme', image: '/assets/pdfs/SVT/bacEX/BAC.jpg', pages: 10, link: '/assets/pdfs/SVT/resume/reproduction femme.pdf' },
    { id: 7, title: 'Résumé 7: reproduction homme', image: '/assets/pdfs/SVT/bacEX/BAC.jpg', pages: 7, link: '/assets/pdfs/SVT/resume/reproduction homme.pdf' },
    { id: 8, title: 'Résumé 8: Réponse immunitaire', image: '/assets/pdfs/SVT/bacEX/BAC.jpg', pages: 14, link: '/assets/pdfs/SVT/resume/Réponseimmunitaire.pdf' },
    { id: 9, title: 'Résumé 9: Réflexe myotatique', image: '/assets/pdfs/SVT/bacEX/BAC.jpg', pages: 9, link: '/assets/pdfs/SVT/resume/Réflexe myotatique.pdf' },
    { id: 10, title: 'Résumé 10: procreation', image: '/assets/pdfs/SVT/bacEX/BAC.jpg', pages: 13, link: '/assets/pdfs/SVT/resume/procreation.pdf' },
    { id: 11, title: 'Résumé 11: La Génétique des diploïdes', image: '/assets/pdfs/SVT/bacEX/BAC.jpg', pages: 12, link: '/assets/pdfs/SVT/resume/La Génétique des diploïdes.pdf' },
    { id: 12, title: 'Résumé 12: Hygiène du système nerveux', image: '/assets/pdfs/SVT/bacEX/BAC.jpg', pages: 10, link: '/assets/pdfs/SVT/resume/Hygiène du système nerveux.pdf' },
    { id: 13, title: 'Résumé 13: Génétique Humaine', image: '/assets/pdfs/SVT/bacEX/BAC.jpg', pages: 8, link: '/assets/pdfs/SVT/resume/Génétique Humaine.pdf' },
    { id: 14, title: 'Résumé 14: Fonctionnement du muscle squelettique', image: '/assets/pdfs/SVT/bacEX/BAC.jpg', pages: 11, link: '/assets/pdfs/SVT/resume/Fonctionnement du muscle squelettique.pdf' },
    { id: 15, title: 'Résumé 15: evolution2', image: '/assets/pdfs/SVT/bacEX/BAC.jpg', pages: 9, link: '/assets/pdfs/SVT/resume/evolution2.pdf' },
    { id: 16, title: 'Résumé 16: evolution biologique', image: '/assets/pdfs/SVT/bacEX/BAC.jpg', pages: 10, link: '/assets/pdfs/SVT/resume/evolution biologique.pdf' },
    { id: 17, title: 'Résumé 17: Brassage de l\'information Génétique', image: '/assets/pdfs/SVT/bacEX/BAC.jpg', pages: 7, link: '/assets/pdfs/SVT/resume/AAAA.pdf' },
    { id: 18, title: 'Résumé 18: Régulation de la pression artérielle', image: '/assets/pdfs/SVT/bacEX/BAC.jpg', pages: 7, link: '/assets/pdfs/SVT/resume/Régulation delapression artérielle.pdf' },
    { id: 19, title: 'Résumé 19: immunite', image: '/assets/pdfs/SVT/bacEX/BAC.jpg', pages: 9, link: '/assets/pdfs/SVT/resume/Régulation delapression artérielle.pdf' },
    { id: 20, title: 'Résumé 20: reflexe myotatique', image: '/assets/pdfs/SVT/bacEX/BAC.jpg', pages: 8, link: '/assets/pdfs/SVT/resume/reflexe myotatique.pdf' },
    { id: 21, title: 'Résumé 21: tissu nerveu', image: '/assets/pdfs/SVT/bacEX/BAC.jpg', pages: 10, link: '/assets/pdfs/SVT/resume/tissu nerveu.pdf' },
    { id: 22, title: 'Résumé 22: genetique humaine', image: '/assets/pdfs/SVT/bacEX/BAC.jpg', pages: 12, link: '/assets/pdfs/SVT/resume/genetique humaine.pdf' },
    { id: 23, title: 'Résumé 23: monohybridisme', image: '/assets/pdfs/SVT/bacEX/BAC.jpg', pages: 10, link: '/assets/pdfs/SVT/resume/monohybridisme.pdf' },
    { id: 24, title: 'Résumé 24: brassage de l\'information génétique', image: '/assets/pdfs/SVT/bacEX/BAC.jpg', pages: 11, link: '/assets/pdfs/SVT/resume/brassagedelinformationgenetique.pdf' },
    { id: 25, title: 'Résumé 25: procreation2', image: '/assets/pdfs/SVT/bacEX/BAC.jpg', pages: 9, link: '/assets/pdfs/SVT/resume/procreation2.pdf' },
    { id: 26, title: 'Résumé 26: reproduction Femme', image: '/assets/pdfs/SVT/bacEX/BAC.jpg', pages: 10, link: '/assets/pdfs/SVT/resume/reproFemme.pdf' },
    { id: 27, title: 'Résumé 27: genetique humaine3', image: '/assets/pdfs/SVT/bacEX/BAC.jpg', pages: 9, link: '/assets/pdfs/SVT/resume/genetique humaine3.pdf' },
    { id: 28, title: 'Résumé 28: deploides', image: '/assets/pdfs/SVT/bacEX/BAC.jpg', pages: 12, link: '/assets/pdfs/SVT/resume/deploides.pdf' },
    { id: 29, title: 'Résumé 29: procreation', image: '/assets/pdfs/SVT/bacEX/BAC.jpg', pages: 11, link: '/assets/pdfs/SVT/resume/procreation3.pdf' },
    { id: 30, title: 'Résumé 30: Reproduction Femme', image: '/assets/pdfs/SVT/bacEX/BAC.jpg', pages: 10, link: '/assets/pdfs/SVT/resume/Femme.pdf' },
    { id: 31, title: 'Résumé 31: Reproduction Femme (2)', image: '/assets/pdfs/SVT/bacEX/BAC.jpg', pages: 10, link: '/assets/pdfs/SVT/resume/FEMME2.pdf' },
  ];


}
