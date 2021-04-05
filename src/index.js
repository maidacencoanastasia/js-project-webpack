let progress = document.getElementById('progressbar');
	let totalheight = document.body.scrollHeight - window.innerHeight;
	window.onscroll = function(){
		let progressheight = (window.pageYOffset / totalheight)*100;
		progress.style.height = progressheight + "%";
	}