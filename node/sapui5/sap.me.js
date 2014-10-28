
// ---- _global_ --------------------------------------------------------------------------


// ---- sap --------------------------------------------------------------------------


// ---- sap.me --------------------------------------------------------------------------


// ---- sap.me.Calendar --------------------------------------------------------------------------

/**
 * 
 * Constructor for a new Calendar.
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
 * <li>{@link #getHideNavControls hideNavControls} : boolean (default: false)</li>
 * <li>{@link #getHideMonthTitles hideMonthTitles} : boolean (default: false)</li>
 * <li>{@link #getMonthsPerRow monthsPerRow} : int (default: 0)</li>
 * <li>{@link #getDayWidth dayWidth} : int (default: 45)</li>
 * <li>{@link #getDayHeight dayHeight} : int (default: 50)</li>
 * <li>{@link #getWeeksPerRow weeksPerRow} : int (default: 1)</li>
 * <li>{@link #getSingleRow singleRow} : boolean</li>
 * <li>{@link #getMonthsToDisplay monthsToDisplay} : int (default: 1)</li>
 * <li>{@link #getCurrentDate currentDate} : string</li>
 * <li>{@link #getEnableMultiselection enableMultiselection} : boolean (default: false)</li>
 * <li>{@link #getFirstDayOffset firstDayOffset} : int (default: 0)</li>
 * <li>{@link #getDisabledWeekDays disabledWeekDays} : any</li>
 * <li>{@link #getDisabledDates disabledDates} : any</li>
 * <li>{@link #getSwipeToNavigate swipeToNavigate} : boolean (default: false)</li>
 * <li>{@link #getDesign design} : sap.me.CalendarDesign (default: sap.me.CalendarDesign.Approval)</li>
 * <li>{@link #getWidth width} : sap.ui.core.CSSSize (default: '100%')</li>
 * <li>{@link #getDays days} : any</li>
 * <li>{@link #getMonths months} : any</li></ul>
 * </li>
 * <li>Aggregations
 * <ul></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link sap.me.Calendar#event:tapOnDate tapOnDate} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.me.Calendar#event:changeCurrentDate changeCurrentDate} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.me.Calendar#event:changeRange changeRange} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
 * </li>
 * </ul> 
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * This is the Calendar control
 * @extends sap.ui.core.Control
 * @version 1.15.1-SNAPSHOT
 * @constructor   
 * @public
 * @experimental Since version 1.12. 
 * API is not yet finished and might change completely
 * 
 */
sap.me.Calendar = function(sId,mSettings) {};
/**
 * 
 * event fired when tap to next or previous button and currentDate is updated 
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {string} oControlEvent.getParameters.currentDate new date
 * @public
 */
sap.me.Calendar.prototype.changeCurrentDate = function(oControlEvent) { return null; };

/**
 * 
 * when the range of selected dates changes 
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {string} oControlEvent.getParameters.fromDate from date
 * @param {string} oControlEvent.getParameters.toDate to date
 * @public
 */
sap.me.Calendar.prototype.changeRange = function(oControlEvent) { return null; };

/**
 * 
 * event fired when a date is tapped 
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {string} oControlEvent.getParameters.date date tapped
 * @param {boolean} oControlEvent.getParameters.didSelect if day was selected
 * @public
 */
sap.me.Calendar.prototype.tapOnDate = function(oControlEvent) { return null; };

/**
 * 
 * Attach event handler <code>fnFunction</code> to the 'changeCurrentDate' event of this <code>sap.me.Calendar</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.me.Calendar</code>.<br/> itself. 
 * </p><p>
 * event fired when tap to next or previous button and currentDate is updated 
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener=this] Context object to call the event handler with. Defaults to this <code>sap.me.Calendar</code>.<br/> itself.
 * @return {sap.me.Calendar} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.me.Calendar.prototype.attachChangeCurrentDate = function(oData,fnFunction,oListener) { return new sap.me.Calendar(); };

/**
 * 
 * Attach event handler <code>fnFunction</code> to the 'changeRange' event of this <code>sap.me.Calendar</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.me.Calendar</code>.<br/> itself. 
 * </p><p>
 * when the range of selected dates changes 
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener=this] Context object to call the event handler with. Defaults to this <code>sap.me.Calendar</code>.<br/> itself.
 * @return {sap.me.Calendar} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.me.Calendar.prototype.attachChangeRange = function(oData,fnFunction,oListener) { return new sap.me.Calendar(); };

/**
 * 
 * Attach event handler <code>fnFunction</code> to the 'tapOnDate' event of this <code>sap.me.Calendar</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.me.Calendar</code>.<br/> itself. 
 * </p><p>
 * event fired when a date is tapped 
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener=this] Context object to call the event handler with. Defaults to this <code>sap.me.Calendar</code>.<br/> itself.
 * @return {sap.me.Calendar} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.me.Calendar.prototype.attachTapOnDate = function(oData,fnFunction,oListener) { return new sap.me.Calendar(); };

/**
 * 
 * Detach event handler <code>fnFunction</code> from the 'changeCurrentDate' event of this <code>sap.me.Calendar</code>.<br/>
 * </p><p>
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.me.Calendar} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.me.Calendar.prototype.detachChangeCurrentDate = function(fnFunction,oListener) { return new sap.me.Calendar(); };

/**
 * 
 * Detach event handler <code>fnFunction</code> from the 'changeRange' event of this <code>sap.me.Calendar</code>.<br/>
 * </p><p>
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.me.Calendar} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.me.Calendar.prototype.detachChangeRange = function(fnFunction,oListener) { return new sap.me.Calendar(); };

/**
 * 
 * Detach event handler <code>fnFunction</code> from the 'tapOnDate' event of this <code>sap.me.Calendar</code>.<br/>
 * </p><p>
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.me.Calendar} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.me.Calendar.prototype.detachTapOnDate = function(fnFunction,oListener) { return new sap.me.Calendar(); };

/**
 * 
 * Creates a new subclass of class sap.me.Calendar with name <code>sClassName</code> 
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
sap.me.Calendar.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * 
 * Fire event changeCurrentDate to attached listeners.
 * </p><p>
 * Expects following event parameters:
 * <ul>
 * <li>'currentDate' of type <code>string</code> new date</li>
 * </ul>
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.me.Calendar} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.me.Calendar.prototype.fireChangeCurrentDate = function(mArguments) { return new sap.me.Calendar(); };

/**
 * 
 * Fire event changeRange to attached listeners.
 * </p><p>
 * Expects following event parameters:
 * <ul>
 * <li>'fromDate' of type <code>string</code> from date</li>
 * <li>'toDate' of type <code>string</code> to date</li>
 * </ul>
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.me.Calendar} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.me.Calendar.prototype.fireChangeRange = function(mArguments) { return new sap.me.Calendar(); };

/**
 * 
 * Fire event tapOnDate to attached listeners.
 * </p><p>
 * Expects following event parameters:
 * <ul>
 * <li>'date' of type <code>string</code> date tapped</li>
 * <li>'didSelect' of type <code>boolean</code> if day was selected</li>
 * </ul>
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.me.Calendar} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.me.Calendar.prototype.fireTapOnDate = function(mArguments) { return new sap.me.Calendar(); };

/**
 * 
 * Getter for property <code>currentDate</code>.
 * the center date where the month/week will be build around
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {string} the value of property <code>currentDate</code>
 * @public
 * 
 */
sap.me.Calendar.prototype.getCurrentDate = function() { return ""; };

/**
 * 
 * Getter for property <code>dayHeight</code>.
 * the height of a day
 * </p><p>
 * Default value is <code>50</code>
 * @return {int} the value of property <code>dayHeight</code>
 * @public
 * 
 */
sap.me.Calendar.prototype.getDayHeight = function() { return 0; };

/**
 * 
 * Getter for property <code>days</code>.
 * Array of day names, default value is sap.m.getLocaleData().getDays("abbreviated")
 * Check sap.ui.core.LocaleData documentation for more info.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {any} the value of property <code>days</code>
 * @public
 * 
 */
sap.me.Calendar.prototype.getDays = function() { return null; };

/**
 * 
 * Getter for property <code>dayWidth</code>.
 * the width of a day
 * </p><p>
 * Default value is <code>45</code>
 * @return {int} the value of property <code>dayWidth</code>
 * @public
 * 
 */
sap.me.Calendar.prototype.getDayWidth = function() { return 0; };

/**
 * 
 * Getter for property <code>design</code>.
 * Indicates the design of the calendar (mainly colors)
 * </p><p>
 * Default value is <code>sap.me.CalendarDesign.Approval</code>
 * @return {sap.me.CalendarDesign} the value of property <code>design</code>
 * @public
 * 
 */
sap.me.Calendar.prototype.getDesign = function() { return new sap.me.CalendarDesign(); };

/**
 * 
 * Getter for property <code>disabledDates</code>.
 * Array of specific dates (strings or Date objects) that will be disabled/non interactive
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {any} the value of property <code>disabledDates</code>
 * @public
 * 
 */
sap.me.Calendar.prototype.getDisabledDates = function() { return null; };

/**
 * 
 * Getter for property <code>disabledWeekDays</code>.
 * Array of weekDays (as integers where 0=Sunday, 1=Monday etc) to be disabled. Interaction will be disabled for these week days.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {any} the value of property <code>disabledWeekDays</code>
 * @public
 * 
 */
sap.me.Calendar.prototype.getDisabledWeekDays = function() { return null; };

/**
 * 
 * Getter for property <code>enableMultiselection</code>.
 * to enable multiselection feature
 * </p><p>
 * Default value is <code>false</code>
 * @return {boolean} the value of property <code>enableMultiselection</code>
 * @public
 * 
 */
sap.me.Calendar.prototype.getEnableMultiselection = function() { return false; };

