import { get } from 'env-var';

export interface EnvironmentVariables {
  environment: string;
  mongodb: string;
  port: number;
}

export const EnvConfiguration = () => ({
  environment: get('NODE_ENV').default('dev').asString(),
  mongodb: get('MONGODB').required().asString(),
  port: get('PORT').default(3000).asPortNumber(),
});

// El segundo parámetro 'true' (inferRequired) le indica a NestJS que las propiedades son requeridas,
// eliminando el 'undefined' si tu configuración las garantiza.
// private readonly configService: ConfigService<EnvironmentVariables, true>,
