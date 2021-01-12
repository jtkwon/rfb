import resolve from "@rollup/plugin-node-resolve";

export default {
  input: "src/index.js",
  output: [
    {
      format: "cjs",
      file: "./dist/index.cjs.js",
      sourcemap: false
    },
    {
      format: "es",
      file: "./dist/index.es.js",
      sourcemap: false
    }
  ],
  external: ["react", "prop-types", "@material-ui/core", "@material-ui/icons"],
  plugins: resolve({ extensions: [".js", ".jsx"] })
};
