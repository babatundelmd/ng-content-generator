import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ContentService } from './content.service';

interface ContentType {
  id: string;
  label: string;
}

interface ToneType {
  id: string;
  label: string;
}

@Component({
  selector: 'app-content-form',
  imports: [CommonModule, FormsModule],
  templateUrl: './content-form.component.html',
  styleUrl: './content-form.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContentFormComponent {
  outputChange = output<string>();
  generatingChange = output<boolean>();

  private service = inject(ContentService);

  topic = signal('');
  keywords = signal('');
  selectedContentType = signal('blog_post');
  selectedTone = signal('casual');
  isGenerating = signal(false);

  contentTypes: ContentType[] = [
    { id: 'blog_post', label: 'Blog Post Outline' },
    { id: 'social_media_update', label: 'Social Media Captions' },
    { id: 'product_description', label: 'Product Description' },
    { id: 'email_draft', label: 'Email Draft' },
  ];

  toneTypes: ToneType[] = [
    { id: 'persuasive', label: 'Persuasive' },
    { id: 'casual', label: 'Casual' },
    { id: 'humorous', label: 'Humorous' },
    { id: 'formal', label: 'Formal' },
  ];

  onSubmit(event: Event) {
    event.preventDefault();
    if (!this.topic().trim()) return;

    const payload = {
      topic: this.topic(),
      contentType: this.selectedContentType() as any,
      tone: this.selectedTone() as any,
      keywords: this.keywords(),
    };

    this.isGenerating.set(true);
    this.generatingChange.emit(true);
    this.outputChange.emit('');

    this.service.generateContent(payload).subscribe({
      next: (response) => {
        this.outputChange.emit(response.generatedContent);
        this.isGenerating.set(false);
        this.generatingChange.emit(false);
      },
      error: (error) => {
        console.error('Error generating content:', error);
        this.outputChange.emit('Error generating content. Please try again.');
        this.isGenerating.set(false);
        this.generatingChange.emit(false);
      },
    });
  }
}
