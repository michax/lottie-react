(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('lottie-web'), require('react')) :
  typeof define === 'function' && define.amd ? define(['exports', 'lottie-web', 'react'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global["lottie-react"] = {}, global.Lottie, global.React));
})(this, (function (exports, lottie, React) { 'use strict';

  function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

  var lottie__default = /*#__PURE__*/_interopDefaultLegacy(lottie);
  var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);

    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      enumerableOnly && (symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      })), keys.push.apply(keys, symbols);
    }

    return keys;
  }

  function _objectSpread2(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = null != arguments[i] ? arguments[i] : {};
      i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }

    return target;
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;

    for (i = 0; i < sourceKeys.length; i++) {
      key = sourceKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      target[key] = source[key];
    }

    return target;
  }

  function _objectWithoutProperties(source, excluded) {
    if (source == null) return {};

    var target = _objectWithoutPropertiesLoose(source, excluded);

    var key, i;

    if (Object.getOwnPropertySymbols) {
      var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

      for (i = 0; i < sourceSymbolKeys.length; i++) {
        key = sourceSymbolKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
        target[key] = source[key];
      }
    }

    return target;
  }

  function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
  }

  function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
  }

  function _iterableToArrayLimit(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;

    var _s, _e;

    try {
      for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"] != null) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
  }

  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;

    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

    return arr2;
  }

  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  var _excluded$1 = ["animationData", "loop", "autoplay", "initialSegment", "onComplete", "onLoopComplete", "onEnterFrame", "onSegmentStart", "onConfigReady", "onDataReady", "onDataFailed", "onLoadedImages", "onDOMLoaded", "onDestroy", "lottieRef", "renderer", "name", "assetsPath", "rendererSettings"];

  var useLottie = function useLottie(props, style) {
    var animationData = props.animationData,
        loop = props.loop,
        autoplay = props.autoplay,
        initialSegment = props.initialSegment,
        onComplete = props.onComplete,
        onLoopComplete = props.onLoopComplete,
        onEnterFrame = props.onEnterFrame,
        onSegmentStart = props.onSegmentStart,
        onConfigReady = props.onConfigReady,
        onDataReady = props.onDataReady,
        onDataFailed = props.onDataFailed,
        onLoadedImages = props.onLoadedImages,
        onDOMLoaded = props.onDOMLoaded,
        onDestroy = props.onDestroy;
        props.lottieRef;
        props.renderer;
        props.name;
        props.assetsPath;
        props.rendererSettings;
        var rest = _objectWithoutProperties(props, _excluded$1);

    var _useState = React.useState(false),
        _useState2 = _slicedToArray(_useState, 2),
        animationLoaded = _useState2[0],
        setAnimationLoaded = _useState2[1];

    var animationInstanceRef = React.useRef();
    var animationContainer = React.useRef(null);
    /*
          ======================================
              INTERACTION METHODS
          ======================================
       */

    /**
     * Play
     */

    var play = function play() {
      var _a;

      (_a = animationInstanceRef.current) === null || _a === void 0 ? void 0 : _a.play();
    };
    /**
     * Stop
     */


    var stop = function stop() {
      var _a;

      (_a = animationInstanceRef.current) === null || _a === void 0 ? void 0 : _a.stop();
    };
    /**
     * Pause
     */


    var pause = function pause() {
      var _a;

      (_a = animationInstanceRef.current) === null || _a === void 0 ? void 0 : _a.pause();
    };
    /**
     * Set animation speed
     * @param speed
     */


    var setSpeed = function setSpeed(speed) {
      var _a;

      (_a = animationInstanceRef.current) === null || _a === void 0 ? void 0 : _a.setSpeed(speed);
    };
    /**
     * Got to frame and play
     * @param value
     * @param isFrame
     */


    var goToAndPlay = function goToAndPlay(value, isFrame) {
      var _a;

      (_a = animationInstanceRef.current) === null || _a === void 0 ? void 0 : _a.goToAndPlay(value, isFrame);
    };
    /**
     * Got to frame and stop
     * @param value
     * @param isFrame
     */


    var goToAndStop = function goToAndStop(value, isFrame) {
      var _a;

      (_a = animationInstanceRef.current) === null || _a === void 0 ? void 0 : _a.goToAndStop(value, isFrame);
    };
    /**
     * Set animation direction
     * @param direction
     */


    var setDirection = function setDirection(direction) {
      var _a;

      (_a = animationInstanceRef.current) === null || _a === void 0 ? void 0 : _a.setDirection(direction);
    };
    /**
     * Play animation segments
     * @param segments
     * @param forceFlag
     */


    var playSegments = function playSegments(segments, forceFlag) {
      var _a;

      (_a = animationInstanceRef.current) === null || _a === void 0 ? void 0 : _a.playSegments(segments, forceFlag);
    };
    /**
     * Set sub frames
     * @param useSubFrames
     */


    var setSubframe = function setSubframe(useSubFrames) {
      var _a;

      (_a = animationInstanceRef.current) === null || _a === void 0 ? void 0 : _a.setSubframe(useSubFrames);
    };
    /**
     * Get animation duration
     * @param inFrames
     */


    var getDuration = function getDuration(inFrames) {
      var _a;

      return (_a = animationInstanceRef.current) === null || _a === void 0 ? void 0 : _a.getDuration(inFrames);
    };
    /**
     * Destroy animation
     */


    var destroy = function destroy() {
      var _a;

      (_a = animationInstanceRef.current) === null || _a === void 0 ? void 0 : _a.destroy();
    };
    /*
          ======================================
              LOTTIE
          ======================================
       */

    /**
     * Load a new animation, and if it's the case, destroy the previous one
     * @param {Object} forcedConfigs
     */


    var loadAnimation = function loadAnimation() {
      var forcedConfigs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      var _a; // Return if the container ref is null


      if (!animationContainer.current) {
        return;
      } // Destroy any previous instance


      (_a = animationInstanceRef.current) === null || _a === void 0 ? void 0 : _a.destroy(); // Build the animation configuration

      var config = _objectSpread2(_objectSpread2(_objectSpread2({}, props), forcedConfigs), {}, {
        container: animationContainer.current
      }); // Save the animation instance


      animationInstanceRef.current = lottie__default["default"].loadAnimation(config);
      setAnimationLoaded(!!animationInstanceRef.current);
    };
    /**
     * Initialize and listen for changes that affect the animation state
     */
    // Reinitialize when animation data changed


    React.useEffect(function () {
      loadAnimation();
    }, [animationData]); // Update the loop state

    React.useEffect(function () {
      if (!animationInstanceRef.current) {
        return;
      }

      animationInstanceRef.current.loop = !!loop;

      if (loop && animationInstanceRef.current.isPaused) {
        animationInstanceRef.current.play();
      }
    }, [loop]); // Update the autoplay state

    React.useEffect(function () {
      if (!animationInstanceRef.current) {
        return;
      }

      animationInstanceRef.current.autoplay = !!autoplay;
    }, [autoplay]); // Update the initial segment state

    React.useEffect(function () {
      if (!animationInstanceRef.current) {
        return;
      } // When null should reset to default animation length


      if (!initialSegment) {
        animationInstanceRef.current.resetSegments(false);
        return;
      } // If it's not a valid segment, do nothing


      if (!Array.isArray(initialSegment) || !initialSegment.length) {
        return;
      } // If the current position it's not in the new segment
      // set the current position to start


      if (animationInstanceRef.current.currentRawFrame < initialSegment[0] || animationInstanceRef.current.currentRawFrame > initialSegment[1]) {
        animationInstanceRef.current.currentRawFrame = initialSegment[0];
      } // Update the segment


      animationInstanceRef.current.setSegment(initialSegment[0], initialSegment[1]);
    }, [initialSegment]);
    /*
          ======================================
              EVENTS
          ======================================
       */

    /**
     * Reinitialize listener on change
     */

    React.useEffect(function () {
      var partialListeners = [{
        name: "complete",
        handler: onComplete
      }, {
        name: "loopComplete",
        handler: onLoopComplete
      }, {
        name: "enterFrame",
        handler: onEnterFrame
      }, {
        name: "segmentStart",
        handler: onSegmentStart
      }, {
        name: "config_ready",
        handler: onConfigReady
      }, {
        name: "data_ready",
        handler: onDataReady
      }, {
        name: "data_failed",
        handler: onDataFailed
      }, {
        name: "loaded_images",
        handler: onLoadedImages
      }, {
        name: "DOMLoaded",
        handler: onDOMLoaded
      }, {
        name: "destroy",
        handler: onDestroy
      }];
      var listeners = partialListeners.filter(function (listener) {
        return listener.handler != null;
      });

      if (!listeners.length) {
        return;
      }

      var deregisterList = listeners.map(
      /**
       * Handle the process of adding an event listener
       * @param {Listener} listener
       * @return {Function} Function that deregister the listener
       */
      function (listener) {
        var _a;

        (_a = animationInstanceRef.current) === null || _a === void 0 ? void 0 : _a.addEventListener(listener.name, listener.handler); // Return a function to deregister this listener

        return function () {
          var _a;

          (_a = animationInstanceRef.current) === null || _a === void 0 ? void 0 : _a.removeEventListener(listener.name, listener.handler);
        };
      }); // Deregister listeners on unmount

      return function () {
        deregisterList.forEach(function (deregister) {
          return deregister();
        });
      };
    }, [onComplete, onLoopComplete, onEnterFrame, onSegmentStart, onConfigReady, onDataReady, onDataFailed, onLoadedImages, onDOMLoaded, onDestroy]);
    /**
     * Build the animation view
     */

    var View = /*#__PURE__*/React__default["default"].createElement("div", _objectSpread2({
      style: style,
      ref: animationContainer
    }, rest));
    return {
      View: View,
      play: play,
      stop: stop,
      pause: pause,
      setSpeed: setSpeed,
      goToAndStop: goToAndStop,
      goToAndPlay: goToAndPlay,
      setDirection: setDirection,
      playSegments: playSegments,
      setSubframe: setSubframe,
      getDuration: getDuration,
      destroy: destroy,
      animationLoaded: animationLoaded,
      animationItem: animationInstanceRef.current
    };
  };

  function getContainerVisibility(container) {
    var _container$getBoundin = container.getBoundingClientRect(),
        top = _container$getBoundin.top,
        height = _container$getBoundin.height;

    var current = window.innerHeight - top;
    var max = window.innerHeight + height;
    return current / max;
  }
  function getContainerCursorPosition(container, cursorX, cursorY) {
    var _container$getBoundin2 = container.getBoundingClientRect(),
        top = _container$getBoundin2.top,
        left = _container$getBoundin2.left,
        width = _container$getBoundin2.width,
        height = _container$getBoundin2.height;

    var x = (cursorX - left) / width;
    var y = (cursorY - top) / height;
    return {
      x: x,
      y: y
    };
  }
  var useInitInteractivity = function useInitInteractivity(_ref) {
    var wrapperRef = _ref.wrapperRef,
        animationItem = _ref.animationItem,
        mode = _ref.mode,
        actions = _ref.actions;
    React.useEffect(function () {
      var wrapper = wrapperRef.current;

      if (!wrapper || !animationItem) {
        return;
      }

      animationItem.stop();

      var scrollModeHandler = function scrollModeHandler() {
        var assignedSegment = null;

        var scrollHandler = function scrollHandler() {
          var currentPercent = getContainerVisibility(wrapper); // Find the first action that satisfies the current position conditions

          var action = actions.find(function (_ref2) {
            var visibility = _ref2.visibility;
            return visibility && currentPercent >= visibility[0] && currentPercent <= visibility[1];
          }); // Skip if no matching action was found!

          if (!action) {
            return;
          }

          if (action.type === "seek" && action.visibility && action.frames.length === 2) {
            // Seek: Go to a frame based on player scroll position action
            var frameToGo = action.frames[0] + Math.ceil((currentPercent - action.visibility[0]) / (action.visibility[1] - action.visibility[0]) * action.frames[1]); //! goToAndStop must be relative to the start of the current segment

            animationItem.goToAndStop(frameToGo - animationItem.firstFrame - 1, true);
          }

          if (action.type === "loop") {
            // Loop: Loop a given frames
            if (assignedSegment === null) {
              // if not playing any segments currently. play those segments and save to state
              animationItem.playSegments(action.frames, true);
              assignedSegment = action.frames;
            } else {
              // if playing any segments currently.
              //check if segments in state are equal to the frames selected by action
              if (assignedSegment !== action.frames) {
                // if they are not equal. new segments are to be loaded
                animationItem.playSegments(action.frames, true);
                assignedSegment = action.frames;
              } else if (animationItem.isPaused) {
                // if they are equal the play method must be called only if lottie is paused
                animationItem.playSegments(action.frames, true);
                assignedSegment = action.frames;
              }
            }
          }

          if (action.type === "play" && animationItem.isPaused) {
            // Play: Reset segments and continue playing full animation from current position
            animationItem.resetSegments(true);
            animationItem.play();
          }

          if (action.type === "stop") {
            // Stop: Stop playback
            animationItem.goToAndStop(action.frames[0] - animationItem.firstFrame - 1, true);
          }
        };

        document.addEventListener("scroll", scrollHandler);
        return function () {
          document.removeEventListener("scroll", scrollHandler);
        };
      };

      var cursorModeHandler = function cursorModeHandler() {
        var handleCursor = function handleCursor(_x, _y) {
          var x = _x;
          var y = _y; // Resolve cursor position if cursor is inside container

          if (x !== -1 && y !== -1) {
            // Get container cursor position
            var pos = getContainerCursorPosition(wrapper, x, y); // Use the resolved position

            x = pos.x;
            y = pos.y;
          } // Find the first action that satisfies the current position conditions


          var action = actions.find(function (_ref3) {
            var position = _ref3.position;

            if (position && Array.isArray(position.x) && Array.isArray(position.y)) {
              return x >= position.x[0] && x <= position.x[1] && y >= position.y[0] && y <= position.y[1];
            }

            if (position && !Number.isNaN(position.x) && !Number.isNaN(position.y)) {
              return x === position.x && y === position.y;
            }

            return false;
          }); // Skip if no matching action was found!

          if (!action) {
            return;
          } // Process action types:


          if (action.type === "seek" && action.position && Array.isArray(action.position.x) && Array.isArray(action.position.y) && action.frames.length === 2) {
            // Seek: Go to a frame based on player scroll position action
            var xPercent = (x - action.position.x[0]) / (action.position.x[1] - action.position.x[0]);
            var yPercent = (y - action.position.y[0]) / (action.position.y[1] - action.position.y[0]);
            animationItem.playSegments(action.frames, true);
            animationItem.goToAndStop(Math.ceil((xPercent + yPercent) / 2 * (action.frames[1] - action.frames[0])), true);
          }

          if (action.type === "loop") {
            animationItem.playSegments(action.frames, true);
          }

          if (action.type === "play") {
            // Play: Reset segments and continue playing full animation from current position
            if (animationItem.isPaused) {
              animationItem.resetSegments(false);
            }

            animationItem.playSegments(action.frames);
          }

          if (action.type === "stop") {
            animationItem.goToAndStop(action.frames[0], true);
          }
        };

        var mouseMoveHandler = function mouseMoveHandler(ev) {
          handleCursor(ev.clientX, ev.clientY);
        };

        var mouseOutHandler = function mouseOutHandler() {
          handleCursor(-1, -1);
        };

        wrapper.addEventListener("mousemove", mouseMoveHandler);
        wrapper.addEventListener("mouseout", mouseOutHandler);
        return function () {
          wrapper.removeEventListener("mousemove", mouseMoveHandler);
          wrapper.removeEventListener("mouseout", mouseOutHandler);
        };
      };

      switch (mode) {
        case "scroll":
          return scrollModeHandler();

        case "cursor":
          return cursorModeHandler();
      }
    }, [mode, animationItem]);
  };

  var useLottieInteractivity = function useLottieInteractivity(_ref4) {
    var actions = _ref4.actions,
        mode = _ref4.mode,
        lottieObj = _ref4.lottieObj;
    var animationItem = lottieObj.animationItem,
        View = lottieObj.View;
    var wrapperRef = React.useRef(null);
    useInitInteractivity({
      actions: actions,
      animationItem: animationItem,
      mode: mode,
      wrapperRef: wrapperRef
    });
    return /*#__PURE__*/React__default["default"].createElement("div", {
      ref: wrapperRef
    }, View);
  };

  var _excluded = ["style", "interactivity"];

  var Lottie = function Lottie(props) {
    var _a;

    var style = props.style,
        interactivity = props.interactivity,
        lottieProps = _objectWithoutProperties(props, _excluded);
    /**
     * Initialize the 'useLottie' hook
     */


    var _useLottie = useLottie(lottieProps, style),
        View = _useLottie.View,
        play = _useLottie.play,
        stop = _useLottie.stop,
        pause = _useLottie.pause,
        setSpeed = _useLottie.setSpeed,
        goToAndStop = _useLottie.goToAndStop,
        goToAndPlay = _useLottie.goToAndPlay,
        setDirection = _useLottie.setDirection,
        playSegments = _useLottie.playSegments,
        setSubframe = _useLottie.setSubframe,
        getDuration = _useLottie.getDuration,
        destroy = _useLottie.destroy,
        animationLoaded = _useLottie.animationLoaded,
        animationItem = _useLottie.animationItem;
    /**
     * Make the hook variables/methods available through the provided 'lottieRef'
     */


    React.useEffect(function () {
      if (props.lottieRef) {
        props.lottieRef.current = {
          play: play,
          stop: stop,
          pause: pause,
          setSpeed: setSpeed,
          goToAndPlay: goToAndPlay,
          goToAndStop: goToAndStop,
          setDirection: setDirection,
          playSegments: playSegments,
          setSubframe: setSubframe,
          getDuration: getDuration,
          destroy: destroy,
          animationLoaded: animationLoaded,
          animationItem: animationItem
        };
      }
    }, [(_a = props.lottieRef) === null || _a === void 0 ? void 0 : _a.current]);

    if (interactivity) {
      var EnhancedView = useLottieInteractivity(_objectSpread2({
        lottieObj: {
          View: View,
          play: play,
          stop: stop,
          pause: pause,
          setSpeed: setSpeed,
          goToAndStop: goToAndStop,
          goToAndPlay: goToAndPlay,
          setDirection: setDirection,
          playSegments: playSegments,
          setSubframe: setSubframe,
          getDuration: getDuration,
          destroy: destroy,
          animationLoaded: animationLoaded,
          animationItem: animationItem
        }
      }, interactivity));
      return EnhancedView;
    }

    return View;
  };

  var Animator = Lottie;
  var useAnimator = useLottie;

  Object.defineProperty(exports, 'LottiePlayer', {
    enumerable: true,
    get: function () { return lottie__default["default"]; }
  });
  exports.Animator = Animator;
  exports["default"] = Lottie;
  exports.useAnimator = useAnimator;
  exports.useLottie = useLottie;
  exports.useLottieInteractivity = useLottieInteractivity;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=index.umd.js.map
