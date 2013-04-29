module.exports = {
  index: function(params, callback) {

    var spec = {
      model: {model: 'Server', params: params}
    };
    this.app.fetch(spec, function(err, result) {
      callback(err, 'home_index_view', result);
    });
  }
};
