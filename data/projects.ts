export interface Project {
  id: string;
  title: string;
  domain: string;
  shortDescription: string;
  description: string;
  tools: string[];
  registrationLink: "https://forms.gle/XVHkLg2yX9kR43Sp7";
  submissionLink: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced'; 
  duration: string;
}

export const projects: Project[] = [
  // Web Development Projects (Basic to Advanced)
  {
    id: "web-dev-001",
    title: "Personal Portfolio Website",
    domain: "Web Development",
    shortDescription: "Create a responsive personal portfolio website to showcase your skills and projects.",
    description: "Build a modern, responsive portfolio website using HTML, CSS, and JavaScript. Include sections for about, skills, projects, and contact information. Learn responsive design principles and modern web development practices.",
    tools: ["HTML", "CSS", "JavaScript", "Bootstrap", "Git"],
    registrationLink: "https://forms.gle/XVHkLg2yX9kR43Sp7",
    submissionLink: "https://forms.gle/gbVugdcQPHDccBHE8",
    difficulty: "Beginner",
    duration: "2-3 weeks"
  },
  {
    id: "web-dev-002",
    title: "Todo List Application",
    domain: "Web Development",
    shortDescription: "Build a simple todo list app with local storage functionality.",
    description: "Create a functional todo list application where users can add, edit, delete, and mark tasks as complete. Implement local storage to persist data and learn basic DOM manipulation and event handling.",
    tools: ["HTML", "CSS", "JavaScript", "Local Storage"],
    registrationLink: "https://forms.gle/XVHkLg2yX9kR43Sp7",
    submissionLink: "https://forms.gle/sR5kEHE3FcH2qUF17-002",
    difficulty: "Beginner",
    duration: "1-2 weeks"
  },
  {
    id: "web-dev-003",
    title: "Weather App",
    domain: "Web Development",
    shortDescription: "Develop a weather application using a public weather API.",
    description: "Build a weather application that fetches current weather data from a public API. Display weather information with icons, temperature, and forecasts. Learn API integration and asynchronous JavaScript programming.",
    tools: ["HTML", "CSS", "JavaScript", "Weather API", "Fetch"],
    registrationLink: "https://forms.gle/XVHkLg2yX9kR43Sp7",
    submissionLink: "https://forms.gle/sR5kEHE3FcH2qUF17-003",
    difficulty: "Beginner",
    duration: "2-3 weeks"
  },
  {
    id: "web-dev-004",
    title: "Calculator App",
    domain: "Web Development",
    shortDescription: "Create a functional calculator with basic arithmetic operations.",
    description: "Build a calculator application with a clean interface that performs basic arithmetic operations. Implement proper error handling and keyboard support. Focus on JavaScript logic and user interface design.",
    tools: ["HTML", "CSS", "JavaScript"],
    registrationLink: "https://forms.gle/XVHkLg2yX9kR43Sp7",
    submissionLink: "https://forms.gle/sR5kEHE3FcH2qUF17-004",
    difficulty: "Beginner",
    duration: "1-2 weeks"
  },
  {
    id: "web-dev-005",
    title: "Recipe Finder Website",
    domain: "Web Development",
    shortDescription: "Build a recipe search website using a recipe API.",
    description: "Create a recipe finder website where users can search for recipes by ingredients or dish names. Integrate with a recipe API to fetch data and display results with images, ingredients, and cooking instructions.",
    tools: ["HTML", "CSS", "JavaScript", "Recipe API", "Bootstrap"],
    registrationLink: "https://forms.gle/XVHkLg2yX9kR43Sp7",
    submissionLink: "https://forms.gle/sR5kEHE3FcH2qUF17-005",
    difficulty: "Beginner",
    duration: "2-3 weeks"
  },
  {
    id: "web-dev-006",
    title: "Landing Page for Startup",
    domain: "Web Development",
    shortDescription: "Design and develop a modern landing page for a fictional startup.",
    description: "Create a professional landing page for a startup with hero section, features, testimonials, and contact form. Focus on modern design principles, responsive layout, and conversion optimization.",
    tools: ["HTML", "CSS", "JavaScript", "Tailwind CSS"],
    registrationLink: "https://forms.gle/XVHkLg2yX9kR43Sp7",
    submissionLink: "https://forms.gle/sR5kEHE3FcH2qUF17-006",
    difficulty: "Beginner",
    duration: "2-3 weeks"
  },
  {
    id: "web-dev-007",
    title: "Quiz Application",
    domain: "Web Development",
    shortDescription: "Build an interactive quiz app with scoring and timer functionality.",
    description: "Develop a quiz application with multiple-choice questions, timer functionality, and score tracking. Include different categories and difficulty levels. Learn about state management and user interaction design.",
    tools: ["HTML", "CSS", "JavaScript", "JSON"],
    registrationLink: "https://forms.gle/XVHkLg2yX9kR43Sp7",
    submissionLink: "https://forms.gle/sR5kEHE3FcH2qUF17-007",
    difficulty: "Beginner",
    duration: "2-3 weeks"
  },
  {
    id: "web-dev-008",
    title: "Image Gallery",
    domain: "Web Development",
    shortDescription: "Create a responsive image gallery with lightbox functionality.",
    description: "Build an image gallery that displays photos in a grid layout with lightbox functionality for viewing full-size images. Implement filtering by categories and responsive design for mobile devices.",
    tools: ["HTML", "CSS", "JavaScript", "CSS Grid"],
    registrationLink: "https://forms.gle/XVHkLg2yX9kR43Sp7",
    submissionLink: "https://forms.gle/sR5kEHE3FcH2qUF17-008",
    difficulty: "Beginner",
    duration: "2-3 weeks"
  },
  {
    id: "web-dev-009",
    title: "Blog Website",
    domain: "Web Development",
    shortDescription: "Create a simple blog website with post creation and commenting.",
    description: "Build a blog website where users can create, edit, and delete blog posts. Include a commenting system and basic user authentication. Learn about content management and user interaction.",
    tools: ["HTML", "CSS", "JavaScript", "Local Storage", "Bootstrap"],
    registrationLink: "https://forms.gle/XVHkLg2yX9kR43Sp7",
    submissionLink: "https://forms.gle/sR5kEHE3FcH2qUF17-009",
    difficulty: "Beginner",
    duration: "3-4 weeks"
  },
  {
    id: "web-dev-010",
    title: "Music Player Interface",
    domain: "Web Development",
    shortDescription: "Design and build a web-based music player interface.",
    description: "Create a music player interface with play, pause, skip, and volume controls. Include playlist functionality and audio visualization. Learn about HTML5 audio API and modern web interfaces.",
    tools: ["HTML", "CSS", "JavaScript", "HTML5 Audio API"],
    registrationLink: "https://forms.gle/XVHkLg2yX9kR43Sp7",
    submissionLink: "https://forms.gle/sR5kEHE3FcH2qUF17-010",
    difficulty: "Beginner",
    duration: "2-3 weeks"
  },
  {
    id: "web-dev-011",
    title: "Contact Form with Validation",
    domain: "Web Development",
    shortDescription: "Build a contact form with client-side validation and styling.",
    description: "Create a professional contact form with comprehensive client-side validation, error handling, and responsive design. Learn about form validation techniques and user experience best practices.",
    tools: ["HTML", "CSS", "JavaScript", "Form Validation"],
    registrationLink: "https://forms.gle/XVHkLg2yX9kR43Sp7",
    submissionLink: "https://forms.gle/sR5kEHE3FcH2qUF17-011",
    difficulty: "Beginner",
    duration: "1-2 weeks"
  },
  {
    id: "web-dev-012",
    title: "Memory Card Game",
    domain: "Web Development",
    shortDescription: "Develop an interactive memory card matching game.",
    description: "Build a memory card game where players flip cards to find matching pairs. Include score tracking, timer, and difficulty levels. Learn about game logic, animations, and state management.",
    tools: ["HTML", "CSS", "JavaScript", "CSS Animations"],
    registrationLink: "https://forms.gle/XVHkLg2yX9kR43Sp7",
    submissionLink: "https://forms.gle/sR5kEHE3FcH2qUF17-012",
    difficulty: "Beginner",
    duration: "2-3 weeks"
  },
  {
    id: "web-dev-013",
    title: "Digital Clock and Timer",
    domain: "Web Development",
    shortDescription: "Create a digital clock with stopwatch and countdown timer features.",
    description: "Build a digital clock application with multiple time zones, stopwatch functionality, and countdown timer. Include alarm features and customizable themes. Learn about JavaScript Date objects and intervals.",
    tools: ["HTML", "CSS", "JavaScript", "Date API"],
    registrationLink: "https://forms.gle/XVHkLg2yX9kR43Sp7",
    submissionLink: "https://forms.gle/sR5kEHE3FcH2qUF17-013",
    difficulty: "Beginner",
    duration: "2-3 weeks"
  },
  {
    id: "web-dev-014",
    title: "Color Palette Generator",
    domain: "Web Development",
    shortDescription: "Build a tool to generate and save color palettes for design projects.",
    description: "Create a color palette generator that creates random color combinations and allows users to save their favorite palettes. Include color format conversion (HEX, RGB, HSL) and export functionality.",
    tools: ["HTML", "CSS", "JavaScript", "Color APIs"],
    registrationLink: "https://forms.gle/XVHkLg2yX9kR43Sp7",
    submissionLink: "https://forms.gle/sR5kEHE3FcH2qUF17-014",
    difficulty: "Beginner",
    duration: "2-3 weeks"
  },
  {
    id: "web-dev-015",
    title: "Password Generator",
    domain: "Web Development",
    shortDescription: "Create a secure password generator with customizable options.",
    description: "Build a password generator that creates secure passwords with customizable length, character types, and complexity. Include password strength indicator and copy-to-clipboard functionality.",
    tools: ["HTML", "CSS", "JavaScript", "Crypto API"],
    registrationLink: "https://forms.gle/XVHkLg2yX9kR43Sp7",
    submissionLink: "https://forms.gle/sR5kEHE3FcH2qUF17-015",
    difficulty: "Beginner",
    duration: "1-2 weeks"
  },
  {
    id: "web-dev-016",
    title: "Unit Converter",
    domain: "Web Development",
    shortDescription: "Build a multi-unit converter for various measurements.",
    description: "Create a comprehensive unit converter that handles length, weight, temperature, and currency conversions. Include a clean interface and real-time conversion as users type.",
    tools: ["HTML", "CSS", "JavaScript", "APIs"],
    registrationLink: "https://forms.gle/XVHkLg2yX9kR43Sp7",
    submissionLink: "https://forms.gle/sR5kEHE3FcH2qUF17-016",
    difficulty: "Beginner",
    duration: "2-3 weeks"
  },
  {
    id: "web-dev-017",
    title: "QR Code Generator",
    domain: "Web Development",
    shortDescription: "Create a QR code generator for text, URLs, and contact information.",
    description: "Build a QR code generator that can create QR codes for different types of data including text, URLs, WiFi credentials, and contact information. Include download functionality and customization options.",
    tools: ["HTML", "CSS", "JavaScript", "QR Code Library"],
    registrationLink: "https://forms.gle/XVHkLg2yX9kR43Sp7",
    submissionLink: "https://forms.gle/sR5kEHE3FcH2qUF17-017",
    difficulty: "Beginner",
    duration: "2-3 weeks"
  },
  {
    id: "web-dev-018",
    title: "Expense Tracker Web App",
    domain: "Web Development",
    shortDescription: "Build a web application to track personal expenses and income.",
    description: "Create an expense tracking application where users can add, categorize, and visualize their expenses. Include charts for spending analysis and budget tracking features.",
    tools: ["HTML", "CSS", "JavaScript", "Chart.js", "Local Storage"],
    registrationLink: "https://forms.gle/XVHkLg2yX9kR43Sp7",
    submissionLink: "https://forms.gle/sR5kEHE3FcH2qUF17-018",
    difficulty: "Beginner",
    duration: "3-4 weeks"
  },
  {
    id: "web-dev-019",
    title: "Real-time Chat Application",
    domain: "Web Development",
    shortDescription: "Create a real-time chat application with rooms and notifications.",
    description: "Build a modern real-time chat application with multiple chat rooms, user authentication, and real-time messaging. Learn about WebSocket technology and real-time communication protocols.",
    tools: ["React", "Socket.io", "Node.js", "MongoDB", "WebRTC"],
    registrationLink: "https://forms.gle/XVHkLg2yX9kR43Sp7",
    submissionLink: "https://forms.gle/sR5kEHE3FcH2qUF17-019",
    difficulty: "Intermediate",
    duration: "4-5 weeks"
  },
  {
    id: "web-dev-020",
    title: "E-commerce Website",
    domain: "Web Development",
    shortDescription: "Build a complete e-commerce platform with payment integration.",
    description: "Develop a full-stack e-commerce website with modern design, shopping cart functionality, payment gateway integration, and user authentication system. This project will enhance your skills in React, Node.js, and database management.",
    tools: ["React", "Node.js", "MongoDB", "Stripe API", "Tailwind CSS"],
    registrationLink: "https://forms.gle/XVHkLg2yX9kR43Sp7",
    submissionLink: "https://forms.gle/sR5kEHE3FcH2qUF17-020",
    difficulty: "Intermediate",
    duration: "4-6 weeks"
  },

  // UI/UX Projects
  {
    id: "uiux-001",
    title: "Mobile Banking App Design",
    domain: "UI/UX",
    shortDescription: "Design a complete mobile banking application with user research and prototyping.",
    description: "Create a comprehensive mobile banking app design from user research to final prototype. Include user personas, wireframing, visual design, and interactive prototypes. Focus on user experience, accessibility, and modern design principles.",
    tools: ["Figma", "Adobe XD", "Sketch", "InVision", "Miro"],
    registrationLink: "https://forms.gle/XVHkLg2yX9kR43Sp7",
    submissionLink: "https://forms.gle/sR5kEHE3FcH2qUF17",
    difficulty: "Beginner",
    duration: "3-4 weeks"
  },
  {
    id: "uiux-002",
    title: "Restaurant Website Design",
    domain: "UI/UX",
    shortDescription: "Design a complete website for a restaurant with menu and reservation system.",
    description: "Create a comprehensive restaurant website design including homepage, menu pages, about section, and reservation system. Focus on visual hierarchy, food photography presentation, and user-friendly navigation.",
    tools: ["Figma", "Adobe XD", "Photoshop"],
    registrationLink: "https://forms.gle/XVHkLg2yX9kR43Sp7",
    submissionLink: "https://forms.gle/sR5kEHE3FcH2qUF17",
    difficulty: "Beginner",
    duration: "2-3 weeks"
  },
  {
    id: "uiux-003",
    title: "E-learning Platform UI",
    domain: "UI/UX",
    shortDescription: "Design user interface for an online learning platform.",
    description: "Create UI designs for an e-learning platform including course catalog, video player interface, progress tracking, and student dashboard. Focus on educational UX patterns and accessibility.",
    tools: ["Figma", "Sketch", "InVision"],
    registrationLink: "https://forms.gle/XVHkLg2yX9kR43Sp7",
    submissionLink: "https://forms.gle/sR5kEHE3FcH2qUF17",
    difficulty: "Beginner",
    duration: "3-4 weeks"
  },
  {
    id: "uiux-004",
    title: "Fitness App Wireframes",
    domain: "UI/UX",
    shortDescription: "Create wireframes and user flow for a fitness tracking mobile app.",
    description: "Design wireframes and user flows for a fitness tracking app including workout logging, progress charts, social features, and goal setting. Learn about mobile UX patterns and user journey mapping.",
    tools: ["Figma", "Miro", "Balsamiq"],
    registrationLink: "https://forms.gle/XVHkLg2yX9kR43Sp7",
    submissionLink: "https://forms.gle/sR5kEHE3FcH2qUF17",
    difficulty: "Beginner",
    duration: "2-3 weeks"
  },
  {
    id: "uiux-005",
    title: "Travel Booking Website",
    domain: "UI/UX",
    shortDescription: "Design a travel booking website with search and booking functionality.",
    description: "Create a complete travel booking website design with flight/hotel search, booking flow, user accounts, and trip management. Focus on complex user flows and booking process optimization.",
    tools: ["Figma", "Adobe XD", "Principle"],
    registrationLink: "https://forms.gle/XVHkLg2yX9kR43Sp7",
    submissionLink: "https://forms.gle/sR5kEHE3FcH2qUF17",
    difficulty: "Beginner",
    duration: "3-4 weeks"
  },
  {
    id: "uiux-006",
    title: "Social Media App Interface",
    domain: "UI/UX",
    shortDescription: "Design a modern social media application interface.",
    description: "Create a complete social media app design with feed, stories, messaging, and profile sections. Focus on engagement patterns, content discovery, and social interaction design.",
    tools: ["Figma", "Sketch", "Principle"],
    registrationLink: "https://forms.gle/XVHkLg2yX9kR43Sp7",
    submissionLink: "https://forms.gle/sR5kEHE3FcH2qUF17",
    difficulty: "Beginner",
    duration: "3-4 weeks"
  },
  {
    id: "uiux-007",
    title: "Dashboard Design for Analytics",
    domain: "UI/UX",
    shortDescription: "Create a data visualization dashboard for business analytics.",
    description: "Design a comprehensive analytics dashboard with charts, graphs, and data tables. Focus on information hierarchy, data visualization best practices, and user-friendly navigation.",
    tools: ["Figma", "Adobe XD", "Data Visualization"],
    registrationLink: "https://forms.gle/XVHkLg2yX9kR43Sp7",
    submissionLink: "https://forms.gle/sR5kEHE3FcH2qUF17",
    difficulty: "Beginner",
    duration: "3-4 weeks"
  },
  {
    id: "uiux-008",
    title: "Music Streaming App Design",
    domain: "UI/UX",
    shortDescription: "Design a music streaming application with playlists and discovery features.",
    description: "Create a music streaming app design with player interface, playlist management, music discovery, and social features. Focus on audio-first design and user engagement.",
    tools: ["Figma", "Sketch", "Protopie"],
    registrationLink: "https://forms.gle/XVHkLg2yX9kR43Sp7",
    submissionLink: "https://forms.gle/sR5kEHE3FcH2qUF17",
    difficulty: "Beginner",
    duration: "3-4 weeks"
  },
  {
    id: "uiux-009",
    title: "Healthcare App Interface",
    domain: "UI/UX",
    shortDescription: "Design a healthcare application for patient management.",
    description: "Create a healthcare app design for appointment booking, medical records, and telemedicine. Focus on accessibility, trust-building design elements, and HIPAA compliance considerations.",
    tools: ["Figma", "Adobe XD", "Accessibility Tools"],
    registrationLink: "https://forms.gle/XVHkLg2yX9kR43Sp7",
    submissionLink: "https://forms.gle/sR5kEHE3FcH2qUF17",
    difficulty: "Beginner",
    duration: "3-4 weeks"
  },
  {
    id: "uiux-010",
    title: "Food Delivery App Redesign",
    domain: "UI/UX",
    shortDescription: "Redesign an existing food delivery app with improved user experience.",
    description: "Analyze and redesign a food delivery app focusing on order flow optimization, restaurant discovery, and delivery tracking. Include user research and usability testing recommendations.",
    tools: ["Figma", "User Research", "Usability Testing"],
    registrationLink: "https://forms.gle/XVHkLg2yX9kR43Sp7",
    submissionLink: "https://forms.gle/sR5kEHE3FcH2qUF17",
    difficulty: "Intermediate",
    duration: "4-5 weeks"
  },

  // Machine Learning Projects
  {
    id: "ml-001",
    title: "House Price Prediction",
    domain: "Machine Learning",
    shortDescription: "Build a simple linear regression model to predict house prices.",
    description: "Create a machine learning model to predict house prices based on features like size, location, and amenities. Use Python and scikit-learn to implement linear regression and evaluate model performance.",
    tools: ["Python", "pandas", "scikit-learn", "matplotlib", "Jupyter"],
    registrationLink: "https://forms.gle/XVHkLg2yX9kR43Sp7",
    submissionLink: "https://forms.gle/sR5kEHE3FcH2qUF17",
    difficulty: "Beginner",
    duration: "3-4 weeks"
  },
  {
    id: "ml-002",
    title: "Iris Flower Classification",
    domain: "Machine Learning",
    shortDescription: "Classify iris flowers using basic machine learning algorithms.",
    description: "Build a classification model to identify iris flower species based on petal and sepal measurements. Learn about data preprocessing, model training, and evaluation using the classic iris dataset.",
    tools: ["Python", "scikit-learn", "pandas", "seaborn", "Jupyter"],
    registrationLink: "https://forms.gle/XVHkLg2yX9kR43Sp7",
    submissionLink: "https://forms.gle/sR5kEHE3FcH2qUF17",
    difficulty: "Beginner",
    duration: "2-3 weeks"
  },
  {
    id: "ml-003",
    title: "Movie Recommendation System",
    domain: "Machine Learning",
    shortDescription: "Create a simple movie recommendation system using collaborative filtering.",
    description: "Build a basic movie recommendation system that suggests movies based on user preferences and ratings. Learn about collaborative filtering techniques and recommendation algorithms.",
    tools: ["Python", "pandas", "NumPy", "scikit-learn", "Jupyter"],
    registrationLink: "https://forms.gle/XVHkLg2yX9kR43Sp7",
    submissionLink: "https://forms.gle/sR5kEHE3FcH2qUF17",
    difficulty: "Beginner",
    duration: "3-4 weeks"
  },
  {
    id: "ml-004",
    title: "Sales Forecasting Model",
    domain: "Machine Learning",
    shortDescription: "Build a time series model to forecast sales data.",
    description: "Create a sales forecasting model using time series analysis techniques. Learn about seasonal patterns, trend analysis, and forecasting methods using historical sales data.",
    tools: ["Python", "pandas", "matplotlib", "statsmodels", "Jupyter"],
    registrationLink: "https://forms.gle/XVHkLg2yX9kR43Sp7",
    submissionLink: "https://forms.gle/sR5kEHE3FcH2qUF17",
    difficulty: "Beginner",
    duration: "3-4 weeks"
  },
  {
    id: "ml-005",
    title: "Email Spam Detection",
    domain: "Machine Learning",
    shortDescription: "Build a classifier to detect spam emails using text processing.",
    description: "Create an email spam detection system using natural language processing and machine learning. Learn about text preprocessing, feature extraction, and classification algorithms.",
    tools: ["Python", "scikit-learn", "NLTK", "pandas", "Jupyter"],
    registrationLink: "https://forms.gle/XVHkLg2yX9kR43Sp7",
    submissionLink: "https://forms.gle/sR5kEHE3FcH2qUF17",
    difficulty: "Beginner",
    duration: "3-4 weeks"
  },
  {
    id: "ml-006",
    title: "Stock Price Prediction",
    domain: "Machine Learning",
    shortDescription: "Predict stock prices using historical data and technical indicators.",
    description: "Build a stock price prediction model using historical price data and technical indicators. Learn about financial data analysis, feature engineering, and time series forecasting.",
    tools: ["Python", "pandas", "scikit-learn", "yfinance", "Jupyter"],
    registrationLink: "https://forms.gle/XVHkLg2yX9kR43Sp7",
    submissionLink: "https://forms.gle/sR5kEHE3FcH2qUF17",
    difficulty: "Beginner",
    duration: "3-4 weeks"
  },
  {
    id: "ml-007",
    title: "Customer Segmentation Analysis",
    domain: "Machine Learning",
    shortDescription: "Segment customers using clustering algorithms for marketing insights.",
    description: "Perform customer segmentation analysis using clustering algorithms like K-means. Learn about unsupervised learning, data visualization, and business insights from customer data.",
    tools: ["Python", "scikit-learn", "pandas", "seaborn", "Jupyter"],
    registrationLink: "https://forms.gle/XVHkLg2yX9kR43Sp7",
    submissionLink: "https://forms.gle/sR5kEHE3FcH2qUF17",
    difficulty: "Beginner",
    duration: "3-4 weeks"
  },
  {
    id: "ml-008",
    title: "Handwritten Digit Recognition",
    domain: "Machine Learning",
    shortDescription: "Build a neural network to recognize handwritten digits.",
    description: "Create a handwritten digit recognition system using neural networks and the MNIST dataset. Learn about image preprocessing, neural network architecture, and model evaluation.",
    tools: ["Python", "TensorFlow", "Keras", "NumPy", "Jupyter"],
    registrationLink: "https://forms.gle/XVHkLg2yX9kR43Sp7",
    submissionLink: "https://forms.gle/sR5kEHE3FcH2qUF17",
    difficulty: "Intermediate",
    duration: "4-5 weeks"
  },
  {
    id: "ml-009",
    title: "Sentiment Analysis Tool",
    domain: "Machine Learning",
    shortDescription: "Analyze sentiment in text data using natural language processing.",
    description: "Build a sentiment analysis tool that can classify text as positive, negative, or neutral. Learn about text preprocessing, feature extraction, and sentiment classification techniques.",
    tools: ["Python", "NLTK", "scikit-learn", "pandas", "Jupyter"],
    registrationLink: "https://forms.gle/XVHkLg2yX9kR43Sp7",
    submissionLink: "https://forms.gle/sR5kEHE3FcH2qUF17",
    difficulty: "Beginner",
    duration: "3-4 weeks"
  },
  {
    id: "ml-010",
    title: "Customer Churn Prediction",
    domain: "Machine Learning",
    shortDescription: "Predict customer churn using machine learning algorithms.",
    description: "Build and deploy a machine learning model that predicts customer churn for a telecommunications company. Use Python libraries like scikit-learn and pandas for data preprocessing, model training, and evaluation.",
    tools: ["Python", "scikit-learn", "pandas", "matplotlib", "Jupyter"],
    registrationLink: "https://forms.gle/XVHkLg2yX9kR43Sp7",
    submissionLink: "https://forms.gle/sR5kEHE3FcH2qUF17",
    difficulty: "Advanced",
    duration: "5-7 weeks"
  },

  // App Development Projects
  {
    id: "app-dev-001",
    title: "Expense Tracker App",
    domain: "App Development",
    shortDescription: "Build a mobile app to track daily expenses and income.",
    description: "Create a mobile application for tracking personal expenses and income. Include categories, charts for visualization, and budget setting features. Learn mobile app development fundamentals and data persistence.",
    tools: ["React Native", "SQLite", "Chart.js", "AsyncStorage"],
    registrationLink: "https://forms.gle/XVHkLg2yX9kR43Sp7",
    submissionLink: "https://forms.gle/sR5kEHE3FcH2qUF17-001",
    difficulty: "Beginner",
    duration: "3-4 weeks"
  },
  {
    id: "app-dev-002",
    title: "Note Taking App",
    domain: "App Development",
    shortDescription: "Develop a simple note-taking app with search and categorization.",
    description: "Build a note-taking mobile application where users can create, edit, delete, and organize notes. Include search functionality and category organization. Focus on user interface design and data management.",
    tools: ["React Native", "AsyncStorage", "React Navigation"],
    registrationLink: "https://forms.gle/XVHkLg2yX9kR43Sp7",
    submissionLink: "https://forms.gle/sR5kEHE3FcH2qUF17-002",
    difficulty: "Beginner",
    duration: "2-3 weeks"
  },
  {
    id: "app-dev-003",
    title: "Weather Mobile App",
    domain: "App Development",
    shortDescription: "Create a weather app with location-based forecasts.",
    description: "Develop a mobile weather application that shows current weather and forecasts based on user location. Integrate with weather APIs and implement location services. Learn about API integration in mobile apps.",
    tools: ["React Native", "Weather API", "Geolocation", "React Navigation"],
    registrationLink: "https://forms.gle/XVHkLg2yX9kR43Sp7",
    submissionLink: "https://forms.gle/sR5kEHE3FcH2qUF17-003",
    difficulty: "Beginner",
    duration: "3-4 weeks"
  },
  {
    id: "app-dev-004",
    title: "Habit Tracker App",
    domain: "App Development",
    shortDescription: "Build an app to track daily habits and goals.",
    description: "Create a habit tracking application where users can set daily goals, track progress, and view statistics. Include streak counters, reminders, and progress visualization.",
    tools: ["React Native", "AsyncStorage", "Notifications", "Charts"],
    registrationLink: "https://forms.gle/XVHkLg2yX9kR43Sp7",
    submissionLink: "https://forms.gle/sR5kEHE3FcH2qUF17-004",
    difficulty: "Beginner",
    duration: "3-4 weeks"
  },
  {
    id: "app-dev-005",
    title: "Recipe App",
    domain: "App Development",
    shortDescription: "Develop a recipe app with search and favorites functionality.",
    description: "Build a recipe mobile application with search functionality, recipe details, cooking instructions, and favorites list. Include shopping list generation and meal planning features.",
    tools: ["React Native", "Recipe API", "AsyncStorage", "React Navigation"],
    registrationLink: "https://forms.gle/XVHkLg2yX9kR43Sp7",
    submissionLink: "https://forms.gle/sR5kEHE3FcH2qUF17-005",
    difficulty: "Beginner",
    duration: "3-4 weeks"
  },
  {
    id: "app-dev-006",
    title: "Fitness Tracker App",
    domain: "App Development",
    shortDescription: "Create a fitness tracking app with workout logging.",
    description: "Develop a fitness tracking application where users can log workouts, track progress, and view exercise history. Include exercise database, progress charts, and goal setting.",
    tools: ["React Native", "SQLite", "Charts", "AsyncStorage"],
    registrationLink: "https://forms.gle/XVHkLg2yX9kR43Sp7",
    submissionLink: "https://forms.gle/sR5kEHE3FcH2qUF17-006",
    difficulty: "Beginner",
    duration: "3-4 weeks"
  },
  {
    id: "app-dev-007",
    title: "Language Learning App",
    domain: "App Development",
    shortDescription: "Build a language learning app with lessons and quizzes.",
    description: "Create a language learning application with interactive lessons, vocabulary quizzes, and progress tracking. Include spaced repetition for vocabulary learning and achievement system.",
    tools: ["React Native", "AsyncStorage", "Audio API", "React Navigation"],
    registrationLink: "https://forms.gle/XVHkLg2yX9kR43Sp7",
    submissionLink: "https://forms.gle/sR5kEHE3FcH2qUF17-007",
    difficulty: "Beginner",
    duration: "4-5 weeks"
  },
  {
    id: "app-dev-008",
    title: "Budget Planner App",
    domain: "App Development",
    shortDescription: "Develop a comprehensive budget planning and tracking app.",
    description: "Build a budget planning application with income/expense tracking, category management, and financial goal setting. Include visual reports and spending analysis features.",
    tools: ["React Native", "SQLite", "Charts", "AsyncStorage"],
    registrationLink: "https://forms.gle/XVHkLg2yX9kR43Sp7",
    submissionLink: "https://forms.gle/sR5kEHE3FcH2qUF17-008",
    difficulty: "Beginner",
    duration: "4-5 weeks"
  },
  {
    id: "app-dev-009",
    title: "Task Manager App",
    domain: "App Development",
    shortDescription: "Create a task management app with projects and deadlines.",
    description: "Develop a task management application with project organization, deadline tracking, and team collaboration features. Include priority levels, notifications, and progress tracking.",
    tools: ["React Native", "AsyncStorage", "Notifications", "React Navigation"],
    registrationLink: "https://forms.gle/XVHkLg2yX9kR43Sp7",
    submissionLink: "https://forms.gle/sR5kEHE3FcH2qUF17-009",
    difficulty: "Beginner",
    duration: "3-4 weeks"
  },
  {
    id: "app-dev-010",
    title: "Social Media Mobile App",
    domain: "App Development",
    shortDescription: "Build a full-featured social media mobile app with real-time messaging.",
    description: "Develop a social media mobile application with features like user profiles, photo sharing, real-time messaging, and social interactions. Use React Native for cross-platform development and integrate with backend services.",
    tools: ["React Native", "Firebase", "Node.js", "Socket.io", "Redux"],
    registrationLink: "https://forms.gle/XVHkLg2yX9kR43Sp7",
    submissionLink: "https://forms.gle/sR5kEHE3FcH2qUF17-010",
    difficulty: "Intermediate",
    duration: "6-8 weeks"
  }
];

export const domains = [
  { name: "Web Development", icon: "Code", count: projects.filter(p => p.domain === "Web Development").length },
  { name: "Machine Learning", icon: "Brain", count: projects.filter(p => p.domain === "Machine Learning").length },
  { name: "UI/UX", icon: "Palette", count: projects.filter(p => p.domain === "UI/UX").length },
  { name: "App Development", icon: "Smartphone", count: projects.filter(p => p.domain === "App Development").length },
];