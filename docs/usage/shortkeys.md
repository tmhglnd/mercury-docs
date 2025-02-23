---
sidebar_position: 3
---

# 🩳 Short-keys

Mercury has various shortkeys that help you navigate the editor more quickly during live performances, both in the Mercury4Max as in the MercuryPlayground versions. 

:::warning Known issue
`alt + /` for non UK/US keyboards can be an issue, because the `/` is not a unique key but above the `7` so you need to use `shift`. This is fixed in the browser editor, but still has issues in Flok.
:::

:::info External Editor
When you use an external editor like Pulsar the `Overall Shortkeys` apply, but all other shortkeys for navigating and editting are based on the preferences of that editor.
:::

If you encounter any other issues please file a report via the steps in [Troubleshooting](troubleshooting).

- [Overall Shortkeys](#overall-shortkeys)
- [Shortkeys in Mercury4Max](#shortkeys-in-mercury4max)
- [Shortkeys in MercuryPlayground](#shortkeys-in-mercuryplayground)

## Overall Shortkeys

| Combination | Function |
| - | - |
| `Alt/Ctrl` `Enter` | Evaluate code |
| `Alt/Ctrl` `.` | Silence the sound |
| `Alt/Ctrl` `/` | (Un)Comment a line or multiple lines of code |

## Shortkeys in Mercury4Max

:::warning Windows
At the moment shortkeys are defaulted for Mac platforms, for Windows you can adjust them via the Settings.
:::

### Editor Navigation

| Keymap | Function |
| - | - |
| `Arrow Left`  | Move left one character |
| `Arrow Down`  | Go down one line |
| `Arrow Right` | Move right by one character |
| `Arrow Up`    | Go up one line |
| `Alt` `A` 	| Move left one character |
| `Alt` `S` 	| Go down one line |
| `Alt` `D` 	| Move right one character |
| `Alt` `W` 	| Go up one line |
| `Alt` `Arrow Up`    | Jump to the top of editor (end of the line) |
| `Alt` `Arrow Down`  | Jump to the end of editor (end of the line) |
| `Alt` `Arrow Left`  | Jump to the beginning of the line |
| `Alt` `Arrow Right` | Jump to the end of the line |
| `Alt` `,` | Disable/enable the editor |

### Editor Editing

Copy/Paste/Paste-Replace/Delete only works inside the editor. In order to input or output code to a different application you have to save the file as a `.txt` or open a `.txt` file from disk.

| Keymap | Function |
| - | - |
| `Alt` + `X` | Delete the line where the cursor is located |
| `Alt` + `C` | Copy the line where the cursor is located |
| `Alt` + `V` | Paste insert a line of code where the cursor is located |
| `Alt` + `P` | Paste replace a line where the cursor is located |

### Customize Shortkeys

You can customize the shortkeys by opening the `Setup Shortkeys` under `Settings` in the menubar. You can also reset to the default key commands. 

1. Select the key you would like to customize in the dropdown menu on the top.
2. Click `change keycommand`, it now displays `waiting for keys...`.
3. Hit the key combination you would like to use for this command and release the keys to store.
4. Check if stored correctly in the scroll-menu below. Every command displays the shortcut and keycode.

## Shortkeys in MercuryPlayground

### Menu Navigation

| Keymap | Function |
| - | - |
| (`Shift`) `Tab` | Move left/right through menu items |
| `Alt` (`Shift`) `Tab` | Move out of editor to menu |
| `Enter` | Select menu item |
| `Arrow Up` / `Arrow Down` | Go up/down through tutorials/sounds menu |

### Menu Items Quick Access

The following shortkeys only work when focused on the code editor. You can find these shortkeys also by keeping the mouse over the button for a short period until the tooltip appears.

| Keymap | Function |
| - | - |
| `Ctrl/Alt` `Shift` `E` | Empty editor |
| `Ctrl/Alt` `Shift` `X` | Load random example |
| `Ctrl/Alt` `Shift` `S` | Download code as text |
| `Ctrl/Alt` `Shift` `R` | Start/stop recording sound |
| `Ctrl/Alt` `Shift` `D` | Toggle dark/light display mode |
| `Ctrl/Alt` `Shift` `P` | Open help |
| `Ctrl/Alt` `Shift` `C` | Open flok.cc to collaborate |
| `Ctrl/Alt` `Shift` `A` | Add sounds | 
| `Ctrl/Alt` `Shift` `Z` | Toggle zen mode (hiding the menu) |
| `Ctrl/Alt` `Shift` `H` | Show/hide editor |
| `Ctrl/Alt` `Shift` `L` | Listen to all the sounds individually |

### Editor Navigation

| Keymap | Function |
| - | - |
| `Arrow Left`  | Move left one character |
| `Arrow Down`  | Go down one line |
| `Arrow Right` | Move right by one character |
| `Arrow Up`    | Go up one line |
| `Ctrl` `P` | Move up one line |
| `Ctrl` `N` | Move down one line |
| `Ctrl` `F` | Move forward one character to the right |
| `Ctrl` `B` | Move back one character to the left |
| `Ctrl` `A` | Jump to the beginning of the line |
| `Ctrl` `V` | Jump to last character in the code |
| `Cmd` `Arrow Down` | Jump to end of the code |
| `Cmd` `Arrow Up` | Jump to beginning of the code |

### Editor Editing

| Keymap | Function |
| - | - |
| `Cmd` `C` | Copy the selected code or if nothing selected copy the entire line |
| `Cmd` `V` | Paste whatever is currently in the clipboard |
| `Cmd` `Z` | Undo editing of the code | 
| `Cmd` `Shift` `Z` | Redo editing of the code | 
| `Alt` `Right` | Jump a word to the right |
| `Alt` `Left` | Jump a word to the left |
| `Ctrl` `O` | Enter a new line |
| `Cmd` `D` | Delete the entire line |
| `Ctrl` `D` | Delete character on the right |
| `Ctrl` `H` | Backspace character on the left |
| `Ctrl` `K` | Delete everything on right side of the cursor |