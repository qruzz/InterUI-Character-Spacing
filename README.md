# InterUICharacterSpacing

[![Build Status](https://travis-ci.org/qruzz/InterUI-Character-Spacing.svg?branch=master)](https://travis-ci.org/qruzz/InterUI-Character-Spacing)

A Sketch plugin that adjusts the character spacing on text layers using the beautiful InterUI fonts (https://rsms.me/inter/) to what it would be when used in the app.

## Install with Sketch Runner
With Sketch Runner, just go to the `install` command and search for `InterUI Character Spacing`. Runner allows you to manage plugins and do much more to speed up your workflow in Sketch. [Download Runner here](http://www.sketchrunner.com).

![Sketch Runner screenshot](https://lh3.googleusercontent.com/tfJ-oQh_riLctI6bGkBR1-Mh4vypR2YR2jqsf8AEf5lM1qcdCsEOF-lSyWjpl4Tee9VUTwCp1SerP4cN7zSC-wc0Sn7V0dfsOao0NEUgGnffB0Ox4r8bV3pzwUbSWgzWGeVjlq_CfPTbvKlAOMs1qFv80UhH4L6-sBMj329aM_iyzkqENYNSOGmSskRTTn0HjHDkEsxWDdLblAAVmppiboLjBxWitnL4FV1uztlPsPhWS7_2dKLoCEjozs6SelTF89xEo4rSUBQRxEVc7Gm-cVEXPTZuvBWsoHIZ3RTqHmYvx7RdOPQbWBd-rupaG70oXuZCYvCUtrKc8Q0yn0k3OM5VmvDA4GXoSRHY9ze_IdzxugYx9gAK2XEp5zEhXiJEEQg-ZZwMffh_lHIdG872GCb0WlMdG2YaZI0sfzKXQNGhg2L29cwbO_rXRRMRXy6mEWQzxSGCOUP1b6mI-hWuY3F-V-fQ_MC9erlGrcm279mXxT2WsZnd2cIFhpMrcFCCb4Q8O-NUN_6YfNedyy5arG5dGfhO_f5x-6340z2NmZuiseiEMMmRgLITiNAiF6L4JTEXxbKDYkdEjAf5z2uTw7JZ_Bk2h9TGvBsIjS2M=w1631-h909-no)

## Why use this plugin?
There is of course no absolute right or wrong when it comes to expressing yourself with typography, but Inter UI *Dynamic Metrics* provides guidelines for good typography. You simply provide the optical font size, and the tracking and leading is calculated for you to produce the best results.

... and it is better to use a hotkey to correct the character spacing, rather than doing it manually every time.

## How
Just select the text layers that have InterUI fonts being used - you can select more than one layer at a time) and run the script (You can use Sketch Runner for this (> Correct Character Spacing)). The plugin will then set the correct spacing based on the current font size. If you change that layer's font size you will need to re-run the script on that layer.

## Keyboard Shortcut
(Ctrl+Shift+Cmd+T) If you want it to be something different you can technically edit the manifest.json file in the plugin.
