import { Component, signal } from '@angular/core';
import { Home } from './home/home';

@Component({
  selector: 'app-root',
  template: `
   <main>
      <header class="brand-name" style="display: flex; align-items: center; gap: 8px;">
        <img src="/assets/logo.svg" alt="logo" width="100" height="100"/>
      </header>
      <section class="content">
        <app-home> </app-home>
      </section>
    </main>
  `,
  styleUrl: './app.css',
  imports: [Home],
})
export class App {
  title(): string {
  return 'housing-app';
  }
}
