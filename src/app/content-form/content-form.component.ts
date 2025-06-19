import { CommonModule } from '@angular/common';
import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
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

interface ContentPayload {
  topic: string;
  contentType: string;
  tone: string;
  keywords: string;
}

@Component({
  selector: 'app-content-form',
  imports: [CommonModule, FormsModule],
  templateUrl: './content-form.component.html',
  styleUrl: './content-form.component.scss',
})
export class ContentFormComponent {
  @Output() outputChange = new EventEmitter<string>();
  @Output() generatingChange = new EventEmitter<boolean>();
  @Input() isGenerating: boolean = false;

  private service = inject(ContentService);

  topic: string = '';
  keywords: string = '';
  selectedContentType: string = 'blog_post';
  selectedTone: string = 'casual';

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
    if (!this.topic.trim()) return;

    const payload: ContentPayload = {
      topic: this.topic,
      contentType: this.selectedContentType,
      tone: this.selectedTone,
      keywords: this.keywords,
    };

    this.generatingChange.emit(true);
    this.outputChange.emit('');

    this.service.generateContent(payload).subscribe({
      next: (response) => {
        this.outputChange.emit(response.generatedContent);
        this.generatingChange.emit(false);
      },
      error: (error) => {
        console.error('Error generating content:', error);
        this.outputChange.emit('Error generating content. Please try again.');
        this.generatingChange.emit(false);
      },
    });
  }
}
