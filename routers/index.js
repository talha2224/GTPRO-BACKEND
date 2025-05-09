const combineRouter = require("express").Router()


combineRouter.use("/account",require("./account.router"))
combineRouter.use("/wallet",require("./wallet.router"))

combineRouter.use("/transfer",require("./transffer.router"))
combineRouter.use("/loan",require("./loan.router"))
combineRouter.use("/split",require("./split.router"))
combineRouter.use("/card",require("./card.router"))

combineRouter.use("/transaction/history",require("./transactionHistory.router"))





module.exports = combineRouter