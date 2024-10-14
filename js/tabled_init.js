/**
 * @file
 * Simple initialization of Tabled plugin with sensible defaults.
 */

(function ($) {
  Backdrop.behaviors.tabledInit = {
    attach: function (context) {
      // Add the untabled class to any tables that match the exclude selector.
      let $excludedSelectors = Backdrop.settings.tabled.excluded_selectors;
      if ($excludedSelectors) {
        $excludedSelectors.forEach(function (selector) {
          $(selector).addClass('untabled');
        });
      }
      $('table:not(.untabled)').once('tabled', context).each(function () {
        var tableInstance = $(this);
        new Tabled({ table: tableInstance[ 0 ], failClass: 'tabled--stacked' });
      });
    }
  };
})(jQuery);
