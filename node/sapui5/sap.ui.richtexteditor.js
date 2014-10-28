
// ---- _global_ --------------------------------------------------------------------------


// ---- sap --------------------------------------------------------------------------


// ---- sap.ui --------------------------------------------------------------------------


// ---- sap.ui.richtexteditor --------------------------------------------------------------------------


// ---- sap.ui.richtexteditor.RichTextEditor --------------------------------------------------------------------------

/**
 * 
 * Constructor for a new RichTextEditor.
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
 * <li>{@link #getValue value} : string (default: '')</li>
 * <li>{@link #getTextDirection textDirection} : sap.ui.core.TextDirection (default: sap.ui.core.TextDirection.Inherit)</li>
 * <li>{@link #getWidth width} : sap.ui.core.CSSSize</li>
 * <li>{@link #getHeight height} : sap.ui.core.CSSSize</li>
 * <li>{@link #getEditorType editorType} : string (default: 'TinyMCE')</li>
 * <li>{@link #getEditorLocation editorLocation} : string (default: 'js/tiny_mce/tiny_mce_src.js')</li>
 * <li>{@link #getEditable editable} : boolean (default: true)</li>
 * <li>{@link #getShowGroupFontStyle showGroupFontStyle} : boolean (default: true)</li>
 * <li>{@link #getShowGroupTextAlign showGroupTextAlign} : boolean (default: true)</li>
 * <li>{@link #getShowGroupStructure showGroupStructure} : boolean (default: true)</li>
 * <li>{@link #getShowGroupFont showGroupFont} : boolean (default: false)</li>
 * <li>{@link #getShowGroupClipboard showGroupClipboard} : boolean (default: true)</li>
 * <li>{@link #getShowGroupInsert showGroupInsert} : boolean (default: false)</li>
 * <li>{@link #getShowGroupLink showGroupLink} : boolean (default: false)</li>
 * <li>{@link #getShowGroupUndo showGroupUndo} : boolean (default: false)</li>
 * <li>{@link #getWrapping wrapping} : boolean (default: true)</li>
 * <li>{@link #getRequired required} : boolean (default: false)</li>
 * <li>{@link #getSanitizeValue sanitizeValue} : boolean (default: true)</li></ul>
 * </li>
 * <li>Aggregations
 * <ul></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link sap.ui.richtexteditor.RichTextEditor#event:change change} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.ui.richtexteditor.RichTextEditor#event:ready ready} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
 * </li>
 * </ul> 
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * The RichTextEditor-Control is used to enter formatted text.
 * @extends sap.ui.core.Control
 * @version 1.15.1-SNAPSHOT
 * @constructor   
 * @public
 * @disclaimer Since version 1.6.0. 
 * The RichTextEditor of SAPUI5 contains a third party component TinyMCE provided by Moxiecode Systems AB. The SAP license agreement does not cover development of own applications with RichTextEditor of SAPUI5. To develop own applications with RichTextEditor of SAPUI5 a customer/partner has to first obtain an appropriate license from Moxiecode Systems AB. To prevent accidental usage, the TinyMCE code cannot be used directly starting with SAPUI5 version 1.8.
 * 
 */
sap.ui.richtexteditor.RichTextEditor = function(sId,mSettings) {};
/**
 * 
 * Event is fired when the text in the field has changed AND the focus leaves the editor or when the Enter key is pressed. 
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {string} oControlEvent.getParameters.newValue The new control value.
 * @public
 */
sap.ui.richtexteditor.RichTextEditor.prototype.change = function(oControlEvent) { return null; };

/**
 * 
 * Fired when the used editor is loaded and ready (its HTML is also created). 
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 */
sap.ui.richtexteditor.RichTextEditor.prototype.ready = function(oControlEvent) { return null; };

