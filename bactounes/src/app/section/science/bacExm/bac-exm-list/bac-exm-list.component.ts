import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bac-exm-list',
  templateUrl: './bac-exm-list.component.html',
  styleUrls: ['./bac-exm-list.component.css']
})
export class BacExmListComponent implements OnInit {
  constructor() { }
  ngOnInit(): void { }
  bacExamples = [
    // 🧠 2025
    { id: 1, title: 'باك 2025 - دورة رئيسية', image: '/assets/pdfs/SVT/bacEX/BAC.jpg', year: '2025', type: 'رئيسية' },
    { id: 2, title: 'باك 2025 - دورة المراقبة', image: '/assets/pdfs/SVT/bacEX/BAC.jpg', year: '2025', type: 'مراقبة' },

    // 🧠 2024
    { id: 3, title: 'باك 2024 - دورة رئيسية', image: '/assets/pdfs/SVT/bacEX/BAC.jpg', year: '2024', type: 'رئيسية' },
    { id: 4, title: 'باك 2024 - دورة المراقبة', image: '/assets/pdfs/SVT/bacEX/BAC.jpg', year: '2024', type: 'مراقبة' },

    // 🧠 2023
    { id: 5, title: 'باك 2023 - دورة رئيسية', image: '/assets/pdfs/SVT/bacEX/BAC.jpg', year: '2023', type: 'رئيسية' },
    { id: 6, title: 'باك 2023 - دورة المراقبة', image: '/assets/pdfs/SVT/bacEX/BAC.jpg', year: '2023', type: 'مراقبة' },

    // 🧠 2022
    { id: 7, title: 'باك 2022 - دورة رئيسية', image: '/assets/pdfs/SVT/bacEX/BAC.jpg', year: '2022', type: 'رئيسية' },
    { id: 8, title: 'باك 2022 - دورة المراقبة', image: '/assets/pdfs/SVT/bacEX/BAC.jpg', year: '2022', type: 'مراقبة' },

    // 🧠 2021
    { id: 9, title: 'باك 2021 - دورة رئيسية', image: '/assets/pdfs/SVT/bacEX/BAC.jpg', year: '2021', type: 'رئيسية' },
    { id: 10, title: 'باك 2021 - دورة المراقبة', image: '/assets/pdfs/SVT/bacEX/BAC.jpg', year: '2021', type: 'مراقبة' },

    // 🧠 2020
    { id: 11, title: 'باك 2020 - دورة رئيسية', image: '/assets/pdfs/SVT/bacEX/BAC.jpg', year: '2020', type: 'رئيسية' },
    { id: 12, title: 'باك 2020 - دورة المراقبة', image: '/assets/pdfs/SVT/bacEX/BAC.jpg', year: '2020', type: 'مراقبة' },

    // 🧠 2019
    { id: 13, title: 'باك 2019 - دورة رئيسية', image: '/assets/pdfs/SVT/bacEX/BAC.jpg', year: '2019', type: 'رئيسية' },
    { id: 14, title: 'باك 2019 - دورة المراقبة', image: '/assets/pdfs/SVT/bacEX/BAC.jpg', year: '2019', type: 'مراقبة' },

    // 🧠 2018
    { id: 15, title: 'باك 2018 - دورة رئيسية', image: '/assets/pdfs/SVT/bacEX/BAC.jpg', year: '2018', type: 'رئيسية' },
    { id: 16, title: 'باك 2018 - دورة المراقبة', image: '/assets/pdfs/SVT/bacEX/BAC.jpg', year: '2018', type: 'مراقبة' },

    // 🧠 2017
    { id: 17, title: 'باك 2017 - دورة رئيسية', image: '/assets/pdfs/SVT/bacEX/BAC.jpg', year: '2017', type: 'رئيسية' },
    { id: 18, title: 'باك 2017 - دورة المراقبة', image: '/assets/pdfs/SVT/bacEX/BAC.jpg', year: '2017', type: 'مراقبة' },

    // 🧠 2016
    { id: 19, title: 'باك 2016 - دورة رئيسية', image: '/assets/pdfs/SVT/bacEX/BAC.jpg', year: '2016', type: 'رئيسية' },
    { id: 20, title: 'باك 2016 - دورة المراقبة', image: '/assets/pdfs/SVT/bacEX/BAC.jpg', year: '2016', type: 'مراقبة' },

    // 🧠 2015
    { id: 21, title: 'باك 2015 - دورة رئيسية', image: '/assets/pdfs/SVT/bacEX/BAC.jpg', year: '2015', type: 'رئيسية' },
    { id: 22, title: 'باك 2015 - دورة المراقبة', image: '/assets/pdfs/SVT/bacEX/BAC.jpg', year: '2015', type: 'مراقبة' },

    // 🧠 2014
    { id: 23, title: 'باك 2014 - دورة رئيسية', image: '/assets/pdfs/SVT/bacEX/BAC.jpg', year: '2014', type: 'رئيسية' },
    { id: 24, title: 'باك 2014 - دورة المراقبة', image: '/assets/pdfs/SVT/bacEX/BAC.jpg', year: '2014', type: 'مراقبة' },

    // 🧠 2013
    { id: 25, title: 'باك 2013 - دورة رئيسية', image: '/assets/pdfs/SVT/bacEX/BAC.jpg', year: '2013', type: 'رئيسية' },
    { id: 26, title: 'باك 2013 - دورة المراقبة', image: '/assets/pdfs/SVT/bacEX/BAC.jpg', year: '2013', type: 'مراقبة' },

    // 🧠 2012
    { id: 27, title: 'باك 2012 - دورة رئيسية', image: '/assets/pdfs/SVT/bacEX/BAC.jpg', year: '2012', type: 'رئيسية' },
    { id: 28, title: 'باك 2012 - دورة المراقبة', image: '/assets/pdfs/SVT/bacEX/BAC.jpg', year: '2012', type: 'مراقبة' },

    // 🧠 2011
    { id: 29, title: 'باك 2011 - دورة رئيسية', image: '/assets/pdfs/SVT/bacEX/BAC.jpg', year: '2011', type: 'رئيسية' },
    { id: 30, title: 'باك 2011 - دورة المراقبة', image: '/assets/pdfs/SVT/bacEX/BAC.jpg', year: '2011', type: 'مراقبة' },

    // 🧠 2010
    { id: 31, title: 'باك 2010 - دورة رئيسية', image: '/assets/pdfs/SVT/bacEX/BAC.jpg', year: '2010', type: 'رئيسية' },
    { id: 32, title: 'باك 2010 - دورة المراقبة', image: '/assets/pdfs/SVT/bacEX/BAC.jpg', year: '2010', type: 'مراقبة' },

    // 🧠 2009
    { id: 33, title: 'باك 2009 - دورة رئيسية', image: '/assets/pdfs/SVT/bacEX/BAC.jpg', year: '2009', type: 'رئيسية' },
    { id: 34, title: 'باك 2009 - دورة المراقبة', image: '/assets/pdfs/SVT/bacEX/BAC.jpg', year: '2009', type: 'مراقبة' }
  ];


}
