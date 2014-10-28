
// ---- _global_ --------------------------------------------------------------------------


// ---- sap --------------------------------------------------------------------------


// ---- sap.ui --------------------------------------------------------------------------


// ---- sap.ui.unified --------------------------------------------------------------------------


// ---- sap.ui.unified.ContentSwitcher --------------------------------------------------------------------------

/**
 * 
 * Constructor for a new ContentSwitcher.
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
 * <li>{@link #getAnimation animation} : string (default: 'None')</li>
 * <li>{@link #getActiveContent activeContent} : int (default: 1)</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getContent1 content1} : sap.ui.core.Control[]</li>
 * <li>{@link #getContent2 content2} : sap.ui.core.Control[]</li></ul>
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
 * Switches between two control areas and animates it via CSS transitions
 * @extends sap.ui.core.Control
 * @version 1.15.1-SNAPSHOT
 * @constructor   
 * @public
 * @since 1.16.0
 * @experimental Since version 1.16.0. 
 * API is not yet finished and might change completely
 * 
 */
sap.ui.unified.ContentSwitcher = function(sId,mSettings) {};
/**
 * 
 * Adds some content1 <code>oContent1</code> 
 * to the aggregation named <code>content1</code>.
 * @param {sap.ui.core.Control}
 *            oContent1 the content1 to add; if empty, nothing is inserted
 * @return {sap.ui.unified.ContentSwitcher} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.unified.ContentSwitcher.prototype.addContent1 = function(oContent1) { return new sap.ui.unified.ContentSwitcher(); };

/**
 * 
 * Adds some content2 <code>oContent2</code> 
 * to the aggregation named <code>content2</code>.
 * @param {sap.ui.core.Control}
 *            oContent2 the content2 to add; if empty, nothing is inserted
 * @return {sap.ui.unified.ContentSwitcher} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.unified.ContentSwitcher.prototype.addContent2 = function(oContent2) { return new sap.ui.unified.ContentSwitcher(); };

/**
 * 
 * Destroys all the content1 in the aggregation 
 * named <code>content1</code>.
 * @return {sap.ui.unified.ContentSwitcher} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.unified.ContentSwitcher.prototype.destroyContent1 = function() { return new sap.ui.unified.ContentSwitcher(); };

/**
 * 
 * Destroys all the content2 in the aggregation 
 * named <code>content2</code>.
 * @return {sap.ui.unified.ContentSwitcher} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.unified.ContentSwitcher.prototype.destroyContent2 = function() { return new sap.ui.unified.ContentSwitcher(); };

/**
 * 
 * Creates a new subclass of class sap.ui.unified.ContentSwitcher with name <code>sClassName</code> 
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
sap.ui.unified.ContentSwitcher.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * 
 * Getter for property <code>activeContent</code>.
 * The number of the currently active content (1 or 2).
 * </p><p>
 * Default value is <code>1</code>
 * @return {int} the value of property <code>activeContent</code>
 * @public
 * 
 */
sap.ui.unified.ContentSwitcher.prototype.getActiveContent = function() { return 0; };

/**
 * 
 * Getter for property <code>animation</code>.
 * Set the used animation when changing content. This just sets a CSS-class named "sapUiUnifiedACSwitcherAnimation" + this value on the root element of the control. The animation has to be implemented in CSS. This also enables applications to implement their own animations via CSS by reacting to the parent class.
 * See the types sap.ui.unified.ContentSwitcherAnimation for default implementations.
 * </p><p>
 * Default value is <code>None</code>
 * @return {string} the value of property <code>animation</code>
 * @public
 * 
 */
sap.ui.unified.ContentSwitcher.prototype.getAnimation = function() { return ""; };

/**
 * 
 * Getter for aggregation <code>content1</code>.<br/>
 * The controls that should be shown in the first content
 * @return {sap.ui.core.Control[]}
 * @public
 * 
 */
sap.ui.unified.ContentSwitcher.prototype.getContent1 = function() { return new Array(); };

/**
 * 
 * Getter for aggregation <code>content2</code>.<br/>
 * The controls that should be shown in the second content
 * @return {sap.ui.core.Control[]}
 * @public
 * 
 */
sap.ui.unified.ContentSwitcher.prototype.getContent2 = function() { return new Array(); };

/**
 * 
 * Checks for the provided <code>sap.ui.core.Control</code> in the aggregation named <code>content1</code> 
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.core.Control}
 *            oContent1 the content1 whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * 
 */
sap.ui.unified.ContentSwitcher.prototype.indexOfContent1 = function(oContent1) { return 0; };

/**
 * 
 * Checks for the provided <code>sap.ui.core.Control</code> in the aggregation named <code>content2</code> 
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.core.Control}
 *            oContent2 the content2 whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * 
 */
sap.ui.unified.ContentSwitcher.prototype.indexOfContent2 = function(oContent2) { return 0; };

/**
 * 
 * Inserts a content1 into the aggregation named <code>content1</code>.
 * @param {sap.ui.core.Control}
 *          oContent1 the content1 to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the content1 should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the content1 is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the content1 is inserted at 
 *             the last position        
 * @return {sap.ui.unified.ContentSwitcher} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.unified.ContentSwitcher.prototype.insertContent1 = function(oContent1,iIndex) { return new sap.ui.unified.ContentSwitcher(); };

/**
 * 
 * Inserts a content2 into the aggregation named <code>content2</code>.
 * @param {sap.ui.core.Control}
 *          oContent2 the content2 to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the content2 should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the content2 is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the content2 is inserted at 
 *             the last position        
 * @return {sap.ui.unified.ContentSwitcher} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.unified.ContentSwitcher.prototype.insertContent2 = function(oContent2,iIndex) { return new sap.ui.unified.ContentSwitcher(); };

/**
 * 
 * Removes all the controls in the aggregation named <code>content1</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.core.Control[]} an array of the removed elements (might be empty)
 * @public
 * 
 */
