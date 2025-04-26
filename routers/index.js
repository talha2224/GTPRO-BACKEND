const combineRouter = require("express").Router()


combineRouter.use("/account",require("./account.router"))
combineRouter.use("/wallet",require("./wallet.router"))

combineRouter.use("/transfer",require("./transffer.router"))
combineRouter.use("/loan",require("./loan.router"))
combineRouter.use("/card",require("./card.router"))

combineRouter.use("/transaction/history",require("./transactionHistory.router"))
combineRouter.use("/hotline",require("./hotline.router"))
combineRouter.use("/social/link",require("./social.router"))
combineRouter.use("/bank/details",require("./bankdetails.router"))
combineRouter.use("/reciept",require("./reciept.router"))




// combineRouter.use("/track",require("./track.router"))
// combineRouter.use("/sound",require("./sound.router"))
// combineRouter.use("/ticket",require("./ticket.router"))
// combineRouter.use("/post",require("./post.router"))
// combineRouter.use("/performance",require("./performance.router"))
// combineRouter.use("/score",require("./score.router"))






module.exports = combineRouter