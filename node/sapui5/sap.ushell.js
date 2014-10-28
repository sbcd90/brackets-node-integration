
// ---- _global_ --------------------------------------------------------------------------


// ---- Function --------------------------------------------------------------------------


// ---- module --------------------------------------------------------------------------


// ---- sap --------------------------------------------------------------------------


// ---- sap.ushell --------------------------------------------------------------------------

// dummy function to make Eclipse aware of namespace
sap.ushell.toString = function() { return ""; };
/**
 * 
 * Initializes the Unified Shell container for the given platform. This method must be called
 * exactly once in the very beginning by platform-specific code in order to bootstrap the
 * container. As soon as the returned promise has been resolved, the container will be available
 * as a singleton object <code>sap.ushell.Container</code>.
 * <p>
 * For convenience, platform-specific bootstrap code is available and can be easily included
 * (<b>before</b> the SAPUI5 bootstrap) by a corporate shell as follows:
 * <pre>
 * &lt;script src="/sap/public/bc/ui5_ui5/resources/sap/ushell_abap/bootstrap/abap.js"&gt;&lt;/script&gt;
 * &lt;script id="sap-ui-bootstrap" src=".../sap-ui-core.js"&gt;&lt;/script&gt;
 * </pre>
 * This bootstrap code will automatically defer the initialization of SAPUI5 until the
 * container is available. This is the preferred way of bootstrapping the Unified Shell!
 * <p>
 * Note: For SAPUI5 application projects the recommended way is to add a dependency to the
 * "sap.ushell_abap" library (<code>&lt;groupId&gt;com.sap.ushell&lt;/groupId&gt;
 * &lt;artifactId&gt;ushell_abap&lt;/artifactId&gt;</code>) and load the bootstrap code via the
 * application's resources folder:
 * <pre>
 * &lt;script src=".../resources/sap/ushell_abap/bootstrap/abap.js"&gt;&lt;/script&gt;
 * &lt;script id="sap-ui-bootstrap" src=".../sap-ui-core.js"&gt;&lt;/script&gt;
 * </pre>
 * <p>
 * Since 1.15.0 you can provide a function named
 * <code>window['sap.ushell.bootstrap.callback']</code> to be called back from this method
 * in an asynchronous fashion. SAPUI5's bootstrap is ongoing then (same restrictions apply
 * like for <code>window['sap-ui-config']['xx-bootTask']</code>) and the Unified Shell
 * container has not yet finished its bootstrap! You cannot delay the bootstrap of SAPUI5 or
 * the Unified Shell container and any errors will be ignored! This callback is useful in
 * order to send asynchronous backend requests at the earliest opportunity without delaying
 * the core bootstrap of SAPUI5 and Unified Shell container.
 * @param {string} sPlatform
 *     the target platform, e.g. "abap" or "demo" (Note: there is no fixed enumeration of
 *     possible platforms!)
 * @returns {jQuery.Promise}
 *     a promise that is resolved once the container is available
 * @see sap.ushell.Container
 * @since 1.15.0
 * @public
 * @memberOf sap.ushell
 */
sap.ushell.bootstrap = function(sPlatform) { return new jQuery.Promise(); };


// ---- sap.ushell.adapters --------------------------------------------------------------------------


// ---- sap.ushell.components --------------------------------------------------------------------------


// ---- sap.ushell.components.container --------------------------------------------------------------------------


// ---- sap.ushell.renderers --------------------------------------------------------------------------


// ---- sap.ushell.renderers.fiori2.Renderer --------------------------------------------------------------------------

/**
 * 
 * This method MUST be called by the Unified Shell's container only, others MUST call
 * <code>sap.ushell.Container.createRenderer("fiori2")</code>.
 * @class The SAPUI5 component of SAP's Fiori Wave 2 renderer for the Unified Shell.
 * @extends sap.ui.core.UIComponent
 * @see sap.ushell.services.Container#createRenderer
 * @since 1.15.0
 * @public
 */
sap.ushell.renderers.fiori2.Renderer = function() {};

// ---- sap.ushell.services --------------------------------------------------------------------------


// ---- sap.ushell.services.Bookmark --------------------------------------------------------------------------

/**
 * 
 * This method MUST be called by the Unified Shell's container only, others MUST call
 * <code>sap.ushell.Container.getService("Bookmark")</code>.
 * Constructs a new instance of the bookmark service.
 * @class The unified shell's bookmark service, which allows you to create shortcuts on the
 * user's home page.
 * @constructor
 * @see sap.ushell.services.Container#getService
 * @since 1.15.0
 * @public
 */
sap.ushell.services.Bookmark = function() {};
/**
 * 
 * Adds a bookmark to the user's home page.
 * @param {object} oParameters
 *   bookmark parameters. In addition to title and URL, a bookmark might allow additional
 *   settings, such as an icon or a subtitle. Which settings are supported depends
 *   on the environment in which the application is running. Unsupported parameters will be
 *   ignored.
 * @param {string} oParameters.title
 *   The title of the bookmark.
 * @param {string} oParameters.url
 *   The URL of the bookmark. If the target application shall run in the Shell the URL has
 *   to be in the format <code>"#SO-Action~Context?P1=a&P2=x&/route?RPV=1"</code>
 * @param {string} [oParameters.icon]
 *   The optional icon URL of the bookmark (e.g. <code>"sap-icon://home"</code>).
 * @param {string} [oParameters.info]
 *   The optional information text of the bookmark.
 * @param {string} [oParameters.subtitle]
 *   The optional subtitle of the bookmark.
 * @param {string} [oParameters.serviceUrl]
 *   The URL to a REST or OData service that provides some dynamic information for the
 *   bookmark.
 * @param {string} [oParameters.serviceRefreshInterval]
 *   The refresh interval for the <code>serviceUrl</code> in seconds.
 * @param {string} [oParameters.numberUnit]
 *   The unit for the number retrieved from <code>serviceUrl</code>.
 * @returns {object}
 *   a jQuery promise.
 * @see sap.ushell.services.URLParsing#getShellHash
 * @since 1.15.0
 * @public
 */
