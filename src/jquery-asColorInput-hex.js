// hex

(function($) {
    $.asColorInput.registerComponent('hex', {
        init: function(api) {
            var template = '<input type="text" class="' + api.namespace + '-hex" />';
            this.$hex = $(template).appendTo(api.$dropdown);

            this.$hex.on('change', function() {
                api.set(this.value);
            });

            this.update(api);
        },
        update: function(api) {
            this.$hex.val(api.color.toHEX());
        },
    });
})(jQuery);