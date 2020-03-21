const path = require('path');
const webpack = require('webpack');
const InertEntryPlugin = require('inert-entry-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require("html-webpack-plugin")
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const RemovePlugin = require('remove-files-webpack-plugin');
const ZipPlugin = require('zip-webpack-plugin');

const pkg = require('./package.json');

const ASSET_EXTENSIONS = ['jpg', 'jpeg', 'png', 'gif', 'eot', 'otf', 'svg', 'ttf', 'woff', 'woff2'];

const manifest_filename = path.join(__dirname, "src", "manifest.json");
const pages_folder = path.join(__dirname, "src", "pages");
const dist_folder = path.join(__dirname, "dist", "extension", "maoxian-web-clipper");

config = {
  mode: process.env.NODE_ENV || "development",
  entry: {
    manifest: manifest_filename,
    background: path.join(__dirname, "src", "js", "background.js"),
    popup: path.join(pages_folder, "popup.js"),
    history: path.join(pages_folder, "history.js"),
    home: path.join(pages_folder, "home.js"),
    'last-clipping-result': path.join(pages_folder, "last-clipping-result.js"),
    'plan-subscription': path.join(pages_folder, "plan-subscription.js"),
    'reset-history': path.join(pages_folder, "reset-history.js"),
  },
  output: {
    filename: (chunkData) => {
      if (chunkData.chunk.name == "manifest") {
        return "manifest.json";
      } else {
        return "[name].[contenthash:8].js"
      }
    },
    path: dist_folder
  },
  module: {
    rules: [
      {
        test: manifest_filename,
        use: [
          '@altairwei/collect-loader',
          'interpolate-loader'
        ]
      },
      {
        test: /\.html$/,
        use: [
          'file-loader?name=[name].[ext]',
          'extract-loader',
          {
            loader: 'html-loader',
            options: {
              esModule: true,
              attrs: [
                'link:href',
                'img:src'
              ]
            }
          }
        ]
      },
      {
        test: /\.css$/,
        use: [
          'file-loader?outputPath=css',
          'extract-loader',
          'css-loader',
        ]
      },
      {
        test: new RegExp('\.(' + ASSET_EXTENSIONS.join('|') + ')$'),
        use: [
          'file-loader?outputPath=assets'
        ]
      },
    ]
  },
  plugins: [
    // This is required to use manifest.json as the entry point.
    new InertEntryPlugin(),
    new HtmlWebpackPlugin({
      template: path.join(pages_folder, "background.html"),
      filename: "background.html",
      chunks: ["background"]
    }),
    new HtmlWebpackPlugin({
      template: path.join(pages_folder, "popup.html"),
      filename: "popup.html",
      chunks: ["popup"]
    }),
    new HtmlWebpackPlugin({
      template: path.join(pages_folder, "history.html"),
      filename: "history.html",
      chunks: ["history"]
    }),
    new HtmlWebpackPlugin({
      template: path.join(pages_folder, "home.html"),
      filename: "home.html",
      chunks: ["home"]
    }),
    new HtmlWebpackPlugin({
      template: path.join(pages_folder, "last-clipping-result.html"),
      filename: "last-clipping-result.html",
      chunks: ["last-clipping-result"]
    }),
    new HtmlWebpackPlugin({
      template: path.join(pages_folder, "plan-subscription.html"),
      filename: "plan-subscription.html",
      chunks: ["plan-subscription"]
    }),
    new HtmlWebpackPlugin({
      template: path.join(pages_folder, "reset-history.html"),
      filename: "reset-history.html",
      chunks: ["reset-history"]
    }),
    // Clean dist/extension/maoxian-web-clipper before every build.
    new CleanWebpackPlugin(),
    new CopyPlugin([
      { from: 'src/_locales/en',    to: path.join(dist_folder, '_locales/en') },
      { from: 'src/_locales/zh-CN', to: path.join(dist_folder, '_locales/zh-CN') },
    ]),
    new webpack.ProvidePlugin({
      browser: 'webextension-polyfill'
    }),
  ],
}

if (process.env.NODE_ENV == "production") {
  const zipfile = `${pkg.name}-${pkg.version}.zip`
  config.plugins.push(
    // Remove last zip files
    new RemovePlugin({
      before: {
        root: path.resolve('dist', 'extension'),
        include: [
          zipfile
        ]
      }
    }),
    // Compress dist/extension/maoxian-web-clipper
    // Both .xpi and .crx are zip file, so we only need to create one file
    new ZipPlugin({
      // Relative to Webpack output path
      path: '../',
      filename: zipfile,
    })
  )
}

module.exports = config