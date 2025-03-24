import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// import { ProductsComponent } from "./products/products.component";
import { ServicesComponent } from "./services/services.component";
import { AboutUsComponent } from "./about-us/about-us.component";
import { FeatureComponent } from "./feature/feature.component";
import { ProjectComponent } from "./project/project.component";
import { EducationComponent } from "./education/education.component";
import { PricingComponent } from "./pricing/pricing.component";
import { ContactUsComponent } from "./contact-us/contact-us.component";
import { FooterComponent } from "./footer/footer.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AboutUsComponent, ServicesComponent, FeatureComponent, ProjectComponent, EducationComponent, PricingComponent, ContactUsComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular-Seed-Website';
}
