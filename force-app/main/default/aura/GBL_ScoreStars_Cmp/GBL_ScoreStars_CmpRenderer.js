({
  render: function(component, helper) {
    var result = this.superRender();
    helper.renderStars(component);
    return result;
  }
});