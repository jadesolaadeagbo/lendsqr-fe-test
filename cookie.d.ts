declare module "js-cookie" {
    interface CookieAttributes {
      expires?: number | Date;
      path?: string;
      domain?: string;
      secure?: boolean;
      sameSite?: "Strict" | "Lax" | "None";
    }
  
    const Cookies: {
      get: (name: string) => string | undefined;
      set: (name: string, value: string, options?: CookieAttributes) => void;
      remove: (name: string) => void;
    };
  
    export default Cookies;
  }
  