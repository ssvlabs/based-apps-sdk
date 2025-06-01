"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const tryCatch = require("./try-catch-Zcf3HwdJ.js");
const viem = require("viem");
function identity(value) {
  return value;
}
function apply(func, thisArg, args) {
  switch (args.length) {
    case 0:
      return func.call(thisArg);
    case 1:
      return func.call(thisArg, args[0]);
    case 2:
      return func.call(thisArg, args[0], args[1]);
    case 3:
      return func.call(thisArg, args[0], args[1], args[2]);
  }
  return func.apply(thisArg, args);
}
function copyArray(source, array) {
  var index = -1, length = source.length;
  array || (array = Array(length));
  while (++index < length) {
    array[index] = source[index];
  }
  return array;
}
var HOT_COUNT = 800, HOT_SPAN = 16;
var nativeNow = Date.now;
function shortOut(func) {
  var count = 0, lastCalled = 0;
  return function() {
    var stamp = nativeNow(), remaining = HOT_SPAN - (stamp - lastCalled);
    lastCalled = stamp;
    if (remaining > 0) {
      if (++count >= HOT_COUNT) {
        return arguments[0];
      }
    } else {
      count = 0;
    }
    return func.apply(void 0, arguments);
  };
}
function constant(value) {
  return function() {
    return value;
  };
}
var baseSetToString = !tryCatch.defineProperty ? identity : function(func, string) {
  return tryCatch.defineProperty(func, "toString", {
    "configurable": true,
    "enumerable": false,
    "value": constant(string),
    "writable": true
  });
};
var setToString = shortOut(baseSetToString);
function copyObject(source, props, object, customizer) {
  var isNew = !object;
  object || (object = {});
  var index = -1, length = props.length;
  while (++index < length) {
    var key = props[index];
    var newValue = void 0;
    if (newValue === void 0) {
      newValue = source[key];
    }
    if (isNew) {
      tryCatch.baseAssignValue(object, key, newValue);
    } else {
      tryCatch.assignValue(object, key, newValue);
    }
  }
  return object;
}
var nativeMax = Math.max;
function overRest(func, start, transform) {
  start = nativeMax(start === void 0 ? func.length - 1 : start, 0);
  return function() {
    var args = arguments, index = -1, length = nativeMax(args.length - start, 0), array = Array(length);
    while (++index < length) {
      array[index] = args[start + index];
    }
    index = -1;
    var otherArgs = Array(start + 1);
    while (++index < start) {
      otherArgs[index] = args[index];
    }
    otherArgs[start] = transform(array);
    return apply(func, this, otherArgs);
  };
}
function baseRest(func, start) {
  return setToString(overRest(func, start, identity), func + "");
}
function isIterateeCall(value, index, object) {
  if (!tryCatch.isObject(object)) {
    return false;
  }
  var type = typeof index;
  if (type == "number" ? tryCatch.isArrayLike(object) && tryCatch.isIndex(index, object.length) : type == "string" && index in object) {
    return tryCatch.eq(object[index], value);
  }
  return false;
}
function createAssigner(assigner) {
  return baseRest(function(object, sources) {
    var index = -1, length = sources.length, customizer = length > 1 ? sources[length - 1] : void 0, guard = length > 2 ? sources[2] : void 0;
    customizer = assigner.length > 3 && typeof customizer == "function" ? (length--, customizer) : void 0;
    if (guard && isIterateeCall(sources[0], sources[1], guard)) {
      customizer = length < 3 ? void 0 : customizer;
      length = 1;
    }
    object = Object(object);
    while (++index < length) {
      var source = sources[index];
      if (source) {
        assigner(object, source, index, customizer);
      }
    }
    return object;
  });
}
function nativeKeysIn(object) {
  var result = [];
  if (object != null) {
    for (var key in Object(object)) {
      result.push(key);
    }
  }
  return result;
}
var objectProto$1 = Object.prototype;
var hasOwnProperty$1 = objectProto$1.hasOwnProperty;
function baseKeysIn(object) {
  if (!tryCatch.isObject(object)) {
    return nativeKeysIn(object);
  }
  var isProto = tryCatch.isPrototype(object), result = [];
  for (var key in object) {
    if (!(key == "constructor" && (isProto || !hasOwnProperty$1.call(object, key)))) {
      result.push(key);
    }
  }
  return result;
}
function keysIn(object) {
  return tryCatch.isArrayLike(object) ? tryCatch.arrayLikeKeys(object, true) : baseKeysIn(object);
}
var objectTag = "[object Object]";
var funcProto = Function.prototype, objectProto = Object.prototype;
var funcToString = funcProto.toString;
var hasOwnProperty = objectProto.hasOwnProperty;
var objectCtorString = funcToString.call(Object);
function isPlainObject(value) {
  if (!tryCatch.isObjectLike(value) || tryCatch.baseGetTag(value) != objectTag) {
    return false;
  }
  var proto = tryCatch.getPrototype(value);
  if (proto === null) {
    return true;
  }
  var Ctor = hasOwnProperty.call(proto, "constructor") && proto.constructor;
  return typeof Ctor == "function" && Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString;
}
function createBaseFor(fromRight) {
  return function(object, iteratee, keysFunc) {
    var index = -1, iterable = Object(object), props = keysFunc(object), length = props.length;
    while (length--) {
      var key = props[++index];
      if (iteratee(iterable[key], key, iterable) === false) {
        break;
      }
    }
    return object;
  };
}
var baseFor = createBaseFor();
function assignMergeValue(object, key, value) {
  if (value !== void 0 && !tryCatch.eq(object[key], value) || value === void 0 && !(key in object)) {
    tryCatch.baseAssignValue(object, key, value);
  }
}
function isArrayLikeObject(value) {
  return tryCatch.isObjectLike(value) && tryCatch.isArrayLike(value);
}
function safeGet(object, key) {
  if (key === "constructor" && typeof object[key] === "function") {
    return;
  }
  if (key == "__proto__") {
    return;
  }
  return object[key];
}
function toPlainObject(value) {
  return copyObject(value, keysIn(value));
}
function baseMergeDeep(object, source, key, srcIndex, mergeFunc, customizer, stack) {
  var objValue = safeGet(object, key), srcValue = safeGet(source, key), stacked = stack.get(srcValue);
  if (stacked) {
    assignMergeValue(object, key, stacked);
    return;
  }
  var newValue = customizer ? customizer(objValue, srcValue, key + "", object, source, stack) : void 0;
  var isCommon = newValue === void 0;
  if (isCommon) {
    var isArr = tryCatch.isArray(srcValue), isBuff = !isArr && tryCatch.isBuffer(srcValue), isTyped = !isArr && !isBuff && tryCatch.isTypedArray(srcValue);
    newValue = srcValue;
    if (isArr || isBuff || isTyped) {
      if (tryCatch.isArray(objValue)) {
        newValue = objValue;
      } else if (isArrayLikeObject(objValue)) {
        newValue = copyArray(objValue);
      } else if (isBuff) {
        isCommon = false;
        newValue = tryCatch.cloneBuffer(srcValue, true);
      } else if (isTyped) {
        isCommon = false;
        newValue = tryCatch.cloneTypedArray(srcValue, true);
      } else {
        newValue = [];
      }
    } else if (isPlainObject(srcValue) || tryCatch.isArguments(srcValue)) {
      newValue = objValue;
      if (tryCatch.isArguments(objValue)) {
        newValue = toPlainObject(objValue);
      } else if (!tryCatch.isObject(objValue) || tryCatch.isFunction(objValue)) {
        newValue = tryCatch.initCloneObject(srcValue);
      }
    } else {
      isCommon = false;
    }
  }
  if (isCommon) {
    stack.set(srcValue, newValue);
    mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
    stack["delete"](srcValue);
  }
  assignMergeValue(object, key, newValue);
}
function baseMerge(object, source, srcIndex, customizer, stack) {
  if (object === source) {
    return;
  }
  baseFor(source, function(srcValue, key) {
    stack || (stack = new tryCatch.Stack());
    if (tryCatch.isObject(srcValue)) {
      baseMergeDeep(object, source, key, srcIndex, baseMerge, customizer, stack);
    } else {
      var newValue = customizer ? customizer(safeGet(object, key), srcValue, key + "", object, source, stack) : void 0;
      if (newValue === void 0) {
        newValue = srcValue;
      }
      assignMergeValue(object, key, newValue);
    }
  }, keysIn);
}
var merge = createAssigner(function(object, source, srcIndex) {
  baseMerge(object, source, srcIndex);
});
const createClusterId = (ownerAddress, operatorIds) => {
  if (!viem.isAddress(ownerAddress)) {
    throw new Error("Invalid owner address");
  }
  return `${ownerAddress.toLowerCase()}-${operatorIds.join("-")}`;
};
const isClusterId = (clusterId) => {
  const [ownerAddress, ...operatorIds] = clusterId.split("-");
  return viem.isAddress(ownerAddress) && operatorIds.length >= 4 && operatorIds.every((id) => !isNaN(Number(id)));
};
const createEmptyCluster = (cluster = {}) => merge(
  {
    validatorCount: 0,
    networkFeeIndex: 0n,
    index: 0n,
    balance: 0n,
    active: true
  },
  cluster
);
const add0x = (value) => !value.startsWith("0x") ? `0x${value}` : value;
const numberFormatter = new Intl.NumberFormat("en-US", {
  useGrouping: true,
  maximumFractionDigits: 2
});
const _percentageFormatter = new Intl.NumberFormat("en-US", {
  style: "percent",
  maximumFractionDigits: 2
});
const percentageFormatter = {
  format: (value) => {
    if (!value) return "0%";
    return _percentageFormatter.format(value / 100);
  }
};
const bigintFormatter = new Intl.NumberFormat("en-US", {
  useGrouping: false,
  maximumFractionDigits: 7
});
const ethFormatter = new Intl.NumberFormat("en-US", {
  useGrouping: true,
  maximumFractionDigits: 4
});
const formatSSV = (num, decimals = 18) => ethFormatter.format(+viem.formatUnits(num, decimals));
const formatBigintInput = (num, decimals = 18) => bigintFormatter.format(+viem.formatUnits(num, decimals));
const units = {
  seconds: 1e3,
  minutes: 6e4,
  hours: 36e5,
  days: 864e5,
  weeks: 6048e5,
  months: 2629746e3,
  years: 31556952e3
};
const ms = (value, unit) => {
  return value * units[unit];
};
const sortNumbers = (numbers) => {
  return [...numbers].sort((a, b) => Number(a) - Number(b));
};
const getOperatorIds = (operators) => {
  return sortNumbers(operators.map((operator) => operator.id));
};
const decodeOperatorPublicKey = (publicKey) => {
  return viem.decodeAbiParameters([{ type: "string" }], publicKey)[0];
};
const isKeySharesItem = (item) => {
  return !!item && typeof item === "object" && "data" in item && "payload" in item && "error" in item;
};
var KeysharesValidationErrors = /* @__PURE__ */ ((KeysharesValidationErrors2) => {
  KeysharesValidationErrors2[KeysharesValidationErrors2["OperatorDoesNotExist"] = 0] = "OperatorDoesNotExist";
  KeysharesValidationErrors2[KeysharesValidationErrors2["OperatorMismatch"] = 1] = "OperatorMismatch";
  KeysharesValidationErrors2[KeysharesValidationErrors2["ValidatorAlreadyExists"] = 2] = "ValidatorAlreadyExists";
  KeysharesValidationErrors2[KeysharesValidationErrors2["ClusterMismatch"] = 3] = "ClusterMismatch";
  KeysharesValidationErrors2[KeysharesValidationErrors2["DuplicateValidatorKeys"] = 4] = "DuplicateValidatorKeys";
  KeysharesValidationErrors2[KeysharesValidationErrors2["InconsistentOperatorPublicKeys"] = 5] = "InconsistentOperatorPublicKeys";
  KeysharesValidationErrors2[KeysharesValidationErrors2["InconsistentOperators"] = 6] = "InconsistentOperators";
  return KeysharesValidationErrors2;
})(KeysharesValidationErrors || {});
const KeysharesValidationErrorsMessages = {
  [
    0
    /* OperatorDoesNotExist */
  ]: "Operator not found. Please verify the operator ID.",
  [
    1
    /* OperatorMismatch */
  ]: "Operator details mismatch. Check provided information.",
  [
    2
    /* ValidatorAlreadyExists */
  ]: "Validator public key already in use. Must be unique.",
  [
    3
    /* ClusterMismatch */
  ]: "The operators in the provided keyshares do not match the provided operators. Please ensure the keyshares correspond to the cluster you are trying to register.",
  [
    4
    /* DuplicateValidatorKeys */
  ]: "Duplicate validator keys detected. Each must be unique.",
  [
    5
    /* InconsistentOperatorPublicKeys */
  ]: "Operator public keys mismatch. Verify operator data.",
  [
    6
    /* InconsistentOperators */
  ]: "Inconsistent operator IDs across keyshares. Check all entries."
};
class KeysharesValidationError extends Error {
  constructor(code) {
    super(KeysharesValidationErrorsMessages[code]);
    this.code = code;
  }
}
const validateConsistentOperatorIds = (keyshares) => {
  const operatorIds = sortNumbers(keyshares[0].payload.operatorIds);
  keyshares.every(({ payload, data }) => {
    const payloadOperatorIds = sortNumbers(payload.operatorIds).toString();
    const dataOperatorIds = getOperatorIds(data.operators ?? []).toString();
    const valid = payloadOperatorIds === dataOperatorIds && dataOperatorIds === operatorIds.toString();
    if (!valid) {
      throw new KeysharesValidationError(
        6
        /* InconsistentOperators */
      );
    }
    return true;
  });
  return operatorIds;
};
const ensureValidatorsUniqueness = (keyshares) => {
  const set = new Set(keyshares.map(({ data }) => data.publicKey));
  if (set.size !== keyshares.length) {
    throw new KeysharesValidationError(
      4
      /* DuplicateValidatorKeys */
    );
  }
  return true;
};
const validateConsistentOperatorPublicKeys = (keyshares, operators) => {
  const operatorsMap = new Map(operators.map((o) => [o.id, o.publicKey]));
  const valid = keyshares.every(({ data }) => {
    return data.operators?.every(({ id, operatorKey }) => {
      return operatorsMap.get(id.toString()) === operatorKey;
    });
  });
  if (!valid) {
    throw new KeysharesValidationError(
      5
      /* InconsistentOperatorPublicKeys */
    );
  }
  return valid;
};
const ensureNoKeysharesErrors = (keyshares) => {
  keyshares.forEach((share) => {
    if (share.error) {
      throw share.error;
    }
  });
  return true;
};
exports.bigintAbs = tryCatch.bigintAbs;
exports.bigintFloor = tryCatch.bigintFloor;
exports.bigintMax = tryCatch.bigintMax;
exports.bigintMin = tryCatch.bigintMin;
exports.bigintRound = tryCatch.bigintRound;
exports.bigintifyNumbers = tryCatch.bigintifyNumbers;
exports.configArgsSchema = tryCatch.configArgsSchema;
exports.isBigIntChanged = tryCatch.isBigIntChanged;
exports.roundOperatorFee = tryCatch.roundOperatorFee;
exports.stringifyBigints = tryCatch.stringifyBigints;
exports.tryCatch = tryCatch.tryCatch;
exports.KeysharesValidationError = KeysharesValidationError;
exports.KeysharesValidationErrors = KeysharesValidationErrors;
exports.KeysharesValidationErrorsMessages = KeysharesValidationErrorsMessages;
exports._percentageFormatter = _percentageFormatter;
exports.add0x = add0x;
exports.bigintFormatter = bigintFormatter;
exports.createClusterId = createClusterId;
exports.createEmptyCluster = createEmptyCluster;
exports.decodeOperatorPublicKey = decodeOperatorPublicKey;
exports.ensureNoKeysharesErrors = ensureNoKeysharesErrors;
exports.ensureValidatorsUniqueness = ensureValidatorsUniqueness;
exports.ethFormatter = ethFormatter;
exports.formatBigintInput = formatBigintInput;
exports.formatSSV = formatSSV;
exports.getOperatorIds = getOperatorIds;
exports.isClusterId = isClusterId;
exports.isKeySharesItem = isKeySharesItem;
exports.ms = ms;
exports.numberFormatter = numberFormatter;
exports.percentageFormatter = percentageFormatter;
exports.sortNumbers = sortNumbers;
exports.validateConsistentOperatorIds = validateConsistentOperatorIds;
exports.validateConsistentOperatorPublicKeys = validateConsistentOperatorPublicKeys;
