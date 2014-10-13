var subMonths = require('../sub_months');

describe('subMonths', function() {
  it('substracts number of passed months', function() {
    var result = subMonths(new Date(2015, 1 /* Feb */, 1), 5);
    expect(result).to.be.eql(new Date(2014, 8 /* Sep */, 1));
  });

  it('accepts string', function() {
    var result = subMonths(new Date(2015, 8 /* Sep */, 1).toISOString(), 12);
    expect(result).to.be.eql(new Date(2014, 8 /* Sep */, 1));
  });

  it('do not mutates original date', function() {
    var date = new Date(2014, 8 /* Sep */, 1);
    subMonths(date, 12);
    expect(date).to.be.eql(new Date(2014, 8 /* Sep */, 1));
  });
});
