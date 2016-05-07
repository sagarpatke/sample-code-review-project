var should = require('should');

describe('First Test', function() {
  it('Sum of n consecutive numbers from 1 is n*(n+1)/2', function(done) {
    setTimeout(function() {
      var n = Math.floor(Math.random()*100);

      var count = 0;
      for(var i=1; i<=n; i++) {
        count += i;
      }

      count.should.be.exactly(n*(n+1)/2);
      done();
    }, 300);
  });
});