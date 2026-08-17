<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Project setup

1. Clonar el repositorio
2. Ejecutar

```
yarn install
```

3. Tener Nest CLI instalado

```
npm i -g @nestjs/cli
```

4. Levantar la base de datos

```
docker-compose up -d
```

## Compile and run the project

```

5. Reconstruir base de datos semilla

```

http://localhost:3000/api/v2/seed

```

## Compile and run the project

```

# development

yarn run start

# watch mode

yarn run start:dev

# production mode

yarn run start:prod

```

## Stack

- MongoDB
- NEST
```

# Production build

1. Crear el archivo `.env.prod`
2. Llenar las variables de entorno de producción.
3. Crear la nueva imagen:

```
docker-compose -f docker-compose.prod.yaml --env-file .env-prod up -- build -d
```

4. Levantar imagen si ya esta creada:

```
docker-compose -f docker-compose.prod.yaml --env-file .env.prod up -d
```