/**
 * 
 * Attach event handler <code>fnFunction</code> to the 'change' event of this <code>sap.ui.richtexteditor.RichTextEditor</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ui.richtexteditor.RichTextEditor</code>.<br/> itself. 
 * </p><p>
 * Event is fired when the text in the field has changed AND the focus leaves the editor or when the Enter key is pressed. 
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener=this] Context object to call the event handler with. Defaults to this <code>sap.ui.richtexteditor.RichTextEditor</code>.<br/> itself.
 * @return {sap.ui.richtexteditor.RichTextEditor} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.richtexteditor.RichTextEditor.prototype.attachChange = function(oData,fnFunction,oListener) { return new sap.ui.richtexteditor.RichTextEditor(); };

/**
 * 
 * Attach event handler <code>fnFunction</code> to the 'ready' event of this <code>sap.ui.richtexteditor.RichTextEditor</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ui.richtexteditor.RichTextEditor</code>.<br/> itself. 
 * </p><p>
 * Fired when the used editor is loaded and ready (its HTML is also created). 
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener=this] Context object to call the event handler with. Defaults to this <code>sap.ui.richtexteditor.RichTextEditor</code>.<br/> itself.
 * @return {sap.ui.richtexteditor.RichTextEditor} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.richtexteditor.RichTextEditor.prototype.attachReady = function(oData,fnFunction,oListener) { return new sap.ui.richtexteditor.RichTextEditor(); };

/**
 * 
 * Detach event handler <code>fnFunction</code> from the 'change' event of this <code>sap.ui.richtexteditor.RichTextEditor</code>.<br/>
 * </p><p>
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.richtexteditor.RichTextEditor} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.richtexteditor.RichTextEditor.prototype.detachChange = function(fnFunction,oListener) { return new sap.ui.richtexteditor.RichTextEditor(); };

/**
 * 
 * Detach event handler <code>fnFunction</code> from the 'ready' event of this <code>sap.ui.richtexteditor.RichTextEditor</code>.<br/>
 * </p><p>
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.richtexteditor.RichTextEditor} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.richtexteditor.RichTextEditor.prototype.detachReady = function(fnFunction,oListener) { return new sap.ui.richtexteditor.RichTextEditor(); };

/**
 * 
 * Creates a new subclass of class sap.ui.richtexteditor.RichTextEditor with name <code>sClassName</code> 
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
sap.ui.richtexteditor.RichTextEditor.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * 
 * Fire event change to attached listeners.
 * </p><p>
 * Expects following event parameters:
 * <ul>
 * <li>'newValue' of type <code>string</code> The new control value.</li>
 * </ul>
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.richtexteditor.RichTextEditor} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.ui.richtexteditor.RichTextEditor.prototype.fireChange = function(mArguments) { return new sap.ui.richtexteditor.RichTextEditor(); };

/**
 * 
 * Fire event ready to attached listeners.
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.richtexteditor.RichTextEditor} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.ui.richtexteditor.RichTextEditor.prototype.fireReady = function(mArguments) { return new sap.ui.richtexteditor.RichTextEditor(); };

/**
 * 
 * Getter for property <code>editable</code>.
 * Whether the editor content can be modified by the user. When set to "false" there might not be any editor toolbar.
 * </p><p>
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>editable</code>
 * @public
 * 
 */
sap.ui.richtexteditor.RichTextEditor.prototype.getEditable = function() { return false; };

/**
 * 
 * Getter for property <code>editorLocation</code>.
 * Relative or absolute URL where the editor is available. Must be on the same server.
 * Any attempts to set this property after the first rendering will not have any effect.
 * </p><p>
 * Default value is <code>'js/tiny_mce/tiny_mce_src.js'</code>
 * @return {string} the value of property <code>editorLocation</code>
 * @public
 * 
 */
sap.ui.richtexteditor.RichTextEditor.prototype.getEditorLocation = function() { return ""; };

/**
 * 
 * Getter for property <code>editorType</code>.
 * The editor implementation to use.
 * Valid values are "TinyMCE" and any other editor identifier that may be introduced by other groups (hence this is not an enumeration).
 * Any attempts to set this property after the first rendering will not have any effect.
 * </p><p>
 * Default value is <code>'TinyMCE'</code>
 * @return {string} the value of property <code>editorType</code>
 * @public
 * 
 */
sap.ui.richtexteditor.RichTextEditor.prototype.getEditorType = function() { return ""; };

/**
 * 
 * Getter for property <code>height</code>.
 * Height of RichTextEditor control in CSS units.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {sap.ui.core.CSSSize} the value of property <code>height</code>
 * @public
 * 
 */
sap.ui.richtexteditor.RichTextEditor.prototype.getHeight = function() { return new sap.ui.core.CSSSize(); };

/**
 * 
 * Returns the current editor's instance.
 * CAUTION: using the native editor introduces a dependency to that editor and breaks the wrapping character of the RichTextEditor control, so it should only be done in justified cases.
 * @type object
 * @public
 */
sap.ui.richtexteditor.RichTextEditor.prototype.getNativeApi = function() { return new Object(); };

/**
 * 
 * Getter for property <code>required</code>.
 * Whether a value is required.
 * </p><p>
 * Default value is <code>false</code>
 * @return {boolean} the value of property <code>required</code>
 * @public
 * 
 */
