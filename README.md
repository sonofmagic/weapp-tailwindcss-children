# weapp-tailwindcss-children

在小程序中使用 `child:`.`sibling`,`descendant`,`next` 这些 `variants` 来增强开发吧。

- [weapp-tailwindcss-children](#weapp-tailwindcss-children)
  - [Usage](#usage)
    - [Install](#install)
    - [Usage in `tailwind.config.js`](#usage-in-tailwindconfigjs)
  - [Cases](#cases)
    - [Child variant](#child-variant)
    - [Heir variant](#heir-variant)
    - [Sibling variant](#sibling-variant)
    - [Next variant](#next-variant)

## Usage

### Install

```sh
npm i -D weapp-tailwindcss-children
# or
yarn add -D weapp-tailwindcss-children
```

### Usage in `tailwind.config.js`

```js
const { plugin , createPlugin} = require('weapp-tailwindcss-children')
// use default
plugins:[
  plugin,
]
// use custom 
plugins:[
  createPlugin({
    fallbackElements:['view']
  }),
]
```

## Cases

### Child variant

直接子代选择器 `>`, [MDN Link](https://developer.mozilla.org/en-US/docs/Web/CSS/Child_combinator)

```html
<view class="p-4">
  <view>child variant</view>
  <view class="child:text-red-500 child:inline-block child:mr-2">
    <view class="not-child">not-child view</view>
    <view>view</view>
    <text>text</text>
    <view>view</view>
    <view>view</view>
  </view>
</view>
```

```html
<view class="p-4">
  <view>child-text variant</view>
  <view class="child-text:text-red-500 child-text:mr-2">
    <text>text</text>
    <text>text</text>
    <view>view</view>
  </view>
</view>
```

### Heir variant

后代选择器 `·`, [MDN Link](https://developer.mozilla.org/en-US/docs/Web/CSS/Descendant_combinator)

```html
<view class="p-4">
  <view>heir variant</view>
  <view class="heir:text-red-500 heir-text:text-green-500 heir:mr-2">
    <view class="not-heir">not-heir view</view>
    <view>view <view>inner view <text>inner text</text><text class="not-heir-text">not-heir inner text</text></view>
    </view>
    <text>text</text>
    <view>view</view>
    <view>view</view>
  </view>
</view>
```

### Sibling variant

通用兄弟选择器 `~`, [MDN Link](https://developer.mozilla.org/en-US/docs/Web/CSS/General_sibling_combinator)

```html
<view class="p-4">
  <view>Sibling variant</view>
  <view>
    <view>view</view>
    <view class="twin:text-green-500 before:content-['*']">twin:ring-white hover:twin:shadow</view>
    <view>view</view>
    <view>view</view>
  </view>
</view>
```

### Next variant

相邻兄弟选择器 `+`, [MDN Link](https://developer.mozilla.org/en-US/docs/Web/CSS/Adjacent_sibling_combinator)

```html
<view class="p-4">
  <view>Next variant</view>
  <view>
    <view>view</view>
    <view class="next:text-green-500 before:content-['*']">twin:ring-white hover:twin:shadow</view>
    <view class="next-view:text-yellow-500">view</view>
    <view class="next-text:text-red-500">view</view>
    <text>text</text>
  </view>
</view>
```
