function FormatDate(today) {
    var dd = today.getDate();

    var mm = today.getMonth() + 1;
    var yyyy = today.getFullYear();
    if (dd < 10) {
        dd = '0' + dd;
    }

    if (mm < 10) {
        mm = '0' + mm;
    }
    const curentDate = mm + '-' + dd + '-' + yyyy;
    return curentDate;
}

export default FormatDate;
