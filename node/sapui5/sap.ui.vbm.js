
// ---- _global_ --------------------------------------------------------------------------


// ---- sap --------------------------------------------------------------------------


// ---- sap.ui --------------------------------------------------------------------------


// ---- sap.ui.vbm --------------------------------------------------------------------------


// ---- sap.ui.vbm.VBI --------------------------------------------------------------------------

/**
 * 
 * Constructor for a new VBI.
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
 * <li>{@link #getWidth width} : int (default: 800)</li>
 * <li>{@link #getHeight height} : int (default: 600)</li>
 * <li>{@link #getConfig config} : object</li>
 * <li>{@link #getPlugin plugin} : boolean (default: false)</li></ul>
 * </li>
 * <li>Aggregations
 * <ul></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link sap.ui.vbm.VBI#event:submit submit} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.ui.vbm.VBI#event:render render} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.ui.vbm.VBI#event:zoom zoom} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.ui.vbm.VBI#event:move move} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
 * </li>
 * </ul> 
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * The VBI control.
 * @extends sap.ui.core.Control
 * @version 1.16.7
 * @constructor   
 * @public
 * 
 */
sap.ui.vbm.VBI = function(sId,mSettings) {};
/**
 * 
 * low level api: the canvas was moved 
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {object} oControlEvent.getParameters.canvas canvas object to render into
 * @public
 */
sap.ui.vbm.VBI.prototype.move = function(oControlEvent) { return null; };

/**
 * 
 * low level api:
 * rendering of canvas content is required 
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {object} oControlEvent.getParameters.canvas canvas object to render into
 * @public
 */
sap.ui.vbm.VBI.prototype.render = function(oControlEvent) { return null; };

/**
 * 
 * high level api
 * submit event 
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {string} oControlEvent.getParameters.data json or xml string describing the current state and event
 * @public
 */
sap.ui.vbm.VBI.prototype.submit = function(oControlEvent) { return null; };

/**
 * 
 * low level api: the canvas is zoomed 
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {object} oControlEvent.getParameters.canvas canvas object to render into
 * @public
 */
sap.ui.vbm.VBI.prototype.zoom = function(oControlEvent) { return null; };

/**
 * 
 * Attach event handler <code>fnFunction</code> to the 'move' event of this <code>sap.ui.vbm.VBI</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ui.vbm.VBI</code>.<br/> itself. 
 * </p><p>
 * low level api: the canvas was moved 
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener=this] Context object to call the event handler with. Defaults to this <code>sap.ui.vbm.VBI</code>.<br/> itself.
 * @return {sap.ui.vbm.VBI} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.VBI.prototype.attachMove = function(oData,fnFunction,oListener) { return new sap.ui.vbm.VBI(); };

/**
 * 
 * Attach event handler <code>fnFunction</code> to the 'render' event of this <code>sap.ui.vbm.VBI</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ui.vbm.VBI</code>.<br/> itself. 
 * </p><p>
 * low level api:
 * rendering of canvas content is required 
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener=this] Context object to call the event handler with. Defaults to this <code>sap.ui.vbm.VBI</code>.<br/> itself.
 * @return {sap.ui.vbm.VBI} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.VBI.prototype.attachRender = function(oData,fnFunction,oListener) { return new sap.ui.vbm.VBI(); };

/**
 * 
 * Attach event handler <code>fnFunction</code> to the 'submit' event of this <code>sap.ui.vbm.VBI</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ui.vbm.VBI</code>.<br/> itself. 
 * </p><p>
 * high level api
 * submit event 
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener=this] Context object to call the event handler with. Defaults to this <code>sap.ui.vbm.VBI</code>.<br/> itself.
 * @return {sap.ui.vbm.VBI} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.VBI.prototype.attachSubmit = function(oData,fnFunction,oListener) { return new sap.ui.vbm.VBI(); };

/**
 * 
 * Attach event handler <code>fnFunction</code> to the 'zoom' event of this <code>sap.ui.vbm.VBI</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ui.vbm.VBI</code>.<br/> itself. 
 * </p><p>
 * low level api: the canvas is zoomed 
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener=this] Context object to call the event handler with. Defaults to this <code>sap.ui.vbm.VBI</code>.<br/> itself.
 * @return {sap.ui.vbm.VBI} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.VBI.prototype.attachZoom = function(oData,fnFunction,oListener) { return new sap.ui.vbm.VBI(); };

/**
 * 
 * Detach event handler <code>fnFunction</code> from the 'move' event of this <code>sap.ui.vbm.VBI</code>.<br/>
 * </p><p>
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.vbm.VBI} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.VBI.prototype.detachMove = function(fnFunction,oListener) { return new sap.ui.vbm.VBI(); };

/**
 * 
 * Detach event handler <code>fnFunction</code> from the 'render' event of this <code>sap.ui.vbm.VBI</code>.<br/>
 * </p><p>
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.vbm.VBI} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.VBI.prototype.detachRender = function(fnFunction,oListener) { return new sap.ui.vbm.VBI(); };

/**
 * 
 * Detach event handler <code>fnFunction</code> from the 'submit' event of this <code>sap.ui.vbm.VBI</code>.<br/>
 * </p><p>
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.vbm.VBI} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.VBI.prototype.detachSubmit = function(fnFunction,oListener) { return new sap.ui.vbm.VBI(); };

/**
 * 
 * Detach event handler <code>fnFunction</code> from the 'zoom' event of this <code>sap.ui.vbm.VBI</code>.<br/>
 * </p><p>
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.vbm.VBI} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.VBI.prototype.detachZoom = function(fnFunction,oListener) { return new sap.ui.vbm.VBI(); };

/**
 * 
 * Creates a new subclass of class sap.ui.vbm.VBI with name <code>sClassName</code> 
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
sap.ui.vbm.VBI.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * 
 * Fire event move to attached listeners.
 * </p><p>
 * Expects following event parameters:
 * <ul>
 * <li>'canvas' of type <code>object</code> canvas object to render into</li>
 * </ul>
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.vbm.VBI} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.ui.vbm.VBI.prototype.fireMove = function(mArguments) { return new sap.ui.vbm.VBI(); };

/**
 * 
 * Fire event render to attached listeners.
 * </p><p>
 * Expects following event parameters:
 * <ul>
 * <li>'canvas' of type <code>object</code> canvas object to render into</li>
 * </ul>
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.vbm.VBI} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.ui.vbm.VBI.prototype.fireRender = function(mArguments) { return new sap.ui.vbm.VBI(); };

/**
 * 
 * Fire event submit to attached listeners.
 * </p><p>
 * Expects following event parameters:
 * <ul>
 * <li>'data' of type <code>string</code> json or xml string describing the current state and event</li>
 * </ul>
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.vbm.VBI} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.ui.vbm.VBI.prototype.fireSubmit = function(mArguments) { return new sap.ui.vbm.VBI(); };

/**
 * 
 * Fire event zoom to attached listeners.
 * </p><p>
 * Expects following event parameters:
 * <ul>
 * <li>'canvas' of type <code>object</code> canvas object to render into</li>
 * </ul>
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.vbm.VBI} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.ui.vbm.VBI.prototype.fireZoom = function(mArguments) { return new sap.ui.vbm.VBI(); };

/**
 * 
 * Getter for property <code>config</code>.
 * This is the model model configuration.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {object} the value of property <code>config</code>
 * @public
 * 
 */
