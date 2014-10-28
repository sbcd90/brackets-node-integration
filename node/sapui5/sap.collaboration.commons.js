
// ---- _global_ --------------------------------------------------------------------------


// ---- sap --------------------------------------------------------------------------


// ---- sap.collaboration --------------------------------------------------------------------------


// ---- sap.collaboration.AppType --------------------------------------------------------------------------

// dummy function to make Eclipse aware of namespace
sap.collaboration.AppType.toString = function() { return ""; };

// ---- sap.collaboration.components --------------------------------------------------------------------------


// ---- sap.collaboration.components.fiori --------------------------------------------------------------------------


// ---- sap.collaboration.components.fiori.feed --------------------------------------------------------------------------


// ---- sap.collaboration.components.fiori.feed.Component --------------------------------------------------------------------------

/**
 * 
 * Constructor for the Feed Component.
 * @since version 1.16
 * @constructor
 * @param {sap.ui.core.URI} [oDataServiceUrl] The OData service URL needed for the Feed Component, the default value is <tt>"/sap/opu/odata/sap/SM_INTEGRATION_SRV".</tt>
 * @param {sap.collaboration.FeedType} feedType The type of feed to be displayed.
 * @param {string} [groupIds] A comma separated list of group IDs.
 * @param {JSON object} [object] A JSON object passed to the Feed component. 
 * It is required when the value of <tt>feedType</tt> is <tt>sap.collaboration.FeedType.object</tt> or <tt>sap.collaboration.FeedType.objectGroup</tt>.
 * This object represents business related information, such as a sales order, an opportunity, etc. It contains the following properties:
 * 		<ul>
 * 			<li><tt>id</tt>: the business object ID to be posted in the SAP Jam Feed. It can be any text as long as unique for each object or 
 * 							it can be an OData URL to the object in the application.</li>
 * 			<li><tt>type</tt>: the type of the business object. It can be any text or it can be the OData meta data URL to the object Entity Type.</li>
 * 			<li><tt>name</tt> (optional): the description of the business object to be displayed in SAP Jam, i.e. "SO 57746", "Opportunity 123", etc.</li>
 * 			<li><tt>ui_url</tt> (optional): the URL to navigate to the same business object in the application.</li>
 * 		</ul>
 * @class Feed Component
 * </p><p>
 * A Feed Component is a ui5 component that applications 
 * can use to render a <tt>sap.m.App</tt> that 
 * embeds the JAM Feed Widget.
 * @public
 */
sap.collaboration.components.fiori.feed.Component = function(oDataServiceUrl,feedType,groupIds,object) {};
/**
 * 
 * Contract for passing the settings to the Component.
 * @public
 * @param {JSON Object} oSettings A JSON object containing the following attributes:
 * 		<ul>
 * 			<li><tt>{sap.ui.core.URI} oDataServiceUrl</tt>: the URL of the OData Service needed for the Feed Component.</li>
 * 			<li><tt>{sap.collaboration.FeedType} feedType</tt>: the type of feed to be displayed.</li>
 * 			<li><tt>{string} [groupIds?]</tt>: a comma separated list of group IDs.</li>
 * 			<li><tt>{JSON object} object</tt>: the representation of a business object.</li>
 * 		</ul>
 */
sap.collaboration.components.fiori.feed.Component.prototype.setSettings = function(oSettings) { return null; };


// ---- sap.collaboration.components.fiori.feed.dialog --------------------------------------------------------------------------


// ---- sap.collaboration.components.fiori.feed.dialog.Component --------------------------------------------------------------------------

/**
 * 
 * Constructor for the Feed Dialog Component.
 * @since version 1.16
 * @constructor
 * @param {sap.ui.core.URI} [oDataServiceUrl] The OData service URL needed for the Feed Dialog Component, the default value is <tt>"/sap/opu/odata/sap/SM_INTEGRATION_SRV".</tt>
 * @param {sap.collaboration.FeedType} feedType The type of feed to be displayed.
 * @param {string} [groupIds] A comma separated list of group IDs.
 * @param {JSON object} [object] A JSON object passed to the Feed Dialog component. 
 * It is required when the value of <tt>feedType</tt> is <tt>sap.collaboration.FeedType.object</tt> or <tt>sap.collaboration.FeedType.objectGroup</tt>.
 * This object represents business related information, such as a sales order, an opportunity, etc. It contains the following properties:
 * 		<ul>
 * 			<li><tt>id</tt>: the business object ID to be posted in the SAP Jam Feed. It can be any text as long as unique for each object or 
 * 							it can be an OData URL to the object in the application.</li>
 * 			<li><tt>type</tt>: the type of the business object. It can be any text or it can be the OData meta data URL to the object Entity Type.</li>
 * 			<li><tt>name</tt> (optional): the description of the business object to be displayed in SAP Jam, i.e. "SO 57746", "Opportunity 123", etc.</li>
 * 			<li><tt>ui_url</tt> (optional): the URL to navigate to the same business object in the application.</li>
 * 		</ul>
 * @class Feed Dialog Component
 * </p><p>
 * A Feed Dialog Component is a ui5 component that applications 
 * can use to render the feed widget view in a dialog and then can
 * be used to share information in SAP JAM.
 * @public
 */
sap.collaboration.components.fiori.feed.dialog.Component = function(oDataServiceUrl,feedType,groupIds,object) {};
/**
 * 
 * Open the Feed Dialog.
 * @public
 */
sap.collaboration.components.fiori.feed.dialog.Component.prototype.open = function() { return null; };