sap.ushell.services.Bookmark.prototype.addBookmark = function(oParameters) { return new Object(); };


// ---- sap.ushell.services.Container --------------------------------------------------------------------------

/**
 * 
 * @class The Unified Shell's container which manages renderers, services, and adapters.
 * @see sap.ushell.bootstrap
 * @since 1.15.0
 * @public
 */
sap.ushell.services.Container = function() {};
/**
 * 
 * Creates a new renderer instance for the given renderer name.
 * <p>
 * Names without a dot are interpreted as package names within the default naming convention
 * and will be expanded to
 * <code>"sap.ushell.renderers." + sRendererName + ".Renderer"</code>.
 * Names containing a dot are used "as is".
 * <p>
 * The resulting name must point to a SAPUI5 object which is first required and then
 * created (constructor call without arguments).
 * The object must be either a control (i.e. extend <code>sap.ui.core.Control</code>) or a
 * UI component (i.e. extend <code>sap.ui.core.UIComponent</code>), which is then
 * automatically wrapped into a <code>sap.ui.core.ComponentContainer</code> control by this
 * method! This <code>sap.ui.core.ComponentContainer</code> is created with
 * <code>height</code> and <code>width</code> set to "100%" to accommodate the complete
 * available space.
 * <p>
 * The returned renderer is supposed to be added to a direct child (e.g. <code>DIV</code>)
 * of the <code>BODY</code> of the page and there should be no other parts of the page
 * consuming space outside the renderer.
 * Use CSS class <code>sapUShellFullHeight</code> at <code>HTML</code>, <code>BODY</code>
 * and at the element to which the renderer is added to allow the renderer to use 100%
 * height.
 * @param {string} sRendererName
 *     the renderer name, e.g. "standard" or "acme.foo.bar.MyRenderer"
 * @returns {sap.ui.core.Control}
 *     the renderer
 * @memberOf sap.ushell.services.Container#
 * @since 1.15.0
 * @public
 */
sap.ushell.services.Container.prototype.createRenderer = function(sRendererName) { return new sap.ui.core.Control(); };

/**
 * 
 * Gets the service with the given name, creating it if necessary. Services are singleton
 * objects identified by their (resulting) name.
 * <p>
 * Names without a dot are interpreted as service names within the default naming convention
 * and will be expanded to <code>"sap.ushell.services." + sServiceName</code>.
 * Names containing a dot are not yet supported!
 * The resulting name must point to a constructor function which is first required as a
 * SAPUI5 module and then called to create a service instance. The service will be passed a
 * corresponding service adapter for the current logon system as well as a callback
 * interface (of virtual type <code>sap.ushell.services.ContainerInterface</code>) to the
 * container providing a method <code>createAdapter(oSystem)</code> to create further
 * adapters for the same service but connected to remote systems.
 * @param {string} sServiceName
 *     the service name, e.g. "Menu"
 * @param {string} [sParameter]
 *     a parameter which is passed to the service constructor and every adapter
 *     constructor. (since 1.15.0)
 * @returns {object}
 *     the service
 * @memberOf sap.ushell.services.Container#
 * @see sap.ushell.services.ContainerInterface
 * @since 1.15.0
 * @public
 */
sap.ushell.services.Container.prototype.getService = function(sServiceName,sParameter) { return new Object(); };


// ---- sap.ushell.services.ContainerInterface --------------------------------------------------------------------------

/**
 * 
 * @class This is a virtual type for the callback interface passed by
 * {@link sap.ui.Container.getService()} to any newly created service.
 * @see sap.ushell.services.Container#getService
 * @since 1.15.0
 * @public
 */
sap.ushell.services.ContainerInterface = function() {};
/**
 * 
 * Creates a new adapter for the given remote system, corresponding to the service
 * this container interface was passed to at construction time.
 * @param {sap.ushell.System} oSystem
 *     information about the remote system to which the resulting adapter should
 *     connect
 * @returns {jQuery.Deferred}
 *     a <code>jQuery.Deferred</code> object's promise receiving the remote adapter
 * @memberOf sap.ushell.services.ContainerInterface#
 * @since 1.15.0
 * @public
 */
sap.ushell.services.ContainerInterface.prototype.createAdapter = function(oSystem) { return new jQuery.Deferred(); };


// ---- sap.ushell.services.CrossApplicationNavigation --------------------------------------------------------------------------

