function switchClass(select) {
    var category = select.options[select.selectedIndex].parentNode.label;
    switch (category) {
        case 'Build PC':
            buildPc();
            break;
        case 'Hardware job':
            hardwareJob();
            break;
        case 'WEB':
            web();
            break;
    }
}
