# Tabled

This module activates the "[https://github.com/Lullabot/tabled](Tabled)" plugin
to attempt to transform data tables in your content to be more accessible.

## Installation

 - Install this module and its dependencies using the official
  [Backdrop CMS instructions](https://backdropcms.org/guide/modules)

## Usage

  - There are currently no configuration options via the UI. Simply enable the
  module to activate the plugin. Activation will be attempted for all tables
  except those that have been given the class `untabled`, only on non-admin
  pages.
  - If the table cannot be converted into Tabled format due to unmet
  requirements or faulty HTML code, it will be given the class `tabled--stacked`
  and displayed using "Stacked rows" mode on smaller widths.
  - Tabled uses some CSS custom properties / variables that can be overridden in
  your theme or custom CSS.

```
:root {
  // This is the width for most columns, adjust this value as needed.
  --tabled-column-min-width: 163px;
  // If the cell height surpasses the threshold, the width is changed to this
  // larger size. (using JS)
  --tabled-column-min-width-large: 300px;
  --tabled-column-min-width-small: 80px;

  --tabled-v-space-4xs: 1rem;
  --tabled-v-space-3xs: 1.5rem;
  --tabled-v-space-2xs: 2rem;
  --tabled-v-space-xs: 2.5rem;
  --tabled-v-space-s: 3rem;

  --tabled-color-white: #ffffff;
  --tabled-color-black: #000000;
  --tabled-color-50: #f6f8f9;
  --tabled-color-150: #dde4e9;
  --tabled-color-500: #3f6076;
  --tabled-color-600: #19405b;
  --tabled-color-700: #15354c;
  --tabled-color-ascent: #e0a624;
  --tabled-color-focus: #3d8eff;
  --tabled-color-disabled: #a1a1a1;
  --tabled-color-border: var(--tabled-color-700);
}
```

## Issues

Bugs, UI-config requests and other feature requests should be reported in the
[Issue Queue](https://github.com/backdrop-contrib/tabled/issues)

## Current Maintainers

 - [Laryn Kragt Bakker](https://github.com/laryn)
 - Collaboration and co-maintainers welcome!

## Credits

 - Created for Backdrop CMS by [Laryn Kragt Bakker](https://github.com/laryn)
 - Backdrop development is supported by [Aten Design Group](https://aten.io)
 - The Tabled plugin was developed and is maintained by a team at
 [Lullabot](https://lullabot.com), including
 [Javier Reartes](https://github.com/javi-er),  Stephanie Ganzer and Kat Shaw.
 The plugin is released under the GPL v3 license.

## License

This project is GPL v3 software. See the LICENSE.txt file in this directory for
complete text.
