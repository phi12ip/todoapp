class HomeController {
    static index(req,res) {
        res.json({
            success: true
        });
    }
}

module.exports = HomeController;