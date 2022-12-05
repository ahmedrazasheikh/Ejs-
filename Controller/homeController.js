const checkingPurpose = (req,res)=>{
const data = {
    'name' : 'saad', 
    'Brother' : ['Ahmed', 'Muhammad Saad' , 
    'Muhammad Hassan']
}
    res.render('index' ,  data  )
    } 
    const inFo = (req,res)=>{
console.log(req.ip)
res.res('Ahemd raaza')
    }
    export {checkingPurpose,inFo}