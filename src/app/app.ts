import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-root',
  template: `
   <main>
    <a [routerLink]="['/']">
      <header class="brand-name" style="display: flex; align-items: center; gap: 8px;">
        <img src="/assets/logo.svg" alt="logo" width="100" height="100"/>
      </header>
      </a>
      <section class="content">
        <router-outlet></router-outlet>
      </section>
    </main>
  `,
  styleUrl: './app.css',
  imports: [RouterModule],
})
export class App {
  title(): string {
  return 'housing-app';
  }
}
