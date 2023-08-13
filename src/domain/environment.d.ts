declare global {
  namespace NodeJS {
    interface ProcessEnv {
      PORT: number;
      NODE_ENV: 'local' | 'production' | 'homolog';
      MONGO_HOST: string;
      MONGO_PORT: string;
      MONGO_USER: string;
      MONGO_PWD: string;
      MONGO_DB: string;
      MONGO_AUTH_SOURCE: string;
      REDIS_HOST: string;
      REDIS_PORT: number;
      REDIS_PASSWORD: string;
    }
  }
}

export {};
