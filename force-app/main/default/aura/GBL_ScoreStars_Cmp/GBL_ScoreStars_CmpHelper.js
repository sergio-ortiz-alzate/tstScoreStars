({
  renderStars: function(component) {
    if (typeof(document) !== undefined) {
      var starsArray = [
        'M34.4917825,1.623 C35.2967825,-0.541 36.6147825,-0.541 37.4237825,1.623 L44.3607825,20.247 C45.1657825,22.412 47.7137825,24.262 50.0177825,24.36 L69.8787825,25.203 C72.1847825,25.301 72.5917825,26.555 70.7827825,27.991 L55.2137825,40.344 C53.4047825,41.781 52.4317825,44.773 53.0517825,46.997 L58.3867825,66.143 C59.0047825,68.368 57.9397825,69.144 56.0157825,67.868 L39.4547825,56.877 C37.5307825,55.601 34.3817825,55.601 32.4597825,56.877 L15.8987825,67.868 C13.9747825,69.144 12.9087825,68.368 13.5277825,66.143 L18.8627825,46.997 C19.4807825,44.773 18.5087825,41.781 16.6987825,40.344 L1.12978251,27.991 C-0.680217494,26.555 -0.270217494,25.301 2.03578251,25.203 L21.8947825,24.36 C24.2007825,24.262 26.7467825,22.412 27.5537825,20.247 L34.4917825,1.623',
        'M126.490359,1.623 C127.296359,-0.541 128.615359,-0.541 129.422359,1.623 L136.360359,20.247 C137.166359,22.412 139.713359,24.262 142.019359,24.36 L161.878359,25.203 C164.184359,25.301 164.591359,26.555 162.783359,27.991 L147.213359,40.344 C145.404359,41.781 144.431359,44.773 145.052359,46.997 L150.386359,66.143 C151.004359,68.368 149.939359,69.144 148.015359,67.868 L131.454359,56.877 C129.531359,55.601 126.383359,55.601 124.459359,56.877 L107.898359,67.868 C105.974359,69.144 104.907359,68.368 105.526359,66.143 L110.861359,46.997 C111.480359,44.773 110.507359,41.781 108.700359,40.344 L93.1293589,27.991 C91.3203589,26.555 91.7293589,25.301 94.0353589,25.203 L113.894359,24.36 C116.200359,24.262 118.746359,22.412 119.553359,20.247 L126.490359,1.623',
        'M217.491168,1.623 C218.299168,-0.541 219.615168,-0.541 220.421168,1.623 L227.360168,20.247 C228.166168,22.412 230.714168,24.262 233.019168,24.36 L252.880168,25.203 C255.185168,25.301 255.592168,26.555 253.783168,27.991 L238.212168,40.344 C236.403168,41.781 235.435168,44.773 236.052168,46.997 L241.386168,66.143 C242.006168,68.368 240.938168,69.144 239.016168,67.868 L222.455168,56.877 C220.530168,55.601 217.384168,55.601 215.460168,56.877 L198.898168,67.868 C196.975168,69.144 195.906168,68.368 196.527168,66.143 L201.862168,46.997 C202.481168,44.773 201.508168,41.781 199.700168,40.344 L184.129168,27.991 C182.321168,26.555 182.728168,25.301 185.036168,25.203 L204.895168,24.36 C207.200168,24.262 209.748168,22.412 210.554168,20.247 L217.491168,1.623',
        'M308.490974,1.623 C309.299974,-0.541 310.614974,-0.541 311.422974,1.623 L318.359974,20.247 C319.165974,22.412 321.712974,24.262 324.017974,24.36 L343.878974,25.203 C346.183974,25.301 346.592974,26.555 344.782974,27.991 L329.213974,40.344 C327.404974,41.781 326.429974,44.773 327.051974,46.997 L332.385974,66.143 C333.005974,68.368 331.939974,69.144 330.014974,67.868 L313.454974,56.877 C311.531974,55.601 308.382974,55.601 306.458974,56.877 L289.896974,67.868 C287.972974,69.144 286.908974,68.368 287.527974,66.143 L292.860974,46.997 C293.480974,44.773 292.509974,41.781 290.700974,40.344 L275.129974,27.991 C273.320974,26.555 273.727974,25.301 276.035974,25.203 L295.894974,24.36 C298.199974,24.262 300.745974,22.412 301.552974,20.247 L308.490974,1.623',
        'M400.491352,1.623 C401.296352,-0.541 402.614352,-0.541 403.423352,1.623 L410.360352,20.247 C411.168352,22.412 413.714352,24.262 416.018352,24.36 L435.878352,25.203 C438.183352,25.301 438.590352,26.555 436.782352,27.991 L421.213352,40.344 C419.404352,41.781 418.431352,44.773 419.051352,46.997 L424.386352,66.143 C425.005352,68.368 423.939352,69.144 422.016352,67.868 L405.454352,56.877 C403.531352,55.601 400.382352,55.601 398.459352,56.877 L381.898352,67.868 C379.974352,69.144 378.907352,68.368 379.528352,66.143 L384.861352,46.997 C385.482352,44.773 384.508352,41.781 382.700352,40.344 L367.131352,27.991 C365.320352,26.555 365.728352,25.301 368.034352,25.203 L387.894352,24.36 C390.200352,24.262 392.746352,22.412 393.553352,20.247 L400.491352,1.623'
      ];

      var svgns = 'http://www.w3.org/2000/svg';
      var limitStars = parseInt(component.get('v.starsNumber'), 10);
      var size = '0 0 440 69';

      switch (limitStars) {
        case 3: size = '0 0 255 69'; break;
        case 4: size = '0 0 360 69'; break;
        default: size = '0 0 440 69';
      }

      var svgroot = window.document.createElementNS(svgns, 'svg');
      svgroot.setAttribute('viewBox', size);
      svgroot.setAttribute('version', '1.1');
      svgroot.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
      svgroot.setAttribute('xmlns:xlink', 'http://www.w3.org/1999/xlink');

      var groot = window.document.createElementNS(svgns, 'g');
      groot.setAttribute('stroke', 'none');
      groot.setAttribute('stroke-width', '1');
      groot.setAttribute('fill', 'none');
      groot.setAttribute('fill-rule', 'evenodd');

      var action = component.get('c.getScore');

      var setApiName = component.get('v.apiName') !== undefined ? component.get('v.apiName') : '';
      var setRecordId = component.get('v.recordId') !== undefined ? component.get('v.recordId') : '';
      var setScore = component.get('v.score') !== undefined ? component.get('v.score') : '';
      var setDescription = component.get('v.description') !== undefined ? component.get('v.description') : '';
      var setFields = (setScore !== '' && setDescription !== '' ? (',' + setScore + ',' + setDescription) : '');

      action.setParams({
        'apiName': setApiName,
        'recordId': setRecordId,
        'fields': setFields
      });

      action.setCallback(this, function(response) {
        var state = response.getState();
        if (state === 'SUCCESS') {
          var result = response.getReturnValue();
          var score = result[component.get('v.score')] !== undefined ? parseInt(result[component.get('v.score')], 10) : component.get('v.scoreInt');
          var description = result[component.get('v.description')] !== undefined ? result[component.get('v.description')] : '';

          component.set('v.scoreInt', score);
          component.find('description_id').set('v.value', description);

          var pathResult = function(y, fill) {
            var pathRoot = window.document.createElementNS(svgns, 'path');
            pathRoot.setAttribute('d', starsArray[y]);
            pathRoot.setAttribute('fill', fill);
            pathRoot.setAttribute('stroke', '#505050');
            pathRoot.setAttribute('stroke-width', '1');
            return pathRoot;
          };

          for (var x = 0; x < score; x++) {
            groot.appendChild(pathResult(x, '#00A1E0'));
          }

          for (var i = score; i < limitStars; i++) {
            groot.appendChild(pathResult(i, '#EEEEEE'));
          }

          svgroot.appendChild(groot);
          var container = component.find('container').getElement();

          while (container.firstChild) {
            container.removeChild(container.firstChild);
          }

          container.insertBefore(svgroot, container.firstChild);
        }
      });

      $A.enqueueAction(action);
    }
  },
  saveRecord: function(component) {
    var lsSobject = [];

    var json = {};
    json.sobjectType = component.get('v.apiName');
    json.Id = component.get('v.recordId');
    json[component.get('v.score')] = component.get('v.scoreInt').toString();
    json[component.get('v.description')] = component.find('description_id').get('v.value');

    lsSobject.push(json);

    var action = component.get('c.saveScore');

    action.setParams({
      'toUpdate': lsSobject
    });

    action.setCallback(this, function(response) {
      var state = response.getState();
      if (state === 'SUCCESS') {
        var result = response.getReturnValue();
        this.renderStars(component);
      }
    });

    $A.enqueueAction(action);
  }
});