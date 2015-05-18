import Ember from 'ember';

export default Ember.ObjectController.extend({
	init: function() {
		this.set('contact', Ember.Object.create());
	},
	contactIsValid: function() {
		var isValid = true;
		['contact.email'].forEach(function (field) {
			if(this.get(field) === '') {
				isValid = false;
			}
		}, this);
		return isValid;
	},
	actions: {
		subscribeContact: function () {
			if (!this.contactIsValid()) { return; }
			var newContact = this.store.createRecord('contact', {
				email: this.get('contact.email'),
				subscribed: new Date().getTime()
			});
			newContact.save();
		}
	},
	contact: undefined
});
