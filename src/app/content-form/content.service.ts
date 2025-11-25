import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { GoogleGenAI } from '@google/genai';
import { environment } from '../environments/environment';

// Defines the structure (shape of data) of the content generation request
interface ContentRequest {
  topic: string;
  contentType: 'blog_post' | 'social_media_update' | 'email_draft' | 'product_description';
  tone?: 'formal' | 'casual' | 'humorous' | 'persuasive';
  keywords?: string;
}

interface ContentResponse {
  generatedContent: string;
  promptUsed: string;
}

@Injectable({
  providedIn: 'root',
})
export class ContentService {
  private ai = new GoogleGenAI({ apiKey: environment.GEMINI_API_KEY });

  generateContent(payload: ContentRequest): Observable<ContentResponse> {
    return from(this.generateContentAsync(payload));
  }

  private async generateContentAsync(input: ContentRequest): Promise<ContentResponse> {
    const { topic, contentType, tone = 'casual', keywords } = input;
    let prompt = `Generate a ${contentType} about "${topic}".`;
    if (tone) {
      prompt += ` The tone should be ${tone}.`;
    }
    if (keywords) {
      prompt += ` Please incorporate the following keywords: ${keywords}.`;
    }

    switch (contentType) {
      case 'blog_post':
        prompt += ` The blog post should be engaging, well-structured with a clear introduction, body, and conclusion. Aim for around 500-800 words.`;
        break;
      case 'social_media_update':
        prompt += ` Keep it concise and engaging for social media. Include relevant hashtags if possible. Max 280 characters.`;
        break;
      case 'email_draft':
        prompt += ` Draft a professional email. Include a subject line, greeting, body, and closing.`;
        break;
      case 'product_description':
        prompt += ` Write a compelling product description highlighting key features and benefits.`;
        break;
    }

    console.log('Using prompt:', prompt);

    const response = await this.ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
      config: {
        temperature: 0.7,
      },
    });

    const generatedContent = response.text || '';

    return {
      generatedContent,
      promptUsed: prompt,
    };
  }
}
