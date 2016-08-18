Accounts.oauth.registerService('ibm');

if (Meteor.isClient) {
  Meteor.loginWithIbm = function (options, callback) {
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
    forLoggedInUser: ['services.ibm'],
    forOtherUsers: ['services.ibm.username']
  });
}
