console.log('Client-side code running');

var button = document.querySelectorAll(".myButton")
var CourseOption = document.querySelectorAll(".course-section")




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

CourseOption.forEach(element => {
  element.addEventListener('click', function(e) {
    console.log('Course button was clicked');
    fetch('/do', { method: 'POST', 
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
    










