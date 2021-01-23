---
layout: post
title: "Adding extra arrow keys in macOS"
featured: false
---

With a lot of 60% keyboards it can be hard to access the arrow and navigation keys, so this is a guide how to add your own custom arrow keys with Karabiner Elements.

- Install [Karabiner Elements](https://karabiner-elements.pqrs.org/)
- Assign macOS Fn-key in simple modifications tab. You can use a different modifier key, but using the Fn-key avoids most remapping conflicts.
- Add a custom rule (shown below) as a json-file to `~/.config/karabiner/assets/complex_modifications`
- Enable custom rule in complex modifications tab.
- Done


*Complex rule JSON file:*

```json
{
  "title": "WASD & QE navigation keys",
  "rules": [
    {
      "description": "Fn + W/A/S/D to Arrow Keys",
      "manipulators": [
        {
          "type": "basic",
          "from": { "key_code": "w", "modifiers": { "mandatory": [ "fn" ], "optional": [ "any" ] } },
          "to": [ { "key_code": "up_arrow" } ]
        },
        {
          "type": "basic",
          "from": { "key_code": "a", "modifiers": { "mandatory": [ "fn" ], "optional": [ "any" ] } },
          "to": [ { "key_code": "left_arrow" } ]
        },
        {
          "type": "basic",
          "from": { "key_code": "s", "modifiers": { "mandatory": [ "fn" ], "optional": [ "any" ] } },
          "to": [ { "key_code": "down_arrow" } ]
        },
        {
          "type": "basic",
          "from": { "key_code": "d", "modifiers": { "mandatory": [ "fn" ], "optional": [ "any" ] } },
          "to": [ { "key_code": "right_arrow" } ]
        }
      ]
    },
    {
      "description": "Control + W/A/S/D to Arrow Keys",
      "manipulators": [
        {
          "type": "basic",
          "from": { "key_code": "w", "modifiers": { "mandatory": [ "control" ] } },
          "to": [ { "key_code": "up_arrow" } ]
        },
        {
          "type": "basic",
          "from": { "key_code": "a", "modifiers": { "mandatory": [ "control" ] } },
          "to": [ { "key_code": "left_arrow" } ]
        },
        {
          "type": "basic",
          "from": { "key_code": "s", "modifiers": { "mandatory": [ "control" ] } },
          "to": [ { "key_code": "down_arrow" } ]
        },
        {
          "type": "basic",
          "from": { "key_code": "d", "modifiers": { "mandatory": [ "control" ] } },
          "to": [ { "key_code": "right_arrow" } ]
        }
      ]
    },
    {
      "description": "Fn + Q/E to pgup/pgdn",
      "manipulators": [
        {
          "from": { "key_code": "q", "modifiers": { "mandatory": [ "fn" ], "optional": [ "any" ] } },
          "to": [ { "key_code": "page_up" } ],
          "type": "basic"
        },
        {
          "type": "basic",
          "from": { "key_code": "e", "modifiers": { "mandatory": [ "fn" ], "optional": [ "any" ] }
          },
          "to": [ { "key_code": "page_down" } ]
        }
      ]
    },
    {
      "description": "FN + Shift + Q/E to Home/End",
      "manipulators": [
        {
          "type": "basic",
          "from": { "key_code": "q", "modifiers": { "mandatory": [ "fn", "right_shift" ], "optional": [ "any" ] } },
          "to": [ { "key_code": "home" } ]
        },
        {
          "type": "basic",
          "from": { "key_code": "e", "modifiers": { "mandatory": [ "fn", "right_shift" ], "optional": [ "any" ] } },
          "to": [ { "key_code": "end" } ]
        }
      ]
    }
  ]
}
```
