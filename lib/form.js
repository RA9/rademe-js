/*---- Form DOM Helper ----*/
lib.form = {};

const form = lib.form.element = (count, options) => {
    const form = elt("form");
    if (count > 1) {
        loop(options, function (option) {
            const label = elt("label");
            if (option.label) {
                label.textContent = option.label;
                form.appendChild(label);
            }
            const input = elt("input");
            
            if (option.type) {
                input.type = option.type;
            }

            if (option.placeholder) {
                input.placeholder = option.placeholder;
            }

            if (option.value) {
                input.value = option.value;
            }
            
            form.appendChild(input);
            console.log(form);
        })
        display(form);
    }
}