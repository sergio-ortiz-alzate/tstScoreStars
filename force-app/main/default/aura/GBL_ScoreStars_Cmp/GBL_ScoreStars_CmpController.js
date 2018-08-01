({
  starsClick: function(component, event, helper) {
    var colorOn = component.get('v.colorOn');
    var colorOff = component.get('v.colorOff');
    var scoreInt = 0;
    var element = event.target;
    var limitStars = parseInt(component.get('v.starsNumber'), 10);

    while (element) {
      scoreInt++;
      element.style.fill = colorOn;
      element = element.previousElementSibling;
      if (scoreInt > limitStars) {
        return;
      }
    }

    element = event.target.nextElementSibling;

    while (element) {
      element.style.fill = colorOff;
      element = element.nextElementSibling;
    }

    component.set('v.scoreInt', scoreInt);
    helper.saveRecord(component);
  },
  save: function(component, event, helper) {
    helper.saveRecord(component);
  }
});