
// ---- _global_ --------------------------------------------------------------------------


// ---- sap --------------------------------------------------------------------------


// ---- sap.ui --------------------------------------------------------------------------


// ---- sap.ui.ux3 --------------------------------------------------------------------------

// dummy function to make Eclipse aware of namespace
sap.ui.ux3.toString = function() { return ""; };

// ---- sap.ui.ux3.ActionBar --------------------------------------------------------------------------

/**
 * 
 * Constructor for a new ActionBar.
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
 * <li>{@link #getFollowState followState} : sap.ui.ux3.FollowActionState (default: sap.ui.ux3.FollowActionState.Default)</li>
 * <li>{@link #getFlagState flagState} : boolean</li>
 * <li>{@link #getFavoriteState favoriteState} : boolean</li>
 * <li>{@link #getThingIconURI thingIconURI} : sap.ui.core.URI</li>
 * <li>{@link #getAlwaysShowMoreMenu alwaysShowMoreMenu} : boolean (default: true)</li>
 * <li>{@link #getShowUpdate showUpdate} : boolean (default: true)</li>
 * <li>{@link #getShowFollow showFollow} : boolean (default: true)</li>
 * <li>{@link #getShowFlag showFlag} : boolean (default: true)</li>
 * <li>{@link #getShowFavorite showFavorite} : boolean (default: true)</li>
 * <li>{@link #getShowOpen showOpen} : boolean (default: true)</li>
 * <li>{@link #getDividerWidth dividerWidth} : sap.ui.core.CSSSize</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getBusinessActions businessActions} : sap.ui.ux3.ThingAction[]</li></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link sap.ui.ux3.ActionBar#event:actionSelected actionSelected} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.ui.ux3.ActionBar#event:feedSubmit feedSubmit} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
 * </li>
 * </ul> 
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * A special toolbar with predefined social actions which can be shown as needed. These are: Create an update (Feed), Follow, Mark for Follow Up, Mark as Favorite and Open Thing.
 * </p><p>
 * In addition business actions (ThingAction instances) can be added which are either displayed as MenuItems of the 'More' menu button or as individual tool bar buttons.
 * </p><p>
 * When using this control, please be aware that it fulfills rather specific requirements: it has been designed for and is used within composite controls QuickView and ThingInspector.
 * @extends sap.ui.core.Control
 * @version 1.15.1-SNAPSHOT
 * @constructor   
 * @public
 * 
 */
sap.ui.ux3.ActionBar = function(sId,mSettings) {};
/**
 * 
 * Fired when any of the social action’s toolbar buttons except ‘Update’ or any of the business action’s menu items resp. buttons is pressed. The selected action can be identified by its id and newState (the latter if applicable only)
 * ‘Follow’ button + menu: id: follow, newState: Follow/Hold/Default
 * ‘Mark for follow up’ button: id: flag, newState: true/false
 * ‘Favorite’ button: id: favorite, newState: true/false
 * ‘Open Thing Inspector’ button id: open
 * Business Actions: id: the ThingAction id
 * </p><p>
 * For ‘Update’, please refer to event ‘feedSubmit’ 
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {string} oControlEvent.getParameters.id Id of selected ThingAction
 * @param {sap.ui.ux3.ThingAction} oControlEvent.getParameters.action Selected ThingAction
 * @param {string} oControlEvent.getParameters.newState New State of the selected action.Only filled if the respective action maintains a state property, for example 'FollowUp' or 'Favorite'
 * @public
 */
sap.ui.ux3.ActionBar.prototype.actionSelected = function(oControlEvent) { return null; };

/**
 * 
 * Fired when a new feed entry is submitted. 
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {string} oControlEvent.getParameters.text Feed text
 * @public
 */
sap.ui.ux3.ActionBar.prototype.feedSubmit = function(oControlEvent) { return null; };

/**
 * 
 * Attach event handler <code>fnFunction</code> to the 'actionSelected' event of this <code>sap.ui.ux3.ActionBar</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ui.ux3.ActionBar</code>.<br/> itself. 
 * </p><p>
 * Fired when any of the social action’s toolbar buttons except ‘Update’ or any of the business action’s menu items resp. buttons is pressed. The selected action can be identified by its id and newState (the latter if applicable only)
 * ‘Follow’ button + menu: id: follow, newState: Follow/Hold/Default
 * ‘Mark for follow up’ button: id: flag, newState: true/false
 * ‘Favorite’ button: id: favorite, newState: true/false
 * ‘Open Thing Inspector’ button id: open
 * Business Actions: id: the ThingAction id
 * </p><p>
 * For ‘Update’, please refer to event ‘feedSubmit’ 
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener=this] Context object to call the event handler with. Defaults to this <code>sap.ui.ux3.ActionBar</code>.<br/> itself.
 * @return {sap.ui.ux3.ActionBar} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.ActionBar.prototype.attachActionSelected = function(oData,fnFunction,oListener) { return new sap.ui.ux3.ActionBar(); };

/**
 * 
 * Attach event handler <code>fnFunction</code> to the 'feedSubmit' event of this <code>sap.ui.ux3.ActionBar</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ui.ux3.ActionBar</code>.<br/> itself. 
 * </p><p>
 * Fired when a new feed entry is submitted. 
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener=this] Context object to call the event handler with. Defaults to this <code>sap.ui.ux3.ActionBar</code>.<br/> itself.
 * @return {sap.ui.ux3.ActionBar} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.ActionBar.prototype.attachFeedSubmit = function(oData,fnFunction,oListener) { return new sap.ui.ux3.ActionBar(); };

/**
 * 
 * Detach event handler <code>fnFunction</code> from the 'actionSelected' event of this <code>sap.ui.ux3.ActionBar</code>.<br/>
 * </p><p>
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.ux3.ActionBar} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.ActionBar.prototype.detachActionSelected = function(fnFunction,oListener) { return new sap.ui.ux3.ActionBar(); };

/**
 * 
 * Detach event handler <code>fnFunction</code> from the 'feedSubmit' event of this <code>sap.ui.ux3.ActionBar</code>.<br/>
 * </p><p>
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.ux3.ActionBar} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.ActionBar.prototype.detachFeedSubmit = function(fnFunction,oListener) { return new sap.ui.ux3.ActionBar(); };

/**
 * 
 * Creates a new subclass of class sap.ui.ux3.ActionBar with name <code>sClassName</code> 
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
sap.ui.ux3.ActionBar.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * 
 * Fire event actionSelected to attached listeners.
 * </p><p>
 * Expects following event parameters:
 * <ul>
 * <li>'id' of type <code>string</code> Id of selected ThingAction</li>
 * <li>'action' of type <code>sap.ui.ux3.ThingAction</code> Selected ThingAction</li>
 * <li>'newState' of type <code>string</code> New State of the selected action.Only filled if the respective action maintains a state property, for example 'FollowUp' or 'Favorite'</li>
 * </ul>
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.ux3.ActionBar} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.ui.ux3.ActionBar.prototype.fireActionSelected = function(mArguments) { return new sap.ui.ux3.ActionBar(); };

/**
 * 
 * Fire event feedSubmit to attached listeners.
 * </p><p>
 * Expects following event parameters:
 * <ul>
 * <li>'text' of type <code>string</code> Feed text</li>
 * </ul>
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.ux3.ActionBar} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.ui.ux3.ActionBar.prototype.fireFeedSubmit = function(mArguments) { return new sap.ui.ux3.ActionBar(); };

/**
 * 
 * Getter for property <code>alwaysShowMoreMenu</code>.
 * If true, business actions are rendered as menu items of the 'More' menu button. Otherwise, 'More' menu button is only displayed for overflow and business actions are rendered as inidividual buttons.
 * </p><p>
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>alwaysShowMoreMenu</code>
 * @public
 * 
 */
sap.ui.ux3.ActionBar.prototype.getAlwaysShowMoreMenu = function() { return false; };

/**
 * 
 * Getter for aggregation <code>businessActions</code>.<br/>
 * Displayed on the actionBar's right hand-side, either as menu item under 'More' or as individual buttons
 * @return {sap.ui.ux3.ThingAction[]}
 * @public
 * 
 */
sap.ui.ux3.ActionBar.prototype.getBusinessActions = function() { return new Array(); };

/**
 * 
 * Getter for property <code>dividerWidth</code>.
 * The minimum width of ActionBar's the social actions part: business action controls have to be rendered outside this area
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {sap.ui.core.CSSSize} the value of property <code>dividerWidth</code>
 * @public
 * 
 */
sap.ui.ux3.ActionBar.prototype.getDividerWidth = function() { return new sap.ui.core.CSSSize(); };

/**
 * 
 * Getter for property <code>favoriteState</code>.
 * Indicates whether “Favorite” is active
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {boolean} the value of property <code>favoriteState</code>
 * @public
 * 
 */
sap.ui.ux3.ActionBar.prototype.getFavoriteState = function() { return false; };

/**
 * 
 * Getter for property <code>flagState</code>.
 * Indicates whether “Mark for Follow Up” is active
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {boolean} the value of property <code>flagState</code>
 * @public
 * 
 */
sap.ui.ux3.ActionBar.prototype.getFlagState = function() { return false; };

/**
 * 
 * Getter for property <code>followState</code>.
 * Keeps track of the actionBars Follow/Unfollow button’s state. Its value is one of
 * - FollowActionState.Default
 * - FollowActionState.Follow
 * - FollowActionState.Hold
 * </p><p>
 * </p><p>
 * Default value is <code>Default</code>
 * @return {sap.ui.ux3.FollowActionState} the value of property <code>followState</code>
 * @public
 * 
 */
sap.ui.ux3.ActionBar.prototype.getFollowState = function() { return new sap.ui.ux3.FollowActionState(); };

/**
 * 
 * Getter for property <code>showFavorite</code>.
 * Indicates whether social action “Favorite” is shown, default is ‘true’
 * </p><p>
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>showFavorite</code>
 * @public
 * 
 */
sap.ui.ux3.ActionBar.prototype.getShowFavorite = function() { return false; };

/**
 * 
 * Getter for property <code>showFlag</code>.
 * Indicates whether social action “Mark for Follow Up” is shown, default is ‘true’
 * </p><p>
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>showFlag</code>
 * @public
 * 
 */
sap.ui.ux3.ActionBar.prototype.getShowFlag = function() { return false; };

/**
 * 
 * Getter for property <code>showFollow</code>.
 * Indicates whether social action “Follow” is shown, default is ‘true’
 * </p><p>
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>showFollow</code>
 * @public
 * 
 */
sap.ui.ux3.ActionBar.prototype.getShowFollow = function() { return false; };

/**
 * 
 * Getter for property <code>showOpen</code>.
 * Indicates whether social action “Open” is shown, default is ‘true’
 * </p><p>
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>showOpen</code>
 * @public
 * 
 */
sap.ui.ux3.ActionBar.prototype.getShowOpen = function() { return false; };

/**
 * 
 * Getter for property <code>showUpdate</code>.
 * Indicates whether social action “Update” is shown, default is ‘true’
 * </p><p>
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>showUpdate</code>
 * @public
 * 
 */
sap.ui.ux3.ActionBar.prototype.getShowUpdate = function() { return false; };

/**
 * 
 * Getter for property <code>thingIconURI</code>.
 * The thing icon uri. Icon will be displayed in Feeder
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {sap.ui.core.URI} the value of property <code>thingIconURI</code>
 * @public
 * 
 */
sap.ui.ux3.ActionBar.prototype.getThingIconURI = function() { return new sap.ui.core.URI(); };

/**
 * 
 * Checks for the provided <code>sap.ui.ux3.ThingAction</code> in the aggregation named <code>businessActions</code> 
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.ux3.ThingAction}
 *            oBusinessAction the businessAction whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * 
 */
sap.ui.ux3.ActionBar.prototype.indexOfBusinessAction = function(oBusinessAction) { return 0; };

/**
 * 
 * Checks whether the control is still valid (is in the DOM). ActionBar
 * instance is rendered if and only if 'isActive' returns 'true'. This
 * check is called implicitely by the rendere, MUST not be removed.
 * @return {boolean} True if the control is still in the active DOM
 * @protected
 */
sap.ui.ux3.ActionBar.prototype.isActive = function() { return false; };

/**
 * 
 * Setter for property <code>favoriteState</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {boolean} bFavoriteState  new value for property <code>favoriteState</code>
 * @return {sap.ui.ux3.ActionBar} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.ActionBar.prototype.setFavoriteState = function(bFavoriteState) { return new sap.ui.ux3.ActionBar(); };

/**
 * 
 * Setter for property <code>flagState</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {boolean} bFlagState  new value for property <code>flagState</code>
 * @return {sap.ui.ux3.ActionBar} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.ActionBar.prototype.setFlagState = function(bFlagState) { return new sap.ui.ux3.ActionBar(); };

/**
 * 
 * Setter for property <code>thingIconURI</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {sap.ui.core.URI} sThingIconURI  new value for property <code>thingIconURI</code>
 * @return {sap.ui.ux3.ActionBar} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.ActionBar.prototype.setThingIconURI = function(sThingIconURI) { return new sap.ui.ux3.ActionBar(); };


// ---- sap.ui.ux3.ActionBarSocialActions --------------------------------------------------------------------------

// dummy function to make Eclipse aware of namespace
sap.ui.ux3.ActionBarSocialActions.toString = function() { return ""; };

// ---- sap.ui.ux3.Collection --------------------------------------------------------------------------

/**
 * 
 * Constructor for a new Collection.
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
 * <li>{@link #getTitle title} : string</li>
 * <li>{@link #getEditable editable} : boolean (default: false)</li>
 * <li>{@link #getMultiSelection multiSelection} : boolean (default: false)</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getItems items} : sap.ui.core.Item[]</li></ul>
 * </li>
 * <li>Associations
 * <ul>
 * <li>{@link #getSelectedItems selectedItems} : string | sap.ui.core.Item</li></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link sap.ui.ux3.Collection#event:selectionChanged selectionChanged} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.ui.ux3.Collection#event:propertyChanged propertyChanged} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
 * </li>
 * </ul> 
 * </p><p>
 * </p><p>
 * In addition, all settings applicable to the base type {@link sap.ui.core.Element#constructor sap.ui.core.Element}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * Collection
 * @extends sap.ui.core.Element
 * @version 1.15.1-SNAPSHOT
 * @constructor   
 * @public
 * @since 1.9.0
 * 
 */
sap.ui.ux3.Collection = function(sId,mSettings) {};
/**
 * 
 * Fires if a property has changed, and the collection inspector needs to do something after that 
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 */
sap.ui.ux3.Collection.prototype.propertyChanged = function(oControlEvent) { return null; };

/**
 * 
 * Fired when ever the selected items changer 
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 */
sap.ui.ux3.Collection.prototype.selectionChanged = function(oControlEvent) { return null; };

/**
 * 
 * Adds some item <code>oItem</code> 
 * to the aggregation named <code>items</code>.
 * @param {sap.ui.core.Item}
 *            oItem the item to add; if empty, nothing is inserted
 * @return {sap.ui.ux3.Collection} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.Collection.prototype.addItem = function(oItem) { return new sap.ui.ux3.Collection(); };

/**
 * 
 * @param {string | sap.ui.core.Item} vSelectedItem
 *    Id of a selectedItem which becomes an additional target of this <code>selectedItems</code> association.
 *    Alternatively, a selectedItem instance may be given. 
 * @return {sap.ui.ux3.Collection} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.Collection.prototype.addSelectedItem = function(vSelectedItem) { return new sap.ui.ux3.Collection(); };

/**
 * 
 * Attach event handler <code>fnFunction</code> to the 'propertyChanged' event of this <code>sap.ui.ux3.Collection</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ui.ux3.Collection</code>.<br/> itself. 
 * </p><p>
 * Fires if a property has changed, and the collection inspector needs to do something after that 
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener=this] Context object to call the event handler with. Defaults to this <code>sap.ui.ux3.Collection</code>.<br/> itself.
 * @return {sap.ui.ux3.Collection} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.Collection.prototype.attachPropertyChanged = function(oData,fnFunction,oListener) { return new sap.ui.ux3.Collection(); };

/**
 * 
 * Attach event handler <code>fnFunction</code> to the 'selectionChanged' event of this <code>sap.ui.ux3.Collection</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ui.ux3.Collection</code>.<br/> itself. 
 * </p><p>
 * Fired when ever the selected items changer 
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener=this] Context object to call the event handler with. Defaults to this <code>sap.ui.ux3.Collection</code>.<br/> itself.
 * @return {sap.ui.ux3.Collection} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.Collection.prototype.attachSelectionChanged = function(oData,fnFunction,oListener) { return new sap.ui.ux3.Collection(); };

/**
 * 
 * Destroys all the items in the aggregation 
 * named <code>items</code>.
 * @return {sap.ui.ux3.Collection} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.Collection.prototype.destroyItems = function() { return new sap.ui.ux3.Collection(); };

/**
 * 
 * Detach event handler <code>fnFunction</code> from the 'propertyChanged' event of this <code>sap.ui.ux3.Collection</code>.<br/>
 * </p><p>
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.ux3.Collection} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.Collection.prototype.detachPropertyChanged = function(fnFunction,oListener) { return new sap.ui.ux3.Collection(); };

/**
 * 
 * Detach event handler <code>fnFunction</code> from the 'selectionChanged' event of this <code>sap.ui.ux3.Collection</code>.<br/>
 * </p><p>
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.ux3.Collection} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.Collection.prototype.detachSelectionChanged = function(fnFunction,oListener) { return new sap.ui.ux3.Collection(); };

/**
 * 
 * Creates a new subclass of class sap.ui.ux3.Collection with name <code>sClassName</code> 
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
sap.ui.ux3.Collection.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * 
 * Fire event propertyChanged to attached listeners.
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.ux3.Collection} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.ui.ux3.Collection.prototype.firePropertyChanged = function(mArguments) { return new sap.ui.ux3.Collection(); };

/**
 * 
 * Fire event selectionChanged to attached listeners.
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.ux3.Collection} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.ui.ux3.Collection.prototype.fireSelectionChanged = function(mArguments) { return new sap.ui.ux3.Collection(); };

/**
 * 
 * Getter for property <code>editable</code>.
 * If a collection is editable an edit button will be displayed below the list of items
 * </p><p>
 * Default value is <code>false</code>
 * @return {boolean} the value of property <code>editable</code>
 * @public
 * 
 */
sap.ui.ux3.Collection.prototype.getEditable = function() { return false; };

/**
 * 
 * Getter for aggregation <code>items</code>.<br/>
 * Items in the collection
 * @return {sap.ui.core.Item[]}
 * @public
 * 
 */
sap.ui.ux3.Collection.prototype.getItems = function() { return new Array(); };

/**
 * 
 * Getter for property <code>multiSelection</code>.
 * Allow multi selection of items in collection
 * </p><p>
 * Default value is <code>false</code>
 * @return {boolean} the value of property <code>multiSelection</code>
 * @public
 * 
 */
sap.ui.ux3.Collection.prototype.getMultiSelection = function() { return false; };

/**
 * 
 * Contains all items that are currently selected
 * @return {string[]}
 * @public
 * 
 */
sap.ui.ux3.Collection.prototype.getSelectedItems = function() { return new Array(); };

/**
 * 
 * Getter for property <code>title</code>.
 * Name for the collection
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {string} the value of property <code>title</code>
 * @public
 * 
 */
sap.ui.ux3.Collection.prototype.getTitle = function() { return ""; };

/**
 * 
 * Checks for the provided <code>sap.ui.core.Item</code> in the aggregation named <code>items</code> 
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.core.Item}
 *            oItem the item whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * 
 */
sap.ui.ux3.Collection.prototype.indexOfItem = function(oItem) { return 0; };

/**
 * 
 * Inserts a item into the aggregation named <code>items</code>.
 * @param {sap.ui.core.Item}
 *          oItem the item to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the item should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the item is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the item is inserted at 
 *             the last position        
 * @return {sap.ui.ux3.Collection} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.Collection.prototype.insertItem = function(oItem,iIndex) { return new sap.ui.ux3.Collection(); };

/**
 * 
 * Removes all the controls in the aggregation named <code>items</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.core.Item[]} an array of the removed elements (might be empty)
 * @public
 * 
 */
sap.ui.ux3.Collection.prototype.removeAllItems = function() { return new Array(); };

/**
 * 
 * @return {string[]} an array with the ids of the removed elements (might be empty)
 * @public
 * 
 */
sap.ui.ux3.Collection.prototype.removeAllSelectedItems = function() { return new Array(); };

/**
 * 
 * Removes an item from the aggregation named <code>items</code>.
 * @param {int | string | sap.ui.core.Item} vItem the item to remove or its index or id
 * @return {sap.ui.core.Item} the removed item or null
 * @public
 * 
 */
sap.ui.ux3.Collection.prototype.removeItem = function(vItem) { return new sap.ui.core.Item(); };

/**
 * 
 * @param {int | string | sap.ui.core.Item} vSelectedItem the selectedItem to remove or its index or id
 * @return {string} the id of the removed selectedItem or null
 * @public
 * 
 */
sap.ui.ux3.Collection.prototype.removeSelectedItem = function(vSelectedItem) { return ""; };

/**
 * 
 * Set editable
 * @public
 */
sap.ui.ux3.Collection.prototype.setEditable = function(bEditable) { return null; };

/**
 * 
 * Set multi selection for selection model
 * @public
 */
sap.ui.ux3.Collection.prototype.setMultiSelection = function(bMultiSelection) { return null; };

/**
 * 
 * Setter for property <code>title</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {string} sTitle  new value for property <code>title</code>
 * @return {sap.ui.ux3.Collection} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.Collection.prototype.setTitle = function(sTitle) { return new sap.ui.ux3.Collection(); };


// ---- sap.ui.ux3.CollectionInspector --------------------------------------------------------------------------

/**
 * 
 * Constructor for a new CollectionInspector.
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
 * <li>{@link #getSidebarVisible sidebarVisible} : boolean (default: true)</li>
 * <li>{@link #getFitParent fitParent} : boolean (default: true)</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getCollections collections} : sap.ui.ux3.Collection[]</li>
 * <li>{@link #getContent content} : sap.ui.core.Control[]</li></ul>
 * </li>
 * <li>Associations
 * <ul>
 * <li>{@link #getSelectedCollection selectedCollection} : string | sap.ui.ux3.Collection</li></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link sap.ui.ux3.CollectionInspector#event:collectionSelected collectionSelected} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.ui.ux3.CollectionInspector#event:itemSelectionChanged itemSelectionChanged} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.ui.ux3.CollectionInspector#event:editCollection editCollection} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
 * </li>
 * </ul> 
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * CollectionInspector
 * @extends sap.ui.core.Control
 * @version 1.15.1-SNAPSHOT
 * @constructor   
 * @public
 * @since 1.9.0
 * 
 */
sap.ui.ux3.CollectionInspector = function(sId,mSettings) {};
/**
 * 
 * Event is fired if user selects a collection 
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 */
sap.ui.ux3.CollectionInspector.prototype.collectionSelected = function(oControlEvent) { return null; };

/**
 * 
 * Fires when the edit button is clicked 
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 */
sap.ui.ux3.CollectionInspector.prototype.editCollection = function(oControlEvent) { return null; };

/**
 * 
 * Fires when an item in a collection is selected 
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 */
sap.ui.ux3.CollectionInspector.prototype.itemSelectionChanged = function(oControlEvent) { return null; };

/**
 * 
 * Adds some collection <code>oCollection</code> 
 * to the aggregation named <code>collections</code>.
 * @param {sap.ui.ux3.Collection}
 *            oCollection the collection to add; if empty, nothing is inserted
 * @return {sap.ui.ux3.CollectionInspector} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.CollectionInspector.prototype.addCollection = function(oCollection) { return new sap.ui.ux3.CollectionInspector(); };

/**
 * 
 * Adds some content <code>oContent</code> 
 * to the aggregation named <code>content</code>.
 * @param {sap.ui.core.Control}
 *            oContent the content to add; if empty, nothing is inserted
 * @return {sap.ui.ux3.CollectionInspector} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.CollectionInspector.prototype.addContent = function(oContent) { return new sap.ui.ux3.CollectionInspector(); };

/**
 * 
 * Attach event handler <code>fnFunction</code> to the 'collectionSelected' event of this <code>sap.ui.ux3.CollectionInspector</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ui.ux3.CollectionInspector</code>.<br/> itself. 
 * </p><p>
 * Event is fired if user selects a collection 
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener=this] Context object to call the event handler with. Defaults to this <code>sap.ui.ux3.CollectionInspector</code>.<br/> itself.
 * @return {sap.ui.ux3.CollectionInspector} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.CollectionInspector.prototype.attachCollectionSelected = function(oData,fnFunction,oListener) { return new sap.ui.ux3.CollectionInspector(); };

/**
 * 
 * Attach event handler <code>fnFunction</code> to the 'editCollection' event of this <code>sap.ui.ux3.CollectionInspector</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ui.ux3.CollectionInspector</code>.<br/> itself. 
 * </p><p>
 * Fires when the edit button is clicked 
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener=this] Context object to call the event handler with. Defaults to this <code>sap.ui.ux3.CollectionInspector</code>.<br/> itself.
 * @return {sap.ui.ux3.CollectionInspector} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.CollectionInspector.prototype.attachEditCollection = function(oData,fnFunction,oListener) { return new sap.ui.ux3.CollectionInspector(); };

/**
 * 
 * Attach event handler <code>fnFunction</code> to the 'itemSelectionChanged' event of this <code>sap.ui.ux3.CollectionInspector</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ui.ux3.CollectionInspector</code>.<br/> itself. 
 * </p><p>
 * Fires when an item in a collection is selected 
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener=this] Context object to call the event handler with. Defaults to this <code>sap.ui.ux3.CollectionInspector</code>.<br/> itself.
 * @return {sap.ui.ux3.CollectionInspector} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.CollectionInspector.prototype.attachItemSelectionChanged = function(oData,fnFunction,oListener) { return new sap.ui.ux3.CollectionInspector(); };

/**
 * 
 * Closes the siedebar
 * @public
 */
sap.ui.ux3.CollectionInspector.prototype.closeSidebar = function() { return null; };

/**
 * 
 * Destroys all the collections in the aggregation 
 * named <code>collections</code>.
 * @return {sap.ui.ux3.CollectionInspector} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.CollectionInspector.prototype.destroyCollections = function() { return new sap.ui.ux3.CollectionInspector(); };

/**
 * 
 * Destroys all the content in the aggregation 
 * named <code>content</code>.
 * @return {sap.ui.ux3.CollectionInspector} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.CollectionInspector.prototype.destroyContent = function() { return new sap.ui.ux3.CollectionInspector(); };

/**
 * 
 * Detach event handler <code>fnFunction</code> from the 'collectionSelected' event of this <code>sap.ui.ux3.CollectionInspector</code>.<br/>
 * </p><p>
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.ux3.CollectionInspector} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.CollectionInspector.prototype.detachCollectionSelected = function(fnFunction,oListener) { return new sap.ui.ux3.CollectionInspector(); };

/**
 * 
 * Detach event handler <code>fnFunction</code> from the 'editCollection' event of this <code>sap.ui.ux3.CollectionInspector</code>.<br/>
 * </p><p>
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.ux3.CollectionInspector} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.CollectionInspector.prototype.detachEditCollection = function(fnFunction,oListener) { return new sap.ui.ux3.CollectionInspector(); };

/**
 * 
 * Detach event handler <code>fnFunction</code> from the 'itemSelectionChanged' event of this <code>sap.ui.ux3.CollectionInspector</code>.<br/>
 * </p><p>
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.ux3.CollectionInspector} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.CollectionInspector.prototype.detachItemSelectionChanged = function(fnFunction,oListener) { return new sap.ui.ux3.CollectionInspector(); };

/**
 * 
 * Creates a new subclass of class sap.ui.ux3.CollectionInspector with name <code>sClassName</code> 
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
sap.ui.ux3.CollectionInspector.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * 
 * Fire event collectionSelected to attached listeners.
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.ux3.CollectionInspector} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.ui.ux3.CollectionInspector.prototype.fireCollectionSelected = function(mArguments) { return new sap.ui.ux3.CollectionInspector(); };

/**
 * 
 * Fire event editCollection to attached listeners.
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.ux3.CollectionInspector} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.ui.ux3.CollectionInspector.prototype.fireEditCollection = function(mArguments) { return new sap.ui.ux3.CollectionInspector(); };

/**
 * 
 * Fire event itemSelectionChanged to attached listeners.
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.ux3.CollectionInspector} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.ui.ux3.CollectionInspector.prototype.fireItemSelectionChanged = function(mArguments) { return new sap.ui.ux3.CollectionInspector(); };

/**
 * 
 * Getter for aggregation <code>collections</code>.<br/>
 * Collections which are displayed in the COllectionInspector
 * @return {sap.ui.ux3.Collection[]}
 * @public
 * 
 */
sap.ui.ux3.CollectionInspector.prototype.getCollections = function() { return new Array(); };

/**
 * 
 * Getter for aggregation <code>content</code>.<br/>
 * All controls that are currently displayed
 * @return {sap.ui.core.Control[]}
 * @public
 * 
 */
sap.ui.ux3.CollectionInspector.prototype.getContent = function() { return new Array(); };

/**
 * 
 * Return the edit button
 * @public
 */
sap.ui.ux3.CollectionInspector.prototype.getEditButton = function() { return null; };

/**
 * 
 * Getter for property <code>fitParent</code>.
 * If set to true, control will fit parents content area
 * </p><p>
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>fitParent</code>
 * @public
 * 
 */
sap.ui.ux3.CollectionInspector.prototype.getFitParent = function() { return false; };

/**
 * 
 * Collection which is currently selected
 * @return {string} Id of the element which is the current target of the <code>selectedCollection</code> association, or null
 * @public
 * 
 */
sap.ui.ux3.CollectionInspector.prototype.getSelectedCollection = function() { return ""; };

/**
 * 
 * Getter for property <code>sidebarVisible</code>.
 * Defines if the list of collection items is visible on the left
 * </p><p>
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>sidebarVisible</code>
 * @public
 * 
 */
sap.ui.ux3.CollectionInspector.prototype.getSidebarVisible = function() { return false; };

/**
 * 
 * Checks for the provided <code>sap.ui.ux3.Collection</code> in the aggregation named <code>collections</code> 
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.ux3.Collection}
 *            oCollection the collection whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * 
 */
sap.ui.ux3.CollectionInspector.prototype.indexOfCollection = function(oCollection) { return 0; };

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
sap.ui.ux3.CollectionInspector.prototype.indexOfContent = function(oContent) { return 0; };

/**
 * 
 * Inserts a collection into the aggregation named <code>collections</code>.
 * @param {sap.ui.ux3.Collection}
 *          oCollection the collection to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the collection should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the collection is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the collection is inserted at 
 *             the last position        
 * @return {sap.ui.ux3.CollectionInspector} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.CollectionInspector.prototype.insertCollection = function(oCollection,iIndex) { return new sap.ui.ux3.CollectionInspector(); };

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
 * @return {sap.ui.ux3.CollectionInspector} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.CollectionInspector.prototype.insertContent = function(oContent,iIndex) { return new sap.ui.ux3.CollectionInspector(); };

/**
 * 
 * Opens the sidebar
 * @public
 */
sap.ui.ux3.CollectionInspector.prototype.openSidebar = function() { return null; };

/**
 * 
 * Removes all the controls in the aggregation named <code>collections</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.ux3.Collection[]} an array of the removed elements (might be empty)
 * @public
 * 
 */
sap.ui.ux3.CollectionInspector.prototype.removeAllCollections = function() { return new Array(); };

/**
 * 
 * Removes all the controls in the aggregation named <code>content</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.core.Control[]} an array of the removed elements (might be empty)
 * @public
 * 
 */
sap.ui.ux3.CollectionInspector.prototype.removeAllContent = function() { return new Array(); };

/**
 * 
 * Removes an collection from the aggregation named <code>collections</code>.
 * @param {int | string | sap.ui.ux3.Collection} vCollection the collection to remove or its index or id
 * @return {sap.ui.ux3.Collection} the removed collection or null
 * @public
 * 
 */
sap.ui.ux3.CollectionInspector.prototype.removeCollection = function(vCollection) { return new sap.ui.ux3.Collection(); };

/**
 * 
 * Removes an content from the aggregation named <code>content</code>.
 * @param {int | string | sap.ui.core.Control} vContent the content to remove or its index or id
 * @return {sap.ui.core.Control} the removed content or null
 * @public
 * 
 */
sap.ui.ux3.CollectionInspector.prototype.removeContent = function(vContent) { return new sap.ui.core.Control(); };

/**
 * 
 * Setter for property <code>fitParent</code>.
 * </p><p>
 * Default value is <code>true</code> 
 * @param {boolean} bFitParent  new value for property <code>fitParent</code>
 * @return {sap.ui.ux3.CollectionInspector} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.CollectionInspector.prototype.setFitParent = function(bFitParent) { return new sap.ui.ux3.CollectionInspector(); };

/**
 * 
 * Collection which is currently selected
 * @param {string | sap.ui.ux3.Collection} vSelectedCollection 
 *    Id of an element which becomes the new target of this <code>selectedCollection</code> association.
 *    Alternatively, an element instance may be given.
 * @return {sap.ui.ux3.CollectionInspector} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.CollectionInspector.prototype.setSelectedCollection = function(vSelectedCollection) { return new sap.ui.ux3.CollectionInspector(); };

/**
 * 
 * Setter for property <code>sidebarVisible</code>.
 * </p><p>
 * Default value is <code>true</code> 
 * @param {boolean} bSidebarVisible  new value for property <code>sidebarVisible</code>
 * @return {sap.ui.ux3.CollectionInspector} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.CollectionInspector.prototype.setSidebarVisible = function(bSidebarVisible) { return new sap.ui.ux3.CollectionInspector(); };


// ---- sap.ui.ux3.DataSet --------------------------------------------------------------------------

/**
 * 
 * Constructor for a new DataSet.
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
 * <li>{@link #getShowToolbar showToolbar} : boolean (default: true)</li>
 * <li>{@link #getShowFilter showFilter} : boolean (default: true)</li>
 * <li>{@link #getShowSearchField showSearchField} : boolean (default: true)</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getItems items} : sap.ui.ux3.DataSetItem[]</li>
 * <li>{@link #getViews views} : sap.ui.ux3.DataSetView[]</li>
 * <li>{@link #getFilter filter} : sap.ui.core.Control[]</li></ul>
 * </li>
 * <li>Associations
 * <ul>
 * <li>{@link #getSelectedView selectedView} : string | sap.ui.ux3.DataSetView</li></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link sap.ui.ux3.DataSet#event:selectionChanged selectionChanged} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.ui.ux3.DataSet#event:search search} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
 * </li>
 * </ul> 
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * DataSet
 * @extends sap.ui.core.Control
 * @version 1.15.1-SNAPSHOT
 * @constructor   
 * @public
 * 
 */
sap.ui.ux3.DataSet = function(sId,mSettings) {};
/**
 * 
 * Event which is fired when the user triggers a search 
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {string} oControlEvent.getParameters.query The search query
 * @public
 */
sap.ui.ux3.DataSet.prototype.search = function(oControlEvent) { return null; };

/**
 * 
 * selection Changed 
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {int} oControlEvent.getParameters.oldLeadSelectedIndex Old lead selected index
 * @param {int} oControlEvent.getParameters.newLeadSelectedIndex New lead selected index
 * @public
 */
sap.ui.ux3.DataSet.prototype.selectionChanged = function(oControlEvent) { return null; };

/**
 * 
 * Rerendering of the FilterArea
 * @protected
 */
sap.ui.ux3.DataSet.prototype._rerenderFilter = function() { return null; };

/**
 * 
 * Rerendering of the Toolbar
 * @protected
 */
sap.ui.ux3.DataSet.prototype._rerenderToolbar = function() { return null; };

/**
 * 
 * Adds some filter <code>oFilter</code> 
 * to the aggregation named <code>filter</code>.
 * @param {sap.ui.core.Control}
 *            oFilter the filter to add; if empty, nothing is inserted
 * @return {sap.ui.ux3.DataSet} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.DataSet.prototype.addFilter = function(oFilter) { return new sap.ui.ux3.DataSet(); };

/**
 * 
 * Adds some item <code>oItem</code> 
 * to the aggregation named <code>items</code>.
 * @param {sap.ui.ux3.DataSetItem}
 *            oItem the item to add; if empty, nothing is inserted
 * @return {sap.ui.ux3.DataSet} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.DataSet.prototype.addItem = function(oItem) { return new sap.ui.ux3.DataSet(); };

/**
 * 
 * add a toolbarItem to the toolbar
 * @param {sap.ui.commons.ToolbarItem} 
 *         oOToolbarItem
 *         ToolbarItem
 * @type void
 * @public
 */
sap.ui.ux3.DataSet.prototype.addToolbarItem = function(oOToolbarItem) { return null; };

/**
 * 
 * Adds some view <code>oView</code> 
 * to the aggregation named <code>views</code>.
 * @param {sap.ui.ux3.DataSetView}
 *            oView the view to add; if empty, nothing is inserted
 * @return {sap.ui.ux3.DataSet} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.DataSet.prototype.addView = function(oView) { return new sap.ui.ux3.DataSet(); };

/**
 * 
 * Attach event handler <code>fnFunction</code> to the 'search' event of this <code>sap.ui.ux3.DataSet</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ui.ux3.DataSet</code>.<br/> itself. 
 * </p><p>
 * Event which is fired when the user triggers a search 
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener=this] Context object to call the event handler with. Defaults to this <code>sap.ui.ux3.DataSet</code>.<br/> itself.
 * @return {sap.ui.ux3.DataSet} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.DataSet.prototype.attachSearch = function(oData,fnFunction,oListener) { return new sap.ui.ux3.DataSet(); };

/**
 * 
 * Attach event handler <code>fnFunction</code> to the 'selectionChanged' event of this <code>sap.ui.ux3.DataSet</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ui.ux3.DataSet</code>.<br/> itself. 
 * </p><p>
 * selection Changed 
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener=this] Context object to call the event handler with. Defaults to this <code>sap.ui.ux3.DataSet</code>.<br/> itself.
 * @return {sap.ui.ux3.DataSet} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.DataSet.prototype.attachSelectionChanged = function(oData,fnFunction,oListener) { return new sap.ui.ux3.DataSet(); };

/**
 * 
 * Binder for aggregation <code>items</code>.
 * @param {string} sPath path to a list in the model 
 * @param {sap.ui.core.Element} oTemplate the control template for this aggregation
 * @param {sap.ui.model.Sorter} oSorter the initial sort order (optional)
 * @param {array} aFilters the predefined filters for this aggregation (optional)
 * @return {sap.ui.ux3.DataSet} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.DataSet.prototype.bindItems = function(sPath,oTemplate,oSorter,aFilters) { return new sap.ui.ux3.DataSet(); };

/**
 * 
 * Creates a view switch button
 * @param {object} oView View
 * @param {int} iIndex Index of view
 * @return {object} viewSwitch instance
 * @protected
 */
sap.ui.ux3.DataSet.prototype.createViewSwitch = function(oView,iIndex) { return new Object(); };

/**
 * 
 * Destroys all the filter in the aggregation 
 * named <code>filter</code>.
 * @return {sap.ui.ux3.DataSet} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.DataSet.prototype.destroyFilter = function() { return new sap.ui.ux3.DataSet(); };

/**
 * 
 * Destroys all the items in the aggregation 
 * named <code>items</code>.
 * @return {sap.ui.ux3.DataSet} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.DataSet.prototype.destroyItems = function() { return new sap.ui.ux3.DataSet(); };

/**
 * 
 * Destroys all the views in the aggregation 
 * named <code>views</code>.
 * @return {sap.ui.ux3.DataSet} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.DataSet.prototype.destroyViews = function() { return new sap.ui.ux3.DataSet(); };

/**
 * 
 * Detach event handler <code>fnFunction</code> from the 'search' event of this <code>sap.ui.ux3.DataSet</code>.<br/>
 * </p><p>
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.ux3.DataSet} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.DataSet.prototype.detachSearch = function(fnFunction,oListener) { return new sap.ui.ux3.DataSet(); };

/**
 * 
 * Detach event handler <code>fnFunction</code> from the 'selectionChanged' event of this <code>sap.ui.ux3.DataSet</code>.<br/>
 * </p><p>
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.ux3.DataSet} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.DataSet.prototype.detachSelectionChanged = function(fnFunction,oListener) { return new sap.ui.ux3.DataSet(); };

/**
 * 
 * Creates a new subclass of class sap.ui.ux3.DataSet with name <code>sClassName</code> 
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
sap.ui.ux3.DataSet.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * 
 * Fire event search to attached listeners.
 * </p><p>
 * Expects following event parameters:
 * <ul>
 * <li>'query' of type <code>string</code> The search query</li>
 * </ul>
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.ux3.DataSet} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.ui.ux3.DataSet.prototype.fireSearch = function(mArguments) { return new sap.ui.ux3.DataSet(); };

/**
 * 
 * Fire event selectionChanged to attached listeners.
 * </p><p>
 * Expects following event parameters:
 * <ul>
 * <li>'oldLeadSelectedIndex' of type <code>int</code> Old lead selected index</li>
 * <li>'newLeadSelectedIndex' of type <code>int</code> New lead selected index</li>
 * </ul>
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.ux3.DataSet} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.ui.ux3.DataSet.prototype.fireSelectionChanged = function(mArguments) { return new sap.ui.ux3.DataSet(); };

/**
 * 
 * Getter for aggregation <code>filter</code>.<br/>
 * Filter control (e.g. a FacetFilter) for the DataSet
 * @return {sap.ui.core.Control[]}
 * @public
 * 
 */
sap.ui.ux3.DataSet.prototype.getFilter = function() { return new Array(); };

/**
 * 
 * Getter for aggregation <code>items</code>.<br/>
 * Aggregation of DataSetItems
 * @return {sap.ui.ux3.DataSetItem[]}
 * @public
 * 
 */
sap.ui.ux3.DataSet.prototype.getItems = function() { return new Array(); };

/**
 * 
 * Returns the LeadSelection index
 * @param {string} sItemId Id of the selected DataSetItem
 * @return {int} selected index
 * @protected
 */
sap.ui.ux3.DataSet.prototype.getLeadSelection = function(sItemId) { return 0; };

/**
 * 
 * Returns id of selected Item from given index
 * @param {int} iIndex index of selection
 * @return {string} id of selected item
 * @protected
 */
sap.ui.ux3.DataSet.prototype.getSelectedItemId = function(iIndex) { return ""; };

/**
 * 
 * Selected view of the Dataset
 * @return {string} Id of the element which is the current target of the <code>selectedView</code> association, or null
 * @public
 * 
 */
sap.ui.ux3.DataSet.prototype.getSelectedView = function() { return ""; };

/**
 * 
 * Getter for property <code>showFilter</code>.
 * show filter
 * </p><p>
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>showFilter</code>
 * @public
 * 
 */
sap.ui.ux3.DataSet.prototype.getShowFilter = function() { return false; };

/**
 * 
 * Getter for property <code>showSearchField</code>.
 * Show/hide SearchField in Toolbar
 * </p><p>
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>showSearchField</code>
 * @public
 * 
 */
sap.ui.ux3.DataSet.prototype.getShowSearchField = function() { return false; };

/**
 * 
 * Getter for property <code>showToolbar</code>.
 * show Toolbar
 * </p><p>
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>showToolbar</code>
 * @public
 * 
 */
sap.ui.ux3.DataSet.prototype.getShowToolbar = function() { return false; };

/**
 * 
 * Getter for aggregation <code>views</code>.<br/>
 * views
 * @return {sap.ui.ux3.DataSetView[]}
 * @public
 * 
 */
sap.ui.ux3.DataSet.prototype.getViews = function() { return new Array(); };

/**
 * 
 * Checks for the provided <code>sap.ui.core.Control</code> in the aggregation named <code>filter</code> 
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.core.Control}
 *            oFilter the filter whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * 
 */
sap.ui.ux3.DataSet.prototype.indexOfFilter = function(oFilter) { return 0; };

/**
 * 
 * Checks for the provided <code>sap.ui.ux3.DataSetItem</code> in the aggregation named <code>items</code> 
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.ux3.DataSetItem}
 *            oItem the item whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * 
 */
sap.ui.ux3.DataSet.prototype.indexOfItem = function(oItem) { return 0; };

/**
 * 
 * Checks for the provided <code>sap.ui.ux3.DataSetView</code> in the aggregation named <code>views</code> 
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.ux3.DataSetView}
 *            oView the view whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * 
 */
sap.ui.ux3.DataSet.prototype.indexOfView = function(oView) { return 0; };

/**
 * 
 * Inserts a filter into the aggregation named <code>filter</code>.
 * @param {sap.ui.core.Control}
 *          oFilter the filter to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the filter should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the filter is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the filter is inserted at 
 *             the last position        
 * @return {sap.ui.ux3.DataSet} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.DataSet.prototype.insertFilter = function(oFilter,iIndex) { return new sap.ui.ux3.DataSet(); };

/**
 * 
 * Inserts a item into the aggregation named <code>items</code>.
 * @param {sap.ui.ux3.DataSetItem}
 *          oItem the item to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the item should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the item is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the item is inserted at 
 *             the last position        
 * @return {sap.ui.ux3.DataSet} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.DataSet.prototype.insertItem = function(oItem,iIndex) { return new sap.ui.ux3.DataSet(); };

/**
 * 
 * Inserts a view into the aggregation named <code>views</code>.
 * @param {sap.ui.ux3.DataSetView}
 *          oView the view to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the view should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the view is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the view is inserted at 
 *             the last position        
 * @return {sap.ui.ux3.DataSet} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.DataSet.prototype.insertView = function(oView,iIndex) { return new sap.ui.ux3.DataSet(); };

/**
 * 
 * Returns true if iIndex is selected
 * @param {int} iIndex index of selection
 * @return {boolean} index selected true/false
 * @protected
 */
sap.ui.ux3.DataSet.prototype.isSelectedIndex = function(iIndex) { return false; };

/**
 * 
 * Removes all the controls in the aggregation named <code>filter</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.core.Control[]} an array of the removed elements (might be empty)
 * @public
 * 
 */
sap.ui.ux3.DataSet.prototype.removeAllFilter = function() { return new Array(); };

/**
 * 
 * Removes all the controls in the aggregation named <code>items</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.ux3.DataSetItem[]} an array of the removed elements (might be empty)
 * @public
 * 
 */
sap.ui.ux3.DataSet.prototype.removeAllItems = function() { return new Array(); };

/**
 * 
 * Removes all the controls in the aggregation named <code>views</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.ux3.DataSetView[]} an array of the removed elements (might be empty)
 * @public
 * 
 */
sap.ui.ux3.DataSet.prototype.removeAllViews = function() { return new Array(); };

/**
 * 
 * Removes an filter from the aggregation named <code>filter</code>.
 * @param {int | string | sap.ui.core.Control} vFilter the filter to remove or its index or id
 * @return {sap.ui.core.Control} the removed filter or null
 * @public
 * 
 */
sap.ui.ux3.DataSet.prototype.removeFilter = function(vFilter) { return new sap.ui.core.Control(); };

/**
 * 
 * Removes an item from the aggregation named <code>items</code>.
 * @param {int | string | sap.ui.ux3.DataSetItem} vItem the item to remove or its index or id
 * @return {sap.ui.ux3.DataSetItem} the removed item or null
 * @public
 * 
 */
sap.ui.ux3.DataSet.prototype.removeItem = function(vItem) { return new sap.ui.ux3.DataSetItem(); };

/**
 * 
 * remove a toolbarItem to the toolbar
 * @param {sap.ui.commons.ToolbarItem} 
 *         oOToolbarItem
 * @type void
 * @public
 */
sap.ui.ux3.DataSet.prototype.removeToolbarItem = function(oOToolbarItem) { return null; };

/**
 * 
 * Removes an view from the aggregation named <code>views</code>.
 * @param {int | string | sap.ui.ux3.DataSetView} vView the view to remove or its index or id
 * @return {sap.ui.ux3.DataSetView} the removed view or null
 * @public
 * 
 */
sap.ui.ux3.DataSet.prototype.removeView = function(vView) { return new sap.ui.ux3.DataSetView(); };

/**
 * 
 * Set the LeadSelection index
 * @param {int} iIndex set LeadSelection index
 * @protected
 */
sap.ui.ux3.DataSet.prototype.setLeadSelection = function(iIndex) { return null; };

/**
 * 
 * Selected view of the Dataset
 * @param {string | sap.ui.ux3.DataSetView} vSelectedView 
 *    Id of an element which becomes the new target of this <code>selectedView</code> association.
 *    Alternatively, an element instance may be given.
 * @return {sap.ui.ux3.DataSet} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.DataSet.prototype.setSelectedView = function(vSelectedView) { return new sap.ui.ux3.DataSet(); };

/**
 * 
 * Setter for property <code>showFilter</code>.
 * </p><p>
 * Default value is <code>true</code> 
 * @param {boolean} bShowFilter  new value for property <code>showFilter</code>
 * @return {sap.ui.ux3.DataSet} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.DataSet.prototype.setShowFilter = function(bShowFilter) { return new sap.ui.ux3.DataSet(); };

/**
 * 
 * Setter for property <code>showSearchField</code>.
 * </p><p>
 * Default value is <code>true</code> 
 * @param {boolean} bShowSearchField  new value for property <code>showSearchField</code>
 * @return {sap.ui.ux3.DataSet} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.DataSet.prototype.setShowSearchField = function(bShowSearchField) { return new sap.ui.ux3.DataSet(); };

/**
 * 
 * Setter for property <code>showToolbar</code>.
 * </p><p>
 * Default value is <code>true</code> 
 * @param {boolean} bShowToolbar  new value for property <code>showToolbar</code>
 * @return {sap.ui.ux3.DataSet} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.DataSet.prototype.setShowToolbar = function(bShowToolbar) { return new sap.ui.ux3.DataSet(); };

/**
 * 
 * Unbinder for aggregation <code>items</code>.
 * @return {sap.ui.ux3.DataSet} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.DataSet.prototype.unbindItems = function() { return new sap.ui.ux3.DataSet(); };


// ---- sap.ui.ux3.DataSetItem --------------------------------------------------------------------------

/**
 * 
 * Constructor for a new DataSetItem.
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
 * <li>{@link #getIconSrc iconSrc} : sap.ui.core.URI</li>
 * <li>{@link #getTitle title} : string (default: 'Title')</li>
 * <li>{@link #getCheckable checkable} : boolean (default: true)</li>
 * <li>{@link #getSubtitle subtitle} : string (default: 'Subtitle')</li></ul>
 * </li>
 * <li>Aggregations
 * <ul></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link sap.ui.ux3.DataSetItem#event:selected selected} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
 * </li>
 * </ul> 
 * </p><p>
 * </p><p>
 * In addition, all settings applicable to the base type {@link sap.ui.core.Element#constructor sap.ui.core.Element}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * DataSet Item
 * @extends sap.ui.core.Element
 * @version 1.15.1-SNAPSHOT
 * @constructor   
 * @public
 * 
 */
sap.ui.ux3.DataSetItem = function(sId,mSettings) {};
/**
 * 
 * Event Fired when Datset item is selected.
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {string} oControlEvent.getParameters.itemId Id of the selected Datset item
 * @public
 */
sap.ui.ux3.DataSetItem.prototype.selected = function(oControlEvent) { return null; };

/**
 * 
 * Attach event handler <code>fnFunction</code> to the 'selected' event of this <code>sap.ui.ux3.DataSetItem</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ui.ux3.DataSetItem</code>.<br/> itself. 
 * </p><p>
 * Event Fired when Datset item is selected.
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener=this] Context object to call the event handler with. Defaults to this <code>sap.ui.ux3.DataSetItem</code>.<br/> itself.
 * @return {sap.ui.ux3.DataSetItem} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.DataSetItem.prototype.attachSelected = function(oData,fnFunction,oListener) { return new sap.ui.ux3.DataSetItem(); };

/**
 * 
 * Detach event handler <code>fnFunction</code> from the 'selected' event of this <code>sap.ui.ux3.DataSetItem</code>.<br/>
 * </p><p>
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.ux3.DataSetItem} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.DataSetItem.prototype.detachSelected = function(fnFunction,oListener) { return new sap.ui.ux3.DataSetItem(); };

/**
 * 
 * Creates a new subclass of class sap.ui.ux3.DataSetItem with name <code>sClassName</code> 
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
sap.ui.ux3.DataSetItem.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * 
 * Fire event selected to attached listeners.
 * </p><p>
 * Expects following event parameters:
 * <ul>
 * <li>'itemId' of type <code>string</code> Id of the selected Datset item</li>
 * </ul>
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.ux3.DataSetItem} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.ui.ux3.DataSetItem.prototype.fireSelected = function(mArguments) { return new sap.ui.ux3.DataSetItem(); };

/**
 * 
 * Getter for property <code>checkable</code>.
 * checkable
 * </p><p>
 * </p><p>
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>checkable</code>
 * @public
 * 
 */
sap.ui.ux3.DataSetItem.prototype.getCheckable = function() { return false; };

/**
 * 
 * Getter for property <code>iconSrc</code>.
 * image
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {sap.ui.core.URI} the value of property <code>iconSrc</code>
 * @public
 * 
 */
sap.ui.ux3.DataSetItem.prototype.getIconSrc = function() { return new sap.ui.core.URI(); };

/**
 * 
 * Getter for property <code>subtitle</code>.
 * subtitle
 * </p><p>
 * Default value is <code>Subtitle</code>
 * @return {string} the value of property <code>subtitle</code>
 * @public
 * 
 */
sap.ui.ux3.DataSetItem.prototype.getSubtitle = function() { return ""; };

/**
 * 
 * Getter for property <code>title</code>.
 * title
 * </p><p>
 * Default value is <code>Title</code>
 * @return {string} the value of property <code>title</code>
 * @public
 * 
 */
sap.ui.ux3.DataSetItem.prototype.getTitle = function() { return ""; };

/**
 * 
 * Setter for property <code>checkable</code>.
 * </p><p>
 * Default value is <code>true</code> 
 * @param {boolean} bCheckable  new value for property <code>checkable</code>
 * @return {sap.ui.ux3.DataSetItem} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.DataSetItem.prototype.setCheckable = function(bCheckable) { return new sap.ui.ux3.DataSetItem(); };

/**
 * 
 * Setter for property <code>iconSrc</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {sap.ui.core.URI} sIconSrc  new value for property <code>iconSrc</code>
 * @return {sap.ui.ux3.DataSetItem} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.DataSetItem.prototype.setIconSrc = function(sIconSrc) { return new sap.ui.ux3.DataSetItem(); };

/**
 * 
 * Setter for property <code>subtitle</code>.
 * </p><p>
 * Default value is <code>Subtitle</code> 
 * @param {string} sSubtitle  new value for property <code>subtitle</code>
 * @return {sap.ui.ux3.DataSetItem} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.DataSetItem.prototype.setSubtitle = function(sSubtitle) { return new sap.ui.ux3.DataSetItem(); };

/**
 * 
 * Setter for property <code>title</code>.
 * </p><p>
 * Default value is <code>Title</code> 
 * @param {string} sTitle  new value for property <code>title</code>
 * @return {sap.ui.ux3.DataSetItem} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.DataSetItem.prototype.setTitle = function(sTitle) { return new sap.ui.ux3.DataSetItem(); };


// ---- sap.ui.ux3.DataSetSimpleView --------------------------------------------------------------------------

/**
 * 
 * Constructor for a new DataSetSimpleView.
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
 * <li>{@link #getFloating floating} : boolean (default: true)</li>
 * <li>{@link #getName name} : string (default: "Name of this View")</li>
 * <li>{@link #getIcon icon} : sap.ui.core.URI</li>
 * <li>{@link #getIconHovered iconHovered} : sap.ui.core.URI</li>
 * <li>{@link #getIconSelected iconSelected} : sap.ui.core.URI</li>
 * <li>{@link #getResponsive responsive} : boolean (default: false)</li>
 * <li>{@link #getItemMinWidth itemMinWidth} : int (default: 0)</li>
 * <li>{@link #getInitialItemCount initialItemCount} : int (default: 0)</li>
 * <li>{@link #getReloadItemCount reloadItemCount} : int (default: 0)</li>
 * <li>{@link #getScrollArea scrollArea} : any</li>
 * <li>{@link #getHeight height} : sap.ui.core.CSSSize</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getTemplate template} : sap.ui.core.Control</li></ul>
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
 * DataSetSimpleView provides a simple view example for DataSet usage.
 * @extends sap.ui.core.Control
 * @implements sap.ui.ux3.DataSetView
 * @version 1.15.1-SNAPSHOT
 * @constructor   
 * @public
 * 
 */
sap.ui.ux3.DataSetSimpleView = function(sId,mSettings) {};
/**
 * 
 * Destroys the template in the aggregation 
 * named <code>template</code>.
 * @return {sap.ui.ux3.DataSetSimpleView} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.DataSetSimpleView.prototype.destroyTemplate = function() { return new sap.ui.ux3.DataSetSimpleView(); };

/**
 * 
 * View finalization: Called when leaving the view
 * @protected
 */
sap.ui.ux3.DataSetSimpleView.prototype.exitView = function(aItems) { return null; };

/**
 * 
 * Creates a new subclass of class sap.ui.ux3.DataSetSimpleView with name <code>sClassName</code> 
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
sap.ui.ux3.DataSetSimpleView.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * 
 * Getter for property <code>floating</code>.
 * When true the DatSet items are floating containers. When set to false The Items are rendered in a 1 column Layout.
 * </p><p>
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>floating</code>
 * @public
 * 
 */
sap.ui.ux3.DataSetSimpleView.prototype.getFloating = function() { return false; };

/**
 * 
 * Getter for property <code>height</code>.
 * If the pagination feature is used without specifying a scroll area, a height for the dataset must be defined.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {sap.ui.core.CSSSize} the value of property <code>height</code>
 * @public
 * @since 1.13.0
 * 
 */
sap.ui.ux3.DataSetSimpleView.prototype.getHeight = function() { return new sap.ui.core.CSSSize(); };

/**
 * 
 * Getter for property <code>icon</code>.
 * Icon source for this view
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {sap.ui.core.URI} the value of property <code>icon</code>
 * @public
 * 
 */
sap.ui.ux3.DataSetSimpleView.prototype.getIcon = function() { return new sap.ui.core.URI(); };

/**
 * 
 * Getter for property <code>iconHovered</code>.
 * icon: hovered state
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {sap.ui.core.URI} the value of property <code>iconHovered</code>
 * @public
 * 
 */
sap.ui.ux3.DataSetSimpleView.prototype.getIconHovered = function() { return new sap.ui.core.URI(); };

/**
 * 
 * Getter for property <code>iconSelected</code>.
 * icon: selected state
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {sap.ui.core.URI} the value of property <code>iconSelected</code>
 * @public
 * 
 */
sap.ui.ux3.DataSetSimpleView.prototype.getIconSelected = function() { return new sap.ui.core.URI(); };

/**
 * 
 * Getter for property <code>initialItemCount</code>.
 * If this value is greater zero only this amount of items is loaded in the first place. New items are loaded automatically when the user scrolls down. The number of items which are reloaded can be defined with the property "reloadItemCount"
 * </p><p>
 * Default value is <code>0</code>
 * @return {int} the value of property <code>initialItemCount</code>
 * @public
 * @since 1.13.0
 * 
 */
sap.ui.ux3.DataSetSimpleView.prototype.getInitialItemCount = function() { return 0; };

/**
 * 
 * Getter for property <code>itemMinWidth</code>.
 * When itemMinWidth>0 and the property floating is true the given minimum width in pixels is set to DatSet items. A minimum width must be given when the property responsive is set.
 * </p><p>
 * Default value is <code>0</code>
 * @return {int} the value of property <code>itemMinWidth</code>
 * @public
 * @since 1.9.2
 * 
 */
sap.ui.ux3.DataSetSimpleView.prototype.getItemMinWidth = function() { return 0; };

/**
 * 
 * Getter for property <code>name</code>.
 * Name of the View
 * </p><p>
 * Default value is <code>"Name of this View"</code>
 * @return {string} the value of property <code>name</code>
 * @public
 * 
 */
sap.ui.ux3.DataSetSimpleView.prototype.getName = function() { return ""; };

/**
 * 
 * Getter for property <code>reloadItemCount</code>.
 * This number defines the item count which is reloaded on scroll if initialItemCount is enabled.
 * </p><p>
 * Default value is <code>0</code>
 * @return {int} the value of property <code>reloadItemCount</code>
 * @public
 * @since 1.13.0
 * 
 */
sap.ui.ux3.DataSetSimpleView.prototype.getReloadItemCount = function() { return 0; };

/**
 * 
 * Getter for property <code>responsive</code>.
 * When true and the property floating is true the DatSet items are floating containers filling the whole space of a row.
 * </p><p>
 * Default value is <code>false</code>
 * @return {boolean} the value of property <code>responsive</code>
 * @public
 * @since 1.9.2
 * 
 */
sap.ui.ux3.DataSetSimpleView.prototype.getResponsive = function() { return false; };

/**
 * 
 * Getter for property <code>scrollArea</code>.
 * ID of the DOM Element or jQuery reference to the dom which holds the scrollbar for the dataset
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {any} the value of property <code>scrollArea</code>
 * @public
 * @since 1.13.0
 * 
 */
sap.ui.ux3.DataSetSimpleView.prototype.getScrollArea = function() { return null; };

/**
 * 
 * Getter for aggregation <code>template</code>.<br/>
 * template
 * @return {sap.ui.core.Control}
 * @public
 * 
 */
sap.ui.ux3.DataSetSimpleView.prototype.getTemplate = function() { return new sap.ui.core.Control(); };

/**
 * 
 * Eventhandler for the selection of an Item
 * @param {event} oEvent SelectionChanged event
 * @protected
 */
sap.ui.ux3.DataSetSimpleView.prototype.handleSelection = function(oEvent) { return null; };

/**
 * 
 * View Initialization: Called when selecting the view
 * @param {array} aItems Array of DataSetItems added to the parent DataSet
 * @protected
 */
sap.ui.ux3.DataSetSimpleView.prototype.initView = function(aItems) { return null; };

/**
 * 
 * Check if Item <code>oItem</code> is selected
 * @param {DataSetItem} oItem DataSetItem instance
 * @protected
 */
sap.ui.ux3.DataSetSimpleView.prototype.isItemSelected = function(oItem) { return null; };

/**
 * 
 * Setter for property <code>floating</code>.
 * </p><p>
 * Default value is <code>true</code> 
 * @param {boolean} bFloating  new value for property <code>floating</code>
 * @return {sap.ui.ux3.DataSetSimpleView} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.DataSetSimpleView.prototype.setFloating = function(bFloating) { return new sap.ui.ux3.DataSetSimpleView(); };

/**
 * 
 * Setter for property <code>height</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {sap.ui.core.CSSSize} sHeight  new value for property <code>height</code>
 * @return {sap.ui.ux3.DataSetSimpleView} <code>this</code> to allow method chaining
 * @public
 * @since 1.13.0
 * 
 */
sap.ui.ux3.DataSetSimpleView.prototype.setHeight = function(sHeight) { return new sap.ui.ux3.DataSetSimpleView(); };

/**
 * 
 * Setter for property <code>icon</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {sap.ui.core.URI} sIcon  new value for property <code>icon</code>
 * @return {sap.ui.ux3.DataSetSimpleView} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.DataSetSimpleView.prototype.setIcon = function(sIcon) { return new sap.ui.ux3.DataSetSimpleView(); };

/**
 * 
 * Setter for property <code>iconHovered</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {sap.ui.core.URI} sIconHovered  new value for property <code>iconHovered</code>
 * @return {sap.ui.ux3.DataSetSimpleView} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.DataSetSimpleView.prototype.setIconHovered = function(sIconHovered) { return new sap.ui.ux3.DataSetSimpleView(); };

/**
 * 
 * Setter for property <code>iconSelected</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {sap.ui.core.URI} sIconSelected  new value for property <code>iconSelected</code>
 * @return {sap.ui.ux3.DataSetSimpleView} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.DataSetSimpleView.prototype.setIconSelected = function(sIconSelected) { return new sap.ui.ux3.DataSetSimpleView(); };

/**
 * 
 * Setter for property <code>initialItemCount</code>.
 * </p><p>
 * Default value is <code>0</code> 
 * @param {int} iInitialItemCount  new value for property <code>initialItemCount</code>
 * @return {sap.ui.ux3.DataSetSimpleView} <code>this</code> to allow method chaining
 * @public
 * @since 1.13.0
 * 
 */
sap.ui.ux3.DataSetSimpleView.prototype.setInitialItemCount = function(iInitialItemCount) { return new sap.ui.ux3.DataSetSimpleView(); };

/**
 * 
 * Setter for property <code>itemMinWidth</code>.
 * </p><p>
 * Default value is <code>0</code> 
 * @param {int} iItemMinWidth  new value for property <code>itemMinWidth</code>
 * @return {sap.ui.ux3.DataSetSimpleView} <code>this</code> to allow method chaining
 * @public
 * @since 1.9.2
 * 
 */
sap.ui.ux3.DataSetSimpleView.prototype.setItemMinWidth = function(iItemMinWidth) { return new sap.ui.ux3.DataSetSimpleView(); };

/**
 * 
 * Setter for property <code>name</code>.
 * </p><p>
 * Default value is <code>"Name of this View"</code> 
 * @param {string} sName  new value for property <code>name</code>
 * @return {sap.ui.ux3.DataSetSimpleView} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.DataSetSimpleView.prototype.setName = function(sName) { return new sap.ui.ux3.DataSetSimpleView(); };

/**
 * 
 * Setter for property <code>reloadItemCount</code>.
 * </p><p>
 * Default value is <code>0</code> 
 * @param {int} iReloadItemCount  new value for property <code>reloadItemCount</code>
 * @return {sap.ui.ux3.DataSetSimpleView} <code>this</code> to allow method chaining
 * @public
 * @since 1.13.0
 * 
 */
sap.ui.ux3.DataSetSimpleView.prototype.setReloadItemCount = function(iReloadItemCount) { return new sap.ui.ux3.DataSetSimpleView(); };

/**
 * 
 * Setter for property <code>responsive</code>.
 * </p><p>
 * Default value is <code>false</code> 
 * @param {boolean} bResponsive  new value for property <code>responsive</code>
 * @return {sap.ui.ux3.DataSetSimpleView} <code>this</code> to allow method chaining
 * @public
 * @since 1.9.2
 * 
 */
sap.ui.ux3.DataSetSimpleView.prototype.setResponsive = function(bResponsive) { return new sap.ui.ux3.DataSetSimpleView(); };

/**
 * 
 * @public
 */
sap.ui.ux3.DataSetSimpleView.prototype.setScrollArea = function(aScrollArea,bSupress) { return null; };

/**
 * 
 * Setter for the aggregated <code>template</code>.
 * @param oTemplate {sap.ui.core.Control}
 * @return {sap.ui.ux3.DataSetSimpleView} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.DataSetSimpleView.prototype.setTemplate = function(oTemplate) { return new sap.ui.ux3.DataSetSimpleView(); };

/**
 * 
 * View update: Called when pagination adds items
 * @param {array} aItems Array of DataSetItems added to the parent DataSet
 * @protected
 */
sap.ui.ux3.DataSetSimpleView.prototype.updateView = function(aItems) { return null; };


// ---- sap.ui.ux3.DataSetView --------------------------------------------------------------------------


// ---- sap.ui.ux3.Exact --------------------------------------------------------------------------

/**
 * 
 * Constructor for a new Exact.
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
 * <li>{@link #getResultText resultText} : string</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getSettingsMenu settingsMenu} : sap.ui.commons.Menu</li>
 * <li>{@link #getAttributes attributes} : sap.ui.ux3.ExactAttribute[]</li></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link sap.ui.ux3.Exact#event:search search} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.ui.ux3.Exact#event:refineSearch refineSearch} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
 * </li>
 * </ul> 
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * A comprehensive UI design approach with graphical and functional elements for searching data, exploring data, and acting on the data
 * ("Explore and Act (Exact) Pattern").
 * @extends sap.ui.core.Control
 * @version 1.15.1-SNAPSHOT
 * @constructor   
 * @public
 * @experimental Since version 1.2. 
 * API is not yet finished and might change completely
 * 
 */
sap.ui.ux3.Exact = function(sId,mSettings) {};
/**
 * 
 * Event which is fired when an attribute is selected or unselected. 
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {string} oControlEvent.getParameters.query The query string which was entered in the search field
 * @param {sap.ui.ux3.ExactAttribute} oControlEvent.getParameters.changedAttribute The attribute which was selected or unselected recently
 * @param {object} oControlEvent.getParameters.allSelectedAttributes Array of all selected ExcatAttribute.
 * @public
 */
sap.ui.ux3.Exact.prototype.refineSearch = function(oControlEvent) { return null; };

/**
 * 
 * Event is fired when the search button is clicked 
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {string} oControlEvent.getParameters.query The query string which was entered in the search field.
 * @public
 */
sap.ui.ux3.Exact.prototype.search = function(oControlEvent) { return null; };

/**
 * 
 * Adds some attribute <code>oAttribute</code> 
 * to the aggregation named <code>attributes</code>.
 * @param {sap.ui.ux3.ExactAttribute}
 *            oAttribute the attribute to add; if empty, nothing is inserted
 * @return {sap.ui.ux3.Exact} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.Exact.prototype.addAttribute = function(oAttribute) { return new sap.ui.ux3.Exact(); };

/**
 * 
 * Attach event handler <code>fnFunction</code> to the 'refineSearch' event of this <code>sap.ui.ux3.Exact</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ui.ux3.Exact</code>.<br/> itself. 
 * </p><p>
 * Event which is fired when an attribute is selected or unselected. 
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener=this] Context object to call the event handler with. Defaults to this <code>sap.ui.ux3.Exact</code>.<br/> itself.
 * @return {sap.ui.ux3.Exact} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.Exact.prototype.attachRefineSearch = function(oData,fnFunction,oListener) { return new sap.ui.ux3.Exact(); };

/**
 * 
 * Attach event handler <code>fnFunction</code> to the 'search' event of this <code>sap.ui.ux3.Exact</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ui.ux3.Exact</code>.<br/> itself. 
 * </p><p>
 * Event is fired when the search button is clicked 
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener=this] Context object to call the event handler with. Defaults to this <code>sap.ui.ux3.Exact</code>.<br/> itself.
 * @return {sap.ui.ux3.Exact} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.Exact.prototype.attachSearch = function(oData,fnFunction,oListener) { return new sap.ui.ux3.Exact(); };

/**
 * 
 * Destroys all the attributes in the aggregation 
 * named <code>attributes</code>.
 * @return {sap.ui.ux3.Exact} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.Exact.prototype.destroyAttributes = function() { return new sap.ui.ux3.Exact(); };

/**
 * 
 * Destroys the settingsMenu in the aggregation 
 * named <code>settingsMenu</code>.
 * @return {sap.ui.ux3.Exact} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.Exact.prototype.destroySettingsMenu = function() { return new sap.ui.ux3.Exact(); };

/**
 * 
 * Detach event handler <code>fnFunction</code> from the 'refineSearch' event of this <code>sap.ui.ux3.Exact</code>.<br/>
 * </p><p>
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.ux3.Exact} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.Exact.prototype.detachRefineSearch = function(fnFunction,oListener) { return new sap.ui.ux3.Exact(); };

/**
 * 
 * Detach event handler <code>fnFunction</code> from the 'search' event of this <code>sap.ui.ux3.Exact</code>.<br/>
 * </p><p>
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.ux3.Exact} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.Exact.prototype.detachSearch = function(fnFunction,oListener) { return new sap.ui.ux3.Exact(); };

/**
 * 
 * Creates a new subclass of class sap.ui.ux3.Exact with name <code>sClassName</code> 
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
sap.ui.ux3.Exact.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * 
 * Fire event refineSearch to attached listeners.
 * </p><p>
 * Expects following event parameters:
 * <ul>
 * <li>'query' of type <code>string</code> The query string which was entered in the search field</li>
 * <li>'changedAttribute' of type <code>sap.ui.ux3.ExactAttribute</code> The attribute which was selected or unselected recently</li>
 * <li>'allSelectedAttributes' of type <code>object</code> Array of all selected ExcatAttribute.</li>
 * </ul>
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.ux3.Exact} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.ui.ux3.Exact.prototype.fireRefineSearch = function(mArguments) { return new sap.ui.ux3.Exact(); };

/**
 * 
 * Fire event search to attached listeners.
 * </p><p>
 * Expects following event parameters:
 * <ul>
 * <li>'query' of type <code>string</code> The query string which was entered in the search field.</li>
 * </ul>
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.ux3.Exact} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.ui.ux3.Exact.prototype.fireSearch = function(mArguments) { return new sap.ui.ux3.Exact(); };

/**
 * 
 * Getter for aggregation <code>attributes</code>.<br/>
 * The attributes which shall be available to refine the search
 * @return {sap.ui.ux3.ExactAttribute[]}
 * @public
 * 
 */
sap.ui.ux3.Exact.prototype.getAttributes = function() { return new Array(); };

/**
 * 
 * Returns the ExactArea representing the result section. Arbitrary content can be added here.
 * @type sap.ui.ux3.ExactArea
 * @public
 */
sap.ui.ux3.Exact.prototype.getResultArea = function() { return new sap.ui.ux3.ExactArea(); };

/**
 * 
 * Getter for property <code>resultText</code>.
 * A title text which is displayed above the result section
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {string} the value of property <code>resultText</code>
 * @public
 * 
 */
sap.ui.ux3.Exact.prototype.getResultText = function() { return ""; };

/**
 * 
 * Returns the SearchField control which is used by the Exact control.
 * @type sap.ui.commons.SearchField
 * @public
 */
sap.ui.ux3.Exact.prototype.getSearchField = function() { return new sap.ui.commons.SearchField(); };

/**
 * 
 * Getter for aggregation <code>settingsMenu</code>.<br/>
 * Defines the 'Settings' button in the browse section tool bar
 * @return {sap.ui.commons.Menu}
 * @public
 * 
 */
sap.ui.ux3.Exact.prototype.getSettingsMenu = function() { return new sap.ui.commons.Menu(); };

/**
 * 
 * Checks for the provided <code>sap.ui.ux3.ExactAttribute</code> in the aggregation named <code>attributes</code> 
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.ux3.ExactAttribute}
 *            oAttribute the attribute whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * 
 */
sap.ui.ux3.Exact.prototype.indexOfAttribute = function(oAttribute) { return 0; };

/**
 * 
 * Inserts a attribute into the aggregation named <code>attributes</code>.
 * @param {sap.ui.ux3.ExactAttribute}
 *          oAttribute the attribute to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the attribute should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the attribute is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the attribute is inserted at 
 *             the last position        
 * @return {sap.ui.ux3.Exact} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.Exact.prototype.insertAttribute = function(oAttribute,iIndex) { return new sap.ui.ux3.Exact(); };

/**
 * 
 * Removes all the controls in the aggregation named <code>attributes</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.ux3.ExactAttribute[]} an array of the removed elements (might be empty)
 * @public
 * 
 */
sap.ui.ux3.Exact.prototype.removeAllAttributes = function() { return new Array(); };

/**
 * 
 * Removes an attribute from the aggregation named <code>attributes</code>.
 * @param {int | string | sap.ui.ux3.ExactAttribute} vAttribute the attribute to remove or its index or id
 * @return {sap.ui.ux3.ExactAttribute} the removed attribute or null
 * @public
 * 
 */
sap.ui.ux3.Exact.prototype.removeAttribute = function(vAttribute) { return new sap.ui.ux3.ExactAttribute(); };

/**
 * 
 * Setter for property <code>resultText</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {string} sResultText  new value for property <code>resultText</code>
 * @return {sap.ui.ux3.Exact} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.Exact.prototype.setResultText = function(sResultText) { return new sap.ui.ux3.Exact(); };

/**
 * 
 * Setter for the aggregated <code>settingsMenu</code>.
 * @param oSettingsMenu {sap.ui.commons.Menu}
 * @return {sap.ui.ux3.Exact} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.Exact.prototype.setSettingsMenu = function(oSettingsMenu) { return new sap.ui.ux3.Exact(); };


// ---- sap.ui.ux3.ExactArea --------------------------------------------------------------------------

/**
 * 
 * Constructor for a new ExactArea.
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
 * <li>{@link #getToolbarVisible toolbarVisible} : boolean (default: true)</li>
 * <li>{@link #getVisible visible} : boolean (default: true)</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getContent content} : sap.ui.core.Control[]</li>
 * <li>{@link #getToolbarItems toolbarItems} : sap.ui.commons.ToolbarItem[]</li></ul>
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
 * Consists of two sections: A tool bar and a content area where arbitrary controls can be added.
 * The ExactArea is intended to be used for the Exact design approach but alternatively also in a stand alone version.
 * @extends sap.ui.core.Control
 * @version 1.15.1-SNAPSHOT
 * @constructor   
 * @public
 * @experimental Since version 1.6. 
 * API is not yet finished and might change completely
 * 
 */
sap.ui.ux3.ExactArea = function(sId,mSettings) {};
/**
 * 
 * Adds some content <code>oContent</code> 
 * to the aggregation named <code>content</code>.
 * @param {sap.ui.core.Control}
 *            oContent the content to add; if empty, nothing is inserted
 * @return {sap.ui.ux3.ExactArea} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.ExactArea.prototype.addContent = function(oContent) { return new sap.ui.ux3.ExactArea(); };

/**
 * 
 * Adds some toolbarItem <code>oToolbarItem</code> 
 * to the aggregation named <code>toolbarItems</code>.
 * @param {sap.ui.commons.ToolbarItem}
 *            oToolbarItem the toolbarItem to add; if empty, nothing is inserted
 * @return {sap.ui.ux3.ExactArea} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.ExactArea.prototype.addToolbarItem = function(oToolbarItem) { return new sap.ui.ux3.ExactArea(); };

/**
 * 
 * Destroys all the content in the aggregation 
 * named <code>content</code>.
 * @return {sap.ui.ux3.ExactArea} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.ExactArea.prototype.destroyContent = function() { return new sap.ui.ux3.ExactArea(); };

/**
 * 
 * Destroys all the toolbarItems in the aggregation 
 * named <code>toolbarItems</code>.
 * @return {sap.ui.ux3.ExactArea} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.ExactArea.prototype.destroyToolbarItems = function() { return new sap.ui.ux3.ExactArea(); };

/**
 * 
 * Creates a new subclass of class sap.ui.ux3.ExactArea with name <code>sClassName</code> 
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
sap.ui.ux3.ExactArea.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * 
 * Getter for aggregation <code>content</code>.<br/>
 * Arbitrary child controls of the content area
 * @return {sap.ui.core.Control[]}
 * @public
 * 
 */
sap.ui.ux3.ExactArea.prototype.getContent = function() { return new Array(); };

/**
 * 
 * Getter for aggregation <code>toolbarItems</code>.<br/>
 * Tool bar items which shall be shown in the tool bar.
 * @return {sap.ui.commons.ToolbarItem[]}
 * @public
 * 
 */
sap.ui.ux3.ExactArea.prototype.getToolbarItems = function() { return new Array(); };

/**
 * 
 * Getter for property <code>toolbarVisible</code>.
 * Specifies whether the tool bar shall be visible
 * </p><p>
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>toolbarVisible</code>
 * @public
 * 
 */
sap.ui.ux3.ExactArea.prototype.getToolbarVisible = function() { return false; };

/**
 * 
 * Getter for property <code>visible</code>.
 * Specifies whether the control shall be visible
 * </p><p>
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>visible</code>
 * @public
 * 
 */
sap.ui.ux3.ExactArea.prototype.getVisible = function() { return false; };

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
sap.ui.ux3.ExactArea.prototype.indexOfContent = function(oContent) { return 0; };

/**
 * 
 * Checks for the provided <code>sap.ui.commons.ToolbarItem</code> in the aggregation named <code>toolbarItems</code> 
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.commons.ToolbarItem}
 *            oToolbarItem the toolbarItem whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * 
 */
sap.ui.ux3.ExactArea.prototype.indexOfToolbarItem = function(oToolbarItem) { return 0; };

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
 * @return {sap.ui.ux3.ExactArea} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.ExactArea.prototype.insertContent = function(oContent,iIndex) { return new sap.ui.ux3.ExactArea(); };

/**
 * 
 * Inserts a toolbarItem into the aggregation named <code>toolbarItems</code>.
 * @param {sap.ui.commons.ToolbarItem}
 *          oToolbarItem the toolbarItem to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the toolbarItem should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the toolbarItem is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the toolbarItem is inserted at 
 *             the last position        
 * @return {sap.ui.ux3.ExactArea} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.ExactArea.prototype.insertToolbarItem = function(oToolbarItem,iIndex) { return new sap.ui.ux3.ExactArea(); };

/**
 * 
 * Removes all the controls in the aggregation named <code>content</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.core.Control[]} an array of the removed elements (might be empty)
 * @public
 * 
 */
sap.ui.ux3.ExactArea.prototype.removeAllContent = function() { return new Array(); };

/**
 * 
 * Removes all the controls in the aggregation named <code>toolbarItems</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.commons.ToolbarItem[]} an array of the removed elements (might be empty)
 * @public
 * 
 */
sap.ui.ux3.ExactArea.prototype.removeAllToolbarItems = function() { return new Array(); };

/**
 * 
 * Removes an content from the aggregation named <code>content</code>.
 * @param {int | string | sap.ui.core.Control} vContent the content to remove or its index or id
 * @return {sap.ui.core.Control} the removed content or null
 * @public
 * 
 */
sap.ui.ux3.ExactArea.prototype.removeContent = function(vContent) { return new sap.ui.core.Control(); };

/**
 * 
 * Removes an toolbarItem from the aggregation named <code>toolbarItems</code>.
 * @param {int | string | sap.ui.commons.ToolbarItem} vToolbarItem the toolbarItem to remove or its index or id
 * @return {sap.ui.commons.ToolbarItem} the removed toolbarItem or null
 * @public
 * 
 */
sap.ui.ux3.ExactArea.prototype.removeToolbarItem = function(vToolbarItem) { return new sap.ui.commons.ToolbarItem(); };

/**
 * 
 * Setter for property <code>toolbarVisible</code>.
 * </p><p>
 * Default value is <code>true</code> 
 * @param {boolean} bToolbarVisible  new value for property <code>toolbarVisible</code>
 * @return {sap.ui.ux3.ExactArea} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.ExactArea.prototype.setToolbarVisible = function(bToolbarVisible) { return new sap.ui.ux3.ExactArea(); };

/**
 * 
 * Setter for property <code>visible</code>.
 * </p><p>
 * Default value is <code>true</code> 
 * @param {boolean} bVisible  new value for property <code>visible</code>
 * @return {sap.ui.ux3.ExactArea} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.ExactArea.prototype.setVisible = function(bVisible) { return new sap.ui.ux3.ExactArea(); };


// ---- sap.ui.ux3.ExactAttribute --------------------------------------------------------------------------

/**
 * 
 * Constructor for a new ExactAttribute.
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
 * <li>{@link #getSelected selected} : boolean</li>
 * <li>{@link #getWidth width} : int (default: 168)</li>
 * <li>{@link #getListOrder listOrder} : sap.ui.ux3.ExactOrder (default: sap.ui.ux3.ExactOrder.Select)</li>
 * <li>{@link #getShowSubAttributesIndicator showSubAttributesIndicator} : boolean (default: true)</li>
 * <li>{@link #getAdditionalData additionalData} : object</li>
 * <li>{@link #getSupplyActive supplyActive} : boolean (default: true)</li>
 * <li>{@link #getAutoActivateSupply autoActivateSupply} : boolean (default: false)</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getAttributes attributes} : sap.ui.ux3.ExactAttribute[]</li></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link sap.ui.ux3.ExactAttribute#event:supplyAttributes supplyAttributes} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
 * </li>
 * </ul> 
 * </p><p>
 * </p><p>
 * In addition, all settings applicable to the base type {@link sap.ui.core.Element#constructor sap.ui.core.Element}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * An element for defining attributes and sub-attributes used within the Exact pattern.
 * @extends sap.ui.core.Element
 * @version 1.15.1-SNAPSHOT
 * @constructor   
 * @public
 * 
 */
sap.ui.ux3.ExactAttribute = function(sId,mSettings) {};
/**
 * 
 * A supply function is a handler which is attached to the supplyAttributes event. The event is fired when the corresponding ExactAttribute is selected, it was already selected when a handler is attached or function getAttributes() is called. 
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {sap.ui.ux3.ExactAttribute} oControlEvent.getParameters.attribute The ExactAttribute
 * @public
 */
sap.ui.ux3.ExactAttribute.prototype.supplyAttributes = function(oControlEvent) { return null; };

/**
 * 
 * Adds some attribute <code>oAttribute</code> 
 * to the aggregation named <code>attributes</code>.
 * @param {sap.ui.ux3.ExactAttribute}
 *            oAttribute the attribute to add; if empty, nothing is inserted
 * @return {sap.ui.ux3.ExactAttribute} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.ExactAttribute.prototype.addAttribute = function(oAttribute) { return new sap.ui.ux3.ExactAttribute(); };

/**
 * 
 * Attach event handler <code>fnFunction</code> to the 'supplyAttributes' event of this <code>sap.ui.ux3.ExactAttribute</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ui.ux3.ExactAttribute</code>.<br/> itself. 
 * </p><p>
 * A supply function is a handler which is attached to the supplyAttributes event. The event is fired when the corresponding ExactAttribute is selected, it was already selected when a handler is attached or function getAttributes() is called. 
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener=this] Context object to call the event handler with. Defaults to this <code>sap.ui.ux3.ExactAttribute</code>.<br/> itself.
 * @return {sap.ui.ux3.ExactAttribute} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.ExactAttribute.prototype.attachSupplyAttributes = function(oData,fnFunction,oListener) { return new sap.ui.ux3.ExactAttribute(); };

/**
 * 
 * Destroys all the attributes in the aggregation 
 * named <code>attributes</code>.
 * @return {sap.ui.ux3.ExactAttribute} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.ExactAttribute.prototype.destroyAttributes = function() { return new sap.ui.ux3.ExactAttribute(); };

/**
 * 
 * Detach event handler <code>fnFunction</code> from the 'supplyAttributes' event of this <code>sap.ui.ux3.ExactAttribute</code>.<br/>
 * </p><p>
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.ux3.ExactAttribute} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.ExactAttribute.prototype.detachSupplyAttributes = function(fnFunction,oListener) { return new sap.ui.ux3.ExactAttribute(); };

/**
 * 
 * Creates a new subclass of class sap.ui.ux3.ExactAttribute with name <code>sClassName</code> 
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
sap.ui.ux3.ExactAttribute.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * 
 * Fire event supplyAttributes to attached listeners.
 * </p><p>
 * Expects following event parameters:
 * <ul>
 * <li>'attribute' of type <code>sap.ui.ux3.ExactAttribute</code> The ExactAttribute</li>
 * </ul>
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.ux3.ExactAttribute} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.ui.ux3.ExactAttribute.prototype.fireSupplyAttributes = function(mArguments) { return new sap.ui.ux3.ExactAttribute(); };

/**
 * 
 * Getter for property <code>additionalData</code>.
 * An example for additional data are database keys
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {object} the value of property <code>additionalData</code>
 * @public
 * 
 */
sap.ui.ux3.ExactAttribute.prototype.getAdditionalData = function() { return new Object(); };

/**
 * 
 * Getter for aggregation <code>attributes</code>.<br/>
 * Values (sub attributes) of this attribute
 * @return {sap.ui.ux3.ExactAttribute[]}
 * @public
 * 
 */
sap.ui.ux3.ExactAttribute.prototype.getAttributes = function() { return new Array(); };

/**
 * 
 * Getter for property <code>autoActivateSupply</code>.
 * If you want the supply function to be called on every select, you can set the autoActivateSupply attribute to true. In this case, supplyActive is automatically
 * set to true on every unselect.
 * </p><p>
 * Default value is <code>false</code>
 * @return {boolean} the value of property <code>autoActivateSupply</code>
 * @public
 * 
 */
sap.ui.ux3.ExactAttribute.prototype.getAutoActivateSupply = function() { return false; };

/**
 * 
 * Getter for property <code>listOrder</code>.
 * The order how the sublists of this attribute should be displayed.
 * </p><p>
 * Default value is <code>Select</code>
 * @return {sap.ui.ux3.ExactOrder} the value of property <code>listOrder</code>
 * @public
 * @since 1.7.1
 * 
 */
sap.ui.ux3.ExactAttribute.prototype.getListOrder = function() { return new sap.ui.ux3.ExactOrder(); };

/**
 * 
 * Getter for property <code>selected</code>.
 * Specifies whether the attribute shall be selected
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {boolean} the value of property <code>selected</code>
 * @public
 * 
 */
sap.ui.ux3.ExactAttribute.prototype.getSelected = function() { return false; };

/**
 * 
 * Getter for property <code>showSubAttributesIndicator</code>.
 * Specifies whether the attribute shall have sub values for visual purposes.
 * The indicator which is a little arrow beside an attribute in the list is computed automatically
 * (getShowSubAttributesIndicator_Computed() of sap.ui.ux3.ExactAttribute).
 * In the case that a supply function is attached, and the supplyActive attribute has value 'true',
 * then the Exact pattern needs a hint if sub attributes are available. The showSubAttributesIndicator attribute is
 * considered then and has to be maintained. If the back-end does not support count-calls, for example,
 * showSubAttributesIndicator should be set to true.
 * </p><p>
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>showSubAttributesIndicator</code>
 * @public
 * 
 */
sap.ui.ux3.ExactAttribute.prototype.getShowSubAttributesIndicator = function() { return false; };

/**
 * 
 * See attribute showSubAttributesIndicator
 * @type void
 * @public
 */
sap.ui.ux3.ExactAttribute.prototype.getShowSubAttributesIndicator_Computed = function() { return null; };

/**
 * 
 * Getter for property <code>supplyActive</code>.
 * The supplyAttributes event is only fired if supplyActive has value true which is the default. After firing the event, the attribute is automatically set to false.
 * The idea is that a supply function is called only once when the data is requested. To enable the event again it is possible to manually set the attribute back to true.
 * </p><p>
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>supplyActive</code>
 * @public
 * 
 */
sap.ui.ux3.ExactAttribute.prototype.getSupplyActive = function() { return false; };

/**
 * 
 * Getter for property <code>text</code>.
 * The attribute name
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {string} the value of property <code>text</code>
 * @public
 * 
 */
sap.ui.ux3.ExactAttribute.prototype.getText = function() { return ""; };

/**
 * 
 * Getter for property <code>width</code>.
 * Specifies the width of the corresponding list in pixels. The value must be between 70 and 500.
 * </p><p>
 * Default value is <code>168</code>
 * @return {int} the value of property <code>width</code>
 * @public
 * @since 1.7.0
 * 
 */
sap.ui.ux3.ExactAttribute.prototype.getWidth = function() { return 0; };

/**
 * 
 * Checks for the provided <code>sap.ui.ux3.ExactAttribute</code> in the aggregation named <code>attributes</code> 
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.ux3.ExactAttribute}
 *            oAttribute the attribute whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * 
 */
sap.ui.ux3.ExactAttribute.prototype.indexOfAttribute = function(oAttribute) { return 0; };

/**
 * 
 * Inserts a attribute into the aggregation named <code>attributes</code>.
 * @param {sap.ui.ux3.ExactAttribute}
 *          oAttribute the attribute to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the attribute should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the attribute is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the attribute is inserted at 
 *             the last position        
 * @return {sap.ui.ux3.ExactAttribute} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.ExactAttribute.prototype.insertAttribute = function(oAttribute,iIndex) { return new sap.ui.ux3.ExactAttribute(); };

/**
 * 
 * Removes all the controls in the aggregation named <code>attributes</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.ux3.ExactAttribute[]} an array of the removed elements (might be empty)
 * @public
 * 
 */
sap.ui.ux3.ExactAttribute.prototype.removeAllAttributes = function() { return new Array(); };

/**
 * 
 * Removes an attribute from the aggregation named <code>attributes</code>.
 * @param {int | string | sap.ui.ux3.ExactAttribute} vAttribute the attribute to remove or its index or id
 * @return {sap.ui.ux3.ExactAttribute} the removed attribute or null
 * @public
 * 
 */
sap.ui.ux3.ExactAttribute.prototype.removeAttribute = function(vAttribute) { return new sap.ui.ux3.ExactAttribute(); };

/**
 * 
 * Scrolls the corresponding list of this attribute until the given direct child attribute is visible. If the corresponding list is not yet visible the call is buffered until the list is available.
 * @param {sap.ui.ux3.ExactAttribute} 
 *         oOAttribute
 *         The direct child attribute
 * @type void
 * @public
 */
sap.ui.ux3.ExactAttribute.prototype.scrollTo = function(oOAttribute) { return null; };

/**
 * 
 * Setter for property <code>additionalData</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {object} oAdditionalData  new value for property <code>additionalData</code>
 * @return {sap.ui.ux3.ExactAttribute} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.ExactAttribute.prototype.setAdditionalData = function(oAdditionalData) { return new sap.ui.ux3.ExactAttribute(); };

/**
 * 
 * Setter for property <code>autoActivateSupply</code>.
 * </p><p>
 * Default value is <code>false</code> 
 * @param {boolean} bAutoActivateSupply  new value for property <code>autoActivateSupply</code>
 * @return {sap.ui.ux3.ExactAttribute} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.ExactAttribute.prototype.setAutoActivateSupply = function(bAutoActivateSupply) { return new sap.ui.ux3.ExactAttribute(); };

/**
 * 
 * Setter for property <code>listOrder</code>.
 * </p><p>
 * Default value is <code>Select</code> 
 * @param {sap.ui.ux3.ExactOrder} oListOrder  new value for property <code>listOrder</code>
 * @return {sap.ui.ux3.ExactAttribute} <code>this</code> to allow method chaining
 * @public
 * @since 1.7.1
 * 
 */
sap.ui.ux3.ExactAttribute.prototype.setListOrder = function(oListOrder) { return new sap.ui.ux3.ExactAttribute(); };

/**
 * 
 * @see sap.ui.core.Element.prototype.setProperty
 * @protected
 */
sap.ui.ux3.ExactAttribute.prototype.setProperty = function(sPropertyName,oValue,bSuppressRerendering) { return null; };

/**
 * 
 * Setter for property <code>selected</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {boolean} bSelected  new value for property <code>selected</code>
 * @return {sap.ui.ux3.ExactAttribute} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.ExactAttribute.prototype.setSelected = function(bSelected) { return new sap.ui.ux3.ExactAttribute(); };

/**
 * 
 * Setter for property <code>showSubAttributesIndicator</code>.
 * </p><p>
 * Default value is <code>true</code> 
 * @param {boolean} bShowSubAttributesIndicator  new value for property <code>showSubAttributesIndicator</code>
 * @return {sap.ui.ux3.ExactAttribute} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.ExactAttribute.prototype.setShowSubAttributesIndicator = function(bShowSubAttributesIndicator) { return new sap.ui.ux3.ExactAttribute(); };

/**
 * 
 * Setter for property <code>supplyActive</code>.
 * </p><p>
 * Default value is <code>true</code> 
 * @param {boolean} bSupplyActive  new value for property <code>supplyActive</code>
 * @return {sap.ui.ux3.ExactAttribute} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.ExactAttribute.prototype.setSupplyActive = function(bSupplyActive) { return new sap.ui.ux3.ExactAttribute(); };

/**
 * 
 * Setter for property <code>text</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {string} sText  new value for property <code>text</code>
 * @return {sap.ui.ux3.ExactAttribute} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.ExactAttribute.prototype.setText = function(sText) { return new sap.ui.ux3.ExactAttribute(); };

/**
 * 
 * @see sap.ui.core.Element.prototype.setTooltip
 * @public
 */
sap.ui.ux3.ExactAttribute.prototype.setTooltip = function(oTooltip) { return null; };

/**
 * 
 * Setter for property <code>width</code>.
 * </p><p>
 * Default value is <code>168</code> 
 * @param {int} iWidth  new value for property <code>width</code>
 * @return {sap.ui.ux3.ExactAttribute} <code>this</code> to allow method chaining
 * @public
 * @since 1.7.0
 * 
 */
sap.ui.ux3.ExactAttribute.prototype.setWidth = function(iWidth) { return new sap.ui.ux3.ExactAttribute(); };


// ---- sap.ui.ux3.ExactBrowser --------------------------------------------------------------------------

/**
 * 
 * Constructor for a new ExactBrowser.
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
 * <li>{@link #getTitle title} : string</li>
 * <li>{@link #getHeaderTitle headerTitle} : string</li>
 * <li>{@link #getVisible visible} : boolean (default: true)</li>
 * <li>{@link #getTopListOrder topListOrder} : sap.ui.ux3.ExactOrder (default: sap.ui.ux3.ExactOrder.Select)</li>
 * <li>{@link #getEnableListClose enableListClose} : boolean (default: false)</li>
 * <li>{@link #getListHeight listHeight} : int (default: 290)</li>
 * <li>{@link #getShowHeader showHeader} : boolean (default: false)</li>
 * <li>{@link #getShowTopList showTopList} : boolean (default: true)</li>
 * <li>{@link #getEnableReset enableReset} : boolean (default: true)</li>
 * <li>{@link #getEnableSave enableSave} : boolean (default: false)</li>
 * <li>{@link #getTopListWidth topListWidth} : int (default: 168)</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getAttributes attributes} : sap.ui.ux3.ExactAttribute[]</li>
 * <li>{@link #getOptionsMenu optionsMenu} : sap.ui.commons.Menu</li></ul>
 * </li>
 * <li>Associations
 * <ul>
 * <li>{@link #getFollowUpControl followUpControl} : string | sap.ui.core.Control</li></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link sap.ui.ux3.ExactBrowser#event:attributeSelected attributeSelected} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.ui.ux3.ExactBrowser#event:save save} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
 * </li>
 * </ul> 
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * Attribute browse area used within the Exact pattern. The main benefit of this control is the high flexibility when large data amounts shall be displayed
 * in the form of structured data sets with a high or low interdependency level. From lists - which can be nested according to the defined attributes - the user can choose
 * entries and thereby trigger the display of further information, depending on the chosen entry/entries (multiple selection supported).
 * @extends sap.ui.core.Control
 * @version 1.15.1-SNAPSHOT
 * @constructor   
 * @public
 * 
 */
sap.ui.ux3.ExactBrowser = function(sId,mSettings) {};
/**
 * 
 * Event is fired when an attribute is selected or unselected. 
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {sap.ui.ux3.ExactAttribute} oControlEvent.getParameters.attribute The attribute which was selected or unselected recently
 * @param {object} oControlEvent.getParameters.allAttributes Array of all selected ExactAttributes
 * @public
 */
sap.ui.ux3.ExactBrowser.prototype.attributeSelected = function(oControlEvent) { return null; };

/**
 * 
 * Event is fired when an attribute is selected or unselected. 
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 */
sap.ui.ux3.ExactBrowser.prototype.save = function(oControlEvent) { return null; };

/**
 * 
 * Adds some attribute <code>oAttribute</code> 
 * to the aggregation named <code>attributes</code>.
 * @param {sap.ui.ux3.ExactAttribute}
 *            oAttribute the attribute to add; if empty, nothing is inserted
 * @return {sap.ui.ux3.ExactBrowser} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.ExactBrowser.prototype.addAttribute = function(oAttribute) { return new sap.ui.ux3.ExactBrowser(); };

/**
 * 
 * Attach event handler <code>fnFunction</code> to the 'attributeSelected' event of this <code>sap.ui.ux3.ExactBrowser</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ui.ux3.ExactBrowser</code>.<br/> itself. 
 * </p><p>
 * Event is fired when an attribute is selected or unselected. 
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener=this] Context object to call the event handler with. Defaults to this <code>sap.ui.ux3.ExactBrowser</code>.<br/> itself.
 * @return {sap.ui.ux3.ExactBrowser} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.ExactBrowser.prototype.attachAttributeSelected = function(oData,fnFunction,oListener) { return new sap.ui.ux3.ExactBrowser(); };

/**
 * 
 * Attach event handler <code>fnFunction</code> to the 'save' event of this <code>sap.ui.ux3.ExactBrowser</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ui.ux3.ExactBrowser</code>.<br/> itself. 
 * </p><p>
 * Event is fired when an attribute is selected or unselected. 
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener=this] Context object to call the event handler with. Defaults to this <code>sap.ui.ux3.ExactBrowser</code>.<br/> itself.
 * @return {sap.ui.ux3.ExactBrowser} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.ExactBrowser.prototype.attachSave = function(oData,fnFunction,oListener) { return new sap.ui.ux3.ExactBrowser(); };

/**
 * 
 * Destroys all the attributes in the aggregation 
 * named <code>attributes</code>.
 * @return {sap.ui.ux3.ExactBrowser} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.ExactBrowser.prototype.destroyAttributes = function() { return new sap.ui.ux3.ExactBrowser(); };

/**
 * 
 * Destroys the optionsMenu in the aggregation 
 * named <code>optionsMenu</code>.
 * @return {sap.ui.ux3.ExactBrowser} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.ExactBrowser.prototype.destroyOptionsMenu = function() { return new sap.ui.ux3.ExactBrowser(); };

/**
 * 
 * Detach event handler <code>fnFunction</code> from the 'attributeSelected' event of this <code>sap.ui.ux3.ExactBrowser</code>.<br/>
 * </p><p>
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.ux3.ExactBrowser} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.ExactBrowser.prototype.detachAttributeSelected = function(fnFunction,oListener) { return new sap.ui.ux3.ExactBrowser(); };

/**
 * 
 * Detach event handler <code>fnFunction</code> from the 'save' event of this <code>sap.ui.ux3.ExactBrowser</code>.<br/>
 * </p><p>
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.ux3.ExactBrowser} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.ExactBrowser.prototype.detachSave = function(fnFunction,oListener) { return new sap.ui.ux3.ExactBrowser(); };

/**
 * 
 * Creates a new subclass of class sap.ui.ux3.ExactBrowser with name <code>sClassName</code> 
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
sap.ui.ux3.ExactBrowser.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * 
 * Fire event attributeSelected to attached listeners.
 * </p><p>
 * Expects following event parameters:
 * <ul>
 * <li>'attribute' of type <code>sap.ui.ux3.ExactAttribute</code> The attribute which was selected or unselected recently</li>
 * <li>'allAttributes' of type <code>object</code> Array of all selected ExactAttributes</li>
 * </ul>
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.ux3.ExactBrowser} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.ui.ux3.ExactBrowser.prototype.fireAttributeSelected = function(mArguments) { return new sap.ui.ux3.ExactBrowser(); };

/**
 * 
 * Fire event save to attached listeners.
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.ux3.ExactBrowser} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.ui.ux3.ExactBrowser.prototype.fireSave = function(mArguments) { return new sap.ui.ux3.ExactBrowser(); };

/**
 * 
 * Getter for aggregation <code>attributes</code>.<br/>
 * The attributes which shall be available.
 * @return {sap.ui.ux3.ExactAttribute[]}
 * @public
 * 
 */
sap.ui.ux3.ExactBrowser.prototype.getAttributes = function() { return new Array(); };

/**
 * 
 * Getter for property <code>enableListClose</code>.
 * Enables the close icons of the displayed lists.
 * </p><p>
 * Default value is <code>false</code>
 * @return {boolean} the value of property <code>enableListClose</code>
 * @public
 * 
 */
sap.ui.ux3.ExactBrowser.prototype.getEnableListClose = function() { return false; };

/**
 * 
 * Getter for property <code>enableReset</code>.
 * Whether the reset functionality should be available in the header area.
 * </p><p>
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>enableReset</code>
 * @public
 * 
 */
sap.ui.ux3.ExactBrowser.prototype.getEnableReset = function() { return false; };

/**
 * 
 * Getter for property <code>enableSave</code>.
 * Whether the save button should be available in the header area.
 * </p><p>
 * Default value is <code>false</code>
 * @return {boolean} the value of property <code>enableSave</code>
 * @public
 * @since 1.9.2
 * 
 */
sap.ui.ux3.ExactBrowser.prototype.getEnableSave = function() { return false; };

/**
 * 
 * </p><p>
 * The successor control of the Exact Browser. The id of this control is used in the ARIA description of the control.
 * Additionally it is possible to directly jump to this control via the F6 key.
 * @return {string} Id of the element which is the current target of the <code>followUpControl</code> association, or null
 * @public
 * 
 */
sap.ui.ux3.ExactBrowser.prototype.getFollowUpControl = function() { return ""; };

/**
 * 
 * Getter for property <code>headerTitle</code>.
 * Title text in the header of the Exact Browser.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {string} the value of property <code>headerTitle</code>
 * @public
 * 
 */
sap.ui.ux3.ExactBrowser.prototype.getHeaderTitle = function() { return ""; };

/**
 * 
 * Getter for property <code>listHeight</code>.
 * The height of the list area in px.
 * </p><p>
 * Default value is <code>290</code>
 * @return {int} the value of property <code>listHeight</code>
 * @public
 * 
 */
sap.ui.ux3.ExactBrowser.prototype.getListHeight = function() { return 0; };

/**
 * 
 * Getter for aggregation <code>optionsMenu</code>.<br/>
 * Menu with options. The menu can not used when the property showTopList is set to false.
 * @return {sap.ui.commons.Menu}
 * @public
 * 
 */
sap.ui.ux3.ExactBrowser.prototype.getOptionsMenu = function() { return new sap.ui.commons.Menu(); };

/**
 * 
 * Getter for property <code>showHeader</code>.
 * Whether the header area of the ExactBrowser should be shown.
 * </p><p>
 * Default value is <code>false</code>
 * @return {boolean} the value of property <code>showHeader</code>
 * @public
 * 
 */
sap.ui.ux3.ExactBrowser.prototype.getShowHeader = function() { return false; };

/**
 * 
 * Getter for property <code>showTopList</code>.
 * Whether the top list of the ExactBrowser should be shown. When the property is set to false the
 * application must ensure to select top level attributes appropriately.
 * </p><p>
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>showTopList</code>
 * @public
 * @since 1.7.0
 * 
 */
sap.ui.ux3.ExactBrowser.prototype.getShowTopList = function() { return false; };

/**
 * 
 * Getter for property <code>title</code>.
 * Title text in the list area of the Exact Browser. The title is not shown when the property showTopList is set to false.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {string} the value of property <code>title</code>
 * @public
 * 
 */
sap.ui.ux3.ExactBrowser.prototype.getTitle = function() { return ""; };

/**
 * 
 * Getter for property <code>topListOrder</code>.
 * The order how the sublists of the top level list should be displayed.
 * </p><p>
 * Default value is <code>Select</code>
 * @return {sap.ui.ux3.ExactOrder} the value of property <code>topListOrder</code>
 * @public
 * @since 1.7.1
 * 
 */
sap.ui.ux3.ExactBrowser.prototype.getTopListOrder = function() { return new sap.ui.ux3.ExactOrder(); };

/**
 * 
 * Getter for property <code>topListWidth</code>.
 * Specifies the width of the top list in pixels. The value must be between 70 and 500.
 * </p><p>
 * Default value is <code>168</code>
 * @return {int} the value of property <code>topListWidth</code>
 * @public
 * @since 1.7.0
 * 
 */
sap.ui.ux3.ExactBrowser.prototype.getTopListWidth = function() { return 0; };

/**
 * 
 * Getter for property <code>visible</code>.
 * Invisible ExactBrowsers are not rendered.
 * </p><p>
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>visible</code>
 * @public
 * 
 */
sap.ui.ux3.ExactBrowser.prototype.getVisible = function() { return false; };

/**
 * 
 * Checks for the provided <code>sap.ui.ux3.ExactAttribute</code> in the aggregation named <code>attributes</code> 
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.ux3.ExactAttribute}
 *            oAttribute the attribute whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * 
 */
sap.ui.ux3.ExactBrowser.prototype.indexOfAttribute = function(oAttribute) { return 0; };

/**
 * 
 * Inserts a attribute into the aggregation named <code>attributes</code>.
 * @param {sap.ui.ux3.ExactAttribute}
 *          oAttribute the attribute to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the attribute should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the attribute is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the attribute is inserted at 
 *             the last position        
 * @return {sap.ui.ux3.ExactBrowser} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.ExactBrowser.prototype.insertAttribute = function(oAttribute,iIndex) { return new sap.ui.ux3.ExactBrowser(); };

/**
 * 
 * Removes all the controls in the aggregation named <code>attributes</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.ux3.ExactAttribute[]} an array of the removed elements (might be empty)
 * @public
 * 
 */
sap.ui.ux3.ExactBrowser.prototype.removeAllAttributes = function() { return new Array(); };

/**
 * 
 * Removes an attribute from the aggregation named <code>attributes</code>.
 * @param {int | string | sap.ui.ux3.ExactAttribute} vAttribute the attribute to remove or its index or id
 * @return {sap.ui.ux3.ExactAttribute} the removed attribute or null
 * @public
 * 
 */
sap.ui.ux3.ExactBrowser.prototype.removeAttribute = function(vAttribute) { return new sap.ui.ux3.ExactAttribute(); };

/**
 * 
 * Deselects all currently selected attributes and closes all attribute lists.
 * @type void
 * @public
 */
sap.ui.ux3.ExactBrowser.prototype.reset = function() { return null; };

/**
 * 
 * Setter for property <code>enableListClose</code>.
 * </p><p>
 * Default value is <code>false</code> 
 * @param {boolean} bEnableListClose  new value for property <code>enableListClose</code>
 * @return {sap.ui.ux3.ExactBrowser} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.ExactBrowser.prototype.setEnableListClose = function(bEnableListClose) { return new sap.ui.ux3.ExactBrowser(); };

/**
 * 
 * Setter for property <code>enableReset</code>.
 * </p><p>
 * Default value is <code>true</code> 
 * @param {boolean} bEnableReset  new value for property <code>enableReset</code>
 * @return {sap.ui.ux3.ExactBrowser} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.ExactBrowser.prototype.setEnableReset = function(bEnableReset) { return new sap.ui.ux3.ExactBrowser(); };

/**
 * 
 * Setter for property <code>enableSave</code>.
 * </p><p>
 * Default value is <code>false</code> 
 * @param {boolean} bEnableSave  new value for property <code>enableSave</code>
 * @return {sap.ui.ux3.ExactBrowser} <code>this</code> to allow method chaining
 * @public
 * @since 1.9.2
 * 
 */
sap.ui.ux3.ExactBrowser.prototype.setEnableSave = function(bEnableSave) { return new sap.ui.ux3.ExactBrowser(); };

/**
 * 
 * </p><p>
 * The successor control of the Exact Browser. The id of this control is used in the ARIA description of the control.
 * Additionally it is possible to directly jump to this control via the F6 key.
 * @param {string | sap.ui.core.Control} vFollowUpControl 
 *    Id of an element which becomes the new target of this <code>followUpControl</code> association.
 *    Alternatively, an element instance may be given.
 * @return {sap.ui.ux3.ExactBrowser} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.ExactBrowser.prototype.setFollowUpControl = function(vFollowUpControl) { return new sap.ui.ux3.ExactBrowser(); };

/**
 * 
 * Setter for property <code>headerTitle</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {string} sHeaderTitle  new value for property <code>headerTitle</code>
 * @return {sap.ui.ux3.ExactBrowser} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.ExactBrowser.prototype.setHeaderTitle = function(sHeaderTitle) { return new sap.ui.ux3.ExactBrowser(); };

/**
 * 
 * Setter for property <code>listHeight</code>.
 * </p><p>
 * Default value is <code>290</code> 
 * @param {int} iListHeight  new value for property <code>listHeight</code>
 * @return {sap.ui.ux3.ExactBrowser} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.ExactBrowser.prototype.setListHeight = function(iListHeight) { return new sap.ui.ux3.ExactBrowser(); };

/**
 * 
 * Setter for the aggregated <code>optionsMenu</code>.
 * @param oOptionsMenu {sap.ui.commons.Menu}
 * @return {sap.ui.ux3.ExactBrowser} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.ExactBrowser.prototype.setOptionsMenu = function(oOptionsMenu) { return new sap.ui.ux3.ExactBrowser(); };

/**
 * 
 * Setter for property <code>showHeader</code>.
 * </p><p>
 * Default value is <code>false</code> 
 * @param {boolean} bShowHeader  new value for property <code>showHeader</code>
 * @return {sap.ui.ux3.ExactBrowser} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.ExactBrowser.prototype.setShowHeader = function(bShowHeader) { return new sap.ui.ux3.ExactBrowser(); };

/**
 * 
 * Setter for property <code>showTopList</code>.
 * </p><p>
 * Default value is <code>true</code> 
 * @param {boolean} bShowTopList  new value for property <code>showTopList</code>
 * @return {sap.ui.ux3.ExactBrowser} <code>this</code> to allow method chaining
 * @public
 * @since 1.7.0
 * 
 */
sap.ui.ux3.ExactBrowser.prototype.setShowTopList = function(bShowTopList) { return new sap.ui.ux3.ExactBrowser(); };

/**
 * 
 * Setter for property <code>title</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {string} sTitle  new value for property <code>title</code>
 * @return {sap.ui.ux3.ExactBrowser} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.ExactBrowser.prototype.setTitle = function(sTitle) { return new sap.ui.ux3.ExactBrowser(); };

/**
 * 
 * Setter for property <code>topListOrder</code>.
 * </p><p>
 * Default value is <code>Select</code> 
 * @param {sap.ui.ux3.ExactOrder} oTopListOrder  new value for property <code>topListOrder</code>
 * @return {sap.ui.ux3.ExactBrowser} <code>this</code> to allow method chaining
 * @public
 * @since 1.7.1
 * 
 */
sap.ui.ux3.ExactBrowser.prototype.setTopListOrder = function(oTopListOrder) { return new sap.ui.ux3.ExactBrowser(); };

/**
 * 
 * Setter for property <code>topListWidth</code>.
 * </p><p>
 * Default value is <code>168</code> 
 * @param {int} iTopListWidth  new value for property <code>topListWidth</code>
 * @return {sap.ui.ux3.ExactBrowser} <code>this</code> to allow method chaining
 * @public
 * @since 1.7.0
 * 
 */
sap.ui.ux3.ExactBrowser.prototype.setTopListWidth = function(iTopListWidth) { return new sap.ui.ux3.ExactBrowser(); };

/**
 * 
 * Setter for property <code>visible</code>.
 * </p><p>
 * Default value is <code>true</code> 
 * @param {boolean} bVisible  new value for property <code>visible</code>
 * @return {sap.ui.ux3.ExactBrowser} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.ExactBrowser.prototype.setVisible = function(bVisible) { return new sap.ui.ux3.ExactBrowser(); };


// ---- sap.ui.ux3.ExactOrder --------------------------------------------------------------------------

// dummy function to make Eclipse aware of namespace
sap.ui.ux3.ExactOrder.toString = function() { return ""; };

// ---- sap.ui.ux3.FacetFilter --------------------------------------------------------------------------

/**
 * 
 * Constructor for a new FacetFilter.
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
 * <li>{@link #getVisible visible} : boolean (default: true)</li>
 * <li>{@link #getVisibleItemCountMode visibleItemCountMode} : sap.ui.ux3.VisibleItemCountMode (default: sap.ui.ux3.VisibleItemCountMode.Fixed)</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getLists lists} : sap.ui.ux3.FacetFilterList[]</li></ul>
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
 * FacetFilter Control.
 * @extends sap.ui.core.Control
 * @version 1.15.1-SNAPSHOT
 * @constructor   
 * @public
 * 
 */
sap.ui.ux3.FacetFilter = function(sId,mSettings) {};
/**
 * 
 * Adds some list <code>oList</code> 
 * to the aggregation named <code>lists</code>.
 * @param {sap.ui.ux3.FacetFilterList}
 *            oList the list to add; if empty, nothing is inserted
 * @return {sap.ui.ux3.FacetFilter} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.FacetFilter.prototype.addList = function(oList) { return new sap.ui.ux3.FacetFilter(); };

/**
 * 
 * Destroys all the lists in the aggregation 
 * named <code>lists</code>.
 * @return {sap.ui.ux3.FacetFilter} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.FacetFilter.prototype.destroyLists = function() { return new sap.ui.ux3.FacetFilter(); };

/**
 * 
 * Creates a new subclass of class sap.ui.ux3.FacetFilter with name <code>sClassName</code> 
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
sap.ui.ux3.FacetFilter.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * 
 * Getter for aggregation <code>lists</code>.<br/>
 * Facet Filter list represents the list of the filter values and the title of this list.
 * @return {sap.ui.ux3.FacetFilterList[]}
 * @public
 * 
 */
sap.ui.ux3.FacetFilter.prototype.getLists = function() { return new Array(); };

/**
 * 
 * Getter for property <code>visible</code>.
 * Invisible controls are not rendered
 * </p><p>
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>visible</code>
 * @public
 * 
 */
sap.ui.ux3.FacetFilter.prototype.getVisible = function() { return false; };

/**
 * 
 * Getter for property <code>visibleItemCountMode</code>.
 * If the value is "Auto" - the Facet Filter takes the whole available height. If "Fixed" , then the default number of Facet Filter Items (5) is visible.
 * </p><p>
 * Default value is <code>Fixed</code>
 * @return {sap.ui.ux3.VisibleItemCountMode} the value of property <code>visibleItemCountMode</code>
 * @public
 * 
 */
sap.ui.ux3.FacetFilter.prototype.getVisibleItemCountMode = function() { return new sap.ui.ux3.VisibleItemCountMode(); };

/**
 * 
 * Checks for the provided <code>sap.ui.ux3.FacetFilterList</code> in the aggregation named <code>lists</code> 
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.ux3.FacetFilterList}
 *            oList the list whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * 
 */
sap.ui.ux3.FacetFilter.prototype.indexOfList = function(oList) { return 0; };

/**
 * 
 * Inserts a list into the aggregation named <code>lists</code>.
 * @param {sap.ui.ux3.FacetFilterList}
 *          oList the list to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the list should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the list is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the list is inserted at 
 *             the last position        
 * @return {sap.ui.ux3.FacetFilter} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.FacetFilter.prototype.insertList = function(oList,iIndex) { return new sap.ui.ux3.FacetFilter(); };

/**
 * 
 * Removes all the controls in the aggregation named <code>lists</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.ux3.FacetFilterList[]} an array of the removed elements (might be empty)
 * @public
 * 
 */
sap.ui.ux3.FacetFilter.prototype.removeAllLists = function() { return new Array(); };

/**
 * 
 * Removes an list from the aggregation named <code>lists</code>.
 * @param {int | string | sap.ui.ux3.FacetFilterList} vList the list to remove or its index or id
 * @return {sap.ui.ux3.FacetFilterList} the removed list or null
 * @public
 * 
 */
sap.ui.ux3.FacetFilter.prototype.removeList = function(vList) { return new sap.ui.ux3.FacetFilterList(); };

/**
 * 
 * Setter for property <code>visible</code>.
 * </p><p>
 * Default value is <code>true</code> 
 * @param {boolean} bVisible  new value for property <code>visible</code>
 * @return {sap.ui.ux3.FacetFilter} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.FacetFilter.prototype.setVisible = function(bVisible) { return new sap.ui.ux3.FacetFilter(); };

/**
 * 
 * Setter for property <code>visibleItemCountMode</code>.
 * </p><p>
 * Default value is <code>Fixed</code> 
 * @param {sap.ui.ux3.VisibleItemCountMode} oVisibleItemCountMode  new value for property <code>visibleItemCountMode</code>
 * @return {sap.ui.ux3.FacetFilter} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.FacetFilter.prototype.setVisibleItemCountMode = function(oVisibleItemCountMode) { return new sap.ui.ux3.FacetFilter(); };


// ---- sap.ui.ux3.FacetFilterList --------------------------------------------------------------------------

/**
 * 
 * Constructor for a new FacetFilterList.
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
 * <li>{@link #getTitle title} : string</li>
 * <li>{@link #getMultiSelect multiSelect} : boolean (default: true)</li>
 * <li>{@link #getDisplaySecondaryValues displaySecondaryValues} : boolean (default: false)</li>
 * <li>{@link #getSelectedKeys selectedKeys} : string[]</li>
 * <li>{@link #getShowCounter showCounter} : boolean (default: true)</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getItems items} : sap.ui.core.ListItem[]</li></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link sap.ui.ux3.FacetFilterList#event:select select} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
 * </li>
 * </ul> 
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * List to be used with the FacetFilter control. The control is not intended to be used stand alone.
 * @extends sap.ui.core.Control
 * @version 1.15.1-SNAPSHOT
 * @constructor   
 * @public
 * 
 */
sap.ui.ux3.FacetFilterList = function(sId,mSettings) {};
/**
 * 
 * On Select event. 
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {string} oControlEvent.getParameters.id Id of the FacetFilterList taht fires the event.
 * @param {int[]} oControlEvent.getParameters.selectedIndices Array of selected Indices.
 * @param {sap.ui.core.ListItem[]} oControlEvent.getParameters.selectedItems Array of selected Items.
 * @param {boolean} oControlEvent.getParameters.all If it is true, then Item All is selected. That means all items in the list are selected - no filter is set.
 * @public
 */
sap.ui.ux3.FacetFilterList.prototype.select = function(oControlEvent) { return null; };

/**
 * 
 * Adds some item <code>oItem</code> 
 * to the aggregation named <code>items</code>.
 * @param {sap.ui.core.ListItem}
 *            oItem the item to add; if empty, nothing is inserted
 * @return {sap.ui.ux3.FacetFilterList} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.FacetFilterList.prototype.addItem = function(oItem) { return new sap.ui.ux3.FacetFilterList(); };

/**
 * 
 * Attach event handler <code>fnFunction</code> to the 'select' event of this <code>sap.ui.ux3.FacetFilterList</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ui.ux3.FacetFilterList</code>.<br/> itself. 
 * </p><p>
 * On Select event. 
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener=this] Context object to call the event handler with. Defaults to this <code>sap.ui.ux3.FacetFilterList</code>.<br/> itself.
 * @return {sap.ui.ux3.FacetFilterList} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.FacetFilterList.prototype.attachSelect = function(oData,fnFunction,oListener) { return new sap.ui.ux3.FacetFilterList(); };

/**
 * 
 * Destroys all the items in the aggregation 
 * named <code>items</code>.
 * @return {sap.ui.ux3.FacetFilterList} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.FacetFilterList.prototype.destroyItems = function() { return new sap.ui.ux3.FacetFilterList(); };

/**
 * 
 * Detach event handler <code>fnFunction</code> from the 'select' event of this <code>sap.ui.ux3.FacetFilterList</code>.<br/>
 * </p><p>
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.ux3.FacetFilterList} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.FacetFilterList.prototype.detachSelect = function(fnFunction,oListener) { return new sap.ui.ux3.FacetFilterList(); };

/**
 * 
 * Creates a new subclass of class sap.ui.ux3.FacetFilterList with name <code>sClassName</code> 
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
sap.ui.ux3.FacetFilterList.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * 
 * Fire event select to attached listeners.
 * </p><p>
 * Expects following event parameters:
 * <ul>
 * <li>'id' of type <code>string</code> Id of the FacetFilterList taht fires the event.</li>
 * <li>'selectedIndices' of type <code>int[]</code> Array of selected Indices.</li>
 * <li>'selectedItems' of type <code>sap.ui.core.ListItem[]</code> Array of selected Items.</li>
 * <li>'all' of type <code>boolean</code> If it is true, then Item All is selected. That means all items in the list are selected - no filter is set.</li>
 * </ul>
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.ux3.FacetFilterList} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.ui.ux3.FacetFilterList.prototype.fireSelect = function(mArguments) { return new sap.ui.ux3.FacetFilterList(); };

/**
 * 
 * Getter for property <code>displaySecondaryValues</code>.
 * Specifies whether the text values from the additionalText property (see sap.ui.core.ListItems) shall be displayed.
 * </p><p>
 * Default value is <code>false</code>
 * @return {boolean} the value of property <code>displaySecondaryValues</code>
 * @public
 * @since 1.9.0
 * 
 */
sap.ui.ux3.FacetFilterList.prototype.getDisplaySecondaryValues = function() { return false; };

/**
 * 
 * Getter for aggregation <code>items</code>.<br/>
 * The filter values that are presented as a list.
 * @return {sap.ui.core.ListItem[]}
 * @public
 * 
 */
sap.ui.ux3.FacetFilterList.prototype.getItems = function() { return new Array(); };

/**
 * 
 * Getter for property <code>multiSelect</code>.
 * Specifies whether multiple or single selection is used.
 * </p><p>
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>multiSelect</code>
 * @public
 * 
 */
sap.ui.ux3.FacetFilterList.prototype.getMultiSelect = function() { return false; };

/**
 * 
 * Getter for property <code>selectedKeys</code>.
 * Array of type string containing the selected keys.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {string[]} the value of property <code>selectedKeys</code>
 * @public
 * 
 */
sap.ui.ux3.FacetFilterList.prototype.getSelectedKeys = function() { return new Array(); };

/**
 * 
 * Getter for property <code>showCounter</code>.
 * Specifies whether the counter for all entries is shown.
 * </p><p>
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>showCounter</code>
 * @public
 * 
 */
sap.ui.ux3.FacetFilterList.prototype.getShowCounter = function() { return false; };

/**
 * 
 * Getter for property <code>title</code>.
 * The title of this list.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {string} the value of property <code>title</code>
 * @public
 * 
 */
sap.ui.ux3.FacetFilterList.prototype.getTitle = function() { return ""; };

/**
 * 
 * Checks for the provided <code>sap.ui.core.ListItem</code> in the aggregation named <code>items</code> 
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.core.ListItem}
 *            oItem the item whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * 
 */
sap.ui.ux3.FacetFilterList.prototype.indexOfItem = function(oItem) { return 0; };

/**
 * 
 * Inserts a item into the aggregation named <code>items</code>.
 * @param {sap.ui.core.ListItem}
 *          oItem the item to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the item should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the item is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the item is inserted at 
 *             the last position        
 * @return {sap.ui.ux3.FacetFilterList} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.FacetFilterList.prototype.insertItem = function(oItem,iIndex) { return new sap.ui.ux3.FacetFilterList(); };

/**
 * 
 * Removes all the controls in the aggregation named <code>items</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.core.ListItem[]} an array of the removed elements (might be empty)
 * @public
 * 
 */
sap.ui.ux3.FacetFilterList.prototype.removeAllItems = function() { return new Array(); };

/**
 * 
 * Removes an item from the aggregation named <code>items</code>.
 * @param {int | string | sap.ui.core.ListItem} vItem the item to remove or its index or id
 * @return {sap.ui.core.ListItem} the removed item or null
 * @public
 * 
 */
sap.ui.ux3.FacetFilterList.prototype.removeItem = function(vItem) { return new sap.ui.core.ListItem(); };

/**
 * 
 * Setter for property <code>displaySecondaryValues</code>.
 * </p><p>
 * Default value is <code>false</code> 
 * @param {boolean} bDisplaySecondaryValues  new value for property <code>displaySecondaryValues</code>
 * @return {sap.ui.ux3.FacetFilterList} <code>this</code> to allow method chaining
 * @public
 * @since 1.9.0
 * 
 */
sap.ui.ux3.FacetFilterList.prototype.setDisplaySecondaryValues = function(bDisplaySecondaryValues) { return new sap.ui.ux3.FacetFilterList(); };

/**
 * 
 * Setter for property <code>multiSelect</code>.
 * </p><p>
 * Default value is <code>true</code> 
 * @param {boolean} bMultiSelect  new value for property <code>multiSelect</code>
 * @return {sap.ui.ux3.FacetFilterList} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.FacetFilterList.prototype.setMultiSelect = function(bMultiSelect) { return new sap.ui.ux3.FacetFilterList(); };

/**
 * 
 * Setter for property <code>selectedKeys</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {string[]} aSelectedKeys  new value for property <code>selectedKeys</code>
 * @return {sap.ui.ux3.FacetFilterList} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.FacetFilterList.prototype.setSelectedKeys = function(aSelectedKeys) { return new sap.ui.ux3.FacetFilterList(); };

/**
 * 
 * Setter for property <code>showCounter</code>.
 * </p><p>
 * Default value is <code>true</code> 
 * @param {boolean} bShowCounter  new value for property <code>showCounter</code>
 * @return {sap.ui.ux3.FacetFilterList} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.FacetFilterList.prototype.setShowCounter = function(bShowCounter) { return new sap.ui.ux3.FacetFilterList(); };

/**
 * 
 * Setter for property <code>title</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {string} sTitle  new value for property <code>title</code>
 * @return {sap.ui.ux3.FacetFilterList} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.FacetFilterList.prototype.setTitle = function(sTitle) { return new sap.ui.ux3.FacetFilterList(); };


// ---- sap.ui.ux3.Feed --------------------------------------------------------------------------

/**
 * 
 * Constructor for a new Feed.
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
 * <li>{@link #getFeederThumbnailSrc feederThumbnailSrc} : sap.ui.core.URI</li>
 * <li>{@link #getFeederSender feederSender} : string</li>
 * <li>{@link #getLive live} : boolean (default: true)</li>
 * <li>{@link #getTitle title} : string</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getFilterItems filterItems} : sap.ui.core.ListItem[]</li>
 * <li>{@link #getChunks chunks} : sap.ui.ux3.FeedChunk[]</li>
 * <li>{@link #getToolsMenuItems toolsMenuItems} : sap.ui.commons.MenuItem[]</li></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link sap.ui.ux3.Feed#event:filterChange filterChange} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.ui.ux3.Feed#event:search search} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.ui.ux3.Feed#event:chunkAdded chunkAdded} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.ui.ux3.Feed#event:toolsItemSelected toolsItemSelected} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.ui.ux3.Feed#event:toggleLive toggleLive} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
 * </li>
 * </ul> 
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * A container control representing a full feed page, including feeder and updates.
 * @extends sap.ui.core.Control
 * @version 1.15.1-SNAPSHOT
 * @constructor   
 * @public
 * @experimental Since version 1.2. 
 * The whole Feed/Feeder API is still under discussion, significant changes are likely. Especially text presentation (e.g. @-references and formatted text) is not final. Also the Feed model topic is still open.
 * 
 */
sap.ui.ux3.Feed = function(sId,mSettings) {};
/**
 * 
 * Event is fired when a new chunk is added 
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {sap.ui.ux3.FeedChunk} oControlEvent.getParameters.chunk New chunk
 * @public
 */
sap.ui.ux3.Feed.prototype.chunkAdded = function(oControlEvent) { return null; };

/**
 * 
 * Event is fired when the filter is changed 
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {string} oControlEvent.getParameters.newValue The new/changed value of the filter
 * @public
 */
sap.ui.ux3.Feed.prototype.filterChange = function(oControlEvent) { return null; };

/**
 * 
 * Event is fired when the search function on SearchField is triggered 
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {string} oControlEvent.getParameters.query The search query
 * @public
 */
sap.ui.ux3.Feed.prototype.search = function(oControlEvent) { return null; };

/**
 * 
 * Event is fired when the live mode has changed 
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {boolean} oControlEvent.getParameters.live Current live indicator
 * @public
 */
sap.ui.ux3.Feed.prototype.toggleLive = function(oControlEvent) { return null; };

/**
 * 
 * Event is fired when an item from the tools MenuButton was selected 
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {string} oControlEvent.getParameters.itemId The Id of the selected item
 * @param {sap.ui.commons.MenuItemBase} oControlEvent.getParameters.item The selected item
 * @public
 */
sap.ui.ux3.Feed.prototype.toolsItemSelected = function(oControlEvent) { return null; };

/**
 * 
 * Adds some chunk <code>oChunk</code> 
 * to the aggregation named <code>chunks</code>.
 * @param {sap.ui.ux3.FeedChunk}
 *            oChunk the chunk to add; if empty, nothing is inserted
 * @return {sap.ui.ux3.Feed} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.Feed.prototype.addChunk = function(oChunk) { return new sap.ui.ux3.Feed(); };

/**
 * 
 * Adds some filterItem <code>oFilterItem</code> 
 * to the aggregation named <code>filterItems</code>.
 * @param {sap.ui.core.ListItem}
 *            oFilterItem the filterItem to add; if empty, nothing is inserted
 * @return {sap.ui.ux3.Feed} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.Feed.prototype.addFilterItem = function(oFilterItem) { return new sap.ui.ux3.Feed(); };

/**
 * 
 * Adds some toolsMenuItem <code>oToolsMenuItem</code> 
 * to the aggregation named <code>toolsMenuItems</code>.
 * @param {sap.ui.commons.MenuItem}
 *            oToolsMenuItem the toolsMenuItem to add; if empty, nothing is inserted
 * @return {sap.ui.ux3.Feed} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.Feed.prototype.addToolsMenuItem = function(oToolsMenuItem) { return new sap.ui.ux3.Feed(); };

/**
 * 
 * Attach event handler <code>fnFunction</code> to the 'chunkAdded' event of this <code>sap.ui.ux3.Feed</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ui.ux3.Feed</code>.<br/> itself. 
 * </p><p>
 * Event is fired when a new chunk is added 
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener=this] Context object to call the event handler with. Defaults to this <code>sap.ui.ux3.Feed</code>.<br/> itself.
 * @return {sap.ui.ux3.Feed} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.Feed.prototype.attachChunkAdded = function(oData,fnFunction,oListener) { return new sap.ui.ux3.Feed(); };

/**
 * 
 * Attach event handler <code>fnFunction</code> to the 'filterChange' event of this <code>sap.ui.ux3.Feed</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ui.ux3.Feed</code>.<br/> itself. 
 * </p><p>
 * Event is fired when the filter is changed 
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener=this] Context object to call the event handler with. Defaults to this <code>sap.ui.ux3.Feed</code>.<br/> itself.
 * @return {sap.ui.ux3.Feed} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.Feed.prototype.attachFilterChange = function(oData,fnFunction,oListener) { return new sap.ui.ux3.Feed(); };

/**
 * 
 * Attach event handler <code>fnFunction</code> to the 'search' event of this <code>sap.ui.ux3.Feed</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ui.ux3.Feed</code>.<br/> itself. 
 * </p><p>
 * Event is fired when the search function on SearchField is triggered 
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener=this] Context object to call the event handler with. Defaults to this <code>sap.ui.ux3.Feed</code>.<br/> itself.
 * @return {sap.ui.ux3.Feed} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.Feed.prototype.attachSearch = function(oData,fnFunction,oListener) { return new sap.ui.ux3.Feed(); };

/**
 * 
 * Attach event handler <code>fnFunction</code> to the 'toggleLive' event of this <code>sap.ui.ux3.Feed</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ui.ux3.Feed</code>.<br/> itself. 
 * </p><p>
 * Event is fired when the live mode has changed 
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener=this] Context object to call the event handler with. Defaults to this <code>sap.ui.ux3.Feed</code>.<br/> itself.
 * @return {sap.ui.ux3.Feed} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.Feed.prototype.attachToggleLive = function(oData,fnFunction,oListener) { return new sap.ui.ux3.Feed(); };

/**
 * 
 * Attach event handler <code>fnFunction</code> to the 'toolsItemSelected' event of this <code>sap.ui.ux3.Feed</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ui.ux3.Feed</code>.<br/> itself. 
 * </p><p>
 * Event is fired when an item from the tools MenuButton was selected 
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener=this] Context object to call the event handler with. Defaults to this <code>sap.ui.ux3.Feed</code>.<br/> itself.
 * @return {sap.ui.ux3.Feed} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.Feed.prototype.attachToolsItemSelected = function(oData,fnFunction,oListener) { return new sap.ui.ux3.Feed(); };

/**
 * 
 * Binder for aggregation <code>chunks</code>.
 * @param {string} sPath path to a list in the model 
 * @param {sap.ui.core.Element} oTemplate the control template for this aggregation
 * @param {sap.ui.model.Sorter} oSorter the initial sort order (optional)
 * @param {array} aFilters the predefined filters for this aggregation (optional)
 * @return {sap.ui.ux3.Feed} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.Feed.prototype.bindChunks = function(sPath,oTemplate,oSorter,aFilters) { return new sap.ui.ux3.Feed(); };

/**
 * 
 * Binder for aggregation <code>filterItems</code>.
 * @param {string} sPath path to a list in the model 
 * @param {sap.ui.core.Element} oTemplate the control template for this aggregation
 * @param {sap.ui.model.Sorter} oSorter the initial sort order (optional)
 * @param {array} aFilters the predefined filters for this aggregation (optional)
 * @return {sap.ui.ux3.Feed} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.Feed.prototype.bindFilterItems = function(sPath,oTemplate,oSorter,aFilters) { return new sap.ui.ux3.Feed(); };

/**
 * 
 * Binder for aggregation <code>toolsMenuItems</code>.
 * @param {string} sPath path to a list in the model 
 * @param {sap.ui.core.Element} oTemplate the control template for this aggregation
 * @param {sap.ui.model.Sorter} oSorter the initial sort order (optional)
 * @param {array} aFilters the predefined filters for this aggregation (optional)
 * @return {sap.ui.ux3.Feed} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.Feed.prototype.bindToolsMenuItems = function(sPath,oTemplate,oSorter,aFilters) { return new sap.ui.ux3.Feed(); };

/**
 * 
 * Destroys all the chunks in the aggregation 
 * named <code>chunks</code>.
 * @return {sap.ui.ux3.Feed} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.Feed.prototype.destroyChunks = function() { return new sap.ui.ux3.Feed(); };

/**
 * 
 * Destroys all the filterItems in the aggregation 
 * named <code>filterItems</code>.
 * @return {sap.ui.ux3.Feed} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.Feed.prototype.destroyFilterItems = function() { return new sap.ui.ux3.Feed(); };

/**
 * 
 * Destroys all the toolsMenuItems in the aggregation 
 * named <code>toolsMenuItems</code>.
 * @return {sap.ui.ux3.Feed} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.Feed.prototype.destroyToolsMenuItems = function() { return new sap.ui.ux3.Feed(); };

/**
 * 
 * Detach event handler <code>fnFunction</code> from the 'chunkAdded' event of this <code>sap.ui.ux3.Feed</code>.<br/>
 * </p><p>
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.ux3.Feed} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.Feed.prototype.detachChunkAdded = function(fnFunction,oListener) { return new sap.ui.ux3.Feed(); };

/**
 * 
 * Detach event handler <code>fnFunction</code> from the 'filterChange' event of this <code>sap.ui.ux3.Feed</code>.<br/>
 * </p><p>
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.ux3.Feed} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.Feed.prototype.detachFilterChange = function(fnFunction,oListener) { return new sap.ui.ux3.Feed(); };

/**
 * 
 * Detach event handler <code>fnFunction</code> from the 'search' event of this <code>sap.ui.ux3.Feed</code>.<br/>
 * </p><p>
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.ux3.Feed} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.Feed.prototype.detachSearch = function(fnFunction,oListener) { return new sap.ui.ux3.Feed(); };

/**
 * 
 * Detach event handler <code>fnFunction</code> from the 'toggleLive' event of this <code>sap.ui.ux3.Feed</code>.<br/>
 * </p><p>
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.ux3.Feed} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.Feed.prototype.detachToggleLive = function(fnFunction,oListener) { return new sap.ui.ux3.Feed(); };

/**
 * 
 * Detach event handler <code>fnFunction</code> from the 'toolsItemSelected' event of this <code>sap.ui.ux3.Feed</code>.<br/>
 * </p><p>
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.ux3.Feed} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.Feed.prototype.detachToolsItemSelected = function(fnFunction,oListener) { return new sap.ui.ux3.Feed(); };

/**
 * 
 * Creates a new subclass of class sap.ui.ux3.Feed with name <code>sClassName</code> 
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
sap.ui.ux3.Feed.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * 
 * Fire event chunkAdded to attached listeners.
 * </p><p>
 * Expects following event parameters:
 * <ul>
 * <li>'chunk' of type <code>sap.ui.ux3.FeedChunk</code> New chunk</li>
 * </ul>
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.ux3.Feed} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.ui.ux3.Feed.prototype.fireChunkAdded = function(mArguments) { return new sap.ui.ux3.Feed(); };

/**
 * 
 * Fire event filterChange to attached listeners.
 * </p><p>
 * Expects following event parameters:
 * <ul>
 * <li>'newValue' of type <code>string</code> The new/changed value of the filter</li>
 * </ul>
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.ux3.Feed} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.ui.ux3.Feed.prototype.fireFilterChange = function(mArguments) { return new sap.ui.ux3.Feed(); };

/**
 * 
 * Fire event search to attached listeners.
 * </p><p>
 * Expects following event parameters:
 * <ul>
 * <li>'query' of type <code>string</code> The search query</li>
 * </ul>
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.ux3.Feed} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.ui.ux3.Feed.prototype.fireSearch = function(mArguments) { return new sap.ui.ux3.Feed(); };

/**
 * 
 * Fire event toggleLive to attached listeners.
 * </p><p>
 * Expects following event parameters:
 * <ul>
 * <li>'live' of type <code>boolean</code> Current live indicator</li>
 * </ul>
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.ux3.Feed} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.ui.ux3.Feed.prototype.fireToggleLive = function(mArguments) { return new sap.ui.ux3.Feed(); };

/**
 * 
 * Fire event toolsItemSelected to attached listeners.
 * </p><p>
 * Expects following event parameters:
 * <ul>
 * <li>'itemId' of type <code>string</code> The Id of the selected item</li>
 * <li>'item' of type <code>sap.ui.commons.MenuItemBase</code> The selected item</li>
 * </ul>
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.ux3.Feed} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.ui.ux3.Feed.prototype.fireToolsItemSelected = function(mArguments) { return new sap.ui.ux3.Feed(); };

/**
 * 
 * Getter for aggregation <code>chunks</code>.<br/>
 * The chunks
 * @return {sap.ui.ux3.FeedChunk[]}
 * @public
 * 
 */
sap.ui.ux3.Feed.prototype.getChunks = function() { return new Array(); };

/**
 * 
 * Getter for property <code>feederSender</code>.
 * The sender of the feeder
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {string} the value of property <code>feederSender</code>
 * @public
 * 
 */
sap.ui.ux3.Feed.prototype.getFeederSender = function() { return ""; };

/**
 * 
 * Getter for property <code>feederThumbnailSrc</code>.
 * The path to the thumbnail image used for the feeder
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {sap.ui.core.URI} the value of property <code>feederThumbnailSrc</code>
 * @public
 * 
 */
sap.ui.ux3.Feed.prototype.getFeederThumbnailSrc = function() { return new sap.ui.core.URI(); };

/**
 * 
 * Getter for aggregation <code>filterItems</code>.<br/>
 * Items of the filter
 * @return {sap.ui.core.ListItem[]}
 * @public
 * 
 */
sap.ui.ux3.Feed.prototype.getFilterItems = function() { return new Array(); };

/**
 * 
 * Getter for property <code>live</code>.
 * Specifies whether the feed shall be in live mode
 * </p><p>
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>live</code>
 * @public
 * 
 */
sap.ui.ux3.Feed.prototype.getLive = function() { return false; };

/**
 * 
 * Getter for property <code>title</code>.
 * Title text of the Feed. If no text is entered "FEED" is displayed.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {string} the value of property <code>title</code>
 * @public
 * 
 */
sap.ui.ux3.Feed.prototype.getTitle = function() { return ""; };

/**
 * 
 * Getter for aggregation <code>toolsMenuItems</code>.<br/>
 * MenuItems to open when the tool button is clicked by the user
 * @return {sap.ui.commons.MenuItem[]}
 * @public
 * 
 */
sap.ui.ux3.Feed.prototype.getToolsMenuItems = function() { return new Array(); };

/**
 * 
 * Checks for the provided <code>sap.ui.ux3.FeedChunk</code> in the aggregation named <code>chunks</code> 
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.ux3.FeedChunk}
 *            oChunk the chunk whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * 
 */
sap.ui.ux3.Feed.prototype.indexOfChunk = function(oChunk) { return 0; };

/**
 * 
 * Checks for the provided <code>sap.ui.core.ListItem</code> in the aggregation named <code>filterItems</code> 
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.core.ListItem}
 *            oFilterItem the filterItem whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * 
 */
sap.ui.ux3.Feed.prototype.indexOfFilterItem = function(oFilterItem) { return 0; };

/**
 * 
 * Checks for the provided <code>sap.ui.commons.MenuItem</code> in the aggregation named <code>toolsMenuItems</code> 
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.commons.MenuItem}
 *            oToolsMenuItem the toolsMenuItem whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * 
 */
sap.ui.ux3.Feed.prototype.indexOfToolsMenuItem = function(oToolsMenuItem) { return 0; };

/**
 * 
 * Inserts a chunk into the aggregation named <code>chunks</code>.
 * @param {sap.ui.ux3.FeedChunk}
 *          oChunk the chunk to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the chunk should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the chunk is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the chunk is inserted at 
 *             the last position        
 * @return {sap.ui.ux3.Feed} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.Feed.prototype.insertChunk = function(oChunk,iIndex) { return new sap.ui.ux3.Feed(); };

/**
 * 
 * Inserts a filterItem into the aggregation named <code>filterItems</code>.
 * @param {sap.ui.core.ListItem}
 *          oFilterItem the filterItem to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the filterItem should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the filterItem is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the filterItem is inserted at 
 *             the last position        
 * @return {sap.ui.ux3.Feed} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.Feed.prototype.insertFilterItem = function(oFilterItem,iIndex) { return new sap.ui.ux3.Feed(); };

/**
 * 
 * Inserts a toolsMenuItem into the aggregation named <code>toolsMenuItems</code>.
 * @param {sap.ui.commons.MenuItem}
 *          oToolsMenuItem the toolsMenuItem to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the toolsMenuItem should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the toolsMenuItem is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the toolsMenuItem is inserted at 
 *             the last position        
 * @return {sap.ui.ux3.Feed} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.Feed.prototype.insertToolsMenuItem = function(oToolsMenuItem,iIndex) { return new sap.ui.ux3.Feed(); };

/**
 * 
 * Removes all the controls in the aggregation named <code>chunks</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.ux3.FeedChunk[]} an array of the removed elements (might be empty)
 * @public
 * 
 */
sap.ui.ux3.Feed.prototype.removeAllChunks = function() { return new Array(); };

/**
 * 
 * Removes all the controls in the aggregation named <code>filterItems</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.core.ListItem[]} an array of the removed elements (might be empty)
 * @public
 * 
 */
sap.ui.ux3.Feed.prototype.removeAllFilterItems = function() { return new Array(); };

/**
 * 
 * Removes all the controls in the aggregation named <code>toolsMenuItems</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.commons.MenuItem[]} an array of the removed elements (might be empty)
 * @public
 * 
 */
sap.ui.ux3.Feed.prototype.removeAllToolsMenuItems = function() { return new Array(); };

/**
 * 
 * Removes an chunk from the aggregation named <code>chunks</code>.
 * @param {int | string | sap.ui.ux3.FeedChunk} vChunk the chunk to remove or its index or id
 * @return {sap.ui.ux3.FeedChunk} the removed chunk or null
 * @public
 * 
 */
sap.ui.ux3.Feed.prototype.removeChunk = function(vChunk) { return new sap.ui.ux3.FeedChunk(); };

/**
 * 
 * Removes an filterItem from the aggregation named <code>filterItems</code>.
 * @param {int | string | sap.ui.core.ListItem} vFilterItem the filterItem to remove or its index or id
 * @return {sap.ui.core.ListItem} the removed filterItem or null
 * @public
 * 
 */
sap.ui.ux3.Feed.prototype.removeFilterItem = function(vFilterItem) { return new sap.ui.core.ListItem(); };

/**
 * 
 * Removes an toolsMenuItem from the aggregation named <code>toolsMenuItems</code>.
 * @param {int | string | sap.ui.commons.MenuItem} vToolsMenuItem the toolsMenuItem to remove or its index or id
 * @return {sap.ui.commons.MenuItem} the removed toolsMenuItem or null
 * @public
 * 
 */
sap.ui.ux3.Feed.prototype.removeToolsMenuItem = function(vToolsMenuItem) { return new sap.ui.commons.MenuItem(); };

/**
 * 
 * Setter for property <code>feederSender</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {string} sFeederSender  new value for property <code>feederSender</code>
 * @return {sap.ui.ux3.Feed} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.Feed.prototype.setFeederSender = function(sFeederSender) { return new sap.ui.ux3.Feed(); };

/**
 * 
 * Setter for property <code>feederThumbnailSrc</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {sap.ui.core.URI} sFeederThumbnailSrc  new value for property <code>feederThumbnailSrc</code>
 * @return {sap.ui.ux3.Feed} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.Feed.prototype.setFeederThumbnailSrc = function(sFeederThumbnailSrc) { return new sap.ui.ux3.Feed(); };

/**
 * 
 * Setter for property <code>live</code>.
 * </p><p>
 * Default value is <code>true</code> 
 * @param {boolean} bLive  new value for property <code>live</code>
 * @return {sap.ui.ux3.Feed} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.Feed.prototype.setLive = function(bLive) { return new sap.ui.ux3.Feed(); };

/**
 * 
 * Setter for property <code>title</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {string} sTitle  new value for property <code>title</code>
 * @return {sap.ui.ux3.Feed} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.Feed.prototype.setTitle = function(sTitle) { return new sap.ui.ux3.Feed(); };

/**
 * 
 * Unbinder for aggregation <code>chunks</code>.
 * @return {sap.ui.ux3.Feed} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.Feed.prototype.unbindChunks = function() { return new sap.ui.ux3.Feed(); };

/**
 * 
 * Unbinder for aggregation <code>filterItems</code>.
 * @return {sap.ui.ux3.Feed} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.Feed.prototype.unbindFilterItems = function() { return new sap.ui.ux3.Feed(); };

/**
 * 
 * Unbinder for aggregation <code>toolsMenuItems</code>.
 * @return {sap.ui.ux3.Feed} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.Feed.prototype.unbindToolsMenuItems = function() { return new sap.ui.ux3.Feed(); };


// ---- sap.ui.ux3.FeedChunk --------------------------------------------------------------------------

/**
 * 
 * Constructor for a new FeedChunk.
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
 * <li>{@link #getThumbnailSrc thumbnailSrc} : sap.ui.core.URI</li>
 * <li>{@link #getText text} : string</li>
 * <li>{@link #getSender sender} : string</li>
 * <li>{@link #getTimestamp timestamp} : string</li>
 * <li>{@link #getDeletionAllowed deletionAllowed} : boolean (default: false)</li>
 * <li>{@link #getCommentChunk commentChunk} : boolean (default: false)</li>
 * <li>{@link #getFeederThumbnailSrc feederThumbnailSrc} : sap.ui.core.URI</li>
 * <li>{@link #getFeederSender feederSender} : string</li>
 * <li>{@link #getFlagged flagged} : boolean (default: false)</li>
 * <li>{@link #getFavorite favorite} : boolean</li>
 * <li>{@link #getShared shared} : boolean (default: false)</li>
 * <li>{@link #getEnableFlag enableFlag} : boolean (default: true)</li>
 * <li>{@link #getEnableShare enableShare} : boolean (default: true)</li>
 * <li>{@link #getEnableComment enableComment} : boolean (default: true)</li>
 * <li>{@link #getEnableInspect enableInspect} : boolean (default: true)</li>
 * <li>{@link #getEnableFavorite enableFavorite} : boolean (default: true)</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getComments comments} : sap.ui.ux3.FeedChunk[]</li>
 * <li>{@link #getActionMenuItems actionMenuItems} : sap.ui.commons.MenuItem[]</li></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link sap.ui.ux3.FeedChunk#event:deleted deleted} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.ui.ux3.FeedChunk#event:commentAdded commentAdded} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.ui.ux3.FeedChunk#event:toggleFlagged toggleFlagged} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.ui.ux3.FeedChunk#event:senderClicked senderClicked} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.ui.ux3.FeedChunk#event:referenceClicked referenceClicked} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.ui.ux3.FeedChunk#event:toggleFavorite toggleFavorite} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.ui.ux3.FeedChunk#event:inspect inspect} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.ui.ux3.FeedChunk#event:toggleShared toggleShared} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.ui.ux3.FeedChunk#event:actionItemSelected actionItemSelected} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
 * </li>
 * </ul> 
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * The unit that is embedded - single-wise or in a multiple way - into a Feed control.
 * The control provides a set of properties for text, sender information, time stamp,
 * comments, and functions such as flagging the entry to be favorite, shared, or flagged.
 * @extends sap.ui.core.Control
 * @version 1.15.1-SNAPSHOT
 * @constructor   
 * @public
 * @experimental Since version 1.2. 
 * The whole Feed/Feeder API is still under discussion, significant changes are likely. Especially text presentation (e.g. @-references and formatted text) is not final. Also the Feed model topic is still open.
 * 
 */
sap.ui.ux3.FeedChunk = function(sId,mSettings) {};
/**
 * 
 * Event is fired when an item from the action menu button was selected. 
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {string} oControlEvent.getParameters.itemId The Id of the selected item
 * @param {sap.ui.commons.MenuItemBase} oControlEvent.getParameters.item The selected item
 * @public
 */
sap.ui.ux3.FeedChunk.prototype.actionItemSelected = function(oControlEvent) { return null; };

/**
 * 
 * Event is raised when a comment is added to the entry. This event is not supported for comment chunks. 
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {sap.ui.ux3.FeedChunk} oControlEvent.getParameters.comment New comment chunk
 * @public
 */
sap.ui.ux3.FeedChunk.prototype.commentAdded = function(oControlEvent) { return null; };

/**
 * 
 * Event is fired when the deletion button is pressed. 
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 */
sap.ui.ux3.FeedChunk.prototype.deleted = function(oControlEvent) { return null; };

/**
 * 
 * Event is fired when the inspect button was pressed 
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 */
sap.ui.ux3.FeedChunk.prototype.inspect = function(oControlEvent) { return null; };

/**
 * 
 * Click on a @-reference 
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {string} oControlEvent.getParameters.text Text of the @-reference
 * @public
 */
sap.ui.ux3.FeedChunk.prototype.referenceClicked = function(oControlEvent) { return null; };

/**
 * 
 * Event is fired when the thumbnail or the name of the sender is clicked. 
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 */
sap.ui.ux3.FeedChunk.prototype.senderClicked = function(oControlEvent) { return null; };

/**
 * 
 * Event is raised when the user clicks to set the entry as favorite. This event is not supported for comment chunks. 
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {boolean} oControlEvent.getParameters.favorite Current favorite state
 * @public
 */
sap.ui.ux3.FeedChunk.prototype.toggleFavorite = function(oControlEvent) { return null; };

/**
 * 
 * Event is raised when the user clicks to flag the entry. This event is not supported for comment chunks. 
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {boolean} oControlEvent.getParameters.flagged Current flagged state
 * @public
 */
sap.ui.ux3.FeedChunk.prototype.toggleFlagged = function(oControlEvent) { return null; };

/**
 * 
 * Event is raised when the user clicks to share the entry. This event is not supported for comment chunks. 
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {boolean} oControlEvent.getParameters.shareed Current shared state
 * @public
 */
sap.ui.ux3.FeedChunk.prototype.toggleShared = function(oControlEvent) { return null; };

/**
 * 
 * Adds some actionMenuItem <code>oActionMenuItem</code> 
 * to the aggregation named <code>actionMenuItems</code>.
 * @param {sap.ui.commons.MenuItem}
 *            oActionMenuItem the actionMenuItem to add; if empty, nothing is inserted
 * @return {sap.ui.ux3.FeedChunk} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.FeedChunk.prototype.addActionMenuItem = function(oActionMenuItem) { return new sap.ui.ux3.FeedChunk(); };

/**
 * 
 * Adds some comment <code>oComment</code> 
 * to the aggregation named <code>comments</code>.
 * @param {sap.ui.ux3.FeedChunk}
 *            oComment the comment to add; if empty, nothing is inserted
 * @return {sap.ui.ux3.FeedChunk} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.FeedChunk.prototype.addComment = function(oComment) { return new sap.ui.ux3.FeedChunk(); };

/**
 * 
 * Attach event handler <code>fnFunction</code> to the 'actionItemSelected' event of this <code>sap.ui.ux3.FeedChunk</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ui.ux3.FeedChunk</code>.<br/> itself. 
 * </p><p>
 * Event is fired when an item from the action menu button was selected. 
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener=this] Context object to call the event handler with. Defaults to this <code>sap.ui.ux3.FeedChunk</code>.<br/> itself.
 * @return {sap.ui.ux3.FeedChunk} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.FeedChunk.prototype.attachActionItemSelected = function(oData,fnFunction,oListener) { return new sap.ui.ux3.FeedChunk(); };

/**
 * 
 * Attach event handler <code>fnFunction</code> to the 'commentAdded' event of this <code>sap.ui.ux3.FeedChunk</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ui.ux3.FeedChunk</code>.<br/> itself. 
 * </p><p>
 * Event is raised when a comment is added to the entry. This event is not supported for comment chunks. 
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener=this] Context object to call the event handler with. Defaults to this <code>sap.ui.ux3.FeedChunk</code>.<br/> itself.
 * @return {sap.ui.ux3.FeedChunk} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.FeedChunk.prototype.attachCommentAdded = function(oData,fnFunction,oListener) { return new sap.ui.ux3.FeedChunk(); };

/**
 * 
 * Attach event handler <code>fnFunction</code> to the 'deleted' event of this <code>sap.ui.ux3.FeedChunk</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ui.ux3.FeedChunk</code>.<br/> itself. 
 * </p><p>
 * Event is fired when the deletion button is pressed. 
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener=this] Context object to call the event handler with. Defaults to this <code>sap.ui.ux3.FeedChunk</code>.<br/> itself.
 * @return {sap.ui.ux3.FeedChunk} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.FeedChunk.prototype.attachDeleted = function(oData,fnFunction,oListener) { return new sap.ui.ux3.FeedChunk(); };

/**
 * 
 * Attach event handler <code>fnFunction</code> to the 'inspect' event of this <code>sap.ui.ux3.FeedChunk</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ui.ux3.FeedChunk</code>.<br/> itself. 
 * </p><p>
 * Event is fired when the inspect button was pressed 
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener=this] Context object to call the event handler with. Defaults to this <code>sap.ui.ux3.FeedChunk</code>.<br/> itself.
 * @return {sap.ui.ux3.FeedChunk} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.FeedChunk.prototype.attachInspect = function(oData,fnFunction,oListener) { return new sap.ui.ux3.FeedChunk(); };

/**
 * 
 * Attach event handler <code>fnFunction</code> to the 'referenceClicked' event of this <code>sap.ui.ux3.FeedChunk</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ui.ux3.FeedChunk</code>.<br/> itself. 
 * </p><p>
 * Click on a @-reference 
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener=this] Context object to call the event handler with. Defaults to this <code>sap.ui.ux3.FeedChunk</code>.<br/> itself.
 * @return {sap.ui.ux3.FeedChunk} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.FeedChunk.prototype.attachReferenceClicked = function(oData,fnFunction,oListener) { return new sap.ui.ux3.FeedChunk(); };

/**
 * 
 * Attach event handler <code>fnFunction</code> to the 'senderClicked' event of this <code>sap.ui.ux3.FeedChunk</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ui.ux3.FeedChunk</code>.<br/> itself. 
 * </p><p>
 * Event is fired when the thumbnail or the name of the sender is clicked. 
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener=this] Context object to call the event handler with. Defaults to this <code>sap.ui.ux3.FeedChunk</code>.<br/> itself.
 * @return {sap.ui.ux3.FeedChunk} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.FeedChunk.prototype.attachSenderClicked = function(oData,fnFunction,oListener) { return new sap.ui.ux3.FeedChunk(); };

/**
 * 
 * Attach event handler <code>fnFunction</code> to the 'toggleFavorite' event of this <code>sap.ui.ux3.FeedChunk</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ui.ux3.FeedChunk</code>.<br/> itself. 
 * </p><p>
 * Event is raised when the user clicks to set the entry as favorite. This event is not supported for comment chunks. 
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener=this] Context object to call the event handler with. Defaults to this <code>sap.ui.ux3.FeedChunk</code>.<br/> itself.
 * @return {sap.ui.ux3.FeedChunk} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.FeedChunk.prototype.attachToggleFavorite = function(oData,fnFunction,oListener) { return new sap.ui.ux3.FeedChunk(); };

/**
 * 
 * Attach event handler <code>fnFunction</code> to the 'toggleFlagged' event of this <code>sap.ui.ux3.FeedChunk</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ui.ux3.FeedChunk</code>.<br/> itself. 
 * </p><p>
 * Event is raised when the user clicks to flag the entry. This event is not supported for comment chunks. 
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener=this] Context object to call the event handler with. Defaults to this <code>sap.ui.ux3.FeedChunk</code>.<br/> itself.
 * @return {sap.ui.ux3.FeedChunk} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.FeedChunk.prototype.attachToggleFlagged = function(oData,fnFunction,oListener) { return new sap.ui.ux3.FeedChunk(); };

/**
 * 
 * Attach event handler <code>fnFunction</code> to the 'toggleShared' event of this <code>sap.ui.ux3.FeedChunk</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ui.ux3.FeedChunk</code>.<br/> itself. 
 * </p><p>
 * Event is raised when the user clicks to share the entry. This event is not supported for comment chunks. 
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener=this] Context object to call the event handler with. Defaults to this <code>sap.ui.ux3.FeedChunk</code>.<br/> itself.
 * @return {sap.ui.ux3.FeedChunk} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.FeedChunk.prototype.attachToggleShared = function(oData,fnFunction,oListener) { return new sap.ui.ux3.FeedChunk(); };

/**
 * 
 * Binder for aggregation <code>actionMenuItems</code>.
 * @param {string} sPath path to a list in the model 
 * @param {sap.ui.core.Element} oTemplate the control template for this aggregation
 * @param {sap.ui.model.Sorter} oSorter the initial sort order (optional)
 * @param {array} aFilters the predefined filters for this aggregation (optional)
 * @return {sap.ui.ux3.FeedChunk} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.FeedChunk.prototype.bindActionMenuItems = function(sPath,oTemplate,oSorter,aFilters) { return new sap.ui.ux3.FeedChunk(); };

/**
 * 
 * Binder for aggregation <code>comments</code>.
 * @param {string} sPath path to a list in the model 
 * @param {sap.ui.core.Element} oTemplate the control template for this aggregation
 * @param {sap.ui.model.Sorter} oSorter the initial sort order (optional)
 * @param {array} aFilters the predefined filters for this aggregation (optional)
 * @return {sap.ui.ux3.FeedChunk} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.FeedChunk.prototype.bindComments = function(sPath,oTemplate,oSorter,aFilters) { return new sap.ui.ux3.FeedChunk(); };

/**
 * 
 * Destroys all the actionMenuItems in the aggregation 
 * named <code>actionMenuItems</code>.
 * @return {sap.ui.ux3.FeedChunk} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.FeedChunk.prototype.destroyActionMenuItems = function() { return new sap.ui.ux3.FeedChunk(); };

/**
 * 
 * Destroys all the comments in the aggregation 
 * named <code>comments</code>.
 * @return {sap.ui.ux3.FeedChunk} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.FeedChunk.prototype.destroyComments = function() { return new sap.ui.ux3.FeedChunk(); };

/**
 * 
 * Detach event handler <code>fnFunction</code> from the 'actionItemSelected' event of this <code>sap.ui.ux3.FeedChunk</code>.<br/>
 * </p><p>
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.ux3.FeedChunk} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.FeedChunk.prototype.detachActionItemSelected = function(fnFunction,oListener) { return new sap.ui.ux3.FeedChunk(); };

/**
 * 
 * Detach event handler <code>fnFunction</code> from the 'commentAdded' event of this <code>sap.ui.ux3.FeedChunk</code>.<br/>
 * </p><p>
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.ux3.FeedChunk} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.FeedChunk.prototype.detachCommentAdded = function(fnFunction,oListener) { return new sap.ui.ux3.FeedChunk(); };

/**
 * 
 * Detach event handler <code>fnFunction</code> from the 'deleted' event of this <code>sap.ui.ux3.FeedChunk</code>.<br/>
 * </p><p>
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.ux3.FeedChunk} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.FeedChunk.prototype.detachDeleted = function(fnFunction,oListener) { return new sap.ui.ux3.FeedChunk(); };

/**
 * 
 * Detach event handler <code>fnFunction</code> from the 'inspect' event of this <code>sap.ui.ux3.FeedChunk</code>.<br/>
 * </p><p>
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.ux3.FeedChunk} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.FeedChunk.prototype.detachInspect = function(fnFunction,oListener) { return new sap.ui.ux3.FeedChunk(); };

/**
 * 
 * Detach event handler <code>fnFunction</code> from the 'referenceClicked' event of this <code>sap.ui.ux3.FeedChunk</code>.<br/>
 * </p><p>
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.ux3.FeedChunk} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.FeedChunk.prototype.detachReferenceClicked = function(fnFunction,oListener) { return new sap.ui.ux3.FeedChunk(); };

/**
 * 
 * Detach event handler <code>fnFunction</code> from the 'senderClicked' event of this <code>sap.ui.ux3.FeedChunk</code>.<br/>
 * </p><p>
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.ux3.FeedChunk} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.FeedChunk.prototype.detachSenderClicked = function(fnFunction,oListener) { return new sap.ui.ux3.FeedChunk(); };

/**
 * 
 * Detach event handler <code>fnFunction</code> from the 'toggleFavorite' event of this <code>sap.ui.ux3.FeedChunk</code>.<br/>
 * </p><p>
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.ux3.FeedChunk} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.FeedChunk.prototype.detachToggleFavorite = function(fnFunction,oListener) { return new sap.ui.ux3.FeedChunk(); };

/**
 * 
 * Detach event handler <code>fnFunction</code> from the 'toggleFlagged' event of this <code>sap.ui.ux3.FeedChunk</code>.<br/>
 * </p><p>
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.ux3.FeedChunk} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.FeedChunk.prototype.detachToggleFlagged = function(fnFunction,oListener) { return new sap.ui.ux3.FeedChunk(); };

/**
 * 
 * Detach event handler <code>fnFunction</code> from the 'toggleShared' event of this <code>sap.ui.ux3.FeedChunk</code>.<br/>
 * </p><p>
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.ux3.FeedChunk} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.FeedChunk.prototype.detachToggleShared = function(fnFunction,oListener) { return new sap.ui.ux3.FeedChunk(); };

/**
 * 
 * Creates a new subclass of class sap.ui.ux3.FeedChunk with name <code>sClassName</code> 
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
sap.ui.ux3.FeedChunk.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * 
 * Fire event actionItemSelected to attached listeners.
 * </p><p>
 * Expects following event parameters:
 * <ul>
 * <li>'itemId' of type <code>string</code> The Id of the selected item</li>
 * <li>'item' of type <code>sap.ui.commons.MenuItemBase</code> The selected item</li>
 * </ul>
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.ux3.FeedChunk} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.ui.ux3.FeedChunk.prototype.fireActionItemSelected = function(mArguments) { return new sap.ui.ux3.FeedChunk(); };

/**
 * 
 * Fire event commentAdded to attached listeners.
 * </p><p>
 * Expects following event parameters:
 * <ul>
 * <li>'comment' of type <code>sap.ui.ux3.FeedChunk</code> New comment chunk</li>
 * </ul>
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.ux3.FeedChunk} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.ui.ux3.FeedChunk.prototype.fireCommentAdded = function(mArguments) { return new sap.ui.ux3.FeedChunk(); };

/**
 * 
 * Fire event deleted to attached listeners.
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.ux3.FeedChunk} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.ui.ux3.FeedChunk.prototype.fireDeleted = function(mArguments) { return new sap.ui.ux3.FeedChunk(); };

/**
 * 
 * Fire event inspect to attached listeners.
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.ux3.FeedChunk} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.ui.ux3.FeedChunk.prototype.fireInspect = function(mArguments) { return new sap.ui.ux3.FeedChunk(); };

/**
 * 
 * Fire event referenceClicked to attached listeners.
 * </p><p>
 * Expects following event parameters:
 * <ul>
 * <li>'text' of type <code>string</code> Text of the @-reference</li>
 * </ul>
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.ux3.FeedChunk} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.ui.ux3.FeedChunk.prototype.fireReferenceClicked = function(mArguments) { return new sap.ui.ux3.FeedChunk(); };

/**
 * 
 * Fire event senderClicked to attached listeners.
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.ux3.FeedChunk} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.ui.ux3.FeedChunk.prototype.fireSenderClicked = function(mArguments) { return new sap.ui.ux3.FeedChunk(); };

/**
 * 
 * Fire event toggleFavorite to attached listeners.
 * </p><p>
 * Expects following event parameters:
 * <ul>
 * <li>'favorite' of type <code>boolean</code> Current favorite state</li>
 * </ul>
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.ux3.FeedChunk} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.ui.ux3.FeedChunk.prototype.fireToggleFavorite = function(mArguments) { return new sap.ui.ux3.FeedChunk(); };

/**
 * 
 * Fire event toggleFlagged to attached listeners.
 * </p><p>
 * Expects following event parameters:
 * <ul>
 * <li>'flagged' of type <code>boolean</code> Current flagged state</li>
 * </ul>
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.ux3.FeedChunk} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.ui.ux3.FeedChunk.prototype.fireToggleFlagged = function(mArguments) { return new sap.ui.ux3.FeedChunk(); };

/**
 * 
 * Fire event toggleShared to attached listeners.
 * </p><p>
 * Expects following event parameters:
 * <ul>
 * <li>'shareed' of type <code>boolean</code> Current shared state</li>
 * </ul>
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.ux3.FeedChunk} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.ui.ux3.FeedChunk.prototype.fireToggleShared = function(mArguments) { return new sap.ui.ux3.FeedChunk(); };

/**
 * 
 * Getter for aggregation <code>actionMenuItems</code>.<br/>
 * MenuItems to open when there is a click on the action menu button
 * @return {sap.ui.commons.MenuItem[]}
 * @public
 * 
 */
sap.ui.ux3.FeedChunk.prototype.getActionMenuItems = function() { return new Array(); };

/**
 * 
 * Getter for property <code>commentChunk</code>.
 * This flag changes a FeedChunk into a CommentChunk. In this case, it can not have own comments,
 * furthermore it must be assigned to a FeedChunk.
 * </p><p>
 * Default value is <code>false</code>
 * @return {boolean} the value of property <code>commentChunk</code>
 * @public
 * @deprecated Since version 1.4.0. 
 * Not longer used. If a chunk is a comment is determined from hierarchy. If the parent is a chunk it's automatically a comment.
 * 
 */
sap.ui.ux3.FeedChunk.prototype.getCommentChunk = function() { return false; };

/**
 * 
 * Getter for aggregation <code>comments</code>.<br/>
 * Comments on this chunk
 * @return {sap.ui.ux3.FeedChunk[]}
 * @public
 * 
 */
sap.ui.ux3.FeedChunk.prototype.getComments = function() { return new Array(); };

/**
 * 
 * Getter for property <code>deletionAllowed</code>.
 * Flag if the deletion of the chunk shall be allowed
 * </p><p>
 * Default value is <code>false</code>
 * @return {boolean} the value of property <code>deletionAllowed</code>
 * @public
 * 
 */
sap.ui.ux3.FeedChunk.prototype.getDeletionAllowed = function() { return false; };

/**
 * 
 * Getter for property <code>enableComment</code>.
 * If true the comment action is enabled.
 * </p><p>
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>enableComment</code>
 * @public
 * 
 */
sap.ui.ux3.FeedChunk.prototype.getEnableComment = function() { return false; };

/**
 * 
 * Getter for property <code>enableFavorite</code>.
 * If true the favorite action is enabled.
 * </p><p>
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>enableFavorite</code>
 * @public
 * 
 */
sap.ui.ux3.FeedChunk.prototype.getEnableFavorite = function() { return false; };

/**
 * 
 * Getter for property <code>enableFlag</code>.
 * If true the flag action is enabled.
 * </p><p>
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>enableFlag</code>
 * @public
 * 
 */
sap.ui.ux3.FeedChunk.prototype.getEnableFlag = function() { return false; };

/**
 * 
 * Getter for property <code>enableInspect</code>.
 * If true the inspect action is enabled.
 * </p><p>
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>enableInspect</code>
 * @public
 * 
 */
sap.ui.ux3.FeedChunk.prototype.getEnableInspect = function() { return false; };

/**
 * 
 * Getter for property <code>enableShare</code>.
 * If true the share action is enabled.
 * </p><p>
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>enableShare</code>
 * @public
 * 
 */
sap.ui.ux3.FeedChunk.prototype.getEnableShare = function() { return false; };

/**
 * 
 * Getter for property <code>favorite</code>.
 * Defines whether the entry shall be displayed as favorite. This property is not supported for comment chunks.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {boolean} the value of property <code>favorite</code>
 * @public
 * 
 */
sap.ui.ux3.FeedChunk.prototype.getFavorite = function() { return false; };

/**
 * 
 * Getter for property <code>feederSender</code>.
 * Sender for the comment feeder
 * This property is optional if the chunk is a sub-control of a feed control. In this case the value of the feed control is used if it's not set. So it must be only set once on the feed control.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {string} the value of property <code>feederSender</code>
 * @public
 * 
 */
sap.ui.ux3.FeedChunk.prototype.getFeederSender = function() { return ""; };

/**
 * 
 * Getter for property <code>feederThumbnailSrc</code>.
 * URL to the thumbnail image for the comment feeder.
 * This property is optional if the chunk is a sub-control of a feed control. In this case the value of the feed control is used if it's not set. So it must be only set once on the feed control.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {sap.ui.core.URI} the value of property <code>feederThumbnailSrc</code>
 * @public
 * 
 */
sap.ui.ux3.FeedChunk.prototype.getFeederThumbnailSrc = function() { return new sap.ui.core.URI(); };

/**
 * 
 * Getter for property <code>flagged</code>.
 * Defines whether the entry is flagged. This property is not supported for comment chunks.
 * </p><p>
 * Default value is <code>false</code>
 * @return {boolean} the value of property <code>flagged</code>
 * @public
 * 
 */
sap.ui.ux3.FeedChunk.prototype.getFlagged = function() { return false; };

/**
 * 
 * Getter for property <code>sender</code>.
 * Sender of the chunk
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {string} the value of property <code>sender</code>
 * @public
 * 
 */
sap.ui.ux3.FeedChunk.prototype.getSender = function() { return ""; };

/**
 * 
 * Getter for property <code>shared</code>.
 * Defines whether the entry shall be shared. This property is not supported for comment chunks.
 * </p><p>
 * Default value is <code>false</code>
 * @return {boolean} the value of property <code>shared</code>
 * @public
 * 
 */
sap.ui.ux3.FeedChunk.prototype.getShared = function() { return false; };

/**
 * 
 * Getter for property <code>text</code>.
 * The FeedChunk text. @References are supported.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {string} the value of property <code>text</code>
 * @public
 * 
 */
sap.ui.ux3.FeedChunk.prototype.getText = function() { return ""; };

/**
 * 
 * Getter for property <code>thumbnailSrc</code>.
 * URL to the thumbnail image.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {sap.ui.core.URI} the value of property <code>thumbnailSrc</code>
 * @public
 * 
 */
sap.ui.ux3.FeedChunk.prototype.getThumbnailSrc = function() { return new sap.ui.core.URI(); };

/**
 * 
 * Getter for property <code>timestamp</code>.
 * Format is ISO 8601 YYYY-MM-DDThh:mm:ss.sZ, Z meaning the time is in UTC time zone
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {string} the value of property <code>timestamp</code>
 * @public
 * 
 */
sap.ui.ux3.FeedChunk.prototype.getTimestamp = function() { return ""; };

/**
 * 
 * Checks for the provided <code>sap.ui.commons.MenuItem</code> in the aggregation named <code>actionMenuItems</code> 
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.commons.MenuItem}
 *            oActionMenuItem the actionMenuItem whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * 
 */
sap.ui.ux3.FeedChunk.prototype.indexOfActionMenuItem = function(oActionMenuItem) { return 0; };

/**
 * 
 * Checks for the provided <code>sap.ui.ux3.FeedChunk</code> in the aggregation named <code>comments</code> 
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.ux3.FeedChunk}
 *            oComment the comment whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * 
 */
sap.ui.ux3.FeedChunk.prototype.indexOfComment = function(oComment) { return 0; };

/**
 * 
 * Inserts a actionMenuItem into the aggregation named <code>actionMenuItems</code>.
 * @param {sap.ui.commons.MenuItem}
 *          oActionMenuItem the actionMenuItem to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the actionMenuItem should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the actionMenuItem is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the actionMenuItem is inserted at 
 *             the last position        
 * @return {sap.ui.ux3.FeedChunk} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.FeedChunk.prototype.insertActionMenuItem = function(oActionMenuItem,iIndex) { return new sap.ui.ux3.FeedChunk(); };

/**
 * 
 * Inserts a comment into the aggregation named <code>comments</code>.
 * @param {sap.ui.ux3.FeedChunk}
 *          oComment the comment to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the comment should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the comment is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the comment is inserted at 
 *             the last position        
 * @return {sap.ui.ux3.FeedChunk} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.FeedChunk.prototype.insertComment = function(oComment,iIndex) { return new sap.ui.ux3.FeedChunk(); };

/**
 * 
 * Removes an actionMenuItem from the aggregation named <code>actionMenuItems</code>.
 * @param {int | string | sap.ui.commons.MenuItem} vActionMenuItem the actionMenuItem to remove or its index or id
 * @return {sap.ui.commons.MenuItem} the removed actionMenuItem or null
 * @public
 * 
 */
sap.ui.ux3.FeedChunk.prototype.removeActionMenuItem = function(vActionMenuItem) { return new sap.ui.commons.MenuItem(); };

/**
 * 
 * Removes all the controls in the aggregation named <code>actionMenuItems</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.commons.MenuItem[]} an array of the removed elements (might be empty)
 * @public
 * 
 */
sap.ui.ux3.FeedChunk.prototype.removeAllActionMenuItems = function() { return new Array(); };

/**
 * 
 * Removes all the controls in the aggregation named <code>comments</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.ux3.FeedChunk[]} an array of the removed elements (might be empty)
 * @public
 * 
 */
sap.ui.ux3.FeedChunk.prototype.removeAllComments = function() { return new Array(); };

/**
 * 
 * Removes an comment from the aggregation named <code>comments</code>.
 * @param {int | string | sap.ui.ux3.FeedChunk} vComment the comment to remove or its index or id
 * @return {sap.ui.ux3.FeedChunk} the removed comment or null
 * @public
 * 
 */
sap.ui.ux3.FeedChunk.prototype.removeComment = function(vComment) { return new sap.ui.ux3.FeedChunk(); };

/**
 * 
 * Setter for property <code>commentChunk</code>.
 * </p><p>
 * Default value is <code>false</code> 
 * @param {boolean} bCommentChunk  new value for property <code>commentChunk</code>
 * @return {sap.ui.ux3.FeedChunk} <code>this</code> to allow method chaining
 * @public
 * @deprecated Since version 1.4.0. 
 * Not longer used. If a chunk is a comment is determined from hierarchy. If the parent is a chunk it's automatically a comment.
 * 
 */
sap.ui.ux3.FeedChunk.prototype.setCommentChunk = function(bCommentChunk) { return new sap.ui.ux3.FeedChunk(); };

/**
 * 
 * Setter for property <code>deletionAllowed</code>.
 * </p><p>
 * Default value is <code>false</code> 
 * @param {boolean} bDeletionAllowed  new value for property <code>deletionAllowed</code>
 * @return {sap.ui.ux3.FeedChunk} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.FeedChunk.prototype.setDeletionAllowed = function(bDeletionAllowed) { return new sap.ui.ux3.FeedChunk(); };

/**
 * 
 * Setter for property <code>enableComment</code>.
 * </p><p>
 * Default value is <code>true</code> 
 * @param {boolean} bEnableComment  new value for property <code>enableComment</code>
 * @return {sap.ui.ux3.FeedChunk} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.FeedChunk.prototype.setEnableComment = function(bEnableComment) { return new sap.ui.ux3.FeedChunk(); };

/**
 * 
 * Setter for property <code>enableFavorite</code>.
 * </p><p>
 * Default value is <code>true</code> 
 * @param {boolean} bEnableFavorite  new value for property <code>enableFavorite</code>
 * @return {sap.ui.ux3.FeedChunk} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.FeedChunk.prototype.setEnableFavorite = function(bEnableFavorite) { return new sap.ui.ux3.FeedChunk(); };

/**
 * 
 * Setter for property <code>enableFlag</code>.
 * </p><p>
 * Default value is <code>true</code> 
 * @param {boolean} bEnableFlag  new value for property <code>enableFlag</code>
 * @return {sap.ui.ux3.FeedChunk} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.FeedChunk.prototype.setEnableFlag = function(bEnableFlag) { return new sap.ui.ux3.FeedChunk(); };

/**
 * 
 * Setter for property <code>enableInspect</code>.
 * </p><p>
 * Default value is <code>true</code> 
 * @param {boolean} bEnableInspect  new value for property <code>enableInspect</code>
 * @return {sap.ui.ux3.FeedChunk} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.FeedChunk.prototype.setEnableInspect = function(bEnableInspect) { return new sap.ui.ux3.FeedChunk(); };

/**
 * 
 * Setter for property <code>enableShare</code>.
 * </p><p>
 * Default value is <code>true</code> 
 * @param {boolean} bEnableShare  new value for property <code>enableShare</code>
 * @return {sap.ui.ux3.FeedChunk} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.FeedChunk.prototype.setEnableShare = function(bEnableShare) { return new sap.ui.ux3.FeedChunk(); };

/**
 * 
 * Setter for property <code>favorite</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {boolean} bFavorite  new value for property <code>favorite</code>
 * @return {sap.ui.ux3.FeedChunk} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.FeedChunk.prototype.setFavorite = function(bFavorite) { return new sap.ui.ux3.FeedChunk(); };

/**
 * 
 * Setter for property <code>feederSender</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {string} sFeederSender  new value for property <code>feederSender</code>
 * @return {sap.ui.ux3.FeedChunk} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.FeedChunk.prototype.setFeederSender = function(sFeederSender) { return new sap.ui.ux3.FeedChunk(); };

/**
 * 
 * Setter for property <code>feederThumbnailSrc</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {sap.ui.core.URI} sFeederThumbnailSrc  new value for property <code>feederThumbnailSrc</code>
 * @return {sap.ui.ux3.FeedChunk} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.FeedChunk.prototype.setFeederThumbnailSrc = function(sFeederThumbnailSrc) { return new sap.ui.ux3.FeedChunk(); };

/**
 * 
 * Setter for property <code>flagged</code>.
 * </p><p>
 * Default value is <code>false</code> 
 * @param {boolean} bFlagged  new value for property <code>flagged</code>
 * @return {sap.ui.ux3.FeedChunk} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.FeedChunk.prototype.setFlagged = function(bFlagged) { return new sap.ui.ux3.FeedChunk(); };

/**
 * 
 * Setter for property <code>sender</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {string} sSender  new value for property <code>sender</code>
 * @return {sap.ui.ux3.FeedChunk} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.FeedChunk.prototype.setSender = function(sSender) { return new sap.ui.ux3.FeedChunk(); };

/**
 * 
 * Setter for property <code>shared</code>.
 * </p><p>
 * Default value is <code>false</code> 
 * @param {boolean} bShared  new value for property <code>shared</code>
 * @return {sap.ui.ux3.FeedChunk} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.FeedChunk.prototype.setShared = function(bShared) { return new sap.ui.ux3.FeedChunk(); };

/**
 * 
 * Setter for property <code>text</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {string} sText  new value for property <code>text</code>
 * @return {sap.ui.ux3.FeedChunk} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.FeedChunk.prototype.setText = function(sText) { return new sap.ui.ux3.FeedChunk(); };

/**
 * 
 * Setter for property <code>thumbnailSrc</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {sap.ui.core.URI} sThumbnailSrc  new value for property <code>thumbnailSrc</code>
 * @return {sap.ui.ux3.FeedChunk} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.FeedChunk.prototype.setThumbnailSrc = function(sThumbnailSrc) { return new sap.ui.ux3.FeedChunk(); };

/**
 * 
 * Setter for property <code>timestamp</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {string} sTimestamp  new value for property <code>timestamp</code>
 * @return {sap.ui.ux3.FeedChunk} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.FeedChunk.prototype.setTimestamp = function(sTimestamp) { return new sap.ui.ux3.FeedChunk(); };

/**
 * 
 * Unbinder for aggregation <code>actionMenuItems</code>.
 * @return {sap.ui.ux3.FeedChunk} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.FeedChunk.prototype.unbindActionMenuItems = function() { return new sap.ui.ux3.FeedChunk(); };

/**
 * 
 * Unbinder for aggregation <code>comments</code>.
 * @return {sap.ui.ux3.FeedChunk} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.FeedChunk.prototype.unbindComments = function() { return new sap.ui.ux3.FeedChunk(); };


// ---- sap.ui.ux3.Feeder --------------------------------------------------------------------------

/**
 * 
 * Constructor for a new Feeder.
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
 * <li>{@link #getThumbnailSrc thumbnailSrc} : sap.ui.core.URI</li>
 * <li>{@link #getText text} : string</li>
 * <li>{@link #getType type} : sap.ui.ux3.FeederType (default: sap.ui.ux3.FeederType.Large)</li></ul>
 * </li>
 * <li>Aggregations
 * <ul></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link sap.ui.ux3.Feeder#event:submit submit} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
 * </li>
 * </ul> 
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * This feed control flavor represents a lean common feed, or a comment feed, with a text commit function.
 * The control can be used stand alone or in a multiple way, and generally would be integrated directly into a UIArea.
 * @extends sap.ui.core.Control
 * @version 1.15.1-SNAPSHOT
 * @constructor   
 * @public
 * @experimental Since version 1.2. 
 * The whole Feed/Feeder API is still under discussion, significant changes are likely. Especially text presentation (e.g. @-references and formatted text) is not final. Also the Feed model topic is still open.
 * 
 */
sap.ui.ux3.Feeder = function(sId,mSettings) {};
/**
 * 
 * Event is fired when the entered text is submitted 
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {string} oControlEvent.getParameters.text The text that is submitted
 * @public
 */
sap.ui.ux3.Feeder.prototype.submit = function(oControlEvent) { return null; };

/**
 * 
 * Attach event handler <code>fnFunction</code> to the 'submit' event of this <code>sap.ui.ux3.Feeder</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ui.ux3.Feeder</code>.<br/> itself. 
 * </p><p>
 * Event is fired when the entered text is submitted 
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener=this] Context object to call the event handler with. Defaults to this <code>sap.ui.ux3.Feeder</code>.<br/> itself.
 * @return {sap.ui.ux3.Feeder} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.Feeder.prototype.attachSubmit = function(oData,fnFunction,oListener) { return new sap.ui.ux3.Feeder(); };

/**
 * 
 * Detach event handler <code>fnFunction</code> from the 'submit' event of this <code>sap.ui.ux3.Feeder</code>.<br/>
 * </p><p>
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.ux3.Feeder} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.Feeder.prototype.detachSubmit = function(fnFunction,oListener) { return new sap.ui.ux3.Feeder(); };

/**
 * 
 * Creates a new subclass of class sap.ui.ux3.Feeder with name <code>sClassName</code> 
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
sap.ui.ux3.Feeder.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * 
 * Fire event submit to attached listeners.
 * </p><p>
 * Expects following event parameters:
 * <ul>
 * <li>'text' of type <code>string</code> The text that is submitted</li>
 * </ul>
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.ux3.Feeder} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.ui.ux3.Feeder.prototype.fireSubmit = function(mArguments) { return new sap.ui.ux3.Feeder(); };

/**
 * 
 * Getter for property <code>text</code>.
 * The text for the Feeder. @References are supported.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {string} the value of property <code>text</code>
 * @public
 * 
 */
sap.ui.ux3.Feeder.prototype.getText = function() { return ""; };

/**
 * 
 * Getter for property <code>thumbnailSrc</code>.
 * URL to the thumb nail image
 * This property is optional if the feeder is a sub-control of a feed or a feedChunk control. In this case the value of the feed or feddChunk control is used if it's not set. So it must be only set once on the feed or feedChunk control.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {sap.ui.core.URI} the value of property <code>thumbnailSrc</code>
 * @public
 * 
 */
sap.ui.ux3.Feeder.prototype.getThumbnailSrc = function() { return new sap.ui.core.URI(); };

/**
 * 
 * Getter for property <code>type</code>.
 * Type and size of the Feeder
 * </p><p>
 * Default value is <code>sap.ui.ux3.FeederType.Large</code>
 * @return {sap.ui.ux3.FeederType} the value of property <code>type</code>
 * @public
 * 
 */
sap.ui.ux3.Feeder.prototype.getType = function() { return new sap.ui.ux3.FeederType(); };

/**
 * 
 * Setter for property <code>text</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {string} sText  new value for property <code>text</code>
 * @return {sap.ui.ux3.Feeder} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.Feeder.prototype.setText = function(sText) { return new sap.ui.ux3.Feeder(); };

/**
 * 
 * Setter for property <code>thumbnailSrc</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {sap.ui.core.URI} sThumbnailSrc  new value for property <code>thumbnailSrc</code>
 * @return {sap.ui.ux3.Feeder} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.Feeder.prototype.setThumbnailSrc = function(sThumbnailSrc) { return new sap.ui.ux3.Feeder(); };

/**
 * 
 * Setter for property <code>type</code>.
 * </p><p>
 * Default value is <code>sap.ui.ux3.FeederType.Large</code> 
 * @param {sap.ui.ux3.FeederType} oType  new value for property <code>type</code>
 * @return {sap.ui.ux3.Feeder} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.Feeder.prototype.setType = function(oType) { return new sap.ui.ux3.Feeder(); };


// ---- sap.ui.ux3.FeederType --------------------------------------------------------------------------

// dummy function to make Eclipse aware of namespace
sap.ui.ux3.FeederType.toString = function() { return ""; };

// ---- sap.ui.ux3.FollowActionState --------------------------------------------------------------------------

// dummy function to make Eclipse aware of namespace
sap.ui.ux3.FollowActionState.toString = function() { return ""; };

// ---- sap.ui.ux3.NavigationBar --------------------------------------------------------------------------

/**
 * 
 * Constructor for a new NavigationBar.
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
 * <li>{@link #getToplevelVariant toplevelVariant} : boolean (default: false)</li>
 * <li>{@link #getVisible visible} : boolean (default: true)</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getItems items} : sap.ui.ux3.NavigationItem[]</li></ul>
 * </li>
 * <li>Associations
 * <ul>
 * <li>{@link #getSelectedItem selectedItem} : string | sap.ui.ux3.NavigationItem</li>
 * <li>{@link #getAssociatedItems associatedItems} : string | sap.ui.ux3.NavigationItem</li></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link sap.ui.ux3.NavigationBar#event:select select} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
 * </li>
 * </ul> 
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * Provides enhanced navigation capabilities and is the parent control of NavigationItem. It is displayed in the form of a horizontal line
 * with switching markers depending on the currently selected item. The size of an item which is currently chosen by the user is enlarged. In the case
 * that a large number of items are defined for the bar, this is made transparent to the user by showing symbols for scrolling options (forwards and backwards)
 * to see the next or previous items.
 * @extends sap.ui.core.Control
 * @version 1.15.1-SNAPSHOT
 * @constructor   
 * @public
 * 
 */
sap.ui.ux3.NavigationBar = function(sId,mSettings) {};
/**
 * 
 * Event is fired when an item is selected by the user 
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {string} oControlEvent.getParameters.itemId The ID of the newly selected NavigationItem.
 * @param {sap.ui.ux3.NavigationItem} oControlEvent.getParameters.item The newly selected NavigationItem.
 * @public
 */
sap.ui.ux3.NavigationBar.prototype.select = function(oControlEvent) { return null; };

/**
 * 
 * @param {string | sap.ui.ux3.NavigationItem} vAssociatedItem
 *    Id of a associatedItem which becomes an additional target of this <code>associatedItems</code> association.
 *    Alternatively, a associatedItem instance may be given. 
 * @return {sap.ui.ux3.NavigationBar} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.NavigationBar.prototype.addAssociatedItem = function(vAssociatedItem) { return new sap.ui.ux3.NavigationBar(); };

/**
 * 
 * Adds some item <code>oItem</code> 
 * to the aggregation named <code>items</code>.
 * @param {sap.ui.ux3.NavigationItem}
 *            oItem the item to add; if empty, nothing is inserted
 * @return {sap.ui.ux3.NavigationBar} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.NavigationBar.prototype.addItem = function(oItem) { return new sap.ui.ux3.NavigationBar(); };

/**
 * 
 * Attach event handler <code>fnFunction</code> to the 'select' event of this <code>sap.ui.ux3.NavigationBar</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ui.ux3.NavigationBar</code>.<br/> itself. 
 * </p><p>
 * Event is fired when an item is selected by the user 
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener=this] Context object to call the event handler with. Defaults to this <code>sap.ui.ux3.NavigationBar</code>.<br/> itself.
 * @return {sap.ui.ux3.NavigationBar} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.NavigationBar.prototype.attachSelect = function(oData,fnFunction,oListener) { return new sap.ui.ux3.NavigationBar(); };

/**
 * 
 * Destroys all the items in the aggregation 
 * named <code>items</code>.
 * @return {sap.ui.ux3.NavigationBar} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.NavigationBar.prototype.destroyItems = function() { return new sap.ui.ux3.NavigationBar(); };

/**
 * 
 * Detach event handler <code>fnFunction</code> from the 'select' event of this <code>sap.ui.ux3.NavigationBar</code>.<br/>
 * </p><p>
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.ux3.NavigationBar} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.NavigationBar.prototype.detachSelect = function(fnFunction,oListener) { return new sap.ui.ux3.NavigationBar(); };

/**
 * 
 * Creates a new subclass of class sap.ui.ux3.NavigationBar with name <code>sClassName</code> 
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
sap.ui.ux3.NavigationBar.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * 
 * Fire event select to attached listeners.
 * </p><p>
 * Listeners may prevent the default action of this event using the preventDefault-method on the event object.
 * * 
 * Expects following event parameters:
 * <ul>
 * <li>'itemId' of type <code>string</code> The ID of the newly selected NavigationItem.</li>
 * <li>'item' of type <code>sap.ui.ux3.NavigationItem</code> The newly selected NavigationItem.</li>
 * </ul>
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {boolean} whether to prevent the default action
 * @protected
 * 
 */
sap.ui.ux3.NavigationBar.prototype.fireSelect = function(mArguments) { return false; };

/**
 * 
 * This association is ignored as long as the items aggregation is used; and supposed to be used alternatively when the items should be aggregated by other
 * entities.
 * @return {string[]}
 * @public
 * 
 */
sap.ui.ux3.NavigationBar.prototype.getAssociatedItems = function() { return new Array(); };

/**
 * 
 * Getter for aggregation <code>items</code>.<br/>
 * If the navigation items need to have a different parent than the NavigationBar, alternatively the associatedItems association can be used.
 * The NavigationBar follows the approach to use the items aggregation. If this aggregation is empty, associatedItems is used.
 * @return {sap.ui.ux3.NavigationItem[]}
 * @public
 * 
 */
sap.ui.ux3.NavigationBar.prototype.getItems = function() { return new Array(); };

/**
 * 
 * The selected NavigationItem.
 * @return {string} Id of the element which is the current target of the <code>selectedItem</code> association, or null
 * @public
 * 
 */
sap.ui.ux3.NavigationBar.prototype.getSelectedItem = function() { return ""; };

/**
 * 
 * Getter for property <code>toplevelVariant</code>.
 * Defines whether the navigation bar shall have top-level appearance
 * </p><p>
 * Default value is <code>false</code>
 * @return {boolean} the value of property <code>toplevelVariant</code>
 * @public
 * 
 */
sap.ui.ux3.NavigationBar.prototype.getToplevelVariant = function() { return false; };

/**
 * 
 * Getter for property <code>visible</code>.
 * Invisible controls are not rendered.
 * </p><p>
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>visible</code>
 * @public
 * 
 */
sap.ui.ux3.NavigationBar.prototype.getVisible = function() { return false; };

/**
 * 
 * Checks for the provided <code>sap.ui.ux3.NavigationItem</code> in the aggregation named <code>items</code> 
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.ux3.NavigationItem}
 *            oItem the item whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * 
 */
sap.ui.ux3.NavigationBar.prototype.indexOfItem = function(oItem) { return 0; };

/**
 * 
 * Inserts a item into the aggregation named <code>items</code>.
 * @param {sap.ui.ux3.NavigationItem}
 *          oItem the item to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the item should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the item is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the item is inserted at 
 *             the last position        
 * @return {sap.ui.ux3.NavigationBar} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.NavigationBar.prototype.insertItem = function(oItem,iIndex) { return new sap.ui.ux3.NavigationBar(); };

/**
 * 
 * Returns whether there is a selectedItem set which is actually present in the items aggregation; or, if the aggregation is empty, in the associatedItems association.
 * @type boolean
 * @public
 */
sap.ui.ux3.NavigationBar.prototype.isSelectedItemValid = function() { return false; };

/**
 * 
 * @return {string[]} an array with the ids of the removed elements (might be empty)
 * @public
 * 
 */
sap.ui.ux3.NavigationBar.prototype.removeAllAssociatedItems = function() { return new Array(); };

/**
 * 
 * Removes all the controls in the aggregation named <code>items</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.ux3.NavigationItem[]} an array of the removed elements (might be empty)
 * @public
 * 
 */
sap.ui.ux3.NavigationBar.prototype.removeAllItems = function() { return new Array(); };

/**
 * 
 * @param {int | string | sap.ui.ux3.NavigationItem} vAssociatedItem the associatedItem to remove or its index or id
 * @return {string} the id of the removed associatedItem or null
 * @public
 * 
 */
sap.ui.ux3.NavigationBar.prototype.removeAssociatedItem = function(vAssociatedItem) { return ""; };

/**
 * 
 * Removes an item from the aggregation named <code>items</code>.
 * @param {int | string | sap.ui.ux3.NavigationItem} vItem the item to remove or its index or id
 * @return {sap.ui.ux3.NavigationItem} the removed item or null
 * @public
 * 
 */
sap.ui.ux3.NavigationBar.prototype.removeItem = function(vItem) { return new sap.ui.ux3.NavigationItem(); };

/**
 * 
 * Replaces the currently associated items with the ones in the given array
 * @param {sap.ui.ux3.NavigationItem[]} 
 *         aItems
 *         The items to associate
 * @type sap.ui.ux3.NavigationBar
 * @public
 */
sap.ui.ux3.NavigationBar.prototype.setAssociatedItems = function(aItems) { return new sap.ui.ux3.NavigationBar(); };

/**
 * 
 * The selected NavigationItem.
 * @param {string | sap.ui.ux3.NavigationItem} vSelectedItem 
 *    Id of an element which becomes the new target of this <code>selectedItem</code> association.
 *    Alternatively, an element instance may be given.
 * @return {sap.ui.ux3.NavigationBar} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.NavigationBar.prototype.setSelectedItem = function(vSelectedItem) { return new sap.ui.ux3.NavigationBar(); };

/**
 * 
 * Setter for property <code>toplevelVariant</code>.
 * </p><p>
 * Default value is <code>false</code> 
 * @param {boolean} bToplevelVariant  new value for property <code>toplevelVariant</code>
 * @return {sap.ui.ux3.NavigationBar} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.NavigationBar.prototype.setToplevelVariant = function(bToplevelVariant) { return new sap.ui.ux3.NavigationBar(); };

/**
 * 
 * Setter for property <code>visible</code>.
 * </p><p>
 * Default value is <code>true</code> 
 * @param {boolean} bVisible  new value for property <code>visible</code>
 * @return {sap.ui.ux3.NavigationBar} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.NavigationBar.prototype.setVisible = function(bVisible) { return new sap.ui.ux3.NavigationBar(); };


// ---- sap.ui.ux3.NavigationItem --------------------------------------------------------------------------

/**
 * 
 * Constructor for a new NavigationItem.
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
 * <li>{@link #getVisible visible} : boolean (default: true)</li>
 * <li>{@link #getHref href} : sap.ui.core.URI</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getSubItems subItems} : sap.ui.ux3.NavigationItem[]</li></ul>
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
 * Is the item to be used within the NavigationBar
 * @extends sap.ui.core.Item
 * @version 1.15.1-SNAPSHOT
 * @constructor   
 * @public
 * 
 */
sap.ui.ux3.NavigationItem = function(sId,mSettings) {};
/**
 * 
 * Adds some subItem <code>oSubItem</code> 
 * to the aggregation named <code>subItems</code>.
 * @param {sap.ui.ux3.NavigationItem}
 *            oSubItem the subItem to add; if empty, nothing is inserted
 * @return {sap.ui.ux3.NavigationItem} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.NavigationItem.prototype.addSubItem = function(oSubItem) { return new sap.ui.ux3.NavigationItem(); };

/**
 * 
 * Destroys all the subItems in the aggregation 
 * named <code>subItems</code>.
 * @return {sap.ui.ux3.NavigationItem} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.NavigationItem.prototype.destroySubItems = function() { return new sap.ui.ux3.NavigationItem(); };

/**
 * 
 * Creates a new subclass of class sap.ui.ux3.NavigationItem with name <code>sClassName</code> 
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
sap.ui.ux3.NavigationItem.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * 
 * Getter for property <code>href</code>.
 * Defines the link target URL. This property is optional and should only be set when required!
 * The use of the href property is to not only allow users to navigate in-place by left-clicking NavigationItems, but also to allow right-click and then "open in new tab" or "open in new window". As long as href is not set, an empty window will open and stay blank. But when href is set, the new window/tab will load this URL and it is the application's responsibility to display what the user expects (e.g. the Shell, with the respective NavigationItem being selected).
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {sap.ui.core.URI} the value of property <code>href</code>
 * @public
 * 
 */
sap.ui.ux3.NavigationItem.prototype.getHref = function() { return new sap.ui.core.URI(); };

/**
 * 
 * Getter for aggregation <code>subItems</code>.<br/>
 * Any NavigationItems on the next hierarchy level connected to this NavigationItem
 * @return {sap.ui.ux3.NavigationItem[]}
 * @public
 * 
 */
sap.ui.ux3.NavigationItem.prototype.getSubItems = function() { return new Array(); };

/**
 * 
 * Getter for property <code>visible</code>.
 * Whether the NavigationItem is currently visible. When making NavigationItems invisible at runtime it is the application's responsibility to make sure it is not the currently selected one - or to select another one in this case.
 * </p><p>
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>visible</code>
 * @public
 * @since 1.9.0
 * 
 */
sap.ui.ux3.NavigationItem.prototype.getVisible = function() { return false; };

/**
 * 
 * Checks for the provided <code>sap.ui.ux3.NavigationItem</code> in the aggregation named <code>subItems</code> 
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.ux3.NavigationItem}
 *            oSubItem the subItem whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * 
 */
sap.ui.ux3.NavigationItem.prototype.indexOfSubItem = function(oSubItem) { return 0; };

/**
 * 
 * Inserts a subItem into the aggregation named <code>subItems</code>.
 * @param {sap.ui.ux3.NavigationItem}
 *          oSubItem the subItem to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the subItem should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the subItem is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the subItem is inserted at 
 *             the last position        
 * @return {sap.ui.ux3.NavigationItem} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.NavigationItem.prototype.insertSubItem = function(oSubItem,iIndex) { return new sap.ui.ux3.NavigationItem(); };

/**
 * 
 * Removes all the controls in the aggregation named <code>subItems</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.ux3.NavigationItem[]} an array of the removed elements (might be empty)
 * @public
 * 
 */
sap.ui.ux3.NavigationItem.prototype.removeAllSubItems = function() { return new Array(); };

/**
 * 
 * Removes an subItem from the aggregation named <code>subItems</code>.
 * @param {int | string | sap.ui.ux3.NavigationItem} vSubItem the subItem to remove or its index or id
 * @return {sap.ui.ux3.NavigationItem} the removed subItem or null
 * @public
 * 
 */
sap.ui.ux3.NavigationItem.prototype.removeSubItem = function(vSubItem) { return new sap.ui.ux3.NavigationItem(); };

/**
 * 
 * Setter for property <code>href</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {sap.ui.core.URI} sHref  new value for property <code>href</code>
 * @return {sap.ui.ux3.NavigationItem} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.NavigationItem.prototype.setHref = function(sHref) { return new sap.ui.ux3.NavigationItem(); };

/**
 * 
 * Setter for property <code>visible</code>.
 * </p><p>
 * Default value is <code>true</code> 
 * @param {boolean} bVisible  new value for property <code>visible</code>
 * @return {sap.ui.ux3.NavigationItem} <code>this</code> to allow method chaining
 * @public
 * @since 1.9.0
 * 
 */
sap.ui.ux3.NavigationItem.prototype.setVisible = function(bVisible) { return new sap.ui.ux3.NavigationItem(); };


// ---- sap.ui.ux3.NotificationBar --------------------------------------------------------------------------

/**
 * 
 * Constructor for a new NotificationBar.
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
 * <li>{@link #getVisibleStatus visibleStatus} : sap.ui.ux3.NotificationBarStatus (default: sap.ui.ux3.NotificationBarStatus.Default)</li>
 * <li>{@link #getResizeEnabled resizeEnabled} : boolean (default: true)</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getMessageNotifier messageNotifier} : sap.ui.core.Element</li>
 * <li>{@link #getNotifiers notifiers} : sap.ui.core.Element[]</li></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link sap.ui.ux3.NotificationBar#event:display display} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.ui.ux3.NotificationBar#event:resize resize} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
 * </li>
 * </ul> 
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * A NotificationBar is a "toolbar" that can be added to a page to show messages and notifications from the application.
 * Its position, height and width is inherited from the element that the notification bar is added to.
 * @extends sap.ui.core.Control
 * @version 1.15.1-SNAPSHOT
 * @constructor   
 * @public
 * @since 1.7.0
 * 
 */
sap.ui.ux3.NotificationBar = function(sId,mSettings) {};
/**
 * 
 * Event is fired when the bar wants to be displayed depending on given flag. This allows the application to decide what to do. 
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {boolean} oControlEvent.getParameters.show Indicates if the bar wants to be shown or hidden
 * @public
 */
sap.ui.ux3.NotificationBar.prototype.display = function(oControlEvent) { return null; };

/**
 * 
 * This event is thrown when the bar was resized (to the different valid states: Min, Max, Default, None). The event itself can be used from SAPUI5-version 1.12.2 since there was a bug in the previous versions firing this event. 
 * @event
 * @since 1.12.2
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {sap.ui.ux3.NotificationBarStatus} oControlEvent.getParameters.status The corresponding status to which the bar was resized. The corresponding heights can be taken for the bar's CSS file.
 * @public
 */
sap.ui.ux3.NotificationBar.prototype.resize = function(oControlEvent) { return null; };

/**
 * 
 * Adds some notifier <code>oNotifier</code> 
 * to the aggregation named <code>notifiers</code>.
 * @param {sap.ui.core.Element}
 *            oNotifier the notifier to add; if empty, nothing is inserted
 * @return {sap.ui.ux3.NotificationBar} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.NotificationBar.prototype.addNotifier = function(oNotifier) { return new sap.ui.ux3.NotificationBar(); };

/**
 * 
 * Attach event handler <code>fnFunction</code> to the 'display' event of this <code>sap.ui.ux3.NotificationBar</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ui.ux3.NotificationBar</code>.<br/> itself. 
 * </p><p>
 * Event is fired when the bar wants to be displayed depending on given flag. This allows the application to decide what to do. 
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener=this] Context object to call the event handler with. Defaults to this <code>sap.ui.ux3.NotificationBar</code>.<br/> itself.
 * @return {sap.ui.ux3.NotificationBar} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.NotificationBar.prototype.attachDisplay = function(oData,fnFunction,oListener) { return new sap.ui.ux3.NotificationBar(); };

/**
 * 
 * Attach event handler <code>fnFunction</code> to the 'resize' event of this <code>sap.ui.ux3.NotificationBar</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ui.ux3.NotificationBar</code>.<br/> itself. 
 * </p><p>
 * This event is thrown when the bar was resized (to the different valid states: Min, Max, Default, None). The event itself can be used from SAPUI5-version 1.12.2 since there was a bug in the previous versions firing this event. 
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener=this] Context object to call the event handler with. Defaults to this <code>sap.ui.ux3.NotificationBar</code>.<br/> itself.
 * @return {sap.ui.ux3.NotificationBar} <code>this</code> to allow method chaining
 * @public
 * @since 1.12.2
 * 
 */
sap.ui.ux3.NotificationBar.prototype.attachResize = function(oData,fnFunction,oListener) { return new sap.ui.ux3.NotificationBar(); };

/**
 * 
 * Destroys the messageNotifier in the aggregation 
 * named <code>messageNotifier</code>.
 * @return {sap.ui.ux3.NotificationBar} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.NotificationBar.prototype.destroyMessageNotifier = function() { return new sap.ui.ux3.NotificationBar(); };

/**
 * 
 * Destroys all the notifiers in the aggregation 
 * named <code>notifiers</code>.
 * @return {sap.ui.ux3.NotificationBar} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.NotificationBar.prototype.destroyNotifiers = function() { return new sap.ui.ux3.NotificationBar(); };

/**
 * 
 * Detach event handler <code>fnFunction</code> from the 'display' event of this <code>sap.ui.ux3.NotificationBar</code>.<br/>
 * </p><p>
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.ux3.NotificationBar} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.NotificationBar.prototype.detachDisplay = function(fnFunction,oListener) { return new sap.ui.ux3.NotificationBar(); };

/**
 * 
 * Detach event handler <code>fnFunction</code> from the 'resize' event of this <code>sap.ui.ux3.NotificationBar</code>.<br/>
 * </p><p>
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.ux3.NotificationBar} <code>this</code> to allow method chaining
 * @public
 * @since 1.12.2
 * 
 */
sap.ui.ux3.NotificationBar.prototype.detachResize = function(fnFunction,oListener) { return new sap.ui.ux3.NotificationBar(); };

/**
 * 
 * Creates a new subclass of class sap.ui.ux3.NotificationBar with name <code>sClassName</code> 
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
sap.ui.ux3.NotificationBar.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * 
 * Fire event display to attached listeners.
 * </p><p>
 * Expects following event parameters:
 * <ul>
 * <li>'show' of type <code>boolean</code> Indicates if the bar wants to be shown or hidden</li>
 * </ul>
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.ux3.NotificationBar} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.ui.ux3.NotificationBar.prototype.fireDisplay = function(mArguments) { return new sap.ui.ux3.NotificationBar(); };

/**
 * 
 * Fire event resize to attached listeners.
 * </p><p>
 * Expects following event parameters:
 * <ul>
 * <li>'status' of type <code>sap.ui.ux3.NotificationBarStatus</code> The corresponding status to which the bar was resized. The corresponding heights can be taken for the bar's CSS file.</li>
 * </ul>
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.ux3.NotificationBar} <code>this</code> to allow method chaining
 * @protected
 * @since 1.12.2
 * 
 */
sap.ui.ux3.NotificationBar.prototype.fireResize = function(mArguments) { return new sap.ui.ux3.NotificationBar(); };

/**
 * 
 * Getter for aggregation <code>messageNotifier</code>.<br/>
 * Notifier that shows messages
 * @return {sap.ui.core.Element}
 * @public
 * 
 */
sap.ui.ux3.NotificationBar.prototype.getMessageNotifier = function() { return new sap.ui.core.Element(); };

/**
 * 
 * Getter for aggregation <code>notifiers</code>.<br/>
 * Notifiers that monitor something within the application and display the corresponding notifications.
 * @return {sap.ui.core.Element[]}
 * @public
 * 
 */
sap.ui.ux3.NotificationBar.prototype.getNotifiers = function() { return new Array(); };

/**
 * 
 * Getter for property <code>resizeEnabled</code>.
 * This property enables the bar to be resized by the user.
 * </p><p>
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>resizeEnabled</code>
 * @public
 * 
 */
sap.ui.ux3.NotificationBar.prototype.getResizeEnabled = function() { return false; };

/**
 * 
 * Getter for property <code>visibleStatus</code>.
 * This property displays the bar corresponding to given status
 * </p><p>
 * Default value is <code>Default</code>
 * @return {sap.ui.ux3.NotificationBarStatus} the value of property <code>visibleStatus</code>
 * @public
 * 
 */
sap.ui.ux3.NotificationBar.prototype.getVisibleStatus = function() { return new sap.ui.ux3.NotificationBarStatus(); };

/**
 * 
 * This method checks if the NotificationBar has any items (notifications or messages) to show and returns true if there are any items to show. So the application should decide if the bar should be displayed.
 * @type boolean
 * @public
 */
sap.ui.ux3.NotificationBar.prototype.hasItems = function() { return false; };

/**
 * 
 * Checks for the provided <code>sap.ui.core.Element</code> in the aggregation named <code>notifiers</code> 
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.core.Element}
 *            oNotifier the notifier whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * 
 */
sap.ui.ux3.NotificationBar.prototype.indexOfNotifier = function(oNotifier) { return 0; };

/**
 * 
 * Inserts a notifier into the aggregation named <code>notifiers</code>.
 * @param {sap.ui.core.Element}
 *          oNotifier the notifier to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the notifier should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the notifier is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the notifier is inserted at 
 *             the last position        
 * @return {sap.ui.ux3.NotificationBar} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.NotificationBar.prototype.insertNotifier = function(oNotifier,iIndex) { return new sap.ui.ux3.NotificationBar(); };

/**
 * 
 * Removes all the controls in the aggregation named <code>notifiers</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.core.Element[]} an array of the removed elements (might be empty)
 * @public
 * 
 */
sap.ui.ux3.NotificationBar.prototype.removeAllNotifiers = function() { return new Array(); };

/**
 * 
 * Removes an notifier from the aggregation named <code>notifiers</code>.
 * @param {int | string | sap.ui.core.Element} vNotifier the notifier to remove or its index or id
 * @return {sap.ui.core.Element} the removed notifier or null
 * @public
 * 
 */
sap.ui.ux3.NotificationBar.prototype.removeNotifier = function(vNotifier) { return new sap.ui.core.Element(); };

/**
 * 
 * Setter for the aggregated <code>messageNotifier</code>.
 * @param oMessageNotifier {sap.ui.core.Element}
 * @return {sap.ui.ux3.NotificationBar} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.NotificationBar.prototype.setMessageNotifier = function(oMessageNotifier) { return new sap.ui.ux3.NotificationBar(); };

/**
 * 
 * Setter for property <code>resizeEnabled</code>.
 * </p><p>
 * Default value is <code>true</code> 
 * @param {boolean} bResizeEnabled  new value for property <code>resizeEnabled</code>
 * @return {sap.ui.ux3.NotificationBar} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.NotificationBar.prototype.setResizeEnabled = function(bResizeEnabled) { return new sap.ui.ux3.NotificationBar(); };

/**
 * 
 * Setter for property <code>visibleStatus</code>.
 * </p><p>
 * Default value is <code>Default</code> 
 * @param {sap.ui.ux3.NotificationBarStatus} oVisibleStatus  new value for property <code>visibleStatus</code>
 * @return {sap.ui.ux3.NotificationBar} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.NotificationBar.prototype.setVisibleStatus = function(oVisibleStatus) { return new sap.ui.ux3.NotificationBar(); };


// ---- sap.ui.ux3.NotificationBarStatus --------------------------------------------------------------------------

// dummy function to make Eclipse aware of namespace
sap.ui.ux3.NotificationBarStatus.toString = function() { return ""; };

// ---- sap.ui.ux3.Notifier --------------------------------------------------------------------------

/**
 * 
 * Constructor for a new Notifier.
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
 * <li>{@link #getTitle title} : string</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getMessages messages} : sap.ui.core.Message[]</li></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link sap.ui.ux3.Notifier#event:messageSelected messageSelected} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
 * </li>
 * </ul> 
 * </p><p>
 * </p><p>
 * In addition, all settings applicable to the base type {@link sap.ui.core.Element#constructor sap.ui.core.Element}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * This element can be docked to a notification bar to show notification items
 * @extends sap.ui.core.Element
 * @version 1.15.1-SNAPSHOT
 * @constructor   
 * @public
 * 
 */
sap.ui.ux3.Notifier = function(sId,mSettings) {};
/**
 * 
 * Event is fired when a message of the notifiers was selected. 
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {sap.ui.core.Message} oControlEvent.getParameters.message The message that was selected
 * @param {sap.ui.ux3.Notifier} oControlEvent.getParameters.notifier The notifier that contains the selected message
 * @public
 */
sap.ui.ux3.Notifier.prototype.messageSelected = function(oControlEvent) { return null; };

/**
 * 
 * Adds some message <code>oMessage</code> 
 * to the aggregation named <code>messages</code>.
 * @param {sap.ui.core.Message}
 *            oMessage the message to add; if empty, nothing is inserted
 * @return {sap.ui.ux3.Notifier} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.Notifier.prototype.addMessage = function(oMessage) { return new sap.ui.ux3.Notifier(); };

/**
 * 
 * Attach event handler <code>fnFunction</code> to the 'messageSelected' event of this <code>sap.ui.ux3.Notifier</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ui.ux3.Notifier</code>.<br/> itself. 
 * </p><p>
 * Event is fired when a message of the notifiers was selected. 
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener=this] Context object to call the event handler with. Defaults to this <code>sap.ui.ux3.Notifier</code>.<br/> itself.
 * @return {sap.ui.ux3.Notifier} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.Notifier.prototype.attachMessageSelected = function(oData,fnFunction,oListener) { return new sap.ui.ux3.Notifier(); };

/**
 * 
 * Destroys all the messages in the aggregation 
 * named <code>messages</code>.
 * @return {sap.ui.ux3.Notifier} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.Notifier.prototype.destroyMessages = function() { return new sap.ui.ux3.Notifier(); };

/**
 * 
 * Detach event handler <code>fnFunction</code> from the 'messageSelected' event of this <code>sap.ui.ux3.Notifier</code>.<br/>
 * </p><p>
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.ux3.Notifier} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.Notifier.prototype.detachMessageSelected = function(fnFunction,oListener) { return new sap.ui.ux3.Notifier(); };

/**
 * 
 * Creates a new subclass of class sap.ui.ux3.Notifier with name <code>sClassName</code> 
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
sap.ui.ux3.Notifier.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * 
 * Fire event messageSelected to attached listeners.
 * </p><p>
 * Expects following event parameters:
 * <ul>
 * <li>'message' of type <code>sap.ui.core.Message</code> The message that was selected</li>
 * <li>'notifier' of type <code>sap.ui.ux3.Notifier</code> The notifier that contains the selected message</li>
 * </ul>
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.ux3.Notifier} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.ui.ux3.Notifier.prototype.fireMessageSelected = function(mArguments) { return new sap.ui.ux3.Notifier(); };

/**
 * 
 * Getter for property <code>icon</code>.
 * Icon of the control that should be displayed within the corresponding bar
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {sap.ui.core.URI} the value of property <code>icon</code>
 * @public
 * 
 */
sap.ui.ux3.Notifier.prototype.getIcon = function() { return new sap.ui.core.URI(); };

/**
 * 
 * Getter for aggregation <code>messages</code>.<br/>
 * Messages of this notifier.
 * @return {sap.ui.core.Message[]}
 * @public
 * 
 */
sap.ui.ux3.Notifier.prototype.getMessages = function() { return new Array(); };

/**
 * 
 * Getter for property <code>title</code>.
 * Defines the title that should be displayed within the opening popup
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {string} the value of property <code>title</code>
 * @public
 * 
 */
sap.ui.ux3.Notifier.prototype.getTitle = function() { return ""; };

/**
 * 
 * This method checks if the notifier has any items.
 * @type boolean
 * @public
 */
sap.ui.ux3.Notifier.prototype.hasItems = function() { return false; };

/**
 * 
 * Checks for the provided <code>sap.ui.core.Message</code> in the aggregation named <code>messages</code> 
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.core.Message}
 *            oMessage the message whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * 
 */
sap.ui.ux3.Notifier.prototype.indexOfMessage = function(oMessage) { return 0; };

/**
 * 
 * Inserts a message into the aggregation named <code>messages</code>.
 * @param {sap.ui.core.Message}
 *          oMessage the message to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the message should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the message is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the message is inserted at 
 *             the last position        
 * @return {sap.ui.ux3.Notifier} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.Notifier.prototype.insertMessage = function(oMessage,iIndex) { return new sap.ui.ux3.Notifier(); };

/**
 * 
 * Removes all the controls in the aggregation named <code>messages</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.core.Message[]} an array of the removed elements (might be empty)
 * @public
 * 
 */
sap.ui.ux3.Notifier.prototype.removeAllMessages = function() { return new Array(); };

/**
 * 
 * Removes an message from the aggregation named <code>messages</code>.
 * @param {int | string | sap.ui.core.Message} vMessage the message to remove or its index or id
 * @return {sap.ui.core.Message} the removed message or null
 * @public
 * 
 */
sap.ui.ux3.Notifier.prototype.removeMessage = function(vMessage) { return new sap.ui.core.Message(); };

/**
 * 
 * Setter for property <code>icon</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {sap.ui.core.URI} sIcon  new value for property <code>icon</code>
 * @return {sap.ui.ux3.Notifier} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.Notifier.prototype.setIcon = function(sIcon) { return new sap.ui.ux3.Notifier(); };

/**
 * 
 * Setter for property <code>title</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {string} sTitle  new value for property <code>title</code>
 * @return {sap.ui.ux3.Notifier} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.Notifier.prototype.setTitle = function(sTitle) { return new sap.ui.ux3.Notifier(); };


// ---- sap.ui.ux3.Overlay --------------------------------------------------------------------------

/**
 * 
 * Constructor for a new Overlay.
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
 * <li>{@link #getOpenButtonVisible openButtonVisible} : boolean (default: true)</li>
 * <li>{@link #getCloseButtonVisible closeButtonVisible} : boolean (default: true)</li></ul>
 * </li>
 * <li>Aggregations
 * <ul></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link sap.ui.ux3.Overlay#event:close close} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.ui.ux3.Overlay#event:openNew openNew} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.ui.ux3.Overlay#event:open open} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
 * </li>
 * </ul> 
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * Overlay Control
 * @extends sap.ui.core.Control
 * @version 1.15.1-SNAPSHOT
 * @constructor   
 * @public
 * 
 */
sap.ui.ux3.Overlay = function(sId,mSettings) {};
/**
 * 
 * Event is fired when the ThingInspector is closed 
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {string} oControlEvent.getParameters.id The Id of the Thing which is inspected in this ThingInspector instance
 * @public
 */
sap.ui.ux3.Overlay.prototype.close = function(oControlEvent) { return null; };

/**
 * 
 * Event is fired when the ThingInspector is opened 
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {string} oControlEvent.getParameters.id The Id of the Thing which is inspected in this ThingInspector instance
 * @public
 */
sap.ui.ux3.Overlay.prototype.open = function(oControlEvent) { return null; };

/**
 * 
 * Event is fired when the 'Open' button of the ThingInspector is clicked 
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {string} oControlEvent.getParameters.id The Id of the Thing which is inspected in this ThingInspector instance
 * @public
 */
sap.ui.ux3.Overlay.prototype.openNew = function(oControlEvent) { return null; };

/**
 * 
 * Attach event handler <code>fnFunction</code> to the 'close' event of this <code>sap.ui.ux3.Overlay</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ui.ux3.Overlay</code>.<br/> itself. 
 * </p><p>
 * Event is fired when the ThingInspector is closed 
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener=this] Context object to call the event handler with. Defaults to this <code>sap.ui.ux3.Overlay</code>.<br/> itself.
 * @return {sap.ui.ux3.Overlay} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.Overlay.prototype.attachClose = function(oData,fnFunction,oListener) { return new sap.ui.ux3.Overlay(); };

/**
 * 
 * Attach event handler <code>fnFunction</code> to the 'open' event of this <code>sap.ui.ux3.Overlay</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ui.ux3.Overlay</code>.<br/> itself. 
 * </p><p>
 * Event is fired when the ThingInspector is opened 
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener=this] Context object to call the event handler with. Defaults to this <code>sap.ui.ux3.Overlay</code>.<br/> itself.
 * @return {sap.ui.ux3.Overlay} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.Overlay.prototype.attachOpen = function(oData,fnFunction,oListener) { return new sap.ui.ux3.Overlay(); };

/**
 * 
 * Attach event handler <code>fnFunction</code> to the 'openNew' event of this <code>sap.ui.ux3.Overlay</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ui.ux3.Overlay</code>.<br/> itself. 
 * </p><p>
 * Event is fired when the 'Open' button of the ThingInspector is clicked 
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener=this] Context object to call the event handler with. Defaults to this <code>sap.ui.ux3.Overlay</code>.<br/> itself.
 * @return {sap.ui.ux3.Overlay} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.Overlay.prototype.attachOpenNew = function(oData,fnFunction,oListener) { return new sap.ui.ux3.Overlay(); };

/**
 * 
 * Closes this instance of Overlay
 * @public
 */
sap.ui.ux3.Overlay.prototype.close = function() { return null; };

/**
 * 
 * Detach event handler <code>fnFunction</code> from the 'close' event of this <code>sap.ui.ux3.Overlay</code>.<br/>
 * </p><p>
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.ux3.Overlay} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.Overlay.prototype.detachClose = function(fnFunction,oListener) { return new sap.ui.ux3.Overlay(); };

/**
 * 
 * Detach event handler <code>fnFunction</code> from the 'open' event of this <code>sap.ui.ux3.Overlay</code>.<br/>
 * </p><p>
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.ux3.Overlay} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.Overlay.prototype.detachOpen = function(fnFunction,oListener) { return new sap.ui.ux3.Overlay(); };

/**
 * 
 * Detach event handler <code>fnFunction</code> from the 'openNew' event of this <code>sap.ui.ux3.Overlay</code>.<br/>
 * </p><p>
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.ux3.Overlay} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.Overlay.prototype.detachOpenNew = function(fnFunction,oListener) { return new sap.ui.ux3.Overlay(); };

/**
 * 
 * Creates a new subclass of class sap.ui.ux3.Overlay with name <code>sClassName</code> 
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
sap.ui.ux3.Overlay.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * 
 * Fire event close to attached listeners.
 * </p><p>
 * Listeners may prevent the default action of this event using the preventDefault-method on the event object.
 * * 
 * Expects following event parameters:
 * <ul>
 * <li>'id' of type <code>string</code> The Id of the Thing which is inspected in this ThingInspector instance</li>
 * </ul>
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {boolean} whether to prevent the default action
 * @protected
 * 
 */
sap.ui.ux3.Overlay.prototype.fireClose = function(mArguments) { return false; };

/**
 * 
 * Fire event open to attached listeners.
 * </p><p>
 * Expects following event parameters:
 * <ul>
 * <li>'id' of type <code>string</code> The Id of the Thing which is inspected in this ThingInspector instance</li>
 * </ul>
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.ux3.Overlay} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.ui.ux3.Overlay.prototype.fireOpen = function(mArguments) { return new sap.ui.ux3.Overlay(); };

/**
 * 
 * Fire event openNew to attached listeners.
 * </p><p>
 * Expects following event parameters:
 * <ul>
 * <li>'id' of type <code>string</code> The Id of the Thing which is inspected in this ThingInspector instance</li>
 * </ul>
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.ux3.Overlay} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.ui.ux3.Overlay.prototype.fireOpenNew = function(mArguments) { return new sap.ui.ux3.Overlay(); };

/**
 * 
 * Getter for property <code>closeButtonVisible</code>.
 * Defines whether the 'Close' button shall be visible
 * </p><p>
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>closeButtonVisible</code>
 * @public
 * 
 */
sap.ui.ux3.Overlay.prototype.getCloseButtonVisible = function() { return false; };

/**
 * 
 * Getter for property <code>openButtonVisible</code>.
 * Defines whether the 'Open' button shall be visible
 * </p><p>
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>openButtonVisible</code>
 * @public
 * 
 */
sap.ui.ux3.Overlay.prototype.getOpenButtonVisible = function() { return false; };

/**
 * 
 * Checks whether Overlay is open
 * @type boolean
 * @public
 */
sap.ui.ux3.Overlay.prototype.isOpen = function() { return false; };

/**
 * 
 * Opens this instance of Overlay
 * @public
 */
sap.ui.ux3.Overlay.prototype.open = function(initialFocusId) { return null; };

/**
 * 
 * Setter for property <code>closeButtonVisible</code>.
 * </p><p>
 * Default value is <code>true</code> 
 * @param {boolean} bCloseButtonVisible  new value for property <code>closeButtonVisible</code>
 * @return {sap.ui.ux3.Overlay} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.Overlay.prototype.setCloseButtonVisible = function(bCloseButtonVisible) { return new sap.ui.ux3.Overlay(); };

/**
 * 
 * Setter for property <code>openButtonVisible</code>.
 * </p><p>
 * Default value is <code>true</code> 
 * @param {boolean} bOpenButtonVisible  new value for property <code>openButtonVisible</code>
 * @return {sap.ui.ux3.Overlay} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.Overlay.prototype.setOpenButtonVisible = function(bOpenButtonVisible) { return new sap.ui.ux3.Overlay(); };


// ---- sap.ui.ux3.OverlayContainer --------------------------------------------------------------------------

/**
 * 
 * Constructor for a new OverlayContainer.
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
 * <li>{@link #getContent content} : sap.ui.core.Control[]</li></ul>
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
 * In addition, all settings applicable to the base type {@link sap.ui.ux3.Overlay#constructor sap.ui.ux3.Overlay}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * Is to be embedded into the Overlay control as content container
 * @extends sap.ui.ux3.Overlay
 * @version 1.15.1-SNAPSHOT
 * @constructor   
 * @public
 * 
 */
sap.ui.ux3.OverlayContainer = function(sId,mSettings) {};
/**
 * 
 * Adds some content <code>oContent</code> 
 * to the aggregation named <code>content</code>.
 * @param {sap.ui.core.Control}
 *            oContent the content to add; if empty, nothing is inserted
 * @return {sap.ui.ux3.OverlayContainer} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.OverlayContainer.prototype.addContent = function(oContent) { return new sap.ui.ux3.OverlayContainer(); };

/**
 * 
 * Destroys all the content in the aggregation 
 * named <code>content</code>.
 * @return {sap.ui.ux3.OverlayContainer} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.OverlayContainer.prototype.destroyContent = function() { return new sap.ui.ux3.OverlayContainer(); };

/**
 * 
 * Creates a new subclass of class sap.ui.ux3.OverlayContainer with name <code>sClassName</code> 
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
sap.ui.ux3.OverlayContainer.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * 
 * Getter for aggregation <code>content</code>.<br/>
 * Aggregation for content
 * @return {sap.ui.core.Control[]}
 * @public
 * 
 */
sap.ui.ux3.OverlayContainer.prototype.getContent = function() { return new Array(); };

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
sap.ui.ux3.OverlayContainer.prototype.indexOfContent = function(oContent) { return 0; };

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
 * @return {sap.ui.ux3.OverlayContainer} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.OverlayContainer.prototype.insertContent = function(oContent,iIndex) { return new sap.ui.ux3.OverlayContainer(); };

/**
 * 
 * Removes all the controls in the aggregation named <code>content</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.core.Control[]} an array of the removed elements (might be empty)
 * @public
 * 
 */
sap.ui.ux3.OverlayContainer.prototype.removeAllContent = function() { return new Array(); };

/**
 * 
 * Removes an content from the aggregation named <code>content</code>.
 * @param {int | string | sap.ui.core.Control} vContent the content to remove or its index or id
 * @return {sap.ui.core.Control} the removed content or null
 * @public
 * 
 */
sap.ui.ux3.OverlayContainer.prototype.removeContent = function(vContent) { return new sap.ui.core.Control(); };


// ---- sap.ui.ux3.OverlayDialog --------------------------------------------------------------------------

/**
 * 
 * Constructor for a new OverlayDialog.
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
 * <li>{@link #getWidth width} : sap.ui.core.CSSSize (default: 'auto')</li>
 * <li>{@link #getHeight height} : sap.ui.core.CSSSize (default: 'auto')</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getContent content} : sap.ui.core.Control[]</li></ul>
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
 * In addition, all settings applicable to the base type {@link sap.ui.ux3.Overlay#constructor sap.ui.ux3.Overlay}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * Dialog implementation based on the Overlay. If used in a Shell it leaves the Tool-Palette, Pane-Bar and Header-Items accessible.
 * @extends sap.ui.ux3.Overlay
 * @version 1.15.1-SNAPSHOT
 * @constructor   
 * @public
 * 
 */
sap.ui.ux3.OverlayDialog = function(sId,mSettings) {};
/**
 * 
 * Adds some content <code>oContent</code> 
 * to the aggregation named <code>content</code>.
 * @param {sap.ui.core.Control}
 *            oContent the content to add; if empty, nothing is inserted
 * @return {sap.ui.ux3.OverlayDialog} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.OverlayDialog.prototype.addContent = function(oContent) { return new sap.ui.ux3.OverlayDialog(); };

/**
 * 
 * Destroys all the content in the aggregation 
 * named <code>content</code>.
 * @return {sap.ui.ux3.OverlayDialog} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.OverlayDialog.prototype.destroyContent = function() { return new sap.ui.ux3.OverlayDialog(); };

/**
 * 
 * Creates a new subclass of class sap.ui.ux3.OverlayDialog with name <code>sClassName</code> 
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
sap.ui.ux3.OverlayDialog.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * 
 * Getter for aggregation <code>content</code>.<br/>
 * Content for the OverlayDialog.
 * @return {sap.ui.core.Control[]}
 * @public
 * 
 */
sap.ui.ux3.OverlayDialog.prototype.getContent = function() { return new Array(); };

/**
 * 
 * Getter for property <code>height</code>.
 * Height of the Overlay Dialog. If the height is set to "auto" it is always 50% of the overlay height.
 * </p><p>
 * Default value is <code>auto</code>
 * @return {sap.ui.core.CSSSize} the value of property <code>height</code>
 * @public
 * 
 */
sap.ui.ux3.OverlayDialog.prototype.getHeight = function() { return new sap.ui.core.CSSSize(); };

/**
 * 
 * Getter for property <code>width</code>.
 * Width of the Overlay Dialog. If the width is set to "auto" it is always 50% of the overlay width.
 * </p><p>
 * Default value is <code>auto</code>
 * @return {sap.ui.core.CSSSize} the value of property <code>width</code>
 * @public
 * 
 */
sap.ui.ux3.OverlayDialog.prototype.getWidth = function() { return new sap.ui.core.CSSSize(); };

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
sap.ui.ux3.OverlayDialog.prototype.indexOfContent = function(oContent) { return 0; };

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
 * @return {sap.ui.ux3.OverlayDialog} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.OverlayDialog.prototype.insertContent = function(oContent,iIndex) { return new sap.ui.ux3.OverlayDialog(); };

/**
 * 
 * Removes all the controls in the aggregation named <code>content</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.core.Control[]} an array of the removed elements (might be empty)
 * @public
 * 
 */
sap.ui.ux3.OverlayDialog.prototype.removeAllContent = function() { return new Array(); };

/**
 * 
 * Removes an content from the aggregation named <code>content</code>.
 * @param {int | string | sap.ui.core.Control} vContent the content to remove or its index or id
 * @return {sap.ui.core.Control} the removed content or null
 * @public
 * 
 */
sap.ui.ux3.OverlayDialog.prototype.removeContent = function(vContent) { return new sap.ui.core.Control(); };

/**
 * 
 * Sets the height for the OverlayDialog
 * @param {CSSSize} sHeight
 * @public 
 */
sap.ui.ux3.OverlayDialog.prototype.setHeight = function(sHeight) { return null; };

/**
 * 
 * This Method is not supported for the OverlayDialog 
 * @public
 */
sap.ui.ux3.OverlayDialog.prototype.setOpenButtonVisible = function(bVisible) { return null; };

/**
 * 
 * Sets the width for the OverlayDialog
 * @param {CSSSize} sWidth
 * @public 
 */
sap.ui.ux3.OverlayDialog.prototype.setWidth = function(sWidth) { return null; };


// ---- sap.ui.ux3.QuickView --------------------------------------------------------------------------

/**
 * 
 * Constructor for a new QuickView.
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
 * <li>{@link #getType type} : string</li>
 * <li>{@link #getFirstTitle firstTitle} : string</li>
 * <li>{@link #getFirstTitleHref firstTitleHref} : string</li>
 * <li>{@link #getSecondTitle secondTitle} : string</li>
 * <li>{@link #getIcon icon} : sap.ui.core.URI</li>
 * <li>{@link #getWidth width} : sap.ui.core.CSSSize</li>
 * <li>{@link #getShowActionBar showActionBar} : boolean (default: true)</li>
 * <li>{@link #getFollowState followState} : sap.ui.ux3.FollowActionState (default: sap.ui.ux3.FollowActionState.Default)</li>
 * <li>{@link #getFlagState flagState} : boolean (default: false)</li>
 * <li>{@link #getFavoriteState favoriteState} : boolean (default: false)</li>
 * <li>{@link #getFavoriteActionEnabled favoriteActionEnabled} : boolean (default: true)</li>
 * <li>{@link #getUpdateActionEnabled updateActionEnabled} : boolean (default: true)</li>
 * <li>{@link #getFollowActionEnabled followActionEnabled} : boolean (default: true)</li>
 * <li>{@link #getFlagActionEnabled flagActionEnabled} : boolean (default: true)</li>
 * <li>{@link #getOpenActionEnabled openActionEnabled} : boolean (default: true)</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getContent content} : sap.ui.core.Element[]</li>
 * <li>{@link #getActions actions} : sap.ui.ux3.ThingAction[]</li>
 * <li>{@link #getActionBar actionBar} : sap.ui.ux3.ActionBar</li></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link sap.ui.ux3.QuickView#event:actionSelected actionSelected} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.ui.ux3.QuickView#event:feedSubmit feedSubmit} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.ui.ux3.QuickView#event:navigate navigate} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
 * </li>
 * </ul> 
 * </p><p>
 * </p><p>
 * In addition, all settings applicable to the base type {@link sap.ui.commons.CalloutBase#constructor sap.ui.commons.CalloutBase}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * QuickView is a small popup with a short overview of a Thing.
 * QuickView is shown when a user holds the mouse pointer over a related screen element.
 * @extends sap.ui.commons.CalloutBase
 * @version 1.15.1-SNAPSHOT
 * @constructor   
 * @public
 * 
 */
sap.ui.ux3.QuickView = function(sId,mSettings) {};
/**
 * 
 * Action is selected in Action Bar 
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {string} oControlEvent.getParameters.id Id of selected ThingAction
 * @param {sap.ui.ux3.ThingAction} oControlEvent.getParameters.action Selected ThingAction
 * @param {string} oControlEvent.getParameters.newState New State of the selected action. Only filled if the respective action maintains a state property, for example 'FollowUp' or 'Favorite'
 * @public
 */
sap.ui.ux3.QuickView.prototype.actionSelected = function(oControlEvent) { return null; };

/**
 * 
 * Fired when a new feed entry is submitted. 
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {string} oControlEvent.getParameters.text Feed text
 * @public
 */
sap.ui.ux3.QuickView.prototype.feedSubmit = function(oControlEvent) { return null; };

/**
 * 
 * Event is fired when a user clicks on the firstTitle link. Call the preventDefault method of the event object to cancel browser navigation. 
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {string} oControlEvent.getParameters.href URI of the Thing Inspector application.
 * @public
 */
sap.ui.ux3.QuickView.prototype.navigate = function(oControlEvent) { return null; };

/**
 * 
 * Adds some action <code>oAction</code> 
 * to the aggregation named <code>actions</code>.
 * @param {sap.ui.ux3.ThingAction}
 *            oAction the action to add; if empty, nothing is inserted
 * @return {sap.ui.ux3.QuickView} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.QuickView.prototype.addAction = function(oAction) { return new sap.ui.ux3.QuickView(); };

/**
 * 
 * Adds some content <code>oContent</code> 
 * to the aggregation named <code>content</code>.
 * @param {sap.ui.core.Element}
 *            oContent the content to add; if empty, nothing is inserted
 * @return {sap.ui.ux3.QuickView} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.QuickView.prototype.addContent = function(oContent) { return new sap.ui.ux3.QuickView(); };

/**
 * 
 * Attach event handler <code>fnFunction</code> to the 'actionSelected' event of this <code>sap.ui.ux3.QuickView</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ui.ux3.QuickView</code>.<br/> itself. 
 * </p><p>
 * Action is selected in Action Bar 
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener=this] Context object to call the event handler with. Defaults to this <code>sap.ui.ux3.QuickView</code>.<br/> itself.
 * @return {sap.ui.ux3.QuickView} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.QuickView.prototype.attachActionSelected = function(oData,fnFunction,oListener) { return new sap.ui.ux3.QuickView(); };

/**
 * 
 * Attach event handler <code>fnFunction</code> to the 'feedSubmit' event of this <code>sap.ui.ux3.QuickView</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ui.ux3.QuickView</code>.<br/> itself. 
 * </p><p>
 * Fired when a new feed entry is submitted. 
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener=this] Context object to call the event handler with. Defaults to this <code>sap.ui.ux3.QuickView</code>.<br/> itself.
 * @return {sap.ui.ux3.QuickView} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.QuickView.prototype.attachFeedSubmit = function(oData,fnFunction,oListener) { return new sap.ui.ux3.QuickView(); };

/**
 * 
 * Attach event handler <code>fnFunction</code> to the 'navigate' event of this <code>sap.ui.ux3.QuickView</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ui.ux3.QuickView</code>.<br/> itself. 
 * </p><p>
 * Event is fired when a user clicks on the firstTitle link. Call the preventDefault method of the event object to cancel browser navigation. 
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener=this] Context object to call the event handler with. Defaults to this <code>sap.ui.ux3.QuickView</code>.<br/> itself.
 * @return {sap.ui.ux3.QuickView} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.QuickView.prototype.attachNavigate = function(oData,fnFunction,oListener) { return new sap.ui.ux3.QuickView(); };

/**
 * 
 * Destroys the actionBar in the aggregation 
 * named <code>actionBar</code>.
 * @return {sap.ui.ux3.QuickView} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.QuickView.prototype.destroyActionBar = function() { return new sap.ui.ux3.QuickView(); };

/**
 * 
 * Destroys all the actions in the aggregation 
 * named <code>actions</code>.
 * @return {sap.ui.ux3.QuickView} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.QuickView.prototype.destroyActions = function() { return new sap.ui.ux3.QuickView(); };

/**
 * 
 * Destroys all the content in the aggregation 
 * named <code>content</code>.
 * @return {sap.ui.ux3.QuickView} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.QuickView.prototype.destroyContent = function() { return new sap.ui.ux3.QuickView(); };

/**
 * 
 * Detach event handler <code>fnFunction</code> from the 'actionSelected' event of this <code>sap.ui.ux3.QuickView</code>.<br/>
 * </p><p>
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.ux3.QuickView} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.QuickView.prototype.detachActionSelected = function(fnFunction,oListener) { return new sap.ui.ux3.QuickView(); };

/**
 * 
 * Detach event handler <code>fnFunction</code> from the 'feedSubmit' event of this <code>sap.ui.ux3.QuickView</code>.<br/>
 * </p><p>
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.ux3.QuickView} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.QuickView.prototype.detachFeedSubmit = function(fnFunction,oListener) { return new sap.ui.ux3.QuickView(); };

/**
 * 
 * Detach event handler <code>fnFunction</code> from the 'navigate' event of this <code>sap.ui.ux3.QuickView</code>.<br/>
 * </p><p>
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.ux3.QuickView} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.QuickView.prototype.detachNavigate = function(fnFunction,oListener) { return new sap.ui.ux3.QuickView(); };

/**
 * 
 * Creates a new subclass of class sap.ui.ux3.QuickView with name <code>sClassName</code> 
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
sap.ui.ux3.QuickView.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * 
 * Fire event actionSelected to attached listeners.
 * </p><p>
 * Expects following event parameters:
 * <ul>
 * <li>'id' of type <code>string</code> Id of selected ThingAction</li>
 * <li>'action' of type <code>sap.ui.ux3.ThingAction</code> Selected ThingAction</li>
 * <li>'newState' of type <code>string</code> New State of the selected action. Only filled if the respective action maintains a state property, for example 'FollowUp' or 'Favorite'</li>
 * </ul>
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.ux3.QuickView} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.ui.ux3.QuickView.prototype.fireActionSelected = function(mArguments) { return new sap.ui.ux3.QuickView(); };

/**
 * 
 * Fire event feedSubmit to attached listeners.
 * </p><p>
 * Expects following event parameters:
 * <ul>
 * <li>'text' of type <code>string</code> Feed text</li>
 * </ul>
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.ux3.QuickView} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.ui.ux3.QuickView.prototype.fireFeedSubmit = function(mArguments) { return new sap.ui.ux3.QuickView(); };

/**
 * 
 * Fire event navigate to attached listeners.
 * </p><p>
 * Listeners may prevent the default action of this event using the preventDefault-method on the event object.
 * * 
 * Expects following event parameters:
 * <ul>
 * <li>'href' of type <code>string</code> URI of the Thing Inspector application.</li>
 * </ul>
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {boolean} whether to prevent the default action
 * @protected
 * 
 */
sap.ui.ux3.QuickView.prototype.fireNavigate = function(mArguments) { return false; };

/**
 * 
 * Getter for aggregation <code>actionBar</code>.<br/>
 * ActionBar. If no actionBar is set a default ActionBar will be created.
 * In any case, ActionBar is displayed only when the showActionBar property is set to true.
 * @return {sap.ui.ux3.ActionBar}
 * @public
 * 
 */
sap.ui.ux3.QuickView.prototype.getActionBar = function() { return new sap.ui.ux3.ActionBar(); };

/**
 * 
 * Getter for aggregation <code>actions</code>.<br/>
 * Actions of a Thing
 * @return {sap.ui.ux3.ThingAction[]}
 * @public
 * 
 */
sap.ui.ux3.QuickView.prototype.getActions = function() { return new Array(); };

/**
 * 
 * Getter for aggregation <code>content</code>.<br/>
 * Body content of the QuickView
 * @return {sap.ui.core.Element[]}
 * @public
 * 
 */
sap.ui.ux3.QuickView.prototype.getContent = function() { return new Array(); };

/**
 * 
 * Getter for property <code>favoriteActionEnabled</code>.
 * Favorite action enabled/disabled. If disabled the action will be invisible.
 * </p><p>
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>favoriteActionEnabled</code>
 * @public
 * 
 */
sap.ui.ux3.QuickView.prototype.getFavoriteActionEnabled = function() { return false; };

/**
 * 
 * Getter for property <code>favoriteState</code>.
 * State Of favorite Action
 * </p><p>
 * Default value is <code>false</code>
 * @return {boolean} the value of property <code>favoriteState</code>
 * @public
 * 
 */
sap.ui.ux3.QuickView.prototype.getFavoriteState = function() { return false; };

/**
 * 
 * Getter for property <code>firstTitle</code>.
 * Thing name shown in the header of the QuickView
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {string} the value of property <code>firstTitle</code>
 * @public
 * 
 */
sap.ui.ux3.QuickView.prototype.getFirstTitle = function() { return ""; };

/**
 * 
 * Getter for property <code>firstTitleHref</code>.
 * URI to Thing Inspector
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {string} the value of property <code>firstTitleHref</code>
 * @public
 * 
 */
sap.ui.ux3.QuickView.prototype.getFirstTitleHref = function() { return ""; };

/**
 * 
 * Getter for property <code>flagActionEnabled</code>.
 * Flag action enabled/disabled. If disabled the action will be invisible.
 * </p><p>
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>flagActionEnabled</code>
 * @public
 * 
 */
sap.ui.ux3.QuickView.prototype.getFlagActionEnabled = function() { return false; };

/**
 * 
 * Getter for property <code>flagState</code>.
 * State of Flag Action
 * </p><p>
 * Default value is <code>false</code>
 * @return {boolean} the value of property <code>flagState</code>
 * @public
 * 
 */
sap.ui.ux3.QuickView.prototype.getFlagState = function() { return false; };

/**
 * 
 * Getter for property <code>followActionEnabled</code>.
 * Follow action enabled/disabled. If disabled the action will be invisible.
 * </p><p>
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>followActionEnabled</code>
 * @public
 * 
 */
sap.ui.ux3.QuickView.prototype.getFollowActionEnabled = function() { return false; };

/**
 * 
 * Getter for property <code>followState</code>.
 * Follow State of a Thing
 * </p><p>
 * Default value is <code>Default</code>
 * @return {sap.ui.ux3.FollowActionState} the value of property <code>followState</code>
 * @public
 * 
 */
sap.ui.ux3.QuickView.prototype.getFollowState = function() { return new sap.ui.ux3.FollowActionState(); };

/**
 * 
 * Getter for property <code>icon</code>.
 * URI of the Thing icon image (mandatory). The image is scaled down to the maximal size of 32 pixel (vertical or horizontal).
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {sap.ui.core.URI} the value of property <code>icon</code>
 * @public
 * 
 */
sap.ui.ux3.QuickView.prototype.getIcon = function() { return new sap.ui.core.URI(); };

/**
 * 
 * Getter for property <code>openActionEnabled</code>.
 * Open Thing action enabled/disabled. If disabled the action will be invisible.
 * </p><p>
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>openActionEnabled</code>
 * @public
 * 
 */
sap.ui.ux3.QuickView.prototype.getOpenActionEnabled = function() { return false; };

/**
 * 
 * Getter for property <code>secondTitle</code>.
 * Optional short text shown under the firstTitle
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {string} the value of property <code>secondTitle</code>
 * @public
 * 
 */
sap.ui.ux3.QuickView.prototype.getSecondTitle = function() { return ""; };

/**
 * 
 * Getter for property <code>showActionBar</code>.
 * Show Action Bar
 * </p><p>
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>showActionBar</code>
 * @public
 * 
 */
sap.ui.ux3.QuickView.prototype.getShowActionBar = function() { return false; };

/**
 * 
 * Getter for property <code>type</code>.
 * Thing type (mandatory) like Account, Material, Employee etc. is displayed in a header at the top part of the QuickView.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {string} the value of property <code>type</code>
 * @public
 * 
 */
sap.ui.ux3.QuickView.prototype.getType = function() { return ""; };

/**
 * 
 * Getter for property <code>updateActionEnabled</code>.
 * Update action enabled/disabled. If disabled the action will be invisible.
 * </p><p>
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>updateActionEnabled</code>
 * @public
 * 
 */
sap.ui.ux3.QuickView.prototype.getUpdateActionEnabled = function() { return false; };

/**
 * 
 * Getter for property <code>width</code>.
 * Control width as common CSS-size (px or % as unit, for example).
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {sap.ui.core.CSSSize} the value of property <code>width</code>
 * @public
 * 
 */
sap.ui.ux3.QuickView.prototype.getWidth = function() { return new sap.ui.core.CSSSize(); };

/**
 * 
 * Checks for the provided <code>sap.ui.ux3.ThingAction</code> in the aggregation named <code>actions</code> 
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.ux3.ThingAction}
 *            oAction the action whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * 
 */
sap.ui.ux3.QuickView.prototype.indexOfAction = function(oAction) { return 0; };

/**
 * 
 * Checks for the provided <code>sap.ui.core.Element</code> in the aggregation named <code>content</code> 
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.core.Element}
 *            oContent the content whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * 
 */
sap.ui.ux3.QuickView.prototype.indexOfContent = function(oContent) { return 0; };

/**
 * 
 * Inserts a action into the aggregation named <code>actions</code>.
 * @param {sap.ui.ux3.ThingAction}
 *          oAction the action to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the action should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the action is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the action is inserted at 
 *             the last position        
 * @return {sap.ui.ux3.QuickView} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.QuickView.prototype.insertAction = function(oAction,iIndex) { return new sap.ui.ux3.QuickView(); };

/**
 * 
 * Inserts a content into the aggregation named <code>content</code>.
 * @param {sap.ui.core.Element}
 *          oContent the content to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the content should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the content is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the content is inserted at 
 *             the last position        
 * @return {sap.ui.ux3.QuickView} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.QuickView.prototype.insertContent = function(oContent,iIndex) { return new sap.ui.ux3.QuickView(); };

/**
 * 
 * Removes an action from the aggregation named <code>actions</code>.
 * @param {int | string | sap.ui.ux3.ThingAction} vAction the action to remove or its index or id
 * @return {sap.ui.ux3.ThingAction} the removed action or null
 * @public
 * 
 */
sap.ui.ux3.QuickView.prototype.removeAction = function(vAction) { return new sap.ui.ux3.ThingAction(); };

/**
 * 
 * Removes all the controls in the aggregation named <code>actions</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.ux3.ThingAction[]} an array of the removed elements (might be empty)
 * @public
 * 
 */
sap.ui.ux3.QuickView.prototype.removeAllActions = function() { return new Array(); };

/**
 * 
 * Removes all the controls in the aggregation named <code>content</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.core.Element[]} an array of the removed elements (might be empty)
 * @public
 * 
 */
sap.ui.ux3.QuickView.prototype.removeAllContent = function() { return new Array(); };

/**
 * 
 * Removes an content from the aggregation named <code>content</code>.
 * @param {int | string | sap.ui.core.Element} vContent the content to remove or its index or id
 * @return {sap.ui.core.Element} the removed content or null
 * @public
 * 
 */
sap.ui.ux3.QuickView.prototype.removeContent = function(vContent) { return new sap.ui.core.Element(); };

/**
 * 
 * Setter for the aggregated <code>actionBar</code>.
 * @param oActionBar {sap.ui.ux3.ActionBar}
 * @return {sap.ui.ux3.QuickView} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.QuickView.prototype.setActionBar = function(oActionBar) { return new sap.ui.ux3.QuickView(); };

/**
 * 
 * Setter for property <code>favoriteActionEnabled</code>.
 * </p><p>
 * Default value is <code>true</code> 
 * @param {boolean} bFavoriteActionEnabled  new value for property <code>favoriteActionEnabled</code>
 * @return {sap.ui.ux3.QuickView} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.QuickView.prototype.setFavoriteActionEnabled = function(bFavoriteActionEnabled) { return new sap.ui.ux3.QuickView(); };

/**
 * 
 * Setter for property <code>favoriteState</code>.
 * </p><p>
 * Default value is <code>false</code> 
 * @param {boolean} bFavoriteState  new value for property <code>favoriteState</code>
 * @return {sap.ui.ux3.QuickView} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.QuickView.prototype.setFavoriteState = function(bFavoriteState) { return new sap.ui.ux3.QuickView(); };

/**
 * 
 * Setter for property <code>firstTitle</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {string} sFirstTitle  new value for property <code>firstTitle</code>
 * @return {sap.ui.ux3.QuickView} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.QuickView.prototype.setFirstTitle = function(sFirstTitle) { return new sap.ui.ux3.QuickView(); };

/**
 * 
 * Setter for property <code>firstTitleHref</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {string} sFirstTitleHref  new value for property <code>firstTitleHref</code>
 * @return {sap.ui.ux3.QuickView} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.QuickView.prototype.setFirstTitleHref = function(sFirstTitleHref) { return new sap.ui.ux3.QuickView(); };

/**
 * 
 * Setter for property <code>flagActionEnabled</code>.
 * </p><p>
 * Default value is <code>true</code> 
 * @param {boolean} bFlagActionEnabled  new value for property <code>flagActionEnabled</code>
 * @return {sap.ui.ux3.QuickView} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.QuickView.prototype.setFlagActionEnabled = function(bFlagActionEnabled) { return new sap.ui.ux3.QuickView(); };

/**
 * 
 * Setter for property <code>flagState</code>.
 * </p><p>
 * Default value is <code>false</code> 
 * @param {boolean} bFlagState  new value for property <code>flagState</code>
 * @return {sap.ui.ux3.QuickView} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.QuickView.prototype.setFlagState = function(bFlagState) { return new sap.ui.ux3.QuickView(); };

/**
 * 
 * Setter for property <code>followActionEnabled</code>.
 * </p><p>
 * Default value is <code>true</code> 
 * @param {boolean} bFollowActionEnabled  new value for property <code>followActionEnabled</code>
 * @return {sap.ui.ux3.QuickView} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.QuickView.prototype.setFollowActionEnabled = function(bFollowActionEnabled) { return new sap.ui.ux3.QuickView(); };

/**
 * 
 * Setter for property <code>followState</code>.
 * </p><p>
 * Default value is <code>Default</code> 
 * @param {sap.ui.ux3.FollowActionState} oFollowState  new value for property <code>followState</code>
 * @return {sap.ui.ux3.QuickView} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.QuickView.prototype.setFollowState = function(oFollowState) { return new sap.ui.ux3.QuickView(); };

/**
 * 
 * Setter for property <code>icon</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {sap.ui.core.URI} sIcon  new value for property <code>icon</code>
 * @return {sap.ui.ux3.QuickView} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.QuickView.prototype.setIcon = function(sIcon) { return new sap.ui.ux3.QuickView(); };

/**
 * 
 * Setter for property <code>openActionEnabled</code>.
 * </p><p>
 * Default value is <code>true</code> 
 * @param {boolean} bOpenActionEnabled  new value for property <code>openActionEnabled</code>
 * @return {sap.ui.ux3.QuickView} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.QuickView.prototype.setOpenActionEnabled = function(bOpenActionEnabled) { return new sap.ui.ux3.QuickView(); };

/**
 * 
 * Setter for property <code>secondTitle</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {string} sSecondTitle  new value for property <code>secondTitle</code>
 * @return {sap.ui.ux3.QuickView} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.QuickView.prototype.setSecondTitle = function(sSecondTitle) { return new sap.ui.ux3.QuickView(); };

/**
 * 
 * Setter for property <code>showActionBar</code>.
 * </p><p>
 * Default value is <code>true</code> 
 * @param {boolean} bShowActionBar  new value for property <code>showActionBar</code>
 * @return {sap.ui.ux3.QuickView} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.QuickView.prototype.setShowActionBar = function(bShowActionBar) { return new sap.ui.ux3.QuickView(); };

/**
 * 
 * Setter for property <code>type</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {string} sType  new value for property <code>type</code>
 * @return {sap.ui.ux3.QuickView} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.QuickView.prototype.setType = function(sType) { return new sap.ui.ux3.QuickView(); };

/**
 * 
 * Setter for property <code>updateActionEnabled</code>.
 * </p><p>
 * Default value is <code>true</code> 
 * @param {boolean} bUpdateActionEnabled  new value for property <code>updateActionEnabled</code>
 * @return {sap.ui.ux3.QuickView} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.QuickView.prototype.setUpdateActionEnabled = function(bUpdateActionEnabled) { return new sap.ui.ux3.QuickView(); };

/**
 * 
 * Setter for property <code>width</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {sap.ui.core.CSSSize} sWidth  new value for property <code>width</code>
 * @return {sap.ui.ux3.QuickView} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.QuickView.prototype.setWidth = function(sWidth) { return new sap.ui.ux3.QuickView(); };


// ---- sap.ui.ux3.Shell --------------------------------------------------------------------------

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
 * <li>{@link #getAppTitle appTitle} : string</li>
 * <li>{@link #getAppIcon appIcon} : sap.ui.core.URI</li>
 * <li>{@link #getAppIconTooltip appIconTooltip} : string</li>
 * <li>{@link #getShowLogoutButton showLogoutButton} : boolean (default: true)</li>
 * <li>{@link #getLogoutButtonTooltip logoutButtonTooltip} : string</li>
 * <li>{@link #getShowSearchTool showSearchTool} : boolean (default: true)</li>
 * <li>{@link #getShowInspectorTool showInspectorTool} : boolean (default: false)</li>
 * <li>{@link #getShowFeederTool showFeederTool} : boolean (default: true)</li>
 * <li>{@link #getShowTools showTools} : boolean (default: true)</li>
 * <li>{@link #getShowPane showPane} : boolean (default: true)</li>
 * <li>{@link #getHeaderType headerType} : sap.ui.ux3.ShellHeaderType (default: sap.ui.ux3.ShellHeaderType.Standard)</li>
 * <li>{@link #getDesignType designType} : sap.ui.ux3.ShellDesignType (default: sap.ui.ux3.ShellDesignType.Standard)</li>
 * <li>{@link #getPaneWidth paneWidth} : int (default: 250)</li>
 * <li>{@link #getApplyContentPadding applyContentPadding} : boolean (default: true)</li>
 * <li>{@link #getFullHeightContent fullHeightContent} : boolean (default: false)</li>
 * <li>{@link #getAllowOverlayHeaderAccess allowOverlayHeaderAccess} : boolean (default: false)</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getWorksetItems worksetItems} : sap.ui.ux3.NavigationItem[]</li>
 * <li>{@link #getPaneBarItems paneBarItems} : sap.ui.core.Item[]</li>
 * <li>{@link #getPaneContent paneContent} : sap.ui.core.Control[]</li>
 * <li>{@link #getContent content} : sap.ui.core.Control[]</li>
 * <li>{@link #getToolPopups toolPopups} : sap.ui.ux3.ToolPopup[]</li>
 * <li>{@link #getHeaderItems headerItems} : sap.ui.core.Control[]</li>
 * <li>{@link #getNotificationBar notificationBar} : sap.ui.ux3.NotificationBar</li></ul>
 * </li>
 * <li>Associations
 * <ul>
 * <li>{@link #getSelectedWorksetItem selectedWorksetItem} : string | sap.ui.ux3.NavigationItem</li></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link sap.ui.ux3.Shell#event:worksetItemSelected worksetItemSelected} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.ui.ux3.Shell#event:paneBarItemSelected paneBarItemSelected} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.ui.ux3.Shell#event:logout logout} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.ui.ux3.Shell#event:search search} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.ui.ux3.Shell#event:feedSubmit feedSubmit} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.ui.ux3.Shell#event:paneClosed paneClosed} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
 * </li>
 * </ul> 
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * The Ux3 GoldReflection Shell, which is an application frame with navigation capabilities.
 * It is supposed to be added to a direct child of the BODY tag of a page and there should be no other parts of the page consuming space outside the Shell.
 * @extends sap.ui.core.Control
 * @version 1.15.1-SNAPSHOT
 * @constructor   
 * @public
 * 
 */
sap.ui.ux3.Shell = function(sId,mSettings) {};
/**
 * 
 * Fired when a new feed entry is submitted. 
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 */
sap.ui.ux3.Shell.prototype.feedSubmit = function(oControlEvent) { return null; };

/**
 * 
 * Fired when the user clicks the "Log-off" button 
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 */
sap.ui.ux3.Shell.prototype.logout = function(oControlEvent) { return null; };

/**
 * 
 * An item in the right-hand-side pane bar has been selected, the pane is now visible and can be filled with UI elements. 
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {string} oControlEvent.getParameters.id The ID of the selected PaneBarItem.
 * @param {sap.ui.core.Item} oControlEvent.getParameters.item The selected Item
 * @param {string} oControlEvent.getParameters.key The key of the selected Item (or null if there is no key)
 * @public
 */
sap.ui.ux3.Shell.prototype.paneBarItemSelected = function(oControlEvent) { return null; };

/**
 * 
 * Fired after a side pane of the shell is closed. It is also fired, when an open pane is closed by calling setShowPane(false), if and only if the pane was opened before. 
 * @event
 * @since 1.12.0
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {string} oControlEvent.getParameters.id The id of the PaneBarItem to which the closed pane belonged.
 * @public
 */
sap.ui.ux3.Shell.prototype.paneClosed = function(oControlEvent) { return null; };

/**
 * 
 * Fired when search has been triggered. 
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 */
sap.ui.ux3.Shell.prototype.search = function(oControlEvent) { return null; };

/**
 * 
 * Fired when a workset item was selected by the user. The application may populate the sub-items of the given workset item in the event handler, but this must happen synchronously. If this is done, the application is responsible for displaying the correct content for the selected one of the newly created sub-items. The Shell will currently always mark the first sub-item as selected. 
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {string} oControlEvent.getParameters.id The id of the workset item that has been newly selected by the user. If a top-level item has been clicked which has sub-items, the ID of the currently active sub-item (/leaf) is given.
 * @param {sap.ui.ux3.NavigationItem} oControlEvent.getParameters.item The selected NavigationItem
 * @param {string} oControlEvent.getParameters.key The key of the selected NavigationItem (or null if there is no key)
 * @public
 */
sap.ui.ux3.Shell.prototype.worksetItemSelected = function(oControlEvent) { return null; };

/**
 * 
 * Adds some content <code>oContent</code> 
 * to the aggregation named <code>content</code>.
 * @param {sap.ui.core.Control}
 *            oContent the content to add; if empty, nothing is inserted
 * @return {sap.ui.ux3.Shell} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.Shell.prototype.addContent = function(oContent) { return new sap.ui.ux3.Shell(); };

/**
 * 
 * Adds some headerItem <code>oHeaderItem</code> 
 * to the aggregation named <code>headerItems</code>.
 * @param {sap.ui.core.Control}
 *            oHeaderItem the headerItem to add; if empty, nothing is inserted
 * @return {sap.ui.ux3.Shell} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.Shell.prototype.addHeaderItem = function(oHeaderItem) { return new sap.ui.ux3.Shell(); };

/**
 * 
 * Adds some paneBarItem <code>oPaneBarItem</code> 
 * to the aggregation named <code>paneBarItems</code>.
 * @param {sap.ui.core.Item}
 *            oPaneBarItem the paneBarItem to add; if empty, nothing is inserted
 * @return {sap.ui.ux3.Shell} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.Shell.prototype.addPaneBarItem = function(oPaneBarItem) { return new sap.ui.ux3.Shell(); };

/**
 * 
 * Adds some paneContent <code>oPaneContent</code> 
 * to the aggregation named <code>paneContent</code>.
 * @param {sap.ui.core.Control}
 *            oPaneContent the paneContent to add; if empty, nothing is inserted
 * @return {sap.ui.ux3.Shell} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.Shell.prototype.addPaneContent = function(oPaneContent) { return new sap.ui.ux3.Shell(); };

/**
 * 
 * Adds some toolPopup <code>oToolPopup</code> 
 * to the aggregation named <code>toolPopups</code>.
 * @param {sap.ui.ux3.ToolPopup}
 *            oToolPopup the toolPopup to add; if empty, nothing is inserted
 * @return {sap.ui.ux3.Shell} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.Shell.prototype.addToolPopup = function(oToolPopup) { return new sap.ui.ux3.Shell(); };

/**
 * 
 * Adds some worksetItem <code>oWorksetItem</code> 
 * to the aggregation named <code>worksetItems</code>.
 * @param {sap.ui.ux3.NavigationItem}
 *            oWorksetItem the worksetItem to add; if empty, nothing is inserted
 * @return {sap.ui.ux3.Shell} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.Shell.prototype.addWorksetItem = function(oWorksetItem) { return new sap.ui.ux3.Shell(); };

/**
 * 
 * Attach event handler <code>fnFunction</code> to the 'feedSubmit' event of this <code>sap.ui.ux3.Shell</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ui.ux3.Shell</code>.<br/> itself. 
 * </p><p>
 * Fired when a new feed entry is submitted. 
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener=this] Context object to call the event handler with. Defaults to this <code>sap.ui.ux3.Shell</code>.<br/> itself.
 * @return {sap.ui.ux3.Shell} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.Shell.prototype.attachFeedSubmit = function(oData,fnFunction,oListener) { return new sap.ui.ux3.Shell(); };

/**
 * 
 * Attach event handler <code>fnFunction</code> to the 'logout' event of this <code>sap.ui.ux3.Shell</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ui.ux3.Shell</code>.<br/> itself. 
 * </p><p>
 * Fired when the user clicks the "Log-off" button 
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener=this] Context object to call the event handler with. Defaults to this <code>sap.ui.ux3.Shell</code>.<br/> itself.
 * @return {sap.ui.ux3.Shell} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.Shell.prototype.attachLogout = function(oData,fnFunction,oListener) { return new sap.ui.ux3.Shell(); };

/**
 * 
 * Attach event handler <code>fnFunction</code> to the 'paneBarItemSelected' event of this <code>sap.ui.ux3.Shell</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ui.ux3.Shell</code>.<br/> itself. 
 * </p><p>
 * An item in the right-hand-side pane bar has been selected, the pane is now visible and can be filled with UI elements. 
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener=this] Context object to call the event handler with. Defaults to this <code>sap.ui.ux3.Shell</code>.<br/> itself.
 * @return {sap.ui.ux3.Shell} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.Shell.prototype.attachPaneBarItemSelected = function(oData,fnFunction,oListener) { return new sap.ui.ux3.Shell(); };

/**
 * 
 * Attach event handler <code>fnFunction</code> to the 'paneClosed' event of this <code>sap.ui.ux3.Shell</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ui.ux3.Shell</code>.<br/> itself. 
 * </p><p>
 * Fired after a side pane of the shell is closed. It is also fired, when an open pane is closed by calling setShowPane(false), if and only if the pane was opened before. 
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener=this] Context object to call the event handler with. Defaults to this <code>sap.ui.ux3.Shell</code>.<br/> itself.
 * @return {sap.ui.ux3.Shell} <code>this</code> to allow method chaining
 * @public
 * @since 1.12.0
 * 
 */
sap.ui.ux3.Shell.prototype.attachPaneClosed = function(oData,fnFunction,oListener) { return new sap.ui.ux3.Shell(); };

/**
 * 
 * Attach event handler <code>fnFunction</code> to the 'search' event of this <code>sap.ui.ux3.Shell</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ui.ux3.Shell</code>.<br/> itself. 
 * </p><p>
 * Fired when search has been triggered. 
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener=this] Context object to call the event handler with. Defaults to this <code>sap.ui.ux3.Shell</code>.<br/> itself.
 * @return {sap.ui.ux3.Shell} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.Shell.prototype.attachSearch = function(oData,fnFunction,oListener) { return new sap.ui.ux3.Shell(); };

/**
 * 
 * Attach event handler <code>fnFunction</code> to the 'worksetItemSelected' event of this <code>sap.ui.ux3.Shell</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ui.ux3.Shell</code>.<br/> itself. 
 * </p><p>
 * Fired when a workset item was selected by the user. The application may populate the sub-items of the given workset item in the event handler, but this must happen synchronously. If this is done, the application is responsible for displaying the correct content for the selected one of the newly created sub-items. The Shell will currently always mark the first sub-item as selected. 
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener=this] Context object to call the event handler with. Defaults to this <code>sap.ui.ux3.Shell</code>.<br/> itself.
 * @return {sap.ui.ux3.Shell} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.Shell.prototype.attachWorksetItemSelected = function(oData,fnFunction,oListener) { return new sap.ui.ux3.Shell(); };

/**
 * 
 * Closes the side Pane (if open).
 * </p><p>
 * Returns 'this' to allow method chaining.
 * @type sap.ui.ux3.Shell
 * @public
 */
sap.ui.ux3.Shell.prototype.closePane = function() { return new sap.ui.ux3.Shell(); };

/**
 * 
 * Destroys all the content in the aggregation 
 * named <code>content</code>.
 * @return {sap.ui.ux3.Shell} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.Shell.prototype.destroyContent = function() { return new sap.ui.ux3.Shell(); };

/**
 * 
 * Destroys all the headerItems in the aggregation 
 * named <code>headerItems</code>.
 * @return {sap.ui.ux3.Shell} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.Shell.prototype.destroyHeaderItems = function() { return new sap.ui.ux3.Shell(); };

/**
 * 
 * Destroys the notificationBar in the aggregation 
 * named <code>notificationBar</code>.
 * @return {sap.ui.ux3.Shell} <code>this</code> to allow method chaining
 * @public
 * @since 1.7.0
 * 
 */
sap.ui.ux3.Shell.prototype.destroyNotificationBar = function() { return new sap.ui.ux3.Shell(); };

/**
 * 
 * Destroys all the paneBarItems in the aggregation 
 * named <code>paneBarItems</code>.
 * @return {sap.ui.ux3.Shell} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.Shell.prototype.destroyPaneBarItems = function() { return new sap.ui.ux3.Shell(); };

/**
 * 
 * Destroys all the paneContent in the aggregation 
 * named <code>paneContent</code>.
 * @return {sap.ui.ux3.Shell} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.Shell.prototype.destroyPaneContent = function() { return new sap.ui.ux3.Shell(); };

/**
 * 
 * Destroys all the toolPopups in the aggregation 
 * named <code>toolPopups</code>.
 * @return {sap.ui.ux3.Shell} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.Shell.prototype.destroyToolPopups = function() { return new sap.ui.ux3.Shell(); };

/**
 * 
 * Destroys all the worksetItems in the aggregation 
 * named <code>worksetItems</code>.
 * @return {sap.ui.ux3.Shell} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.Shell.prototype.destroyWorksetItems = function() { return new sap.ui.ux3.Shell(); };

/**
 * 
 * Detach event handler <code>fnFunction</code> from the 'feedSubmit' event of this <code>sap.ui.ux3.Shell</code>.<br/>
 * </p><p>
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.ux3.Shell} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.Shell.prototype.detachFeedSubmit = function(fnFunction,oListener) { return new sap.ui.ux3.Shell(); };

/**
 * 
 * Detach event handler <code>fnFunction</code> from the 'logout' event of this <code>sap.ui.ux3.Shell</code>.<br/>
 * </p><p>
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.ux3.Shell} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.Shell.prototype.detachLogout = function(fnFunction,oListener) { return new sap.ui.ux3.Shell(); };

/**
 * 
 * Detach event handler <code>fnFunction</code> from the 'paneBarItemSelected' event of this <code>sap.ui.ux3.Shell</code>.<br/>
 * </p><p>
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.ux3.Shell} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.Shell.prototype.detachPaneBarItemSelected = function(fnFunction,oListener) { return new sap.ui.ux3.Shell(); };

/**
 * 
 * Detach event handler <code>fnFunction</code> from the 'paneClosed' event of this <code>sap.ui.ux3.Shell</code>.<br/>
 * </p><p>
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.ux3.Shell} <code>this</code> to allow method chaining
 * @public
 * @since 1.12.0
 * 
 */
sap.ui.ux3.Shell.prototype.detachPaneClosed = function(fnFunction,oListener) { return new sap.ui.ux3.Shell(); };

/**
 * 
 * Detach event handler <code>fnFunction</code> from the 'search' event of this <code>sap.ui.ux3.Shell</code>.<br/>
 * </p><p>
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.ux3.Shell} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.Shell.prototype.detachSearch = function(fnFunction,oListener) { return new sap.ui.ux3.Shell(); };

/**
 * 
 * Detach event handler <code>fnFunction</code> from the 'worksetItemSelected' event of this <code>sap.ui.ux3.Shell</code>.<br/>
 * </p><p>
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.ux3.Shell} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.Shell.prototype.detachWorksetItemSelected = function(fnFunction,oListener) { return new sap.ui.ux3.Shell(); };

/**
 * 
 * Creates a new subclass of class sap.ui.ux3.Shell with name <code>sClassName</code> 
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
sap.ui.ux3.Shell.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * 
 * Fire event feedSubmit to attached listeners.
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.ux3.Shell} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.ui.ux3.Shell.prototype.fireFeedSubmit = function(mArguments) { return new sap.ui.ux3.Shell(); };

/**
 * 
 * Fire event logout to attached listeners.
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.ux3.Shell} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.ui.ux3.Shell.prototype.fireLogout = function(mArguments) { return new sap.ui.ux3.Shell(); };

/**
 * 
 * Fire event paneBarItemSelected to attached listeners.
 * </p><p>
 * Expects following event parameters:
 * <ul>
 * <li>'id' of type <code>string</code> The ID of the selected PaneBarItem.</li>
 * <li>'item' of type <code>sap.ui.core.Item</code> The selected Item</li>
 * <li>'key' of type <code>string</code> The key of the selected Item (or null if there is no key)</li>
 * </ul>
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.ux3.Shell} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.ui.ux3.Shell.prototype.firePaneBarItemSelected = function(mArguments) { return new sap.ui.ux3.Shell(); };

/**
 * 
 * Fire event paneClosed to attached listeners.
 * </p><p>
 * Expects following event parameters:
 * <ul>
 * <li>'id' of type <code>string</code> The id of the PaneBarItem to which the closed pane belonged.</li>
 * </ul>
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.ux3.Shell} <code>this</code> to allow method chaining
 * @protected
 * @since 1.12.0
 * 
 */
sap.ui.ux3.Shell.prototype.firePaneClosed = function(mArguments) { return new sap.ui.ux3.Shell(); };

/**
 * 
 * Fire event search to attached listeners.
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.ux3.Shell} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.ui.ux3.Shell.prototype.fireSearch = function(mArguments) { return new sap.ui.ux3.Shell(); };

/**
 * 
 * Fire event worksetItemSelected to attached listeners.
 * </p><p>
 * Listeners may prevent the default action of this event using the preventDefault-method on the event object.
 * * 
 * Expects following event parameters:
 * <ul>
 * <li>'id' of type <code>string</code> The id of the workset item that has been newly selected by the user. If a top-level item has been clicked which has sub-items, the ID of the currently active sub-item (/leaf) is given.</li>
 * <li>'item' of type <code>sap.ui.ux3.NavigationItem</code> The selected NavigationItem</li>
 * <li>'key' of type <code>string</code> The key of the selected NavigationItem (or null if there is no key)</li>
 * </ul>
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {boolean} whether to prevent the default action
 * @protected
 * 
 */
sap.ui.ux3.Shell.prototype.fireWorksetItemSelected = function(mArguments) { return false; };

/**
 * 
 * Getter for property <code>allowOverlayHeaderAccess</code>.
 * Whether the Shell header (Title Area + Header Items) can be accessed when an Overlay, OverlayContainer or ThingInspector is open.
 * </p><p>
 * Default value is <code>false</code>
 * @return {boolean} the value of property <code>allowOverlayHeaderAccess</code>
 * @public
 * @since 1.14.0
 * 
 */
sap.ui.ux3.Shell.prototype.getAllowOverlayHeaderAccess = function() { return false; };

/**
 * 
 * Getter for property <code>appIcon</code>.
 * The URL of the image to appear in the left part of the header, usually a branding image containing a logo and/or product name. appIcon and appTitle are both optional and can both be set; in this case the icon appears first.
 * If the appIcon is set, for accessibility reasons the appIconTooltip must also be set.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {sap.ui.core.URI} the value of property <code>appIcon</code>
 * @public
 * 
 */
sap.ui.ux3.Shell.prototype.getAppIcon = function() { return new sap.ui.core.URI(); };

/**
 * 
 * Getter for property <code>appIconTooltip</code>.
 * The tooltip of the application icon in the header
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {string} the value of property <code>appIconTooltip</code>
 * @public
 * 
 */
sap.ui.ux3.Shell.prototype.getAppIconTooltip = function() { return ""; };

/**
 * 
 * Getter for property <code>applyContentPadding</code>.
 * Whether the Shell content area should have a theme-dependent padding or not.
 * </p><p>
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>applyContentPadding</code>
 * @public
 * @since 1.9.0
 * 
 */
sap.ui.ux3.Shell.prototype.getApplyContentPadding = function() { return false; };

/**
 * 
 * Getter for property <code>appTitle</code>.
 * The application title to appear in the left part of the header, usually a company and/or product name. appIcon and appTitle are both optional and can both be set; in this case the icon appears first.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {string} the value of property <code>appTitle</code>
 * @public
 * 
 */
sap.ui.ux3.Shell.prototype.getAppTitle = function() { return ""; };

/**
 * 
 * Getter for aggregation <code>content</code>.<br/>
 * The content to appear in the main canvas. Each modification of this aggregation leads to a re-rendering of the content area - but not to a re-rendering of the complete Shell.
 * @return {sap.ui.core.Control[]}
 * @public
 * 
 */
sap.ui.ux3.Shell.prototype.getContent = function() { return new Array(); };

/**
 * 
 * Getter for property <code>designType</code>.
 * Defines which design type is to be used.
 * </p><p>
 * Default value is <code>Standard</code>
 * @return {sap.ui.ux3.ShellDesignType} the value of property <code>designType</code>
 * @public
 * @since 1.12.0
 * 
 */
sap.ui.ux3.Shell.prototype.getDesignType = function() { return new sap.ui.ux3.ShellDesignType(); };

/**
 * 
 * Getter for property <code>fullHeightContent</code>.
 * If set to true, the content area has a defined height. This means that any content put inside can use "100%" height in CSS and will then consume all available space.
 * However, if content is larger, scrollbars will appear at the content area of the Shell and not on window level.
 * </p><p>
 * Default value is <code>false</code>
 * @return {boolean} the value of property <code>fullHeightContent</code>
 * @public
 * @since 1.9.0
 * 
 */
sap.ui.ux3.Shell.prototype.getFullHeightContent = function() { return false; };

/**
 * 
 * Getter for aggregation <code>headerItems</code>.<br/>
 * Controls to appear in the header next to the logout button. It is recommended to only use controls of type Button, MenuButton and TextView.
 * The respective UI guidelines need to be enforced on a higher level.
 * @return {sap.ui.core.Control[]}
 * @public
 * 
 */
sap.ui.ux3.Shell.prototype.getHeaderItems = function() { return new Array(); };

/**
 * 
 * Getter for property <code>headerType</code>.
 * Defines which header type to be used. Depending on the header type some other functionality might be obsolete.
 * </p><p>
 * Default value is <code>Standard</code>
 * @return {sap.ui.ux3.ShellHeaderType} the value of property <code>headerType</code>
 * @public
 * 
 */
sap.ui.ux3.Shell.prototype.getHeaderType = function() { return new sap.ui.ux3.ShellHeaderType(); };

/**
 * 
 * Getter for property <code>logoutButtonTooltip</code>.
 * The tooltip to be displayed for the Logout Button of the Shell. If not set, a text meaning "Logout" in the current language will be displayed.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {string} the value of property <code>logoutButtonTooltip</code>
 * @public
 * @since 1.9.0
 * 
 */
sap.ui.ux3.Shell.prototype.getLogoutButtonTooltip = function() { return ""; };

/**
 * 
 * Getter for aggregation <code>notificationBar</code>.<br/>
 * The NotificationBar which should be integrated into the Shell.
 * @return {sap.ui.ux3.NotificationBar}
 * @public
 * @since 1.7.0
 * 
 */
sap.ui.ux3.Shell.prototype.getNotificationBar = function() { return new sap.ui.ux3.NotificationBar(); };

/**
 * 
 * Getter for aggregation <code>paneBarItems</code>.<br/>
 * The items to appear in the PaneBar.
 * @return {sap.ui.core.Item[]}
 * @public
 * 
 */
sap.ui.ux3.Shell.prototype.getPaneBarItems = function() { return new Array(); };

/**
 * 
 * Getter for aggregation <code>paneContent</code>.<br/>
 * The content to appear in the pane area.
 * @return {sap.ui.core.Control[]}
 * @public
 * 
 */
sap.ui.ux3.Shell.prototype.getPaneContent = function() { return new Array(); };

/**
 * 
 * Getter for property <code>paneWidth</code>.
 * The width of the right-hand side pane in pixels. The value must be a non-negative integer. The Shell reserves the right to define a minimum width (currently 50px).
 * </p><p>
 * Default value is <code>250</code>
 * @return {int} the value of property <code>paneWidth</code>
 * @public
 * 
 */
sap.ui.ux3.Shell.prototype.getPaneWidth = function() { return 0; };

/**
 * 
 * Returns the SearchField control which is used in the Search Tool.
 * @type sap.ui.commons.SearchField
 * @public
 */
sap.ui.ux3.Shell.prototype.getSearchField = function() { return new sap.ui.commons.SearchField(); };

/**
 * 
 * The ID of the Item that is currently selected.
 * When setting, the NavigationItem itself can be given instead of its ID. There will not be a worksetItemSelected event, the application is responsible to show the proper content according to the newly selected WorksetItem. If the set WorksetItem does not exist in this Shell, the first item (and first sub-item) will be selected after the call.
 * When getting, always the ID is returned, by which the NavigationItem instance can be retrieved.
 * @return {string} Id of the element which is the current target of the <code>selectedWorksetItem</code> association, or null
 * @public
 * 
 */
sap.ui.ux3.Shell.prototype.getSelectedWorksetItem = function() { return ""; };

/**
 * 
 * Getter for property <code>showFeederTool</code>.
 * Whether the "Feeder" tool should be displayed or not.
 * </p><p>
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>showFeederTool</code>
 * @public
 * 
 */
sap.ui.ux3.Shell.prototype.getShowFeederTool = function() { return false; };

/**
 * 
 * Getter for property <code>showInspectorTool</code>.
 * Whether the "Inspector" tool should be displayed or not.
 * </p><p>
 * Default value is <code>false</code>
 * @return {boolean} the value of property <code>showInspectorTool</code>
 * @public
 * @deprecated Since version 1.7.2. 
 * According to the current Ux designs, the ThingInspector should NOT be opened like this from the Tool Pane. And technically, the ThingInspector is not a ToolPopup.
 * Instead trigger it from the respective elements in the Shell content.
 * 
 */
sap.ui.ux3.Shell.prototype.getShowInspectorTool = function() { return false; };

/**
 * 
 * Getter for property <code>showLogoutButton</code>.
 * Whether the Logoff button in the header should be displayed or not.
 * </p><p>
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>showLogoutButton</code>
 * @public
 * 
 */
sap.ui.ux3.Shell.prototype.getShowLogoutButton = function() { return false; };

/**
 * 
 * Getter for property <code>showPane</code>.
 * Whether the pane bar should be displayed at all or not.
 * </p><p>
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>showPane</code>
 * @public
 * 
 */
sap.ui.ux3.Shell.prototype.getShowPane = function() { return false; };

/**
 * 
 * Getter for property <code>showSearchTool</code>.
 * Whether the "Global Search" tool should be displayed or not.
 * </p><p>
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>showSearchTool</code>
 * @public
 * 
 */
sap.ui.ux3.Shell.prototype.getShowSearchTool = function() { return false; };

/**
 * 
 * Getter for property <code>showTools</code>.
 * Whether the tool area should be displayed at all or not.
 * </p><p>
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>showTools</code>
 * @public
 * 
 */
sap.ui.ux3.Shell.prototype.getShowTools = function() { return false; };

/**
 * 
 * Getter for aggregation <code>toolPopups</code>.<br/>
 * The items which appear in the ToolPalette and are opened as popup when clicked.
 * @return {sap.ui.ux3.ToolPopup[]}
 * @public
 * 
 */
sap.ui.ux3.Shell.prototype.getToolPopups = function() { return new Array(); };

/**
 * 
 * Getter for aggregation <code>worksetItems</code>.<br/>
 * The workset items.
 * @return {sap.ui.ux3.NavigationItem[]}
 * @public
 * 
 */
sap.ui.ux3.Shell.prototype.getWorksetItems = function() { return new Array(); };

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
sap.ui.ux3.Shell.prototype.indexOfContent = function(oContent) { return 0; };

/**
 * 
 * Checks for the provided <code>sap.ui.core.Control</code> in the aggregation named <code>headerItems</code> 
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.core.Control}
 *            oHeaderItem the headerItem whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * 
 */
sap.ui.ux3.Shell.prototype.indexOfHeaderItem = function(oHeaderItem) { return 0; };

/**
 * 
 * Checks for the provided <code>sap.ui.core.Item</code> in the aggregation named <code>paneBarItems</code> 
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.core.Item}
 *            oPaneBarItem the paneBarItem whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * 
 */
sap.ui.ux3.Shell.prototype.indexOfPaneBarItem = function(oPaneBarItem) { return 0; };

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
sap.ui.ux3.Shell.prototype.indexOfPaneContent = function(oPaneContent) { return 0; };

/**
 * 
 * Checks for the provided <code>sap.ui.ux3.ToolPopup</code> in the aggregation named <code>toolPopups</code> 
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.ux3.ToolPopup}
 *            oToolPopup the toolPopup whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * 
 */
sap.ui.ux3.Shell.prototype.indexOfToolPopup = function(oToolPopup) { return 0; };

/**
 * 
 * Checks for the provided <code>sap.ui.ux3.NavigationItem</code> in the aggregation named <code>worksetItems</code> 
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.ux3.NavigationItem}
 *            oWorksetItem the worksetItem whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * 
 */
sap.ui.ux3.Shell.prototype.indexOfWorksetItem = function(oWorksetItem) { return 0; };

/**
 * 
 * Experimental method! Do not use!
 * </p><p>
 * Makes Shell personalization available and injects the given personalization settings. This should be called before the user can do any adaptations per drag&drop or using the personalization dialog. Otherwise it may override the user's new settings.
 * @param {object} 
 *         oSettings
 *         Personalization settings object
 * @type void
 * @public
 */
sap.ui.ux3.Shell.prototype.initializePersonalization = function(oSettings) { return null; };

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
 * @return {sap.ui.ux3.Shell} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.Shell.prototype.insertContent = function(oContent,iIndex) { return new sap.ui.ux3.Shell(); };

/**
 * 
 * Inserts a headerItem into the aggregation named <code>headerItems</code>.
 * @param {sap.ui.core.Control}
 *          oHeaderItem the headerItem to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the headerItem should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the headerItem is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the headerItem is inserted at 
 *             the last position        
 * @return {sap.ui.ux3.Shell} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.Shell.prototype.insertHeaderItem = function(oHeaderItem,iIndex) { return new sap.ui.ux3.Shell(); };

/**
 * 
 * Inserts a paneBarItem into the aggregation named <code>paneBarItems</code>.
 * @param {sap.ui.core.Item}
 *          oPaneBarItem the paneBarItem to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the paneBarItem should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the paneBarItem is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the paneBarItem is inserted at 
 *             the last position        
 * @return {sap.ui.ux3.Shell} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.Shell.prototype.insertPaneBarItem = function(oPaneBarItem,iIndex) { return new sap.ui.ux3.Shell(); };

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
 * @return {sap.ui.ux3.Shell} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.Shell.prototype.insertPaneContent = function(oPaneContent,iIndex) { return new sap.ui.ux3.Shell(); };

/**
 * 
 * Inserts a toolPopup into the aggregation named <code>toolPopups</code>.
 * @param {sap.ui.ux3.ToolPopup}
 *          oToolPopup the toolPopup to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the toolPopup should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the toolPopup is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the toolPopup is inserted at 
 *             the last position        
 * @return {sap.ui.ux3.Shell} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.Shell.prototype.insertToolPopup = function(oToolPopup,iIndex) { return new sap.ui.ux3.Shell(); };

/**
 * 
 * Inserts a worksetItem into the aggregation named <code>worksetItems</code>.
 * @param {sap.ui.ux3.NavigationItem}
 *          oWorksetItem the worksetItem to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the worksetItem should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the worksetItem is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the worksetItem is inserted at 
 *             the last position        
 * @return {sap.ui.ux3.Shell} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.Shell.prototype.insertWorksetItem = function(oWorksetItem,iIndex) { return new sap.ui.ux3.Shell(); };

/**
 * 
 * Returns 'true' if the side Pane is currently open.
 * @type boolean
 * @public
 */
sap.ui.ux3.Shell.prototype.isPaneOpen = function() { return false; };

/**
 * 
 * Opens the side Pane.
 * </p><p>
 * A valid ID of a paneBarItem must be given, so this item can be marked as selected. A "paneBarItemSelected" event is then fired as if the opening was triggered by the user by a click on the respective PaneBarItem.
 * This method can be called (with different IDs) even when the Pane is already open. It has then the same effect as if the user switches between PaneBarItems.
 * </p><p>
 * Returns 'this' to allow method chaining.
 * @param {string} 
 *         sPaneBarItemId
 *         The ID of the PaneBarItem which should be marked as selected.
 * @type sap.ui.ux3.Shell
 * @public
 */
sap.ui.ux3.Shell.prototype.openPane = function(sPaneBarItemId) { return new sap.ui.ux3.Shell(); };

/**
 * 
 * Experimental method! Do not use!
 * @type void
 * @public
 */
sap.ui.ux3.Shell.prototype.openPersonalizationDialog = function() { return null; };

/**
 * 
 * Removes all the controls in the aggregation named <code>content</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.core.Control[]} an array of the removed elements (might be empty)
 * @public
 * 
 */
sap.ui.ux3.Shell.prototype.removeAllContent = function() { return new Array(); };

/**
 * 
 * Removes all the controls in the aggregation named <code>headerItems</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.core.Control[]} an array of the removed elements (might be empty)
 * @public
 * 
 */
sap.ui.ux3.Shell.prototype.removeAllHeaderItems = function() { return new Array(); };

/**
 * 
 * Removes all the controls in the aggregation named <code>paneBarItems</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.core.Item[]} an array of the removed elements (might be empty)
 * @public
 * 
 */
sap.ui.ux3.Shell.prototype.removeAllPaneBarItems = function() { return new Array(); };

/**
 * 
 * Removes all the controls in the aggregation named <code>paneContent</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.core.Control[]} an array of the removed elements (might be empty)
 * @public
 * 
 */
sap.ui.ux3.Shell.prototype.removeAllPaneContent = function() { return new Array(); };

/**
 * 
 * Removes all the controls in the aggregation named <code>toolPopups</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.ux3.ToolPopup[]} an array of the removed elements (might be empty)
 * @public
 * 
 */
sap.ui.ux3.Shell.prototype.removeAllToolPopups = function() { return new Array(); };

/**
 * 
 * Removes all the controls in the aggregation named <code>worksetItems</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.ux3.NavigationItem[]} an array of the removed elements (might be empty)
 * @public
 * 
 */
sap.ui.ux3.Shell.prototype.removeAllWorksetItems = function() { return new Array(); };

/**
 * 
 * Removes an content from the aggregation named <code>content</code>.
 * @param {int | string | sap.ui.core.Control} vContent the content to remove or its index or id
 * @return {sap.ui.core.Control} the removed content or null
 * @public
 * 
 */
sap.ui.ux3.Shell.prototype.removeContent = function(vContent) { return new sap.ui.core.Control(); };

/**
 * 
 * Removes an headerItem from the aggregation named <code>headerItems</code>.
 * @param {int | string | sap.ui.core.Control} vHeaderItem the headerItem to remove or its index or id
 * @return {sap.ui.core.Control} the removed headerItem or null
 * @public
 * 
 */
sap.ui.ux3.Shell.prototype.removeHeaderItem = function(vHeaderItem) { return new sap.ui.core.Control(); };

/**
 * 
 * Removes an paneBarItem from the aggregation named <code>paneBarItems</code>.
 * @param {int | string | sap.ui.core.Item} vPaneBarItem the paneBarItem to remove or its index or id
 * @return {sap.ui.core.Item} the removed paneBarItem or null
 * @public
 * 
 */
sap.ui.ux3.Shell.prototype.removePaneBarItem = function(vPaneBarItem) { return new sap.ui.core.Item(); };

/**
 * 
 * Removes an paneContent from the aggregation named <code>paneContent</code>.
 * @param {int | string | sap.ui.core.Control} vPaneContent the paneContent to remove or its index or id
 * @return {sap.ui.core.Control} the removed paneContent or null
 * @public
 * 
 */
sap.ui.ux3.Shell.prototype.removePaneContent = function(vPaneContent) { return new sap.ui.core.Control(); };

/**
 * 
 * Removes an toolPopup from the aggregation named <code>toolPopups</code>.
 * @param {int | string | sap.ui.ux3.ToolPopup} vToolPopup the toolPopup to remove or its index or id
 * @return {sap.ui.ux3.ToolPopup} the removed toolPopup or null
 * @public
 * 
 */
sap.ui.ux3.Shell.prototype.removeToolPopup = function(vToolPopup) { return new sap.ui.ux3.ToolPopup(); };

/**
 * 
 * Removes an worksetItem from the aggregation named <code>worksetItems</code>.
 * @param {int | string | sap.ui.ux3.NavigationItem} vWorksetItem the worksetItem to remove or its index or id
 * @return {sap.ui.ux3.NavigationItem} the removed worksetItem or null
 * @public
 * 
 */
sap.ui.ux3.Shell.prototype.removeWorksetItem = function(vWorksetItem) { return new sap.ui.ux3.NavigationItem(); };

/**
 * 
 * Setter for property <code>allowOverlayHeaderAccess</code>.
 * </p><p>
 * Default value is <code>false</code> 
 * @param {boolean} bAllowOverlayHeaderAccess  new value for property <code>allowOverlayHeaderAccess</code>
 * @return {sap.ui.ux3.Shell} <code>this</code> to allow method chaining
 * @public
 * @since 1.14.0
 * 
 */
sap.ui.ux3.Shell.prototype.setAllowOverlayHeaderAccess = function(bAllowOverlayHeaderAccess) { return new sap.ui.ux3.Shell(); };

/**
 * 
 * Setter for property <code>appIcon</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {sap.ui.core.URI} sAppIcon  new value for property <code>appIcon</code>
 * @return {sap.ui.ux3.Shell} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.Shell.prototype.setAppIcon = function(sAppIcon) { return new sap.ui.ux3.Shell(); };

/**
 * 
 * Setter for property <code>appIconTooltip</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {string} sAppIconTooltip  new value for property <code>appIconTooltip</code>
 * @return {sap.ui.ux3.Shell} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.Shell.prototype.setAppIconTooltip = function(sAppIconTooltip) { return new sap.ui.ux3.Shell(); };

/**
 * 
 * Setter for property <code>applyContentPadding</code>.
 * </p><p>
 * Default value is <code>true</code> 
 * @param {boolean} bApplyContentPadding  new value for property <code>applyContentPadding</code>
 * @return {sap.ui.ux3.Shell} <code>this</code> to allow method chaining
 * @public
 * @since 1.9.0
 * 
 */
sap.ui.ux3.Shell.prototype.setApplyContentPadding = function(bApplyContentPadding) { return new sap.ui.ux3.Shell(); };

/**
 * 
 * Setter for property <code>appTitle</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {string} sAppTitle  new value for property <code>appTitle</code>
 * @return {sap.ui.ux3.Shell} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.Shell.prototype.setAppTitle = function(sAppTitle) { return new sap.ui.ux3.Shell(); };

/**
 * 
 * Replaces the existing Shell content with the given Control(-Tree). Only leads to a re-rendering of the content area (not the complete Shell).
 * This method may be more convenient than a series of calls to "removeContent" and "addContent", which each lead to a re-rendering of the content area (but again not of the complete Shell).
 * </p><p>
 * By default the old content is not destroyed and is returned by this method in an array for further usage. To avoid memory leaks, the old content should be destroyed (if not needed later), by setting the "destroyOldContent" flag or by destroying it manually later on. If "destroyOldContent" is set, an empty array is returned.
 * @param {sap.ui.core.Control} 
 *         oContent
 *         The new Content. In this method it must be exactly one control (-tree). Use addContent() to add more control (-trees) to the main content area of the Shell.
 * @param {boolean} 
 *         bDestroyOldContent
 *         If set, the controls previously contained in the Shell will be destroyed, to avoid memory leaks.
 * @type sap.ui.core.Control[]
 * @public
 */
sap.ui.ux3.Shell.prototype.setContent = function(oContent,bDestroyOldContent) { return new Array(); };

/**
 * 
 * Setter for property <code>designType</code>.
 * </p><p>
 * Default value is <code>Standard</code> 
 * @param {sap.ui.ux3.ShellDesignType} oDesignType  new value for property <code>designType</code>
 * @return {sap.ui.ux3.Shell} <code>this</code> to allow method chaining
 * @public
 * @since 1.12.0
 * 
 */
sap.ui.ux3.Shell.prototype.setDesignType = function(oDesignType) { return new sap.ui.ux3.Shell(); };

/**
 * 
 * Setter for property <code>fullHeightContent</code>.
 * </p><p>
 * Default value is <code>false</code> 
 * @param {boolean} bFullHeightContent  new value for property <code>fullHeightContent</code>
 * @return {sap.ui.ux3.Shell} <code>this</code> to allow method chaining
 * @public
 * @since 1.9.0
 * 
 */
sap.ui.ux3.Shell.prototype.setFullHeightContent = function(bFullHeightContent) { return new sap.ui.ux3.Shell(); };

/**
 * 
 * Setter for property <code>headerType</code>.
 * </p><p>
 * Default value is <code>Standard</code> 
 * @param {sap.ui.ux3.ShellHeaderType} oHeaderType  new value for property <code>headerType</code>
 * @return {sap.ui.ux3.Shell} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.Shell.prototype.setHeaderType = function(oHeaderType) { return new sap.ui.ux3.Shell(); };

/**
 * 
 * Setter for property <code>logoutButtonTooltip</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {string} sLogoutButtonTooltip  new value for property <code>logoutButtonTooltip</code>
 * @return {sap.ui.ux3.Shell} <code>this</code> to allow method chaining
 * @public
 * @since 1.9.0
 * 
 */
sap.ui.ux3.Shell.prototype.setLogoutButtonTooltip = function(sLogoutButtonTooltip) { return new sap.ui.ux3.Shell(); };

/**
 * 
 * Setter for the aggregated <code>notificationBar</code>.
 * @param oNotificationBar {sap.ui.ux3.NotificationBar}
 * @return {sap.ui.ux3.Shell} <code>this</code> to allow method chaining
 * @public
 * @since 1.7.0
 * 
 */
sap.ui.ux3.Shell.prototype.setNotificationBar = function(oNotificationBar) { return new sap.ui.ux3.Shell(); };

/**
 * 
 * Moves the complete Shell away from the right window border by the given number of pixels (left border in RTL case).
 * </p><p>
 * So there is space for a sidebar or so outside the Shell. The CSS class 'sapUiUx3ShellOuterSideBar' provides the basic position
 * capabilities for the sidebar DOM element.
 * </p><p>
 * This feature is not public. The usage is only granted to special groups on request.
 * @param {integer} px how many pixels of free space should be next to the Shell (between 0 and 600)
 * @param {function} [complete] optional callback function to call after the animation
 * @param {string} [outerId] optional id of the content representing the outside sidebar. If specified the width of the content is animated.
 * @since 1.7.0
 * @protected
 */
sap.ui.ux3.Shell.prototype.setOffsetRight = function(px,complete,outerId) { return null; };

/**
 * 
 * Replaces the existing side pane content with the given Control(-Tree). This method is optimized to only re-render the pane content (and not the shell) which is faster and smoother than any other way of changing the "paneContent" aggregation.
 * </p><p>
 * By default, the old pane content is not destroyed and is returned by this method in an array for further usage. To avoid memory leaks, the old content should be destroyed (if not needed later), by setting the "destroyOldContent" flag or by destroying it manually later on. If "destroyOldContent" is set, an empty array is returned.
 * @param {sap.ui.core.Control} 
 *         oContent
 *         The new Pane content. In this method it must be exactly one control (-tree). This could likely be a layout or a specific ux3 Pane control. Use addPaneContent() to add more control (-trees) to the Pane.
 * @param {boolean} 
 *         bDestroyOldContent
 *         If set, the controls previously contained in the pane will be destroyed, to avoid memory leaks.
 * @type sap.ui.core.Control[]
 * @public
 */
sap.ui.ux3.Shell.prototype.setPaneContent = function(oContent,bDestroyOldContent) { return new Array(); };

/**
 * 
 * Setter for property <code>paneWidth</code>.
 * </p><p>
 * Default value is <code>250</code> 
 * @param {int} iPaneWidth  new value for property <code>paneWidth</code>
 * @return {sap.ui.ux3.Shell} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.Shell.prototype.setPaneWidth = function(iPaneWidth) { return new sap.ui.ux3.Shell(); };

/**
 * 
 * The ID of the Item that is currently selected.
 * When setting, the NavigationItem itself can be given instead of its ID. There will not be a worksetItemSelected event, the application is responsible to show the proper content according to the newly selected WorksetItem. If the set WorksetItem does not exist in this Shell, the first item (and first sub-item) will be selected after the call.
 * When getting, always the ID is returned, by which the NavigationItem instance can be retrieved.
 * @param {string | sap.ui.ux3.NavigationItem} vSelectedWorksetItem 
 *    Id of an element which becomes the new target of this <code>selectedWorksetItem</code> association.
 *    Alternatively, an element instance may be given.
 * @return {sap.ui.ux3.Shell} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.Shell.prototype.setSelectedWorksetItem = function(vSelectedWorksetItem) { return new sap.ui.ux3.Shell(); };

/**
 * 
 * Setter for property <code>showFeederTool</code>.
 * </p><p>
 * Default value is <code>true</code> 
 * @param {boolean} bShowFeederTool  new value for property <code>showFeederTool</code>
 * @return {sap.ui.ux3.Shell} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.Shell.prototype.setShowFeederTool = function(bShowFeederTool) { return new sap.ui.ux3.Shell(); };

/**
 * 
 * Setter for property <code>showInspectorTool</code>.
 * </p><p>
 * Default value is <code>false</code> 
 * @param {boolean} bShowInspectorTool  new value for property <code>showInspectorTool</code>
 * @return {sap.ui.ux3.Shell} <code>this</code> to allow method chaining
 * @public
 * @deprecated Since version 1.7.2. 
 * According to the current Ux designs, the ThingInspector should NOT be opened like this from the Tool Pane. And technically, the ThingInspector is not a ToolPopup.
 * Instead trigger it from the respective elements in the Shell content.
 * 
 */
sap.ui.ux3.Shell.prototype.setShowInspectorTool = function(bShowInspectorTool) { return new sap.ui.ux3.Shell(); };

/**
 * 
 * Setter for property <code>showLogoutButton</code>.
 * </p><p>
 * Default value is <code>true</code> 
 * @param {boolean} bShowLogoutButton  new value for property <code>showLogoutButton</code>
 * @return {sap.ui.ux3.Shell} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.Shell.prototype.setShowLogoutButton = function(bShowLogoutButton) { return new sap.ui.ux3.Shell(); };

/**
 * 
 * Setter for property <code>showPane</code>.
 * </p><p>
 * Default value is <code>true</code> 
 * @param {boolean} bShowPane  new value for property <code>showPane</code>
 * @return {sap.ui.ux3.Shell} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.Shell.prototype.setShowPane = function(bShowPane) { return new sap.ui.ux3.Shell(); };

/**
 * 
 * Setter for property <code>showSearchTool</code>.
 * </p><p>
 * Default value is <code>true</code> 
 * @param {boolean} bShowSearchTool  new value for property <code>showSearchTool</code>
 * @return {sap.ui.ux3.Shell} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.Shell.prototype.setShowSearchTool = function(bShowSearchTool) { return new sap.ui.ux3.Shell(); };

/**
 * 
 * Setter for property <code>showTools</code>.
 * </p><p>
 * Default value is <code>true</code> 
 * @param {boolean} bShowTools  new value for property <code>showTools</code>
 * @return {sap.ui.ux3.Shell} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.Shell.prototype.setShowTools = function(bShowTools) { return new sap.ui.ux3.Shell(); };


// ---- sap.ui.ux3.ShellDesignType --------------------------------------------------------------------------

// dummy function to make Eclipse aware of namespace
sap.ui.ux3.ShellDesignType.toString = function() { return ""; };

// ---- sap.ui.ux3.ShellHeaderType --------------------------------------------------------------------------

// dummy function to make Eclipse aware of namespace
sap.ui.ux3.ShellHeaderType.toString = function() { return ""; };

// ---- sap.ui.ux3.ThingAction --------------------------------------------------------------------------

/**
 * 
 * Constructor for a new ThingAction.
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
 * <li>{@link #getEnabled enabled} : boolean (default: true)</li></ul>
 * </li>
 * <li>Aggregations
 * <ul></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link sap.ui.ux3.ThingAction#event:select select} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
 * </li>
 * </ul> 
 * </p><p>
 * </p><p>
 * In addition, all settings applicable to the base type {@link sap.ui.core.Element#constructor sap.ui.core.Element}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * Thing Action for Swatch, QuickView, Thinginspector
 * @extends sap.ui.core.Element
 * @version 1.15.1-SNAPSHOT
 * @constructor   
 * @public
 * 
 */
sap.ui.ux3.ThingAction = function(sId,mSettings) {};
/**
 * 
 * Event will be fired when the action was triggered. 
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {string} oControlEvent.getParameters.id Id of selected action
 * @param {sap.ui.ux3.ThingAction} oControlEvent.getParameters.action Selected Thing Action
 * @public
 */
sap.ui.ux3.ThingAction.prototype.select = function(oControlEvent) { return null; };

/**
 * 
 * Attach event handler <code>fnFunction</code> to the 'select' event of this <code>sap.ui.ux3.ThingAction</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ui.ux3.ThingAction</code>.<br/> itself. 
 * </p><p>
 * Event will be fired when the action was triggered. 
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener=this] Context object to call the event handler with. Defaults to this <code>sap.ui.ux3.ThingAction</code>.<br/> itself.
 * @return {sap.ui.ux3.ThingAction} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.ThingAction.prototype.attachSelect = function(oData,fnFunction,oListener) { return new sap.ui.ux3.ThingAction(); };

/**
 * 
 * Detach event handler <code>fnFunction</code> from the 'select' event of this <code>sap.ui.ux3.ThingAction</code>.<br/>
 * </p><p>
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.ux3.ThingAction} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.ThingAction.prototype.detachSelect = function(fnFunction,oListener) { return new sap.ui.ux3.ThingAction(); };

/**
 * 
 * Creates a new subclass of class sap.ui.ux3.ThingAction with name <code>sClassName</code> 
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
sap.ui.ux3.ThingAction.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * 
 * Fire event select to attached listeners.
 * </p><p>
 * Expects following event parameters:
 * <ul>
 * <li>'id' of type <code>string</code> Id of selected action</li>
 * <li>'action' of type <code>sap.ui.ux3.ThingAction</code> Selected Thing Action</li>
 * </ul>
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.ux3.ThingAction} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.ui.ux3.ThingAction.prototype.fireSelect = function(mArguments) { return new sap.ui.ux3.ThingAction(); };

/**
 * 
 * Getter for property <code>enabled</code>.
 * action enabled (true/false)
 * </p><p>
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>enabled</code>
 * @public
 * 
 */
sap.ui.ux3.ThingAction.prototype.getEnabled = function() { return false; };

/**
 * 
 * Getter for property <code>text</code>.
 * text of action
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {string} the value of property <code>text</code>
 * @public
 * 
 */
sap.ui.ux3.ThingAction.prototype.getText = function() { return ""; };

/**
 * 
 * Setter for property <code>enabled</code>.
 * </p><p>
 * Default value is <code>true</code> 
 * @param {boolean} bEnabled  new value for property <code>enabled</code>
 * @return {sap.ui.ux3.ThingAction} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.ThingAction.prototype.setEnabled = function(bEnabled) { return new sap.ui.ux3.ThingAction(); };

/**
 * 
 * Setter for property <code>text</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {string} sText  new value for property <code>text</code>
 * @return {sap.ui.ux3.ThingAction} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.ThingAction.prototype.setText = function(sText) { return new sap.ui.ux3.ThingAction(); };


// ---- sap.ui.ux3.ThingGroup --------------------------------------------------------------------------

/**
 * 
 * Constructor for a new ThingGroup.
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
 * <li>{@link #getTitle title} : string</li>
 * <li>{@link #getColspan colspan} : boolean (default: false)</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getContent content} : sap.ui.core.Control[]</li>
 * <li>{@link #getActions actions} : sap.ui.ux3.ThingGroup[]</li></ul>
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
 * Thing Group Area
 * @extends sap.ui.core.Element
 * @version 1.15.1-SNAPSHOT
 * @constructor   
 * @public
 * 
 */
sap.ui.ux3.ThingGroup = function(sId,mSettings) {};
/**
 * 
 * Adds some action <code>oAction</code> 
 * to the aggregation named <code>actions</code>.
 * @param {sap.ui.ux3.ThingGroup}
 *            oAction the action to add; if empty, nothing is inserted
 * @return {sap.ui.ux3.ThingGroup} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.ThingGroup.prototype.addAction = function(oAction) { return new sap.ui.ux3.ThingGroup(); };

/**
 * 
 * Adds some content <code>oContent</code> 
 * to the aggregation named <code>content</code>.
 * @param {sap.ui.core.Control}
 *            oContent the content to add; if empty, nothing is inserted
 * @return {sap.ui.ux3.ThingGroup} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.ThingGroup.prototype.addContent = function(oContent) { return new sap.ui.ux3.ThingGroup(); };

/**
 * 
 * Destroys all the actions in the aggregation 
 * named <code>actions</code>.
 * @return {sap.ui.ux3.ThingGroup} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.ThingGroup.prototype.destroyActions = function() { return new sap.ui.ux3.ThingGroup(); };

/**
 * 
 * Destroys all the content in the aggregation 
 * named <code>content</code>.
 * @return {sap.ui.ux3.ThingGroup} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.ThingGroup.prototype.destroyContent = function() { return new sap.ui.ux3.ThingGroup(); };

/**
 * 
 * Creates a new subclass of class sap.ui.ux3.ThingGroup with name <code>sClassName</code> 
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
sap.ui.ux3.ThingGroup.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * 
 * Getter for aggregation <code>actions</code>.<br/>
 * Actions of the groups content
 * @return {sap.ui.ux3.ThingGroup[]}
 * @public
 * 
 */
sap.ui.ux3.ThingGroup.prototype.getActions = function() { return new Array(); };

/**
 * 
 * Getter for property <code>colspan</code>.
 * If Group is used in a column layout the groups spans the all columns if set to true.
 * </p><p>
 * Default value is <code>false</code>
 * @return {boolean} the value of property <code>colspan</code>
 * @public
 * 
 */
sap.ui.ux3.ThingGroup.prototype.getColspan = function() { return false; };

/**
 * 
 * Getter for aggregation <code>content</code>.<br/>
 * Content of Group
 * @return {sap.ui.core.Control[]}
 * @public
 * 
 */
sap.ui.ux3.ThingGroup.prototype.getContent = function() { return new Array(); };

/**
 * 
 * Getter for property <code>title</code>.
 * Title of Group
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {string} the value of property <code>title</code>
 * @public
 * 
 */
sap.ui.ux3.ThingGroup.prototype.getTitle = function() { return ""; };

/**
 * 
 * Checks for the provided <code>sap.ui.ux3.ThingGroup</code> in the aggregation named <code>actions</code> 
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.ux3.ThingGroup}
 *            oAction the action whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * 
 */
sap.ui.ux3.ThingGroup.prototype.indexOfAction = function(oAction) { return 0; };

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
sap.ui.ux3.ThingGroup.prototype.indexOfContent = function(oContent) { return 0; };

/**
 * 
 * Inserts a action into the aggregation named <code>actions</code>.
 * @param {sap.ui.ux3.ThingGroup}
 *          oAction the action to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the action should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the action is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the action is inserted at 
 *             the last position        
 * @return {sap.ui.ux3.ThingGroup} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.ThingGroup.prototype.insertAction = function(oAction,iIndex) { return new sap.ui.ux3.ThingGroup(); };

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
 * @return {sap.ui.ux3.ThingGroup} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.ThingGroup.prototype.insertContent = function(oContent,iIndex) { return new sap.ui.ux3.ThingGroup(); };

/**
 * 
 * Removes an action from the aggregation named <code>actions</code>.
 * @param {int | string | sap.ui.ux3.ThingGroup} vAction the action to remove or its index or id
 * @return {sap.ui.ux3.ThingGroup} the removed action or null
 * @public
 * 
 */
sap.ui.ux3.ThingGroup.prototype.removeAction = function(vAction) { return new sap.ui.ux3.ThingGroup(); };

/**
 * 
 * Removes all the controls in the aggregation named <code>actions</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.ux3.ThingGroup[]} an array of the removed elements (might be empty)
 * @public
 * 
 */
sap.ui.ux3.ThingGroup.prototype.removeAllActions = function() { return new Array(); };

/**
 * 
 * Removes all the controls in the aggregation named <code>content</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.core.Control[]} an array of the removed elements (might be empty)
 * @public
 * 
 */
sap.ui.ux3.ThingGroup.prototype.removeAllContent = function() { return new Array(); };

/**
 * 
 * Removes an content from the aggregation named <code>content</code>.
 * @param {int | string | sap.ui.core.Control} vContent the content to remove or its index or id
 * @return {sap.ui.core.Control} the removed content or null
 * @public
 * 
 */
sap.ui.ux3.ThingGroup.prototype.removeContent = function(vContent) { return new sap.ui.core.Control(); };

/**
 * 
 * Setter for property <code>colspan</code>.
 * </p><p>
 * Default value is <code>false</code> 
 * @param {boolean} bColspan  new value for property <code>colspan</code>
 * @return {sap.ui.ux3.ThingGroup} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.ThingGroup.prototype.setColspan = function(bColspan) { return new sap.ui.ux3.ThingGroup(); };

/**
 * 
 * Setter for property <code>title</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {string} sTitle  new value for property <code>title</code>
 * @return {sap.ui.ux3.ThingGroup} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.ThingGroup.prototype.setTitle = function(sTitle) { return new sap.ui.ux3.ThingGroup(); };


// ---- sap.ui.ux3.ThingInspector --------------------------------------------------------------------------

/**
 * 
 * Constructor for a new ThingInspector.
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
 * <li>{@link #getFirstTitle firstTitle} : string</li>
 * <li>{@link #getType type} : string</li>
 * <li>{@link #getIcon icon} : sap.ui.core.URI</li>
 * <li>{@link #getSecondTitle secondTitle} : string</li>
 * <li>{@link #getFollowState followState} : sap.ui.ux3.FollowActionState (default: sap.ui.ux3.FollowActionState.Default)</li>
 * <li>{@link #getFlagState flagState} : boolean (default: false)</li>
 * <li>{@link #getFavoriteState favoriteState} : boolean (default: false)</li>
 * <li>{@link #getFavoriteActionEnabled favoriteActionEnabled} : boolean (default: true)</li>
 * <li>{@link #getUpdateActionEnabled updateActionEnabled} : boolean (default: true)</li>
 * <li>{@link #getFollowActionEnabled followActionEnabled} : boolean (default: true)</li>
 * <li>{@link #getFlagActionEnabled flagActionEnabled} : boolean (default: true)</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getActions actions} : sap.ui.ux3.ThingAction[]</li>
 * <li>{@link #getHeaderContent headerContent} : sap.ui.ux3.ThingGroup[]</li>
 * <li>{@link #getFacets facets} : sap.ui.ux3.NavigationItem[]</li>
 * <li>{@link #getFacetContent facetContent} : sap.ui.ux3.ThingGroup[]</li>
 * <li>{@link #getActionBar actionBar} : sap.ui.ux3.ActionBar</li></ul>
 * </li>
 * <li>Associations
 * <ul>
 * <li>{@link #getSelectedFacet selectedFacet} : string | sap.ui.ux3.NavigationItem</li></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link sap.ui.ux3.ThingInspector#event:actionSelected actionSelected} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.ui.ux3.ThingInspector#event:facetSelected facetSelected} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.ui.ux3.ThingInspector#event:feedSubmit feedSubmit} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
 * </li>
 * </ul> 
 * </p><p>
 * </p><p>
 * In addition, all settings applicable to the base type {@link sap.ui.ux3.Overlay#constructor sap.ui.ux3.Overlay}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * Thing Inspector
 * @extends sap.ui.ux3.Overlay
 * @version 1.15.1-SNAPSHOT
 * @constructor   
 * @public
 * 
 */
sap.ui.ux3.ThingInspector = function(sId,mSettings) {};
/**
 * 
 * Further thing related Action selected 
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {string} oControlEvent.getParameters.id Id of selected ThingAction
 * @param {sap.ui.ux3.ThingAction} oControlEvent.getParameters.action Selected ThingAction
 * @public
 */
sap.ui.ux3.ThingInspector.prototype.actionSelected = function(oControlEvent) { return null; };

/**
 * 
 * Event for facet selection. The application is responsible for displaying the correct content for the selected one. The ThingInspector will currently always mark the first facet as selected. 
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {string} oControlEvent.getParameters.id Id of selected NavigationItem
 * @param {sap.ui.ux3.NavigationItem} oControlEvent.getParameters.item The selected NavigationItem
 * @param {string} oControlEvent.getParameters.key Key of selected NavigationItem
 * @public
 */
sap.ui.ux3.ThingInspector.prototype.facetSelected = function(oControlEvent) { return null; };

/**
 * 
 * Fired when a new feed entry is submitted. 
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {string} oControlEvent.getParameters.text Feed text
 * @public
 */
sap.ui.ux3.ThingInspector.prototype.feedSubmit = function(oControlEvent) { return null; };

/**
 * 
 * Adds some action <code>oAction</code> 
 * to the aggregation named <code>actions</code>.
 * @param {sap.ui.ux3.ThingAction}
 *            oAction the action to add; if empty, nothing is inserted
 * @return {sap.ui.ux3.ThingInspector} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.ThingInspector.prototype.addAction = function(oAction) { return new sap.ui.ux3.ThingInspector(); };

/**
 * 
 * Adds some facet <code>oFacet</code> 
 * to the aggregation named <code>facets</code>.
 * @param {sap.ui.ux3.NavigationItem}
 *            oFacet the facet to add; if empty, nothing is inserted
 * @return {sap.ui.ux3.ThingInspector} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.ThingInspector.prototype.addFacet = function(oFacet) { return new sap.ui.ux3.ThingInspector(); };

/**
 * 
 * Adds some facetContent <code>oFacetContent</code> 
 * to the aggregation named <code>facetContent</code>.
 * @param {sap.ui.ux3.ThingGroup}
 *            oFacetContent the facetContent to add; if empty, nothing is inserted
 * @return {sap.ui.ux3.ThingInspector} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.ThingInspector.prototype.addFacetContent = function(oFacetContent) { return new sap.ui.ux3.ThingInspector(); };

/**
 * 
 * Adds some headerContent <code>oHeaderContent</code> 
 * to the aggregation named <code>headerContent</code>.
 * @param {sap.ui.ux3.ThingGroup}
 *            oHeaderContent the headerContent to add; if empty, nothing is inserted
 * @return {sap.ui.ux3.ThingInspector} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.ThingInspector.prototype.addHeaderContent = function(oHeaderContent) { return new sap.ui.ux3.ThingInspector(); };

/**
 * 
 * Attach event handler <code>fnFunction</code> to the 'actionSelected' event of this <code>sap.ui.ux3.ThingInspector</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ui.ux3.ThingInspector</code>.<br/> itself. 
 * </p><p>
 * Further thing related Action selected 
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener=this] Context object to call the event handler with. Defaults to this <code>sap.ui.ux3.ThingInspector</code>.<br/> itself.
 * @return {sap.ui.ux3.ThingInspector} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.ThingInspector.prototype.attachActionSelected = function(oData,fnFunction,oListener) { return new sap.ui.ux3.ThingInspector(); };

/**
 * 
 * Attach event handler <code>fnFunction</code> to the 'facetSelected' event of this <code>sap.ui.ux3.ThingInspector</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ui.ux3.ThingInspector</code>.<br/> itself. 
 * </p><p>
 * Event for facet selection. The application is responsible for displaying the correct content for the selected one. The ThingInspector will currently always mark the first facet as selected. 
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener=this] Context object to call the event handler with. Defaults to this <code>sap.ui.ux3.ThingInspector</code>.<br/> itself.
 * @return {sap.ui.ux3.ThingInspector} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.ThingInspector.prototype.attachFacetSelected = function(oData,fnFunction,oListener) { return new sap.ui.ux3.ThingInspector(); };

/**
 * 
 * Attach event handler <code>fnFunction</code> to the 'feedSubmit' event of this <code>sap.ui.ux3.ThingInspector</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ui.ux3.ThingInspector</code>.<br/> itself. 
 * </p><p>
 * Fired when a new feed entry is submitted. 
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener=this] Context object to call the event handler with. Defaults to this <code>sap.ui.ux3.ThingInspector</code>.<br/> itself.
 * @return {sap.ui.ux3.ThingInspector} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.ThingInspector.prototype.attachFeedSubmit = function(oData,fnFunction,oListener) { return new sap.ui.ux3.ThingInspector(); };

/**
 * 
 * Destroys the actionBar in the aggregation 
 * named <code>actionBar</code>.
 * @return {sap.ui.ux3.ThingInspector} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.ThingInspector.prototype.destroyActionBar = function() { return new sap.ui.ux3.ThingInspector(); };

/**
 * 
 * Destroys all the actions in the aggregation 
 * named <code>actions</code>.
 * @return {sap.ui.ux3.ThingInspector} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.ThingInspector.prototype.destroyActions = function() { return new sap.ui.ux3.ThingInspector(); };

/**
 * 
 * Destroys all the facetContent in the aggregation 
 * named <code>facetContent</code>.
 * @return {sap.ui.ux3.ThingInspector} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.ThingInspector.prototype.destroyFacetContent = function() { return new sap.ui.ux3.ThingInspector(); };

/**
 * 
 * Destroys all the facets in the aggregation 
 * named <code>facets</code>.
 * @return {sap.ui.ux3.ThingInspector} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.ThingInspector.prototype.destroyFacets = function() { return new sap.ui.ux3.ThingInspector(); };

/**
 * 
 * Destroys all the headerContent in the aggregation 
 * named <code>headerContent</code>.
 * @return {sap.ui.ux3.ThingInspector} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.ThingInspector.prototype.destroyHeaderContent = function() { return new sap.ui.ux3.ThingInspector(); };

/**
 * 
 * Detach event handler <code>fnFunction</code> from the 'actionSelected' event of this <code>sap.ui.ux3.ThingInspector</code>.<br/>
 * </p><p>
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.ux3.ThingInspector} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.ThingInspector.prototype.detachActionSelected = function(fnFunction,oListener) { return new sap.ui.ux3.ThingInspector(); };

/**
 * 
 * Detach event handler <code>fnFunction</code> from the 'facetSelected' event of this <code>sap.ui.ux3.ThingInspector</code>.<br/>
 * </p><p>
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.ux3.ThingInspector} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.ThingInspector.prototype.detachFacetSelected = function(fnFunction,oListener) { return new sap.ui.ux3.ThingInspector(); };

/**
 * 
 * Detach event handler <code>fnFunction</code> from the 'feedSubmit' event of this <code>sap.ui.ux3.ThingInspector</code>.<br/>
 * </p><p>
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.ux3.ThingInspector} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.ThingInspector.prototype.detachFeedSubmit = function(fnFunction,oListener) { return new sap.ui.ux3.ThingInspector(); };

/**
 * 
 * Creates a new subclass of class sap.ui.ux3.ThingInspector with name <code>sClassName</code> 
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
sap.ui.ux3.ThingInspector.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * 
 * Fire event actionSelected to attached listeners.
 * </p><p>
 * Expects following event parameters:
 * <ul>
 * <li>'id' of type <code>string</code> Id of selected ThingAction</li>
 * <li>'action' of type <code>sap.ui.ux3.ThingAction</code> Selected ThingAction</li>
 * </ul>
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.ux3.ThingInspector} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.ui.ux3.ThingInspector.prototype.fireActionSelected = function(mArguments) { return new sap.ui.ux3.ThingInspector(); };

/**
 * 
 * Fire event facetSelected to attached listeners.
 * </p><p>
 * Listeners may prevent the default action of this event using the preventDefault-method on the event object.
 * * 
 * Expects following event parameters:
 * <ul>
 * <li>'id' of type <code>string</code> Id of selected NavigationItem</li>
 * <li>'item' of type <code>sap.ui.ux3.NavigationItem</code> The selected NavigationItem</li>
 * <li>'key' of type <code>string</code> Key of selected NavigationItem</li>
 * </ul>
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {boolean} whether to prevent the default action
 * @protected
 * 
 */
sap.ui.ux3.ThingInspector.prototype.fireFacetSelected = function(mArguments) { return false; };

/**
 * 
 * Fire event feedSubmit to attached listeners.
 * </p><p>
 * Expects following event parameters:
 * <ul>
 * <li>'text' of type <code>string</code> Feed text</li>
 * </ul>
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.ux3.ThingInspector} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.ui.ux3.ThingInspector.prototype.fireFeedSubmit = function(mArguments) { return new sap.ui.ux3.ThingInspector(); };

/**
 * 
 * Getter for aggregation <code>actionBar</code>.<br/>
 * ActionBar. If no actionBar is set a default ActionBar will be created.
 * @return {sap.ui.ux3.ActionBar}
 * @public
 * 
 */
sap.ui.ux3.ThingInspector.prototype.getActionBar = function() { return new sap.ui.ux3.ActionBar(); };

/**
 * 
 * Getter for aggregation <code>actions</code>.<br/>
 * Actions of a Thing
 * @return {sap.ui.ux3.ThingAction[]}
 * @public
 * 
 */
sap.ui.ux3.ThingInspector.prototype.getActions = function() { return new Array(); };

/**
 * 
 * Getter for aggregation <code>facetContent</code>.<br/>
 * ThingGroups for content of the selected facet
 * @return {sap.ui.ux3.ThingGroup[]}
 * @public
 * 
 */
sap.ui.ux3.ThingInspector.prototype.getFacetContent = function() { return new Array(); };

/**
 * 
 * Getter for aggregation <code>facets</code>.<br/>
 * Thing Inspector facets
 * @return {sap.ui.ux3.NavigationItem[]}
 * @public
 * 
 */
sap.ui.ux3.ThingInspector.prototype.getFacets = function() { return new Array(); };

/**
 * 
 * Getter for property <code>favoriteActionEnabled</code>.
 * Favorite action enabled/disabled. If disabled the action will be invisible.
 * </p><p>
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>favoriteActionEnabled</code>
 * @public
 * 
 */
sap.ui.ux3.ThingInspector.prototype.getFavoriteActionEnabled = function() { return false; };

/**
 * 
 * Getter for property <code>favoriteState</code>.
 * State Of favorite Action
 * </p><p>
 * Default value is <code>false</code>
 * @return {boolean} the value of property <code>favoriteState</code>
 * @public
 * 
 */
sap.ui.ux3.ThingInspector.prototype.getFavoriteState = function() { return false; };

/**
 * 
 * Getter for property <code>firstTitle</code>.
 * First Line of the Thing Inspector Title
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {string} the value of property <code>firstTitle</code>
 * @public
 * 
 */
sap.ui.ux3.ThingInspector.prototype.getFirstTitle = function() { return ""; };

/**
 * 
 * Getter for property <code>flagActionEnabled</code>.
 * Flag action enabled/disabled. If disabled the action will be invisible.
 * </p><p>
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>flagActionEnabled</code>
 * @public
 * 
 */
sap.ui.ux3.ThingInspector.prototype.getFlagActionEnabled = function() { return false; };

/**
 * 
 * Getter for property <code>flagState</code>.
 * State of Flag Action
 * </p><p>
 * Default value is <code>false</code>
 * @return {boolean} the value of property <code>flagState</code>
 * @public
 * 
 */
sap.ui.ux3.ThingInspector.prototype.getFlagState = function() { return false; };

/**
 * 
 * Getter for property <code>followActionEnabled</code>.
 * Follow action enabled/disabled. If disabled the action will be invisible.
 * </p><p>
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>followActionEnabled</code>
 * @public
 * 
 */
sap.ui.ux3.ThingInspector.prototype.getFollowActionEnabled = function() { return false; };

/**
 * 
 * Getter for property <code>followState</code>.
 * Follow State of a Thing
 * </p><p>
 * Default value is <code>Default</code>
 * @return {sap.ui.ux3.FollowActionState} the value of property <code>followState</code>
 * @public
 * 
 */
sap.ui.ux3.ThingInspector.prototype.getFollowState = function() { return new sap.ui.ux3.FollowActionState(); };

/**
 * 
 * Getter for aggregation <code>headerContent</code>.<br/>
 * ThingGroups for the header content
 * @return {sap.ui.ux3.ThingGroup[]}
 * @public
 * 
 */
sap.ui.ux3.ThingInspector.prototype.getHeaderContent = function() { return new Array(); };

/**
 * 
 * Getter for property <code>icon</code>.
 * Thing Icon Url
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {sap.ui.core.URI} the value of property <code>icon</code>
 * @public
 * 
 */
sap.ui.ux3.ThingInspector.prototype.getIcon = function() { return new sap.ui.core.URI(); };

/**
 * 
 * Getter for property <code>secondTitle</code>.
 * Second Line of the Thing Inspector Title
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {string} the value of property <code>secondTitle</code>
 * @public
 * 
 */
sap.ui.ux3.ThingInspector.prototype.getSecondTitle = function() { return ""; };

/**
 * 
 * The Facet that is currently selected.
 * @return {string} Id of the element which is the current target of the <code>selectedFacet</code> association, or null
 * @public
 * 
 */
sap.ui.ux3.ThingInspector.prototype.getSelectedFacet = function() { return ""; };

/**
 * 
 * Getter for property <code>type</code>.
 * Thing type
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {string} the value of property <code>type</code>
 * @public
 * 
 */
sap.ui.ux3.ThingInspector.prototype.getType = function() { return ""; };

/**
 * 
 * Getter for property <code>updateActionEnabled</code>.
 * Update action enabled/disabled. If disabled the action will be invisible.
 * </p><p>
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>updateActionEnabled</code>
 * @public
 * 
 */
sap.ui.ux3.ThingInspector.prototype.getUpdateActionEnabled = function() { return false; };

/**
 * 
 * Checks for the provided <code>sap.ui.ux3.ThingAction</code> in the aggregation named <code>actions</code> 
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.ux3.ThingAction}
 *            oAction the action whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * 
 */
sap.ui.ux3.ThingInspector.prototype.indexOfAction = function(oAction) { return 0; };

/**
 * 
 * Checks for the provided <code>sap.ui.ux3.NavigationItem</code> in the aggregation named <code>facets</code> 
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.ux3.NavigationItem}
 *            oFacet the facet whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * 
 */
sap.ui.ux3.ThingInspector.prototype.indexOfFacet = function(oFacet) { return 0; };

/**
 * 
 * Checks for the provided <code>sap.ui.ux3.ThingGroup</code> in the aggregation named <code>facetContent</code> 
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.ux3.ThingGroup}
 *            oFacetContent the facetContent whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * 
 */
sap.ui.ux3.ThingInspector.prototype.indexOfFacetContent = function(oFacetContent) { return 0; };

/**
 * 
 * Checks for the provided <code>sap.ui.ux3.ThingGroup</code> in the aggregation named <code>headerContent</code> 
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.ux3.ThingGroup}
 *            oHeaderContent the headerContent whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * 
 */
sap.ui.ux3.ThingInspector.prototype.indexOfHeaderContent = function(oHeaderContent) { return 0; };

/**
 * 
 * Inserts a action into the aggregation named <code>actions</code>.
 * @param {sap.ui.ux3.ThingAction}
 *          oAction the action to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the action should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the action is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the action is inserted at 
 *             the last position        
 * @return {sap.ui.ux3.ThingInspector} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.ThingInspector.prototype.insertAction = function(oAction,iIndex) { return new sap.ui.ux3.ThingInspector(); };

/**
 * 
 * Inserts a facet into the aggregation named <code>facets</code>.
 * @param {sap.ui.ux3.NavigationItem}
 *          oFacet the facet to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the facet should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the facet is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the facet is inserted at 
 *             the last position        
 * @return {sap.ui.ux3.ThingInspector} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.ThingInspector.prototype.insertFacet = function(oFacet,iIndex) { return new sap.ui.ux3.ThingInspector(); };

/**
 * 
 * Inserts a facetContent into the aggregation named <code>facetContent</code>.
 * @param {sap.ui.ux3.ThingGroup}
 *          oFacetContent the facetContent to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the facetContent should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the facetContent is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the facetContent is inserted at 
 *             the last position        
 * @return {sap.ui.ux3.ThingInspector} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.ThingInspector.prototype.insertFacetContent = function(oFacetContent,iIndex) { return new sap.ui.ux3.ThingInspector(); };

/**
 * 
 * Inserts a headerContent into the aggregation named <code>headerContent</code>.
 * @param {sap.ui.ux3.ThingGroup}
 *          oHeaderContent the headerContent to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the headerContent should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the headerContent is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the headerContent is inserted at 
 *             the last position        
 * @return {sap.ui.ux3.ThingInspector} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.ThingInspector.prototype.insertHeaderContent = function(oHeaderContent,iIndex) { return new sap.ui.ux3.ThingInspector(); };

/**
 * 
 * Opens this instance of ThingIspector
 * @public
 */
sap.ui.ux3.ThingInspector.prototype.open = function(initialFocusId) { return null; };

/**
 * 
 * Removes an action from the aggregation named <code>actions</code>.
 * @param {int | string | sap.ui.ux3.ThingAction} vAction the action to remove or its index or id
 * @return {sap.ui.ux3.ThingAction} the removed action or null
 * @public
 * 
 */
sap.ui.ux3.ThingInspector.prototype.removeAction = function(vAction) { return new sap.ui.ux3.ThingAction(); };

/**
 * 
 * Removes all the controls in the aggregation named <code>actions</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.ux3.ThingAction[]} an array of the removed elements (might be empty)
 * @public
 * 
 */
sap.ui.ux3.ThingInspector.prototype.removeAllActions = function() { return new Array(); };

/**
 * 
 * Removes all the controls in the aggregation named <code>facetContent</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.ux3.ThingGroup[]} an array of the removed elements (might be empty)
 * @public
 * 
 */
sap.ui.ux3.ThingInspector.prototype.removeAllFacetContent = function() { return new Array(); };

/**
 * 
 * Removes all the controls in the aggregation named <code>facets</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.ux3.NavigationItem[]} an array of the removed elements (might be empty)
 * @public
 * 
 */
sap.ui.ux3.ThingInspector.prototype.removeAllFacets = function() { return new Array(); };

/**
 * 
 * Removes all the controls in the aggregation named <code>headerContent</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.ux3.ThingGroup[]} an array of the removed elements (might be empty)
 * @public
 * 
 */
sap.ui.ux3.ThingInspector.prototype.removeAllHeaderContent = function() { return new Array(); };

/**
 * 
 * Removes an facet from the aggregation named <code>facets</code>.
 * @param {int | string | sap.ui.ux3.NavigationItem} vFacet the facet to remove or its index or id
 * @return {sap.ui.ux3.NavigationItem} the removed facet or null
 * @public
 * 
 */
sap.ui.ux3.ThingInspector.prototype.removeFacet = function(vFacet) { return new sap.ui.ux3.NavigationItem(); };

/**
 * 
 * Removes an facetContent from the aggregation named <code>facetContent</code>.
 * @param {int | string | sap.ui.ux3.ThingGroup} vFacetContent the facetContent to remove or its index or id
 * @return {sap.ui.ux3.ThingGroup} the removed facetContent or null
 * @public
 * 
 */
sap.ui.ux3.ThingInspector.prototype.removeFacetContent = function(vFacetContent) { return new sap.ui.ux3.ThingGroup(); };

/**
 * 
 * Removes an headerContent from the aggregation named <code>headerContent</code>.
 * @param {int | string | sap.ui.ux3.ThingGroup} vHeaderContent the headerContent to remove or its index or id
 * @return {sap.ui.ux3.ThingGroup} the removed headerContent or null
 * @public
 * 
 */
sap.ui.ux3.ThingInspector.prototype.removeHeaderContent = function(vHeaderContent) { return new sap.ui.ux3.ThingGroup(); };

/**
 * 
 * Setter for the aggregated <code>actionBar</code>.
 * @param oActionBar {sap.ui.ux3.ActionBar}
 * @return {sap.ui.ux3.ThingInspector} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.ThingInspector.prototype.setActionBar = function(oActionBar) { return new sap.ui.ux3.ThingInspector(); };

/**
 * 
 * Setter for property <code>favoriteActionEnabled</code>.
 * </p><p>
 * Default value is <code>true</code> 
 * @param {boolean} bFavoriteActionEnabled  new value for property <code>favoriteActionEnabled</code>
 * @return {sap.ui.ux3.ThingInspector} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.ThingInspector.prototype.setFavoriteActionEnabled = function(bFavoriteActionEnabled) { return new sap.ui.ux3.ThingInspector(); };

/**
 * 
 * Setter for property <code>favoriteState</code>.
 * </p><p>
 * Default value is <code>false</code> 
 * @param {boolean} bFavoriteState  new value for property <code>favoriteState</code>
 * @return {sap.ui.ux3.ThingInspector} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.ThingInspector.prototype.setFavoriteState = function(bFavoriteState) { return new sap.ui.ux3.ThingInspector(); };

/**
 * 
 * Setter for property <code>firstTitle</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {string} sFirstTitle  new value for property <code>firstTitle</code>
 * @return {sap.ui.ux3.ThingInspector} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.ThingInspector.prototype.setFirstTitle = function(sFirstTitle) { return new sap.ui.ux3.ThingInspector(); };

/**
 * 
 * Setter for property <code>flagActionEnabled</code>.
 * </p><p>
 * Default value is <code>true</code> 
 * @param {boolean} bFlagActionEnabled  new value for property <code>flagActionEnabled</code>
 * @return {sap.ui.ux3.ThingInspector} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.ThingInspector.prototype.setFlagActionEnabled = function(bFlagActionEnabled) { return new sap.ui.ux3.ThingInspector(); };

/**
 * 
 * Setter for property <code>flagState</code>.
 * </p><p>
 * Default value is <code>false</code> 
 * @param {boolean} bFlagState  new value for property <code>flagState</code>
 * @return {sap.ui.ux3.ThingInspector} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.ThingInspector.prototype.setFlagState = function(bFlagState) { return new sap.ui.ux3.ThingInspector(); };

/**
 * 
 * Setter for property <code>followActionEnabled</code>.
 * </p><p>
 * Default value is <code>true</code> 
 * @param {boolean} bFollowActionEnabled  new value for property <code>followActionEnabled</code>
 * @return {sap.ui.ux3.ThingInspector} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.ThingInspector.prototype.setFollowActionEnabled = function(bFollowActionEnabled) { return new sap.ui.ux3.ThingInspector(); };

/**
 * 
 * Setter for property <code>followState</code>.
 * </p><p>
 * Default value is <code>Default</code> 
 * @param {sap.ui.ux3.FollowActionState} oFollowState  new value for property <code>followState</code>
 * @return {sap.ui.ux3.ThingInspector} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.ThingInspector.prototype.setFollowState = function(oFollowState) { return new sap.ui.ux3.ThingInspector(); };

/**
 * 
 * Setter for property <code>icon</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {sap.ui.core.URI} sIcon  new value for property <code>icon</code>
 * @return {sap.ui.ux3.ThingInspector} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.ThingInspector.prototype.setIcon = function(sIcon) { return new sap.ui.ux3.ThingInspector(); };

/**
 * 
 * Setter for property <code>secondTitle</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {string} sSecondTitle  new value for property <code>secondTitle</code>
 * @return {sap.ui.ux3.ThingInspector} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.ThingInspector.prototype.setSecondTitle = function(sSecondTitle) { return new sap.ui.ux3.ThingInspector(); };

/**
 * 
 * The Facet that is currently selected.
 * @param {string | sap.ui.ux3.NavigationItem} vSelectedFacet 
 *    Id of an element which becomes the new target of this <code>selectedFacet</code> association.
 *    Alternatively, an element instance may be given.
 * @return {sap.ui.ux3.ThingInspector} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.ThingInspector.prototype.setSelectedFacet = function(vSelectedFacet) { return new sap.ui.ux3.ThingInspector(); };

/**
 * 
 * Setter for property <code>type</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {string} sType  new value for property <code>type</code>
 * @return {sap.ui.ux3.ThingInspector} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.ThingInspector.prototype.setType = function(sType) { return new sap.ui.ux3.ThingInspector(); };

/**
 * 
 * Setter for property <code>updateActionEnabled</code>.
 * </p><p>
 * Default value is <code>true</code> 
 * @param {boolean} bUpdateActionEnabled  new value for property <code>updateActionEnabled</code>
 * @return {sap.ui.ux3.ThingInspector} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.ThingInspector.prototype.setUpdateActionEnabled = function(bUpdateActionEnabled) { return new sap.ui.ux3.ThingInspector(); };


// ---- sap.ui.ux3.ThingViewer --------------------------------------------------------------------------

/**
 * 
 * Constructor for a new ThingViewer.
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
 * <li>{@link #getTitle title} : string</li>
 * <li>{@link #getType type} : string</li>
 * <li>{@link #getIcon icon} : sap.ui.core.URI</li>
 * <li>{@link #getSubtitle subtitle} : string</li>
 * <li>{@link #getWidth width} : sap.ui.core.CSSSize (default: '100%')</li>
 * <li>{@link #getHeight height} : sap.ui.core.CSSSize (default: '100%')</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getHeaderContent headerContent} : sap.ui.ux3.ThingGroup[]</li>
 * <li>{@link #getFacets facets} : sap.ui.ux3.NavigationItem[]</li>
 * <li>{@link #getFacetContent facetContent} : sap.ui.ux3.ThingGroup[]</li>
 * <li>{@link #getActionBar actionBar} : sap.ui.ux3.ActionBar</li></ul>
 * </li>
 * <li>Associations
 * <ul>
 * <li>{@link #getSelectedFacet selectedFacet} : string | sap.ui.ux3.NavigationItem</li></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link sap.ui.ux3.ThingViewer#event:facetSelected facetSelected} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
 * </li>
 * </ul> 
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * ThingViewer: Same as ThingInspector but decoupled from the Overlay and the ActionBar.
 * The control can be added to a Parent container that has a defined width. The ThingViewer fill the whole container. If the parent container has no width defined the control will not work properly.
 * @extends sap.ui.core.Control
 * @version 1.15.1-SNAPSHOT
 * @constructor   
 * @public
 * @since 1.9.1
 * 
 */
sap.ui.ux3.ThingViewer = function(sId,mSettings) {};
/**
 * 
 * Event for facet selection. The application is responsible for displaying the correct content for the selected one. The ThingInspector will currently always mark the first facet as selected. 
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {string} oControlEvent.getParameters.id Id of selected NavigationItem
 * @param {sap.ui.ux3.NavigationItem} oControlEvent.getParameters.item The selected NavigationItem
 * @param {string} oControlEvent.getParameters.key Key of selected NavigationItem
 * @public
 */
sap.ui.ux3.ThingViewer.prototype.facetSelected = function(oControlEvent) { return null; };

/**
 * 
 * Adds some facet <code>oFacet</code> 
 * to the aggregation named <code>facets</code>.
 * @param {sap.ui.ux3.NavigationItem}
 *            oFacet the facet to add; if empty, nothing is inserted
 * @return {sap.ui.ux3.ThingViewer} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.ThingViewer.prototype.addFacet = function(oFacet) { return new sap.ui.ux3.ThingViewer(); };

/**
 * 
 * Adds some facetContent <code>oFacetContent</code> 
 * to the aggregation named <code>facetContent</code>.
 * @param {sap.ui.ux3.ThingGroup}
 *            oFacetContent the facetContent to add; if empty, nothing is inserted
 * @return {sap.ui.ux3.ThingViewer} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.ThingViewer.prototype.addFacetContent = function(oFacetContent) { return new sap.ui.ux3.ThingViewer(); };

/**
 * 
 * Adds some headerContent <code>oHeaderContent</code> 
 * to the aggregation named <code>headerContent</code>.
 * @param {sap.ui.ux3.ThingGroup}
 *            oHeaderContent the headerContent to add; if empty, nothing is inserted
 * @return {sap.ui.ux3.ThingViewer} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.ThingViewer.prototype.addHeaderContent = function(oHeaderContent) { return new sap.ui.ux3.ThingViewer(); };

/**
 * 
 * Attach event handler <code>fnFunction</code> to the 'facetSelected' event of this <code>sap.ui.ux3.ThingViewer</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ui.ux3.ThingViewer</code>.<br/> itself. 
 * </p><p>
 * Event for facet selection. The application is responsible for displaying the correct content for the selected one. The ThingInspector will currently always mark the first facet as selected. 
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener=this] Context object to call the event handler with. Defaults to this <code>sap.ui.ux3.ThingViewer</code>.<br/> itself.
 * @return {sap.ui.ux3.ThingViewer} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.ThingViewer.prototype.attachFacetSelected = function(oData,fnFunction,oListener) { return new sap.ui.ux3.ThingViewer(); };

/**
 * 
 * Destroys the actionBar in the aggregation 
 * named <code>actionBar</code>.
 * @return {sap.ui.ux3.ThingViewer} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.ThingViewer.prototype.destroyActionBar = function() { return new sap.ui.ux3.ThingViewer(); };

/**
 * 
 * Destroys all the facetContent in the aggregation 
 * named <code>facetContent</code>.
 * @return {sap.ui.ux3.ThingViewer} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.ThingViewer.prototype.destroyFacetContent = function() { return new sap.ui.ux3.ThingViewer(); };

/**
 * 
 * Destroys all the facets in the aggregation 
 * named <code>facets</code>.
 * @return {sap.ui.ux3.ThingViewer} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.ThingViewer.prototype.destroyFacets = function() { return new sap.ui.ux3.ThingViewer(); };

/**
 * 
 * Destroys all the headerContent in the aggregation 
 * named <code>headerContent</code>.
 * @return {sap.ui.ux3.ThingViewer} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.ThingViewer.prototype.destroyHeaderContent = function() { return new sap.ui.ux3.ThingViewer(); };

/**
 * 
 * Detach event handler <code>fnFunction</code> from the 'facetSelected' event of this <code>sap.ui.ux3.ThingViewer</code>.<br/>
 * </p><p>
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.ux3.ThingViewer} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.ThingViewer.prototype.detachFacetSelected = function(fnFunction,oListener) { return new sap.ui.ux3.ThingViewer(); };

/**
 * 
 * Creates a new subclass of class sap.ui.ux3.ThingViewer with name <code>sClassName</code> 
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
sap.ui.ux3.ThingViewer.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * 
 * Fire event facetSelected to attached listeners.
 * </p><p>
 * Listeners may prevent the default action of this event using the preventDefault-method on the event object.
 * * 
 * Expects following event parameters:
 * <ul>
 * <li>'id' of type <code>string</code> Id of selected NavigationItem</li>
 * <li>'item' of type <code>sap.ui.ux3.NavigationItem</code> The selected NavigationItem</li>
 * <li>'key' of type <code>string</code> Key of selected NavigationItem</li>
 * </ul>
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {boolean} whether to prevent the default action
 * @protected
 * 
 */
sap.ui.ux3.ThingViewer.prototype.fireFacetSelected = function(mArguments) { return false; };

/**
 * 
 * Getter for aggregation <code>actionBar</code>.<br/>
 * An ActionBar can be given
 * @return {sap.ui.ux3.ActionBar}
 * @public
 * 
 */
sap.ui.ux3.ThingViewer.prototype.getActionBar = function() { return new sap.ui.ux3.ActionBar(); };

/**
 * 
 * Getter for aggregation <code>facetContent</code>.<br/>
 * ThingGroups for content of the selected facet
 * @return {sap.ui.ux3.ThingGroup[]}
 * @public
 * 
 */
sap.ui.ux3.ThingViewer.prototype.getFacetContent = function() { return new Array(); };

/**
 * 
 * Getter for aggregation <code>facets</code>.<br/>
 * Thing Inspector facets
 * @return {sap.ui.ux3.NavigationItem[]}
 * @public
 * 
 */
sap.ui.ux3.ThingViewer.prototype.getFacets = function() { return new Array(); };

/**
 * 
 * Getter for aggregation <code>headerContent</code>.<br/>
 * ThingGroups for the header content
 * @return {sap.ui.ux3.ThingGroup[]}
 * @public
 * 
 */
sap.ui.ux3.ThingViewer.prototype.getHeaderContent = function() { return new Array(); };

/**
 * 
 * Getter for property <code>height</code>.
 * Height of the ThingViewer
 * </p><p>
 * Default value is <code>100%</code>
 * @return {sap.ui.core.CSSSize} the value of property <code>height</code>
 * @public
 * 
 */
sap.ui.ux3.ThingViewer.prototype.getHeight = function() { return new sap.ui.core.CSSSize(); };

/**
 * 
 * Getter for property <code>icon</code>.
 * Thing Icon Url
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {sap.ui.core.URI} the value of property <code>icon</code>
 * @public
 * 
 */
sap.ui.ux3.ThingViewer.prototype.getIcon = function() { return new sap.ui.core.URI(); };

/**
 * 
 * The Facet that is currently selected.
 * @return {string} Id of the element which is the current target of the <code>selectedFacet</code> association, or null
 * @public
 * 
 */
sap.ui.ux3.ThingViewer.prototype.getSelectedFacet = function() { return ""; };

/**
 * 
 * Getter for property <code>subtitle</code>.
 * Subtitle of the Thing Inspector
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {string} the value of property <code>subtitle</code>
 * @public
 * 
 */
sap.ui.ux3.ThingViewer.prototype.getSubtitle = function() { return ""; };

/**
 * 
 * Getter for property <code>title</code>.
 * Title of the Thing Inspector
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {string} the value of property <code>title</code>
 * @public
 * 
 */
sap.ui.ux3.ThingViewer.prototype.getTitle = function() { return ""; };

/**
 * 
 * Getter for property <code>type</code>.
 * Thing type
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {string} the value of property <code>type</code>
 * @public
 * 
 */
sap.ui.ux3.ThingViewer.prototype.getType = function() { return ""; };

/**
 * 
 * Getter for property <code>width</code>.
 * Width of the ThingViewer
 * </p><p>
 * Default value is <code>100%</code>
 * @return {sap.ui.core.CSSSize} the value of property <code>width</code>
 * @public
 * 
 */
sap.ui.ux3.ThingViewer.prototype.getWidth = function() { return new sap.ui.core.CSSSize(); };

/**
 * 
 * Checks for the provided <code>sap.ui.ux3.NavigationItem</code> in the aggregation named <code>facets</code> 
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.ux3.NavigationItem}
 *            oFacet the facet whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * 
 */
sap.ui.ux3.ThingViewer.prototype.indexOfFacet = function(oFacet) { return 0; };

/**
 * 
 * Checks for the provided <code>sap.ui.ux3.ThingGroup</code> in the aggregation named <code>facetContent</code> 
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.ux3.ThingGroup}
 *            oFacetContent the facetContent whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * 
 */
sap.ui.ux3.ThingViewer.prototype.indexOfFacetContent = function(oFacetContent) { return 0; };

/**
 * 
 * Checks for the provided <code>sap.ui.ux3.ThingGroup</code> in the aggregation named <code>headerContent</code> 
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.ux3.ThingGroup}
 *            oHeaderContent the headerContent whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * 
 */
sap.ui.ux3.ThingViewer.prototype.indexOfHeaderContent = function(oHeaderContent) { return 0; };

/**
 * 
 * Inserts a facet into the aggregation named <code>facets</code>.
 * @param {sap.ui.ux3.NavigationItem}
 *          oFacet the facet to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the facet should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the facet is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the facet is inserted at 
 *             the last position        
 * @return {sap.ui.ux3.ThingViewer} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.ThingViewer.prototype.insertFacet = function(oFacet,iIndex) { return new sap.ui.ux3.ThingViewer(); };

/**
 * 
 * Inserts a facetContent into the aggregation named <code>facetContent</code>.
 * @param {sap.ui.ux3.ThingGroup}
 *          oFacetContent the facetContent to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the facetContent should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the facetContent is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the facetContent is inserted at 
 *             the last position        
 * @return {sap.ui.ux3.ThingViewer} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.ThingViewer.prototype.insertFacetContent = function(oFacetContent,iIndex) { return new sap.ui.ux3.ThingViewer(); };

/**
 * 
 * Inserts a headerContent into the aggregation named <code>headerContent</code>.
 * @param {sap.ui.ux3.ThingGroup}
 *          oHeaderContent the headerContent to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the headerContent should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the headerContent is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the headerContent is inserted at 
 *             the last position        
 * @return {sap.ui.ux3.ThingViewer} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.ThingViewer.prototype.insertHeaderContent = function(oHeaderContent,iIndex) { return new sap.ui.ux3.ThingViewer(); };

/**
 * 
 * Removes all the controls in the aggregation named <code>facetContent</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.ux3.ThingGroup[]} an array of the removed elements (might be empty)
 * @public
 * 
 */
sap.ui.ux3.ThingViewer.prototype.removeAllFacetContent = function() { return new Array(); };

/**
 * 
 * Removes all the controls in the aggregation named <code>facets</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.ux3.NavigationItem[]} an array of the removed elements (might be empty)
 * @public
 * 
 */
sap.ui.ux3.ThingViewer.prototype.removeAllFacets = function() { return new Array(); };

/**
 * 
 * Removes all the controls in the aggregation named <code>headerContent</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.ux3.ThingGroup[]} an array of the removed elements (might be empty)
 * @public
 * 
 */
sap.ui.ux3.ThingViewer.prototype.removeAllHeaderContent = function() { return new Array(); };

/**
 * 
 * Removes an facet from the aggregation named <code>facets</code>.
 * @param {int | string | sap.ui.ux3.NavigationItem} vFacet the facet to remove or its index or id
 * @return {sap.ui.ux3.NavigationItem} the removed facet or null
 * @public
 * 
 */
sap.ui.ux3.ThingViewer.prototype.removeFacet = function(vFacet) { return new sap.ui.ux3.NavigationItem(); };

/**
 * 
 * Removes an facetContent from the aggregation named <code>facetContent</code>.
 * @param {int | string | sap.ui.ux3.ThingGroup} vFacetContent the facetContent to remove or its index or id
 * @return {sap.ui.ux3.ThingGroup} the removed facetContent or null
 * @public
 * 
 */
sap.ui.ux3.ThingViewer.prototype.removeFacetContent = function(vFacetContent) { return new sap.ui.ux3.ThingGroup(); };

/**
 * 
 * Removes an headerContent from the aggregation named <code>headerContent</code>.
 * @param {int | string | sap.ui.ux3.ThingGroup} vHeaderContent the headerContent to remove or its index or id
 * @return {sap.ui.ux3.ThingGroup} the removed headerContent or null
 * @public
 * 
 */
sap.ui.ux3.ThingViewer.prototype.removeHeaderContent = function(vHeaderContent) { return new sap.ui.ux3.ThingGroup(); };

/**
 * 
 * Setter for the aggregated <code>actionBar</code>.
 * @param oActionBar {sap.ui.ux3.ActionBar}
 * @return {sap.ui.ux3.ThingViewer} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.ThingViewer.prototype.setActionBar = function(oActionBar) { return new sap.ui.ux3.ThingViewer(); };

/**
 * 
 * Setter for property <code>height</code>.
 * </p><p>
 * Default value is <code>100%</code> 
 * @param {sap.ui.core.CSSSize} sHeight  new value for property <code>height</code>
 * @return {sap.ui.ux3.ThingViewer} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.ThingViewer.prototype.setHeight = function(sHeight) { return new sap.ui.ux3.ThingViewer(); };

/**
 * 
 * Setter for property <code>icon</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {sap.ui.core.URI} sIcon  new value for property <code>icon</code>
 * @return {sap.ui.ux3.ThingViewer} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.ThingViewer.prototype.setIcon = function(sIcon) { return new sap.ui.ux3.ThingViewer(); };

/**
 * 
 * The Facet that is currently selected.
 * @param {string | sap.ui.ux3.NavigationItem} vSelectedFacet 
 *    Id of an element which becomes the new target of this <code>selectedFacet</code> association.
 *    Alternatively, an element instance may be given.
 * @return {sap.ui.ux3.ThingViewer} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.ThingViewer.prototype.setSelectedFacet = function(vSelectedFacet) { return new sap.ui.ux3.ThingViewer(); };

/**
 * 
 * Setter for property <code>subtitle</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {string} sSubtitle  new value for property <code>subtitle</code>
 * @return {sap.ui.ux3.ThingViewer} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.ThingViewer.prototype.setSubtitle = function(sSubtitle) { return new sap.ui.ux3.ThingViewer(); };

/**
 * 
 * Setter for property <code>title</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {string} sTitle  new value for property <code>title</code>
 * @return {sap.ui.ux3.ThingViewer} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.ThingViewer.prototype.setTitle = function(sTitle) { return new sap.ui.ux3.ThingViewer(); };

/**
 * 
 * Setter for property <code>type</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {string} sType  new value for property <code>type</code>
 * @return {sap.ui.ux3.ThingViewer} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.ThingViewer.prototype.setType = function(sType) { return new sap.ui.ux3.ThingViewer(); };

/**
 * 
 * Setter for property <code>width</code>.
 * </p><p>
 * Default value is <code>100%</code> 
 * @param {sap.ui.core.CSSSize} sWidth  new value for property <code>width</code>
 * @return {sap.ui.ux3.ThingViewer} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.ThingViewer.prototype.setWidth = function(sWidth) { return new sap.ui.ux3.ThingViewer(); };


// ---- sap.ui.ux3.ToolPopup --------------------------------------------------------------------------

/**
 * 
 * Constructor for a new ToolPopup.
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
 * <li>{@link #getTitle title} : string</li>
 * <li>{@link #getIcon icon} : sap.ui.core.URI</li>
 * <li>{@link #getIconHover iconHover} : sap.ui.core.URI</li>
 * <li>{@link #getIconSelected iconSelected} : sap.ui.core.URI</li>
 * <li>{@link #getModal modal} : boolean (default: false)</li>
 * <li>{@link #getInverted inverted} : boolean (default: true)</li>
 * <li>{@link #getAutoClose autoClose} : boolean (default: false)</li>
 * <li>{@link #getMaxHeight maxHeight} : sap.ui.core.CSSSize</li>
 * <li>{@link #getMaxWidth maxWidth} : sap.ui.core.CSSSize</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getButtons buttons} : sap.ui.core.Control[]</li>
 * <li>{@link #getContent content} : sap.ui.core.Control[]</li></ul>
 * </li>
 * <li>Associations
 * <ul>
 * <li>{@link #getInitialFocus initialFocus} : string | sap.ui.core.Control</li>
 * <li>{@link #getOpener opener} : string | sap.ui.core.Control</li></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link sap.ui.ux3.ToolPopup#event:open open} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.ui.ux3.ToolPopup#event:close close} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.ui.ux3.ToolPopup#event:enter enter} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.ui.ux3.ToolPopup#event:iconChanged iconChanged} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.ui.ux3.ToolPopup#event:closed closed} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
 * </li>
 * </ul> 
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * A pop up which the user can open from the Shell's tool pane. Generally, the starting point would be an icon.
 * For this pop up, buttons can be defined with any text; therefore, it has the same purpose and similar look like any common dialog box.
 * A ToolPopup can have any content. Depending on the application type and design, the structure of the texts and input fields can be for
 * example form-like.
 * @extends sap.ui.core.Control
 * @version 1.15.1-SNAPSHOT
 * @constructor   
 * @public
 * 
 */
sap.ui.ux3.ToolPopup = function(sId,mSettings) {};
/**
 * 
 * Event is fired when the pop up closes because the user pressed Escape or the ToolPopup Button in the Shell. This is called before the closing animation. 
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 */
sap.ui.ux3.ToolPopup.prototype.close = function(oControlEvent) { return null; };

/**
 * 
 * This event is fired after the ToolPopup has finished its closing animation. It is called for EVERY close, regardless of whether the user has triggered the close or whether the ToolPopup was closed via API call. 
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 */
sap.ui.ux3.ToolPopup.prototype.closed = function(oControlEvent) { return null; };

/**
 * 
 * Event is fired whenever the user clicks the Enter or the Return key inside the pop up 
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {object} oControlEvent.getParameters.originalEvent The onsapenter event, received by the pop up
 * @param {sap.ui.core.Control} oControlEvent.getParameters.originalSrcControl The control that was focused when the user pressed the Enter key (may be null)
 * @public
 */
sap.ui.ux3.ToolPopup.prototype.enter = function(oControlEvent) { return null; };

/**
 * 
 * Event is fired when one of the icon properties is modified (Note: The icon is not rendered by the ToolPopup).
 * To be used by other controls which want to update the icon in their UI. 
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 */
sap.ui.ux3.ToolPopup.prototype.iconChanged = function(oControlEvent) { return null; };

/**
 * 
 * Event is fired when the pop up opens 
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 */
sap.ui.ux3.ToolPopup.prototype.open = function(oControlEvent) { return null; };

/**
 * 
 * Adds some button <code>oButton</code> 
 * to the aggregation named <code>buttons</code>.
 * @param {sap.ui.core.Control}
 *            oButton the button to add; if empty, nothing is inserted
 * @return {sap.ui.ux3.ToolPopup} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.ToolPopup.prototype.addButton = function(oButton) { return new sap.ui.ux3.ToolPopup(); };

/**
 * 
 * Adds some content <code>oContent</code> 
 * to the aggregation named <code>content</code>.
 * @param {sap.ui.core.Control}
 *            oContent the content to add; if empty, nothing is inserted
 * @return {sap.ui.ux3.ToolPopup} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.ToolPopup.prototype.addContent = function(oContent) { return new sap.ui.ux3.ToolPopup(); };

/**
 * 
 * Attach event handler <code>fnFunction</code> to the 'close' event of this <code>sap.ui.ux3.ToolPopup</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ui.ux3.ToolPopup</code>.<br/> itself. 
 * </p><p>
 * Event is fired when the pop up closes because the user pressed Escape or the ToolPopup Button in the Shell. This is called before the closing animation. 
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener=this] Context object to call the event handler with. Defaults to this <code>sap.ui.ux3.ToolPopup</code>.<br/> itself.
 * @return {sap.ui.ux3.ToolPopup} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.ToolPopup.prototype.attachClose = function(oData,fnFunction,oListener) { return new sap.ui.ux3.ToolPopup(); };

/**
 * 
 * Attach event handler <code>fnFunction</code> to the 'closed' event of this <code>sap.ui.ux3.ToolPopup</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ui.ux3.ToolPopup</code>.<br/> itself. 
 * </p><p>
 * This event is fired after the ToolPopup has finished its closing animation. It is called for EVERY close, regardless of whether the user has triggered the close or whether the ToolPopup was closed via API call. 
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener=this] Context object to call the event handler with. Defaults to this <code>sap.ui.ux3.ToolPopup</code>.<br/> itself.
 * @return {sap.ui.ux3.ToolPopup} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.ToolPopup.prototype.attachClosed = function(oData,fnFunction,oListener) { return new sap.ui.ux3.ToolPopup(); };

/**
 * 
 * Attach event handler <code>fnFunction</code> to the 'enter' event of this <code>sap.ui.ux3.ToolPopup</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ui.ux3.ToolPopup</code>.<br/> itself. 
 * </p><p>
 * Event is fired whenever the user clicks the Enter or the Return key inside the pop up 
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener=this] Context object to call the event handler with. Defaults to this <code>sap.ui.ux3.ToolPopup</code>.<br/> itself.
 * @return {sap.ui.ux3.ToolPopup} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.ToolPopup.prototype.attachEnter = function(oData,fnFunction,oListener) { return new sap.ui.ux3.ToolPopup(); };

/**
 * 
 * Attach event handler <code>fnFunction</code> to the 'iconChanged' event of this <code>sap.ui.ux3.ToolPopup</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ui.ux3.ToolPopup</code>.<br/> itself. 
 * </p><p>
 * Event is fired when one of the icon properties is modified (Note: The icon is not rendered by the ToolPopup).
 * To be used by other controls which want to update the icon in their UI. 
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener=this] Context object to call the event handler with. Defaults to this <code>sap.ui.ux3.ToolPopup</code>.<br/> itself.
 * @return {sap.ui.ux3.ToolPopup} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.ToolPopup.prototype.attachIconChanged = function(oData,fnFunction,oListener) { return new sap.ui.ux3.ToolPopup(); };

/**
 * 
 * Attach event handler <code>fnFunction</code> to the 'open' event of this <code>sap.ui.ux3.ToolPopup</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ui.ux3.ToolPopup</code>.<br/> itself. 
 * </p><p>
 * Event is fired when the pop up opens 
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener=this] Context object to call the event handler with. Defaults to this <code>sap.ui.ux3.ToolPopup</code>.<br/> itself.
 * @return {sap.ui.ux3.ToolPopup} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.ToolPopup.prototype.attachOpen = function(oData,fnFunction,oListener) { return new sap.ui.ux3.ToolPopup(); };

/**
 * 
 * Closes the pop up. Can be called by the Shell when the pop up's button is clicked again; or by the application
 * when the interaction in the pop up has been completed or canceled.
 * @param {boolean} 
 *         bPreventRestoreFocus
 *         If set, the focus is NOT restored to the element that had the focus before the ToolPopup was opened. This makes sense when the ToolPopup is closed programmatically from a different area of the application (outside the ToolPopup) and the focus should not move aways from that place.
 * @type void
 * @public
 */
sap.ui.ux3.ToolPopup.prototype.close = function(bPreventRestoreFocus) { return null; };

/**
 * 
 * Destroys all the buttons in the aggregation 
 * named <code>buttons</code>.
 * @return {sap.ui.ux3.ToolPopup} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.ToolPopup.prototype.destroyButtons = function() { return new sap.ui.ux3.ToolPopup(); };

/**
 * 
 * Destroys all the content in the aggregation 
 * named <code>content</code>.
 * @return {sap.ui.ux3.ToolPopup} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.ToolPopup.prototype.destroyContent = function() { return new sap.ui.ux3.ToolPopup(); };

/**
 * 
 * Detach event handler <code>fnFunction</code> from the 'close' event of this <code>sap.ui.ux3.ToolPopup</code>.<br/>
 * </p><p>
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.ux3.ToolPopup} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.ToolPopup.prototype.detachClose = function(fnFunction,oListener) { return new sap.ui.ux3.ToolPopup(); };

/**
 * 
 * Detach event handler <code>fnFunction</code> from the 'closed' event of this <code>sap.ui.ux3.ToolPopup</code>.<br/>
 * </p><p>
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.ux3.ToolPopup} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.ToolPopup.prototype.detachClosed = function(fnFunction,oListener) { return new sap.ui.ux3.ToolPopup(); };

/**
 * 
 * Detach event handler <code>fnFunction</code> from the 'enter' event of this <code>sap.ui.ux3.ToolPopup</code>.<br/>
 * </p><p>
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.ux3.ToolPopup} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.ToolPopup.prototype.detachEnter = function(fnFunction,oListener) { return new sap.ui.ux3.ToolPopup(); };

/**
 * 
 * Detach event handler <code>fnFunction</code> from the 'iconChanged' event of this <code>sap.ui.ux3.ToolPopup</code>.<br/>
 * </p><p>
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.ux3.ToolPopup} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.ToolPopup.prototype.detachIconChanged = function(fnFunction,oListener) { return new sap.ui.ux3.ToolPopup(); };

/**
 * 
 * Detach event handler <code>fnFunction</code> from the 'open' event of this <code>sap.ui.ux3.ToolPopup</code>.<br/>
 * </p><p>
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.ux3.ToolPopup} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.ToolPopup.prototype.detachOpen = function(fnFunction,oListener) { return new sap.ui.ux3.ToolPopup(); };

/**
 * 
 * Creates a new subclass of class sap.ui.ux3.ToolPopup with name <code>sClassName</code> 
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
sap.ui.ux3.ToolPopup.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * 
 * Fire event close to attached listeners.
 * </p><p>
 * Listeners may prevent the default action of this event using the preventDefault-method on the event object.
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {boolean} whether to prevent the default action
 * @protected
 * 
 */
sap.ui.ux3.ToolPopup.prototype.fireClose = function(mArguments) { return false; };

/**
 * 
 * Fire event closed to attached listeners.
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.ux3.ToolPopup} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.ui.ux3.ToolPopup.prototype.fireClosed = function(mArguments) { return new sap.ui.ux3.ToolPopup(); };

/**
 * 
 * Fire event enter to attached listeners.
 * </p><p>
 * Expects following event parameters:
 * <ul>
 * <li>'originalEvent' of type <code>object</code> The onsapenter event, received by the pop up</li>
 * <li>'originalSrcControl' of type <code>sap.ui.core.Control</code> The control that was focused when the user pressed the Enter key (may be null)</li>
 * </ul>
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.ux3.ToolPopup} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.ui.ux3.ToolPopup.prototype.fireEnter = function(mArguments) { return new sap.ui.ux3.ToolPopup(); };

/**
 * 
 * Fire event iconChanged to attached listeners.
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.ux3.ToolPopup} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.ui.ux3.ToolPopup.prototype.fireIconChanged = function(mArguments) { return new sap.ui.ux3.ToolPopup(); };

/**
 * 
 * Fire event open to attached listeners.
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.ux3.ToolPopup} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.ui.ux3.ToolPopup.prototype.fireOpen = function(mArguments) { return new sap.ui.ux3.ToolPopup(); };

/**
 * 
 * Getter for property <code>autoClose</code>.
 * This property tells the ToolPopup to close the ToolPopup if the ToolPopup looses the focus. If the user e.g. clicks outside of the ToolPopup it will be closed. Please don't use "modal" and "autoclose" at the same time. In this case a warning will be promted to the console and "autoclose" won't be used.
 * </p><p>
 * Default value is <code>false</code>
 * @return {boolean} the value of property <code>autoClose</code>
 * @public
 * @since 1.13.2
 * 
 */
sap.ui.ux3.ToolPopup.prototype.getAutoClose = function() { return false; };

/**
 * 
 * Getter for aggregation <code>buttons</code>.<br/>
 * The buttons to appear in the pop up
 * @return {sap.ui.core.Control[]}
 * @public
 * 
 */
sap.ui.ux3.ToolPopup.prototype.getButtons = function() { return new Array(); };

/**
 * 
 * Getter for aggregation <code>content</code>.<br/>
 * The content of the pop up
 * @return {sap.ui.core.Control[]}
 * @public
 * 
 */
sap.ui.ux3.ToolPopup.prototype.getContent = function() { return new Array(); };

/**
 * 
 * Whether the ToolPopup is currently enabled or not.
 * </p><p>
 * Applications can't control the enabled state via a property. A ToolPopup is implicitly 
 * enabled depending on its <code>openStatey</code>. Descendant controls that honor the 
 * enabled state of their ancestors will appear disabled after the ToolPopup is closed.
 * @experimental Whether a dialog is regarded as "enabled" during the state transitions 
 * (OPENING, CLOSING) is not fully decided. Currently, it is enabled during the OPENING phase 
 * and disabled during the CLOSING phase. The only potential change would be to treat the 
 * OPENING phase as disabled as well. Applications should be prepared to receive events from
 * "enabled" controls after they called open() on the dialog until close() is called on it.
 * If the mentioned potential change should happen, the dialog will become enabled only 
 * after the transition to OPEN. Events from "enabled" children then can still only arrive 
 * between open() and close(), so applications that obey the previous rule should continue 
 * to work. Only end users or code that explicitly triggers pseudo user events would notice
 * a difference. <br>
 * A second aspect that might change is the visual behavior of the content: during the CLOSING 
 * phase it 'looks' enabled but in fact it is already disabled. This avoids unnecessary redraws 
 * for content that becomes hidden soon. Should this show to be confusing for end users, it might 
 * be changed.
 * @since: 1.13.1
 * @return {boolean} whether the ToolPopup is currently enabled or not.
 * @public
 */
sap.ui.ux3.ToolPopup.prototype.getEnabled = function() { return false; };

/**
 * 
 * Getter for property <code>icon</code>.
 * This property is relevant for Shell-use:
 * The URL to the icon displayed in the tool area which is used to open the ToolPopup. The recommended size is 32x32px, including some transparent border. Therefore, the content will cover about 20x20px.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {sap.ui.core.URI} the value of property <code>icon</code>
 * @public
 * 
 */
sap.ui.ux3.ToolPopup.prototype.getIcon = function() { return new sap.ui.core.URI(); };

/**
 * 
 * Getter for property <code>iconHover</code>.
 * This property is relevant for Shell-use:
 * The URL to the icon in hover state, displayed in the tool area which is used to open the pop up.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {sap.ui.core.URI} the value of property <code>iconHover</code>
 * @public
 * 
 */
sap.ui.ux3.ToolPopup.prototype.getIconHover = function() { return new sap.ui.core.URI(); };

/**
 * 
 * Getter for property <code>iconSelected</code>.
 * This property is relevant for Shell-use:
 * The URL to the icon in selected state displayed in the tool area which is used to open the pop up. If no selected icon is given, the hover icon is used.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {sap.ui.core.URI} the value of property <code>iconSelected</code>
 * @public
 * 
 */
sap.ui.ux3.ToolPopup.prototype.getIconSelected = function() { return new sap.ui.core.URI(); };

/**
 * 
 * Defines the control that shall get the focus when the ToolPopup is opened.
 * @return {string} Id of the element which is the current target of the <code>initialFocus</code> association, or null
 * @public
 * 
 */
sap.ui.ux3.ToolPopup.prototype.getInitialFocus = function() { return ""; };

/**
 * 
 * Getter for property <code>inverted</code>.
 * Specifies whether the ToolPopup has a dark or bright background. If set to true the background and borders will be dark. If false this stuff will be bright.
 * This property doesn't cause an effect in the HCB-theme.
 * </p><p>
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>inverted</code>
 * @public
 * @since 1.11.1
 * 
 */
sap.ui.ux3.ToolPopup.prototype.getInverted = function() { return false; };

/**
 * 
 * Getter for property <code>maxHeight</code>.
 * This property can be used to force a maximum height of the ToolPopup in pixels. If the ToolPopup content is higher than the ToolPopup, the content will be scrollable.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {sap.ui.core.CSSSize} the value of property <code>maxHeight</code>
 * @public
 * @since 1.13.2
 * 
 */
sap.ui.ux3.ToolPopup.prototype.getMaxHeight = function() { return new sap.ui.core.CSSSize(); };

/**
 * 
 * Getter for property <code>maxWidth</code>.
 * This property can be used to force a maximum width of the ToolPopup in pixels.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {sap.ui.core.CSSSize} the value of property <code>maxWidth</code>
 * @public
 * @since 1.15.0
 * 
 */
sap.ui.ux3.ToolPopup.prototype.getMaxWidth = function() { return new sap.ui.core.CSSSize(); };

/**
 * 
 * Getter for property <code>modal</code>.
 * Whether the popup is modal and blocks any user-interaction with controls in the background.
 * Changing this property while the ToolPopup is open is not allowed (and currently has noeffect)
 * Please don't use "modal" and "autoclose" at the same time. In this case a warning will be promted to the console and "autoclose" won't be used.
 * </p><p>
 * Default value is <code>false</code>
 * @return {boolean} the value of property <code>modal</code>
 * @public
 * 
 */
sap.ui.ux3.ToolPopup.prototype.getModal = function() { return false; };

/**
 * 
 * This property is relevant for stand-alone-use:
 * This association needs to be set if the ToolPopup should not be opened by/with the Shell. This association contains the instance of the control that assigns the ToolPopup's position.
 * @return {string} Id of the element which is the current target of the <code>opener</code> association, or null
 * @public
 * 
 */
sap.ui.ux3.ToolPopup.prototype.getOpener = function() { return ""; };

/**
 * 
 * Getter for property <code>title</code>.
 * The title displayed in the pop up window (optional property)
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {string} the value of property <code>title</code>
 * @public
 * 
 */
sap.ui.ux3.ToolPopup.prototype.getTitle = function() { return ""; };

/**
 * 
 * Checks for the provided <code>sap.ui.core.Control</code> in the aggregation named <code>buttons</code> 
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.core.Control}
 *            oButton the button whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * 
 */
sap.ui.ux3.ToolPopup.prototype.indexOfButton = function(oButton) { return 0; };

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
sap.ui.ux3.ToolPopup.prototype.indexOfContent = function(oContent) { return 0; };

/**
 * 
 * Inserts a button into the aggregation named <code>buttons</code>.
 * @param {sap.ui.core.Control}
 *          oButton the button to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the button should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the button is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the button is inserted at 
 *             the last position        
 * @return {sap.ui.ux3.ToolPopup} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.ToolPopup.prototype.insertButton = function(oButton,iIndex) { return new sap.ui.ux3.ToolPopup(); };

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
 * @return {sap.ui.ux3.ToolPopup} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.ToolPopup.prototype.insertContent = function(oContent,iIndex) { return new sap.ui.ux3.ToolPopup(); };

/**
 * 
 * Returns whether the pop up is currently open
 * @type boolean
 * @public
 */
sap.ui.ux3.ToolPopup.prototype.isOpen = function() { return false; };

/**
 * 
 * This opens the ToolPopup. It is checked which control wants to open the ToolPopup. The Shell was previously set as parent so the
 * corresponding parent element is used to set the correct position of the ToolPopup.
 * If another control (i.e. a button) opens the ToolPopup, the control must be previously set as 'opener' via 'setOpener' to the
 * ToolPopup. Corresponding to this opener the position of the ToolPopup will be set.
 * It's also possible to set the position above, below or left from the opener. This can be done via the possible parameters 'my' and 'at'.
 * These parameters refers to work the same way as they do of sap.ui.core.Popup.open.
 * @param {sap.ui.core.Popup.Dock} [my=sap.ui.core.Popup.Dock.CenterCenter] the ToolPopup's content reference position for docking
 * @param {sap.ui.core.Popup.Dock} [at=sap.ui.core.Popup.Dock.CenterCenter] the "of" element's reference point for docking to
 * @public
 */
sap.ui.ux3.ToolPopup.prototype.open = function(my,at) { return null; };

/**
 * 
 * Removes all the controls in the aggregation named <code>buttons</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.core.Control[]} an array of the removed elements (might be empty)
 * @public
 * 
 */
sap.ui.ux3.ToolPopup.prototype.removeAllButtons = function() { return new Array(); };

/**
 * 
 * Removes all the controls in the aggregation named <code>content</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.core.Control[]} an array of the removed elements (might be empty)
 * @public
 * 
 */
sap.ui.ux3.ToolPopup.prototype.removeAllContent = function() { return new Array(); };

/**
 * 
 * Removes an button from the aggregation named <code>buttons</code>.
 * @param {int | string | sap.ui.core.Control} vButton the button to remove or its index or id
 * @return {sap.ui.core.Control} the removed button or null
 * @public
 * 
 */
sap.ui.ux3.ToolPopup.prototype.removeButton = function(vButton) { return new sap.ui.core.Control(); };

/**
 * 
 * Removes an content from the aggregation named <code>content</code>.
 * @param {int | string | sap.ui.core.Control} vContent the content to remove or its index or id
 * @return {sap.ui.core.Control} the removed content or null
 * @public
 * 
 */
sap.ui.ux3.ToolPopup.prototype.removeContent = function(vContent) { return new sap.ui.core.Control(); };

/**
 * 
 * Setter for property <code>autoClose</code>.
 * </p><p>
 * Default value is <code>false</code> 
 * @param {boolean} bAutoClose  new value for property <code>autoClose</code>
 * @return {sap.ui.ux3.ToolPopup} <code>this</code> to allow method chaining
 * @public
 * @since 1.13.2
 * 
 */
sap.ui.ux3.ToolPopup.prototype.setAutoClose = function(bAutoClose) { return new sap.ui.ux3.ToolPopup(); };

/**
 * 
 * Setter for property <code>icon</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {sap.ui.core.URI} sIcon  new value for property <code>icon</code>
 * @return {sap.ui.ux3.ToolPopup} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.ToolPopup.prototype.setIcon = function(sIcon) { return new sap.ui.ux3.ToolPopup(); };

/**
 * 
 * Setter for property <code>iconHover</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {sap.ui.core.URI} sIconHover  new value for property <code>iconHover</code>
 * @return {sap.ui.ux3.ToolPopup} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.ToolPopup.prototype.setIconHover = function(sIconHover) { return new sap.ui.ux3.ToolPopup(); };

/**
 * 
 * Setter for property <code>iconSelected</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {sap.ui.core.URI} sIconSelected  new value for property <code>iconSelected</code>
 * @return {sap.ui.ux3.ToolPopup} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.ToolPopup.prototype.setIconSelected = function(sIconSelected) { return new sap.ui.ux3.ToolPopup(); };

/**
 * 
 * Defines the control that shall get the focus when the ToolPopup is opened.
 * @param {string | sap.ui.core.Control} vInitialFocus 
 *    Id of an element which becomes the new target of this <code>initialFocus</code> association.
 *    Alternatively, an element instance may be given.
 * @return {sap.ui.ux3.ToolPopup} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.ToolPopup.prototype.setInitialFocus = function(vInitialFocus) { return new sap.ui.ux3.ToolPopup(); };

/**
 * 
 * Setter for property <code>inverted</code>.
 * </p><p>
 * Default value is <code>true</code> 
 * @param {boolean} bInverted  new value for property <code>inverted</code>
 * @return {sap.ui.ux3.ToolPopup} <code>this</code> to allow method chaining
 * @public
 * @since 1.11.1
 * 
 */
sap.ui.ux3.ToolPopup.prototype.setInverted = function(bInverted) { return new sap.ui.ux3.ToolPopup(); };

/**
 * 
 * Setter for property <code>maxHeight</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {sap.ui.core.CSSSize} sMaxHeight  new value for property <code>maxHeight</code>
 * @return {sap.ui.ux3.ToolPopup} <code>this</code> to allow method chaining
 * @public
 * @since 1.13.2
 * 
 */
sap.ui.ux3.ToolPopup.prototype.setMaxHeight = function(sMaxHeight) { return new sap.ui.ux3.ToolPopup(); };

/**
 * 
 * Setter for property <code>maxWidth</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {sap.ui.core.CSSSize} sMaxWidth  new value for property <code>maxWidth</code>
 * @return {sap.ui.ux3.ToolPopup} <code>this</code> to allow method chaining
 * @public
 * @since 1.15.0
 * 
 */
sap.ui.ux3.ToolPopup.prototype.setMaxWidth = function(sMaxWidth) { return new sap.ui.ux3.ToolPopup(); };

/**
 * 
 * Setter for property <code>modal</code>.
 * </p><p>
 * Default value is <code>false</code> 
 * @param {boolean} bModal  new value for property <code>modal</code>
 * @return {sap.ui.ux3.ToolPopup} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.ToolPopup.prototype.setModal = function(bModal) { return new sap.ui.ux3.ToolPopup(); };

/**
 * 
 * This property is relevant for stand-alone-use:
 * This association needs to be set if the ToolPopup should not be opened by/with the Shell. This association contains the instance of the control that assigns the ToolPopup's position.
 * @param {string | sap.ui.core.Control} vOpener 
 *    Id of an element which becomes the new target of this <code>opener</code> association.
 *    Alternatively, an element instance may be given.
 * @return {sap.ui.ux3.ToolPopup} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.ToolPopup.prototype.setOpener = function(vOpener) { return new sap.ui.ux3.ToolPopup(); };

/**
 * 
 * Sets the position of the pop up, the same parameters as for sap.ui.core.Popup can be used.
 * @type void
 * @public
 */
sap.ui.ux3.ToolPopup.prototype.setPosition = function() { return null; };

/**
 * 
 * Setter for property <code>title</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {string} sTitle  new value for property <code>title</code>
 * @return {sap.ui.ux3.ToolPopup} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.ToolPopup.prototype.setTitle = function(sTitle) { return new sap.ui.ux3.ToolPopup(); };


// ---- sap.ui.ux3.VisibleItemCountMode --------------------------------------------------------------------------

// dummy function to make Eclipse aware of namespace
sap.ui.ux3.VisibleItemCountMode.toString = function() { return ""; };
// ---- static fields of namespaces ---------------------------------------------------------------------

// ---- sap.ui.ux3 --------------------------------------------------------------------------

/**
 * 
 * Experimental implementation of visual Ux3 Shell personalization / branding.
 * </p><p>
 * DO NOT USE PRODUCTIVELY!!!
 * </p><p>
 * </p><p>
 * Being completely non-generic as of now, this is supposed to facilitate discussions with Ux
 * about the personalization capabilities. Once that concept is more final, we can go for a cleaner implementation,
 * considering the number of configurable properties etc.
 * @param oShell
 * @public
 * @experimental Since 1.0. The Shell-features Personalization, Color Picker and “Inspect”-Tool are only experimental work and might change or disappear in future versions.
 * 
 * @memberOf sap.ui.ux3
 */
sap.ui.ux3.ShellPersonalization = null;


// ---- sap.ui.ux3.ActionBarSocialActions --------------------------------------------------------------------------

/**
 * 
 * Standards action 'Mark as Favorite' 
 * @public
 * @memberOf sap.ui.ux3.ActionBarSocialActions
 */
sap.ui.ux3.ActionBarSocialActions.Favorite = null;

/**
 * 
 * Standard action 'Mark for Follow up' 
 * @public
 * @memberOf sap.ui.ux3.ActionBarSocialActions
 */
sap.ui.ux3.ActionBarSocialActions.Flag = null;

/**
 * 
 * Standard action 'Follow/Unfollow' 
 * @public
 * @memberOf sap.ui.ux3.ActionBarSocialActions
 */
sap.ui.ux3.ActionBarSocialActions.Follow = null;

/**
 * 
 * Standard action 'Open Thing Inspector' 
 * @public
 * @memberOf sap.ui.ux3.ActionBarSocialActions
 */
sap.ui.ux3.ActionBarSocialActions.Open = null;

/**
 * 
 * Standard action 'Create an update' (Feed) 
 * @public
 * @memberOf sap.ui.ux3.ActionBarSocialActions
 */
sap.ui.ux3.ActionBarSocialActions.Update = null;


// ---- sap.ui.ux3.ExactOrder --------------------------------------------------------------------------

/**
 * 
 * The order of the sub lists is defined by order of the defined sub attributes. 
 * @public
 * @memberOf sap.ui.ux3.ExactOrder
 */
sap.ui.ux3.ExactOrder.Fixed = null;

/**
 * 
 * The order of the sub lists is defined by the selection order of the user. 
 * @public
 * @memberOf sap.ui.ux3.ExactOrder
 */
sap.ui.ux3.ExactOrder.Select = null;


// ---- sap.ui.ux3.FeederType --------------------------------------------------------------------------

/**
 * 
 * comment feeder (small) 
 * @public
 * @memberOf sap.ui.ux3.FeederType
 */
sap.ui.ux3.FeederType.Comment = null;

/**
 * 
 * large Feeder 
 * @public
 * @memberOf sap.ui.ux3.FeederType
 */
sap.ui.ux3.FeederType.Large = null;

/**
 * 
 * medium feeder 
 * @public
 * @memberOf sap.ui.ux3.FeederType
 */
sap.ui.ux3.FeederType.Medium = null;


// ---- sap.ui.ux3.FollowActionState --------------------------------------------------------------------------

/**
 * 
 * default state 
 * @public
 * @memberOf sap.ui.ux3.FollowActionState
 */
sap.ui.ux3.FollowActionState.Default = null;

/**
 * 
 * follow state 
 * @public
 * @memberOf sap.ui.ux3.FollowActionState
 */
sap.ui.ux3.FollowActionState.Follow = null;

/**
 * 
 * hold state 
 * @public
 * @memberOf sap.ui.ux3.FollowActionState
 */
sap.ui.ux3.FollowActionState.Hold = null;


// ---- sap.ui.ux3.NotificationBarStatus --------------------------------------------------------------------------

/**
 * 
 * Default height for the bar 
 * @public
 * @memberOf sap.ui.ux3.NotificationBarStatus
 */
sap.ui.ux3.NotificationBarStatus.Default = null;

/**
 * 
 * Bar should be maximized 
 * @public
 * @memberOf sap.ui.ux3.NotificationBarStatus
 */
sap.ui.ux3.NotificationBarStatus.Max = null;

/**
 * 
 * Bar should be minimized 
 * @public
 * @memberOf sap.ui.ux3.NotificationBarStatus
 */
sap.ui.ux3.NotificationBarStatus.Min = null;

/**
 * 
 * Bar should not be visible 
 * @public
 * @memberOf sap.ui.ux3.NotificationBarStatus
 */
sap.ui.ux3.NotificationBarStatus.None = null;


// ---- sap.ui.ux3.ShellDesignType --------------------------------------------------------------------------

/**
 * 
 * </p><p>
 * An even lighter design. It borrows most of its properties from the Light
 * design and just changes a few details like the header colors in order to
 * have a blue design within gold reflection.
 * @public
 * @memberOf sap.ui.ux3.ShellDesignType
 */
sap.ui.ux3.ShellDesignType.Crystal = null;

/**
 * 
 * </p><p>
 * A lighter design. Should be used in combination with the Standard header
 * type.
 * @public
 * @memberOf sap.ui.ux3.ShellDesignType
 */
sap.ui.ux3.ShellDesignType.Light = null;

/**
 * 
 * The standard Shell design (dark). 
 * @public
 * @memberOf sap.ui.ux3.ShellDesignType
 */
sap.ui.ux3.ShellDesignType.Standard = null;


// ---- sap.ui.ux3.ShellHeaderType --------------------------------------------------------------------------

/**
 * 
 * Only the branding area is visible. Top-level navigation bar, header items, title and icon are not shown. 
 * @public
 * @memberOf sap.ui.ux3.ShellHeaderType
 */
sap.ui.ux3.ShellHeaderType.BrandOnly = null;

/**
 * 
 * Like the Standard Area but without top-level navigation bar. 
 * @public
 * @memberOf sap.ui.ux3.ShellHeaderType
 */
sap.ui.ux3.ShellHeaderType.NoNavigation = null;

/**
 * 
 * Like the Standard Area but with a leaner top-level navigation bar. 
 * @public
 * @memberOf sap.ui.ux3.ShellHeaderType
 */
sap.ui.ux3.ShellHeaderType.SlimNavigation = null;

/**
 * 
 * The standard Shell header. 
 * @public
 * @memberOf sap.ui.ux3.ShellHeaderType
 */
sap.ui.ux3.ShellHeaderType.Standard = null;


// ---- sap.ui.ux3.VisibleItemCountMode --------------------------------------------------------------------------

/**
 * 
 * The FacetFilter automatically fills the height of the surrounding container. The visibleItemCount property is automatically changed accordingly. 
 * @public
 * @memberOf sap.ui.ux3.VisibleItemCountMode
 */
sap.ui.ux3.VisibleItemCountMode.Auto = null;

/**
 * 
 * The FacetFilter always has as many items in the FacetFilterList as defined in the visibleItemCount property. 
 * @public
 * @memberOf sap.ui.ux3.VisibleItemCountMode
 */
sap.ui.ux3.VisibleItemCountMode.Fixed = null;