/**
 * 
 * Getter for property <code>firstDayOffset</code>.
 * to offset the first day of the week (0 = sunday)
 * </p><p>
 * Default value is <code>0</code>
 * @return {int} the value of property <code>firstDayOffset</code>
 * @public
 * 
 */
sap.me.Calendar.prototype.getFirstDayOffset = function() { return 0; };

/**
 * 
 * Getter for property <code>hideMonthTitles</code>.
 * hides the area of month titles
 * </p><p>
 * Default value is <code>false</code>
 * @return {boolean} the value of property <code>hideMonthTitles</code>
 * @public
 * 
 */
sap.me.Calendar.prototype.getHideMonthTitles = function() { return false; };

/**
 * 
 * Getter for property <code>hideNavControls</code>.
 * hides the area of navigation controls
 * </p><p>
 * Default value is <code>false</code>
 * @return {boolean} the value of property <code>hideNavControls</code>
 * @public
 * 
 */
sap.me.Calendar.prototype.getHideNavControls = function() { return false; };

/**
 * 
 * Getter for property <code>months</code>.
 * Array of month names, default value is sap.m.getLocaleData().getMonths("abbreviated")
 * Check sap.ui.core.LocaleData documentation for more info.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {any} the value of property <code>months</code>
 * @public
 * 
 */
sap.me.Calendar.prototype.getMonths = function() { return null; };

/**
 * 
 * Getter for property <code>monthsPerRow</code>.
 * months to display in a row. This sets the width of the whole control in order to contain the desired number of months per row
 * </p><p>
 * Default value is <code>0</code>
 * @return {int} the value of property <code>monthsPerRow</code>
 * @public
 * 
 */
sap.me.Calendar.prototype.getMonthsPerRow = function() { return 0; };

/**
 * 
 * Getter for property <code>monthsToDisplay</code>.
 * number of months in a row.
 * </p><p>
 * Default value is <code>1</code>
 * @return {int} the value of property <code>monthsToDisplay</code>
 * @public
 * 
 */
sap.me.Calendar.prototype.getMonthsToDisplay = function() { return 0; };

/**
 * 
 * returns an array of the currently selected dates (dates are strings formatted as Date.toDateString())
 * @type any
 * @public
 */
sap.me.Calendar.prototype.getSelectedDates = function() { return null; };

/**
 * 
 * Getter for property <code>singleRow</code>.
 * boolean that sets the view to week mode or month mode
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {boolean} the value of property <code>singleRow</code>
 * @public
 * 
 */
sap.me.Calendar.prototype.getSingleRow = function() { return false; };

/**
 * 
 * Getter for property <code>swipeToNavigate</code>.
 * When enabled, swipe gestures will navigate and not select
 * </p><p>
 * Default value is <code>false</code>
 * @return {boolean} the value of property <code>swipeToNavigate</code>
 * @public
 * 
 */
sap.me.Calendar.prototype.getSwipeToNavigate = function() { return false; };

/**
 * 
 * Getter for property <code>visible</code>.
 * visibility of the control
 * </p><p>
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>visible</code>
 * @public
 * 
 */
sap.me.Calendar.prototype.getVisible = function() { return false; };

/**
 * 
 * Getter for property <code>weeksPerRow</code>.
 * weeks to display in a row
 * </p><p>
 * Default value is <code>1</code>
 * @return {int} the value of property <code>weeksPerRow</code>
 * @public
 * 
 */
sap.me.Calendar.prototype.getWeeksPerRow = function() { return 0; };

/**
 * 
 * Getter for property <code>width</code>.
 * The width of the calendar
 * </p><p>
 * Default value is <code>100%</code>
 * @return {sap.ui.core.CSSSize} the value of property <code>width</code>
 * @public
 * 
 */
sap.me.Calendar.prototype.getWidth = function() { return new sap.ui.core.CSSSize(); };

/**
 * 
 * Setter for property <code>currentDate</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {string} sCurrentDate  new value for property <code>currentDate</code>
 * @return {sap.me.Calendar} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.me.Calendar.prototype.setCurrentDate = function(sCurrentDate) { return new sap.me.Calendar(); };

/**
 * 
 * Setter for property <code>dayHeight</code>.
 * </p><p>
 * Default value is <code>50</code> 
 * @param {int} iDayHeight  new value for property <code>dayHeight</code>
 * @return {sap.me.Calendar} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.me.Calendar.prototype.setDayHeight = function(iDayHeight) { return new sap.me.Calendar(); };

/**
 * 
 * Setter for property <code>days</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {any} oDays  new value for property <code>days</code>
 * @return {sap.me.Calendar} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.me.Calendar.prototype.setDays = function(oDays) { return new sap.me.Calendar(); };

/**
 * 
 * Setter for property <code>dayWidth</code>.
 * </p><p>
 * Default value is <code>45</code> 
 * @param {int} iDayWidth  new value for property <code>dayWidth</code>
 * @return {sap.me.Calendar} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.me.Calendar.prototype.setDayWidth = function(iDayWidth) { return new sap.me.Calendar(); };

/**
 * 
 * Setter for property <code>design</code>.
 * </p><p>
 * Default value is <code>sap.me.CalendarDesign.Approval</code> 
 * @param {sap.me.CalendarDesign} oDesign  new value for property <code>design</code>
 * @return {sap.me.Calendar} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.me.Calendar.prototype.setDesign = function(oDesign) { return new sap.me.Calendar(); };

/**
 * 
 * Setter for property <code>disabledDates</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {any} oDisabledDates  new value for property <code>disabledDates</code>
 * @return {sap.me.Calendar} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.me.Calendar.prototype.setDisabledDates = function(oDisabledDates) { return new sap.me.Calendar(); };

/**
 * 
 * Setter for property <code>disabledWeekDays</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {any} oDisabledWeekDays  new value for property <code>disabledWeekDays</code>
 * @return {sap.me.Calendar} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.me.Calendar.prototype.setDisabledWeekDays = function(oDisabledWeekDays) { return new sap.me.Calendar(); };

/**
 * 
 * Setter for property <code>enableMultiselection</code>.
 * </p><p>
 * Default value is <code>false</code> 
 * @param {boolean} bEnableMultiselection  new value for property <code>enableMultiselection</code>
 * @return {sap.me.Calendar} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.me.Calendar.prototype.setEnableMultiselection = function(bEnableMultiselection) { return new sap.me.Calendar(); };

/**
 * 
 * Setter for property <code>firstDayOffset</code>.
 * </p><p>
 * Default value is <code>0</code> 
 * @param {int} iFirstDayOffset  new value for property <code>firstDayOffset</code>
 * @return {sap.me.Calendar} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.me.Calendar.prototype.setFirstDayOffset = function(iFirstDayOffset) { return new sap.me.Calendar(); };

/**
 * 
 * Setter for property <code>hideMonthTitles</code>.
 * </p><p>
 * Default value is <code>false</code> 
 * @param {boolean} bHideMonthTitles  new value for property <code>hideMonthTitles</code>
 * @return {sap.me.Calendar} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.me.Calendar.prototype.setHideMonthTitles = function(bHideMonthTitles) { return new sap.me.Calendar(); };

/**
 * 
 * Setter for property <code>hideNavControls</code>.
 * </p><p>
 * Default value is <code>false</code> 
 * @param {boolean} bHideNavControls  new value for property <code>hideNavControls</code>
 * @return {sap.me.Calendar} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.me.Calendar.prototype.setHideNavControls = function(bHideNavControls) { return new sap.me.Calendar(); };

/**
 * 
 * Setter for property <code>months</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {any} oMonths  new value for property <code>months</code>
 * @return {sap.me.Calendar} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.me.Calendar.prototype.setMonths = function(oMonths) { return new sap.me.Calendar(); };

/**
 * 
 * Setter for property <code>monthsPerRow</code>.
 * </p><p>
 * Default value is <code>0</code> 
 * @param {int} iMonthsPerRow  new value for property <code>monthsPerRow</code>
 * @return {sap.me.Calendar} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.me.Calendar.prototype.setMonthsPerRow = function(iMonthsPerRow) { return new sap.me.Calendar(); };

/**
 * 
 * Setter for property <code>monthsToDisplay</code>.
 * </p><p>
 * Default value is <code>1</code> 
 * @param {int} iMonthsToDisplay  new value for property <code>monthsToDisplay</code>
 * @return {sap.me.Calendar} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.me.Calendar.prototype.setMonthsToDisplay = function(iMonthsToDisplay) { return new sap.me.Calendar(); };

/**
 * 
 * Setter for property <code>singleRow</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {boolean} bSingleRow  new value for property <code>singleRow</code>
 * @return {sap.me.Calendar} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.me.Calendar.prototype.setSingleRow = function(bSingleRow) { return new sap.me.Calendar(); };

/**
 * 
 * Setter for property <code>swipeToNavigate</code>.
 * </p><p>
 * Default value is <code>false</code> 
 * @param {boolean} bSwipeToNavigate  new value for property <code>swipeToNavigate</code>
 * @return {sap.me.Calendar} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.me.Calendar.prototype.setSwipeToNavigate = function(bSwipeToNavigate) { return new sap.me.Calendar(); };

/**
 * 
 * Setter for property <code>visible</code>.
 * </p><p>
 * Default value is <code>true</code> 
 * @param {boolean} bVisible  new value for property <code>visible</code>
 * @return {sap.me.Calendar} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.me.Calendar.prototype.setVisible = function(bVisible) { return new sap.me.Calendar(); };

/**
 * 
 * Setter for property <code>weeksPerRow</code>.
 * </p><p>
 * Default value is <code>1</code> 
 * @param {int} iWeeksPerRow  new value for property <code>weeksPerRow</code>
 * @return {sap.me.Calendar} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.me.Calendar.prototype.setWeeksPerRow = function(iWeeksPerRow) { return new sap.me.Calendar(); };

/**
 * 
 * Setter for property <code>width</code>.
 * </p><p>
 * Default value is <code>100%</code> 
 * @param {sap.ui.core.CSSSize} sWidth  new value for property <code>width</code>
 * @return {sap.me.Calendar} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.me.Calendar.prototype.setWidth = function(sWidth) { return new sap.me.Calendar(); };

/**
 * 
 * it toggles the selection of the dates within the passed range to selected/unselected
 * @param {any} 
 *         oODateStart
 *         starting date of the range. It can be Strings or Date objects.
 * @param {any} 
 *         oODateEnd
 *         ending date of the range. It can be Strings or Date objects.
 * @param {boolean} 
 *         bBSelected
 *         selected/unselected. Optional, if omitted it inverts each date's current state
 * @type void
 * @public
 */
