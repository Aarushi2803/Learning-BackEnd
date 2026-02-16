const auth = (req,res,next)=>{
    // Add item into food menu 
    // authentiction krnaa pdega ki kya ye adimn hi hai
    const token = "BCDEF";
    const access = token ==="BCDEF" ?1:0;

    if(!access){
       return res.status(403).send("No Permission!!");
    }
    next();
}

module.exports={
    auth,
}