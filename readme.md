# UlethClasses

UlethClasses is a web application built with the MERN (MongoDB, Express, React, Node.js) stack that simplifies the process of browsing and shortlisting courses at the University of Lethbridge.

Disclaimer: This project is a personal project created by students of the University of Lethbridge and is not directly associated with or endorsed by the University itself.

## Features

- Browse and search for available courses at the University of Lethbridge.
- Filter courses based on subject, department, level, and schedule.
- Shortlist and plan your preferred courses.
- User-friendly interface for easy navigation and course selection.

## Installation

1. Clone the repository:
   ```shell
   git clone https://github.com/your-username/ulethclasses.git
   ```

2. Install dependencies for the frontend and backend:
   ```shell
   cd ulethclasses
   cd client && npm install
   cd ../server && npm install
   ```

3. Configure the environment variables:
   - Create a `.env` file in the `server` directory.
   - Provide the necessary environment variables, such as database connection details, API keys, etc.

4. Start the development server:
   ```shell
   # From the root directory
   cd server && npm run dev
   cd ../client && npm start
   ```

## Contributing

Contributions are welcome! If you'd like to contribute to UlethClasses, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix: `git checkout -b feature-name`.
3. Make the necessary changes and commit them: `git commit -m "Add feature XYZ"`.
4. Push your changes to your forked repository: `git push origin feature-name`.
5. Submit a pull request to the main repository.

## License

This project is licensed under the [MIT License](LICENSE).

## Acknowledgments

- [University of Lethbridge](https://www.ulethbridge.ca/) for providing the course data.