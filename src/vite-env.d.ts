/// <reference types="vite/client" />
/// <reference types="vite-plugin-svgr/client" /> 

// declare namespace NodeJS {
//     interface ProcessEnv {
//       NODE_ENV: 'development' | 'production';
//       VITE_ENV: string;
//       VITE_KEYCLOAK_URL: string;
//       VITE_KEYCLOAK_REALM: string;
//       VITE_KEYCLOAK_CLIENT_ID: string;
//       VITE_API_URL: string;
//     }
//   }

// REACT_APP_API_URL = 'xxxx' => VITE_API_URL = 'xxxx'
// const env = process.env.NODE_ENV => const env = import.meta.env.NODE_ENV