// Same splitChunks as CRA
// module.exports = {
//   mode: "production",
//   optimization: {
//     splitChunks: {
//       chunks: "all",
//       name: "vendors"
//     }
//   }
// };

// No name specified (defaults to true)
module.exports = {
  mode: "production",
  optimization: {
    splitChunks: {
      chunks: "all"
    }
  }
};
