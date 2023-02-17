import Url from 'url';
import qs from 'qs';
import { MissingSchemaError } from "./errors.mjs";
import utils from "./utils.mjs";
import { JWTScopeToken } from "./signing.mjs"; // TODO: userId is skipped here

/**
 * Creates a redirect url for tracking the given events in the context of
 * an email using Stream's analytics platform. Learn more at
 * getstream.io/personalization
 * @link https://getstream.io/activity-feeds/docs/node/analytics_email/?language=js
 * @method createRedirectUrl
 * @memberof StreamClient.prototype
 * @param  {string} targetUrl Target url
 * @param  {string} userId    User id to track
 * @param  {array} events     List of events to track
 * @return {string}           The redirect url
 */

export default function createRedirectUrl(targetUrl, userId, events) {
  var uri = Url.parse(targetUrl);

  if (!(uri.host || uri.hostname && uri.port)) {
    throw new MissingSchemaError("Invalid URI: \"".concat(Url.format(uri), "\""));
  }

  var authToken = JWTScopeToken(this.apiSecret, 'redirect_and_track', '*', {
    userId: '*',
    expireTokens: this.expireTokens
  });
  var analyticsUrl = "".concat(this.baseAnalyticsUrl, "redirect/");
  var kwargs = {
    auth_type: 'jwt',
    authorization: authToken,
    url: targetUrl,
    api_key: this.apiKey,
    events: JSON.stringify(events)
  };
  var qString = utils.rfc3986(qs.stringify(kwargs));
  return "".concat(analyticsUrl, "?").concat(qString);
}