/**
 * 
 * This method MUST be called by the Unified Shell's container only, others MUST call
 * <code>sap.ushell.Container.getService("CrossApplicationNavigation")</code>.
 * Constructs a new instance of the CrossApplicationNavigation service.
 * @class The Unified Shell's CrossApplicationNavigation service, which allows to
 *        navigate to external targets or create links to external targets
 * </p><p>
 * CrossApplicationNavigation currently provides platform independent functionality.
 * </p><p>
 * This interface is for usage by applications or shell renderers/containers.
 * </p><p>
 * Usage:
 * </p><p>
 * example: see demoapps/appNavSample/MainXML.controller.js
 * </p><p>
 * {code}
 *   jquery.sap.require("sap.ushell.services.CrossApplicationNavigation");
 *   var fgetService =  sap.ushell && sap.ushell.Container && sap.ushell.container.getService;
 *   var xnavservice = fgetService && fgetService("CrossApplicationNavigation");
 *   var href = ( xnavservice && xnavservice.hrefForExternal({
 *          target : { semanticObject : "Product", action : "display" },
 *          params : { "ProductID" : [ "102343333" ] }
 *          })) || "";
 * {code}
 * </p><p>
 * Note: further app specific integration via the reference app reuse code
 *  (setting of app specific handler)
 * @constructor
 * @see sap.ushell.services.Container#getService
 * @since 1.15.0
 * @public
 */
sap.ushell.services.CrossApplicationNavigation = function() {};
/**
 * 
 * </p><p>
 * Navigate to an external target
 * @param {Object}  configuration object describing the target
 * </p><p>
 *  e.g. { target : { semanticObject : "AnObject", action: "Action" },
 *         params : { A : "B", C : [ "e", "j"] } }
 * </p><p>
 * constructs sth. like   #AnObject-Action?A=B&C=e&C=j ....
 * and navigate to it via changing the local hash
 * @public
 */
sap.ushell.services.CrossApplicationNavigation.prototype.toExternal = function(configuration) { return null; };


// ---- sap.ushell.services.Message --------------------------------------------------------------------------

/**
 * 
 * The Unified Shell message service as a singleton object.
 * @class The unified shell's message service, which provides a unified way to raise messages.
 * @since 1.16.0
 * @public
 */
sap.ushell.services.Message = function() {};
/**
 * 
 * Shows an confirmation dialog on the screen.
 * </p><p>
 * The callback is called with the following signature: <code>function(oAction)</code>
 * where oAction is the button that the user has tapped. For example, when the user has pressed the close button, a sap.m.MessageBox.Action.Close is returned.
 * </p><p>
 * If no actions are provided, OK and Cancel will be shown. In this case oAction is set by one of the following three values:
 * 1. sap.m.MessageBox.Action.OK: OK (confirmed) button is tapped.
 * 2. sap.m.MessageBox.Action.Cancel: Cancel (unconfirmed) button is tapped.
 * 3. null: Confirm dialog is closed by Calling sap.m.InstanceManager.closeAllDialogs()
 * @param {string} sMessage
 *      the localized message as plain text
 * @param {function} fnCallback
 *      callback function
 * @param {string} [sTitle]
 *      the localized title as plain text (optional)
 * @param {sap.m.MessageBox.Action|sap.m.MessageBox.Action[]|string|string[]} [vActions]
 *       Either a single action, or an array of two actions. If no action(s) are given, the single action MessageBox.Action.OK is taken as a default for the parameter. If more than two actions are given, only the first two actions are taken. Custom action string(s) can be provided, and then the translation of custom action string(s) needs to be done by the application.
 * @memberOf sap.ushell.services.Message#
 * @public
 */
sap.ushell.services.Message.prototype.confirm = function(sMessage,fnCallback,sTitle,vActions) { return null; };

/**
 * 
 * Shows an error message on the screen.
 * @param {string} sMessage
 *      the localized message as plain text
 * @param {string} [sTitle]
 *      the localized title as plain text (optional)
 * @memberOf sap.ushell.services.Message#
 * @public
 */
sap.ushell.services.Message.prototype.error = function(sMessage,sTitle) { return null; };

/**
 * 
 * Shows an info message on the screen.
 * @param {string} sMessage
 *      the localized message as plain text
 * @param {int} [iDuration=3000]
 *      display duration in ms (optional)
 * @memberOf sap.ushell.services.Message#
 * @public
 */
sap.ushell.services.Message.prototype.info = function(sMessage,iDuration) { return null; };


// ---- sap.ushell.services.Personalization --------------------------------------------------------------------------

/**
 * 
 * This method MUST be called by the Unified Shell's container only, others
 * MUST call <code>sap.ushell.Container.getService("Personalization")</code>.
 * Constructs a new instance of the personalization service.
 * @param {object}
 *            oAdapter the service adapter for the personalization service,
 *            as already provided by the container
 * @class The Unified Shell's personalization service, which provides a
 *        personalizer object that handles all personalization operations.
 * @public
 * @constructor
 * @see sap.ushell.services.Container#getService
 * @since 1.15.0
 */
sap.ushell.services.Personalization = function(oAdapter) {};

// ---- sap.ushell.services.UserInfo --------------------------------------------------------------------------

/**
 * 
 * This method MUST be called by the Unified Shell's container only, others MUST call
 * <code>sap.ushell.Container.getService("UserInfo")</code>.
 * Constructs a new instance of the user information service.
 * @class The Unified Shell's user information service, which allows you to retrieve
 *     information about the logged-in user.
 * @constructor
 * @see sap.ushell.services.Container#getService
 * @since 1.16.3
 * @public
 */
