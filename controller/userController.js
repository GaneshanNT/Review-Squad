
exports.home = function (req,res) {
    res.render('index')
}

exports.signUp = function (req,res) {
    res.render('register')
}

exports.login = function (req,res){
    res.render('login')
}

exports.userHome = function(req,res){
    res.render('home')
}

exports.shareContent = function(req,res){
    res.render('sharecontent')
}

exports.viewContent = function(req,res){
    res.render('view')
}