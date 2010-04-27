(function($) {
    $.fn.titleAsLabel = function(settings) {
        //var defaultSettings = {'foo': 'bar'};
        //var settings = $.extend(defaultSettings, settings);

        this.each(function () {
            var input = $(this);
            var inputbox_title = input.attr('title');
            input.click(function () {
                if (input.val() === inputbox_title) {
                    input.val("");
                }
            }).blur(function () {
                if (input.val() === "") {
                    input.val(inputbox_title);
                }
            });
            
            input.blur();
            
            input.closest("form").submit(function() {
                input.click();
            });
        });

        return this;
};
})(jQuery);
