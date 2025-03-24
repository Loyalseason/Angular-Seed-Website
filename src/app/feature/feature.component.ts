import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faMobileAlt, faGlobe, faPencilRuler, faChartPie } from '@fortawesome/free-solid-svg-icons';

interface Feature {
  title: string;
  icon: any;
}

@Component({
  selector: 'app-feature',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.css']
})
export class FeatureComponent implements OnInit, OnDestroy {
  currentIndex = 0;
  slideInterval: any;
  itemsPerView = 3;

  features: Feature[] = [
    { icon: faMobileAlt, title: 'App Design' },       
    { icon: faGlobe, title: 'Web-Site Design' },     
    { icon: faPencilRuler, title: 'Wire frame' },     
    { icon: faChartPie, title: 'Dashboard' }          
  ];
  
  

  constructor() {}

  ngOnInit(): void {
    
  }

  ngOnDestroy(): void {

  }
}
