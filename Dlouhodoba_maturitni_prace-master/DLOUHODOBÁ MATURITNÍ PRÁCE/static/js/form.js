function switchClass(select) {
    var category = select.options[select.selectedIndex].parentNode.label;
    switch (category) {
        case 'Build PC':
            anim2();
            break;
        case 'Hardware job':
            anim1();
            break;
        case 'WEB':
            anim3();
            break;
    }
}