jQuery(function($) {
    // Document and Windows Variables
    var $document = $(document),
        $window = $(window);

    // Equalize
    function equal_heights() {
        var $row = $('.equal');

        if ($row.length > 0) {
            $row.each(function() {
                var $sections = $(this).children(),
                    largest_height = 0;

                $sections.height('auto');

                $sections.each(function() {
                    var h = $(this).height();
                    if (largest_height < h) largest_height = h;
                });

                $sections.height(largest_height);
            });
        }
    }

    /********************
    Run Functions
    ********************/
    $window.on({
        load: function() {
            equal_heights();
        },
        resize: function() {
            equal_heights();
        },
        scroll: function() {
        }
    });
});
