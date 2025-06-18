import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-output-display',
  imports: [],
  templateUrl: './output-display.component.html',
  styleUrl: './output-display.component.scss'
})
export class OutputDisplayComponent {
 @Input() output: string = '';
  @Input() isGenerating: boolean = false;

  copied: boolean = false;

  copyToClipboard() {
    navigator.clipboard.writeText(this.output).then(() => {
      this.copied = true;
      setTimeout(() => this.copied = false, 2000);
    });
  }
}