sap.ui.unified.ContentSwitcher.prototype.removeAllContent1 = function() { return new Array(); };

/**
 * 
 * Removes all the controls in the aggregation named <code>content2</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.core.Control[]} an array of the removed elements (might be empty)
 * @public
 * 
 */
sap.ui.unified.ContentSwitcher.prototype.removeAllContent2 = function() { return new Array(); };

/**
 * 
 * Removes an content1 from the aggregation named <code>content1</code>.
 * @param {int | string | sap.ui.core.Control} vContent1 the content1 to remove or its index or id
 * @return {sap.ui.core.Control} the removed content1 or null
 * @public
 * 
 */
sap.ui.unified.ContentSwitcher.prototype.removeContent1 = function(vContent1) { return new sap.ui.core.Control(); };

/**
 * 
 * Removes an content2 from the aggregation named <code>content2</code>.
 * @param {int | string | sap.ui.core.Control} vContent2 the content2 to remove or its index or id
 * @return {sap.ui.core.Control} the removed content2 or null
 * @public
 * 
 */
sap.ui.unified.ContentSwitcher.prototype.removeContent2 = function(vContent2) { return new sap.ui.core.Control(); };

/**
 * 
 * Setter for property <code>activeContent</code>.
 * </p><p>
 * Default value is <code>1</code> 
 * @param {int} iActiveContent  new value for property <code>activeContent</code>
 * @return {sap.ui.unified.ContentSwitcher} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.unified.ContentSwitcher.prototype.setActiveContent = function(iActiveContent) { return new sap.ui.unified.ContentSwitcher(); };

/**
 * 
 * Setter for property <code>animation</code>.
 * </p><p>
 * Default value is <code>None</code> 
 * @param {string} sAnimation  new value for property <code>animation</code>
 * @return {sap.ui.unified.ContentSwitcher} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.unified.ContentSwitcher.prototype.setAnimation = function(sAnimation) { return new sap.ui.unified.ContentSwitcher(); };


// ---- sap.ui.unified.ContentSwitcherAnimation --------------------------------------------------------------------------

// dummy function to make Eclipse aware of namespace
sap.ui.unified.ContentSwitcherAnimation.toString = function() { return ""; };

// ---- sap.ui.unified.Shell --------------------------------------------------------------------------

/**
 * 
 * Constructor for a new Shell.
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
 * <li>{@link #getIcon icon} : sap.ui.core.URI</li>
 * <li>{@link #getShowPane showPane} : boolean</li>
 * <li>{@link #getShowCurtain showCurtain} : boolean</li>
 * <li>{@link #getShowCurtainPane showCurtainPane} : boolean</li>
 * <li>{@link #getHeaderHiding headerHiding} : boolean</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getContent content} : sap.ui.core.Control[]</li>
 * <li>{@link #getPaneContent paneContent} : sap.ui.core.Control[]</li>
 * <li>{@link #getCurtainContent curtainContent} : sap.ui.core.Control[]</li>
 * <li>{@link #getCurtainPaneContent curtainPaneContent} : sap.ui.core.Control[]</li>
 * <li>{@link #getHeadItems headItems} : sap.ui.unified.ShellHeadItem[]</li>
 * <li>{@link #getHeadEndItems headEndItems} : sap.ui.unified.ShellHeadItem[]</li>
 * <li>{@link #getSearch search} : sap.ui.core.Control</li></ul>
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
 * The Shell
 * @extends sap.ui.core.Control
 * @version 1.15.1-SNAPSHOT
 * @constructor   
 * @public
 * @since 1.15.1
 * 
 */
