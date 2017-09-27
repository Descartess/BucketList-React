import { Chrome } from 'navalia';

const pageUrl = 'http://localhost:3000/';

describe(' End to End test', () => {
  const chrome = new Chrome();
  afterEach(() => chrome.done());
  it('Should have Bucketlist', () => chrome.goto(pageUrl)
  .then(() => chrome.html('h1'))
  .then(html => expect(html).toContain('BucketList'))
    .then(() => chrome.click('button:nth-child(1)')),
  );
});

