import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-content-form',
  imports: [CommonModule, FormsModule],
  templateUrl: './content-form.component.html',
  styleUrl: './content-form.component.scss',
})
export class ContentFormComponent {
  @Output() outputChange = new EventEmitter<string>();
  @Output() generatingChange = new EventEmitter<boolean>();

  topic: string = '';
  selectedContentType: string = 'blog';

  contentTypes: any[] = [
    { id: 'blog', label: 'Blog Post Outline' },
    { id: 'social', label: 'Social Media Captions' },
    { id: 'product', label: 'Product Description' },
    { id: 'email', label: 'Email Draft' },
  ];

  onSubmit(event: Event) {
    event.preventDefault();
    if (!this.topic.trim()) return;

    this.generatingChange.emit(true);
    this.outputChange.emit('');

    setTimeout(() => {
      const generatedContent = this.generateContent(
        this.topic,
        this.selectedContentType
      );
      this.outputChange.emit(generatedContent);
      this.generatingChange.emit(false);
    }, 1500);
  }

  private generateContent(topic: string, contentType: string): string {
    const responses: { [key: string]: string } = {
      blog: `# ${topic}: Comprehensive Guide

## Introduction
- What is ${topic}?
- Why ${topic} matters today
- Who this guide is for

## Key Benefits of ${topic}
- Benefit 1
- Benefit 2
- Benefit 3

## How to Get Started with ${topic}
- Step 1: Research
- Step 2: Planning
- Step 3: Implementation

## Common Challenges and Solutions
- Challenge 1 and solution
- Challenge 2 and solution

## Case Studies
- Example 1
- Example 2

## Conclusion
- Summary of key points
- Next steps for readers`,
      social: `1. "Looking to level up your ${topic} game? We've got you covered with our latest insights! #${topic.replace(
        /\s+/g,
        ''
      )} #TipsAndTricks"

2. "The secret to mastering ${topic} isn't what you think. Swipe to learn our approach that's changing the industry! 💡"

3. "Don't make these common ${topic} mistakes! Check out our latest post to see what you should be doing instead. #LearnWithUs"

4. "Question: What's your biggest challenge with ${topic}? Drop a comment below and we might feature your answer in our next deep dive! 👇"`,
      product: `**[Product Name]: The Ultimate ${topic} Solution**

Transform your approach to ${topic} with our innovative solution designed for maximum efficiency and results.

**Key Features:**
• Intuitive interface that makes ${topic} management effortless
• Advanced analytics to track your ${topic} performance
• Customizable templates for all your ${topic} needs
• Seamless integration with your existing workflow

**Why Customers Love It:**
"This product completely revolutionized how we handle ${topic} at our company. Highly recommend!" - Sarah T., Marketing Director

**Limited Time Offer:**
Get started today and receive our ${topic} mastery guide absolutely free!`,
      email: `Subject: Transform Your Approach to ${topic} - Exclusive Opportunity

Dear [Name],

I hope this email finds you well.

I'm reaching out because I noticed your interest in ${topic} and wanted to share some valuable insights that have helped our clients achieve remarkable results in this area.

At [Company Name], we've developed a unique methodology for ${topic} that consistently delivers:

• 40% increase in efficiency
• Significant cost reduction
• Improved stakeholder satisfaction

Would you be available for a brief 15-minute call next week to discuss how these strategies might benefit your organization?

I've also attached our latest guide on ${topic} best practices that you might find useful.

Looking forward to connecting,

[Your Name]
[Your Position]
[Contact Information]`,
    };

    return (
      responses[contentType] ||
      `Here's some content about ${topic} for your ${contentType} needs.`
    );
  }
}
