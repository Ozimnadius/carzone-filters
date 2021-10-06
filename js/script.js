window.addEventListener('load', function () {
    $('.filter').styler();


    $('.jsFilterReset').on('click', function (e) {

        e.preventDefault();

        resetFilter($(this).prev().find('select'));

    });

    $('.jsFormReset').on('click', function (e) {
        $('select.filter').each(function (x, i) {
            resetFilter($(i));
        });
    });

    function resetFilter($select) {
        const $zeroItem = $select.find('option:nth-child(1)');
        $zeroItem.prop('selected', true);
        $select.trigger('refresh');
    }

});
