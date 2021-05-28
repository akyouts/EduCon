const course_Model = require('../models/Course')
const fs = require('fs')
function videoStreaming(){
     return{
         videoindex(req,res){
            course_Model.find({},(err,course)=>{
                if (err) {
                    res.send("Some thing went wrong")
                }
                else{
                    
                    res.render('videoPlayer',{course: course, user: req.cookies.user, jwt:req.cookies.jwt })
                }
                
            })
         },
         video(req,res){
             const range = req.headers.range // it return byte so we have to remove alpabet using regex
             const videoPath = 'G:/Projects/Under Development/EduCon/public/video/VID20201125213916.mp4'
             const videoSize = fs.statSync(videoPath).size
             const chunckSize = 1 * 1e+6
             const start =  Number(range.replace(/\D/g,''))
             const end = Math.min(start+chunckSize,videoSize-1)
             const contentLength = end - start + 1
             

             const headers = {
                 'Content-range': `bytes ${start} - ${end}/${videoSize}`,
                 'Accet-ranges': 'bytes',
                  'Content-Length': contentLength,
                  'Content-type': 'video/mp4'
             }

             res.writeHead(206,headers);
             const stream = fs.createReadStream(videoPath,{start,end})
             stream.pipe(res)

         }
     }
}


module.exports = videoStreaming