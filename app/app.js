import Ember from 'ember';
import Resolver from 'ember/resolver';
import loadInitializers from 'ember/load-initializers';
import config from './config/environment';

var Scannibal;

Ember.MODEL_FACTORY_INJECTIONS = true;

Scannibal = Ember.Application.extend({
  modulePrefix: config.modulePrefix,
  Resolver: Resolver
});

loadInitializers(Scannibal, config.modulePrefix);

export default Scannibal;