sap.ui.unified.Shell = function(sId,mSettings) {};
/**
 * 
 * Adds some content <code>oContent</code> 
 * to the aggregation named <code>content</code>.
 * @param {sap.ui.core.Control}
 *            oContent the content to add; if empty, nothing is inserted
 * @return {sap.ui.unified.Shell} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.unified.Shell.prototype.addContent = function(oContent) { return new sap.ui.unified.Shell(); };

/**
 * 
 * Adds some curtainContent <code>oCurtainContent</code> 
 * to the aggregation named <code>curtainContent</code>.
 * @param {sap.ui.core.Control}
 *            oCurtainContent the curtainContent to add; if empty, nothing is inserted
 * @return {sap.ui.unified.Shell} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.unified.Shell.prototype.addCurtainContent = function(oCurtainContent) { return new sap.ui.unified.Shell(); };

/**
 * 
 * Adds some curtainPaneContent <code>oCurtainPaneContent</code> 
 * to the aggregation named <code>curtainPaneContent</code>.
 * @param {sap.ui.core.Control}
 *            oCurtainPaneContent the curtainPaneContent to add; if empty, nothing is inserted
 * @return {sap.ui.unified.Shell} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.unified.Shell.prototype.addCurtainPaneContent = function(oCurtainPaneContent) { return new sap.ui.unified.Shell(); };

/**
 * 
 * Adds some headEndItem <code>oHeadEndItem</code> 
 * to the aggregation named <code>headEndItems</code>.
 * @param {sap.ui.unified.ShellHeadItem}
 *            oHeadEndItem the headEndItem to add; if empty, nothing is inserted
 * @return {sap.ui.unified.Shell} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.unified.Shell.prototype.addHeadEndItem = function(oHeadEndItem) { return new sap.ui.unified.Shell(); };

/**
 * 
 * Adds some headItem <code>oHeadItem</code> 
 * to the aggregation named <code>headItems</code>.
 * @param {sap.ui.unified.ShellHeadItem}
 *            oHeadItem the headItem to add; if empty, nothing is inserted
 * @return {sap.ui.unified.Shell} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.unified.Shell.prototype.addHeadItem = function(oHeadItem) { return new sap.ui.unified.Shell(); };

/**
 * 
 * Adds some paneContent <code>oPaneContent</code> 
 * to the aggregation named <code>paneContent</code>.
 * @param {sap.ui.core.Control}
 *            oPaneContent the paneContent to add; if empty, nothing is inserted
 * @return {sap.ui.unified.Shell} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.unified.Shell.prototype.addPaneContent = function(oPaneContent) { return new sap.ui.unified.Shell(); };

/**
 * 
 * Destroys all the content in the aggregation 
 * named <code>content</code>.
 * @return {sap.ui.unified.Shell} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.unified.Shell.prototype.destroyContent = function() { return new sap.ui.unified.Shell(); };

/**
 * 
 * Destroys all the curtainContent in the aggregation 
 * named <code>curtainContent</code>.
 * @return {sap.ui.unified.Shell} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.unified.Shell.prototype.destroyCurtainContent = function() { return new sap.ui.unified.Shell(); };

/**
 * 
 * Destroys all the curtainPaneContent in the aggregation 
 * named <code>curtainPaneContent</code>.
 * @return {sap.ui.unified.Shell} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.unified.Shell.prototype.destroyCurtainPaneContent = function() { return new sap.ui.unified.Shell(); };

/**
 * 
 * Destroys all the headEndItems in the aggregation 
 * named <code>headEndItems</code>.
 * @return {sap.ui.unified.Shell} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.unified.Shell.prototype.destroyHeadEndItems = function() { return new sap.ui.unified.Shell(); };

/**
 * 
 * Destroys all the headItems in the aggregation 
 * named <code>headItems</code>.
 * @return {sap.ui.unified.Shell} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.unified.Shell.prototype.destroyHeadItems = function() { return new sap.ui.unified.Shell(); };

/**
 * 
 * Destroys all the paneContent in the aggregation 
 * named <code>paneContent</code>.
 * @return {sap.ui.unified.Shell} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.unified.Shell.prototype.destroyPaneContent = function() { return new sap.ui.unified.Shell(); };

/**
 * 
 * Destroys the search in the aggregation 
 * named <code>search</code>.
 * @return {sap.ui.unified.Shell} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.unified.Shell.prototype.destroySearch = function() { return new sap.ui.unified.Shell(); };

/**
 * 
 * Creates a new subclass of class sap.ui.unified.Shell with name <code>sClassName</code> 
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
sap.ui.unified.Shell.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * 
 * Getter for aggregation <code>content</code>.<br/>
 * The content to appear in the main canvas.
 * @return {sap.ui.core.Control[]}
 * @public
 * 
 */
sap.ui.unified.Shell.prototype.getContent = function() { return new Array(); };

/**
 * 
 * Getter for aggregation <code>curtainContent</code>.<br/>
 * The content to appear in the curtain area.
 * @return {sap.ui.core.Control[]}
 * @public
 * 
 */
sap.ui.unified.Shell.prototype.getCurtainContent = function() { return new Array(); };

/**
 * 
 * Getter for aggregation <code>curtainPaneContent</code>.<br/>
 * The content to appear in the pane area of the curtain.
 * @return {sap.ui.core.Control[]}
 * @public
 * 
 */
sap.ui.unified.Shell.prototype.getCurtainPaneContent = function() { return new Array(); };

/**
 * 
 * Getter for aggregation <code>headEndItems</code>.<br/>
 * The buttons shown in the end (right in left-to-right case) of the Shell header.
 * @return {sap.ui.unified.ShellHeadItem[]}
 * @public
 * 
 */
sap.ui.unified.Shell.prototype.getHeadEndItems = function() { return new Array(); };

/**
 * 
 * Getter for property <code>headerHiding</code>.
 * Whether the header can be hidden (manually or automatically). This feature is only available when touch events are supported.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {boolean} the value of property <code>headerHiding</code>
 * @public
 * 
 */
sap.ui.unified.Shell.prototype.getHeaderHiding = function() { return false; };

/**
 * 
 * Getter for aggregation <code>headItems</code>.<br/>
 * The buttons shown in the begin (left in left-to-right case) of the Shell header.
 * @return {sap.ui.unified.ShellHeadItem[]}
 * @public
 * 
 */
sap.ui.unified.Shell.prototype.getHeadItems = function() { return new Array(); };

/**
 * 
 * Getter for property <code>icon</code>.
 * The application icon.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {sap.ui.core.URI} the value of property <code>icon</code>
 * @public
 * 
 */
sap.ui.unified.Shell.prototype.getIcon = function() { return new sap.ui.core.URI(); };

/**
 * 
 * Getter for aggregation <code>paneContent</code>.<br/>
 * The content to appear in the pane area.
 * @return {sap.ui.core.Control[]}
 * @public
 * 
 */
