export function isQueryFound (text, query) {
	if(text && text.toLowerCase().indexOf(query) !== -1) return true;
	return false;
}

export function guid() {
	return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
	  s4() + '-' + s4() + s4() + s4();
  }
  
function s4() {
	return Math.floor((1 + Math.random()) * 0x10000)
		.toString(16)
		.substring(1);
}