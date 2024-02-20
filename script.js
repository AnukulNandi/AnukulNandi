// script.js

        function openNav() {
          document.getElementById("mySidenav").style.width = "250px";
          document.getElementById("main").style.marginLeft = "250px";
          document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
        }
        
        function closeNav() {
          document.getElementById("mySidenav").style.width = "0";
          document.getElementById("main").style.marginLeft= "0";
          document.body.style.backgroundColor = "#1d0851";
        }
        
       
   
        function Image(src) {
            var enlargedImgContainer = document.getElementById('See');
            var enlargedImg = document.getElementById('enlarged-img');
            enlargedImg.src = src;
    
            // Show the enlarged image container
            enlargedImgContainer.style.display = 'flex';
        }
    
        // Function to close the enlarged image
        function closeEnlarged() {
            var enlargedImgContainer = document.getElementById('See');
            enlargedImgContainer.style.display = 'none';
        }
        function enhanceImage(pi) {
            var divElement = document.getElementById('DiV');
            divElement.style.display="block";
            divElement.style.width ='500px';
            divElement.style.height = '500px';
           divElement.style.backgroundImage = 'url(' + pi + ')'; 
           divElement.style.filter = 'brightness(120%)';

        }
        function closeImg(){
            var divElement = document.getElementById('DiV');
            divElement.style.display='none';
        }
        