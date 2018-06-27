// Create a tray icon
let tray = new nw.Tray({
  title: 'Tray',
  tooltip: 'Tray App is running',
  icon: 'assets/icon.png'
});

// Give it a menu
let menu = new nw.Menu();

let itemChecked = true;

// Create an array of the items to be placed in the menu
let menuItems = [
  {
    type: 'checkbox',
    label: 'Checkbox',
    checked: itemChecked,
    click: function () {
      itemChecked = !itemChecked;
      console.log(itemChecked);
    }
  },
  {
    type: 'normal',
    label: 'Open Dev Tools',
    click: function () {
      nw.Window.get().showDevTools();
    }
  },
  {
    type: 'normal',
    label: 'Show Window',
    click: function () {
      nw.Window.get().show();
    }
  },
  {
    type: 'normal',
    label: 'Hide Window',
    click: function () {
      nw.Window.get().hide();
    }
  },
  {
    type: 'separator'
  },
  {
    type: 'normal',
    label: 'Exit',
    click: function () {
      nw.Window.get().close();
    }
  }
];

// Append all menu items to the menu
menuItems.forEach(function (item) {
  menu.append(new nw.MenuItem(item));
});

// Place the menu in the tray
tray.menu = menu;