sap.ui.unified.Shell.prototype.getPaneContent = function() { return new Array(); };

/**
 * 
 * Getter for aggregation <code>search</code>.<br/>
 * Experimental (This aggregation might change completely in future!): The search control which should be displayed in the shell header.
 * @return {sap.ui.core.Control}
 * @public
 * 
 */
sap.ui.unified.Shell.prototype.getSearch = function() { return new sap.ui.core.Control(); };

/**
 * 
 * Getter for property <code>showCurtain</code>.
 * Shows / Hides the curtain.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {boolean} the value of property <code>showCurtain</code>
 * @public
 * 
 */
sap.ui.unified.Shell.prototype.getShowCurtain = function() { return false; };

/**
 * 
 * Getter for property <code>showCurtainPane</code>.
 * Shows / Hides the side pane on the curtain.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {boolean} the value of property <code>showCurtainPane</code>
 * @public
 * 
 */
sap.ui.unified.Shell.prototype.getShowCurtainPane = function() { return false; };

/**
 * 
 * Getter for property <code>showPane</code>.
 * Shows / Hides the side pane.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {boolean} the value of property <code>showPane</code>
 * @public
 * 
 */
sap.ui.unified.Shell.prototype.getShowPane = function() { return false; };

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
sap.ui.unified.Shell.prototype.indexOfContent = function(oContent) { return 0; };

/**
 * 
 * Checks for the provided <code>sap.ui.core.Control</code> in the aggregation named <code>curtainContent</code> 
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.core.Control}
 *            oCurtainContent the curtainContent whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * 
 */
sap.ui.unified.Shell.prototype.indexOfCurtainContent = function(oCurtainContent) { return 0; };

/**
 * 
 * Checks for the provided <code>sap.ui.core.Control</code> in the aggregation named <code>curtainPaneContent</code> 
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.core.Control}
 *            oCurtainPaneContent the curtainPaneContent whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * 
 */
sap.ui.unified.Shell.prototype.indexOfCurtainPaneContent = function(oCurtainPaneContent) { return 0; };

/**
 * 
 * Checks for the provided <code>sap.ui.unified.ShellHeadItem</code> in the aggregation named <code>headEndItems</code> 
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.unified.ShellHeadItem}
 *            oHeadEndItem the headEndItem whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * 
 */
sap.ui.unified.Shell.prototype.indexOfHeadEndItem = function(oHeadEndItem) { return 0; };

/**
 * 
 * Checks for the provided <code>sap.ui.unified.ShellHeadItem</code> in the aggregation named <code>headItems</code> 
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.unified.ShellHeadItem}
 *            oHeadItem the headItem whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * 
 */
sap.ui.unified.Shell.prototype.indexOfHeadItem = function(oHeadItem) { return 0; };

/**
 * 
 * Checks for the provided <code>sap.ui.core.Control</code> in the aggregation named <code>paneContent</code> 
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.core.Control}
 *            oPaneContent the paneContent whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * 
 */
sap.ui.unified.Shell.prototype.indexOfPaneContent = function(oPaneContent) { return 0; };

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
 * @return {sap.ui.unified.Shell} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.unified.Shell.prototype.insertContent = function(oContent,iIndex) { return new sap.ui.unified.Shell(); };

/**
 * 
 * Inserts a curtainContent into the aggregation named <code>curtainContent</code>.
 * @param {sap.ui.core.Control}
 *          oCurtainContent the curtainContent to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the curtainContent should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the curtainContent is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the curtainContent is inserted at 
 *             the last position        
 * @return {sap.ui.unified.Shell} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.unified.Shell.prototype.insertCurtainContent = function(oCurtainContent,iIndex) { return new sap.ui.unified.Shell(); };

/**
 * 
 * Inserts a curtainPaneContent into the aggregation named <code>curtainPaneContent</code>.
 * @param {sap.ui.core.Control}
 *          oCurtainPaneContent the curtainPaneContent to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the curtainPaneContent should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the curtainPaneContent is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the curtainPaneContent is inserted at 
 *             the last position        
 * @return {sap.ui.unified.Shell} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.unified.Shell.prototype.insertCurtainPaneContent = function(oCurtainPaneContent,iIndex) { return new sap.ui.unified.Shell(); };

/**
 * 
 * Inserts a headEndItem into the aggregation named <code>headEndItems</code>.
 * @param {sap.ui.unified.ShellHeadItem}
 *          oHeadEndItem the headEndItem to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the headEndItem should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the headEndItem is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the headEndItem is inserted at 
 *             the last position        
 * @return {sap.ui.unified.Shell} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.unified.Shell.prototype.insertHeadEndItem = function(oHeadEndItem,iIndex) { return new sap.ui.unified.Shell(); };

/**
 * 
 * Inserts a headItem into the aggregation named <code>headItems</code>.
 * @param {sap.ui.unified.ShellHeadItem}
 *          oHeadItem the headItem to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the headItem should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the headItem is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the headItem is inserted at 
 *             the last position        
 * @return {sap.ui.unified.Shell} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.unified.Shell.prototype.insertHeadItem = function(oHeadItem,iIndex) { return new sap.ui.unified.Shell(); };

/**
 * 
 * Inserts a paneContent into the aggregation named <code>paneContent</code>.
 * @param {sap.ui.core.Control}
 *          oPaneContent the paneContent to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the paneContent should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the paneContent is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the paneContent is inserted at 
 *             the last position        
 * @return {sap.ui.unified.Shell} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.unified.Shell.prototype.insertPaneContent = function(oPaneContent,iIndex) { return new sap.ui.unified.Shell(); };

/**
 * 
 * Removes all the controls in the aggregation named <code>content</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.core.Control[]} an array of the removed elements (might be empty)
 * @public
 * 
 */
