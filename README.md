## Example showing effects of splitChunks name field

* git clone git@github.com:TLadd/webpack4-splitChunks-test.git
* yarn
* yarn build

Two webpack configs are present in https://github.com/TLadd/webpack4-splitChunks-test/blob/master/webpack.prod.js. Comment one out and compare results.

```
module.exports = {
  mode: "production",
  optimization: {
    splitChunks: {
      chunks: "all",
      name: "vendors"
    }
  }
};

     Asset      Size  Chunks                    Chunk Names
vendors.js  1.36 MiB       0  [emitted]  [big]  vendors
   main.js  4.89 KiB       1  [emitted]         main
```

```
module.exports = {
  mode: "production",
  optimization: {
    splitChunks: {
      chunks: "all"
    }
  }
};

                Asset      Size  Chunks                    Chunk Names
vendors~highcharts.js   201 KiB       0  [emitted]         vendors~highcharts
    vendors~zxcvbn.js   799 KiB       1  [emitted]  [big]  vendors~zxcvbn
      vendors~main.js   389 KiB       2  [emitted]  [big]  vendors~main
              main.js  5.62 KiB       3  [emitted]         main
```
