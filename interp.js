function init() {

}


function $(id) {
    return document.getElementById(id);
}

function run() {
    var inp = String($('input').innerHTML);
    var res = '';
    // var asterisks = [];
    var isMatchingAsterisk = false;
    var isMatchingDash = false;
    for (var i = 0; i<inp.length; i++) {
        if ('0123'.includes(inp[i])) { res += 'n'; }
        else if (inp[i]=='*') {
            if (isMatchingAsterisk) {
                res += '</em>';
            }
            else {
                res += '<em>';
            }
            isMatchingAsterisk^=true;
        }
        else if (inp[i]=='-') {
            if (isMatchingDash) {
                res += '</strong>';
            }
            else {
                res += '<strong>';
            }
            isMatchingDash^=true;
        }
        else {
            res += inp[i];
        }
    }

    var out;
    out = res;
    if (isMatchingAsterisk) {
        var ind = res.lastIndexOf('<em>');
        out = res.slice(0,ind)+'*';
        out += res.slice(ind+4);
    }
    if (isMatchingDash) {
        var ind = res.lastIndexOf('<strong>');
        out = res.slice(0,ind)+'-';
        out += res.slice(ind+8);
    }
        
    // var end = asterisks.length%2? 1: 0;
    // for (var i = asterisks.length; i>end; i-=2) {
        // res = res.slice(0,asterisks[i]) + '</em>' + res.slice(asterisks[i]);
        // res = res.slice(0,asterisks[i-1]-1) + '<em>' + res.slice(asterisks[i-1]+1);   
    // var end = asterisks.length%2? 1: 0;
    // for (var i = asterisks.length; i>end; i-=2) {
        // res = res.slice(0,asterisks[i]) + '</em>' + res.slice(asterisks[i]);
        // res = res.slice(0,asterisks[i-1]-1) + '<em>' + res.slice(asterisks[i-1]+1);



    // }

    $('input').innerHTML = out;
    $('input').focus();

}