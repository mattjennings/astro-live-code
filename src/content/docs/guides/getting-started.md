---
title: Getting Started
sidebar:
  order: 0
---

## Installation

```bash
npm install astro-live-code
```

## Config

Add the following to your `astro.config.mjs` file:

```js {2,7} title="astro.config.mjs"
import { defineConfig } from 'astro/config'
import liveCode from 'astro-live-code'

export default defineConfig({
  integrations: [
    // ... other integrations
    liveCode(),
  ],
})
```

## Usage

Add `live` to the end of your code block. If the language is renderable by your
Astro project (e.g. `jsx`, `svelte`, `vue`, etc.) it will be rendered as an
imported component.

````md
```html live
<button>hello world</button>
```
````

See [the next page](/guides/basic-usage) for more examples.
