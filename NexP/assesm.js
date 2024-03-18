
window.onload = function(){
    loadPage('mision');
};

function loadPage(page) {
    
    let content;
    switch (page) {
        case 'vision':
            content = 
            'Vision content here';
            break;
        case 'mission':
            content = 'The mission of the IFSB is to promote the stability and resilience of the Islamic financial services industry. The IFSB seeks to achieve its mission through the issuance, and facilitating the implementation, of global and prudential and supervisory standards and other initiatives that foster knowledge sharing and cooperation.<br> <br> Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At';
            break;
        case 'core-values':
            content = 
            'Core Values content here';
            break;
        
        default:
            content = 'The mission of the IFSB is to promote the stability and resilience of the Islamic financial services industry. The IFSB seeks to achieve its mission through the issuance, and facilitating the implementation, of global and prudential and supervisory standards and other initiatives that foster knowledge sharing and cooperation.<br> <br> Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At';
    }
    document.getElementById('content').innerHTML = content;
}

function loadContactPageFromFile() {
    fetch('\NexP\Bootstrap\html\contactus.html')
      .then(response => response.text())
      .then(html => {
        document.getElementById('contactContent').innerHTML = html;
      })
      .catch(error => console.error('Error loading contact page:', error));
  }
  