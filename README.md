# My Portfolio Website

Welcome to my portfolio website! This is a personal project built using **React**, designed to showcase my skills, projects, and experience as a developer.

## Table of Contents

- [Demo](#demo)
- [Features](#features)
- [Technologies](#technologies)
- [Setup Instructions](#setup-instructions)
- [Usage](#usage)
- [License](#license)
- [Contact](#contact)

## Demo

You can view the live demo of my portfolio here: [Portfolio Demo](https://prityportfolio.netlify.app/)

## Features

- Responsive design across different screen sizes
- Dynamic scrolling effects (including a transparent sky blue shape that grows and fills the background)
- Interactive project gallery
- Contact form integration
- Smooth page transitions
- Fast and performant

## Technologies

This project is built with:

- **React**: JavaScript library for building user interfaces
- **HTML5 & CSS3**: Semantic structure and modern styling
- **JavaScript (ES6+)**: Logic and interactivity
- **Styled Components**: For component-level styles in JavaScript
- **React Router**: For client-side routing and smooth transitions
- **Framer Motion**: For animations and scroll effects

## Setup Instructions

To run this project locally, follow these steps:

1. **Clone the repository**:

   ```bash
   git clone https:https://github.com/guptaprity/My-Portfolio
   ```

2. **Navigate to the project directory**:

   ```bash
   cd My-portfolio
   ```

3. **Install the dependencies**:

   ```bash
   npm install
   ```

4. **Start the development server**:

   ```bash
   npm start
   ```

   The app will run at `http://localhost:5173`.

## Usage

### Adding/Editing Projects

To add or edit the projects displayed on your portfolio, update the `src/data/projects.js` file with the relevant information:

```javascript
export const projects = [
  {
    title: 'My-Porfolio',
    description: 'All about me',
    link: 'https://github.com/guptaprity/My-Portfolio'
  },
  // More projects...
];
```

### Customize Styles

You can easily change the website's color scheme, fonts, or other styles by editing the `src/styles/globalStyles.js` file.

### Build for Production

To build the project for production:

```bash
npm run build
```

This will bundle the project into a folder called `build` which you can then deploy.

## License

This project is open-source and available under the [MIT License](LICENSE).

## Contact

Feel free to reach out to me for any questions or collaboration opportunities:

- Email: prity.mini3110@gmail.com
- LinkedIn: [Your LinkedIn Profile](https://www.linkedin.com/in/prity-gupta-mini/)
- GitHub: [Your GitHub Profile](https://github.com/guptaprity)
   
