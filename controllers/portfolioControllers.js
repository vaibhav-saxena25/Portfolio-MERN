const sendEmailController = (req,res)=>{
    try{
         return res.status(200).send({
            success:true,
            message:"your message send successfully"
         });
    }catch (error){
          console.log(error);
          return res.status(500).send({
            success:false,
            message:'send email API server error',
            error
          })
    }
}

module.exports = {sendEmailController};