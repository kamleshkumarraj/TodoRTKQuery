export const asyncErrorHandler = (fun) => (req , res , next) => {
    Promise.resolve(fun(req , res , next))
    .catch(next);
}

//or,
export const TryCatch = (fun) => {
    return (req , res , next) => {
        try{
            fun(req , res , next);
        }catch(err){
            next(err);
        }
    }
}