import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ContentFormComponent } from './content-form/content-form.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { OutputDisplayComponent } from './output-display/output-display.component';

@Component({
  selector: 'app-root',
  imports: [
    HeaderComponent,
    FooterComponent,
    ContentFormComponent,
    OutputDisplayComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  output: string = '';
  isGenerating: boolean = false;

  onOutputChange(output: string) {
    this.output = output;
  }

  onGeneratingChange(isGenerating: boolean) {
    this.isGenerating = isGenerating;
  }
}
