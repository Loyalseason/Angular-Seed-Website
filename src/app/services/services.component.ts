import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faMobileAlt, faGlobe, faPencilRuler, faChartPie } from '@fortawesome/free-solid-svg-icons';


interface Service {
  title: string;
  description: string;
  image?: string; 
  icon?: any
}

@Component({
  selector: 'app-services', // Changed selector to a unique value
  imports: [FontAwesomeModule, CommonModule],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {
 
  services: Service[] = [
    {
      title: 'UX/UI Design',
      description: 'Crafting intuitive and engaging user interfaces that enhance user experience.',
      image: 'assets/uiux.png'
    },
    {
      title: 'Application Design',
      description: 'Building scalable and efficient applications tailored to your business needs.',
      image: 'assets/app-design.png'
    },
    {
      title: 'Website Design',
      description: 'Designing stunning and responsive websites that captivate users.',
      icon: faGlobe
    }
  ];
}
