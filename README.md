# vuejs-click-to-copy
Click tag and add text to your clipboard

### How to use
Add code from `click_copy_vue.js` to your directive section. See [guide](https://vuejs.org/v2/guide/custom-directive.html)
```html
<html-tag v-click-copy>This text will be copied</html-tag>
```
or
```html
<html-tag v-click-copy='"This text will be copied"'>This text will not be copied</html-tag>
```

### Not Vuejs user
Add code from `click_copy_raw.js` to your javascript section.
```html
<html-tag class="click-copy">This text will be copied</html-tag>
```