sap.ui.richtexteditor.RichTextEditor.prototype.getRequired = function() { return false; };

/**
 * 
 * Getter for property <code>sanitizeValue</code>.
 * Whether to run the HTML sanitizer once the value (HTML markup) is applied or not. To configure allowed URLs please use the whitelist API via jQuery.sap.addUrlWhitelist
 * </p><p>
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>sanitizeValue</code>
 * @public
 * 
 */
sap.ui.richtexteditor.RichTextEditor.prototype.getSanitizeValue = function() { return false; };

/**
 * 
 * Getter for property <code>showGroupClipboard</code>.
 * Whether the toolbar button group containing commands like Cut, Copy and Paste is available. Changing this after the initial rendering will result in some visible redrawing.
 * </p><p>
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>showGroupClipboard</code>
 * @public
 * 
 */
sap.ui.richtexteditor.RichTextEditor.prototype.getShowGroupClipboard = function() { return false; };

/**
 * 
 * Getter for property <code>showGroupFont</code>.
 * Whether the toolbar button group containing commands like Font, Font Size and Colors is available. Changing this after the initial rendering will result in some visible redrawing.
 * </p><p>
 * Default value is <code>false</code>
 * @return {boolean} the value of property <code>showGroupFont</code>
 * @public
 * 
 */
sap.ui.richtexteditor.RichTextEditor.prototype.getShowGroupFont = function() { return false; };

/**
 * 
 * Getter for property <code>showGroupFontStyle</code>.
 * Whether the toolbar button group containing commands like Bold, Italic, Underline and Strikethrough is available. Changing this after the initial rendering will result in some visible redrawing.
 * </p><p>
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>showGroupFontStyle</code>
 * @public
 * 
 */
sap.ui.richtexteditor.RichTextEditor.prototype.getShowGroupFontStyle = function() { return false; };

/**
 * 
 * Getter for property <code>showGroupInsert</code>.
 * Whether the toolbar button group containing commands like Insert Image and Insert Smiley is available. Changing this after the initial rendering will result in some visible redrawing.
 * </p><p>
 * Default value is <code>false</code>
 * @return {boolean} the value of property <code>showGroupInsert</code>
 * @public
 * 
 */
sap.ui.richtexteditor.RichTextEditor.prototype.getShowGroupInsert = function() { return false; };

/**
 * 
 * Getter for property <code>showGroupLink</code>.
 * Whether the toolbar button group containing commands like Create Link and Remove Link is available. Changing this after the initial rendering will result in some visible redrawing.
 * </p><p>
 * Default value is <code>false</code>
 * @return {boolean} the value of property <code>showGroupLink</code>
 * @public
 * 
 */
sap.ui.richtexteditor.RichTextEditor.prototype.getShowGroupLink = function() { return false; };

/**
 * 
 * Getter for property <code>showGroupStructure</code>.
 * Whether the toolbar button group containing commands like Bullets and Indentation is available. Changing this after the initial rendering will result in some visible redrawing.
 * </p><p>
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>showGroupStructure</code>
 * @public
 * 
 */
sap.ui.richtexteditor.RichTextEditor.prototype.getShowGroupStructure = function() { return false; };

/**
 * 
 * Getter for property <code>showGroupTextAlign</code>.
 * Whether the toolbar button group containing text alignment commands is available. Changing this after the initial rendering will result in some visible redrawing.
 * </p><p>
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>showGroupTextAlign</code>
 * @public
 * 
 */
sap.ui.richtexteditor.RichTextEditor.prototype.getShowGroupTextAlign = function() { return false; };

/**
 * 
 * Getter for property <code>showGroupUndo</code>.
 * Whether the toolbar button group containing commands like Undo and Redo is available. Changing this after the initial rendering will result in some visible redrawing.
 * </p><p>
 * Default value is <code>false</code>
 * @return {boolean} the value of property <code>showGroupUndo</code>
 * @public
 * 
 */
sap.ui.richtexteditor.RichTextEditor.prototype.getShowGroupUndo = function() { return false; };

/**
 * 
 * Getter for property <code>textDirection</code>.
 * The text direction
 * </p><p>
 * Default value is <code>Inherit</code>
 * @return {sap.ui.core.TextDirection} the value of property <code>textDirection</code>
 * @public
 * 
 */
sap.ui.richtexteditor.RichTextEditor.prototype.getTextDirection = function() { return new sap.ui.core.TextDirection(); };