sap.ui.unified.Shell.prototype.removeAllContent = function() { return new Array(); };

/**
 * 
 * Removes all the controls in the aggregation named <code>curtainContent</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.core.Control[]} an array of the removed elements (might be empty)
 * @public
 * 
 */
sap.ui.unified.Shell.prototype.removeAllCurtainContent = function() { return new Array(); };

/**
 * 
 * Removes all the controls in the aggregation named <code>curtainPaneContent</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.core.Control[]} an array of the removed elements (might be empty)
 * @public
 * 
 */
sap.ui.unified.Shell.prototype.removeAllCurtainPaneContent = function() { return new Array(); };

/**
 * 
 * Removes all the controls in the aggregation named <code>headEndItems</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.unified.ShellHeadItem[]} an array of the removed elements (might be empty)
 * @public
 * 
 */
sap.ui.unified.Shell.prototype.removeAllHeadEndItems = function() { return new Array(); };

/**
 * 
 * Removes all the controls in the aggregation named <code>headItems</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.unified.ShellHeadItem[]} an array of the removed elements (might be empty)
 * @public
 * 
 */
sap.ui.unified.Shell.prototype.removeAllHeadItems = function() { return new Array(); };

/**
 * 
 * Removes all the controls in the aggregation named <code>paneContent</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.core.Control[]} an array of the removed elements (might be empty)
 * @public
 * 
 */
sap.ui.unified.Shell.prototype.removeAllPaneContent = function() { return new Array(); };

/**
 * 
 * Removes an content from the aggregation named <code>content</code>.
 * @param {int | string | sap.ui.core.Control} vContent the content to remove or its index or id
 * @return {sap.ui.core.Control} the removed content or null
 * @public
 * 
 */
sap.ui.unified.Shell.prototype.removeContent = function(vContent) { return new sap.ui.core.Control(); };

/**
 * 
 * Removes an curtainContent from the aggregation named <code>curtainContent</code>.
 * @param {int | string | sap.ui.core.Control} vCurtainContent the curtainContent to remove or its index or id
 * @return {sap.ui.core.Control} the removed curtainContent or null
 * @public
 * 
 */
sap.ui.unified.Shell.prototype.removeCurtainContent = function(vCurtainContent) { return new sap.ui.core.Control(); };

/**
 * 
 * Removes an curtainPaneContent from the aggregation named <code>curtainPaneContent</code>.
 * @param {int | string | sap.ui.core.Control} vCurtainPaneContent the curtainPaneContent to remove or its index or id
 * @return {sap.ui.core.Control} the removed curtainPaneContent or null
 * @public
 * 
 */
sap.ui.unified.Shell.prototype.removeCurtainPaneContent = function(vCurtainPaneContent) { return new sap.ui.core.Control(); };

/**
 * 
 * Removes an headEndItem from the aggregation named <code>headEndItems</code>.
 * @param {int | string | sap.ui.unified.ShellHeadItem} vHeadEndItem the headEndItem to remove or its index or id
 * @return {sap.ui.unified.ShellHeadItem} the removed headEndItem or null
 * @public
 * 
 */
sap.ui.unified.Shell.prototype.removeHeadEndItem = function(vHeadEndItem) { return new sap.ui.unified.ShellHeadItem(); };

/**
 * 
 * Removes an headItem from the aggregation named <code>headItems</code>.
 * @param {int | string | sap.ui.unified.ShellHeadItem} vHeadItem the headItem to remove or its index or id
 * @return {sap.ui.unified.ShellHeadItem} the removed headItem or null
 * @public
 * 
 */
sap.ui.unified.Shell.prototype.removeHeadItem = function(vHeadItem) { return new sap.ui.unified.ShellHeadItem(); };

/**
 * 
 * Removes an paneContent from the aggregation named <code>paneContent</code>.
 * @param {int | string | sap.ui.core.Control} vPaneContent the paneContent to remove or its index or id
 * @return {sap.ui.core.Control} the removed paneContent or null
 * @public
 * 
 */
sap.ui.unified.Shell.prototype.removePaneContent = function(vPaneContent) { return new sap.ui.core.Control(); };

