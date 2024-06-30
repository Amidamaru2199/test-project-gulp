project.popup = {
	  outListener: false,
  
	  open(contentClass) {
		this.removeListener();
		const popupHtml = document.querySelector(`.${contentClass}`).innerHTML;
		const overlay = document.querySelector('._overlay');
		overlay.classList.add('open');
		overlay.innerHTML = popupHtml;
		document.body.style.overflow = 'hidden';
		this.setEscEvent();
  
		const popupContent = overlay.querySelector('._popup-content');
		setTimeout(() => {
		  this.outListener = project.clickOutside(popupContent, () => {
			this.close();
		  });
		}, 10);
	  },
  
	  close() {
		const overlay = document.querySelector('._overlay');
		overlay.classList.remove('open');
		document.body.style.overflow = 'auto';
		this.removeListener();
	  },
  
	  removeListener() {
		if (this.outListener) {
		  document.removeEventListener('click', this.outListener);
		}
		this.outListener = false;
	  },
  
	  escEvent: false,
  
	  setEscEvent() {
		if (this.escEvent) return false;
		document.onkeydown = (evt) => {
		  evt = evt || window.event;
		  if (evt.keyCode == 27) {
			this.close();
		  }
		};
		this.escEvent = true;
	  },
  };
  