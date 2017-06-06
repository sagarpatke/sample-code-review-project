let should = require('should');

describe('First Test', function() {
  it('Sum of n consecutive numbers from 1 is n*(n+1)/2', function(done) {
    setTimeout(function() {
      let n = Math.floor(Math.random()*100);

      let count = 0;
      for(let i=1; i<=n; i++) {
        count += i;
      }

      count.should.be.exactly(n*(n+1)/2);
      count.should.not.equal(undefined);
      done();
    }, 300);
  });
});