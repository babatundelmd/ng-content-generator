# ContentCraft AI 🚀

An intelligent content generation platform built with Angular that leverages AI to create professional content across multiple formats and tones.

![Angular](https://img.shields.io/badge/Angular-21.0.0-red?style=flat-square&logo=angular)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9-blue?style=flat-square&logo=typescript)
![SCSS](https://img.shields.io/badge/SCSS-Latest-pink?style=flat-square&logo=sass)

<img width="731" height="402" alt="Image" src="https://github.com/user-attachments/assets/ccf9feb2-e8a8-4343-8685-799f102a267f" />

## ✨ Features

- **Multi-Format Content Generation**: Create blog posts, social media captions, product descriptions, and email drafts
- **Tone Customization**: Choose from 6 different tones (Professional, Casual, Friendly, Formal, Enthusiastic, Persuasive)
- **Keyword Integration**: Add relevant keywords to optimize your content
- **Real-time Generation**: Powered by Genkit with Gemini AI models
- **Responsive Design**: Works seamlessly across desktop, tablet, and mobile devices
- **Modern UI**: Clean, intuitive interface with smooth animations and transitions
- **Copy to Clipboard**: Easy content copying with visual feedback

## 🎯 Content Types Supported

| Type | Description |
|------|-------------|
| **Blog Post Outline** | Comprehensive structure with introduction, key points, and conclusion |
| **Social Media Captions** | Engaging posts with hashtags and call-to-actions |
| **Product Description** | Compelling product copy with features and benefits |
| **Email Draft** | Professional email templates for business communication |

## 🎨 Available Tones
 
- **Humorous** - Funny and relaxed
- **Formal** - Traditional and structured
- **Enthusiastic** - Energetic and exciting
- **Persuasive** - Compelling and convincing

## 🚀 Quick Start

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- Angular CLI (v21.0.0)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/babatundelmd/ng-content-generator.git
   cd ng-content-generator
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   ng serve
   ```

4. **Open your browser**
   Navigate to `http://localhost:4200/`

## 🏗️ Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── header/
│   │   ├── footer/
│   │   ├── content-form/
│   │   └── output-display/
│   ├── services/
│   │   └── content.service.ts
│   ├── app.component.ts
│   └── app.module.ts
├── styles.scss
└── assets/
```

## 🔧 Configuration

### Payload Structure

The application sends the following payload to the AI service:

```typescript
interface ContentPayload {
  topic: string;        // Main topic/subject
  contentType: string;  // blog, social, product, email
  tone: string;         // professional, casual, friendly, etc.
  keywords: string;     // Comma-separated keywords
}
```

## 🎨 Styling

The project uses pure SCSS with a modern design system:

- **Color Palette**: Indigo primary with carefully selected grays
- **Typography**: Clean, readable fonts with proper hierarchy
- **Layout**: Flexbox and CSS Grid for responsive design
- **Animations**: Smooth transitions and hover effects
- **Components**: Card-based layout with subtle shadows

## 🧩 Components

### ContentFormComponent
- Handles user input for topic, keywords, content type, and tone
- Integrates with ContentService for AI generation
- Provides real-time validation and loading states

### OutputDisplayComponent  
- Displays generated content with syntax highlighting
- Includes copy-to-clipboard functionality
- Shows loading and empty states

### HeaderComponent & FooterComponent
- Clean branding and navigation
- Responsive design elements

## 📱 Responsive Design

The application is fully responsive with breakpoints:
- **Mobile**: < 768px (stacked layout)
- **Tablet**: 768px - 1024px (2-column grid)
- **Desktop**: > 1024px (3-column grid for selections)

## 🔨 Available Scripts

| Command | Description |
|---------|-------------|
| `ng serve` | Start development server |
| `ng build` | Build for production |
| `ng test` | Run unit tests |
| `ng lint` | Run code linting |
| `ng e2e` | Run end-to-end tests |

## 🌟 Modern Angular Features

- **Angular 21**: Latest Angular version with enhanced performance and features
- **Standalone Components**: Using modern standalone architecture
- **New Control Flow**: Utilizing `@if` and `@for` syntax
- **Signals**: Modern reactive programming (where applicable)
- **Dependency Injection**: Using `inject()` function
- **TypeScript 5.9**: Fully typed for better development experience

## 🔧 Development

### Adding New Content Types

1. Update the `contentTypes` array in `ContentFormComponent`
2. Add corresponding generation logic in your backend service
3. Update TypeScript interfaces if needed

### Adding New Tones

1. Add to the `toneTypes` array in `ContentFormComponent`
2. Ensure your AI service handles the new tone

### Customizing Styles

Modify the SCSS variables in component files or create a global theme file.

## 🚀 Deployment

### Build for Production

```bash
ng build --configuration=production
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Angular Team** - For the amazing framework
- **Google Genkit** - For AI integration capabilities
- **Gemini AI** - For powerful content generation

## 📞 Support

If you have any questions or need help with setup, please open an issue in the GitHub repository.

---

**Built with ❤️ using Angular and powered by AI**
