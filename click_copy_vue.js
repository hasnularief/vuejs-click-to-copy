import Vue from 'vue';

Vue.directive('click-copy', {
	bind: function(element, binding, vnode){

		if(element.style)
			element.style.cursor = "pointer";
		if(!element.title)
			element.title = "Click to copy";
		
		element.addEventListener('click', function(event){
			var s = JSON.stringify
			var str = binding.value;
			if(!str)										// Set its value to the string that you want copied
				str = this.textContent;
        	const el = document.createElement('textarea');  // Create a <textarea> element
        	el.value = str;                                 // Set its value to the string that you want copied
        	el.setAttribute('readonly', '');                // Make it readonly to be tamper-proof
        	el.style.position = 'absolute';                 
        	el.style.left = '-9999px';                      // Move outside the screen to make it invisible
        	document.body.appendChild(el);                  // Append the <textarea> element to the HTML document
        	const selected =            
        	    document.getSelection().rangeCount > 0        // Check if there is any content selected previously
        	    ? document.getSelection().getRangeAt(0)     // Store selection if found
        	    : false;                                    // Mark as false to know no selection existed before
        	el.select();                                    // Select the <textarea> content
        	document.execCommand('copy');                   // Copy - only works as a result of a user action (e.g. click events)
        	if(window.alertify){
        		window.alertify.success("Copied to clipboard");
        	}
        	else{
        		alert("Copied to clipboard");
        	}
        	document.body.removeChild(el);                  // Remove the <textarea> element
        	if (selected) {                                 // If a selection existed before copying
          	  document.getSelection().removeAllRanges();    // Unselect everything on the HTML document
          	  document.getSelection().addRange(selected);   // Restore the original selection
        	}
		});
	}
});

/*

How to use
<p v-click-copy>This text will be copied</p>

<p v-click-copy='"This text will be copied"'>This text will not be copied</p>

*/
