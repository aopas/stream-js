import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
export var StreamFileStore = /*#__PURE__*/function () {
  function StreamFileStore(client, token) {
    _classCallCheck(this, StreamFileStore);

    _defineProperty(this, "client", void 0);

    _defineProperty(this, "token", void 0);

    this.client = client;
    this.token = token;
  } // React Native does not auto-detect MIME type, you need to pass that via contentType
  // param. If you don't then Android will refuse to perform the upload

  /**
   * upload a File instance or a readable stream of data
   * @link https://getstream.io/activity-feeds/docs/node/files_introduction/?language=js#upload
   * @param {File|Buffer|NodeJS.ReadStream|string} uri - File object or stream or URI
   * @param {string} [name] - file name
   * @param {string} [contentType] - mime-type
   * @param {function} [onUploadProgress] - browser only, Function that is called with upload progress
   * @return {Promise<FileUploadAPIResponse>}
   */


  _createClass(StreamFileStore, [{
    key: "upload",
    value: function upload(uri, name, contentType, onUploadProgress) {
      return this.client.upload('files/', uri, name, contentType, onUploadProgress);
    }
    /**
     * delete an uploaded file
     * @link https://getstream.io/activity-feeds/docs/node/files_introduction/?language=js#delete
     * @param {string} uri
     */

  }, {
    key: "delete",
    value: function _delete(uri) {
      return this.client.delete({
        url: "files/",
        qs: {
          url: uri
        },
        token: this.token
      });
    }
  }]);

  return StreamFileStore;
}();