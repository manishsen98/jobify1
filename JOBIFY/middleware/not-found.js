const notFoundMiddleWare = (req, res) => 
res.status(404).send("Route does not exits")

export default notFoundMiddleWare