sap.me.Calendar.prototype.toggleDatesRangeSelection = function(oODateStart,oODateEnd,bBSelected) { return null; };

/**
 * 
 * it toggles the passed dates to selected/unselected
 * @param {any} 
 *         oADates
 *         Array of the dates to be toggled. they can be Strings or Date objects.
 * @param {boolean} 
 *         bBSelect
 *         select/unselect. Optional, if omitted it inverts each date's current state
 * @type void
 * @public
 */
sap.me.Calendar.prototype.toggleDatesSelection = function(oADates,bBSelect) { return null; };

/**
 * 
 * Change the type of the given dates
 * @param {any} 
 *         oADates
 *         An array of dates in string representation
 * @param {sap.me.CalendarEventType} 
 *         oSType
 *         The type of event
 * @param {boolean} 
 *         bBAdd
 *         Add/remove the type, if ommited it will toggle
 * @type void
 * @public
 */
sap.me.Calendar.prototype.toggleDatesType = function(oADates,oSType,bBAdd) { return null; };

/**
 * 
 * unselect all the dates
 * @type void
 * @public
 */
sap.me.Calendar.prototype.unselectAllDates = function() { return null; };


// ---- sap.me.CalendarDesign --------------------------------------------------------------------------

// dummy function to make Eclipse aware of namespace
sap.me.CalendarDesign.toString = function() { return ""; };

// ---- sap.me.CalendarEventType --------------------------------------------------------------------------

// dummy function to make Eclipse aware of namespace
sap.me.CalendarEventType.toString = function() { return ""; };

// ---- sap.me.CalendarLegend --------------------------------------------------------------------------

/**
 * 
 * Constructor for a new CalendarLegend.
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
 * <li>{@link #getLegendForType00 legendForType00} : string</li>
 * <li>{@link #getLegendForType01 legendForType01} : string</li>
 * <li>{@link #getLegendForType04 legendForType04} : string</li>
 * <li>{@link #getLegendForType06 legendForType06} : string</li>
 * <li>{@link #getLegendForType07 legendForType07} : string</li>
 * <li>{@link #getLegendForToday legendForToday} : string</li>
 * <li>{@link #getLegendForSelected legendForSelected} : string</li>
 * <li>{@link #getLegendForSelected00 legendForSelected00} : string</li>
 * <li>{@link #getLegendForNormal legendForNormal} : string</li>
 * <li>{@link #getExpandable expandable} : boolean (default: true)</li>
 * <li>{@link #getExpanded expanded} : boolean (default: true)</li>
 * <li>{@link #getWidth width} : sap.ui.core.CSSSize (default: 'auto')</li>
 * <li>{@link #getLegendWidth legendWidth} : sap.ui.core.CSSSize (default: '12.5rem')</li>
 * <li>{@link #getVisible visible} : boolean (default: true)</li>
 * <li>{@link #getDesign design} : sap.me.CalendarDesign (default: sap.me.CalendarDesign.Approval)</li></ul>
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
 * Legend for the calendar control
 * @extends sap.ui.core.Control
 * @version 1.15.1-SNAPSHOT
 * @constructor   
 * @public
 * @experimental Since version 1.12. 
 * API is not yet finished and might change completely
 * 
 */
sap.me.CalendarLegend = function(sId,mSettings) {};
/**
 * 
 * Creates a new subclass of class sap.me.CalendarLegend with name <code>sClassName</code> 
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
sap.me.CalendarLegend.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * 
 * Getter for property <code>design</code>.
 * design name for the legend
 * </p><p>
 * Default value is <code>sap.me.CalendarDesign.Approval</code>
 * @return {sap.me.CalendarDesign} the value of property <code>design</code>
 * @public
 * 
 */
sap.me.CalendarLegend.prototype.getDesign = function() { return new sap.me.CalendarDesign(); };

/**
 * 
 * Getter for property <code>expandable</code>.
 * Indicates if the legend can be collapsed and expanded
 * </p><p>
 * </p><p>
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>expandable</code>
 * @public
 * 
 */
sap.me.CalendarLegend.prototype.getExpandable = function() { return false; };

/**
 * 
 * Getter for property <code>expanded</code>.
 * Indicates if the legend is expanded or not
 * </p><p>
 * </p><p>
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>expanded</code>
 * @public
 * 
 */
sap.me.CalendarLegend.prototype.getExpanded = function() { return false; };

/**
 * 
 * Getter for property <code>legendForNormal</code>.
 * legend for normal
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {string} the value of property <code>legendForNormal</code>
 * @public
 * 
 */
sap.me.CalendarLegend.prototype.getLegendForNormal = function() { return ""; };

/**
 * 
 * Getter for property <code>legendForSelected</code>.
 * legend for selected
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {string} the value of property <code>legendForSelected</code>
 * @public
 * 
 */
sap.me.CalendarLegend.prototype.getLegendForSelected = function() { return ""; };

/**
 * 
 * Getter for property <code>legendForSelected00</code>.
 * legend for selected 00
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {string} the value of property <code>legendForSelected00</code>
 * @public
 * 
 */
sap.me.CalendarLegend.prototype.getLegendForSelected00 = function() { return ""; };

/**
 * 
 * Getter for property <code>legendForToday</code>.
 * legend for today
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {string} the value of property <code>legendForToday</code>
 * @public
 * 
 */
sap.me.CalendarLegend.prototype.getLegendForToday = function() { return ""; };

/**
 * 
 * Getter for property <code>legendForType00</code>.
 * legend for type 00
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {string} the value of property <code>legendForType00</code>
 * @public
 * 
 */
sap.me.CalendarLegend.prototype.getLegendForType00 = function() { return ""; };

/**
 * 
 * Getter for property <code>legendForType01</code>.
 * legend for type 01
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {string} the value of property <code>legendForType01</code>
 * @public
 * 
 */
sap.me.CalendarLegend.prototype.getLegendForType01 = function() { return ""; };

/**
 * 
 * Getter for property <code>legendForType04</code>.
 * legend for type 04
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {string} the value of property <code>legendForType04</code>
 * @public
 * 
 */
sap.me.CalendarLegend.prototype.getLegendForType04 = function() { return ""; };

/**
 * 
 * Getter for property <code>legendForType06</code>.
 * legend for type 06
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {string} the value of property <code>legendForType06</code>
 * @public
 * 
 */
sap.me.CalendarLegend.prototype.getLegendForType06 = function() { return ""; };

/**
 * 
 * Getter for property <code>legendForType07</code>.
 * legend for type 07
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {string} the value of property <code>legendForType07</code>
 * @public
 * 
 */
sap.me.CalendarLegend.prototype.getLegendForType07 = function() { return ""; };

/**
 * 
 * Getter for property <code>legendWidth</code>.
 * Indicates the legend items width
 * </p><p>
 * Default value is <code>12.5rem</code>
 * @return {sap.ui.core.CSSSize} the value of property <code>legendWidth</code>
 * @public
 * 
 */
sap.me.CalendarLegend.prototype.getLegendWidth = function() { return new sap.ui.core.CSSSize(); };

/**
 * 
 * Getter for property <code>visible</code>.
 * Indicates if the legend is visible
 * </p><p>
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>visible</code>
 * @public
 * 
 */
sap.me.CalendarLegend.prototype.getVisible = function() { return false; };

/**
 * 
 * Getter for property <code>width</code>.
 * Indicates the whole component width
 * </p><p>
 * Default value is <code>auto</code>
 * @return {sap.ui.core.CSSSize} the value of property <code>width</code>
 * @public
 * 
 */
sap.me.CalendarLegend.prototype.getWidth = function() { return new sap.ui.core.CSSSize(); };

