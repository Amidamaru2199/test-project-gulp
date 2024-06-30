"use strict";
document.addEventListener('DOMContentLoaded', function() {
	project.init();
 });
const project =
{
	init()
	{
		project.cartModule.init();
	},
	clickOutside(element, callback) {
		const outsideChecker = (event) => {
			if (!element.contains(event.target)) {
				document.removeEventListener('click', outsideChecker);
				callback();
			}
		};
	
		document.addEventListener('click', outsideChecker);
	
		return outsideChecker;
	}
};
