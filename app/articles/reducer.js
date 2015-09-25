const defaultArticles = [
  { title: 'Article 1', text: 'Some text', image: { url: 'http://takopost.com/wp-content/uploads/2015/08/Google_Logo.png' }},
  { title: 'Article 2', text: 'Some more text', image: { url: 'http://www.plusyourbusiness.com/wp-content/uploads/2013/11/GooglePlus-Logo-Official.png' }}
];

export default function articles(state=defaultArticles, action) {
  return state;
}

