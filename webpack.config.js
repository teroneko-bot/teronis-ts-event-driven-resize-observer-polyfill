const path = require('path');
const DtsBundlePlugin = require("@teronis/webpack-dts-bundle");
const TsConfigPathsPlugin = require("tsconfig-paths-webpack-plugin");
const PackageFile = require("./package.json");
const nodeExternals = require('webpack-node-externals');

module.exports = {
  mode: "development",
  entry: PackageFile.module,
  devtool: "source-map",
  module: {
    rules: [{
        test: /\.tsx?$/,
        loader: ["babel-loader", "awesome-typescript-loader"]
      },
      {
        test: /\.js$/,
        use: ["source-map-loader"],
        enforce: "pre"
      }
    ]
  },
  externals: {
    "@teronis/ts-event-dispatcher": {
      commonjs: "@teronis/ts-event-dispatcher",
      commonjs2: "@teronis/ts-event-dispatcher",
      amd: "@teronis/ts-event-dispatcher",
      root: ["Teronis", "EventDispatcher"],
    }
  },
  output: {
    filename: path.basename(PackageFile.main),
    path: path.resolve(__dirname, path.dirname(PackageFile.main)),
    library: ["Teronis", "EventDrivenResizeObserver"],
    libraryTarget: "umd",
    umdNamedDefine: true
  },
  resolve: {
    modules: [path.join(__dirname, 'src'), "node_modules"],
    extensions: ["js", ".ts", ".tsx"],
    plugins: [new TsConfigPathsPlugin()]
  },
  plugins: [
    new DtsBundlePlugin({
      name: PackageFile.name,
      main: PackageFile.source,
      // prevents deleting <baseDir>/**/*.d.ts outside of <baseDir>
      baseDir: path.dirname(PackageFile.source),
      // absolute path to prevent the join of <baseDir> and <out>
      out: path.resolve(__dirname, PackageFile.types),
      removeSource: true,
      outputAsModuleFolder: true
    })
  ]
};