declare namespace NodeJS {
  interface ProcessEnv {
    DEBUGGING: boolean;
    APP_PORT: string;
    APP_URL: string;
  }
}
