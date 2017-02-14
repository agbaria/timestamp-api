var express = require('express');
var router = express.Router();

router.get('/:data', function(req, res) {
    var param = req.params.data;
    var ans;
    
    if(isNumeric(param)) ans = unixToNatural(param);
    else ans = naturalToUnix(param);
    
    res.send(ans);
});

function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
};

function unixToNatural(unix) {
    var date = new Date(unix*1000);
    var naturalDate = getMonthName(date.getMonth()) + ' ' +
                        date.getDate() + ', ' +
                        date.getFullYear();
    return {'unix': unix, 
            'natural': naturalDate};
};

function naturalToUnix(natural) {
    
};

function getMonthName(m) {
    switch (m) {
        case 0: return 'January';
        case 1: return 'February';
        case 2: return 'March';
        case 3: return 'April';
        case 4: return 'May';
        case 5: return 'June';
        case 6: return 'July';
        case 7: return 'August';
        case 8: return 'September';
        case 9: return 'October';
        case 10: return 'November';
        default: return 'December';
    };
};

module.exports = router;