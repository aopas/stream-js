import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _defineProperty from "@babel/runtime/helpers/defineProperty";

/**
 * Manage api calls for personalization
 * The collection object contains convenience functions such as  get, post, delete
 * @class Personalization
 */
export var Personalization = /*#__PURE__*/function () {
  /**
   * Initialize the Personalization class
   * @link https://getstream.io/activity-feeds/docs/node/personalization_introduction/?language=js
   * @method constructor
   * @memberof Personalization.prototype
   * @param {StreamClient} client - The stream client
   */
  function Personalization(client) {
    _classCallCheck(this, Personalization);

    _defineProperty(this, "client", void 0);

    this.client = client;
  }
  /**
   * Get personalized activities for this feed
   *
   * @method get
   * @memberof Personalization.prototype
   * @param {string} resource - personalized resource endpoint i.e "follow_recommendations"
   * @param {object} options  Additional options
   * @return {Promise<PersonalizationAPIResponse<StreamFeedGenerics>>} Promise object. Personalized feed
   * @example client.personalization.get('follow_recommendations', {foo: 'bar', baz: 'qux'})
   */


  _createClass(Personalization, [{
    key: "get",
    value: function get(resource) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return this.client.get({
        url: "".concat(resource, "/"),
        serviceName: 'personalization',
        qs: options,
        token: options.token || this.client.getPersonalizationToken()
      });
    }
    /**
     * Post data to personalization endpoint
     *
     * @method post
     * @memberof Personalization.prototype
     * @param {string} resource - personalized resource endpoint i.e "follow_recommendations"
     * @param {object} options - Additional options
     * @param {object} data - Data to send in the payload
     * @return {Promise<PersonalizationAPIResponse<StreamFeedGenerics>>} Promise object. Data that was posted if successful, or an error.
     * @example client.personalization.post('follow_recommendations', {foo: 'bar', baz: 'qux'})
     */

  }, {
    key: "post",
    value: function post(resource) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var data = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return this.client.post({
        url: "".concat(resource, "/"),
        serviceName: 'personalization',
        qs: options,
        body: data,
        token: this.client.getPersonalizationToken()
      });
    }
    /**
     * Delete metadata or activities
     *
     * @method delete
     * @memberof Personalization.prototype
     * @param {object} resource - personalized resource endpoint i.e "follow_recommendations"
     * @param {object} options - Additional options
     * @return {Promise<PersonalizationAPIResponse<StreamFeedGenerics>>} Promise object. Data that was deleted if successful, or an error.
     * @example client.personalization.delete('follow_recommendations', {foo: 'bar', baz: 'qux'})
     */

  }, {
    key: "delete",
    value: function _delete(resource) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return this.client.delete({
        url: "".concat(resource, "/"),
        serviceName: 'personalization',
        qs: options,
        token: this.client.getPersonalizationToken()
      });
    }
  }]);

  return Personalization;
}();