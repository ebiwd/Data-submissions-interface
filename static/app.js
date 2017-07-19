// websites/patterns/conditional-elements.html
$(document).ready(function() {
  function conditionalElementsEBI(watchedParentClass) {
    var watchedParentClass = watchedParentClass || '.conditional-form';
    conditionalElementsEBI_check(watchedParentClass,$(watchedParentClass)); // initial check on bootstrap

    $(watchedParentClass).on('change', function(){
      conditionalElementsEBI_check(watchedParentClass,this);
    });
  }

  function conditionalElementsEBI_check(watchedParentClass,activeSet) {
    $(activeSet).children().each(function(){
      if ($(this).data('condition')) {
        var conditionTarget = '#' + $(this).data('condition'),
            conditionRequirement = $(this).data('condition-val') || 1;

        // handle wild card matches
        if (conditionRequirement == '*' && $(conditionTarget).val() != null) {
          $(this).removeClass('hidden');
        } else if ($(conditionTarget).val() == conditionRequirement) {
          $(this).removeClass('hidden');
        } else {
          $(this).addClass('hidden');
        }
      }
    });
  }

  // bootstrap it
  conditionalElementsEBI();
});