/**
 * 
 * Setter for property <code>design</code>.
 * </p><p>
 * Default value is <code>sap.me.CalendarDesign.Approval</code> 
 * @param {sap.me.CalendarDesign} oDesign  new value for property <code>design</code>
 * @return {sap.me.CalendarLegend} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.me.CalendarLegend.prototype.setDesign = function(oDesign) { return new sap.me.CalendarLegend(); };

/**
 * 
 * Setter for property <code>expandable</code>.
 * </p><p>
 * Default value is <code>true</code> 
 * @param {boolean} bExpandable  new value for property <code>expandable</code>
 * @return {sap.me.CalendarLegend} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.me.CalendarLegend.prototype.setExpandable = function(bExpandable) { return new sap.me.CalendarLegend(); };

/**
 * 
 * Setter for property <code>expanded</code>.
 * </p><p>
 * Default value is <code>true</code> 
 * @param {boolean} bExpanded  new value for property <code>expanded</code>
 * @return {sap.me.CalendarLegend} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.me.CalendarLegend.prototype.setExpanded = function(bExpanded) { return new sap.me.CalendarLegend(); };

/**
 * 
 * Setter for property <code>legendForNormal</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {string} sLegendForNormal  new value for property <code>legendForNormal</code>
 * @return {sap.me.CalendarLegend} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.me.CalendarLegend.prototype.setLegendForNormal = function(sLegendForNormal) { return new sap.me.CalendarLegend(); };

/**
 * 
 * Setter for property <code>legendForSelected</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {string} sLegendForSelected  new value for property <code>legendForSelected</code>
 * @return {sap.me.CalendarLegend} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.me.CalendarLegend.prototype.setLegendForSelected = function(sLegendForSelected) { return new sap.me.CalendarLegend(); };

/**
 * 
 * Setter for property <code>legendForSelected00</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {string} sLegendForSelected00  new value for property <code>legendForSelected00</code>
 * @return {sap.me.CalendarLegend} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.me.CalendarLegend.prototype.setLegendForSelected00 = function(sLegendForSelected00) { return new sap.me.CalendarLegend(); };

/**
 * 
 * Setter for property <code>legendForToday</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {string} sLegendForToday  new value for property <code>legendForToday</code>
 * @return {sap.me.CalendarLegend} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.me.CalendarLegend.prototype.setLegendForToday = function(sLegendForToday) { return new sap.me.CalendarLegend(); };

/**
 * 
 * Setter for property <code>legendForType00</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {string} sLegendForType00  new value for property <code>legendForType00</code>
 * @return {sap.me.CalendarLegend} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.me.CalendarLegend.prototype.setLegendForType00 = function(sLegendForType00) { return new sap.me.CalendarLegend(); };

/**
 * 
 * Setter for property <code>legendForType01</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {string} sLegendForType01  new value for property <code>legendForType01</code>
 * @return {sap.me.CalendarLegend} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.me.CalendarLegend.prototype.setLegendForType01 = function(sLegendForType01) { return new sap.me.CalendarLegend(); };

/**
 * 
 * Setter for property <code>legendForType04</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {string} sLegendForType04  new value for property <code>legendForType04</code>
 * @return {sap.me.CalendarLegend} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.me.CalendarLegend.prototype.setLegendForType04 = function(sLegendForType04) { return new sap.me.CalendarLegend(); };

/**
 * 
 * Setter for property <code>legendForType06</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {string} sLegendForType06  new value for property <code>legendForType06</code>
 * @return {sap.me.CalendarLegend} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.me.CalendarLegend.prototype.setLegendForType06 = function(sLegendForType06) { return new sap.me.CalendarLegend(); };

/**
 * 
 * Setter for property <code>legendForType07</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {string} sLegendForType07  new value for property <code>legendForType07</code>
 * @return {sap.me.CalendarLegend} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.me.CalendarLegend.prototype.setLegendForType07 = function(sLegendForType07) { return new sap.me.CalendarLegend(); };

/**
 * 
 * Setter for property <code>legendWidth</code>.
 * </p><p>
 * Default value is <code>12.5rem</code> 
 * @param {sap.ui.core.CSSSize} sLegendWidth  new value for property <code>legendWidth</code>
 * @return {sap.me.CalendarLegend} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.me.CalendarLegend.prototype.setLegendWidth = function(sLegendWidth) { return new sap.me.CalendarLegend(); };

/**
 * 
 * Setter for property <code>visible</code>.
 * </p><p>
 * Default value is <code>true</code> 
 * @param {boolean} bVisible  new value for property <code>visible</code>
 * @return {sap.me.CalendarLegend} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.me.CalendarLegend.prototype.setVisible = function(bVisible) { return new sap.me.CalendarLegend(); };

/**
 * 
 * Setter for property <code>width</code>.
 * </p><p>
 * Default value is <code>auto</code> 
 * @param {sap.ui.core.CSSSize} sWidth  new value for property <code>width</code>
 * @return {sap.me.CalendarLegend} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.me.CalendarLegend.prototype.setWidth = function(sWidth) { return new sap.me.CalendarLegend(); };


// ---- sap.me.OverlapCalendar --------------------------------------------------------------------------

/**
 * 
 * Constructor for a new OverlapCalendar.
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
 * <li>{@link #getStartDate startDate} : string</li>
 * <li>{@link #getWeeksPerRow weeksPerRow} : int (default: 2)</li>
 * <li>{@link #getFirstDayOffset firstDayOffset} : int (default: 0)</li>
 * <li>{@link #getShowOverlapIndicator showOverlapIndicator} : boolean (default: false)</li>
 * <li>{@link #getVisible visible} : boolean (default: true)</li>
 * <li>{@link #getSwipeToNavigate swipeToNavigate} : boolean (default: true)</li>
 * <li>{@link #getWidth width} : sap.ui.core.CSSSize (default: '100%')</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getCalendarEvents calendarEvents} : sap.me.OverlapCalendarEvent[]</li></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link sap.me.OverlapCalendar#event:endOfData endOfData} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.me.OverlapCalendar#event:changeDate changeDate} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
 * </li>
 * </ul> 
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * A calendar that allows to display events in a grid and show the overlapped events
 * @extends sap.ui.core.Control
 * @version 1.15.1-SNAPSHOT
 * @constructor   
 * @public
 * @experimental Since version 1.12. 
 * API is not yet finished and might change completely
 * 
 */
sap.me.OverlapCalendar = function(sId,mSettings) {};
/**
 * 
 * Triggered when the displayed dates change 
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {object} oControlEvent.getParameters.firstDate The first date displayed in the calendar
 * @param {object} oControlEvent.getParameters.lastDate The laste date that will be displayed
 * @public
 */
sap.me.OverlapCalendar.prototype.changeDate = function(oControlEvent) { return null; };

/**
 * 
 * Indicates that we have reach the last week with data 
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {boolean} oControlEvent.getParameters.before Indicates if the data missing are before the start date or at the end
 * @public
 */
sap.me.OverlapCalendar.prototype.endOfData = function(oControlEvent) { return null; };

/**
 * 
 * Adds some calendarEvent <code>oCalendarEvent</code> 
 * to the aggregation named <code>calendarEvents</code>.
 * @param {sap.me.OverlapCalendarEvent}
 *            oCalendarEvent the calendarEvent to add; if empty, nothing is inserted
 * @return {sap.me.OverlapCalendar} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.me.OverlapCalendar.prototype.addCalendarEvent = function(oCalendarEvent) { return new sap.me.OverlapCalendar(); };

/**
 * 
 * Attach event handler <code>fnFunction</code> to the 'changeDate' event of this <code>sap.me.OverlapCalendar</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.me.OverlapCalendar</code>.<br/> itself. 
 * </p><p>
 * Triggered when the displayed dates change 
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener=this] Context object to call the event handler with. Defaults to this <code>sap.me.OverlapCalendar</code>.<br/> itself.
 * @return {sap.me.OverlapCalendar} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.me.OverlapCalendar.prototype.attachChangeDate = function(oData,fnFunction,oListener) { return new sap.me.OverlapCalendar(); };

/**
 * 
 * Attach event handler <code>fnFunction</code> to the 'endOfData' event of this <code>sap.me.OverlapCalendar</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.me.OverlapCalendar</code>.<br/> itself. 
 * </p><p>
 * Indicates that we have reach the last week with data 
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener=this] Context object to call the event handler with. Defaults to this <code>sap.me.OverlapCalendar</code>.<br/> itself.
 * @return {sap.me.OverlapCalendar} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.me.OverlapCalendar.prototype.attachEndOfData = function(oData,fnFunction,oListener) { return new sap.me.OverlapCalendar(); };

/**
 * 
 * Destroys all the calendarEvents in the aggregation 
 * named <code>calendarEvents</code>.
 * @return {sap.me.OverlapCalendar} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.me.OverlapCalendar.prototype.destroyCalendarEvents = function() { return new sap.me.OverlapCalendar(); };

/**
 * 
 * Detach event handler <code>fnFunction</code> from the 'changeDate' event of this <code>sap.me.OverlapCalendar</code>.<br/>
 * </p><p>
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.me.OverlapCalendar} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.me.OverlapCalendar.prototype.detachChangeDate = function(fnFunction,oListener) { return new sap.me.OverlapCalendar(); };

/**
 * 
 * Detach event handler <code>fnFunction</code> from the 'endOfData' event of this <code>sap.me.OverlapCalendar</code>.<br/>
 * </p><p>
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.me.OverlapCalendar} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.me.OverlapCalendar.prototype.detachEndOfData = function(fnFunction,oListener) { return new sap.me.OverlapCalendar(); };

/**
 * 
 * Creates a new subclass of class sap.me.OverlapCalendar with name <code>sClassName</code> 
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
sap.me.OverlapCalendar.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * 
 * Fire event changeDate to attached listeners.
 * </p><p>
 * Expects following event parameters:
 * <ul>
 * <li>'firstDate' of type <code>object</code> The first date displayed in the calendar</li>
 * <li>'lastDate' of type <code>object</code> The laste date that will be displayed</li>
 * </ul>
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.me.OverlapCalendar} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.me.OverlapCalendar.prototype.fireChangeDate = function(mArguments) { return new sap.me.OverlapCalendar(); };

/**
 * 
 * Fire event endOfData to attached listeners.
 * </p><p>
 * Expects following event parameters:
 * <ul>
 * <li>'before' of type <code>boolean</code> Indicates if the data missing are before the start date or at the end</li>
 * </ul>
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.me.OverlapCalendar} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.me.OverlapCalendar.prototype.fireEndOfData = function(mArguments) { return new sap.me.OverlapCalendar(); };

/**
 * 
 * Getter for aggregation <code>calendarEvents</code>.<br/>
 * The list of events to display in the calendar grid
 * @return {sap.me.OverlapCalendarEvent[]}
 * @public
 * 
 */
sap.me.OverlapCalendar.prototype.getCalendarEvents = function() { return new Array(); };

/**
 * 
 * Getter for property <code>firstDayOffset</code>.
 * Indicate how to offset the first day in regards to a Sunday (by default)
 * </p><p>
 * Default value is <code>0</code>
 * @return {int} the value of property <code>firstDayOffset</code>
 * @public
 * 
 */
sap.me.OverlapCalendar.prototype.getFirstDayOffset = function() { return 0; };

/**
 * 
 * Getter for property <code>showOverlapIndicator</code>.
 * Do we want to display the overlap indicator
 * </p><p>
 * Default value is <code>false</code>
 * @return {boolean} the value of property <code>showOverlapIndicator</code>
 * @public
 * 
 */
