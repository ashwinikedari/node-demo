const getUserName = async (userName) => {
    try {

        const objToreturn = {
            name: userName
        };
        return objToreturn;
    } catch (err) {
        throw err;
    }

}

module.exports = {
    getUserName
}