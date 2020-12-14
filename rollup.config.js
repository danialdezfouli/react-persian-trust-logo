import filesize from "rollup-plugin-filesize";
import typescript from "rollup-plugin-typescript2";
import image from "@rollup/plugin-image";

const config = {
  input: ["src/index.ts"],
  output: {
    dir: "./dist",
    // format: "esm",
  },
  plugins: [
    image(),
    // images(),
    // static_files({
    //   include: ["./src"],
    // }),
    typescript({
      include: ["src/**/*.ts", "src/**/*.tsx"],
      tsconfigOverride: {
        compilerOptions: {
          declaration: true,
        },
      },
    }),

    filesize(),
    //
  ],
};

export default config;
