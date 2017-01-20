Polymer({
  is: 'example-app',
  properties: {
    route: Object,
  },
  second() {
    this.set('routeData.page', 'second');
  },
  home() {
    this.set('routeData.page', '');
  },
});

