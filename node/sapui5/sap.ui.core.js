
// ---- _global_ --------------------------------------------------------------------------


// ---- jQuery --------------------------------------------------------------------------

/**
 * 
 * Sets or gets the position of the cursor in an element that supports cursor positioning
 * @param {int} iPos The cursor position to set (or no parameter to retrieve the cursor position)
 * @return {int | jQuery} The cursor position (or the jQuery collection if the position has been set)
 * @public
 * @memberOf jQuery.prototype
 * @since 0.9.0
 */
jQuery.cursorPos = function(iPos) { return null; };

/**
 * 
 * Returns the first focusable domRef in a given container (the first element of the collection)
 * @return {DOMNode} The domRef
 * @public
 * @memberOf jQuery.prototype
 * @since 0.9.0
 */
jQuery.firstFocusableDomRef = function() { return null; };

/**
 * 
 * Returns true if the first element has a set tabindex
 * @return {boolean} If the first element has a set tabindex
 * @public
 * @memberOf jQuery.prototype
 * @since 0.9.0
 */
jQuery.hasTabIndex = function() { return false; };

/**
 * 
 * Extension function to the jQuery.fn which identifies SAPUI5 controls in the given jQuery context.
 * @param {integer} [idx] optional parameter to return the control instance at the given idx's position in the array.
 * @memberOf jQuery.prototype
 * @returns {sap.ui.core.Control[] | sap.ui.core.Control | null} depending on the given context and idx parameter an array of controls, an instance or null.
 * @public
 */
jQuery.jQuery.fn.control = function(idx) { return new Array(); };

/**
 * 
 * Returns the last focusable domRef in a given container
 * @return {DOMNode} The last domRef
 * @public
 * @memberOf jQuery.prototype
 * @since 0.9.0
 */
jQuery.lastFocusableDomRef = function() { return null; };

/**
 * 
 * Returns the outer HTML of the given HTML element
 * @return {String} outer HTML
 * @public
 * @memberOf jQuery.prototype
 * @since 0.9.0
 */
jQuery.outerHTML = function() { return null; };

/**
 * 
 * Gets the next parent DOM element with a given attribute and attribute value starting above the first given element
 * @param {String} sAttibute Name of the attribute
 * @param {String} sValue Value of the attribute (optional)
 * @return {DOMNode} null or the DOM reference
 * @public
 * @memberOf jQuery.prototype
 * @since 0.9.0
 */
jQuery.parentByAttribute = function(sAttibute,sValue) { return null; };

/**
 * 
 * Returns a rectangle describing the current visual positioning of the first DOM object in the collection
 * (or null if no element was given)
 * @return {object} An object with left, top, width and height
 * @public
 * @memberOf jQuery.prototype
 * @since 0.9.0
 */
jQuery.rect = function() { return new Object(); };

/**
 * 
 * Returns whether a point described by X and Y is inside this Rectangle's boundaries
 * @param {int} iPosX
 * @param {int} iPosY
 * @return Whether X and Y are inside this Rectangle's boundaries
 * @public
 * @memberOf jQuery.prototype
 * @since 0.18.0
 */
jQuery.rectContains = function(iPosX,iPosY) { return null; };

/**
 * 
 * Sets or returns the scrollLeft value of the first element in the given jQuery collection in right-to-left mode.
 * Precondition: The element is rendered in RTL mode.
 * </p><p>
 * Reason for this method is that the major browsers use three different values for the same scroll position when in RTL mode.
 * This method hides those differences and returns/applies the same value that would be returned in LTR mode: The distance in px
 * how far the given container is scrolled away from the leftmost scroll position.
 * </p><p>
 * Returns "undefined" if no element and no iPos is given.
 * @return {jQuery | int} The jQuery collection if iPos is given, otherwise the scroll position, counted from the leftmost position
 * @public
 * @memberOf jQuery.prototype
 * @since 0.20.0
 */
jQuery.scrollLeftRTL = function() { return null; };

/**
 * 
 * Returns the MIRRORED scrollLeft value of the first element in the given jQuery collection in right-to-left mode.
 * Precondition: The element is rendered in RTL mode.
 * </p><p>
 * Reason for this method is that the major browsers return three different values for the same scroll position when in RTL mode.
 * This method hides those differences and returns the value that would be returned in LTR mode if the UI would be mirrored horizontally:
 * The distance in px how far the given container is scrolled away from the rightmost scroll position.
 * </p><p>
 * Returns "undefined" if no element is given.
 * @return {int} The scroll position, counted from the rightmost position
 * @public
 * @memberOf jQuery.prototype
 * @since 0.20.0
 */
jQuery.scrollRightRTL = function() { return 0; };

/**
 * 
 * Sets the text selection in the first element of the collection
 * @param {int} iStart Start position of the selection (inclusive)
 * @param {int} iEnd End position of the selection (exclusive)
 * @return {jQuery} The jQuery collection
 * @public
 * @memberOf jQuery.prototype
 * @since 0.9.0
 */
jQuery.selectText = function(iStart,iEnd) { return null; };


// ---- jQuery.device --------------------------------------------------------------------------


// ---- jQuery.device.is --------------------------------------------------------------------------

// dummy function to make Eclipse aware of namespace
jQuery.device.is.toString = function() { return ""; };

// ---- jQuery.Event --------------------------------------------------------------------------

/**
 * 
 * Constructor for a jQuery.Event object.<br/>
 * @see "http://www.jquery.com" and "http://api.jquery.com/category/events/event-object/".
 * @class Check the jQuery.Event class documentation available under "http://www.jquery.com"<br/>
 * and "http://api.jquery.com/category/events/event-object/" for details.
 * @public
 */
jQuery.Event = function() {};
/**
 * 
 * Returns OffsetX of Event. In jQuery there is a bug. In IE the value is in offsetX, in FF in layerX
 * @returns offsetX
 * @public
 */
jQuery.Event.prototype.getOffsetX = function() { return null; };

/**
 * 
 * Returns OffsetY of Event. In jQuery there is a bug. in IE the value is in offsetY, in FF in layerY
 * @returns offsetY
 * @public
 */
jQuery.Event.prototype.getOffsetY = function() { return null; };

/**
 * 
 * Returns an array of names (as strings) identifying {@link jQuery.sap.PseudoEvents} that are fulfilled by this very Event instance.
 * @returns {String[]} Array of names identifying {@link jQuery.sap.PseudoEvents} that are fulfilled by this very Event instance.
 * @public
 */
jQuery.Event.prototype.getPseudoTypes = function() { return new Array(); };

/**
 * 
 * Checks whether this instance of {@link jQuery.Event} is of the given <code>sType</code> pseudo type.
 * @param {string} sType The name of the pseudo type this event should be checked for.
 * @returns {boolean} <code>true</code> if this instance of jQuery.Event is of the given sType, <code>false</code> otherwise.
 * @public
 */
jQuery.Event.prototype.isPseudoType = function(sType) { return false; };


// ---- jQuery.os --------------------------------------------------------------------------

// dummy function to make Eclipse aware of namespace
jQuery.os.toString = function() { return ""; };

// ---- jQuery.sap --------------------------------------------------------------------------

// dummy function to make Eclipse aware of namespace
jQuery.sap.toString = function() { return ""; };
/**
 * 
 * Adds a whitelist entry for URL valiadtion
 * @param {string} protocol The protocol of the URL
 * @param {string} host The host of the URL
 * @param {string} port The port of the URL
 * @param {string} path the path of the URL
 * @public
 * @memberOf jQuery.sap
 */
jQuery.sap.addUrlWhitelist = function(protocol,host,port,path) { return null; };

/**
 * 
 * Calculate delta of old list and new list
 * This implements the algorithm described in "A Technique for Isolating Differences Between Files"
 * (Commun. ACM, April 1978, Volume 21, Number 4, Pages 264-268)
 * @public
 * @param {Array} aOld Old Array
 * @param {Array} aNew New Array
 * @param {function} [fnCompare] Function to compare list entries
 * @return {Array} List of changes
 * @memberOf jQuery.sap
 */
jQuery.sap.arrayDiff = function(aOld,aNew,fnCompare) { return null; };

/**
 * 
 * A simple assertion mechanism that logs a message when a given condition is not met.
 * </p><p>
 * <b>Note:</b> Calls to this method might be removed when the JavaScript code
 *              is optimized during build. Therefore, callers should not rely on any side effects
 *              of this method.
 * @public
 * @static
 * @SecSink {1|SECRET} Could expose secret data in logs
 * @memberOf jQuery.sap
 */
jQuery.sap.assert = function(bResult,sMessage) { return null; };

/**
 * 
 * Binds all events for listening with the given callback function
 * @param {function} fnCallback Callback function
 * @public
 * @memberOf jQuery.sap
 */
jQuery.sap.bindAnyEvent = function(fnCallback) { return null; };

/**
 * 
 * Shortcut for jQuery("#" + id) with additionally the id being escaped properly.
 * I.e.: returns the jQuery object for the DOM element with the given id
 * </p><p>
 * Use this method instead of jQuery(...) if you know the argument is exactly one id and
 * the id is not known in advance because it is in a variable (as opposed to a string
 * constant with known content).
 * @param {String} sId The id to search for and construct the jQuery object
 * @param {DomNode} oContext The context DomNode
 * @return {Object} The jQuery object for the DOM element identified by the given sId
 * @public
 * @since 0.9.1
 * @memberOf jQuery.sap
 */
jQuery.sap.byId = function(sId,oContext) { return null; };

/**
 * 
 * Transforms a hyphen separated string to an camel case string. 
 * @param {string} sString Hyphen separated string
 * @return The transformed string
 * @type {string}
 * @since 1.7.0
 * @public
 * @SecPassthrough {0|return}
 * @memberOf jQuery.sap
 */
jQuery.sap.camelCase = function(sString) { return null; };

/**
 * 
 * Converts a character of the string to upper case.<br/>
 * If no pos is defined as second parameter or pos is negative or greater than sString the first character will be
 * converted into upper case. the first char position is 0.
 * @param {string} sString The string to be checked
 * @param {integer} iPos the position of the character that will be uppercase
 * @return The string with the firstletter in upper case
 * @type {string}
 * @public
 * @SecPassthrough {0|return}
 * @memberOf jQuery.sap
 */
jQuery.sap.charToUpperCase = function(sString,iPos) { return null; };

/**
 * 
 * Checks a given mouseover or mouseout event whether it is
 * equivalent to a mouseenter or mousleave event regarding the given DOM reference.
 * @param {jQuery.Event} oEvent
 * @param {element} oDomRef
 * @public
 * @memberOf jQuery.sap
 */
jQuery.sap.checkMouseEnterOrLeave = function(oEvent,oDomRef) { return null; };

/**
 * 
 * Stops the delayed call.
 * </p><p>
 * The function given when calling delayedCall is not called anymore.
 * @param {string} sDelayedCallId The id returned, when calling delayedCall
 * @public
 * @memberOf jQuery.sap
 */
jQuery.sap.clearDelayedCall = function(sDelayedCallId) { return null; };

/**
 * 
 * Stops the interval call.
 * </p><p>
 * The function given when calling intervalCall is not called anymore.
 * @param {string} sIntervalCallId The id returned, when calling intervalCall
 * @public
 * @memberOf jQuery.sap
 */
jQuery.sap.clearIntervalCall = function(sIntervalCallId) { return null; };

/**
 * 
 * clears the whitelist for URL valiadtion
 * @public
 * @memberOf jQuery.sap
 */
jQuery.sap.clearUrlWhitelist = function() { return null; };

/**
 * 
 * Returns whether oDomRefChild is oDomRefContainer or is contained in oDomRefContainer.
 * </p><p>
 * This is a browser-independent version of the .contains method of Internet Explorer.
 * For compatibility reasons it returns true if oDomRefContainer and oDomRefChild are equal.
 * </p><p>
 * This method intentionally does not operate on the jQuery object, as the original jQuery.contains()
 * method also does not do so.
 * @param {DOMNode} oDomRefContainer The container element
 * @param {DOMNode} oDomRefChild The child element (must not be a text node, must be an element)
 * @return {boolean} 'true' if oDomRefChild is contained in oDomRefContainer or oDomRefChild is oDomRefContainer
 * @public
 * @since 0.9.0
 * @memberOf jQuery.sap
 */
jQuery.sap.containsOrEquals = function(oDomRefContainer,oDomRefChild) { return false; };

/**
 * 
 * Declares a module as existing.
 * </p><p>
 * By default, this function assumes that the module will create a JavaScript object
 * with the same name as the module. As a convenience it ensures that the parent
 * namespace for that object exists (by calling jQuery.sap.getObject).
 * If such an object creation is not desired, <code>bCreateNamespace</code> must be set to false.
 * @param {string || object} sModuleName name of the module to be declared
 *                           or in case of an object {modName: "...", type: "..."}
 *                           where modName is the name of the module and the type
 *                           could be a specific dot separated extension e.g.
 *                           <code>{modName: "sap.ui.core.Dev", type: "view"}</code>
 *                           loads <code>sap/ui/core/Dev.view.js</code> and
 *                           registers as <code>sap.ui.core.Dev.view</code>
 * @param {boolean} [bCreateNamespace=true] whether to create the parent namespace
 * @public
 * @static
 * @memberOf jQuery.sap
 */
jQuery.sap.declare = function(sModuleName,bCreateNamespace) { return null; };

/**
 * 
 * Calls a method after a given delay and returns an id for this timer
 * @param {int} iDelay Delay time in milliseconds
 * @param {object} oObject Object from which the method should be called
 * @param {string|object} Method function pointer or name of the method
 * @param {array} [aParameters] Method parameters
 * @return {string} Id which can be used to cancel the timer with clearDelayedCall
 * @public
 * @memberOf jQuery.sap
 */
jQuery.sap.delayedCall = function(iDelay,oObject,Method,aParameters) { return ""; };

/**
 * 
 * For the given scrollLeft value this method returns the scrollLeft value as understood by the current browser in RTL mode.
 * This value is specific to the given DOM element, as the computation may involve its dimensions.
 * </p><p>
 * So when oDomRef should be scrolled 2px from the leftmost position, the number "2" must be given as iNormalizedScrollLeft
 * and the result of this method (which may be a large or even negative number, depending on the browser) can then be set as
 * oDomRef.scrollLeft to achieve the desired (cross-browser-consistent) scrolling position.
 * </p><p>
 * This method does no scrolling on its own, it only calculates the value to set (so it can also be used for animations).
 * @param {int} iNormalizedScrollLeft The distance from the leftmost position to which the element should be scrolled
 * @param {DOMNode} oDomRef The DOM element to which scrollLeft will be applied
 * @return {int} The scroll position that must be set for the DOM element
 * @public
 * @since 0.20.0
 * @memberOf jQuery.sap
 */
jQuery.sap.denormalizeScrollLeftRTL = function(iNormalizedScrollLeft,oDomRef) { return 0; };

/**
 * 
 * Disable touch to mouse handling
 * @public
 * @memberOf jQuery.sap
 */
jQuery.sap.disableTouchToMouseHandling = function() { return null; };

/**
 * 
 * Shortcut for document.getElementById(), including a bug fix for older IE versions.
 * @param {String} sId The id of the DOM element to return
 * @param {window} [oWindow=window] The window (optional)
 * @return {DOMNode} The DOMNode identified by the given sId
 * @public
 * @since 0.9.0
 * @memberOf jQuery.sap
 */
jQuery.sap.domById = function(sId,oWindow) { return null; };

/**
 * 
 * Encode the string for inclusion into CSS string literals or identifiers
 * @param {string} sString The string to be escaped
 * @return The escaped string
 * @type {string}
 * @public
 * @SecValidate {0|return|XSS} validates the given string for a CSS context
 * @memberOf jQuery.sap
 */
jQuery.sap.encodeCSS = function(sString) { return null; };

/**
 * 
 * Encode the string for inclusion into HTML content/attribute
 * @param {string} sString The string to be escaped
 * @return The escaped string
 * @type {string}
 * @public
 * @SecValidate {0|return|XSS} validates the given string for HTML contexts
 * @memberOf jQuery.sap
 */
jQuery.sap.encodeHTML = function(sString) { return null; };

/**
 * 
 * Encode the string for inclusion into a JS string literal
 * @param {string} sString The string to be escaped
 * @return The escaped string
 * @type {string}
 * @public
 * @SecValidate {0|return|XSS} validates the given string for a JavaScript contexts
 * @memberOf jQuery.sap
 */
jQuery.sap.encodeJS = function(sString) { return null; };

/**
 * 
 * Encode the string for inclusion into an URL parameter
 * @param {string} sString The string to be escaped
 * @return The escaped string
 * @type {string}
 * @public
 * @SecValidate {0|return|XSS} validates the given string for a URL context
 * @memberOf jQuery.sap
 */
jQuery.sap.encodeURL = function(sString) { return null; };

/**
 * 
 * Encode the string for inclusion into XML content/attribute
 * @param {string} sString The string to be escaped
 * @return The escaped string
 * @type {string}
 * @public
 * @SecValidate {0|return|XSS} validates the given string for XML contexts
 * @memberOf jQuery.sap
 */
jQuery.sap.encodeXML = function(sString) { return null; };

/**
 * 
 * Checks whether a given sString ends with sEndString
 * respecting the case of the strings.
 * @param {string} sString The string to be checked
 * @param {string} sEndString The end string to be searched
 * @return True if sString ends with sEndString
 * @type {boolean}
 * @see jQuery.sap.endsWithIgnoreCase
 * @public
 * @memberOf jQuery.sap
 */
jQuery.sap.endsWith = function(sString,sEndString) { return null; };

/**
 * 
 * Checks whether a given sString ends with sEndString
 * ignoring the case of the strings.
 * @param {string} sString the string to be checked
 * @param {string} sEndString the end string to be searched
 * @return true if sString ends with sEndString
 * @type {boolean}
 * @see jQuery.sap.endsWith
 * @public
 * @memberOf jQuery.sap
 */
jQuery.sap.endsWithIgnoreCase = function(sString,sEndString) { return null; };

/**
 * 
 * Compares the two given values for equality, especially takes care not to compare
 * arrays and objects by reference, but compares their content.
 * Note: function does not work with comparing XML objects
 * @param {any} a A value of any type
 * @param {any} b A value of any type
 * @param {int} [maxDepth=10] Maximum recursion depth
 * @return {boolean} Whether a and b are equal
 * @public
 * @memberOf jQuery.sap
 */
jQuery.sap.equal = function(a,b,maxDepth,depth) { return false; };

/**
 * 
 * Encode the string for inclusion into HTML content/attribute.
 * Old name "escapeHTML" kept for backward compatibility
 * @param {string} sString The string to be escaped
 * @return The escaped string
 * @type {string}
 * @public
 * @deprecated Has been renamed, use {@link jQuery.sap.encodeHTML} instead.
 * @memberOf jQuery.sap
 */
jQuery.sap.escapeHTML = function(sString) { return null; };

/**
 * 
 * Encode the string for inclusion into a JS string literal.
 * Old name "escapeJS" kept for backward compatibility
 * @param {string} sString The string to be escaped
 * @return The escaped string
 * @type {string}
 * @public
 * @deprecated Since 1.3.0. Has been renamed, use {@link jQuery.sap.encodeJS} instead.
 * @memberOf jQuery.sap
 */
jQuery.sap.escapeJS = function(sString) { return null; };

/**
 * 
 * This function escapes the reserved letters in Regular Expression
 * @param {string} sString string to escape
 * @return The escaped string
 * @type {string}
 * @since 1.9.3
 * @public
 * @SecPassthrough {0|return}
 * @memberOf jQuery.sap
 */
jQuery.sap.escapeRegExp = function(sString) { return null; };

/**
 * 
 * Returns a new constructor function that creates objects with
 * the given prototype.
 * @return {function} the newly created constructor function
 * @public
 * @static
 * @memberOf jQuery.sap
 */
jQuery.sap.factory = function(oPrototype) { return function() {}; };

/**
 * 
 * Calls focus() on the given DOM element, but catches and ignores any errors that occur when doing so.
 * (i.e. IE8 throws an error when the DOM element is invisible or disabled)
 * @param {DomNode} oDomRef The DOM element to focus (or null - in this case the method does nothing)
 * @return {boolean} Whether the focus() command was executed without an error
 * @public
 * @since 1.1.2
 * @memberOf jQuery.sap
 */
jQuery.sap.focus = function(oDomRef) { return false; };

/**
 * 
 * Creates a string from a pattern by replacing placeholders with concrete values.
 * </p><p>
 * The syntax of the pattern is inspired by (but not fully equivalent to) the 
 * java.util.MessageFormat.
 * </p><p>
 * Placeholders have the form <code>{ integer }</code>, where any occurrence of 
 * <code>{0}</code> is replaced by the value with index 0 in <code>aValues</code>,
 * <code>{1}</code> y the value with index 1 in <code>aValues</code> etc.
 * </p><p>
 * To avoid interpretation of curly braces as placeholders, any non-placeholder fragment 
 * of the pattern can be enclosed in single quotes. The surrounding single quotes will be 
 * omitted from the result. Single quotes that are not meant to escape a fragment and 
 * that should appear in the result, need to be doubled. In the result, only a single 
 * single quote will occur.
 * </p><p>
 * Example Pattern Strings:
 * <pre>
 *   jQuery.sap.formatMessage("Say {0}", ["Hello"]) -> "Say Hello"  // normal use case
 *   jQuery.sap.formatMessage("Say '{0}'", ["Hello"]) -> "Say {0}"  // escaped placeholder
 *   jQuery.sap.formatMessage("Say ''{0}''", ["Hello"]) -> "Say 'Hello'" // doubled single quote 
 *   jQuery.sap.formatMessage("Say '{0}'''", ["Hello"]) -> "Say {0}'" // doubled single quote in quoted fragment
 * </pre>
 * </p><p>
 * In contrast to java.util.MessageFormat, format types or format styles are not supported. 
 * Everything after the argument index and up to the first closing curly brace is ignored.
 * Nested placeholders (as supported by java.lang.MessageFormat for the format type choice)
 * are not ignored but reported as a parse error. 
 * </p><p>
 * This method throws an Error when the pattern syntax is not fulfilled (e.g. unbalanced curly 
 * braces, nested placeholders or a non-numerical argument index).
 * </p><p>
 * This method can also be used as a formatter within a binding. The first part of a composite binding 
 * will be used as pattern, the following parts as aValues. If there is only one value and this
 * value is an array it will be handled like the default described above.
 * @param {string} sPattern A pattern string in the described syntax 
 * @param {any[]} [aValues=[]] The values to be used instead of the placeholders.
 * @return {string} The formatted result string 
 * @since 1.12.5
 * @SecPassthrough {*|return}
 * @public
 * @memberOf jQuery.sap
 */
jQuery.sap.formatMessage = function(sPattern,aValues) { return ""; };

/**
 * 
 * Returns the names of all declared modules.
 * @return {string[]} the names of all declared modules
 * @see jQuery.sap.isDeclared
 * @public
 * @static
 * @memberOf jQuery.sap
 */
jQuery.sap.getAllDeclaredModules = function() { return new Array(); };

/**
 * 
 * Constructs an URL to load the module with the given name and file type (suffix).
 * </p><p>
 * Searches the longest prefix of the given module name for which a registration
 * exists (see {@link jQuery.sap.registerModulePath}) and replaces that prefix
 * by the registered URL prefix.
 * </p><p>
 * The remainder of the module name is appended to the URL, replacing any dot with a slash.
 * </p><p>
 * Finally, the given suffix (typically a file name extension) is added (unconverted).
 * </p><p>
 * The returned name (without the suffix) doesn't end with a slash.
 * @public
 * @static
 * @memberOf jQuery.sap
 */
jQuery.sap.getModulePath = function(sModuleName,sSuffix) { return null; };

/**
 * 
 * Returns a JavaScript object which is identified by a sequence of names.
 * </p><p>
 * A call to <code>getObject("a.b.C")</code> has essentially the same effect
 * as accessing <code>window.a.b.C</code> but with the difference that missing
 * intermediate objects (a or b in the example above) don't lead to an exception.
 * </p><p>
 * When the addressed object exists, it is simply returned. If it doesn't exists,
 * the behavior depends on the value of the second, optional parameter
 * <code>iNoCreates</code> (assuming 'n' to be the number of names in the name sequence):
 * <ul>
 * <li>NaN: if iNoCreates is not a number and the addressed object doesn't exist,
 *          then <code>getObject()</code> returns <code>undefined</code>.
 * <li>0 &lt; iNoCreates &lt; n: any non-existing intermediate object is created, except
 *          the <i>last</i> <code>iNoCreates</code> ones.
 * </ul>
 * </p><p>
 * Example:
 * <pre>
 *   getObject()            -- returns the context object (either param or window)
 *   getObject("a.b.C")     -- will only try to get a.b.C and return undefined if not found.
 *   getObject("a.b.C", 0)  -- will create a, b, and C in that order if they don't exists
 *   getObject("a.b.c", 1)  -- will create a and b, but not C.
 * </pre>
 * </p><p>
 * When a <code>oContext</code> is given, the search starts in that object.
 * Otherwise it starts in the <code>window</code> object that this plugin
 * has been created in.
 * </p><p>
 * Note: Although this method internally uses <code>object["key"]</code> to address object
 *       properties, it does not support all possible characters in a name.
 *       Especially the dot ('.') is not supported in the individual name segments,
 *       as it is always interpreted as a name separator.
 * @param {string} sName  a dot separated sequence of names that identify the required object
 * @param {int}    [iNoCreates=NaN] number of objects (from the right) that should not be created
 * @param {object} [oContext=window] the context to execute the search in
 * @public
 * @static
 * @memberOf jQuery.sap
 */
jQuery.sap.getObject = function(sName,iNoCreates,oContext) { return null; };

/**
 * 
 * Returns a new function that returns the given <code>oValue</code> (using its closure).
 * </p><p>
 * Avoids the need for a dedicated member for the value.
 * </p><p>
 * As closures don't come for free, this function should only be used when polluting
 * the enclosing object is an absolute "must-not" (as it is the case in public base classes).
 * @public
 * @static
 * @memberOf jQuery.sap
 */
jQuery.sap.getter = function(oValue) { return null; };

/**
 * 
 * Creates and returns a new instance of {@link jQuery.sap.util.UriParameters}.
 * </p><p>
 * Example for reading a single URI parameter (or the value of the first
 * occurrence of the URI parameter):
 * <pre>
 * 	var sValue = jQuery.sap.getUriParameters().get("myUriParam");
 * </pre>
 * </p><p>
 * Example for reading the values of the first of the URI parameter
 * (with multiple occurrences):
 * <pre>
 * 	var aValues = jQuery.sap.getUriParameters().get("myUriParam", true);
 * 	for(i in aValues){
 * 	var sValue = aValues[i];
 * 	}
 * </pre>
 * @public
 * @return {jQuery.sap.util.UriParameters} A new URI parameters instance
 * @memberOf jQuery.sap
 */
jQuery.sap.getUriParameters = function(sUri) { return new jQuery.sap.util.UriParameters(); };

/**
 * 
 * Gets the whitelist for URL valiadtion
 * @return {string[]} whitelist
 * @public
 * @memberOf jQuery.sap
 */
jQuery.sap.getUrlWhitelist = function() { return new Array(); };

/**
 * 
 * Executes an 'eval' for its arguments in the global context (without closure variables).
 * </p><p>
 * This is a synchronous replacement for <code>jQuery.globalEval</code> which in some
 * browsers (e.g. FireFox) behaves asynchronously.
 * @type void
 * @public
 * @static
 * @SecSink {0|XSS} Parameter is evaluated
 * @memberOf jQuery.sap
 */
jQuery.sap.globalEval = function() { return null; };

/**
 * 
 * Transforms a camel case string into a hyphen separated string.
 * @param {string} sString camel case string
 * @return The transformed string
 * @type {string}
 * @since 1.15.0
 * @public
 * @SecPassthrough {0|return}
 * @memberOf jQuery.sap
 */
jQuery.sap.hyphen = function(sString) { return null; };

/**
 * 
 * Includes the script (via &lt;script&gt;-tag) into the head for the
 * specified <code>sUrl</code> and optional <code>sId</code>.
 * <br>
 * <i>In case of IE8 only the load callback will work ignoring in case of success and error.</i>
 * @param {string}
 *            sUrl the URL of the script to load
 * @param {string}
 *            [sId] id that should be used for the script include tag
 * @param {function}
 *            [fnLoadCallback] callback function to get notified once the script has been loaded
 * @param {function}
 *            [fnErrorCallback] callback function to get notified once the script loading failed (not supported by IE8)
 * @public
 * @static
 * @SecSink {0|PATH} Parameter is used for future HTTP requests
 * @memberOf jQuery.sap
 */
jQuery.sap.includeScript = function(sUrl,sId,fnLoadCallback,fnErrorCallback) { return null; };

/**
 * 
 * Includes the specified stylesheet via a &lt;link&gt;-tag in the head of the current document. If there is call to
 * <code>includeStylesheet</code> providing the sId of an already included stylesheet, the existing element will be
 * replaced.
 * @param {string}
 *          sUrl the URL of the script to load
 * @param {string}
 *          [sId] id that should be used for the script include tag
 * @param {function}
 *          [fnLoadCallback] callback function to get notified once the link has been loaded
 * @param {function}
 *          [fnErrorCallback] callback function to get notified once the link loading failed
 * @public
 * @static
 * @SecSink {0|PATH} Parameter is used for future HTTP requests
 * @memberOf jQuery.sap
 */
jQuery.sap.includeStyleSheet = function(sUrl,sId,fnLoadCallback,fnErrorCallback) { return null; };

/**
 * 
 * Does some basic modifications to the HTML page that make it more suitable for mobile apps.
 * Only the first call to this method is executed, subsequent calls are ignored. Note that this method is also called by the constructor of toplevel controls like sap.m.App, sap.m.SplitApp and sap.m.Shell.
 * Exception: if no homeIcon was set, subsequent calls have the chance to set it.
 * </p><p>
 * The "options" parameter configures what exactly should be done.
 * </p><p>
 * It can have the following properties:
 * <ul>
 * <li>viewport: whether to set the viewport in a way that disables zooming (default: true)</li>
 * <li>statusBar: the iOS status bar color, "default", "black" or "black-translucent" (default: "default")</li>
 * <li>hideBrowser: whether the browser UI should be hidden as far as possible to make the app feel more native (default: true)</li>
 * <li>preventScroll: whether native scrolling should be disabled in order to prevent the "rubber-band" effect where the whole window is moved (default: true)</li>
 * <li>preventPhoneNumberDetection: whether Safari Mobile should be prevented from transforming any numbers that look like phone numbers into clickable links; this should be left as "true", otherwise it might break controls because Safari actually changes the DOM. This only affects all page content which is created after initMobile is called.</li>
 * <li>rootId: the ID of the root element that should be made fullscreen; only used when hideBrowser is set (default: the document.body)</li>
 * <li>useFullScreenHeight: a boolean that defines whether the height of the html root element should be set to 100%, which is required for other elements to cover the full height (default: true)</li>
 * <li>homeIcon: deprecated since 1.12, use jQuery.sap.setIcons instead.
 * </ul>
 * @param {object}  [options] configures what exactly should be done
 * @param {boolean} [options.viewport=true] whether to set the viewport in a way that disables zooming
 * @param {string}  [options.statusBar='default'] the iOS status bar color, "default", "black" or "black-translucent"
 * @param {boolean} [options.hideBrowser=true] whether the browser UI should be hidden as far as possible to make the app feel more native
 * @param {boolean} [options.preventScroll=true] whether native scrolling should be disabled in order to prevent the "rubber-band" effect where the whole window is moved
 * @param {boolean} [options.preventPhoneNumberDetection=true] whether Safari mobile should be prevented from transforming any numbers that look like phone numbers into clickable links
 * @param {string}  [options.rootId] the ID of the root element that should be made fullscreen; only used when hideBrowser is set. If not set, the body is used
 * @param {boolean} [options.useFullScreenHeight=true] whether the height of the html root element should be set to 100%, which is required for other elements to cover the full height 
 * @param {string}  [options.homeIcon=undefined] deprecated since 1.12, use jQuery.sap.setIcons instead.
 * @param {boolean} [options.homeIconPrecomposed=false] deprecated since 1.12, use jQuery.sap.setIcons instead. 
 * @public
 * @memberOf jQuery.sap
 */
jQuery.sap.initMobile = function(options) { return null; };

/**
 * 
 * Calls a method after a given interval and returns an id for this interval.
 * @param {int} iInterval Interval time in milliseconds
 * @param {object} oObject Object from which the method should be called
 * @param {string|object} Method function pointer or name of the method
 * @param {array} [aParameters] Method parameters
 * @return {string} Id which can be used to cancel the interval with clearIntervalCall
 * @public
 * @memberOf jQuery.sap
 */
jQuery.sap.intervalCall = function(iInterval,oObject,Method,aParameters) { return ""; };

/**
 * 
 * Check whether a given module has been loaded / declared already.
 * </p><p>
 * Returns true as soon as a module has been required the first time, even when 
 * loading/executing it has not finished yet. So the main assertion of a  
 * return value of <code>true</code> is that the necessary actions have been taken
 * to make the module available in the near future. It does not mean, that 
 * the content of the module is already available!
 * </p><p>
 * This fuzzy behavior is necessary to avoid multiple requests for the same module. 
 * As a consequence of the assertion above, a <i>preloaded</i> module does not
 * count as <i>declared</i>. For preloaded modules, an explicit call to 
 * <code>jQuery.sap.require</code> is necessary to make them available. 
 * @param {string} sModuleName name of the module to be checked
 * @return {boolean} whether the module has been declared already
 * @public
 * @static
 * @memberOf jQuery.sap
 */
jQuery.sap.isDeclared = function(sModuleName) { return false; };

/**
 * 
 * Returns a new object which has the given oPrototype as its prototype.
 * </p><p>
 * If several objects with the same prototype are to be created,
 * {@link jQuery.sap.factory} should be used instead.
 * @public
 * @static
 * @memberOf jQuery.sap
 */
jQuery.sap.newObject = function(oPrototype) { return null; };

/**
 * 
 * Returns the window reference for a DomRef
 * @param {DOMNode} oDomRef The DOM reference
 * @return {window} Window reference
 * @public
 * @since 0.9.0
 * @memberOf jQuery.sap
 */
jQuery.sap.ownerWindow = function(oDomRef) { return null; };

/**
 * 
 * Pads a string on the left side until is has the given length.<br/>
 * @param {string} sString The string to be padded
 * @param {string} sPadChar The char to use for the padding
 * @param {integer} iLength the target length of the string
 * @return The padded string
 * @type {string}
 * @public
 * @SecPassthrough {0 1|return}
 * @memberOf jQuery.sap
 */
jQuery.sap.padLeft = function(sString,sPadChar,iLength) { return null; };

/**
 * 
 * Pads a string on the right side until is has the given length.<br/>
 * @param {string} sString The string to be padded
 * @param {string} sPadChar The char to use for the padding
 * @param {integer} iLength the target length of the string
 * @return The padded string
 * @type {string}
 * @public
 * @SecPassthrough {0 1|return}
 * @memberOf jQuery.sap
 */
jQuery.sap.padRight = function(sString,sPadChar,iLength) { return null; };

/**
 * 
 * Parses the specified XML formatted string text using native parsing
 * function of the browser and returns a valid XML document. If an error
 * occurred during parsing a parse error object is returned as property (parseError) of the
 * returned XML document object. The parse error object has the following error
 * information parameters: errorCode, url, reason, srcText, line, linepos, filepos
 * @param {string}
 *            sXMLText the XML data as string
 * @return {object} the parsed XML document with a parseError property as described in
 *         getParseError. An error occurred if the errorCode property of the parseError is != 0.
 * @public
 * @memberOf jQuery.sap
 */
jQuery.sap.parseXML = function(sXMLText) { return new Object(); };

/**
 * 
 * Creates and returns a new instance of {@link jQuery.sap.util.Properties}.
 * </p><p>
 * If option 'url' is passed, immediately a load request for the given target is triggered.
 * A property file that is loaded can contain comments with a leading ! or #.
 * The loaded property list does not contain any comments.
 * </p><p>
 * <b>Example for loading a property file:</b>
 * <pre>
 *  jQuery.sap.properties({url : "../myProperty.properties"});
 * </pre>
 * </p><p>
 * <b>Example for creating an empty properties instance:</b>
 * <pre>
 *  jQuery.sap.properties();
 * </pre>
 * </p><p>
 * <b>Examples for getting and setting properties:</b>
 * <pre>
 * 	var oProperties = jQuery.sap.properties();
 * 	oProperties.setProperty("KEY_1","Test Key");
 * 	var sValue1 = oProperties.getProperty("KEY_1");
 * 	var sValue2 = oProperties.getProperty("KEY_2","Default");
 * </pre>
 * @public
 * @param {object} [mParams] Parameters used to initialize the property list
 * @param {string} [mParams.url] The URL to the .properties file which should be loaded.
 * @param {object} [mParams.headers] A map of additional header key/value pairs to send along with the request (see headers option of jQuery.ajax). 
 * @return {jQuery.sap.util.Properties} A new property list instance
 * @SecSink {0|PATH} Parameter is used for future HTTP requests
 * @memberOf jQuery.sap
 */
jQuery.sap.properties = function(mParams) { return new jQuery.sap.util.Properties(); };

/**
 * 
 * Registers an URL prefix for a module name prefix.
 * </p><p>
 * Before a module is loaded, the longest registered prefix of its module name
 * is searched for and the associated URL prefix is used as a prefix for the request URL.
 * The remainder of the module name is attached to the request URL by replacing
 * dots ('.') with slashes ('/').
 * </p><p>
 * The registration and search operates on full name segments only. So when a prefix
 * </p><p>
 *    'sap.com'  ->  'http://www.sap.com/ui5/resources/'
 * </p><p>
 * is registered, then it will match the name
 * </p><p>
 *    'sap.com.Button'
 * </p><p>
 * but not
 * </p><p>
 *    'sap.commons.Button'
 * </p><p>
 * Note that the empty prefix ('') will always match and thus serves as a fallback for
 * any search.
 * @public
 * @static
 * @SecSink {1|PATH} Parameter is used for future HTTP requests
 * @memberOf jQuery.sap
 */
jQuery.sap.registerModulePath = function(sModuleName,sUrlPrefix) { return null; };

/**
 * 
 * Registers an URL prefix for a resource name prefix.
 * </p><p>
 * Before a resource is loaded, the longest registered prefix of its module name
 * is searched for and the associated URL prefix is used as a prefix for the request URL.
 * The remainder of the resource name is attached to the request URL 1:1.
 * </p><p>
 * The registration and search operates on full name segments only. So when a prefix
 * </p><p>
 *    'sap/com'  ->  'http://www.sap.com/ui5/resources/'
 * </p><p>
 * is registered, then it will match the name
 * </p><p>
 *    'sap/com/Button'
 * </p><p>
 * but not
 * </p><p>
 *    'sap/commons/Button'
 * </p><p>
 * Note that the empty prefix ('') will always match and thus serves as a fallback for
 * any search.
 * @public
 * @static
 * @SecSink {1|PATH} Parameter is used for future HTTP requests
 * @memberOf jQuery.sap
 */
jQuery.sap.registerResourcePath = function(sResourceNamePrefix,sUrlPrefix) { return null; };

/**
 * 
 * Removes a whitelist entry for URL valiadtion
 * @param {int} iIndex index of entry
 * @public
 * @memberOf jQuery.sap
 */
jQuery.sap.removeUrlWhitelist = function(iIndex) { return null; };

/**
 * 
 * Ensures that the given module is loaded and executed before execution of the
 * current script continues.
 * </p><p>
 * By issuing a call to this method, the caller declares a dependency to the listed modules.
 * </p><p>
 * Any required and not yet loaded script will be loaded and execute synchronously.
 * Already loaded modules will be skipped.
 * @param {string... || object} sModuleName one or more names of modules to be loaded
 *                              or in case of an object {modName: "...", type: "..."}
 *                              where modName is the name of the module and the type
 *                              could be a specific dot separated extension e.g.
 *                              <code>{modName: "sap.ui.core.Dev", type: "view"}</code>
 *                              loads <code>sap/ui/core/Dev.view.js</code> and
 *                              registers as <code>sap.ui.core.Dev.view</code>
 * @public
 * @static
 * @SecSink {0|PATH} Parameter is used for future HTTP requests
 * @memberOf jQuery.sap
 */
jQuery.sap.require = function(sModuleName,fnCallback) { return null; };

/**
 * 
 * Creates and returns a new instance of {@link jQuery.sap.util.ResourceBundle}
 * using the given URL and locale to determine what to load.
 * @public
 * @param {object} [mParams] Parameters used to initialize the resource bundle
 * @param {string} [mParams.url=""] The URL to the base .properties file of a bundle (.properties file without any locale information, e.g. "mybundle.properties")
 * @param {string} [mParams.locale="en"] Optional string of the language and an optional country code separated by underscore (e.g. "en_GB" or "fr")
 * @param {boolean} [mParams.includeInfo=false] Optional boolean whether to include origin information into the returned property values
 * @return {jQuery.sap.util.ResourceBundle} A new resource bundle instance
 * @SecSink {0|PATH} Parameter is used for future HTTP requests
 * @memberOf jQuery.sap
 */
jQuery.sap.resources = function(mParams) { return new jQuery.sap.util.ResourceBundle(); };

/**
 * 
 * Returns the size (width of the vertical / height of the horizontal) native browser scrollbars.
 * </p><p>
 * This function must only be used when the DOM is ready.
 * @param {String} [sClasses=null] the CSS class that should be added to the test element.
 * @param {boolean} [bForce=false] force recalculation of size (e.g. when CSS was changed). When no classes are passed all calculated sizes are reset.
 * @return {object} JSON object with properties <code>width</code> and <code>height</code> (the values are of type number and are pixels).
 * @public
 * @since 1.4.0
 * @memberOf jQuery.sap
 */
jQuery.sap.scrollbarSize = function(sClasses,bForce) { return new Object(); };

/**
 * 
 * Serializes the specified XML document into a string representation.
 * @param {string}
 *            oXMLDocument the XML document object to be serialized as string
 * @return {object} the serialized XML string
 * @public
 * @memberOf jQuery.sap
 */
jQuery.sap.serializeXML = function(oXMLDocument) { return new Object(); };

/**
 * 
 * Sets an object property to a given value, where the property is
 * identified by a sequence of names (path).
 * </p><p>
 * When a <code>oContext</code> is given, the path starts in that object.
 * Otherwise it starts in the <code>window</code> object that this plugin
 * has been created for.
 * </p><p>
 * Note: Although this method internally uses <code>object["key"]</code> to address object
 *       properties, it does not support all possible characters in a name.
 *       Especially the dot ('.') is not supported in the individual name segments,
 *       as it is always interpreted as a name separator.
 * @param {string} sName  a dot separated sequence of names that identify the property
 * @param {any}    vValue value to be set, can have any type
 * @param {object} [oContext=window] the context to execute the search in
 * @public
 * @static
 * @memberOf jQuery.sap
 */
jQuery.sap.setObject = function(sName,vValue,oContext) { return null; };

/**
 * 
 * Convenience wrapper around <code>jQuery.ajax()</code> that avoids the need for callback functions when
 * synchronous calls are made. If the setting <code>complexResult</code> is true (default), then the return value
 * is an object with the following properties
 * <ul>
 * <li><code>success</code> boolean whether the call succeeded or not
 * <li><code>data</code> any the data returned by the call. For dataType 'text' this is a string,
 *                       for JSON it is an object, for XML it is a document. When the call failed, then data is not defined
 * <li><code>status</code> string a textual status ('success,', 'error', 'timeout',...)
 * <li><code>statusCode</code> string the HTTP status code of the request
 * <li><code>error</code> Error an error object (exception) in case an error occurred
 * </ul>
 * </p><p>
 * When <code>complexResult</code> is false, then in the case of success, only 'data' is returned, in case of an error the
 * 'fallback' setting is returned (defaults to undefined).
 * </p><p>
 * Note that async=false is always enforced by this method.
 * @param {String} oOrigSettings the ajax() settings
 * @return result, see above
 * @public
 * @since 0.9.0
 * @SecSink {0|PATH} Parameter is used for future HTTP requests
 * @memberOf jQuery.sap
 */
jQuery.sap.sjax = function(oOrigSettings) { return null; };

/**
 * 
 * Checks whether a given sString starts with sStartString
 * respecting the case of the strings.
 * @param {string} sString The string to be checked
 * @param {string} sStartString The start string to be searched
 * @return True if sString ends with sEndString
 * @type {boolean}
 * @see jQuery.sap.startsWithIgnoreCase
 * @public
 * @memberOf jQuery.sap
 */
jQuery.sap.startsWith = function(sString,sStartString) { return null; };

/**
 * 
 * Checks whether a given sString starts with sStartString
 * ignoring the case of the strings.
 * @param {string} sString The string to be checked
 * @param {string} sStartString The start string to be searched
 * @return True if sString ends with sEndString
 * @type {boolean}
 * @see jQuery.sap.startsWith
 * @public
 * @memberOf jQuery.sap
 */
jQuery.sap.startsWithIgnoreCase = function(sString,sStartString) { return null; };

/**
 * 
 * Returns a {@link jQuery.sap.storage.Storage Storage} object for a given HTML5 storage (type) and,
 * as a convenience, provides static functions to access the default (session) storage.
 * </p><p>
 * When called as a function, it returns an instance of {@link jQuery.sap.storage.Storage}, providing access 
 * to the storage of the given {@link jQuery.sap.storage.Type} or to the given HTML5 Storage object.
 * </p><p>
 * The default session storage can be easily accessed with methods {@link jQuery.sap.storage.get}, 
 * {@link jQuery.sap.storage.put}, {@link jQuery.sap.storage.remove}, {@link jQuery.sap.storage.clear},
 * {@link jQuery.sap.storage.getType} and {@link jQuery.sap.storage.removeAll}
 * @param {jQuery.sap.storage.Type | Storage} 
 *     oStorage the type specifying the storage to use or an object implementing the browser's Storage API.
 * @param {string} [sIdPrefix] Prefix used for the Ids. If not set a default prefix is used.    
 * @returns {jQuery.sap.storage.Storage}
 * @version 1.15.1-SNAPSHOT
 * @since 0.11.0
 * @public
 * @borrows jQuery.sap.storage.Storage.get as get
 * @borrows jQuery.sap.storage.Storage.put as put
 * @borrows jQuery.sap.storage.Storage.remove as remove
 * @borrows jQuery.sap.storage.Storage.clear as clear
 * @borrows jQuery.sap.storage.Storage.getType as getType
 * @borrows jQuery.sap.storage.Storage.removeAll as removeAll
 * @memberOf jQuery.sap
 */
jQuery.sap.storage = function(oStorage,sIdPrefix) { return new jQuery.sap.storage.Storage(); };

/**
 * 
 * Convenience wrapper for {@link jQuery.sap.sjax} that enforeces the Http method GET and defaults the
 * data type of the result to 'text'.
 * @param {String} sUrl the URL
 * @param {String|object} data request parameters in the format accepted by jQuery.ajax()
 * @param {String} [sDataType='text'] the type of data expected from the server, default is "text"
 * @return result @see jQuery.sap.sjax
 * @public
 * @since 0.9.0
 * @SecSink {0 1|PATH} Parameter is used for future HTTP requests
 * @SecSource {return} Returned value is under control of an external resource
 * @memberOf jQuery.sap
 */
jQuery.sap.syncGet = function(sUrl,data,sDataType) { return null; };

/**
 * 
 * Convenience wrapper for {@link jQuery.sap.sjax} that enforces the Http method GET and the data type 'json'.
 * If a fallback value is given, the function simply returns the response as an object or - if some error occurred -
 * the fallback value. This is useful for applications that don't require detailed error diagnostics.
 * </p><p>
 * If applications need to know about occurring errors, they can either call <code>sjax()</code> directly
 * or they can omit the fallback value (providing only two parameters to syncGetJSON()).
 * They then receive the same complex result object as for the sjax() call.
 * </p><p>
 * Note that providing "undefined" or "null" as a fallback is different from omitting the fallback (complex result).
 * @param {String} sUrl the URL
 * @param {String|object} data request parameters in the format accepted by jQuery.ajax()
 * @param {object} [fallback] if set, only data is returned (and this fallback instead in case of errors); if unset, a result structure is returned
 * @return result @see jQuery.sap.sjax
 * @public
 * @since 0.9.0
 * @SecSink {0 1|PATH} Parameter is used for future HTTP requests
 * @memberOf jQuery.sap
 */
jQuery.sap.syncGetJSON = function(sUrl,data,fallback) { return null; };

/**
 * 
 * Convenience wrapper for {@link jQuery.sap.sjax} that enforces the Http method GET and the data type 'text'.
 * If a fallback value is given, the function simply returns the response as a text or - if some error occurred -
 * the fallback value. This is useful for applications that don't require detailed error diagnostics.
 * </p><p>
 * If applications need to know about occurring errors, they can either call <code>sjax()</code> directly
 * or they can omit the fallback value (providing only two parameters to syncGetText()).
 * They then receive the same complex result object as for the sjax() call.
 * @param {String} sUrl the URL
 * @param {String|object} data request parameters in the format accepted by jQuery.ajax()
 * @param {String} [fallback] if set, only data is returned (and this fallback instead in case of errors); if unset, a result structure is returned
 * @return  result @see jQuery.sap.sjax
 * @public
 * @since 0.9.0
 * @SecSink {0 1|PATH} Parameter is used for future HTTP requests
 * @memberOf jQuery.sap
 */
jQuery.sap.syncGetText = function(sUrl,data,fallback) { return null; };

/**
 * 
 * Convenience wrapper for {@link jQuery.sap.sjax} that enforces the Http method POST and defaults the
 * data type of the result to 'text'.
 * @param {String} sUrl the URL
 * @param {String|object} data request parameters in the format accepted by jQuery.ajax()
 * @param {String} [sDataType='text'] the type of data expected from the server, default is "text"
 * @return result @see jQuery.sap.sjax
 * @public
 * @since 0.9.0
 * @SecSink {0 1|PATH} Parameter is used for future HTTP requests
 * @SecSource {return} Returned value is under control of an external resource
 * @memberOf jQuery.sap
 */
jQuery.sap.syncPost = function(sUrl,data,sDataType) { return null; };

/**
 * 
 * Creates and returns a pseudo-unique id.
 * </p><p>
 * No means for detection of overlap with already present or future UIDs.
 * @return {string} A pseudo-unique id.
 * @public
 * @memberOf jQuery.sap
 */
jQuery.sap.uid = function() { return ""; };

/**
 * 
 * Unbinds all events for listening with the given callback function
 * @param {function} fnCallback Callback function
 * @public
 * @memberOf jQuery.sap
 */
jQuery.sap.unbindAnyEvent = function(fnCallback) { return null; };

/**
 * 
 * Sorts the given array in-place and removes any duplicates (identified by "===").
 * </p><p>
 * Use <code>jQuery.unique()</code> for arrays of DOMElements.
 * @param {Array} a An Array of any type
 * @return {Array} Same array as given (for chaining)
 * @public
 * @memberOf jQuery.sap
 */
jQuery.sap.unique = function(a) { return null; };

/**
 * 
 * Validates an URL. Check if it's not a script or other security issue.
 * @param {string} sUrl
 * @return true if valid, false if not valid
 * @public
 * @memberOf jQuery.sap
 */
jQuery.sap.validateUrl = function(sUrl) { return null; };


// ---- jQuery.sap.history --------------------------------------------------------------------------

/**
 * 
 * Initialize the history handling and set the routes and default handler.
 * This should be only called once with the mSettings set in the right format. If the mSettings is not an object,
 * you have another chance to call this function again to initialize the history handling. But once the mSettings
 * is set with an object, you can only call the addRoute and setDefaultHandler to set the data.
 * @param {object} mSettings The map that contains data in format:
 * <pre>
 * {
 * 	routes: [{
 * 		path: string //identifier for one kind of hash
 * 		handler: function	//function what will be called when the changed hash is matched against the path.
 * 							//first parameter: the json data passed in when calling the addHistory
 * 							//second parameter: the type of the navigation {@link jQuery.sap.history.NavType}
 * 		}],
 * 		defaultHandler: function	//this function will be called when empty hash is matched
 * 									//first parameter: the type of the navigation {@link jQuery.sap.history.NavType}
 * }
 * </pre>
 * @public
 * @class Enables the back and forward buttons in browser to navigate back or forth through the browser history stack.<br/><br/>
 * </p><p>
 * It also supports adding virtual history which used only to mark some intermediate state in order to navigate back to the previous state. 
 * And this state will be skipped from the browser history stack immediately after a new history state is added to the history stack after this state <br/><br/>
 * </p><p>
 * By providing the hash saved from the return value of calling jQuery.sap.history.addHistory, jQuery.sap.history.backToHash will navigate back directly to the
 * history state with the same hash. <br/><br/>
 * </p><p>
 * Please use jQuery.sap.history.back() to go one step back in the history stack instead of using window.history.back(), because it handles the empty history stack
 * situation and will call the defaultHandler for this case. <br/><br/>
 * </p><p>
 * </p><p>
 * Example for the usage of history handling:
 * <pre>
 * 	//Initialization
 * 	jQuery.sap.history({
 * 		routes: [], //please refer to the jQuery.sap.history function comment for the format. 
 * 		defaultHandler: function(){
 * 			//code here
 * 		}
 * 	});
 *   
 * 	//add history
 * 	var hash = jQuery.sap.history.addHistory("IDENTIFIER", jsonData);
 *   
 * 	//add virtual history
 * 	jQuery.sap.history.addVirtualHistory();
 *   
 * 	//back to hash
 * 	jQuery.sap.history.backToHash(hash);
 *   
 * 	//back one step along the history stack
 * 	jQuery.sap.history.back();
 * </pre>
 */
jQuery.sap.history = function(mSettings) {};
/**
 * 
 * This function adds a history record. It will not trigger the related handler of the routes, the changes have to be done by the
 * developer. Normally, a history record should be added when changes are done already. 
 * @param {string} sIdf The identifier defined in the routes which will be matched in order to call the corresponding handler
 * @param {object} oStateData The object passed to the corresponding handler when the identifier is matched with the url hash
 * @param {boolean} bBookmarkable Default value is set to true. If this is set to false, the default handler will be called when this identifier and data are matched
 * @param {boolean} [bVirtual] This states if the history is a virtual history that should be skipped when going forward or backward in the history stack.
 * @returns sHash The complete hash string which contains the identifier, stringified data, optional uid, and bookmarkable digit. This hash can be passed into 
 * 			the backToHash function when navigating back to this state is intended.
 * @type {string}
 * @public
 * 
 */
jQuery.sap.history.prototype.addHistory = function(sIdf,oStateData,bBookmarkable,bVirtual) { return null; };

/**
 * 
 * Adds a route to the history handling.
 * @param {string} sIdf The identifier that is matched with the hash in the url in order to call the corresponding handler.
 * @param {function} fn The function that will be called when the identifier is matched with the hash.
 * @param {object} [oThis] If oThis is provided, the fn function's this keyword will be bound to this object.
 * @returns It returns the this object to enable chaining.
 * @type {object}
 * @public
 * 
 */
jQuery.sap.history.prototype.addRoute = function(sIdf,fn,oThis) { return null; };

/**
 * 
 * This function adds a virtual history record based on the current hash. A virtual record is only for marking the current state of the application, 
 * and when the back button clicked it will return to the previous state. It is used when the marked state shouldn't be seen by the user when user click
 * the back or forward button of the browser. For example, when showing a context menu a virtual history record should be added and this record will be skipped
 * when user navigates back and it will return directly to the previous history record. If you avoid adding the virtual history record, it will return to one
 * history record before the one your virtual record is based on. That's why virtual record is necessary.
 * @public
 * 
 */
jQuery.sap.history.prototype.addVirtualHistory = function() { return null; };

/**
 * 
 * This function navigates back through the history stack. The number of steps is set by the parameter iSteps. It also handles the situation when it's called while there's nothing in the history stack.
 * Normally this happens when the application is restored from the bookmark. If there's nothing in the history stack, the default handler will be called with NavType jQuery.sap.history.NavType.Back.
 * @param {int} [iSteps] how many steps you want to go back, by default the value is 1.
 * @public
 * 
 */
jQuery.sap.history.prototype.back = function(iSteps) { return null; };

/**
 * 
 * This function will navigate back to the recent history state which has the sPath identifier. It is usually used to navigate back along one
 * specific route and jump over the intermediate history state if there are any.
 * @param {string} sPath The route identifier to which the history navigates back.
 * @public
 * 
 */
jQuery.sap.history.prototype.backThroughPath = function(sPath) { return null; };

/**
 * 
 * This function calculate the number of back steps to the specific sHash passed as parameter,
 * and then go back to the history state with this hash.
 * @param {string} sHash The hash string needs to be navigated. This is normally returned when you call the addhistory method.
 * @public
 * 
 */
jQuery.sap.history.prototype.backToHash = function(sHash) { return null; };

/**
 * 
 * Set the default handler which will be called when there's an empty hash in the url.
 * @param {function} fn The function that will be set as the default handler
 * @public
 * 
 */
jQuery.sap.history.prototype.setDefaultHandler = function(fn) { return null; };


// ---- jQuery.sap.history.NavType --------------------------------------------------------------------------

// dummy function to make Eclipse aware of namespace
jQuery.sap.history.NavType.toString = function() { return ""; };

// ---- jQuery.sap.KeyCodes --------------------------------------------------------------------------

// dummy function to make Eclipse aware of namespace
jQuery.sap.KeyCodes.toString = function() { return ""; };

// ---- jQuery.sap.log --------------------------------------------------------------------------

/**
 * 
 * Allows to add a new LogListener that will be notified for new log entries.
 * The given object must provide method <code>onLogEntry</code> and can also be informed
 * about <code>onDetachFromLog</code> and <code>onAttachToLog</code>
 * @param {object} oListener The new listener object that should be informed
 * @return {jQuery.sap.log} The global logger
 * @public
 * @static
 * @memberOf jQuery.sap.log
 */
jQuery.sap.log.addLogListener = function(oListener) { return new jQuery.sap.log(); };

/**
 * 
 * Creates a new debug-level entry in the log with the given message, details and calling component.
 * @param {string} sMessage Message text to display
 * @param {string} [sDetails=""] Details about the message, might be omitted
 * @param {string} [sComponent=""] Name of the component that produced the log entry
 * @return {jQuery.sap.log.Logger} The log instance
 * @public
 * @SecSink {0 1 2|SECRET} Could expose secret data in logs
 * @memberOf jQuery.sap.log
 */
jQuery.sap.log.debug = function(sMessage,sDetails,sComponent) { return new jQuery.sap.log.Logger(); };

/**
 * 
 * Creates a new error-level entry in the log with the given message, details and calling component.
 * @param {string} sMessage Message text to display
 * @param {string} [sDetails=""] Details about the message, might be omitted
 * @param {string} [sComponent=""] Name of the component that produced the log entry
 * @return {jQuery.sap.log.Logger} The log instance
 * @public
 * @SecSink {0 1 2|SECRET} Could expose secret data in logs
 * @memberOf jQuery.sap.log
 */
jQuery.sap.log.error = function(sMessage,sDetails,sComponent) { return new jQuery.sap.log.Logger(); };

/**
 * 
 * Creates a new fatal-level entry in the log with the given message, details and calling component.
 * @param {string} sMessage Message text to display
 * @param {string} [sDetails=""] Details about the message, might be omitted
 * @param {string} [sComponent=""] Name of the component that produced the log entry
 * @return {jQuery.sap.log.Logger} The log instance for method chaining
 * @public
 * @SecSink {0 1 2|SECRET} Could expose secret data in logs
 * @memberOf jQuery.sap.log
 */
jQuery.sap.log.fatal = function(sMessage,sDetails,sComponent) { return new jQuery.sap.log.Logger(); };

/**
 * 
 * Returns the log level currently effective for the given component.
 * If no component is given or when no level has been configured for a
 * given component, the log level for the default component of this logger is returned.
 * @param {string} [sComponent] Name of the component to retrieve the log level for
 * @return {int} The log level for the given component or the default log level
 * @public
 * @since 1.1.2
 * @memberOf jQuery.sap.log
 */
jQuery.sap.log.getLevel = function(sComponent) { return 0; };

/**
 * 
 * Retrieves the currently recorded log entries.
 * @deprecated Since 1.1.2. To avoid confusion with getLogger, this method has been renamed to {@link jQuery.sap.log.getLogEntries}.
 * @public
 * @static
 * @memberOf jQuery.sap.log
 */
jQuery.sap.log.getLog = function() { return null; };

/**
 * 
 * Returns the logged entries recorded so far as an array.
 * </p><p>
 * Log entries are plain JavaScript objects with the following properties
 * <ul>
 * <li>timestamp {number} point in time when the entry was created
 * <li>level {int} LogLevel level of the entry
 * <li>message {string} message text of the entry
 * </ul>
 * @return {object[]} an array containing the recorded log entries
 * @public
 * @static
 * @since 1.1.2
 * @memberOf jQuery.sap.log
 */
jQuery.sap.log.getLogEntries = function() { return new Array(); };

/**
 * 
 * Returns a {@link jQuery.sap.log.Logger} for the given component.
 * </p><p>
 * The method might or might not return the same logger object across multiple calls.
 * While loggers are assumed to be light weight objects, consumers should try to
 * avoid redundant calls and instead keep references to already retrieved loggers.
 * </p><p>
 * The optional second parameter <code>iDefaultLogLevel</code> allows to specify 
 * a default log level for the component. It is only applied when no log level has been 
 * defined so far for that component (ignoring inherited log levels). If this method is 
 * called multiple times for the same component but with different log levels, 
 * only the first call one might be taken into account.
 * @param {string} sComponent Component to create the logger for
 * @param {int} [iDefaultLogLevel] a default log level to be used for the component, 
 *   if no log level has been defined for it so far.
 * @return {jQuery.sap.log.Logger} A logger for the component.
 * @public
 * @static
 * @since 1.1.2
 * @memberOf jQuery.sap.log
 */
jQuery.sap.log.getLogger = function(sComponent,iDefaultLogLevel) { return new jQuery.sap.log.Logger(); };

/**
 * 
 * Creates a new info-level entry in the log with the given message, details and calling component.
 * @param {string} sMessage Message text to display
 * @param {string} [sDetails=""] Details about the message, might be omitted
 * @param {string} [sComponent=""] Name of the component that produced the log entry
 * @return {jQuery.sap.log.Logger} The log instance
 * @public
 * @SecSink {0 1 2|SECRET} Could expose secret data in logs
 * @memberOf jQuery.sap.log
 */
jQuery.sap.log.info = function(sMessage,sDetails,sComponent) { return new jQuery.sap.log.Logger(); };

/**
 * 
 * Checks whether logging is enabled for the given log level, 
 * depending on the currently effective log level for the given component.
 * </p><p>
 * If no component is given, the default component of this logger will be taken into account.
 * @param {int} [iLevel=Level.DEBUG] the log level in question
 * @param {string} [sComponent] Name of the component to check the log level for
 * @return {boolean} Whether logging is enabled or not
 * @public
 * @since 1.13.2
 * @memberOf jQuery.sap.log
 */
jQuery.sap.log.isLoggable = function(iLevel,sComponent) { return false; };

/**
 * 
 * Allows to remove a registered LogListener.
 * @param {object} oListener The new listener object that should be removed
 * @return {jQuery.sap.log} The global logger
 * @public
 * @static
 * @memberOf jQuery.sap.log
 */
jQuery.sap.log.removeLogListener = function(oListener) { return new jQuery.sap.log(); };

/**
 * 
 * Defines the maximum jQuery.sap.log.Level of log entries that will be recorded.
 * Log entries with a higher (less important) log level will be omitted from the log.
 * When a component name is given, the log level will be configured for that component
 * only, otherwise the log level for the default component of this logger is set.
 * For the global logger, the global default level is set.
 * </p><p>
 * <b>Note</b>: Setting a global default log level has no impact on already defined
 * component log levels. They always override the global default log level.
 * @param {jQuery.sap.log.Level} iLogLevel
 * @param {string} [sComponent] The log component to set the log level for.
 * @return {jQuery.sap.log} The global logger to allow method chaining
 * @public
 * @memberOf jQuery.sap.log
 */
jQuery.sap.log.setLevel = function(iLogLevel,sComponent) { return new jQuery.sap.log(); };

/**
 * 
 * Creates a new trace-level entry in the log with the given message, details and calling component.
 * @param {string} sMessage Message text to display
 * @param {string} [sDetails=""] Details about the message, might be omitted
 * @param {string} [sComponent=""] Name of the component that produced the log entry
 * @return {jQuery.sap.log.Logger} The log-instance
 * @public
 * @SecSink {0 1 2|SECRET} Could expose secret data in logs
 * @memberOf jQuery.sap.log
 */
jQuery.sap.log.trace = function(sMessage,sDetails,sComponent) { return new jQuery.sap.log.Logger(); };

/**
 * 
 * Creates a new warning-level entry in the log with the given message, details and calling component.
 * @param {string} sMessage Message text to display
 * @param {string} [sDetails=""] Details about the message, might be omitted
 * @param {string} [sComponent=""] Name of the component that produced the log entry
 * @return {jQuery.sap.log.Logger} The log instance
 * @public
 * @SecSink {0 1 2|SECRET} Could expose secret data in logs
 * @memberOf jQuery.sap.log
 */
jQuery.sap.log.warning = function(sMessage,sDetails,sComponent) { return new jQuery.sap.log.Logger(); };


// ---- jQuery.sap.log.Level --------------------------------------------------------------------------

// dummy function to make Eclipse aware of namespace
jQuery.sap.log.Level.toString = function() { return ""; };

// ---- jQuery.sap.log.Logger --------------------------------------------------------------------------

/**
 * 
 * @class A Logger class
 * @param sDefaultComponent
 * @since 1.1.2
 * @public
 */
jQuery.sap.log.Logger = function(sDefaultComponent) {};
/**
 * 
 * Creates a new debug-level entry in the log with the given message, details and calling component.
 * @param {string} sMessage Message text to display
 * @param {string} [sDetails=""] Details about the message, might be omitted
 * @param {string} [sComponent=""] Name of the component that produced the log entry
 * @return {jQuery.sap.log.Logger} The log instance
 * @public
 * @SecSink {0 1 2|SECRET} Could expose secret data in logs
 */
jQuery.sap.log.Logger.prototype.debug = function(sMessage,sDetails,sComponent) { return new jQuery.sap.log.Logger(); };

/**
 * 
 * Creates a new error-level entry in the log with the given message, details and calling component.
 * @param {string} sMessage Message text to display
 * @param {string} [sDetails=""] Details about the message, might be omitted
 * @param {string} [sComponent=""] Name of the component that produced the log entry
 * @return {jQuery.sap.log.Logger} The log instance
 * @public
 * @SecSink {0 1 2|SECRET} Could expose secret data in logs
 */
jQuery.sap.log.Logger.prototype.error = function(sMessage,sDetails,sComponent) { return new jQuery.sap.log.Logger(); };

/**
 * 
 * Creates a new fatal-level entry in the log with the given message, details and calling component.
 * @param {string} sMessage Message text to display
 * @param {string} [sDetails=""] Details about the message, might be omitted
 * @param {string} [sComponent=""] Name of the component that produced the log entry
 * @return {jQuery.sap.log.Logger} The log instance for method chaining
 * @public
 * @SecSink {0 1 2|SECRET} Could expose secret data in logs
 */
jQuery.sap.log.Logger.prototype.fatal = function(sMessage,sDetails,sComponent) { return new jQuery.sap.log.Logger(); };

/**
 * 
 * Returns the log level currently effective for the given component.
 * If no component is given or when no level has been configured for a
 * given component, the log level for the default component of this logger is returned.
 * @param {string} [sComponent] Name of the component to retrieve the log level for
 * @return {int} The log level for the given component or the default log level
 * @public
 * @since 1.1.2
 */
jQuery.sap.log.Logger.prototype.getLevel = function(sComponent) { return 0; };

/**
 * 
 * Creates a new info-level entry in the log with the given message, details and calling component.
 * @param {string} sMessage Message text to display
 * @param {string} [sDetails=""] Details about the message, might be omitted
 * @param {string} [sComponent=""] Name of the component that produced the log entry
 * @return {jQuery.sap.log.Logger} The log instance
 * @public
 * @SecSink {0 1 2|SECRET} Could expose secret data in logs
 */
jQuery.sap.log.Logger.prototype.info = function(sMessage,sDetails,sComponent) { return new jQuery.sap.log.Logger(); };

/**
 * 
 * Checks whether logging is enabled for the given log level, 
 * depending on the currently effective log level for the given component.
 * </p><p>
 * If no component is given, the default component of this logger will be taken into account.
 * @param {int} [iLevel=Level.DEBUG] the log level in question
 * @param {string} [sComponent] Name of the component to check the log level for
 * @return {boolean} Whether logging is enabled or not
 * @public
 * @since 1.13.2
 */
jQuery.sap.log.Logger.prototype.isLoggable = function(iLevel,sComponent) { return false; };

/**
 * 
 * Defines the maximum jQuery.sap.log.Level of log entries that will be recorded.
 * Log entries with a higher (less important) log level will be omitted from the log.
 * When a component name is given, the log level will be configured for that component
 * only, otherwise the log level for the default component of this logger is set.
 * For the global logger, the global default level is set.
 * </p><p>
 * <b>Note</b>: Setting a global default log level has no impact on already defined
 * component log levels. They always override the global default log level.
 * @param {jQuery.sap.log.Level} iLogLevel
 * @param {string} [sComponent] The log component to set the log level for.
 * @return {jQuery.sap.log} The global logger to allow method chaining
 * @public
 */
jQuery.sap.log.Logger.prototype.setLevel = function(iLogLevel,sComponent) { return new jQuery.sap.log(); };

/**
 * 
 * Creates a new trace-level entry in the log with the given message, details and calling component.
 * @param {string} sMessage Message text to display
 * @param {string} [sDetails=""] Details about the message, might be omitted
 * @param {string} [sComponent=""] Name of the component that produced the log entry
 * @return {jQuery.sap.log.Logger} The log-instance
 * @public
 * @SecSink {0 1 2|SECRET} Could expose secret data in logs
 */
jQuery.sap.log.Logger.prototype.trace = function(sMessage,sDetails,sComponent) { return new jQuery.sap.log.Logger(); };

/**
 * 
 * Creates a new warning-level entry in the log with the given message, details and calling component.
 * @param {string} sMessage Message text to display
 * @param {string} [sDetails=""] Details about the message, might be omitted
 * @param {string} [sComponent=""] Name of the component that produced the log entry
 * @return {jQuery.sap.log.Logger} The log instance
 * @public
 * @SecSink {0 1 2|SECRET} Could expose secret data in logs
 */
jQuery.sap.log.Logger.prototype.warning = function(sMessage,sDetails,sComponent) { return new jQuery.sap.log.Logger(); };


// ---- jQuery.sap.log.LogLevel --------------------------------------------------------------------------


// ---- jQuery.sap.measure --------------------------------------------------------------------------

/**
 * 
 * Adds a performance measurement with all data 
 * This is usefull to add external measurements (e.g. from a backend) to the common measurement UI
 * @param {string} sId ID of the measurement
 * @param {string} sInfo Info for the measurement
 * @param {int} iStart start timestamp
 * @param {int} iEnd end timestamp
 * @param {int} iTime time in milliseconds
 * @param {int} iDuration effective time in milliseconds
 * @return {object} [] current measurement containing id, info and start-timestamp, end-timestamp, time, duration (false if error)
 * @public
 * @memberOf jQuery.sap.measure
 */
jQuery.sap.measure.add = function(sId,sInfo,iStart,iEnd,iTime,iDuration) { return new Object(); };

/**
 * 
 * Clears all performance measurements
 * @return
 * @public
 * @memberOf jQuery.sap.measure
 */
jQuery.sap.measure.clear = function() { return null; };

/**
 * 
 * Ends a performance measure
 * @param {string} sId ID of the measurement
 * @return {object} current measurement containing id, info and start-timestamp, end-timestamp, time, duration (false if error)
 * @public
 * @memberOf jQuery.sap.measure
 */
jQuery.sap.measure.end = function(sId) { return new Object(); };

/**
 * 
 * Gets the current state of the perfomance measurement functionality
 * @return {boolean} current state of the perfomance measurement functionality
 * @public
 * @memberOf jQuery.sap.measure
 */
jQuery.sap.measure.getActive = function() { return false; };

/**
 * 
 * Gets all performance measurements
 * @return {object} [] current measurement containing id, info and start-timestamp, end-timestamp, time, duration (false if error)
 * @public
 * @memberOf jQuery.sap.measure
 */
jQuery.sap.measure.getAllMeasurements = function() { return new Object(); };

/**
 * 
 * Gets a performance measure
 * @param {string} sId ID of the measurement
 * @return {object} current measurement containing id, info and start-timestamp, end-timestamp, time, duration (false if error)
 * @public
 * @memberOf jQuery.sap.measure
 */
jQuery.sap.measure.getMeasurement = function(sId) { return new Object(); };

/**
 * 
 * Pauses a performance measure
 * @param {string} sId ID of the measurement
 * @return {object} current measurement containing id, info and start-timestamp, pause-timestamp (false if error)
 * @public
 * @memberOf jQuery.sap.measure
 */
jQuery.sap.measure.pause = function(sId) { return new Object(); };

/**
 * 
 * Removes a performance measure
 * @param {string} sId ID of the measurement
 * @return
 * @public
 * @memberOf jQuery.sap.measure
 */
jQuery.sap.measure.remove = function(sId) { return null; };

/**
 * 
 * Resumes a performance measure
 * @param {string} sId ID of the measurement
 * @return {object} current measurement containing id, info and start-timestamp, resume-timestamp (false if error)
 * @public
 * @memberOf jQuery.sap.measure
 */
jQuery.sap.measure.resume = function(sId) { return new Object(); };

/**
 * 
 * Activates or deactivates the performance measure functionality
 * @param {boolean} bOn state of the perfomance measurement functionality to set
 * @return {boolean} current state of the perfomance measurement functionality
 * @public
 * @memberOf jQuery.sap.measure
 */
jQuery.sap.measure.setActive = function(bOn) { return false; };

/**
 * 
 * Starts a performance measure
 * @param {string} sId ID of the measurement
 * @param {string} sInfo Info for the measurement
 * @return {object} current measurement containing id, info and start-timestamp (false if error)
 * @public
 * @memberOf jQuery.sap.measure
 */
jQuery.sap.measure.start = function(sId,sInfo) { return new Object(); };


// ---- jQuery.sap.PseudoEvents --------------------------------------------------------------------------

// dummy function to make Eclipse aware of namespace
jQuery.sap.PseudoEvents.toString = function() { return ""; };

// ---- jQuery.sap.storage --------------------------------------------------------------------------

/**
 * 
 * Deletes all the entries saved in the session (Independent of the current Storage instance!).
 * </p><p>
 * CAUTION: This method should be called only in very particular situations,
 * when a global erasing of data is required. Given that the method deletes
 * the data saved under any ID, it should not be called when managing data
 * for specific controls.
 * @return {boolean} true if execution of removal
 * was successful or the data to remove doesn't exist,
 * and false if the feature is unavailable or a problem occurred
 * @public
 * @memberOf jQuery.sap.storage
 */
jQuery.sap.storage.clear = function() { return false; };

/**
 * 
 * Retrieves the state string stored in the session under the key
 * sStorageKeyPrefix + sId
 * </p><p>
 * sStorageKeyPrefix is the id prefix defined for the storage instance (@see jQuery.sap#storage)
 * @param {string} sId Id for the state to retrieve
 * @return {string} the string from the storage, if the retrieval
 * was successful, and null otherwise
 * @public
 * @memberOf jQuery.sap.storage
 */
jQuery.sap.storage.get = function(sId) { return ""; };

/**
 * 
 * Returns the type of the storage.
 * @returns {jQuery.sap.storage.Type || string} the type of the storage or "unknown"
 * @public
 * @memberOf jQuery.sap.storage
 */
jQuery.sap.storage.getType = function() { return new jQuery.sap.storage.Type (); };

/**
 * 
 * Stores the passed state string in the session, under the key
 * sStorageKeyPrefix + sId
 * </p><p>
 * sStorageKeyPrefix is the id prefix defined for the storage instance (@see jQuery.sap#storage)
 * @param {string} sId Id for the state to store
 * @param {string} sStateToStore content to store
 * @return {boolean} true if the data were successfully stored, false otherwise
 * @public
 * @memberOf jQuery.sap.storage
 */
jQuery.sap.storage.put = function(sId,sStateToStore) { return false; };

/**
 * 
 * Deletes the state string stored in the session under the key
 * sStorageKeyPrefix + sId
 * </p><p>
 * sStorageKeyPrefix is the id prefix defined for the storage instance (@see jQuery.sap#storage)
 * @param {string} sId Id for the state to delete
 * @return {boolean} true if the deletion
 * was successful or the data doesn't exist under the specified key,
 * and false if the feature is unavailable or a problem occurred
 * @public
 * @memberOf jQuery.sap.storage
 */
jQuery.sap.storage.remove = function(sId) { return false; };

/**
 * 
 * Deletes all state strings stored in the session under the key prefix 
 * sStorageKeyPrefix + sIdPrefix.
 * </p><p>
 * sStorageKeyPrefix is the id prefix defined for the storage instance (@see jQuery.sap#storage)
 * @param {string} sIdPrefix Id prefix for the states to delete
 * @return {boolean} true if the deletion
 * was successful or the data doesn't exist under the specified key,
 * and false if the feature is unavailable or a problem occurred
 * @since 1.13.0
 * @public
 * @memberOf jQuery.sap.storage
 */
jQuery.sap.storage.removeAll = function(sIdPrefix) { return false; };


// ---- jQuery.sap.storage.Storage --------------------------------------------------------------------------

/**
 * 
 * Deletes all the entries saved in the session (Independent of the current Storage instance!).
 * </p><p>
 * CAUTION: This method should be called only in very particular situations,
 * when a global erasing of data is required. Given that the method deletes
 * the data saved under any ID, it should not be called when managing data
 * for specific controls.
 * @return {boolean} true if execution of removal
 * was successful or the data to remove doesn't exist,
 * and false if the feature is unavailable or a problem occurred
 * @public
 */
jQuery.sap.storage.Storage.clear = function() { return false; };

/**
 * 
 * Retrieves the state string stored in the session under the key
 * sStorageKeyPrefix + sId
 * </p><p>
 * sStorageKeyPrefix is the id prefix defined for the storage instance (@see jQuery.sap#storage)
 * @param {string} sId Id for the state to retrieve
 * @return {string} the string from the storage, if the retrieval
 * was successful, and null otherwise
 * @public
 */
jQuery.sap.storage.Storage.get = function(sId) { return ""; };

/**
 * 
 * Returns the type of the storage.
 * @returns {jQuery.sap.storage.Type || string} the type of the storage or "unknown"
 * @public
 */
jQuery.sap.storage.Storage.getType = function() { return new jQuery.sap.storage.Type (); };

/**
 * 
 * Stores the passed state string in the session, under the key
 * sStorageKeyPrefix + sId
 * </p><p>
 * sStorageKeyPrefix is the id prefix defined for the storage instance (@see jQuery.sap#storage)
 * @param {string} sId Id for the state to store
 * @param {string} sStateToStore content to store
 * @return {boolean} true if the data were successfully stored, false otherwise
 * @public
 */
jQuery.sap.storage.Storage.put = function(sId,sStateToStore) { return false; };

/**
 * 
 * Deletes the state string stored in the session under the key
 * sStorageKeyPrefix + sId
 * </p><p>
 * sStorageKeyPrefix is the id prefix defined for the storage instance (@see jQuery.sap#storage)
 * @param {string} sId Id for the state to delete
 * @return {boolean} true if the deletion
 * was successful or the data doesn't exist under the specified key,
 * and false if the feature is unavailable or a problem occurred
 * @public
 */
jQuery.sap.storage.Storage.remove = function(sId) { return false; };

/**
 * 
 * Deletes all state strings stored in the session under the key prefix 
 * sStorageKeyPrefix + sIdPrefix.
 * </p><p>
 * sStorageKeyPrefix is the id prefix defined for the storage instance (@see jQuery.sap#storage)
 * @param {string} sIdPrefix Id prefix for the states to delete
 * @return {boolean} true if the deletion
 * was successful or the data doesn't exist under the specified key,
 * and false if the feature is unavailable or a problem occurred
 * @since 1.13.0
 * @public
 */
jQuery.sap.storage.Storage.removeAll = function(sIdPrefix) { return false; };


// ---- jQuery.sap.storage.Type --------------------------------------------------------------------------

// dummy function to make Eclipse aware of namespace
jQuery.sap.storage.Type.toString = function() { return ""; };

// ---- jQuery.sap.util --------------------------------------------------------------------------


// ---- jQuery.sap.util.Properties --------------------------------------------------------------------------


// ---- jQuery.sap.util.ResourceBundle --------------------------------------------------------------------------


// ---- jQuery.sap.util.UriParameters --------------------------------------------------------------------------


// ---- jQuery.sap.Version --------------------------------------------------------------------------

/**
 * 
 * Returns a Version instance created from the given parameters.
 * </p><p>
 * This function can either be called as a constructor (using <code>new</code>) or as a normal function.
 * It always returns an immutable Version instance.
 * </p><p>
 * The parts of the version number (major, minor, patch, suffix) can be provided in several ways:
 * <ul>
 * <li>Version("1.2.3-SNAPSHOT") - as a dot-separated string. Any non-numerical char or a dot followed by a non-numerical char starts the suffix portion. 
 * Any missing major, minor or patch versions will be set to 0.</li>
 * <li>Version(1,2,3,"-SNAPSHOT") - as individual parameters. Major, minor and patch must be integer numbers or empty, suffix must be a string not starting with digits.</li>
 * <li>Version([1,2,3,"-SNAPSHOT"]) - as an array with the individual parts. The same type restrictions apply as before.</li>
 * <li>Version(otherVersion) - as a Version instance (cast operation). Returns the given instance instead of creating a new one.</li> 
 * </ul>
 * </p><p>
 * To keep the code size small, this implementation mainly validates the single string variant. 
 * All other variants are only validated to some degree. It is the responsibility of the caller to 
 * provide proper parts.
 * @param {int|string|any[]|jQuery.sap.Version} vMajor the major part of the version (int) or any of the single parameter variants explained above. 
 * @param {int} iMinor the minor part of the version number 
 * @param {int} iPatch the patch part of the version number
 * @param {string} sSuffix the suffix part of the version number
 * @return {jQuery.sap.Version} the version object as determined from the parameters
 * @class Represents a version consisting of major, minor, patch version and suffix, e.g. '1.2.7-SNAPSHOT'.
 * @version 1.15.1-SNAPSHOT
 * @constructor
 * @public
 * @since 1.15.0
 * 
 */
jQuery.sap.Version = function(vMajor,iMinor,iPatch,sSuffix) {};
/**
 * 
 * Compares this version with a given one.
 * </p><p>
 * The version with which this version should be compared can be given as
 * <code>jQuery.sap.Version</code> instance, as a string (e.g. <code>v.compareto("1.4.5")</code>)
 * or major, minor, patch and suffix cab be given as separate parameters (e.g. <code>v.compareTo(1, 4, 5)</code>)
 * or in an array (e.g. <code>v.compareTo([1, 4, 5])</code>).
 * @return {int} 0, if the given version is equal to this version, a negative value if the given version is greater and a positive value otherwise
 * @public
 * @since 1.15.0
 */
jQuery.sap.Version.prototype.compareTo = 0

/**
 * 
 * Returns the major version part of this version.
 * @return {int} the major version part of this version
 * @public
 * @since 1.15.0
 */
jQuery.sap.Version.prototype.getMajor = 0

/**
 * 
 * Returns the minor version part of this version.
 * @return {int} the minor version part of this version
 * @public
 * @since 1.15.0
 */
jQuery.sap.Version.prototype.getMinor = 0

/**
 * 
 * Returns the patch (or micro) version part of this version.
 * @return {int} the patch version part of this version
 * @public
 * @since 1.15.0
 */
jQuery.sap.Version.prototype.getPatch = 0

/**
 * 
 * Returns the version suffix of this version.
 * @return {string} the version suffix of this version
 * @public
 * @since 1.15.0
 */
jQuery.sap.Version.prototype.getSuffix = ""

/**
 * 
 * Checks whether this version is in the range of the given versions (start included, end excluded).
 * </p><p>
 * The boundaries against which this version should be checked can be given as
 * <code>jQuery.sap.Version</code> instances (e.g. <code>v.inRange(v1, v2)</code>), as strings (e.g. <code>v.inRange("1.4", "2.7")</code>)
 * or as arrays (e.g. <code>v.inRange([1,4], [2,7])</code>).
 * @return {boolean} <code>true</code> if this version is greater or equal to <code>vMin</code> and smaller than <code>vMax</code>, <code>false</code> otherwise.
 * @public
 * @since 1.15.0
 */
jQuery.sap.Version.prototype.inRange = false

/**
 * 
 * Returns a string representation of this version.
 * @return {string} a string representation of this version.
 * @public
 * @since 1.15.0
 */
jQuery.sap.Version.prototype.toString = ""


// ---- jQuery.support --------------------------------------------------------------------------

// dummy function to make Eclipse aware of namespace
jQuery.support.toString = function() { return ""; };

// ---- sap --------------------------------------------------------------------------


// ---- sap.ui --------------------------------------------------------------------------

/**
 * 
 * Creates a new instance of a <code>Component</code> or returns the instance
 * of an existing <code>Component</code>.
 * </p><p>
 * If you want to lookup all an existing <code>Component</code> you can call
 * this function with a component ID as parameter:
 * <pre> 
 *   var oComponent = sap.ui.component(sComponentId);
 * </pre>
 * </p><p>
 * To create a new instance of a component you pass a component configuration
 * object into this function:
 * <pre>
 *   var oComponent = sap.ui.component({
 *     name: "my.Component",
 *     url: "my/component/location",
 *     id: "myCompId1"
 *   });
 * </pre>
 * @param {string|object} oComponent the id of an existing Component or the configuration object to create the Component
 * @param {string} oComponent.name the name of the Component to load
 * @param {string} [oComponent.url] an alternate location from where to load the Component
 * @param {object} [oComponent.componentData] initial data of the Component (@see sap.ui.core.Component#getComponentData)
 * @param {string} [oComponent.id] the sId of the new Component
 * @param {object} [oComponent.settings] the mSettings of the new Component 
 * @return {sap.ui.core.Component} the Component instance 
 * @public
 * @static
 * @since 1.15.0
 * @memberOf sap.ui
 */
sap.ui.component = function(oComponent) { return new sap.ui.core.Component(); };

/**
 * 
 * Defines a controller class or creates an instance of an already defined controller class.
 * </p><p>
 * When a name and a controller implementation object is given, a new controller class
 * of the given name is created. The members of the implementation object will be copied
 * into each new instance of that controller class (shallow copy).
 * <b>Note</b>: as the members are shallow copied, controller instances will share all object values.
 * This might or might not be what applications expect.
 * </p><p>
 * If only a name is given, a new instance of the named Controller class is returned.
 * @param {string} sName The Controller name
 * @param {object} [oControllerImpl] An object literal defining the methods and properties of the Controller
 * @return {void | sap.ui.core.mvc.Controller} void or the new controller instance, depending on the use case
 * @public
 * @memberOf sap.ui
 */
sap.ui.controller = function(sName,oControllerImpl) { return null; };

/**
 * 
 * Instantiate a Fragment - this method loads the Fragment content, instantiates it, and returns this content.
 * The Fragment object itself is not an entity which has further significance beyond this constructor.
 * </p><p>
 * To instantiate an existing Fragment, call this method as:
 *    sap.ui.fragment(sName, sType, [oController]);
 * The sName must correspond to an XML Fragment which can be loaded
 * via the module system (fragmentName + suffix ".fragment.[typeextension]") and which defines the Fragment content.
 * If oController is given, the (event handler) methods referenced in the Fragment will be called on this controller.
 * Note that Fragments may require a Controller to be given and certain methods to be available.
 * </p><p>
 * The Fragment types "XML", "JS" and "HTML" are available by default; additional Fragment types can be implemented 
 * and added using the sap.ui.core.Fragment.registerType() function.
 * </p><p>
 * </p><p>
 * Advanced usage:
 * To instantiate a Fragment and give further configuration options, call this method as:
 *     sap.ui.fragment(oFragmentConfig, [oController]);
 * The oFragmentConfig object can have the following properties:
 * - "fragmentName": the name of the Fragment, as above
 * - "fragmentContent": the definition of the Fragment content itself. When this property is given, any given name is ignored.
 *         The type of this property depends on the Fragment type, e.g. it could be a string for XML Fragments.
 * - "type": the type of the Fragment, as above (mandatory)
 * - "id": the ID of the Fragment (optional)
 * Further properties may be supported by future or custom Fragment types. Any given properties 
 * will be forwarded to the Fragment implementation.
 * </p><p>
 * If you want to give a fixed ID for the Fragment, please use the advanced version of this method call with the 
 * configuration object or use the typed factories like sap.ui.xmlfragment(...) or sap.ui.jsfragment(...). 
 * Otherwise the Fragment ID is generated. In any case, the Fragment ID will be used as prefix for the ID of 
 * all contained controls.
 * @param {string} sName the Fragment name
 * @param {string} sType the Fragment type, e.g. "XML", "JS", or "HTML"
 * @param {sap.ui.core.Controller} [oController] the Controller which should be used by the controls in the Fragment. Note that some Fragments may not need a Controller and other may need one - and even rely on certain methods implemented in the Controller.
 * @public
 * @static
 * @return {sap.ui.core.Control|sap.ui.core.Control[]} the root Control(s) of the Fragment content
 * @memberOf sap.ui
 */
sap.ui.fragment = function(sName,sType,oController) { return new sap.ui.core.Control(); };

/**
 * 
 * Retrieve the {@link sap.ui.core.Core SAPUI5 Core} instance for the current window.
 * @returns the API of the current SAPUI5 Core instance.
 * @public
 * 
 * @memberOf sap.ui
 */
sap.ui.getCore = function() { return null; };

/**
 * 
 * Instantiates an HTML-based Fragment.
 * </p><p>
 * To instantiate a Fragment, call this method as:
 *    sap.ui.htmlfragment([sId], sFragmentName, [oController]);
 * The Fragment instance ID is optional (generated if not given) and will be used as prefix for the ID of all
 * contained controls. The sFragmentName must correspond to an HTML Fragment which can be loaded
 * via the module system (fragmentName + ".fragment.html") and which defines the Fragment.
 * If oController is given, the methods referenced in the Fragment will be called on this controller.
 * Note that Fragments may require a Controller to be given and certain methods to be available.
 * </p><p>
 * </p><p>
 * Advanced usage:
 * To instantiate a Fragment and optionally directly give the HTML definition instead of loading it from a file, 
 * call this method as:
 *     sap.ui.htmlfragment(oFragmentConfig, [oController]);
 * The oFragmentConfig object can have a either a "fragmentName" or a "fragmentContent" property. 
 * fragmentContent is optional and can hold the Fragment definition as XML string; if not
 * given, fragmentName must be given and the Fragment content definition is loaded by the module system.
 * Again, if oController is given, the methods referenced in the Fragment will be called on this controller.
 * @param {string} [sId] id of the newly created Fragment
 * @param {string | object} sFragmentName name of the Fragment (or Fragment configuration as described above, in this case no sId may be given. Instead give the id inside the config object, if desired.)
 * @param {sap.ui.core.mvc.Controller} [oController] a Controller to be used for event handlers in the Fragment
 * @public
 * @static
 * @return {sap.ui.core.Control|sap.ui.core.Control[]} the root Control(s) of the created Fragment instance
 * @memberOf sap.ui
 */
sap.ui.htmlfragment = function(sId,sFragmentName,oController) { return new sap.ui.core.Control(); };

/**
 * 
 * Defines or creates an instance of a declarative HTML view.
 * </p><p>
 * The behavior of this method depends on the signature of the call and on the current context.
 * </p><p>
 * <ul>
 * <li>View Definition <code>sap.ui.htmlview(sId, vView)</code>: Defines a view of the given name with the given
 * implementation. sId must be the views name, vView must be an object and can contain
 * implementations for any of the hooks provided by HTMLView</li>
 * <li>View Instantiation <code>sap.ui.htmlview(sId?, vView)</code>: Creates an instance of the view with the given name (and id)</li>.
 * </ul>
 * </p><p>
 * Any other call signature will lead to a runtime error. If the id is omitted in the second variant, an id will
 * be created automatically.
 * @param {string} [sId] id of the newly created view, only allowed for instance creation
 * @param {string | object} vView name or implementation of the view.
 * @public
 * @static
 * @return {sap.ui.core.mvc.HTMLView | undefined} the created HTMLView instance in the creation case, otherwise undefined
 * @memberOf sap.ui
 */
sap.ui.htmlview = function(sId,vView) { return new sap.ui.core.mvc.HTMLView (); };

/**
 * 
 * Defines OR instantiates an HTML-based Fragment.
 * </p><p>
 * To define a JS Fragment, call this method as:
 *    sap.ui.jsfragment(sName, oFragmentDefinition)
 * Where:
 * - "sName" is the name by which this fragment can be found and instantiated. If defined in its own file,
 *    in order to be found by the module loading system, the file location and name must correspond to sName 
 *    (path + file name must be: fragmentName + ".fragment.js").
 * - "oFragmentDefinition" is an object at least holding the "createContent(oController)" method which defines
 *    the Fragment content. If given during instantiation, the createContent method receives a Controller
 *    instance (otherwise oController is undefined) and the return value must be one sap.ui.core.Control
 *    (which could have any number of children).
 * </p><p>
 * </p><p>
 * To instantiate a JS Fragment, call this method as:
 *    sap.ui.jsfragment([sId], sFragmentName, [oController]);
 * The Fragment ID is optional (generated if not given) and the Fragment implementation CAN use it
 * to make contained controls unique (this depends on the implementation: some JS Fragments may choose 
 * not to support multiple instances within one application and not use the ID prefixing).
 * The sFragmentName must correspond to a JS Fragment which can be loaded
 * via the module system (fragmentName + ".fragment.js") and which defines the Fragment.
 * If oController is given, the methods referenced in the Fragment will be called on this controller.
 * Note that Fragments may require a Controller to be given and certain methods to be available.
 * @param {string} [sId] id of the newly created Fragment
 * @param {string | object} sFragmentName name of the Fragment (or Fragment configuration as described above, in this case no sId may be given. Instead give the id inside the config object, if desired)
 * @param {sap.ui.core.mvc.Controller} [oController] a Controller to be used for event handlers in the Fragment
 * @public
 * @static
 * @return {sap.ui.core.Control|sap.ui.core.Control[]} the root Control(s) of the created Fragment instance
 * @memberOf sap.ui
 */
sap.ui.jsfragment = function(sId,sFragmentName,oController) { return new sap.ui.core.Control(); };

/**
 * 
 * Creates a JSON view of the given name and id.
 * </p><p>
 * The <code>viewName</code> must either correspond to an JSON module that can be loaded
 * via the module system (viewName + suffix ".view.json") and which defines the view or must
 * be a configuration object for a view.
 * The configuration object can have a vieName, viewContent and a controller property. The viewName
 * behaves as described above. ViewContent can hold the view description as JSON string. The controller
 * property can hold an controller instance. If a controller instance is given it overrides the
 * controller defined in the view.
 * </p><p>
 * Like with any other control, an id is optional and will be created when missing.
 * @param {string} [sId] id of the newly created view
 * @param {string | object} vView name of the view or view configuration as described above.
 * @public
 * @static
 * @return {sap.ui.core.mvc.JSONView} the created JSONView instance
 * @memberOf sap.ui
 */
sap.ui.jsonview = function(sId,vView) { return new sap.ui.core.mvc.JSONView(); };

/**
 * 
 * Defines or creates an instance of a JavaScript view.
 * </p><p>
 * The behavior of this method depends on the signature of the call and on the current context.
 * </p><p>
 * <ul>
 * <li>View Definition <code>sap.ui.jsview(sId, vView)</code>: Defines a view of the given name with the given
 * implementation. sId must be the views name, vView must be an object and can contain
 * implementations for any of the hooks provided by JSView</li>
 * <li>View Instantiation <code>sap.ui.jsview(sId?, vView)</code>: Creates an instance of the view with the given name (and id).
 * If no view implementation has been defined for that view name, a JavaScript module with the same name and with suffix "view.js" will be loaded
 * and executed. The module should contain a view definition (1st. variant above). </li>
 * </ul>
 * </p><p>
 * Any other call signature will lead to a runtime error. If the id is omitted in the second variant, an id will
 * be created automatically.
 * @param {string} [sId] id of the newly created view, only allowed for instance creation
 * @param {string | object} vView name or implementation of the view.
 * @public
 * @static
 * @return {sap.ui.core.mvc.JSView | undefined} the created JSView instance in the creation case, otherwise undefined
 * @memberOf sap.ui
 */
sap.ui.jsview = function(sId,vView) { return new sap.ui.core.mvc.JSView (); };

/**
 * 
 * Creates a lazy loading stub for a given class <code>sClassName</code>.
 * </p><p>
 * If the class has been loaded already, nothing is done. Otherwise a stub object
 * or constructor and - optionally - a set of stub methods are created.
 * All created stubs will load the corresponding module on execution
 * and then delegate to their counterpart in the loaded module.
 * </p><p>
 * When no methods are given or when the list of methods contains the special name
 * "new" (which is an operator can't be used as method name in JavaScript), then a
 * stub <b>constructor</b> for class <code>sClassName</code> is created.
 * Otherwise, a plain object is created.
 * </p><p>
 * <b>Note</b>: Accessing any stub as a plain object without executing it (no matter
 * whether it is a function or an object) won't load the module and therefore most like
 * won't work as expected. This is a fundamental restriction of the lazy loader approach.
 * It could only be fixed with JavaScript 1.5 features that are not available in all
 * UI5 target browsers (e.g. not in IE8).
 * </p><p>
 * <b>Note</b>: As a side effect of this method, the namespace containing the given
 * class is created <b>immediately</b>.
 * @param {string} sClassName Fully qualified name (dot notation) of the class that should be prepared
 * @param {string} [sMethods='new'] space separated list of additional (static) methods that should be created as stubs
 * @param {string} [sModuleName] name of the module to load, defaults to the class name
 * @public
 * @static
 * @memberOf sap.ui
 */
sap.ui.lazyRequire = function(sClassName,sMethods,sModuleName) { return null; };

/**
 * 
 * Redirects access to resources that are part of the given namespace to a location
 * relative to the assumed <b>application root folder</b>.
 * </p><p>
 * Any UI5 managed resource (view, controller, control, JavaScript module, CSS file, etc.)
 * whose resource name starts with <code>sNamespace</code>, will be loaded from an
 * equally named subfolder of the <b>application root folder</b>.
 * If the resource name consists of multiple segments (separated by a dot), each segment
 * is assumed to represent an individual folder. In other words: when a resource name is
 * converted to an URL, any dots ('.') are converted to slashes ('/').
 * </p><p>
 * <b>Limitation:</b> For the time being, the <b>application root folder</b> is assumed to be
 * the same as the folder where the current page resides in.
 * </p><p>
 * Usage sample:
 * <pre>
 *   // Let UI5 know that resources, whose name starts with "com.mycompany.myapp"
 *   // should be loaded from the URL location "./com/mycompany/myapp"
 *   sap.ui.localResources("com.mycompany.myapp");
 * 
 *   // The following call implicitly will use the mapping done by the previous line
 *   // It will load a view from ./com/mycompany/myapp/views/Main.view.xml
 *   sap.ui.view({ view : "com.mycompany.myapp.views.Main", type : sap.ui.core.mvc.ViewType.XML});
 * </pre>
 * </p><p>
 * When applications need a more flexible mapping between resource names and their location,
 * they can use {@link jQuery.sap.registerModulePath}.
 * </p><p>
 * It is intended to make this configuration obsolete in future releases, but for the time
 * being, applications must call this method when they want to store resources relative to
 * the assumed application root folder.
 * @param {String} sNamespace Namespace prefix for which to load resources relative to the application root folder
 * @public
 * @static
 * @see jQuery.sap.registerModulePath
 * @memberOf sap.ui
 */
sap.ui.localResources = function(sNamespace) { return null; };

/**
 * 
 * Returns the URL of a resource that belongs to the given library and has the given relative location within the library.
 * This is mainly meant for static resources like images that are inside the library.
 * It is NOT meant for access to JavaScript modules or anything for which a different URL has been registered with jQuery.sap.registerModulePath(). For
 * these cases use jQuery.sap.getModulePath().
 * It DOES work, however, when the given sResourcePath starts with "themes/" (= when it is a theme-dependent resource). Even when for this theme a different
 * location outside the normal library location is configured.
 * @param sLibraryName the name of a library, like "sap.ui.commons"
 * @param sResourcePath the relative path of a resource inside this library, like "img/mypic.png" or "themes/my_theme/img/mypic.png"
 * @returns the URL of the requested resource
 * @static
 * @public
 * @memberOf sap.ui
 */
sap.ui.resource = function(sLibraryName,sResourcePath) { return null; };

/**
 * 
 * Displays the control tree with the given root inside the area of the given
 * DOM reference (or inside the DOM node with the given ID) or in the given Control.
 * </p><p>
 * Example:
 * <pre>
 *   &lt;div id="SAPUI5UiArea">&lt;/div>
 *   &lt;script type="text/javascript">
 *     var oRoot = new sap.ui.commons.Label();
 *     oRoot.setText("Hello world!");
 *     sap.ui.setRoot("SAPUI5UiArea", oRoot);
 *   &lt;/script>
 * </pre>
 * <p>
 * </p><p>
 * This is a shortcut for <code>sap.ui.getCore().setRoot()</code>.
 * </p><p>
 * Internally, if a string is given that does not identify an UIArea or a control
 * then implicitly a new <code>UIArea</code> is created for the given DOM reference
 * and the given control is added.
 * @param {string|DOMRef|sap.ui.core.Control} oDomRef a Dom Reference or Id String of the UIArea
 * @param {sap.ui.base.Interface | sap.ui.core.Control}
 *            oControl the Control that should be added to the <code>UIArea</code>.
 * @public
 * @deprecated Use function <code>placeAt</code> of <code>sap.ui.core.Control</code> instead.
 * @memberOf sap.ui
 */
sap.ui.setRoot = function(oDomRef,oControl) { return null; };

/**
 * 
 * Creates a Template for the given id, dom reference or a configuration object.
 * If no parameter is defined this function makes a lookup of DOM elements 
 * which are specifying a type attribute. If the value of this type attribute
 * matches an registered type then the content of this DOM element will be 
 * used to create a new <code>Template</code> instance.
 * </p><p>
 * If you want to lookup all kind of existing and known templates and parse them
 * directly you can simply call:
 * <pre> 
 *   sap.ui.template();
 * </pre>
 * </p><p>
 * To parse a concrete DOM element you can do so by using this function in the 
 * following way:
 * <pre>
 *   sap.ui.template("theTemplateId");
 * </pre>
 * </p><p>
 * Or you can pass the reference to a DOM element and use this DOM element as 
 * a source for the template:
 * <pre>
 *   sap.ui.template(oDomRef);
 * </pre>
 * </p><p>
 * The last option to use this function is to pass the information via a 
 * configuration object. This configuration object can be used to pass a 
 * context for the templating framework when compiling the template:
 * <pre>
 *   var oTemplateById = sap.ui.template({
 *     id: "theTemplateId",
 *     context: { ... }
 *   });
 * 
 *   var oTemplateByDomRef = sap.ui.template({
 *     domref: oDomRef,
 *     context: { ... }
 *   });
 * </pre>
 * </p><p>
 * It can also be used to load a template from another file:
 * <pre>
 *   var oTemplate = sap.ui.template({
 *     id: "myTemplate",
 *     src: "myTemplate.tmpl"
 *   });
 * 
 *   var oTemplateWithContext = sap.ui.template({
 *     id: "myTemplate",
 *     src: "myTemplate.tmpl",
 *     context: { ... }
 *   });
 * </pre>
 * </p><p>
 * The properties of the configuration object are the following:
 * <ul>
 * <li><code>id</code> - the ID of the Template / the ID  of the DOM element containing the source of the Template</li>
 * <li><code>domref</code> - the DOM element containing the source of the Template</li>
 * <li><code>type</code> - the type of the Template</li>
 * <li><code>src</code> - the URL to lookup the template</li> (<i>experimental!</i>)
 * <li><code>control</code> - the fully qualified name of the control to declare</li> (<i>experimental!</i>)
 * </ul>
 * @param {string|DomRef|object} [oTemplate] the id or the DOM reference to the template to lookup or an configuration object containing the src, type and eventually the id of the Template.
 * @return {sap.ui.core.tmpl.Template | sap.ui.core.tmpl.Template[]} the created Template instance 
 *         or in case of usage without parametes any array of templates is returned
 * @public
 * @static
 * @memberOf sap.ui
 */
sap.ui.template = function(oTemplate) { return new sap.ui.core.tmpl.Template (); };

/**
 * 
 * Defines or creates an instance of a template view.
 * </p><p>
 * The behavior of this method depends on the signature of the call and on the current context.
 * </p><p>
 * <ul>
 * <li>View Definition <code>sap.ui.templateview(sId, vView)</code>: Defines a view of the given name with the given
 * implementation. sId must be the views name, vView must be an object and can contain
 * implementations for any of the hooks provided by templateview</li>
 * <li>View Instantiation <code>sap.ui.templateview(sId?, vView)</code>: Creates an instance of the view with the given name (and id)</li>.
 * </ul>
 * </p><p>
 * Any other call signature will lead to a runtime error. If the id is omitted in the second variant, an id will
 * be created automatically.
 * @param {string} [sId] id of the newly created view, only allowed for instance creation
 * @param {string | object} vView name or implementation of the view.
 * @public
 * @static
 * @return {sap.ui.core.mvc.TemplateView | undefined} the created TemplateView instance in the creation case, otherwise undefined
 * @memberOf sap.ui
 */
sap.ui.templateview = function(sId,vView) { return new sap.ui.core.mvc.TemplateView (); };

/**
 * 
 * Creates a view of the given type, name and with the given id.
 * </p><p>
 * The <code>oView</code> configuration object can have the following properties for the view
 * instantiation:
 * <ul>
 * <li>The ID <code>oView.id</code> specifies an ID for the View instance. If no ID is given,
 * an ID will be generated.</li>
 * <li>The view name <code>oView.viewName</code> corresponds to an XML module that can be loaded
 * via the module system (oView.viewName + suffix ".view.xml")</li>
 * <li>The controller instance <code>oView.controller</code> must be a valid controller implementation.
 * The given controller instance overrides the controller defined in the view definition</li>
 * <li>The view type <code>oView.type</code> specifies what kind of view will be instantiated. All valid
 * view types are listed in the enumeration sap.ui.core.mvc.ViewType.</li>
 * <li>The view data <code>oView.viewData</code> can hold user specific data. This data is available
 * during the whole lifecycle of the view and the controller</li>
 * </ul>
 * @param {object} [oView] view configuration Object
 * @public
 * @static
 * @return {sap.ui.core.mvc.View} the created View instance
 * @memberOf sap.ui
 */
sap.ui.view = function(oView) { return new sap.ui.core.mvc.View(); };

/**
 * 
 * Instantiates an XML-based Fragment.
 * </p><p>
 * To instantiate a Fragment, call this method as:
 *    sap.ui.xmlfragment([sId], sFragmentName, [oController]);
 * The Fragment instance ID is optional (generated if not given) and will be used as prefix for the ID of all
 * contained controls. The sFragmentName must correspond to an XML Fragment which can be loaded
 * via the module system (fragmentName + ".fragment.xml") and which defines the Fragment.
 * If oController is given, the methods referenced in the Fragment will be called on this controller.
 * Note that Fragments may require a Controller to be given and certain methods to be available.
 * </p><p>
 * </p><p>
 * Advanced usage:
 * To instantiate a Fragment and optionally directly give the XML definition instead of loading it from a file,
 * call this method as:
 *     sap.ui.xmlfragment(oFragmentConfig, [oController]);
 * The oFragmentConfig object can have a either a "fragmentName" or a "fragmentContent" property. 
 * fragmentContent is optional and can hold the Fragment definition as XML string; if not
 * given, fragmentName must be given and the Fragment content definition is loaded by the module system.
 * Again, if oController is given, the methods referenced in the Fragment will be called on this controller.
 * @param {string} [sId] id of the newly created Fragment
 * @param {string | object} sFragmentName name of the Fragment (or Fragment configuration as described above, in this case no sId may be given. Instead give the id inside the config object, if desired)
 * @param {sap.ui.core.mvc.Controller} [oController] a Controller to be used for event handlers in the Fragment
 * @public
 * @static
 * @return {sap.ui.core.Control|sap.ui.core.Control[]} the root Control(s) of the created Fragment instance
 * @memberOf sap.ui
 */
sap.ui.xmlfragment = function(sId,sFragmentName,oController) { return new sap.ui.core.Control(); };

/**
 * 
 * Instantiates an XMLView of the given name and with the given id.
 * </p><p>
 * The <code>viewName</code> must either correspond to an XML module that can be loaded
 * via the module system (viewName + suffix ".view.xml") and which defines the view or must
 * be a configuration object for a view.
 * The configuration object can have a viewName, viewContent and a controller property. The viewName
 * behaves as described above. ViewContent is optional and can hold the view description as XML string; if not
 * given, the View content definition is loaded by the module system.
 * The controller property can hold an controller instance. If a controller instance is given it 
 * overrides the controller defined in the view.
 * </p><p>
 * Like with any other control, id is optional and one will be created automatically.
 * @param {string} [sId] id of the newly created view
 * @param {string | object} vView name of the view or view configuration as described above.
 * @public
 * @static
 * @return {sap.ui.core.mvc.XMLView} the created XMLView instance
 * @memberOf sap.ui
 */
sap.ui.xmlview = function(sId,vView) { return new sap.ui.core.mvc.XMLView(); };


// ---- sap.ui.app --------------------------------------------------------------------------


// ---- sap.ui.app.Application --------------------------------------------------------------------------

/**
 * 
 * Abstract application class. Extend this class to create a central application class.
 * </p><p>
 * Only one instance is allowed.
 * @param {string}
 *            [sId] optional id for the application; generated automatically if
 *            no non-empty id is given Note: this can be omitted, no matter
 *            whether <code>mSettings</code> will be given or not!
 * @param {object}
 *            [mSettings] optional map/JSON-object with initial settings for the
 *            new application instance
 * @public
 * @class Base class for application classes
 * @extends sap.ui.base.ManagedObject
 * @abstract
 * @version 1.15.1-SNAPSHOT
 * @experimental Since 1.11.1. The Application class is still under construction, so some implementation details can be changed in future.
 * @deprecated Since 1.15.1. The Component class is enhanced to take care about the Application code.
 */
sap.ui.app.Application = function(sId,mSettings) {};
/**
 * 
 * Creates and returns the root component. Override this method in your application implementation, if you want to override the default creation by metadata.
 * @return {sap.ui.core.UIComponent} the root component
 * @protected
 */
sap.ui.app.Application.prototype.createRootComponent = function() { return new sap.ui.core.UIComponent(); };

/**
 * 
 * @see sap.ui.base.ManagedObject#destroy
 * @public
 */
sap.ui.app.Application.prototype.destroy = function(bSuppressInvalidate) { return null; };

/**
 * 
 * Returns the application root component. 
 * @return {sap.ui.core.Control} The root component
 * @since 1.13.1
 * @public
 * @deprecated
 */
sap.ui.app.Application.prototype.getView = function() { return new sap.ui.core.Control(); };

/**
 * 
 * The main method is called when the DOM and UI5 is completely loaded. Override this method in your Application class implementation to execute code which relies on a loaded DOM / UI5.
 * @public
 */
sap.ui.app.Application.prototype.main = function() { return null; };

/**
 * 
 * On before exit application hook. Override this method in your Application class implementation, to handle cleanup before the real exit or to prompt a question to the user,
 * if the application should be exited.
 * @return {string} return a string if a prompt should be displayed to the user confirming closing the application (e.g. when the application is not yet saved).
 * @public
 */
sap.ui.app.Application.prototype.onBeforeExit = function() { return ""; };

/**
 * 
 * On error hook. Override this method in your Application class implementation to listen to unhandled errors.
 * @param {string} sMessage The error message.
 * @param {string} sFile The file where the error occurred
 * @param {number} iLine The line number of the error
 * @public
 * 
 */
sap.ui.app.Application.prototype.onError = function(sMessage,sFile,iLine) { return null; };

/**
 * 
 * On exit application hook. Override this method in your Application class implementation, to handle cleanup of the application.
 * @public
 */
sap.ui.app.Application.prototype.onExit = function() { return null; };

/**
 * 
 * Sets the configuration model.
 * @param {string|object|sap.ui.model.Model} vConfig the configuration model, the configuration object or a URI string to load a JSON configuration file.
 * @since 1.13.1
 * @public
 */
sap.ui.app.Application.prototype.setConfig = function(vConfig) { return null; };


// ---- sap.ui.app.MockServer --------------------------------------------------------------------------

/**
 * 
 * Creates a mocked server. This helps to mock all or some backend calls, e.g. for OData/JSON Models or simple XHR calls, without
 * changing the application code. This class can also be used for qunit tests.
 * @param {string} [sId] id for the new server object; generated automatically if no non-empty id is given
 *      Note: this can be omitted, no matter whether <code>mSettings</code> will be given or not!
 * @param {object} [mSettings] optional map/JSON-object with initial property values, aggregated objects etc. for the new object
 * @param {object} [oScope] scope object for resolving string based type and formatter references in bindings
 * @class Class to mock a server
 * @extends sap.ui.base.ManagedObject
 * @abstract
 * @version 1.15.1-SNAPSHOT
 * @public
 * @experimental Since 1.13.0. The mock server is still under construction, so some implementation details can be changed in future.
 * @deprecated Since 1.15.1. The mock server code has been moved to sap.ui.core.util - see {@link sap.ui.core.util.MockServer}
 */
sap.ui.app.MockServer = function(sId,mSettings,oScope) {};

// ---- sap.ui.base --------------------------------------------------------------------------


// ---- sap.ui.base.Event --------------------------------------------------------------------------

/**
 * 
 * Creates an event with the given sId, linked to the provided oSource and enriched with the mParameters.
 * @param {string} sId The id of the event
 * @param {sap.ui.base.EventProvider} oSource The source of the event
 * @param {object} mParameters A map of parameters for this event
 * @class An Event object consisting of an id, a source and a map of parameters
 * @extends sap.ui.base.Object
 * @implements sap.ui.base.Poolable
 * @version 1.15.1-SNAPSHOT
 * @public
 */
sap.ui.base.Event = function(sId,oSource,mParameters) {};
/**
 * 
 * Cancel bubbling of the event.
 * @public
 */
sap.ui.base.Event.prototype.cancelBubble = function() { return null; };

/**
 * 
 * Returns the id of the event
 * @return {string} The id of the event
 * @public
 */
sap.ui.base.Event.prototype.getId = function() { return ""; };

/**
 * 
 * Returns the value of the parameter with the given sName.
 * @param {string} sName the name of the parameter to return
 * @return {any} the value for the named parameter
 * @public
 */
sap.ui.base.Event.prototype.getParameter = function(sName) { return null; };

/**
 * 
 * Returns all parameter values of the event keyed by their names.
 * @return {map} All parameters of the event keyed by name
 * @public
 */
sap.ui.base.Event.prototype.getParameters = function() { return null; };

/**
 * 
 * Returns the source of the event
 * @return {sap.ui.base.EventProvider} The source of the event
 * @public
 */
sap.ui.base.Event.prototype.getSource = function() { return new sap.ui.base.EventProvider(); };

/**
 * 
 * Prevent the default action of this event.
 * @public
 */
sap.ui.base.Event.prototype.preventDefault = function() { return null; };


// ---- sap.ui.base.EventProvider --------------------------------------------------------------------------

/**
 * 
 * Creates an instance of EventProvider.
 * @class Provides internal eventing facilities for objects, so other objects can attach
 * and detach events, and are notified, when events are fired
 * @abstract
 * @extends sap.ui.base.Object
 * @version 1.15.1-SNAPSHOT
 * @constructor
 * @public
 * 
 */
sap.ui.base.EventProvider = function() {};
/**
 * 
 * Adds an event registration for the given object and given event name
 * @param {string}
 *            sEventId The identifier of the event to listen for
 * @param {object}
 *            [oData] The object, that should be passed along with the event-object when firing the event
 * @param {function}
 *            fnFunction The function to call, when the event occurs. This function will be called on the
 *            oListener-instance (if present) or on the event provider-instance
 * @param {object}
 *            [oListener] The object, that wants to be notified, when the event occurs
 * @return {sap.ui.base.EventProvider} Returns <code>this</code> to allow method chaining
 * @public
 */
sap.ui.base.EventProvider.prototype.attachEvent = function(sEventId,oData,fnFunction,oListener) { return new sap.ui.base.EventProvider(); };

/**
 * 
 * Adds a one time event registration for the given object and given event name. When the event occurs, the handler function is called and removed
 * from registration.
 * @param {string}
 *            sEventId The identifier of the event to listen for
 * @param {object}
 *            [oData] The object, that should be passed along with the event-object when firing the event
 * @param {function}
 *            fnFunction The function to call, when the event occurs. This function will be called on the
 *            oListener-instance (if present) or on the event provider-instance
 * @param {object}
 *            [oListener] The object, that wants to be notified, when the event occurs
 * @return {sap.ui.base.EventProvider} Returns <code>this</code> to allow method chaining
 * @public
 */
sap.ui.base.EventProvider.prototype.attachEventOnce = function(sEventId,oData,fnFunction,oListener) { return new sap.ui.base.EventProvider(); };

/**
 * 
 * @see sap.ui.base.Object.prototype.destroy
 * @public
 */
sap.ui.base.EventProvider.prototype.destroy = function() { return null; };

/**
 * 
 * Removes an event registration for the given object and given event name.
 * </p><p>
 * The passed parameters must match those used for registration with {@link #attachEvent } beforehand!
 * @param {string}
 *            sEventId The identifier of the event to detach from
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            [oListener] The object, that wants to be notified, when the event occurs
 * @return {sap.ui.base.EventProvider} Returns <code>this</code> to allow method chaining
 * @public
 */
sap.ui.base.EventProvider.prototype.detachEvent = function(sEventId,fnFunction,oListener) { return new sap.ui.base.EventProvider(); };

/**
 * 
 * Fires the given event and notifies all listeners. Listeners must not change
 * the content of the event.
 * @param {string} sEventId the event id
 * @param {object} [mParameters] the parameter map
 * @param {boolean} [bAllowPreventDefault] whether prevent default is allowed
 * @param {boolean} [bEnableEventBubbling] whether event bubbling is enabled
 * @return {sap.ui.base.EventProvider|boolean} Returns <code>this</code> to allow method chaining or
 * 		   whether the default action should be executed, when bAllowPreventDefault has been set to true
 * @protected
 */
sap.ui.base.EventProvider.prototype.fireEvent = function(sEventId,mParameters,bAllowPreventDefault,bEnableEventBubbling) { return new sap.ui.base.EventProvider(); };

/**
 * 
 * Returns the parent in the eventing hierarchy of this object.
 * </p><p>
 * Per default this returns null, but if eventing is used in objects, which are hierarchically
 * structured, this can be overwritten to make the object hierarchy visible to the eventing and
 * enables the use of event bubbling within this object hierarchy.
 * @return {sap.ui.base.EventProvider} the parent event provider
 * @protected
 */
sap.ui.base.EventProvider.prototype.getEventingParent = function() { return new sap.ui.base.EventProvider(); };

/**
 * 
 * Returns a string representation of this object.
 * </p><p>
 * In case there is no class or id information, a simple static string is returned.
 * Subclasses should override this method.
 * @return {string} a string description of this eventProvider
 * @public
 */
sap.ui.base.EventProvider.prototype.toString = function() { return ""; };


// ---- sap.ui.base.Interface --------------------------------------------------------------------------

/**
 * 
 * Constructs an instance of sap.ui.base.Interface which restricts access to methods marked as public.
 * @class A class that creates an Interface for an existing class. If a class returns the interface in its constructor,
 *        only the defined functions will be visible, no internals of the class can be accessed.
 * @version 1.15.1-SNAPSHOT
 * @param {sap.ui.base.Object}
 *            oObject the instance that needs an interface created
 * @param {string[]}
 *            aMethods the names of the methods, that should be available on this interface
 * @constructor
 * @public
 */
sap.ui.base.Interface = function(oObject,aMethods) {};

// ---- sap.ui.base.ManagedObject --------------------------------------------------------------------------

/**
 * 
 * Constructs and initializes a managed object with the given <code>sId</code> and settings.
 * </p><p>
 * If the optional <code>mSettings</code> are given, they must be a simple object  
 * that defines values for properties, aggregations, associations or events keyed by their name.
 * </p><p>
 * <b>Valid Names:</b>
 * </p><p>
 * The property (key) names supported in the object literal are exactly the (case sensitive)
 * names documented in the JSDoc for the properties, aggregations, associations and events
 * of the managed object and its base classes. Note that for  0..n aggregations and associations this
 * usually is the plural name, whereas it is the singular name in case of 0..1 relations.
 * </p><p>
 * If a key name is ambiguous for a specific managed object class (e.g. a property has the same
 * name as an event), then this method prefers property, aggregation, association and
 * event in that order. To resolve such ambiguities, the keys can be prefixed with
 * <code>aggregation:</code>, <code>association:</code> or <code>event:</code>.
 * In that case the keys must be quoted due to the ':'.
 * </p><p>
 * Each subclass should document the set of supported names in its constructor documentation.
 * </p><p>
 * <b>Valid Values:</b>
 * </p><p>
 * <ul>
 * <li>for normal properties, the value has to be of the correct simple type (no type conversion occurs)
 * <li>for 0..1 aggregations, the value has to be an instance of the aggregated type
 * <li>for 0..n aggregations, the value has to be an array of instances of the aggregated type
 * <li>for 0..1 associations, an instance of the associated type or an id (string) is accepted
 * <li>0..n associations are not supported yet
 * <li>for events either a function (event handler) is accepted or an array of length 2
 *     where the first element is a function and the 2nd element is an object to invoke the method on.
 * </ul>
 * @param {string} [sId] id for the new managed object; generated automatically if no non-empty id is given
 *      Note: this can be omitted, no matter whether <code>mSettings</code> will be given or not!
 * @param {object} [mSettings] optional map/JSON-object with initial property values, aggregated objects etc. for the new object
 * @param {object} [oScope] scope object for resolving string based type and formatter references in bindings
 * @class Base Class for managed objects.
 * @extends sap.ui.base.EventProvider
 * @version 1.15.1-SNAPSHOT
 * @public
 * @experimental Since 1.11.2. support for the optional parameter oScope is still experimental 
 */
sap.ui.base.ManagedObject = function(sId,mSettings,oScope) {};
/**
 * 
 * Adds some entity <code>oObject</code> to the aggregation identified by <code>sAggregationName</code>.
 * @param {string}
 *            sAggregationName the string identifying the aggregation that <code>oObject</code> should be added to.
 * @param {sap.ui.base.ManagedObject}
 *            oObject the object to add; if empty, nothing is added
 * @param {boolean}
 *            [bSuppressInvalidate] if true, this ManagedObject as well as the added child are not marked as changed
 * @return {sap.ui.base.ManagedObject} Returns <code>this</code> to allow method chaining
 * @protected
 */
sap.ui.base.ManagedObject.prototype.addAggregation = function(sAggregationName,oObject,bSuppressInvalidate) { return new sap.ui.base.ManagedObject(); };

/**
 * 
 * Adds some entity with the ID <code>sId</code> to the association identified by <code>sAssociationName</code>.
 * @param {string}
 *            sAssociationName the string identifying the association the object should be added to.
 * @param {string | sap.ui.base.ManagedObject}
 *            sId the ID of the managed object to add; if empty, nothing is added; if a <code>sap.ui.base.ManagedObject</code> is given, its ID is added
 * @param {boolean}
 *            [bSuppressInvalidate] if true, this managed object as well as the newly associated object are not marked as changed
 * @return {sap.ui.base.ManagedObject} Returns <code>this</code> to allow method chaining
 * @protected
 */
sap.ui.base.ManagedObject.prototype.addAssociation = function(sAssociationName,sId,bSuppressInvalidate) { return new sap.ui.base.ManagedObject(); };

/**
 * 
 * Sets all the properties, aggregations, associations and event handlers as given in
 * the object literal <code>mSettings</code>. If a property, aggregation, etc.
 * is not listed in <code>mSettings</code>, then its value is not changed by this method.
 * </p><p>
 * For properties and 0..1 aggregations/associations, any given setting overwrites
 * the current value. For 0..n aggregations, the given values are appended; event
 * listeners are registered in addition to existing ones.
 * </p><p>
 * For the possible keys and values in <code>mSettings</code> see the general
 * documentation in {@link sap.ui.base.ManagedObject} or the specific documentation
 * of the constructor of the concrete managed object class.
 * @param {object} mSettings the settings to apply to this managed object
 * @param {object} [oScope] Scope object to resolve types and formatters
 * @return {sap.ui.base.ManagedObject} Returns <code>this</code> to allow method chaining
 * @public
 * @experimental Since 1.11.2. support for complex string binding syntax as well as the 
 * 				scope object for resolving string based type and formatter references 
 * 				in bindings is still experimental
 */
sap.ui.base.ManagedObject.prototype.applySettings = function(mSettings,oScope) { return new sap.ui.base.ManagedObject(); };

/**
 * 
 * Bind an aggregation to the model.
 * The bound aggregation will use the given template, clone it for each item
 * which exists in the bound list and set the appropriate binding context.
 * This is a generic method which can be used to bind any aggregation to the
 * model. A managed object may flag aggregations in the metamodel with
 * bindable="bindable" to get typed bind methods for an aggregation.
 * @param {string} sName the aggregation to bind
 * @param {object} oBindingInfo the binding info
 * @param {string} oBindingInfo.path the binding path
 * @param {sap.ui.base.ManagedObject} oBindingInfo.template the template
 * @param {function} oBindingInfo.factory the factory function
 * @param {sap.ui.model.Sorter|Array} [oBindingInfo.aSorters] the initial sort order (optional)
 * @param {array} [oBindingInfo.filters] the predefined filters (sap.ui.model.Filter) for this aggregation (optional)
 * @param {object} [oBindingInfo.parameters] a map of parameters which is passed to the binding
 * @param {function} [oBindingInfo.groupHeaderFactory] a factory function to genrate custom group visualization (optional)
 * @return {sap.ui.base.ManagedObject} reference to the instance itself
 * @public
 */
sap.ui.base.ManagedObject.prototype.bindAggregation = function(sName,oBindingInfo) { return new sap.ui.base.ManagedObject(); };

/**
 * 
 * Bind the object to the referenced entity in the model, which is used as the binding context
 * to resolve bound properties or aggregations of the object itself and all of its children
 * relatively to the given path. 
 * @deprecated Since 1.11.1, please use bindElement instead.
 * @param {string} sPath the binding path
 * @return {sap.ui.base.ManagedObject} reference to the instance itself
 * @public
 */
sap.ui.base.ManagedObject.prototype.bindContext = function(sPath) { return new sap.ui.base.ManagedObject(); };

/**
 * 
 * Bind the object to the referenced entity in the model, which is used as the binding context
 * to resolve bound properties or aggregations of the object itself and all of its children
 * relatively to the given path.
 * If a relative binding path is used, this will be applied whenever the parent context changes.
 * @param {string} sPath the binding path
 * @param {object} [mParameters] map of additional parameters for this binding
 * @return {sap.ui.base.ManagedObject} reference to the instance itself
 * @public 
 */
sap.ui.base.ManagedObject.prototype.bindElement = function(sPath,mParameters) { return new sap.ui.base.ManagedObject(); };

/**
 * 
 * Bind a property to the model.
 * The Setter for the given property will be called with the value retrieved
 * from the data model.
 * This is a generic method which can be used to bind any property to the
 * model. A managed object may flag properties in the metamodel with
 * bindable="bindable" to get typed bind methods for a property.
 * @param {string} sName the name of the property
 * @param {object} oBindingInfo the binding information
 * @param {string} oBindingInfo.path the binding path
 * @param {string} [oBindingInfo.model] the model identifier
 * @param {function} [oBindingInfo.formatter] the formatter function
 * @param {boolean} [oBindingInfo.useRawValues] determines if the parameters in the formatter functions should be passed as raw values or not. In this case
 * 					the specified type for the binding is not used and the values are not formatted. Note: use this flag only when using multiple bindings.
 * 					If you use only one binding and want raw values then simply don't specify a type for that binding. 
 * @param {sap.ui.model.Type|string} [oBindingInfo.type] the sap.ui.model.Type object or class name
 * @param {object} [oBindingInfo.formatOptions] the format options to be used
 * @param {object} [oBindingInfo.constraints] the constraints for this value
 * @param {sap.ui.model.BindingMode} [oBindingInfo.mode=Default] the binding mode to be used for this property binding (e.g. one way)
 * @param {object} [oBindingInfo.parameters] a map of parameters which is passed to the binding
 * @return {sap.ui.base.ManagedObject} reference to the instance itself
 * @public
 */
sap.ui.base.ManagedObject.prototype.bindProperty = function(sName,oBindingInfo) { return new sap.ui.base.ManagedObject(); };

/**
 * 
 * Clones a tree of objects starting with the object on which clone is called first (root object).
 * </p><p>
 * The ids within the newly created clone tree are derived from the original ids by appending
 * the given <code>sIdSuffix</code> (if no suffix is given, one will be created; it will be 
 * unique across multiple clone calls).
 * </p><p>
 * The <code>oOptions</code> configuration object can have the following properties:
 * <ul>
 * <li>The boolean value <code>cloneChildren</code> specifies wether associations/aggregations will be cloned</li>
 * <li>The boolean value <code>cloneBindings</code> specifies if bindings will be cloned</li>
 * </ul>
 * </p><p>
 * For each cloned object the following settings are cloned based on the metadata of the object and the defined options:
 * <ul>
 * <li>all properties that are not bound. If cloneBinding is false even these properties will be cloned; 
 * the values are used by reference, they are not cloned</li>
 * <li>all aggregated objects that are not bound. If cloneBinding is false even the ones that are bound will be cloned;
 * they are all cloned recursively using the same <code>sIdSuffix</code></li>
 * <li>all associated controls; when an association points to an object inside the cloned object tree,
 *     then the cloned association will be modified to that it points to the clone of the target object.
 *     When the association points to a managed object outside of the cloned object tree, then its 
 *     target won't be changed.</li>  
 * <li>all models set via setModel(); used by reference </li>
 * <li>all property and aggregation bindings (if cloneBindings is true); the pure binding infos (path, model name) are 
 *     cloned, but all other information like template control or factory function, 
 *     data type or formatter function are copied by reference. The bindings themselves 
 *     are created anew as they are specific for the combination (object, property, model).
 *     As a result, any later changes to a binding of the original object are not reflected 
 *     in the clone, but changes to e.g the type or template etc. are.</li> 
 * </ul>
 * </p><p>
 * Each clone is created by first collecting the above mentioned settings and then creating 
 * a new instance with the normal constructor function. As a result, any side effects of 
 * mutator methods (setProperty etc.) or init hooks are repeated during clone creation. 
 * There is no need to override <code>clone()</code> just to reproduce these internal settings!
 * </p><p>
 * Custom controls however can override <code>clone()</code> to implement additional clone steps. 
 * They usually will first call <code>clone()</code> on the super class and then modify the   
 * returned clone accordingly.  
 * </p><p>
 * Applications <b>must never provide</b> the second parameter <code>aLocaleIds</code>. 
 * It is determined automatically for the root object (and its non-existance also serves as 
 * an indicator for the root object). Specifying it will break the implementation of <code>clone()</code>. 
 * @param {String} [sIdSuffix] a suffix to be appended to the cloned object id
 * @param {Array} [aLocalIds] an array of local IDs within the cloned hierarchy (internally used)
 * @param {Object} [oOptions] configuration object 
 * @return {sap.ui.base.ManagedObject} reference to the newly created clone
 * @protected
 */
sap.ui.base.ManagedObject.prototype.clone = function(sIdSuffix,aLocalIds,oOptions) { return new sap.ui.base.ManagedObject(); };

/**
 * 
 * Creates a new ManagedObject from the given data.
 * </p><p>
 * If vData is a managed object already, that object is returned.
 * If vData is an object (literal), then a new object is created with vData as settings.
 * The type of the object is either determined by a "Type" entry in the vData or
 * by a type information in the oKeyInfo object
 * @param {sap.ui.base.ManagedObject|object} vData the data to create the object from
 * @param {object} oKeyInfo
 * @public
 * @static
 */
sap.ui.base.ManagedObject.create = function(vData,oKeyInfo) { return null; };

/**
 * 
 * Cleans up the resources associated with this object and all its aggregated children.
 * </p><p>
 * After an object has been destroyed, it can no longer be used in!
 * </p><p>
 * Applications should call this method if they don't need the object any longer.
 * @param {boolean}
 *            [bSuppressInvalidate] if true, this ManagedObject is not marked as changed
 * @public
 */
sap.ui.base.ManagedObject.prototype.destroy = function(bSuppressInvalidate) { return null; };

/**
 * 
 * Destroys (all) the managed object(s) in the aggregation named <code>sAggregationName</code> and afterwards empties the
 * aggregation.
 * @param {string}
 *            sAggregationName the name of the aggregation
 * @param {boolean}
 *            [bSuppressInvalidate] if true, this ManagedObject is not marked as changed
 * @return {sap.ui.base.ManagedObject} Returns <code>this</code> to allow method chaining
 * @protected
 */
sap.ui.base.ManagedObject.prototype.destroyAggregation = function(sAggregationName,bSuppressInvalidate) { return new sap.ui.base.ManagedObject(); };

/**
 * 
 * Searches and returns an array of child elements and controls which are
 * referenced within an aggregation or aggregations of child elements/controls.
 * This can be either done recursive or not.
 * <br>
 * <b>Take care: this operation might be expensive.</b>
 * @param {boolean}
 *          bRecursive true, if all nested children should be returned.
 * @return {sap.ui.base.ManagedObject[]} array of child elements and controls
 * @public
 */
sap.ui.base.ManagedObject.prototype.findAggregatedObjects = function(bRecursive) { return new Array(); };

/**
 * 
 * Returns an aggregation of the managed object with a given sAggregationName
 * @param {string}
 *            sAggregationName the name of the aggregation
 * @param {sap.ui.base.ManagedObject | Array}
 * 			  oDefaultForCreation the object that is used in case the current aggregation is empty
 * @type sap.ui.base.ManagedObject|Array
 * @return the aggregation array in case of 0..n-aggregations or the managed object or null in case of 0..1-aggregations
 * @protected
 */
sap.ui.base.ManagedObject.prototype.getAggregation = function(sAggregationName,oDefaultForCreation) { return new sap.ui.base.ManagedObject(); };

/**
 * 
 * Returns an association of the managed object with a given sAssociationName
 * @param {string} sAssociationName the name of the association
 * @param {object}
 * 			  oDefaultForCreation the object that is used in case the current aggregation is empty (only null or empty array allowed)
 * @return {string | string[]} the ID of the associated managed object or an array of such IDs; may be null if the association has not been populated
 * @protected
 */
sap.ui.base.ManagedObject.prototype.getAssociation = function(sAssociationName,oDefaultForCreation) { return null; };

/**
 * 
 * Get the binding object for a specific aggregation/property
 * @param {String} sName the name of the property or aggregation
 * @return {Binding} the binding for the given name
 * @public
 */
sap.ui.base.ManagedObject.prototype.getBinding = function(sName) { return null; };

/**
 * 
 * Get the binding context of this object for the given model name.
 * </p><p>
 * If the object does not have a binding context set on itself and has no own Model set, 
 * it will use the first binding context defined in its parent hierarchy.
 * </p><p>
 * Note: to be compatible with future versions of this API, applications must not use the value <code>null</code>,
 * the empty string <code>""</code> or the string literals <code>"null"</code> or <code>"undefined"</code> as model name. 
 * </p><p>
 * Note: A ManagedObject inherits binding contexts from the Core only when it is a descendant of an UIArea.
 * @param {string} [sName] the name of the model or <code>undefined</code>
 * @return {Object} the binding context of this object
 * @public
 */
sap.ui.base.ManagedObject.prototype.getBindingContext = function(sName) { return null; };

/**
 * 
 * Returns the binding infos for the given property or aggregation. The binding info contains information about path, binding object, format options,
 * sorter, filter etc. for the property or aggregation.
 * @param {string} sName the name of the property or aggregation
 * @returns {object} the binding info object, containing at least a path property
 *                   and, dependant of the binding type, additional properties
 * @protected
 */
sap.ui.base.ManagedObject.prototype.getBindingInfo = function(sName) { return new Object(); };

/**
 * 
 * Get the binding path for a specific aggregation/property
 * @param {String} sName the name of the property or aggregation
 * @return {String} the binding path for the given name
 * @protected
 */
sap.ui.base.ManagedObject.prototype.getBindingPath = function(sName) { return null; };

/**
 * 
 * Get the element binding object for a specific model
 * @param {String} sModelName the name of the model
 * @return {Binding} the element binding for the given model name
 * @public
 */
sap.ui.base.ManagedObject.prototype.getElementBinding = function(sModelName) { return null; };

/**
 * 
 * Returns the object's Id.
 * @return {string} the objects's Id.
 * @public
 */
sap.ui.base.ManagedObject.prototype.getId = function() { return ""; };

/**
 * 
 * Get the model to be used for data bindings with the given model name.
 * If the object does not have a model set on itself, it will use the first 
 * model defined in its parent hierarchy.
 * </p><p>
 * The name can be omitted to reference the default model or it must be a non-empty string.
 * </p><p>
 * Note: to be compatible with future versions of this API, applications must not use the value <code>null</code>,
 * the empty string <code>""</code> or the string literals <code>"null"</code> or <code>"undefined"</code> as model name. 
 * @param {string|undefined} [sName] name of the model to be retrieved
 * @return {sap.ui.model.Model} oModel
 * @public
 */
sap.ui.base.ManagedObject.prototype.getModel = function(sName) { return new sap.ui.model.Model(); };

/**
 * 
 * Returns the origin info on the property value of the given property name
 * @param {string} sPropertyName the name of the property
 * @return {object} a map of properties describing the origin of this property value or null
 * @public
 */
sap.ui.base.ManagedObject.prototype.getOriginInfo = function(sPropertyName) { return new Object(); };

/**
 * 
 * Returns the parent managed object or <code>null</code> if this object hasn't been added to a parent yet.
 * @return {sap.ui.base.ManagedObject} The parent managed object or <code>null</code>
 * @public
 */
sap.ui.base.ManagedObject.prototype.getParent = function() { return new sap.ui.base.ManagedObject(); };

/**
 * 
 * Returns the value for the property with the given <code>sPropertyName</code>
 * @param {string} sPropertyName the name of the property
 * @type any
 * @return the value of the property
 * @protected
 */
sap.ui.base.ManagedObject.prototype.getProperty = function(sPropertyName) { return null; };

/**
 * 
 * Check if any model is set to the ManagedObject or to one of its parents (including UIArea and Core).
 * </p><p>
 * Note: A ManagedObject inherits models from the Core only when it is a descendant of an UIArea.
 * @return {boolean} whether a model reference exists or not
 * @public
 */
sap.ui.base.ManagedObject.prototype.hasModel = function() { return false; };

/**
 * 
 * Checks for the provided managed object <code>oObject</code> in the aggregation
 * named <code>sAggregationName</code> and returns its index if found, or -1
 * otherwise. Returns -2 if the given named aggregation is not a multiple one
 * (and does not contain the given child).
 * @param {string}
 *            sAggregationName the name of the aggregation
 * @param {sap.ui.base.ManagedObject}
 *            oObject the ManagedObject whose index is looked for.
 * @return {int} the index of the provided managed object in the aggregation.
 * @protected
 */
sap.ui.base.ManagedObject.prototype.indexOfAggregation = function(sAggregationName,oObject) { return 0; };

/**
 * 
 * Inserts managed object <code>oObject</code> to the aggregation named <code>sAggregationName</code> at
 * position <code>iIndex</code>.
 * @param {string}
 *            sAggregationName the string identifying the aggregation the managed object <code>oObject</code>
 *            should be inserted into.
 * @param {sap.ui.base.ManagedObject}
 *            oObject the ManagedObject to add; if empty, nothing is inserted.
 * @param {int}
 *            iIndex the <code>0</code>-based index the managed object should be inserted at; for a negative
 *            value <code>iIndex</code>, <code>oObject</code> is inserted at position 0; for a value
 *            greater than the current size of the aggregation, <code>oObject</code> is inserted at
 *            the last position
 * @param {boolean}
 *            [bSuppressInvalidate] if true, this ManagedObject as well as the added child are not marked as changed
 * @return {sap.ui.base.ManagedObject} Returns <code>this</code> to allow method chaining
 * @protected
 */
sap.ui.base.ManagedObject.prototype.insertAggregation = function(sAggregationName,oObject,iIndex,bSuppressInvalidate) { return new sap.ui.base.ManagedObject(); };

/**
 * 
 * This triggers rerendering of itself and its children.<br/> As <code>sap.ui.base.ManagedObject</code> "bubbles up" the
 * invalidate, changes to child-<code>Elements</code> will also result in rerendering of the whole sub tree.
 * @protected
 */
sap.ui.base.ManagedObject.prototype.invalidate = function() { return null; };

/**
 * 
 * Find out whether a property or aggregation is bound
 * @param {String} sName the name of the property or aggregation
 * @return {boolean} whether a binding exists for the given name
 * @public
 */
sap.ui.base.ManagedObject.prototype.isBound = function(sName) { return false; };

/**
 * 
 * Returns whether rerendering is currently suppressed on this ManagedObject
 * @return boolean
 * @protected
 */
sap.ui.base.ManagedObject.prototype.isInvalidateSuppressed = function() { return null; };

/**
 * 
 * This method is used internally and should only be overridden by a tree managed object which utilizes the tree binding.
 *  In this case and if the aggregation is a tree node the overridden method should then return true.
 *  If true is returned the tree binding will be used instead of the list binding.
 *  @param {string} sName the aggregation to bind (e.g. nodes for a tree managed object)
 *  @return {boolean} whether tree binding should be used or list binding. Default is false. Override method to change this behavior.
 *  @protected
 */
sap.ui.base.ManagedObject.prototype.isTreeBinding = function(sName) { return false; };

/**
 * 
 * Removes an object from the aggregation named <code>sAggregationName</code>.
 * @param {string}
 *            sAggregationName the string identifying the aggregation the ManagedObject should be removed from
 * @param {int | string | sap.ui.base.ManagedObject}
 *            vObject the position or ID of the ManagedObject to remove or the ManagedObject itself; if <code>vObject</code> is invalid,
 *            a negative value or a value greater or equal than the current size of the aggregation, nothing is removed
 * @param {boolean}
 *            [bSuppressInvalidate] if true, this ManagedObject is not marked as changed
 * @type sap.ui.base.ManagedObject
 * @return the removed object or null
 * @protected
 */
sap.ui.base.ManagedObject.prototype.removeAggregation = function(sAggregationName,vObject,bSuppressInvalidate) { return new sap.ui.base.ManagedObject(); };

/**
 * 
 * Removes all the controls in the 0..n-aggregation named <code>sAggregationName</code> (and returns them in an array).<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @param {string}
 *            sAggregationName the name of the aggregation
 * @param {boolean}
 *            [bSuppressInvalidate] if true, this ManagedObject is not marked as changed
 * @type Array
 * @return an array of the removed elements (might be empty)
 * @protected
 */
sap.ui.base.ManagedObject.prototype.removeAllAggregation = function(sAggregationName,bSuppressInvalidate) { return null; };

/**
 * 
 * Removes all the objects in the 0..n-association named <code>sAssociationName</code> (and returns them in an array).<br/>
 * @param {string}
 *            sAssociationName the name of the association
 * @param {boolean}
 *            [bSuppressInvalidate] if true, this ManagedObject is not marked as changed
 * @type Array
 * @return an array with the IDs of the removed objects (might be empty)
 * @protected
 */
sap.ui.base.ManagedObject.prototype.removeAllAssociation = function(sAssociationName,bSuppressInvalidate) { return null; };

/**
 * 
 * Removes a ManagedObject from the association named <code>sAssociationName</code>.
 * @param {string}
 *            sAssociationName the string identifying the association the ManagedObject should be removed from.
 * @param {int | string | sap.ui.base.ManagedObject}
 *            vObject the position or ID of the ManagedObject to remove or the ManagedObject itself; if <code>vObject</code> is invalid input,
 *            a negative value or a value greater or equal than the current size of the association, nothing is removed
 * @param {boolean}
 *            [bSuppressInvalidate] if true, the managed object is not marked as changed
 * @return the ID of the removed ManagedObject or null
 * @protected
 */
sap.ui.base.ManagedObject.prototype.removeAssociation = function(sAssociationName,vObject,bSuppressInvalidate) { return null; };

/**
 * 
 * Sets an aggregation for the managed object
 * @param {string}
 *            sAggregationName name of the aggregation
 * @param {object}
 *            oObject the managed object that is set as an aggregation
 * @param {boolean}
 *            [bSuppressInvalidate] if true, this ManagedObject is not marked as changed
 * @return {sap.ui.base.ManagedObject} Returns <code>this</code> to allow method chaining
 * @protected
 */
sap.ui.base.ManagedObject.prototype.setAggregation = function(sAggregationName,oObject,bSuppressInvalidate) { return new sap.ui.base.ManagedObject(); };

/**
 * 
 * Sets an association for the managed object
 * @param {string}
 *            sAssociationName name of the association
 * @param {string | sap.ui.base.ManagedObject}
 *            sId the ID of the managed object that is set as an association, or the managed object itself or null
 * @param {boolean}
 *            [bSuppressInvalidate] if true, the managed objects invalidate method is not called
 * @return {sap.ui.base.ManagedObject} Returns <code>this</code> to allow method chaining
 * @protected
 */
sap.ui.base.ManagedObject.prototype.setAssociation = function(sAssociationName,sId,bSuppressInvalidate) { return new sap.ui.base.ManagedObject(); };

/**
 * 
 * Set the binding context for this ManagedObject for the model with the given name.
 * </p><p>
 * Note: to be compatible with future versions of this API, applications must not use the value <code>null</code>,
 * the empty string <code>""</code> or the string literals <code>"null"</code> or <code>"undefined"</code> as model name. 
 * </p><p>
 * Note: A ManagedObject inherits binding contexts from the Core only when it is a descendant of an UIArea.
 * @param {Object} oContext the new binding context for this object
 * @param {string} [sName] the name of the model to set the context for or <code>undefined</code>
 * @return {sap.ui.base.ManagedObject} reference to the instance itself
 * @public
 */
sap.ui.base.ManagedObject.prototype.setBindingContext = function(oContext,sName) { return new sap.ui.base.ManagedObject(); };

/**
 * 
 * Sets or unsets a model for the given model name for this ManagedObject. 
 * </p><p>
 * The <code>sName</code> must either be <code>undefined</code> (or omitted) or a non-empty string.
 * When the name is omitted, the default model is set/unset. 
 * </p><p>
 * When <code>oModel</code> is <code>null</code> or <code>undefined</code>, a previously set model 
 * with that name is removed from this ManagedObject. If an ancestor (parent, UIArea or Core) has a model 
 * with that name, this ManagedObject will immediately inherit that model from its ancestor.
 * </p><p>
 * All local bindings that depend on the given model name, are updated (created if the model references 
 * became complete now; updated, if any model reference has changed; removed if the model references 
 * became incomplete now).
 * </p><p>
 * Any change (new model, removed model, inherited model) is also applied to all aggregated descendants 
 * as long as a descendant doesn't have its own model set for the given name.
 * </p><p>
 * Note: to be compatible with future versions of this API, applications must not use the value <code>null</code>,
 * the empty string <code>""</code> or the string literals <code>"null"</code> or <code>"undefined"</code> as model name. 
 * </p><p>
 * Note: By design, it is not possible to hide an inherited model by setting a <code>null</code> or 
 * <code>undefined</code> model. Applications can set an empty model to achieve the same. 
 * </p><p>
 * Note: A ManagedObject inherits models from the Core only when it is a descendant of an UIArea.
 * @param {sap.ui.model.Model} oModel the model to be set or <code>null</code> or <code>undefined</code>
 * @param {string} [sName] the name of the model or <code>undefined</code>
 * @return {sap.ui.base.ManagedObject} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.base.ManagedObject.prototype.setModel = function(oModel,sName) { return new sap.ui.base.ManagedObject(); };

/**
 * 
 * Sets a new value for the given property <code>sPropertyName</code> and marks
 * this object as changed. If the given <code>oValue</code> equals the
 * current value, nothing happens.
 * @param {string}  sPropertyName name of the property to set
 * @param {any}     oValue value to set the property to
 * @param {boolean} [bSuppressInvalidate] if true, the managed is not marked as changed
 * @return {sap.ui.base.ManagedObject} Returns <code>this</code> to allow method chaining
 * TODO better name bSuppressInvalidate positive, e.g. "bStayValid"
 * @protected
 */
sap.ui.base.ManagedObject.prototype.setProperty = function(sPropertyName,oValue,bSuppressInvalidate) { return new sap.ui.base.ManagedObject(); };

/**
 * 
 * Returns a simple string representation of this managed object.
 * </p><p>
 * Mainly useful for tracing purposes.
 * @public
 * @return {string} a string description of this managed object
 */
sap.ui.base.ManagedObject.prototype.toString = function() { return ""; };

/**
 * 
 * Unbind the aggregation from the model
 * @param {String} sName the name of the aggregation
 * @param {boolean} bSuppressReset whether the reset to empty aggregation when unbinding should be suppressed
 * @return {sap.ui.base.ManagedObject} reference to the instance itself
 * @public
 */
sap.ui.base.ManagedObject.prototype.unbindAggregation = function(sName,bSuppressReset) { return new sap.ui.base.ManagedObject(); };

/**
 * 
 * Removes the defined binding context of this object, all bindings will now resolve
 * relative to the parent context again.
 * @deprecated Since 1.11.1, please use unbindElement instead.
 * @return {sap.ui.base.ManagedObject} reference to the instance itself
 * @public
 */
sap.ui.base.ManagedObject.prototype.unbindContext = function(sModelName) { return new sap.ui.base.ManagedObject(); };

/**
 * 
 * Removes the defined binding context of this object, all bindings will now resolve
 * relative to the parent context again.
 * @return {sap.ui.base.ManagedObject} reference to the instance itself
 * @public
 */
sap.ui.base.ManagedObject.prototype.unbindElement = function(sModelName) { return new sap.ui.base.ManagedObject(); };

/**
 * 
 * Unbind the property from the model
 * @param {String} sName the name of the property
 * @param {boolean} bSuppressReset whether the reset to the default value when unbinding should be suppressed
 * @return {sap.ui.base.ManagedObject} reference to the instance itself
 * @public
 */
sap.ui.base.ManagedObject.prototype.unbindProperty = function(sName,bSuppressReset) { return new sap.ui.base.ManagedObject(); };

/**
 * 
 * Checks whether the given value is of the proper type for the given aggregation name. 
 * @param {string} sAggregationName the name of the aggregation
 * @param {sap.ui.base.ManagedObject|any} oObject the aggregated object or a primitive value
 * @param {boolean} bMultiple whether the aggregation must have cardinality 0..n
 * @return {sap.ui.base.ManagedObject|any} the passed object
 * @throws Error if no aggregation with the given name is found or the given value does not fit to the aggregation type
 * @protected
 */
sap.ui.base.ManagedObject.prototype.validateAggregation = function(sAggregationName,oObject,bMultiple) { return new sap.ui.base.ManagedObject(); };

/**
 * 
 * Checks whether the given value is of the proper type for the given property name. In case null or undefined is
 * passed, the default value for this property is returned.
 * @param {string} sPropertyName the name of the property
 * @param {any} oValue the value
 * @return {any} the passed value or the property's default value if null or undefined was passed
 * @throws Error if no property with the given name is found or the given value does not fit to the property type
 * @protected
 */
sap.ui.base.ManagedObject.prototype.validateProperty = function(sPropertyName,oValue) { return null; };


// ---- sap.ui.base.Metadata --------------------------------------------------------------------------

/**
 * 
 * Creates a new metadata object from the given static infos.
 * @param {string} sClassName fully qualified name of the class that is described by this metadata object
 * @param {object} oClassInfo info to construct the class and its metadata from
 * @class Metadata for a class.
 * @version 1.15.1-SNAPSHOT
 * @since 0.8.6
 * @public
 */
sap.ui.base.Metadata = function(sClassName,oClassInfo) {};
/**
 * 
 * Returns an array with the names of all public methods declared by this class
 * and its ancestors.
 * @return {string[]} array with names of all public methods provided by this class and its ancestors
 * @public
 */
sap.ui.base.Metadata.prototype.getAllPublicMethods = function() { return new Array(); };

/**
 * 
 * Returns the (constructor of the) class described by this metadata object.
 * @return {function} class described by this metadata
 * @public
 */
sap.ui.base.Metadata.prototype.getClass = function() { return function() {}; };

/**
 * 
 * Returns the fully qualified name of the class that is described by this metadata object
 * @return {string} name of the described class
 * @public
 */
sap.ui.base.Metadata.prototype.getName = function() { return ""; };

/**
 * 
 * Returns the metadata object of the base class of the class described by this metadata object
 * or null if the class has no (documented) base class.
 * @return {sap.ui.base.Metadata} metadata of the base class
 * @public
 */
sap.ui.base.Metadata.prototype.getParent = function() { return new sap.ui.base.Metadata(); };

/**
 * 
 * Returns an array with the names of the public methods declared by this class.
 * @return {string[]} array with names of public methods declared by this class
 * @public
 */
sap.ui.base.Metadata.prototype.getPublicMethods = function() { return new Array(); };

/**
 * 
 * Checks whether the class described by this object or one of its ancestors
 * implements the given interface.
 * @param {string} sInterface name of the interface to test for (in dot notation)
 * @return {boolean} whether this class implements the interface
 * @public
 */
sap.ui.base.Metadata.prototype.isInstanceOf = function(sInterface) { return false; };


// ---- sap.ui.base.Object --------------------------------------------------------------------------

/**
 * 
 * Constructor for a sap.ui.base.Object.
 * @class Base class for all SAPUI5 Objects
 * @abstract
 * @version 1.15.1-SNAPSHOT
 * @public
 * 
 */
sap.ui.base.Object = function() {};
/**
 * 
 * Creates metadata for a given class and attaches it to the constructor and prototype of that class.
 * </p><p>
 * After creation, metadata can be retrieved with getMetadata().
 * </p><p>
 * The static info can at least contain the following entries:
 * <ul>
 * <li>baseType: {string} fully qualified name of a base class or empty
 * <li>publicMethods: {string} an array of method names that will be visible in the interface proxy returned by {@link #getInterface}
 * </ul>
 * @param {string} sClassName name of an (already declared) constructor function
 * @param {object} oStaticInfo static info used to create the metadata object
 * @param {string} oStaticInfo.baseType qualified name of a base class
 * @param {string[]} oStaticInfo.publicMethods array of names of public methods
 * @param {function} [xMetaImpl] constructor function for the metadata object. If not given, it defaults to sap.ui.base.Metadata.
 * @return {sap.ui.base.Metadata} the created metadata object
 * @public
 * @static
 * @deprecated Since 1.3.1. Use the static <code>extend</code> method of the desired base class (e.g. {@link sap.ui.base.Object.extend})
 */
sap.ui.base.Object.defineClass = function(sClassName,oStaticInfo,xMetaImpl) { return new sap.ui.base.Metadata(); };

/**
 * 
 * Destructor method for objects
 * @public
 */
sap.ui.base.Object.prototype.destroy = function() { return null; };

/**
 * 
 * Creates a subclass of class sap.ui.base.Object with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * </p><p>
 * <code>oClassInfo</code> might contain three kinds of informations:
 * <ul>
 * <li><code>metadata:</code> an (optional) object literal with metadata about the class.
 * The information in the object literal will be wrapped by an instance of {@link sap.ui.base.Metadata Metadata}
 * and might contain the following information
 * <ul>
 * <li><code>interfaces:</code> {string[]} (optional) set of names of implemented interfaces (defaults to no interfaces)</li>
 * <li><code>publicMethods:</code> {string[]} (optional) list of methods that should be part of the public
 * facade of the class</li>
 * <li><code>abstract:</code> {boolean} (optional) flag that marks the class as abstract (purely informational, defaults to false)</li>
 * <li><code>final:</code> {boolean} (optional) flag that marks the class as final (defaults to false)</li>
 * </ul>
 * Subclasses of sap.ui.base.Object can enrich the set of supported metadata (e.g. see {@link sap.ui.core.Element.extend}).
 * </li>
 * </p><p>
 * <li><code>constructor:</code> a function that serves as a constructor function for the new class.
 * If no constructor function is given, the framework creates a default implementation that delegates all
 * its arguments to the constructor function of the base class.
 * </li>
 * </p><p>
 * <li><i>any-other-name:</i> any other property in the <code>oClassInfo</code> is copied into the prototype
 * object of the newly created class. Callers can thereby add methods or properties to all instances of the
 * class. But be aware that the given values are shared between all instances of the class. Usually, it doesn't
 * make sense to use primitive values here other than to declare public constants.
 * </li>
 * </p><p>
 * </ul>
 * </p><p>
 * The prototype object of the newly created class uses the same prototype as instances of the base class
 * (prototype chaining).
 * </p><p>
 * A metadata object is always created, even if there is no <code>metadata</code> entry in the <code>oClassInfo</code>
 * object. A getter for the metadata is always attached to the prototype and to the class (constructor function)
 * itself.
 * </p><p>
 * Last but not least, with the third argument <code>FNMetaImpl</code> the constructor of a metadata class
 * can be specified. Instances of that class will be used to represent metadata for the newly created class
 * and for any subclass created from it. Typically, only frameworks will use this parameter to enrich the
 * metadata for a new class hierarchy they introduce (e.g. {@link sap.ui.core.Element.extend Element}).
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] structured object with informations about the class
 * @param {function} [FNMetaImpl] constructor function for the metadata object. If not given, it defaults to sap.ui.base.Metadata.
 * @return {function} the created class / constructor function
 * @public
 * @static
 * @since 1.3.1
 */
sap.ui.base.Object.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * 
 * Returns the public interface of the object.
 * @return {sap.ui.base.Interface} the public interface of the object
 * @public
 */
sap.ui.base.Object.prototype.getInterface = function() { return new sap.ui.base.Interface(); };


// ---- sap.ui.base.ObjectPool --------------------------------------------------------------------------

/**
 * 
 * Creates an ObjectPool instance based on the given oObjectClass.&lt;br/&gt;
 * If there is a free pooled instance, returns that one, otherwise creates a new one.&lt;br/&gt;
 * In order to be maintained by the ObjectPool, oObjectClass must implement
 * methods described in the class description.
 * @param {function} oObjectClass constructor for the class of objects that this pool should manage
 * @class Manages a pool of objects all of the same type;
 * the type has to be specified at pool construction time.
 * </p><p>
 * Maintains a list of free objects of the given type.
 * If {@link sap.ui.base.ObjectPool.prototype.borrowObject} is called, an existing free object
 * is taken from the pool and the <code>init</code> method is called on this
 * object.
 * </p><p>
 * When no longer needed, any borrowed object should be returned to
 * the pool by calling {@link #returnObject}. At that point in time,
 * the reset method is called on the object and the object is added to the
 * list of free objects.
 * </p><p>
 * See {@link sap.ui.base.Poolable} for a description of the contract for poolable objects.
 * </p><p>
 * Example:
 * <pre>
 *   this.oEventPool = new sap.ui.base.ObjectPool(sap.ui.base.Event);
 *   var oEvent = this.oEventPool.borrowObject(iEventId, mParameters);
 * </pre>
 * @extends sap.ui.base.Object
 * @version 1.15.1-SNAPSHOT
 * @constructor
 * @public
 */
sap.ui.base.ObjectPool = function(oObjectClass) {};
/**
 * 
 * Borrows a free object from the pool. Any arguments to this method
 * are forwarded to the init method of the borrowed object.
 * @param {any} [any] optional initialization parameters for the borrowed object
 * @return {object} the borrowed object of the same type that has been specified for this pool
 * @public
 */
sap.ui.base.ObjectPool.prototype.borrowObject = function(any) { return new Object(); };

/**
 * 
 * Returns an object to the pool. The object must have been borrowed from this
 * pool beforehand. The reset method is called on the object before it is added
 * to the set of free objects.
 * @param {object} the object to return to the pool
 * @public
 */
sap.ui.base.ObjectPool.prototype.returnObject = function(the) { return null; };


// ---- sap.ui.base.Poolable --------------------------------------------------------------------------

/**
 * 
 * Called by the object pool when this instance will be actived for a caller.
 * The same method will be called after a new instance has been created by an otherwise
 * exhausted pool.
 * </p><p>
 * If the caller provided any arguments to {@link sap.ui.base.ObjectPool#borrowObject}
 * all arguments will be propagated to this method.
 * @public
 */
sap.ui.base.Poolable.init = function() { return null; };

/**
 * 
 * Called by the object pool when an instance is returned to the pool.
 * While no specific implementation is required, poolable objects in general
 * should clean all caller specific state (set to null) in this method to
 * avoid memory leaks and to enforce garbage collection of the caller state.
 * @public
 */
sap.ui.base.Poolable.reset = function() { return null; };


// ---- sap.ui.core --------------------------------------------------------------------------

/**
 * 
 * If called on the prototype of a sap.ui.core.Element, the Element (and its prototype) is extended
 * to support custom style classes.
 * </p><p>
 * WARNING: only to be used WITHIN a control implementation. An application cannot add style class support by calling this method!
 * </p><p>
 * The methods "addStyleClass", "removeStyleClass", toggleStyleClass and "hasStyleClass" are added to the Element and the clone() method
 * is extended to also clone the custom classes.
 * </p><p>
 * Usage example:
 * jQuery.sap.require("sap.ui.core.CustomStyleClassSupport");
 * sap.ui.core.CustomStyleClassSupport.apply(sap.ui.commons.layout.MatrixLayoutCell.prototype);
 * </p><p>
 * Each renderer handling the given Element MUST then call
 * renderManager.writeClasses(oElement);
 * when writing the root tag of the Element. This makes sure the classes are written to the HTML.
 * @public
 * @memberOf sap.ui.core
 */
sap.ui.core.CustomStyleClassSupport = function() { return null; };


// ---- sap.ui.core.AccessibleRole --------------------------------------------------------------------------

// dummy function to make Eclipse aware of namespace
sap.ui.core.AccessibleRole.toString = function() { return ""; };

// ---- sap.ui.core.AppCacheBuster --------------------------------------------------------------------------

/**
 * 
 * Converts the given URL if it matches a URL in the cachebuster index. 
 * If not then the same URL will be returned. To prevent URLs from being
 * modified by the application cachebuster you can implement the function
 * <code>sap.ui.core.AppCacheBuster.handleURL</code>. 
 * @param {string} sUrl any URL
 * @return {string} modified URL when matching the index or unmodified when not
 * @public
 * @memberOf sap.ui.core.AppCacheBuster
 */
sap.ui.core.AppCacheBuster.convertURL = function(sUrl) { return ""; };

/**
 * 
 * Callback function which can be overwritten to programmatically decide
 * whether to rewrite the given URL or not. 
 * @param {string} sUrl any URL
 * @return {boolean} <code>true</code> to rewrite or <code>false</code> to ignore 
 * @public
 * @memberOf sap.ui.core.AppCacheBuster
 */
sap.ui.core.AppCacheBuster.handleURL = function(sUrl) { return false; };

/**
 * 
 * Normalizes the given URL and make it absolute.
 * @param {string} sUrl any URL
 * @return {string} normalized URL
 * @public
 * @memberOf sap.ui.core.AppCacheBuster
 */
sap.ui.core.AppCacheBuster.normalizeURL = function(sUrl) { return ""; };

/**
 * 
 * Registers an application. Loads the cachebuster index file from this
 * locations. All registered files will be considered by the cachebuster
 * and the URLs will be prefixed with the timestamp of the index file.
 * @param {string} base URL of an application providing a cachebuster index file
 * @public
 * @memberOf sap.ui.core.AppCacheBuster
 */
sap.ui.core.AppCacheBuster.register = function(base) { return null; };


// ---- sap.ui.core.AppCacheBuster.convertURL --------------------------------------------------------------------------


// ---- sap.ui.core.AppCacheBuster.handleURL --------------------------------------------------------------------------


// ---- sap.ui.core.AppCacheBuster.normalizeURL --------------------------------------------------------------------------


// ---- sap.ui.core.AppCacheBuster.register --------------------------------------------------------------------------


// ---- sap.ui.core.BarColor --------------------------------------------------------------------------

// dummy function to make Eclipse aware of namespace
sap.ui.core.BarColor.toString = function() { return ""; };

// ---- sap.ui.core.BusyIndicator --------------------------------------------------------------------------

/**
 * 
 * This class is used to display a waiting animation covering the whole page and blocking user interaction.
 * @class sap.ui.core.BusyIndicator
 * @version 1.15.1-SNAPSHOT
 * @constructor
 * @public
 */
sap.ui.core.BusyIndicator = function() {};
/**
 * 
 * Registers a handler for the "close" event
 * @param {function}
 *            fnFunction The function to call, when the event occurs. This function will be called on the
 *            oListener-instance (if present) or in a 'static way'.
 * @param {object}
 *            [oListener] Object on which to call the given function.
 * @return {sap.ui.core.BusyIndicator} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.core.BusyIndicator.prototype.attachClose = function(fnFunction,oListener) { return new sap.ui.core.BusyIndicator(); };

/**
 * 
 * Registers a handler for the "open" event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs. This function will be called on the
 *            oListener-instance (if present) or in a 'static way'.
 * @param {object}
 *            [oListener] Object on which to call the given function.
 * @return {sap.ui.core.BusyIndicator} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.core.BusyIndicator.prototype.attachOpen = function(fnFunction,oListener) { return new sap.ui.core.BusyIndicator(); };

/**
 * 
 * Unregisters a handler for the "close" event
 * @param {function}
 *            fnFunction The callback function to unregister
 * @param {object}
 *            oListener Object on which the given function had to be called.
 * @return {sap.ui.core.BusyIndicator} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.core.BusyIndicator.prototype.detachClose = function(fnFunction,oListener) { return new sap.ui.core.BusyIndicator(); };

/**
 * 
 * Unregisters a handler for the "open" event
 * @param {function}
 *            fnFunction The callback function to unregister
 * @param {object}
 *            oListener Object on which the given function had to be called.
 * @return {sap.ui.core.BusyIndicator} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.core.BusyIndicator.prototype.detachOpen = function(fnFunction,oListener) { return new sap.ui.core.BusyIndicator(); };

/**
 * 
 * Removes the BusyIndicator from the screen
 * @public
 */
sap.ui.core.BusyIndicator.prototype.hide = function() { return null; };

/**
 * 
 * Displays the BusyIndicator and starts blocking all user input.
 * This only happens after some delay and if after that delay the BusyIndicator.hide() has not yet been called in the meantime.
 * There is a certain default value for the delay, but that one can be overridden.
 * @public
 * @param {int} [iDelay] The delay in milliseconds before opening the BusyIndicator. It is not opened if hide() is called before end of the delay. If no delay (or no valid delay) is given, the default value is used.
 */
sap.ui.core.BusyIndicator.prototype.show = function(iDelay) { return null; };


// ---- sap.ui.core.Collision --------------------------------------------------------------------------


// ---- sap.ui.core.Component --------------------------------------------------------------------------

/**
 * 
 * Creates and initializes a new component with the given <code>sId</code> and
 * settings.
 * </p><p>
 * The set of allowed entries in the <code>mSettings</code> object depends on
 * the concrete subclass and is described there. See {@link sap.ui.core.Component}
 * for a general description of this argument.
 * @param {string}
 *            [sId] optional id for the new control; generated automatically if
 *            no non-empty id is given Note: this can be omitted, no matter
 *            whether <code>mSettings</code> will be given or not!
 * @param {object}
 *            [mSettings] optional map/JSON-object with initial settings for the
 *            new component instance
 * @public
 * @class Base Class for Component.
 * @extends sap.ui.base.ManagedObject
 * @abstract
 * @version 1.15.1-SNAPSHOT
 * @experimental Since 1.9.2. The Component concept is still under construction, so some implementation details can be changed in future.
 */
sap.ui.core.Component = function(sId,mSettings) {};
/**
 * 
 * Cleans up the component instance before destruction.
 * </p><p>
 * Applications must not call this hook method directly, it is called by the
 * framework when the element is {@link #destroy destroyed}.
 * </p><p>
 * Subclasses of Component should override this hook to implement any necessary
 * cleanup.
 * @protected
 */
sap.ui.core.Component.prototype.exit = function() { return null; };

/**
 * 
 * Returns user specific data object
 * @return object componentData
 * @public
 * @since 1.15.0
 */
sap.ui.core.Component.prototype.getComponentData = function() { return null; };

/**
 * 
 * @see sap.ui.base.Object#getInterface
 * @public
 */
sap.ui.core.Component.prototype.getInterface = function() { return null; };

/**
 * 
 * Returns the ID of the owner component in which the given ManagedObject has been
 * created. 
 * @param {sap.ui.core.ManagedObject} oObject the ManagedObject to return the owner component ID for
 * @return {string} the owner component ID
 * @static
 * @protected
 * @experimental Since 1.15.1. The location of this function might change.
 */
sap.ui.core.Component.getOwnerIdFor = function(oObject) { return ""; };

/**
 * 
 * Initializes the Component instance after creation.
 * </p><p>
 * Applications must not call this hook method directly, it is called by the
 * framework while the constructor of an Component is executed.
 * </p><p>
 * Subclasses of Component should override this hook to implement any necessary
 * initialization. <b>When overriding this function make sure to invoke the
 * init function of the UIComponent as well!</b> 
 * @protected
 */
sap.ui.core.Component.prototype.init = function() { return null; };

/**
 * 
 * The hook which gets called when the static configuration of the component 
 * has been changed by some configuration extension.
 * @param {string} sConfigKey The error message.
 * @public
 * @since 1.15.1
 * 
 */
sap.ui.core.Component.prototype.onConfigChange = function(sConfigKey) { return null; };

/**
 * 
 * The window error hook. Override this method in your Component class implementation 
 * to listen to unhandled errors.
 * @param {string} sMessage The error message.
 * @param {string} sFile The file where the error occurred
 * @param {number} iLine The line number of the error
 * @public
 * @since 1.15.1
 * 
 */
sap.ui.core.Component.prototype.onError = function(sMessage,sFile,iLine) { return null; };

/**
 * 
 * The window before unload hook. Override this method in your Component class 
 * implementation, to handle cleanup before the real unload or to prompt a question 
 * to the user, if the component should be exited.
 * @return {string} return a string if a prompt should be displayed to the user 
 *                  confirming closing the component (e.g. when the component is not yet saved).
 * @public
 * @since 1.15.1
 * 
 */
sap.ui.core.Component.prototype.onWindowBeforeUnload = function() { return ""; };

/**
 * 
 * The window unload hook. Override this method in your Component class 
 * implementation, to handle cleanup of the component once the window
 * will be unloaded (e.g. closed).
 * @public
 * @since 1.15.1
 * 
 */
sap.ui.core.Component.prototype.onWindowUnload = function() { return null; };


// ---- sap.ui.core.ComponentContainer --------------------------------------------------------------------------

/**
 * 
 * Constructor for a new ComponentContainer.
 * </p><p>
 * Accepts an object literal <code>mSettings</code> that defines initial 
 * property values, aggregated and associated objects as well as event handlers. 
 * </p><p>
 * If the name of a setting is ambiguous (e.g. a property has the same name as an event), 
 * then the framework assumes property, aggregation, association, event in that order. 
 * To override this automatic resolution, one of the prefixes "aggregation:", "association:" 
 * or "event:" can be added to the name of the setting (such a prefixed name must be
 * enclosed in single or double quotes).
 * </p><p>
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getName name} : string</li>
 * <li>{@link #getUrl url} : sap.ui.core.URI</li>
 * <li>{@link #getSettings settings} : object</li>
 * <li>{@link #getPropagateModel propagateModel} : boolean (default: false)</li>
 * <li>{@link #getWidth width} : sap.ui.core.CSSSize</li>
 * <li>{@link #getHeight height} : sap.ui.core.CSSSize</li></ul>
 * </li>
 * <li>Aggregations
 * <ul></ul>
 * </li>
 * <li>Associations
 * <ul>
 * <li>{@link #getComponent component} : string | sap.ui.core.UIComponent</li></ul>
 * </li>
 * <li>Events
 * <ul></ul>
 * </li>
 * </ul> 
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * Component Container
 * @extends sap.ui.core.Control
 * @version 1.15.1-SNAPSHOT
 * @constructor   
 * @public
 * @experimental Since version 1.9.2. 
 * The Component concept is still under construction, so some implementation details can be changed in future.
 * 
 */
sap.ui.core.ComponentContainer = function(sId,mSettings) {};
/**
 * 
 * Creates a new subclass of class sap.ui.core.ComponentContainer with name <code>sClassName</code> 
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * </p><p>
 * <code>oClassInfo</code> might contain the same kind of informations as described in {@link sap.ui.core.Element.extend Element.extend}.
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class  
 * @param {function} [FNMetaImpl] constructor function for the metadata object. If not given, it defaults to sap.ui.core.ElementMetadata.
 * @return {function} the created class / constructor function
 * @public
 * @static
 * 
 */
sap.ui.core.ComponentContainer.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * 
 * The component displayed in this ComponentContainer.
 * @return {string} Id of the element which is the current target of the <code>component</code> association, or null
 * @public
 * 
 */
sap.ui.core.ComponentContainer.prototype.getComponent = function() { return ""; };

/**
 * 
 * Getter for property <code>height</code>.
 * Container height in CSS size
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {sap.ui.core.CSSSize} the value of property <code>height</code>
 * @public
 * 
 */
sap.ui.core.ComponentContainer.prototype.getHeight = function() { return new sap.ui.core.CSSSize(); };

/**
 * 
 * Getter for property <code>name</code>.
 * Component name, the package where the component is contained. The property can only be applied initially.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {string} the value of property <code>name</code>
 * @public
 * 
 */
sap.ui.core.ComponentContainer.prototype.getName = function() { return ""; };

/**
 * 
 * Getter for property <code>propagateModel</code>.
 * Defines whether binding information is propagated to the component.
 * </p><p>
 * Default value is <code>false</code>
 * @return {boolean} the value of property <code>propagateModel</code>
 * @public
 * 
 */
sap.ui.core.ComponentContainer.prototype.getPropagateModel = function() { return false; };

/**
 * 
 * Getter for property <code>settings</code>.
 * The settings object passed to the component when created. The property can only be applied initially.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {object} the value of property <code>settings</code>
 * @public
 * 
 */
sap.ui.core.ComponentContainer.prototype.getSettings = function() { return new Object(); };

/**
 * 
 * Getter for property <code>url</code>.
 * The URL of the component. The property can only be applied initially.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {sap.ui.core.URI} the value of property <code>url</code>
 * @public
 * 
 */
sap.ui.core.ComponentContainer.prototype.getUrl = function() { return new sap.ui.core.URI(); };

/**
 * 
 * Getter for property <code>width</code>.
 * Container width in CSS size
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {sap.ui.core.CSSSize} the value of property <code>width</code>
 * @public
 * 
 */
sap.ui.core.ComponentContainer.prototype.getWidth = function() { return new sap.ui.core.CSSSize(); };

/**
 * 
 * The component displayed in this ComponentContainer.
 * @param {string | sap.ui.core.UIComponent} vComponent 
 *    Id of an element which becomes the new target of this <code>component</code> association.
 *    Alternatively, an element instance may be given.
 * @return {sap.ui.core.ComponentContainer} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.core.ComponentContainer.prototype.setComponent = function(vComponent) { return new sap.ui.core.ComponentContainer(); };

/**
 * 
 * Setter for property <code>height</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {sap.ui.core.CSSSize} sHeight  new value for property <code>height</code>
 * @return {sap.ui.core.ComponentContainer} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.core.ComponentContainer.prototype.setHeight = function(sHeight) { return new sap.ui.core.ComponentContainer(); };

/**
 * 
 * Setter for property <code>name</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {string} sName  new value for property <code>name</code>
 * @return {sap.ui.core.ComponentContainer} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.core.ComponentContainer.prototype.setName = function(sName) { return new sap.ui.core.ComponentContainer(); };

/**
 * 
 * Setter for property <code>propagateModel</code>.
 * </p><p>
 * Default value is <code>false</code> 
 * @param {boolean} bPropagateModel  new value for property <code>propagateModel</code>
 * @return {sap.ui.core.ComponentContainer} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.core.ComponentContainer.prototype.setPropagateModel = function(bPropagateModel) { return new sap.ui.core.ComponentContainer(); };

/**
 * 
 * Setter for property <code>settings</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {object} oSettings  new value for property <code>settings</code>
 * @return {sap.ui.core.ComponentContainer} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.core.ComponentContainer.prototype.setSettings = function(oSettings) { return new sap.ui.core.ComponentContainer(); };

/**
 * 
 * Setter for property <code>url</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {sap.ui.core.URI} sUrl  new value for property <code>url</code>
 * @return {sap.ui.core.ComponentContainer} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.core.ComponentContainer.prototype.setUrl = function(sUrl) { return new sap.ui.core.ComponentContainer(); };

/**
 * 
 * Setter for property <code>width</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {sap.ui.core.CSSSize} sWidth  new value for property <code>width</code>
 * @return {sap.ui.core.ComponentContainer} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.core.ComponentContainer.prototype.setWidth = function(sWidth) { return new sap.ui.core.ComponentContainer(); };


// ---- sap.ui.core.Configuration --------------------------------------------------------------------------

/**
 * 
 * Creates a new Configuration object.
 * @class Collects and stores the configuration of the current environment.
 * </p><p>
 * The Configuration is initialized once when the {@link sap.ui.core.Core} is created.
 * There are different ways to set the environment configuration (in ascending priority):
 * <ol>
 * <li>System defined defaults
 * <li>Server wide defaults, read from /sap-ui-config.json
 * <li>Properties of the global configuration object window["sap-ui-config"]
 * <li>A configuration string in the data-sap-ui-config attribute of the bootstrap tag
 * <li>Individual data-sap-ui-xyz attributes of the bootstrap tag
 * <li>Using URL parameters
 * <li>Setters in this Configuration object (only for some parameters)
 * </ol>
 * </p><p>
 * That is, attributes of the DOM reference override the system defaults, URL parameters
 * override the DOM attributes (where empty URL parameters set the parameter back to its
 * system default). Calling setters at runtime will override any previous settings
 * calculated during object creation.
 * </p><p>
 * The naming convention for parameters is:
 * <ul>
 * <li>in the URL : sap-ui-<i>PARAMETER-NAME</i>="value"
 * <li>in the DOM : data-sap-ui-<i>PARAMETER-NAME</i>="value"
 * </ul>
 * where <i>PARAMETER-NAME</i> is the name of the parameter in lower case.
 * </p><p>
 * Values of boolean parameters are case insensitive where "true" and "x" are interpreted as true.
 * @extends sap.ui.base.Object
 * @constructor
 * @public
 * 
 */
sap.ui.core.Configuration = function() {};
/**
 * 
 * Returns whether the accessibility mode is used or not
 * @return {boolean} whether the accessibility mode is used or not
 * @public
 */
sap.ui.core.Configuration.prototype.getAccessibility = function() { return false; };

/**
 * 
 * Returns whether the animations are globally used
 * @return {boolean} whether the animations are globally used
 * @public
 */
sap.ui.core.Configuration.prototype.getAnimation = function() { return false; };

/**
 * 
 * Base URLs to AppCacheBuster Etag-Index files
 * @returns {string[]} array of base URLs
 * @public
 */
sap.ui.core.Configuration.prototype.getAppCacheBuster = function() { return new Array(); };

/**
 * 
 * The loading mode (sync|async|batch) of the AppCacheBuster (sync is default)
 * @returns {string} sync | async
 * @public
 * @experimental Since 1.12.5
 */
sap.ui.core.Configuration.prototype.getAppCacheBusterMode = function() { return ""; };

/**
 * 
 * The name of the application to start or empty
 * @returns {string} name of the application
 * @public
 * @experimental Since 1.13.2
 * @deprecated Since 1.15.1. Please use the rootComponent configuration option {@link sap.ui.core.Configuration#getRootComponent}.
 */
sap.ui.core.Configuration.prototype.getApplication = function() { return ""; };

/**
 * 
 * Returns the used compatibility version for the given feature.
 * @param {string} sFeature the key of desired feature
 * @return {jQuery.sap.Version} the used compatibility version
 * @public
 */
sap.ui.core.Configuration.prototype.getCompatibilityVersion = function(sFeature) { return new jQuery.sap.Version(); };

/**
 * 
 * Returns whether the page runs in debug mode
 * @return {boolean} whether the page runs in debug mode
 * @public
 */
sap.ui.core.Configuration.prototype.getDebug = function() { return false; };

/**
 * 
 * Return whether the design mode is active or not.
 * @returns {boolean} whether the design mode is active or not.
 * @since 1.13.2
 * @experimental Since 1.13.2 
 * @public
 */
sap.ui.core.Configuration.prototype.getDesignMode = function() { return false; };

/**
 * 
 * Returns the format locale string with language and region code. Falls back to 
 * language configuration, in case it has not been explicitly defined.
 * @return {string} the format locale string with language and country code
 * @public
 */
sap.ui.core.Configuration.prototype.getFormatLocale = function() { return ""; };

/**
 * 
 * Returns a configuration object that bundles the format settings of UI5.
 * @return {sap.ui.core.Configuration.FormatSettings} A FormatSettings object.
 * @public
 */
sap.ui.core.Configuration.prototype.getFormatSettings = function() { return new sap.ui.core.Configuration.FormatSettings(); };

/**
 * 
 * Returns whether the UI5 control inspector is displayed
 * Has only an effect when the sap-ui-debug module has been loaded
 * @return {boolean} whether the UI5 control inspector is displayed
 * @public
 */
sap.ui.core.Configuration.prototype.getInspect = function() { return false; };

/**
 * 
 * Returns the language string with language and country code
 * @return {string} the language string with language and country code
 * @public
 */
sap.ui.core.Configuration.prototype.getLanguage = function() { return ""; };

/**
 * 
 * Returns the active locale for the current session. 
 * The locale is derived from the {@link #getLanguage language} property.
 * @return {sap.ui.core.Locale} the locale
 * @public
 */
sap.ui.core.Configuration.prototype.getLocale = function() { return new sap.ui.core.Locale(); };

/**
 * 
 * Returns whether there should be an exception on any duplicate element IDs
 * @return {boolean} whether there should be an exception on any duplicate element IDs
 * @public
 */
sap.ui.core.Configuration.prototype.getNoDuplicateIds = function() { return false; };

/**
 * 
 * Returns whether the text origin information is collected
 * @return {boolean} whether the text info is collected
 * @public
 */
sap.ui.core.Configuration.prototype.getOriginInfo = function() { return false; };

/**
 * 
 * The name of the root component to start or empty
 * @returns {string} name of the root component
 * @public
 * @experimental Since 1.15.1
 */
sap.ui.core.Configuration.prototype.getRootComponent = function() { return ""; };

/**
 * 
 * Returns whether the page uses the RTL text direction.
 * </p><p>
 * If no mode has been explicitly set (neither true nor false),
 * the mode is derived from the current language setting.
 * @return {boolean} whether the page uses the RTL text direction
 * @public
 */
sap.ui.core.Configuration.prototype.getRTL = function() { return false; };

/**
 * 
 * Return whether the activation of the controller code is suppressed
 * @returns {boolean} whether the activation of the controller code is suppressed or not
 * @since 1.13.2
 * @experimental Since 1.13.2
 * @public
 */
sap.ui.core.Configuration.prototype.getSuppressDeactivationOfControllerCode = function() { return false; };

/**
 * 
 * Returns the theme name
 * @return {string} the theme name
 * @public
 */
sap.ui.core.Configuration.prototype.getTheme = function() { return ""; };

/**
 * 
 * Prefix to be used for automatically generated control IDs.
 * Default is a double underscore "__".
 * @returns {string} the prefix to be used
 * @public
 */
sap.ui.core.Configuration.prototype.getUIDPrefix = function() { return ""; };

/**
 * 
 * Returns the version of the framework.
 * </p><p>
 * Similar to <code>sap.ui.version</code>.
 * @return {jQuery.sap.Version} the version
 * @public
 */
sap.ui.core.Configuration.prototype.getVersion = function() { return new jQuery.sap.Version(); };

/**
 * 
 * WEINRE session ID
 * @returns {string} the ID to use for the WEINRE server
 * @public
 */
sap.ui.core.Configuration.prototype.getWeinreId = function() { return ""; };

/**
 * 
 * WEINRE server URL
 * @returns {string} the base URL of the WEINRE server
 * @public
 */
sap.ui.core.Configuration.prototype.getWeinreServer = function() { return ""; };

/**
 * 
 * Sets a new language tag to be used from now on for language/region dependent 
 * functionality (e.g. formatting, data types, translated texts, ...). 
 * </p><p>
 * When the language has changed, the Core will fire its 
 * {@link sap.ui.core.Core#event:localizationChanged localizationChanged} event.
 * </p><p>
 * The framework <strong>does not</strong> guarantee that already created, language 
 * dependent objects will be updated by this call. It therefore remains best practice 
 * for applications to switch the language early, e.g. before any language dependent 
 * objects are created. Applications that need to support more dynamic changes of 
 * the language should listen to the <code>localizationChanged</code> event and adapt 
 * all language dependent objects that they use (e.g. by rebuilding their UI).
 * </p><p>
 * Currently, the framework notifies the following objects about a change of the
 * localization settings before it fires the <code>localizationChanged</code> event:
 * </p><p>
 * <ul>
 * <li>date and number data types that are used in property bindings or composite 
 *     bindings in existing Elements, Controls, UIAreas or Components</li>
 * <li>ResourceModels currently assigned to the Core, an UIArea, Component, 
 *     Element or Control</li>
 * <li>Elements or Controls that implement the <code>onLocalizationChanged</code> hook. 
 * </ul>
 * </p><p>
 * It furthermore derives the RTL mode from the new language, if no explicit RTL
 * mode has been set. If the RTL mode changes, the following additional actions will be taken:
 * </p><p>
 * <ul>
 * <li>the URLs of already loaded library theme files will be changed</li>
 * <li>the <code>dir</code> attribute of the page will be changed to reflect the new mode.</li> 
 * <li>all UIAreas will be invalidated (which results in a rendering of the whole UI5 UI)</li> 
 * </ul>
 * @param {string} sLanguage the new language as a BCP47 compliant language tag; case doesn't matter
 *   and underscores can be used instead of a dashes to separate components (compatibility with Java Locale Ids)
 * @return {sap.ui.core.Configuration} <code>this</code> to allow method chaining
 * @experimental Since 1.11.1 - See method documentation for restrictions.
 * @public
 */
sap.ui.core.Configuration.prototype.setLanguage = function(sLanguage) { return new sap.ui.core.Configuration(); };


// ---- sap.ui.core.Configuration.FormatSettings --------------------------------------------------------------------------

/**
 * 
 * @class Encapsulates configuration settings that are related to data formatting/parsing.
 * </p><p>
 * <b>Note:</b> When format configuration settings are modified through this class, 
 * UI5 only ensures that formatter objects created after that point in time will honor
 * the modifications. To be on the safe side, applications should do any modifications 
 * early in their lifecycle or recreate any model/UI that is locale dependent. 
 * @extends sap.ui.base.Object
 * @public
 */
sap.ui.core.Configuration.FormatSettings = function() {};
/**
 * 
 * Returns the currently set date pattern or undefined if no pattern has been defined. 
 * @public
 */
sap.ui.core.Configuration.FormatSettings.prototype.getDatePattern = function(sStyle) { return null; };

/**
 * 
 * Returns the locale to be used for formatting. 
 * </p><p>
 * If no such locale has been defined, this method falls back to the language,
 * see {@link sap.ui.core.Configuration#getLanguage Configuration.getLanguage()}.
 * </p><p>
 * If any user preferences for date, time or number formatting have been set,
 * and if no format locale has been specified, then a special private use subtag
 * is added to the locale, indicating to the framework that these user preferences 
 * should be applied. 
 * @return {sap.ui.core.Locale} the format locale 
 * @public
 */
sap.ui.core.Configuration.FormatSettings.prototype.getFormatLocale = function() { return new sap.ui.core.Locale(); };

/**
 * 
 * Returns the currently set legacy ABAP date format (its id) or undefined if none has been set.
 * @public
 */
sap.ui.core.Configuration.FormatSettings.prototype.getLegacyDateFormat = function() { return null; };

/**
 * 
 * Returns the currently set legacy ABAP number format (its id) or undefined if none has been set.
 * @public
 */
sap.ui.core.Configuration.FormatSettings.prototype.getLegacyNumberFormat = function() { return null; };

/**
 * 
 * Returns the currently set legacy ABAP time format (its id) or undefined if none has been set.
 * @public
 */
sap.ui.core.Configuration.FormatSettings.prototype.getLegacyTimeFormat = function() { return null; };

/**
 * 
 * Returns the currently set number symbol of the given type or undefined if no symbol has been defined.
 * @public
 */
sap.ui.core.Configuration.FormatSettings.prototype.getNumberSymbol = function(sType) { return null; };

/**
 * 
 * Returns the currently set time pattern or undefined if no pattern has been defined.
 * @public
 */
sap.ui.core.Configuration.FormatSettings.prototype.getTimePattern = function(sStyle) { return null; };

/**
 * 
 * Defines the preferred format pattern for the given date format style. 
 * Calling this method with a null or undefined pattern removes a previously set pattern. 
 * </p><p>
 * If a pattern is defined, it will be preferred over patterns derived from the current locale.
 * </p><p>
 * See class {@link sap.ui.core.format.DateFormat} for details about the pattern syntax.
 * </p><p>
 * After changing the date pattern, the framework tries to update localization 
 * specific parts of the UI. See the documentation of {@link sap.ui.core.Configuration#setLanguage} 
 * for details and restrictions.
 * @param {string} sStyle must be one of short, medium, long or full.
 * @param {string} sPattern the format pattern to be used in LDML syntax.
 * @return {sap.ui.core.Configuration.FormatSettings} Returns <code>this</code> to allow method chaining
 * @public   
 */
sap.ui.core.Configuration.FormatSettings.prototype.setDatePattern = function(sStyle,sPattern) { return new sap.ui.core.Configuration.FormatSettings(); };

/**
 * 
 * Allows to specify one of the legacy ABAP date formats. 
 * </p><p>
 * This method modifies the date patterns for 'short' and 'medium' style with the corresponding ABAP 
 * format. When called with a null or undefined format id, any previously applied format will be removed.
 * </p><p>
 * After changing the legacy date format, the framework tries to update localization 
 * specific parts of the UI. See the documentation of {@link sap.ui.core.Configuration#setLanguage} 
 * for details and restrictions.
 * @param {string} sFormatId id of the ABAP data format (one of '1','2','3','4','5','6')
 * @return {sap.ui.core.Configuration.FormatSettings} Returns <code>this</code> to allow method chaining
 * @public
 */
sap.ui.core.Configuration.FormatSettings.prototype.setLegacyDateFormat = function(sFormatId) { return new sap.ui.core.Configuration.FormatSettings(); };

/**
 * 
 * Allows to specify one of the legacy ABAP number format.
 * </p><p>
 * This method will modify the 'group' and 'decimal' symbols. When called with a null 
 * or undefined format id, any previously applied format will be removed.
 * </p><p>
 * After changing the legacy number format, the framework tries to update localization 
 * specific parts of the UI. See the documentation of {@link sap.ui.core.Configuration#setLanguage} 
 * for details and restrictions.
 * @param {string} sFormatId id of the ABAP number format set (one of ' ','X','Y')
 * @return {sap.ui.core.Configuration.FormatSettings} Returns <code>this</code> to allow method chaining
 * @public
 */
sap.ui.core.Configuration.FormatSettings.prototype.setLegacyNumberFormat = function(sFormatId) { return new sap.ui.core.Configuration.FormatSettings(); };

/**
 * 
 * Allows to specify one of the legacy ABAP time formats.
 * </p><p>
 * This method sets the time patterns for 'short' and 'medium' style to the corresponding ABAP 
 * formats and sets the day period texts to "AM"/"PM" or "am"/"pm" respectively. When called 
 * with a null or undefined format id, any previously applied format will be removed.
 * </p><p>
 * After changing the legacy time format, the framework tries to update localization 
 * specific parts of the UI. See the documentation of {@link sap.ui.core.Configuration#setLanguage} 
 * for details and restrictions.
 * @param {string} sFormatId id of the ABAP time format (one of '0','1','2','3','4')
 * @return {sap.ui.core.Configuration.FormatSettings} Returns <code>this</code> to allow method chaining
 * @public
 */
sap.ui.core.Configuration.FormatSettings.prototype.setLegacyTimeFormat = function(sFormatId) { return new sap.ui.core.Configuration.FormatSettings(); };

/**
 * 
 * Defines the string to be used for the given number symbol.
 * Calling this method with a null or undefined symbol removes a previously set symbol string.
 * Note that an empty string is explicitly allowed.  
 * </p><p>
 * If a symbol is defined, it will be preferred over symbols derived from the current locale.
 * </p><p>
 * See class {@link sap.ui.core.format.NumberFormat} for details about the symbols.
 * </p><p>
 * After changing the number symbol, the framework tries to update localization 
 * specific parts of the UI. See the documentation of {@link sap.ui.core.Configuration#setLanguage} 
 * for details and restrictions.
 * @param {string} sStyle must be one of decimal, group, plusSign, minusSign.
 * @param {string} sSymbol will be used to represent the given symbol type
 * @return {sap.ui.core.Configuration.FormatSettings} Returns <code>this</code> to allow method chaining
 * @public   
 */
sap.ui.core.Configuration.FormatSettings.prototype.setNumberSymbol = function(sStyle,sSymbol) { return new sap.ui.core.Configuration.FormatSettings(); };

/**
 * 
 * Defines the preferred format pattern for the given time format style.
 * Calling this method with a null or undefined pattern removes a previously set pattern. 
 * </p><p>
 * If a pattern is defined, it will be preferred over patterns derived from the current locale.
 * </p><p>
 * See class {@link sap.ui.core.format.DateFormat} for details about the pattern syntax.
 * </p><p>
 * After changing the time pattern, the framework tries to update localization 
 * specific parts of the UI. See the documentation of {@link sap.ui.core.Configuration#setLanguage} 
 * for details and restrictions.
 * @param {string} sStyle must be one of short, medium, long or full.
 * @param {string} sPattern the format pattern to be used in LDML syntax.
 * @return {sap.ui.core.Configuration.FormatSettings} Returns <code>this</code> to allow method chaining
 * @public
 */
sap.ui.core.Configuration.FormatSettings.prototype.setTimePattern = function(sStyle,sPattern) { return new sap.ui.core.Configuration.FormatSettings(); };


// ---- sap.ui.core.Control --------------------------------------------------------------------------

/**
 * 
 * Creates and initializes a new control with the given <code>sId</code> and settings.
 * </p><p>
 * The set of allowed entries in the <code>mSettings</code> object depends on the concrete
 * subclass and is described there. See {@link sap.ui.core.Element} for a general description of this
 * argument.
 * @param {string} [sId] optional id for the new control; generated automatically if no non-empty id is given
 *      Note: this can be omitted, no matter whether <code>mSettings</code> will be given or not!
 * @param {object} [mSettings] optional map/JSON-object with initial settings for the new control
 * @public
 * @class Base Class for Controls.
 * @extends sap.ui.core.Element
 * @abstract
 * @version 1.15.1-SNAPSHOT
 * 
 */
sap.ui.core.Control = function(sId,mSettings) {};
/**
 * 
 * The string given as "sStyleClass" will be added to the "class" attribute of this control's root HTML element.
 * </p><p>
 * This method is intended to be used to mark controls as being of a special type for which
 * special styling can be provided using CSS selectors that reference this style class name.
 * </p><p>
 * <pre>
 * Example:
 *    myButton.addStyleClass("myRedTextButton"); // add a CSS class to one button instance
 * 
 * ...and in CSS:
 *    .myRedTextButton {
 *       color: red;
 *    }
 * </pre>
 * </p><p>
 * This will add the CSS class "myRedTextButton" to the Button HTML and the CSS code above will then
 * make the text in this particular button red.
 * </p><p>
 * Only characters allowed inside HTML attributes are allowed.
 * Quotes are not allowed and this method will ignore any strings containing quotes.
 * Strings containing spaces are interpreted as ONE custom style class (even though CSS selectors interpret them
 * as different classes) and can only removed later by calling removeStyleClass() with exactly the
 * same (space-containing) string as parameter.
 * Multiple calls with the same sStyleClass will have no different effect than calling once.
 * If sStyleClass is null, the call is ignored.
 * @param {string} sStyleClass the CSS class name to be added
 * @return {sap.ui.core.Control} Returns <code>this</code> to allow method chaining
 * @public
 */
sap.ui.core.Control.prototype.addStyleClass = function(sStyleClass) { return new sap.ui.core.Control(); };

/**
 * 
 * Defines whether the user can select text inside this control.
 * Defaults to <code>true</code> as long as this method has not been called.
 * </p><p>
 * <b>Note:</b>This only works in IE and Safari; for Firefox the element's style must
 * be set to:
 * <pre>
 *   -moz-user-select: none;
 * </pre>
 * in order to prevent text selection.
 * @param {boolean} whether to allow text selection or not
 * @return {sap.ui.core.Control} Returns <code>this</code> to allow method chaining
 * @public
 */
sap.ui.core.Control.prototype.allowTextSelection = function(whether) { return new sap.ui.core.Control(); };

/**
 * 
 * Allows binding handlers for any native browser event to the root HTML element of this Control. This internally handles
 * DOM element replacements caused by re-rendering.
 * </p><p>
 * IMPORTANT:
 * This should be only used as FALLBACK when the Control events do not cover a specific use-case! Always try using
 * SAPUI5 control events, as e.g. accessibility-related functionality is then provided automatically.
 * E.g. when working with a sap.ui.commons.Button, always use the Button's "press" event, not the native "click" event, because
 * "press" is also guaranteed to be fired when certain keyboard activity is supposed to trigger the Button.
 * </p><p>
 * In the event handler, "this" refers to the Control - not to the root DOM element like in jQuery. While the DOM element can
 * be used and modified, the general caveats for working with SAPUI5 control DOM elements apply. In particular the DOM element
 * may be destroyed and replaced by a new one at any time, so modifications that are required to have permanent effect may not
 * be done. E.g. use Control.addStyleClass() instead if the modification is of visual nature.
 * </p><p>
 * Use detachBrowserEvent() to remove the event handler(s) again.
 * @param {string} [sEventType] A string containing one or more JavaScript event types, such as "click" or "blur".
 * @param {function} [fnHandler] A function to execute each time the event is triggered.
 * @param {object} [oListener] The object, that wants to be notified, when the event occurs
 * @return {sap.ui.core.Control} Returns <code>this</code> to allow method chaining
 * @public
 */
sap.ui.core.Control.prototype.attachBrowserEvent = function(sEventType,fnHandler,oListener) { return new sap.ui.core.Control(); };

/**
 * 
 * Overrides {@link sap.ui.core.Element#clone Element.clone} to clone additional 
 * internal state.
 * </p><p>
 * The additionally cloned information contains:
 * <ul>
 * <li>browser event handlers attached with {@link #attachBrowserEvent}
 * <li>text selection behavior
 * <li>style classes added with {@link #addStyleClass}
 * </ul>
 * @param {string} [sIdSuffix] a suffix to be appended to the cloned element id
 * @param {string[]} [aLocalIds] an array of local IDs within the cloned hierarchy (internally used)
 * @return {sap.ui.core.Element} reference to the newly created clone
 * @protected
 */
sap.ui.core.Control.prototype.clone = function(sIdSuffix,aLocalIds) { return new sap.ui.core.Element(); };

/**
 * 
 * Removes event handlers which have been previously attached using {@link #attachBrowserEvent}.
 * </p><p>
 * Note: listeners are only removed, if the same combination of event type, callback function 
 * and context object is given as in the call to <code>attachBrowserEvent</code>.
 * @param {string} [sEventType] A string containing one or more JavaScript event types, such as "click" or "blur".
 * @param {function} [fnHandler] The function that is to be no longer executed.
 * @param {object} [oListener] The context object that was given in the call to attachBrowserEvent.
 * @public
 */
sap.ui.core.Control.prototype.detachBrowserEvent = function(sEventType,fnHandler,oListener) { return null; };

/**
 * 
 * Creates a new subclass of class sap.ui.core.Control with name <code>sClassName</code> 
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * </p><p>
 * <code>oClassInfo</code> might contain the same kind of informations as described in {@link sap.ui.core.Element.extend Element.extend}.
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class  
 * @param {function} [FNMetaImpl] constructor function for the metadata object. If not given, it defaults to sap.ui.core.ElementMetadata.
 * @return {function} the created class / constructor function
 * @public
 * @static
 * 
 */
sap.ui.core.Control.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * 
 * Returns the DOMNode Id to be used for the "labelFor" attribute of the label.
 * </p><p>
 * By default, this is the Id of the control itself.
 * @return {string} Id to be used for the <code>labelFor</code> 
 * @public
 */
sap.ui.core.Control.prototype.getIdForLabel = function() { return ""; };

/**
 * 
 * Returns a renderer for this control instance.
 * </p><p>
 * It is retrieved using the RenderManager as done during rendering.
 * @return {object} a Renderer suitable for this Control instance.
 * @protected
 */
sap.ui.core.Control.prototype.getRenderer = function() { return new Object(); };

/**
 * 
 * Returns true if the given style class string is valid and if this control has this style class set
 * via a previous call to addStyleClass().
 * @param {string} sStyleClass the style to check for
 * @type boolean
 * @return whether the given style has been set before
 * @public
 */
sap.ui.core.Control.prototype.hasStyleClass = function(sStyleClass) { return false; };

/**
 * 
 * Triggers rerendering of this element and its children.
 * </p><p>
 * As <code>sap.ui.core.Element</code> "bubbles up" the invalidate, changes to children
 * potentially result in rerendering of the whole sub tree.
 * @protected
 */
sap.ui.core.Control.prototype.invalidate = function(oOrigin) { return null; };

/**
 * 
 * Check if the control is currently in busy state
 * @public
 * @deprecated Use getBusy instead
 * @return boolean
 */
sap.ui.core.Control.prototype.isBusy = function() { return null; };

/**
 * 
 * Function is called when the rendering of the control is completed.
 * </p><p>
 * Applications must not call this hook method directly, it is called by the framework.
 * </p><p>
 * Subclasses of Control should override this hook to implement any necessary actions after the rendering.
 * @protected
 */
sap.ui.core.Control.prototype.onAfterRendering = function() { return null; };

/**
 * 
 * Function is called before the rendering of the control is started.
 * </p><p>
 * Applications must not call this hook method directly, it is called by the framework.
 * </p><p>
 * Subclasses of Control should override this hook to implement any necessary actions before the rendering.
 * @protected
 */
sap.ui.core.Control.prototype.onBeforeRendering = function() { return null; };

/**
 * 
 * Puts <code>this</code> control into the specified container (<code>oRef</code>) at the given
 * position (<code>oPosition</code>).
 * </p><p>
 * First it is checked whether <code>oRef</code> is a container element / control (has a
 * multiple aggregation with type <code>sap.ui.core.Control</code> and name 'content') or is an Id String
 * of such an container.
 * If this is not the case <code>oRef</code> can either be a Dom Reference or Id String of the UIArea
 * (if it does not yet exist implicitly a new UIArea is created),
 * </p><p>
 * The <code>oPosition</code> can be one of the following:
 * </p><p>
 * <ul>
 *  <li>"first": The control is added as the first element to the container.</li>
 *  <li>"last": The control is added as the last element to the container (default).</li>
 *  <li>"only": All existing children of the container are removed (not destroyed!) and the control is added as new child.</li>
 *  <li><i>index</i>: The control is added at the specified <i>index</i> to the container.</li>
 * </ul>
 * @param {string|DomRef|sap.ui.core.Control} oRef container into which the control should be put
 * @param {string|int} oPosition Describes the position where the control should be put into the container
 * @return {sap.ui.core.Control} Returns <code>this</code> to allow method chaining
 * @public
 */
sap.ui.core.Control.prototype.placeAt = function(oRef,oPosition) { return new sap.ui.core.Control(); };

/**
 * 
 * Removes the given string from the list of custom style classes that have been set previously.
 * Regular style classes like "sapUiBtn" cannot be removed.
 * @param {string} sStyleClass the style to be removed
 * @return {sap.ui.core.Control} Returns <code>this</code> to allow method chaining
 * @public
 */
sap.ui.core.Control.prototype.removeStyleClass = function(sStyleClass) { return new sap.ui.core.Control(); };

/**
 * 
 * Tries to replace its DOM reference by re-rendering.
 * @protected
 */
sap.ui.core.Control.prototype.rerender = function() { return null; };

/**
 * 
 * Set the controls busy state
 * @public
 * @param boolean The state to be set
 * @return {Control} reference to control for chaining
 */
sap.ui.core.Control.prototype.setBusy = function(boolean) { return null; };

/**
 * 
 * Define the delay, after which the busy indicator will show up
 * @public
 * @param int The delay in ms
 * @return {Control} reference to control for chaining
 */
sap.ui.core.Control.prototype.setBusyIndicatorDelay = function(int) { return null; };

/**
 * 
 * The string given as "sStyleClass" will be be either added to or removed from the "class" attribute of this control's root HTML element,
 * depending on the value of "bAdd": if bAdd is true, sStyleClass will be added.
 * If bAdd is not given, sStyleClass will be removed if it is currently present and will be added if not present.
 * If sStyleClass is null, the call is ignored.
 * </p><p>
 * See addStyleClass and removeStyleClass for further documentation.
 * @param {string} sStyleClass the CSS class name to be added or removed
 * @param {boolean} bAdd whether sStyleClass should be added (or removed); when this parameter is not given, sStyleClass will be toggled (removed, if present, and added if not present) 
 * @return {sap.ui.core.Control} Returns <code>this</code> to allow method chaining
 * @public
 */
sap.ui.core.Control.prototype.toggleStyleClass = function(sStyleClass,bAdd) { return new sap.ui.core.Control(); };


// ---- sap.ui.core.Core --------------------------------------------------------------------------

/**
 * 
 * @class Core Class of the SAP UI Library.
 * </p><p>
 * This class boots the Core framework and makes it available for the Application
 * via the method <code>sap.ui.getCore()</code>.
 * </p><p>
 * Example:<br/>
 * <pre>   var oCore = sap.ui.getCore();</pre><br/>
 * 
 * It provides events where the Application can attach to.<br/>
 * Example:<br/>
 * <pre>
 * oCore.attachInit(function () {
 *   //do the needful, do it lean
 * });
 * </pre><br/>
 * </p><p>
 * It registers the Browser Eventing.
 * @extends sap.ui.base.EventProvider
 * @final
 * @version 1.15.1-SNAPSHOT
 * @constructor
 * @public
 */
sap.ui.core.Core = function() {};
/**
 * 
 * The 'formatError' event is fired when a value formatting fails. This can happen when a value stored in the model cannot be formatted to be displayed in an element property.
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {sap.ui.core.Element} oControlEvent.getParameters.element The Element where the format error occurred
 * @param {string} oControlEvent.getParameters.property The property name of the element where the format error occurred
 * @param {type} oControlEvent.getParameters.type The type of the property
 * @param {object} oControlEvent.getParameters.newValue The value of the property which was entered when the format error occurred
 * @param {object} oControlEvent.getParameters.oldValue The value of the property which was present before a new value was entered (before the format error)
 * @param {object} oControlEvent.getParameters.exception The exception object which occurred and has more information about the format error
 * @public
 */
sap.ui.core.Core.prototype.formatError = function(oControlEvent) { return null; };

/**
 * 
 * Fired when any of the localization relevant configuration settings has changed
 * (e.g. language, rtl, formatLocale, datePattern, timePattern, numberSymbol, legacy formats).
 * </p><p>
 * The parameter <code>changes</code> contains additional information about the change. 
 * It is a plain object that can contain one or more of the following properties 
 * <ul>
 *   <li>language - the language setting has changed</li>
 *   <li>rtl - the character orientation mode (aka 'LTR/RTL mode') has changed</li>
 *   <li>formatLocale - the format locale has changed</li>
 * </ul>
 * (there might be other, currently undocumented settings)
 * </p><p>
 * The value for each property will be the new corresponding setting.
 * @event
 * @param {sap.ui.base.Event} oEvent
 * @param {sap.ui.base.EventProvider} oEvent.getSource
 * @param {object} oEvent.getParameters
 * @param {object} oEvent.getParameters.changes a map of the changed localization properties
 * @public
 */
sap.ui.core.Core.prototype.localizationChanged = function(oEvent) { return null; };

/**
 * 
 * The 'parseError' event is fired when input parsing fails.
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {sap.ui.core.Element} oControlEvent.getParameters.element The Element where the parse error occurred
 * @param {string} oControlEvent.getParameters.property The property name of the element where the parse error occurred
 * @param {type} oControlEvent.getParameters.type The type of the property
 * @param {object} oControlEvent.getParameters.newValue The value of the property which was entered when the parse error occurred
 * @param {object} oControlEvent.getParameters.oldValue The value of the property which was present before a new value was entered (before the parse error)
 * @param {object} oControlEvent.getParameters.exception The exception object which occurred and has more information about the parse error
 * @public
 */
sap.ui.core.Core.prototype.parseError = function(oControlEvent) { return null; };

/**
 * 
 * The 'validationError' event is fired when validation of the input fails.
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {sap.ui.core.Element} oControlEvent.getParameters.element The Element where the validation error occurred
 * @param {string} oControlEvent.getParameters.property The property name of the element where the validation error occurred
 * @param {type} oControlEvent.getParameters.type The type of the property
 * @param {object} oControlEvent.getParameters.newValue The value of the property which was entered when the validation error occurred
 * @param {object} oControlEvent.getParameters.oldValue The value of the property which was present before a new value was entered (before the validation error)
 * @param {object} oControlEvent.getParameters.exception The exception object which occurred and has more information about the validation error
 * @public
 */
sap.ui.core.Core.prototype.validationError = function(oControlEvent) { return null; };

/**
 * 
 * The 'validationSuccess' event is fired when a value validation was successfully completed.
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {sap.ui.core.Element} oControlEvent.getParameters.element The Element where the successful validation occurred
 * @param {string} oControlEvent.getParameters.property The property name of the element where the successfull validation occurred
 * @param {type} oControlEvent.getParameters.type The type of the property
 * @param {object} oControlEvent.getParameters.newValue The value of the property which was entered when the validation occurred
 * @param {object} oControlEvent.getParameters.oldValue The value of the property which was present before a new value was entered (before the validation)
 * @public
 */
sap.ui.core.Core.prototype.validationSuccess = function(oControlEvent) { return null; };

/**
 * 
 * Enforces an immediate update of the visible UI (aka "rendering").
 * </p><p>
 * In general, applications should avoid calling this method and
 * instead let the framework manage any necessary rendering.
 * @public
 */
sap.ui.core.Core.prototype.applyChanges = function() { return null; };

/**
 * 
 * Applies the theme with the given name (by loading the respective style sheets, which does not disrupt the application).
 * </p><p>
 * By default, the theme files are expected to be located at path relative to the respective control library ([libraryLocation]/themes/[themeName]).
 * Different locations can be configured by using the method setThemePath() or by using the second parameter "sThemeBaseUrl" of applyTheme().
 * Usage of this second parameter is a shorthand for setThemePath and internally calls setThemePath, so the theme location is then known.
 * </p><p>
 * sThemeBaseUrl is a single URL to specify the default location of all theme files. This URL is the base folder below which the control library folders
 * are located. E.g. if the CSS files are not located relative to the root location of UI5, but instead they are at locations like
 *    http://my.server/myapp/resources/sap/ui/core/themes/my_theme/library.css
 * then the URL that needs to be given is:
 *    http://my.server/myapp/resources
 * All theme resources are then loaded from below this folder - except if for a certain library a different location has been registered.
 * </p><p>
 * If the theme resources are not all either below this base location or  with their respective libraries, then setThemePath must be
 * used to configure individual locations.
 * @param {string} sThemeName the name of the theme to be loaded
 * @param {string} [sThemeBaseUrl] the (optional) base location of the theme
 * @public
 */
sap.ui.core.Core.prototype.applyTheme = function(sThemeName,sThemeBaseUrl) { return null; };

/**
 * 
 * Registers a listener for control events.
 * @param {function} fnFunction callback to be called for each control event
 * @param {object} [oListener] optional context object to call the callback on.
 * @public
 */
sap.ui.core.Core.prototype.attachControlEvent = function(fnFunction,oListener) { return null; };

/**
 * 
 * Attach event-handler <code>fnFunction</code> to the 'formatError' event of <code>sap.ui.core.Core</code>.<br/>
 * @param {function}
 *            fnFunction The function to call, when the event occurs. This function will be called on the
 *            oListener-instance (if present) or in a 'static way'.
 * @param {object}
 *            [oListener] Object on which to call the given function. If empty, this Model is used.
 * @return {sap.ui.core.Core} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.core.Core.prototype.attachFormatError = function(fnFunction,oListener) { return new sap.ui.core.Core(); };

/**
 * 
 * Attaches a given function to the <code>initEvent</code> event of the core. 
 * </p><p>
 * The given callback function will either be called once the Core has been initialized 
 * or, if it has been initialized already, it will be called immediately.
 * @param {function} fnFunction the callback function to be called on event firing.
 * @public
 * @since 1.13.2
 */
sap.ui.core.Core.prototype.attachInit = function(fnFunction) { return null; };

/**
 * 
 * Attaches a given function to the <code>initEvent</code> event of the core.
 * </p><p>
 * This event will only be fired once; you can check if it has been fired already 
 * by calling {@link #isInitialized}.
 * @param {function} fnFunction the function to be called on event firing.
 * @public
 * @deprecated since 1.13.2 Register to the more convenient {@link sap.ui.core.Core#attachInit init event} instead
 */
sap.ui.core.Core.prototype.attachInitEvent = function(fnFunction) { return null; };

/**
 * 
 * Register a listener for the <code>localizationChanged</code> event.
 * @param {function} fnFunction callback to be called 
 * @param {object} oListener context object to cal lthe function on.
 * @public
 */
sap.ui.core.Core.prototype.attachLocalizationChanged = function(fnFunction,oListener) { return null; };

/**
 * 
 * Attach event-handler <code>fnFunction</code> to the 'parseError' event of <code>sap.ui.core.Core</code>.<br/>
 * @param {function}
 *            fnFunction The function to call, when the event occurs. This function will be called on the
 *            oListener-instance (if present) or in a 'static way'.
 * @param {object}
 *            [oListener] Object on which to call the given function. If empty, this Model is used.
 * @return {sap.ui.core.Core} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.core.Core.prototype.attachParseError = function(fnFunction,oListener) { return new sap.ui.core.Core(); };

/**
 * 
 * Attach event-handler <code>fnFunction</code> to the 'validationError' event of <code>sap.ui.core.Core</code>.<br/>
 * @param {function}
 *            fnFunction The function to call, when the event occurs. This function will be called on the
 *            oListener-instance (if present) or in a 'static way'.
 * @param {object}
 *            [oListener] Object on which to call the given function. If empty, this Model is used.
 * @return {sap.ui.core.Core} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.core.Core.prototype.attachValidationError = function(fnFunction,oListener) { return new sap.ui.core.Core(); };

/**
 * 
 * Attach event-handler <code>fnFunction</code> to the 'validationSuccess' event of <code>sap.ui.core.Core</code>.<br/>
 * @param {function}
 *            fnFunction The function to call, when the event occurs. This function will be called on the
 *            oListener-instance (if present) or in a 'static way'.
 * @param {object}
 *            [oListener] Object on which to call the given function. If empty, this Model is used.
 * @return {sap.ui.core.Core} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.core.Core.prototype.attachValidationSuccess = function(fnFunction,oListener) { return new sap.ui.core.Core(); };

/**
 * 
 * Returns the registered element for the given id, if any.
 * @param {string} sId
 * @return {sap.ui.core.Element} the element for the given id
 * @public
 */
sap.ui.core.Core.prototype.byId = function(sId) { return new sap.ui.core.Element(); };

/**
 * 
 * Creates a component with the provided id and settings.
 * </p><p>
 * When the optional parameter <code>sUrl</code> is given, then all request for resources of the
 * library will be redirected to the given Url. This is convenience for a call to
 * <pre>
 *   jQuery.sap.registerModulePath(sName, sUrl);
 * </pre>
 * @param {string|object} vComponent name of the component to import or object containing all needed parameters
 * @param {string} [vComponent.name] name of the component to import 
 * @param {string} [vComponent.url] URL to load the component from
 * @param {string} [vComponent.id] ID for the component instance
 * @param {object} [vComponent.settings] settings object for the component
 * @param {string} [vComponent.componentData] user specific data which is available during the whole lifecycle of the component
 * @param {string} [sUrl] the URL to load the component from
 * @param {string} [sId] the ID for the component instance
 * @param {object} [mSettings] the settings object for the component
 * @public
 */
sap.ui.core.Core.prototype.createComponent = function(vComponent,sUrl,sId,mSettings) { return null; };

/**
 * 
 * Returns a new instance of the RenderManager interface.
 * @return {sap.ui.core.RenderManager} the new instance of the RenderManager interface.
 * @public
 */
sap.ui.core.Core.prototype.createRenderManager = function() { return new sap.ui.core.RenderManager(); };

/**
 * 
 * Creates a new sap.ui.core.UIArea.
 * @param {String,DomRef} oDomRef a DOM reference or ID string of the UIArea
 * @return {sap.ui.core.UIArea} a new UIArea
 * @public
 * @deprecated Use <code>setRoot()</code> instead!
 */
sap.ui.core.Core.prototype.createUIArea = function(oDomRef) { return new sap.ui.core.UIArea(); };

/**
 * 
 * Unregisters a listener for control events.
 * </p><p>
 * A listener will only be unregistered if the same function/context combination
 * is given as in the attachControlEvent call.
 * @param {function} fnFunction function to unregister
 * @param {object} [oListener] context object given during registration
 * @public
 */
sap.ui.core.Core.prototype.detachControlEvent = function(fnFunction,oListener) { return null; };

/**
 * 
 * Detach event-handler <code>fnFunction</code> from the 'formatError' event of <code>sap.ui.core.Core</code>.<br/>
 * </p><p>
 * The passed function and listener object must match the ones previously used for event registration.
 * @param {function}
 *            fnFunction The callback function to unregister
 * @param {object}
 *            oListener Object on which the given function had to be called.
 * @return {sap.ui.core.Core} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.core.Core.prototype.detachFormatError = function(fnFunction,oListener) { return new sap.ui.core.Core(); };

/**
 * 
 * Unregister a listener from the <code>localizationChanged</code> event.
 * </p><p>
 * The listener will only be unregistered if the same function/context combination 
 * is given as in the call to <code>attachLocalizationListener</code>.
 * @param {function} fnFunction callback to be deregistered
 * @param {object} oListener context object given in a previous call to attachLocalizationChanged.
 * @public
 */
sap.ui.core.Core.prototype.detachLocalizationChanged = function(fnFunction,oListener) { return null; };

/**
 * 
 * Detach event-handler <code>fnFunction</code> from the 'parseError' event of <code>sap.ui.core.Core</code>.<br/>
 * </p><p>
 * The passed function and listener object must match the ones previously used for event registration.
 * @param {function}
 *            fnFunction The callback function to unregister.
 * @param {object}
 *            oListener Object on which the given function had to be called.
 * @return {sap.ui.core.Core} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.core.Core.prototype.detachParseError = function(fnFunction,oListener) { return new sap.ui.core.Core(); };

/**
 * 
 * Detach event-handler <code>fnFunction</code> from the 'validationError' event of <code>sap.ui.core.Core</code>.<br/>
 * </p><p>
 * The passed function and listener object must match the ones previously used for event registration.
 * @param {function}
 *            fnFunction The callback function to unregister
 * @param {object}
 *            oListener Object on which the given function had to be called.
 * @return {sap.ui.core.Core} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.core.Core.prototype.detachValidationError = function(fnFunction,oListener) { return new sap.ui.core.Core(); };

/**
 * 
 * Detach event-handler <code>fnFunction</code> from the 'validationSuccess' event of <code>sap.ui.core.Core</code>.<br/>
 * </p><p>
 * The passed function and listener object must match the ones previously used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Object on which the given function had to be called.
 * @return {sap.ui.core.Core} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.core.Core.prototype.detachValidationSuccess = function(fnFunction,oListener) { return new sap.ui.core.Core(); };

/**
 * 
 * Fire event formatError to attached listeners.
 * </p><p>
 * Expects following event parameters:
 * <ul>
 * <li>'element' of type <code>sap.ui.core.Element</code> </li>
 * <li>'property' of type <code>string</code> </li>
 * <li>'type' of type <code>string</code> </li>
 * <li>'newValue' of type <code>object</code> </li>
 * <li>'oldValue' of type <code>object</code> </li>
 * <li>'exception' of type <code>object</code> </li>
 * </ul>
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.core.Core} <code>this</code> to allow method chaining
 * @protected
 */
sap.ui.core.Core.prototype.fireFormatError = function(mArguments) { return new sap.ui.core.Core(); };

/**
 * 
 * Fire event parseError to attached listeners.
 * </p><p>
 * Expects following event parameters:
 * <ul>
 * <li>'element' of type <code>sap.ui.core.Element</code> </li>
 * <li>'property' of type <code>string</code> </li>
 * <li>'type' of type <code>string</code> </li>
 * <li>'newValue' of type <code>object</code> </li>
 * <li>'oldValue' of type <code>object</code> </li>
 * <li>'exception' of type <code>object</code> </li>
 * </ul>
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.core.Core} <code>this</code> to allow method chaining
 * @protected
 */
sap.ui.core.Core.prototype.fireParseError = function(mArguments) { return new sap.ui.core.Core(); };

/**
 * 
 * Fire event validationError to attached listeners.
 * </p><p>
 * Expects following event parameters:
 * <ul>
 * <li>'element' of type <code>sap.ui.core.Element</code> </li>
 * <li>'property' of type <code>string</code> </li>
 * <li>'type' of type <code>string</code> </li>
 * <li>'newValue' of type <code>object</code> </li>
 * <li>'oldValue' of type <code>object</code> </li>
 * <li>'exception' of type <code>object</code> </li>
 * </ul>
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.core.Core} <code>this</code> to allow method chaining
 * @protected
 */
sap.ui.core.Core.prototype.fireValidationError = function(mArguments) { return new sap.ui.core.Core(); };

/**
 * 
 * Fire event validationSuccess to attached listeners.
 * </p><p>
 * Expects following event parameters:
 * <ul>
 * <li>'element' of type <code>sap.ui.core.Element</code> </li>
 * <li>'property' of type <code>string</code> </li>
 * <li>'type' of type <code>string</code> </li>
 * <li>'newValue' of type <code>object</code> </li>
 * <li>'oldValue' of type <code>object</code> </li>
 * </ul>
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.core.Core} <code>this</code> to allow method chaining
 * @protected
 */
sap.ui.core.Core.prototype.fireValidationSuccess = function(mArguments) { return new sap.ui.core.Core(); };

/**
 * 
 * Returns the instance of the application (if exists).
 * @return {sap.ui.app.Application} instance of the current application
 * @public
 */
sap.ui.core.Core.prototype.getApplication = function() { return new sap.ui.app.Application(); };

/**
 * 
 * Returns the registered component for the given id, if any.
 * @param {string} sId
 * @return {sap.ui.core.Component} the component for the given id
 * @public
 */
sap.ui.core.Core.prototype.getComponent = function(sId) { return new sap.ui.core.Component(); };

/**
 * 
 * Returns the Configuration of the Core.
 * @return {sap.ui.core.Configuration} the Configuration of the current Core.
 * @public
 */
sap.ui.core.Core.prototype.getConfiguration = function() { return new sap.ui.core.Configuration(); };

/**
 * 
 * Returns the registered element for the given ID, if any.
 * @param {string} sId
 * @return {sap.ui.core.Element} the element for the given id
 * @deprecated use <code>sap.ui.core.Core.byId</code> instead!
 * @public
 */
sap.ui.core.Core.prototype.getControl = function(sId) { return new sap.ui.core.Element(); };

/**
 * 
 * Returns the Id of the control/element currently in focus.
 * @return {string} the Id of the control/element currently in focus.
 * @public
 */
sap.ui.core.Core.prototype.getCurrentFocusedControlId = function() { return ""; };

/**
 * 
 * Returns the registered element for the given ID, if any.
 * @param {string} sId
 * @return {sap.ui.core.Element} the element for the given id
 * @deprecated use <code>sap.ui.core.Core.byId</code> instead!
 * @public
 */
sap.ui.core.Core.prototype.getElementById = function(sId) { return new sap.ui.core.Element(); };

/**
 * 
 * Returns the event bus.
 * @return {sap.ui.core.EventBus} the event bus
 * @since 1.8.0
 * @public
 */
sap.ui.core.Core.prototype.getEventBus = function() { return new sap.ui.core.EventBus(); };

/**
 * 
 * Retrieves a resource bundle for the given library and locale.
 * </p><p>
 * If only one argument is given, it is assumed to be the libraryName. The locale
 * then falls back to the current {@link sap.ui.core.Configuration.prototype.getLanguage session locale}.
 * If no argument is given, the library also falls back to a default: "sap.ui.core".
 * @param {string} [sLibraryName='sap.ui.core'] name of the library to retrieve the bundle for
 * @param {string} [sLocale] locale to retrieve the resource bundle for
 * @return {jQuery.sap.util.ResourceBundle} the best matching resource bundle for the given parameters or undefined
 * @public
 */
sap.ui.core.Core.prototype.getLibraryResourceBundle = function(sLibraryName,sLocale) { return new jQuery.sap.util.ResourceBundle(); };

/**
 * 
 * Returns a map which contains the names of the loaded libraries as keys
 * and some additional information about each library as values.
 * @experimental The details of the 'values' in the returned map are not yet specified!
 * Their structure might change in future versions without notice. So applications
 * can only rely on the set of keys as well as the pure existance of a value.
 * @return {map} map of library names / controls
 * @public
 */
sap.ui.core.Core.prototype.getLoadedLibraries = function() { return null; };

/**
 * 
 * Get the model with the given model name.
 * </p><p>
 * The name can be omitted to reference the default model or it must be a non-empty string.
 * </p><p>
 * Note: to be compatible with future versions of this API, applications must not use the value <code>null</code>,
 * the empty string <code>""</code> or the string literals <code>"null"</code> or <code>"undefined"</code> as model name. 
 * @param {string|undefined} [sName] name of the model to be retrieved
 * @return {sap.ui.model.Model} oModel
 * @public
 */
sap.ui.core.Core.prototype.getModel = function(sName) { return new sap.ui.model.Model(); };

/**
 * 
 * @public
 * @deprecated Since version 0.15.0. Replaced by <code>createRenderManager()</code>
 */
sap.ui.core.Core.prototype.getRenderManager = function() { return null; };

/**
 * 
 * Returns the instance of the root component (if exists).
 * @return {sap.ui.core.Component} instance of the current root component
 * @public
 */
sap.ui.core.Core.prototype.getRootComponent = function() { return new sap.ui.core.Component(); };

/**
 * 
 * Returns the static, hidden area reference belonging to this core instance.<br/> It can be used e.g. for hiding
 * elements like Popups, Shadow, Blocklayer etc.<br/> If it is not yet available, creates one HTML element and attaches
 * it to the body.
 * @return {DOMNode} the static, hidden area reference belonging to this core instance.
 * @public
 */
sap.ui.core.Core.prototype.getStaticAreaRef = function() { return null; };

/**
 * 
 * Returns the registered template for the given id, if any.
 * @param {string} sId
 * @return {sap.ui.core.Component} the template for the given id
 * @public
 */
sap.ui.core.Core.prototype.getTemplate = function(sId) { return new sap.ui.core.Component(); };

/**
 * 
 * Returns a UIArea if the given ID/Element belongs to one.
 * @public
 * @param {string|DomRef} o a DOM Reference or ID string of the UIArea
 * @return {sap.ui.core.UIArea} a UIArea with a given id or dom ref.
 */
sap.ui.core.Core.prototype.getUIArea = function(o) { return new sap.ui.core.UIArea(); };

/**
 * 
 * Returns "true" if the UI is marked as dirty and will be cleaned/re-rendered after a certain small timeout.
 * @return {boolean} true if some UI part is marked as dirty and will be cleaned up/re-rendered
 * @public
 */
sap.ui.core.Core.prototype.getUIDirty = function() { return false; };

/**
 * 
 * Check if a Model is set to the core
 * @return {boolean} true or false
 * @public
 */
sap.ui.core.Core.prototype.hasModel = function() { return false; };

/**
 * 
 * Includes a library theme into the current page (if a variant is specified it
 * will include the variant library theme)
 * @param {string} sLibName the name of the UI library
 * @param {string} [sVariant] the variant to include (optional)
 * @param {string} [sQuery] to be used only by the Core
 * @public
 */
sap.ui.core.Core.prototype.includeLibraryTheme = function(sLibName,sVariant,sQuery) { return null; };

/**
 * 
 * Initializes a library for an already loaded library module.
 * </p><p>
 * This method is intended to be called only from a library.js (e.g. generated code).
 * It includes the library specific stylesheet into the current page, and creates
 * lazy import stubs for all controls and elements in the library.
 * </p><p>
 * As a result, consuming applications don't have to write import statements for the controls or for the enums.
 * </p><p>
 * Synchronously loads any libraries that the given library depends on.
 * @param {string|object} vLibInfo name of or info object for the library to import
 * @public
 */
sap.ui.core.Core.prototype.initLibrary = function(vLibInfo) { return null; };

/**
 * 
 * Returns true if the Core has already been initialized. This means that instances 
 * of RenderManager etc. do already exist and the init event has already been fired 
 * (and will not be fired again).
 * @return {boolean} whether the Core has already been initialized
 * @public
 */
sap.ui.core.Core.prototype.isInitialized = function() { return false; };

/**
 * 
 * Returns the locked state of the <code>sap.ui.core.Core</code>
 * @return {boolean} locked state
 * @public
 */
sap.ui.core.Core.prototype.isLocked = function() { return false; };

/**
 * 
 * Check if the script is running on mobile
 * @return {boolean} true or false
 * @public
 */
sap.ui.core.Core.prototype.isMobile = function() { return false; };

/**
 * 
 * Used to find out whether a certain DOM element is the static area
 * @return {boolean} whether the given DomRef is the StaticAreaRef
 * @protected
 */
sap.ui.core.Core.prototype.isStaticAreaRef = function(oDomRef) { return false; };

/**
 * 
 * Returns true, if the styles of the current theme are already applied, false otherwise.
 * </p><p>
 * This function must not be used before the init event of the Core.
 * If the styles are not yet applied an theme changed event will follow when the styles will be applied.
 * @return {boolean} whether the styles of the current theme are already applied
 * @public
 */
sap.ui.core.Core.prototype.isThemeApplied = function() { return false; };

/**
 * 
 * Synchronously loads the given library and makes it available to the application.
 * </p><p>
 * Loads the *.library module, which contains all preload modules (enums, types, content of a shared.js
 * if it exists). The library module will call initLibrary with additional metadata for the library.
 * </p><p>
 * As a result, consuming applications can instantiate any control or element from that library
 * without having to write import statements for the controls or for the enums.
 * </p><p>
 * When the optional parameter <code>sUrl</code> is given, then all request for resources of the
 * library will be redirected to the given Url. This is convenience for a call to
 * <pre>
 *   jQuery.sap.registerModulePath(sLibrary, sUrl);
 * </pre>
 * </p><p>
 * When the given library has been loaded already, no further action will be taken.
 * Especially, a given Url will not be honored!
 * </p><p>
 * Note: this method does not participate in the supported preload of libraries.
 * @param {string} sLibrary name of the library to import
 * @param {string} [sUrl] URL to load the library from
 * @public
 */
sap.ui.core.Core.prototype.loadLibrary = function(sLibrary,sUrl) { return null; };

/**
 * 
 * Locks the Core. No browser events are dispatched to the controls.
 * </p><p>
 * Lock should be called before and after the dom is modified for rendering, roundtrips...
 * Exceptions might be the case for asynchronous UI behavior
 * @public
 */
sap.ui.core.Core.prototype.lock = function() { return null; };

/**
 * 
 * Registers a Plugin to the <code>sap.ui.core.Core</code>, which lifecycle
 * will be managed (start and stop).
 * <br/>
 * Plugin object need to implement two methods:
 * <ul>
 *   <li><code>startPlugin(oCore)</code>: will be invoked, when the Plugin
 *       should start (as parameter the reference to the Core will be provided</li>
 *   <li><code>stopPlugin()</code>: will be invoked, when the Plugin should stop</li>
 * </ul>
 * @param {object} oPlugin reference to a Plugin object
 * @public
 */
sap.ui.core.Core.prototype.registerPlugin = function(oPlugin) { return null; };

/**
 * 
 * Sets the instance of the application.
 * @param {sap.ui.app.Application} oApplication instance of the new application
 * @return {sap.ui.core.Core} <code>this</code> to allow method chaining
 * @protected
 */
sap.ui.core.Core.prototype.setApplication = function(oApplication) { return new sap.ui.core.Core(); };

/**
 * 
 * Sets or unsets a model for the given model name. 
 * </p><p>
 * The <code>sName</code> must either be <code>undefined</code> (or omitted) or a non-empty string.
 * When the name is omitted, the default model is set/unset. 
 * </p><p>
 * When <code>oModel</code> is <code>null</code> or <code>undefined</code>, a previously set model 
 * with that name is removed from the Core.
 * </p><p>
 * Any change (new model, removed model) is propagated to all existing UIAreas and their descendants
 * as long as a descendant doesn't have its own model set for the given name.
 * </p><p>
 * Note: to be compatible with future versions of this API, applications must not use the value <code>null</code>,
 * the empty string <code>""</code> or the string literals <code>"null"</code> or <code>"undefined"</code> as model name. 
 * @param {sap.ui.model.Model} oModel the model to be set or <code>null</code> or <code>undefined</code>
 * @param {string} [sName] the name of the model or <code>undefined</code>
 * @return {sap.ui.core.Core} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.core.Core.prototype.setModel = function(oModel,sName) { return new sap.ui.core.Core(); };

/**
 * 
 * Implicitly creates a new <code>UIArea</code> (or reuses an exiting one) for the given DOM reference and
 * adds the given control reference to the UIAreas content (existing content will be removed).
 * @param {String,DomRef} oDomRef a Dom Reference or Id String of the UIArea
 * @param {sap.ui.base.Interface | sap.ui.core.Control}
 *            oControl the Control that should be the added to the <code>UIArea</code>.
 * @public
 * @deprecated Use function <code>oControl.placeAt(oDomRef, "only")</code> of <code>sap.ui.core.Control</code> instead.
 */
sap.ui.core.Core.prototype.setRoot = function(oDomRef,oControl) { return null; };

/**
 * 
 * Defines the root directory from below which UI5 should load the theme with the given name. 
 * Optionally allows restricting the setting to parts of a theme covering specific control libraries.
 * </p><p>
 * Example:
 * <code>
 *   core.setThemeRoot("my_theme", "http://mythemeserver.com/allThemes");
 *   core.applyTheme("my_theme");
 * </code>
 * will cause the following file to be loaded:
 * <code>http://mythemeserver.com/allThemes/sap/ui/core/themes/my_theme/library.css</code>
 * (and the respective files for all used control libraries, like <code>http://mythemeserver.com/allThemes/sap/ui/commons/themes/my_theme/library.css</code>
 * if the sap.ui.commons library is used)
 * </p><p>
 * If parts of the theme are at different locations (e.g. because you provide a standard theme like "sap_goldreflection" for a custom control library and
 * this self-made part of the standard theme is at a different location than the UI5 resources), you can also specify for which control libraries the setting
 * should be used, by giving an array with the names of the respective control libraries as second parameter:
 * <code>core.setThemeRoot("sap_goldreflection", ["my.own.library"], "http://mythemeserver.com/allThemes");</code>
 * This will cause the Gold Reflection theme to be loaded normally from the UI5 location, but the part for styling the "my.own.library" controls will be loaded from:
 * <code>http://mythemeserver.com/allThemes/my/own/library/themes/sap_goldreflection/library.css</code>
 * </p><p>
 * If the custom theme should be loaded initially (via bootstrap attribute), the "themeRoots" property of the window["sap-ui-config"] object must be used instead
 * of Core.setThemeRoot(...) in order to configure the theme location early enough.
 * @param {string} sThemeName the name of the theme for which to configure the location
 * @param {string[]} [aLibraryNames] the optional library names to which the configuration should be restricted
 * @param {string} sThemeBaseUrl the base URL below which the CSS file(s) will be loaded from
 * @return {sap.ui.core.Core} the Core, to allow method chaining
 * @since 1.10
 * @public
 */
sap.ui.core.Core.prototype.setThemeRoot = function(sThemeName,aLibraryNames,sThemeBaseUrl) { return new sap.ui.core.Core(); };

/**
 * 
 * Unlocks the Core. 
 * </p><p>
 * Browser events are dispatched to the controls again after this method is called.
 * @public
 */
sap.ui.core.Core.prototype.unlock = function() { return null; };

/**
 * 
 * Unregisters a Plugin out of the <code>sap.ui.core.Core</code>
 * @param {object} oPlugin reference to a Plugin object
 * @public
 */
sap.ui.core.Core.prototype.unregisterPlugin = function(oPlugin) { return null; };


// ---- sap.ui.core.CSSColor --------------------------------------------------------------------------


// ---- sap.ui.core.CSSSize --------------------------------------------------------------------------


// ---- sap.ui.core.CSSSizeShortHand --------------------------------------------------------------------------


// ---- sap.ui.core.CustomData --------------------------------------------------------------------------

/**
 * 
 * Constructor for a new CustomData.
 * </p><p>
 * Accepts an object literal <code>mSettings</code> that defines initial 
 * property values, aggregated and associated objects as well as event handlers. 
 * </p><p>
 * If the name of a setting is ambiguous (e.g. a property has the same name as an event), 
 * then the framework assumes property, aggregation, association, event in that order. 
 * To override this automatic resolution, one of the prefixes "aggregation:", "association:" 
 * or "event:" can be added to the name of the setting (such a prefixed name must be
 * enclosed in single or double quotes).
 * </p><p>
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getKey key} : string</li>
 * <li>{@link #getValue value} : any</li>
 * <li>{@link #getWriteToDom writeToDom} : boolean (default: false)</li></ul>
 * </li>
 * <li>Aggregations
 * <ul></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul></ul>
 * </li>
 * </ul> 
 * </p><p>
 * </p><p>
 * In addition, all settings applicable to the base type {@link sap.ui.core.Element#constructor sap.ui.core.Element}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * Contains a single key/value pair of custom data attached to an Element. See method data().
 * @extends sap.ui.core.Element
 * @version 1.15.1-SNAPSHOT
 * @constructor   
 * @public
 * 
 */
sap.ui.core.CustomData = function(sId,mSettings) {};
/**
 * 
 * Creates a new subclass of class sap.ui.core.CustomData with name <code>sClassName</code> 
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * </p><p>
 * <code>oClassInfo</code> might contain the same kind of informations as described in {@link sap.ui.core.Element.extend Element.extend}.
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class  
 * @param {function} [FNMetaImpl] constructor function for the metadata object. If not given, it defaults to sap.ui.core.ElementMetadata.
 * @return {function} the created class / constructor function
 * @public
 * @static
 * 
 */
sap.ui.core.CustomData.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * 
 * Getter for property <code>key</code>.
 * The key of the data in this CustomData object.
 * When the data is just stored, it can be any string, but when it is to be written to HTML (writeToDom == true) then it must also be a valid HTML attribute name (it must conform to the sap.ui.core.ID type and may contain no colon) to avoid collisions, it also may not start with "sap-ui". When written to HTML, the key is prefixed with "data-".
 * If any restriction is violated, a warning will be logged and nothing will be written to the DOM.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {string} the value of property <code>key</code>
 * @public
 * 
 */
sap.ui.core.CustomData.prototype.getKey = function() { return ""; };

/**
 * 
 * Getter for property <code>value</code>.
 * The data stored in this CustomData object.
 * When the data is just stored, it can be any JS type, but when it is to be written to HTML (writeToDom == true) then it must be a string.
 * If this restriction is violated, a warning will be logged and nothing will be written to the DOM.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {any} the value of property <code>value</code>
 * @public
 * 
 */
sap.ui.core.CustomData.prototype.getValue = function() { return null; };

/**
 * 
 * Getter for property <code>writeToDom</code>.
 * If set to "true" and the value is of type "string" and the key conforms to the documented restrictions, this custom data is written to the HTML root element of the control as a "data-*" attribute.
 * If the key is "abc" and the value is "cde", the HTML will look as follows:
 * &lt;SomeTag ... data-abc="cde" ... &gt;
 * Thus the application can provide stable attributes by data binding which can be used for styling or identification purposes.
 * ATTENTION: use carefully to not create huge attributes or a large number of them.
 * </p><p>
 * Default value is <code>false</code>
 * @return {boolean} the value of property <code>writeToDom</code>
 * @public
 * @since 1.9.0
 * 
 */
sap.ui.core.CustomData.prototype.getWriteToDom = function() { return false; };

/**
 * 
 * Setter for property <code>key</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {string} sKey  new value for property <code>key</code>
 * @return {sap.ui.core.CustomData} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.core.CustomData.prototype.setKey = function(sKey) { return new sap.ui.core.CustomData(); };

/**
 * 
 * Setter for property <code>value</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {any} oValue  new value for property <code>value</code>
 * @return {sap.ui.core.CustomData} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.core.CustomData.prototype.setValue = function(oValue) { return new sap.ui.core.CustomData(); };

/**
 * 
 * Setter for property <code>writeToDom</code>.
 * </p><p>
 * Default value is <code>false</code> 
 * @param {boolean} bWriteToDom  new value for property <code>writeToDom</code>
 * @return {sap.ui.core.CustomData} <code>this</code> to allow method chaining
 * @public
 * @since 1.9.0
 * 
 */
sap.ui.core.CustomData.prototype.setWriteToDom = function(bWriteToDom) { return new sap.ui.core.CustomData(); };


// ---- sap.ui.core.DeclarativeSupport --------------------------------------------------------------------------

/**
 * 
 * @class Static class for enabling declarative UI support.  
 * @version 1.15.1-SNAPSHOT
 * @since 1.7.0
 * @public
 */
sap.ui.core.DeclarativeSupport = function() {};
/**
 * 
 * Enhances the given DOM element by parsing the Control and Elements info and creating
 * the SAPUI5 controls for them.
 * @param {DomElement} oElement the element to compile
 * @param {sap.ui.core.mvc.HTMLView} [oView] The view instance to use
 * @param {boolean} [isRecursive] Whether the call of the function is recursive.
 * @public
 */
sap.ui.core.DeclarativeSupport.prototype.compile = function(oElement,oView,isRecursive) { return null; };


// ---- sap.ui.core.delegate --------------------------------------------------------------------------


// ---- sap.ui.core.delegate.ItemNavigation --------------------------------------------------------------------------

/**
 * 
 * Creates an ItemNavigation delegate that can be attached to Controls requiring
 * capabilities for keyboard navigation between items.
 * @class Delegate for the ItemNavigation with the keyboard
 * </p><p>
 * Delegate for the ItemNavigation with
 * arrow keys over a one dimensional list of items.
 * </p><p>
 * The ItemNavigation gets a main DOM reference and
 * an array of DOM references that represent the
 * DOM nodes that should be focused.
 * </p><p>
 * If there are disabled nodes or not focusable nodes like separators that should be used
 * (e.g. for paging issues) in the ItemNavigation they
 * can be added to the DOM reference array as empty (false) entries. These nodes are
 * not focused by keyboard navigation but are useful because the index of the nodes in the
 * ItemNavigation is the same like in the calling control.
 * </p><p>
 * If the DOM references are submitted to the ItemNavigation the TabIndexes of the
 * nodes are adjusted regarding to the Focused Index.
 * </p><p>
 * If the ItemNavigation is nested in an other ItemNavigation (e.g. SegmentedButton in Toolbar)
 * the RootDomRef will always have TabIndex -1.
 * </p><p>
 * Per default the ItemNavigation cycles over the items.
 * It starts again on the top if arrow down is pressed while
 * the last item has the focus. It starts at the end if arrow up or
 * left is pressed while the first item has the focus.
 * If you like to stop the navigation at the first and last item,
 * call the <code>setCycling</code> method with a value of <code>false</code>.
 * </p><p>
 * It is possible to have multiple columns in the item navigation. If multiple columns
 * are used the keyboard navigation changes. Right and left will get to the next or previous
 * node. but up and down will navigate the same way but in vertical direction.
 * </p><p>
 * The ItemNavigation helper also allows to set a selected index that is used
 * if the user initially enters the navigated control (for a radio group there
 * is one selected).
 * </p><p>
 * This class listens to mousedown event and if it occurs on an item in the
 * list aItemDomRefs, it sets the focus to it.
 * </p><p>
 * Remembering the focused item after a server roundtrip or after re-rendering is
 * up to the control that uses this delegate.
 * </p><p>
 * When the <code>setPageSize</code> method is called with a value &gt; 0,
 * then page up and down events will be handled.
 * </p><p>
 * The <code>BeforeFocus</code> event is fired before the actual item is focused.
 * The control can register to this event and e.g. make the item visible
 * if it is not currently visible.
 * The index of the focused Item and the triggering event are returned.
 * !!! But this is not usable in the moment because not visible items are not reached
 * !!! by keyboard navigation. It is to late to make them visible on this event or it
 * !!! is fired to late.
 * !!! This must be redesigned if the feature is really needed. (e.g. in TabStrip for
 * !!! tabs that are not visible in the moment...)
 * </p><p>
 * The <code>AfterFocus</code> event is fired after the actual item is focused.
 * The control can register to this event and react on the focus change.
 * The index of the focused Item and the triggering event are returned.
 * @extends sap.ui.base.EventProvider
 * @param {DOMNode} oDomRef the DOM node that is focused if the item navigation is started
 * @param {array} aItemDomRefs Array of DOM nodes representing the items for the navigation
 * @param {boolean} [bNotInTabChain=false] Whether the selected element should be in the tab chain or not
 * @version 1.15.1-SNAPSHOT
 * @constructor
 * @public
 */
sap.ui.core.delegate.ItemNavigation = function(oDomRef,aItemDomRefs,bNotInTabChain) {};
/**
 * 
 * returns the array of item dom refs
 * @return {Array} array of item dom refs
 * @public
 */
sap.ui.core.delegate.ItemNavigation.prototype.getItemDomRefs = function() { return null; };

/**
 * 
 * returns the root dom reference surrounding the items
 * @return {DOMNode} root dom reference surrounding the items
 * @public
 */
sap.ui.core.delegate.ItemNavigation.prototype.getRootDomRef = function() { return null; };

/**
 * 
 * Sets whether the items are displayed in columns
 * @param {integer} iColumns count of columns for the table mode or cycling mode
 * @return {sap.ui.core.delegate.ItemNavigation} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.core.delegate.ItemNavigation.prototype.setColumns = function(iColumns) { return new sap.ui.core.delegate.ItemNavigation(); };

/**
 * 
 * Sets whether the ItemNavigation should cycle through the items
 * @param {boolean} bCycling true if cycling should be done, else false
 * @return {sap.ui.core.delegate.ItemNavigation} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.core.delegate.ItemNavigation.prototype.setCycling = function(bCycling) { return new sap.ui.core.delegate.ItemNavigation(); };

/**
 * 
 * Sets the item dom refs as an array the items
 * @return {sap.ui.core.delegate.ItemNavigation} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.core.delegate.ItemNavigation.prototype.setItemDomRefs = function(aItemDomRefs) { return new sap.ui.core.delegate.ItemNavigation(); };

/**
 * 
 * Sets the page size of the item navigation to allow pageup and down keys
 * @param {int} iPageSize the pagesize, needs to be at least 1
 * @return {sap.ui.core.delegate.ItemNavigation} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.core.delegate.ItemNavigation.prototype.setPageSize = function(iPageSize) { return new sap.ui.core.delegate.ItemNavigation(); };

/**
 * 
 * Sets the root reference surrounding the items
 * @return {sap.ui.core.delegate.ItemNavigation} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.core.delegate.ItemNavigation.prototype.setRootDomRef = function(oDomRef) { return new sap.ui.core.delegate.ItemNavigation(); };

/**
 * 
 * Sets the selected index if the used control supports selection
 * @param {int} iIndex the index of the first selected item
 * @return {sap.ui.core.delegate.ItemNavigation} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.core.delegate.ItemNavigation.prototype.setSelectedIndex = function(iIndex) { return new sap.ui.core.delegate.ItemNavigation(); };

/**
 * 
 * Sets whether the ItemNavigation should use the table mode to navigate through
 * the items (navigation in a grid)
 * @param {boolean} bTableMode true if table mode should be done, else false
 * @return {sap.ui.core.delegate.ItemNavigation} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.core.delegate.ItemNavigation.prototype.setTableMode = function(bTableMode) { return new sap.ui.core.delegate.ItemNavigation(); };


// ---- sap.ui.core.delegate.ScrollEnablement --------------------------------------------------------------------------

/**
 * 
 * Creates a ScrollEnablement delegate that can be attached to Controls requiring
 * capabilities for scrolling of a certain part of their DOM on mobile devices.
 * @class Delegate for touch scrolling on mobile devices
 * </p><p>
 * This delegate uses CSS (-webkit-overflow-scrolling) only if supported. Otherwise the desired
 * scrolling library is used. Please also consider the documentation
 * of the library for a proper usage.
 * </p><p>
 * Controls that implement ScrollEnablement should additionally provide the getScrollDelegate method that returns
 * the current instance of this delegate object
 * @extends sap.ui.base.Object
 * @experimental Since 1.5.2. This class is experimental and provides only limited functionality. Also the API might be changed in future.
 * @param {sap.ui.core.Control} oControl the Control of which this Scroller is the delegate
 * @param {string} sScrollContentDom the Id of the element within the DOM of the Control which should be scrollable
 * @param {object} oConfig the configuration of the scroll delegate
 * @param {boolean} [oConfig.horizontal=false] Whether the element should be scrollable horizontally
 * @param {boolean} [oConfig.vertical=false] Whether the element should be scrollable vertically
 * @param {boolean} [oConfig.zynga=false] If set, then the Zynga scroller (http://zynga.github.com/scroller/) is used otherwise iScroll (http://cubiq.org/iscroll-4) is used.
 * @param {boolean} [oConfig.preventDefault=false] If set, the default of touchmove is prevented
 * @param {boolean} [oConfig.nonTouchScrolling=false] If true, the delegate will also be active to allow touch like scrolling with the mouse on non-touch platforms; if set to "scrollbar", there will be normal scrolling with scrollbars and no touch-like scrolling where the content is dragged
 * @version 1.15.1-SNAPSHOT
 * @constructor
 * @protected
 */
sap.ui.core.delegate.ScrollEnablement = function(oControl,sScrollContentDom,oConfig) {};

// ---- sap.ui.core.Design --------------------------------------------------------------------------

// dummy function to make Eclipse aware of namespace
sap.ui.core.Design.toString = function() { return ""; };

// ---- sap.ui.core.Dock --------------------------------------------------------------------------


// ---- sap.ui.core.Element --------------------------------------------------------------------------

/**
 * 
 * Constructs and initializes an UI Element with the given <code>sId</code> and settings.
 * </p><p>
 * If the optional <code>mSettings</code> are given, they must be a JSON-like object (object literal)
 * that defines values for properties, aggregations, associations or events keyed by their name.
 * </p><p>
 * <b>Valid Names:</b>
 * </p><p>
 * The property (key) names supported in the object literal are exactly the (case sensitive)
 * names documented in the JSDoc for the properties, aggregations, associations and events
 * of the control and its base classes. Note that for  0..n aggregations and associations this
 * usually is the plural name, whereas it is the singular name in case of 0..1 relations.
 * </p><p>
 * If a key name is ambiguous for a specific control class (e.g. a property has the same
 * name as an event), then this method prefers property, aggregation, association and
 * event in that order. To resolve such ambiguities, the keys can be prefixed with
 * <code>aggregation:</code>, <code>association:</code> or <code>event:</code>.
 * In that case the keys must be quoted due to the ':'.
 * </p><p>
 * Each subclass should document the set of supported names in its constructor documentation.
 * </p><p>
 * <b>Valid Values:</b>
 * </p><p>
 * <ul>
 * <li>for normal properties, the value has to be of the correct simple type (no type conversion occurs)
 * <li>for 0..1 aggregations, the value has to be an instance of the aggregated control or element type
 * <li>for 0..n aggregations, the value has to be an array of instances of the aggregated type
 * <li>for 0..1 associations, an instance of the associated type or an id (string) is accepted
 * <li>0..n associations are not supported yet
 * <li>for events either a function (event handler) is accepted or an array of length 2
 *     where the first element is a function and the 2nd element is an object to invoke the method on.
 * </ul>
 * @param {string} [sId] id for the new control; generated automatically if no non-empty id is given
 *      Note: this can be omitted, no matter whether <code>mSettings</code> will be given or not!
 * @param {object} [mSettings] optional map/JSON-object with initial property values, aggregated objects etc. for the new element
 * @class Base Class for Elements.
 * @extends sap.ui.base.ManagedObject
 * @version 1.15.1-SNAPSHOT
 * @public
 * 
 */
sap.ui.core.Element = function(sId,mSettings) {};
/**
 * 
 * Returns the best suitable DOM node that represents this Element wrapped as jQuery object.
 * I.e. the element returned by {@link sap.ui.core.Element#getDomRef} is wrapped and returned.
 * @return {jQuery} The jQuery wrapped element's DOM reference
 * @protected
 */
sap.ui.core.Element.prototype.$ = function() { return null; };

/**
 * 
 * Adds some customData element <code>oCustomData</code>
 * to the aggregation named <code>customData</code>.
 * @param {sap.ui.core.CustomData}
 *            oCustomData the customData to add; if empty, nothing is inserted
 * @return {sap.ui.core.Element} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.core.Element.prototype.addCustomData = function(oCustomData) { return new sap.ui.core.Element(); };

/**
 * 
 * Adds a delegate that listens to the events that are fired on this element (as opposed to events which are fired BY this element).
 * </p><p>
 * When this element is cloned, the same delegate will be added to all clones. This behavior is well-suited for applications which want to add delegates
 * that also work with templates in aggregation bindings.
 * For control development the internal "addDelegate" method which does not clone delegates by default may be more suitable, as typically each control instance takes care of its own delegates.
 * </p><p>
 * To avoid double registrations, all registrations of the given delegate are first
 * removed and then the delegate is added.
 * @param {object} oDelegate the delegate object
 * @param {object} [oThis] if given, this object will be the "this" context in the listener methods; default is the delegate object itself
 * @return {sap.ui.core.Element} Returns <code>this</code> to allow method chaining
 * @since 1.9.0
 * @public
 */
sap.ui.core.Element.prototype.addEventDelegate = function(oDelegate,oThis) { return new sap.ui.core.Element(); };

/**
 * 
 * Applies the focus info.
 * </p><p>
 * To be overwritten by the specific control method.
 * @param {object} oFocusInfo
 * @protected
 */
sap.ui.core.Element.prototype.applyFocusInfo = function(oFocusInfo) { return null; };

/**
 * 
 * Clone delegates
 * @param {string} [sIdSuffix] a suffix to be appended to the cloned element id
 * @param {Astring[]} [aLocalIds] an array of local IDs within the cloned hierarchy (internally used)
 * @return {sap.ui.base.ManagedObject} reference to the newly created clone
 * @protected
 */
sap.ui.core.Element.prototype.clone = function(sIdSuffix,aLocalIds) { return new sap.ui.base.ManagedObject(); };

/**
 * 
 * Creates a new Element from the given data.
 * </p><p>
 * If vData is an Element already, that element is returned.
 * If vData is an object (literal), then a new element is created with vData as settings.
 * The type of the element is either determined by a "Type" entry in the vData or
 * by a type information in the oKeyInfo object
 * @param {sap.ui.core.Element|object} vData the data to create the element from
 * @param {object} [oKeyInfo] an entity information (e.g. aggregation info)
 * @param {string} [oKeyInfo.type] type info for the entity
 * @public
 * @static
 */
sap.ui.core.Element.create = function(vData,oKeyInfo) { return null; };

/**
 * 
 * Attaches custom data to an Element or retrieves attached data.
 * </p><p>
 * Usage:
 *    data("myKey", myData)
 * attaches myData (which can be any JS data type, e.g. a number, a string, an object, or a function) to this element, under the given key "myKey". If the key already exists,the value will be updated.
 * </p><p>
 *    data("myKey", myData, writeToDom)
 * attaches myData to this element, under the given key "myKey" and (if writeToDom is true) writes key and value to the HTML. If the key already exists,the value will be updated. While oValue can be any JS data type to be attached, it must be a string to be also written to DOM. The key must also be a valid HTML attribute name (it must conform to sap.ui.core.ID and may contain no colon) and may not start with "sap-ui". When written to HTML, the key is prefixed with "data-".
 * </p><p>
 *    data("myKey")
 * retrieves whatever data has been attached to this Element (using the key "myKey") before
 * </p><p>
 *    data("myKey", null)
 * removes whatever data has been attached to this Element (using the key "myKey") before
 * </p><p>
 *    data(null)
 * removes all data
 * </p><p>
 *    data()
 * returns all data, as a map
 * @public
 */
sap.ui.core.Element.prototype.data = function() { return null; };

/**
 * 
 * Creates metadata for an UI Element by extending the Object Metadata.
 * </p><p>
 * In addition to the entries defined by {@link sap.ui.base.Object.defineClass}, the following
 * entries can be specified in the static info object:
 * </p><p>
 * <ul>
 * <li>library: {string} name of the library that contains the element/control
 * <li>properties: a map of property info objects, mapped by the property name
 *     Info object should contain the following information
 *     <ul>
 *     <li>name {string} name of the property (redundant to map key)
 *     <li>type {string} type of the property
 *     <li>[defaultValue] {any} default value of the property. Can be omitted
 *     </ul>
 * <li>aggregations: a map of aggregation info objects, mapped by the aggregation name
 *     Info object should contain the following information
 *     <ul>
 *     <li>name {string} name of the aggregation, singular for 0..1, plural for 0..n
 *     <li>type {string} type of the aggregated controls/elements
 *     <li>multiple {boolean}
 *     <li>singularName {string} singular name for 0..n aggregations
 *     </ul>
 * <li>associations: a map of association info objects, mapped by the association name
 *     Info object should contain the following information
 *     <ul>
 *     <li>name {string} name of the association, singular for 0..1, plural for 0..n
 *     <li>type {string} type of the associated controls/elements
 *     <li>multiple {boolean}
 *     <li>singularName {string} singular name for 0..n associations
 *     </ul>
 * <li>events: map from event names to event names
 * </ul>
 * @see sap.ui.core.Object.defineClass
 * @param {string} sClassName name of the class to build the metadata for
 * @param {object} oStaticInfo static information used to build the metadata
 * @param {function} [fnMetaImpl] constructor to be used for the metadata
 * @return {object} the created metadata
 * @static
 * @public
 * @deprecated Since 1.3.1. Use the static <code>extend</code> method of the desired base class (e.g. {@link sap.ui.core.Element.extend})
 */
sap.ui.core.Element.defineClass = function(sClassName,oStaticInfo,fnMetaImpl) { return new Object(); };

/**
 * 
 * Cleans up the resources associated with this element and all its children.
 * </p><p>
 * After an element has been destroyed, it can no longer be used in the UI!
 * </p><p>
 * Applications should call this method if they don't need the element any longer.
 * @param {boolean}
 *            [bSuppressInvalidate] if true, the UI element is not marked for redraw
 * @public
 */
sap.ui.core.Element.prototype.destroy = function(bSuppressInvalidate) { return null; };

/**
 * 
 * Destroys all the customData elements in the aggregation
 * named <code>customData</code>.
 * @return {sap.ui.core.Element} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.core.Element.prototype.destroyCustomData = function() { return new sap.ui.core.Element(); };

/**
 * 
 * Allows the parent of a control to enhance the aria information while rendering
 * </p><p>
 * This function is called in RenderManager writeAccessibilityState for the parent
 * of the control if the function is implemented by the parent.
 * @param {element} oElement the control/element for taht aria properties are rendered
 * @param {array} mAriaProps array of aria properties
 * @return {array} array of aria properties
 * @protected
 * @abstract
 */
sap.ui.core.Element.prototype.enhanceAccessibilityState = function(oElement,mAriaProps) { return null; };

/**
 * 
 * Cleans up the element instance before destruction.
 * </p><p>
 * Applications must not call this hook method directly, it is called by the framework
 * when the element is {@link #destroy destroyed}.
 * </p><p>
 * Subclasses of Element should override this hook to implement any necessary cleanup.
 * @protected
 */
sap.ui.core.Element.prototype.exit = function() { return null; };

/**
 * 
 * Creates a new subclass of class sap.ui.core.Element with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * </p><p>
 * <code>oClassInfo</code> might contain the following:
 * <ul>
 * <li><code>metadata:</code> an (optional) object literal containing meta information about the class.
 * The information in the object literal will be wrapped by an instance of ElementMetadata
 * and might contain the following information:
 * <ul>
 * <li>all values accepted for metadata as documented for the {@link sap.ui.base.Object.extend Object.extend} method</li>
 * <li>library: {string} (optional) name of the library that contains the element/control
 * <li>properties: a map of property info objects, mapped by the property name
 *     Each info object should be a simple object literal and may contain the following information
 *     <ul>
 *     <li>type {string} optional type of the property, defaults to type "string"
 *     <li>[defaultValue] {any} default value of the property. When omitted, defaults to the default value for the type
 *     <li>group {string} optional semantic group of the property. Defaults to "Misc"
 *     </ul>
 *     If the property info object is not an object literal, it is assumed to be a string and
 *     interpreted as the type of the property. All other informations use their default values.
 * <li>aggregations: a map of aggregation info objects, mapped by the aggregation name
 *     By convention, the name should be a singular name for aggregations of cardinality 0..1 and
 *     should be a plural name for aggregations of cardinality 0..n.
 * </p><p>
 *     The info object should contain the following information
 *     <ul>
 *     <li>type {string} (optional) type of the aggregated controls/elements, defaults to sap.ui.core.Control
 *     <li>altTypes {string[]} (optional) alternative primitive types that the aggregation can have (like string etc.). Defaults to no alternative types.
 *     <li>multiple {boolean} (optional) information about the cardinality, defaults to true (multiple aggregation)
 *     <li>singularName {string} (optional) singular name for 0..n aggregations. If not specified, a singular name is guessed from the plural name.
 *     </ul>
 *     If the aggregation info object is not an object literal, it is assumed to be a string and
 *     interpreted as the type of the aggregation. All other informations use their default values.
 * <li>associations: a map of association info objects, mapped by the association name
 *     By convention, the name should be a singular name for aggregations of cardinality 0..1 and
 *     should be a plural name for aggregations of cardinality 0..n.
 * </p><p>
 *     The info object should contain the following information
 *     <ul>
 *     <li>type {string} type of the associated controls/elements, defaults to sap.ui.core.Control
 *     <li>multiple {boolean} (optional) information about the cardinality, defaults to false (single aggregation)
 *     <li>singularName {string} (optional) singular name for 0..n aggregations. If not specified, a singular name is guessed from the plural name.
 *     </ul>
 *     If the association info object is not an object literal, it is assumed to be a string and
 *     interpreted as the type of the aggregation. All other informations then use their default values.
 * <li>events: a map of event info objects, mapped by the event name
 *     The info object can contain the following information
 *     <ul>
 *     <li><code>allowPreventDefault:</code> {boolean} whether the control allows to prevent its default behavior for this event (defaults to false) </li>
 *     </ul>
 * </ul>
 * For all properties, aggregations, associations and events, the usual access methods are created and added to the public facade.
 * They don't need to be listed in the publicMethods array.
 * </li>
 * </p><p>
 * <li><code>constructor:</code> a function that serves as a constructor function for the new element class.
 * If no constructor function is given, the framework creates a default implementation that delegates all
 * its arguments to the constructor function of the base class.
 * <b>Note:</b> most of the time, subclasses of Element don't need to specify their own constructor function.
 * They should use the symmetric {@link #init} and {@link #exit} hooks instead.
 * </li>
 * </p><p>
 * <li><code>renderer:</code> definition of a renderer. This can be any of the following
 * <ul>
 * <li>the class name of a renderer class (a string)</li>
 * <li>a render function with signature <code>function(oRenderManager, oControl)</code> that implements the rendering for the new class</li>
 * <li>an object literal that contains functions/properties that should be mixed into a new render class which is
 * created as a subclass of the renderer of the current class.</li>
 * </ul>
 * <b>Note:</b> usually only controls have a renderer. But to keep the control creation APIs simple and to honor future
 * extensions of the current policy, the definition of a renderer is supported for direct subclasses of Element as well.
 * </li>
 * </p><p>
 * <li><i>any-other-name:</i> any other property in the <code>oClassInfo</code> is copied into the prototype
 * object of the newly created class. Callers can thereby add methods or properties to all instances of the
 * class. But be aware that the given values are shared between all instances of the class. Usually, it doesn't
 * make sense to use primitive values here other than to declare public constants.
 * </p><p>
 * All methods added this way and whose name is not 'init' nor 'exit' nor does it start with an underscore ('_')
 * nor with the prefix 'on' are assumed to be public methods and are automatically added to the list of public facade methods.
 * </ul>
 * </p><p>
 * The prototype object of the newly created class uses the same prototype as instances of the base class
 * (prototype chaining).
 * </p><p>
 * A metadata object is always created, even if there is no <code>metadata</code> entry in the <code>oClassInfo</code>
 * object. A getter for the metadata is always attached to the prototype and to the class (constructor function)
 * itself.
 * </p><p>
 * Last but not least, with the third argument <code>FNMetaImpl</code> the constructor of a metadata class
 * can be specified. Instances of that class will be used to represent metadata for the newly created class
 * and for any subclass created from it. Typically, only frameworks will use this parameter to enrich the
 * metadata for a new class hierarchy they introduce (as done by  {@link sap.ui.core.Element Element}).
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] structured object with informations about the class
 * @param {function} [FNMetaImpl] constructor function for the metadata object. If not given, it defaults to sap.ui.core.ElementMetadata.
 * @return {function} the created class / constructor function
 * @public
 * @static
 * @since 1.3.1
 */
sap.ui.core.Element.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * 
 * Searches and returns an array of child elements and controls which are
 * referenced within an aggregation or aggregations of child elements/controls.
 * This can be either done recursive or not.
 * <br>
 * <b>Take care: this operation might be expensive.</b>
 * @param {boolean}
 *          bRecursive true, if all nested children should be returned.
 * @return {sap.ui.core.Element[]} array of child elements and controls
 * @public
 */
sap.ui.core.Element.prototype.findElements = function(bRecursive) { return new Array(); };

/**
 * 
 * Fires the given event and notifies all listeners. Listeners must not change
 * the content of the event.
 * @param {string} sEventId the event id
 * @param {object} mParameters the parameter map
 * @return {sap.ui.core.Element} Returns <code>this</code> to allow method chaining
 * @protected
 */
sap.ui.core.Element.prototype.fireEvent = function(sEventId,mParameters) { return new sap.ui.core.Element(); };

/**
 * 
 * Getter for aggregation <code>customData</code>.<br/>
 * @return {sap.ui.core.CustomData[]}
 * @public
 */
sap.ui.core.Element.prototype.getCustomData = function() { return new Array(); };

/**
 * 
 * Returns the best suitable DOM node that represents this Element.
 * By default the DOM node with the same ID as this Element is returned.
 * Subclasses should override this method if the lookup via id is not sufficient.
 * </p><p>
 * Note that such a DOM node does not necessarily exist in all cases.
 * Some elements or controls might not have a DOM representation at all (e.g.
 * a naive FlowLayout) while others might not have one due to their current
 * state (e.g. an initial, not yet rendered control).
 * @return {DOMNode} The element's DOM reference or null
 * @protected
 */
sap.ui.core.Element.prototype.getDomRef = function() { return null; };

/**
 * 
 * Returns the DOM reference that should get the focus.
 * </p><p>
 * To be overwritten by the specific control method.
 * @return {DOMNode} Returns the DOM reference that should get the focus
 * @protected
 */
sap.ui.core.Element.prototype.getFocusDomRef = function() { return null; };

/**
 * 
 * Returns an object representing the serialized focus information
 * To be overwritten by the specific control method
 * @type object
 * @return an object representing the serialized focus information
 * @protected
 */
sap.ui.core.Element.prototype.getFocusInfo = function() { return new Object(); };

/**
 * 
 * @see sap.ui.base.Object#getInterface
 * @public
 */
sap.ui.core.Element.prototype.getInterface = function() { return null; };

/**
 * 
 * Returns the {@link sap.ui.core.LayoutData} defining the layout constraints 
 * for this control when it is used inside a layout.
 * @public
 */
sap.ui.core.Element.prototype.getLayoutData = function() { return null; };

/**
 * 
 * Returns the runtime metadata for this UI element.
 * </p><p>
 * When using the defineClass method, this function is automatically created and returns
 * a runtime representation of the design time metadata.
 * @return {object} runtime metadata
 * @public
 */
sap.ui.core.Element.prototype.getMetadata = function() { return new Object(); };

/**
 * 
 * Returns the tooltip for this element if any or an undefined value.
 * The tooltip can either be a simple string or a subclass of
 * {@link sap.ui.core.TooltipBase}.
 * </p><p>
 * Callers that are only interested in tooltips of type string (e.g. to render
 * them as a <code>title</code> attribute), should call the convenience method
 * {@link #getTooltip_AsString} instead. If they want to get a tooltip text no
 * matter where it comes from (be it a string tooltip or the text from a TooltipBase
 * instance) then they could call {@link #getTooltip_Text} instead.
 * @return {string|sap.ui.core.TooltipBase} The tooltip for this Element.
 * @public
 */
sap.ui.core.Element.prototype.getTooltip = function() { return ""; };

/**
 * 
 * Returns the tooltip for this element but only if it is a simple string.
 * Otherwise an undefined value is returned.
 * @return {string} string tooltip or undefined
 * @public
 */
sap.ui.core.Element.prototype.getTooltip_AsString = function() { return ""; };

/**
 * 
 * Returns the main text for the current tooltip or undefined if there is no such text.
 * If the tooltip is an object derived from sap.ui.core.Tooltip, then the text property
 * of that object is returned. Otherwise the object itself is returned (either a string
 * or undefined or null).
 * @return {string} text of the current tooltip or undefined
 * @public
 */
sap.ui.core.Element.prototype.getTooltip_Text = function() { return ""; };

/**
 * 
 * Checks for the provided <code>sap.ui.core.CustomData</code> in the aggregation named <code>customData</code>
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.core.CustomData}
 *            oCustomData the customData whose index is looked for.
 * @return {int} the index of the provided customData element in the aggregation if found, or -1 otherwise
 * @public
 */
sap.ui.core.Element.prototype.indexOfCustomData = function(oCustomData) { return 0; };

/**
 * 
 * Initializes the element instance after creation.
 * </p><p>
 * Applications must not call this hook method directly, it is called by the framework
 * while the constructor of an element is executed.
 * </p><p>
 * Subclasses of Element should override this hook to implement any necessary initialization.
 * @protected
 */
sap.ui.core.Element.prototype.init = function() { return null; };

/**
 * 
 * Inserts a CustomData element into the aggregation named <code>customData</code>.
 * @param {sap.ui.core.CustomData}
 *          oCustomData the customData to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the customData should be inserted at; for
 *             a negative value of <code>iIndex</code>, the customData is inserted at position 0; for a value
 *             greater than the current size of the aggregation, the customData is inserted at
 *             the last position
 * @return {sap.ui.core.Element} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.core.Element.prototype.insertCustomData = function(oCustomData,iIndex) { return new sap.ui.core.Element(); };

/**
 * 
 * This function either calls set[sPropertyName] or get[sPropertyName] with the specified property name
 * depending if an <code>oValue</code> is provided or not.
 * @param {string}  sPropertyName name of the property to set
 * @param {any}     [oValue] value to set the property to
 * @return {any|sap.ui.core.Element} Returns <code>this</code> to allow method chaining in case of setter and the property value in case of getter
 * @public
 */
sap.ui.core.Element.prototype.prop = function(sPropertyName,oValue) { return null; };

/**
 * 
 * Removes all the data elements in the aggregation named <code>customData</code>.<br/>
 * @return {sap.ui.core.CustomData[]} an array of the removed data elements (might be empty)
 * @public
 */
sap.ui.core.Element.prototype.removeAllCustomData = function() { return new Array(); };

/**
 * 
 * Removes a CustomData element from the aggregation named <code>customData</code>.
 * @param {int | string | sap.ui.core.CustomData} vCustomData the customData to remove or its index or id
 * @return {sap.ui.core.CustomData} the removed customData element or null
 * @public
 */
sap.ui.core.Element.prototype.removeCustomData = function(vCustomData) { return new sap.ui.core.CustomData(); };

/**
 * 
 * Removes the given delegate from this element.
 * </p><p>
 * This method will remove all registrations of the given delegate, not only one.
 * @param {object} oDelegate the delegate object
 * @return {sap.ui.core.Element} Returns <code>this</code> to allow method chaining
 * @since 1.9.0
 * @public
 */
sap.ui.core.Element.prototype.removeEventDelegate = function(oDelegate) { return new sap.ui.core.Element(); };

/**
 * 
 * This triggers immediate rerendering of its parent and thus of itself and its children.<br/> As <code>sap.ui.core.Element</code> "bubbles up" the
 * rerender, changes to child-<code>Elements</code> will also result in immediate rerendering of the whole sub tree.
 * @protected
 */
sap.ui.core.Element.prototype.rerender = function() { return null; };

/**
 * 
 * Sets the {@link sap.ui.core.LayoutData} defining the layout constraints 
 * for this control when it is used inside a layout.
 * @public
 */
sap.ui.core.Element.prototype.setLayoutData = function() { return null; };

/**
 * 
 * Sets a new tooltip for this object. The tooltip can either be a simple string
 * (which in most cases will be rendered as the <code>title</code> attribute of this
 * Element) or an instance of {@link sap.ui.core.TooltipBase}.
 * </p><p>
 * If a new tooltip is set, any previously set tooltip is deactivated.
 * @param {string|sap.ui.core.TooltipBase} oTooltip.
 * @public
 */
sap.ui.core.Element.prototype.setTooltip = function() { return null; };

/**
 * 
 * Returns a simple string representation of this element.
 * </p><p>
 * Mainly useful for tracing purposes.
 * @public
 * @return {string} a string descripition of this element
 */
sap.ui.core.Element.prototype.toString = function() { return ""; };


// ---- sap.ui.core.EnabledPropagator --------------------------------------------------------------------------

/**
 * 
 * @class Helper Class for enhancement of a Control with propagation of enabled property.
 * </p><p>
 * <b>This constructor should be applied to the prototype of a control</b>
 * </p><p>
 * Example:
 * <code>
 * sap.ui.core.EnabledPropagator.call(<i>Some-Control</i>.prototype, <i>Default-value, ...</i>);
 * </code>
 * e.g.
 * <code>
 * sap.ui.core.EnabledPropagator.call(sap.ui.commons.Button.prototype);
 * </code>
 * @version 1.15.1-SNAPSHOT
 * @param {boolean} [bDefault=true] the value that should be used as default value for the enhancement of the control.
 * @param {boolean} [bLegacy=false] whether the introduced property should use the old name 'Enabled' 
 * @public
 */
sap.ui.core.EnabledPropagator = function(bDefault,bLegacy) {};

// ---- sap.ui.core.EventBus --------------------------------------------------------------------------

/**
 * 
 * Creates an instance of EventBus.
 * @class Provides eventing facilities, so subscribe, unsubscribe and publish events.
 * @extends sap.ui.base.Object
 * @version 1.15.1-SNAPSHOT
 * @constructor
 * @public
 * @since 1.8.0
 * 
 */
sap.ui.core.EventBus = function() {};
/**
 * 
 * @see sap.ui.base.Object#getInterface
 * @public
 */
sap.ui.core.EventBus.prototype.getInterface = function() { return null; };

/**
 * 
 * Fires the given event and notifies all listeners. Listeners must not change the content of the event.
 * </p><p>
 * The channel "sap.ui" is reserved by the UI5 framework. An application might listen to events 
 * on this channel but is not allowed to publish own events there.
 * @param {string}
 *            [sChannelId] The channel of the event; if not given the default channel is used
 * @param {string}
 *            sEventId The identifier of the event
 * @param {object}
 * 			  [oData] the parameter map
 * @public
 */
sap.ui.core.EventBus.prototype.publish = function(sChannelId,sEventId,oData) { return null; };

/**
 * 
 * Adds an event registration for the given object and given event name.
 * </p><p>
 * The channel "sap.ui" is reserved by th UI5 framework. An application might listen to events on this channel but is not allowed to publish own events there.
 * @param {string}
 *            [sChannelId] The channel of the event to subscribe for. If not given the default channel is used.
 * @param {string}
 *            sEventId The identifier of the event to subscribe for
 * @param {function}
 *            fnFunction The function to call, when the event occurs. This function will be called on the
 *            oListener-instance (if present) or on the event bus-instance. This functions might have the following parameters: sChannelId, sEventId, oData.
 * @param {object}
 *            [oListener] The object, that wants to be notified, when the event occurs
 * @return {sap.ui.core.EventBus} Returns <code>this</code> to allow method chaining
 * @public
 */
sap.ui.core.EventBus.prototype.subscribe = function(sChannelId,sEventId,fnFunction,oListener) { return new sap.ui.core.EventBus(); };

/**
 * 
 * Removes an event registration for the given object and given event name.
 * </p><p>
 * The passed parameters must match those used for registration with {@link #subscribe } beforehand!
 * @param {string}
 *            [sChannelId] The channel of the event to unsubscribe from. If not given the default channel is used.
 * @param {string}
 *            sEventId The identifier of the event to unsubscribe from
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            [oListener] The object, that wants to be notified, when the event occurs
 * @return {sap.ui.core.EventBus} Returns <code>this</code> to allow method chaining
 * @public
 */
sap.ui.core.EventBus.prototype.unsubscribe = function(sChannelId,sEventId,fnFunction,oListener) { return new sap.ui.core.EventBus(); };


// ---- sap.ui.core.format --------------------------------------------------------------------------


// ---- sap.ui.core.format.DateFormat --------------------------------------------------------------------------

/**
 * 
 * Constructor for DateFormat - must not be used: To get a DateFormat instance, please use getInstance, getDateTimeInstance or getTimeInstance.
 * @class
 * The DateFormat is a static class for formatting and parsing date and time values according
 * to a set of format options.
 * </p><p>
 * Supported format options are pattern based on Unicode LDML Date Format notation.
 * If no pattern is specified a default pattern according to the locale settings is used.
 * @public
 * @see http://unicode.org/reports/tr35/#Date_Field_Symbol_Table
 */
sap.ui.core.format.DateFormat = function() {};
/**
 * 
 * Format a date according to the given format options.
 * @param {Date} oValue the vale to format
 * @param {boolean} bUTC whether to use UTC
 * @return {string} the formatted output value
 * @public
 */
sap.ui.core.format.DateFormat.prototype.format = function(oValue,bUTC) { return ""; };

/**
 * 
 * Get a date instance of the DateFormat, which can be used for formatting.
 * @param {object} [oFormatOptions] Object which defines the format options
 * @param {string} [oFormatOptions.pattern] a data pattern in LDML format. It is not verified whether the pattern represents only a date.  
 * @param {string} [oFormatOptions.style] either empty or 'short, 'medium' or 'long'. If no pattern is given, a locale dependent default date pattern of that style is used from the LocaleData class.    
 * @param {sap.ui.core.Locale} [oLocale] Locale to ask for locale specific texts/settings
 * @return {sap.ui.core.format.DateFormat} date instance of the DateFormat
 * @static
 * @public
 */
sap.ui.core.format.DateFormat.getDateInstance = function(oFormatOptions,oLocale) { return new sap.ui.core.format.DateFormat(); };

/**
 * 
 * Get a datetime instance of the DateFormat, which can be used for formatting.
 * @param {object} [oFormatOptions] Object which defines the format options
 * @param {string} [oFormatOptions.pattern] a datetime pattern in LDML format. It is not verified whether the pattern represents a full datetime.  
 * @param {string} [oFormatOptions.style] either empty or 'short, 'medium' or 'long'. If no pattern is given, a locale dependent default datetime pattern of that style is used from the LocaleData class.    
 * @param {sap.ui.core.Locale} [oLocale] Locale to ask for locale specific texts/settings
 * @return {sap.ui.core.format.DateFormat} datetime instance of the DateFormat
 * @static
 * @public
 */
sap.ui.core.format.DateFormat.getDateTimeInstance = function(oFormatOptions,oLocale) { return new sap.ui.core.format.DateFormat(); };

/**
 * 
 * Get a time instance of the DateFormat, which can be used for formatting.
 * @param {object} [oFormatOptions] Object which defines the format options
 * @param {string} [oFormatOptions.pattern] a time pattern in LDML format. It is not verified whether the pattern only represents a time.  
 * @param {string} [oFormatOptions.style] either empty or 'short, 'medium' or 'long'. If no pattern is given, a locale dependent default time pattern of that style is used from the LocaleData class.    
 * @param {sap.ui.core.Locale} [oLocale] Locale to ask for locale specific texts/settings
 * @return {sap.ui.core.format.DateFormat} time instance of the DateFormat
 * @static
 * @public
 */
sap.ui.core.format.DateFormat.getTimeInstance = function(oFormatOptions,oLocale) { return new sap.ui.core.format.DateFormat(); };

/**
 * 
 * Parse a string which is formatted according to the given format options.
 * @param {string} sValue the string containing a formatted date/time value
 * @return {Date} the parsed value
 * @public
 */
sap.ui.core.format.DateFormat.prototype.parse = function(sValue) { return null; };


// ---- sap.ui.core.format.NumberFormat --------------------------------------------------------------------------

/**
 * 
 * Constructor for NumberFormat - must not be used: To get a NumberFormat instance, please use getInstance, getFloatInstance or getIntegerInstance.
 * @class
 * The NumberFormat is a static class for formatting and parsing numeric values according
 * to a set of format options.
 * </p><p>
 * Supported format options:
 * <ul>
 * <li>minIntegerDigits: minimal number of non-fraction digits</li>
 * <li>maxIntegerDigits: maximum number of non-fraction digits</li>
 * <li>minFractionDigits: minimal number of fraction digits</li>
 * <li>maxFractionDigits: maximum number of fraction digits</li>
 * <li>groupingEnabled: enable grouping (show the grouping separators</li>
 * <li>groupingSeparator: the used grouping separator</li>
 * <li>decimalSeparator: the used decimal separator</li>
 * <li>plusSign: the used plus symbol</li>
 * <li>minusSign: the used minus symbol</li>
 * </ul>
 * For format options which are not specified default values according to the type and locale settings are used.
 * @public
 * 
 */
sap.ui.core.format.NumberFormat = function() {};
/**
 * 
 * Format a number according to the given format options.
 * @param {number} oValue the number to format
 * @return {string} the formatted output value
 * @public
 */
sap.ui.core.format.NumberFormat.prototype.format = function(oValue) { return ""; };

/**
 * 
 * Get a float instance of the NumberFormat, which can be used for formatting.
 * @param {object} [oFormatOptions] Object which defines the format options
 * @return {sap.ui.core.format.NumberFormat} float instance of the NumberFormat
 * @static
 * @public
 */
sap.ui.core.format.NumberFormat.getFloatInstance = function(oFormatOptions,oLocale) { return new sap.ui.core.format.NumberFormat(); };

/**
 * 
 * Get an integer instance of the NumberFormat, which can be used for formatting.
 * @param {object} [oFormatOptions] Object which defines the format options
 * @return {sap.ui.core.format.NumberFormat} integer instance of the NumberFormat
 * @static
 * @public
 */
sap.ui.core.format.NumberFormat.getIntegerInstance = function(oFormatOptions,oLocale) { return new sap.ui.core.format.NumberFormat(); };

/**
 * 
 * Parse a string which is formatted according to the given format options.
 * @param {string} sValue the string containing a formatted numeric value
 * @return {number} the parsed value
 * @public
 */
sap.ui.core.format.NumberFormat.prototype.parse = function(sValue) { return 0.0; };


// ---- sap.ui.core.Fragment --------------------------------------------------------------------------

/**
 * 
 * Fragments support the definition of light-weight stand-alone UI control trees.
 * This class acts as factory which returns the UI control tree defined inside the Fragments. When used within declarative Views,
 * the Fragment content is imported and seamlessly integrated into the View.
 * </p><p>
 * Fragments are used similar as sap.ui.core.mvc.Views, but Fragments do not have a Controller on their own (they may know one, though),
 * they are not a Control, they are not part of the UI tree and they have no representation in HTML.
 * By default, in contrast to declarative Views, they do not do anything to guarantee ID uniqueness.
 * </p><p>
 * But like Views they can be defined in several Formats (XML, declarative HTML, JavaScript; support for other types can be plugged in),
 * the declaration syntax is the same as in declarative Views and the name and location of the Fragment files is similar to Views. 
 * Controller methods can also be referenced in the declarations, but as Fragments do not have their own controllers, 
 * this requires the Fragments to be used within a View which does have a controller.
 * That controller is used, then.
 * </p><p>
 * Do not call the Fragment constructor directly!
 * </p><p>
 * </p><p>
 * Use-cases for Fragments are e.g.:
 * - Modularization of UIs without fragmenting the controller structure
 * - Re-use of UI parts
 * - 100%-declarative definition of Views
 * @class Fragment
 * @extends sap.ui.base.ManagedObject
 * @version 1.15.1-SNAPSHOT
 * @public
 * @experimental Since 1.15.0. The entire Fragment concept is experimental. API and behavior may change without notice. 
 */
sap.ui.core.Fragment = function() {};
/**
 * 
 * Returns an Element/Control by its ID in the context of the Fragment with the given ID
 * @param {string} sFragmentId 
 * @param {string} sElementId 
 * @return Element by its ID and Fragment ID
 * @public
 * @static
 */
sap.ui.core.Fragment.byId = function(sFragmentId,sElementId) { return null; };

/**
 * 
 * Returns the ID which a Control with the given ID in the context of the Fragment with the given ID would have
 * @param {string} sFragmentId 
 * @param {string} sElementId 
 * @return the prefixed ID
 * @public
 * @static
 */
sap.ui.core.Fragment.createId = function(sFragmentId,sElementId) { return null; };

/**
 * 
 * Registers a new Fragment type
 * @param {string} sType the Fragment type. Types "XML", "HTML" and JS" are built-in and always available.
 * @param {object} oFragmentImpl an object having a property "init" of type "function" which is called on Fragment instantiation with the settings map as argument
 * @public
 */
sap.ui.core.Fragment.prototype.registerType = function(sType,oFragmentImpl) { return null; };


// ---- sap.ui.core.HorizontalAlign --------------------------------------------------------------------------

// dummy function to make Eclipse aware of namespace
sap.ui.core.HorizontalAlign.toString = function() { return ""; };

// ---- sap.ui.core.HTML --------------------------------------------------------------------------

/**
 * 
 * Constructor for a new HTML.
 * </p><p>
 * Accepts an object literal <code>mSettings</code> that defines initial 
 * property values, aggregated and associated objects as well as event handlers. 
 * </p><p>
 * If the name of a setting is ambiguous (e.g. a property has the same name as an event), 
 * then the framework assumes property, aggregation, association, event in that order. 
 * To override this automatic resolution, one of the prefixes "aggregation:", "association:" 
 * or "event:" can be added to the name of the setting (such a prefixed name must be
 * enclosed in single or double quotes).
 * </p><p>
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getContent content} : string</li>
 * <li>{@link #getPreferDOM preferDOM} : boolean (default: true)</li>
 * <li>{@link #getSanitizeContent sanitizeContent} : boolean (default: false)</li></ul>
 * </li>
 * <li>Aggregations
 * <ul></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link sap.ui.core.HTML#event:afterRendering afterRendering} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
 * </li>
 * </ul> 
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * Embeds standard HTML in a SAPUI5 control tree.
 * @extends sap.ui.core.Control
 * @version 1.15.1-SNAPSHOT
 * @constructor   
 * @public
 * 
 */
sap.ui.core.HTML = function(sId,mSettings) {};
/**
 * 
 * Fired after the HTML control has been rendered. Allows to manipulate the resulting DOM.
 * </p><p>
 * When the control doesn't have string content and no preserved DOM existed for this control, then this event will fire, but there won't be a DOM node for this control.
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {boolean} oControlEvent.getParameters.isPreservedDOM Whether the current DOM of the control has been preserved (true) or not (e.g. rendered from content property or it is an empty HTML control).
 * @public
 */
sap.ui.core.HTML.prototype.afterRendering = function(oControlEvent) { return null; };

/**
 * 
 * Attach event handler <code>fnFunction</code> to the 'afterRendering' event of this <code>sap.ui.core.HTML</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ui.core.HTML</code>.<br/> itself. 
 * </p><p>
 * Fired after the HTML control has been rendered. Allows to manipulate the resulting DOM.
 * </p><p>
 * When the control doesn't have string content and no preserved DOM existed for this control, then this event will fire, but there won't be a DOM node for this control.
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener=this] Context object to call the event handler with. Defaults to this <code>sap.ui.core.HTML</code>.<br/> itself.
 * @return {sap.ui.core.HTML} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.core.HTML.prototype.attachAfterRendering = function(oData,fnFunction,oListener) { return new sap.ui.core.HTML(); };

/**
 * 
 * Detach event handler <code>fnFunction</code> from the 'afterRendering' event of this <code>sap.ui.core.HTML</code>.<br/>
 * </p><p>
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.core.HTML} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.core.HTML.prototype.detachAfterRendering = function(fnFunction,oListener) { return new sap.ui.core.HTML(); };

/**
 * 
 * Creates a new subclass of class sap.ui.core.HTML with name <code>sClassName</code> 
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * </p><p>
 * <code>oClassInfo</code> might contain the same kind of informations as described in {@link sap.ui.core.Element.extend Element.extend}.
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class  
 * @param {function} [FNMetaImpl] constructor function for the metadata object. If not given, it defaults to sap.ui.core.ElementMetadata.
 * @return {function} the created class / constructor function
 * @public
 * @static
 * 
 */
sap.ui.core.HTML.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * 
 * Fire event afterRendering to attached listeners.
 * </p><p>
 * Expects following event parameters:
 * <ul>
 * <li>'isPreservedDOM' of type <code>boolean</code> Whether the current DOM of the control has been preserved (true) or not (e.g. rendered from content property or it is an empty HTML control).</li>
 * </ul>
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.core.HTML} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.ui.core.HTML.prototype.fireAfterRendering = function(mArguments) { return new sap.ui.core.HTML(); };

/**
 * 
 * Getter for property <code>content</code>.
 * HTML content to be displayed, defined as a string. The content is converted to DOM nodes with a call to <code>new jQuery(content)</code>, so any restrictions for the jQuery constructor apply to the content of the HTML control as well.
 * </p><p>
 * Some of these restrictions (there might be others!) are:
 * <ul>
 * <li>the content must be enclosed in tags, pure text is not supported. </li>
 * <li>if the content contains script tags, they will be executed but they will not appear in the resulting DOM tree. When the contained code tries to find the corresponding script tag, it will fail.</li>
 * </ul>
 * </p><p>
 * Please consider to consult the jQuery documentation as well.
 * </p><p>
 * The HTML control currently doesn't prevent the usage of multiple root nodes in its DOM content (e.g. setContent("<div/><div/>")), but this is not a guaranteed feature. The accepted content might be restricted to single root nodes in future versions. To notify applications about this fact, a warning is written in the log when multiple root nodes are used.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {string} the value of property <code>content</code>
 * @public
 * 
 */
sap.ui.core.HTML.prototype.getContent = function() { return ""; };

/**
 * 
 * @return {DOMNode} The element's DOM reference or null
 * @public
 */
sap.ui.core.HTML.prototype.getDomRef = function() { return null; };

/**
 * 
 * Getter for property <code>preferDOM</code>.
 * Whether existing DOM content is preferred over the given content string.
 * </p><p>
 * There are two scenarios where this flag is relevant (when set to true):
 * <ul>
 * <li>for the initial rendering: when an HTML control is added to an UIArea for the first time and if the root node of that UIArea contained DOM content with the same id as the HTML control, then that content will be used for rendering instead of any specified string content</li>
 * <li>any follow-up rendering: when an HTML control is rendered for the second or any later time and the preferDOM flag is set, then the DOM from the first rendering is preserved and not replaced by the string content</li>
 * </ul>
 * </p><p>
 * As preserving the existing DOM is the most common use case of the HTML control, the default value is true.
 * </p><p>
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>preferDOM</code>
 * @public
 * 
 */
sap.ui.core.HTML.prototype.getPreferDOM = function() { return false; };

/**
 * 
 * Getter for property <code>sanitizeContent</code>.
 * Whether to run the HTML sanitizer once the content (HTML markup) is applied or not. To configure allowed URLs please use the whitelist API via jQuery.sap.addUrlWhitelist.
 * </p><p>
 * Default value is <code>false</code>
 * @return {boolean} the value of property <code>sanitizeContent</code>
 * @public
 * 
 */
sap.ui.core.HTML.prototype.getSanitizeContent = function() { return false; };

/**
 * 
 * Setter for property <code>content</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {string} sContent  new value for property <code>content</code>
 * @return {sap.ui.core.HTML} <code>this</code> to allow method chaining
 * @public
 * @SecSink {,XSS} The content of the 'content' property is rendered 1:1 to allow the full flexibility of HTML in UI5 applications. 
 * 		Applications therefore must ensure, that they don't set malicious content (e.g. derived from user input). UI5 does not provide an HTML validation function. 
 * 		jQuery.sap.encodeHTML will encode any HTML relevant character, but this is in nearly all cases not what applications want here.
 * 
 */
sap.ui.core.HTML.prototype.setContent = function(sContent) { return new sap.ui.core.HTML(); };

/**
 * 
 * Sets some new DOM content for this HTML control. The content will replace the existing content
 * after the next rendering. Properties are not modified, but preferDOM should be set to true.
 * @param {DOMNode} oDom the new DOM content
 * @return this for chaining
 * @public
 */
sap.ui.core.HTML.prototype.setDOMContent = function(oDom) { return null; };

/**
 * 
 * Setter for property <code>preferDOM</code>.
 * </p><p>
 * Default value is <code>true</code> 
 * @param {boolean} bPreferDOM  new value for property <code>preferDOM</code>
 * @return {sap.ui.core.HTML} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.core.HTML.prototype.setPreferDOM = function(bPreferDOM) { return new sap.ui.core.HTML(); };

/**
 * 
 * Setter for property <code>sanitizeContent</code>.
 * </p><p>
 * Default value is <code>false</code> 
 * @param {boolean} bSanitizeContent  new value for property <code>sanitizeContent</code>
 * @return {sap.ui.core.HTML} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.core.HTML.prototype.setSanitizeContent = function(bSanitizeContent) { return new sap.ui.core.HTML(); };


// ---- sap.ui.core.Icon --------------------------------------------------------------------------

/**
 * 
 * Constructor for a new Icon.
 * </p><p>
 * Accepts an object literal <code>mSettings</code> that defines initial 
 * property values, aggregated and associated objects as well as event handlers. 
 * </p><p>
 * If the name of a setting is ambiguous (e.g. a property has the same name as an event), 
 * then the framework assumes property, aggregation, association, event in that order. 
 * To override this automatic resolution, one of the prefixes "aggregation:", "association:" 
 * or "event:" can be added to the name of the setting (such a prefixed name must be
 * enclosed in single or double quotes).
 * </p><p>
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getSrc src} : sap.ui.core.URI</li>
 * <li>{@link #getSize size} : sap.ui.core.CSSSize</li>
 * <li>{@link #getColor color} : sap.ui.core.CSSColor</li>
 * <li>{@link #getHoverColor hoverColor} : sap.ui.core.CSSColor</li>
 * <li>{@link #getActiveColor activeColor} : sap.ui.core.CSSColor</li>
 * <li>{@link #getWidth width} : sap.ui.core.CSSSize</li>
 * <li>{@link #getHeight height} : sap.ui.core.CSSSize</li>
 * <li>{@link #getBackgroundColor backgroundColor} : sap.ui.core.CSSColor</li>
 * <li>{@link #getHoverBackgroundColor hoverBackgroundColor} : sap.ui.core.CSSColor</li>
 * <li>{@link #getActiveBackgroundColor activeBackgroundColor} : sap.ui.core.CSSColor</li>
 * <li>{@link #getVisible visible} : boolean (default: true)</li></ul>
 * </li>
 * <li>Aggregations
 * <ul></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link sap.ui.core.Icon#event:press press} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
 * </li>
 * </ul> 
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * Icon uses embeded font instead of pixel image. Comparing to image, Icon is easily scalable, color can be altered live and various effects can be added using css.
 * </p><p>
 * A set of built in Icons is available and they can be fetched by calling sap.ui.core.IconPool.getIconURI and set this value to the src property on the Icon.
 * @extends sap.ui.core.Control
 * @version 1.15.1-SNAPSHOT
 * @constructor   
 * @public
 * @since 1.11.1
 * 
 */
sap.ui.core.Icon = function(sId,mSettings) {};
/**
 * 
 * This event is fired when icon is pressed/activated by the user. 
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 */
sap.ui.core.Icon.prototype.press = function(oControlEvent) { return null; };

/**
 * 
 * Attach event handler <code>fnFunction</code> to the 'press' event of this <code>sap.ui.core.Icon</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ui.core.Icon</code>.<br/> itself. 
 * </p><p>
 * This event is fired when icon is pressed/activated by the user. 
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener=this] Context object to call the event handler with. Defaults to this <code>sap.ui.core.Icon</code>.<br/> itself.
 * @return {sap.ui.core.Icon} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.core.Icon.prototype.attachPress = function(oData,fnFunction,oListener) { return new sap.ui.core.Icon(); };

/**
 * 
 * Detach event handler <code>fnFunction</code> from the 'press' event of this <code>sap.ui.core.Icon</code>.<br/>
 * </p><p>
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.core.Icon} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.core.Icon.prototype.detachPress = function(fnFunction,oListener) { return new sap.ui.core.Icon(); };

/**
 * 
 * Creates a new subclass of class sap.ui.core.Icon with name <code>sClassName</code> 
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * </p><p>
 * <code>oClassInfo</code> might contain the same kind of informations as described in {@link sap.ui.core.Element.extend Element.extend}.
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class  
 * @param {function} [FNMetaImpl] constructor function for the metadata object. If not given, it defaults to sap.ui.core.ElementMetadata.
 * @return {function} the created class / constructor function
 * @public
 * @static
 * 
 */
sap.ui.core.Icon.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * 
 * Fire event press to attached listeners.
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.core.Icon} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.ui.core.Icon.prototype.firePress = function(mArguments) { return new sap.ui.core.Icon(); };

/**
 * 
 * Getter for property <code>activeBackgroundColor</code>.
 * Background color for Icon in active state.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {sap.ui.core.CSSColor} the value of property <code>activeBackgroundColor</code>
 * @public
 * 
 */
sap.ui.core.Icon.prototype.getActiveBackgroundColor = function() { return new sap.ui.core.CSSColor(); };

/**
 * 
 * Getter for property <code>activeColor</code>.
 * This color is shown when icon is pressed/activated by the user.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {sap.ui.core.CSSColor} the value of property <code>activeColor</code>
 * @public
 * 
 */
sap.ui.core.Icon.prototype.getActiveColor = function() { return new sap.ui.core.CSSColor(); };

/**
 * 
 * Getter for property <code>backgroundColor</code>.
 * Background color of the Icon in normal state.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {sap.ui.core.CSSColor} the value of property <code>backgroundColor</code>
 * @public
 * 
 */
sap.ui.core.Icon.prototype.getBackgroundColor = function() { return new sap.ui.core.CSSColor(); };

/**
 * 
 * Getter for property <code>color</code>.
 * The color of the Icon. If color is not defined here, the Icon inherits the color from its DOM parent.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {sap.ui.core.CSSColor} the value of property <code>color</code>
 * @public
 * 
 */
sap.ui.core.Icon.prototype.getColor = function() { return new sap.ui.core.CSSColor(); };

/**
 * 
 * Getter for property <code>height</code>.
 * This is the height of the DOM element which contains the Icon. Setting this property doesn't affect the size of the font. If you want to make the font bigger, increase the size property.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {sap.ui.core.CSSSize} the value of property <code>height</code>
 * @public
 * 
 */
sap.ui.core.Icon.prototype.getHeight = function() { return new sap.ui.core.CSSSize(); };

/**
 * 
 * Getter for property <code>hoverBackgroundColor</code>.
 * Background color for Icon in hover state. This property has no visual effect when run on mobile device.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {sap.ui.core.CSSColor} the value of property <code>hoverBackgroundColor</code>
 * @public
 * 
 */
sap.ui.core.Icon.prototype.getHoverBackgroundColor = function() { return new sap.ui.core.CSSColor(); };

/**
 * 
 * Getter for property <code>hoverColor</code>.
 * This color is shown when icon is hovered. This property has no visual effect when run on mobile device.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {sap.ui.core.CSSColor} the value of property <code>hoverColor</code>
 * @public
 * 
 */
sap.ui.core.Icon.prototype.getHoverColor = function() { return new sap.ui.core.CSSColor(); };

/**
 * 
 * Getter for property <code>size</code>.
 * Since Icon uses font, this property will be applied to the css font-size property on the rendered DOM element.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {sap.ui.core.CSSSize} the value of property <code>size</code>
 * @public
 * 
 */
sap.ui.core.Icon.prototype.getSize = function() { return new sap.ui.core.CSSSize(); };

/**
 * 
 * Getter for property <code>src</code>.
 * This property should be set by the return value of calling sap.ui.core.IconPool.getIconURI with a Icon name parameter and an optional collection parameter which is required when using application extended Icons. A list of standard FontIcon is available here.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {sap.ui.core.URI} the value of property <code>src</code>
 * @public
 * 
 */
sap.ui.core.Icon.prototype.getSrc = function() { return new sap.ui.core.URI(); };

/**
 * 
 * Getter for property <code>visible</code>.
 * An invisible icon is not rendered
 * </p><p>
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>visible</code>
 * @public
 * 
 */
sap.ui.core.Icon.prototype.getVisible = function() { return false; };

/**
 * 
 * Getter for property <code>width</code>.
 * This is the width of the DOM element which contains the Icon. Setting this property doesn't affect the size of the font. If you want to make the font bigger, increase the size property.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {sap.ui.core.CSSSize} the value of property <code>width</code>
 * @public
 * 
 */
sap.ui.core.Icon.prototype.getWidth = function() { return new sap.ui.core.CSSSize(); };

/**
 * 
 * Setter for property <code>activeBackgroundColor</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {sap.ui.core.CSSColor} sActiveBackgroundColor  new value for property <code>activeBackgroundColor</code>
 * @return {sap.ui.core.Icon} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.core.Icon.prototype.setActiveBackgroundColor = function(sActiveBackgroundColor) { return new sap.ui.core.Icon(); };

/**
 * 
 * Setter for property <code>activeColor</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {sap.ui.core.CSSColor} sActiveColor  new value for property <code>activeColor</code>
 * @return {sap.ui.core.Icon} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.core.Icon.prototype.setActiveColor = function(sActiveColor) { return new sap.ui.core.Icon(); };

/**
 * 
 * Setter for property <code>backgroundColor</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {sap.ui.core.CSSColor} sBackgroundColor  new value for property <code>backgroundColor</code>
 * @return {sap.ui.core.Icon} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.core.Icon.prototype.setBackgroundColor = function(sBackgroundColor) { return new sap.ui.core.Icon(); };

/**
 * 
 * Setter for property <code>color</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {sap.ui.core.CSSColor} sColor  new value for property <code>color</code>
 * @return {sap.ui.core.Icon} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.core.Icon.prototype.setColor = function(sColor) { return new sap.ui.core.Icon(); };

/**
 * 
 * Setter for property <code>height</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {sap.ui.core.CSSSize} sHeight  new value for property <code>height</code>
 * @return {sap.ui.core.Icon} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.core.Icon.prototype.setHeight = function(sHeight) { return new sap.ui.core.Icon(); };

/**
 * 
 * Setter for property <code>hoverBackgroundColor</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {sap.ui.core.CSSColor} sHoverBackgroundColor  new value for property <code>hoverBackgroundColor</code>
 * @return {sap.ui.core.Icon} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.core.Icon.prototype.setHoverBackgroundColor = function(sHoverBackgroundColor) { return new sap.ui.core.Icon(); };

/**
 * 
 * Setter for property <code>hoverColor</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {sap.ui.core.CSSColor} sHoverColor  new value for property <code>hoverColor</code>
 * @return {sap.ui.core.Icon} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.core.Icon.prototype.setHoverColor = function(sHoverColor) { return new sap.ui.core.Icon(); };

/**
 * 
 * Setter for property <code>size</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {sap.ui.core.CSSSize} sSize  new value for property <code>size</code>
 * @return {sap.ui.core.Icon} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.core.Icon.prototype.setSize = function(sSize) { return new sap.ui.core.Icon(); };

/**
 * 
 * Setter for property <code>src</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {sap.ui.core.URI} sSrc  new value for property <code>src</code>
 * @return {sap.ui.core.Icon} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.core.Icon.prototype.setSrc = function(sSrc) { return new sap.ui.core.Icon(); };

/**
 * 
 * Setter for property <code>visible</code>.
 * </p><p>
 * Default value is <code>true</code> 
 * @param {boolean} bVisible  new value for property <code>visible</code>
 * @return {sap.ui.core.Icon} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.core.Icon.prototype.setVisible = function(bVisible) { return new sap.ui.core.Icon(); };

/**
 * 
 * Setter for property <code>width</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {sap.ui.core.CSSSize} sWidth  new value for property <code>width</code>
 * @return {sap.ui.core.Icon} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.core.Icon.prototype.setWidth = function(sWidth) { return new sap.ui.core.Icon(); };


// ---- sap.ui.core.IconColor --------------------------------------------------------------------------

// dummy function to make Eclipse aware of namespace
sap.ui.core.IconColor.toString = function() { return ""; };

// ---- sap.ui.core.IconPool --------------------------------------------------------------------------

/**
 * 
 * Constructor for IconPool - must not be used: all of the methods that are under IconPool are static methods.
 * @class
 * The IconPool is a static class for retrieving or registering icons.
 * It also provides helping methods for easier consumption of icons.
 * There are already icons registered in IconPool, please follow this link and find the name of the icon:
 * 1. If you use the icon inside existing control, please call sap.ui.core.IconPool.getIconURI and assign the URI to controls which support icon.
 * 2. If you want to support icon and standard image in your own control, please call createControlByURI by giving the URI and a constructor when URI isn't a icon URI. Icon instance or instance created by calling the given constructor is returned.
 * @public
 */
sap.ui.core.IconPool = function() {};
/**
 * 
 * Register an additional icon to the sap.ui.core.IconPool.
 * @param {string} iconName the name of the icon.
 * @param {string} collectionName the name of icon collection. The built in icons are with empty collectionName, so if additional icons need to be registered in IconPool, the collectionName can't be empty.  
 * @param {string} fontFamily is the name of the font when importing the font using @font-face in CSS
 * @param {string} content is the special code without the prefix, for example "e000"
 * @param {boolean} [overWrite] indicates if already registered icons should be overwritten when the same name and collection are given. The built in icons can never be overwritten.
 * @param {boolean} [skipMirroring=false] indicates whether this icon should NOT be mirrored in right to left mode.
 * @return {object} the info object of the registered icon which has the uri, fontFamily and content properties.
 * @static
 * @public
 */
sap.ui.core.IconPool.addIcon = function(iconName,collectionName,fontFamily,content,overWrite,skipMirroring) { return new Object(); };

/**
 * 
 * Creates an instance of sap.ui.core.Icon if the given URI is an icon URI, otherwise the given constructor is called.
 * The given URI is set to the src property of the control.
 * @param {string|object} setting contains the properties which will be used to instantiate the returned control. It should contain at least a property named src. If it's given with a string type, it will be taken as the value of src property.
 * @param {function} constructor the constructor function which is called when the given URI isn't an icon URI
 * @return {sap.ui.core.Control} either an instance of sap.ui.core.Icon or instance created by calling the given constructor
 * @static
 * @public
 */
sap.ui.core.IconPool.createControlByURI = function(setting,constructor) { return new sap.ui.core.Control(); };

/**
 * 
 * Returns all names of registered collections in IconPool
 * @return {array} An array contains all of the registered collections' names. 
 * @static
 * @public
 */
sap.ui.core.IconPool.getIconCollectionNames = function() { return null; };

/**
 * 
 * Returns the info object of the icon which has the same given iconName and collectionName.
 * @param {string} iconName the name of the icon.
 * @param {string} collectionName the name of icon collection. The built in icons are with undefined collectionName, so if the built in icons need to be used, just ignore this parameter.
 * @return {object} the info object of the registered icon which has the uri, fontFamily and content properties. 
 * @static
 * @public
 */
sap.ui.core.IconPool.getIconInfo = function(iconName,collectionName) { return new Object(); };

/**
 * 
 * Returns all name of icons that are registerd under the given collection.
 * @param {string} collectionName the name of collection where icon names are retrieved.
 * @return {array} An array contains all of the registered icon names under the given collection. 
 * @static
 * @public
 */
sap.ui.core.IconPool.getIconNames = function(collectionName) { return null; };

/**
 * 
 * Returns the URI of the icon which has the same given iconName and collectionName.
 * @param {string} iconName the name of the icon.
 * @param {string} collectionName the name of icon collection. The built in icons are with undefined collectionName, so if the built in icons need to be used, just ignore this parameter.
 * @return {string} the URI of the icon. if the icon can't be found in IconPool, undefined is returned. 
 * @static
 * @public
 */
sap.ui.core.IconPool.getIconURI = function(iconName,collectionName) { return ""; };

/**
 * 
 * Returns If the given uri is an icon URI.
 * @param {string} uri the icon uri which is in the format "sap-icon://collectionName/iconName"
 * @return {boolean} if the uri follows the icon uri format. 
 * @static
 * @public
 */
sap.ui.core.IconPool.isIconURI = function(uri) { return false; };


// ---- sap.ui.core.ID --------------------------------------------------------------------------


// ---- sap.ui.core.ImeMode --------------------------------------------------------------------------

// dummy function to make Eclipse aware of namespace
sap.ui.core.ImeMode.toString = function() { return ""; };

// ---- sap.ui.core.IntervalTrigger --------------------------------------------------------------------------

/**
 * 
 * Creates an instance of EventBus.
 * @class Provides a trigger that triggers in a set interval and calls all
 *        registered listeners. If the interval is <= 0 the trigger is
 *        switched off and won't trigger at all.
 * @param {int}
 *            iInterval is the interval the trigger should be used. If the
 *            trigger is >0 triggering starts/runs and if the interval is
 *            set to <=0 triggering stops.
 * @extends sap.ui.base.Object
 * @version 1.15.1-SNAPSHOT
 * @constructor
 * @public
 * @since 1.11.0
 * 
 */
sap.ui.core.IntervalTrigger = function(iInterval) {};
/**
 * 
 * Adds a listener to the list that should be triggered.
 * @public
 * @param {function}
 *            fnFunction is the called function that should be called when
 *            the trigger want to trigger the listener.
 * @param {object}
 *            [oListener] that should be triggered.
 */
sap.ui.core.IntervalTrigger.prototype.addListener = function(fnFunction,oListener) { return null; };

/**
 * 
 * Destructor method for objects.
 * @public
 */
sap.ui.core.IntervalTrigger.prototype.destroy = function() { return null; };

/**
 * 
 * @see sap.ui.base.Object#getInterface
 * @public
 */
sap.ui.core.IntervalTrigger.prototype.getInterface = function() { return null; };

/**
 * 
 * Removes corresponding listener from list.
 * @public
 * @param {function}
 *            fnFunction is the previously registered function
 * @param {object}
 *            [oListener] that should be removed
 */
sap.ui.core.IntervalTrigger.prototype.removeListener = function(fnFunction,oListener) { return null; };

/**
 * 
 * Sets the trigger interval. If the value is >0 triggering will start if
 * there are any registered listeners. If the interval is set to <=0
 * triggering will stop.
 * @public
 * @param {int}
 *            iInterval sets the interval in milliseconds when a new
 *            triggering should occur.
 */
sap.ui.core.IntervalTrigger.prototype.setInterval = function(iInterval) { return null; };


// ---- sap.ui.core.Item --------------------------------------------------------------------------

/**
 * 
 * Constructor for a new Item.
 * </p><p>
 * Accepts an object literal <code>mSettings</code> that defines initial 
 * property values, aggregated and associated objects as well as event handlers. 
 * </p><p>
 * If the name of a setting is ambiguous (e.g. a property has the same name as an event), 
 * then the framework assumes property, aggregation, association, event in that order. 
 * To override this automatic resolution, one of the prefixes "aggregation:", "association:" 
 * or "event:" can be added to the name of the setting (such a prefixed name must be
 * enclosed in single or double quotes).
 * </p><p>
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getText text} : string (default: "")</li>
 * <li>{@link #getEnabled enabled} : boolean (default: true)</li>
 * <li>{@link #getTextDirection textDirection} : sap.ui.core.TextDirection (default: sap.ui.core.TextDirection.Inherit)</li>
 * <li>{@link #getKey key} : string</li></ul>
 * </li>
 * <li>Aggregations
 * <ul></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul></ul>
 * </li>
 * </ul> 
 * </p><p>
 * </p><p>
 * In addition, all settings applicable to the base type {@link sap.ui.core.Element#constructor sap.ui.core.Element}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * A control base type.
 * @extends sap.ui.core.Element
 * @version 1.15.1-SNAPSHOT
 * @constructor   
 * @public
 * 
 */
sap.ui.core.Item = function(sId,mSettings) {};
/**
 * 
 * Creates a new subclass of class sap.ui.core.Item with name <code>sClassName</code> 
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * </p><p>
 * <code>oClassInfo</code> might contain the same kind of informations as described in {@link sap.ui.core.Element.extend Element.extend}.
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class  
 * @param {function} [FNMetaImpl] constructor function for the metadata object. If not given, it defaults to sap.ui.core.ElementMetadata.
 * @return {function} the created class / constructor function
 * @public
 * @static
 * 
 */
sap.ui.core.Item.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * 
 * Getter for property <code>enabled</code>.
 * Enabled items can be selected.
 * </p><p>
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>enabled</code>
 * @public
 * 
 */
sap.ui.core.Item.prototype.getEnabled = function() { return false; };

/**
 * 
 * Getter for property <code>key</code>.
 * Can be used as input for subsequent actions.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {string} the value of property <code>key</code>
 * @public
 * 
 */
sap.ui.core.Item.prototype.getKey = function() { return ""; };

/**
 * 
 * Getter for property <code>text</code>.
 * The text to be displayed for the item.
 * </p><p>
 * Default value is <code>""</code>
 * @return {string} the value of property <code>text</code>
 * @public
 * 
 */
sap.ui.core.Item.prototype.getText = function() { return ""; };

/**
 * 
 * Getter for property <code>textDirection</code>.
 * Options are RTL and LTR. Alternatively, an item can inherit its text direction from its parent control.
 * </p><p>
 * Default value is <code>Inherit</code>
 * @return {sap.ui.core.TextDirection} the value of property <code>textDirection</code>
 * @public
 * 
 */
sap.ui.core.Item.prototype.getTextDirection = function() { return new sap.ui.core.TextDirection(); };

/**
 * 
 * Setter for property <code>enabled</code>.
 * </p><p>
 * Default value is <code>true</code> 
 * @param {boolean} bEnabled  new value for property <code>enabled</code>
 * @return {sap.ui.core.Item} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.core.Item.prototype.setEnabled = function(bEnabled) { return new sap.ui.core.Item(); };

/**
 * 
 * Setter for property <code>key</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {string} sKey  new value for property <code>key</code>
 * @return {sap.ui.core.Item} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.core.Item.prototype.setKey = function(sKey) { return new sap.ui.core.Item(); };

/**
 * 
 * Setter for property <code>text</code>.
 * </p><p>
 * Default value is <code>""</code> 
 * @param {string} sText  new value for property <code>text</code>
 * @return {sap.ui.core.Item} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.core.Item.prototype.setText = function(sText) { return new sap.ui.core.Item(); };

/**
 * 
 * Setter for property <code>textDirection</code>.
 * </p><p>
 * Default value is <code>Inherit</code> 
 * @param {sap.ui.core.TextDirection} oTextDirection  new value for property <code>textDirection</code>
 * @return {sap.ui.core.Item} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.core.Item.prototype.setTextDirection = function(oTextDirection) { return new sap.ui.core.Item(); };


// ---- sap.ui.core.Label --------------------------------------------------------------------------


// ---- sap.ui.core.LayoutData --------------------------------------------------------------------------

/**
 * 
 * Constructor for a new LayoutData.
 * </p><p>
 * Accepts an object literal <code>mSettings</code> that defines initial 
 * property values, aggregated and associated objects as well as event handlers. 
 * </p><p>
 * If the name of a setting is ambiguous (e.g. a property has the same name as an event), 
 * then the framework assumes property, aggregation, association, event in that order. 
 * To override this automatic resolution, one of the prefixes "aggregation:", "association:" 
 * or "event:" can be added to the name of the setting (such a prefixed name must be
 * enclosed in single or double quotes).
 * </p><p>
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul></ul>
 * </li>
 * <li>Aggregations
 * <ul></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul></ul>
 * </li>
 * </ul> 
 * </p><p>
 * </p><p>
 * In addition, all settings applicable to the base type {@link sap.ui.core.Element#constructor sap.ui.core.Element}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * A layout data base type.
 * @extends sap.ui.core.Element
 * @version 1.15.1-SNAPSHOT
 * @constructor   
 * @public
 * 
 */
sap.ui.core.LayoutData = function(sId,mSettings) {};
/**
 * 
 * Creates a new subclass of class sap.ui.core.LayoutData with name <code>sClassName</code> 
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * </p><p>
 * <code>oClassInfo</code> might contain the same kind of informations as described in {@link sap.ui.core.Element.extend Element.extend}.
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class  
 * @param {function} [FNMetaImpl] constructor function for the metadata object. If not given, it defaults to sap.ui.core.ElementMetadata.
 * @return {function} the created class / constructor function
 * @public
 * @static
 * 
 */
sap.ui.core.LayoutData.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };


// ---- sap.ui.core.ListItem --------------------------------------------------------------------------

/**
 * 
 * Constructor for a new ListItem.
 * </p><p>
 * Accepts an object literal <code>mSettings</code> that defines initial 
 * property values, aggregated and associated objects as well as event handlers. 
 * </p><p>
 * If the name of a setting is ambiguous (e.g. a property has the same name as an event), 
 * then the framework assumes property, aggregation, association, event in that order. 
 * To override this automatic resolution, one of the prefixes "aggregation:", "association:" 
 * or "event:" can be added to the name of the setting (such a prefixed name must be
 * enclosed in single or double quotes).
 * </p><p>
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getIcon icon} : string</li>
 * <li>{@link #getAdditionalText additionalText} : string</li></ul>
 * </li>
 * <li>Aggregations
 * <ul></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul></ul>
 * </li>
 * </ul> 
 * </p><p>
 * </p><p>
 * In addition, all settings applicable to the base type {@link sap.ui.core.Item#constructor sap.ui.core.Item}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * An item that is used in lists or list-similar controls such as DropdownBox, for example.
 * The element foresees the usage of additional texts displayed in a second column.
 * @extends sap.ui.core.Item
 * @version 1.15.1-SNAPSHOT
 * @constructor   
 * @public
 * 
 */
sap.ui.core.ListItem = function(sId,mSettings) {};
/**
 * 
 * Creates a new subclass of class sap.ui.core.ListItem with name <code>sClassName</code> 
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * </p><p>
 * <code>oClassInfo</code> might contain the same kind of informations as described in {@link sap.ui.core.Element.extend Element.extend}.
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class  
 * @param {function} [FNMetaImpl] constructor function for the metadata object. If not given, it defaults to sap.ui.core.ElementMetadata.
 * @return {function} the created class / constructor function
 * @public
 * @static
 * 
 */
sap.ui.core.ListItem.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * 
 * Getter for property <code>additionalText</code>.
 * Some additional text of type string, optionally to be displayed along with this item.
 * </p><p>
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {string} the value of property <code>additionalText</code>
 * @public
 * 
 */
sap.ui.core.ListItem.prototype.getAdditionalText = function() { return ""; };

/**
 * 
 * Getter for property <code>icon</code>.
 * The icon belonging to this list item instance.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {string} the value of property <code>icon</code>
 * @public
 * 
 */
sap.ui.core.ListItem.prototype.getIcon = function() { return ""; };

/**
 * 
 * Setter for property <code>additionalText</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {string} sAdditionalText  new value for property <code>additionalText</code>
 * @return {sap.ui.core.ListItem} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.core.ListItem.prototype.setAdditionalText = function(sAdditionalText) { return new sap.ui.core.ListItem(); };

/**
 * 
 * Setter for property <code>icon</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {string} sIcon  new value for property <code>icon</code>
 * @return {sap.ui.core.ListItem} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.core.ListItem.prototype.setIcon = function(sIcon) { return new sap.ui.core.ListItem(); };


// ---- sap.ui.core.LocalBusyIndicator --------------------------------------------------------------------------

/**
 * 
 * Constructor for a new LocalBusyIndicator.
 * </p><p>
 * Accepts an object literal <code>mSettings</code> that defines initial 
 * property values, aggregated and associated objects as well as event handlers. 
 * </p><p>
 * If the name of a setting is ambiguous (e.g. a property has the same name as an event), 
 * then the framework assumes property, aggregation, association, event in that order. 
 * To override this automatic resolution, one of the prefixes "aggregation:", "association:" 
 * or "event:" can be added to the name of the setting (such a prefixed name must be
 * enclosed in single or double quotes).
 * </p><p>
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getWidth width} : sap.ui.core.CSSSize (default: '100px')</li>
 * <li>{@link #getHeight height} : sap.ui.core.CSSSize (default: '100px')</li></ul>
 * </li>
 * <li>Aggregations
 * <ul></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul></ul>
 * </li>
 * </ul> 
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * The LocalBusyIndicator is a special version of the
 * BusyIndicator. This one doesn't block the whole screen - it just
 * blocks the corresponding control and puts a local animation over the
 * control. To use the functionality of this control the corresponding
 * control needs to be enabled via the 'LocalBusyIndicatorSupport'
 * accordingly to the ListBox control (see the init-function of the
 * ListBox).
 * @extends sap.ui.core.Control
 * @version 1.15.1-SNAPSHOT
 * @constructor   
 * @public
 * @since 1.11.0
 * @deprecated Since version 1.14.2. 
 * The LocalBusyIndicator Control is not needed anymore by the new implementation of the LBI. Hence, it is not used anymore.
 * 
 */
sap.ui.core.LocalBusyIndicator = function(sId,mSettings) {};
/**
 * 
 * Creates a new subclass of class sap.ui.core.LocalBusyIndicator with name <code>sClassName</code> 
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * </p><p>
 * <code>oClassInfo</code> might contain the same kind of informations as described in {@link sap.ui.core.Element.extend Element.extend}.
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class  
 * @param {function} [FNMetaImpl] constructor function for the metadata object. If not given, it defaults to sap.ui.core.ElementMetadata.
 * @return {function} the created class / constructor function
 * @public
 * @static
 * 
 */
sap.ui.core.LocalBusyIndicator.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * 
 * Getter for property <code>height</code>.
 * This property is the height of the control that has to
 * be covered. With this height the position of the animation can be
 * properly set.
 * </p><p>
 * </p><p>
 * Default value is <code>100px</code>
 * @return {sap.ui.core.CSSSize} the value of property <code>height</code>
 * @public
 * 
 */
sap.ui.core.LocalBusyIndicator.prototype.getHeight = function() { return new sap.ui.core.CSSSize(); };

/**
 * 
 * Getter for property <code>width</code>.
 * This property is the width of the control that has to
 * be covered. With this width the position of the animation can be
 * properly set.
 * </p><p>
 * </p><p>
 * Default value is <code>100px</code>
 * @return {sap.ui.core.CSSSize} the value of property <code>width</code>
 * @public
 * 
 */
sap.ui.core.LocalBusyIndicator.prototype.getWidth = function() { return new sap.ui.core.CSSSize(); };

/**
 * 
 * Setter for property <code>height</code>.
 * </p><p>
 * Default value is <code>100px</code> 
 * @param {sap.ui.core.CSSSize} sHeight  new value for property <code>height</code>
 * @return {sap.ui.core.LocalBusyIndicator} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.core.LocalBusyIndicator.prototype.setHeight = function(sHeight) { return new sap.ui.core.LocalBusyIndicator(); };

/**
 * 
 * Setter for property <code>width</code>.
 * </p><p>
 * Default value is <code>100px</code> 
 * @param {sap.ui.core.CSSSize} sWidth  new value for property <code>width</code>
 * @return {sap.ui.core.LocalBusyIndicator} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.core.LocalBusyIndicator.prototype.setWidth = function(sWidth) { return new sap.ui.core.LocalBusyIndicator(); };


// ---- sap.ui.core.Locale --------------------------------------------------------------------------

/**
 * 
 * Creates an instance of the Locale.
 * @class Locale represents a locale setting, consisting of a language, script, region, variants, extensions and private use section
 * @param {string} sLocaleId the locale identifier, in format en-US or en_US.
 * @extends sap.ui.base.Object
 * @version 1.15.1-SNAPSHOT
 * @constructor
 * @public
 * 
 */
sap.ui.core.Locale = function(sLocaleId) {};
/**
 * 
 * Get the locale extension as a single string or null.
 * </p><p>
 * The extension always consists of a singleton character (not 'x'), 
 * a dash '-' and one or more extension token, each separated 
 * again with a dash.
 * </p><p>
 * Use {@link #getExtensions} to get the individual extension tokens as an array.
 * @return {string} the extension
 * @public
 */
sap.ui.core.Locale.prototype.getExtension = function() { return ""; };

/**
 * 
 * Get the locale extensions as an array of tokens.
 * </p><p>
 * The leading singleton and the separating dashes are not part of the result.
 * If there is no extensions section in the locale tag, an empty array is returned.
 * @return {string[]} the individual extension sections
 * @public
 */
sap.ui.core.Locale.prototype.getExtensionSubtags = function() { return new Array(); };

/**
 * 
 * Get the locale language.
 * </p><p>
 * Note that the case might differ from the original script tag 
 * (Lower case is enforced as recommended by BCP47/ISO639).
 * @return {string} the language code
 * @public
 */
sap.ui.core.Locale.prototype.getLanguage = function() { return ""; };

/**
 * 
 * Get the locale private use section or null.
 * @return {string} the private use section
 * @public
 */
sap.ui.core.Locale.prototype.getPrivateUse = function() { return ""; };

/**
 * 
 * Get the locale private use section
 * @return {string} the private use section
 * @public
 */
sap.ui.core.Locale.prototype.getPrivateUseSubtags = function() { return ""; };

/**
 * 
 * Get the locale region or null if none was specified.
 * </p><p>
 * Note that the case might differ from the original script tag 
 * (Upper case is enforced as recommended by BCP47/ISO3166-1).
 * @return {string} the ISO3166-1 region code (2-letter or 3-digits)
 * @public
 */
sap.ui.core.Locale.prototype.getRegion = function() { return ""; };

/**
 * 
 * Get the locale script or null if none was specified.
 * </p><p>
 * Note that the case might differ from the original language tag
 * (Upper case first letter and lower case reminder enforced as 
 * recommended by BCP47/ISO15924)  
 * @return {string} the script code or null
 * @public
 */
sap.ui.core.Locale.prototype.getScript = function() { return ""; };

/**
 * 
 * Get the locale variants as a single string or null.
 * </p><p>
 * Multiple variants are separated by a dash '-'.
 * @return {string} the variant or null
 * @public
 */
sap.ui.core.Locale.prototype.getVariant = function() { return ""; };

/**
 * 
 * Get the locale variants as an array of individual variants.
 * </p><p>
 * The separating dashes are not part of the result.
 * If there is no variant section in the locale tag, an empty array is returned.
 * @return {string[]} the individual variant sections 
 * @public
 */
sap.ui.core.Locale.prototype.getVariantSubtags = function() { return new Array(); };


// ---- sap.ui.core.LocaleData --------------------------------------------------------------------------

/**
 * 
 * Creates an instance of the Data.
 * @class Data provides access to locale-specific data, like date formats, number formats, currencies, etc.
 * @param {sap.ui.core.Locale} oLocale the locale
 * @extends sap.ui.base.Object
 * @version 1.15.1-SNAPSHOT
 * @constructor
 * @public
 * 
 */
sap.ui.core.LocaleData = function(oLocale) {};
/**
 * 
 * Get date pattern in style "short", "medium", "long" or "full"
 * @param {string} sStyle the required style for the date pattern
 * @returns {string} the selected date pattern
 * @public
 */
sap.ui.core.LocaleData.prototype.getDatePattern = function(sStyle) { return ""; };

/**
 * 
 * Get datetime pattern in style "short", "medium", "long" or "full"
 * @param {string} sStyle the required style for the datetime pattern
 * @returns {string} the selected datetime pattern
 * @public
 */
sap.ui.core.LocaleData.prototype.getDateTimePattern = function(sStyle) { return ""; };

/**
 * 
 * Get day periods in width "narrow", "abbreviated" or "wide"
 * @param {string} sWidth the required width for the day period names
 * @returns {array} array of day periods (AM, PM)
 * @public
 */
sap.ui.core.LocaleData.prototype.getDayPeriods = function(sWidth) { return null; };

/**
 * 
 * Get day names in width "narrow", "abbreviated" or "wide"
 * @param {string} sWidth the required width for the day names
 * @returns {array} array of day names (starting with Sunday)
 * @public
 */
sap.ui.core.LocaleData.prototype.getDays = function(sWidth) { return null; };

/**
 * 
 * Get stand alone day names in width "narrow", "abbreviated" or "wide"
 * @param {string} sWidth the required width for the day names
 * @returns {array} array of day names (starting with Sunday)
 * @public
 */
sap.ui.core.LocaleData.prototype.getDaysStandAlone = function(sWidth) { return null; };

/**
 * 
 * Returns the day that usually is regarded as the first day 
 * of a week in the current locale. Days are encoded as integer
 * where sunday=0, monday=1 etc.
 * </p><p>
 * </p><p>
 * All week data information in the CLDR is provides for territories (countries).
 * If the locale of this LocaleData doesn't contain country information (e.g. if it 
 * contains only a language), then the "likelySubtag" information of the CLDR  
 * is taken into account to guess the "most likely" territory for the locale. 
 * @returns {int} first day of week
 * @public
 */
sap.ui.core.LocaleData.prototype.getFirstDayOfWeek = function() { return 0; };

/**
 * 
 * Get locale specific language names
 * @returns {object} map of locale specific language names
 * @public
 */
sap.ui.core.LocaleData.prototype.getLanguages = function() { return new Object(); };

/**
 * 
 * Get month names in width "narrow", "abbreviated" or "wide"
 * @param {string} sWidth the required width for the month names
 * @returns {array} array of month names (starting with January)
 * @public
 */
sap.ui.core.LocaleData.prototype.getMonths = function(sWidth) { return null; };

/**
 * 
 * Get stand alone month names in width "narrow", "abbreviated" or "wide"
 * @param {string} sWidth the required width for the month names
 * @returns {array} array of month names (starting with January)
 * @public
 */
sap.ui.core.LocaleData.prototype.getMonthsStandAlone = function(sWidth) { return null; };

/**
 * 
 * Get number symbol "decimal", "group", "plusSign", "minusSign"
 * @param {string} sType the required type of symbol
 * @returns {string} the selected number symbol
 * @public
 */
sap.ui.core.LocaleData.prototype.getNumberSymbol = function(sType) { return ""; };

/**
 * 
 * Get orientation (left-to-right or right-to-left)
 * @returns {string} character orientation for this locale
 * @public
 */
sap.ui.core.LocaleData.prototype.getOrientation = function() { return ""; };

/**
 * 
 * Get quarter names in width "narrow", "abbreviated" or "wide"
 * @param {string} sWidth the required width for the quarter names
 * @returns {array} array of quarters
 * @public
 */
sap.ui.core.LocaleData.prototype.getQuarters = function(sWidth) { return null; };

/**
 * 
 * Get locale specific script names
 * @returns {object} map of locale specific script names
 * @public
 */
sap.ui.core.LocaleData.prototype.getScripts = function() { return new Object(); };

/**
 * 
 * Get locale specific territory names
 * @returns {object} map of locale specific territory names
 * @public
 */
sap.ui.core.LocaleData.prototype.getTerritories = function() { return new Object(); };

/**
 * 
 * Get time pattern in style "short", "medium", "long" or "full"
 * @param {string} sStyle the required style for the date pattern
 * @returns {string} the selected time pattern
 * @public
 */
sap.ui.core.LocaleData.prototype.getTimePattern = function(sStyle) { return ""; };

/**
 * 
 * Returns the last day of a weekend for the given locale. 
 * </p><p>
 * Days are encoded in the same way as for {@link #getFirstDayOfWeek}.
 * </p><p>
 * All week data information in the CLDR is provides for territories (countries).
 * If the locale of this LocaleData doesn't contain country information (e.g. if it 
 * contains only a language), then the "likelySubtag" information of the CLDR  
 * is taken into account to guess the "most likely" territory for the locale. 
 * @returns {int} last day of weekend
 * @public
 */
sap.ui.core.LocaleData.prototype.getWeekendEnd = function() { return 0; };

/**
 * 
 * Returns the first day of a weekend for the given locale. 
 * </p><p>
 * Days are encoded in the same way as for {@link #getFirstDayOfWeek}.
 * </p><p>
 * All week data information in the CLDR is provides for territories (countries).
 * If the locale of this LocaleData doesn't contain country information (e.g. if it 
 * contains only a language), then the "likelySubtag" information of the CLDR  
 * is taken into account to guess the "most likely" territory for the locale. 
 * @returns {int} first day of weekend
 * @public
 */
sap.ui.core.LocaleData.prototype.getWeekendStart = function() { return 0; };


// ---- sap.ui.core.Message --------------------------------------------------------------------------

/**
 * 
 * Constructor for a new Message.
 * </p><p>
 * Accepts an object literal <code>mSettings</code> that defines initial 
 * property values, aggregated and associated objects as well as event handlers. 
 * </p><p>
 * If the name of a setting is ambiguous (e.g. a property has the same name as an event), 
 * then the framework assumes property, aggregation, association, event in that order. 
 * To override this automatic resolution, one of the prefixes "aggregation:", "association:" 
 * or "event:" can be added to the name of the setting (such a prefixed name must be
 * enclosed in single or double quotes).
 * </p><p>
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getText text} : string</li>
 * <li>{@link #getTimestamp timestamp} : string</li>
 * <li>{@link #getIcon icon} : sap.ui.core.URI</li>
 * <li>{@link #getLevel level} : sap.ui.core.MessageType (default: sap.ui.core.MessageType.None)</li></ul>
 * </li>
 * <li>Aggregations
 * <ul></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul></ul>
 * </li>
 * </ul> 
 * </p><p>
 * </p><p>
 * In addition, all settings applicable to the base type {@link sap.ui.core.Element#constructor sap.ui.core.Element}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * This element used to provide messages. Rendering must be done within the control that uses this kind of element.
 * </p><p>
 * Its default level is none.
 * @extends sap.ui.core.Element
 * @version 1.15.1-SNAPSHOT
 * @constructor   
 * @public
 * 
 */
sap.ui.core.Message = function(sId,mSettings) {};
/**
 * 
 * See sap.ui.core.Message.compare
 * @public
 */
sap.ui.core.Message.prototype.compareByType = function(oOther) { return null; };

/**
 * 
 * Compares a given message with <strong>this</strong> message. The types of
 * {sap.ui.core.MessageType} is ordered from "Error" > "Warning" > "Success" >
 * "Information" > "None".
 * @static
 * @public
 * @param {sap.ui.core.Message}
 *            a message to compare with
 * @return {sap.ui.core.int} returns <strong>0</strong> if both messages are at
 *         the same level. <strong>-1</strong> if <strong>this</strong>
 *         message has a lower level. <strong>1</strong> if <strong>this</strong>
 *         message has a higher level.
 */
sap.ui.core.Message.compareByType = function(a,oMessage2) { return new sap.ui.core.int(); };

/**
 * 
 * Creates a new subclass of class sap.ui.core.Message with name <code>sClassName</code> 
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * </p><p>
 * <code>oClassInfo</code> might contain the same kind of informations as described in {@link sap.ui.core.Element.extend Element.extend}.
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class  
 * @param {function} [FNMetaImpl] constructor function for the metadata object. If not given, it defaults to sap.ui.core.ElementMetadata.
 * @return {function} the created class / constructor function
 * @public
 * @static
 * 
 */
sap.ui.core.Message.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * 
 * Getter for property <code>icon</code>.
 * A possible icon URI of the message
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {sap.ui.core.URI} the value of property <code>icon</code>
 * @public
 * 
 */
sap.ui.core.Message.prototype.getIcon = function() { return new sap.ui.core.URI(); };

/**
 * 
 * Getter for property <code>level</code>.
 * Setting the message's level.
 * </p><p>
 * Default value is <code>sap.ui.core.MessageType.None</code>
 * @return {sap.ui.core.MessageType} the value of property <code>level</code>
 * @public
 * 
 */
sap.ui.core.Message.prototype.getLevel = function() { return new sap.ui.core.MessageType(); };

/**
 * 
 * Getter for property <code>text</code>.
 * Message text
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {string} the value of property <code>text</code>
 * @public
 * 
 */
sap.ui.core.Message.prototype.getText = function() { return ""; };

/**
 * 
 * Getter for property <code>timestamp</code>.
 * Message's timestamp. It is just a simple String that will be used without any transformation. So the application that uses messages needs to format the timestamp to its own needs.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {string} the value of property <code>timestamp</code>
 * @public
 * 
 */
sap.ui.core.Message.prototype.getTimestamp = function() { return ""; };

/**
 * 
 * Setter for property <code>icon</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {sap.ui.core.URI} sIcon  new value for property <code>icon</code>
 * @return {sap.ui.core.Message} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.core.Message.prototype.setIcon = function(sIcon) { return new sap.ui.core.Message(); };

/**
 * 
 * Setter for property <code>level</code>.
 * </p><p>
 * Default value is <code>sap.ui.core.MessageType.None</code> 
 * @param {sap.ui.core.MessageType} oLevel  new value for property <code>level</code>
 * @return {sap.ui.core.Message} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.core.Message.prototype.setLevel = function(oLevel) { return new sap.ui.core.Message(); };

/**
 * 
 * Setter for property <code>text</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {string} sText  new value for property <code>text</code>
 * @return {sap.ui.core.Message} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.core.Message.prototype.setText = function(sText) { return new sap.ui.core.Message(); };

/**
 * 
 * Setter for property <code>timestamp</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {string} sTimestamp  new value for property <code>timestamp</code>
 * @return {sap.ui.core.Message} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.core.Message.prototype.setTimestamp = function(sTimestamp) { return new sap.ui.core.Message(); };


// ---- sap.ui.core.MessageType --------------------------------------------------------------------------

// dummy function to make Eclipse aware of namespace
sap.ui.core.MessageType.toString = function() { return ""; };

// ---- sap.ui.core.mvc --------------------------------------------------------------------------


// ---- sap.ui.core.mvc.Controller --------------------------------------------------------------------------

/**
 * 
 * Instantiates a (MVC-style) Controller. Consumers should call the constructor only in the
 * typed controller scenario. In the generic controller use case, they should use
 * {@link sap.ui.controller} instead.
 * @class A generic controller implementation for the UI5 Model View controller concept.
 * </p><p>
 * Can either be used as a generic controller which is enriched on the fly with methods
 * and properties (see {@link sap.ui.controller}) or  as a base class for typed controllers.
 * @param {string || object[]} sName The name of the Controller to instantiate. If a Controller is defined as real sub-class,
 *                                   the "arguments" of the sub-class constructor should be given instead.
 * @public
 * 
 */
sap.ui.core.mvc.Controller = function(sName) {};
/**
 * 
 * Returns an Element of the connected view with the given local Id.
 * </p><p>
 * Views automatically prepend their own id as a prefix to created Elements
 * to make the ids unique even in the case of multiple view instances.
 * This method helps to find an element by its local id only.
 * </p><p>
 * If no view is connected or if the view doesn't contain an element with
 * the given local id, undefined is returned.
 * @param {string} sId The view-local id
 * @return {sap.ui.core.Element} Element by its (view local) id
 * @public
 */
sap.ui.core.mvc.Controller.prototype.byId = function(sId) { return new sap.ui.core.Element(); };

/**
 * 
 * Converts a view local id to a globally unique one by prepending
 * the view id.
 * </p><p>
 * If no view is connected, undefined is returned.
 * @param {string} sId The view-local id
 * @return {string} The prefixed id
 * @public
 */
sap.ui.core.mvc.Controller.prototype.createId = function(sId) { return ""; };

/**
 * 
 * Creates a new subclass of class sap.ui.core.mvc.Controller with name <code>sClassName</code> 
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * </p><p>
 * For a detailed description of <code>oClassInfo</code> or <code>FNMetaImpl</code> 
 * see {@link sap.ui.base.Object.extend Object.extend}.
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class  
 * @param {function} [FNMetaImpl] alternative constructor for a metadata object
 * @return {function} the created class / constructor function
 * @public
 * @static
 * 
 */
sap.ui.core.mvc.Controller.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * 
 * Returns the view associated with this controller or undefined.
 * @return {sap.ui.core.mvc.View} View connected to this controller.
 * @public
 */
sap.ui.core.mvc.Controller.prototype.getView = function() { return new sap.ui.core.mvc.View(); };


// ---- sap.ui.core.mvc.HTMLView --------------------------------------------------------------------------

/**
 * 
 * Constructor for a new mvc/HTMLView.
 * </p><p>
 * Accepts an object literal <code>mSettings</code> that defines initial 
 * property values, aggregated and associated objects as well as event handlers. 
 * </p><p>
 * If the name of a setting is ambiguous (e.g. a property has the same name as an event), 
 * then the framework assumes property, aggregation, association, event in that order. 
 * To override this automatic resolution, one of the prefixes "aggregation:", "association:" 
 * or "event:" can be added to the name of the setting (such a prefixed name must be
 * enclosed in single or double quotes).
 * </p><p>
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul></ul>
 * </li>
 * <li>Aggregations
 * <ul></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul></ul>
 * </li>
 * </ul> 
 * </p><p>
 * </p><p>
 * In addition, all settings applicable to the base type {@link sap.ui.core.mvc.View#constructor sap.ui.core.mvc.View}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * A view defined/constructed by declarative HTML.
 * @extends sap.ui.core.mvc.View
 * @version 1.15.1-SNAPSHOT
 * @constructor   
 * @public
 * @since 1.9.2
 * 
 */
sap.ui.core.mvc.HTMLView = function(sId,mSettings) {};
/**
 * 
 * Creates a new subclass of class sap.ui.core.mvc.HTMLView with name <code>sClassName</code> 
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * </p><p>
 * <code>oClassInfo</code> might contain the same kind of informations as described in {@link sap.ui.core.Element.extend Element.extend}.
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class  
 * @param {function} [FNMetaImpl] constructor function for the metadata object. If not given, it defaults to sap.ui.core.ElementMetadata.
 * @return {function} the created class / constructor function
 * @public
 * @static
 * 
 */
sap.ui.core.mvc.HTMLView.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };


// ---- sap.ui.core.mvc.JSONView --------------------------------------------------------------------------

/**
 * 
 * Constructor for a new mvc/JSONView.
 * </p><p>
 * Accepts an object literal <code>mSettings</code> that defines initial 
 * property values, aggregated and associated objects as well as event handlers. 
 * </p><p>
 * If the name of a setting is ambiguous (e.g. a property has the same name as an event), 
 * then the framework assumes property, aggregation, association, event in that order. 
 * To override this automatic resolution, one of the prefixes "aggregation:", "association:" 
 * or "event:" can be added to the name of the setting (such a prefixed name must be
 * enclosed in single or double quotes).
 * </p><p>
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul></ul>
 * </li>
 * <li>Aggregations
 * <ul></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul></ul>
 * </li>
 * </ul> 
 * </p><p>
 * </p><p>
 * In addition, all settings applicable to the base type {@link sap.ui.core.mvc.View#constructor sap.ui.core.mvc.View}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * A View defined using JSON.
 * @extends sap.ui.core.mvc.View
 * @version 1.15.1-SNAPSHOT
 * @constructor   
 * @public
 * 
 */
sap.ui.core.mvc.JSONView = function(sId,mSettings) {};
/**
 * 
 * Creates a new subclass of class sap.ui.core.mvc.JSONView with name <code>sClassName</code> 
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * </p><p>
 * <code>oClassInfo</code> might contain the same kind of informations as described in {@link sap.ui.core.Element.extend Element.extend}.
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class  
 * @param {function} [FNMetaImpl] constructor function for the metadata object. If not given, it defaults to sap.ui.core.ElementMetadata.
 * @return {function} the created class / constructor function
 * @public
 * @static
 * 
 */
sap.ui.core.mvc.JSONView.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };


// ---- sap.ui.core.mvc.JSView --------------------------------------------------------------------------

/**
 * 
 * Constructor for a new mvc/JSView.
 * </p><p>
 * Accepts an object literal <code>mSettings</code> that defines initial 
 * property values, aggregated and associated objects as well as event handlers. 
 * </p><p>
 * If the name of a setting is ambiguous (e.g. a property has the same name as an event), 
 * then the framework assumes property, aggregation, association, event in that order. 
 * To override this automatic resolution, one of the prefixes "aggregation:", "association:" 
 * or "event:" can be added to the name of the setting (such a prefixed name must be
 * enclosed in single or double quotes).
 * </p><p>
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul></ul>
 * </li>
 * <li>Aggregations
 * <ul></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul></ul>
 * </li>
 * </ul> 
 * </p><p>
 * </p><p>
 * In addition, all settings applicable to the base type {@link sap.ui.core.mvc.View#constructor sap.ui.core.mvc.View}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * A View defined/constructed by JavaScript code.
 * @extends sap.ui.core.mvc.View
 * @version 1.15.1-SNAPSHOT
 * @constructor   
 * @public
 * 
 */
sap.ui.core.mvc.JSView = function(sId,mSettings) {};
/**
 * 
 * A method to be implemented by JSViews, returning the View UI.
 * While for declarative View types like XMLView or JSONView the user interface definition is declared in a separate file,
 * JSViews programmatically construct the UI. This happens in the createContent method which every JSView needs to implement.
 * The View implementation can construct the complete UI in this method - or only return the root control and create the rest of the UI lazily later on.
 * @return {sap.ui.core.Control} a control or (typically) tree of controls representing the View user interface
 * @public
 * 
 */
sap.ui.core.mvc.JSView.prototype.createContent = function() { return new sap.ui.core.Control(); };

/**
 * 
 * Creates a new subclass of class sap.ui.core.mvc.JSView with name <code>sClassName</code> 
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * </p><p>
 * <code>oClassInfo</code> might contain the same kind of informations as described in {@link sap.ui.core.Element.extend Element.extend}.
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class  
 * @param {function} [FNMetaImpl] constructor function for the metadata object. If not given, it defaults to sap.ui.core.ElementMetadata.
 * @return {function} the created class / constructor function
 * @public
 * @static
 * 
 */
sap.ui.core.mvc.JSView.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * 
 * A method to be implemented by JSViews, returning the flag whether to prefix 
 * the IDs of controls automatically or not if the controls are created inside
 * the {@link sap.ui.core.mvc.JSView#createContent} function. By default this 
 * feature is not activated. 
 * </p><p>
 * You can overwrite this function and return true to activate the automatic
 * prefixing.
 * @since 1.15.1
 * @experimental Since 1.15.1. This feature might be changed in future.
 * @return {boolean} true, if the controls IDs should be prefixed automatically
 * @protected
 */
sap.ui.core.mvc.JSView.prototype.getAutoPrefixId = function() { return false; };


// ---- sap.ui.core.mvc.TemplateView --------------------------------------------------------------------------

/**
 * 
 * Constructor for a new mvc/TemplateView.
 * </p><p>
 * Accepts an object literal <code>mSettings</code> that defines initial 
 * property values, aggregated and associated objects as well as event handlers. 
 * </p><p>
 * If the name of a setting is ambiguous (e.g. a property has the same name as an event), 
 * then the framework assumes property, aggregation, association, event in that order. 
 * To override this automatic resolution, one of the prefixes "aggregation:", "association:" 
 * or "event:" can be added to the name of the setting (such a prefixed name must be
 * enclosed in single or double quotes).
 * </p><p>
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul></ul>
 * </li>
 * <li>Aggregations
 * <ul></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul></ul>
 * </li>
 * </ul> 
 * </p><p>
 * </p><p>
 * In addition, all settings applicable to the base type {@link sap.ui.core.mvc.View#constructor sap.ui.core.mvc.View}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * A view defined in a template.
 * @extends sap.ui.core.mvc.View
 * @version 1.15.1-SNAPSHOT
 * @constructor   
 * @public
 * @since 1.16.0
 * 
 */
sap.ui.core.mvc.TemplateView = function(sId,mSettings) {};
/**
 * 
 * Creates a new subclass of class sap.ui.core.mvc.TemplateView with name <code>sClassName</code> 
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * </p><p>
 * <code>oClassInfo</code> might contain the same kind of informations as described in {@link sap.ui.core.Element.extend Element.extend}.
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class  
 * @param {function} [FNMetaImpl] constructor function for the metadata object. If not given, it defaults to sap.ui.core.ElementMetadata.
 * @return {function} the created class / constructor function
 * @public
 * @static
 * 
 */
sap.ui.core.mvc.TemplateView.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };


// ---- sap.ui.core.mvc.View --------------------------------------------------------------------------

/**
 * 
 * Constructor for a new mvc/View.
 * </p><p>
 * Accepts an object literal <code>mSettings</code> that defines initial 
 * property values, aggregated and associated objects as well as event handlers. 
 * </p><p>
 * If the name of a setting is ambiguous (e.g. a property has the same name as an event), 
 * then the framework assumes property, aggregation, association, event in that order. 
 * To override this automatic resolution, one of the prefixes "aggregation:", "association:" 
 * or "event:" can be added to the name of the setting (such a prefixed name must be
 * enclosed in single or double quotes).
 * </p><p>
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getWidth width} : sap.ui.core.CSSSize (default: '100%')</li>
 * <li>{@link #getHeight height} : sap.ui.core.CSSSize</li>
 * <li>{@link #getViewName viewName} : string</li>
 * <li>{@link #getDisplayBlock displayBlock} : boolean (default: false)</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getContent content} : sap.ui.core.Control[]</li></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link sap.ui.core.mvc.View#event:afterInit afterInit} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.ui.core.mvc.View#event:beforeExit beforeExit} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.ui.core.mvc.View#event:afterRendering afterRendering} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.ui.core.mvc.View#event:beforeRendering beforeRendering} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
 * </li>
 * </ul> 
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * View
 * @extends sap.ui.core.Control
 * @version 1.15.1-SNAPSHOT
 * @constructor   
 * @public
 * 
 */
sap.ui.core.mvc.View = function(sId,mSettings) {};
/**
 * 
 * Fired when the View has parsed the UI description and instantiated the contained controls (/control tree). 
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 */
sap.ui.core.mvc.View.prototype.afterInit = function(oControlEvent) { return null; };

/**
 * 
 * Fired when the View has been (re-)rendered and its HTML is present in the DOM. 
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 */
sap.ui.core.mvc.View.prototype.afterRendering = function(oControlEvent) { return null; };

/**
 * 
 * Fired when the view has received the request to destroy itself, but before it has destroyed anything. 
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 */
sap.ui.core.mvc.View.prototype.beforeExit = function(oControlEvent) { return null; };

/**
 * 
 * Fired before this View is re-rendered. Use to unbind event handlers from HTML elements etc. 
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 */
sap.ui.core.mvc.View.prototype.beforeRendering = function(oControlEvent) { return null; };

/**
 * 
 * Adds some content <code>oContent</code> 
 * to the aggregation named <code>content</code>.
 * @param {sap.ui.core.Control}
 *            oContent the content to add; if empty, nothing is inserted
 * @return {sap.ui.core.mvc.View} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.core.mvc.View.prototype.addContent = function(oContent) { return new sap.ui.core.mvc.View(); };

/**
 * 
 * Attach event handler <code>fnFunction</code> to the 'afterInit' event of this <code>sap.ui.core.mvc.View</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ui.core.mvc.View</code>.<br/> itself. 
 * </p><p>
 * Fired when the View has parsed the UI description and instantiated the contained controls (/control tree). 
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener=this] Context object to call the event handler with. Defaults to this <code>sap.ui.core.mvc.View</code>.<br/> itself.
 * @return {sap.ui.core.mvc.View} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.core.mvc.View.prototype.attachAfterInit = function(oData,fnFunction,oListener) { return new sap.ui.core.mvc.View(); };

/**
 * 
 * Attach event handler <code>fnFunction</code> to the 'afterRendering' event of this <code>sap.ui.core.mvc.View</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ui.core.mvc.View</code>.<br/> itself. 
 * </p><p>
 * Fired when the View has been (re-)rendered and its HTML is present in the DOM. 
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener=this] Context object to call the event handler with. Defaults to this <code>sap.ui.core.mvc.View</code>.<br/> itself.
 * @return {sap.ui.core.mvc.View} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.core.mvc.View.prototype.attachAfterRendering = function(oData,fnFunction,oListener) { return new sap.ui.core.mvc.View(); };

/**
 * 
 * Attach event handler <code>fnFunction</code> to the 'beforeExit' event of this <code>sap.ui.core.mvc.View</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ui.core.mvc.View</code>.<br/> itself. 
 * </p><p>
 * Fired when the view has received the request to destroy itself, but before it has destroyed anything. 
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener=this] Context object to call the event handler with. Defaults to this <code>sap.ui.core.mvc.View</code>.<br/> itself.
 * @return {sap.ui.core.mvc.View} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.core.mvc.View.prototype.attachBeforeExit = function(oData,fnFunction,oListener) { return new sap.ui.core.mvc.View(); };

/**
 * 
 * Attach event handler <code>fnFunction</code> to the 'beforeRendering' event of this <code>sap.ui.core.mvc.View</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ui.core.mvc.View</code>.<br/> itself. 
 * </p><p>
 * Fired before this View is re-rendered. Use to unbind event handlers from HTML elements etc. 
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener=this] Context object to call the event handler with. Defaults to this <code>sap.ui.core.mvc.View</code>.<br/> itself.
 * @return {sap.ui.core.mvc.View} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.core.mvc.View.prototype.attachBeforeRendering = function(oData,fnFunction,oListener) { return new sap.ui.core.mvc.View(); };

/**
 * 
 * returns an Element by its id in the context of the View
 * @return Element by its id
 * @public
 */
sap.ui.core.mvc.View.prototype.byId = function(sId) { return null; };

/**
 * 
 * Override clone method to avoid conflict between generic cloning of content
 * and content creation as defined by the UI5 Model View Controller lifecycle.
 * </p><p>
 * For more details see the development guide section about Model View Controller in UI5.
 * @param {String} [sIdSuffix] a suffix to be appended to the cloned element id
 * @param {Array} [aLocalIds] an array of local IDs within the cloned hierarchy (internally used)
 * @return {sap.ui.core.Element} reference to the newly created clone
 * @protected
 */
sap.ui.core.mvc.View.prototype.clone = function(sIdSuffix,aLocalIds) { return new sap.ui.core.Element(); };

/**
 * 
 * creates an id for an Element prefixed with the view id
 * @return prefixed id
 * @public
 */
sap.ui.core.mvc.View.prototype.createId = function(sId) { return null; };

/**
 * 
 * Destroys all the content in the aggregation 
 * named <code>content</code>.
 * @return {sap.ui.core.mvc.View} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.core.mvc.View.prototype.destroyContent = function() { return new sap.ui.core.mvc.View(); };

/**
 * 
 * Detach event handler <code>fnFunction</code> from the 'afterInit' event of this <code>sap.ui.core.mvc.View</code>.<br/>
 * </p><p>
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.core.mvc.View} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.core.mvc.View.prototype.detachAfterInit = function(fnFunction,oListener) { return new sap.ui.core.mvc.View(); };

/**
 * 
 * Detach event handler <code>fnFunction</code> from the 'afterRendering' event of this <code>sap.ui.core.mvc.View</code>.<br/>
 * </p><p>
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.core.mvc.View} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.core.mvc.View.prototype.detachAfterRendering = function(fnFunction,oListener) { return new sap.ui.core.mvc.View(); };

/**
 * 
 * Detach event handler <code>fnFunction</code> from the 'beforeExit' event of this <code>sap.ui.core.mvc.View</code>.<br/>
 * </p><p>
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.core.mvc.View} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.core.mvc.View.prototype.detachBeforeExit = function(fnFunction,oListener) { return new sap.ui.core.mvc.View(); };

/**
 * 
 * Detach event handler <code>fnFunction</code> from the 'beforeRendering' event of this <code>sap.ui.core.mvc.View</code>.<br/>
 * </p><p>
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.core.mvc.View} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.core.mvc.View.prototype.detachBeforeRendering = function(fnFunction,oListener) { return new sap.ui.core.mvc.View(); };

/**
 * 
 * Creates a new subclass of class sap.ui.core.mvc.View with name <code>sClassName</code> 
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * </p><p>
 * <code>oClassInfo</code> might contain the same kind of informations as described in {@link sap.ui.core.Element.extend Element.extend}.
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class  
 * @param {function} [FNMetaImpl] constructor function for the metadata object. If not given, it defaults to sap.ui.core.ElementMetadata.
 * @return {function} the created class / constructor function
 * @public
 * @static
 * 
 */
sap.ui.core.mvc.View.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * 
 * Fire event afterInit to attached listeners.
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.core.mvc.View} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.ui.core.mvc.View.prototype.fireAfterInit = function(mArguments) { return new sap.ui.core.mvc.View(); };

/**
 * 
 * Fire event afterRendering to attached listeners.
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.core.mvc.View} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.ui.core.mvc.View.prototype.fireAfterRendering = function(mArguments) { return new sap.ui.core.mvc.View(); };

/**
 * 
 * Fire event beforeExit to attached listeners.
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.core.mvc.View} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.ui.core.mvc.View.prototype.fireBeforeExit = function(mArguments) { return new sap.ui.core.mvc.View(); };

/**
 * 
 * Fire event beforeRendering to attached listeners.
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.core.mvc.View} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.ui.core.mvc.View.prototype.fireBeforeRendering = function(mArguments) { return new sap.ui.core.mvc.View(); };

/**
 * 
 * Getter for aggregation <code>content</code>.<br/>
 * Child Controls of the view
 * @return {sap.ui.core.Control[]}
 * @public
 * 
 */
sap.ui.core.mvc.View.prototype.getContent = function() { return new Array(); };

/**
 * 
 * may return null for controller-less View
 * @return Controller of the View
 * @public
 */
sap.ui.core.mvc.View.prototype.getController = function() { return null; };

/**
 * 
 * An (optional) method to be implemented by Views.
 * When no controller instance is given at View instantiation time AND this method exists and returns the (package and class) name of a controller,
 * the View tries to load and instantiate the controller and to connect it to itself.
 * @return {string} the name of the controller
 * @public
 * 
 */
sap.ui.core.mvc.View.prototype.getControllerName = function() { return ""; };

/**
 * 
 * Getter for property <code>displayBlock</code>.
 * Whether the CSS display should be set to "block".
 * Set this to "true" if the default display "inline-block" causes a vertical scrollbar with Views that are set to 100% height.
 * Do not set this to "true" if you want to display other content in the same HTML parent on either side of the View (setting to "true" may push that other content to the next/previous line).
 * </p><p>
 * Default value is <code>false</code>
 * @return {boolean} the value of property <code>displayBlock</code>
 * @public
 * 
 */
sap.ui.core.mvc.View.prototype.getDisplayBlock = function() { return false; };

/**
 * 
 * Getter for property <code>height</code>.
 * The height
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {sap.ui.core.CSSSize} the value of property <code>height</code>
 * @public
 * 
 */
sap.ui.core.mvc.View.prototype.getHeight = function() { return new sap.ui.core.CSSSize(); };

/**
 * 
 * Returns user specific data object
 * @return object viewData
 * @public
 */
sap.ui.core.mvc.View.prototype.getViewData = function() { return null; };

/**
 * 
 * Getter for property <code>viewName</code>.
 * Name of the View
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {string} the value of property <code>viewName</code>
 * @public
 * 
 */
sap.ui.core.mvc.View.prototype.getViewName = function() { return ""; };

/**
 * 
 * Getter for property <code>width</code>.
 * The width
 * </p><p>
 * Default value is <code>100%</code>
 * @return {sap.ui.core.CSSSize} the value of property <code>width</code>
 * @public
 * 
 */
sap.ui.core.mvc.View.prototype.getWidth = function() { return new sap.ui.core.CSSSize(); };

/**
 * 
 * Checks for the provided <code>sap.ui.core.Control</code> in the aggregation named <code>content</code> 
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.core.Control}
 *            oContent the content whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * 
 */
sap.ui.core.mvc.View.prototype.indexOfContent = function(oContent) { return 0; };

/**
 * 
 * Inserts a content into the aggregation named <code>content</code>.
 * @param {sap.ui.core.Control}
 *          oContent the content to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the content should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the content is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the content is inserted at 
 *             the last position        
 * @return {sap.ui.core.mvc.View} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.core.mvc.View.prototype.insertContent = function(oContent,iIndex) { return new sap.ui.core.mvc.View(); };

/**
 * 
 * Removes all the controls in the aggregation named <code>content</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.core.Control[]} an array of the removed elements (might be empty)
 * @public
 * 
 */
sap.ui.core.mvc.View.prototype.removeAllContent = function() { return new Array(); };

/**
 * 
 * Removes an content from the aggregation named <code>content</code>.
 * @param {int | string | sap.ui.core.Control} vContent the content to remove or its index or id
 * @return {sap.ui.core.Control} the removed content or null
 * @public
 * 
 */
sap.ui.core.mvc.View.prototype.removeContent = function(vContent) { return new sap.ui.core.Control(); };

/**
 * 
 * Setter for property <code>displayBlock</code>.
 * </p><p>
 * Default value is <code>false</code> 
 * @param {boolean} bDisplayBlock  new value for property <code>displayBlock</code>
 * @return {sap.ui.core.mvc.View} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.core.mvc.View.prototype.setDisplayBlock = function(bDisplayBlock) { return new sap.ui.core.mvc.View(); };

/**
 * 
 * Setter for property <code>height</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {sap.ui.core.CSSSize} sHeight  new value for property <code>height</code>
 * @return {sap.ui.core.mvc.View} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.core.mvc.View.prototype.setHeight = function(sHeight) { return new sap.ui.core.mvc.View(); };

/**
 * 
 * Setter for property <code>viewName</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {string} sViewName  new value for property <code>viewName</code>
 * @return {sap.ui.core.mvc.View} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.core.mvc.View.prototype.setViewName = function(sViewName) { return new sap.ui.core.mvc.View(); };

/**
 * 
 * Setter for property <code>width</code>.
 * </p><p>
 * Default value is <code>100%</code> 
 * @param {sap.ui.core.CSSSize} sWidth  new value for property <code>width</code>
 * @return {sap.ui.core.mvc.View} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.core.mvc.View.prototype.setWidth = function(sWidth) { return new sap.ui.core.mvc.View(); };


// ---- sap.ui.core.mvc.ViewType --------------------------------------------------------------------------

// dummy function to make Eclipse aware of namespace
sap.ui.core.mvc.ViewType.toString = function() { return ""; };

// ---- sap.ui.core.mvc.XMLView --------------------------------------------------------------------------

/**
 * 
 * Constructor for a new mvc/XMLView.
 * </p><p>
 * Accepts an object literal <code>mSettings</code> that defines initial 
 * property values, aggregated and associated objects as well as event handlers. 
 * </p><p>
 * If the name of a setting is ambiguous (e.g. a property has the same name as an event), 
 * then the framework assumes property, aggregation, association, event in that order. 
 * To override this automatic resolution, one of the prefixes "aggregation:", "association:" 
 * or "event:" can be added to the name of the setting (such a prefixed name must be
 * enclosed in single or double quotes).
 * </p><p>
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul></ul>
 * </li>
 * <li>Aggregations
 * <ul></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul></ul>
 * </li>
 * </ul> 
 * </p><p>
 * </p><p>
 * In addition, all settings applicable to the base type {@link sap.ui.core.mvc.View#constructor sap.ui.core.mvc.View}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * A View defined using (P)XML and HTML markup.
 * @extends sap.ui.core.mvc.View
 * @version 1.15.1-SNAPSHOT
 * @constructor   
 * @public
 * 
 */
sap.ui.core.mvc.XMLView = function(sId,mSettings) {};
/**
 * 
 * Creates a new subclass of class sap.ui.core.mvc.XMLView with name <code>sClassName</code> 
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * </p><p>
 * <code>oClassInfo</code> might contain the same kind of informations as described in {@link sap.ui.core.Element.extend Element.extend}.
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class  
 * @param {function} [FNMetaImpl] constructor function for the metadata object. If not given, it defaults to sap.ui.core.ElementMetadata.
 * @return {function} the created class / constructor function
 * @public
 * @static
 * 
 */
sap.ui.core.mvc.XMLView.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };


// ---- sap.ui.core.OpenState --------------------------------------------------------------------------

// dummy function to make Eclipse aware of namespace
sap.ui.core.OpenState.toString = function() { return ""; };

// ---- sap.ui.core.Percentage --------------------------------------------------------------------------


// ---- sap.ui.core.plugin --------------------------------------------------------------------------


// ---- sap.ui.core.Popup --------------------------------------------------------------------------


// ---- sap.ui.core.Popup.Dock --------------------------------------------------------------------------

// dummy function to make Eclipse aware of namespace
sap.ui.core.Popup.Dock.toString = function() { return ""; };

// ---- sap.ui.core.Renderer --------------------------------------------------------------------------

/**
 * 
 * Provides some 'extends' functionality for Renderers.<br/> Creates a new
 * object (i.e. static class) that knows its parent (accessible from
 * <code>this._super</code>) and initially forwards method calls to the
 * parents methods.<br/> Methods can be overwritten afterwards as known from
 * JavaScript.
 * @param {object}
 *            oParentClass the definition of the class that should be extended.
 * @return a new class definition that can be enriched.
 * @type object
 * @public
 * @memberOf sap.ui.core.Renderer
 */
sap.ui.core.Renderer.extend = function(oParentClass) { return new Object(); };


// ---- sap.ui.core.RenderManager --------------------------------------------------------------------------

/**
 * 
 * Creates an instance of the RenderManager.
 * @class RenderManager that will take care for rendering Controls.
 * </p><p>
 * The RenderManager will be available from the sap.ui.core.Core instance (available via <code>sap.ui.getCore()</code>).<br/>It
 * can be used to render Controls and Control-Trees.
 * </p><p>
 * The convention for renderers belonging to some controls is the following:
 * <ul>
 * <li>for a Control e.g. <code>sap.ui.controls.InputField</code> there shall be </li>
 * <li>a renderer named <code>sap.ui.controls.InputFieldRenderer</code></li>
 * <ul>
 * @see sap.ui.core.Core
 * @see sap.ui.getCore()
 * @extends sap.ui.base.Object
 * @version 1.15.1-SNAPSHOT
 * @constructor
 * @public
 */
sap.ui.core.RenderManager = function() {};
/**
 * 
 * Adds a class to the class collection if the name is not empty or null.
 * The class collection is flushed if it is written to the buffer using {@link #writeClasses}
 * @param {string} sName name of the class to be added; null values are ignored
 * @return {sap.ui.core.RenderManager} this render manager instance to allow chaining
 * @public
 * @SecSink {0|XSS} Classes are written to HTML without validation
 */
sap.ui.core.RenderManager.prototype.addClass = function(sName) { return new sap.ui.core.RenderManager(); };

/**
 * 
 * Adds a style property to the style collection if the value is not empty or null
 * The style collection is flushed if it is written to the buffer using {@link #writeStyle}
 * @param {string} sName name of the CSS property to write
 * @param {string|float|int} value value to write
 * @return {sap.ui.core.RenderManager} this render manager instance to allow chaining
 * @public
 * @SecSink {0 1|XSS} Styles are written to HTML without validation
 */
sap.ui.core.RenderManager.prototype.addStyle = function(sName,value) { return new sap.ui.core.RenderManager(); };

/**
 * 
 * Cleans up the resources associated with this instance.
 * After the instance has been destroyed, it must not be used anymore.
 * Applications should call this function if they don't need the instance any longer.
 * @public
 */
sap.ui.core.RenderManager.prototype.destroy = function() { return null; };

/**
 * 
 * Searches "to-be-preserved" nodes for the given control id.
 * @param {string} sId control id to search content for.
 * @return {jQuery} a jQuery collection representing the found content
 * @public
 * @static
 */
sap.ui.core.RenderManager.findPreservedContent = function(sId) { return null; };

/**
 * 
 * Renders the content of the rendering buffer into the provided DOMNode.
 * </p><p>
 * This function must not be called within control renderers.
 * </p><p>
 * Usage:
 * <pre>
 * // Create a new instance of the RenderManager
 * var rm = sap.ui.getCore().createRenderManager();
 * // Use the writer API to fill the buffers
 * rm.write(...);
 * rm.renderControl(oControl);
 * rm.write(...);
 * ...
 * // Finally flush the buffer into the provided DOM node (The current content is removed)
 * rm.flush(oDomNode);
 * // If the instance is not needed anymore, destroy it
 * rm.destroy();
 * </pre>
 * @param {DOMNode} oTargetDomNode The node in the dom where the buffer should be flushed into.
 * @param {boolean} bDoNotPreserve flag, whether to not preserve (true) the content or to preserve it (false).
 * @param {boolean|int} vInsert flag, whether to append (true) or replace (false) the buffer of the target dom node or to insert at a certain position (int)
 * @public
 */
sap.ui.core.RenderManager.prototype.flush = function(oTargetDomNode,bDoNotPreserve,vInsert) { return null; };

/**
 * 
 * Returns the configuration object
 * Shortcut for <code>sap.ui.getCore().getConfiguration()</code>
 * @return {sap.ui.core.Configuration} the configuration object
 * @public
 */
sap.ui.core.RenderManager.prototype.getConfiguration = function() { return new sap.ui.core.Configuration(); };

/**
 * 
 * Renders the given {@link sap.ui.core.Control} and finally returns
 * the content of the rendering buffer.
 * Ensures the buffer is restored to the state before calling this method.
 * @param {sap.ui.core.Control}
 *            oControl the Control whose HTML should be returned.
 * @return {string} the resulting HTML of the provided control
 * @deprecated Since version 0.15.0. Use <code>flush()</code> instead render content outside the rendering phase.
 * @public
 */
sap.ui.core.RenderManager.prototype.getHTML = function(oControl) { return ""; };

/**
 * 
 * Returns the hidden area reference belonging to this window instance.
 * @return {DOMNode}the hidden area reference belonging to this core instance.
 * @public
 * @static
 */
sap.ui.core.RenderManager.getPreserveAreaRef = function() { return null; };

/**
 * 
 * Returns the renderer class for a given control instance
 * @param {sap.ui.core.Control} oControl the control that should be rendered
 * @return the renderer class for a given control instance
 * @public
 */
sap.ui.core.RenderManager.prototype.getRenderer = function(oControl) { return null; };

/**
 * 
 * Returns the renderer class for a given control instance
 * @param {sap.ui.core.Control}
 *            oControl the control that should be rendered
 * @type function
 * @return the renderer class for a given control instance
 * @static
 * @public
 */
sap.ui.core.RenderManager.getRenderer = function(oControl) { return function() {}; };

/**
 * 
 * Collects descendants of the given root node that need to be preserved before the root node
 * is wiped out. The "to-be-preserved" nodes are moved to a special, hidden 'preserve' area.
 * </p><p>
 * A node is declared "to-be-preserved" when it has the <code>data-sap-ui-preserve</code>
 * attribute set. When the optional parameter <code>bPreserveNodesWithId</code> is set to true,
 * then nodes with an id are preserved as well and their <code>data-sap-ui-preserve</code> attribute
 * is set automatically. This option is used by UIAreas when they render for the first time and
 * simplifies the handling of predefined HTML content in a web page.
 * </p><p>
 * The "to-be-preserved" nodes are searched with a depth first search and moved to the 'preserve'
 * area in the order that they are found. So for direct siblings the order should be stable.
 * @param {DOMNode} oRootNode to search for "to-be-preserved" nodes
 * @param {boolean} [bPreserveRoot=false] whether to preserve the root itself
 * @param {boolean} [bPreserveNodesWithId=false] whether to preserve nodes with an id as well
 * @public
 * @static
 */
sap.ui.core.RenderManager.preserveContent = function(oRootNode,bPreserveRoot,bPreserveNodesWithId) { return null; };

/**
 * 
 * Renders the given control to the provided DOMNode.
 * </p><p>
 * If to control is already rendered in the provided DOMNode the DOM of the control is replaced. If the control
 * is already rendered somewhere else the current DOM of the control is removed and the new DOM is appended
 * to the provided DOMNode.
 * </p><p>
 * This function must not be called within control renderers.
 * @param {sap.ui.core.Control} oControl the Control that should be rendered.
 * @param {DOMNode} oTargetDomNode The node in the dom where the result of the rendering should be inserted.
 * @public
 */
sap.ui.core.RenderManager.prototype.render = function(oControl,oTargetDomNode) { return null; };

/**
 * 
 * Turns the given control into its HTML representation and appends it to the
 * rendering buffer.
 * </p><p>
 * If the given control is undefined or null, then nothing is rendered.
 * @param {sap.ui.core.Control} oControl the control that should be rendered
 * @public
 */
sap.ui.core.RenderManager.prototype.renderControl = function(oControl) { return null; };

/**
 * 
 * @deprecated Not implemented - DO NOT USE
 * @public
 */
sap.ui.core.RenderManager.prototype.translate = function(sKey) { return null; };

/**
 * 
 * Write the given texts to the buffer
 * @param {string|number ...} sText (can be a number too)
 * @return {sap.ui.core.RenderManager} this render manager instance to allow chaining
 * @public
 * @SecSink {*|XSS}
 */
sap.ui.core.RenderManager.prototype.write = function(sText) { return new sap.ui.core.RenderManager(); };

/**
 * 
 * @deprecated Not implemented - DO NOT USE
 * @return {sap.ui.core.RenderManager} this render manager instance to allow chaining
 * @public
 */
sap.ui.core.RenderManager.prototype.writeAcceleratorKey = function() { return new sap.ui.core.RenderManager(); };

/**
 * 
 * Writes the accessibility state (see WAI-ARIA specification) of the provided element into the HTML
 * based on the element's properties and associations.
 * </p><p>
 * The ARIA properties are only written when the accessibility feature is activated in the UI5 configuration.
 * </p><p>
 * The following properties/values to ARIA attribute mappings are done (if the element does have such properties):
 * <code>editable===false</code> => <code>aria-readonly="true"</code>
 * <code>enabled===false</code> => <code>aria-disabled="true"</code>
 * <code>visible===false</code> => <code>aria-hidden="true"</code>
 * <code>required===true</code> => <code>aria-required="true"</code>
 * <code>selected===true</code> => <code>aria-selected="true"</code>
 * <code>checked===true</code> => <code>aria-checked="true"</code>
 * </p><p>
 * Additionally the association <code>ariaDescribedBy</code> and <code>ariaLabelledBy</code> are used to write
 * the id lists of the ARIA attributes <code>aria-describedby</code> and <code>aria-labelledby</code>.
 * </p><p>
 * Note: This function is only a heuristic of a control property to ARIA attribute mapping. Control developers
 * have to check whether it fullfills their requirements. In case of problems (for example the RadioButton has a
 * <code>selected</code> property but must provide an <code>aria-checked</code> attribute) the auto-generated
 * result of this function can be influenced via the parameter <code>mProps</code> as described below.
 * </p><p>
 * The parameter <code>mProps</code> can be used to either provide additional attributes which should be added and/or
 * to avoid the automatic generation of single ARIA attributes. The 'aria-' prefix will be prepended automatically to the keys
 * (Exception: Attribute 'role' does not get the prefix 'aria-').
 * </p><p>
 * Examples:
 * <code>{hidden : true}</code> results in <code>aria-hidden="true"</code> independent of the precense or absence of
 * the visibility property.
 * <code>{hidden : null}</code> ensures that no <code>aria-hidden</code> attribute is written independent of the precense
 * or absence of the visibility property.
 * The function behaves in the same way for the associations <code>ariaDescribedBy</code> and <code>ariaLabelledBy</code>.
 * To append additional values to the auto-generated <code>aria-describedby</code> and <code>aria-labelledby</code> attributes
 * the following format can be used:
 * <code>{describedby : {value: "id1 id2", append: true}}</code> => <code>aria-describedby="ida idb id1 id2"</code> (assuming that "ida idb"
 * is the auto-generated part based on the association <code>ariaDescribedBy</code>).
 * @param {sap.ui.core.Element}
 *            [oElement] the element whose accessibility state should be rendered
 * @param {Object}
 *            [mProps] a map of properties that should be added additionally or changed.
 * @return {sap.ui.core.RenderManager} this render manager instance to allow chaining
 * @public
 */
sap.ui.core.RenderManager.prototype.writeAccessibilityState = function(oElement,mProps) { return new sap.ui.core.RenderManager(); };

/**
 * 
 * Writes the attribute and its value into the HTML
 * @param {string} sName the name of the attribute
 * @param {string | number | boolean} value the value of the attribute
 * @return {sap.ui.core.RenderManager} this render manager instance to allow chaining
 * @public
 * @SecSink {0 1|XSS} Attributes are written to HTML without validation
 */
sap.ui.core.RenderManager.prototype.writeAttribute = function(sName,value) { return new sap.ui.core.RenderManager(); };

/**
 * 
 * Writes the attribute and its value into the HTML
 * @param sName the name of the attribute
 * @param sValue the value of the attribute
 * @return {sap.ui.core.RenderManager} this render manager instance to allow chaining
 * @public
 * @SecSink {0|XSS}
 */
sap.ui.core.RenderManager.prototype.writeAttributeEscaped = function(sName,sValue) { return new sap.ui.core.RenderManager(); };

/**
 * 
 * Writes and flushes the class collection (all CSS classes added by "addClass()" since the last flush).
 * Also writes the custom style classes added by the application with "addStyleClass(...)". Custom classes are
 * added by default from the currently rendered control. If an oElement is given, this Element's custom style
 * classes are added instead. If oElement === false, no custom style classes are added.
 * @param {sap.ui.core.Element | boolean} [oElement] an Element from which to add custom style classes (instead of adding from the control itself)
 * @return {sap.ui.core.RenderManager} this render manager instance to allow chaining
 * @public
 */
sap.ui.core.RenderManager.prototype.writeClasses = function(oElement) { return new sap.ui.core.RenderManager(); };

/**
 * 
 * Writes the controls data into the HTML.
 * Control Data consists at least of the id of a control
 * @param {sap.ui.core.Control} oControl the control whose identifying information should be written to the buffer
 * @return {sap.ui.core.RenderManager} this render manager instance to allow chaining
 * @public
 */
sap.ui.core.RenderManager.prototype.writeControlData = function(oControl) { return new sap.ui.core.RenderManager(); };

/**
 * 
 * Writes the elements data into the HTML.
 * Element Data consists at least of the id of a element
 * @param {sap.ui.core.Element} oElement the element whose identifying information should be written to the buffer
 * @return {sap.ui.core.RenderManager} this render manager instance to allow chaining
 * @public
 */
sap.ui.core.RenderManager.prototype.writeElementData = function(oElement) { return new sap.ui.core.RenderManager(); };

/**
 * 
 * Escape text for HTML and write it to the buffer
 * @param {string} sText
 * @param {boolean} bLineBreaks Whether to convert linebreaks into <br> tags
 * @return {sap.ui.core.RenderManager} this render manager instance to allow chaining
 * @public
 */
sap.ui.core.RenderManager.prototype.writeEscaped = function(sText,bLineBreaks) { return new sap.ui.core.RenderManager(); };

/**
 * 
 * Writes and flushes the style collection
 * @return {sap.ui.core.RenderManager} this render manager instance to allow chaining
 * @public
 */
sap.ui.core.RenderManager.prototype.writeStyles = function() { return new sap.ui.core.RenderManager(); };


// ---- sap.ui.core.ResizeHandler --------------------------------------------------------------------------

/**
 * 
 * Deregisters the registered handler for resize events with the given ID.
 * @param {string} Registration ID
 * @public
 * @memberOf sap.ui.core.ResizeHandler
 */
sap.ui.core.ResizeHandler.deregister = function(Registration) { return null; };

/**
 * 
 * Registers the given handler for resize events on the given
 * DOM reference or Control.
 * @param {DOMElement|Control} oRef the Control or the DOM reference for which the given handler should be registered (beside the window)
 * @param {function} fHandler the handler which should be called on a resize event
 * @return {string} Registration ID which can be used for deregistering
 * @public
 * @memberOf sap.ui.core.ResizeHandler
 */
sap.ui.core.ResizeHandler.register = function(oRef,fHandler) { return ""; };


// ---- sap.ui.core.ScrollBar --------------------------------------------------------------------------

/**
 * 
 * Constructor for a new ScrollBar.
 * </p><p>
 * Accepts an object literal <code>mSettings</code> that defines initial 
 * property values, aggregated and associated objects as well as event handlers. 
 * </p><p>
 * If the name of a setting is ambiguous (e.g. a property has the same name as an event), 
 * then the framework assumes property, aggregation, association, event in that order. 
 * To override this automatic resolution, one of the prefixes "aggregation:", "association:" 
 * or "event:" can be added to the name of the setting (such a prefixed name must be
 * enclosed in single or double quotes).
 * </p><p>
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getVertical vertical} : boolean (default: true)</li>
 * <li>{@link #getScrollPosition scrollPosition} : int</li>
 * <li>{@link #getSize size} : sap.ui.core.CSSSize</li>
 * <li>{@link #getContentSize contentSize} : sap.ui.core.CSSSize</li>
 * <li>{@link #getSteps steps} : int</li></ul>
 * </li>
 * <li>Aggregations
 * <ul></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link sap.ui.core.ScrollBar#event:scroll scroll} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
 * </li>
 * </ul> 
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * The ScrollBar control can be used for virtual scrolling of a certain area.
 * This means: to simulate a very large scrollable area when technically the area is small and the control takes care of displaying the respective part only. E.g. a Table control can take care of only rendering the currently visible rows and use this ScrollBar control to make the user think he actually scrolls through a long list.
 * @extends sap.ui.core.Control
 * @version 1.15.1-SNAPSHOT
 * @constructor   
 * @public
 * 
 */
sap.ui.core.ScrollBar = function(sId,mSettings) {};
/**
 * 
 * Scroll event. 
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {sap.ui.core.ScrollBarAction} oControlEvent.getParameters.action Actions are: Click on track, button, drag of thumb, or mouse wheel click.
 * @param {boolean} oControlEvent.getParameters.forward Direction of scrolling: back (up) or forward (down).
 * @param {int} oControlEvent.getParameters.newScrollPos Current Scroll position either in pixels or in steps.
 * @param {int} oControlEvent.getParameters.oldScrollPos Old Scroll position - can be in pixels or in steps.
 * @public
 */
sap.ui.core.ScrollBar.prototype.scroll = function(oControlEvent) { return null; };

/**
 * 
 * Attach event handler <code>fnFunction</code> to the 'scroll' event of this <code>sap.ui.core.ScrollBar</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ui.core.ScrollBar</code>.<br/> itself. 
 * </p><p>
 * Scroll event. 
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener=this] Context object to call the event handler with. Defaults to this <code>sap.ui.core.ScrollBar</code>.<br/> itself.
 * @return {sap.ui.core.ScrollBar} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.core.ScrollBar.prototype.attachScroll = function(oData,fnFunction,oListener) { return new sap.ui.core.ScrollBar(); };

/**
 * 
 * Binds the mouse wheel scroll event of the control that has the scrollbar to the scrollbar itself.
 * @param {string} 
 *         sOOwnerDomRef
 *         Dom ref of the control that uses the scrollbar
 * @type void
 * @public
 */
sap.ui.core.ScrollBar.prototype.bind = function(sOOwnerDomRef) { return null; };

/**
 * 
 * Detach event handler <code>fnFunction</code> from the 'scroll' event of this <code>sap.ui.core.ScrollBar</code>.<br/>
 * </p><p>
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.core.ScrollBar} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.core.ScrollBar.prototype.detachScroll = function(fnFunction,oListener) { return new sap.ui.core.ScrollBar(); };

/**
 * 
 * Creates a new subclass of class sap.ui.core.ScrollBar with name <code>sClassName</code> 
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * </p><p>
 * <code>oClassInfo</code> might contain the same kind of informations as described in {@link sap.ui.core.Element.extend Element.extend}.
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class  
 * @param {function} [FNMetaImpl] constructor function for the metadata object. If not given, it defaults to sap.ui.core.ElementMetadata.
 * @return {function} the created class / constructor function
 * @public
 * @static
 * 
 */
sap.ui.core.ScrollBar.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * 
 * Fire event scroll to attached listeners.
 * </p><p>
 * Expects following event parameters:
 * <ul>
 * <li>'action' of type <code>sap.ui.core.ScrollBarAction</code> Actions are: Click on track, button, drag of thumb, or mouse wheel click.</li>
 * <li>'forward' of type <code>boolean</code> Direction of scrolling: back (up) or forward (down).</li>
 * <li>'newScrollPos' of type <code>int</code> Current Scroll position either in pixels or in steps.</li>
 * <li>'oldScrollPos' of type <code>int</code> Old Scroll position - can be in pixels or in steps.</li>
 * </ul>
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.core.ScrollBar} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.ui.core.ScrollBar.prototype.fireScroll = function(mArguments) { return new sap.ui.core.ScrollBar(); };

/**
 * 
 * Getter for property <code>contentSize</code>.
 * Size of the scrollable content (in pixels).
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {sap.ui.core.CSSSize} the value of property <code>contentSize</code>
 * @public
 * 
 */
sap.ui.core.ScrollBar.prototype.getContentSize = function() { return new sap.ui.core.CSSSize(); };

/**
 * 
 * Getter for property <code>scrollPosition</code>.
 * Scroll position in steps or pixels.
 * </p><p>
 * Default value is <code></code>
 * @return {int} the value of property <code>scrollPosition</code>
 * @public
 * 
 */
sap.ui.core.ScrollBar.prototype.getScrollPosition = function() { return 0; };

/**
 * 
 * Getter for property <code>size</code>.
 * Size of the Scrollbar (in pixels).
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {sap.ui.core.CSSSize} the value of property <code>size</code>
 * @public
 * 
 */
sap.ui.core.ScrollBar.prototype.getSize = function() { return new sap.ui.core.CSSSize(); };

/**
 * 
 * Getter for property <code>steps</code>.
 * Number of steps to scroll. Used if the size of the content is not known as the data is loaded dynamically.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {int} the value of property <code>steps</code>
 * @public
 * 
 */
sap.ui.core.ScrollBar.prototype.getSteps = function() { return 0; };

/**
 * 
 * Getter for property <code>vertical</code>.
 * Orientation. Defines if the Scrollbar is vertical or horizontal.
 * </p><p>
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>vertical</code>
 * @public
 * 
 */
sap.ui.core.ScrollBar.prototype.getVertical = function() { return false; };

/**
 * 
 * Page Down is used to scroll one page forward.
 * @type void
 * @public
 */
sap.ui.core.ScrollBar.prototype.pageDown = function() { return null; };

/**
 * 
 * Page Up is used to scroll one page back.
 * @type void
 * @public
 */
sap.ui.core.ScrollBar.prototype.pageUp = function() { return null; };

/**
 * 
 * Setter for property <code>contentSize</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {sap.ui.core.CSSSize} sContentSize  new value for property <code>contentSize</code>
 * @return {sap.ui.core.ScrollBar} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.core.ScrollBar.prototype.setContentSize = function(sContentSize) { return new sap.ui.core.ScrollBar(); };

/**
 * 
 * Setter for property <code>scrollPosition</code>.
 * </p><p>
 * Default value is <code></code> 
 * @param {int} iScrollPosition  new value for property <code>scrollPosition</code>
 * @return {sap.ui.core.ScrollBar} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.core.ScrollBar.prototype.setScrollPosition = function(iScrollPosition) { return new sap.ui.core.ScrollBar(); };

/**
 * 
 * Setter for property <code>size</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {sap.ui.core.CSSSize} sSize  new value for property <code>size</code>
 * @return {sap.ui.core.ScrollBar} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.core.ScrollBar.prototype.setSize = function(sSize) { return new sap.ui.core.ScrollBar(); };

/**
 * 
 * Setter for property <code>steps</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {int} iSteps  new value for property <code>steps</code>
 * @return {sap.ui.core.ScrollBar} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.core.ScrollBar.prototype.setSteps = function(iSteps) { return new sap.ui.core.ScrollBar(); };

/**
 * 
 * Setter for property <code>vertical</code>.
 * </p><p>
 * Default value is <code>true</code> 
 * @param {boolean} bVertical  new value for property <code>vertical</code>
 * @return {sap.ui.core.ScrollBar} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.core.ScrollBar.prototype.setVertical = function(bVertical) { return new sap.ui.core.ScrollBar(); };

/**
 * 
 * Unbinds the mouse wheel scroll event of the control that has the scrollbar
 * @param {string} 
 *         sOOwnerDomRef
 *         Dom ref of the Control that uses the scrollbar
 * @type void
 * @public
 */
sap.ui.core.ScrollBar.prototype.unbind = function(sOOwnerDomRef) { return null; };


// ---- sap.ui.core.ScrollBarAction --------------------------------------------------------------------------

// dummy function to make Eclipse aware of namespace
sap.ui.core.ScrollBarAction.toString = function() { return ""; };

// ---- sap.ui.core.Scrolling --------------------------------------------------------------------------

// dummy function to make Eclipse aware of namespace
sap.ui.core.Scrolling.toString = function() { return ""; };

// ---- sap.ui.core.search --------------------------------------------------------------------------


// ---- sap.ui.core.search.OpenSearchProvider --------------------------------------------------------------------------

/**
 * 
 * Constructor for a new search/OpenSearchProvider.
 * </p><p>
 * Accepts an object literal <code>mSettings</code> that defines initial 
 * property values, aggregated and associated objects as well as event handlers. 
 * </p><p>
 * If the name of a setting is ambiguous (e.g. a property has the same name as an event), 
 * then the framework assumes property, aggregation, association, event in that order. 
 * To override this automatic resolution, one of the prefixes "aggregation:", "association:" 
 * or "event:" can be added to the name of the setting (such a prefixed name must be
 * enclosed in single or double quotes).
 * </p><p>
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getSuggestUrl suggestUrl} : sap.ui.core.URI</li>
 * <li>{@link #getSuggestType suggestType} : string (default: 'json')</li></ul>
 * </li>
 * <li>Aggregations
 * <ul></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul></ul>
 * </li>
 * </ul> 
 * </p><p>
 * </p><p>
 * In addition, all settings applicable to the base type {@link sap.ui.core.search.SearchProvider#constructor sap.ui.core.search.SearchProvider}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * A SearchProvider which uses the OpenSearch protocol (either JSON or XML).
 * @extends sap.ui.core.search.SearchProvider
 * @version 1.15.1-SNAPSHOT
 * @constructor   
 * @public
 * 
 */
sap.ui.core.search.OpenSearchProvider = function(sId,mSettings) {};
/**
 * 
 * Creates a new subclass of class sap.ui.core.search.OpenSearchProvider with name <code>sClassName</code> 
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * </p><p>
 * <code>oClassInfo</code> might contain the same kind of informations as described in {@link sap.ui.core.Element.extend Element.extend}.
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class  
 * @param {function} [FNMetaImpl] constructor function for the metadata object. If not given, it defaults to sap.ui.core.ElementMetadata.
 * @return {function} the created class / constructor function
 * @public
 * @static
 * 
 */
sap.ui.core.search.OpenSearchProvider.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * 
 * Getter for property <code>suggestType</code>.
 * The type of data which is provided by the given suggestUrl: either 'json' or 'xml'.
 * </p><p>
 * Default value is <code>json</code>
 * @return {string} the value of property <code>suggestType</code>
 * @public
 * 
 */
sap.ui.core.search.OpenSearchProvider.prototype.getSuggestType = function() { return ""; };

/**
 * 
 * Getter for property <code>suggestUrl</code>.
 * The URL for suggestions of the search provider. As placeholder for the concrete search queries '{searchTerms}' must be used. For cross domain requests maybe a proxy must be used.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {sap.ui.core.URI} the value of property <code>suggestUrl</code>
 * @public
 * 
 */
sap.ui.core.search.OpenSearchProvider.prototype.getSuggestUrl = function() { return new sap.ui.core.URI(); };

/**
 * 
 * Setter for property <code>suggestType</code>.
 * </p><p>
 * Default value is <code>json</code> 
 * @param {string} sSuggestType  new value for property <code>suggestType</code>
 * @return {sap.ui.core.search.OpenSearchProvider} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.core.search.OpenSearchProvider.prototype.setSuggestType = function(sSuggestType) { return new sap.ui.core.search.OpenSearchProvider(); };

/**
 * 
 * Setter for property <code>suggestUrl</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {sap.ui.core.URI} sSuggestUrl  new value for property <code>suggestUrl</code>
 * @return {sap.ui.core.search.OpenSearchProvider} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.core.search.OpenSearchProvider.prototype.setSuggestUrl = function(sSuggestUrl) { return new sap.ui.core.search.OpenSearchProvider(); };


// ---- sap.ui.core.search.SearchProvider --------------------------------------------------------------------------

/**
 * 
 * Constructor for a new search/SearchProvider.
 * </p><p>
 * Accepts an object literal <code>mSettings</code> that defines initial 
 * property values, aggregated and associated objects as well as event handlers. 
 * </p><p>
 * If the name of a setting is ambiguous (e.g. a property has the same name as an event), 
 * then the framework assumes property, aggregation, association, event in that order. 
 * To override this automatic resolution, one of the prefixes "aggregation:", "association:" 
 * or "event:" can be added to the name of the setting (such a prefixed name must be
 * enclosed in single or double quotes).
 * </p><p>
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getIcon icon} : string</li></ul>
 * </li>
 * <li>Aggregations
 * <ul></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul></ul>
 * </li>
 * </ul> 
 * </p><p>
 * </p><p>
 * In addition, all settings applicable to the base type {@link sap.ui.core.Element#constructor sap.ui.core.Element}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * Abstract base class for all SearchProviders which can be e.g. attached to a SearchField. Do not create instances of this class, but use a concrete sub class instead.
 * @extends sap.ui.core.Element
 * @version 1.15.1-SNAPSHOT
 * @constructor   
 * @public
 * 
 */
sap.ui.core.search.SearchProvider = function(sId,mSettings) {};
/**
 * 
 * Creates a new subclass of class sap.ui.core.search.SearchProvider with name <code>sClassName</code> 
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * </p><p>
 * <code>oClassInfo</code> might contain the same kind of informations as described in {@link sap.ui.core.Element.extend Element.extend}.
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class  
 * @param {function} [FNMetaImpl] constructor function for the metadata object. If not given, it defaults to sap.ui.core.ElementMetadata.
 * @return {function} the created class / constructor function
 * @public
 * @static
 * 
 */
sap.ui.core.search.SearchProvider.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * 
 * Getter for property <code>icon</code>.
 * Icon of the Search Provider
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {string} the value of property <code>icon</code>
 * @public
 * 
 */
sap.ui.core.search.SearchProvider.prototype.getIcon = function() { return ""; };

/**
 * 
 * Setter for property <code>icon</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {string} sIcon  new value for property <code>icon</code>
 * @return {sap.ui.core.search.SearchProvider} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.core.search.SearchProvider.prototype.setIcon = function(sIcon) { return new sap.ui.core.search.SearchProvider(); };

/**
 * 
 * Call this function to get suggest values from the search provider.
 * The given callback function is called with the suggest value (type 'string', 1st parameter)
 * and an array of the suggestions (type '[string]', 2nd parameter).
 * @param {string} sValue The value for which suggestions are requested.
 * @param {function} fCallBack The callback function which is called when the suggestions are available.
 * @type void
 * @public
 */
sap.ui.core.search.SearchProvider.prototype.suggest = function(sValue,fCallBack) { return null; };


// ---- sap.ui.core.SeparatorItem --------------------------------------------------------------------------

/**
 * 
 * Constructor for a new SeparatorItem.
 * </p><p>
 * Accepts an object literal <code>mSettings</code> that defines initial 
 * property values, aggregated and associated objects as well as event handlers. 
 * </p><p>
 * If the name of a setting is ambiguous (e.g. a property has the same name as an event), 
 * then the framework assumes property, aggregation, association, event in that order. 
 * To override this automatic resolution, one of the prefixes "aggregation:", "association:" 
 * or "event:" can be added to the name of the setting (such a prefixed name must be
 * enclosed in single or double quotes).
 * </p><p>
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul></ul>
 * </li>
 * <li>Aggregations
 * <ul></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul></ul>
 * </li>
 * </ul> 
 * </p><p>
 * </p><p>
 * In addition, all settings applicable to the base type {@link sap.ui.core.Item#constructor sap.ui.core.Item}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * An item that provides a visual separation. It borrows all its methods from the classes sap.ui.core.Item, sap.ui.core.Element,
 * sap.ui.base.EventProvider, and sap.ui.base.Object.
 * @extends sap.ui.core.Item
 * @version 1.15.1-SNAPSHOT
 * @constructor   
 * @public
 * 
 */
sap.ui.core.SeparatorItem = function(sId,mSettings) {};
/**
 * 
 * Creates a new subclass of class sap.ui.core.SeparatorItem with name <code>sClassName</code> 
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * </p><p>
 * <code>oClassInfo</code> might contain the same kind of informations as described in {@link sap.ui.core.Element.extend Element.extend}.
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class  
 * @param {function} [FNMetaImpl] constructor function for the metadata object. If not given, it defaults to sap.ui.core.ElementMetadata.
 * @return {function} the created class / constructor function
 * @public
 * @static
 * 
 */
sap.ui.core.SeparatorItem.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };


// ---- sap.ui.core.support --------------------------------------------------------------------------


// ---- sap.ui.core.support.plugins --------------------------------------------------------------------------


// ---- sap.ui.core.support.Support.EventType --------------------------------------------------------------------------


// ---- sap.ui.core.support.Support.StubType --------------------------------------------------------------------------


// ---- sap.ui.core.TextAlign --------------------------------------------------------------------------

// dummy function to make Eclipse aware of namespace
sap.ui.core.TextAlign.toString = function() { return ""; };

// ---- sap.ui.core.TextDirection --------------------------------------------------------------------------

// dummy function to make Eclipse aware of namespace
sap.ui.core.TextDirection.toString = function() { return ""; };

// ---- sap.ui.core.theming --------------------------------------------------------------------------


// ---- sap.ui.core.theming.Parameters --------------------------------------------------------------------------

/**
 * 
 * Returns the current value for the given CSS parameter.
 * If no parameter is given, a map containing all parameters is returned. This map is a copy, so changing values in the map does not have any effect.
 * For any other input or an undefined parameter name, the result is undefined.
 * @param {string} sName the CSS parameter name
 * @returns the CSS parameter value
 * @public
 * @memberOf sap.ui.core.theming.Parameters
 */
sap.ui.core.theming.Parameters.get = function(sName) { return null; };

/**
 * 
 * Resets the CSS parameters which finally will reload the parameters 
 * the next time they are queried via the method <code>get</code>.
 * @public
 * @memberOf sap.ui.core.theming.Parameters
 */
sap.ui.core.theming.Parameters.reset = function() { return null; };


// ---- sap.ui.core.Title --------------------------------------------------------------------------

/**
 * 
 * Constructor for a new Title.
 * </p><p>
 * Accepts an object literal <code>mSettings</code> that defines initial 
 * property values, aggregated and associated objects as well as event handlers. 
 * </p><p>
 * If the name of a setting is ambiguous (e.g. a property has the same name as an event), 
 * then the framework assumes property, aggregation, association, event in that order. 
 * To override this automatic resolution, one of the prefixes "aggregation:", "association:" 
 * or "event:" can be added to the name of the setting (such a prefixed name must be
 * enclosed in single or double quotes).
 * </p><p>
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getText text} : string</li>
 * <li>{@link #getIcon icon} : sap.ui.core.URI</li>
 * <li>{@link #getLevel level} : sap.ui.core.TitleLevel (default: sap.ui.core.TitleLevel.Auto)</li>
 * <li>{@link #getEmphasized emphasized} : boolean (default: false)</li></ul>
 * </li>
 * <li>Aggregations
 * <ul></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul></ul>
 * </li>
 * </ul> 
 * </p><p>
 * </p><p>
 * In addition, all settings applicable to the base type {@link sap.ui.core.Element#constructor sap.ui.core.Element}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * Represents a title element that can be used for aggregation with other controls
 * @extends sap.ui.core.Element
 * @version 1.15.1-SNAPSHOT
 * @constructor   
 * @public
 * @since 1.16.0
 * 
 */
sap.ui.core.Title = function(sId,mSettings) {};
/**
 * 
 * Creates a new subclass of class sap.ui.core.Title with name <code>sClassName</code> 
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * </p><p>
 * <code>oClassInfo</code> might contain the same kind of informations as described in {@link sap.ui.core.Element.extend Element.extend}.
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class  
 * @param {function} [FNMetaImpl] constructor function for the metadata object. If not given, it defaults to sap.ui.core.ElementMetadata.
 * @return {function} the created class / constructor function
 * @public
 * @static
 * 
 */
sap.ui.core.Title.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * 
 * Getter for property <code>emphasized</code>.
 * If set the title is displayed emphasized.
 * This feature is nor supported by all controls using the Title.control.
 * </p><p>
 * Default value is <code>false</code>
 * @return {boolean} the value of property <code>emphasized</code>
 * @public
 * 
 */
sap.ui.core.Title.prototype.getEmphasized = function() { return false; };

/**
 * 
 * Getter for property <code>icon</code>.
 * Defines the URL for icon display
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {sap.ui.core.URI} the value of property <code>icon</code>
 * @public
 * 
 */
sap.ui.core.Title.prototype.getIcon = function() { return new sap.ui.core.URI(); };

/**
 * 
 * Getter for property <code>level</code>.
 * Defines the level of the title. If set to auto the level of the title is chosen by the control rendering the title.
 * </p><p>
 * Currently not all controls using the Title.control supporting this property.
 * </p><p>
 * Default value is <code>Auto</code>
 * @return {sap.ui.core.TitleLevel} the value of property <code>level</code>
 * @public
 * 
 */
sap.ui.core.Title.prototype.getLevel = function() { return new sap.ui.core.TitleLevel(); };

/**
 * 
 * Getter for property <code>text</code>.
 * Defines the title text
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {string} the value of property <code>text</code>
 * @public
 * 
 */
sap.ui.core.Title.prototype.getText = function() { return ""; };

/**
 * 
 * Setter for property <code>emphasized</code>.
 * </p><p>
 * Default value is <code>false</code> 
 * @param {boolean} bEmphasized  new value for property <code>emphasized</code>
 * @return {sap.ui.core.Title} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.core.Title.prototype.setEmphasized = function(bEmphasized) { return new sap.ui.core.Title(); };

/**
 * 
 * Setter for property <code>icon</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {sap.ui.core.URI} sIcon  new value for property <code>icon</code>
 * @return {sap.ui.core.Title} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.core.Title.prototype.setIcon = function(sIcon) { return new sap.ui.core.Title(); };

/**
 * 
 * Setter for property <code>level</code>.
 * </p><p>
 * Default value is <code>Auto</code> 
 * @param {sap.ui.core.TitleLevel} oLevel  new value for property <code>level</code>
 * @return {sap.ui.core.Title} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.core.Title.prototype.setLevel = function(oLevel) { return new sap.ui.core.Title(); };

/**
 * 
 * Setter for property <code>text</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {string} sText  new value for property <code>text</code>
 * @return {sap.ui.core.Title} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.core.Title.prototype.setText = function(sText) { return new sap.ui.core.Title(); };


// ---- sap.ui.core.TitleLevel --------------------------------------------------------------------------

// dummy function to make Eclipse aware of namespace
sap.ui.core.TitleLevel.toString = function() { return ""; };

// ---- sap.ui.core.tmpl --------------------------------------------------------------------------


// ---- sap.ui.core.tmpl.DOMAttribute --------------------------------------------------------------------------

/**
 * 
 * Constructor for a new tmpl/DOMAttribute.
 * </p><p>
 * Accepts an object literal <code>mSettings</code> that defines initial 
 * property values, aggregated and associated objects as well as event handlers. 
 * </p><p>
 * If the name of a setting is ambiguous (e.g. a property has the same name as an event), 
 * then the framework assumes property, aggregation, association, event in that order. 
 * To override this automatic resolution, one of the prefixes "aggregation:", "association:" 
 * or "event:" can be added to the name of the setting (such a prefixed name must be
 * enclosed in single or double quotes).
 * </p><p>
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getName name} : string</li>
 * <li>{@link #getValue value} : string</li></ul>
 * </li>
 * <li>Aggregations
 * <ul></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul></ul>
 * </li>
 * </ul> 
 * </p><p>
 * </p><p>
 * In addition, all settings applicable to the base type {@link sap.ui.core.Element#constructor sap.ui.core.Element}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * Represents a DOM attribute of a DOM element.
 * @extends sap.ui.core.Element
 * @version 1.15.1-SNAPSHOT
 * @constructor   
 * @public
 * @experimental Since version 1.15. 
 * The templating might be changed in future versions.
 * 
 */
sap.ui.core.tmpl.DOMAttribute = function(sId,mSettings) {};
/**
 * 
 * Creates a new subclass of class sap.ui.core.tmpl.DOMAttribute with name <code>sClassName</code> 
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * </p><p>
 * <code>oClassInfo</code> might contain the same kind of informations as described in {@link sap.ui.core.Element.extend Element.extend}.
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class  
 * @param {function} [FNMetaImpl] constructor function for the metadata object. If not given, it defaults to sap.ui.core.ElementMetadata.
 * @return {function} the created class / constructor function
 * @public
 * @static
 * 
 */
sap.ui.core.tmpl.DOMAttribute.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * 
 * Getter for property <code>name</code>.
 * Name of the DOM attribute
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {string} the value of property <code>name</code>
 * @public
 * 
 */
sap.ui.core.tmpl.DOMAttribute.prototype.getName = function() { return ""; };

/**
 * 
 * Getter for property <code>value</code>.
 * Value of the DOM attribute
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {string} the value of property <code>value</code>
 * @public
 * 
 */
sap.ui.core.tmpl.DOMAttribute.prototype.getValue = function() { return ""; };

/**
 * 
 * Setter for property <code>name</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {string} sName  new value for property <code>name</code>
 * @return {sap.ui.core.tmpl.DOMAttribute} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.core.tmpl.DOMAttribute.prototype.setName = function(sName) { return new sap.ui.core.tmpl.DOMAttribute(); };

/**
 * 
 * Setter for property <code>value</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {string} sValue  new value for property <code>value</code>
 * @return {sap.ui.core.tmpl.DOMAttribute} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.core.tmpl.DOMAttribute.prototype.setValue = function(sValue) { return new sap.ui.core.tmpl.DOMAttribute(); };


// ---- sap.ui.core.tmpl.DOMElement --------------------------------------------------------------------------

/**
 * 
 * Constructor for a new tmpl/DOMElement.
 * </p><p>
 * Accepts an object literal <code>mSettings</code> that defines initial 
 * property values, aggregated and associated objects as well as event handlers. 
 * </p><p>
 * If the name of a setting is ambiguous (e.g. a property has the same name as an event), 
 * then the framework assumes property, aggregation, association, event in that order. 
 * To override this automatic resolution, one of the prefixes "aggregation:", "association:" 
 * or "event:" can be added to the name of the setting (such a prefixed name must be
 * enclosed in single or double quotes).
 * </p><p>
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getText text} : string</li>
 * <li>{@link #getTag tag} : string (default: 'span')</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getAttributes attributes} : sap.ui.core.tmpl.DOMAttribute[]</li>
 * <li>{@link #getElements elements} : sap.ui.core.tmpl.DOMElement[]</li></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul></ul>
 * </li>
 * </ul> 
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * Represents a DOM element. It allows to use databinding for the properties and nested DOM attributes.
 * @extends sap.ui.core.Control
 * @version 1.15.1-SNAPSHOT
 * @constructor   
 * @public
 * @experimental Since version 1.15. 
 * The templating might be changed in future versions.
 * 
 */
sap.ui.core.tmpl.DOMElement = function(sId,mSettings) {};
/**
 * 
 * Adds some attribute <code>oAttribute</code> 
 * to the aggregation named <code>attributes</code>.
 * @param {sap.ui.core.tmpl.DOMAttribute}
 *            oAttribute the attribute to add; if empty, nothing is inserted
 * @return {sap.ui.core.tmpl.DOMElement} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.core.tmpl.DOMElement.prototype.addAttribute = function(oAttribute) { return new sap.ui.core.tmpl.DOMElement(); };

/**
 * 
 * Adds some element <code>oElement</code> 
 * to the aggregation named <code>elements</code>.
 * @param {sap.ui.core.tmpl.DOMElement}
 *            oElement the element to add; if empty, nothing is inserted
 * @return {sap.ui.core.tmpl.DOMElement} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.core.tmpl.DOMElement.prototype.addElement = function(oElement) { return new sap.ui.core.tmpl.DOMElement(); };

/**
 * 
 * Returns the value of a DOM attribute if available or undefined if the DOM attribute is not available when using this method with the parameter name only. When using the method with the parameter name and value the method acts as a setter and sets the value of a DOM attribute. Int this case the return value is the reference to this DOM element to support method chaining. If you pass null as value of the attribute the attribute will be removed.
 * @param {string} 
 *         sName
 *         The name of the DOM attribute.
 * @param {string} 
 *         sValue
 *         The value of the DOM attribute. If the value is undefined the DOM attribute will be removed.
 * @type string
 * @public
 */
sap.ui.core.tmpl.DOMElement.prototype.attr = function(sName,sValue) { return ""; };

/**
 * 
 * Destroys all the attributes in the aggregation 
 * named <code>attributes</code>.
 * @return {sap.ui.core.tmpl.DOMElement} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.core.tmpl.DOMElement.prototype.destroyAttributes = function() { return new sap.ui.core.tmpl.DOMElement(); };

/**
 * 
 * Destroys all the elements in the aggregation 
 * named <code>elements</code>.
 * @return {sap.ui.core.tmpl.DOMElement} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.core.tmpl.DOMElement.prototype.destroyElements = function() { return new sap.ui.core.tmpl.DOMElement(); };

/**
 * 
 * Creates a new subclass of class sap.ui.core.tmpl.DOMElement with name <code>sClassName</code> 
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * </p><p>
 * <code>oClassInfo</code> might contain the same kind of informations as described in {@link sap.ui.core.Element.extend Element.extend}.
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class  
 * @param {function} [FNMetaImpl] constructor function for the metadata object. If not given, it defaults to sap.ui.core.ElementMetadata.
 * @return {function} the created class / constructor function
 * @public
 * @static
 * 
 */
sap.ui.core.tmpl.DOMElement.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * 
 * Getter for aggregation <code>attributes</code>.<br/>
 * DOM attributes which are rendered as part of the DOM element and bindable
 * @return {sap.ui.core.tmpl.DOMAttribute[]}
 * @public
 * 
 */
sap.ui.core.tmpl.DOMElement.prototype.getAttributes = function() { return new Array(); };

/**
 * 
 * Getter for aggregation <code>elements</code>.<br/>
 * Nested DOM elements to support nested bindable structures
 * @return {sap.ui.core.tmpl.DOMElement[]}
 * @public
 * 
 */
sap.ui.core.tmpl.DOMElement.prototype.getElements = function() { return new Array(); };

/**
 * 
 * Getter for property <code>tag</code>.
 * The HTML-tag of the DOM element which contains the text
 * </p><p>
 * Default value is <code>span</code>
 * @return {string} the value of property <code>tag</code>
 * @public
 * 
 */
sap.ui.core.tmpl.DOMElement.prototype.getTag = function() { return ""; };

/**
 * 
 * Getter for property <code>text</code>.
 * The text content of the DOM element
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {string} the value of property <code>text</code>
 * @public
 * 
 */
sap.ui.core.tmpl.DOMElement.prototype.getText = function() { return ""; };

/**
 * 
 * Checks for the provided <code>sap.ui.core.tmpl.DOMAttribute</code> in the aggregation named <code>attributes</code> 
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.core.tmpl.DOMAttribute}
 *            oAttribute the attribute whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * 
 */
sap.ui.core.tmpl.DOMElement.prototype.indexOfAttribute = function(oAttribute) { return 0; };

/**
 * 
 * Checks for the provided <code>sap.ui.core.tmpl.DOMElement</code> in the aggregation named <code>elements</code> 
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.core.tmpl.DOMElement}
 *            oElement the element whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * 
 */
sap.ui.core.tmpl.DOMElement.prototype.indexOfElement = function(oElement) { return 0; };

/**
 * 
 * Inserts a attribute into the aggregation named <code>attributes</code>.
 * @param {sap.ui.core.tmpl.DOMAttribute}
 *          oAttribute the attribute to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the attribute should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the attribute is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the attribute is inserted at 
 *             the last position        
 * @return {sap.ui.core.tmpl.DOMElement} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.core.tmpl.DOMElement.prototype.insertAttribute = function(oAttribute,iIndex) { return new sap.ui.core.tmpl.DOMElement(); };

/**
 * 
 * Inserts a element into the aggregation named <code>elements</code>.
 * @param {sap.ui.core.tmpl.DOMElement}
 *          oElement the element to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the element should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the element is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the element is inserted at 
 *             the last position        
 * @return {sap.ui.core.tmpl.DOMElement} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.core.tmpl.DOMElement.prototype.insertElement = function(oElement,iIndex) { return new sap.ui.core.tmpl.DOMElement(); };

/**
 * 
 * Removes all the controls in the aggregation named <code>attributes</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.core.tmpl.DOMAttribute[]} an array of the removed elements (might be empty)
 * @public
 * 
 */
sap.ui.core.tmpl.DOMElement.prototype.removeAllAttributes = function() { return new Array(); };

/**
 * 
 * Removes all the controls in the aggregation named <code>elements</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.core.tmpl.DOMElement[]} an array of the removed elements (might be empty)
 * @public
 * 
 */
sap.ui.core.tmpl.DOMElement.prototype.removeAllElements = function() { return new Array(); };

/**
 * 
 * Removes the DOM attribute for the given name and returns the reference to this DOM element to support method chaining.
 * @param {string} 
 *         sName
 *         The name of the DOM attribute.
 * @type sap.ui.core.tmpl.DOMElement
 * @public
 */
sap.ui.core.tmpl.DOMElement.prototype.removeAttr = function(sName) { return new sap.ui.core.tmpl.DOMElement(); };

/**
 * 
 * Removes an attribute from the aggregation named <code>attributes</code>.
 * @param {int | string | sap.ui.core.tmpl.DOMAttribute} vAttribute the attribute to remove or its index or id
 * @return {sap.ui.core.tmpl.DOMAttribute} the removed attribute or null
 * @public
 * 
 */
sap.ui.core.tmpl.DOMElement.prototype.removeAttribute = function(vAttribute) { return new sap.ui.core.tmpl.DOMAttribute(); };

/**
 * 
 * Removes an element from the aggregation named <code>elements</code>.
 * @param {int | string | sap.ui.core.tmpl.DOMElement} vElement the element to remove or its index or id
 * @return {sap.ui.core.tmpl.DOMElement} the removed element or null
 * @public
 * 
 */
sap.ui.core.tmpl.DOMElement.prototype.removeElement = function(vElement) { return new sap.ui.core.tmpl.DOMElement(); };

/**
 * 
 * Setter for property <code>tag</code>.
 * </p><p>
 * Default value is <code>span</code> 
 * @param {string} sTag  new value for property <code>tag</code>
 * @return {sap.ui.core.tmpl.DOMElement} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.core.tmpl.DOMElement.prototype.setTag = function(sTag) { return new sap.ui.core.tmpl.DOMElement(); };

/**
 * 
 * Setter for property <code>text</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {string} sText  new value for property <code>text</code>
 * @return {sap.ui.core.tmpl.DOMElement} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.core.tmpl.DOMElement.prototype.setText = function(sText) { return new sap.ui.core.tmpl.DOMElement(); };


// ---- sap.ui.core.tmpl.HandlebarsTemplate --------------------------------------------------------------------------

/**
 * 
 * Creates and initializes a new handlebars template with the given <code>sId</code> 
 * and settings.
 * </p><p>
 * The set of allowed entries in the <code>mSettings</code> object depends on
 * the concrete subclass and is described there. 
 * @param {string}
 *            [sId] optional id for the new template; generated automatically if
 *            no non-empty id is given Note: this can be omitted, no matter
 *            whether <code>mSettings</code> will be given or not!
 * @param {object}
 *            [mSettings] optional map/JSON-object with initial settings for the
 *            new component instance
 * @public
 * @class The class for Handlebars Templates.
 * @extends sap.ui.base.ManagedObject
 * @abstract
 * @version 1.15.1-SNAPSHOT
 * @experimental Since 1.15.0. The Template concept is still under construction, so some implementation details can be changed in future.
 */
sap.ui.core.tmpl.HandlebarsTemplate = function(sId,mSettings) {};

// ---- sap.ui.core.tmpl.Template --------------------------------------------------------------------------

/**
 * 
 * Creates and initializes a new template with the given <code>sId</code> and
 * settings.
 * </p><p>
 * The set of allowed entries in the <code>mSettings</code> object depends on
 * the concrete subclass and is described there. 
 * @param {string}
 *            [sId] optional id for the new template; generated automatically if
 *            no non-empty id is given Note: this can be omitted, no matter
 *            whether <code>mSettings</code> will be given or not!
 * @param {object}
 *            [mSettings] optional map/JSON-object with initial settings for the
 *            new component instance
 * @public
 * @class Base Class for Template.
 * @extends sap.ui.base.ManagedObject
 * @abstract
 * @version 1.15.1-SNAPSHOT
 * @experimental Since 1.15.0. The Template concept is still under construction, so some implementation details can be changed in future.
 */
sap.ui.core.tmpl.Template = function(sId,mSettings) {};
/**
 * 
 * Creates an anonymous TemplateControl for the Template.
 * @param {string} sId the control ID
 * @param {object} [oContext] the context for the renderer/templating
 * @return {sap.ui.core.tmpl.TemplateControl} the created control instance
 * @public
 */
sap.ui.core.tmpl.Template.prototype.createControl = function(sId,oContext,oView) { return new sap.ui.core.tmpl.TemplateControl(); };

/**
 * 
 * Declares a new control based on this template and returns the created 
 * class / constructor function. The class is based on the information coming 
 * from the abstract functions <code>createMetadata</code> and 
 * <code>createRenderer</code>.
 * @param {string} sControl the fully qualified name of the control
 * @return {function} the created class / constructor function
 * @public
 */
sap.ui.core.tmpl.Template.prototype.declareControl = function(sControl) { return function() {}; };

/**
 * 
 * Creates a new subclass of class sap.ui.core.tmpl.Template with name <code>sClassName</code> 
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * </p><p>
 * <code>oClassInfo</code> might contain the same kind of informations as described in {@link sap.ui.core.Element.extend Element.extend}.
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class  
 * @param {function} [FNMetaImpl] constructor function for the metadata object. If not given, it defaults to sap.ui.core.ElementMetadata.
 * @return {function} the created class / constructor function
 * @public
 * @static
 * 
 */
sap.ui.core.tmpl.Template.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * 
 * Getter for property <code>content</code>.
 * The Template definition as String.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {string} the value of property <code>content</code>
 * @public
 * 
 */
sap.ui.core.tmpl.Template.prototype.getContent = function() { return ""; };

/**
 * 
 * @see sap.ui.base.Object#getInterface
 * @public
 */
sap.ui.core.tmpl.Template.prototype.getInterface = function() { return null; };

/**
 * 
 * parses the given path and extracts the model and path
 * @param {string} sPath the path
 * @return {object} the model and the path 
 * @protected
 * @static
 */
sap.ui.core.tmpl.Template.parsePath = function(sPath) { return new Object(); };

/**
 * 
 * Creates an anonymous TemplateControl for the Template and places the control 
 * into the specified DOM element.
 * @param {string|DomRef} oRef the id or the DOM reference where to render the template
 * @param {object} [oContext] The context to use to evaluate the Template. It will be applied as value for the context property of the created control.
 * @param {string|int} [oPosition] Describes the position where the control should be put into the container
 * @return {sap.ui.core.tmpl.TemplateControl} the created control instance
 * @public
 */
sap.ui.core.tmpl.Template.prototype.placeAt = function(oRef,oContext,oPosition,bInline) { return new sap.ui.core.tmpl.TemplateControl(); };

/**
 * 
 * Setter for property <code>content</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {string} sContent  new value for property <code>content</code>
 * @return {sap.ui.core.tmpl.Template} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.core.tmpl.Template.prototype.setContent = function(sContent) { return new sap.ui.core.tmpl.Template(); };


// ---- sap.ui.core.tmpl.TemplateControl --------------------------------------------------------------------------

/**
 * 
 * Constructor for a new tmpl/TemplateControl.
 * </p><p>
 * Accepts an object literal <code>mSettings</code> that defines initial 
 * property values, aggregated and associated objects as well as event handlers. 
 * </p><p>
 * If the name of a setting is ambiguous (e.g. a property has the same name as an event), 
 * then the framework assumes property, aggregation, association, event in that order. 
 * To override this automatic resolution, one of the prefixes "aggregation:", "association:" 
 * or "event:" can be added to the name of the setting (such a prefixed name must be
 * enclosed in single or double quotes).
 * </p><p>
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getContext context} : object</li></ul>
 * </li>
 * <li>Aggregations
 * <ul></ul>
 * </li>
 * <li>Associations
 * <ul>
 * <li>{@link #getTemplate template} : string | sap.ui.core.tmpl.Template</li></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link sap.ui.core.tmpl.TemplateControl#event:afterRendering afterRendering} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.ui.core.tmpl.TemplateControl#event:beforeRendering beforeRendering} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
 * </li>
 * </ul> 
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * This is the base class for all template controls. Template controls are declared based on templates.
 * @extends sap.ui.core.Control
 * @version 1.15.1-SNAPSHOT
 * @constructor   
 * @public
 * @experimental Since version 1.15. 
 * The templating might be changed in future versions.
 * 
 */
sap.ui.core.tmpl.TemplateControl = function(sId,mSettings) {};
/**
 * 
 * Fired when the Template Control has been (re-)rendered and its HTML is present in the DOM. 
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 */
sap.ui.core.tmpl.TemplateControl.prototype.afterRendering = function(oControlEvent) { return null; };

/**
 * 
 * Fired before this Template Control is re-rendered. Use to unbind event handlers from HTML elements etc. 
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 */
sap.ui.core.tmpl.TemplateControl.prototype.beforeRendering = function(oControlEvent) { return null; };

/**
 * 
 * Attach event handler <code>fnFunction</code> to the 'afterRendering' event of this <code>sap.ui.core.tmpl.TemplateControl</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ui.core.tmpl.TemplateControl</code>.<br/> itself. 
 * </p><p>
 * Fired when the Template Control has been (re-)rendered and its HTML is present in the DOM. 
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener=this] Context object to call the event handler with. Defaults to this <code>sap.ui.core.tmpl.TemplateControl</code>.<br/> itself.
 * @return {sap.ui.core.tmpl.TemplateControl} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.core.tmpl.TemplateControl.prototype.attachAfterRendering = function(oData,fnFunction,oListener) { return new sap.ui.core.tmpl.TemplateControl(); };

/**
 * 
 * Attach event handler <code>fnFunction</code> to the 'beforeRendering' event of this <code>sap.ui.core.tmpl.TemplateControl</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ui.core.tmpl.TemplateControl</code>.<br/> itself. 
 * </p><p>
 * Fired before this Template Control is re-rendered. Use to unbind event handlers from HTML elements etc. 
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener=this] Context object to call the event handler with. Defaults to this <code>sap.ui.core.tmpl.TemplateControl</code>.<br/> itself.
 * @return {sap.ui.core.tmpl.TemplateControl} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.core.tmpl.TemplateControl.prototype.attachBeforeRendering = function(oData,fnFunction,oListener) { return new sap.ui.core.tmpl.TemplateControl(); };

/**
 * 
 * Creates a pseudo binding for a aggregation to get notified once the property 
 * changes to invalidate the control and trigger a re-rendering.
 * @param {string} sPath the binding path
 * @return {any} the value of the path
 * @protected 
 */
sap.ui.core.tmpl.TemplateControl.prototype.bindList = function(sPath) { return null; };

/**
 * 
 * Creates a pseudo binding for a property to get notified once the property 
 * changes to invalidate the control and trigger a re-rendering.
 * @param {string} sPath the binding path
 * @return {any} the value of the path
 * @protected 
 */
sap.ui.core.tmpl.TemplateControl.prototype.bindProp = function(sPath) { return null; };

/**
 * 
 * compiles (creates and registers) a new control
 * @param {object} mSettings the settings for the new control
 * @param {string} [sParentPath] the parent path for the control
 * @param {boolean} [bDoNotAdd] if true, then the control will not be 
 *          added to the _controls aggregation
 * @return {sap.ui.core.Control} new control instance 
 * @protected
 */
sap.ui.core.tmpl.TemplateControl.prototype.createControl = function(mSettings,sParentPath,bDoNotAdd,oView) { return new sap.ui.core.Control(); };

/**
 * 
 * compiles (creates and registers) a new DOM element
 * @param {object} mSettings the settings for the new DOM element
 * @param {string} [sParentPath] the parent path for the DOM element
 * @param {boolean} [bDoNotAdd] if true, then the control will not be 
 *          added to the _controls aggregation
 * @return {sap.ui.core.Control} new DOM element instance 
 * @protected
 */
sap.ui.core.tmpl.TemplateControl.prototype.createDOMElement = function(mSettings,sParentPath,bDoNotAdd) { return new sap.ui.core.Control(); };

/**
 * 
 * Detach event handler <code>fnFunction</code> from the 'afterRendering' event of this <code>sap.ui.core.tmpl.TemplateControl</code>.<br/>
 * </p><p>
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.core.tmpl.TemplateControl} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.core.tmpl.TemplateControl.prototype.detachAfterRendering = function(fnFunction,oListener) { return new sap.ui.core.tmpl.TemplateControl(); };

/**
 * 
 * Detach event handler <code>fnFunction</code> from the 'beforeRendering' event of this <code>sap.ui.core.tmpl.TemplateControl</code>.<br/>
 * </p><p>
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.core.tmpl.TemplateControl} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.core.tmpl.TemplateControl.prototype.detachBeforeRendering = function(fnFunction,oListener) { return new sap.ui.core.tmpl.TemplateControl(); };

/**
 * 
 * Creates a new subclass of class sap.ui.core.tmpl.TemplateControl with name <code>sClassName</code> 
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * </p><p>
 * <code>oClassInfo</code> might contain the same kind of informations as described in {@link sap.ui.core.Element.extend Element.extend}.
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class  
 * @param {function} [FNMetaImpl] constructor function for the metadata object. If not given, it defaults to sap.ui.core.ElementMetadata.
 * @return {function} the created class / constructor function
 * @public
 * @static
 * 
 */
sap.ui.core.tmpl.TemplateControl.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * 
 * Fire event afterRendering to attached listeners.
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.core.tmpl.TemplateControl} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.ui.core.tmpl.TemplateControl.prototype.fireAfterRendering = function(mArguments) { return new sap.ui.core.tmpl.TemplateControl(); };

/**
 * 
 * Fire event beforeRendering to attached listeners.
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.core.tmpl.TemplateControl} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.ui.core.tmpl.TemplateControl.prototype.fireBeforeRendering = function(mArguments) { return new sap.ui.core.tmpl.TemplateControl(); };

/**
 * 
 * Getter for property <code>context</code>.
 * The context is a data object. It can be used for default template expressions. A change of the context object leads to a re-rendering whereas a change of a nested property of the context object doesn't. By default the context is an empty object.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {object} the value of property <code>context</code>
 * @public
 * 
 */
sap.ui.core.tmpl.TemplateControl.prototype.getContext = function() { return new Object(); };

/**
 * 
 * The template on which the template control is based on.
 * @return {string} Id of the element which is the current target of the <code>template</code> association, or null
 * @public
 * 
 */
sap.ui.core.tmpl.TemplateControl.prototype.getTemplate = function() { return ""; };

/**
 * 
 * Returns the instance specific renderer for an anoymous template control.
 * @return {function} the instance specific renderer function
 * @protected
 */
sap.ui.core.tmpl.TemplateControl.prototype.getTemplateRenderer = function() { return function() {}; };

/**
 * 
 * checks whether the control is inline or not
 * @return {boolean} flag, whether to control is inline or not
 * @protected
 */
sap.ui.core.tmpl.TemplateControl.prototype.isInline = function() { return false; };

/**
 * 
 * Setter for property <code>context</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {object} oContext  new value for property <code>context</code>
 * @return {sap.ui.core.tmpl.TemplateControl} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.core.tmpl.TemplateControl.prototype.setContext = function(oContext) { return new sap.ui.core.tmpl.TemplateControl(); };

/**
 * 
 * The template on which the template control is based on.
 * @param {string | sap.ui.core.tmpl.Template} vTemplate 
 *    Id of an element which becomes the new target of this <code>template</code> association.
 *    Alternatively, an element instance may be given.
 * @return {sap.ui.core.tmpl.TemplateControl} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.core.tmpl.TemplateControl.prototype.setTemplate = function(vTemplate) { return new sap.ui.core.tmpl.TemplateControl(); };

/**
 * 
 * Sets the instance specific renderer for an anoymous template control.
 * @param {function} fnRenderer the instance specific renderer function
 * @return {sap.ui.core.tmpl.Template} <code>this</code> to allow method chaining
 * @protected
 */
sap.ui.core.tmpl.TemplateControl.prototype.setTemplateRenderer = function(fnRenderer) { return new sap.ui.core.tmpl.Template(); };


// ---- sap.ui.core.TooltipBase --------------------------------------------------------------------------

/**
 * 
 * Constructor for a new TooltipBase.
 * </p><p>
 * Accepts an object literal <code>mSettings</code> that defines initial 
 * property values, aggregated and associated objects as well as event handlers. 
 * </p><p>
 * If the name of a setting is ambiguous (e.g. a property has the same name as an event), 
 * then the framework assumes property, aggregation, association, event in that order. 
 * To override this automatic resolution, one of the prefixes "aggregation:", "association:" 
 * or "event:" can be added to the name of the setting (such a prefixed name must be
 * enclosed in single or double quotes).
 * </p><p>
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getText text} : string (default: "")</li>
 * <li>{@link #getOpenDuration openDuration} : int (default: 200)</li>
 * <li>{@link #getCloseDuration closeDuration} : int (default: 200)</li>
 * <li>{@link #getMyPosition myPosition} : sap.ui.core.Dock (default: 'begin top')</li>
 * <li>{@link #getAtPosition atPosition} : sap.ui.core.Dock (default: 'begin bottom')</li>
 * <li>{@link #getOffset offset} : string (default: '10 3')</li>
 * <li>{@link #getCollision collision} : sap.ui.core.Collision (default: 'flip')</li>
 * <li>{@link #getOpenDelay openDelay} : int (default: 500)</li>
 * <li>{@link #getCloseDelay closeDelay} : int (default: 100)</li></ul>
 * </li>
 * <li>Aggregations
 * <ul></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul></ul>
 * </li>
 * </ul> 
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * Abstract class that can be extended in order to implement any extended tooltip. For example, RichTooltip Control is based on it. It provides the opening/closing behavior and the main "text" property.
 * @extends sap.ui.core.Control
 * @version 1.15.1-SNAPSHOT
 * @constructor   
 * @public
 * 
 */
sap.ui.core.TooltipBase = function(sId,mSettings) {};
/**
 * 
 * Creates a new subclass of class sap.ui.core.TooltipBase with name <code>sClassName</code> 
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * </p><p>
 * <code>oClassInfo</code> might contain the same kind of informations as described in {@link sap.ui.core.Element.extend Element.extend}.
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class  
 * @param {function} [FNMetaImpl] constructor function for the metadata object. If not given, it defaults to sap.ui.core.ElementMetadata.
 * @return {function} the created class / constructor function
 * @public
 * @static
 * 
 */
sap.ui.core.TooltipBase.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * 
 * Getter for property <code>atPosition</code>.
 * Optional. At position defines which position on the target control to align the positioned tooltip.
 * </p><p>
 * Default value is <code>begin bottom</code>
 * @return {sap.ui.core.Dock} the value of property <code>atPosition</code>
 * @public
 * 
 */
sap.ui.core.TooltipBase.prototype.getAtPosition = function() { return new sap.ui.core.Dock(); };

/**
 * 
 * Getter for property <code>closeDelay</code>.
 * Closing delay of the tooltip in milliseconds
 * </p><p>
 * Default value is <code>100</code>
 * @return {int} the value of property <code>closeDelay</code>
 * @public
 * 
 */
sap.ui.core.TooltipBase.prototype.getCloseDelay = function() { return 0; };

/**
 * 
 * Getter for property <code>closeDuration</code>.
 * Optional. Close Duration in milliseconds.
 * </p><p>
 * Default value is <code>200</code>
 * @return {int} the value of property <code>closeDuration</code>
 * @public
 * 
 */
sap.ui.core.TooltipBase.prototype.getCloseDuration = function() { return 0; };

/**
 * 
 * Getter for property <code>collision</code>.
 * Optional. Collision - when the positioned element overflows the window in some direction, move it to an alternative position.
 * </p><p>
 * Default value is <code>flip</code>
 * @return {sap.ui.core.Collision} the value of property <code>collision</code>
 * @public
 * 
 */
sap.ui.core.TooltipBase.prototype.getCollision = function() { return new sap.ui.core.Collision(); };

/**
 * 
 * Getter for property <code>myPosition</code>.
 * Optional. My position defines which position on the extended tooltip being positioned to align with the target control.
 * </p><p>
 * Default value is <code>begin top</code>
 * @return {sap.ui.core.Dock} the value of property <code>myPosition</code>
 * @public
 * 
 */
sap.ui.core.TooltipBase.prototype.getMyPosition = function() { return new sap.ui.core.Dock(); };

/**
 * 
 * Getter for property <code>offset</code>.
 * Optional. Offset adds these left-top values to the calculated position.
 * Example: "10 3".
 * </p><p>
 * Default value is <code>10 3</code>
 * @return {string} the value of property <code>offset</code>
 * @public
 * 
 */
sap.ui.core.TooltipBase.prototype.getOffset = function() { return ""; };

/**
 * 
 * Getter for property <code>openDelay</code>.
 * Opening delay of the tooltip in milliseconds
 * </p><p>
 * Default value is <code>500</code>
 * @return {int} the value of property <code>openDelay</code>
 * @public
 * 
 */
sap.ui.core.TooltipBase.prototype.getOpenDelay = function() { return 0; };

/**
 * 
 * Getter for property <code>openDuration</code>.
 * Optional. Open Duration in milliseconds.
 * </p><p>
 * Default value is <code>200</code>
 * @return {int} the value of property <code>openDuration</code>
 * @public
 * 
 */
sap.ui.core.TooltipBase.prototype.getOpenDuration = function() { return 0; };

/**
 * 
 * Getter for property <code>text</code>.
 * The text that is shown in the tooltip that extends the TooltipBase class, for example in RichTooltip.
 * </p><p>
 * Default value is <code>""</code>
 * @return {string} the value of property <code>text</code>
 * @public
 * 
 */
sap.ui.core.TooltipBase.prototype.getText = function() { return ""; };

/**
 * 
 * Setter for property <code>atPosition</code>.
 * </p><p>
 * Default value is <code>begin bottom</code> 
 * @param {sap.ui.core.Dock} sAtPosition  new value for property <code>atPosition</code>
 * @return {sap.ui.core.TooltipBase} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.core.TooltipBase.prototype.setAtPosition = function(sAtPosition) { return new sap.ui.core.TooltipBase(); };

/**
 * 
 * Setter for property <code>closeDelay</code>.
 * </p><p>
 * Default value is <code>100</code> 
 * @param {int} iCloseDelay  new value for property <code>closeDelay</code>
 * @return {sap.ui.core.TooltipBase} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.core.TooltipBase.prototype.setCloseDelay = function(iCloseDelay) { return new sap.ui.core.TooltipBase(); };

/**
 * 
 * Setter for property <code>closeDuration</code>.
 * </p><p>
 * Default value is <code>200</code> 
 * @param {int} iCloseDuration  new value for property <code>closeDuration</code>
 * @return {sap.ui.core.TooltipBase} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.core.TooltipBase.prototype.setCloseDuration = function(iCloseDuration) { return new sap.ui.core.TooltipBase(); };

/**
 * 
 * Setter for property <code>collision</code>.
 * </p><p>
 * Default value is <code>flip</code> 
 * @param {sap.ui.core.Collision} sCollision  new value for property <code>collision</code>
 * @return {sap.ui.core.TooltipBase} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.core.TooltipBase.prototype.setCollision = function(sCollision) { return new sap.ui.core.TooltipBase(); };

/**
 * 
 * Setter for property <code>myPosition</code>.
 * </p><p>
 * Default value is <code>begin top</code> 
 * @param {sap.ui.core.Dock} sMyPosition  new value for property <code>myPosition</code>
 * @return {sap.ui.core.TooltipBase} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.core.TooltipBase.prototype.setMyPosition = function(sMyPosition) { return new sap.ui.core.TooltipBase(); };

/**
 * 
 * Setter for property <code>offset</code>.
 * </p><p>
 * Default value is <code>10 3</code> 
 * @param {string} sOffset  new value for property <code>offset</code>
 * @return {sap.ui.core.TooltipBase} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.core.TooltipBase.prototype.setOffset = function(sOffset) { return new sap.ui.core.TooltipBase(); };

/**
 * 
 * Setter for property <code>openDelay</code>.
 * </p><p>
 * Default value is <code>500</code> 
 * @param {int} iOpenDelay  new value for property <code>openDelay</code>
 * @return {sap.ui.core.TooltipBase} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.core.TooltipBase.prototype.setOpenDelay = function(iOpenDelay) { return new sap.ui.core.TooltipBase(); };

/**
 * 
 * Setter for property <code>openDuration</code>.
 * </p><p>
 * Default value is <code>200</code> 
 * @param {int} iOpenDuration  new value for property <code>openDuration</code>
 * @return {sap.ui.core.TooltipBase} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.core.TooltipBase.prototype.setOpenDuration = function(iOpenDuration) { return new sap.ui.core.TooltipBase(); };

/**
 * 
 * Setter for property <code>text</code>.
 * </p><p>
 * Default value is <code>""</code> 
 * @param {string} sText  new value for property <code>text</code>
 * @return {sap.ui.core.TooltipBase} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.core.TooltipBase.prototype.setText = function(sText) { return new sap.ui.core.TooltipBase(); };


// ---- sap.ui.core.UIComponent --------------------------------------------------------------------------

/**
 * 
 * Creates and initializes a new UI component with the given <code>sId</code> and
 * settings.
 * </p><p>
 * The set of allowed entries in the <code>mSettings</code> object depends on
 * the concrete subclass and is described there. See {@link sap.ui.core.Component}
 * for a general description of this argument.
 * @param {string}
 *            [sId] optional id for the new control; generated automatically if
 *            no non-empty id is given Note: this can be omitted, no matter
 *            whether <code>mSettings</code> will be given or not!
 * @param {object}
 *            [mSettings] optional map/JSON-object with initial settings for the
 *            new component instance
 * @public
 * @class Base Class for UI Component.
 * @extends sap.ui.core.Component
 * @abstract
 * @version 1.15.1-SNAPSHOT
 * @experimental Since 1.9.2. The Component concept is still under construction, so some implementation details can be changed in future.
 */
sap.ui.core.UIComponent = function(sId,mSettings) {};
/**
 * 
 * returns an Element by its id in the context of the Component
 * @return Element by its id
 * @public
 */
sap.ui.core.UIComponent.prototype.byId = function(sId) { return null; };

/**
 * 
 * The method to create the Content (UI Control Tree) of the Component. 
 * This method has to be overwritten in the implementation of the component
 * if the root view is not declared in the component metadata.
 * @public
 */
sap.ui.core.UIComponent.prototype.createContent = function() { return null; };

/**
 * 
 * creates an id for an Element prefixed with the component id
 * @return prefixed id
 * @public
 */
sap.ui.core.UIComponent.prototype.createId = function(sId) { return null; };

/**
 * 
 * A method to be implemented by UIComponents, returning the flag whether to prefix 
 * the IDs of controls automatically or not if the controls are created inside
 * the {@link sap.ui.core.UIComponent#createContent} function. By default this 
 * feature is not activated. 
 * </p><p>
 * You can overwrite this function and return true to activate the automatic
 * prefixing.
 * @since 1.15.1
 * @experimental Since 1.15.1. This feature might be changed in future.
 * @return {boolean} true, if the controls IDs should be prefixed automatically
 * @protected
 */
sap.ui.core.UIComponent.prototype.getAutoPrefixId = function() { return false; };

/**
 * 
 * Returns the reference to the UIArea of the container.
 * @return {sap.ui.core.UIArea} reference to the UIArea of the container
 * @public
 */
sap.ui.core.UIComponent.prototype.getUIArea = function() { return new sap.ui.core.UIArea(); };

/**
 * 
 * Function is called when the rendering of the Component Container is completed.
 * </p><p>
 * Applications must not call this hook method directly, it is called from ComponentContainer.
 * </p><p>
 * Subclasses of UIComponent override this hook to implement any necessary actions after the rendering.
 * @protected
 */
sap.ui.core.UIComponent.prototype.onAfterRendering = function() { return null; };

/**
 * 
 * Function is called when the rendering of the Component Container is started.
 * </p><p>
 * Applications must not call this hook method directly, it is called from ComponentContainer.
 * </p><p>
 * Subclasses of UIComponent override this hook to implement any necessary actions before the rendering.
 * @protected
 */
sap.ui.core.UIComponent.prototype.onBeforeRendering = function() { return null; };

/**
 * 
 * Renders the the root control of the UIComponent.
 * @param {sap.ui.core.RenderManager} oRenderManager a RenderManager instance
 * @public
 */
sap.ui.core.UIComponent.prototype.render = function(oRenderManager) { return null; };

/**
 * 
 * Sets the reference to the ComponentContainer - later required for the 
 * determination of the UIArea for the UIComponent.
 * @param {sap.ui.core.ComponentContainer} oContainer reference to a ComponentContainer
 * @return {sap.ui.core.UIComponent} reference to this instance to allow method chaining
 * @public
 */
sap.ui.core.UIComponent.prototype.setContainer = function(oContainer) { return new sap.ui.core.UIComponent(); };


// ---- sap.ui.core.URI --------------------------------------------------------------------------


// ---- sap.ui.core.util --------------------------------------------------------------------------


// ---- sap.ui.core.util.MockServer --------------------------------------------------------------------------

/**
 * 
 * Creates a mocked server. This helps to mock all or some backend calls, e.g. for OData/JSON Models or simple XHR calls, without
 * changing the application code. This class can also be used for qunit tests.
 * @param {string} [sId] id for the new server object; generated automatically if no non-empty id is given
 *      Note: this can be omitted, no matter whether <code>mSettings</code> will be given or not!
 * @param {object} [mSettings] optional map/JSON-object with initial property values, aggregated objects etc. for the new object
 * @param {object} [oScope] scope object for resolving string based type and formatter references in bindings
 * @class Class to mock a server
 * @extends sap.ui.base.ManagedObject
 * @abstract
 * @version 1.15.1-SNAPSHOT
 * @public
 * @experimental Since 1.15.1. The mock server is still under construction, so some implementation details can be changed in future.
 */
sap.ui.core.util.MockServer = function(sId,mSettings,oScope) {};
/**
 * 
 * Cleans up the resources associated with this object and all its aggregated children.
 * </p><p>
 * After an object has been destroyed, it can no longer be used in!
 * </p><p>
 * Applications should call this method if they don't need the object any longer.
 * @see sap.ui.base.ManagedObject#destroy
 * @param {boolean}
 *            [bSuppressInvalidate] if true, this ManagedObject is not marked as changed
 * @public
 */
sap.ui.core.util.MockServer.prototype.destroy = function(bSuppressInvalidate) { return null; };

/**
 * 
 * Getter for property <code>requests</code>.
 * </p><p>
 * Default value is <code>[]</code>
 * @return {object[]} the value of property <code>rootUri</code>
 * @public
 * 
 */
sap.ui.core.util.MockServer.prototype.getRequests = function() { return new Array(); };

/**
 * 
 * Getter for property <code>rootUri</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {string} the value of property <code>rootUri</code>
 * @public
 * 
 */
sap.ui.core.util.MockServer.prototype.getRootUri = function() { return ""; };

/**
 * 
 * Returns whether the server is started or not.
 * @return {boolean} whether the server is started or not.
 * @public
 */
sap.ui.core.util.MockServer.prototype.isStarted = function() { return false; };

/**
 * 
 * Setter for property <code>requests</code>.
 * </p><p>
 * Default value is is <code>[]</code>
 * </p><p>
 * Each array entry should consist of an array with the following properties / values:
 * </p><p>
 * <ul>
 * <li><b>method <string>: "GET"|"POST"|"DELETE|"PUT"</b>
 * <br>
 * (any HTTP verb)
 * </li>
 * <li><b>path <string>: "/path/to/resource"</b>
 * <br> 
 * The path is converted to a regular expression, so it can contain normal regular expression syntax.
 * All regular expression groups are forwarded as arguments to the <code>response</code> function.
 * In addition to this, parameters can be written in this notation: <code>:param</code>. These placeholder will be replaced by regular expression groups.
 * </li>
 * <li><b>response <function>: function(xhr, param1, param2, ...) { }</b>
 * <br>
 * The xhr object can be used to respond on the request. Supported methods are:
 * <br>
 * <code>xhr.respond(iStatusCode, mHeaders, sBody)</code>
 * <br>
 * <code>xhr.respondJSON(iStatusCode, mHeaders, oJsonObjectOrString)</code>. By default a JSON header is set for response header
 * <br>
 * <code>xhr.respondXML(iStatusCode, mHeaders, sXmlString)</code>. By default a XML header is set for response header
 * <br>
 * <code>xhr.respondFile(iStatusCode, mHeaders, sFileUrl)</code>. By default the mime type of the file is set for response header
 * </li>
 * </ul>
 * @param {object[]} requests new value for property <code>requests</code>
 * @public
 * 
 */
sap.ui.core.util.MockServer.prototype.setRequests = function(requests) { return null; };

/**
 * 
 * Setter for property <code>rootUri</code>. All request path URI are prefixed with this root URI if set.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @param {string} rootUri new value for property <code>rootUri</code>
 * @public
 * 
 */
sap.ui.core.util.MockServer.prototype.setRootUri = function(rootUri) { return null; };

/**
 * 
 * Simulates an existing OData service by sepcifiying the metadata URL and the base URL for the mockdata. The server
 * configures the request handlers depending on the service metadata. The mockdata needs to be stored individually for
 * each entity type in a separate JSON file. The name of the JSON file needs to match the name of the entity type. If
 * no base url for the mockdata is specified then the mockdata are generated from the metadata
 * @param {string} sMetadataUrl url to the service metadata document
 * @param {string} sMockdataBaseUrl base url which contains the mockdata as single .json files or the .json file containing the complete mock data 
 * @experimental functionality might be enhanced in future - right now only read is supported
 * @since 1.13.2
 * @public
 */
sap.ui.core.util.MockServer.prototype.simulate = function(sMetadataUrl,sMockdataBaseUrl) { return null; };

/**
 * 
 * Starts the server.
 * @public
 */
sap.ui.core.util.MockServer.prototype.start = function() { return null; };

/**
 * 
 * Stops the server.
 * @public
 */
sap.ui.core.util.MockServer.prototype.stop = function() { return null; };


// ---- sap.ui.core.util.serializer --------------------------------------------------------------------------


// ---- sap.ui.core.util.serializer.delegate --------------------------------------------------------------------------


// ---- sap.ui.core.util.serializer.delegate.Delegate --------------------------------------------------------------------------

/**
 * 
 * Abstract serializer delegate class. All delegates must extend from this class and implement the abstract methods.
 * @public
 * @abstract
 * @class Abstract serializer delegate class.
 * @extends sap.ui.base.EventProvider
 * @version 1.15.1-SNAPSHOT
 * @experimental Since 1.15.1. The abstract serializer delegate is still under construction, so some implementation details can be changed in future.
 */
sap.ui.core.util.serializer.delegate.Delegate = function() {};

// ---- sap.ui.core.util.serializer.delegate.HTML --------------------------------------------------------------------------

/**
 * 
 * HTML serializer delegate class. Called by the serializer instance.
 * @param {function} [fnGetControlId] delegate function which returns the control id
 * @param {function} [fnGetEventHandlerName] delegate function which returns the event handler name
 * @public
 * @class HTML serializer delegate class.
 * @extends sap.ui.core.util.serializer.delegate.Delegate
 * @version 1.15.1-SNAPSHOT
 * @experimental Since 1.15.1. The HTML serializer delegate is still under construction, so some implementation details can be changed in future.
 */
sap.ui.core.util.serializer.delegate.HTML = function(fnGetControlId,fnGetEventHandlerName) {};

// ---- sap.ui.core.util.serializer.delegate.XML --------------------------------------------------------------------------

/**
 * 
 * XML serializer delegate class. Called by the serializer instance.
 * @param {string} [sDefaultXmlNamespace] defines the default XML namespace
 * @param {function} [fnGetControlId] delegate function which returns the control id
 * @param {function} [fnGetEventHandlerName] delegate function which returns the event handler name
 * @param {function} [fnMemorizePackage] a delegate function to memorize the control packages
 * @public
 * @class XML serializer delegate class.
 * @extends sap.ui.core.util.serializer.delegate.Delegate
 * @version 1.15.1-SNAPSHOT
 * @experimental Since 1.15.1. The XML serializer delegate is still under construction, so some implementation details can be changed in future.
 */
sap.ui.core.util.serializer.delegate.XML = function(sDefaultXmlNamespace,fnGetControlId,fnGetEventHandlerName,fnMemorizePackage) {};

// ---- sap.ui.core.util.serializer.HTMLViewSerializer --------------------------------------------------------------------------

/**
 * 
 * HTML view serializer class. Serializes a given view.
 * @param {sap.ui.core.mvc.HTMLView} oView the view to serialize
 * @param {object} [oWindow=window] the window object. Default is the window object the instance of the serializer is running in
 * @param {function} fnGetControlId delegate function which returns the control id
 * @param {function} fnGetEventHandlerName delegate function which returns the event handler name
 * @public
 * @class HTMLViewSerializer class.
 * @extends sap.ui.base.EventProvider
 * @version 1.15.1-SNAPSHOT
 * @experimental Since 1.15.1. The HTMLViewSerializer is still under construction, so some implementation details can be changed in future.
 */
sap.ui.core.util.serializer.HTMLViewSerializer = function(oView,oWindow,fnGetControlId,fnGetEventHandlerName) {};

// ---- sap.ui.core.util.serializer.Serializer --------------------------------------------------------------------------

/**
 * 
 * Serializer class. Iterates over all controls and call a given serializer delegate.
 * @param {sap.ui.core.Control|sap.ui.core.UIArea} oRootControl the root control to serialize
 * @param {object} serializeDelegate the serializer delegate. Has to implement start/middle/end methods.
 * @param {boolean} bSkipRoot whether to skip the root node or not
 * @param {booolean} fnSkipAggregations whether to skip aggregations
 * @public
 * @class Serializer class.
 * @extends sap.ui.base.EventProvider
 * @version 1.15.1-SNAPSHOT
 * @experimental Since 1.15.1. The Serializer is still under construction, so some implementation details can be changed in future.
 */
sap.ui.core.util.serializer.Serializer = function(oRootControl,serializeDelegate,bSkipRoot,fnSkipAggregations) {};

// ---- sap.ui.core.util.serializer.ViewSerializer --------------------------------------------------------------------------

/**
 * 
 * View serializer class. Iterates over all controls and serializes all found views by calling the corresponding view type serializer.
 * @param {sap.ui.core.Control|sap.ui.core.UIArea} oRootControl the root control to serialize
 * @param {object} [oWindow=window] the window object. Default is the window object the instance of the serializer is running in.
 * @param {string} [sDefaultXmlNamespace] defines the default xml namespace
 * @public
 * @class ViewSerializer class.
 * @extends sap.ui.base.EventProvider
 * @version 1.15.1-SNAPSHOT
 * @experimental Since 1.15.1. The ViewSerializer is still under construction, so some implementation details can be changed in future.
 */
sap.ui.core.util.serializer.ViewSerializer = function(oRootControl,oWindow,sDefaultXmlNamespace) {};

// ---- sap.ui.core.util.serializer.XMLViewSerializer --------------------------------------------------------------------------

/**
 * 
 * XML view serializer class. Serializes a given view.
 * @param {sap.ui.core.mvc.XMLView} oView the view to serialize
 * @param {object} [oWindow=window] the window object. Default is the window object the instance of the serializer is running in
 * @param {string} [sDefaultXmlNamespace] defines the default XML namespace
 * @param {function} fnGetControlId delegate function which returns the control id
 * @param {function} fnGetEventHandlerName delegate function which returns the event handler name
 * @public
 * @class XMLViewSerializer class.
 * @extends sap.ui.base.EventProvider
 * @version 1.15.1-SNAPSHOT
 * @experimental Since 1.15.1. The XMLViewSerializer is still under construction, so some implementation details can be changed in future.
 */
sap.ui.core.util.serializer.XMLViewSerializer = function(oView,oWindow,sDefaultXmlNamespace,fnGetControlId,fnGetEventHandlerName) {};

// ---- sap.ui.core.ValueState --------------------------------------------------------------------------

// dummy function to make Eclipse aware of namespace
sap.ui.core.ValueState.toString = function() { return ""; };

// ---- sap.ui.core.VariantLayoutData --------------------------------------------------------------------------

/**
 * 
 * Constructor for a new VariantLayoutData.
 * </p><p>
 * Accepts an object literal <code>mSettings</code> that defines initial 
 * property values, aggregated and associated objects as well as event handlers. 
 * </p><p>
 * If the name of a setting is ambiguous (e.g. a property has the same name as an event), 
 * then the framework assumes property, aggregation, association, event in that order. 
 * To override this automatic resolution, one of the prefixes "aggregation:", "association:" 
 * or "event:" can be added to the name of the setting (such a prefixed name must be
 * enclosed in single or double quotes).
 * </p><p>
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getMultipleLayoutData multipleLayoutData} : sap.ui.core.LayoutData[]</li></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul></ul>
 * </li>
 * </ul> 
 * </p><p>
 * </p><p>
 * In addition, all settings applicable to the base type {@link sap.ui.core.LayoutData#constructor sap.ui.core.LayoutData}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * Allows to add multiple LayoutData to one control in case that a easy switch of layouts (e.g. in a Form) is needed.
 * @extends sap.ui.core.LayoutData
 * @version 1.15.1-SNAPSHOT
 * @constructor   
 * @public
 * @since 1.9.2
 * 
 */
sap.ui.core.VariantLayoutData = function(sId,mSettings) {};
/**
 * 
 * Adds some multipleLayoutData <code>oMultipleLayoutData</code> 
 * to the aggregation named <code>multipleLayoutData</code>.
 * @param {sap.ui.core.LayoutData}
 *            oMultipleLayoutData the multipleLayoutData to add; if empty, nothing is inserted
 * @return {sap.ui.core.VariantLayoutData} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.core.VariantLayoutData.prototype.addMultipleLayoutData = function(oMultipleLayoutData) { return new sap.ui.core.VariantLayoutData(); };

/**
 * 
 * Destroys all the multipleLayoutData in the aggregation 
 * named <code>multipleLayoutData</code>.
 * @return {sap.ui.core.VariantLayoutData} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.core.VariantLayoutData.prototype.destroyMultipleLayoutData = function() { return new sap.ui.core.VariantLayoutData(); };

/**
 * 
 * Creates a new subclass of class sap.ui.core.VariantLayoutData with name <code>sClassName</code> 
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * </p><p>
 * <code>oClassInfo</code> might contain the same kind of informations as described in {@link sap.ui.core.Element.extend Element.extend}.
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class  
 * @param {function} [FNMetaImpl] constructor function for the metadata object. If not given, it defaults to sap.ui.core.ElementMetadata.
 * @return {function} the created class / constructor function
 * @public
 * @static
 * 
 */
sap.ui.core.VariantLayoutData.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * 
 * Getter for aggregation <code>multipleLayoutData</code>.<br/>
 * Allows multiple LayoutData.
 * @return {sap.ui.core.LayoutData[]}
 * @public
 * 
 */
sap.ui.core.VariantLayoutData.prototype.getMultipleLayoutData = function() { return new Array(); };

/**
 * 
 * Checks for the provided <code>sap.ui.core.LayoutData</code> in the aggregation named <code>multipleLayoutData</code> 
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.core.LayoutData}
 *            oMultipleLayoutData the multipleLayoutData whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * 
 */
sap.ui.core.VariantLayoutData.prototype.indexOfMultipleLayoutData = function(oMultipleLayoutData) { return 0; };

/**
 * 
 * Inserts a multipleLayoutData into the aggregation named <code>multipleLayoutData</code>.
 * @param {sap.ui.core.LayoutData}
 *          oMultipleLayoutData the multipleLayoutData to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the multipleLayoutData should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the multipleLayoutData is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the multipleLayoutData is inserted at 
 *             the last position        
 * @return {sap.ui.core.VariantLayoutData} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.core.VariantLayoutData.prototype.insertMultipleLayoutData = function(oMultipleLayoutData,iIndex) { return new sap.ui.core.VariantLayoutData(); };

/**
 * 
 * Removes all the controls in the aggregation named <code>multipleLayoutData</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.core.LayoutData[]} an array of the removed elements (might be empty)
 * @public
 * 
 */
sap.ui.core.VariantLayoutData.prototype.removeAllMultipleLayoutData = function() { return new Array(); };

/**
 * 
 * Removes an multipleLayoutData from the aggregation named <code>multipleLayoutData</code>.
 * @param {int | string | sap.ui.core.LayoutData} vMultipleLayoutData the multipleLayoutData to remove or its index or id
 * @return {sap.ui.core.LayoutData} the removed multipleLayoutData or null
 * @public
 * 
 */
sap.ui.core.VariantLayoutData.prototype.removeMultipleLayoutData = function(vMultipleLayoutData) { return new sap.ui.core.LayoutData(); };


// ---- sap.ui.core.VerticalAlign --------------------------------------------------------------------------

// dummy function to make Eclipse aware of namespace
sap.ui.core.VerticalAlign.toString = function() { return ""; };

// ---- sap.ui.core.Wrapping --------------------------------------------------------------------------

// dummy function to make Eclipse aware of namespace
sap.ui.core.Wrapping.toString = function() { return ""; };

// ---- sap.ui.Device --------------------------------------------------------------------------


// ---- sap.ui.Device.browser --------------------------------------------------------------------------

// dummy function to make Eclipse aware of namespace
sap.ui.Device.browser.toString = function() { return ""; };

// ---- sap.ui.Device.browser.BROWSER --------------------------------------------------------------------------

// dummy function to make Eclipse aware of namespace
sap.ui.Device.browser.BROWSER.toString = function() { return ""; };

// ---- sap.ui.Device.media --------------------------------------------------------------------------

/**
 * 
 * Registers the given handler to the range change event, which is fired when a new range of the set is entered.
 * </p><p>
 * The handler has one map parameter <code>mParams</code>:
 * <ul>
 * <li>mParams.from: the range start value</li>
 * <li>mParams.to: the range end value, not defined for the last range (INFINITY)</li>
 * <li>mParams.unit: the used unit, e.g. px</li>
 * <li>mParams.name: the range name if defined</li>
 * </ul>
 * @param {Function} fnFunction The function to call, when the range change event occurs.
 * @param {Object} [oListener] The 'this' context of the handler function.
 * @param {String} sName The name of the range set to listen to.
 * @public
 * @memberOf sap.ui.Device.media
 */
sap.ui.Device.media.attachHandler = function(fnFunction,oListener,sName) { return null; };

/**
 * 
 * Deregisters a previously registered handler from the range change event.
 * @param {Function} fnFunction The function to call, when the range change event occurs.
 * @param {Object} [oListener] The 'this' context of the handler function.
 * @param {String} sName The name of the range set to listen to.
 * @public
 * @memberOf sap.ui.Device.media
 */
sap.ui.Device.media.detachHandler = function(fnFunction,oListener,sName) { return null; };

/**
 * 
 * Returns information about the current active range of the range set with the given name.
 * @param {String} sName The name of the range set.
 * @return {Map} the information about the current active range (same structure like the handler parameters (@see sap.ui.Device.media#attachHandler))
 * @public
 * @memberOf sap.ui.Device.media
 */
sap.ui.Device.media.getCurrentRange = function(sName) { return null; };

/**
 * 
 * Returns whether a range set with the given name is initialized.
 * @param {String} sName The name of the range set.
 * @return {boolean}
 * @public
 * @memberOf sap.ui.Device.media
 */
sap.ui.Device.media.hasRangeSet = function(sName) { return false; };

/**
 * 
 * Initializes a Screen width media query range set.
 * </p><p>
 * This function can either be called only with the name parameter to initialize a predefined range set,
 * e.g. <code>sap.ui.Device.media.initRangeSet(sap.ui.Device.media.RANGESETS.SAP_3STEPS)</code>.
 * </p><p>
 * Or it is possible to define a custom range set as in the following example:
 * <code>sap.ui.Device.media.initRangeSet("MyRangeSet", [200, 400], "px", ["Small", "Medium", "Large"])</code> defines 3 ranges:
 * <ul>
 * <li>0px-199.999px with name "Small"</li>
 * <li>200px-399.999px with name "Medium"</li>
 * <li>400px-INFINITY with name "Large"</li>
 * </ul>
 * </p><p>
 * The range names are optional. If they are specified also a CSS class (e.g. sapUiMedia-MyRangeSet-Small) is added to the document root
 * depending on the current active range. This can be suppressed via parameter <code>bSuppressClasses</code>.
 * @param {String} sName The name of the range set. Either a predefined or custom one. The name must be a valid id (consist of letters and digits).
 * @param {int[]} aRangeBorders The range borders
 * @param {String} [sUnit] The unit which should be used. Allowed values are px (default), em or rem.
 * @param {String[]} [aRangeNames] The names of the ranges. The names must be a valid id (consist of letters and digits).
 * @param {boolean} [bSuppressClasses] Whether writing CSS classes to the document root should be suppressed
 * @public
 * @memberOf sap.ui.Device.media
 */
sap.ui.Device.media.initRangeSet = function(sName,aRangeBorders,sUnit,aRangeNames,bSuppressClasses) { return null; };

/**
 * 
 * Removes a previously initialized range set and detaches all registered handlers.
 * </p><p>
 * Initialized predefined range sets (@see sap.ui.Device.media#RANGESETS) cannot be removed.
 * @param {String} sName The name of the range set.
 * @protected
 * @memberOf sap.ui.Device.media
 */
sap.ui.Device.media.removeRangeSet = function(sName) { return null; };


// ---- sap.ui.Device.media.RANGESETS --------------------------------------------------------------------------

// dummy function to make Eclipse aware of namespace
sap.ui.Device.media.RANGESETS.toString = function() { return ""; };

// ---- sap.ui.Device.orientation --------------------------------------------------------------------------

/**
 * 
 * Registers the given handler to the orientation change event.
 * </p><p>
 * The handler has one map parameter <code>mParams</code>:
 * <ul>
 * <li>mParams.landscape: whether the orientation is currently landscape</li>
 * </ul>
 * @param {Function} fnFunction The function to call, when the orientation change event occurs.
 * @param {Object} [oListener] The 'this' context of the handler function.
 * @public
 * @memberOf sap.ui.Device.orientation
 */
sap.ui.Device.orientation.attachHandler = function(fnFunction,oListener) { return null; };

/**
 * 
 * Deregisters a previously registered handler from the orientation change event.
 * @param {Function} fnFunction The function to call, when the orientation change event occurs.
 * @param {Object} [oListener] The 'this' context of the handler function.
 * @public
 * @memberOf sap.ui.Device.orientation
 */
sap.ui.Device.orientation.detachHandler = function(fnFunction,oListener) { return null; };


// ---- sap.ui.Device.os --------------------------------------------------------------------------

// dummy function to make Eclipse aware of namespace
sap.ui.Device.os.toString = function() { return ""; };

// ---- sap.ui.Device.os.OS --------------------------------------------------------------------------

// dummy function to make Eclipse aware of namespace
sap.ui.Device.os.OS.toString = function() { return ""; };

// ---- sap.ui.Device.resize --------------------------------------------------------------------------

/**
 * 
 * Registers the given handler to the resize event.
 * </p><p>
 * The handler has one map parameter <code>mParams</code>:
 * <ul>
 * <li>mParams.height: new height of the window</li>
 * <li>mParams.width: new width of the window</li>
 * </ul>
 * @param {Function} fnFunction The function to call, when the resize event occurs.
 * @param {Object} [oListener] The 'this' context of the handler function.
 * @public
 * @memberOf sap.ui.Device.resize
 */
sap.ui.Device.resize.attachHandler = function(fnFunction,oListener) { return null; };

/**
 * 
 * Deregisters a previously registered handler from the resize event.
 * @param {Function} fnFunction The function to call, when the resize event occurs.
 * @param {Object} [oListener] The 'this' context of the handler function.
 * @public
 * @memberOf sap.ui.Device.resize
 */
sap.ui.Device.resize.detachHandler = function(fnFunction,oListener) { return null; };


// ---- sap.ui.Device.support --------------------------------------------------------------------------

// dummy function to make Eclipse aware of namespace
sap.ui.Device.support.toString = function() { return ""; };

// ---- sap.ui.Device.system --------------------------------------------------------------------------

// dummy function to make Eclipse aware of namespace
sap.ui.Device.system.toString = function() { return ""; };

// ---- sap.ui.Device.system.SYSTEMTYPE --------------------------------------------------------------------------


// ---- sap.ui.model --------------------------------------------------------------------------


// ---- sap.ui.model.Binding --------------------------------------------------------------------------

/**
 * 
 * Constructor for Binding class.
 * @class
 * The Binding is the object, which holds the necessary information for a data binding,
 * like the binding path and the binding context, and acts like an interface to the
 * model for the control, so it is the event provider for changes in the data model
 * and provides getters for accessing properties or lists.
 * @param {sap.ui.model.Model} the model
 * @param {String} sPath the path
 * @param {Object} oContext the context object
 * @abstract
 * @public
 * 
 */
sap.ui.model.Binding = function(the,sPath,oContext) {};
/**
 * 
 * Attach event-handler <code>fnFunction</code> to the '_change' event of this <code>sap.ui.model.Model</code>.<br/>
 * @param {function} fnFunction The function to call, when the event occurs.
 * @param {object} [oListener] object on which to call the given function.
 * @protected
 */
sap.ui.model.Binding.prototype.attachChange = function(fnFunction,oListener) { return null; };

/**
 * 
 * Attach event-handler <code>fnFunction</code> to the 'dataReceived' event of this <code>sap.ui.model.Binding</code>.<br/>
 * @param {function} fnFunction The function to call, when the event occurs.
 * @param {object} [oListener] object on which to call the given function.
 * @public
 */
sap.ui.model.Binding.prototype.attachDataReceived = function(fnFunction,oListener) { return null; };

/**
 * 
 * Attach event-handler <code>fnFunction</code> to the 'dataRequested' event of this <code>sap.ui.model.Binding</code>.<br/>
 * @param {function} fnFunction The function to call, when the event occurs.
 * @param {object} [oListener] object on which to call the given function.
 * @public
 */
sap.ui.model.Binding.prototype.attachDataRequested = function(fnFunction,oListener) { return null; };

/**
 * 
 * Detach event-handler <code>fnFunction</code> from the '_change' event of this <code>sap.ui.model.Model</code>.<br/>
 * @param {function} fnFunction The function to call, when the event occurs.
 * @param {object} [oListener] object on which to call the given function.
 * @protected
 */
sap.ui.model.Binding.prototype.detachChange = function(fnFunction,oListener) { return null; };

/**
 * 
 * Detach event-handler <code>fnFunction</code> from the 'dataReceived' event of this <code>sap.ui.model.Binding</code>.<br/>
 * @param {function} fnFunction The function to call, when the event occurs.
 * @param {object} [oListener] object on which to call the given function.
 * @public
 */
sap.ui.model.Binding.prototype.detachDataReceived = function(fnFunction,oListener) { return null; };

/**
 * 
 * Detach event-handler <code>fnFunction</code> from the 'dataRequested' event of this <code>sap.ui.model.Binding</code>.<br/>
 * @param {function} fnFunction The function to call, when the event occurs.
 * @param {object} [oListener] object on which to call the given function.
 * @public
 */
sap.ui.model.Binding.prototype.detachDataRequested = function(fnFunction,oListener) { return null; };

/**
 * 
 * Creates a new subclass of class sap.ui.model.Binding with name <code>sClassName</code> 
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * </p><p>
 * For a detailed description of <code>oClassInfo</code> or <code>FNMetaImpl</code> 
 * see {@link sap.ui.base.Object.extend Object.extend}.
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class  
 * @param {function} [FNMetaImpl] alternative constructor for a metadata object
 * @return {function} the created class / constructor function
 * @public
 * @static
 * 
 */
sap.ui.model.Binding.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * 
 * Fire event dataReceived to attached listeners.
 * @param {Map} mArguments the arguments to pass along with the event.
 * @protected
 */
sap.ui.model.Binding.prototype.fireDataReceived = function(mArguments) { return null; };

/**
 * 
 * Fire event dataRequested to attached listeners.
 * @param {Map} mArguments the arguments to pass along with the event.
 * @protected
 */
sap.ui.model.Binding.prototype.fireDataRequested = function(mArguments) { return null; };

/**
 * 
 * Returns whether the binding is initial, which means it did not get an initial value yet
 * @return {boolean} whether binding is initial
 * @public
 */
sap.ui.model.Binding.prototype.isInitial = function() { return false; };

/**
 * 
 * Returns whether the binding is relative, which means it did not start with a /
 * @return {boolean} whether binding is relative
 * @public
 */
sap.ui.model.Binding.prototype.isRelative = function() { return false; };

/**
 * 
 * Refreshes the binding, check whether the model data has been changed and fire change event
 * if this is the case. For server side models this should refetch the data from the server.
 * To update a control, even if no data has been changed, e.g. to reset a control after failed
 * validation, please use the parameter bForceUpdate.
 * @param {boolean} bForceUpdate Update the bound control even if no data has been changed
 * @public
 */
sap.ui.model.Binding.prototype.refresh = function(bForceUpdate) { return null; };

/**
 * 
 * Determines if the binding should be updated by comparing the current model against a specified model.
 * @param {object} oModel The model instance to compare against
 * @returns {boolean} true if this binding should be updated
 * @protected
 */
sap.ui.model.Binding.prototype.updateRequired = function(oModel) { return false; };


// ---- sap.ui.model.BindingMode --------------------------------------------------------------------------

// dummy function to make Eclipse aware of namespace
sap.ui.model.BindingMode.toString = function() { return ""; };

// ---- sap.ui.model.ChangeReason --------------------------------------------------------------------------

// dummy function to make Eclipse aware of namespace
sap.ui.model.ChangeReason.toString = function() { return ""; };

// ---- sap.ui.model.ClientModel --------------------------------------------------------------------------

/**
 * 
 * Constructor for a new ClientModel.
 * @class
 * @abstract
 * Model implementation for Client models
 * @extends sap.ui.model.Model
 * @version 1.15.1-SNAPSHOT
 * @param {object} oData URL where to load the data from
 * @constructor
 * @public
 * 
 */
sap.ui.model.ClientModel = function(oData) {};
/**
 * 
 * Creates a new subclass of class sap.ui.model.ClientModel with name <code>sClassName</code> 
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * </p><p>
 * For a detailed description of <code>oClassInfo</code> or <code>FNMetaImpl</code> 
 * see {@link sap.ui.base.Object.extend Object.extend}.
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class  
 * @param {function} [FNMetaImpl] alternative constructor for a metadata object
 * @return {function} the created class / constructor function
 * @public
 * @static
 * 
 */
sap.ui.model.ClientModel.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * 
 * Force no caching
 * @param {boolean} force no cache true/false: Default = true  
 * @public
 */
sap.ui.model.ClientModel.prototype.forceNoCache = function(force) { return null; };

/**
 * 
 * Returns the current JSON data of the model.
 * Be aware that the returned object is a reference to the model data so all changes to that data will also change the model data.
 * @return the JSON data object
 * @public
 */
sap.ui.model.ClientModel.prototype.getData = function() { return null; };

/**
 * 
 * update all bindings
 * @param {boolean} bForceUpdate true/false: Default = false. If set to false an update 
 * 					will only be done when the value of a binding changed.   
 * @public
 */
sap.ui.model.ClientModel.prototype.updateBindings = function(bForceUpdate) { return null; };


// ---- sap.ui.model.CompositeBinding --------------------------------------------------------------------------

/**
 * 
 * Constructor for CompositeBinding
 * @class
 * The CompositeBinding is used to bundle multiple property bindings which are be used to provide a single binding against
 * these property bindings. Note: Only One Way binding is supported. So setValue and setExternalValue throw exceptions.
 * @public
 * 
 */
sap.ui.model.CompositeBinding = function() {};
/**
 * 
 * Attach event-handler <code>fnFunction</code> to the '_change' event of this <code>sap.ui.model.Model</code>.<br/>
 * @param {function} fnFunction The function to call, when the event occurs.
 * @param {object} [oListener] object on which to call the given function.
 * @protected
 */
sap.ui.model.CompositeBinding.prototype.attachChange = function(fnFunction,oListener) { return null; };

/**
 * 
 * Detach event-handler <code>fnFunction</code> from the '_change' event of this <code>sap.ui.model.Model</code>.<br/>
 * @param {function} fnFunction The function to call, when the event occurs.
 * @param {object} [oListener] object on which to call the given function.
 * @protected
 */
sap.ui.model.CompositeBinding.prototype.detachChange = function(fnFunction,oListener) { return null; };

/**
 * 
 * Returns the property bindings contained in this composite binding.
 * @return {array} the property bindings in this composite binding
 * @public
 */
sap.ui.model.CompositeBinding.prototype.getBindings = function() { return null; };

/**
 * 
 * Returns the current external value of the bound target which is formatted via a type or formatter function. 
 * @return {object} the current value of the bound target
 * @throws sap.ui.model.FormatException
 * @public
 */
sap.ui.model.CompositeBinding.prototype.getExternalValue = function() { return new Object(); };

/**
 * 
 * Returns the raw values of the property bindings in an array.
 * @return {object} the values of the internal property bindings in an array
 * @public
 */
sap.ui.model.CompositeBinding.prototype.getValue = function() { return new Object(); };

/**
 * 
 * Not supported for CompositeBinding as a composite binding contains an array of property bindings. 
 * An exception will be thrown. 
 * @param {object} oValue the value to set for this binding
 * @throws sap.ui.base.Exception
 * @public
 */
sap.ui.model.CompositeBinding.prototype.setExternalValue = function(oValue) { return null; };

/**
 * 
 * Not supported for CompositeBinding as a composite binding contains an array of property bindings. 
 * An exception will be thrown. 
 * @param {object} oValue the value to set for this binding
 * @throws sap.ui.base.Exception
 * @public
 */
sap.ui.model.CompositeBinding.prototype.setValue = function(oValue) { return null; };

/**
 * 
 * Determines if the property bindings in the composite binding should be updated by calling updateRequired on all property bindings with the specified model.
 * @param {object} oModel The model instance to compare against
 * @returns {boolean} true if this binding should be updated
 * @protected
 */
sap.ui.model.CompositeBinding.prototype.updateRequired = function(oModel) { return false; };


// ---- sap.ui.model.Context --------------------------------------------------------------------------

/**
 * 
 * Constructor for Context class.
 * @class
 * The Context is a pointer to an object in the model data, which is used to 
 * allow definition of relative bindings, which are resolved relative to the
 * defined object.
 * Context elements are created either by the ListBinding for each list entry
 * or by using createBindingContext.
 * @param {sap.ui.model.Model} the model
 * @param {String} sPath the path
 * @param {Object} oContext the context object
 * @abstract
 * @public
 * 
 */
sap.ui.model.Context = function(the,sPath,oContext) {};
/**
 * 
 * Creates a new subclass of class sap.ui.model.Context with name <code>sClassName</code> 
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * </p><p>
 * For a detailed description of <code>oClassInfo</code> or <code>FNMetaImpl</code> 
 * see {@link sap.ui.base.C.extend Object.extend}.
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class  
 * @param {function} [FNMetaImpl] alternative constructor for a metadata object
 * @return {function} the created class / constructor function
 * @public
 * @static
 * 
 */
sap.ui.model.Context.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * 
 * Getter for model
 * @public
 * @return {sap.ui.core.Model} the model
 */
sap.ui.model.Context.prototype.getModel = function() { return new sap.ui.core.Model(); };

/**
 * 
 * Gets the (model dependent) object the context points to
 * @public
 * @return {object} the context object
 */
sap.ui.model.Context.prototype.getObject = function() { return new Object(); };

/**
 * 
 * Getter for path
 * @public
 * @return {String} the binding path
 */
sap.ui.model.Context.prototype.getPath = function() { return null; };

/**
 * 
 * Gets the property with the given relative binding path
 * @public
 * @param {String} sPath the binding path
 * @return {any} the property value
 */
sap.ui.model.Context.prototype.getProperty = function(sPath) { return null; };


// ---- sap.ui.model.ContextBinding --------------------------------------------------------------------------

/**
 * 
 * Constructor for ContextBinding
 * @class
 * The ContextBinding is a specific binding for a setting context for the model
 * @param {sap.ui.model.Model} oModel
 * @param {String} sPath
 * @param {Object} oContext
 * @param {Object} [mParameters]
 * @abstract
 * @public
 * 
 */
sap.ui.model.ContextBinding = function(oModel,sPath,oContext,mParameters) {};
/**
 * 
 * Creates a new subclass of class sap.ui.model.ContextBinding with name <code>sClassName</code> 
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * </p><p>
 * For a detailed description of <code>oClassInfo</code> or <code>FNMetaImpl</code> 
 * see {@link sap.ui.base.Object.extend Object.extend}.
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class  
 * @param {function} [FNMetaImpl] alternative constructor for a metadata object
 * @return {function} the created class / constructor function
 * @public
 * @static
 * 
 */
sap.ui.model.ContextBinding.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * 
 * Refreshes the binding, check whether the model data has been changed and fire change event
 * if this is the case. For server side models this should refetch the data from the server.
 * @param {boolean} bForceUpdate Does not have any effect on this binding
 * @public
 */
sap.ui.model.ContextBinding.prototype.refresh = function(bForceUpdate) { return null; };


// ---- sap.ui.model.control --------------------------------------------------------------------------


// ---- sap.ui.model.Filter --------------------------------------------------------------------------

/**
 * 
 * Constructor for Filter
 * You can either pass an object with the filter parameters or use the function arguments
 * </p><p>
 * Using object:
 * new sap.ui.model.Filter({
 *   sPath: ...,
 *   sOperator: ...,
 *   oValue1: ...,
 *   oValue2: ...,
 *   aFilters: ...,
 *   bAnd: ...
 * })
 * </p><p>
 * You can only pass sPath, sOperator and their values OR aFilters and bAnd. You will get an error if you define an invalid combination of filters parameters.
 * </p><p>
 * Using arguments:
 * new sap.ui.model.Filter(sPath, sOperator, oValue1, oValue2);
 * OR
 * new sap.ui.model.Filter(aFilters, bAnd);
 * </p><p>
 * aFilters is an array of other instances of sap.ui.model.Filter. If bAnd is set all filters within the filter will be ANDed else they will be ORed.
 * @class
 * Filter for the list binding
 * @param {String} sPath the binding path for this filter
 * @param {sap.ui.model.FilterOperator} sOperator Operator used for the filter
 * @param {Object} oValue1 First value to use for filter
 * @param {Object} [oValue2=null] Second value to use for filter (optional)
 * @public
 * 
 */
sap.ui.model.Filter = function(sPath,sOperator,oValue1,oValue2) {};
/**
 * 
 * Creates a new subclass of class sap.ui.model.Filter with name <code>sClassName</code> 
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * </p><p>
 * For a detailed description of <code>oClassInfo</code> or <code>FNMetaImpl</code> 
 * see {@link sap.ui.base.Object.extend Object.extend}.
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class  
 * @param {function} [FNMetaImpl] alternative constructor for a metadata object
 * @return {function} the created class / constructor function
 * @public
 * @static
 * 
 */
sap.ui.model.Filter.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };


// ---- sap.ui.model.FilterOperator --------------------------------------------------------------------------

// dummy function to make Eclipse aware of namespace
sap.ui.model.FilterOperator.toString = function() { return ""; };

// ---- sap.ui.model.FilterType --------------------------------------------------------------------------

// dummy function to make Eclipse aware of namespace
sap.ui.model.FilterType.toString = function() { return ""; };

// ---- sap.ui.model.json --------------------------------------------------------------------------


// ---- sap.ui.model.json.JSONModel --------------------------------------------------------------------------

/**
 * 
 * Constructor for a new JSONModel.
 * @class
 * Model implementation for JSON format
 * @extends sap.ui.model.Model
 * @version 1.15.1-SNAPSHOT
 * @param {object} oData either the URL where to load the JSON from or a JS object
 * @constructor
 * @public
 * 
 */
sap.ui.model.json.JSONModel = function(oData) {};
/**
 * 
 * Creates a new subclass of class sap.ui.model.json.JSONModel with name <code>sClassName</code> 
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * </p><p>
 * For a detailed description of <code>oClassInfo</code> or <code>FNMetaImpl</code> 
 * see {@link sap.ui.base.Object.extend Object.extend}.
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class  
 * @param {function} [FNMetaImpl] alternative constructor for a metadata object
 * @return {function} the created class / constructor function
 * @public
 * @static
 * 
 */
sap.ui.model.json.JSONModel.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * 
 * Serializes the current JSON data of the model into a string.
 * Note: May not work in Internet Explorer 8 because of lacking JSON support (works only if IE 8 mode is enabled)
 * @return the JSON data serialized as string
 * @public
 */
sap.ui.model.json.JSONModel.prototype.getJSON = function() { return null; };

/**
 * 
 * Returns the value for the property with the given <code>sPropertyName</code>
 * @param {string} sPath the path to the property
 * @param {object} [oContext=null] the context which will be used to retrieve the property
 * @type any
 * @return the value of the property
 * @public
 */
sap.ui.model.json.JSONModel.prototype.getProperty = function(sPath,oContext) { return null; };

/**
 * 
 * Load JSON-encoded data from the server using a GET HTTP request and store the resulting JSON data in the model.
 * Note: Due to browser security restrictions, most "Ajax" requests are subject to the same origin policy,
 * the request can not successfully retrieve data from a different domain, subdomain, or protocol.
 * @param {string} sURL A string containing the URL to which the request is sent.
 * @param {object | string}[oParameters] A map or string that is sent to the server with the request.
 * Data that is sent to the server is appended to the URL as a query string.
 * If the value of the data parameter is an object (map), it is converted to a string and
 * url-encoded before it is appended to the URL.
 * @param {boolean} [async=true] By default, all requests are sent asynchronous
 * (i.e. this is set to true by default). If you need synchronous requests, set this option to false.
 * Cross-domain requests do not support synchronous operation. Note that synchronous requests may
 * temporarily lock the browser, disabling any actions while the request is active.
 * @param {string} [sType=GET] The type of request to make ("POST" or "GET"), default is "GET".
 * Note: Other HTTP request methods, such as PUT and DELETE, can also be used here, but
 * they are not supported by all browsers.
 * @param {boolean} [bMerge=false] whether the data should be merged instead of replaced
 * @param {string} [bCache=false] force no caching if false. Default is false
 * @param {object} mHeaders An object of additional header key/value pairs to send along with the request
 * @public
 */
sap.ui.model.json.JSONModel.prototype.loadData = function(sURL,oParameters,async,sType,bMerge,bCache,mHeaders) { return null; };

/**
 * 
 * Sets the JSON encoded data to the model.
 * @param {object} oData the data to set on the model
 * @param {boolean} [bMerge=false] whether to merge the data instead of replacing it
 * @public
 */
sap.ui.model.json.JSONModel.prototype.setData = function(oData,bMerge) { return null; };

/**
 * 
 * Sets the JSON encoded string data to the model.
 * @param {string} sJSONText the string data to set on the model
 * @param {boolean} [bMerge=false] whether to merge the data instead of replacing it
 * @public
 */
sap.ui.model.json.JSONModel.prototype.setJSON = function(sJSONText,bMerge) { return null; };

/**
 * 
 * Sets a new value for the given property <code>sPropertyName</code> in the model.
 * If the model value changed all interested parties are informed.
 * @param {string}  sPath path of the property to set
 * @param {any}     oValue value to set the property to
 * @param {object} [oContext=null] the context which will be used to set the property
 * @public
 */
sap.ui.model.json.JSONModel.prototype.setProperty = function(sPath,oValue,oContext) { return null; };


// ---- sap.ui.model.ListBinding --------------------------------------------------------------------------

/**
 * 
 * Constructor for ListBinding
 * @class
 * The ListBinding is a specific binding for lists in the model, which can be used
 * to populate Tables or ItemLists.
 * @param {sap.ui.model.Model} oModel
 * @param {String} sPath
 * @param {Object} oContext
 * @abstract
 * @public
 * 
 */
sap.ui.model.ListBinding = function(oModel,sPath,oContext) {};
/**
 * 
 * Attach event-handler <code>fnFunction</code> to the '_filter' event of this <code>sap.ui.model.ListBinding</code>.<br/>
 * @param {function} fnFunction The function to call, when the event occurs.
 * @param {object} [oListener] object on which to call the given function.
 * @protected
 * @deprecated use the change event. It now contains a parameter (reason : "filter") when a filter event is fired.
 */
sap.ui.model.ListBinding.prototype.attachFilter = function(fnFunction,oListener) { return null; };

/**
 * 
 * Attach event-handler <code>fnFunction</code> to the '_sort' event of this <code>sap.ui.model.ListBinding</code>.<br/>
 * @param {function} fnFunction The function to call, when the event occurs.
 * @param {object} [oListener] object on which to call the given function.
 * @protected
 * @deprecated use the change event. It now contains a parameter (reason : "sort") when a sorter event is fired.
 */
sap.ui.model.ListBinding.prototype.attachSort = function(fnFunction,oListener) { return null; };

/**
 * 
 * Detach event-handler <code>fnFunction</code> from the '_filter' event of this <code>sap.ui.model.ListBinding</code>.<br/>
 * @param {function} fnFunction The function to call, when the event occurs.
 * @param {object} [oListener] object on which to call the given function.
 * @protected
 * @deprecated use the change event.
 */
sap.ui.model.ListBinding.prototype.detachFilter = function(fnFunction,oListener) { return null; };

/**
 * 
 * Detach event-handler <code>fnFunction</code> from the '_sort' event of this <code>sap.ui.model.ListBinding</code>.<br/>
 * @param {function} fnFunction The function to call, when the event occurs.
 * @param {object} [oListener] object on which to call the given function.
 * @protected
 * @deprecated use the change event.
 */
sap.ui.model.ListBinding.prototype.detachSort = function(fnFunction,oListener) { return null; };

/**
 * 
 * Creates a new subclass of class sap.ui.model.ListBinding with name <code>sClassName</code> 
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * </p><p>
 * For a detailed description of <code>oClassInfo</code> or <code>FNMetaImpl</code> 
 * see {@link sap.ui.base.Object.extend Object.extend}.
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class  
 * @param {function} [FNMetaImpl] alternative constructor for a metadata object
 * @return {function} the created class / constructor function
 * @public
 * @static
 * 
 */
sap.ui.model.ListBinding.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * 
 * Filters the list according to the filter definitions
 * @param {object[]} aFilters Array of filter objects
 * @return {sap.ui.model.ListBinding} returns <code>this</code> to facilitate method chaining 
 * @public
 */
sap.ui.model.ListBinding.prototype.filter = function(aFilters) { return new sap.ui.model.ListBinding(); };

/**
 * 
 * Returns the current value of the bound target
 * @return {sap.ui.model.Context[]} the array of contexts for each row of the bound list
 * @public
 */
sap.ui.model.ListBinding.prototype.getContexts = function() { return new Array(); };

/**
 * 
 * Returns list of distinct values for the given relative binding path
 * @param {string} sPath the relative binding path
 * @return {Array} the array of distinct values.
 * @public
 */
sap.ui.model.ListBinding.prototype.getDistinctValues = function(sPath) { return null; };

/**
 * 
 * Checks if grouping is enabled for the binding<br/>
 * @public
 */
sap.ui.model.ListBinding.prototype.isGrouped = function() { return null; };

/**
 * 
 * Sorts the list according to the sorter object
 * @param {sap.ui.model.Sorter|Array} aSorters the Sorter object or an array of sorters which defines the sort order
 * @param {sap.ui.model.FilterType} sFilterType Type of the filter which should be adjusted, if it is not given, the standard behaviour applies
 * @return {sap.ui.model.ListBinding} returns <code>this</code> to facilitate method chaining 
 * @public
 */
sap.ui.model.ListBinding.prototype.sort = function(aSorters,sFilterType) { return new sap.ui.model.ListBinding(); };


// ---- sap.ui.model.Model --------------------------------------------------------------------------

/**
 * 
 * Constructor for a new Model.
 * @class
 * This is an abstract base class for model objects.
 * @abstract
 * @extends sap.ui.base.Object
 * @version 1.15.1-SNAPSHOT
 * @constructor
 * @public
 * 
 */
sap.ui.model.Model = function() {};
/**
 * 
 * The 'parseError' event is fired when parsing of a model document (e.g. XML response) fails.
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {int} oControlEvent.getParameters.errorCode
 * @param {string} oControlEvent.getParameters.url
 * @param {string} oControlEvent.getParameters.reason
 * @param {string} oControlEvent.getParameters.srcText
 * @param {int} oControlEvent.getParameters.line
 * @param {int} oControlEvent.getParameters.linepos
 * @param {int} oControlEvent.getParameters.filepos
 * @public
 */
sap.ui.model.Model.prototype.parseError = function(oControlEvent) { return null; };

/**
 * 
 * The 'requestCompleted' event is fired, after a request has been completed (includes receiving a response), 
 * no matter whether the request succeeded or not.
 * </p><p>
 * Note: Subclasses might add additional parameters to the event object.
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {string} oControlEvent.getParameters.url The url which was sent to the backend
 * @param {string} oControlEvent.getParameters.type The type of the request (if available)
 * @param {boolean} oControlEvent.getParameters.success if the request has been successful or not. In case of errors consult the optional errorobject parameter.
 * @param {object} [oControlEvent.getParameters.errorobject] If the request failed the error if any can be accessed in this property.
 * @param {boolean} [oControlEvent.getParameters.async] If the request is synchronous or asynchronous (if available)
 * @param {string} [oControlEvent.getParameters.info] Additional information for the request (if available)
 * @public
 */
sap.ui.model.Model.prototype.requestCompleted = function(oControlEvent) { return null; };

/**
 * 
 * The 'requestFailed' event is fired, when data retrieval from a backend failed.
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {string} oControlEvent.getParameters.message A text that describes the failure.
 * @param {string} oControlEvent.getParameters.statusCode HTTP status code returned by the request (if available)
 * @param {string} oControlEvent.getParameters.statusText The status as a text, details not specified, intended only for diagnosis output
 * @param {string} oControlEvent.getParameters.responseText Response that has been received for the request ,as a text string
 * @public
 */
sap.ui.model.Model.prototype.requestFailed = function(oControlEvent) { return null; };

/**
 * 
 * The 'requestSent' event is fired, after a request has been sent to a backend.
 * </p><p>
 * Note: Subclasses might add additional parameters to the event object.
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {string} oControlEvent.getParameters.url The url which is sent to the backend
 * @param {string} oControlEvent.getParameters.type The type of the request (if available)
 * @param {boolean} [oControlEvent.getParameters.async] If the request is synchronous or asynchronous (if available)
 * @param {string} [oControlEvent.getParameters.info] Additional information for the request (if available)
 * @public
 */
sap.ui.model.Model.prototype.requestSent = function(oControlEvent) { return null; };

/**
 * 
 * Attach event-handler <code>fnFunction</code> to the 'parseError' event of this <code>sap.ui.model.Model</code>.<br/>
 * @param {object}
 *            [oData] The object, that should be passed along with the event-object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs. This function will be called on the
 *            oListener-instance (if present) or in a 'static way'.
 * @param {object}
 *            [oListener] Object on which to call the given function. If empty, the global context (window) is used.
 * @return {sap.ui.model.Model} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.model.Model.prototype.attachParseError = function(oData,fnFunction,oListener) { return new sap.ui.model.Model(); };

/**
 * 
 * Attach event-handler <code>fnFunction</code> to the 'requestCompleted' event of this <code>sap.ui.model.Model</code>.
 * @param {object}
 *            [oData] The object, that should be passed along with the event-object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs. This function will be called on the
 *            oListener-instance (if present) or in a 'static way'.
 * @param {object}
 *            [oListener] Object on which to call the given function. If empty, the global context (window) is used.
 * @return {sap.ui.model.Model} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.model.Model.prototype.attachRequestCompleted = function(oData,fnFunction,oListener) { return new sap.ui.model.Model(); };

/**
 * 
 * Attach event-handler <code>fnFunction</code> to the 'requestFailed' event of this <code>sap.ui.model.Model</code>.<br/>
 * @param {object}
 *            [oData] The object, that should be passed along with the event-object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs. This function will be called on the
 *            oListener-instance (if present) or in a 'static way'.
 * @param {object}
 *            [oListener] Object on which to call the given function. If empty, this Model is used.
 * @return {sap.ui.model.Model} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.model.Model.prototype.attachRequestFailed = function(oData,fnFunction,oListener) { return new sap.ui.model.Model(); };

/**
 * 
 * Attach event-handler <code>fnFunction</code> to the 'requestSent' event of this <code>sap.ui.model.Model</code>.
 * @param {object}
 *            [oData] The object, that should be passed along with the event-object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs. This function will be called on the
 *            oListener-instance (if present) or in a 'static way'.
 * @param {object}
 *            [oListener] Object on which to call the given function. If empty, the global context (window) is used.
 * @return {sap.ui.model.Model} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.model.Model.prototype.attachRequestSent = function(oData,fnFunction,oListener) { return new sap.ui.model.Model(); };

/**
 * 
 * Create ContextBinding
 * @param {string}
 *         sPath the path pointing to the property that should be bound
 * @param {object}
 *         [oContext=null] the context object for this databinding (optional)
 * @param {object}
 *         [mParameters=null] additional model specific parameters (optional)
 * @return {sap.ui.model.ContextBinding}
 * @public
 */
sap.ui.model.Model.prototype.bindContext = function(sPath,oContext,mParameters) { return new sap.ui.model.ContextBinding(); };

/**
 * 
 * Implement in inheriting classes
 * @abstract
 * @param {string}
 *         sPath the path pointing to the list / array that should be bound
 * @param {object}
 *         [oContext=null] the context object for this databinding (optional)
 * @param {sap.ui.model.Sorter}
 *         [aSorters=null] initial sort order (can be either a sorter or an array of sorters) (optional)
 * @param {array}
 *         [aFilters=null] predefined filter/s (can be either a filter or an array of filters) (optional)
 * @param {object}
 *         [mParameters=null] additional model specific parameters (optional)
 * @return {sap.ui.model.ListBinding}
 * @public
 */
sap.ui.model.Model.prototype.bindList = function(sPath,oContext,aSorters,aFilters,mParameters) { return new sap.ui.model.ListBinding(); };

/**
 * 
 * Implement in inheriting classes
 * @abstract
 * @param {string}
 *         sPath the path pointing to the property that should be bound
 * @param {object}
 *         [oContext=null] the context object for this databinding (optional)
 * @param {object}
 *         [mParameters=null] additional model specific parameters (optional)
 * @return {sap.ui.model.PropertyBinding}
 * @public
 */
sap.ui.model.Model.prototype.bindProperty = function(sPath,oContext,mParameters) { return new sap.ui.model.PropertyBinding(); };

/**
 * 
 * Implement in inheriting classes
 * @abstract
 * @param {string}
 *         sPath the path pointing to the tree / array that should be bound
 * @param {object}
 *         [oContext=null] the context object for this databinding (optional)
 * @param {array}
 *         [aFilters=null] predefined filter/s contained in an array (optional)
 * @param {object}
 *         [mParameters=null] additional model specific parameters (optional)
 * @return {sap.ui.model.TreeBinding}
 * @public
 */
sap.ui.model.Model.prototype.bindTree = function(sPath,oContext,aFilters,mParameters) { return new sap.ui.model.TreeBinding(); };

/**
 * 
 * Implement in inheriting classes
 * @abstract
 * @param {string}
 *         sPath the path to create the new context from
 * @param {object}
 * 		   [oContext=null] the context which should be used to create the new binding context
 * @param {object}
 * 		   [mParameters=null] the parameters used to create the new binding context
 * @param {function}
 *         fnCallBack the function which should be called after the binding context has been created
 * @param {boolean}
 *         [bForceUpdate] force update even if data is already available 
 * @public
 */
sap.ui.model.Model.prototype.createBindingContext = function(sPath,oContext,mParameters,fnCallBack,bForceUpdate) { return null; };

/**
 * 
 * Implement in inheriting classes
 * @abstract
 * @param {object}
 *         oContext to destroy
 * @public
 */
sap.ui.model.Model.prototype.destroyBindingContext = function(oContext) { return null; };

/**
 * 
 * Detach event-handler <code>fnFunction</code> from the 'parseError' event of this <code>sap.ui.model.Model</code>.<br/>
 * </p><p>
 * The passed function and listener object must match the ones previously used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Object on which the given function had to be called.
 * @return {sap.ui.model.Model} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.model.Model.prototype.detachParseError = function(fnFunction,oListener) { return new sap.ui.model.Model(); };

/**
 * 
 * Detach event-handler <code>fnFunction</code> from the 'requestCompleted' event of this <code>sap.ui.model.Model</code>.
 * </p><p>
 * The passed function and listener object must match the ones previously used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Object on which the given function had to be called.
 * @return {sap.ui.model.Model} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.model.Model.prototype.detachRequestCompleted = function(fnFunction,oListener) { return new sap.ui.model.Model(); };

/**
 * 
 * Detach event-handler <code>fnFunction</code> from the 'requestFailed' event of this <code>sap.ui.model.Model</code>.<br/>
 * </p><p>
 * The passed function and listener object must match the ones previously used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Object on which the given function had to be called.
 * @return {sap.ui.model.Model} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.model.Model.prototype.detachRequestFailed = function(fnFunction,oListener) { return new sap.ui.model.Model(); };

/**
 * 
 * Detach event-handler <code>fnFunction</code> from the 'requestSent' event of this <code>sap.ui.model.Model</code>.
 * </p><p>
 * The passed function and listener object must match the ones previously used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Object on which the given function had to be called.
 * @return {sap.ui.model.Model} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.model.Model.prototype.detachRequestSent = function(fnFunction,oListener) { return new sap.ui.model.Model(); };

/**
 * 
 * Creates a new subclass of class sap.ui.model.Model with name <code>sClassName</code> 
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * </p><p>
 * For a detailed description of <code>oClassInfo</code> or <code>FNMetaImpl</code> 
 * see {@link sap.ui.base.Object.extend Object.extend}.
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class  
 * @param {function} [FNMetaImpl] alternative constructor for a metadata object
 * @return {function} the created class / constructor function
 * @public
 * @static
 * 
 */
sap.ui.model.Model.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * 
 * Fire event parseError to attached listeners.
 * @param {object} [mArguments] the arguments to pass along with the event.
 * @param {int} [mArguments.errorCode]
 * @param {string} [mArguments.url]
 * @param {string} [mArguments.reason]
 * @param {string} [mArguments.srcText]
 * @param {int} [mArguments.line]
 * @param {int} [mArguments.linepos]
 * @param {int} [mArguments.filepos]
 * @return {sap.ui.model.Model} <code>this</code> to allow method chaining
 * @protected
 */
sap.ui.model.Model.prototype.fireParseError = function(mArguments) { return new sap.ui.model.Model(); };

/**
 * 
 * Fire event requestCompleted to attached listeners.
 * @param {object} [mArguments] the arguments to pass along with the event.
 * @param {string} [mArguments.url] The url which was sent to the backend.
 * @param {string} [mArguments.type] The type of the request (if available)
 * @param {boolean} [mArguments.async] If the request was synchronous or asynchronous (if available)
 * @param {string} [mArguments.info] additional information for the request (if available)
 * @return {sap.ui.model.Model} <code>this</code> to allow method chaining
 * @protected
 */
sap.ui.model.Model.prototype.fireRequestCompleted = function(mArguments) { return new sap.ui.model.Model(); };

/**
 * 
 * Fire event requestFailed to attached listeners.
 * @param {object} [mArguments] the arguments to pass along with the event.
 * @param {string} [mArguments.message]  A text that describes the failure.
 * @param {string} [mArguments.statusCode]  HTTP status code returned by the request (if available)
 * @param {string} [mArguments.statusText] The status as a text, details not specified, intended only for diagnosis output
 * @param {string} [mArguments.responseText] Response that has been received for the request ,as a text string
 * @return {sap.ui.model.Model} <code>this</code> to allow method chaining
 * @protected
 */
sap.ui.model.Model.prototype.fireRequestFailed = function(mArguments) { return new sap.ui.model.Model(); };

/**
 * 
 * Fire event requestSent to attached listeners.
 * @param {object} [mArguments] the arguments to pass along with the event.
 * @param {string} [mArguments.url] The url which is sent to the backend.
 * @param {string} [mArguments.type] The type of the request (if available)
 * @param {boolean} [mArguments.async] If the request is synchronous or asynchronous (if available)
 * @param {string} [mArguments.info] additional information for the request (if available)
 * @return {sap.ui.model.Model} <code>this</code> to allow method chaining
 * @protected
 */
sap.ui.model.Model.prototype.fireRequestSent = function(mArguments) { return new sap.ui.model.Model(); };

/**
 * 
 * Get the default binding mode for the model
 * @return {sap.ui.model.BindingMode} default binding mode of the model
 * @public
 */
sap.ui.model.Model.prototype.getDefaultBindingMode = function() { return new sap.ui.model.BindingMode(); };

/**
 * 
 * Implement in inheriting classes
 * @abstract
 * @param {string}
 *         sPath the path to where to read the attribute value
 * @param {object}
 * 		   [oContext=null] the context with which the path should be resolved
 * @public
 */
sap.ui.model.Model.prototype.getProperty = function(sPath,oContext) { return null; };

/**
 * 
 * Check if the specified binding mode is supported by the model.
 * @param {sap.ui.model.BindingMode} sMode the binding mode to check
 * @public
 */
sap.ui.model.Model.prototype.isBindingModeSupported = function(sMode) { return null; };

/**
 * 
 * Returns whether legacy path syntax is used
 * @return {boolean} 
 * @public
 */
sap.ui.model.Model.prototype.isLegacySyntax = function() { return false; };

/**
 * 
 * Refresh the model.
 * This will check all bindings for updated data and update the controls if data has been changed. 
 * @param {boolean} bForceUpdate Update controls even if data has not been changed
 * @public
 */
sap.ui.model.Model.prototype.refresh = function(bForceUpdate) { return null; };

/**
 * 
 * Set the default binding mode for the model. If the default binding mode should be changed,
 * this method should be called directly after model instance creation and before any binding creation.
 * Otherwise it is not guaranteed that the existing bindings will be updated with the new binding mode.
 * @param {sap.ui.model.BindingMode} sMode the default binding mode to set for the model
 * @public
 */
sap.ui.model.Model.prototype.setDefaultBindingMode = function(sMode) { return null; };

/**
 * 
 * Enables legacy path syntax handling
 * </p><p>
 * This defines, whether relative bindings, which do not have a defined
 * binding context, should be compatible to earlier releases which means
 * they are resolved relative to the root element or handled strict and
 * stay unresolved until a binding context is set
 * @param {boolean} bCompatibleSyntax the path syntax to use
 * @public
 */
sap.ui.model.Model.prototype.setLegacySyntax = function(bCompatibleSyntax) { return null; };

/**
 * 
 * Set the maximum number of entries which are used for for list bindings.
 * @param {int} collection size limit  
 * @public
 */
sap.ui.model.Model.prototype.setSizeLimit = function(collection) { return null; };


// ---- sap.ui.model.odata --------------------------------------------------------------------------


// ---- sap.ui.model.odata.Filter --------------------------------------------------------------------------

/**
 * 
 * Constructor for Filter
 * @class
 * Filter for the list binding
 * @param {string} sPath the binding path for this filter
 * @param {object[]} aValues Array of FilterOperators and their values: [{operator:"GE",value1:"val1"},{operator:"LE",value1:"val1"},{operator:"BT",value1:"val1",value2:"val2"}]
 * @param {boolean} [bAND=true] If true the values from aValues will be ANDed; otherwise ORed
 * @public
 * @deprecated
 */
sap.ui.model.odata.Filter = function(sPath,aValues,bAND) {};

// ---- sap.ui.model.odata.ODataMetadata --------------------------------------------------------------------------

/**
 * 
 * Constructor for a new ODataMetadata.
 * @param {object} oMetadata the parsed metadata object provided by datajs
 * @class
 * Implementation to access oData metadata
 * @version 1.15.1-SNAPSHOT
 * @constructor
 * @public
 * @extends sap.ui.base.Object
 */
sap.ui.model.odata.ODataMetadata = function(oMetadata) {};
/**
 * 
 * Creates a new subclass of class sap.ui.model.odata.ODataMetadata with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * </p><p>
 * For a detailed description of <code>oClassInfo</code> or <code>FNMetaImpl</code>
 * see {@link sap.ui.base.Object.extend Object.extend}.
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class
 * @param {function} [FNMetaImpl] alternative constructor for a metadata object
 * @return {function} the created class / constructor function
 * @public
 * @static
 * 
 */
sap.ui.model.odata.ODataMetadata.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * 
 * Return the metadata object
 * @return {Object} metdata object
 * @public
 */
sap.ui.model.odata.ODataMetadata.prototype.getServiceMetadata = function() { return null; };


// ---- sap.ui.model.odata.ODataModel --------------------------------------------------------------------------

/**
 * 
 * Constructor for a new ODataModel.
 * @param {string} sServiceUrl required - base uri of the service to request data from; additional URL parameters appended here will be appended to every request
 * @param {string | object} [bJSON] (optional) true to request data as JSON or an object which contains the following parameter properties: 
 * 							json, user, password, headers, tokenHandling, withCredentials, loadMetadataAsync, maxDataServiceVersion (default = '2.0';
 * please use the following string format e.g. '2.0' or '3.0'. Currently supported: '2.0' and '3.0'), useBatch (all requests will be sent in batch requests) .See below for descriptions of these parameters. 
 * @param {string} [sUser] (optional) user
 * @param {string} [sPassword] (optional) password
 * @param {object} [mHeaders] (optional) map of custom headers which should be set in each request.
 * @param {boolean} [bTokenHandling] (optional) enable/disable XCSRF-Token handling
 * @param {boolean} [bWithCredentials] (optional, experimental) true when user credentials are to be included in a cross-origin request.
 * @param {object} [bLoadMetadataAsync] (optional) determined if the service metadata request is sent synchronous or asynchronous. Default is false.
 * Please note that if this is set to true attach to the metadataLoaded event to get notified when the metadata has been loaded before accessing the service metadata.
 * @class
 * Model implementation for oData format
 * @extends sap.ui.model.Model
 * @version 1.15.1-SNAPSHOT
 * @constructor
 * @public
 * 
 */
sap.ui.model.odata.ODataModel = function(sServiceUrl,bJSON,sUser,sPassword,mHeaders,bTokenHandling,bWithCredentials,bLoadMetadataAsync) {};
/**
 * 
 * Appends the change batch operations to the end of the batch stack. Only PUT, POST or DELETE batch operations should be included in the specified array. 
 * The operations in the array will be included in a single changeset. To embed change operations in different change sets call this method with the corresponding change operations again.
 * If an illegal batch operation is added to the change set nothing will be performed and false will be returned.
 * @param {any[]} aChangeOperations an array of change batch operations created via <code>createBatchOperation</code> and <code>sMethod</code> = POST, PUT, MERGE or DELETE
 * @public
 */
sap.ui.model.odata.ODataModel.prototype.addBatchChangeOperations = function(aChangeOperations) { return null; };

/**
 * 
 * Appends the read batch operations to the end of the batch stack. Only GET batch operations should be included in the specified array. 
 * If an illegal batch operation is added to the batch nothing will be performed and false will be returned.
 * @param {any[]} aReadOperations an array of read batch operations created via <code>createBatchOperation</code> and <code>sMethod</code> = GET
 * @public
 */
sap.ui.model.odata.ODataModel.prototype.addBatchReadOperations = function(aReadOperations) { return null; };

/**
 * 
 * Trigger a request to the function import odata service that was specified in the model constructor.
 * @param {string} sFunctionName A string containing the name of the function to call.
 *                       The name is concatenated to the sServiceUrl which was specified in the model constructor.
 * @param {string} sMethod A string containing the type of method to call this function with
 * @param {map} oParameters A map containing the parameters that will be passed as query strings
 * @param {object} oContext If specified the sPath has to be relative to the path given with the context.
 * @param {function} fnSuccess  a callback function which is called when the data has been successfully retrieved.
 *                       The handler can have the following parameters: <code>oData<code> and <code>response</code>.
 * @param {function} fnError a callback function which is called when the request failed.
 *                       The handler can have the parameter: <code>oError</code> which contains additional error information.
 * @return {object} an object which has an <code>abort</code> function to abort the current request.
 * @public
 */
sap.ui.model.odata.ODataModel.prototype.callFunction = function(sFunctionName,sMethod,oParameters,oContext,fnSuccess,fnError) { return new Object(); };

/**
 * 
 * Removes all operations in the current batch.
 * @public
 */
sap.ui.model.odata.ODataModel.prototype.clearBatch = function() { return null; };

/**
 * 
 * Trigger a POST request to the odata service that was specified in the model constructor. 
 * @param {string} sPath A string containing the path to the collection where an entry 
 *                      should be created. The path is concatenated to the sServiceUrl
 *                      which was specified in the model constructor.
 * @param {object} oData data of the entry that should be created.
 * @param {object} [oContext] If specified the sPath has to be relative to the path given with the context. 
 * @param {function} [fnSuccess] a callback function which is called when the data has
 *                              been successfully retrieved. The handler can have the 
 *                              following parameters: oData and response.
 * @param {function} [fnError] a callback function which is called when the request failed. 
 *           The handler can have the parameter <code>oError</code> which contains additional error information.
 * @return {object} an object which has an <code>abort</code> function to abort the current request.
 * @public
 */
sap.ui.model.odata.ODataModel.prototype.create = function(sPath,oData,oContext,fnSuccess,fnError) { return new Object(); };

/**
 * 
 * Creates a single batch operation (read or change operation) which can be used in a batch request.
 * @param {string} sPath A string containing the path to the collection or entry where the batch operation should be performed.
 * 						The path is concatenated to the sServiceUrl which was specified in the model constructor.
 * @param {string} sMethod for the batch operation. Possible values are GET, PUT, MERGE, POST, DELETE
 * @param {object} [oData] optional data payload which should be created, updated, deleted in a change batch operation.
 * @param {object} [oParameters] optional parameter for additional information introduced in SAPUI5 1.9.1, 
 * @param {string} [oParameters.sETag] an ETag which can be used for concurrency control. If it is specified, 
 *                  it will be used in an If-Match-Header in the request to the server for this entry.    
 * @public
 */
sap.ui.model.odata.ODataModel.prototype.createBatchOperation = function(sPath,sMethod,oData,oParameters) { return null; };

/**
 * 
 * Creates a new entry object which is described by the metadata of the entity type of the 
 * specified sCollection Name. A context object is returned which can be used to bind
 * against the newly created object. 
 * </p><p>
 * For each created entry a request is created and stored in a request queue.
 * The request queue can be submitted by calling submitChanges. To delete a created
 * entry from the request queue call deleteCreateEntry. 
 * </p><p>
 * The optional vProperties parameter can be used as follows:
 * </p><p>
 *   - vProperties could be an array containing the property names which should be included 
 *     in the new entry. Other properties defined in the entity type are not included.
 *   - vProperties could be an object which includes the desired properties and the values 
 *     which should be used for the created entry.
 * </p><p>
 * If vProperties is not specified, all properties in the entity type will be included in the 
 * created entry.
 * </p><p>
 * If there are no values specified the properties will have undefined values.
 * </p><p>
 * Please note that deep creates (including data defined by navigationproperties) are not supported
 * @param {String} sCollection Name of the collection
 * @param {array|object} vProperties An array that specifies a set of properties or the entry
 * @return {sap.ui.model.Context} oContext A Context object that point to the new created entry.  
 * @public
 */
sap.ui.model.odata.ODataModel.prototype.createEntry = function(sCollection,vProperties) { return new sap.ui.model.Context(); };

/**
 * 
 * Deletes a created entry from the request queue and the model.
 * @param {sap.ui.model.Context} oContext The context object pointing to the created entry
 * @public
 */
sap.ui.model.odata.ODataModel.prototype.deleteCreatedEntry = function(oContext) { return null; };

/**
 * 
 * Creates a new subclass of class sap.ui.model.odata.ODataModel with name <code>sClassName</code> 
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * </p><p>
 * For a detailed description of <code>oClassInfo</code> or <code>FNMetaImpl</code> 
 * see {@link sap.ui.base.Object.extend Object.extend}.
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class  
 * @param {function} [FNMetaImpl] alternative constructor for a metadata object
 * @return {function} the created class / constructor function
 * @public
 * @static
 * 
 */
sap.ui.model.odata.ODataModel.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * 
 * Force no caching
 * @param {boolean} [bForceNoCache=false] whether to force no caching
 * @public
 * @deprecated The caching should be controlled by the backend by setting the correct cache control header
 */
sap.ui.model.odata.ODataModel.prototype.forceNoCache = function(bForceNoCache) { return null; };

/**
 * 
 * Return requested data as object if the data has already been loaded and stored in the model. 
 * @param {string} sPath A string containing the path to the data object that should be returned.
 * @param {object} [oContext] the optional context which is used with the sPath to retrieve the requested data.
 * @param {boolean} [bIncludeExpandEntries=null] This parameter should be set when a URI or custom parameter 
 * with a $expand System Query Option was used to retrieve associated entries embedded/inline.
 * If true then the getProperty function returns a desired property value/entry and includes the associated expand entries (if any).
 * If false the associated/expanded entry properties are removed and not included in the
 * desired entry as properties at all. This is useful for performing updates on the base entry only. Note: A copy and not a reference of the entry will be returned.
 * </p><p>
 * return {object} oData Object containing the requested data if the path is valid. 
 * @public
 * @deprecated please use {@link #getProperty} instead
 */
sap.ui.model.odata.ODataModel.prototype.getData = function(sPath,oContext,bIncludeExpandEntries) { return null; };

/**
 * 
 * Returns all headers and custom headers which are stored in the OData model.
 * @return {object} the header map
 * @public
 */
sap.ui.model.odata.ODataModel.prototype.getHeaders = function() { return new Object(); };

/**
 * 
 * Returns the value for the property with the given <code>sPropertyName</code>
 * @param {string}
 *          sPath the path/name of the property
 * @param {object} [oContext] the context if available to access the property value
 * @param {boolean} [bIncludeExpandEntries=null] This parameter should be set when a URI or custom parameter 
 * with a $expand System Query Option was used to retrieve associated entries embedded/inline.
 * If true then the getProperty function returns a desired property value/entry and includes the associated expand entries (if any).
 * If false the associated/expanded entry properties are removed and not included in the
 * desired entry as properties at all. This is useful for performing updates on the base entry only. Note: A copy and not a reference of the entry will be returned.
 * @type any
 * @return the value of the property
 * @public
 */
sap.ui.model.odata.ODataModel.prototype.getProperty = function(sPath,oContext,bIncludeExpandEntries) { return null; };

/**
 * 
 * Return the metadata object. Please note that when using the model with bLoadMetadataAsync = true then this function might return undefined because the
 * metadata has not been loaded yet.
 * In this case attach to the <code>metadataLoaded</code> event to get notified when the metadata is available and then call this function.
 * @return {Object} metdata object
 * @public
 */
sap.ui.model.odata.ODataModel.prototype.getServiceMetadata = function() { return null; };

/**
 * 
 * Checks if there exist pending changes in the model created by the setProperty method.
 * @return {boolean} true/false  
 * @public
 */
sap.ui.model.odata.ODataModel.prototype.hasPendingChanges = function() { return false; };

/**
 * 
 * Returns whether this model supports the $count on its collections
 * @returns {boolean}
 * @public
 */
sap.ui.model.odata.ODataModel.prototype.isCountSupported = function() { return false; };

/**
 * 
 * Trigger a GET request to the odata service that was specified in the model constructor. 
 * The data will not be stored in the model. The requested data is returned with the response.
 * @param {string} sPath A string containing the path to the data which should
 *            				be retrieved. The path is concatenated to the sServiceUrl
 *            				which was specified in the model constructor.
 * @param {object} [oContext] If specified the sPath has to be is relative to the path given with the context. 
 * @param {any[]} [oUrlParams] An map of url parameters which will be concatenated to the read url
 * @param {boolean} [bAsync] true for asynchronous requests. Default is true.
 * @param {function} [fnSuccess] a callback function which is called when the data has
 *            					 been successfully retrieved. The handler can have the 
 *            	                 following parameters: oData and response. 
 * @param {function} [fnError] a callback function which is called when the request failed. The handler can have the parameter: oError which contains
 * additional error information.
 * @return {object} an object which has an <code>abort</code> function to abort the current request.
 * @public
 */
sap.ui.model.odata.ODataModel.prototype.read = function(sPath,oContext,oUrlParams,bAsync,fnSuccess,fnError) { return new Object(); };

/**
 * 
 * Refresh the model.
 * This will check all bindings for updated data and update the controls if data has been changed. 
 * @param {boolean} bForceUpdate Update controls even if data has not been changed
 * @public
 */
sap.ui.model.odata.ODataModel.prototype.refresh = function(bForceUpdate) { return null; };

/**
 * 
 * refresh XSRF token by performing a GET request against the service root URL.
 * @param {function} [fnSuccess] a callback function which is called when the data has
 *            					 been successfully retrieved.
 * @param {function} [fnError] a callback function which is called when the request failed. The handler can have the parameter: oError which contains
 *  additional error information.
 * @param {boolean} [bAsync=false] true for asynchronous requests.
 * @return {object} an object which has an <code>abort</code> function to abort the current request.
 * @public
 */
sap.ui.model.odata.ODataModel.prototype.refreshSecurityToken = function(fnSuccess,fnError,bAsync) { return new Object(); };

/**
 * 
 * Trigger a DELETE request to the odata service that was specified in the model constructor. 
 * @param {string} sPath A string containing the path to the data that should be removed. 
 *                       The path is concatenated to the sServiceUrl which was specified in the model constructor.
 * @param {object} [oParameters] Optional, can contain the following attributes: oContext, fnSuccess, fnError, sETag: 
 * @param {object} [oParameters.oContext] If specified the sPath has to be relative to the path given with the context.
 * @param {function} [oParameters.fnSuccess]  a callback function which is called when the data has been successfully retrieved. 
 *                       The handler can have the following parameters: <code>oData<code> and <code>response</code>.
 * @param {function} [oParameters.fnError] a callback function which is called when the request failed. 
 *                       The handler can have the parameter: <code>oError</code> which contains additional error information.
 * @param {string} [oParameters.sETag] If specified, the If-Match-Header will be set to this Etag.
 * @return {object} an object which has an <code>abort</code> function to abort the current request.
 * @public
 */
sap.ui.model.odata.ODataModel.prototype.remove = function(sPath,oParameters) { return new Object(); };

/**
 * 
 * </p><p>
 * Resets the collected changes by the setProperty method and reloads the data from the server.
 * @param {function} [fnSuccess] a callback function which is called when the data has
 *            					 been successfully resetted. The handler can have the 
 *            	                 following parameters: oData and response. 
 * @param {function} [fnError] a callback function which is called when the request failed
 * @public
 */
sap.ui.model.odata.ODataModel.prototype.resetChanges = function(fnSuccess,fnError) { return null; };

/**
 * 
 * Sets whether this OData service supports $count on its collections
 * @param {boolean} bCountSupported
 * @public
 */
sap.ui.model.odata.ODataModel.prototype.setCountSupported = function(bCountSupported) { return null; };

/**
 * 
 * Set custom headers which are provided in a key/value map. These headers are used for requests against the OData backend.
 * Private headers which are set in the ODataModel cannot be modified.
 * These private headers are: accept, accept-language, x-csrf-token, MaxDataServiceVersion, DataServiceVersion.
 * </p><p>
 * To remove these headers simply set the mCustomHeaders parameter to null. Please also note that when calling this method again all previous custom headers 
 * are removed unless they are specified again in the mCustomHeaders parameter. 
 * @param {object} mHeaders the header name/value map.
 * @public
 */
sap.ui.model.odata.ODataModel.prototype.setHeaders = function(mHeaders) { return null; };

/**
 * 
 * Sets a new value for the given property <code>sPropertyName</code> in the model without triggering a server request.
 *  This can be done by the submitChanges method.
 * </p><p>
 *  Note: Only one entry of one collection can be updated at once. Otherwise a fireRejectChange event is fired.
 * </p><p>
 *  Before updating a different entry the existing changes of the current entry have to be submitted or resetted by the
 *  corresponding methods: submitChanges, resetChanges.
 * </p><p>
 *  IMPORTANT: All pending changes are resetted in the model if the application triggeres any kind of requests 
 *  which change the model data e.g. sorting, filtering, refresh, create, remove, update. Make sure to
 *  submit the pending changes first. To determine if there are any pending changes call the hasPendingChanges method.
 * @param {string}  sPath path of the property to set
 * @param {any}     oValue value to set the property to
 * @param {object} [oContext=null] the context which will be used to set the property
 * @return {boolean} true if the value was set correctly and false if errors occurred like the entry was not found or another entry was already updated.
 * @public
 */
sap.ui.model.odata.ODataModel.prototype.setProperty = function(sPath,oValue,oContext) { return false; };

/**
 * 
 * Enable/Disable XCSRF-Token handling
 * @param {boolean} [bTokenHandling=true] whether to use token handling or not
 * @public
 */
sap.ui.model.odata.ODataModel.prototype.setTokenHandlingEnabled = function(bTokenHandling) { return null; };

/**
 * 
 * Enable/Disable batch for all requests
 * @param {boolean} [bUseBatch=true] whether the requests should be encapsulated in a batch request
 * @public
 */
sap.ui.model.odata.ODataModel.prototype.setUseBatch = function(bUseBatch) { return null; };

/**
 * 
 * Submits the collected changes in the batch which were collected via <code>addBatchReadOperations</code> or <code>addBatchChangeOperations</code>.
 * The batch will be cleared afterwards. If the batch is empty no request will be performed and false will be returned.
 * Note: No data will be stored in the model. 
 * @param {function} [fnSuccess] a callback function which is called when the batch request has
 *            					 been successfully sent. Note: There might have errors occured in the single batch operations. These errors can be accessed in the
 *            aErrorResponses parameter in the callback handler.
 *            The handler can have the 
 *            	                 following parameters: oData, oResponse and aErrorResponses. 
 * @param {function} [fnError] a callback function which is called when the batch request failed. The handler can have the parameter: oError which contains
 * additional error information.
 * @param {boolean} [bAsync] true for asynchronous request. Default is true.
 * @return {object} an object which has an <code>abort</code> function to abort the current request. Returns false if no request will be performed because the batch is empty.
 * @public
 */
sap.ui.model.odata.ODataModel.prototype.submitBatch = function(fnSuccess,fnError,bAsync) { return new Object(); };

/**
 * 
 * Submits the collected changes which were collected by the setProperty method. A MERGE request will be triggered to only update the changed properties.
 * If a URI with a $expand System Query Option was used then the expand entries will be removed from the collected changes.
 * Changes to this entries should be done on the entry itself. So no deep updates are supported.
 * @param {function} [fnSuccess] a callback function which is called when the data has
 *            					 been successfully updated. The handler can have the 
 *            	                 following parameters: oData and response. 
 * @param {function} [fnError] a callback function which is called when the request failed. The handler can have the parameter: oError which contains
 * additional error information
 * @param {object} [oParameters] optional parameter for additional information introduced in SAPUI5 1.9.1 
 * @param {string} [oParameters.sETag] an ETag which can be used for concurrency control. If it is specified, it will be used in an If-Match-Header in the request to the server for this entry.
 * @return {object} an object which has an <code>abort</code> function to abort the current request.
 * @public
 */
sap.ui.model.odata.ODataModel.prototype.submitChanges = function(fnSuccess,fnError,oParameters) { return new Object(); };

/**
 * 
 * Trigger a PUT/MERGE request to the odata service that was specified in the model constructor. 
 * @param {string} sPath A string containing the path to the data that should be updated.
 * 							The path is concatenated to the sServiceUrl which was specified 
 * 							in the model constructor.
 * @param {object} oData data of the entry that should be updated.
 * @param {object} [oParameters] Optional, can contain the following attributes:
 * @param {object} [oParameters.oContext] If specified the sPath has to be is relative to the path given with the context.
 * @param {function} [oParameters.fnSuccess] a callback function which is called when the data has been successfully updated.
 * @param {function} [oParameters.fnError] a callback function which is called when the request failed. 
 *     The handler can have the parameter <code>oError</code> which contains additional error information.
 * @param {boolean} [oParameters.bMerge=false] trigger a MERGE request instead of a PUT request to perform a differential update
 * @param {string} [oParameters.sETag] If specified, the If-Match-Header will be set to this Etag.
 * @return {object} an object which has an <code>abort</code> function to abort the current request.
 * @public
 */
sap.ui.model.odata.ODataModel.prototype.update = function(sPath,oData,oParameters) { return new Object(); };

/**
 * 
 * update all bindings
 * @param {boolean} [bForceUpdate=false] If set to false an update  will only be done when the value of a binding changed.
 * @public
 */
sap.ui.model.odata.ODataModel.prototype.updateBindings = function(bForceUpdate) { return null; };


// ---- sap.ui.model.PropertyBinding --------------------------------------------------------------------------

/**
 * 
 * Constructor for PropertyBinding
 * @class
 * The PropertyBinding is used to access single data values in the data model.
 * @param {sap.ui.model.Model} oModel
 * @param {String} sPath
 * @param {Object} oContext
 * @abstract
 * @public
 * 
 */
sap.ui.model.PropertyBinding = function(oModel,sPath,oContext) {};
/**
 * 
 * Creates a new subclass of class sap.ui.model.PropertyBinding with name <code>sClassName</code> 
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * </p><p>
 * For a detailed description of <code>oClassInfo</code> or <code>FNMetaImpl</code> 
 * see {@link sap.ui.base.Object.extend Object.extend}.
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class  
 * @param {function} [FNMetaImpl] alternative constructor for a metadata object
 * @return {function} the created class / constructor function
 * @public
 * @static
 * 
 */
sap.ui.model.PropertyBinding.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * 
 * Returns the current external value of the bound target which is formatted via a type or formatter function. 
 * @throws sap.ui.model.FormatException
 * @return {object} the current value of the bound target
 * @public
 */
sap.ui.model.PropertyBinding.prototype.getExternalValue = function() { return new Object(); };

/**
 * 
 * Returns the formatter function
 *  @returns the formatter function
 *  @public
 */
sap.ui.model.PropertyBinding.prototype.getFormatter = function() { return null; };

/**
 * 
 * Returns the type if any for the binding.
 *  @returns the binding type
 *  @public
 */
sap.ui.model.PropertyBinding.prototype.getType = function() { return null; };

/**
 * 
 * Returns the current value of the bound target
 * @return {object} the current value of the bound target
 * @public
 */
sap.ui.model.PropertyBinding.prototype.getValue = function() { return new Object(); };

/**
 * 
 * Sets the value for this binding. The value is parsed and validated against its type and then set to the binding.
 * A model implementation should check if the current default binding mode permits
 * setting the binding value and if so set the new value also in the model.
 * @param {object} oValue the value to set for this binding
 * @throws sap.ui.model.ParseException
 * @throws sap.ui.model.ValidateException
 * @public
 */
sap.ui.model.PropertyBinding.prototype.setExternalValue = function(oValue) { return null; };

/**
 * 
 * Sets the optional formatter function for the binding.
 * @param {function} fnFormatter the formatter function for the binding
 * @public
 */
sap.ui.model.PropertyBinding.prototype.setFormatter = function(fnFormatter) { return null; };

/**
 * 
 * Sets the optional type and internal type for the binding. The type and internal type are used to do the parsing/formatting correctly.
 * The internal type is the property type of the element which the value is formatted to.  
 * @param {object} oType the sap.ui.model.Type for the binding
 * @param {String} sInternalType the internal type of the element property which this binding is bound against.
 * @public
 */
sap.ui.model.PropertyBinding.prototype.setType = function(oType,sInternalType) { return null; };

/**
 * 
 * Sets the value for this binding. A model implementation should check if the current default binding mode permits
 * setting the binding value and if so set the new value also in the model.
 * @param {object} oValue the value to set for this binding
 * @public
 */
sap.ui.model.PropertyBinding.prototype.setValue = function(oValue) { return null; };


// ---- sap.ui.model.resource --------------------------------------------------------------------------


// ---- sap.ui.model.resource.ResourceModel --------------------------------------------------------------------------

/**
 * 
 * Constructor for a new ResourceModel.
 * @class Model implementation for resource bundles
 * @extends sap.ui.model.Model
 * @version 1.15.1-SNAPSHOT
 * @param {object} oData parameters used to initialize the ResourceModel; at least either bundleUrl or bundleName must be set on this object; if both are set, bundleName wins
 * @param {string} [oData.bundleUrl] the URL to the base .properties file of a bundle (.properties file without any locale information, e.g. "mybundle.properties")
 * @param {string} [oData.bundleName] the UI5 module name of the .properties file; this name will be resolved to a path like the paths of normal UI5 modules and ".properties" will then be appended (e.g. a name like "myBundle" can be given)
 * @param {string} [oData.bundleLocale] an optional locale; when not given, the default is the active locale from the UI5 configuration
 * @constructor
 * @public
 * 
 */
sap.ui.model.resource.ResourceModel = function(oData) {};
/**
 * 
 * Creates a new subclass of class sap.ui.model.resource.ResourceModel with name <code>sClassName</code> 
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * </p><p>
 * For a detailed description of <code>oClassInfo</code> or <code>FNMetaImpl</code> 
 * see {@link sap.ui.base.Object.extend Object.extend}.
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class  
 * @param {function} [FNMetaImpl] alternative constructor for a metadata object
 * @return {function} the created class / constructor function
 * @public
 * @static
 * 
 */
sap.ui.model.resource.ResourceModel.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * 
 * Returns the value for the property with the given <code>sPropertyName</code>
 * @param {string} sPath the path to the property
 * @type any
 * @return the value of the property
 * @public
 */
sap.ui.model.resource.ResourceModel.prototype.getProperty = function(sPath) { return null; };

/**
 * 
 * Returns the resource bundle of this model
 * @return loaded resource bundle
 * @public
 */
sap.ui.model.resource.ResourceModel.prototype.getResourceBundle = function() { return null; };


// ---- sap.ui.model.SelectionModel --------------------------------------------------------------------------

/**
 * 
 * Constructs an instance of a sap.ui.model.SelectionModel.
 * @class sap.ui.model.SelectionModel
 * @extends sap.ui.base.Object
 * @version 1.15.1-SNAPSHOT
 * @param {int} iSelectionMode <code>sap.ui.model.SelectionModel.SINGLE_SELECTION</code> or <code>sap.ui.model.SelectionModel.MULTI_SELECTION</code>
 * @constructor
 * @public
 * 
 */
sap.ui.model.SelectionModel = function(iSelectionMode) {};
/**
 * 
 * SelectionMode: Multi Selection
 * @public
 */
sap.ui.model.SelectionModel.prototype.MULTI_SELECTION = null

/**
 * 
 * SelectionMode: Single Selection
 * @public
 */
sap.ui.model.SelectionModel.prototype.SINGLE_SELECTION = null

/**
 * 
 * Changes the selection to be the union of the current selection
 * and the range between <code>iFromIndex</code> and <code>iToIndex</code> inclusive.
 * If <code>iFromIndex</code> is smaller than <code>iToIndex</code>, both parameters are swapped.
 * </p><p>
 * In <code>SINGLE_SELECTION</code> selection mode, this is equivalent
 * to calling <code>setSelectionInterval</code>, and only the second index
 * is used.
 * </p><p>
 * If this call results in a change to the current selection or lead selection, then a  
 * <code>SelectionChanged</code> event is fired.
 * @param {int} iFromIndex one end of the interval.
 * @param {int} iToIndex other end of the interval
 * @return {sap.ui.model.SelectionModel} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.model.SelectionModel.prototype.addSelectionInterval = function(iFromIndex,iToIndex) { return new sap.ui.model.SelectionModel(); };

/**
 * 
 * Attach event-handler <code>fnFunction</code> to the 'selectionChanged' event of this <code>sap.ui.model.SelectionModel</code>.<br/>
 * @param {object}
 *            [oData] The object, that should be passed along with the event-object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs. This function will be called on the
 *            oListener-instance (if present) or in a 'static way'.
 * @param {object}
 *            [oListener] Object on which to call the given function. If empty, this Model is used.
 * @return {sap.ui.model.SelectionModel} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.model.SelectionModel.prototype.attachSelectionChanged = function(oData,fnFunction,oListener) { return new sap.ui.model.SelectionModel(); };

/**
 * 
 * Change the selection to the empty set and clears the lead selection.
 * </p><p>
 * If this call results in a change to the current selection or lead selection, then a  
 * <code>SelectionChanged</code> event is fired.
 * @return {sap.ui.model.SelectionModel} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.model.SelectionModel.prototype.clearSelection = function() { return new sap.ui.model.SelectionModel(); };

/**
 * 
 * Detach event-handler <code>fnFunction</code> from the 'selectionChanged' event of this <code>sap.ui.model.SelectionModel</code>.<br/>
 * </p><p>
 * The passed function and listener object must match the ones previously used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Object on which the given function had to be called.
 * @return {sap.ui.model.SelectionModel} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.model.SelectionModel.prototype.detachSelectionChanged = function(fnFunction,oListener) { return new sap.ui.model.SelectionModel(); };

/**
 * 
 * Fire event 'selectionChanged' to attached listeners.
 * </p><p>
 * Expects following event parameters:
 * <ul>
 * <li>'leadIndex' of type <code>int</code> Lead selection index.</li>
 * <li>'rowIndices' of type <code>int[]</code> Other selected indices (if available)</li>
 * </ul>
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.model.SelectionModel} <code>this</code> to allow method chaining
 * @protected
 */
sap.ui.model.SelectionModel.prototype.fireSelectionChanged = function(mArguments) { return new sap.ui.model.SelectionModel(); };

/**
 * 
 * Return the second index argument from the most recent call to
 * setSelectionInterval(), addSelectionInterval() or removeSelectionInterval().
 * @return {int} lead selected index
 * @public
 */
sap.ui.model.SelectionModel.prototype.getLeadSelectedIndex = function() { return 0; };

/**
 * 
 * Returns the selected indices as array
 * @return array of selected indices
 * @public
 */
sap.ui.model.SelectionModel.prototype.getSelectedIndices = function() { return null; };

/**
 * 
 * Returns the current selection mode.
 * @return {int} the current selection mode
 * @public
 */
sap.ui.model.SelectionModel.prototype.getSelectionMode = function() { return 0; };

/**
 * 
 * Returns true if the specified index is selected.
 * @return {boolean} true if the specified index is selected.
 * @public
 */
sap.ui.model.SelectionModel.prototype.isSelectedIndex = function(iIndex) { return false; };

/**
 * 
 * Changes the selection to be the set difference of the current selection
 * and the indices between <code>iFromIndex</code> and <code>iToIndex</code> inclusive.
 * If <code>iFromIndex</code> is smaller than <code>iToIndex</code>, both parameters are swapped.
 * </p><p>
 * If the range of removed selection indices includes the current lead selection,
 * then the lead selection will be unset (set to -1).
 * </p><p>
 * If this call results in a change to the current selection or lead selection, then a  
 * <code>SelectionChanged</code> event is fired.
 * @param {int} iFromIndex one end of the interval.
 * @param {int} iToIndex other end of the interval
 * @return {sap.ui.model.SelectionModel} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.model.SelectionModel.prototype.removeSelectionInterval = function(iFromIndex,iToIndex) { return new sap.ui.model.SelectionModel(); };

/**
 * 
 * Changes the selection to be equal to the range <code>iFromIndex</code> and <code>iToIndex</code>
 * inclusive. If <code>iFromIndex</code> is smaller than <code>iToIndex</code>, both parameters are swapped.
 * </p><p>
 * In <code>SINGLE_SELECTION</code> selection mode, only <code>iToindex</iToIndex> is used.
 * </p><p>
 * If this call results in a change to the current selection, then a  
 * <code>SelectionChanged</code> event is fired.
 * @param {int} iFromIndex one end of the interval.
 * @param {int} iToIndex other end of the interval
 * @return {sap.ui.model.SelectionModel} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.model.SelectionModel.prototype.setSelectionInterval = function(iFromIndex,iToIndex) { return new sap.ui.model.SelectionModel(); };

/**
 * 
 * Sets the selection mode. The following list describes the accepted
 * selection modes:
 * <ul>
 * <li><code>sap.ui.model.SelectionModel.SINGLE_SELECTION</code> -
 *   Only one list index can be selected at a time. In this mode,
 *   <code>setSelectionInterval</code> and <code>addSelectionInterval</code> are
 *   equivalent, both replacing the current selection with the index
 *   represented by the second argument (the "lead").
 * <li><code>sap.ui.model.SelectionModel.MULTI_SELECTION</code> -
 *   In this mode, there's no restriction on what can be selected.
 * </ul>
 * @param iSelectionMode {int} selection mode
 * @public
 */
sap.ui.model.SelectionModel.prototype.setSelectionMode = function(iSelectionMode) { return null; };


// ---- sap.ui.model.SimpleType --------------------------------------------------------------------------

/**
 * 
 * Constructor for a new SimpleType.
 * @class
 * This is an abstract base class for simple types.
 * @abstract
 * @extends sap.ui.model.Type
 * @version 1.15.1-SNAPSHOT
 * @constructor
 * @param {object} [oFormatOptions] options as provided by concrete subclasses
 * @param {object} [oConstraints] constraints as supported by concrete subclasses
 * @public
 * 
 */
sap.ui.model.SimpleType = function(oFormatOptions,oConstraints) {};
/**
 * 
 * Creates a new subclass of class sap.ui.model.SimpleType with name <code>sClassName</code> 
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * </p><p>
 * For a detailed description of <code>oClassInfo</code> or <code>FNMetaImpl</code> 
 * see {@link sap.ui.base.Object.extend Object.extend}.
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class  
 * @param {function} [FNMetaImpl] alternative constructor for a metadata object
 * @return {function} the created class / constructor function
 * @public
 * @static
 * 
 */
sap.ui.model.SimpleType.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * 
 * Format the given value in model representation to an output value in the given
 * internal type. This happens according to the format options, if target type is 'string'.
 * If oValue is not defined or null, null will be returned.
 * @param {any} oValue the value to be formatted
 * @param {string} sInternalType the target type
 * @return {any} the formatted output value
 * @public
 */
sap.ui.model.SimpleType.prototype.formatValue = function(oValue,sInternalType) { return null; };

/**
 * 
 * Parse a value of an internal type to the expected value of the model type.
 * @param {any} oValue the value to be parsed
 * @param {string} sInternalType the source type
 * @return {any} the parse result
 * @public
 */
sap.ui.model.SimpleType.prototype.parseValue = function(oValue,sInternalType) { return null; };

/**
 * 
 * Validate whether a given value in model representation is valid and meets the
 * defined constraints (if any).
 * @param {any} oValue the value to be validated
 * @public
 */
sap.ui.model.SimpleType.prototype.validateValue = function(oValue) { return null; };


// ---- sap.ui.model.Sorter --------------------------------------------------------------------------

/**
 * 
 * </p><p>
 * Constructor for Sorter
 * @class
 * Sorter for the list binding
 * This object defines the sort order for the list binding.
 * @param {String} sPath the binding path used for sorting
 * @param {boolean} [bDescending=false] whether the sort order should be descending
 * @param {boolean|function} vGroup configure grouping of the content, can either be true to enable grouping
 *        based on the raw model property value, or a function which calculates the group value out of the 
 *        context (e.g. oContext.getProperty("date").getYear() for year grouping). The control needs to
 *        implement the grouping behaviour for the aggregation which you want to group.
 * @public
 * 
 */
sap.ui.model.Sorter = function(sPath,bDescending,vGroup) {};
/**
 * 
 * Creates a new subclass of class sap.ui.model.Sorter with name <code>sClassName</code> 
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * </p><p>
 * For a detailed description of <code>oClassInfo</code> or <code>FNMetaImpl</code> 
 * see {@link sap.ui.base.Object.extend Object.extend}.
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class  
 * @param {function} [FNMetaImpl] alternative constructor for a metadata object
 * @return {function} the created class / constructor function
 * @public
 * @static
 * 
 */
sap.ui.model.Sorter.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };


// ---- sap.ui.model.TreeBinding --------------------------------------------------------------------------

/**
 * 
 * Constructor for TreeBinding
 * @class
 * The TreeBinding is a specific binding for trees in the model, which can be used
 * to populate Trees.
 * @param {sap.ui.model.Model} oModel
 * @param {string}
 *         sPath the path pointing to the tree / array that should be bound
 * @param {object}
 *         [oContext=null] the context object for this databinding (optional)
 * @param {array}
 *         [aFilters=null] predefined filter/s contained in an array (optional)
 * @param {object}
 *         [mParameters=null] additional model specific parameters (optional)
 * @abstract
 * @public
 * 
 */
sap.ui.model.TreeBinding = function(oModel,sPath,oContext,aFilters,mParameters) {};
/**
 * 
 * Attach event-handler <code>fnFunction</code> to the '_filter' event of this <code>sap.ui.model.TreeBinding</code>.<br/>
 * @param {function} fnFunction The function to call, when the event occurs.
 * @param {object} [oListener] object on which to call the given function.
 * @protected
 * @deprecated use the change event. It now contains a parameter (reason : "filter") when a filter event is fired.
 */
sap.ui.model.TreeBinding.prototype.attachFilter = function(fnFunction,oListener) { return null; };

/**
 * 
 * Detach event-handler <code>fnFunction</code> from the '_filter' event of this <code>sap.ui.model.TreeBinding</code>.<br/>
 * @param {function} fnFunction The function to call, when the event occurs.
 * @param {object} [oListener] object on which to call the given function.
 * @protected
 * @deprecated use the change event.
 */
sap.ui.model.TreeBinding.prototype.detachFilter = function(fnFunction,oListener) { return null; };

/**
 * 
 * Creates a new subclass of class sap.ui.model.TreeBinding with name <code>sClassName</code> 
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * </p><p>
 * For a detailed description of <code>oClassInfo</code> or <code>FNMetaImpl</code> 
 * see {@link sap.ui.base.Object.extend Object.extend}.
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class  
 * @param {function} [FNMetaImpl] alternative constructor for a metadata object
 * @return {function} the created class / constructor function
 * @public
 * @static
 * 
 */
sap.ui.model.TreeBinding.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * 
 * Filters the tree according to the filter definitions.
 * @param {Array} aFilters Array of sap.ui.model.Filter objects
 * @public
 */
sap.ui.model.TreeBinding.prototype.filter = function(aFilters) { return null; };

/**
 * 
 * Returns the current value of the bound target
 * @param {Object} oContext the context element of the node
 * @return {Array} the array of child contexts for the given node
 * @public
 */
sap.ui.model.TreeBinding.prototype.getNodeContexts = function(oContext) { return null; };

/**
 * 
 * Returns the current value of the bound target
 * @return {Array} the array of child contexts for the root node
 * @public
 */
sap.ui.model.TreeBinding.prototype.getRootContexts = function() { return null; };


// ---- sap.ui.model.Type --------------------------------------------------------------------------

/**
 * 
 * Constructor for a new Type.
 * @class
 * This is an abstract base class for type objects.
 * @abstract
 * @extends sap.ui.base.Object
 * @version 1.15.1-SNAPSHOT
 * @constructor
 * @public
 * 
 */
sap.ui.model.Type = function() {};
/**
 * 
 * Creates a new subclass of class sap.ui.model.Type with name <code>sClassName</code> 
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * </p><p>
 * For a detailed description of <code>oClassInfo</code> or <code>FNMetaImpl</code> 
 * see {@link sap.ui.base.Object.extend Object.extend}.
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class  
 * @param {function} [FNMetaImpl] alternative constructor for a metadata object
 * @return {function} the created class / constructor function
 * @public
 * @static
 * 
 */
sap.ui.model.Type.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * 
 * Returns the name of this type.
 * @return {String} the name of this type
 * @public
 */
sap.ui.model.Type.prototype.getName = function() { return null; };


// ---- sap.ui.model.type --------------------------------------------------------------------------


// ---- sap.ui.model.type.Boolean --------------------------------------------------------------------------

/**
 * 
 * Constructor for a Boolean type.
 * @class
 * This class represents boolean simple types.
 * @extends sap.ui.model.SimpleType
 * @version 1.15.1-SNAPSHOT
 * @constructor
 * @public
 * @param {object} [oFormatOptions] formatting options. Boolean doesn't support any specific format options
 * @param {object} [oConstraints] value constraints. Boolean doesn't support additional constraints
 * 
 */
sap.ui.model.type.Boolean = function(oFormatOptions,oConstraints) {};
/**
 * 
 * Creates a new subclass of class sap.ui.model.type.Boolean with name <code>sClassName</code> 
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * </p><p>
 * For a detailed description of <code>oClassInfo</code> or <code>FNMetaImpl</code> 
 * see {@link sap.ui.base.Object.extend Object.extend}.
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class  
 * @param {function} [FNMetaImpl] alternative constructor for a metadata object
 * @return {function} the created class / constructor function
 * @public
 * @static
 * 
 */
sap.ui.model.type.Boolean.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };


// ---- sap.ui.model.type.Date --------------------------------------------------------------------------

/**
 * 
 * Constructor for a Date type.
 * @class
 * This class represents date simple types.
 * @extends sap.ui.model.SimpleType
 * @version 1.15.1-SNAPSHOT
 * @constructor
 * @public
 * @param {object} [oFormatOptions] options used to create a DateFormat for formatting / parsing. Supports the same options as {@link sap.ui.core.format.DateFormat.getDateInstance DateFormat.getDateInstance}
 * @param {object} [oFormatOptions.source] additional set of options used to create a second DateFormat object for conversions between 
 *           string values in the data source (e.g. model) and Date. This second format object is used to convert from a model string to Date before 
 *           converting the Date to string with the primary format object. Vice versa, this 'source' format is also used to format an already parsed 
 *           external value (e.g. user input) into the string format expected by the data source.
 *           Supports the same set of options as {@link sap.ui.core.format.DateFormat.getDateInstance DateFormat.getDateInstance}.
 * @param {object} [oConstraints] value constraints. 
 * @param {Date|string} [oConstraints.minimum] smallest value allowed for this type. Values for constraints must use the same type as configured via <code>oFormatOptions.source</code>  
 * @param {Date|string} [oConstraints.maximum] largest value allowed for this type. Values for constraints must use the same type as configured via <code>oFormatOptions.source</code>  
 * 
 */
sap.ui.model.type.Date = function(oFormatOptions,oConstraints) {};
/**
 * 
 * Creates a new subclass of class sap.ui.model.type.Date with name <code>sClassName</code> 
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * </p><p>
 * For a detailed description of <code>oClassInfo</code> or <code>FNMetaImpl</code> 
 * see {@link sap.ui.base.Object.extend Object.extend}.
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class  
 * @param {function} [FNMetaImpl] alternative constructor for a metadata object
 * @return {function} the created class / constructor function
 * @public
 * @static
 * 
 */
sap.ui.model.type.Date.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * 
 * @protected
 */
sap.ui.model.type.Date.prototype.getOutputPattern = function() { return null; };


// ---- sap.ui.model.type.DateTime --------------------------------------------------------------------------

/**
 * 
 * Constructor for a DateTime type.
 * @class
 * This class represents datetime simple types.
 * @extends sap.ui.model.type.Date
 * @version 1.15.1-SNAPSHOT
 * @constructor
 * @public
 * @param {object} [oFormatOptions] options used to create a DateFormat for formatting / parsing to/from external values and 
 *           optionally for a second DateFormat to convert between the data source format (Model) and the internally used JavaScript Date.format. 
 *           For both DateFormat objects, the same options are supported as for {@link sap.ui.core.format.DateFormat.getDateTimeInstance DateFormat.getDateTimeInstance}.
 *           Note that this differs from the base type.
 * @param {object} [oConstraints] value constraints. Supports the same kind of constraints as its base type Date, but note the different format options (Date vs. DateTime) 
 * 
 */
sap.ui.model.type.DateTime = function(oFormatOptions,oConstraints) {};
/**
 * 
 * Creates a new subclass of class sap.ui.model.type.DateTime with name <code>sClassName</code> 
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * </p><p>
 * For a detailed description of <code>oClassInfo</code> or <code>FNMetaImpl</code> 
 * see {@link sap.ui.base.Object.extend Object.extend}.
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class  
 * @param {function} [FNMetaImpl] alternative constructor for a metadata object
 * @return {function} the created class / constructor function
 * @public
 * @static
 * 
 */
sap.ui.model.type.DateTime.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };


// ---- sap.ui.model.type.Float --------------------------------------------------------------------------

/**
 * 
 * Constructor for a Float type.
 * @class
 * This class represents float simple types.
 * @extends sap.ui.model.SimpleType
 * @version 1.15.1-SNAPSHOT
 * @constructor
 * @public
 * @param {object} [oFormatOptions] formatting options. Supports the same options as {@link sap.ui.core.format.NumberFormat.getFloatInstance NumberFormat.getFloatInstance}
 * @param {object} [oConstraint]s value constraints. 
 * @param {float} [oConstraints.minimum] smallest value allowed for this type  
 * @param {float} [oConstraints.maximum] largest value allowed for this type  
 * 
 */
sap.ui.model.type.Float = function(oFormatOptions,oConstraint) {};
/**
 * 
 * Creates a new subclass of class sap.ui.model.type.Float with name <code>sClassName</code> 
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * </p><p>
 * For a detailed description of <code>oClassInfo</code> or <code>FNMetaImpl</code> 
 * see {@link sap.ui.base.Object.extend Object.extend}.
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class  
 * @param {function} [FNMetaImpl] alternative constructor for a metadata object
 * @return {function} the created class / constructor function
 * @public
 * @static
 * 
 */
sap.ui.model.type.Float.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };


// ---- sap.ui.model.type.Integer --------------------------------------------------------------------------

/**
 * 
 * Constructor for a Integer type.
 * @class
 * This class represents integer simple types.
 * @extends sap.ui.model.SimpleType
 * @version 1.15.1-SNAPSHOT
 * @constructor
 * @public
 * @param {object} [oFormatOptions] formatting options. Supports the same options as {@link sap.ui.core.format.NumberFormat.getIntegerInstance NumberFormat.getIntegerInstance}
 * @param {object} [oConstraints] value constraints. 
 * @param {int} [oConstraints.minimum] smallest value allowed for this type  
 * @param {int} [oConstraints.maximum] largest value allowed for this type  
 * 
 */
sap.ui.model.type.Integer = function(oFormatOptions,oConstraints) {};
/**
 * 
 * Creates a new subclass of class sap.ui.model.type.Integer with name <code>sClassName</code> 
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * </p><p>
 * For a detailed description of <code>oClassInfo</code> or <code>FNMetaImpl</code> 
 * see {@link sap.ui.base.Object.extend Object.extend}.
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class  
 * @param {function} [FNMetaImpl] alternative constructor for a metadata object
 * @return {function} the created class / constructor function
 * @public
 * @static
 * 
 */
sap.ui.model.type.Integer.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };


// ---- sap.ui.model.type.String --------------------------------------------------------------------------

/**
 * 
 * Constructor for a String type.
 * @class
 * This class represents string simple types.
 * @extends sap.ui.model.SimpleType
 * @version 1.15.1-SNAPSHOT
 * @constructor
 * @public
 * @param {object} [oFormatOptions] formatting options. String doesn't support any formatting options
 * @param {object} [oConstraints] value constraints. All given constraints must be fulfilled by a value to be valid  
 * @param {int} [oConstraints.maxLength] maximum length (in characters) that a string of this value may have  
 * @param {string} [oConstraints.startsWith] a prefix that any valid value must start with  
 * @param {string} [oConstraints.startsWithIgnoreCase] a prefix that any valid value must start with, ignoring case  
 * @param {string} [oConstraints.endsWith] a suffix that any valid value must end with  
 * @param {string} [oConstraints.endsWithIgnoreCase] a suffix that any valid value must end with, ignoring case  
 * @param {string} [oConstraints.contains] an infix that must be contained in any valid value  
 * @param {string} [oConstraints.equals] only value that is allowed  
 * @param {RegExp} [oConstraints.search] a regular expression that the value must match  
 * 
 */
sap.ui.model.type.String = function(oFormatOptions,oConstraints) {};
/**
 * 
 * Creates a new subclass of class sap.ui.model.type.String with name <code>sClassName</code> 
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * </p><p>
 * For a detailed description of <code>oClassInfo</code> or <code>FNMetaImpl</code> 
 * see {@link sap.ui.base.Object.extend Object.extend}.
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class  
 * @param {function} [FNMetaImpl] alternative constructor for a metadata object
 * @return {function} the created class / constructor function
 * @public
 * @static
 * 
 */
sap.ui.model.type.String.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };


// ---- sap.ui.model.type.Time --------------------------------------------------------------------------

/**
 * 
 * Constructor for a Time type.
 * @class
 * This class represents time simple types.
 * @extends sap.ui.model.type.Date
 * @version 1.15.1-SNAPSHOT
 * @constructor
 * @public
 * @param {object} [oFormatOptions] options used to create a DateFormat for formatting / parsing to/from external values and 
 *           optionally for a second DateFormat to convert between the data source format (Model) and the internally used JavaScript Date.format. 
 *           For both DateFormat objects, the same options are supported as for {@link sap.ui.core.format.DateFormat.getTimeInstance DateFormat.getTimeInstance}.
 *           Note that this differs from the base type.
 * @param {object} [oConstraints] value constraints. Supports the same kind of constraints as its base type Date, but note the different format options (Date vs. Time) 
 * 
 */
sap.ui.model.type.Time = function(oFormatOptions,oConstraints) {};
/**
 * 
 * Creates a new subclass of class sap.ui.model.type.Time with name <code>sClassName</code> 
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * </p><p>
 * For a detailed description of <code>oClassInfo</code> or <code>FNMetaImpl</code> 
 * see {@link sap.ui.base.Object.extend Object.extend}.
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class  
 * @param {function} [FNMetaImpl] alternative constructor for a metadata object
 * @return {function} the created class / constructor function
 * @public
 * @static
 * 
 */
sap.ui.model.type.Time.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };


// ---- sap.ui.model.xml --------------------------------------------------------------------------


// ---- sap.ui.model.xml.XMLModel --------------------------------------------------------------------------

/**
 * 
 * Constructor for a new XMLModel.
 * @class
 * Model implementation for XML format
 * @extends sap.ui.model.Model
 * @version 1.15.1-SNAPSHOT
 * @param {object} oData either the URL where to load the XML from or a XML
 * @constructor
 * @public
 * 
 */
sap.ui.model.xml.XMLModel = function(oData) {};
/**
 * 
 * Returns the value for the property with the given <code>sPropertyName</code>
 * @param {string} sPath the path to the property
 * @param {object} [oContext=null] the context which will be used to retrieve the property
 * @type any
 * @return the value of the property
 * @public
 */
sap.ui.model.xml.XMLModel.prototype.getProperty = function(sPath,oContext) { return null; };

/**
 * 
 * Serializes the current XML data of the model into a string.
 * @return the XML document serialized as string
 * @public
 */
sap.ui.model.xml.XMLModel.prototype.getXML = function() { return null; };

/**
 * 
 * Load XML-encoded data from the server using a GET HTTP request and store the resulting XML data in the model.
 * Note: Due to browser security restrictions, most "Ajax" requests are subject to the same origin policy,
 * the request can not successfully retrieve data from a different domain, subdomain, or protocol.
 * @param {string} sURL A string containing the URL to which the request is sent.
 * @param {object | string}[oParameters] A map or string that is sent to the server with the request.
 * @param {boolean} [bAsync=true] if the request should be asynchron or not. Default is true.
 * @param {string} [sType=GET] of request. Default is 'GET'
 * @param {string} [bCache=false] force no caching if false. Default is false
 * @param {object} mHeaders An object of additional header key/value pairs to send along with the request
 * @public
 */
sap.ui.model.xml.XMLModel.prototype.loadData = function(sURL,oParameters,bAsync,sType,bCache,mHeaders) { return null; };

/**
 * 
 * Sets the provided XML encoded data object to the model
 * @param {object} oData the data to set to the model
 * @public
 */
sap.ui.model.xml.XMLModel.prototype.setData = function(oData) { return null; };

/**
 * 
 * Sets an XML namespace to use in the binding path
 * @param {string} sNameSpace the namespace URI
 * @param {string} [sPrefix=null] the prefix for the namespace (optional)
 * @public
 */
sap.ui.model.xml.XMLModel.prototype.setNameSpace = function(sNameSpace,sPrefix) { return null; };

/**
 * 
 * Sets a new value for the given property <code>sPropertyName</code> in the model.
 * If the model value changed all interested parties are informed.
 * @param {string}  sPath path of the property to set
 * @param {any}     oValue value to set the property to
 * @param {object} [oContext=null] the context which will be used to set the property
 * @public
 */
sap.ui.model.xml.XMLModel.prototype.setProperty = function(sPath,oValue,oContext) { return null; };

/**
 * 
 * Sets the specified XML formatted string text to the model
 * @param {string} sXMLText the XML data as string
 * @public
 */
sap.ui.model.xml.XMLModel.prototype.setXML = function(sXMLText) { return null; };


// ---- sap.ui.test --------------------------------------------------------------------------


// ---- sap.ui.test.qunit --------------------------------------------------------------------------

/**
 * 
 * Delays the start of the test until everything is rendered or - if given - for the specified milliseconds.
 * This function must be called before the first test function.
 * @param {int} [iDelay] optional delay in milliseconds
 * @public
 * @memberOf sap.ui.test.qunit
 */
sap.ui.test.qunit.delayTestStart = function(iDelay) { return null; };

/**
 * 
 * Programmtically triggers a keypress event on a specified input field target and appends the character to the value
 * of this input field.
 * @see sap.ui.test.qunit.triggerKeypress
 * @param {string | DOMElement} oInput The ID of a DOM input field or a DOM input field which serves as target
 * @param {string} sChar Only the first char of the string will be passed via keypress event
 * @public
 * @memberOf sap.ui.test.qunit
 */
sap.ui.test.qunit.triggerCharacterInput = function(oInput,sChar) { return null; };

/**
 * 
 * Programmtically triggers an event specified by its name on a specified target with some optional parameters.
 * @see http://api.jquery.com/trigger/
 * @param {string} sEventName The name of the browser event (like "click")
 * @param {string | DOMElement} oTarget The ID of a DOM element or a DOM element which serves as target of the event
 * @param {object} [oParams] The parameters which should be attached to the event in JSON notation (depending on the event type).
 * @public
 * @memberOf sap.ui.test.qunit
 */
sap.ui.test.qunit.triggerEvent = function(sEventName,oTarget,oParams) { return null; };

/**
 * 
 * @deprecated Use <code>sap.ui.test.qunit.triggerKeydown</code> instead.
 * @see sap.ui.test.qunit.triggerKeydown
 * @public
 * @memberOf sap.ui.test.qunit
 */
sap.ui.test.qunit.triggerKeyboardEvent = function(oTarget,sKey,bShiftKey,bAltKey,bCtrlKey) { return null; };

/**
 * 
 * Programmtically triggers a keydown event on a specified target.
 * @see sap.ui.test.qunit.triggerKeyEvent
 * @param {string | DOMElement} oTarget The ID of a DOM element or a DOM element which serves as target of the event
 * @param {string | int} sKey The keys name as defined in <code>jQuery.sap.KeyCodes</code> or its key code
 * @param {boolean} bShiftKey Indicates whether the shift key is down in addition
 * @param {boolean} bAltKey Indicates whether the alt key is down in addition
 * @param {boolean} bCtrlKey Indicates whether the ctrl key is down in addition
 * @public
 * @memberOf sap.ui.test.qunit
 */
sap.ui.test.qunit.triggerKeydown = function(oTarget,sKey,bShiftKey,bAltKey,bCtrlKey) { return null; };

/**
 * 
 * Programmtically triggers a keyboard event specified by its name on a specified target.
 * @see sap.ui.test.qunit.triggerEvent
 * @param {string} sEventType The name of the browser keyboard event (like "keydown")
 * @param {string | DOMElement} oTarget The ID of a DOM element or a DOM element which serves as target of the event
 * @param {string | int} sKey The keys name as defined in <code>jQuery.sap.KeyCodes</code> or its key code
 * @param {boolean} bShiftKey Indicates whether the shift key is down in addition
 * @param {boolean} bAltKey Indicates whether the alt key is down in addition
 * @param {boolean} bCtrlKey Indicates whether the ctrl key is down in addition
 * @public
 * @memberOf sap.ui.test.qunit
 */
sap.ui.test.qunit.triggerKeyEvent = function(sEventType,oTarget,sKey,bShiftKey,bAltKey,bCtrlKey) { return null; };

/**
 * 
 * Programmtically triggers a keypress event on a specified target.
 * @see sap.ui.test.qunit.triggerEvent
 * @param {string | DOMElement} oTarget The ID of a DOM element or a DOM element which serves as target of the event
 * @param {string} sChar Only the first char of the string will be passed via keypress event
 * @param {boolean} bShiftKey Indicates whether the shift key is down in addition
 * @param {boolean} bAltKey Indicates whether the alt key is down in addition
 * @param {boolean} bCtrlKey Indicates whether the ctrl key is down in addition
 * @public
 * @memberOf sap.ui.test.qunit
 */
sap.ui.test.qunit.triggerKeypress = function(oTarget,sChar,bShiftKey,bAltKey,bCtrlKey) { return null; };

/**
 * 
 * Programmtically triggers a keydup event on a specified target.
 * @see sap.ui.test.qunit.triggerKeyEvent
 * @param {string | DOMElement} oTarget The ID of a DOM element or a DOM element which serves as target of the event
 * @param {string | int} sKey The keys name as defined in <code>jQuery.sap.KeyCodes</code> or its key code
 * @param {boolean} bShiftKey Indicates whether the shift key is down in addition
 * @param {boolean} bAltKey Indicates whether the alt key is down in addition
 * @param {boolean} bCtrlKey Indicates whether the ctrl key is down in addition
 * @public
 * @memberOf sap.ui.test.qunit
 */
sap.ui.test.qunit.triggerKeyup = function(oTarget,sKey,bShiftKey,bAltKey,bCtrlKey) { return null; };

/**
 * 
 * Programmatically triggers a mouse event specified by its name on a specified target.
 * @see sap.ui.test.qunit.triggerEvent
 * @param {string | DOMElement} oTarget The ID of a DOM element or a DOM element which serves as target of the event
 * @param {string} sEventType The name of the browser mouse event (like "click")
 * @param {int} iOffsetX The offset X position of the mouse pointer during the event
 * @param {int} iOffsetY The offset Y position of the mouse pointer during the event
 * @param {int} iPageX The page X position of the mouse pointer during the event
 * @param {int} iPageY The page Y position of the mouse pointer during the event
 * @public
 * @memberOf sap.ui.test.qunit
 */
sap.ui.test.qunit.triggerMouseEvent = function(oTarget,sEventType,iOffsetX,iOffsetY,iPageX,iPageY) { return null; };

/**
 * 
 * Programmatically triggers a touch event specified by its name.
 * The onEVENTNAME functions are called directly on the "nearest" control / element of the given target.
 * @param {string} sEventName The name of the touch event (touchstart, touchmove, touchend)
 * @param {string | DOMElement} oTarget The ID of a DOM element or a DOM element which serves as target of the event
 * @param {object} [oParams] The parameters which should be attached to the event in JSON notation (depending on the event type).
 * @public
 * @memberOf sap.ui.test.qunit
 */
sap.ui.test.qunit.triggerTouchEvent = function(sEventName,oTarget,oParams) { return null; };

// ---- static fields of namespaces ---------------------------------------------------------------------

// ---- jQuery.device.is --------------------------------------------------------------------------

/**
 * 
 * Whether the application runs on an Android phone
 * https://developers.google.com/chrome/mobile/docs/user-agent
 * Some device vendors however do not follow this rule
 * @type {boolean}
 * @public
 * @memberOf jQuery.device.is
 */
jQuery.device.is.android_phone = null;

/**
 * 
 * Whether the application runs on an Android tablet
 * https://developers.google.com/chrome/mobile/docs/user-agent
 * Some device vendors however do not follow this rule
 * @type {boolean}
 * @public
 * @memberOf jQuery.device.is
 */
jQuery.device.is.android_tablet = null;

/**
 * 
 * Whether the running device is a desktop browser.
 * If a desktop browser runs in mobile device simulation mode (with URL parameter sap-ui-xx-fakeOS or sap-ui-xx-test-mobile), 
 * this property will be false.
 * @type {boolean}
 * @public
 * @memberOf jQuery.device.is
 */
jQuery.device.is.desktop = null;

/**
 * 
 * Whether the application runs on an iPad
 * @type {boolean}
 * @public 
 * @memberOf jQuery.device.is
 */
jQuery.device.is.ipad = null;

/**
 * 
 * Whether the application runs on an iPhone
 * @type {boolean}
 * @public 
 * @memberOf jQuery.device.is
 */
jQuery.device.is.iphone = null;

/**
 * 
 * Whether the device is in "landscape" orientation (also "true" when the device does not know about the orientation)
 * @type {boolean}
 * @public 
 * @memberOf jQuery.device.is
 */
jQuery.device.is.landscape = null;

/**
 * 
 * Whether the running device is a phone.
 * If a desktop browser runs in mobile device simulation mode (with URL parameter sap-ui-xx-fakeOS or sap-ui-xx-test-mobile), 
 * this property will also be set according to the simulated platform.
 * This property will be false when runs in desktop browser.
 * @type {boolean}
 * @public
 * @memberOf jQuery.device.is
 */
jQuery.device.is.phone = null;

/**
 * 
 * Whether the device is in portrait orientation
 * @type {boolean}
 * @public 
 * @memberOf jQuery.device.is
 */
jQuery.device.is.portrait = null;

/**
 * 
 * Whether the application runs in standalone mode without browser UI (launched from the iOS home screen)
 * @type {boolean}
 * @public 
 * @memberOf jQuery.device.is
 */
jQuery.device.is.standalone = null;

/**
 * 
 * Whether the running device is a tablet.
 * If a desktop browser runs in mobile device simulation mode (with URL parameter sap-ui-xx-fakeOS or sap-ui-xx-test-mobile), 
 * this property will also be set according to the simulated platform.
 * This property will be false when runs in desktop browser.
 * @type {boolean}
 * @public
 * @memberOf jQuery.device.is
 */
jQuery.device.is.tablet = null;


// ---- jQuery.os --------------------------------------------------------------------------

/**
 * 
 * Whether the current operating system is Android
 * @type {boolean}
 * @public
 * 
 * @memberOf jQuery.os
 */
jQuery.os.android = null;

/**
 * 
 * Whether the current operating system is BlackBerry
 * @type {boolean}
 * @public
 * 
 * @memberOf jQuery.os
 */
jQuery.os.blackberry = null;

/**
 * 
 * The version of the operating system parsed as a float (major and first minor version)
 * @type {float}
 * @public
 * @memberOf jQuery.os
 */
jQuery.os.fVersion = null;

/**
 * 
 * Whether the current operating system is Apple iOS
 * @type {boolean}
 * @public
 * 
 * @memberOf jQuery.os
 */
jQuery.os.ios = null;

/**
 * 
 * The name of the operating system; currently supported are: "ios", "android", "blackberry"
 * @type {string}
 * @public
 * @memberOf jQuery.os
 */
jQuery.os.os = null;

/**
 * 
 * The version of the operating system as a string (including minor versions)
 * @type {string}
 * @public
 * @memberOf jQuery.os
 */
jQuery.os.version = null;


// ---- jQuery.sap --------------------------------------------------------------------------

/**
 * 
 * List of DOM events that a UIArea automatically takes care of.
 * </p><p>
 * A control/element doesn't have to bind listeners for these events.
 * It instead can implement an <code>on<i>event</i>(oEvent)</code> method
 * for any of these events that it wants to be notified about.
 * @public
 * @memberOf jQuery.sap
 */
jQuery.sap.ControlEvents = null;


// ---- jQuery.sap.history.NavType --------------------------------------------------------------------------

/**
 * 
 * This indicates that the new hash is achieved by pressing the back button.
 * @type {string}
 * @public
 * @constant
 * 
 * @memberOf jQuery.sap.history.NavType
 */
jQuery.sap.history.NavType.Back = null;

/**
 * 
 * This indicates that the new hash is restored from the bookmark.
 * @type {string}
 * @public
 * @constant
 * 
 * @memberOf jQuery.sap.history.NavType
 */
jQuery.sap.history.NavType.Bookmark = null;

/**
 * 
 * This indicates that the new hash is achieved by pressing the forward button.
 * @type {string}
 * @public
 * @constant
 * 
 * @memberOf jQuery.sap.history.NavType
 */
jQuery.sap.history.NavType.Forward = null;

/**
 * 
 * This indicates that the new hash is achieved by some unknown direction.
 * This happens when the user navigates out of the application and then click on the forward button
 * in the browser to navigate back to the application.
 * @type {string}
 * @public
 * @constant
 * 
 * @memberOf jQuery.sap.history.NavType
 */
jQuery.sap.history.NavType.Unknown = null;


// ---- jQuery.sap.KeyCodes --------------------------------------------------------------------------

/**
 * 
 * @type number
 * @public
 * @memberOf jQuery.sap.KeyCodes
 */
jQuery.sap.KeyCodes.A = 0.0;

/**
 * 
 * @type number
 * @public
 * @memberOf jQuery.sap.KeyCodes
 */
jQuery.sap.KeyCodes.ALT = 0.0;

/**
 * 
 * @type number
 * @public
 * @memberOf jQuery.sap.KeyCodes
 */
jQuery.sap.KeyCodes.ARROW_DOWN = 0.0;

/**
 * 
 * @type number
 * @public
 * @memberOf jQuery.sap.KeyCodes
 */
jQuery.sap.KeyCodes.ARROW_LEFT = 0.0;

/**
 * 
 * @type number
 * @public
 * @memberOf jQuery.sap.KeyCodes
 */
jQuery.sap.KeyCodes.ARROW_RIGHT = 0.0;

/**
 * 
 * @type number
 * @public
 * @memberOf jQuery.sap.KeyCodes
 */
jQuery.sap.KeyCodes.ARROW_UP = 0.0;

/**
 * 
 * @type number
 * @public
 * @memberOf jQuery.sap.KeyCodes
 */
jQuery.sap.KeyCodes.B = 0.0;

/**
 * 
 * @type number
 * @public
 * @memberOf jQuery.sap.KeyCodes
 */
jQuery.sap.KeyCodes.BACKSLASH = 0.0;

/**
 * 
 * @type number
 * @public
 * @memberOf jQuery.sap.KeyCodes
 */
jQuery.sap.KeyCodes.BACKSPACE = 0.0;

/**
 * 
 * @type number
 * @public
 * @memberOf jQuery.sap.KeyCodes
 */
jQuery.sap.KeyCodes.BREAK = 0.0;

/**
 * 
 * @type number
 * @public
 * @memberOf jQuery.sap.KeyCodes
 */
jQuery.sap.KeyCodes.C = 0.0;

/**
 * 
 * @type number
 * @public
 * @memberOf jQuery.sap.KeyCodes
 */
jQuery.sap.KeyCodes.CAPS_LOCK = 0.0;

/**
 * 
 * @type number
 * @public
 * @memberOf jQuery.sap.KeyCodes
 */
jQuery.sap.KeyCodes.COMMA = 0.0;

/**
 * 
 * @type number
 * @public
 * @memberOf jQuery.sap.KeyCodes
 */
jQuery.sap.KeyCodes.CONTEXT_MENU = 0.0;

/**
 * 
 * @type number
 * @public
 * @memberOf jQuery.sap.KeyCodes
 */
jQuery.sap.KeyCodes.CONTROL = 0.0;

/**
 * 
 * @type number
 * @public
 * @memberOf jQuery.sap.KeyCodes
 */
jQuery.sap.KeyCodes.D = 0.0;

/**
 * 
 * @type number
 * @public
 * @memberOf jQuery.sap.KeyCodes
 */
jQuery.sap.KeyCodes.DELETE = 0.0;

/**
 * 
 * @type number
 * @public
 * @memberOf jQuery.sap.KeyCodes
 */
jQuery.sap.KeyCodes.DIGIT_0 = 0.0;

/**
 * 
 * @type number
 * @public
 * @memberOf jQuery.sap.KeyCodes
 */
jQuery.sap.KeyCodes.DIGIT_1 = 0.0;

/**
 * 
 * @type number
 * @public
 * @memberOf jQuery.sap.KeyCodes
 */
jQuery.sap.KeyCodes.DIGIT_2 = 0.0;

/**
 * 
 * @type number
 * @public
 * @memberOf jQuery.sap.KeyCodes
 */
jQuery.sap.KeyCodes.DIGIT_3 = 0.0;

/**
 * 
 * @type number
 * @public
 * @memberOf jQuery.sap.KeyCodes
 */
jQuery.sap.KeyCodes.DIGIT_4 = 0.0;

/**
 * 
 * @type number
 * @public
 * @memberOf jQuery.sap.KeyCodes
 */
jQuery.sap.KeyCodes.DIGIT_5 = 0.0;

/**
 * 
 * @type number
 * @public
 * @memberOf jQuery.sap.KeyCodes
 */
jQuery.sap.KeyCodes.DIGIT_6 = 0.0;

/**
 * 
 * @type number
 * @public
 * @memberOf jQuery.sap.KeyCodes
 */
jQuery.sap.KeyCodes.DIGIT_7 = 0.0;

/**
 * 
 * @type number
 * @public
 * @memberOf jQuery.sap.KeyCodes
 */
jQuery.sap.KeyCodes.DIGIT_8 = 0.0;

/**
 * 
 * @type number
 * @public
 * @memberOf jQuery.sap.KeyCodes
 */
jQuery.sap.KeyCodes.DIGIT_9 = 0.0;

/**
 * 
 * @type number
 * @public
 * @memberOf jQuery.sap.KeyCodes
 */
jQuery.sap.KeyCodes.DOT = 0.0;

/**
 * 
 * @type number
 * @public
 * @memberOf jQuery.sap.KeyCodes
 */
jQuery.sap.KeyCodes.E = 0.0;

/**
 * 
 * @type number
 * @public
 * @memberOf jQuery.sap.KeyCodes
 */
jQuery.sap.KeyCodes.END = 0.0;

/**
 * 
 * @type number
 * @public
 * @memberOf jQuery.sap.KeyCodes
 */
jQuery.sap.KeyCodes.ENTER = 0.0;

/**
 * 
 * @type number
 * @public
 * @memberOf jQuery.sap.KeyCodes
 */
jQuery.sap.KeyCodes.EQUALS = 0.0;

/**
 * 
 * @type number
 * @public
 * @memberOf jQuery.sap.KeyCodes
 */
jQuery.sap.KeyCodes.ESCAPE = 0.0;

/**
 * 
 * @type number
 * @public
 * @memberOf jQuery.sap.KeyCodes
 */
jQuery.sap.KeyCodes.F = 0.0;

/**
 * 
 * @type number
 * @public
 * @memberOf jQuery.sap.KeyCodes
 */
jQuery.sap.KeyCodes.F1 = 0.0;

/**
 * 
 * @type number
 * @public
 * @memberOf jQuery.sap.KeyCodes
 */
jQuery.sap.KeyCodes.F10 = 0.0;

/**
 * 
 * @type number
 * @public
 * @memberOf jQuery.sap.KeyCodes
 */
jQuery.sap.KeyCodes.F11 = 0.0;

/**
 * 
 * @type number
 * @public
 * @memberOf jQuery.sap.KeyCodes
 */
jQuery.sap.KeyCodes.F12 = 0.0;

/**
 * 
 * @type number
 * @public
 * @memberOf jQuery.sap.KeyCodes
 */
jQuery.sap.KeyCodes.F2 = 0.0;

/**
 * 
 * @type number
 * @public
 * @memberOf jQuery.sap.KeyCodes
 */
jQuery.sap.KeyCodes.F3 = 0.0;

/**
 * 
 * @type number
 * @public
 * @memberOf jQuery.sap.KeyCodes
 */
jQuery.sap.KeyCodes.F4 = 0.0;

/**
 * 
 * @type number
 * @public
 * @memberOf jQuery.sap.KeyCodes
 */
jQuery.sap.KeyCodes.F5 = 0.0;

/**
 * 
 * @type number
 * @public
 * @memberOf jQuery.sap.KeyCodes
 */
jQuery.sap.KeyCodes.F6 = 0.0;

/**
 * 
 * @type number
 * @public
 * @memberOf jQuery.sap.KeyCodes
 */
jQuery.sap.KeyCodes.F7 = 0.0;

/**
 * 
 * @type number
 * @public
 * @memberOf jQuery.sap.KeyCodes
 */
jQuery.sap.KeyCodes.F8 = 0.0;

/**
 * 
 * @type number
 * @public
 * @memberOf jQuery.sap.KeyCodes
 */
jQuery.sap.KeyCodes.F9 = 0.0;

/**
 * 
 * @type number
 * @public
 * @memberOf jQuery.sap.KeyCodes
 */
jQuery.sap.KeyCodes.G = 0.0;

/**
 * 
 * @type number
 * @public
 * @memberOf jQuery.sap.KeyCodes
 */
jQuery.sap.KeyCodes.GREAT_ACCENT = 0.0;

/**
 * 
 * @type number
 * @public
 * @memberOf jQuery.sap.KeyCodes
 */
jQuery.sap.KeyCodes.H = 0.0;

/**
 * 
 * @type number
 * @public
 * @memberOf jQuery.sap.KeyCodes
 */
jQuery.sap.KeyCodes.HOME = 0.0;

/**
 * 
 * @type number
 * @public
 * @memberOf jQuery.sap.KeyCodes
 */
jQuery.sap.KeyCodes.I = 0.0;

/**
 * 
 * @type number
 * @public
 * @memberOf jQuery.sap.KeyCodes
 */
jQuery.sap.KeyCodes.INSERT = 0.0;

/**
 * 
 * @type number
 * @public
 * @memberOf jQuery.sap.KeyCodes
 */
jQuery.sap.KeyCodes.J = 0.0;

/**
 * 
 * @type number
 * @public
 * @memberOf jQuery.sap.KeyCodes
 */
jQuery.sap.KeyCodes.K = 0.0;

/**
 * 
 * @type number
 * @public
 * @memberOf jQuery.sap.KeyCodes
 */
jQuery.sap.KeyCodes.L = 0.0;

/**
 * 
 * @type number
 * @public
 * @memberOf jQuery.sap.KeyCodes
 */
jQuery.sap.KeyCodes.M = 0.0;

/**
 * 
 * @type number
 * @public
 * @memberOf jQuery.sap.KeyCodes
 */
jQuery.sap.KeyCodes.MINUS = 0.0;

/**
 * 
 * @type number
 * @public
 * @memberOf jQuery.sap.KeyCodes
 */
jQuery.sap.KeyCodes.N = 0.0;

/**
 * 
 * @type number
 * @public
 * @memberOf jQuery.sap.KeyCodes
 */
jQuery.sap.KeyCodes.NUM_LOCK = 0.0;

/**
 * 
 * @type number
 * @public
 * @memberOf jQuery.sap.KeyCodes
 */
jQuery.sap.KeyCodes.NUMPAD_0 = 0.0;

/**
 * 
 * @type number
 * @public
 * @memberOf jQuery.sap.KeyCodes
 */
jQuery.sap.KeyCodes.NUMPAD_1 = 0.0;

/**
 * 
 * @type number
 * @public
 * @memberOf jQuery.sap.KeyCodes
 */
jQuery.sap.KeyCodes.NUMPAD_2 = 0.0;

/**
 * 
 * @type number
 * @public
 * @memberOf jQuery.sap.KeyCodes
 */
jQuery.sap.KeyCodes.NUMPAD_3 = 0.0;

/**
 * 
 * @type number
 * @public
 * @memberOf jQuery.sap.KeyCodes
 */
jQuery.sap.KeyCodes.NUMPAD_4 = 0.0;

/**
 * 
 * @type number
 * @public
 * @memberOf jQuery.sap.KeyCodes
 */
jQuery.sap.KeyCodes.NUMPAD_5 = 0.0;

/**
 * 
 * @type number
 * @public
 * @memberOf jQuery.sap.KeyCodes
 */
jQuery.sap.KeyCodes.NUMPAD_6 = 0.0;

/**
 * 
 * @type number
 * @public
 * @memberOf jQuery.sap.KeyCodes
 */
jQuery.sap.KeyCodes.NUMPAD_7 = 0.0;

/**
 * 
 * @type number
 * @public
 * @memberOf jQuery.sap.KeyCodes
 */
jQuery.sap.KeyCodes.NUMPAD_8 = 0.0;

/**
 * 
 * @type number
 * @public
 * @memberOf jQuery.sap.KeyCodes
 */
jQuery.sap.KeyCodes.NUMPAD_9 = 0.0;

/**
 * 
 * @type number
 * @public
 * @memberOf jQuery.sap.KeyCodes
 */
jQuery.sap.KeyCodes.NUMPAD_ASTERISK = 0.0;

/**
 * 
 * @type number
 * @public
 * @memberOf jQuery.sap.KeyCodes
 */
jQuery.sap.KeyCodes.NUMPAD_COMMA = 0.0;

/**
 * 
 * @type number
 * @public
 * @memberOf jQuery.sap.KeyCodes
 */
jQuery.sap.KeyCodes.NUMPAD_MINUS = 0.0;

/**
 * 
 * @type number
 * @public
 * @memberOf jQuery.sap.KeyCodes
 */
jQuery.sap.KeyCodes.NUMPAD_PLUS = 0.0;

/**
 * 
 * @type number
 * @public
 * @memberOf jQuery.sap.KeyCodes
 */
jQuery.sap.KeyCodes.NUMPAD_SLASH = 0.0;

/**
 * 
 * @type number
 * @public
 * @memberOf jQuery.sap.KeyCodes
 */
jQuery.sap.KeyCodes.O = 0.0;

/**
 * 
 * @type number
 * @public
 * @memberOf jQuery.sap.KeyCodes
 */
jQuery.sap.KeyCodes.OPEN_BRACKET = 0.0;

/**
 * 
 * @type number
 * @public
 * @memberOf jQuery.sap.KeyCodes
 */
jQuery.sap.KeyCodes.P = 0.0;

/**
 * 
 * @type number
 * @public
 * @memberOf jQuery.sap.KeyCodes
 */
jQuery.sap.KeyCodes.PAGE_DOWN = 0.0;

/**
 * 
 * @type number
 * @public
 * @memberOf jQuery.sap.KeyCodes
 */
jQuery.sap.KeyCodes.PAGE_UP = 0.0;

/**
 * 
 * @type number
 * @public
 * @memberOf jQuery.sap.KeyCodes
 */
jQuery.sap.KeyCodes.PIPE = 0.0;

/**
 * 
 * @type number
 * @public
 * @memberOf jQuery.sap.KeyCodes
 */
jQuery.sap.KeyCodes.PLUS = 0.0;

/**
 * 
 * @type number
 * @public
 * @memberOf jQuery.sap.KeyCodes
 */
jQuery.sap.KeyCodes.PRINT = 0.0;

/**
 * 
 * @type number
 * @public
 * @memberOf jQuery.sap.KeyCodes
 */
jQuery.sap.KeyCodes.Q = 0.0;

/**
 * 
 * @type number
 * @public
 * @memberOf jQuery.sap.KeyCodes
 */
jQuery.sap.KeyCodes.R = 0.0;

/**
 * 
 * @type number
 * @public
 * @memberOf jQuery.sap.KeyCodes
 */
jQuery.sap.KeyCodes.S = 0.0;

/**
 * 
 * @type number
 * @public
 * @memberOf jQuery.sap.KeyCodes
 */
jQuery.sap.KeyCodes.SCROLL_LOCK = 0.0;

/**
 * 
 * @type number
 * @public
 * @memberOf jQuery.sap.KeyCodes
 */
jQuery.sap.KeyCodes.SEMICOLON = 0.0;

/**
 * 
 * @type number
 * @public
 * @memberOf jQuery.sap.KeyCodes
 */
jQuery.sap.KeyCodes.SHIFT = 0.0;

/**
 * 
 * @type number
 * @public
 * @memberOf jQuery.sap.KeyCodes
 */
jQuery.sap.KeyCodes.SINGLE_QUOTE = 0.0;

/**
 * 
 * @type number
 * @public
 * @memberOf jQuery.sap.KeyCodes
 */
jQuery.sap.KeyCodes.SLASH = 0.0;

/**
 * 
 * @type number
 * @public
 * @memberOf jQuery.sap.KeyCodes
 */
jQuery.sap.KeyCodes.SLEEP = 0.0;

/**
 * 
 * @type number
 * @public
 * @memberOf jQuery.sap.KeyCodes
 */
jQuery.sap.KeyCodes.SPACE = 0.0;

/**
 * 
 * @type number
 * @public
 * @memberOf jQuery.sap.KeyCodes
 */
jQuery.sap.KeyCodes.T = 0.0;

/**
 * 
 * @type number
 * @public
 * @memberOf jQuery.sap.KeyCodes
 */
jQuery.sap.KeyCodes.TAB = 0.0;

/**
 * 
 * @type number
 * @public
 * @memberOf jQuery.sap.KeyCodes
 */
jQuery.sap.KeyCodes.TURN_OFF = 0.0;

/**
 * 
 * @type number
 * @public
 * @memberOf jQuery.sap.KeyCodes
 */
jQuery.sap.KeyCodes.U = 0.0;

/**
 * 
 * @type number
 * @public
 * @memberOf jQuery.sap.KeyCodes
 */
jQuery.sap.KeyCodes.V = 0.0;

/**
 * 
 * @type number
 * @public
 * @memberOf jQuery.sap.KeyCodes
 */
jQuery.sap.KeyCodes.W = 0.0;

/**
 * 
 * @type number
 * @public
 * @memberOf jQuery.sap.KeyCodes
 */
jQuery.sap.KeyCodes.WINDOWS = 0.0;

/**
 * 
 * @type number
 * @public
 * @memberOf jQuery.sap.KeyCodes
 */
jQuery.sap.KeyCodes.X = 0.0;

/**
 * 
 * @type number
 * @public
 * @memberOf jQuery.sap.KeyCodes
 */
jQuery.sap.KeyCodes.Y = 0.0;

/**
 * 
 * @type number
 * @public
 * @memberOf jQuery.sap.KeyCodes
 */
jQuery.sap.KeyCodes.Z = 0.0;


// ---- jQuery.sap.log.Level --------------------------------------------------------------------------

/**
 * 
 * Debug level. Use this for logging information necessary for debugging
 * @public
 * @memberOf jQuery.sap.log.Level
 */
jQuery.sap.log.Level.DEBUG = null;

/**
 * 
 * Error level. Use this for logging of erroneous but still recoverable situations
 * @public
 * @memberOf jQuery.sap.log.Level
 */
jQuery.sap.log.Level.ERROR = null;

/**
 * 
 * Fatal level. Use this for logging unrecoverable situations
 * @public
 * @memberOf jQuery.sap.log.Level
 */
jQuery.sap.log.Level.FATAL = null;

/**
 * 
 * Info level. Use this for logging information of purely informative nature
 * @public
 * @memberOf jQuery.sap.log.Level
 */
jQuery.sap.log.Level.INFO = null;

/**
 * 
 * Do not log anything
 * @public
 * @memberOf jQuery.sap.log.Level
 */
jQuery.sap.log.Level.NONE = null;

/**
 * 
 * Trace level. Use this for tracing the program flow.
 * @public
 * @memberOf jQuery.sap.log.Level
 */
jQuery.sap.log.Level.TRACE = null;

/**
 * 
 * Warning level. Use this for logging unwanted but foreseen situations
 * @public
 * @memberOf jQuery.sap.log.Level
 */
jQuery.sap.log.Level.WARNING = null;


// ---- jQuery.sap.PseudoEvents --------------------------------------------------------------------------

/**
 * 
 * Pseudo event for keyboard backspace without modifiers (Ctrl, Alt or Shift)
 * @public
 * @memberOf jQuery.sap.PseudoEvents
 */
jQuery.sap.PseudoEvents.sapbackspace = null;

/**
 * 
 * Pseudo event for keyboard backspace with modifiers (Ctrl, Alt or Shift)
 * @public
 * @memberOf jQuery.sap.PseudoEvents
 */
jQuery.sap.PseudoEvents.sapbackspacemodifiers = null;

/**
 * 
 * Pseudo event for pseudo bottom event
 * @public
 * @memberOf jQuery.sap.PseudoEvents
 */
jQuery.sap.PseudoEvents.sapbottom = null;

/**
 * 
 * Pseudo event for pseudo collapse event (keyboard numpad -) without modifiers (Ctrl, Alt or Shift)
 * @public
 * @memberOf jQuery.sap.PseudoEvents
 */
jQuery.sap.PseudoEvents.sapcollapse = null;

/**
 * 
 * Pseudo event for pseudo collapse event (keyboard numpad *)
 * @public
 * @memberOf jQuery.sap.PseudoEvents
 */
jQuery.sap.PseudoEvents.sapcollapseall = null;

/**
 * 
 * Pseudo event for pseudo collapse event (keyboard numpad -) with modifiers (Ctrl, Alt or Shift)
 * @public
 * @memberOf jQuery.sap.PseudoEvents
 */
jQuery.sap.PseudoEvents.sapcollapsemodifiers = null;

/**
 * 
 * Pseudo event for pseudo 'decrease' event without modifiers (Ctrl, Alt or Shift)
 * @public
 * @memberOf jQuery.sap.PseudoEvents
 */
jQuery.sap.PseudoEvents.sapdecrease = null;

/**
 * 
 * Pseudo event for pseudo 'decrease' event with modifiers (Ctrl, Alt or Shift)
 * @public
 * @memberOf jQuery.sap.PseudoEvents
 */
jQuery.sap.PseudoEvents.sapdecreasemodifiers = null;

/**
 * 
 * Pseudo event indicating delayed double click (e.g. for inline edit)
 * @public
 * @memberOf jQuery.sap.PseudoEvents
 */
jQuery.sap.PseudoEvents.sapdelayeddoubleclick = null;

/**
 * 
 * Pseudo event for keyboard delete without modifiers (Ctrl, Alt or Shift)
 * @public
 * @memberOf jQuery.sap.PseudoEvents
 */
jQuery.sap.PseudoEvents.sapdelete = null;

/**
 * 
 * Pseudo event for keyboard delete with modifiers (Ctrl, Alt or Shift)
 * @public
 * @memberOf jQuery.sap.PseudoEvents
 */
jQuery.sap.PseudoEvents.sapdeletemodifiers = null;

/**
 * 
 * Pseudo event for keyboard arrow down without modifiers (Ctrl, Alt or Shift)
 * @public
 * @memberOf jQuery.sap.PseudoEvents
 */
jQuery.sap.PseudoEvents.sapdown = null;

/**
 * 
 * Pseudo event for keyboard arrow down with modifiers (Ctrl, Alt or Shift)
 * @public
 * @memberOf jQuery.sap.PseudoEvents
 */
jQuery.sap.PseudoEvents.sapdownmodifiers = null;

/**
 * 
 * Pseudo event for keyboard End without modifiers (Ctrl, Alt or Shift)
 * @public
 * @memberOf jQuery.sap.PseudoEvents
 */
jQuery.sap.PseudoEvents.sapend = null;

/**
 * 
 * Pseudo event for keyboard End with modifiers (Ctrl, Alt or Shift)
 * @public
 * @memberOf jQuery.sap.PseudoEvents
 */
jQuery.sap.PseudoEvents.sapendmodifiers = null;

/**
 * 
 * Pseudo event for keyboard enter without modifiers (Ctrl, Alt or Shift)
 * @public
 * @memberOf jQuery.sap.PseudoEvents
 */
jQuery.sap.PseudoEvents.sapenter = null;

/**
 * 
 * Pseudo event for keyboard enter with modifiers (Ctrl, Alt or Shift)
 * @public
 * @memberOf jQuery.sap.PseudoEvents
 */
jQuery.sap.PseudoEvents.sapentermodifiers = null;

/**
 * 
 * Pseudo event for keyboard escape
 * @public
 * @memberOf jQuery.sap.PseudoEvents
 */
jQuery.sap.PseudoEvents.sapescape = null;

/**
 * 
 * Pseudo event for pseudo expand event (keyboard numpad +) without modifiers (Ctrl, Alt or Shift)
 * @public
 * @memberOf jQuery.sap.PseudoEvents
 */
jQuery.sap.PseudoEvents.sapexpand = null;

/**
 * 
 * Pseudo event for pseudo expand event (keyboard numpad +) with modifiers (Ctrl, Alt or Shift)
 * @public
 * @memberOf jQuery.sap.PseudoEvents
 */
jQuery.sap.PseudoEvents.sapexpandmodifiers = null;

/**
 * 
 * Pseudo event for pseudo 'hide' event (Alt + up-Arrow)
 * @public
 * @memberOf jQuery.sap.PseudoEvents
 */
jQuery.sap.PseudoEvents.saphide = null;

/**
 * 
 * Pseudo event for keyboard Home/Pos1 with modifiers (Ctrl, Alt or Shift)
 * @public
 * @memberOf jQuery.sap.PseudoEvents
 */
jQuery.sap.PseudoEvents.saphome = null;

/**
 * 
 * Pseudo event for keyboard Home/Pos1 without modifiers (Ctrl, Alt or Shift)
 * @public
 * @memberOf jQuery.sap.PseudoEvents
 */
jQuery.sap.PseudoEvents.saphomemodifiers = null;

/**
 * 
 * Pseudo event for pseudo 'increase' event without modifiers (Ctrl, Alt or Shift)
 * @public
 * @memberOf jQuery.sap.PseudoEvents
 */
jQuery.sap.PseudoEvents.sapincrease = null;

/**
 * 
 * Pseudo event for pseudo 'increase' event with modifiers (Ctrl, Alt or Shift)
 * @public
 * @memberOf jQuery.sap.PseudoEvents
 */
jQuery.sap.PseudoEvents.sapincreasemodifiers = null;

/**
 * 
 * Pseudo event for keyboard arrow left without modifiers (Ctrl, Alt or Shift)
 * @public
 * @memberOf jQuery.sap.PseudoEvents
 */
jQuery.sap.PseudoEvents.sapleft = null;

/**
 * 
 * Pseudo event for keyboard arrow left with modifiers (Ctrl, Alt or Shift)
 * @public
 * @memberOf jQuery.sap.PseudoEvents
 */
jQuery.sap.PseudoEvents.sapleftmodifiers = null;

/**
 * 
 * Pseudo event for pseudo 'next' event without modifiers (Ctrl, Alt or Shift)
 * @public
 * @memberOf jQuery.sap.PseudoEvents
 */
jQuery.sap.PseudoEvents.sapnext = null;

/**
 * 
 * Pseudo event for pseudo 'next' event with modifiers (Ctrl, Alt or Shift)
 * @public
 * @memberOf jQuery.sap.PseudoEvents
 */
jQuery.sap.PseudoEvents.sapnextmodifiers = null;

/**
 * 
 * Pseudo event for keyboard page down without modifiers (Ctrl, Alt or Shift)
 * @public
 * @memberOf jQuery.sap.PseudoEvents
 */
jQuery.sap.PseudoEvents.sappagedown = null;

/**
 * 
 * Pseudo event for keyboard page down with modifiers (Ctrl, Alt or Shift)
 * @public
 * @memberOf jQuery.sap.PseudoEvents
 */
jQuery.sap.PseudoEvents.sappagedownmodifiers = null;

/**
 * 
 * Pseudo event for keyboard page up without modifiers (Ctrl, Alt or Shift)
 * @public
 * @memberOf jQuery.sap.PseudoEvents
 */
jQuery.sap.PseudoEvents.sappageup = null;

/**
 * 
 * Pseudo event for keyboard page up with modifiers (Ctrl, Alt or Shift)
 * @public
 * @memberOf jQuery.sap.PseudoEvents
 */
jQuery.sap.PseudoEvents.sappageupmodifiers = null;

/**
 * 
 * Pseudo event for pseudo 'previous' event without modifiers (Ctrl, Alt or Shift)
 * @public
 * @memberOf jQuery.sap.PseudoEvents
 */
jQuery.sap.PseudoEvents.sapprevious = null;

/**
 * 
 * Pseudo event for pseudo 'previous' event with modifiers (Ctrl, Alt or Shift)
 * @public
 * @memberOf jQuery.sap.PseudoEvents
 */
jQuery.sap.PseudoEvents.sappreviousmodifiers = null;

/**
 * 
 * Pseudo event for keyboard arrow right without modifiers (Ctrl, Alt or Shift)
 * @public
 * @memberOf jQuery.sap.PseudoEvents
 */
jQuery.sap.PseudoEvents.sapright = null;

/**
 * 
 * Pseudo event for keyboard arrow right with modifiers (Ctrl, Alt or Shift)
 * @public
 * @memberOf jQuery.sap.PseudoEvents
 */
jQuery.sap.PseudoEvents.saprightmodifiers = null;

/**
 * 
 * Pseudo event for pseudo 'select' event... space, enter, ... without modifiers (Ctrl, Alt or Shift)
 * @public
 * @memberOf jQuery.sap.PseudoEvents
 */
jQuery.sap.PseudoEvents.sapselect = null;

/**
 * 
 * Pseudo event for pseudo 'select' event... space, enter, ... with modifiers (Ctrl, Alt or Shift)
 * @public
 * @memberOf jQuery.sap.PseudoEvents
 */
jQuery.sap.PseudoEvents.sapselectmodifiers = null;

/**
 * 
 * Pseudo event for pseudo 'show' event (F4, Alt + down-Arrow)
 * @public
 * @memberOf jQuery.sap.PseudoEvents
 */
jQuery.sap.PseudoEvents.sapshow = null;

/**
 * 
 * Pseudo event for pseudo skip back (F6 + shift modifier)
 * @public
 * @memberOf jQuery.sap.PseudoEvents
 */
jQuery.sap.PseudoEvents.sapskipback = null;

/**
 * 
 * Pseudo event for pseudo skip forward (F6 + no modifier)
 * @public
 * @memberOf jQuery.sap.PseudoEvents
 */
jQuery.sap.PseudoEvents.sapskipforward = null;

/**
 * 
 * Pseudo event for keyboard space without modifiers (Ctrl, Alt or Shift)
 * @public
 * @memberOf jQuery.sap.PseudoEvents
 */
jQuery.sap.PseudoEvents.sapspace = null;

/**
 * 
 * Pseudo event for keyboard space with modifiers (Ctrl, Alt or Shift)
 * @public
 * @memberOf jQuery.sap.PseudoEvents
 */
jQuery.sap.PseudoEvents.sapspacemodifiers = null;

/**
 * 
 * Pseudo event for keyboard tab (TAB + no modifier)
 * @public
 * @memberOf jQuery.sap.PseudoEvents
 */
jQuery.sap.PseudoEvents.saptabnext = null;

/**
 * 
 * Pseudo event for keyboard tab (TAB + shift modifier)
 * @public
 * @memberOf jQuery.sap.PseudoEvents
 */
jQuery.sap.PseudoEvents.saptabprevious = null;

/**
 * 
 * Pseudo event for  pseudo top event
 * @public
 * @memberOf jQuery.sap.PseudoEvents
 */
jQuery.sap.PseudoEvents.saptop = null;

/**
 * 
 * Pseudo event for keyboard arrow up without modifiers (Ctrl, Alt or Shift)
 * @public
 * @memberOf jQuery.sap.PseudoEvents
 */
jQuery.sap.PseudoEvents.sapup = null;

/**
 * 
 * Pseudo event for keyboard arrow up with modifiers (Ctrl, Alt or Shift)
 * @public
 * @memberOf jQuery.sap.PseudoEvents
 */
jQuery.sap.PseudoEvents.sapupmodifiers = null;


// ---- jQuery.sap.storage.Type --------------------------------------------------------------------------

/**
 * 
 * Indicates usage of the browser's globalStorage feature
 * @public
 * @memberOf jQuery.sap.storage.Type
 */
jQuery.sap.storage.Type.global = null;

/**
 * 
 * Indicates usage of the browser's localStorage feature
 * @public
 * @memberOf jQuery.sap.storage.Type
 */
jQuery.sap.storage.Type.local = null;

/**
 * 
 * Indicates usage of the browser's sessionStorage feature
 * @public
 * @memberOf jQuery.sap.storage.Type
 */
jQuery.sap.storage.Type.session = null;


// ---- jQuery.support --------------------------------------------------------------------------

/**
 * 
 * Whether the current browser supports (named) CSS animations
 * @type {boolean}
 * @public
 * 
 * @memberOf jQuery.support
 */
jQuery.support.cssAnimations = null;

/**
 * 
 * Whether the current browser supports CSS gradients. Note that ANY support for CSS gradients leads to "true" here, no matter what the syntax is.
 * @type {boolean}
 * @public
 * 
 * @memberOf jQuery.support
 */
jQuery.support.cssGradients = null;

/**
 * 
 * Whether the current browser supports (2D) CSS transforms
 * @type {boolean}
 * @public
 * 
 * @memberOf jQuery.support
 */
jQuery.support.cssTransforms = null;

/**
 * 
 * Whether the current browser supports 3D CSS transforms
 * @type {boolean}
 * @public
 * 
 * @memberOf jQuery.support
 */
jQuery.support.cssTransforms3d = null;

/**
 * 
 * Whether the current browser supports CSS transitions
 * @type {boolean}
 * @public
 * 
 * @memberOf jQuery.support
 */
jQuery.support.cssTransitions = null;

/**
 * 
 * Whether the current browser supports the OLD CSS3 Flexible Box Layout directly or via vendor prefixes
 * @type {boolean}
 * @public
 * 
 * @memberOf jQuery.support
 */
jQuery.support.flexBoxLayout = null;

/**
 * 
 * Whether the current browser supports only prefixed flexible layout properties
 * @type {boolean}
 * @public
 * 
 * @memberOf jQuery.support
 */
jQuery.support.flexBoxPrefixed = null;

/**
 * 
 * Whether the current browser supports the IE10 CSS3 Flexible Box Layout directly or via vendor prefixes
 * @type {boolean}
 * @public
 * @since 1.12.0
 * @memberOf jQuery.support
 */
jQuery.support.ie10FlexBoxLayout = null;

/**
 * 
 * Whether the current browser supports the NEW CSS3 Flexible Box Layout directly or via vendor prefixes
 * @type {boolean}
 * @public
 * 
 * @memberOf jQuery.support
 */
jQuery.support.newFlexBoxLayout = null;


// ---- sap.ui.core.AccessibleRole --------------------------------------------------------------------------

/**
 * 
 * A message with an alert or error information.
 * @public
 * @memberOf sap.ui.core.AccessibleRole
 */
sap.ui.core.AccessibleRole.Alert = null;

/**
 * 
 * A separate window with an alert or error information.
 * @public
 * @memberOf sap.ui.core.AccessibleRole
 */
sap.ui.core.AccessibleRole.AlertDialog = null;

/**
 * 
 * A software unit executing a set of tasks for the user. 
 * @public
 * @memberOf sap.ui.core.AccessibleRole
 */
sap.ui.core.AccessibleRole.Application = null;

/**
 * 
 * Usually defined as the advertisement at the top of a web page.
 * The banner content typically contains the site or company logo, or other key advertisements.
 * @public
 * @memberOf sap.ui.core.AccessibleRole
 */
sap.ui.core.AccessibleRole.Banner = null;

/**
 * 
 * Allows user-triggered actions.
 * @public
 * @memberOf sap.ui.core.AccessibleRole
 */
sap.ui.core.AccessibleRole.Button = null;

/**
 * 
 * A control that has three possible values: true, false, mixed. 
 * @public
 * @memberOf sap.ui.core.AccessibleRole
 */
sap.ui.core.AccessibleRole.Checkbox = null;

/**
 * 
 * A table cell containing header information for a column. 
 * @public
 * @memberOf sap.ui.core.AccessibleRole
 */
sap.ui.core.AccessibleRole.ColumnHeader = null;

/**
 * 
 * Allows selecting an item from a list, or to enter data directly in the input field. 
 * @public
 * @memberOf sap.ui.core.AccessibleRole
 */
sap.ui.core.AccessibleRole.Combobox = null;

/**
 * 
 * Information about the content on the page. Examples are footnotes, copyrights, or links to privacy statements.
 * @public
 * @memberOf sap.ui.core.AccessibleRole
 */
sap.ui.core.AccessibleRole.ContentInfo = null;

/**
 * 
 * The content of the associated element represents a definition.
 * If there is a definition element within the content, this one represents the term being defined.
 * @public
 * @memberOf sap.ui.core.AccessibleRole
 */
sap.ui.core.AccessibleRole.Definition = null;

/**
 * 
 * Descriptive content for a page element. 
 * @public
 * @memberOf sap.ui.core.AccessibleRole
 */
sap.ui.core.AccessibleRole.Description = null;

/**
 * 
 * A small window that is designed to interrupt the current application processing
 * in order to inform the user and to get some response. 
 * @public
 * @memberOf sap.ui.core.AccessibleRole
 */
sap.ui.core.AccessibleRole.Dialog = null;

/**
 * 
 * A list of references to members of a single group.
 * @public
 * @memberOf sap.ui.core.AccessibleRole
 */
sap.ui.core.AccessibleRole.Directory = null;

/**
 * 
 * Content that contains related information, such as a book. 
 * @public
 * @memberOf sap.ui.core.AccessibleRole
 */
sap.ui.core.AccessibleRole.Document = null;

/**
 * 
 * Contains cells of tabular data arranged in rows and columns, for example in a table. 
 * @public
 * @memberOf sap.ui.core.AccessibleRole
 */
sap.ui.core.AccessibleRole.Grid = null;

/**
 * 
 * A table cell in a grid where the cells can be active, editable, and selectable.
 * Cells may have functional relationships to controls, for example. 
 * @public
 * @memberOf sap.ui.core.AccessibleRole
 */
sap.ui.core.AccessibleRole.GridCell = null;

/**
 * 
 * A section of user interface objects. 
 * @public
 * @memberOf sap.ui.core.AccessibleRole
 */
sap.ui.core.AccessibleRole.Group = null;

/**
 * 
 * A heading for a section of the page. 
 * @public
 * @memberOf sap.ui.core.AccessibleRole
 */
sap.ui.core.AccessibleRole.Heading = null;

/**
 * 
 * A container for a collection of elements that form an image. 
 * @public
 * @memberOf sap.ui.core.AccessibleRole
 */
sap.ui.core.AccessibleRole.Img = null;

/**
 * 
 * An interactive reference to a resource. 
 * @public
 * @memberOf sap.ui.core.AccessibleRole
 */
sap.ui.core.AccessibleRole.Link = null;

/**
 * 
 * A container for non-interactive list items which are the children of the list. 
 * @public
 * @memberOf sap.ui.core.AccessibleRole
 */
sap.ui.core.AccessibleRole.List = null;

/**
 * 
 * A widget that allows the user to select one or more items from a list.
 * The items within the list are static and can contain images. 
 * @public
 * @memberOf sap.ui.core.AccessibleRole
 */
sap.ui.core.AccessibleRole.Listbox = null;

/**
 * 
 * A single item in a list. 
 * @public
 * @memberOf sap.ui.core.AccessibleRole
 */
sap.ui.core.AccessibleRole.ListItem = null;

/**
 * 
 * An area where new information is added, or old information disappears.
 * Information types are chat logs, messaging, or error logs, for example.
 * The log contains a sequence: New information is always added to the end of the log. 
 * @public
 * @memberOf sap.ui.core.AccessibleRole
 */
sap.ui.core.AccessibleRole.Log = null;

/**
 * 
 * Defines the main content of a document.
 * @public
 * @memberOf sap.ui.core.AccessibleRole
 */
sap.ui.core.AccessibleRole.Main = null;

/**
 * 
 * Is used to scroll text across the page.
 * @public
 * @memberOf sap.ui.core.AccessibleRole
 */
sap.ui.core.AccessibleRole.Marquee = null;

/**
 * 
 * Offers a list of choices to the user.
 * @public
 * @memberOf sap.ui.core.AccessibleRole
 */
sap.ui.core.AccessibleRole.Menu = null;

/**
 * 
 * A container for menu items where each item may activate a submenu.
 * @public
 * @memberOf sap.ui.core.AccessibleRole
 */
sap.ui.core.AccessibleRole.Menubar = null;

/**
 * 
 * A child in a menu. 
 * @public
 * @memberOf sap.ui.core.AccessibleRole
 */
sap.ui.core.AccessibleRole.MenuItem = null;

/**
 * 
 * A checkable menu item (tri-state). 
 * @public
 * @memberOf sap.ui.core.AccessibleRole
 */
sap.ui.core.AccessibleRole.MenuItemCheckbox = null;

/**
 * 
 * A menu item which is part of a group of menuitemradio roles. 
 * @public
 * @memberOf sap.ui.core.AccessibleRole
 */
sap.ui.core.AccessibleRole.MenuItemRadio = null;

/**
 * 
 * A collection of links suitable for use when navigating the document or related documents. 
 * @public
 * @memberOf sap.ui.core.AccessibleRole
 */
sap.ui.core.AccessibleRole.Navigation = null;

/**
 * 
 * No explicit role is applicable. An AccessibleName should be specified for the control.
 * @public
 * @memberOf sap.ui.core.AccessibleRole
 */
sap.ui.core.AccessibleRole.None = null;

/**
 * 
 * The content is parenthetic or ancillary to the main content of the resource. 
 * @public
 * @memberOf sap.ui.core.AccessibleRole
 */
sap.ui.core.AccessibleRole.Note = null;

/**
 * 
 * A selectable item in a list represented by a select.
 * @public
 * @memberOf sap.ui.core.AccessibleRole
 */
sap.ui.core.AccessibleRole.Option = null;

/**
 * 
 * An element whose role is presentational does not need to be mapped to the accessibility API. 
 * @public
 * @memberOf sap.ui.core.AccessibleRole
 */
sap.ui.core.AccessibleRole.Presentation = null;

/**
 * 
 * Shows the execution progress in applications providing functions that take a long time. 
 * @public
 * @memberOf sap.ui.core.AccessibleRole
 */
sap.ui.core.AccessibleRole.ProgressBar = null;

/**
 * 
 * An option in single-select list. Only one radio control in a radiogroup can be selected at the same time.
 * @public
 * @memberOf sap.ui.core.AccessibleRole
 */
sap.ui.core.AccessibleRole.Radio = null;

/**
 * 
 * A group of radio controls. 
 * @public
 * @memberOf sap.ui.core.AccessibleRole
 */
sap.ui.core.AccessibleRole.RadioGroup = null;

/**
 * 
 * A large section on the web page. 
 * @public
 * @memberOf sap.ui.core.AccessibleRole
 */
sap.ui.core.AccessibleRole.Region = null;

/**
 * 
 * A row of table cells. 
 * @public
 * @memberOf sap.ui.core.AccessibleRole
 */
sap.ui.core.AccessibleRole.Row = null;

/**
 * 
 * A table cell containing header information for a row. 
 * @public
 * @memberOf sap.ui.core.AccessibleRole
 */
sap.ui.core.AccessibleRole.RowHeader = null;

/**
 * 
 * A search section of a web document. In many cases, this is a form used to submit search requests about the site,
 * or a more general Internet wide search service. 
 * @public
 * @memberOf sap.ui.core.AccessibleRole
 */
sap.ui.core.AccessibleRole.Search = null;

/**
 * 
 * A unique section of the document. In the case of a portal, this may include time display, weather forecast,
 * or stock price. 
 * @public
 * @memberOf sap.ui.core.AccessibleRole
 */
sap.ui.core.AccessibleRole.Secondary = null;

/**
 * 
 * Indicates that the element contains content that is related to the main content of the page. 
 * @public
 * @memberOf sap.ui.core.AccessibleRole
 */
sap.ui.core.AccessibleRole.SeeAlso = null;

/**
 * 
 * A line or bar that separates sections of content. 
 * @public
 * @memberOf sap.ui.core.AccessibleRole
 */
sap.ui.core.AccessibleRole.Separator = null;

/**
 * 
 * A user input where the user selects an input in a given range. This form of range expects an analogous keyboard
 * interface. 
 * @public
 * @memberOf sap.ui.core.AccessibleRole
 */
sap.ui.core.AccessibleRole.Slider = null;

/**
 * 
 * Allows users to select a value from a list of given entries where exactly one value is displayed at runtime, and
 * the other ones can be displayed by scrolling using the arrow up and arrow down key.
 * @public
 * @memberOf sap.ui.core.AccessibleRole
 */
sap.ui.core.AccessibleRole.SpinButton = null;

/**
 * 
 * A container for processing advisory information. 
 * @public
 * @memberOf sap.ui.core.AccessibleRole
 */
sap.ui.core.AccessibleRole.Status = null;

/**
 * 
 * A header for a tab panel. 
 * @public
 * @memberOf sap.ui.core.AccessibleRole
 */
sap.ui.core.AccessibleRole.Tab = null;

/**
 * 
 * A list of tabs which are references to tab panels.
 * @public
 * @memberOf sap.ui.core.AccessibleRole
 */
sap.ui.core.AccessibleRole.Tablist = null;

/**
 * 
 * A container for the resources associated with a tab. 
 * @public
 * @memberOf sap.ui.core.AccessibleRole
 */
sap.ui.core.AccessibleRole.Tabpanel = null;

/**
 * 
 * Inputs that allow free-form text as their value. 
 * @public
 * @memberOf sap.ui.core.AccessibleRole
 */
sap.ui.core.AccessibleRole.Textbox = null;

/**
 * 
 * A numerical counter which indicates an amount of elapsed time from a start point,
 * or of the time remaining until a certain end point. 
 * @public
 * @memberOf sap.ui.core.AccessibleRole
 */
sap.ui.core.AccessibleRole.Timer = null;

/**
 * 
 * A collection of commonly used functions represented in compact visual form. 
 * @public
 * @memberOf sap.ui.core.AccessibleRole
 */
sap.ui.core.AccessibleRole.Toolbar = null;

/**
 * 
 * A popup that displays a description for an element when the user passes over or rests on that element.
 * Supplement to the normal tooltip processing of the user agent.
 * @public
 * @memberOf sap.ui.core.AccessibleRole
 */
sap.ui.core.AccessibleRole.Tooltip = null;

/**
 * 
 * A form of a list (tree) having groups (subtrees) inside groups (subtrees), where the sub trees can be collapsed and expanded.
 * @public
 * @memberOf sap.ui.core.AccessibleRole
 */
sap.ui.core.AccessibleRole.Tree = null;

/**
 * 
 * A grid whose rows are expandable and collapsable in the same manner as the ones of trees. 
 * @public
 * @memberOf sap.ui.core.AccessibleRole
 */
sap.ui.core.AccessibleRole.TreeGrid = null;

/**
 * 
 * A tree node 
 * @public
 * @memberOf sap.ui.core.AccessibleRole
 */
sap.ui.core.AccessibleRole.TreeItem = null;


// ---- sap.ui.core.BarColor --------------------------------------------------------------------------

/**
 * 
 * Color: yellow (#faf2b0) 
 * @public
 * @memberOf sap.ui.core.BarColor
 */
sap.ui.core.BarColor.CRITICAL = null;

/**
 * 
 * Color: red (#ff9a90) 
 * @public
 * @memberOf sap.ui.core.BarColor
 */
sap.ui.core.BarColor.NEGATIVE = null;

/**
 * 
 * Color: blue (#b8d0e8) 
 * @public
 * @memberOf sap.ui.core.BarColor
 */
sap.ui.core.BarColor.NEUTRAL = null;

/**
 * 
 * Color: green (#b5e7a8) 
 * @public
 * @memberOf sap.ui.core.BarColor
 */
sap.ui.core.BarColor.POSITIVE = null;


// ---- sap.ui.core.Design --------------------------------------------------------------------------

/**
 * 
 * Mono space font 
 * @public
 * @memberOf sap.ui.core.Design
 */
sap.ui.core.Design.Monospace = null;

/**
 * 
 * Standard font 
 * @public
 * @memberOf sap.ui.core.Design
 */
sap.ui.core.Design.Standard = null;


// ---- sap.ui.core.HorizontalAlign --------------------------------------------------------------------------

/**
 * 
 * Locale-specific positioning at the beginning of the line 
 * @public
 * @memberOf sap.ui.core.HorizontalAlign
 */
sap.ui.core.HorizontalAlign.Begin = null;

/**
 * 
 * Centered alignment of text 
 * @public
 * @memberOf sap.ui.core.HorizontalAlign
 */
sap.ui.core.HorizontalAlign.Center = null;

/**
 * 
 * Locale-specific positioning at the end of the line 
 * @public
 * @memberOf sap.ui.core.HorizontalAlign
 */
sap.ui.core.HorizontalAlign.End = null;

/**
 * 
 * Hard option for left alignment 
 * @public
 * @memberOf sap.ui.core.HorizontalAlign
 */
sap.ui.core.HorizontalAlign.Left = null;

/**
 * 
 * Hard option for right alignment 
 * @public
 * @memberOf sap.ui.core.HorizontalAlign
 */
sap.ui.core.HorizontalAlign.Right = null;


// ---- sap.ui.core.IconColor --------------------------------------------------------------------------

/**
 * 
 * Critical color 
 * @public
 * @memberOf sap.ui.core.IconColor
 */
sap.ui.core.IconColor.Critical = null;

/**
 * 
 * Default color (brand color) 
 * @public
 * @memberOf sap.ui.core.IconColor
 */
sap.ui.core.IconColor.Default = null;

/**
 * 
 * Negative color 
 * @public
 * @memberOf sap.ui.core.IconColor
 */
sap.ui.core.IconColor.Negative = null;

/**
 * 
 * Neutral color. 
 * @public
 * @memberOf sap.ui.core.IconColor
 */
sap.ui.core.IconColor.Neutral = null;

/**
 * 
 * Positive color 
 * @public
 * @memberOf sap.ui.core.IconColor
 */
sap.ui.core.IconColor.Positive = null;


// ---- sap.ui.core.ImeMode --------------------------------------------------------------------------

/**
 * 
 * IME is used for entering characters. 
 * @public
 * @memberOf sap.ui.core.ImeMode
 */
sap.ui.core.ImeMode.Active = null;

/**
 * 
 * The value is automatically computed by the user agent. 
 * @public
 * @memberOf sap.ui.core.ImeMode
 */
sap.ui.core.ImeMode.Auto = null;

/**
 * 
 * IME is disabled. 
 * @public
 * @memberOf sap.ui.core.ImeMode
 */
sap.ui.core.ImeMode.Disabled = null;

/**
 * 
 * IME is not used for entering characters. 
 * @public
 * @memberOf sap.ui.core.ImeMode
 */
sap.ui.core.ImeMode.Inactive = null;


// ---- sap.ui.core.MessageType --------------------------------------------------------------------------

/**
 * 
 * Message is an error 
 * @public
 * @memberOf sap.ui.core.MessageType
 */
sap.ui.core.MessageType.Error = null;

/**
 * 
 * Message should be just an information 
 * @public
 * @memberOf sap.ui.core.MessageType
 */
sap.ui.core.MessageType.Information = null;

/**
 * 
 * Message has no specific level 
 * @public
 * @memberOf sap.ui.core.MessageType
 */
sap.ui.core.MessageType.None = null;

/**
 * 
 * Message is an success message 
 * @public
 * @memberOf sap.ui.core.MessageType
 */
sap.ui.core.MessageType.Success = null;

/**
 * 
 * Message is a warning 
 * @public
 * @memberOf sap.ui.core.MessageType
 */
sap.ui.core.MessageType.Warning = null;


// ---- sap.ui.core.mvc.ViewType --------------------------------------------------------------------------

/**
 * 
 * HTML view 
 * @public
 * @memberOf sap.ui.core.mvc.ViewType
 */
sap.ui.core.mvc.ViewType.HTML = null;

/**
 * 
 * JS View 
 * @public
 * @memberOf sap.ui.core.mvc.ViewType
 */
sap.ui.core.mvc.ViewType.JS = null;

/**
 * 
 * JSON View 
 * @public
 * @memberOf sap.ui.core.mvc.ViewType
 */
sap.ui.core.mvc.ViewType.JSON = null;

/**
 * 
 * Template View 
 * @public
 * @memberOf sap.ui.core.mvc.ViewType
 */
sap.ui.core.mvc.ViewType.Template = null;

/**
 * 
 * XML view 
 * @public
 * @memberOf sap.ui.core.mvc.ViewType
 */
sap.ui.core.mvc.ViewType.XML = null;


// ---- sap.ui.core.OpenState --------------------------------------------------------------------------

/**
 * 
 * Closed and currently not changing states. 
 * @public
 * @memberOf sap.ui.core.OpenState
 */
sap.ui.core.OpenState.CLOSED = null;

/**
 * 
 * Still open, but in the process of going to the CLOSED state. 
 * @public
 * @memberOf sap.ui.core.OpenState
 */
sap.ui.core.OpenState.CLOSING = null;

/**
 * 
 * Open and currently not changing states. 
 * @public
 * @memberOf sap.ui.core.OpenState
 */
sap.ui.core.OpenState.OPEN = null;

/**
 * 
 * Already left the CLOSED state, is not OPEN yet, but in the process of getting OPEN. 
 * @public
 * @memberOf sap.ui.core.OpenState
 */
sap.ui.core.OpenState.OPENING = null;


// ---- sap.ui.core.Popup.Dock --------------------------------------------------------------------------

/**
 * 
 * @public
 * @memberOf sap.ui.core.Popup.Dock
 */
sap.ui.core.Popup.Dock.BeginBottom = null;

/**
 * 
 * @public
 * @memberOf sap.ui.core.Popup.Dock
 */
sap.ui.core.Popup.Dock.BeginCenter = null;

/**
 * 
 * @public
 * @memberOf sap.ui.core.Popup.Dock
 */
sap.ui.core.Popup.Dock.BeginTop = null;

/**
 * 
 * @public
 * @memberOf sap.ui.core.Popup.Dock
 */
sap.ui.core.Popup.Dock.CenterBottom = null;

/**
 * 
 * @public
 * @memberOf sap.ui.core.Popup.Dock
 */
sap.ui.core.Popup.Dock.CenterCenter = null;

/**
 * 
 * @public
 * @memberOf sap.ui.core.Popup.Dock
 */
sap.ui.core.Popup.Dock.CenterTop = null;

/**
 * 
 * @public
 * @memberOf sap.ui.core.Popup.Dock
 */
sap.ui.core.Popup.Dock.EndBottom = null;

/**
 * 
 * @public
 * @memberOf sap.ui.core.Popup.Dock
 */
sap.ui.core.Popup.Dock.EndCenter = null;

/**
 * 
 * @public
 * @memberOf sap.ui.core.Popup.Dock
 */
sap.ui.core.Popup.Dock.EndTop = null;

/**
 * 
 * @public
 * @memberOf sap.ui.core.Popup.Dock
 */
sap.ui.core.Popup.Dock.LeftBottom = null;

/**
 * 
 * @public
 * @memberOf sap.ui.core.Popup.Dock
 */
sap.ui.core.Popup.Dock.LeftCenter = null;

/**
 * 
 * @public
 * @memberOf sap.ui.core.Popup.Dock
 */
sap.ui.core.Popup.Dock.LeftTop = null;

/**
 * 
 * @public
 * @memberOf sap.ui.core.Popup.Dock
 */
sap.ui.core.Popup.Dock.RightBottom = null;

/**
 * 
 * @public
 * @memberOf sap.ui.core.Popup.Dock
 */
sap.ui.core.Popup.Dock.RightCenter = null;

/**
 * 
 * @public
 * @memberOf sap.ui.core.Popup.Dock
 */
sap.ui.core.Popup.Dock.RightTop = null;


// ---- sap.ui.core.ScrollBarAction --------------------------------------------------------------------------

/**
 * 
 * Scrolling done by dragging the scroll bar's paint thumb 
 * @public
 * @memberOf sap.ui.core.ScrollBarAction
 */
sap.ui.core.ScrollBarAction.Drag = null;

/**
 * 
 * Scrolling done by mouse wheel 
 * @public
 * @memberOf sap.ui.core.ScrollBarAction
 */
sap.ui.core.ScrollBarAction.MouseWheel = null;

/**
 * 
 * Range scrolling caused by clicking track area or using page up or page down key. 
 * @public
 * @memberOf sap.ui.core.ScrollBarAction
 */
sap.ui.core.ScrollBarAction.Page = null;

/**
 * 
 * Single step scrolling caused by clicking an arrow button or arrow key. 
 * @public
 * @memberOf sap.ui.core.ScrollBarAction
 */
sap.ui.core.ScrollBarAction.Step = null;


// ---- sap.ui.core.Scrolling --------------------------------------------------------------------------

/**
 * 
 * A scroll bar is shown if the content requires more space than the given space (rectangle) provides. 
 * @public
 * @memberOf sap.ui.core.Scrolling
 */
sap.ui.core.Scrolling.Auto = null;

/**
 * 
 * No scroll bar is shown, and the content stays in the given rectangle. 
 * @public
 * @memberOf sap.ui.core.Scrolling
 */
sap.ui.core.Scrolling.Hidden = null;

/**
 * 
 * No scroll bar provided even if the content is larger than the available space. 
 * @public
 * @memberOf sap.ui.core.Scrolling
 */
sap.ui.core.Scrolling.None = null;

/**
 * 
 * A scroll bar is always shown even if the space is large enough for the current content. 
 * @public
 * @memberOf sap.ui.core.Scrolling
 */
sap.ui.core.Scrolling.Scroll = null;


// ---- sap.ui.core.TextAlign --------------------------------------------------------------------------

/**
 * 
 * Locale-specific positioning at the beginning of the line. 
 * @public
 * @memberOf sap.ui.core.TextAlign
 */
sap.ui.core.TextAlign.Begin = null;

/**
 * 
 * Centered text alignment. 
 * @public
 * @memberOf sap.ui.core.TextAlign
 */
sap.ui.core.TextAlign.Center = null;

/**
 * 
 * Locale-specific positioning at the end of the line. 
 * @public
 * @memberOf sap.ui.core.TextAlign
 */
sap.ui.core.TextAlign.End = null;

/**
 * 
 * Hard option for left alignment. 
 * @public
 * @memberOf sap.ui.core.TextAlign
 */
sap.ui.core.TextAlign.Left = null;

/**
 * 
 * Hard option for right alignment. 
 * @public
 * @memberOf sap.ui.core.TextAlign
 */
sap.ui.core.TextAlign.Right = null;


// ---- sap.ui.core.TextDirection --------------------------------------------------------------------------

/**
 * 
 * Inherits the direction from its parent control/container. 
 * @public
 * @memberOf sap.ui.core.TextDirection
 */
sap.ui.core.TextDirection.Inherit = null;

/**
 * 
 * Specifies left-to-right text direction. 
 * @public
 * @memberOf sap.ui.core.TextDirection
 */
sap.ui.core.TextDirection.LTR = null;

/**
 * 
 * Specifies right-to-left text direction. 
 * @public
 * @memberOf sap.ui.core.TextDirection
 */
sap.ui.core.TextDirection.RTL = null;


// ---- sap.ui.core.TitleLevel --------------------------------------------------------------------------

/**
 * 
 * The level of the title is choosen by the control rendering the title. 
 * @public
 * @memberOf sap.ui.core.TitleLevel
 */
sap.ui.core.TitleLevel.Auto = null;

/**
 * 
 * The Title is of level 1. 
 * @public
 * @memberOf sap.ui.core.TitleLevel
 */
sap.ui.core.TitleLevel.H1 = null;

/**
 * 
 * The Title is of level 2 
 * @public
 * @memberOf sap.ui.core.TitleLevel
 */
sap.ui.core.TitleLevel.H2 = null;

/**
 * 
 * The Title is of level 3 
 * @public
 * @memberOf sap.ui.core.TitleLevel
 */
sap.ui.core.TitleLevel.H3 = null;

/**
 * 
 * The Title is of level 4 
 * @public
 * @memberOf sap.ui.core.TitleLevel
 */
sap.ui.core.TitleLevel.H4 = null;

/**
 * 
 * The Title is of level 5 
 * @public
 * @memberOf sap.ui.core.TitleLevel
 */
sap.ui.core.TitleLevel.H5 = null;

/**
 * 
 * The Title is of level 6 
 * @public
 * @memberOf sap.ui.core.TitleLevel
 */
sap.ui.core.TitleLevel.H6 = null;


// ---- sap.ui.core.ValueState --------------------------------------------------------------------------

/**
 * 
 * State is not valid. 
 * @public
 * @memberOf sap.ui.core.ValueState
 */
sap.ui.core.ValueState.Error = null;

/**
 * 
 * State is not specified. 
 * @public
 * @memberOf sap.ui.core.ValueState
 */
sap.ui.core.ValueState.None = null;

/**
 * 
 * State is valid. 
 * @public
 * @memberOf sap.ui.core.ValueState
 */
sap.ui.core.ValueState.Success = null;

/**
 * 
 * State is valid but with a warning. 
 * @public
 * @memberOf sap.ui.core.ValueState
 */
sap.ui.core.ValueState.Warning = null;


// ---- sap.ui.core.VerticalAlign --------------------------------------------------------------------------

/**
 * 
 * </p><p>
 * Content is aligned at the bottom.
 * @public
 * @memberOf sap.ui.core.VerticalAlign
 */
sap.ui.core.VerticalAlign.Bottom = null;

/**
 * 
 * </p><p>
 * Content respect the parent's vertical alignment.
 * @public
 * @memberOf sap.ui.core.VerticalAlign
 */
sap.ui.core.VerticalAlign.Inherit = null;

/**
 * 
 * </p><p>
 * Content is centered vertically .
 * @public
 * @memberOf sap.ui.core.VerticalAlign
 */
sap.ui.core.VerticalAlign.Middle = null;

/**
 * 
 * </p><p>
 * Content is aligned at the top.
 * @public
 * @memberOf sap.ui.core.VerticalAlign
 */
sap.ui.core.VerticalAlign.Top = null;


// ---- sap.ui.core.Wrapping --------------------------------------------------------------------------

/**
 * 
 * Inserts actual line breaks in the text at the wrap point. 
 * @public
 * @memberOf sap.ui.core.Wrapping
 */
sap.ui.core.Wrapping.Hard = null;

/**
 * 
 * The standard browser behavior is considered for wrapping. 
 * @public
 * @memberOf sap.ui.core.Wrapping
 */
sap.ui.core.Wrapping.None = null;

/**
 * 
 * Wrapping shall not be allowed. 
 * @public
 * @memberOf sap.ui.core.Wrapping
 */
sap.ui.core.Wrapping.Off = null;

/**
 * 
 * The text is actually on the same line but displayed within several lines. 
 * @public
 * @memberOf sap.ui.core.Wrapping
 */
sap.ui.core.Wrapping.Soft = null;


// ---- sap.ui.Device.browser --------------------------------------------------------------------------

/**
 * 
 * Flag indicating the Chrome browser.
 * @type boolean
 * @public
 * @memberOf sap.ui.Device.browser
 */
sap.ui.Device.browser.chrome = false;

/**
 * 
 * Flag indicating the Firefox browser.
 * @type boolean
 * @public
 * @memberOf sap.ui.Device.browser
 */
sap.ui.Device.browser.firefox = false;

/**
 * 
 * Flag indicating the Internet Explorer browser.
 * @type boolean
 * @public
 * @memberOf sap.ui.Device.browser
 */
sap.ui.Device.browser.internet_explorer = false;

/**
 * 
 * Flag indicating whether the mobile variant of the browser is used.
 * @type boolean
 * @public
 * @memberOf sap.ui.Device.browser
 */
sap.ui.Device.browser.mobile = false;

/**
 * 
 * The name of the browser.
 * @see sap.ui.Device.browser#BROWSER
 * @type String
 * @public
 * @memberOf sap.ui.Device.browser
 */
sap.ui.Device.browser.name = null;

/**
 * 
 * Flag indicating the Safari browser.
 * @type boolean
 * @public
 * @memberOf sap.ui.Device.browser
 */
sap.ui.Device.browser.safari = false;

/**
 * 
 * The version as float. Might be -1 if no version can be determined.
 * @type float
 * @public
 * @memberOf sap.ui.Device.browser
 */
sap.ui.Device.browser.version = 0.0;

/**
 * 
 * The version as string. Might be empty if no version can be determined.
 * @type String
 * @public
 * @memberOf sap.ui.Device.browser
 */
sap.ui.Device.browser.versionStr = null;


// ---- sap.ui.Device.browser.BROWSER --------------------------------------------------------------------------

/**
 * 
 * Chrome browser name.
 * @see sap.ui.Device.browser#name
 * @public
 * @memberOf sap.ui.Device.browser.BROWSER
 */
sap.ui.Device.browser.BROWSER.CHROME = null;

/**
 * 
 * Firefox browser name.
 * @see sap.ui.Device.browser#name
 * @public
 * @memberOf sap.ui.Device.browser.BROWSER
 */
sap.ui.Device.browser.BROWSER.FIREFOX = null;

/**
 * 
 * Internet Explorer browser name.
 * @see sap.ui.Device.browser#name
 * @public
 * @memberOf sap.ui.Device.browser.BROWSER
 */
sap.ui.Device.browser.BROWSER.INTERNET_EXPLORER = null;

/**
 * 
 * Safari browser name.
 * @see sap.ui.Device.browser#name
 * @public
 * @memberOf sap.ui.Device.browser.BROWSER
 */
sap.ui.Device.browser.BROWSER.SAFARI = null;


// ---- sap.ui.Device.media.RANGESETS --------------------------------------------------------------------------

/**
 * 
 * A 3 step range set (S-L).
 * @public
 * @memberOf sap.ui.Device.media.RANGESETS
 */
sap.ui.Device.media.RANGESETS.SAP_3STEPS = null;

/**
 * 
 * A 4 step range set (S-XL).
 * @public
 * @memberOf sap.ui.Device.media.RANGESETS
 */
sap.ui.Device.media.RANGESETS.SAP_4STEPS = null;

/**
 * 
 * A 6 step range set (XS-XXL).
 * @public
 * @memberOf sap.ui.Device.media.RANGESETS
 */
sap.ui.Device.media.RANGESETS.SAP_6STEPS = null;

/**
 * 
 * A 3 step range set (Phone, Tablet, Desktop).
 * </p><p>
 * This range set is initialized always by default.
 * @public
 * @memberOf sap.ui.Device.media.RANGESETS
 */
sap.ui.Device.media.RANGESETS.SAP_STANDARD = null;


// ---- sap.ui.Device.os --------------------------------------------------------------------------

/**
 * 
 * Flag indicating the Android operating system.
 * @type boolean
 * @public
 * @memberOf sap.ui.Device.os
 */
sap.ui.Device.os.android = false;

/**
 * 
 * Flag indicating the Blackberry operating system.
 * @type boolean
 * @public
 * @memberOf sap.ui.Device.os
 */
sap.ui.Device.os.blackberry = false;

/**
 * 
 * Flag indicating the iOS operating system.
 * @type boolean
 * @public
 * @memberOf sap.ui.Device.os
 */
sap.ui.Device.os.ios = false;

/**
 * 
 * Flag indicating the Linux operating system.
 * @type boolean
 * @public
 * @memberOf sap.ui.Device.os
 */
sap.ui.Device.os.linux = false;

/**
 * 
 * Flag indicating the MAC operating system.
 * @type boolean
 * @public
 * @memberOf sap.ui.Device.os
 */
sap.ui.Device.os.macintosh = false;

/**
 * 
 * The name of the operating system.
 * @see sap.ui.Device.os#OS
 * @type String
 * @public
 * @memberOf sap.ui.Device.os
 */
sap.ui.Device.os.name = null;

/**
 * 
 * The version as float. Might be -1 if no version can be determined.
 * @type float
 * @public
 * @memberOf sap.ui.Device.os
 */
sap.ui.Device.os.version = 0.0;

/**
 * 
 * The version as string. Might be empty if no version can be determined.
 * @type String
 * @public
 * @memberOf sap.ui.Device.os
 */
sap.ui.Device.os.versionStr = null;

/**
 * 
 * Flag indicating the Windows operating system.
 * @type boolean
 * @public
 * @memberOf sap.ui.Device.os
 */
sap.ui.Device.os.windows = false;

/**
 * 
 * Flag indicating the Windows Phone operating system.
 * @type boolean
 * @public
 * @memberOf sap.ui.Device.os
 */
sap.ui.Device.os.windows_phone = false;


// ---- sap.ui.Device.os.OS --------------------------------------------------------------------------

/**
 * 
 * Android operating system name.
 * @see sap.ui.Device.os#name
 * @public
 * @memberOf sap.ui.Device.os.OS
 */
sap.ui.Device.os.OS.ANDROID = null;

/**
 * 
 * Blackberry operating system name.
 * @see sap.ui.Device.os#name
 * @public
 * @memberOf sap.ui.Device.os.OS
 */
sap.ui.Device.os.OS.BLACKBERRY = null;

/**
 * 
 * iOS operating system name.
 * @see sap.ui.Device.os#name
 * @public
 * @memberOf sap.ui.Device.os.OS
 */
sap.ui.Device.os.OS.IOS = null;

/**
 * 
 * Linux operating system name.
 * @see sap.ui.Device.os#name
 * @public
 * @memberOf sap.ui.Device.os.OS
 */
sap.ui.Device.os.OS.LINUX = null;

/**
 * 
 * MAC operating system name.
 * @see sap.ui.Device.os#name
 * @public
 * @memberOf sap.ui.Device.os.OS
 */
sap.ui.Device.os.OS.MACINTOSH = null;

/**
 * 
 * Windows operating system name.
 * @see sap.ui.Device.os#name
 * @public
 * @memberOf sap.ui.Device.os.OS
 */
sap.ui.Device.os.OS.WINDOWS = null;

/**
 * 
 * Windows Phone operating system name.
 * @see sap.ui.Device.os#name
 * @public
 * @memberOf sap.ui.Device.os.OS
 */
sap.ui.Device.os.OS.WINDOWS_PHONE = null;


// ---- sap.ui.Device.support --------------------------------------------------------------------------

/**
 * 
 * Flag indicating whether media queries via JavaScript are supported.
 * @type boolean
 * @public
 * @memberOf sap.ui.Device.support
 */
sap.ui.Device.support.matchmedia = false;

/**
 * 
 * Flag indicating whether events on JavaScript media queries are supported.
 * @type boolean
 * @public
 * @memberOf sap.ui.Device.support
 */
sap.ui.Device.support.matchmedialistener = false;

/**
 * 
 * Flag indicating whether the native orientationchange event is supported.
 * @type boolean
 * @public
 * @memberOf sap.ui.Device.support
 */
sap.ui.Device.support.orientation = false;

/**
 * 
 * Flag indicating whether the device has a Retina display.
 * @type boolean
 * @public
 * @memberOf sap.ui.Device.support
 */
sap.ui.Device.support.retina = false;

/**
 * 
 * Flag indicating whether touch events are supported.
 * @type boolean
 * @public
 * @memberOf sap.ui.Device.support
 */
sap.ui.Device.support.touch = false;


// ---- sap.ui.Device.system --------------------------------------------------------------------------

/**
 * 
 * Flag indicating if the device is a desktop.
 * @type boolean
 * @public
 * @memberOf sap.ui.Device.system
 */
sap.ui.Device.system.desktop = false;

/**
 * 
 * Flag indicating if the device is a phone.
 * @type boolean
 * @public
 * @memberOf sap.ui.Device.system
 */
sap.ui.Device.system.phone = false;

/**
 * 
 * Flag indicating if the device is a tablet.
 * @type boolean
 * @public
 * @memberOf sap.ui.Device.system
 */
sap.ui.Device.system.tablet = false;


// ---- sap.ui.model.BindingMode --------------------------------------------------------------------------

/**
 * 
 * BindingMode default means that the binding mode of the model is used
 * @public
 * @memberOf sap.ui.model.BindingMode
 */
sap.ui.model.BindingMode.Default = null;

/**
 * 
 * BindingMode one time means value is only read from the model once
 * @public
 * @memberOf sap.ui.model.BindingMode
 */
sap.ui.model.BindingMode.OneTime = null;

/**
 * 
 * BindingMode one way means from model to view
 * @public
 * @memberOf sap.ui.model.BindingMode
 */
sap.ui.model.BindingMode.OneWay = null;

/**
 * 
 * BindingMode two way means from model to view and vice versa
 * @public
 * @memberOf sap.ui.model.BindingMode
 */
sap.ui.model.BindingMode.TwoWay = null;


// ---- sap.ui.model.ChangeReason --------------------------------------------------------------------------

/**
 * 
 * The list has changed
 * @public
 * @memberOf sap.ui.model.ChangeReason
 */
sap.ui.model.ChangeReason.Change = null;

/**
 * 
 * The list context has changed
 * @public
 * @memberOf sap.ui.model.ChangeReason
 */
sap.ui.model.ChangeReason.Context = null;

/**
 * 
 * The List was filtered
 * @public
 * @memberOf sap.ui.model.ChangeReason
 */
sap.ui.model.ChangeReason.Filter = null;

/**
 * 
 * The list was sorted
 * @public
 * @memberOf sap.ui.model.ChangeReason
 */
sap.ui.model.ChangeReason.Sort = null;


// ---- sap.ui.model.FilterOperator --------------------------------------------------------------------------

/**
 * 
 * FilterOperator between
 * @public
 * @memberOf sap.ui.model.FilterOperator
 */
sap.ui.model.FilterOperator.BT = null;

/**
 * 
 * FilterOperator contains
 * @public
 * @memberOf sap.ui.model.FilterOperator
 */
sap.ui.model.FilterOperator.Contains = null;

/**
 * 
 * FilterOperator ends with
 * @public
 * @memberOf sap.ui.model.FilterOperator
 */
sap.ui.model.FilterOperator.EndsWith = null;

/**
 * 
 * FilterOperator equals
 * @public
 * @memberOf sap.ui.model.FilterOperator
 */
sap.ui.model.FilterOperator.EQ = null;

/**
 * 
 * FilterOperator greater or equals
 * @public
 * @memberOf sap.ui.model.FilterOperator
 */
sap.ui.model.FilterOperator.GE = null;

/**
 * 
 * FilterOperator greater than
 * @public
 * @memberOf sap.ui.model.FilterOperator
 */
sap.ui.model.FilterOperator.GT = null;

/**
 * 
 * FilterOperator less or equals
 * @public
 * @memberOf sap.ui.model.FilterOperator
 */
sap.ui.model.FilterOperator.LE = null;

/**
 * 
 * FilterOperator less than
 * @public
 * @memberOf sap.ui.model.FilterOperator
 */
sap.ui.model.FilterOperator.LT = null;

/**
 * 
 * FilterOperator not equals
 * @public
 * @memberOf sap.ui.model.FilterOperator
 */
sap.ui.model.FilterOperator.NE = null;

/**
 * 
 * FilterOperator starts with
 * @public
 * @memberOf sap.ui.model.FilterOperator
 */
sap.ui.model.FilterOperator.StartsWith = null;


// ---- sap.ui.model.FilterType --------------------------------------------------------------------------

/**
 * 
 * Filters which are changed by the application
 * @public
 * @memberOf sap.ui.model.FilterType
 */
sap.ui.model.FilterType.Application = null;

/**
 * 
 * Filters which are set by the different controls
 * @public
 * @memberOf sap.ui.model.FilterType
 */
sap.ui.model.FilterType.Control = null;

