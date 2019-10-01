const validParams = async(objeto) => {

    for (const [key, val] of Object.entries(objeto)) {
        if(val === undefined || val === null || val === ""){
            throw `el campo ${key} es requerido.`
        }
    }

    return;
}

module.exports = {
    validParams
}