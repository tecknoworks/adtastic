describe('ADTASTIC page ', function() {
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
  	element(by.id('1')).click();
  	expect(browser.getCurrentUrl()).toEqual("http://localhost:3000/app/index.html#/users");
  });

  it('should redirect to cast menu', function(){
  	browser.get('http://localhost:3000/app/index.html#/content');
  	element(by.id('2')).click();
  	expect(browser.getCurrentUrl()).toEqual("http://localhost:3000/app/index.html#/cast");
  });

  it('should redirect to users manager', function(){
  	browser.get('http://localhost:3000/app/index.html#/content');
  	element(by.id('3')).click();
  	expect(browser.getCurrentUrl()).toEqual("http://localhost:3000/app/index.html#/device");
  });
});