# İncikent Gayrimenkul Backend

<!-- PROJECT LOGO -->
<div name="readme-top"  align="center">
  <a href="https://github.com/sefakrb/incikent-gayrimenkul-backend">
    <img src="uploads/incikent-gayrimenkul-logo.png" alt="Logo">
  </a>
</div>

<br />
<br />


<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
        <a href="#built-with">Built With</a>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>


## About The Project

  This website is for [İncikent Gayrimenkul](https://incikentgayrimenkul.sahibinden.com/) which is a real estate consultant in Ankara/Turkey


### Built With

* [![Nest][Nest.js]][Nest-url]
* [![Postgres][Postgres]][Postgres-url]


<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Getting Started

### Prerequisites

* npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/sefakrb/incikent-gayrimenkul-backend.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Create your own `.env` file as in `.env.example` file
   ```js
    DATABASE_URL="postgresql://postgres:PASSWORD@DOMAIN:PORT/DB-NAME"
    BACKEND_URL="localhost:8080/"
   ```
4. Generate Prisma Client
   ```js
    npx prisma generate
   ```
5. Build Setup 
   * Run on development mode
     ```sh
     npm run start
     ```
   
   * Run on watch mode
     ```sh
      npm run start:dev
     ```
     
   * Build for production and launch server
      ```sh
        npm run start:prod
      ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Contact
Sefa Karabaş - sefa799@gmail.com
Project Link: [https://github.com/sefakrb/incikent-gayrimenkul](https://github.com/sefakrb/incikent-gayrimenkul-frontend)

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[Nest.js]: https://img.shields.io/badge/nestjs-%23E0234E.svg?style=for-the-badge&logo=nestjs&logoColor=white
[Nest-url]: https://nestjs.com/
[Postgres]: https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white
[Postgres-url]: https://www.postgresql.org/