sap.me.OverlapCalendar.prototype.getShowOverlapIndicator = function() { return false; };

/**
 * 
 * Getter for property <code>startDate</code>.
 * The first date to display for the calendar
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {string} the value of property <code>startDate</code>
 * @public
 * 
 */
sap.me.OverlapCalendar.prototype.getStartDate = function() { return ""; };

/**
 * 
 * Getter for property <code>swipeToNavigate</code>.
 * Use swipe gesture to navigate
 * </p><p>
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>swipeToNavigate</code>
 * @public
 * 
 */
sap.me.OverlapCalendar.prototype.getSwipeToNavigate = function() { return false; };

/**
 * 
 * Getter for property <code>visible</code>.
 * Indicates if we should render this component
 * </p><p>
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>visible</code>
 * @public
 * 
 */
sap.me.OverlapCalendar.prototype.getVisible = function() { return false; };

/**
 * 
 * Getter for property <code>weeksPerRow</code>.
 * Number of weeks
 * </p><p>
 * Default value is <code>2</code>
 * @return {int} the value of property <code>weeksPerRow</code>
 * @public
 * 
 */
sap.me.OverlapCalendar.prototype.getWeeksPerRow = function() { return 0; };

/**
 * 
 * Getter for property <code>width</code>.
 * The width of the calendar
 * </p><p>
 * Default value is <code>100%</code>
 * @return {sap.ui.core.CSSSize} the value of property <code>width</code>
 * @public
 * 
 */
sap.me.OverlapCalendar.prototype.getWidth = function() { return new sap.ui.core.CSSSize(); };

/**
 * 
 * Checks for the provided <code>sap.me.OverlapCalendarEvent</code> in the aggregation named <code>calendarEvents</code> 
 * and returns its index if found or -1 otherwise.
 * @param {sap.me.OverlapCalendarEvent}
 *            oCalendarEvent the calendarEvent whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * 
 */
sap.me.OverlapCalendar.prototype.indexOfCalendarEvent = function(oCalendarEvent) { return 0; };

/**
 * 
 * Inserts a calendarEvent into the aggregation named <code>calendarEvents</code>.
 * @param {sap.me.OverlapCalendarEvent}
 *          oCalendarEvent the calendarEvent to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the calendarEvent should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the calendarEvent is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the calendarEvent is inserted at 
 *             the last position        
 * @return {sap.me.OverlapCalendar} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.me.OverlapCalendar.prototype.insertCalendarEvent = function(oCalendarEvent,iIndex) { return new sap.me.OverlapCalendar(); };

/**
 * 
 * Removes all the controls in the aggregation named <code>calendarEvents</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.me.OverlapCalendarEvent[]} an array of the removed elements (might be empty)
 * @public
 * 
 */
sap.me.OverlapCalendar.prototype.removeAllCalendarEvents = function() { return new Array(); };

/**
 * 
 * Removes an calendarEvent from the aggregation named <code>calendarEvents</code>.
 * @param {int | string | sap.me.OverlapCalendarEvent} vCalendarEvent the calendarEvent to remove or its index or id
 * @return {sap.me.OverlapCalendarEvent} the removed calendarEvent or null
 * @public
 * 
 */
sap.me.OverlapCalendar.prototype.removeCalendarEvent = function(vCalendarEvent) { return new sap.me.OverlapCalendarEvent(); };

/**
 * 
 * Setter for property <code>firstDayOffset</code>.
 * </p><p>
 * Default value is <code>0</code> 
 * @param {int} iFirstDayOffset  new value for property <code>firstDayOffset</code>
 * @return {sap.me.OverlapCalendar} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.me.OverlapCalendar.prototype.setFirstDayOffset = function(iFirstDayOffset) { return new sap.me.OverlapCalendar(); };

/**
 * 
 * Setter for property <code>showOverlapIndicator</code>.
 * </p><p>
 * Default value is <code>false</code> 
 * @param {boolean} bShowOverlapIndicator  new value for property <code>showOverlapIndicator</code>
 * @return {sap.me.OverlapCalendar} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.me.OverlapCalendar.prototype.setShowOverlapIndicator = function(bShowOverlapIndicator) { return new sap.me.OverlapCalendar(); };

/**
 * 
 * Setter for property <code>startDate</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {string} sStartDate  new value for property <code>startDate</code>
 * @return {sap.me.OverlapCalendar} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.me.OverlapCalendar.prototype.setStartDate = function(sStartDate) { return new sap.me.OverlapCalendar(); };

/**
 * 
 * Setter for property <code>swipeToNavigate</code>.
 * </p><p>
 * Default value is <code>true</code> 
 * @param {boolean} bSwipeToNavigate  new value for property <code>swipeToNavigate</code>
 * @return {sap.me.OverlapCalendar} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.me.OverlapCalendar.prototype.setSwipeToNavigate = function(bSwipeToNavigate) { return new sap.me.OverlapCalendar(); };

/**
 * 
 * Setter for property <code>visible</code>.
 * </p><p>
 * Default value is <code>true</code> 
 * @param {boolean} bVisible  new value for property <code>visible</code>
 * @return {sap.me.OverlapCalendar} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.me.OverlapCalendar.prototype.setVisible = function(bVisible) { return new sap.me.OverlapCalendar(); };

/**
 * 
 * Setter for property <code>weeksPerRow</code>.
 * </p><p>
 * Default value is <code>2</code> 
 * @param {int} iWeeksPerRow  new value for property <code>weeksPerRow</code>
 * @return {sap.me.OverlapCalendar} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.me.OverlapCalendar.prototype.setWeeksPerRow = function(iWeeksPerRow) { return new sap.me.OverlapCalendar(); };

/**
 * 
 * Setter for property <code>width</code>.
 * </p><p>
 * Default value is <code>100%</code> 
 * @param {sap.ui.core.CSSSize} sWidth  new value for property <code>width</code>
 * @return {sap.me.OverlapCalendar} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.me.OverlapCalendar.prototype.setWidth = function(sWidth) { return new sap.me.OverlapCalendar(); };


// ---- sap.me.OverlapCalendarEvent --------------------------------------------------------------------------

/**
 * 
 * Constructor for a new OverlapCalendarEvent.
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
 * <li>{@link #getStartDay startDay} : string</li>
 * <li>{@link #getEndDay endDay} : string</li>
 * <li>{@link #getRelevant relevant} : boolean</li>
 * <li>{@link #getType type} : string</li>
 * <li>{@link #getTypeName typeName} : string</li>
 * <li>{@link #getHalfDay halfDay} : boolean (default: false)</li>
 * <li>{@link #getRow row} : int (default: -1)</li>
 * <li>{@link #getName name} : string</li></ul>
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
 * Represent the data of an event for the overlap calendar
 * @extends sap.ui.core.Element
 * @version 1.15.1-SNAPSHOT
 * @constructor   
 * @public
 * @experimental Since version 1.12. 
 * API is not yet finished and might change completely
 * 
 */
sap.me.OverlapCalendarEvent = function(sId,mSettings) {};
/**
 * 
 * Binder for property <code>endDay</code>.
 * @param {string} sPath path to a property in the model 
 * @param {function} [fnFormatter=null] the formatter function
 * @param {sap.ui.model.BindingMode} [sMode=Default] the binding mode to be used for this property binding (e.g. one way) 
 * @return {sap.me.OverlapCalendarEvent} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.me.OverlapCalendarEvent.prototype.bindEndDay = function(sPath,fnFormatter,sMode) { return new sap.me.OverlapCalendarEvent(); };

/**
 * 
 * Binder for property <code>halfDay</code>.
 * @param {string} sPath path to a property in the model 
 * @param {function} [fnFormatter=null] the formatter function
 * @param {sap.ui.model.BindingMode} [sMode=Default] the binding mode to be used for this property binding (e.g. one way) 
 * @return {sap.me.OverlapCalendarEvent} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.me.OverlapCalendarEvent.prototype.bindHalfDay = function(sPath,fnFormatter,sMode) { return new sap.me.OverlapCalendarEvent(); };

/**
 * 
 * Binder for property <code>name</code>.
 * @param {string} sPath path to a property in the model 
 * @param {function} [fnFormatter=null] the formatter function
 * @param {sap.ui.model.BindingMode} [sMode=Default] the binding mode to be used for this property binding (e.g. one way) 
 * @return {sap.me.OverlapCalendarEvent} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.me.OverlapCalendarEvent.prototype.bindName = function(sPath,fnFormatter,sMode) { return new sap.me.OverlapCalendarEvent(); };

/**
 * 
 * Binder for property <code>relevant</code>.
 * @param {string} sPath path to a property in the model 
 * @param {function} [fnFormatter=null] the formatter function
 * @param {sap.ui.model.BindingMode} [sMode=Default] the binding mode to be used for this property binding (e.g. one way) 
 * @return {sap.me.OverlapCalendarEvent} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.me.OverlapCalendarEvent.prototype.bindRelevant = function(sPath,fnFormatter,sMode) { return new sap.me.OverlapCalendarEvent(); };

/**
 * 
 * Binder for property <code>row</code>.
 * @param {string} sPath path to a property in the model 
 * @param {function} [fnFormatter=null] the formatter function
 * @param {sap.ui.model.BindingMode} [sMode=Default] the binding mode to be used for this property binding (e.g. one way) 
 * @return {sap.me.OverlapCalendarEvent} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.me.OverlapCalendarEvent.prototype.bindRow = function(sPath,fnFormatter,sMode) { return new sap.me.OverlapCalendarEvent(); };

/**
 * 
 * Binder for property <code>startDay</code>.
 * @param {string} sPath path to a property in the model 
 * @param {function} [fnFormatter=null] the formatter function
 * @param {sap.ui.model.BindingMode} [sMode=Default] the binding mode to be used for this property binding (e.g. one way) 
 * @return {sap.me.OverlapCalendarEvent} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.me.OverlapCalendarEvent.prototype.bindStartDay = function(sPath,fnFormatter,sMode) { return new sap.me.OverlapCalendarEvent(); };

/**
 * 
 * Binder for property <code>type</code>.
 * @param {string} sPath path to a property in the model 
 * @param {function} [fnFormatter=null] the formatter function
 * @param {sap.ui.model.BindingMode} [sMode=Default] the binding mode to be used for this property binding (e.g. one way) 
 * @return {sap.me.OverlapCalendarEvent} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.me.OverlapCalendarEvent.prototype.bindType = function(sPath,fnFormatter,sMode) { return new sap.me.OverlapCalendarEvent(); };

/**
 * 
 * Binder for property <code>typeName</code>.
 * @param {string} sPath path to a property in the model 
 * @param {function} [fnFormatter=null] the formatter function
 * @param {sap.ui.model.BindingMode} [sMode=Default] the binding mode to be used for this property binding (e.g. one way) 
 * @return {sap.me.OverlapCalendarEvent} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.me.OverlapCalendarEvent.prototype.bindTypeName = function(sPath,fnFormatter,sMode) { return new sap.me.OverlapCalendarEvent(); };

/**
 * 
 * Creates a new subclass of class sap.me.OverlapCalendarEvent with name <code>sClassName</code> 
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
sap.me.OverlapCalendarEvent.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * 
 * Getter for property <code>endDay</code>.
 * Last day of the event
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {string} the value of property <code>endDay</code>
 * @public
 * 
 */
