import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss',
})
export class LandingPageComponent {
  userEmail!: string;

  constructor(private router: Router) {}
  onContinue(): void {
    this.router.navigateByUrl('facesnaps');
  }

  onSubmit(form: NgForm): void {
    console.log(form.value);
  }
}
