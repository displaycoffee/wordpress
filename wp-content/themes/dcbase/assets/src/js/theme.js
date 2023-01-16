var prefix = 'dcbase';
export var obj = {
	lang      : 'dcbase',
	prefix    : prefix,
	classes   : {},
	variables : {
		bottom   : document.body.scrollHeight + window.innerHeight,
		fontSize : 16
	}
};

export let theme = {
	lang      : 'dcbase',
	prefix    : prefix,
	classes   : {},
	variables : {
		bottom   : document.body.scrollHeight + window.innerHeight,
		fontSize : 16
	},
	isMobile  : (respond) => {
		// Check if on mobile
		const windowWidth = ( window.innerWidth / this.variables.fontSize );
		const docWidth = ( document.documentElement.clientWidth / this.variables.fontSize );
		const bodyWidth = ( document.body.clientWidth / this.variables.fontSize );
	
		if ( ( windowWidth || docWidth || bodyWidth ) <= respond ) {
			return true;
		} else {
			return false;
		}
	},
	debounce  : (func, wait, immediate) => {
		// Debounce function from underscore.js and https://davidwalsh.name/javascript-debounce-function
		let timeout;

		return function() {
			const context = this;
			const args = arguments;

			let later = function() {
				timeout = null;
				if ( !immediate ) {
					func.apply( context, args );
				}
			};

			const callNow = immediate && !timeout;
			clearTimeout( timeout );
			timeout = setTimeout( later, wait );
			if ( callNow ) {
				func.apply( context, args );
			}
		};		
	}
};

// // Check if substring is in string
// export function inString( value, search ) {
// 	return ( value.indexOf(search) !== -1 ) ? true : false;
// }

// // Check for mobile
// export function isMobile( respond ) {
// 	var windowWidth = ( window.innerWidth / obj.variables.fontSize );
// 	var docWidth = ( document.documentElement.clientWidth / obj.variables.fontSize );
// 	var bodyWidth = ( document.body.clientWidth / obj.variables.fontSize );

// 	if ( ( windowWidth || docWidth || bodyWidth ) <= respond ) {
// 		return true;
// 	} else {
// 		return false;
// 	}
// }

// Debounce function from underscore.js and https://davidwalsh.name/javascript-debounce-function
// export function debounce( func, wait, immediate ) {
// 	var timeout;
// 	return function() {
// 		var context = this, args = arguments;
// 		var later = function() {
// 			timeout = null;
// 			if ( !immediate ) {
// 				func.apply( context, args );
// 			}
// 		};
// 		var callNow = immediate && !timeout;
// 		clearTimeout( timeout );
// 		timeout = setTimeout( later, wait );
// 		if ( callNow ) {
// 			func.apply( context, args );
// 		}
// 	};
// };