sap.me.OverlapCalendarEvent.prototype.getEndDay = function() { return ""; };

/**
 * 
 * Getter for property <code>halfDay</code>.
 * Is this half a day
 * </p><p>
 * Default value is <code>false</code>
 * @return {boolean} the value of property <code>halfDay</code>
 * @public
 * 
 */
sap.me.OverlapCalendarEvent.prototype.getHalfDay = function() { return false; };

/**
 * 
 * Getter for property <code>name</code>.
 * Name of the row
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {string} the value of property <code>name</code>
 * @public
 * 
 */
sap.me.OverlapCalendarEvent.prototype.getName = function() { return ""; };

/**
 * 
 * Getter for property <code>relevant</code>.
 * Indicates if this elements is relevant to be consider in the overlap
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {boolean} the value of property <code>relevant</code>
 * @public
 * 
 */
sap.me.OverlapCalendarEvent.prototype.getRelevant = function() { return false; };

/**
 * 
 * Getter for property <code>row</code>.
 * Id of the row on which to place this event
 * </p><p>
 * Default value is <code>-1</code>
 * @return {int} the value of property <code>row</code>
 * @public
 * 
 */
sap.me.OverlapCalendarEvent.prototype.getRow = function() { return 0; };

/**
 * 
 * Getter for property <code>startDay</code>.
 * The first day of the event
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {string} the value of property <code>startDay</code>
 * @public
 * 
 */
sap.me.OverlapCalendarEvent.prototype.getStartDay = function() { return ""; };

/**
 * 
 * Getter for property <code>type</code>.
 * Type of the event. Display in the second label (no overlap)
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {string} the value of property <code>type</code>
 * @public
 * 
 */
sap.me.OverlapCalendarEvent.prototype.getType = function() { return ""; };

/**
 * 
 * Getter for property <code>typeName</code>.
 * The CSS class to use
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {string} the value of property <code>typeName</code>
 * @public
 * 
 */
sap.me.OverlapCalendarEvent.prototype.getTypeName = function() { return ""; };

/**
 * 
 * Setter for property <code>endDay</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {string} sEndDay  new value for property <code>endDay</code>
 * @return {sap.me.OverlapCalendarEvent} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.me.OverlapCalendarEvent.prototype.setEndDay = function(sEndDay) { return new sap.me.OverlapCalendarEvent(); };

/**
 * 
 * Setter for property <code>halfDay</code>.
 * </p><p>
 * Default value is <code>false</code> 
 * @param {boolean} bHalfDay  new value for property <code>halfDay</code>
 * @return {sap.me.OverlapCalendarEvent} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.me.OverlapCalendarEvent.prototype.setHalfDay = function(bHalfDay) { return new sap.me.OverlapCalendarEvent(); };

/**
 * 
 * Setter for property <code>name</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {string} sName  new value for property <code>name</code>
 * @return {sap.me.OverlapCalendarEvent} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.me.OverlapCalendarEvent.prototype.setName = function(sName) { return new sap.me.OverlapCalendarEvent(); };

/**
 * 
 * Setter for property <code>relevant</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {boolean} bRelevant  new value for property <code>relevant</code>
 * @return {sap.me.OverlapCalendarEvent} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.me.OverlapCalendarEvent.prototype.setRelevant = function(bRelevant) { return new sap.me.OverlapCalendarEvent(); };

/**
 * 
 * Setter for property <code>row</code>.
 * </p><p>
 * Default value is <code>-1</code> 
 * @param {int} iRow  new value for property <code>row</code>
 * @return {sap.me.OverlapCalendarEvent} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.me.OverlapCalendarEvent.prototype.setRow = function(iRow) { return new sap.me.OverlapCalendarEvent(); };

/**
 * 
 * Setter for property <code>startDay</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {string} sStartDay  new value for property <code>startDay</code>
 * @return {sap.me.OverlapCalendarEvent} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.me.OverlapCalendarEvent.prototype.setStartDay = function(sStartDay) { return new sap.me.OverlapCalendarEvent(); };

/**
 * 
 * Setter for property <code>type</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {string} sType  new value for property <code>type</code>
 * @return {sap.me.OverlapCalendarEvent} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.me.OverlapCalendarEvent.prototype.setType = function(sType) { return new sap.me.OverlapCalendarEvent(); };

/**
 * 
 * Setter for property <code>typeName</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {string} sTypeName  new value for property <code>typeName</code>
 * @return {sap.me.OverlapCalendarEvent} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.me.OverlapCalendarEvent.prototype.setTypeName = function(sTypeName) { return new sap.me.OverlapCalendarEvent(); };

/**
 * 
 * Unbinder for property <code>endDay</code>.
 * @return {sap.me.OverlapCalendarEvent} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.me.OverlapCalendarEvent.prototype.unbindEndDay = function() { return new sap.me.OverlapCalendarEvent(); };

/**
 * 
 * Unbinder for property <code>halfDay</code>.
 * @return {sap.me.OverlapCalendarEvent} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.me.OverlapCalendarEvent.prototype.unbindHalfDay = function() { return new sap.me.OverlapCalendarEvent(); };

/**
 * 
 * Unbinder for property <code>name</code>.
 * @return {sap.me.OverlapCalendarEvent} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.me.OverlapCalendarEvent.prototype.unbindName = function() { return new sap.me.OverlapCalendarEvent(); };

/**
 * 
 * Unbinder for property <code>relevant</code>.
 * @return {sap.me.OverlapCalendarEvent} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.me.OverlapCalendarEvent.prototype.unbindRelevant = function() { return new sap.me.OverlapCalendarEvent(); };

/**
 * 
 * Unbinder for property <code>row</code>.
 * @return {sap.me.OverlapCalendarEvent} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.me.OverlapCalendarEvent.prototype.unbindRow = function() { return new sap.me.OverlapCalendarEvent(); };

/**
 * 
 * Unbinder for property <code>startDay</code>.
 * @return {sap.me.OverlapCalendarEvent} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.me.OverlapCalendarEvent.prototype.unbindStartDay = function() { return new sap.me.OverlapCalendarEvent(); };

/**
 * 
 * Unbinder for property <code>type</code>.
 * @return {sap.me.OverlapCalendarEvent} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.me.OverlapCalendarEvent.prototype.unbindType = function() { return new sap.me.OverlapCalendarEvent(); };

/**
 * 
 * Unbinder for property <code>typeName</code>.
 * @return {sap.me.OverlapCalendarEvent} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.me.OverlapCalendarEvent.prototype.unbindTypeName = function() { return new sap.me.OverlapCalendarEvent(); };


// ---- sap.me.ProgressIndicator --------------------------------------------------------------------------

/**
 * 
 * Constructor for a new ProgressIndicator.
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
 * <li>{@link #getEnabled enabled} : boolean (default: true)</li>
 * <li>{@link #getBarColor barColor} : sap.ui.core.BarColor (default: sap.ui.core.BarColor.NEUTRAL)</li>
 * <li>{@link #getDisplayValue displayValue} : string (default: '0%')</li>
 * <li>{@link #getPercentValue percentValue} : int (default: 0)</li>
 * <li>{@link #getShowValue showValue} : boolean (default: true)</li>
 * <li>{@link #getWidth width} : sap.ui.core.CSSSize (default: '100%')</li></ul>
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
 * Shows the progress of a process in a graphical way. The indicator can be displayed with or without numerical values.
 * The filling can be displayed in color only, or additionally with the percentage rate. The indicator status can be interactive.
 * @extends sap.ui.core.Control
 * @version 1.15.1-SNAPSHOT
 * @constructor   
 * @public
 * @experimental Since version 1.12. 
 * API is not yet finished and might change completely
 * 
 */
sap.me.ProgressIndicator = function(sId,mSettings) {};
/**
 * 
 * Creates a new subclass of class sap.me.ProgressIndicator with name <code>sClassName</code> 
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
sap.me.ProgressIndicator.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * 
 * Getter for property <code>barColor</code>.
 * The color of the bar. Enumeration sap.ui.core.BarColor provides CRITICAL (yellow), NEGATIVE (red), POSITIVE (green), NEUTRAL (blue) (default value).
 * </p><p>
 * Default value is <code>NEUTRAL</code>
 * @return {sap.ui.core.BarColor} the value of property <code>barColor</code>
 * @public
 * 
 */
