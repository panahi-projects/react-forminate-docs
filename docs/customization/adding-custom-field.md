---
sidebar_position: 3
---

# Adding Custom Fields

The `GridViewField` in `react-forminate` supports dynamic API-driven data loading with flexible pagination strategies. This document covers how to configure various real-world scenarios using the `dynamicOptions.pagination` object.

---

### 🧩 Customization & Styling

- Use className, itemsClassName, containerClassName to apply Tailwind or CSS classes.
- Use styles, itemsStyles, containerStyles to pass inline styles.
- Apply hover effects using itemsClassName:

```ts
itemsClassName: "hover:shadow-lg transition-all";
```

### 🧠 Dynamic Dependencies

Use placeholders in endpoint or params that map to form values:

```ts
dynamicOptions: {
  endpoint: "https://api.example.com/products?category={{categoryId}}",
  dependsOn: "categoryId"
}
```

You can even provide multiple dependencies:

```ts
dynamicOptions: {
  endpoint: "https://api.example.com/products?category={{categoryId}}&brand={{brandId}}",
  dependsOn: ["categoryId", "brandId"]
}
```

### 🔁 Response Transformation

Transform raw API responses into `label/value` format:

```ts
transformResponse: (res) =>
  res.map((item) => ({
    label: item.name,
    value: item.code,
    image: item.imageUrl,
  }));
```

Use `resultPath` to drill into nested data:

```ts
resultPath: "data.items";
```

### 🧭 Event Handling

GridView supports custom event handlers through `BaseField`, including:

```ts
onCustomClick
onCustomMouseEnter
onCustomBlur
onCustomKeyDown
...
```

Each receives the full fieldId, values, and schema.

### ✅ Validation

You can apply standard validation using the validation array:

```ts
validation: [
  { required: true, message: "Selection required" },
  { custom: (val) => typeof val === "number" && val > 0 },
];
```

### 💬 Tips

- Want to limit API calls? Set `fetchOnInit`: `false` and trigger with dependencies.
- You can combine `dependsOn` with `params` to create smart filters.
- Supports `image`, `label`, `price`, and any other custom fields.

### 📎 Integration Checklist

- ✅ Wrap your form with `FormProvider`
- ✅ Use type: `"gridview"` in your schema
- ✅ Provide `dynamicOptions` to fetch and transform data
- ✅ Customize using styles or classes
- ✅ Handle pagination with `pageMode`, `skipKey`, `limitKey`, etc.

---

Need help or want to contribute?

→ Visit [GitHub](https://github.com/panahi-projects/react-forminate/tree/main) <br/>
→ Submit an issue or open a PR!
