# NW.js Tray app example

This is an example project showing how to set up a tray "only" app using NW.js. I put "only" in quotes because there is an optional Window that can be shown (this is already set up in the example). Though by default the window is never seen, the app just launches and is placed in the tray of the OS.

Will work on Windows 7+, OSX 10.9+ and most Debian based Linux distros (such as Ubuntu). To target legacy OS's like XP+ and OSX 10.6+, change the `nw` version in the `package.json` to `0.14.7-sdk`.

## Run locally

1. Install [Node.js](https://nodejs.org)
1. `npm install`
1. `npm start`