sap.me.ProgressIndicator.prototype.getBarColor = function() { return new sap.ui.core.BarColor(); };

/**
 * 
 * Getter for property <code>displayValue</code>.
 * The text value to be displayed in the bar.
 * </p><p>
 * Default value is <code>0%</code>
 * @return {string} the value of property <code>displayValue</code>
 * @public
 * 
 */
sap.me.ProgressIndicator.prototype.getDisplayValue = function() { return ""; };

/**
 * 
 * Getter for property <code>enabled</code>.
 * Switches enabled state of the control. Disabled fields have different colors, and cannot be focused.
 * </p><p>
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>enabled</code>
 * @public
 * 
 */
sap.me.ProgressIndicator.prototype.getEnabled = function() { return false; };

/**
 * 
 * Getter for property <code>percentValue</code>.
 * The numerical value for the displayed length of the progress bar.
 * </p><p>
 * Default value is <code>0</code>
 * @return {int} the value of property <code>percentValue</code>
 * @public
 * 
 */
sap.me.ProgressIndicator.prototype.getPercentValue = function() { return 0; };

/**
 * 
 * Getter for property <code>showValue</code>.
 * Specifies whether the current value shall be rendered inside the bar.
 * </p><p>
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>showValue</code>
 * @public
 * 
 */
sap.me.ProgressIndicator.prototype.getShowValue = function() { return false; };

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
sap.me.ProgressIndicator.prototype.getVisible = function() { return false; };

/**
 * 
 * Getter for property <code>width</code>.
 * The width of the control.
 * </p><p>
 * Default value is <code>100%</code>
 * @return {sap.ui.core.CSSSize} the value of property <code>width</code>
 * @public
 * 
 */
sap.me.ProgressIndicator.prototype.getWidth = function() { return new sap.ui.core.CSSSize(); };

/**
 * 
 * Setter for property <code>barColor</code>.
 * </p><p>
 * Default value is <code>NEUTRAL</code> 
 * @param {sap.ui.core.BarColor} oBarColor  new value for property <code>barColor</code>
 * @return {sap.me.ProgressIndicator} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.me.ProgressIndicator.prototype.setBarColor = function(oBarColor) { return new sap.me.ProgressIndicator(); };

/**
 * 
 * Setter for property <code>displayValue</code>.
 * </p><p>
 * Default value is <code>0%</code> 
 * @param {string} sDisplayValue  new value for property <code>displayValue</code>
 * @return {sap.me.ProgressIndicator} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.me.ProgressIndicator.prototype.setDisplayValue = function(sDisplayValue) { return new sap.me.ProgressIndicator(); };

/**
 * 
 * Setter for property <code>enabled</code>.
 * </p><p>
 * Default value is <code>true</code> 
 * @param {boolean} bEnabled  new value for property <code>enabled</code>
 * @return {sap.me.ProgressIndicator} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.me.ProgressIndicator.prototype.setEnabled = function(bEnabled) { return new sap.me.ProgressIndicator(); };

/**
 * 
 * Property setter for the PercentValue
 * A new rendering is not necessary, only the bar has to be moved.
 * @param iPercentValue
 * @return {sap.me.ProgressIndicator} <code>this</code> to allow method chaining
 * @public
 */
sap.me.ProgressIndicator.prototype.setPercentValue = function(iPercentValue) { return new sap.me.ProgressIndicator(); };

/**
 * 
 * Setter for property <code>showValue</code>.
 * </p><p>
 * Default value is <code>true</code> 
 * @param {boolean} bShowValue  new value for property <code>showValue</code>
 * @return {sap.me.ProgressIndicator} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.me.ProgressIndicator.prototype.setShowValue = function(bShowValue) { return new sap.me.ProgressIndicator(); };

/**
 * 
 * Setter for property <code>visible</code>.
 * </p><p>
 * Default value is <code>true</code> 
 * @param {boolean} bVisible  new value for property <code>visible</code>
 * @return {sap.me.ProgressIndicator} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.me.ProgressIndicator.prototype.setVisible = function(bVisible) { return new sap.me.ProgressIndicator(); };

/**
 * 
 * Setter for property <code>width</code>.
 * </p><p>
 * Default value is <code>100%</code> 
 * @param {sap.ui.core.CSSSize} sWidth  new value for property <code>width</code>
 * @return {sap.me.ProgressIndicator} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.me.ProgressIndicator.prototype.setWidth = function(sWidth) { return new sap.me.ProgressIndicator(); };


// ---- sap.me.TabContainer --------------------------------------------------------------------------

/**
 * 
 * Constructor for a new TabContainer.
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
 * <li>{@link #getSelectedTab selectedTab} : int</li>
 * <li>{@link #getBadgeInfo badgeInfo} : int</li>
 * <li>{@link #getBadgeNotes badgeNotes} : int</li>
 * <li>{@link #getBadgeAttachments badgeAttachments} : int</li>
 * <li>{@link #getBadgePeople badgePeople} : int</li>
 * <li>{@link #getExpandable expandable} : boolean (default: true)</li>
 * <li>{@link #getExpanded expanded} : boolean (default: true)</li>
 * <li>{@link #getVisible visible} : boolean (default: true)</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getContentInfo contentInfo} : sap.ui.core.Control</li>
 * <li>{@link #getContentAttachments contentAttachments} : sap.ui.core.Control</li>
 * <li>{@link #getContentNotes contentNotes} : sap.ui.core.Control</li>
 * <li>{@link #getContentPeople contentPeople} : sap.ui.core.Control</li></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link sap.me.TabContainer#event:select select} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.me.TabContainer#event:expand expand} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.me.TabContainer#event:collapse collapse} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
 * </li>
 * </ul> 
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * The TabContainer allow to stack 1 to 4 contents in a
 * view with corresponding icons
 * @extends sap.ui.core.Control
 * @version 1.15.1-SNAPSHOT
 * @constructor   
 * @public
 * @experimental Since version 1.12. 
 * API is not yet finished and might change completely
 * 
 */
sap.me.TabContainer = function(sId,mSettings) {};
/**
 * 
 * Indicates that the tab will collapse 
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 */
sap.me.TabContainer.prototype.collapse = function(oControlEvent) { return null; };

/**
 * 
 * Indicates that the tab will expand 
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 */
sap.me.TabContainer.prototype.expand = function(oControlEvent) { return null; };

/**
 * 
 * Indicates that the selected tab has changed
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 */
sap.me.TabContainer.prototype.select = function(oControlEvent) { return null; };

/**
 * 
 * Attach event handler <code>fnFunction</code> to the 'collapse' event of this <code>sap.me.TabContainer</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.me.TabContainer</code>.<br/> itself. 
 * </p><p>
 * Indicates that the tab will collapse 
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener=this] Context object to call the event handler with. Defaults to this <code>sap.me.TabContainer</code>.<br/> itself.
 * @return {sap.me.TabContainer} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.me.TabContainer.prototype.attachCollapse = function(oData,fnFunction,oListener) { return new sap.me.TabContainer(); };

/**
 * 
 * Attach event handler <code>fnFunction</code> to the 'expand' event of this <code>sap.me.TabContainer</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.me.TabContainer</code>.<br/> itself. 
 * </p><p>
 * Indicates that the tab will expand 
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener=this] Context object to call the event handler with. Defaults to this <code>sap.me.TabContainer</code>.<br/> itself.
 * @return {sap.me.TabContainer} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.me.TabContainer.prototype.attachExpand = function(oData,fnFunction,oListener) { return new sap.me.TabContainer(); };

/**
 * 
 * Attach event handler <code>fnFunction</code> to the 'select' event of this <code>sap.me.TabContainer</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.me.TabContainer</code>.<br/> itself. 
 * </p><p>
 * Indicates that the selected tab has changed
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener=this] Context object to call the event handler with. Defaults to this <code>sap.me.TabContainer</code>.<br/> itself.
 * @return {sap.me.TabContainer} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.me.TabContainer.prototype.attachSelect = function(oData,fnFunction,oListener) { return new sap.me.TabContainer(); };

/**
 * 
 * Destroys the contentAttachments in the aggregation 
 * named <code>contentAttachments</code>.
 * @return {sap.me.TabContainer} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.me.TabContainer.prototype.destroyContentAttachments = function() { return new sap.me.TabContainer(); };

/**
 * 
 * Destroys the contentInfo in the aggregation 
 * named <code>contentInfo</code>.
 * @return {sap.me.TabContainer} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.me.TabContainer.prototype.destroyContentInfo = function() { return new sap.me.TabContainer(); };

/**
 * 
 * Destroys the contentNotes in the aggregation 
 * named <code>contentNotes</code>.
 * @return {sap.me.TabContainer} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.me.TabContainer.prototype.destroyContentNotes = function() { return new sap.me.TabContainer(); };

/**
 * 
 * Destroys the contentPeople in the aggregation 
 * named <code>contentPeople</code>.
 * @return {sap.me.TabContainer} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.me.TabContainer.prototype.destroyContentPeople = function() { return new sap.me.TabContainer(); };

/**
 * 
 * Detach event handler <code>fnFunction</code> from the 'collapse' event of this <code>sap.me.TabContainer</code>.<br/>
 * </p><p>
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.me.TabContainer} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.me.TabContainer.prototype.detachCollapse = function(fnFunction,oListener) { return new sap.me.TabContainer(); };

/**
 * 
 * Detach event handler <code>fnFunction</code> from the 'expand' event of this <code>sap.me.TabContainer</code>.<br/>
 * </p><p>
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.me.TabContainer} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.me.TabContainer.prototype.detachExpand = function(fnFunction,oListener) { return new sap.me.TabContainer(); };

/**
 * 
 * Detach event handler <code>fnFunction</code> from the 'select' event of this <code>sap.me.TabContainer</code>.<br/>
 * </p><p>
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.me.TabContainer} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.me.TabContainer.prototype.detachSelect = function(fnFunction,oListener) { return new sap.me.TabContainer(); };

/**
 * 
 * Creates a new subclass of class sap.me.TabContainer with name <code>sClassName</code> 
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
sap.me.TabContainer.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * 
 * Fire event collapse to attached listeners.
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.me.TabContainer} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.me.TabContainer.prototype.fireCollapse = function(mArguments) { return new sap.me.TabContainer(); };

/**
 * 
 * Fire event expand to attached listeners.
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.me.TabContainer} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.me.TabContainer.prototype.fireExpand = function(mArguments) { return new sap.me.TabContainer(); };

/**
 * 
 * Fire event select to attached listeners.
 * </p><p>
 * Listeners may prevent the default action of this event using the preventDefault-method on the event object.
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {boolean} whether to prevent the default action
 * @protected
 * 
 */