/**
 * 
 * Getter for property <code>value</code>.
 * An HTML string representing the editor content. Because this is HTML, the value cannot be generically escaped to prevent cross-site scripting, so the application is responsible for doing so.
 * </p><p>
 * Default value is <code>''</code>
 * @return {string} the value of property <code>value</code>
 * @public
 * 
 */
sap.ui.richtexteditor.RichTextEditor.prototype.getValue = function() { return ""; };

/**
 * 
 * Getter for property <code>width</code>.
 * Width of RichTextEditor control in CSS units.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {sap.ui.core.CSSSize} the value of property <code>width</code>
 * @public
 * 
 */
sap.ui.richtexteditor.RichTextEditor.prototype.getWidth = function() { return new sap.ui.core.CSSSize(); };

/**
 * 
 * Getter for property <code>wrapping</code>.
 * Whether the text in the editor is wrapped. This does not affect the editor's value, only the representation in the control.
 * </p><p>
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>wrapping</code>
 * @public
 * 
 */
sap.ui.richtexteditor.RichTextEditor.prototype.getWrapping = function() { return false; };

/**
 * 
 * Setter for property <code>editable</code>.
 * </p><p>
 * Default value is <code>true</code> 
 * @param {boolean} bEditable  new value for property <code>editable</code>
 * @return {sap.ui.richtexteditor.RichTextEditor} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.richtexteditor.RichTextEditor.prototype.setEditable = function(bEditable) { return new sap.ui.richtexteditor.RichTextEditor(); };

/**
 * 
 * Setter for property <code>editorLocation</code>.
 * </p><p>
 * Default value is <code>'js/tiny_mce/tiny_mce_src.js'</code> 
 * @param {string} sEditorLocation  new value for property <code>editorLocation</code>
 * @return {sap.ui.richtexteditor.RichTextEditor} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.richtexteditor.RichTextEditor.prototype.setEditorLocation = function(sEditorLocation) { return new sap.ui.richtexteditor.RichTextEditor(); };

/**
 * 
 * Setter for property <code>editorType</code>.
 * </p><p>
 * Default value is <code>'TinyMCE'</code> 
 * @param {string} sEditorType  new value for property <code>editorType</code>
 * @return {sap.ui.richtexteditor.RichTextEditor} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.richtexteditor.RichTextEditor.prototype.setEditorType = function(sEditorType) { return new sap.ui.richtexteditor.RichTextEditor(); };

/**
 * 
 * Setter for property <code>height</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {sap.ui.core.CSSSize} sHeight  new value for property <code>height</code>
 * @return {sap.ui.richtexteditor.RichTextEditor} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.richtexteditor.RichTextEditor.prototype.setHeight = function(sHeight) { return new sap.ui.richtexteditor.RichTextEditor(); };

/**
 * 
 * Setter for property <code>required</code>.
 * </p><p>
 * Default value is <code>false</code> 
 * @param {boolean} bRequired  new value for property <code>required</code>
 * @return {sap.ui.richtexteditor.RichTextEditor} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.richtexteditor.RichTextEditor.prototype.setRequired = function(bRequired) { return new sap.ui.richtexteditor.RichTextEditor(); };

/**
 * 
 * Setter for property <code>sanitizeValue</code>.
 * </p><p>
 * Default value is <code>true</code> 
 * @param {boolean} bSanitizeValue  new value for property <code>sanitizeValue</code>
 * @return {sap.ui.richtexteditor.RichTextEditor} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.richtexteditor.RichTextEditor.prototype.setSanitizeValue = function(bSanitizeValue) { return new sap.ui.richtexteditor.RichTextEditor(); };

/**
 * 
 * Setter for property <code>showGroupClipboard</code>.
 * </p><p>
 * Default value is <code>true</code> 
 * @param {boolean} bShowGroupClipboard  new value for property <code>showGroupClipboard</code>
 * @return {sap.ui.richtexteditor.RichTextEditor} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.richtexteditor.RichTextEditor.prototype.setShowGroupClipboard = function(bShowGroupClipboard) { return new sap.ui.richtexteditor.RichTextEditor(); };

/**
 * 
 * Setter for property <code>showGroupFont</code>.
 * </p><p>
 * Default value is <code>false</code> 
 * @param {boolean} bShowGroupFont  new value for property <code>showGroupFont</code>
 * @return {sap.ui.richtexteditor.RichTextEditor} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.richtexteditor.RichTextEditor.prototype.setShowGroupFont = function(bShowGroupFont) { return new sap.ui.richtexteditor.RichTextEditor(); };

/**
 * 
 * Setter for property <code>showGroupFontStyle</code>.
 * </p><p>
 * Default value is <code>true</code> 
 * @param {boolean} bShowGroupFontStyle  new value for property <code>showGroupFontStyle</code>
 * @return {sap.ui.richtexteditor.RichTextEditor} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.richtexteditor.RichTextEditor.prototype.setShowGroupFontStyle = function(bShowGroupFontStyle) { return new sap.ui.richtexteditor.RichTextEditor(); };

/**
 * 
 * Setter for property <code>showGroupInsert</code>.
 * </p><p>
 * Default value is <code>false</code> 
 * @param {boolean} bShowGroupInsert  new value for property <code>showGroupInsert</code>
 * @return {sap.ui.richtexteditor.RichTextEditor} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.richtexteditor.RichTextEditor.prototype.setShowGroupInsert = function(bShowGroupInsert) { return new sap.ui.richtexteditor.RichTextEditor(); };

/**
 * 
 * Setter for property <code>showGroupLink</code>.
 * </p><p>
 * Default value is <code>false</code> 
 * @param {boolean} bShowGroupLink  new value for property <code>showGroupLink</code>
 * @return {sap.ui.richtexteditor.RichTextEditor} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.richtexteditor.RichTextEditor.prototype.setShowGroupLink = function(bShowGroupLink) { return new sap.ui.richtexteditor.RichTextEditor(); };

/**
 * 
 * Setter for property <code>showGroupStructure</code>.
 * </p><p>
 * Default value is <code>true</code> 
 * @param {boolean} bShowGroupStructure  new value for property <code>showGroupStructure</code>
 * @return {sap.ui.richtexteditor.RichTextEditor} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.richtexteditor.RichTextEditor.prototype.setShowGroupStructure = function(bShowGroupStructure) { return new sap.ui.richtexteditor.RichTextEditor(); };

/**
 * 
 * Setter for property <code>showGroupTextAlign</code>.
 * </p><p>
 * Default value is <code>true</code> 
 * @param {boolean} bShowGroupTextAlign  new value for property <code>showGroupTextAlign</code>
 * @return {sap.ui.richtexteditor.RichTextEditor} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.richtexteditor.RichTextEditor.prototype.setShowGroupTextAlign = function(bShowGroupTextAlign) { return new sap.ui.richtexteditor.RichTextEditor(); };

/**
 * 
 * Setter for property <code>showGroupUndo</code>.
 * </p><p>
 * Default value is <code>false</code> 
 * @param {boolean} bShowGroupUndo  new value for property <code>showGroupUndo</code>
 * @return {sap.ui.richtexteditor.RichTextEditor} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.richtexteditor.RichTextEditor.prototype.setShowGroupUndo = function(bShowGroupUndo) { return new sap.ui.richtexteditor.RichTextEditor(); };

/**
 * 
 * Setter for property <code>textDirection</code>.
 * </p><p>
 * Default value is <code>Inherit</code> 
 * @param {sap.ui.core.TextDirection} oTextDirection  new value for property <code>textDirection</code>
 * @return {sap.ui.richtexteditor.RichTextEditor} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.richtexteditor.RichTextEditor.prototype.setTextDirection = function(oTextDirection) { return new sap.ui.richtexteditor.RichTextEditor(); };

/**
 * 
 * Setter for property <code>value</code>.
 * </p><p>
 * Default value is <code>''</code> 
 * @param {string} sValue  new value for property <code>value</code>
 * @return {sap.ui.richtexteditor.RichTextEditor} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.richtexteditor.RichTextEditor.prototype.setValue = function(sValue) { return new sap.ui.richtexteditor.RichTextEditor(); };

/**
 * 
 * Setter for property <code>width</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {sap.ui.core.CSSSize} sWidth  new value for property <code>width</code>
 * @return {sap.ui.richtexteditor.RichTextEditor} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.richtexteditor.RichTextEditor.prototype.setWidth = function(sWidth) { return new sap.ui.richtexteditor.RichTextEditor(); };

/**
 * 
 * Setter for property <code>wrapping</code>.
 * </p><p>
 * Default value is <code>true</code> 
 * @param {boolean} bWrapping  new value for property <code>wrapping</code>
 * @return {sap.ui.richtexteditor.RichTextEditor} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.richtexteditor.RichTextEditor.prototype.setWrapping = function(bWrapping) { return new sap.ui.richtexteditor.RichTextEditor(); };

// ---- static fields of namespaces ---------------------------------------------------------------------
