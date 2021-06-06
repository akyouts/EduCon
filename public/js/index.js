

console.log('Client-side code running');

var button = document.querySelectorAll(".myButton")

var video = document.querySelectorAll('.myButtonVideo')






button.forEach(element => {
  element.addEventListener('click', function(e) {
    console.log('Download button was clicked');
    fetch('/download', { method: 'POST', 
      body: JSON.stringify({
          downloadId: element.id
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
    }
    }).then(res=> res.json())
    .then(json => console.log(json))
  
  })
 

}); 





video.forEach(element => {
  element.addEventListener('click', function(e) {
    console.log('Download button was clicked');
    document.querySelector('#videoform').innerHTML =`<input style="display: none;" type="text" name="videoId" value="${element.id}"></input>`
    document.querySelector('#videoform').submit()
    

    // fetch('/videoPage', { method: 'POST', 
    //   body: JSON.stringify({
    //       downloadId: element.id
    //   }),
    //   headers: {
    //     "Content-type": "application/json; charset=UTF-8"
    // }
    // }).then(res=> res.json())
    // .then(json => console.log(json))
  
  })
 

}); 

function passwordTester(){

  var password = document.getElementById('inputPassword').value;
  var confirmPassword = document.getElementById('ConfirminputPassword').value;
  if (password == confirmPassword){
    document.getElementById('form_class').submit();

  }
  else{
   alert('Password did not Matched')
  }
  if(length(password)<5){
     alert('Please set up the password length more then 5')
  }

}











