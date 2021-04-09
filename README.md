<p align="center">
<a href="https://transparencia.vlass.dev/" target="_blank"><img src="/static/icon.png" width="97"></a>
</p>
<p align="center">
<a href="https://github.com/vlasscontreras/transparencia/actions/workflows/ci.yml"><img src="https://github.com/vlasscontreras/transparencia/actions/workflows/ci.yml/badge.svg?branch=main" alt="Build Status"></a>
</p>

## About

This is an experimental/sandbox site to test Tailwind's JIT development, Nuxt's proxies, and Vercel's rewrites.

The [El Salvador Transparency API](https://www.transparencia.gob.sv/api/v1/home) was the perfect API to test proxies since their server does not have a CORS header, causing direct requests to fail.

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).
