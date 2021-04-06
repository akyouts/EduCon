  // saving pdf data mongoose code 
  var pdf = new pdf_schema({
                FileName : "Sample",
                Address : 'G:/Projects/Under Development/EduCon/public/pdf/Sample.pdf',
                Courese: "BBA"
            })
            pdf.save().then(result=>{
                console.log(result)
            }).catch(err=>{
                console.log(err)
            })