import {Meteor} from 'meteor/meteor';
import {ReactiveDict} from 'meteor/reactive-dict';
import {Tracker} from 'meteor/tracker';
import {FlowRouter} from 'meteor/kadira:flow-router';

export default function () {
  return {
    Meteor,
    FlowRouter,
    LocalState: new ReactiveDict(),
    Tracker
  };
}
