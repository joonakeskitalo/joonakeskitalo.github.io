---
layout: post
title: "Using CSS Variables and differences between them and SASS variables"
featured: false
---

The difference between CSS variables and SASS variables are that CSS variables are passed as is to the client and they're interpreted by the client browser, while with SASS the preprocessor inserts the value of the variable into the CSS. 

For example, in the example below the value of *background-color* with SASS will be #*F7F7F7* and *var(--base-color)* with plain CSS.

```css
/* SASS */
$base-color: #F7F7F7;

.element {
	background-color: $base-color;
}
```

```
/* CSS */
:root {
	--base-color: #F7F7F7;
}

.element {
	background-color: var(--base-color);
}
```

<br/>

Using plain CSS variables has the benefit of being able to reassing values with media queries or JavaScript without having to write separate class definitions. Advanced animations and theming also become much easier and simpler to implement.

```css
:root {
	--font-size: 11pt;
}

@media screen and (min-width: 1500px) {
	--font-size: 13pt;
}
```

<br/>

___

**Sources:**

- [W3Schools: CSS3 variables](https://www.w3schools.com/css/css3_variables.asp)
- [MDN docs: Using CSS custom properties](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties)
- [sass-lang.com: variables ](https://sass-lang.com/documentation/variables)
- [FreeCodeCamp: everything you need to know about CSS variables](https://www.freecodecamp.org/news/everything-you-need-to-know-about-css-variables-c74d922ea855/)
