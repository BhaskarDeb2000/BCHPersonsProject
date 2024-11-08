# User Info with Robot Avatars

This project displays a list of users fetched from an external API with unique robot avatars for each user. The data includes each user's name, username, and email, accompanied by a fun robot avatar based on the user ID. The page layout is responsive and visually clean, making it easy to view user information.

## Live Demo

Check out the live version of the project here: [Live Demo Link](https://bch-persons-project.vercel.app/)

## Features

- **User Data**: Fetches user data from [JSONPlaceholder](https://jsonplaceholder.typicode.com/users).
- **Robot Avatars**: Displays unique avatars generated by [RoboHash](https://robohash.org/) for each user.
- **Responsive Layout**: The page layout adjusts to fit different screen sizes, making it accessible on mobile, tablet, and desktop devices.

## Technologies Used

- HTML
- CSS
- JavaScript (Fetch API)
- JSONPlaceholder API
- RoboHash API

## Getting Started

To get a local copy up and running, follow these steps.

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, etc.)
- An internet connection to access the JSONPlaceholder and RoboHash APIs

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/BhaskarDeb2000/BCHPersonsProject
   ```

2. **Navigate to the project folder:**

   ```bash
   cd BCHPersonsProject
   ```

3. **Open the `index.html` file in a web browser to view the project locally:**

   ```bash
   open index.html
   ```

## Usage

- Open the page, and the user information will load automatically.
- Each user card includes:
  - **Name**
  - **Username**
  - **Email**
  - **Unique robot avatar**

## Deployment

This project can be easily deployed on platforms like GitHub Pages, Netlify, or Vercel:

- **GitHub Pages**: Push the project to a GitHub repository and enable GitHub Pages in the repository settings.
- **Netlify**: Drag and drop the project folder into Netlify or connect your GitHub repository for continuous deployment.
- **Vercel**: Use the Vercel CLI to deploy directly from your local project directory.

## Project Structure

```plaintext
.
├── index.html         # The main HTML file
├── style.css          # CSS file for styling the page
└── script.js          # JavaScript file for fetching data and dynamically rendering user cards
```

## API Endpoints

- **User Data**: [https://jsonplaceholder.typicode.com/users](https://jsonplaceholder.typicode.com/users)
- **Robot Avatars**: [https://robohash.org/](https://robohash.org/) (e.g., `https://robohash.org/1` for user ID 1)

## Acceptance Criteria

- Display all users from JSONPlaceholder in a card format on the webpage.
- Each user card includes the user's name, username, email, and a unique robot avatar.
- Data loads automatically when the page loads.
- The webpage is hosted on a server and accessible to the public.
- Responsive, clean layout for easy viewing.

## License

This project is open-source and available under the MIT License.

---

### Acknowledgements

- [JSONPlaceholder](https://jsonplaceholder.typicode.com/) for providing free, sample user data.
- [RoboHash](https://robohash.org/) for generating unique robot avatars.
