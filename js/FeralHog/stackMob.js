// Generated by CoffeeScript 1.5.0
(function() {
  var _ref,
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  if ((_ref = this.FeralHog) == null) {
    this.FeralHog = {};
  }

  FeralHog.FhStackMob = (function() {

    function FhStackMob() {
      this.fetchObservations = __bind(this.fetchObservations, this);
      this.fetchActions = __bind(this.fetchActions, this);
      this.fetchPhotos = __bind(this.fetchPhotos, this);
      var appKey, appUrl, appVersion, devVersion, user,
        _this = this;
      appUrl = window.location.href;
      devVersion = appUrl.search("dev");
      appKey = devVersion !== -1 ? "08cc0daa-0da5-48a5-a526-74a5f4624eb7" : "f81efb10-659a-471c-9d80-09dccdac468a";
      appVersion = devVersion !== -1 ? 0 : 1;
      StackMob.init({
        publicKey: appKey,
        apiVersion: appVersion
      });
      user = new StackMob.User({
        username: "viewer@example.com",
        password: "pass"
      });
      user.login(true, {
        success: function() {
          return _this.fetchPhotos();
        },
        error: function() {
          return alert("Accessing StackMob failed.");
        }
      });
    }

    FhStackMob.prototype.fetchPhotos = function() {
      var _this = this;
      FeralHog.photos = new FeralHog.PhotossCollection();
      return FeralHog.photos.fetch({
        success: function() {
          return _this.fetchActions();
        },
        error: function() {
          return console.log("fetching photos failed");
        }
      });
    };

    FhStackMob.prototype.fetchActions = function() {
      var _this = this;
      FeralHog.actions = new FeralHog.ActionsCollection();
      return FeralHog.actions.fetch({
        success: function() {
          return _this.fetchObservations();
        },
        error: function() {
          return console.log("fetching actions failed");
        }
      });
    };

    FhStackMob.prototype.fetchObservations = function() {
      var _this = this;
      FeralHog.observations = new FeralHog.ObservationsCollection();
      return FeralHog.observations.fetch({
        success: function() {
          FeralHog.observations.selected = null;
          FeralHog.map = new FeralHog.Map();
          return FeralHog.router = new FeralHog.Router();
        },
        error: function() {
          return console.log("fetching observations failed");
        }
      });
    };

    return FhStackMob;

  })();

  this.feralHogStackMob = new this.FeralHog.FhStackMob();

}).call(this);
