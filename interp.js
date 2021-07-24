function init() {

}


function run() {
    var inp = document.getElementById('input');
    var res = '';
    for (const t of inp.value) {
        if ('0123'.includes(t)) { res += 'n'; }
        else {
            res += t;
        }
    }
    inp.value = res;
    
}