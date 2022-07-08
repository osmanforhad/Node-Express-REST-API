exports.HelloGet = (request, response) => {
    response.status(200).json({status:"success", data:"Hello GET"});
}

exports.HelloPost = (request, response) => {
    response.status(201).json({status:"success", data:"Hello POST"});
}