import commonjs from 'rollup-plugin-commonjs';
import del from 'rollup-plugin-delete';
import json from 'rollup-plugin-json';
import resolve from 'rollup-plugin-node-resolve';
import external from 'rollup-plugin-peer-deps-external';
import sourceMaps from 'rollup-plugin-sourcemaps';
import { terser } from 'rollup-plugin-terser';
import typescript from 'rollup-plugin-typescript2';
import pkg from './package.json';

export default {
  input: `src/index.ts`,
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      sourcemap: 'inline',
      plugins: [terser()],
      exports: 'auto',
    },
    {
      file: pkg.module,
      format: 'es',
      sourcemap: 'inline',
      plugins: [terser()],
      exports: 'auto',
    },
    {
      file: 'dist/index.js',
      format: 'cjs',
      sourcemap: 'inline',
      exports: 'auto',
    },
  ],
  watch: {
    include: 'src/**',
  },
  plugins: [
    external(),
    // Allow json resolution
    json(),
    // Compile TypeScript files
    typescript({
      useTsconfigDeclarationDir: true,
      exclude: ['**/__tests__/**', '*.spec.*', '*.test.*'],
      clean: true,
    }),
    // Allow bundling cjs modules (unlike webpack, rollup doesn't understand cjs)
    commonjs(),
    // Allow node_modules resolution, so you can use 'external' to control
    // which external modules to include in the bundle
    // https://github.com/rollup/rollup-plugin-node-resolve#usage
    resolve(),
    // Resolve source maps to the original source
    sourceMaps(),
    del({
      targets: 'dist/*',
      hook: 'buildStart',
    }),
    del({
      targets: ['dist/index.test.d.ts', 'dist/index.test.d.ts.map'],
      hook: 'writeBundle',
    }),
  ],
};