sap.ushell.services.UserInfo = function() {};
/**
 * 
 * Returns the id of the user.
 * @returns {string}
 *   the user id.
 * @since 1.16.3
 * @public
 */
sap.ushell.services.UserInfo.prototype.getId = function() { return ""; };


// ---- sap.ushell.ui --------------------------------------------------------------------------


// ---- sap.ushell.ui.launchpad --------------------------------------------------------------------------


// ---- sap.ushell.ui.launchpad.LoadingDialog --------------------------------------------------------------------------

/**
 * 
 * Constructor for a new ui/launchpad/LoadingDialog.
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
 * <li>{@link #getIconUri iconUri} : sap.ui.core.URI</li></ul>
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
 * In addition, all settings applicable to the base type {@link sap.m.BusyDialog#constructor sap.m.BusyDialog}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * Displays a loading dialog with an indicator that an app is loading
 * @extends sap.m.BusyDialog
 * @version 1.16.7
 * @constructor   
 * @public
 * 
 */
sap.ushell.ui.launchpad.LoadingDialog = function(sId,mSettings) {};
/**
 * 
 * Creates a new subclass of class sap.ushell.ui.launchpad.LoadingDialog with name <code>sClassName</code> 
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
sap.ushell.ui.launchpad.LoadingDialog.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * 
 * Getter for property <code>iconUri</code>.
 * the sap-icon://-style URI of an icon
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {sap.ui.core.URI} the value of property <code>iconUri</code>
 * @public
 * 
 */
sap.ushell.ui.launchpad.LoadingDialog.prototype.getIconUri = function() { return new sap.ui.core.URI(); };

/**
 * 
 * Setter for property <code>iconUri</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {sap.ui.core.URI} sIconUri  new value for property <code>iconUri</code>
 * @return {sap.ushell.ui.launchpad.LoadingDialog} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ushell.ui.launchpad.LoadingDialog.prototype.setIconUri = function(sIconUri) { return new sap.ushell.ui.launchpad.LoadingDialog(); };


// ---- sap.ushell.ui.launchpad.SearchResultAppItem --------------------------------------------------------------------------

/**
 * 
 * Constructor for a new ui/launchpad/SearchResultAppItem.
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
 * <li>{@link #getSearchTerm searchTerm} : string</li>
 * <li>{@link #getTargetUrl targetUrl} : sap.ui.core.URI</li></ul>
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
 * In addition, all settings applicable to the base type {@link sap.m.Button#constructor sap.m.Button}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * Add your documentation for the newui/launchpad/SearchResultAppItem
 * @extends sap.m.Button
 * @version 1.16.7
 * @constructor   
 * @public
 * 
 */
sap.ushell.ui.launchpad.SearchResultAppItem = function(sId,mSettings) {};
/**
 * 
 * Creates a new subclass of class sap.ushell.ui.launchpad.SearchResultAppItem with name <code>sClassName</code> 
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
sap.ushell.ui.launchpad.SearchResultAppItem.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * 
 * Getter for property <code>searchTerm</code>.
 * the search term used for searching apps. Occurrences of this search term in the app title are highlighted
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {string} the value of property <code>searchTerm</code>
 * @public
 * 
 */
sap.ushell.ui.launchpad.SearchResultAppItem.prototype.getSearchTerm = function() { return ""; };

/**
 * 
 * Getter for property <code>targetUrl</code>.
 * The app's target URL for navigating to the app
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {sap.ui.core.URI} the value of property <code>targetUrl</code>
 * @public
 * 
 */
sap.ushell.ui.launchpad.SearchResultAppItem.prototype.getTargetUrl = function() { return new sap.ui.core.URI(); };

/**
 * 
 * Setter for property <code>searchTerm</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {string} sSearchTerm  new value for property <code>searchTerm</code>
 * @return {sap.ushell.ui.launchpad.SearchResultAppItem} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ushell.ui.launchpad.SearchResultAppItem.prototype.setSearchTerm = function(sSearchTerm) { return new sap.ushell.ui.launchpad.SearchResultAppItem(); };

/**
 * 
 * Setter for property <code>targetUrl</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {sap.ui.core.URI} sTargetUrl  new value for property <code>targetUrl</code>
 * @return {sap.ushell.ui.launchpad.SearchResultAppItem} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ushell.ui.launchpad.SearchResultAppItem.prototype.setTargetUrl = function(sTargetUrl) { return new sap.ushell.ui.launchpad.SearchResultAppItem(); };


// ---- sap.ushell.ui.launchpad.SearchResultApps --------------------------------------------------------------------------

/**
 * 
 * Constructor for a new ui/launchpad/SearchResultApps.
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
 * <li>{@link #getResults results} : sap.ui.core.Control[]</li></ul>
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
 * In addition, all settings applicable to the base type {@link sap.m.Table#constructor sap.m.Table}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * A list containing all app search results
 * @extends sap.m.Table
 * @version 1.16.7
 * @constructor   
 * @public
 * 
 */
