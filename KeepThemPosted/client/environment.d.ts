declare global {
  namespace NodeJS {
    interface ProcessEnv {
      LINKEDIN_CLIENT_ID: string;
      LINKEDIN_CLIENT_SECRET: string;
      LINKEDIN_SCOPE: string;
      LINKEDIN_REDIRECT_URI: string;
      NODE_ENV: "development" | "production";
      PORT?: number;
    }
  }
}

// If this file has no import/export statements (i.e. is a script)
// convert it into a module by adding an empty export statement.
export {};
