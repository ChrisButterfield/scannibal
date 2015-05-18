import DS from 'ember-data';
/* global moment */

export default DS.Model.extend({
  email: DS.attr('string'),
  subscribed: DS.attr('number'),
  subscribedDate: function() {
  	return moment(this.get('subscribed')).format('MMMM Do, YYYY');
  }.property('subscribed')
});
