function existsOrError(item, msg) {
    if(item === "") throw new Error(msg);
    if(Array.isArray(item) && item === [] ) throw new Error(msg);
    if(item === {} ) throw new Error(msg);
    if(item === undefined || item === null ) throw new Error(msg);
}


module.exports = {
    existsOrError
}