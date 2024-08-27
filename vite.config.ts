import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import svgr from "vite-plugin-svgr";
import dts from "vite-plugin-dts"
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  esbuild: {
    jsxInject: `import React from 'react'`,
  },
  plugins: [
    react(),
    svgr(),
    dts({
      insertTypesEntry: true,
    }),
    tsconfigPaths(),
  ],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.tsx'),
      name: '@idle/todo-vite',
      formats: ['es', 'cjs'],
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      external: [
        'react',
        'react-dom',
        'styled-components',
      ],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          'styled-components': 'styled',
        },
        banner: '"use client";',
        interop: 'compat',
      },
    },
    ssr: false,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src/"),
      '@idle/todo-vite': path.resolve(__dirname, 'node_modules/@idle/todo-vite/dist'),
      components: path.resolve(__dirname, "src/components/*"),
      stores: path.resolve(__dirname, "src/stores/*"),
      styles: path.resolve(__dirname, "src/styles/*"),
    },
  },
});