sap.me.TabContainer.prototype.fireSelect = function(mArguments) { return false; };

/**
 * 
 * Getter for property <code>badgeAttachments</code>.
 * The number to display in the badge for the attachments tab
 * </p><p>
 * Default value is <code></code>
 * @return {int} the value of property <code>badgeAttachments</code>
 * @public
 * 
 */
sap.me.TabContainer.prototype.getBadgeAttachments = function() { return 0; };

/**
 * 
 * Getter for property <code>badgeInfo</code>.
 * The number to display in the badge for the info tab
 * </p><p>
 * Default value is <code></code>
 * @return {int} the value of property <code>badgeInfo</code>
 * @public
 * 
 */
sap.me.TabContainer.prototype.getBadgeInfo = function() { return 0; };

/**
 * 
 * Getter for property <code>badgeNotes</code>.
 * The number to display in the badge for the notes tab
 * </p><p>
 * Default value is <code></code>
 * @return {int} the value of property <code>badgeNotes</code>
 * @public
 * 
 */
sap.me.TabContainer.prototype.getBadgeNotes = function() { return 0; };

/**
 * 
 * Getter for property <code>badgePeople</code>.
 * The number to display in the badge for the people tab
 * </p><p>
 * Default value is <code></code>
 * @return {int} the value of property <code>badgePeople</code>
 * @public
 * 
 */
sap.me.TabContainer.prototype.getBadgePeople = function() { return 0; };

/**
 * 
 * Getter for aggregation <code>contentAttachments</code>.<br/>
 * The attachments tab
 * @return {sap.ui.core.Control}
 * @public
 * 
 */
sap.me.TabContainer.prototype.getContentAttachments = function() { return new sap.ui.core.Control(); };

/**
 * 
 * Getter for aggregation <code>contentInfo</code>.<br/>
 * The info tab
 * @return {sap.ui.core.Control}
 * @public
 * 
 */
sap.me.TabContainer.prototype.getContentInfo = function() { return new sap.ui.core.Control(); };

/**
 * 
 * Getter for aggregation <code>contentNotes</code>.<br/>
 * The notes tab
 * @return {sap.ui.core.Control}
 * @public
 * 
 */
sap.me.TabContainer.prototype.getContentNotes = function() { return new sap.ui.core.Control(); };

/**
 * 
 * Getter for aggregation <code>contentPeople</code>.<br/>
 * The people tab
 * @return {sap.ui.core.Control}
 * @public
 * 
 */
sap.me.TabContainer.prototype.getContentPeople = function() { return new sap.ui.core.Control(); };

/**
 * 
 * Getter for property <code>expandable</code>.
 * Indicates if the tab can be collapsed and expanded
 * </p><p>
 * </p><p>
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>expandable</code>
 * @public
 * 
 */
sap.me.TabContainer.prototype.getExpandable = function() { return false; };

/**
 * 
 * Getter for property <code>expanded</code>.
 * Indicates if the actual tab is expanded or not
 * </p><p>
 * </p><p>
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>expanded</code>
 * @public
 * 
 */
sap.me.TabContainer.prototype.getExpanded = function() { return false; };

/**
 * 
 * Getter for property <code>selectedTab</code>.
 * Return the index of the selected tab
 * </p><p>
 * Default value is <code></code>
 * @return {int} the value of property <code>selectedTab</code>
 * @public
 * 
 */
sap.me.TabContainer.prototype.getSelectedTab = function() { return 0; };

/**
 * 
 * Getter for property <code>visible</code>.
 * setter for visible property
 * </p><p>
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>visible</code>
 * @public
 * 
 */
sap.me.TabContainer.prototype.getVisible = function() { return false; };

/**
 * 
 * Setter for property <code>badgeAttachments</code>.
 * </p><p>
 * Default value is <code></code> 
 * @param {int} iBadgeAttachments  new value for property <code>badgeAttachments</code>
 * @return {sap.me.TabContainer} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.me.TabContainer.prototype.setBadgeAttachments = function(iBadgeAttachments) { return new sap.me.TabContainer(); };

/**
 * 
 * Setter for property <code>badgeInfo</code>.
 * </p><p>
 * Default value is <code></code> 
 * @param {int} iBadgeInfo  new value for property <code>badgeInfo</code>
 * @return {sap.me.TabContainer} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.me.TabContainer.prototype.setBadgeInfo = function(iBadgeInfo) { return new sap.me.TabContainer(); };

/**
 * 
 * Setter for property <code>badgeNotes</code>.
 * </p><p>
 * Default value is <code></code> 
 * @param {int} iBadgeNotes  new value for property <code>badgeNotes</code>
 * @return {sap.me.TabContainer} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.me.TabContainer.prototype.setBadgeNotes = function(iBadgeNotes) { return new sap.me.TabContainer(); };

/**
 * 
 * Setter for property <code>badgePeople</code>.
 * </p><p>
 * Default value is <code></code> 
 * @param {int} iBadgePeople  new value for property <code>badgePeople</code>
 * @return {sap.me.TabContainer} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.me.TabContainer.prototype.setBadgePeople = function(iBadgePeople) { return new sap.me.TabContainer(); };

/**
 * 
 * Setter for the aggregated <code>contentAttachments</code>.
 * @param oContentAttachments {sap.ui.core.Control}
 * @return {sap.me.TabContainer} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.me.TabContainer.prototype.setContentAttachments = function(oContentAttachments) { return new sap.me.TabContainer(); };

/**
 * 
 * Setter for the aggregated <code>contentInfo</code>.
 * @param oContentInfo {sap.ui.core.Control}
 * @return {sap.me.TabContainer} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.me.TabContainer.prototype.setContentInfo = function(oContentInfo) { return new sap.me.TabContainer(); };

/**
 * 
 * Setter for the aggregated <code>contentNotes</code>.
 * @param oContentNotes {sap.ui.core.Control}
 * @return {sap.me.TabContainer} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.me.TabContainer.prototype.setContentNotes = function(oContentNotes) { return new sap.me.TabContainer(); };

/**
 * 
 * Setter for the aggregated <code>contentPeople</code>.
 * @param oContentPeople {sap.ui.core.Control}
 * @return {sap.me.TabContainer} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.me.TabContainer.prototype.setContentPeople = function(oContentPeople) { return new sap.me.TabContainer(); };

/**
 * 
 * Setter for property <code>expandable</code>.
 * </p><p>
 * Default value is <code>true</code> 
 * @param {boolean} bExpandable  new value for property <code>expandable</code>
 * @return {sap.me.TabContainer} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.me.TabContainer.prototype.setExpandable = function(bExpandable) { return new sap.me.TabContainer(); };

/**
 * 
 * Setter for property <code>expanded</code>.
 * </p><p>
 * Default value is <code>true</code> 
 * @param {boolean} bExpanded  new value for property <code>expanded</code>
 * @return {sap.me.TabContainer} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.me.TabContainer.prototype.setExpanded = function(bExpanded) { return new sap.me.TabContainer(); };

/**
 * 
 * Setter for property <code>selectedTab</code>.
 * </p><p>
 * Default value is <code></code> 
 * @param {int} iSelectedTab  new value for property <code>selectedTab</code>
 * @return {sap.me.TabContainer} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.me.TabContainer.prototype.setSelectedTab = function(iSelectedTab) { return new sap.me.TabContainer(); };

/**
 * 
 * Setter for property <code>visible</code>.
 * </p><p>
 * Default value is <code>true</code> 
 * @param {boolean} bVisible  new value for property <code>visible</code>
 * @return {sap.me.TabContainer} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.me.TabContainer.prototype.setVisible = function(bVisible) { return new sap.me.TabContainer(); };

// ---- static fields of namespaces ---------------------------------------------------------------------

// ---- sap.me.CalendarDesign --------------------------------------------------------------------------

/**
 * 
 * Colors match calendar design for Action 
 * @public
 * @memberOf sap.me.CalendarDesign
 */
sap.me.CalendarDesign.Action = null;

/**
 * 
 * Colors match calendar design for Approval 
 * @public
 * @memberOf sap.me.CalendarDesign
 */
sap.me.CalendarDesign.Approval = null;


// ---- sap.me.CalendarEventType --------------------------------------------------------------------------

/**
 * 
 * Type 00 (non-working day (e.g. weekend)) 
 * @public
 * @memberOf sap.me.CalendarEventType
 */
sap.me.CalendarEventType.Type00 = null;

/**
 * 
 * Type 01 (nonattendance / submitted day) 
 * @public
 * @memberOf sap.me.CalendarEventType
 */
sap.me.CalendarEventType.Type01 = null;

/**
 * 
 * Type 04 (open request / manager action needed) 
 * @public
 * @memberOf sap.me.CalendarEventType
 */
sap.me.CalendarEventType.Type04 = null;

/**
 * 
 * Type 06 (public holiday) 
 * @public
 * @memberOf sap.me.CalendarEventType
 */
sap.me.CalendarEventType.Type06 = null;

/**
 * 
 * Type 07 (deletion requested / your action needed) 
 * @public
 * @memberOf sap.me.CalendarEventType
 */
sap.me.CalendarEventType.Type07 = null;

