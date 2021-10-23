let get_output = document.getElementById('output');

function clear_() {
    get_output.value = '';
}

function display(num = String) {
    get_output.value += num;
}

function evaluate_() {
    let input = get_output.value.replace(/÷/g, '/').replace(/×/g, '*').replace(/%/g, '/100');
    try {
        let eval_ = eval(input);
        if (!eval_) return (get_output.value = '0');
        get_output.value = eval_;
    } catch {
        get_output.value = 'ERR';
    }
}
