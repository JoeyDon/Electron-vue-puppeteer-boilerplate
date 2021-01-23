
// Return chromium binary path
export const getChromiumPath = ():string => {
	// ...\\dist_electron\\win-unpacked\\resources\\app.asar
	const rawPath = require('electron').app.getAppPath().split('\\').join('\\\\')

	// ...\\dist_electron\\win-unpacked\\
	const finalPath = `${rawPath.substring(0,rawPath.indexOf("resource"))}.local-chromium\\\\win64-818858\\\\chrome-win\\\\chrome.exe`

	return finalPath
}