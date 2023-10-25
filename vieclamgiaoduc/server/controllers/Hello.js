'use strict'

module.exports = {
    
    hello: async (req, res,next) => {
        return res.json({"message":"hello"},200)
    }
}