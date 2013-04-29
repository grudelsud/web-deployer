module.exports = function(match) {
  match('',            'home#index');
  match('repos',       'repos#index');
  match('repos/:name', 'repos#show');
};