/**
 * 
 * Setter for property <code>headerHiding</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {boolean} bHeaderHiding  new value for property <code>headerHiding</code>
 * @return {sap.ui.unified.Shell} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.unified.Shell.prototype.setHeaderHiding = function(bHeaderHiding) { return new sap.ui.unified.Shell(); };

/**
 * 
 * Setter for property <code>icon</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {sap.ui.core.URI} sIcon  new value for property <code>icon</code>
 * @return {sap.ui.unified.Shell} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.unified.Shell.prototype.setIcon = function(sIcon) { return new sap.ui.unified.Shell(); };

/**
 * 
 * Setter for the aggregated <code>search</code>.
 * @param oSearch {sap.ui.core.Control}
 * @return {sap.ui.unified.Shell} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.unified.Shell.prototype.setSearch = function(oSearch) { return new sap.ui.unified.Shell(); };

/**
 * 
 * Setter for property <code>showCurtain</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {boolean} bShowCurtain  new value for property <code>showCurtain</code>
 * @return {sap.ui.unified.Shell} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.unified.Shell.prototype.setShowCurtain = function(bShowCurtain) { return new sap.ui.unified.Shell(); };

/**
 * 
 * Setter for property <code>showCurtainPane</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {boolean} bShowCurtainPane  new value for property <code>showCurtainPane</code>
 * @return {sap.ui.unified.Shell} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.unified.Shell.prototype.setShowCurtainPane = function(bShowCurtainPane) { return new sap.ui.unified.Shell(); };

/**
 * 
 * Setter for property <code>showPane</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {boolean} bShowPane  new value for property <code>showPane</code>
 * @return {sap.ui.unified.Shell} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.unified.Shell.prototype.setShowPane = function(bShowPane) { return new sap.ui.unified.Shell(); };


// ---- sap.ui.unified.ShellHeadItem --------------------------------------------------------------------------

/**
 * 
 * Constructor for a new ShellHeadItem.
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
 * <li>{@link #getStartsSection startsSection} : boolean (default: false)</li>
 * <li>{@link #getSelected selected} : boolean (default: false)</li>
 * <li>{@link #getIcon icon} : sap.ui.core.URI</li></ul>
 * </li>
 * <li>Aggregations
 * <ul></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link sap.ui.unified.ShellHeadItem#event:press press} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
 * </li>
 * </ul> 
 * </p><p>
 * </p><p>
 * In addition, all settings applicable to the base type {@link sap.ui.core.Element#constructor sap.ui.core.Element}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * Header Action item of the Shell.
 * @extends sap.ui.core.Element
 * @version 1.15.1-SNAPSHOT
 * @constructor   
 * @public
 * @since 1.15.1
 * 
 */
sap.ui.unified.ShellHeadItem = function(sId,mSettings) {};
/**
 * 
 * Event is fired when the user presses the item. 
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 */
sap.ui.unified.ShellHeadItem.prototype.press = function(oControlEvent) { return null; };

/**
 * 
 * Attach event handler <code>fnFunction</code> to the 'press' event of this <code>sap.ui.unified.ShellHeadItem</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ui.unified.ShellHeadItem</code>.<br/> itself. 
 * </p><p>
 * Event is fired when the user presses the item. 
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener=this] Context object to call the event handler with. Defaults to this <code>sap.ui.unified.ShellHeadItem</code>.<br/> itself.
 * @return {sap.ui.unified.ShellHeadItem} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.unified.ShellHeadItem.prototype.attachPress = function(oData,fnFunction,oListener) { return new sap.ui.unified.ShellHeadItem(); };

/**
 * 
 * Detach event handler <code>fnFunction</code> from the 'press' event of this <code>sap.ui.unified.ShellHeadItem</code>.<br/>
 * </p><p>
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.unified.ShellHeadItem} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.unified.ShellHeadItem.prototype.detachPress = function(fnFunction,oListener) { return new sap.ui.unified.ShellHeadItem(); };

/**
 * 
 * Creates a new subclass of class sap.ui.unified.ShellHeadItem with name <code>sClassName</code> 
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
sap.ui.unified.ShellHeadItem.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * 
 * Fire event press to attached listeners.
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.unified.ShellHeadItem} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.ui.unified.ShellHeadItem.prototype.firePress = function(mArguments) { return new sap.ui.unified.ShellHeadItem(); };

/**
 * 
 * Getter for property <code>icon</code>.
 * The icon of the item, either defined in the sap.ui.core.IconPool or an URI to a custom image. An icon must be set.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {sap.ui.core.URI} the value of property <code>icon</code>
 * @public
 * 
 */
sap.ui.unified.ShellHeadItem.prototype.getIcon = function() { return new sap.ui.core.URI(); };

/**
 * 
 * Getter for property <code>selected</code>.
 * If set to true, the item gets a special design.
 * </p><p>
 * Default value is <code>false</code>
 * @return {boolean} the value of property <code>selected</code>
 * @public
 * 
 */
sap.ui.unified.ShellHeadItem.prototype.getSelected = function() { return false; };

/**
 * 
 * Getter for property <code>startsSection</code>.
 * If set to true, a divider is displayed before the item.
 * </p><p>
 * Default value is <code>false</code>
 * @return {boolean} the value of property <code>startsSection</code>
 * @public
 * 
 */
sap.ui.unified.ShellHeadItem.prototype.getStartsSection = function() { return false; };

/**
 * 
 * Setter for property <code>icon</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {sap.ui.core.URI} sIcon  new value for property <code>icon</code>
 * @return {sap.ui.unified.ShellHeadItem} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.unified.ShellHeadItem.prototype.setIcon = function(sIcon) { return new sap.ui.unified.ShellHeadItem(); };

/**
 * 
 * Setter for property <code>selected</code>.
 * </p><p>
 * Default value is <code>false</code> 
 * @param {boolean} bSelected  new value for property <code>selected</code>
 * @return {sap.ui.unified.ShellHeadItem} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.unified.ShellHeadItem.prototype.setSelected = function(bSelected) { return new sap.ui.unified.ShellHeadItem(); };

/**
 * 
 * Setter for property <code>startsSection</code>.
 * </p><p>
 * Default value is <code>false</code> 
 * @param {boolean} bStartsSection  new value for property <code>startsSection</code>
 * @return {sap.ui.unified.ShellHeadItem} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.unified.ShellHeadItem.prototype.setStartsSection = function(bStartsSection) { return new sap.ui.unified.ShellHeadItem(); };


// ---- sap.ui.unified.SplitContainer --------------------------------------------------------------------------

/**
 * 
 * Constructor for a new SplitContainer.
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
 * <li>{@link #getShowSecondaryContent showSecondaryContent} : boolean</li>
 * <li>{@link #getSecondaryContentWidth secondaryContentWidth} : sap.ui.core.CSSSize (default: '250px')</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getContent content} : sap.ui.core.Control[]</li>
 * <li>{@link #getSecondaryContent secondaryContent} : sap.ui.core.Control[]</li></ul>
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
 * Provides a main content and a secondary content area
 * @extends sap.ui.core.Control
 * @version 1.15.1-SNAPSHOT
 * @constructor   
 * @public
 * @since 1.15.0
 * @experimental Since version 1.15.0. 
 * API is not yet finished and might change completely
 * 
 */
