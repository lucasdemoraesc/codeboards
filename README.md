<div>
    <h1 align="center">
        <img src="./app/public/favicon.svg" width="24" draggable=false>
        Codeboards
    </h1>
    <h3 align="center">Simple task boards for programming projects. That's it.</h3>
    <p align="center">🚧  This is under construction  🚧</p>
    <p align="center">
        <a href="https://github.com/baptisteArno/typebot.io/blob/main/LICENSE"><img src="https://img.shields.io/badge/license-AGPL-blue" /></a>
    </p>
	<hr>
</div>

<br>

## 🏗️ Local setup

1. Clone the repo

   ```sh
   git clone https://github.com/lucasdemoraesc/codeboards.git
   ```

2. Install dependencies

   ```sh
   cd codeboards
   yarn install
   ```

3. Set up environment variables

    Copy [`app/.env.example`](./app/.env.example) to `app/.env`

    Copy [`packages/prisma/.env.example`](./packages/prisma/.env.example) to `packages/prisma/.env`

4. Make sure you have [Docker](https://docs.docker.com/compose/install/) installed and running
5. Setup the database

    ```sh
   yarn dev:setup
   ```

6. Start the application

    ```sh
   yarn dev:app
   ```
   _Available at **[`http://localhost:3000`](http://localhost:3000)**_

7. [Optional] Run Prisma Studio to access the database

    ```sh
   yarn db:inspect
   ```
    _Available at **[`http://localhost:5555`](http://localhost:5555)**_

## ✨ Inspiration

This is a solution for study purposes, heavily inspired by the [Typebot](https://github.com/baptisteArno/typebot.io) implementation by [@baptisteArno](https://github.com/baptisteArno/).
