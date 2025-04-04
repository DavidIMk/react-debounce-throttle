import peerDepsExternal from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import terser from "@rollup/plugin-terser";
import pkg from './package.json' assert { type: 'json' };

export default {
  input: "src/index.ts", // Entry point of your library
  output: [
    {
      file: pkg.main, // CommonJS build output (e.g., "dist/index.cjs.js")
      format: "cjs",
      sourcemap: true,
    },
    {
      file: pkg.module, // ES Module build output (e.g., "dist/index.esm.js")
      format: "esm",
      sourcemap: true,
    },
  ],
  plugins: [
    peerDepsExternal(),
    resolve(),
    commonjs(),
    typescript({ tsconfig: "./tsconfig.json" }),
    terser(),
  ],
  external: ["react", "react-dom"], // Ensure these remain external
};
