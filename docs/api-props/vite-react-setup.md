---
sidebar_position: 2
draft: true
---

# Vite + React Setup

The `GridViewField` in `react-forminate` supports dynamic API-driven data loading with flexible pagination strategies. This document covers how to configure various real-world scenarios using the `dynamicOptions.pagination` object.

---

## 🔄 Pagination Strategies

The library supports **two main pagination modes**:

### `skip`-based pagination (a.k.a. offset/limit)

Used when the API expects `skip` and `limit` query parameters.

```ts
pagination: {
  pageMode: "skip",    // Pagination mode ("skip" or "page")
  skipKey: "skip",     // The key used in the query string for skip
  limitKey: "limit",   // The key used for limit
  startPage: 1,        // Starting page number (used to calculate skip = (page - 1) * limit)
  limit: 10             // Number of items per page
}
```

#### ✅ Example API

Endpoint: `https://dummyjson.com/products`<br />
_Final Request: `https://dummyjson.com/products?skip=4&limit=4`_

**Configuration Example**

```ts
{
  fieldId: "products",
  label: "Products",
  type: "gridview",
  dynamicOptions: {
    endpoint: "https://dummyjson.com/products",
    resultPath: "products", // where the list exists in response
    pagination: {
      pageMode: "skip",
      skipKey: "skip",
      limitKey: "limit",
      startPage: 1,
      limit: 4
    },
    transformResponse: (res) => res.map((item) => ({
      label: item.title,
      value: item.id,
      image: item.thumbnail,
      price: item.price
    }))
  }
}
```

### `page`-based pagination

Used when the API expects `page` and `per_page` (or similar) query parameters.

```ts
pagination: {
  pageMode: "page",        // Pagination mode ("skip" or "page")
  pageKey: "page",         // Query param for page number
  limitKey: "per_page",    // Query param for page size
  startPage: 1,            // Page indexing (usually 1)
  limit: 4                 // Number of items per page
}
```

#### ✅ Example API

Endpoint: `https://reqres.in/api/users`<br />
_Final Request: `https://reqres.in/api/users?page=2&per_page=4`_

**Configuration Example**

```ts
{
  fieldId: "users",
  label: "Users",
  type: "gridview",
  dynamicOptions: {
    endpoint: "https://reqres.in/api/users",
    resultPath: "data", // where the list exists in response
    pagination: {
      pageMode: "page",
      pageKey: "page",
      limitKey: "per_page",
      startPage: 1,
      limit: 4
    },
    transformResponse: (res) => res.map((item) => ({
      label: item.first_name + " " + item.last_name,
      value: item.id,
      image: item.avatar
    }))
  }
}
```
