function existsOrError(item, msg) {
    if(item === "") throw new Error(msg);
    if(Array.isArray(item) && item === [] ) throw new Error(msg);
    if(item === {} ) throw new Error(msg);
    if(item === undefined || item === null ) throw new Error(msg);
}

function notExistsOrError(item, msg) {

    try {
        existsOrError(item);
    } catch {
        return
    }
    throw new Error(msg);
}

function EqualsOrError(item1, item2, msg) {
    if( item1 != item2 ) throw new Error(msg);
}

function emailOrError(email, msg) {

    const re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    if(!re.test(email)) throw new Error(msg);

}


module.exports = {
    existsOrError,
    notExistsOrError,
    emailOrError,
    EqualsOrError
}