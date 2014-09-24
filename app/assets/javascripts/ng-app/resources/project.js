app.factory('Project', function($resource) {
  return $resource("projects/:id", { id: '@id' }, {
    index:   { method: 'GET', isArray: true, responseType: 'json' },
    show:    { method: 'GET', responseType: 'json' },
    update:  { method: 'PUT', responseType: 'json' }
  });
})