sap.ui.unified.SplitContainer = function(sId,mSettings) {};
/**
 * 
 * Adds some content <code>oContent</code> 
 * to the aggregation named <code>content</code>.
 * @param {sap.ui.core.Control}
 *            oContent the content to add; if empty, nothing is inserted
 * @return {sap.ui.unified.SplitContainer} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.unified.SplitContainer.prototype.addContent = function(oContent) { return new sap.ui.unified.SplitContainer(); };

/**
 * 
 * Adds some secondaryContent <code>oSecondaryContent</code> 
 * to the aggregation named <code>secondaryContent</code>.
 * @param {sap.ui.core.Control}
 *            oSecondaryContent the secondaryContent to add; if empty, nothing is inserted
 * @return {sap.ui.unified.SplitContainer} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.unified.SplitContainer.prototype.addSecondaryContent = function(oSecondaryContent) { return new sap.ui.unified.SplitContainer(); };

/**
 * 
 * Destroys all the content in the aggregation 
 * named <code>content</code>.
 * @return {sap.ui.unified.SplitContainer} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.unified.SplitContainer.prototype.destroyContent = function() { return new sap.ui.unified.SplitContainer(); };

/**
 * 
 * Destroys all the secondaryContent in the aggregation 
 * named <code>secondaryContent</code>.
 * @return {sap.ui.unified.SplitContainer} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.unified.SplitContainer.prototype.destroySecondaryContent = function() { return new sap.ui.unified.SplitContainer(); };

/**
 * 
 * Creates a new subclass of class sap.ui.unified.SplitContainer with name <code>sClassName</code> 
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
sap.ui.unified.SplitContainer.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * 
 * Getter for aggregation <code>content</code>.<br/>
 * The content to appear in the main area.
 * @return {sap.ui.core.Control[]}
 * @public
 * 
 */
sap.ui.unified.SplitContainer.prototype.getContent = function() { return new Array(); };

/**
 * 
 * Getter for aggregation <code>secondaryContent</code>.<br/>
 * The content to appear in the secondary area.
 * @return {sap.ui.core.Control[]}
 * @public
 * 
 */
sap.ui.unified.SplitContainer.prototype.getSecondaryContent = function() { return new Array(); };

/**
 * 
 * Getter for property <code>secondaryContentWidth</code>.
 * The width if the secondary content. The height is always 100%.
 * </p><p>
 * Default value is <code>250px</code>
 * @return {sap.ui.core.CSSSize} the value of property <code>secondaryContentWidth</code>
 * @public
 * 
 */
sap.ui.unified.SplitContainer.prototype.getSecondaryContentWidth = function() { return new sap.ui.core.CSSSize(); };

/**
 * 
 * Getter for property <code>showSecondaryContent</code>.
 * Shows / Hides the secondary area.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {boolean} the value of property <code>showSecondaryContent</code>
 * @public
 * 
 */
sap.ui.unified.SplitContainer.prototype.getShowSecondaryContent = function() { return false; };

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
sap.ui.unified.SplitContainer.prototype.indexOfContent = function(oContent) { return 0; };

/**
 * 
 * Checks for the provided <code>sap.ui.core.Control</code> in the aggregation named <code>secondaryContent</code> 
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.core.Control}
 *            oSecondaryContent the secondaryContent whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * 
 */
sap.ui.unified.SplitContainer.prototype.indexOfSecondaryContent = function(oSecondaryContent) { return 0; };

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
 * @return {sap.ui.unified.SplitContainer} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.unified.SplitContainer.prototype.insertContent = function(oContent,iIndex) { return new sap.ui.unified.SplitContainer(); };

/**
 * 
 * Inserts a secondaryContent into the aggregation named <code>secondaryContent</code>.
 * @param {sap.ui.core.Control}
 *          oSecondaryContent the secondaryContent to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the secondaryContent should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the secondaryContent is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the secondaryContent is inserted at 
 *             the last position        
 * @return {sap.ui.unified.SplitContainer} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.unified.SplitContainer.prototype.insertSecondaryContent = function(oSecondaryContent,iIndex) { return new sap.ui.unified.SplitContainer(); };

/**
 * 
 * Removes all the controls in the aggregation named <code>content</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.core.Control[]} an array of the removed elements (might be empty)
 * @public
 * 
 */
sap.ui.unified.SplitContainer.prototype.removeAllContent = function() { return new Array(); };

/**
 * 
 * Removes all the controls in the aggregation named <code>secondaryContent</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.core.Control[]} an array of the removed elements (might be empty)
 * @public
 * 
 */
