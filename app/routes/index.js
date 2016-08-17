import Ember from 'ember';

var rituals =[
  {
  activity: "sun salutation",
  img: "",
  duration: 20,
  bestTime: "6:00",
  notes: "yoga greeting to the sun, good to wake up muscles"
  },
  {
  activity: "gratefulness meditation",
  img: "",
  duration: 20,
  bestTime: "6:20",
  notes: "helps with almost everything"
  },
  {
  activity: "healthy breakfast",
  img: "",
  duration: 15,
  bestTime: "6:45",
  notes: "right after meditating is best"
  },
];

export default Ember.Route.extend({
  model() {
    return rituals;
  }
});
