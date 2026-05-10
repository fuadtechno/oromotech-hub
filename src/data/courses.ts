export interface Course {
  slug: string;
  title: string;
  category: string;
  description: string;
  duration: string; // e.g. "5 hours"
  level: "Beginner" | "Intermediate" | "Advanced";
  instructor: string;
  thumbnail: string;
  tags: string[];
  lessons: Lesson[];
}

export interface Lesson {
  title: string;
  content: string;
  duration?: string; // e.g. "10:30"
  type?: "video" | "text" | "quiz";
  videoUrl?: string;
}
export const courses: Course[] = [
  {
    slug: "html",
    title: "HTML Mastery",
    category: "WEB BASICS",
    description: "Master HTML from fundamentals to advanced concepts. Learn to create structured, semantic web pages that form the foundation of modern web development.",
    duration: "8 hours",
    level: "Beginner",
    instructor: "OromoTech Team",
    thumbnail: "/thumbnails/html-course.jpg",
    tags: ["HTML", "Web Development", "Frontend", "Markup"],
    lessons: [
    {
  title: "Introduction to HTML",
  content: "HTML (HyperText Markup Language) is the foundation of every website. Learn what HTML is, its history, and why it's essential for web development. Understand how browsers interpret HTML and the role of HTML5 in modern web development.",
  duration: "15:30",
  type: "video",
  videoUrl: "https://www.youtube.com/embed/UB1O30fR-EE"
},
    {
  title: "HTML Document Structure",
  content: "Master the basic structure of an HTML document. Learn about DOCTYPE, html, head, and body elements. Understand meta tags, character encoding, and viewport settings for responsive design. Explore how browsers interpret HTML structure and why semantic organization matters in modern web development.",
  duration: "12:45",
  type: "video",
  videoUrl: "https://www.youtube-nocookie.com/embed/OZeoiotzPFg"
},
      {
  title: "Headings, Paragraphs & Text Formatting",
  content: "Learn to structure content with heading tags (h1-h6), paragraphs, and text formatting elements. Understand semantic markup and how search engines use headings for SEO. Practice using <h1> to <h6>, <p>, <strong>, <em>, and other text-level elements to create readable web pages.",
  duration: "18:20",
  type: "video",
  videoUrl: "https://www.youtube-nocookie.com/embed/UB1O30fR-EE"
},
      {
        title: "Links & Navigation",
        content: "Create hyperlinks to connect pages and navigate websites. Learn about absolute vs relative URLs, target attributes, and best practices for navigation menus.",
        duration: "22:15",
        type: "video",
        videoUrl: "https://www.youtube.com/embed/sSqFsNl6T5M"
      },
      {
        title: "Images & Multimedia",
        content: "Embed images, audio, and video in web pages. Learn about image formats, accessibility with alt text, responsive images, and multimedia best practices.",
        duration: "20:30",
        type: "video",
        videoUrl: "https://www.youtube.com/embed/d2Siju9f65w"
      },
      {
        title: "Lists & Tables",
        content: "Create ordered and unordered lists for content organization. Learn table structure with headers, rows, and cells. Understand when to use tables vs CSS for layout.",
        duration: "16:45",
        type: "video",
        videoUrl: "https://www.youtube.com/embed/9UEHCc_6HgM"
      },
      {
        title: "HTML Forms & Input Elements",
        content: "Build interactive forms with various input types. Learn about form validation, accessibility, and security considerations for user data collection.",
        duration: "25:00",
        type: "video",
        videoUrl: "https://www.youtube.com/embed/yU0GcR3Q6QE"
      },
      {
        title: "Semantic HTML & Accessibility",
        content: "Use semantic elements like header, nav, main, section, article, and footer. Learn about ARIA attributes, screen readers, and web accessibility standards (WCAG).",
        duration: "19:30",
        type: "video",
        videoUrl: "https://www.youtube.com/embed/3aD5Hh8lJ7k"
      },
      {
        title: "HTML5 APIs & Advanced Features",
        content: "Explore HTML5 APIs including Canvas, SVG, Geolocation, Local Storage, and Web Workers. Learn about offline web apps and progressive web app features.",
        duration: "23:15",
        type: "video",
        videoUrl: "https://www.youtube.com/embed/0ieCmTt2Cl4"
      },
      {
        title: "Meta Tags & SEO Optimization",
        content: "Optimize HTML for search engines with proper meta tags, Open Graph, and structured data. Learn about page titles, descriptions, and social media sharing.",
        duration: "14:20",
        type: "video",
        videoUrl: "https://www.youtube.com/embed/mJf6XYBE4nU"
      },
      {
        title: "HTML Validation & Best Practices",
        content: "Validate HTML code using W3C validators. Learn coding standards, browser compatibility, and performance optimization techniques for HTML.",
        duration: "11:45",
        type: "video",
        videoUrl: "https://www.youtube.com/embed/9c9p6LQ6ZvI"
      },
      {
        title: "Building a Complete HTML Project",
        content: "Apply all HTML concepts to build a complete multi-page website. Learn about file organization, navigation structure, and HTML project management.",
        duration: "28:30",
        type: "video",
        videoUrl: "https://www.youtube.com/embed/pQN-pnXPaVg"
      }
    ]
  },
  {
    slug: "css",
    title: "CSS Mastery",
    category: "WEB BASICS",
    description: "Master CSS styling to create beautiful, responsive web designs. Learn modern CSS techniques and best practices.",
    duration: "12 hours",
    level: "Beginner",
    instructor: "OromoTech Team",
    thumbnail: "/thumbnails/css-course.jpg",
    tags: ["CSS", "Styling", "Web Design", "Responsive"],
    lessons: [
      {
        title: "Introduction to CSS",
        content: "CSS (Cascading Style Sheets) controls the visual presentation of HTML elements. Learn CSS syntax, how to link stylesheets, and the cascade, specificity, and inheritance principles.",
        duration: "20:00",
        type: "video",
        videoUrl: "https://www.youtube.com/embed/1Rs2ND1ryYc"
      },
      {
        title: "CSS Selectors & Specificity",
        content: "Master CSS selectors including element, class, ID, attribute, and pseudo-selectors. Understand specificity rules and how browsers determine which styles to apply.",
        duration: "18:30",
        type: "video",
        videoUrl: "https://www.youtube.com/embed/l1mER1bV0N0"
      },
      {
        title: "CSS Box Model & Layout",
        content: "Learn the CSS box model (content, padding, border, margin). Understand block vs inline elements, and how to control spacing and dimensions.",
        duration: "22:15",
        type: "video",
        videoUrl: "https://www.youtube.com/embed/rIO5326FgPE"
      },
      {
        title: "Colors, Backgrounds & Typography",
        content: "Style text with fonts, colors, and spacing. Learn background properties, gradients, and advanced typography techniques for professional web design.",
        duration: "19:45",
        type: "video",
        videoUrl: "https://www.youtube.com/embed/h9Xc8ykVP7Q"
      },
      {
        title: "CSS Flexbox Layout",
        content: "Master Flexbox for modern one-dimensional layouts. Learn container and item properties, alignment, and responsive flex designs.",
        duration: "25:30",
        type: "video",
        videoUrl: "https://www.youtube.com/embed/JJSoEo8JSnc"
      },
      {
        title: "CSS Grid Layout",
        content: "Create complex two-dimensional layouts with CSS Grid. Learn grid containers, items, areas, and responsive grid systems.",
        duration: "28:20",
        type: "video",
        videoUrl: "https://www.youtube.com/embed/9zBsdzdE4sM"
      },
      {
        title: "Responsive Web Design",
        content: "Build websites that work on all devices. Learn media queries, fluid layouts, and mobile-first responsive design principles.",
        duration: "24:10",
        type: "video",
        videoUrl: "https://www.youtube.com/embed/5bMdjkfvONE"
      },
      {
        title: "CSS Transitions & Animations",
        content: "Add smooth transitions and animations to web elements. Learn keyframes, timing functions, and performance optimization for animations.",
        duration: "21:45",
        type: "video",
        videoUrl: "https://www.youtube.com/embed/zHUpx90NerM"
      },
      {
        title: "CSS Preprocessors (Sass/SCSS)",
        content: "Enhance CSS with preprocessors. Learn variables, nesting, mixins, and functions to write more maintainable and powerful stylesheets.",
        duration: "23:30",
        type: "video",
        videoUrl: "https://www.youtube.com/embed/_a5j7KoflTs"
      },
      {
        title: "CSS Frameworks & Methodologies",
        content: "Explore CSS frameworks like Bootstrap and Tailwind. Learn CSS methodologies like BEM, SMACSS, and component-based styling approaches.",
        duration: "26:15",
        type: "video",
        videoUrl: "https://www.youtube.com/embed/qlA7dputiNc"
      },
      {
        title: "Advanced CSS Techniques",
        content: "Master advanced CSS features including custom properties, calc(), clamp(), and modern CSS techniques for professional development.",
        duration: "20:50",
        type: "video",
        videoUrl: "https://www.youtube.com/embed/8aGhZQkoFbQ"
      },
      {
        title: "CSS Performance & Optimization",
        content: "Optimize CSS for fast loading and rendering. Learn about critical CSS, CSS minification, and performance best practices.",
        duration: "17:25",
        type: "video",
        videoUrl: "https://www.youtube.com/embed/uMAMRrzQlbw"
      },
      {
        title: "Building a Complete CSS Project",
        content: "Apply all CSS concepts to build a fully styled, responsive website. Learn about CSS architecture and maintaining large-scale stylesheets.",
        duration: "32:40",
        type: "video",
        videoUrl: "https://www.youtube.com/embed/gXLjWRteuWI"
      }
    ]
  },
  {
    slug: "rwd",
    title: "Responsive Web Design",
    category: "WEB BASICS",
    description: "Create websites that adapt to any screen size. Master the art of responsive design with modern techniques.",
    duration: "6 hours",
    level: "Intermediate",
    instructor: "OromoTech Team",
    thumbnail: "/thumbnails/rwd-course.jpg",
    tags: ["Responsive", "Mobile", "CSS", "Design"],
    lessons: [
      {
        title: "Introduction to Responsive Design",
        content: "Responsive Web Design (RWD) creates websites that adapt to any screen size. Learn why responsive design is essential in modern web development.",
        duration: "12:00",
        type: "video",
        videoUrl: "https://www.youtube.com/embed/srvUrASNj0s"
      },
      {
        title: "Viewport Meta Tag & Mobile Basics",
        content: "Configure the viewport for mobile devices. Learn about device pixel ratios, touch interfaces, and mobile-specific considerations.",
        duration: "15:30",
        type: "video",
        videoUrl: "https://www.youtube.com/embed/yoJmbg5_d8o"
      },
      {
        title: "CSS Media Queries",
        content: "Master media queries for different screen sizes. Learn breakpoint strategies, logical operators, and media query best practices.",
        duration: "18:30",
        type: "video",
        videoUrl: "https://www.youtube.com/embed/3lEVJL_V4sQ"
      },
      {
        title: "Flexible Layouts with Flexbox",
        content: "Create responsive layouts using CSS Flexbox. Learn flexible containers, items, and responsive flex designs.",
        duration: "22:45",
        type: "video",
        videoUrl: "https://www.youtube.com/embed/x4ELcJFYvLU"
      },
      {
        title: "CSS Grid for Responsive Layouts",
        content: "Build complex responsive layouts with CSS Grid. Learn grid areas, responsive grids, and fallback strategies.",
        duration: "25:20",
        type: "video",
        videoUrl: "https://www.youtube.com/embed/w61YWM6PxG4"
      },
      {
        title: "Mobile-First Design Approach",
        content: "Design for mobile devices first, then progressively enhance for larger screens. Learn mobile-first CSS and content strategy.",
        duration: "19:15",
        type: "video",
        videoUrl: "https://www.youtube.com/embed/9cGiQ28tfjI"
      },
      {
        title: "Responsive Images & Media",
        content: "Optimize images and media for different devices. Learn srcset, sizes attribute, and responsive image techniques.",
        duration: "21:40",
        type: "video",
        videoUrl: "https://www.youtube.com/embed/2QYpkrX2N48"
      },
      {
        title: "Responsive Typography",
        content: "Create scalable typography that works across devices. Learn fluid typography, viewport units, and responsive font sizing.",
        duration: "16:25",
        type: "video",
        videoUrl: "https://www.youtube.com/embed/vwju0wJaJmA"
      },
      {
        title: "Testing & Debugging Responsive Designs",
        content: "Test responsive designs across devices and browsers. Learn debugging tools, emulators, and cross-device testing strategies.",
        duration: "17:50",
        type: "video",
        videoUrl: "https://www.youtube.com/embed/7Op9AH9qpBI"
      },
      {
        title: "Performance Optimization",
        content: "Optimize responsive websites for performance. Learn about critical CSS, lazy loading, and mobile performance best practices.",
        duration: "20:35",
        type: "video",
        videoUrl: "https://www.youtube.com/embed/0Ya2Z81Uvfw"
      },
      {
        title: "Advanced Responsive Techniques",
        content: "Master advanced responsive techniques: container queries, logical properties, and modern CSS for responsive design.",
        duration: "23:10",
        type: "video",
        videoUrl: "https://www.youtube.com/embed/2KL-z9A56SQ"
      },
      {
        title: "Building a Complete Responsive Website",
        content: "Apply all responsive design principles to build a fully responsive, mobile-first website from scratch.",
        duration: "28:45",
        type: "video",
        videoUrl: "https://www.youtube.com/embed/g_z9oL-ViVo"
      }
    ]
  },
  {
    slug: "bootstrap",
    title: "Bootstrap Framework",
    category: "WEB BASICS",
    description: "Build responsive websites quickly with Bootstrap. Learn the most popular CSS framework.",
    duration: "10 hours",
    level: "Beginner",
    instructor: "OromoTech Team",
    thumbnail: "/thumbnails/bootstrap-course.jpg",
    tags: ["Bootstrap", "CSS Framework", "Responsive", "Components"],
    lessons: [
      { title: "Bootstrap Basics", content: "Introduction to Bootstrap and its grid system.", duration: "16:00", type: "video", videoUrl: "https://www.youtube.com/embed/5GdJTw0-a8I" },
      { title: "Components", content: "Use Bootstrap's pre-built components like buttons, cards, and navbars.", duration: "24:30", type: "video", videoUrl: "https://www.youtube.com/embed/wlUKQHbxrWE" },
      { title: "Utilities", content: "Leverage Bootstrap's utility classes for rapid styling.", duration: "19:15", type: "video", videoUrl: "https://www.youtube.com/embed/KFxB5-p0y_g" },
      { title: "Customization", content: "Customize Bootstrap's appearance and behavior.", duration: "21:45", type: "video", videoUrl: "https://www.youtube.com/embed/G8bXWcEKmW8" },
      { title: "Themes & Templates", content: "Use Bootstrap themes and create custom templates.", duration: "17:20", type: "video", videoUrl: "https://www.youtube.com/embed/9pDV0oZXGjI" }
    ]
  },
  {
    slug: "w3.css",
    title: "W3.CSS Framework",
    category: "WEB BASICS",
    description: "Lightweight CSS framework for modern web design. Learn an alternative to Bootstrap.",
    duration: "7 hours",
    level: "Beginner",
    instructor: "OromoTech Team",
    thumbnail: "/thumbnails/w3css-course.jpg",
    tags: ["W3.CSS", "Lightweight", "CSS Framework", "Modern"],
    lessons: [
      { title: "W3.CSS Introduction", content: "Learn about W3.CSS and its advantages.", duration: "13:00", type: "video", videoUrl: "https://www.youtube.com/embed/JkytlHJe9w8" },
      { title: "Containers & Colors", content: "Use W3.CSS containers and color classes.", duration: "15:30", type: "video", videoUrl: "https://www.youtube.com/embed/lnHpfxYzpds" },
      { title: "Responsive Classes", content: "Create responsive layouts with W3.CSS.", duration: "14:45", type: "video", videoUrl: "https://www.youtube.com/embed/u0pF4AFBVMA" },
      { title: "Components", content: "Build UI components with W3.CSS classes.", duration: "16:20", type: "video", videoUrl: "https://www.youtube.com/embed/I-9pFngVrNU" },
      { title: "Advanced Features", content: "Explore advanced W3.CSS features and animations.", duration: "12:15", type: "video", videoUrl: "https://www.youtube.com/embed/FNVN0hVtmNw" }
    ]
  },
  {
    slug: "javascript",
    title: "JavaScript Fundamentals",
    category: "FRONTEND",
    description: "Learn JavaScript programming for interactive web development. Master the language of the web.",
    duration: "15 hours",
    level: "Beginner",
    instructor: "OromoTech Team",
    thumbnail: "/thumbnails/javascript-course.jpg",
    tags: ["JavaScript", "Programming", "Frontend", "Interactive"],
    lessons: [
      {
        title: "Introduction to JavaScript",
        content: "JavaScript is the programming language of the web. Learn what JS is, its history, and how it makes websites interactive. Understand the difference between client-side and server-side JavaScript.",
        duration: "18:00",
        type: "video",
        videoUrl: "https://www.youtube.com/embed/W6NZfCO5SIk"
      },
      {
        title: "Variables, Data Types & Operators",
        content: "Master JavaScript variables (var, let, const), primitive data types (string, number, boolean, null, undefined), and operators (arithmetic, comparison, logical).",
        duration: "22:30",
        type: "video",
        videoUrl: "https://www.youtube.com/embed/edd8H2eDHNg"
      },
      {
        title: "Control Flow & Loops",
        content: "Learn conditional statements (if/else, switch) and loops (for, while, do-while). Understand how to control program execution flow.",
        duration: "25:15",
        type: "video",
        videoUrl: "https://www.youtube.com/embed/IsG4Xd6LlsM"
      },
      {
        title: "Functions & Scope",
        content: "Create reusable code with functions. Learn function declarations, expressions, arrow functions, parameters, return values, and scope (global vs local).",
        duration: "28:45",
        type: "video",
        videoUrl: "https://www.youtube.com/embed/xUI5Tsl2JpY"
      },
      {
        title: "Arrays & Objects",
        content: "Work with arrays and objects - the building blocks of JavaScript data structures. Learn array methods, object properties, and JSON.",
        duration: "24:20",
        type: "video",
        videoUrl: "https://www.youtube.com/embed/oigfaZ5ApsM"
      },
      {
        title: "DOM Manipulation",
        content: "Interact with HTML elements using the Document Object Model. Learn to select, modify, create, and remove elements dynamically.",
        duration: "30:10",
        type: "video",
        videoUrl: "https://www.youtube.com/embed/y17RuWkWdn8"
      },
      {
        title: "Events & Event Handling",
        content: "Handle user interactions with event listeners. Learn event types, event objects, event bubbling, and best practices for event management.",
        duration: "26:35",
        type: "video",
        videoUrl: "https://www.youtube.com/embed/F3odgpghXzY"
      },
      {
        title: "Asynchronous JavaScript",
        content: "Master asynchronous programming with callbacks, promises, and async/await. Understand the event loop and how JavaScript handles concurrency.",
        duration: "32:50",
        type: "video",
        videoUrl: "https://www.youtube.com/embed/ZcQyJ-gxke0"
      },
      {
        title: "Error Handling & Debugging",
        content: "Learn try/catch blocks, throw statements, and debugging techniques. Use browser dev tools and console methods for effective debugging.",
        duration: "21:15",
        type: "video",
        videoUrl: "https://www.youtube.com/embed/0FJEZhQdJq8"
      },
      {
        title: "ES6+ Modern JavaScript",
        content: "Explore modern JavaScript features: template literals, destructuring, spread/rest operators, modules, and new array/object methods.",
        duration: "29:40",
        type: "video",
        videoUrl: "https://www.youtube.com/embed/nZ1DMMsyVyI"
      },
      {
        title: "JavaScript Best Practices",
        content: "Learn coding standards, performance optimization, security considerations, and maintainable code practices for professional JavaScript development.",
        duration: "23:25",
        type: "video",
        videoUrl: "https://www.youtube.com/embed/taaEzHI9xyY"
      },
      {
        title: "Building JavaScript Projects",
        content: "Apply all concepts to build interactive web applications. Learn project structure, code organization, and deployment strategies.",
        duration: "35:50",
        type: "video",
        videoUrl: "https://www.youtube.com/embed/3PHXvlpOkf4"
      }
    ]
  },
  {
    slug: "react",
    title: "React Fundamentals",
    category: "FRONTEND",
    description: "Build dynamic user interfaces with React. Learn the most popular JavaScript library.",
    duration: "18 hours",
    level: "Intermediate",
    instructor: "OromoTech Team",
    thumbnail: "/thumbnails/react-course.jpg",
    tags: ["React", "JavaScript", "Frontend", "Components"],
    lessons: [
      {
        title: "Introduction to React",
        content: "React is a JavaScript library for building user interfaces. Learn about component-based architecture, virtual DOM, and why React is popular for modern web development.",
        duration: "24:00",
        type: "video",
        videoUrl: "https://www.youtube.com/embed/w7ejDZ8SWv8"
      },
      {
        title: "JSX & Component Basics",
        content: "Learn JSX syntax, component creation, and the difference between functional and class components. Understand how React renders components.",
        duration: "26:30",
        type: "video",
        videoUrl: "https://www.youtube.com/embed/9bSqg0MDsDI"
      },
      {
        title: "Props & Component Communication",
        content: "Pass data between components using props. Learn prop types, default props, and children props for flexible component design.",
        duration: "29:15",
        type: "video",
        videoUrl: "https://www.youtube.com/embed/H9WCVMC8ooU"
      },
      {
        title: "State Management with useState",
        content: "Manage component state with the useState hook. Learn state updates, state vs props, and controlled vs uncontrolled components.",
        duration: "31:45",
        type: "video",
        videoUrl: "https://www.youtube.com/embed/O6P86uwfdR0"
      },
      {
        title: "useEffect & Side Effects",
        content: "Handle side effects like API calls, timers, and subscriptions with useEffect. Learn dependency arrays and cleanup functions.",
        duration: "27:20",
        type: "video",
        videoUrl: "https://www.youtube.com/embed/0ZJgIjIuY7U"
      },
      {
        title: "React Router & Navigation",
        content: "Implement client-side routing with React Router. Learn route parameters, nested routes, and programmatic navigation.",
        duration: "33:10",
        type: "video",
        videoUrl: "https://www.youtube.com/embed/Sh7D4a_M8y0"
      },
      {
        title: "Forms & Controlled Components",
        content: "Build forms with controlled inputs. Learn form validation, handling multiple inputs, and form submission in React.",
        duration: "28:45",
        type: "video",
        videoUrl: "https://www.youtube.com/embed/7Vo_VCcWupQ"
      },
      {
        title: "Context API & Global State",
        content: "Manage global state with React Context. Learn createContext, useContext, and Provider patterns for app-wide state management.",
        duration: "25:30",
        type: "video",
        videoUrl: "https://www.youtube.com/embed/5LrDIWkK_Bc"
      },
      {
        title: "Custom Hooks",
        content: "Create reusable logic with custom hooks. Learn to extract component logic into shareable hooks for better code organization.",
        duration: "22:15",
        type: "video",
        videoUrl: "https://www.youtube.com/embed/6ThXsUwLWvc"
      },
      {
        title: "React Performance Optimization",
        content: "Optimize React apps with memo, useMemo, useCallback, and React DevTools. Learn about reconciliation and rendering optimization.",
        duration: "30:50",
        type: "video",
        videoUrl: "https://www.youtube.com/embed/SCIvZHtRlko"
      },
      {
        title: "Testing React Components",
        content: "Write unit and integration tests for React components using Jest and React Testing Library. Learn testing best practices.",
        duration: "26:40",
        type: "video",
        videoUrl: "https://www.youtube.com/embed/T2sv8jXoP4s"
      },
      {
        title: "Building a Complete React App",
        content: "Apply all React concepts to build a full-featured application. Learn about project structure, deployment, and production best practices.",
        duration: "38:25",
        type: "video",
        videoUrl: "https://www.youtube.com/embed/hQAHSlTtcmY"
      }
    ]
  },
  {
    slug: "jquery",
    title: "jQuery Library",
    category: "FRONTEND",
    description: "Simplify JavaScript development with jQuery. Learn the popular DOM manipulation library.",
    duration: "9 hours",
    level: "Beginner",
    instructor: "OromoTech Team",
    thumbnail: "/thumbnails/jquery-course.jpg",
    tags: ["jQuery", "JavaScript", "DOM", "Library"],
    lessons: [
      { title: "jQuery Introduction", content: "What is jQuery and how it simplifies JavaScript.", duration: "14:00", type: "video", videoUrl: "https://www.youtube.com/embed/hMxGlNTzqdc" },
      { title: "Selectors", content: "Use jQuery selectors to target HTML elements.", duration: "16:30", type: "video", videoUrl: "https://www.youtube.com/embed/OAApIxukOyc" },
      { title: "Events", content: "Handle events with jQuery event methods.", duration: "18:45", type: "video", videoUrl: "https://www.youtube.com/embed/dG9b8OhwwM8" },
      { title: "Effects & Animations", content: "Create smooth animations and effects.", duration: "21:20", type: "video", videoUrl: "https://www.youtube.com/embed/9pqVHhW2YLo" },
      { title: "AJAX", content: "Make asynchronous requests with jQuery AJAX.", duration: "19:15", type: "video", videoUrl: "https://www.youtube.com/embed/WmPZiB0y6H0" }
    ]
  },
  {
    slug: "vue",
    title: "Vue.js Framework",
    category: "FRONTEND",
    description: "Progressive JavaScript framework for building UIs. Learn Vue.js from basics to advanced.",
    duration: "14 hours",
    level: "Intermediate",
    instructor: "OromoTech Team",
    thumbnail: "/thumbnails/vue-course.jpg",
    tags: ["Vue.js", "JavaScript", "Frontend", "Progressive"],
    lessons: [
      { title: "Vue Basics", content: "Introduction to Vue.js and its core concepts.", duration: "20:00", type: "video", videoUrl: "https://www.youtube.com/embed/FXpIoQ_rT_c" },
      { title: "Directives", content: "Use Vue directives for dynamic behavior.", duration: "22:30", type: "video", videoUrl: "https://www.youtube.com/embed/h2HlXM6rQkI" },
      { title: "Components", content: "Create reusable Vue components.", duration: "24:15", type: "video", videoUrl: "https://www.youtube.com/embed/ZHJVQ3OC8ZI" },
      { title: "Vue Router", content: "Implement routing in Vue applications.", duration: "26:45", type: "video", videoUrl: "https://www.youtube.com/embed/J0cqSPo5fWs" },
      { title: "State Management", content: "Manage application state with Vuex.", duration: "23:20", type: "video", videoUrl: "https://www.youtube.com/embed/2O6Ew-4OKHY" }
    ]
  },
  {
    slug: "angular",
    title: "Angular Framework",
    category: "FRONTEND",
    description: "Build scalable web applications with Angular. Learn Google's comprehensive framework.",
    duration: "20 hours",
    level: "Advanced",
    instructor: "OromoTech Team",
    thumbnail: "/thumbnails/angular-course.jpg",
    tags: ["Angular", "TypeScript", "Frontend", "Enterprise"],
    lessons: [
      { title: "Angular Introduction", content: "Overview of Angular and its architecture.", duration: "28:00", type: "video", videoUrl: "https://www.youtube.com/embed/0eWrpsCLMFQ" },
      { title: "Components & Modules", content: "Create Angular components and organize with modules.", duration: "30:30", type: "video", videoUrl: "https://www.youtube.com/embed/3qBXWwW0IsQ" },
      { title: "Data Binding", content: "Use Angular's data binding features.", duration: "25:15", type: "video", videoUrl: "https://www.youtube.com/embed/8r9LS1eVXu8" },
      { title: "Services & Dependency Injection", content: "Implement services and dependency injection.", duration: "27:45", type: "video", videoUrl: "https://www.youtube.com/embed/yqTdNPB0WZ0" },
      { title: "Routing & Navigation", content: "Set up routing in Angular applications.", duration: "29:20", type: "video", videoUrl: "https://www.youtube.com/embed/v90sHNqXGJI" }
    ]
  },
  {
    slug: "node.js",
    title: "Node.js Backend",
    category: "BACKEND",
    description: "Server-side JavaScript development with Node.js. Build scalable backend applications.",
    duration: "16 hours",
    level: "Intermediate",
    instructor: "OromoTech Team",
    thumbnail: "/thumbnails/nodejs-course.jpg",
    tags: ["Node.js", "JavaScript", "Backend", "Server"],
    lessons: [
      {
        title: "Introduction to Node.js",
        content: "Node.js is JavaScript runtime built on Chrome's V8 engine. Learn about event-driven, non-blocking I/O, and why Node.js is perfect for scalable applications.",
        duration: "22:00",
        type: "video",
        videoUrl: "https://www.youtube.com/embed/TlB_eWDSMt4"
      },
      {
        title: "Node.js Installation & Setup",
        content: "Install Node.js, npm, and set up your development environment. Learn about Node Version Manager (nvm) and package management.",
        duration: "15:30",
        type: "video",
        videoUrl: "https://www.youtube.com/embed/3aD5Hh8lJ7k"
      },
      {
        title: "Modules, NPM & Package Management",
        content: "Master CommonJS and ES6 modules. Learn npm commands, package.json, semantic versioning, and managing dependencies effectively.",
        duration: "24:30",
        type: "video",
        videoUrl: "https://www.youtube.com/embed/P3aKxcAgZKE"
      },
      {
        title: "File System Operations",
        content: "Read, write, and manipulate files asynchronously. Learn about streams, buffers, and file system best practices in Node.js.",
        duration: "19:15",
        type: "video",
        videoUrl: "https://www.youtube.com/embed/wxbQP7Q8DV4"
      },
      {
        title: "Building HTTP Servers",
        content: "Create HTTP servers with Node.js core modules. Learn about request/response handling, status codes, and basic server architecture.",
        duration: "26:45",
        type: "video",
        videoUrl: "https://www.youtube.com/embed/fBNz5xF-Kx4"
      },
      {
        title: "Express.js Fundamentals",
        content: "Build web applications with Express.js. Learn routing, middleware, error handling, and RESTful API design principles.",
        duration: "23:20",
        type: "video",
        videoUrl: "https://www.youtube.com/embed/jivyItmg3qQ"
      },
      {
        title: "Database Integration",
        content: "Connect Node.js applications to databases. Learn about MongoDB with Mongoose, SQL databases, and ORM patterns.",
        duration: "28:40",
        type: "video",
        videoUrl: "https://www.youtube.com/embed/2FeymQoKvrk"
      },
      {
        title: "Authentication & Security",
        content: "Implement user authentication with JWT, bcrypt, and passport. Learn security best practices, CORS, and input validation.",
        duration: "31:15",
        type: "video",
        videoUrl: "https://www.youtube.com/embed/0d7cIfiydAc"
      },
      {
        title: "RESTful APIs & GraphQL",
        content: "Design and build RESTful APIs. Learn about HTTP methods, status codes, and introduction to GraphQL for flexible data fetching.",
        duration: "29:50",
        type: "video",
        videoUrl: "https://www.youtube.com/embed/pKd0Rpw7O48"
      },
      {
        title: "Testing & Debugging",
        content: "Write unit and integration tests with Jest and Supertest. Learn debugging techniques and error handling in Node.js applications.",
        duration: "25:25",
        type: "video",
        videoUrl: "https://www.youtube.com/embed/0GYRPKkcR9E"
      },
      {
        title: "Deployment & Production",
        content: "Deploy Node.js applications to production. Learn about environment variables, process management with PM2, and cloud deployment.",
        duration: "27:35",
        type: "video",
        videoUrl: "https://www.youtube.com/embed/oykl1Ih9pMg"
      },
      {
        title: "Building a Full-Stack App",
        content: "Combine all concepts to build a complete full-stack application with Node.js backend, database integration, and frontend.",
        duration: "35:20",
        type: "video",
        videoUrl: "https://www.youtube.com/embed/1NrHkjlWVhM"
      }
    ]
  },
  {
    slug: "express.js",
    title: "Express.js Framework",
    category: "BACKEND",
    description: "Fast, unopinionated web framework for Node.js. Build robust APIs and web applications.",
    duration: "11 hours",
    level: "Intermediate",
    instructor: "OromoTech Team",
    thumbnail: "/thumbnails/express-course.jpg",
    tags: ["Express.js", "Node.js", "API", "Backend"],
    lessons: [
      { title: "Express Basics", content: "Set up an Express.js application.", duration: "17:00", type: "video", videoUrl: "https://www.youtube.com/embed/L72fhGm1tfE" },
      { title: "Routing", content: "Define routes and handle HTTP requests.", duration: "19:30", type: "video", videoUrl: "https://www.youtube.com/embed/7YMxkVF9VYU" },
      { title: "Middleware", content: "Use middleware for request processing.", duration: "21:15", type: "video", videoUrl: "https://www.youtube.com/embed/6oiabY1xpBE" },
      { title: "Templates", content: "Render dynamic content with template engines.", duration: "18:45", type: "video", videoUrl: "https://www.youtube.com/embed/QKqC00Hyunc" },
      { title: "API Development", content: "Build RESTful APIs with Express.js.", duration: "24:20", type: "video", videoUrl: "https://www.youtube.com/embed/fCNiiqKB6ZA" }
    ]
  },
  {
    slug: "python",
    title: "Python Programming",
    category: "BACKEND",
    description: "Learn Python for backend development and more. Master one of the most popular programming languages.",
    duration: "22 hours",
    level: "Beginner",
    instructor: "OromoTech Team",
    thumbnail: "/thumbnails/python-course.jpg",
    tags: ["Python", "Programming", "Backend", "Data Science"],
    lessons: [
      {
        title: "Introduction to Python",
        content: "Python is a high-level, interpreted programming language known for its simplicity and readability. Learn Python basics, installation, and why it's popular for beginners and professionals.",
        duration: "20:00",
        type: "video",
        videoUrl: "https://www.youtube.com/embed/kqtZien_NKU"
      },
      {
        title: "Variables & Data Types",
        content: "Master Python variables, strings, numbers, booleans, and type conversion. Learn about dynamic typing and basic operations.",
        duration: "18:30",
        type: "video",
        videoUrl: "https://www.youtube.com/embed/k9TUPpGqYTo"
      },
      {
        title: "Control Flow & Loops",
        content: "Learn conditional statements (if/elif/else) and loops (for/while). Understand indentation, boolean logic, and program flow control.",
        duration: "22:45",
        type: "video",
        videoUrl: "https://www.youtube.com/embed/6iF8Xb7Z3wQ"
      },
      {
        title: "Data Structures",
        content: "Master lists, tuples, dictionaries, and sets. Learn indexing, slicing, comprehensions, and when to use each data structure.",
        duration: "28:30",
        type: "video",
        videoUrl: "https://www.youtube.com/embed/W8KRzm-HUcc"
      },
      {
        title: "Functions & Modules",
        content: "Create reusable functions with parameters and return values. Learn about scope, lambda functions, and organizing code with modules.",
        duration: "25:15",
        type: "video",
        videoUrl: "https://www.youtube.com/embed/v5Hya_JWbQc"
      },
      {
        title: "File Handling & I/O",
        content: "Read from and write to files. Learn about different file modes, context managers, and working with CSV, JSON, and text files.",
        duration: "22:45",
        type: "video",
        videoUrl: "https://www.youtube.com/embed/nYmfjtXae5E"
      },
      {
        title: "Object-Oriented Programming",
        content: "Learn classes, objects, inheritance, polymorphism, and encapsulation. Understand how to design and implement OOP in Python.",
        duration: "31:20",
        type: "video",
        videoUrl: "https://www.youtube.com/embed/ZDa-Z5JzLYM"
      },
      {
        title: "Error Handling & Exceptions",
        content: "Handle errors gracefully with try/except blocks. Learn about different exception types and best practices for robust code.",
        duration: "19:40",
        type: "video",
        videoUrl: "https://www.youtube.com/embed/NIWwJbo-9_8"
      },
      {
        title: "Libraries & Frameworks",
        content: "Explore popular Python libraries: NumPy, Pandas for data science, Flask/Django for web development, and Requests for HTTP.",
        duration: "26:20",
        type: "video",
        videoUrl: "https://www.youtube.com/embed/xBj3hF67hOU"
      },
      {
        title: "Web Development with Flask",
        content: "Build web applications with Flask microframework. Learn routing, templates, forms, and database integration.",
        duration: "29:15",
        type: "video",
        videoUrl: "https://www.youtube.com/embed/Z1RJmh_OqeA"
      },
      {
        title: "Data Science & Analysis",
        content: "Introduction to data science with Python. Learn data manipulation with Pandas, visualization with Matplotlib, and basic machine learning.",
        duration: "33:50",
        type: "video",
        videoUrl: "https://www.youtube.com/embed/8jazNUpO3lQ"
      },
      {
        title: "Building Python Projects",
        content: "Apply all concepts to build real-world applications. Learn about virtual environments, requirements.txt, and project deployment.",
        duration: "27:30",
        type: "video",
        videoUrl: "https://www.youtube.com/embed/1lxrb_ezP-g"
      }
    ]
  },
  {
    slug: "django",
    title: "Django Framework",
    category: "BACKEND",
    description: "High-level Python web framework. Build complex web applications with Django.",
    duration: "19 hours",
    level: "Intermediate",
    instructor: "OromoTech Team",
    thumbnail: "/thumbnails/django-course.jpg",
    tags: ["Django", "Python", "Web Framework", "Backend"],
    lessons: [
      { title: "Django Basics", content: "Introduction to Django and MVC architecture.", duration: "24:00", type: "video", videoUrl: "https://www.youtube.com/embed/PtQiiknWEKI" },
      { title: "Models & Database", content: "Define models and work with databases.", duration: "29:30", type: "video", videoUrl: "https://www.youtube.com/embed/XW3W2l2aTFk" },
      { title: "Views & Templates", content: "Create views and render templates.", duration: "26:15", type: "video", videoUrl: "https://www.youtube.com/embed/rS6e-8i7uaA" },
      { title: "Forms", content: "Handle user input with Django forms.", duration: "23:45", type: "video", videoUrl: "https://www.youtube.com/embed/YmyxNVJEzcw" },
      { title: "Authentication", content: "Implement user authentication and authorization.", duration: "27:20", type: "video", videoUrl: "https://www.youtube.com/embed/tdSCfnnBe6Y" }
    ]
  },
  {
    slug: "php",
    title: "PHP Programming",
    category: "BACKEND",
    description: "Server-side scripting language for web development. Learn PHP for dynamic websites.",
    duration: "17 hours",
    level: "Beginner",
    instructor: "OromoTech Team",
    thumbnail: "/thumbnails/php-course.jpg",
    tags: ["PHP", "Backend", "Web Development", "Scripting"],
    lessons: [
      { title: "PHP Introduction", content: "Basics of PHP programming.", duration: "19:00", type: "video", videoUrl: "https://www.youtube.com/embed/OK_JCtqLrOD" },
      { title: "Variables & Data Types", content: "PHP variables, arrays, and data types.", duration: "21:30", type: "video", videoUrl: "https://www.youtube.com/embed/2tQzQ4zrU9c" },
      { title: "Functions", content: "Create and use functions in PHP.", duration: "23:15", type: "video", videoUrl: "https://www.youtube.com/embed/E4kUTZvMfFw" },
      { title: "Forms & Input", content: "Handle form data and user input.", duration: "25:45", type: "video", videoUrl: "https://www.youtube.com/embed/qKuYsCoVFfI" },
      { title: "Database Connection", content: "Connect to databases with PHP.", duration: "22:20", type: "video", videoUrl: "https://www.youtube.com/embed/kHJoXOy0P3k" }
    ]
  },
  {
    slug: "sql",
    title: "SQL Database",
    category: "DATABASE",
    description: "Learn SQL for database management. Master relational database queries and design.",
    duration: "13 hours",
    level: "Beginner",
    instructor: "OromoTech Team",
    thumbnail: "/thumbnails/sql-course.jpg",
    tags: ["SQL", "Database", "Queries", "Relational"],
    lessons: [
      {
        title: "Introduction to SQL & Databases",
        content: "SQL is the standard language for relational databases. Learn about database concepts, normalization, and why SQL is essential for data management.",
        duration: "18:00",
        type: "video",
        videoUrl: "https://www.youtube.com/embed/27axs9dO7AE"
      },
      {
        title: "Database Design & Normalization",
        content: "Design efficient database schemas. Learn about entities, relationships, normalization forms, and primary/foreign keys.",
        duration: "22:30",
        type: "video",
        videoUrl: "https://www.youtube.com/embed/1VsSXRWx1y0"
      },
      {
        title: "Basic SELECT Queries",
        content: "Retrieve data with SELECT statements. Learn WHERE clauses, ORDER BY, LIMIT, and basic filtering techniques.",
        duration: "20:15",
        type: "video",
        videoUrl: "https://www.youtube.com/embed/_kE_nKY-LDo"
      },
      {
        title: "Data Manipulation (INSERT, UPDATE, DELETE)",
        content: "Modify data in tables. Learn INSERT syntax, UPDATE with conditions, and safe DELETE operations with proper WHERE clauses.",
        duration: "24:45",
        type: "video",
        videoUrl: "https://www.youtube.com/embed/Z-Th0Kqy7sQ"
      },
      {
        title: "JOIN Operations",
        content: "Combine data from multiple tables. Master INNER JOIN, LEFT JOIN, RIGHT JOIN, and FULL OUTER JOIN with practical examples.",
        duration: "28:20",
        type: "video",
        videoUrl: "https://www.youtube.com/embed/b4mKQAd76kI"
      },
      {
        title: "Aggregate Functions & GROUP BY",
        content: "Use COUNT, SUM, AVG, MIN, MAX functions. Learn GROUP BY clauses and HAVING for filtered aggregations.",
        duration: "21:40",
        type: "video",
        videoUrl: "https://www.youtube.com/embed/4A7NFRQcO4k"
      },
      {
        title: "Subqueries & Nested Queries",
        content: "Write complex queries with subqueries. Learn correlated subqueries, EXISTS, and IN operators for advanced data retrieval.",
        duration: "25:15",
        type: "video",
        videoUrl: "https://www.youtube.com/embed/nWeL3G1Axpo"
      },
      {
        title: "Indexes & Performance Optimization",
        content: "Improve query performance with indexes. Learn about index types, EXPLAIN plans, and query optimization techniques.",
        duration: "23:50",
        type: "video",
        videoUrl: "https://www.youtube.com/embed/HVbQBpLfKvU"
      },
      {
        title: "Views, Stored Procedures & Triggers",
        content: "Create reusable database objects. Learn about views for simplified queries, stored procedures for business logic, and triggers for automated actions.",
        duration: "26:30",
        type: "video",
        videoUrl: "https://www.youtube.com/embed/7S_tz1z_5bA"
      },
      {
        title: "Database Security & Best Practices",
        content: "Secure your databases with proper user management, permissions, and data validation. Learn about SQL injection prevention and backup strategies.",
        duration: "19:25",
        type: "video",
        videoUrl: "https://www.youtube.com/embed/2uaTNzrgYgw"
      },
      {
        title: "Advanced SQL Topics",
        content: "Explore window functions, CTEs, pivoting data, and advanced SQL features for complex data analysis and reporting.",
        duration: "27:45",
        type: "video",
        videoUrl: "https://www.youtube.com/embed/7mz73uXD9DA"
      },
      {
        title: "Building Database-Driven Applications",
        content: "Connect SQL databases to applications. Learn about connection pooling, prepared statements, and building data-driven web applications.",
        duration: "30:10",
        type: "video",
        videoUrl: "https://www.youtube.com/embed/2Hzz3kVHLjs"
      }
    ]
  },
  {
    slug: "mongodb",
    title: "MongoDB Database",
    category: "DATABASE",
    description: "NoSQL document database for modern applications. Learn MongoDB for flexible data storage.",
    duration: "12 hours",
    level: "Intermediate",
    instructor: "OromoTech Team",
    thumbnail: "/thumbnails/mongodb-course.jpg",
    tags: ["MongoDB", "NoSQL", "Database", "Document"],
    lessons: [
      {
        title: "Introduction to MongoDB & NoSQL",
        content: "MongoDB is a document-oriented NoSQL database. Learn about NoSQL vs SQL, document databases, and when to choose MongoDB for your projects.",
        duration: "17:00",
        type: "video",
        videoUrl: "https://www.youtube.com/embed/ofme2o29ngU"
      },
      {
        title: "MongoDB Installation & Setup",
        content: "Install MongoDB locally and in the cloud. Learn about MongoDB Atlas, connection strings, and basic database administration.",
        duration: "14:30",
        type: "video",
        videoUrl: "https://www.youtube.com/embed/exNdrwrPV-s"
      },
      {
        title: "Documents & Collections",
        content: "Understand BSON documents, collections vs tables, and flexible schemas. Learn about embedded documents and references.",
        duration: "19:30",
        type: "video",
        videoUrl: "https://www.youtube.com/embed/Be0UXIB82Ts"
      },
      {
        title: "CRUD Operations",
        content: "Master Create, Read, Update, Delete operations. Learn insertOne, find, updateOne, deleteOne, and bulk operations.",
        duration: "23:15",
        type: "video",
        videoUrl: "https://www.youtube.com/embed/8bWOVPx9TJQ"
      },
      {
        title: "Query Operators & Filtering",
        content: "Use comparison, logical, and element operators. Learn about regex queries, array operations, and complex filtering.",
        duration: "21:45",
        type: "video",
        videoUrl: "https://www.youtube.com/embed/zc7ZvCN_wRo"
      },
      {
        title: "Indexing for Performance",
        content: "Create indexes to improve query performance. Learn about single field, compound, and text indexes, and index strategies.",
        duration: "18:45",
        type: "video",
        videoUrl: "https://www.youtube.com/embed/0Ll6QgwBhKU"
      },
      {
        title: "Aggregation Framework",
        content: "Process and analyze data with aggregation pipelines. Learn about $match, $group, $project, and complex data transformations.",
        duration: "26:20",
        type: "video",
        videoUrl: "https://www.youtube.com/embed/eYmISw6yVDY"
      },
      {
        title: "Data Modeling & Schema Design",
        content: "Design effective MongoDB schemas. Learn about embedding vs referencing, data relationships, and schema validation.",
        duration: "22:10",
        type: "video",
        videoUrl: "https://www.youtube.com/embed/lW8dw0JFuIE"
      },
      {
        title: "MongoDB with Node.js",
        content: "Connect MongoDB to Node.js applications. Learn about MongoDB Node.js driver, connection pooling, and best practices.",
        duration: "24:35",
        type: "video",
        videoUrl: "https://www.youtube.com/embed/2FeymQoKvrk"
      },
      {
        title: "Mongoose ODM",
        content: "Use Mongoose for object data modeling. Learn about schemas, models, validation, middleware, and population.",
        duration: "28:50",
        type: "video",
        videoUrl: "https://www.youtube.com/embed/DZBGEVgL2eE"
      },
      {
        title: "MongoDB Security & Deployment",
        content: "Secure MongoDB deployments. Learn about authentication, authorization, encryption, and production deployment strategies.",
        duration: "20:15",
        type: "video",
        videoUrl: "https://www.youtube.com/embed/6tpSOXNzH0E"
      },
      {
        title: "Building Full-Stack Apps with MongoDB",
        content: "Apply all concepts to build complete applications. Learn about MERN stack, data architecture, and scalable MongoDB applications.",
        duration: "32:40",
        type: "video",
        videoUrl: "https://www.youtube.com/embed/2FeymQoKvrk"
      }
    ]
  },
  {
    slug: "postgresql",
    title: "PostgreSQL Database",
    category: "DATABASE",
    description: "Advanced open-source relational database. Learn PostgreSQL for robust data management.",
    duration: "15 hours",
    level: "Intermediate",
    instructor: "OromoTech Team",
    thumbnail: "/thumbnails/postgresql-course.jpg",
    tags: ["PostgreSQL", "Database", "SQL", "Open Source"],
    lessons: [
      { title: "PostgreSQL Introduction", content: "Overview of PostgreSQL features.", duration: "20:00", type: "video", videoUrl: "https://www.youtube.com/embed/qw--VYLpxG4" },
      { title: "Data Types", content: "PostgreSQL data types and constraints.", duration: "22:30", type: "video", videoUrl: "https://www.youtube.com/embed/W0MtUnA-uTE" },
      { title: "Queries & Functions", content: "Advanced SQL queries and functions.", duration: "25:15", type: "video", videoUrl: "https://www.youtube.com/embed/fzf402qDYKU" },
      { title: "Indexing & Performance", content: "Optimize database performance.", duration: "23:45", type: "video", videoUrl: "https://www.youtube.com/embed/9jfJaFNJYVU" },
      { title: "Extensions", content: "Use PostgreSQL extensions for additional functionality.", duration: "19:20", type: "video", videoUrl: "https://www.youtube.com/embed/V7Fj-_DskYk" }
    ]
  },
  {
    slug: "firebase",
    title: "Firebase Platform",
    category: "DATABASE",
    description: "Google's platform for mobile and web development. Learn Firebase services and integration.",
    duration: "14 hours",
    level: "Intermediate",
    instructor: "OromoTech Team",
    thumbnail: "/thumbnails/firebase-course.jpg",
    tags: ["Firebase", "Google", "Backend", "Real-time"],
    lessons: [
      { title: "Firebase Basics", content: "Introduction to Firebase services.", duration: "18:00", type: "video", videoUrl: "https://www.youtube.com/embed/9kRgVxULbEA" },
      { title: "Firestore Database", content: "Use Firestore for real-time database.", duration: "24:30", type: "video", videoUrl: "https://www.youtube.com/embed/v_hR4K4auoQ" },
      { title: "Authentication", content: "Implement user authentication.", duration: "22:15", type: "video", videoUrl: "https://www.youtube.com/embed/sPW8v5ZsmvM" },
      { title: "Cloud Functions", content: "Serverless functions with Firebase.", duration: "26:45", type: "video", videoUrl: "https://www.youtube.com/embed/iBnKQf0Ylr4" },
      { title: "Hosting", content: "Deploy web applications with Firebase Hosting.", duration: "20:20", type: "video", videoUrl: "https://www.youtube.com/embed/sSqFsNl6T5M" }
    ]
  },
  {
    slug: "aws",
    title: "Amazon Web Services",
    category: "CLOUD",
    description: "Cloud computing platform by Amazon. Learn AWS services for scalable applications.",
    duration: "25 hours",
    level: "Advanced",
    instructor: "OromoTech Team",
    thumbnail: "/thumbnails/aws-course.jpg",
    tags: ["AWS", "Cloud", "Amazon", "Infrastructure"],
    lessons: [
      { title: "AWS Introduction", content: "Overview of AWS services and cloud computing.", duration: "22:00", type: "video", videoUrl: "https://www.youtube.com/embed/k1RI5locZE4" },
      { title: "EC2 Instances", content: "Virtual servers in the cloud.", duration: "28:30", type: "video", videoUrl: "https://www.youtube.com/embed/H0OMRlkNzFU" },
      { title: "S3 Storage", content: "Object storage service.", duration: "19:15", type: "video", videoUrl: "https://www.youtube.com/embed/e-IqAyS54Co" },
      { title: "RDS Databases", content: "Managed relational databases.", duration: "24:45", type: "video", videoUrl: "https://www.youtube.com/embed/eMzCI7S1P7s" },
      { title: "Lambda Functions", content: "Serverless compute service.", duration: "26:20", type: "video", videoUrl: "https://www.youtube.com/embed/QcZJ1Y0KX_c" }
    ]
  },
  {
    slug: "docker",
    title: "Docker Containerization",
    category: "DEVOPS",
    description: "Containerize applications with Docker. Learn containerization for modern development.",
    duration: "10 hours",
    level: "Intermediate",
    instructor: "OromoTech Team",
    thumbnail: "/thumbnails/docker-course.jpg",
    tags: ["Docker", "Containers", "DevOps", "Deployment"],
    lessons: [
      { title: "Docker Basics", content: "Introduction to containerization.", duration: "16:00", type: "video", videoUrl: "https://www.youtube.com/embed/3c-iBn73dRM" },
      { title: "Docker Images", content: "Create and manage Docker images.", duration: "18:30", type: "video", videoUrl: "https://www.youtube.com/embed/Kyx2PsuwomE" },
      { title: "Containers", content: "Run and manage Docker containers.", duration: "20:15", type: "video", videoUrl: "https://www.youtube.com/embed/fGJZH-gviOE" },
      { title: "Docker Compose", content: "Multi-container applications.", duration: "22:45", type: "video", videoUrl: "https://www.youtube.com/embed/DM65_JyGxCo" },
      { title: "Docker Best Practices", content: "Optimize Docker usage for production.", duration: "17:20", type: "video", videoUrl: "https://www.youtube.com/embed/sK5i-N34Im8" }
    ]
  },
  {
    slug: "git-github",
    title: "Git & GitHub",
    category: "TOOLS",
    description: "Version control and collaboration with Git and GitHub. Essential skills for developers.",
    duration: "8 hours",
    level: "Beginner",
    instructor: "OromoTech Team",
    thumbnail: "/thumbnails/git-course.jpg",
    tags: ["Git", "GitHub", "Version Control", "Collaboration"],
    lessons: [
      {
        title: "Introduction to Version Control",
        content: "Understand version control systems and why Git is essential for modern development. Learn about repositories, commits, and collaboration.",
        duration: "14:00",
        type: "video",
        videoUrl: "https://www.youtube.com/embed/wpenv_PqtiQ"
      },
      {
        title: "Git Installation & Setup",
        content: "Install Git on different operating systems. Configure user settings, global config, and SSH keys for secure authentication.",
        duration: "12:30",
        type: "video",
        videoUrl: "https://www.youtube.com/embed/2sjqTHE0zMMU"
      },
      {
        title: "Git Basics: Init, Add, Commit",
        content: "Create repositories, stage changes, and make commits. Learn about the working directory, staging area, and repository.",
        duration: "18:30",
        type: "video",
        videoUrl: "https://www.youtube.com/embed/uhtzxPU7Bz0"
      },
      {
        title: "Branching & Merging",
        content: "Create and manage branches for feature development. Learn merge strategies, fast-forward merges, and merge conflicts resolution.",
        duration: "20:15",
        type: "video",
        videoUrl: "https://www.youtube.com/embed/CjD8yDvVHmA"
      },
      {
        title: "GitHub: Remote Repositories",
        content: "Connect local repositories to GitHub. Learn about cloning, pushing, pulling, and remote repository management.",
        duration: "16:45",
        type: "video",
        videoUrl: "https://www.youtube.com/embed/w3jLJU7DT5E"
      },
      {
        title: "Collaboration with GitHub",
        content: "Work with teams on GitHub. Learn about forking, contributing to open source, and managing multiple contributors.",
        duration: "19:20",
        type: "video",
        videoUrl: "https://www.youtube.com/embed/For7VJZGTEo"
      },
      {
        title: "Pull Requests & Code Review",
        content: "Create pull requests for code review. Learn about code review best practices, comments, and merging approved changes.",
        duration: "15:20",
        type: "video",
        videoUrl: "https://www.youtube.com/embed/f1wnYdLOupE"
      },
      {
        title: "Git Workflows & Best Practices",
        content: "Learn popular Git workflows like Git Flow and GitHub Flow. Understand branching strategies and release management.",
        duration: "22:40",
        type: "video",
        videoUrl: "https://www.youtube.com/embed/47E-jcuQzKQ"
      },
      {
        title: "GitHub Actions & CI/CD",
        content: "Automate workflows with GitHub Actions. Learn about continuous integration, testing, and deployment pipelines.",
        duration: "25:15",
        type: "video",
        videoUrl: "https://www.youtube.com/embed/R8_veQiYBjI"
      },
      {
        title: "Git Advanced Topics",
        content: "Master advanced Git features: rebasing, cherry-picking, interactive rebase, and git bisect for debugging.",
        duration: "21:50",
        type: "video",
        videoUrl: "https://www.youtube.com/embed/0SJCYPVdAhU"
      },
      {
        title: "Git Troubleshooting",
        content: "Fix common Git problems: undoing commits, recovering lost work, and cleaning up repositories.",
        duration: "17:25",
        type: "video",
        videoUrl: "https://www.youtube.com/embed/FdZecVxzJbk"
      },
      {
        title: "Building Professional Projects",
        content: "Apply Git and GitHub skills to manage real projects. Learn about project organization, documentation, and open source contribution.",
        duration: "23:35",
        type: "video",
        videoUrl: "https://www.youtube.com/embed/yXT1ElMEkW8"}
    ]
  },
     {
    slug: "typescript",
    title: "TypeScript Programming",
    category: "FRONTEND",
    description: "Typed superset of JavaScript for better development. Learn TypeScript for robust applications.",
    duration: "16 hours",
    level: "Intermediate",
    instructor: "OromoTech Team",
    thumbnail: "/thumbnails/typescript-course.jpg",
    tags: ["TypeScript", "JavaScript", "Types", "Development"],
    lessons: [
      {
        title: "Introduction to TypeScript",
        content: "TypeScript is JavaScript with type safety. Learn why TypeScript improves code quality, catches errors early, and enhances developer experience.",
        duration: "21:00",
        type: "video",
        videoUrl: "https://www.youtube.com/embed/d56mG7DQraI"
      },
      {
        title: "TypeScript Setup & Configuration",
        content: "Install TypeScript, configure tsconfig.json, and set up development environment. Learn about compilation and source maps.",
        duration: "16:30",
        type: "video",
        videoUrl: "https://www.youtube.com/embed/gVvkJpq0HsU"
      },
      {
        title: "Basic Types & Type Annotations",
        content: "Master primitive types, arrays, tuples, enums, and union types. Learn how to add type annotations to variables and functions.",
        duration: "23:30",
        type: "video",
        videoUrl: "https://www.youtube.com/embed/ahCwqrYpIuM"
      },
      {
        title: "Interfaces & Type Aliases",
        content: "Define object shapes with interfaces and type aliases. Learn about optional properties, readonly modifiers, and extending interfaces.",
        duration: "25:15",
        type: "video",
        videoUrl: "https://www.youtube.com/embed/lGbkm3k_zRE"
      },
      {
        title: "Classes & Object-Oriented Programming",
        content: "Create classes with TypeScript. Learn about access modifiers, constructors, inheritance, and abstract classes.",
        duration: "28:45",
        type: "video",
        videoUrl: "https://www.youtube.com/embed/vq8Z2Pc7hDU"
      },
      {
        title: "Generics & Advanced Types",
        content: "Master generic functions and classes. Learn about utility types, conditional types, and mapped types for advanced type manipulation.",
        duration: "31:20",
        type: "video",
        videoUrl: "https://www.youtube.com/embed/IOzkhUe9D0s"
      },
      {
        title: "Modules & Namespaces",
        content: "Organize code with ES6 modules and namespaces. Learn about import/export syntax and module resolution.",
        duration: "19:40",
        type: "video",
        videoUrl: "https://www.youtube.com/embed/U0rqR3L-QfE"
      },
      {
        title: "Decorators & Metadata",
        content: "Use decorators for metaprogramming. Learn about class, method, and property decorators with practical examples.",
        duration: "22:15",
        type: "video",
        videoUrl: "https://www.youtube.com/embed/O6A-u_Fo0QE"
      },
      {
        title: "TypeScript with React",
        content: "Build React applications with TypeScript. Learn about component props, state, event handlers, and hooks with type safety.",
        duration: "29:50",
        type: "video",
        videoUrl: "https://www.youtube.com/embed/Z5iWr6Srsj8"
      },
      {
        title: "TypeScript with Node.js",
        content: "Develop Node.js applications with TypeScript. Learn about type definitions, Express.js typing, and backend development.",
        duration: "26:25",
        type: "video",
        videoUrl: "https://www.youtube.com/embed/9XD8hOwJ7kY"
      },
      {
        title: "Testing TypeScript Code",
        content: "Write tests for TypeScript applications. Learn about Jest with TypeScript, type-safe testing, and mocking.",
        duration: "24:10",
        type: "video",
        videoUrl: "https://www.youtube.com/embed/7fMl9m-jSE8"
      },
      {
        title: "Building TypeScript Projects",
        content: "Apply all concepts to build production-ready TypeScript applications. Learn about project structure, tooling, and deployment.",
        duration: "32:55",
        type: "video",
        videoUrl: "https://www.youtube.com/embed/XmUOj5XmZvE"
      }
    ]
      
    }, 
{
  slug: "cpp",
  title: "C++ Programming",
  category: "BACKEND",
  description:
    "Learn C++ from beginner to advanced. Master OOP, data structures, algorithms, and real-world application development.",
  duration: "20 hours",
  level: "Beginner",
  instructor: "OromoTech Team",
  thumbnail: "/thumbnails/cpp-course.jpg",
  tags: ["C++", "Programming", "OOP", "Algorithms"],
  lessons: [
    {
      title: "Introduction to C++",
      content:
        "Learn what C++ is, its history, and why it is one of the most powerful programming languages.",
      duration: "18:00",
      type: "video",
      videoUrl: "https://www.youtube.com/embed/vLnPwxZdW4Y"
    },
    {
      title: "Setting Up C++",
      content:
        "Install compiler, VS Code, and configure your first C++ development environment.",
      duration: "15:30",
      type: "video",
      videoUrl: "https://www.youtube.com/embed/DMWD7wfhgNY"
    },
    {
      title: "Variables and Data Types",
      content:
        "Learn variables, constants, integers, floats, chars, and booleans in C++.",
      duration: "20:15",
      type: "video",
      videoUrl: "https://www.youtube.com/embed/zOjov-2OZ0E"
    },
    {
      title: "Control Flow",
      content:
        "Master if/else, switch statements, for loops, while loops, and decision making.",
      duration: "24:10",
      type: "video",
      videoUrl: "https://www.youtube.com/embed/ZzaPdXTrSb8"
    },
    {
      title: "Functions",
      content:
        "Learn functions, parameters, return values, and recursion in C++.",
      duration: "23:40",
      type: "video",
      videoUrl: "https://www.youtube.com/embed/jJjg4JweJZU"
    },
    {
      title: "Arrays and Strings",
      content:
        "Work with arrays, multidimensional arrays, and string manipulation.",
      duration: "26:00",
      type: "video",
      videoUrl: "https://www.youtube.com/embed/7W4pQQ20nJg"
    },
    {
      title: "Pointers",
      content:
        "Understand pointers, memory addresses, references, and dynamic memory.",
      duration: "30:20",
      type: "video",
      videoUrl: "https://www.youtube.com/embed/DTxHyVn0ODg"
    },
    {
      title: "Object-Oriented Programming",
      content:
        "Learn classes, objects, constructors, inheritance, and polymorphism.",
      duration: "34:10",
      type: "video",
      videoUrl: "https://www.youtube.com/embed/wN0x9eZLix4"
    },
    {
      title: "STL",
      content:
        "Master vectors, maps, sets, stacks, queues, and STL algorithms.",
      duration: "27:45",
      type: "video",
      videoUrl: "https://www.youtube.com/embed/RRVYpIET_RU"
    },
    {
      title: "Build Complete C++ Project",
      content:
        "Apply all concepts to build a real-world C++ project from scratch.",
      duration: "40:00",
      type: "video",
      videoUrl: "https://www.youtube.com/embed/McojvctVsUs"
    }
  ]
}
   ]

     