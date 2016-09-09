describe('angularjs homepage todo list', function() {
  it('should have title', function() {
    browser.get('http://localhost:3000/app/index.html');
    expect(browser.getTitle()).toEqual('ADTASTIC');
  });

  it('should add a user', function(){
  	browser.get('http://localhost:3000/app/index.html#/users');
  })

});