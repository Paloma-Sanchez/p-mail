# How to call a method from a Vue child component from parent?

## Introduction

Communicating between Vue.js components can sometimes seem a little bit complicated. It is well-known that a child component can easily send data back to its parent using emits (with the `$emit` method). This can be used to call an event handler method on the parent and perform some work.

However, how can a parent component call a method on one of its child component? This might not always seem very clear, however, there are ways to do it! In this article, I will explain how to call a function from the parent to a child using the cleanest way that's available to us, by defining a `ref` value on the child component and using that `ref` to access the child component from our JavaScript/TypeScript and call the method.

Before we start, note that this method, while being the easiest and cleanest, requires the child component to be well-defined in advance. That is, we will pass a statically-defined ref property value to give a name to the component (pretty much like an identifier in the parent children components register). If you include the child component in a `v-for` loop, it will be trickier since you'll need to identify each child by its index.

## Solution

Let's say that we have a parent component called `Form`, which holds multiple `FormField` children. We would like to trigger a `focusField()` method on a specific `FormField` child component, for instance when the user clicks on a "next field" button.

### 1. Add a method to the child

Our `Form` component is defined as such:

```html
<template lang="html">
  <div class="form">
    <form-field v-model="firstName" name="first_name" />
    <form-field v-model="lastName" name="last_name" />
    <form-field v-model="email" name="email" />
    <form-field v-model="phone" name="phone" />
  </div>
</template>

<script lang="ts">
  export default {
    name: "Form"

    // [..]
  };
</script>
```

First, we would proceed defining the `focusField()` method on the `FormField` child component:

```html
<template lang="html">
  <input v-model="modelValue" :name="name" class="form-field" type="text" />
</template>

<script lang="ts">
  export default {
    name: "FormField",

    // [..]

    methods: {
      focusField(): void {
        // Focus on input defined in component
        this.$el.getElementsByTagName("input")[0].focus();
      }
    }

    // [..]
  };
</script>
```

### 2. Update the parent to reference each child

Then, we would need to identify each `FormField` component instance in our `Form` parent, using the `ref` property:

```html
<template lang="html">
  <div class="form">
    <form-field v-model="firstName" name="first_name" ref="field_first_name" />
    <form-field v-model="lastName" name="last_name" ref="field_last_name" />
    <form-field v-model="email" name="email" ref="field_email" />
    <form-field v-model="phone" name="phone" ref="field_phone" />
  </div>
</template>

<script lang="ts">
  export default {
    name: "Form"

    // [..]
  };
</script>
```

### 3. Call the method from the parent

Great job! Now that we added `ref` to each `FormField` instance, we can easily refer to them from our TypeScript. If you would like to focus on, say, the email field from the `Form` parent, you can call:

```typescript
// -- Run this code from a method in the Form parent: --

// Focus on input
(this.$refs.field_email as typeof FormField).focusField();
```

Note that since we use TypeScript, we need to specify that the `field_email` ref we are accessing to is of type `FormField`, otherwise the type checker will complain about the method `focusField()` not being defined on the component being referred to.

Also, make sure you import the `FormField` component into your TypeScript:

```typescript
// -- Add this import to your Form parent: --

import FormField from "@/components/form/FormField.vue";
```

If you were using JavaScript instead of TypeScript, the method call would be simpler, since you would not have to specify the type of the component being accessed:

```javascript
// -- Run this code from a method in the Form parent: --

// Focus on input
this.$refs.field_email.focusField();
```

That's it! In this article, we have seen how to call a method on a child component, from its parent, in a clean way.
