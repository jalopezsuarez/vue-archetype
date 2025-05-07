# Vue Archetype

A lightweight, build-free Vue.js template that demonstrates modern component architecture without build tools. Perfect for learning Vue.js fundamentals or starting small projects with a clean, scalable structure.

## Features

- 🚀 No build tools required - runs directly in the browser
- 📦 Modular component architecture
- 🎯 Clean separation of concerns
- 🔄 Reactive state management
- 🛣️ Client-side routing
- 🎨 Tailwind CSS integration
- 📱 Responsive design
- 🔌 Centralized API services
- 📝 Modern JavaScript (ES6+)

## Project Structure

```
vue-archetype/
├── components/          # Reusable UI components
│   ├── InfoBox.js      # Generic info display component
│   ├── NewPostForm.js  # Form component for new posts
│   └── PostList.js     # List display component
├── pages/              # Page components
│   ├── HomePage.js     # Home page component
│   ├── AboutPage.js    # About page component
│   └── PostPage.js     # Posts page component
├── router/             # Routing logic
│   └── routes.js       # Route definitions
├── services/           # API and business logic
│   └── postService.js  # API service layer
├── styles/             # Global styles
│   └── main.css        # Main stylesheet
├── index.html          # Entry point
└── main.js            # Application initialization
```

## Architecture

This project follows a clean architecture pattern:

- **Components**: Reusable UI elements following the single responsibility principle
- **Pages**: Top-level components that represent different routes
- **Services**: Business logic and API calls
- **Router**: Client-side routing implementation
- **Styles**: Global styling with Tailwind CSS

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/yourusername/vue-archetype.git
```

2. Serve the project using your preferred local server (e.g., MAMP, XAMPP, or any static file server)

3. Open the project in your browser:
```
http://localhost:your-port/vue-archetype/
```

## Key Features Explained

### Component Architecture
- Components are organized by their scope and responsibility
- Each component is self-contained with its own template, logic, and styles
- Props and events are used for component communication

### Routing
- Custom router implementation without external dependencies
- Hash-based navigation for better compatibility
- Clean URL structure

### API Services
- Centralized API calls in the services directory
- Consistent error handling
- Promise-based async operations

### Styling
- Tailwind CSS for utility-first styling
- Responsive design patterns
- Clean and maintainable CSS structure

## Best Practices

1. **Component Design**
   - Keep components small and focused
   - Use props for data passing
   - Implement proper error handling

2. **State Management**
   - Use Vue's reactivity system
   - Keep state close to where it's used
   - Implement proper data flow

3. **Code Organization**
   - Follow the established directory structure
   - Keep related files together
   - Use clear and consistent naming

4. **Performance**
   - Lazy load components when possible
   - Optimize API calls
   - Minimize DOM operations

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Vue.js team for the amazing framework
- Tailwind CSS for the utility-first CSS framework
- JSONPlaceholder for the demo API 