sap.ui.unified.SplitContainer.prototype.removeAllSecondaryContent = function() { return new Array(); };

/**
 * 
 * Removes an content from the aggregation named <code>content</code>.
 * @param {int | string | sap.ui.core.Control} vContent the content to remove or its index or id
 * @return {sap.ui.core.Control} the removed content or null
 * @public
 * 
 */
sap.ui.unified.SplitContainer.prototype.removeContent = function(vContent) { return new sap.ui.core.Control(); };

/**
 * 
 * Removes an secondaryContent from the aggregation named <code>secondaryContent</code>.
 * @param {int | string | sap.ui.core.Control} vSecondaryContent the secondaryContent to remove or its index or id
 * @return {sap.ui.core.Control} the removed secondaryContent or null
 * @public
 * 
 */
sap.ui.unified.SplitContainer.prototype.removeSecondaryContent = function(vSecondaryContent) { return new sap.ui.core.Control(); };

/**
 * 
 * Setter for property <code>secondaryContentWidth</code>.
 * </p><p>
 * Default value is <code>250px</code> 
 * @param {sap.ui.core.CSSSize} sSecondaryContentWidth  new value for property <code>secondaryContentWidth</code>
 * @return {sap.ui.unified.SplitContainer} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.unified.SplitContainer.prototype.setSecondaryContentWidth = function(sSecondaryContentWidth) { return new sap.ui.unified.SplitContainer(); };

/**
 * 
 * Setter for property <code>showSecondaryContent</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {boolean} bShowSecondaryContent  new value for property <code>showSecondaryContent</code>
 * @return {sap.ui.unified.SplitContainer} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.unified.SplitContainer.prototype.setShowSecondaryContent = function(bShowSecondaryContent) { return new sap.ui.unified.SplitContainer(); };


// ---- sap.ui.unified.UShell --------------------------------------------------------------------------

/**
 * 
 * Constructor for a new UShell.
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
 * In addition, all settings applicable to the base type {@link sap.ui.unified.Shell#constructor sap.ui.unified.Shell}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * Do not use.
 * @extends sap.ui.unified.Shell
 * @version 1.15.1-SNAPSHOT
 * @constructor   
 * @public
 * @since 1.15.0
 * @deprecated Since version 1.15.1. 
 * Obsolete. Use control sap.ui.unified.Shell instead. This control will be removed in a future version.
 * 
 */
sap.ui.unified.UShell = function(sId,mSettings) {};
/**
 * 
 * Creates a new subclass of class sap.ui.unified.UShell with name <code>sClassName</code> 
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
sap.ui.unified.UShell.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };


// ---- sap.ui.unified.UShellHeadItem --------------------------------------------------------------------------

/**
 * 
 * Constructor for a new UShellHeadItem.
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
 * In addition, all settings applicable to the base type {@link sap.ui.unified.ShellHeadItem#constructor sap.ui.unified.ShellHeadItem}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * Do not use.
 * @extends sap.ui.unified.ShellHeadItem
 * @version 1.15.1-SNAPSHOT
 * @constructor   
 * @public
 * @since 1.15.0
 * @deprecated Since version 1.15.1. 
 * Obsolete. Use element sap.ui.unified.ShellHeadItem instead. This element will be removed in a future version.
 * 
 */
sap.ui.unified.UShellHeadItem = function(sId,mSettings) {};
/**
 * 
 * Creates a new subclass of class sap.ui.unified.UShellHeadItem with name <code>sClassName</code> 
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
sap.ui.unified.UShellHeadItem.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

// ---- static fields of namespaces ---------------------------------------------------------------------

// ---- sap.ui.unified.ContentSwitcherAnimation --------------------------------------------------------------------------

/**
 * 
 * Content is faded (opacity change). 
 * @public
 * @memberOf sap.ui.unified.ContentSwitcherAnimation
 */
sap.ui.unified.ContentSwitcherAnimation.Fade = null;

/**
 * 
 * No animation. Content is switched instantly. 
 * @public
 * @memberOf sap.ui.unified.ContentSwitcherAnimation
 */
sap.ui.unified.ContentSwitcherAnimation.None = null;

/**
 * 
 * The new content rotates in. (Just like one of those old newspaper-animations.) 
 * @public
 * @memberOf sap.ui.unified.ContentSwitcherAnimation
 */
sap.ui.unified.ContentSwitcherAnimation.Rotate = null;

/**
 * 
 * The new content slides in from the left while the old content slides out to the left at the same time. 
 * @public
 * @memberOf sap.ui.unified.ContentSwitcherAnimation
 */
sap.ui.unified.ContentSwitcherAnimation.SlideOver = null;

/**
 * 
 * The new slides in from the left (to the right). 
 * @public
 * @memberOf sap.ui.unified.ContentSwitcherAnimation
 */
sap.ui.unified.ContentSwitcherAnimation.SlideRight = null;

/**
 * 
 * The new content is "zoomed in" from the center and grows to fill the full content area. 
 * @public
 * @memberOf sap.ui.unified.ContentSwitcherAnimation
 */
sap.ui.unified.ContentSwitcherAnimation.ZoomIn = null;

/**
 * 
 * The old content is "zoomed out", i.e. shrinks to a point at the center of the content area. 
 * @public
 * @memberOf sap.ui.unified.ContentSwitcherAnimation
 */
sap.ui.unified.ContentSwitcherAnimation.ZoomOut = null;

