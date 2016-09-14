describe('ADTASTIC content page and sign in ', function() {

  it('should take user back to sign in page', function() {
    browser.get('http://localhost:3000/app/index.html#content');
    element(by.id('test_redirectSignOut')).click();
    expect(browser.getCurrentUrl()).toEqual("http://localhost:3000/app/index.html#/");
  });
  it('should have title', function() {
    browser.get('http://localhost:3000/app/index.html');
    expect(browser.getTitle()).toEqual('ADTASTIC');
  });

  it('should log in user', function(){
  	browser.get('http://localhost:3000/app/index.html');
  	element(by.model('inputEmail')).sendKeys("testmail");
  	element(by.model('inputPassword')).sendKeys("tesstpwd");

  	element(by.id('1')).click();
  	expect(browser.getCurrentUrl()).toEqual("http://localhost:3000/app/index.html#/content");
  });

  it('should redirect to users manager', function(){
  	browser.get('http://localhost:3000/app/index.html#/content');
  	element(by.id('test_redirectUsers')).click();
  	expect(browser.getCurrentUrl()).toEqual("http://localhost:3000/app/index.html#/users");
  });

  it('should redirect to cast menu', function(){
  	browser.get('http://localhost:3000/app/index.html#/content');
  	element(by.id('test_redirectCast')).click();
  	expect(browser.getCurrentUrl()).toEqual("http://localhost:3000/app/index.html#/cast");
  });

  it('should redirect to content manager', function(){
  	browser.get('http://localhost:3000/app/index.html#/content');
  	element(by.id('test_redirectDevices')).click();
  	expect(browser.getCurrentUrl()).toEqual("http://localhost:3000/app/index.html#/device");
  });

  it('should add a photo to the list', function(){
  	browser.get('http://localhost:3000/app/index.html#/content');
    elems = 0;
    var count = element.all(by.repeater('photo in photos'));
    count.then(function(result){ 
      elems = result.length; //elems holds initial length
      element(by.model('inputName')).sendKeys("testPro");
      element(by.model('inputUrl')).sendKeys("testPro.com");
      element(by.id('photoAdd')).click();
      var count2 = element.all(by.repeater('photo in photos'));
      count2.then(function(result) {
        expect(result.length).toBeGreaterThan(elems)
      });
    });
  });

  it('should add a video to the list', function(){
    browser.get('http://localhost:3000/app/index.html#/content');
    elems = 0;
    var count = element.all(by.repeater('video in videos'));
    count.then(function(result){ 
      elems = result.length; //elems holds initial length
      element(by.model('inputName')).sendKeys("testPro");
      element(by.model('inputUrl')).sendKeys("testPro.com");
      element(by.id('videoAdd')).click();
      var count2 = element.all(by.repeater('video in videos'));
      count2.then(function(result) {
        expect(result.length).toBeGreaterThan(elems)
      });
    });
  });
});





describe('ADTASTIC users page ', function() {

  it('should add a user to the list', function(){
    browser.get('http://localhost:3000/app/index.html#/users');
    elems = 0;
    var count = element.all(by.repeater('user in users'));
    count.then(function(result){ 
      elems = result.length; //elems holds initial length
      element(by.model('inputEmail')).sendKeys("testPro");
      element(by.model('inputPassword')).sendKeys("testPro.com");
      element(by.id('userAdd')).click();
      var count2 = element.all(by.repeater('user in users'));
      count2.then(function(result) {
        expect(result.length).toBeGreaterThan(elems)
      });
    });
  });

});

describe('ADTASTIC device page ', function() {

  it('should add a device to the list', function(){
    browser.get('http://localhost:3000/app/index.html#/device');
    elems = 0;
    var count = element.all(by.repeater('device in devices'));
    count.then(function(result){ 
      elems = result.length; //elems holds initial length
      element(by.model('inputName')).sendKeys("testPro");
      element(by.id('deviceAdd')).click();
      var count2 = element.all(by.repeater('device in devices'));
      count2.then(function(result) {
        expect(result.length).toBeGreaterThan(elems)
      });
    });
  });

});