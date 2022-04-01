const { app, BrowserWindow, Menu } = require('electron');
const path = require('path');

let mainWindow;
let newWindow;

const mode = 'dev';

if (mode !== 'production') {
	require('electron-reload')(__dirname, {
		electron: path.join(__dirname, './node_modules', '.bin', 'electron'),
	});
}

const createWindow = () => {
	// Create the browser window.
	mainWindow = new BrowserWindow({
		width: 800,
		height: 600,
		icon: path.join(__dirname, 'logo2.png'),
	});

	const mainMenu = Menu.buildFromTemplate(templateMenu);

	Menu.setApplicationMenu(mainMenu);

	// and load the index.html of the app.
	mainWindow.loadURL(mode ? 'http://localhost:5000' : `file://${path.join(__dirname, './build/index.html')}`);

	// Open the DevTools.
	// mainWindow.webContents.openDevTools();
};

app.whenReady().then(() => {
	createWindow();

	app.on('activate', function () {
		// On macOS it's common to re-create a window in the app when the
		// dock icon is clicked and there are no other windows open.
		if (BrowserWindow.getAllWindows().length === 0) createWindow();
	});
});

app.on('window-all-closed', function () {
	console.log('Cerrando');
	if (process.platform !== 'darwin') app.quit();
});

const createNewWindow = () => {
	newWindow = new BrowserWindow({
		width: 400,
		height: 300,
		title: 'Nueva ventana',
	});

	newWindow.loadURL('http://localhost:5000');
};

const closeNewWindow = () => {
	mainWindow.close();
};

const templateMenu = [
	{
		label: 'File',
		submenu: [
			{
				label: 'New File',
				accelerator: 'Ctrl+N',
				click: function () {
					closeNewWindow();
				},
			},
		],
	},
];
