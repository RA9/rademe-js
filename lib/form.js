/*---- Form DOM Helper ----*/
lib.form = {};

const form = lib.form.element = (count, options) => {
    const form = elt("form");
    if (count > 1) {
        loop(options, function(option) {
            if (option.label) {
                const label = elt("label");
                label.textContent = option.label;
            }
            const input = elt("input");
            input.type = option.type;
            input.placeholder = option.placeholder;
            form.appendChild(label);
            form.appendChild(input);
            console.log(form);
        })
        display(form);
    }
}