sap.ui.vbm.VBI.prototype.getConfig = function() { return new Object(); };

/**
 * 
 * Getter for property <code>height</code>.
 * Sets control's height
 * </p><p>
 * Default value is <code>600</code>
 * @return {int} the value of property <code>height</code>
 * @public
 * 
 */
sap.ui.vbm.VBI.prototype.getHeight = function() { return 0; };

/**
 * 
 * Getter for property <code>plugin</code>.
 * When true, the plugin version of visual business should be used.
 * </p><p>
 * Default value is <code>false</code>
 * @return {boolean} the value of property <code>plugin</code>
 * @public
 * 
 */
sap.ui.vbm.VBI.prototype.getPlugin = function() { return false; };

/**
 * 
 * Getter for property <code>width</code>.
 * Set control's width
 * </p><p>
 * Default value is <code>800</code>
 * @return {int} the value of property <code>width</code>
 * @public
 * 
 */
sap.ui.vbm.VBI.prototype.getWidth = function() { return 0; };

/**
 * 
 * high level load event
 * @type void
 * @public
 */
sap.ui.vbm.VBI.prototype.load = function() { return null; };

/**
 * 
 * Setter for property <code>config</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {object} oConfig  new value for property <code>config</code>
 * @return {sap.ui.vbm.VBI} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.VBI.prototype.setConfig = function(oConfig) { return new sap.ui.vbm.VBI(); };

/**
 * 
 * Setter for property <code>height</code>.
 * </p><p>
 * Default value is <code>600</code> 
 * @param {int} iHeight  new value for property <code>height</code>
 * @return {sap.ui.vbm.VBI} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.VBI.prototype.setHeight = function(iHeight) { return new sap.ui.vbm.VBI(); };

/**
 * 
 * Setter for property <code>plugin</code>.
 * </p><p>
 * Default value is <code>false</code> 
 * @param {boolean} bPlugin  new value for property <code>plugin</code>
 * @return {sap.ui.vbm.VBI} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.VBI.prototype.setPlugin = function(bPlugin) { return new sap.ui.vbm.VBI(); };

/**
 * 
 * Setter for property <code>width</code>.
 * </p><p>
 * Default value is <code>800</code> 
 * @param {int} iWidth  new value for property <code>width</code>
 * @return {sap.ui.vbm.VBI} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.VBI.prototype.setWidth = function(iWidth) { return new sap.ui.vbm.VBI(); };

/**
 * 
 * TODO!
 * @param {float} 
 *         fLon
 *         Longitude in Degrees
 * @param {float} 
 *         fLat
 *         Lattitude in Degrees
 * @param {int} 
 *         iLod
 *         Level of Detail, usually between 0 and 20
 * @type void
 * @public
 */
sap.ui.vbm.VBI.prototype.zoomToGeoPosition = function(fLon,fLat,iLod) { return null; };

// ---- static fields of namespaces ---------------------------------------------------------------------
