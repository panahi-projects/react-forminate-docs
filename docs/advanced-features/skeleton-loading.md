---
sidebar_position: 4
draft: true
---

# Skeleton Loading

The `GridViewField` in `react-forminate` supports dynamic API-driven data loading with flexible pagination strategies. This document covers how to configure various real-world scenarios using the `dynamicOptions.pagination` object.

---

## 🔧 Props Reference

### **Base Props (From `BaseField`)**

| Prop Name            | Type                  | Description                         |
| -------------------- | --------------------- | ----------------------------------- |
| `fieldId`            | `string`              | Unique identifier for the field.    |
| `label`              | `string`              | Label for the field.                |
| `disabled`           | `boolean`             | Indicates if the field is disabled. |
| `required`           | `boolean`             | Whether the field is required       |
| `className`          | `string`              | Class for the grid container        |
| `styles`             | `React.CSSProperties` | Inline styles for grid container    |
| `itemsClassName`     | `string`              | Class for individual grid items     |
| `itemsStyles`        | `React.CSSProperties` | Inline styles for grid items        |
| `containerClassName` | `string`              | Class for the entire field wrapper  |
| `containerStyles`    | `React.CSSProperties` | Styles for field wrapper            |

### **`dynamicOptions` (Advanced API Fetching)**

| Prop Name           | Type                          | Description                                                         |
| ------------------- | ----------------------------- | ------------------------------------------------------------------- |
| `endpoint`          | `string`                      | API endpoint to fetch data. Can include `{{fieldId}}` placeholders. |
| `method`            | `"GET"` or `"POST"`           | HTTP method (default: `"GET"`).                                     |
| `dependsOn`         | `string` or `string[]`        | Re-fetch when dependent field(s) change.                            |
| `params`            | `Record<string, string>`      | Query parameters (supports `{{fieldId}}` interpolation)             |
| `headers`           | `Record<string, string>`      | Optional custom headers.                                            |
| `transformResponse` | `(res) => { label, value }[]` | Function to transform API response.                                 |
| `resultPath`        | `string`                      | Path to extract list (e.g., `data.items`).                          |
| `fetchOnInit`       | `boolean`                     | Whether to fetch on mount (default: `true`).                        |

### **`pagination` (Dynamic Pagination)**

| Prop           | Type                 | Description                                          |
| -------------- | -------------------- | ---------------------------------------------------- |
| `limit`        | `number`             | Items per page (default: 10)                         |
| `maxPage`      | `number`             | Optional max page limit                              |
| `pageKey`      | `string`             | Key for page (default: "page")                       |
| `limitKey`     | `string`             | Key for limit (default: "limit")                     |
| `skipKey`      | `string`             | If using skip-based pagination                       |
| `pageMode`     | `"page"` or `"skip"` | Whether to use page or skip mode                     |
| `startPage`    | `number`             | Starting page (default: 1)                           |
| `metadataPath` | `string`             | Optional: extract total/totalPages from API metadata |
