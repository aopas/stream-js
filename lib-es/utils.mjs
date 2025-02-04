import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import _typeof from "@babel/runtime/helpers/typeof";
import FormData from 'form-data';
import { FeedError } from "./errors.mjs";
var validFeedSlugRe = /^[\w]+$/;
var validUserIdRe = /^[\w-]+$/;
/*
 * Validate that the feedSlug matches \w
 */

function validateFeedSlug(feedSlug) {
  if (!validFeedSlugRe.test(feedSlug)) {
    throw new FeedError("Invalid feedSlug, please use letters, numbers or _: ".concat(feedSlug));
  }

  return feedSlug;
}
/*
 * Validate the userId matches \w
 */


function validateUserId(userId) {
  if (!validUserIdRe.test(userId)) {
    throw new FeedError("Invalid userId, please use letters, numbers, - or _: ".concat(userId));
  }

  return userId;
}

function rfc3986(str) {
  return str.replace(/[!'()*]/g, function (c) {
    return "%".concat(c.charCodeAt(0).toString(16).toUpperCase());
  });
}

function isReadableStream(obj) {
  return obj !== null && _typeof(obj) === 'object' && (obj.readable || typeof obj._read === 'function');
}

function isBuffer(obj) {
  return obj != null && obj.constructor != null && // @ts-expect-error
  typeof obj.constructor.isBuffer === 'function' && // @ts-expect-error
  obj.constructor.isBuffer(obj);
}

function isFileWebAPI(uri) {
  return typeof window !== 'undefined' && 'File' in window && uri instanceof File;
}
/*
 * Validate that the feedId matches the spec user:1
 */


function validateFeedId(feedId) {
  var parts = feedId.split(':');

  if (parts.length !== 2) {
    throw new FeedError("Invalid feedId, expected something like user:1 got ".concat(feedId));
  }

  var _parts = _slicedToArray(parts, 2),
      feedSlug = _parts[0],
      userId = _parts[1];

  validateFeedSlug(feedSlug);
  validateUserId(userId);
  return feedId;
}

function addFileToFormData(uri, name, contentType) {
  var data = new FormData();

  if (isReadableStream(uri) || isBuffer(uri) || isFileWebAPI(uri)) {
    if (name) data.append('file', uri, name);else data.append('file', uri);
  } else {
    data.append('file', {
      uri: uri,
      name: name || uri.split('/').reverse()[0],
      type: contentType || undefined,
      contentType: contentType || undefined
    });
  }

  return data;
} // TODO: refactor and add proper types


function replaceStreamObjects(obj) {
  // @ts-expect-error
  if (Array.isArray(obj)) return obj.map(function (v) {
    return replaceStreamObjects(v);
  }); // @ts-expect-error

  if (Object.prototype.toString.call(obj) !== '[object Object]') return obj; // @ts-expect-error

  if (typeof obj.ref === 'function') return obj.ref();
  var cloned = {};
  Object.getOwnPropertyNames(obj).forEach(function (k) {
    // @ts-expect-error
    cloned[k] = replaceStreamObjects(obj[k]);
  }); // @ts-expect-error

  return cloned;
}

export default {
  validateFeedId: validateFeedId,
  validateFeedSlug: validateFeedSlug,
  validateUserId: validateUserId,
  rfc3986: rfc3986,
  isReadableStream: isReadableStream,
  addFileToFormData: addFileToFormData,
  replaceStreamObjects: replaceStreamObjects
};