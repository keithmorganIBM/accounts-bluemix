Accounts.oauth.registerService('ibmid');

if (Meteor.isClient) {
  Meteor.loginWithBluemix = function (options, callback) {
    // support a callback without options
    if (!callback && typeof options === "function") {
      callback = options;
      options = null;
    }

    var credentialRequestCompleteCallback = Accounts.oauth.credentialRequestCompleteHandler(callback);
    IBMID.requestCredential(options, credentialRequestCompleteCallback);
  }
} else {
  Accounts.addAutopublishFields({
    forLoggedInUser: ['services.ibmid'],
    forOtherUsers: ['services.ibmid.username']
  });
}
