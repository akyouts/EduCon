function downloadController(){
    return {
        index(req,res){
            res.render('notes')
        },
        downlaod(req,res){
            res.download('G:/Projects/Under Development/EduCon/public/pdf/Sample.pdf',function(err){
                console.log(err)
            })
        }
    }
}
module.exports = downloadController