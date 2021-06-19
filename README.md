# Hordes reprex

## Setup

```
npm install
```

## Start

```
npm run dev
```

## RServe

Started RServe (1.8-8) manually with:

```
Rserve::Rserve(debug = TRUE, args = "--vanilla")
```

## R package to reproduce the issue

```
remotes::install_github("fmmattioni/reprexhordes)
```

## The issue

For some reason, calling a function from R that calls `readxl::read_excel()` messes up the output.

Works:

```
http://localhost:5000/api/v1/iris
```

It doesn't work:

```
http://localhost:5000/api/v1/iris/excel
```