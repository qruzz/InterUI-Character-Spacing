# InterUI Dynamic Metrics

A Sketch plugin that adjusts the character spacing on text layers using the beautiful InterUI fonts (https://rsms.me/inter/) to what it would be when used in the app.

## Installing

To install this plugin manually, download the latest release from [here](https://github.com/qruzz/InterUI-Character-Spacing/releases), unzip the file, and double click on the `.sketchplugin`

### Using Sketch Runner

With Sketch Runner, just go to the `install` command and search for `InterUI Character Spacing`. Runner allows you to manage plugins and do much more to speed up your workflow in Sketch. [Download Runner here](http://www.sketchrunner.com).

## Why use this plugin?

There is of course no absolute right or wrong when it comes to expressing yourself with typography, but Inter UI _Dynamic Metrics_ provides guidelines for good typography. You simply provide the optical font size, and the tracking and leading is calculated for you to produce the best results.

... and it is better to use a hotkey to correct the character spacing, rather than doing it manually every time.

## How

Just select the text layers that have InterUI fonts being used - you can select more than one layer at a time) and run the script (You can use Sketch Runner for this (> Correct Character Spacing)). The plugin will then set the correct spacing based on the current font size. If you change that layer's font size you will need to re-run the script on that layer.

## Keyboard Shortcut

(Ctrl+Shift+Cmd+T) If you want it to be something different you can technically edit the manifest.json file in the plugin.
