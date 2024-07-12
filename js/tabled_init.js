/**
 * @file
 * Simple initialization of Tabled plugin with sensible defaults.
 */

(function ($) {
  Backdrop.behaviors.tabledInit = {
    attach: function (context) {
      $('table:not(.untabled)').once('tabled', context).each(function () {
        var tableInstance = $(this);
        new Tabled({ table: tableInstance[ 0 ], failClass: 'tabled--stacked' });
      });
    }
  };
})(jQuery);
