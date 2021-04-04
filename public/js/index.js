console.log('Client-side code running');

var button = document.getElementById('myButton');

button.addEventListener('click', function(e) {
    console.log('button was clicked');
  
    fetch('/download', {method: 'POST'})
      .then(function(response) {
        if(response.ok) {
          console.log('Click was recorded');
          return;
        }
        throw new Error('Request failed.');
      })
      .catch(function(error) {
        console.log(error);
      });
  });