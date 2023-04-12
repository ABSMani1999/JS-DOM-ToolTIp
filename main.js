
	var para=document.getElementById("para");
	
	para.addEventListener("mouseenter", function(e){
		let span=document.createElement('span');
		span.classList.add('content')
		span.innerHTML="In computing, input/output (I/O, i/o, or informally io or IO) is the communication between an information processing system, such as a computer, and the outside world, possibly a human or another information processing system. etc";
		para.appendChild(span);
		//console.log(para);
		
	});
		
	para.addEventListener("mouseleave", function(){
		let span=document.querySelector('span');
		span.remove();
	});
	