sap.ushell.ui.launchpad.SearchResultApps = function(sId,mSettings) {};
/**
 * 
 * Adds some result <code>oResult</code> 
 * to the aggregation named <code>results</code>.
 * @param {sap.ui.core.Control}
 *            oResult the result to add; if empty, nothing is inserted
 * @return {sap.ushell.ui.launchpad.SearchResultApps} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ushell.ui.launchpad.SearchResultApps.prototype.addResult = function(oResult) { return new sap.ushell.ui.launchpad.SearchResultApps(); };

/**
 * 
 * Destroys all the results in the aggregation 
 * named <code>results</code>.
 * @return {sap.ushell.ui.launchpad.SearchResultApps} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ushell.ui.launchpad.SearchResultApps.prototype.destroyResults = function() { return new sap.ushell.ui.launchpad.SearchResultApps(); };

/**
 * 
 * Creates a new subclass of class sap.ushell.ui.launchpad.SearchResultApps with name <code>sClassName</code> 
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
sap.ushell.ui.launchpad.SearchResultApps.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * 
 * Getter for aggregation <code>results</code>.<br/>
 * all found Applications
 * @return {sap.ui.core.Control[]}
 * @public
 * 
 */
sap.ushell.ui.launchpad.SearchResultApps.prototype.getResults = function() { return new Array(); };

/**
 * 
 * Checks for the provided <code>sap.ui.core.Control</code> in the aggregation named <code>results</code> 
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.core.Control}
 *            oResult the result whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * 
 */
sap.ushell.ui.launchpad.SearchResultApps.prototype.indexOfResult = function(oResult) { return 0; };

/**
 * 
 * Inserts a result into the aggregation named <code>results</code>.
 * @param {sap.ui.core.Control}
 *          oResult the result to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the result should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the result is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the result is inserted at 
 *             the last position        
 * @return {sap.ushell.ui.launchpad.SearchResultApps} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ushell.ui.launchpad.SearchResultApps.prototype.insertResult = function(oResult,iIndex) { return new sap.ushell.ui.launchpad.SearchResultApps(); };

/**
 * 
 * Removes all the controls in the aggregation named <code>results</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.core.Control[]} an array of the removed elements (might be empty)
 * @public
 * 
 */
sap.ushell.ui.launchpad.SearchResultApps.prototype.removeAllResults = function() { return new Array(); };

/**
 * 
 * Removes an result from the aggregation named <code>results</code>.
 * @param {int | string | sap.ui.core.Control} vResult the result to remove or its index or id
 * @return {sap.ui.core.Control} the removed result or null
 * @public
 * 
 */
sap.ushell.ui.launchpad.SearchResultApps.prototype.removeResult = function(vResult) { return new sap.ui.core.Control(); };

/**
 * 
 * @type void
 * @public
 */
sap.ushell.ui.launchpad.SearchResultApps.prototype.resetGrowing = function() { return null; };


// ---- sap.ushell.ui.launchpad.SearchSuggestionList --------------------------------------------------------------------------

/**
 * 
 * Constructor for a new ui/launchpad/SearchSuggestionList.
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
 * <li>{@link #getDisableKeyboardNavigation disableKeyboardNavigation} : boolean (default: false)</li></ul>
 * </li>
 * <li>Aggregations
 * <ul></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link sap.ushell.ui.launchpad.SearchSuggestionList#event:pressEsc pressEsc} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.ushell.ui.launchpad.SearchSuggestionList#event:pressUpFirstItem pressUpFirstItem} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
 * </li>
 * </ul> 
 * </p><p>
 * </p><p>
 * In addition, all settings applicable to the base type {@link sap.m.List#constructor sap.m.List}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * Add your documentation for the newui/launchpad/SearchSuggestionList
 * @extends sap.m.List
 * @version 1.16.7
 * @constructor   
 * @public
 * 
 */
sap.ushell.ui.launchpad.SearchSuggestionList = function(sId,mSettings) {};
/**
 * 
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 */
sap.ushell.ui.launchpad.SearchSuggestionList.prototype.pressEsc = function(oControlEvent) { return null; };

/**
 * 
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 */
sap.ushell.ui.launchpad.SearchSuggestionList.prototype.pressUpFirstItem = function(oControlEvent) { return null; };

