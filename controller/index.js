/* GET home page. */
exports.getIndexPage = (req, res, next) => {
    return res.render("index", {
      pageTitle: "首頁"
    });
};