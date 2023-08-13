declare global {
  namespace NodeJS {
    interface ProcessEnv {
      PORT: number;
      NODE_ENV: 'local' | 'production' | 'homolog';
      REDIS_HOST: string;
      REDIS_PORT: number;
      REDIS_PASSWORD: string;
    }
  }
}

export {};
