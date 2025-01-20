import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// import { ProductsComponent } from "./products/products.component";
// import { ServicesComponent } from "./services/services.component";
// import { AboutUsComponent } from "./about-us/about-us.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular-Seed-Website';
}
