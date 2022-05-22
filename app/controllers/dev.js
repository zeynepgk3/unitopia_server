// exports.version =(req,res,next) =>{
//     console.log(res.status(200).json("Hello Tabnine"));
//     return res.status(200).json("Hello Tabnine");
// }

exports.version = (req, res, next) => {
    return res.status(200).json("Naber Tabnine");
  }