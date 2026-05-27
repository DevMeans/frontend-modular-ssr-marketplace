# Frontend Marketplace SSR

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 21.1.4.

## Alcance

Proyecto dedicado al marketplace (SSR para SEO), migrado desde `../frontend`.

Rutas principales:

1. `/marketplace`
2. `/marketplace/products/:id`
3. `/marketplace/cart`
4. `/marketplace/checkout`

## Comandos

```bash
npm start                 # desarrollo
npm run build             # build SSR
npm run start:ssr         # ejecuta server SSR compilado
```

## Deploy (SSR separado)

Este proyecto requiere runtime Node.js porque renderiza en servidor.

1. Build command: `npm run build`
2. Start command: `npm run start:ssr`
3. Puerto: usar `PORT` provisto por la plataforma (el server Angular/Express ya lo soporta).

Se incluye `Procfile` para plataformas compatibles.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Vitest](https://vitest.dev/) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