/**
 * 
 * Attach event handler <code>fnFunction</code> to the 'pressEsc' event of this <code>sap.ushell.ui.launchpad.SearchSuggestionList</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ushell.ui.launchpad.SearchSuggestionList</code>.<br/> itself. 
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener=this] Context object to call the event handler with. Defaults to this <code>sap.ushell.ui.launchpad.SearchSuggestionList</code>.<br/> itself.
 * @return {sap.ushell.ui.launchpad.SearchSuggestionList} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ushell.ui.launchpad.SearchSuggestionList.prototype.attachPressEsc = function(oData,fnFunction,oListener) { return new sap.ushell.ui.launchpad.SearchSuggestionList(); };

/**
 * 
 * Attach event handler <code>fnFunction</code> to the 'pressUpFirstItem' event of this <code>sap.ushell.ui.launchpad.SearchSuggestionList</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ushell.ui.launchpad.SearchSuggestionList</code>.<br/> itself. 
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener=this] Context object to call the event handler with. Defaults to this <code>sap.ushell.ui.launchpad.SearchSuggestionList</code>.<br/> itself.
 * @return {sap.ushell.ui.launchpad.SearchSuggestionList} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ushell.ui.launchpad.SearchSuggestionList.prototype.attachPressUpFirstItem = function(oData,fnFunction,oListener) { return new sap.ushell.ui.launchpad.SearchSuggestionList(); };

/**
 * 
 * Detach event handler <code>fnFunction</code> from the 'pressEsc' event of this <code>sap.ushell.ui.launchpad.SearchSuggestionList</code>.<br/>
 * </p><p>
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ushell.ui.launchpad.SearchSuggestionList} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ushell.ui.launchpad.SearchSuggestionList.prototype.detachPressEsc = function(fnFunction,oListener) { return new sap.ushell.ui.launchpad.SearchSuggestionList(); };

/**
 * 
 * Detach event handler <code>fnFunction</code> from the 'pressUpFirstItem' event of this <code>sap.ushell.ui.launchpad.SearchSuggestionList</code>.<br/>
 * </p><p>
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ushell.ui.launchpad.SearchSuggestionList} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ushell.ui.launchpad.SearchSuggestionList.prototype.detachPressUpFirstItem = function(fnFunction,oListener) { return new sap.ushell.ui.launchpad.SearchSuggestionList(); };

/**
 * 
 * Creates a new subclass of class sap.ushell.ui.launchpad.SearchSuggestionList with name <code>sClassName</code> 
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
sap.ushell.ui.launchpad.SearchSuggestionList.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * 
 * Fire event pressEsc to attached listeners.
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ushell.ui.launchpad.SearchSuggestionList} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.ushell.ui.launchpad.SearchSuggestionList.prototype.firePressEsc = function(mArguments) { return new sap.ushell.ui.launchpad.SearchSuggestionList(); };

/**
 * 
 * Fire event pressUpFirstItem to attached listeners.
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ushell.ui.launchpad.SearchSuggestionList} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.ushell.ui.launchpad.SearchSuggestionList.prototype.firePressUpFirstItem = function(mArguments) { return new sap.ushell.ui.launchpad.SearchSuggestionList(); };

/**
 * 
 * Getter for property <code>disableKeyboardNavigation</code>.
 * </p><p>
 * </p><p>
 * Default value is <code>false</code>
 * @return {boolean} the value of property <code>disableKeyboardNavigation</code>
 * @public
 * 
 */
sap.ushell.ui.launchpad.SearchSuggestionList.prototype.getDisableKeyboardNavigation = function() { return false; };

/**
 * 
 * Setter for property <code>disableKeyboardNavigation</code>.
 * </p><p>
 * Default value is <code>false</code> 
 * @param {boolean} bDisableKeyboardNavigation  new value for property <code>disableKeyboardNavigation</code>
 * @return {sap.ushell.ui.launchpad.SearchSuggestionList} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ushell.ui.launchpad.SearchSuggestionList.prototype.setDisableKeyboardNavigation = function(bDisableKeyboardNavigation) { return new sap.ushell.ui.launchpad.SearchSuggestionList(); };


// ---- sap.ushell.ui.launchpad.SearchSuggestionListItem --------------------------------------------------------------------------

/**
 * 
 * Constructor for a new ui/launchpad/SearchSuggestionListItem.
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
 * <li>{@link #getIsGroupFooter isGroupFooter} : boolean (default: false)</li>
 * <li>{@link #getCategorySeperator categorySeperator} : string (default: '/')</li>
 * <li>{@link #getCategoryFirstSeperator categoryFirstSeperator} : string (default: '')</li>
 * <li>{@link #getIcon icon} : sap.ui.core.URI</li>
 * <li>{@link #getMaxCategories maxCategories} : int (default: 2)</li>
 * <li>{@link #getIsGroupHeader isGroupHeader} : boolean</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getCategories categories} : sap.ui.core.Control[]</li></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link sap.ushell.ui.launchpad.SearchSuggestionListItem#event:press press} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.ushell.ui.launchpad.SearchSuggestionListItem#event:focus focus} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
 * </li>
 * </ul> 
 * </p><p>
 * </p><p>
 * In addition, all settings applicable to the base type {@link sap.m.ListItemBase#constructor sap.m.ListItemBase}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * Add your documentation for the newui/launchpad/SearchSuggestionListItem
 * @extends sap.m.ListItemBase
 * @version 1.16.7
 * @constructor   
 * @public
 * 
 */
sap.ushell.ui.launchpad.SearchSuggestionListItem = function(sId,mSettings) {};
/**
 * 
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 */
sap.ushell.ui.launchpad.SearchSuggestionListItem.prototype.focus = function(oControlEvent) { return null; };

/**
 * 
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 */
sap.ushell.ui.launchpad.SearchSuggestionListItem.prototype.press = function(oControlEvent) { return null; };

