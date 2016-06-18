import { TwitterDatePipe, TwitterDateWithTimePipe } from './twitter-dates.pipe';

describe('TwitterDatePipe', () => {
  let pipe: TwitterDatePipe;

  beforeEach(() => {
    pipe = new TwitterDatePipe();
  });

  it('strips out the time and timezone data', () => {
    expect(pipe.transform('Tue Dec 23 04:03:33 +0000 2008')).toEqual('Tue Dec 23 2008');
  });

  describe('if date in unexpected format, returns "Not Available"', () => {
    it('date string not 6 words long', () => {
      expect(pipe.transform('Dec 23 040333 +0000 2008')).toEqual('Not Available');
    });

    it('forth word is not a time stamp', () => {
      expect(pipe.transform('Tue Dec 23 +0000 2008')).toEqual('Not Available');
    });

    it('fifth word is not a timezone', () => {
      expect(pipe.transform('Tue Dec 23 04:03:33 2008')).toEqual('Not Available');
    });
  });
});

describe('TwitterDateWithTimePipe', () => {
  let pipe: TwitterDateWithTimePipe;

  beforeEach(() => {
    pipe = new TwitterDateWithTimePipe();
  });

  it('strips out only the timezone data', () => {
    expect(pipe.transform('Tue Dec 23 04:03:33 +0000 2008')).toEqual('Tue Dec 23 04:03:33 2008');
  });

  describe('if date in unexpected format, does not transform string', () => {
    it('date string not 6 words long', () => {
      expect(pipe.transform('Dec 23 040333 +0000 2008')).toEqual('Not Available');
    });

    it('forth word is not a time stamp', () => {
      expect(pipe.transform('Tue Dec 23 +0000 2008')).toEqual('Not Available');
    });

    it('fifth word is not a timezone', () => {
      expect(pipe.transform('Tue Dec 23 04:03:33 2008')).toEqual('Not Available');
    });
  });
});
