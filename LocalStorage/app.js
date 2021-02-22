window.onload = function(){

				var modal = document.getElementById('mymodal');
				var input = document.getElementById('input');
					input.onchange = function () {
						modal.style.display = 'none'
						if(input.checked){
							localStorage.setItem('input',"true")
						}else{
							localStorage.setItem('input',"false")
						}
					}
						if(localStorage.getItem('input')== "true"){
							input.setAttribute('checked','checked')	
							modal.style.display = 'none'
						} 
}

	
		
	
	


		

	