/**
 * 
 * Adds some category <code>oCategory</code> 
 * to the aggregation named <code>categories</code>.
 * @param {sap.ui.core.Control}
 *            oCategory the category to add; if empty, nothing is inserted
 * @return {sap.ushell.ui.launchpad.SearchSuggestionListItem} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ushell.ui.launchpad.SearchSuggestionListItem.prototype.addCategory = function(oCategory) { return new sap.ushell.ui.launchpad.SearchSuggestionListItem(); };

/**
 * 
 * Attach event handler <code>fnFunction</code> to the 'focus' event of this <code>sap.ushell.ui.launchpad.SearchSuggestionListItem</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ushell.ui.launchpad.SearchSuggestionListItem</code>.<br/> itself. 
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener=this] Context object to call the event handler with. Defaults to this <code>sap.ushell.ui.launchpad.SearchSuggestionListItem</code>.<br/> itself.
 * @return {sap.ushell.ui.launchpad.SearchSuggestionListItem} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ushell.ui.launchpad.SearchSuggestionListItem.prototype.attachFocus = function(oData,fnFunction,oListener) { return new sap.ushell.ui.launchpad.SearchSuggestionListItem(); };

/**
 * 
 * Attach event handler <code>fnFunction</code> to the 'press' event of this <code>sap.ushell.ui.launchpad.SearchSuggestionListItem</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ushell.ui.launchpad.SearchSuggestionListItem</code>.<br/> itself. 
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener=this] Context object to call the event handler with. Defaults to this <code>sap.ushell.ui.launchpad.SearchSuggestionListItem</code>.<br/> itself.
 * @return {sap.ushell.ui.launchpad.SearchSuggestionListItem} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ushell.ui.launchpad.SearchSuggestionListItem.prototype.attachPress = function(oData,fnFunction,oListener) { return new sap.ushell.ui.launchpad.SearchSuggestionListItem(); };

/**
 * 
 * Destroys all the categories in the aggregation 
 * named <code>categories</code>.
 * @return {sap.ushell.ui.launchpad.SearchSuggestionListItem} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ushell.ui.launchpad.SearchSuggestionListItem.prototype.destroyCategories = function() { return new sap.ushell.ui.launchpad.SearchSuggestionListItem(); };

/**
 * 
 * Detach event handler <code>fnFunction</code> from the 'focus' event of this <code>sap.ushell.ui.launchpad.SearchSuggestionListItem</code>.<br/>
 * </p><p>
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ushell.ui.launchpad.SearchSuggestionListItem} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ushell.ui.launchpad.SearchSuggestionListItem.prototype.detachFocus = function(fnFunction,oListener) { return new sap.ushell.ui.launchpad.SearchSuggestionListItem(); };

/**
 * 
 * Detach event handler <code>fnFunction</code> from the 'press' event of this <code>sap.ushell.ui.launchpad.SearchSuggestionListItem</code>.<br/>
 * </p><p>
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ushell.ui.launchpad.SearchSuggestionListItem} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ushell.ui.launchpad.SearchSuggestionListItem.prototype.detachPress = function(fnFunction,oListener) { return new sap.ushell.ui.launchpad.SearchSuggestionListItem(); };

/**
 * 
 * Creates a new subclass of class sap.ushell.ui.launchpad.SearchSuggestionListItem with name <code>sClassName</code> 
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
sap.ushell.ui.launchpad.SearchSuggestionListItem.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * 
 * Fire event focus to attached listeners.
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ushell.ui.launchpad.SearchSuggestionListItem} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.ushell.ui.launchpad.SearchSuggestionListItem.prototype.fireFocus = function(mArguments) { return new sap.ushell.ui.launchpad.SearchSuggestionListItem(); };

/**
 * 
 * Fire event press to attached listeners.
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ushell.ui.launchpad.SearchSuggestionListItem} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.ushell.ui.launchpad.SearchSuggestionListItem.prototype.firePress = function(mArguments) { return new sap.ushell.ui.launchpad.SearchSuggestionListItem(); };

/**
 * 
 * Getter for aggregation <code>categories</code>.<br/>
 * Category Control
 * @return {sap.ui.core.Control[]}
 * @public
 * 
 */
sap.ushell.ui.launchpad.SearchSuggestionListItem.prototype.getCategories = function() { return new Array(); };

/**
 * 
 * Getter for property <code>categoryFirstSeperator</code>.
 * </p><p>
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {string} the value of property <code>categoryFirstSeperator</code>
 * @public
 * 
 */
sap.ushell.ui.launchpad.SearchSuggestionListItem.prototype.getCategoryFirstSeperator = function() { return ""; };

/**
 * 
 * Getter for property <code>categorySeperator</code>.
 * </p><p>
 * </p><p>
 * Default value is <code>/</code>
 * @return {string} the value of property <code>categorySeperator</code>
 * @public
 * 
 */
sap.ushell.ui.launchpad.SearchSuggestionListItem.prototype.getCategorySeperator = function() { return ""; };

/**
 * 
 * Getter for property <code>icon</code>.
 * </p><p>
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {sap.ui.core.URI} the value of property <code>icon</code>
 * @public
 * 
 */
sap.ushell.ui.launchpad.SearchSuggestionListItem.prototype.getIcon = function() { return new sap.ui.core.URI(); };

/**
 * 
 * Getter for property <code>isGroupFooter</code>.
 * </p><p>
 * </p><p>
 * Default value is <code>false</code>
 * @return {boolean} the value of property <code>isGroupFooter</code>
 * @public
 * 
 */
sap.ushell.ui.launchpad.SearchSuggestionListItem.prototype.getIsGroupFooter = function() { return false; };

/**
 * 
 * Getter for property <code>isGroupHeader</code>.
 * </p><p>
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {boolean} the value of property <code>isGroupHeader</code>
 * @public
 * 
 */
sap.ushell.ui.launchpad.SearchSuggestionListItem.prototype.getIsGroupHeader = function() { return false; };

/**
 * 
 * Getter for property <code>maxCategories</code>.
 * </p><p>
 * </p><p>
 * Default value is <code>2</code>
 * @return {int} the value of property <code>maxCategories</code>
 * @public
 * 
 */
sap.ushell.ui.launchpad.SearchSuggestionListItem.prototype.getMaxCategories = function() { return 0; };

/**
 * 
 * Getter for property <code>text</code>.
 * Suggestion text
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {string} the value of property <code>text</code>
 * @public
 * 
 */
