import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-bac-exm-det',
  templateUrl: './bac-exm-det.component.html',
  styleUrls: ['./bac-exm-det.component.css']
})
export class BacExmDetComponent implements OnInit {
  bacId!: number;
  bacTitle: string = '';
  pdfUrl: string = '';

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.bacId = Number(this.route.snapshot.paramMap.get('id'));
    this.loadBacExample();
  }

  loadBacExample() {
    const bacExamples = [
      { id: 1, title: 'باك 2025 - دورة رئيسية', pdf: '/assets/pdfs/SVT/bacEX/2025P.pdf' },
      { id: 2, title: 'باك 2025 - دورة المراقبة', pdf: '/assets/pdfs/SVT/bacEX/2025C.pdf' },
      { id: 3, title: 'باك 2024 - دورة رئيسية', pdf: '/assets/pdfs/SVT/bacEX/2024P.pdf' },
      { id: 4, title: 'باك 2024 - دورة المراقبة', pdf: '' },
      { id: 5, title: 'باك 2023 - دورة رئيسية', pdf: '/assets/pdfs/SVT/bacEX/2023P.pdf' },
      { id: 6, title: 'باك 2023 - دورة المراقبة', pdf: '/assets/pdfs/SVT/bacEX/2023C.pdf' },
      { id: 7, title: 'باك 2022 - دورة رئيسية', pdf: '/assets/pdfs/SVT/bacEX/2022P.pdf' },
      { id: 8, title: 'باك 2022 - دورة المراقبة', pdf: '/assets/pdfs/SVT/bacEX/2022C.pdf' },
      { id: 9, title: 'باك 2021 - دورة رئيسية', pdf: '/assets/pdfs/SVT/bacEX/2021P.pdf' },
      { id: 10, title: 'باك 2021 - دورة المراقبة', pdf: '/assets/pdfs/SVT/bacEX/2021C.pdf' },
      { id: 11, title: 'باك 2020 - دورة رئيسية', pdf: '/assets/pdfs/SVT/bacEX/2020P.pdf' },
      { id: 12, title: 'باك 2020 - دورة المراقبة', pdf: '/assets/pdfs/SVT/bacEX/2020C.pdf' },
      { id: 13, title: 'باك 2019 - دورة رئيسية', pdf: '/assets/pdfs/SVT/bacEX/2019P.pdf' },
      { id: 14, title: 'باك 2019 - دورة المراقبة', pdf: '/assets/pdfs/SVT/bacEX/2019C.pdf' },
      { id: 15, title: 'باك 2018 - دورة رئيسية', pdf: '/assets/pdfs/SVT/bacEX/2018C.pdf' },
      { id: 16, title: 'باك 2018 - دورة المراقبة', pdf: '/assets/pdfs/SVT/bacEX/2018C.pdf' },
      { id: 17, title: 'باك 2017 - دورة رئيسية', pdf: '/assets/pdfs/SVT/bacEX/2017P.pdf' },
      { id: 18, title: 'باك 2017 - دورة المراقبة', pdf: '/assets/pdfs/SVT/bacEX/2017C.pdf' },
      { id: 19, title: 'باك 2016 - دورة رئيسية', pdf: '/assets/pdfs/SVT/bacEX/2016P.pdf' },
      { id: 20, title: 'باك 2016 - دورة المراقبة', pdf: '/assets/pdfs/SVT/bacEX/2016C.pdf' },
      { id: 21, title: 'باك 2015 - دورة رئيسية', pdf: '/assets/pdfs/SVT/bacEX/2015P.pdf' },
      { id: 22, title: 'باك 2015 - دورة المراقبة', pdf: '/assets/pdfs/SVT/bacEX/2015C.pdf' },
      { id: 23, title: 'باك 2014 - دورة رئيسية', pdf: '/assets/pdfs/SVT/bacEX/2014P.pdf' },
      { id: 24, title: 'باك 2014 - دورة المراقبة', pdf: '/assets/pdfs/SVT/bacEX/2014C.pdf' },
      { id: 25, title: 'باك 2013 - دورة رئيسية', pdf: '/assets/pdfs/SVT/bacEX/2013P.pdf' },
      { id: 26, title: 'باك 2013 - دورة المراقبة', pdf: '/assets/pdfs/SVT/bacEX/2013C.pdf' },
      { id: 27, title: 'باك 2012 - دورة رئيسية', pdf: '/assets/pdfs/SVT/bacEX/2012P.pdf' },
      { id: 28, title: 'باك 2012 - دورة المراقبة', pdf: '/assets/pdfs/SVT/bacEX/2012C.pdf' },
      { id: 29, title: 'باك 2011 - دورة رئيسية', pdf: '/assets/pdfs/SVT/bacEX/2011P.pdf' },
      { id: 30, title: 'باك 2011 - دورة المراقبة', pdf: '/assets/pdfs/SVT/bacEX/2011C.pdf' },
      { id: 31, title: 'باك 2010 - دورة رئيسية', pdf: '/assets/pdfs/SVT/bacEX/2010P.pdf' },
      { id: 32, title: 'باك 2010 - دورة المراقبة', pdf: '/assets/pdfs/SVT/bacEX/2010C.pdf' },
      { id: 33, title: 'باك 2009 - دورة رئيسية', pdf: '/assets/pdfs/SVT/bacEX/2009P.pdf' },
      { id: 34, title: 'باك 2009 - دورة المراقبة', pdf: '/assets/pdfs/SVT/bacEX/2009C.pdf' },
    ];

    const found = bacExamples.find(b => b.id === this.bacId);
    if (found) {
      this.bacTitle = found.title;
      this.pdfUrl = found.pdf;
    }
  }
}