/**
 * 
 * Contract for passing the settings to the Component.
 * @public
 * @param {JSON Object} oSettings A JSON object containing the following attributes:
 * 		<ul>
 * 			<li><tt>{sap.ui.core.URI} oDataServiceUrl</tt>: the URL of the OData Service needed for the Feed Dialog Component.</li>
 * 			<li><tt>{sap.collaboration.FeedType} feedType</tt>: the type of feed to be displayed.</li>
 * 			<li><tt>{string} [groupIds?]</tt>: a comma separated list of group IDs.</li>
 * 			<li><tt>{JSON object} object</tt>: the representation of a business object.</li>
 * 		</ul>
 */
sap.collaboration.components.fiori.feed.dialog.Component.prototype.setSettings = function(oSettings) { return null; };


// ---- sap.collaboration.components.fiori.sharing --------------------------------------------------------------------------


// ---- sap.collaboration.components.fiori.sharing.Component --------------------------------------------------------------------------

/**
 * 
 * Constructor for the share component
 * @since version 1.16
 * @constructor
 * @param {sap.ui.core.URI} [oDataServiceUrl] The OData service URL needed for the share component, the default value is "/sap/opu/odata/sap/SM_INTEGRATION_SRV"
 * @param {JSON object} [object] A JSon object passed to the share component. This object contains the following properties:
 * 		<ul>
 * 			<li>id (optional): is the object Id to be shared in SAP Jam, i.e a URL that navigates back to the same object in the application</li>
 * 			<li>display (optional): is a UI5 control to be displayed in the component UI</li>
 * 			<li>share (optional): is a note that will be displayed in the component UI and shared to SAP Jam too</li>
 * 		</ul>
 * @class Share Component
 * </p><p>
 * A Share Component is a ui5 component that applications 
 * can use to share information to JAM
 * @public
 */
sap.collaboration.components.fiori.sharing.Component = function(oDataServiceUrl,object) {};
/**
 * 
 * Setter for the Component settings.
 * @param {JSON Object} oSettings A JSON object used to set the component settings, this object should contains the same 
 * properties used in the constructor. 
 * @public
 */
sap.collaboration.components.fiori.sharing.Component.prototype.setSettings = function(oSettings) { return null; };

/**
 * 
 * Shares the data to Jam group
 * @public
 */
sap.collaboration.components.fiori.sharing.Component.prototype.shareToJam = function() { return null; };


// ---- sap.collaboration.components.fiori.sharing.dialog --------------------------------------------------------------------------


// ---- sap.collaboration.components.fiori.sharing.dialog.Component --------------------------------------------------------------------------

/**
 * 
 * Constructor for the share dialog component
 * @since version 1.16
 * @constructor
 * @param {sap.ui.core.URI} [oDataServiceUrl] The OData service URL needed for the share component, the default value is "/sap/opu/odata/sap/SM_INTEGRATION_SRV"
 * @param {JSON object} [object] A JSon object passed to the share component. This object contains the following properties:
 * 		<ul>
 * 			<li>id (optional): is the object Id to be shared in SAP Jam, i.e a url that navigates back to the same object in the application</li>
 * 			<li>display (optional): is a UI5 control to be displayed in the component UI</li>
 * 			<li>share (optional): is a note that will be displayed in the component UI and shared to SAP Jam too</li>
 * 		</ul>
 * @class Share Dialog Component
 * </p><p>
 * A Share Dialog Component is a ui5 component that applications 
 * can use to render the share component in a dialog and then can 
 * be used to share information to SAP Jam
 * @public
 */
sap.collaboration.components.fiori.sharing.dialog.Component = function(oDataServiceUrl,object) {};
/**
 * 
 * Opens a dialog that will contain the share component
 * @public
 */
sap.collaboration.components.fiori.sharing.dialog.Component.prototype.open = function() { return null; };

/**
 * 
 * Setter for the Component settings.
 * @param {JSON Object} oSettings A JSON object used to set the component settings, this object should contains the same 
 * properties used in the constructor. 
 * @public
 */
sap.collaboration.components.fiori.sharing.dialog.Component.prototype.setSettings = function(oSettings) { return null; };


// ---- sap.collaboration.FeedType --------------------------------------------------------------------------

// dummy function to make Eclipse aware of namespace
sap.collaboration.FeedType.toString = function() { return ""; };
// ---- static fields of namespaces ---------------------------------------------------------------------

// ---- sap.collaboration.AppType --------------------------------------------------------------------------

/**
 * 
 * Fiori Split App 
 * @public
 * @memberOf sap.collaboration.AppType
 */
sap.collaboration.AppType.split = null;

/**
 * 
 * SAP Jam Feed Widget Wrapper 
 * @public
 * @memberOf sap.collaboration.AppType
 */
sap.collaboration.AppType.widget = null;


// ---- sap.collaboration.FeedType --------------------------------------------------------------------------

/**
 * 
 * Company feed type 
 * @public
 * @memberOf sap.collaboration.FeedType
 */
sap.collaboration.FeedType.company = null;

/**
 * 
 * Follows feed type 
 * @public
 * @memberOf sap.collaboration.FeedType
 */
sap.collaboration.FeedType.follows = null;

/**
 * 
 * Group feed type 
 * @public
 * @memberOf sap.collaboration.FeedType
 */
sap.collaboration.FeedType.group = null;

/**
 * 
 * Oject feed type 
 * @public
 * @memberOf sap.collaboration.FeedType
 */
sap.collaboration.FeedType.object = null;

/**
 * 
 * Object group feed type 
 * @public
 * @memberOf sap.collaboration.FeedType
 */
sap.collaboration.FeedType.objectGroup = null;