sap.ushell.ui.launchpad.SearchSuggestionListItem.prototype.getText = function() { return ""; };

/**
 * 
 * Checks for the provided <code>sap.ui.core.Control</code> in the aggregation named <code>categories</code> 
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.core.Control}
 *            oCategory the category whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * 
 */
sap.ushell.ui.launchpad.SearchSuggestionListItem.prototype.indexOfCategory = function(oCategory) { return 0; };

/**
 * 
 * Inserts a category into the aggregation named <code>categories</code>.
 * @param {sap.ui.core.Control}
 *          oCategory the category to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the category should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the category is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the category is inserted at 
 *             the last position        
 * @return {sap.ushell.ui.launchpad.SearchSuggestionListItem} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ushell.ui.launchpad.SearchSuggestionListItem.prototype.insertCategory = function(oCategory,iIndex) { return new sap.ushell.ui.launchpad.SearchSuggestionListItem(); };

/**
 * 
 * Removes all the controls in the aggregation named <code>categories</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.core.Control[]} an array of the removed elements (might be empty)
 * @public
 * 
 */
sap.ushell.ui.launchpad.SearchSuggestionListItem.prototype.removeAllCategories = function() { return new Array(); };

/**
 * 
 * Removes an category from the aggregation named <code>categories</code>.
 * @param {int | string | sap.ui.core.Control} vCategory the category to remove or its index or id
 * @return {sap.ui.core.Control} the removed category or null
 * @public
 * 
 */
sap.ushell.ui.launchpad.SearchSuggestionListItem.prototype.removeCategory = function(vCategory) { return new sap.ui.core.Control(); };

/**
 * 
 * Setter for property <code>categoryFirstSeperator</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {string} sCategoryFirstSeperator  new value for property <code>categoryFirstSeperator</code>
 * @return {sap.ushell.ui.launchpad.SearchSuggestionListItem} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ushell.ui.launchpad.SearchSuggestionListItem.prototype.setCategoryFirstSeperator = function(sCategoryFirstSeperator) { return new sap.ushell.ui.launchpad.SearchSuggestionListItem(); };

/**
 * 
 * Setter for property <code>categorySeperator</code>.
 * </p><p>
 * Default value is <code>/</code> 
 * @param {string} sCategorySeperator  new value for property <code>categorySeperator</code>
 * @return {sap.ushell.ui.launchpad.SearchSuggestionListItem} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ushell.ui.launchpad.SearchSuggestionListItem.prototype.setCategorySeperator = function(sCategorySeperator) { return new sap.ushell.ui.launchpad.SearchSuggestionListItem(); };

/**
 * 
 * Setter for property <code>icon</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {sap.ui.core.URI} sIcon  new value for property <code>icon</code>
 * @return {sap.ushell.ui.launchpad.SearchSuggestionListItem} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ushell.ui.launchpad.SearchSuggestionListItem.prototype.setIcon = function(sIcon) { return new sap.ushell.ui.launchpad.SearchSuggestionListItem(); };

/**
 * 
 * Setter for property <code>isGroupFooter</code>.
 * </p><p>
 * Default value is <code>false</code> 
 * @param {boolean} bIsGroupFooter  new value for property <code>isGroupFooter</code>
 * @return {sap.ushell.ui.launchpad.SearchSuggestionListItem} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ushell.ui.launchpad.SearchSuggestionListItem.prototype.setIsGroupFooter = function(bIsGroupFooter) { return new sap.ushell.ui.launchpad.SearchSuggestionListItem(); };

/**
 * 
 * Setter for property <code>isGroupHeader</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {boolean} bIsGroupHeader  new value for property <code>isGroupHeader</code>
 * @return {sap.ushell.ui.launchpad.SearchSuggestionListItem} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ushell.ui.launchpad.SearchSuggestionListItem.prototype.setIsGroupHeader = function(bIsGroupHeader) { return new sap.ushell.ui.launchpad.SearchSuggestionListItem(); };

/**
 * 
 * Setter for property <code>maxCategories</code>.
 * </p><p>
 * Default value is <code>2</code> 
 * @param {int} iMaxCategories  new value for property <code>maxCategories</code>
 * @return {sap.ushell.ui.launchpad.SearchSuggestionListItem} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ushell.ui.launchpad.SearchSuggestionListItem.prototype.setMaxCategories = function(iMaxCategories) { return new sap.ushell.ui.launchpad.SearchSuggestionListItem(); };

/**
 * 
 * Setter for property <code>text</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {string} sText  new value for property <code>text</code>
 * @return {sap.ushell.ui.launchpad.SearchSuggestionListItem} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ushell.ui.launchpad.SearchSuggestionListItem.prototype.setText = function(sText) { return new sap.ushell.ui.launchpad.SearchSuggestionListItem(); };


// ---- sap.ushell.utils --------------------------------------------------------------------------

// ---- static fields of namespaces ---------------------------------------------------------------------

// ---- sap.ushell --------------------------------------------------------------------------

/**
 * 
 * The Unified Shell container as a singleton object. This object will only be
 * available after <code>sap.ushell.bootstrap()</code> has finished.
 * @since 1.15.0
 * @type sap.ushell.services.Container
 * @see sap.ushell.bootstrap
 * @public
 * @memberOf sap.ushell
 */
sap.ushell.Container = new sap.ushell.services.Container();

