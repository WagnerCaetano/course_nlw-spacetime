<h1 align="center">
    <img alt="MyProject" title="MyProject" src=".github/myproject-logo.svg" />
</h1>
<p align="center">
  <a href="#-project">Project</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-technologies">Technologies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-implementation">Implementation</a>&nbsp;&nbsp;&nbsp;
</p>
<p align="center">
  <img alt="MyProject" src=".github/folder.jpeg" width="100%">
</p>
💻 Project
MyProject is a digital "time capsule" application designed to store and cherish precious memories. It provides users with a platform to capture and preserve significant moments, including photos, messages, and more, at various stages of life. The memories are beautifully organized chronologically and can be accessed seamlessly through a mobile application and a web interface.

🚀 Technologies
This project leverages the power of several cutting-edge technologies, including:

NEXT.js
Node.js
React
React Native
Expo
TypeScript
Tailwind CSS
Prisma (Database toolkit)
👥 GitHub Authentication
MyProject integrates GitHub authentication to provide a secure and seamless login experience for users. By utilizing GitHub authentication, users can easily sign in to MyProject using their existing GitHub credentials, ensuring a streamlined and hassle-free login process.

📝 Implementation
To implement MyProject, follow these steps:

Start by running npm install to install the necessary dependencies.
Add the required environment variables by referring to the example file env.example.
Create the SQLite database by executing npx prisma migrate dev --preview-feature.
Launch the server by running npm run dev.
For the web application:

Run npm install to install the required dependencies.
Configure the environment variables by referring to the example file env.local.example.
In the files src/lib.api.ts and next.config.js, update the IP address to match your local or production environment.
Start the development server by running npm run dev.
For the mobile application:

Install the necessary dependencies by running npm install.
Update the IP address in the file src/lib.api.ts to match your local or production environment.
Launch the application using npm run start.
Note: If you switch from the web to mobile or vice versa, make sure to update the environment variable on the server and restart it accordingly.

<br />
<h4>
    Created with ❤️ by <a href="https://www.linkedin.com/in/wagnercaetano/" target="_blank">Wagner Caetano</a>
</h4>
