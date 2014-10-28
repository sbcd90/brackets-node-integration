
// ---- _global_ --------------------------------------------------------------------------


// ---- sap --------------------------------------------------------------------------


// ---- sap.service --------------------------------------------------------------------------


// ---- sap.service.visualization --------------------------------------------------------------------------


// ---- sap.service.visualization.chart --------------------------------------------------------------------------


// ---- sap.service.visualization.chart.Bar --------------------------------------------------------------------------

/**
 * 
 * Constructor for a new chart/Bar.
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
 * <li>{@link #getWidth width} : sap.ui.core.CSSSize</li>
 * <li>{@link #getHeight height} : sap.ui.core.CSSSize</li>
 * <li>{@link #getDeselectEnabled deselectEnabled} : boolean (default: true)</li>
 * <li>{@link #getSelectionMode selectionMode} : string (default: 'single')</li>
 * <li>{@link #getLegendFirst legendFirst} : boolean (default: false)</li>
 * <li>{@link #getLegendDirection legendDirection} : string (default: 'right')</li>
 * <li>{@link #getLegendVerticalOffset legendVerticalOffset} : int (default: 0)</li>
 * <li>{@link #getLegendHorizontalOffset legendHorizontalOffset} : int (default: 0)</li>
 * <li>{@link #getDefaultSelectedItems defaultSelectedItems} : object[]</li>
 * <li>{@link #getMeasures measures} : object[]</li>
 * <li>{@link #getBarMarker barMarker} : object</li>
 * <li>{@link #getShowLegend showLegend} : boolean (default: true)</li>
 * <li>{@link #getLegendFormatString legendFormatString} : string[] (default: [''])</li>
 * <li>{@link #getTitle title} : string</li>
 * <li>{@link #getTitleHorizontalAlign titleHorizontalAlign} : string (default: 'center')</li>
 * <li>{@link #getSubTitle subTitle} : string</li>
 * <li>{@link #getSubTitleHorizontalAlign subTitleHorizontalAlign} : string (default: 'center')</li>
 * <li>{@link #getShowTitle showTitle} : boolean (default: true)</li>
 * <li>{@link #getTitleFormatString titleFormatString} : string (default: '')</li>
 * <li>{@link #getSubTitleFormatString subTitleFormatString} : string (default: '')</li>
 * <li>{@link #getXAxis xAxis} : object[]</li>
 * <li>{@link #getYAxis yAxis} : object[]</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getDataset dataset} : sap.service.visualization.dataset.SimpleDMDataset</li></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link sap.service.visualization.chart.Bar#event:selectData selectData} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
 * </li>
 * </ul> 
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * </p><p>
 * Is used for show a Bar chart with feeding data. The API
 * provides data feeding, and a set of behavior of the bar chart.
 * @extends sap.ui.core.Control
 * @version 1.15.1-SNAPSHOT
 * @constructor   
 * @public
 * @deprecated Since version 1.7.2. 
 * This library has been deprecated in favor of the new charting library sap.viz. Please migrate as soon as possible as this older library will be removed from the SAPUI5 delivery in one of the next releases.
 * 
 */
sap.service.visualization.chart.Bar = function(sId,mSettings) {};
/**
 * 
 * this event is bind to chart, the chart will response all the information of the rectangle of you selected on bar. 
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 */
sap.service.visualization.chart.Bar.prototype.selectData = function(oControlEvent) { return null; };

/**
 * 
 * Attach event handler <code>fnFunction</code> to the 'selectData' event of this <code>sap.service.visualization.chart.Bar</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.service.visualization.chart.Bar</code>.<br/> itself. 
 * </p><p>
 * this event is bind to chart, the chart will response all the information of the rectangle of you selected on bar. 
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener=this] Context object to call the event handler with. Defaults to this <code>sap.service.visualization.chart.Bar</code>.<br/> itself.
 * @return {sap.service.visualization.chart.Bar} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.service.visualization.chart.Bar.prototype.attachSelectData = function(oData,fnFunction,oListener) { return new sap.service.visualization.chart.Bar(); };

/**
 * 
 * Destroys the dataset in the aggregation 
 * named <code>dataset</code>.
 * @return {sap.service.visualization.chart.Bar} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.service.visualization.chart.Bar.prototype.destroyDataset = function() { return new sap.service.visualization.chart.Bar(); };

/**
 * 
 * Detach event handler <code>fnFunction</code> from the 'selectData' event of this <code>sap.service.visualization.chart.Bar</code>.<br/>
 * </p><p>
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.service.visualization.chart.Bar} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.service.visualization.chart.Bar.prototype.detachSelectData = function(fnFunction,oListener) { return new sap.service.visualization.chart.Bar(); };

/**
 * 
 * Creates a new subclass of class sap.service.visualization.chart.Bar with name <code>sClassName</code> 
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
sap.service.visualization.chart.Bar.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * 
 * Fire event selectData to attached listeners.
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.service.visualization.chart.Bar} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.service.visualization.chart.Bar.prototype.fireSelectData = function(mArguments) { return new sap.service.visualization.chart.Bar(); };

/**
 * 
 * Getter for property <code>barMarker</code>.
 * for each object:{barMarkerSize//It is for all measures. When the bar size is too large, it only can draw the limited value. It can not be less than 0.}.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {object} the value of property <code>barMarker</code>
 * @public
 * 
 */
sap.service.visualization.chart.Bar.prototype.getBarMarker = function() { return new Object(); };

/**
 * 
 * Getter for aggregation <code>dataset</code>.<br/>
 * chart use this aggregation to get data feed.
 * @return {sap.service.visualization.dataset.SimpleDMDataset}
 * @public
 * 
 */
sap.service.visualization.chart.Bar.prototype.getDataset = function() { return new sap.service.visualization.dataset.SimpleDMDataset(); };

/**
 * 
 * Getter for property <code>defaultSelectedItems</code>.
 * the default selected bar index.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {object[]} the value of property <code>defaultSelectedItems</code>
 * @public
 * 
 */
sap.service.visualization.chart.Bar.prototype.getDefaultSelectedItems = function() { return new Array(); };

/**
 * 
 * Getter for property <code>deselectEnabled</code>.
 * de-selectable for measure items. Be noted that it cannot be updated after chart initialization.
 * </p><p>
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>deselectEnabled</code>
 * @public
 * 
 */
sap.service.visualization.chart.Bar.prototype.getDeselectEnabled = function() { return false; };

/**
 * 
 * Getter for property <code>height</code>.
 * the chart height.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {sap.ui.core.CSSSize} the value of property <code>height</code>
 * @public
 * 
 */
sap.service.visualization.chart.Bar.prototype.getHeight = function() { return new sap.ui.core.CSSSize(); };

/**
 * 
 * Getter for property <code>legendDirection</code>.
 * the position of legend located at, left|right|top|bottom.
 * </p><p>
 * Default value is <code>right</code>
 * @return {string} the value of property <code>legendDirection</code>
 * @public
 * 
 */
sap.service.visualization.chart.Bar.prototype.getLegendDirection = function() { return ""; };

/**
 * 
 * Getter for property <code>legendFirst</code>.
 * first ensure to plot legend, then the chart area plot.
 * </p><p>
 * Default value is <code>false</code>
 * @return {boolean} the value of property <code>legendFirst</code>
 * @public
 * 
 */
sap.service.visualization.chart.Bar.prototype.getLegendFirst = function() { return false; };

/**
 * 
 * Getter for property <code>legendFormatString</code>.
 * the format style for legend. the format for legend default is [''], numeric :'0.00', Currency: '$"#,##0.00"' ,percent:'0.00%',Date:'M/dd/yyyy', time:'h:mm:ss A/P'. If feed not enough then reuse the last one.
 * </p><p>
 * Default value is <code>['']</code>
 * @return {string[]} the value of property <code>legendFormatString</code>
 * @public
 * 
 */
sap.service.visualization.chart.Bar.prototype.getLegendFormatString = function() { return new Array(); };

/**
 * 
 * Getter for property <code>legendHorizontalOffset</code>.
 * the offset of the legend, used to adjust the position of legend. if position top or bottom, positive, legend will move right, minus left.
 * </p><p>
 * Default value is <code>0</code>
 * @return {int} the value of property <code>legendHorizontalOffset</code>
 * @public
 * 
 */
sap.service.visualization.chart.Bar.prototype.getLegendHorizontalOffset = function() { return 0; };

/**
 * 
 * Getter for property <code>legendVerticalOffset</code>.
 * the offset of the legend, used to adjust the position of legend.if left or right, positive, legend will move up,minus down.
 * </p><p>
 * Default value is <code>0</code>
 * @return {int} the value of property <code>legendVerticalOffset</code>
 * @public
 * 
 */
sap.service.visualization.chart.Bar.prototype.getLegendVerticalOffset = function() { return 0; };

/**
 * 
 * Getter for property <code>measures</code>.
 * for each object:{ valueAxis: 0, should be valid index in your value axis (can be xAxis or yAxis)}.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {object[]} the value of property <code>measures</code>
 * @public
 * 
 */
sap.service.visualization.chart.Bar.prototype.getMeasures = function() { return new Array(); };

/**
 * 
 * Getter for property <code>selectionMode</code>.
 * default value is false, single: you can just select one slice; none : no slice can be selected.
 * </p><p>
 * Default value is <code>single</code>
 * @return {string} the value of property <code>selectionMode</code>
 * @public
 * 
 */
sap.service.visualization.chart.Bar.prototype.getSelectionMode = function() { return ""; };

/**
 * 
 * Getter for property <code>showLegend</code>.
 * show/hide legend.
 * </p><p>
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>showLegend</code>
 * @public
 * 
 */
sap.service.visualization.chart.Bar.prototype.getShowLegend = function() { return false; };

/**
 * 
 * Getter for property <code>showTitle</code>.
 * show/hide title.
 * </p><p>
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>showTitle</code>
 * @public
 * 
 */
sap.service.visualization.chart.Bar.prototype.getShowTitle = function() { return false; };

/**
 * 
 * Getter for property <code>subTitle</code>.
 * sub title text.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {string} the value of property <code>subTitle</code>
 * @public
 * 
 */
sap.service.visualization.chart.Bar.prototype.getSubTitle = function() { return ""; };

/**
 * 
 * Getter for property <code>subTitleFormatString</code>.
 * the format style for sub title. numeric :'0.00', Currency: '$"#,##0.00"' ,percent:'0.00%',Date:'M/dd/yyyy', time:'h:mm:ss A/P'.
 * </p><p>
 * Default value is <code>''</code>
 * @return {string} the value of property <code>subTitleFormatString</code>
 * @public
 * 
 */
sap.service.visualization.chart.Bar.prototype.getSubTitleFormatString = function() { return ""; };

/**
 * 
 * Getter for property <code>subTitleHorizontalAlign</code>.
 * the title align left|center|right.
 * </p><p>
 * Default value is <code>center</code>
 * @return {string} the value of property <code>subTitleHorizontalAlign</code>
 * @public
 * 
 */
sap.service.visualization.chart.Bar.prototype.getSubTitleHorizontalAlign = function() { return ""; };

/**
 * 
 * Getter for property <code>title</code>.
 * title text.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {string} the value of property <code>title</code>
 * @public
 * 
 */
sap.service.visualization.chart.Bar.prototype.getTitle = function() { return ""; };

/**
 * 
 * Getter for property <code>titleFormatString</code>.
 * the format style for main title. numeric :'0.00', Currency: '$"#,##0.00"' ,percent:'0.00%',Date:'M/dd/yyyy', time:'h:mm:ss A/P'.
 * </p><p>
 * Default value is <code>''</code>
 * @return {string} the value of property <code>titleFormatString</code>
 * @public
 * 
 */
sap.service.visualization.chart.Bar.prototype.getTitleFormatString = function() { return ""; };

/**
 * 
 * Getter for property <code>titleHorizontalAlign</code>.
 * the title align left|center|right.
 * </p><p>
 * Default value is <code>center</code>
 * @return {string} the value of property <code>titleHorizontalAlign</code>
 * @public
 * 
 */
sap.service.visualization.chart.Bar.prototype.getTitleHorizontalAlign = function() { return ""; };

/**
 * 
 * Getter for property <code>width</code>.
 * the chart width.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {sap.ui.core.CSSSize} the value of property <code>width</code>
 * @public
 * 
 */
sap.service.visualization.chart.Bar.prototype.getWidth = function() { return new sap.ui.core.CSSSize(); };

/**
 * 
 * Getter for property <code>xAxis</code>.
 * for each object:{
 * showMajorTicks : true,// default value = undefined,show/hide major grid line and only works on value axis
 * showMinorTicks : true,// default value = false,show/hide minor grid line and only works on value axis. If showMajor is false, this option will not work
 * title : 'X Axis Title',
 * titleFormatString : '', //refer to legend format.
 * labelsFormatString : [''],//refer to legend format.
 * showTitle : true,//show or hide title showLabels : true, show or hide labels
 * gridLine : {
 * showMajor : false, //the major grid line
 * majorThickness : 1, the thickness for major tick.
 * showMinor : false, //the minor grid line.
 * minorThickness : 1, the thickness of minor tick.
 * showSub : true, //default value=false, show/hide sub grid line and only works on dimension axis }
 * }.
 * For major and minor ticks, they only works on value axis, it takes effect but the behavior is unexpected.
 * Set the grid line releated properties.For value axis, only showMajor and showMinor options work.
 * If showSub is set to true on value axis, it takes effect but the behavior is unexpected.
 * For dimension axis, only showSub option works.
 * If showMajor and showMinor options are set to true on dimension axis, it takes effect but the behavior is unexpected.
 * </p><p>
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {object[]} the value of property <code>xAxis</code>
 * @public
 * 
 */
sap.service.visualization.chart.Bar.prototype.getXAxis = function() { return new Array(); };

/**
 * 
 * Getter for property <code>yAxis</code>.
 * the same as xAxis.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {object[]} the value of property <code>yAxis</code>
 * @public
 * 
 */
sap.service.visualization.chart.Bar.prototype.getYAxis = function() { return new Array(); };

/**
 * 
 * Setter for property <code>barMarker</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {object} oBarMarker  new value for property <code>barMarker</code>
 * @return {sap.service.visualization.chart.Bar} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.service.visualization.chart.Bar.prototype.setBarMarker = function(oBarMarker) { return new sap.service.visualization.chart.Bar(); };

/**
 * 
 * Setter for the aggregated <code>dataset</code>.
 * @param oDataset {sap.service.visualization.dataset.SimpleDMDataset}
 * @return {sap.service.visualization.chart.Bar} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.service.visualization.chart.Bar.prototype.setDataset = function(oDataset) { return new sap.service.visualization.chart.Bar(); };

/**
 * 
 * Setter for property <code>defaultSelectedItems</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {object[]} aDefaultSelectedItems  new value for property <code>defaultSelectedItems</code>
 * @return {sap.service.visualization.chart.Bar} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.service.visualization.chart.Bar.prototype.setDefaultSelectedItems = function(aDefaultSelectedItems) { return new sap.service.visualization.chart.Bar(); };

/**
 * 
 * Setter for property <code>deselectEnabled</code>.
 * </p><p>
 * Default value is <code>true</code> 
 * @param {boolean} bDeselectEnabled  new value for property <code>deselectEnabled</code>
 * @return {sap.service.visualization.chart.Bar} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.service.visualization.chart.Bar.prototype.setDeselectEnabled = function(bDeselectEnabled) { return new sap.service.visualization.chart.Bar(); };

/**
 * 
 * Setter for property <code>height</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {sap.ui.core.CSSSize} sHeight  new value for property <code>height</code>
 * @return {sap.service.visualization.chart.Bar} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.service.visualization.chart.Bar.prototype.setHeight = function(sHeight) { return new sap.service.visualization.chart.Bar(); };

/**
 * 
 * Setter for property <code>legendDirection</code>.
 * </p><p>
 * Default value is <code>right</code> 
 * @param {string} sLegendDirection  new value for property <code>legendDirection</code>
 * @return {sap.service.visualization.chart.Bar} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.service.visualization.chart.Bar.prototype.setLegendDirection = function(sLegendDirection) { return new sap.service.visualization.chart.Bar(); };

/**
 * 
 * Setter for property <code>legendFirst</code>.
 * </p><p>
 * Default value is <code>false</code> 
 * @param {boolean} bLegendFirst  new value for property <code>legendFirst</code>
 * @return {sap.service.visualization.chart.Bar} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.service.visualization.chart.Bar.prototype.setLegendFirst = function(bLegendFirst) { return new sap.service.visualization.chart.Bar(); };

/**
 * 
 * Setter for property <code>legendFormatString</code>.
 * </p><p>
 * Default value is <code>['']</code> 
 * @param {string[]} aLegendFormatString  new value for property <code>legendFormatString</code>
 * @return {sap.service.visualization.chart.Bar} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.service.visualization.chart.Bar.prototype.setLegendFormatString = function(aLegendFormatString) { return new sap.service.visualization.chart.Bar(); };

/**
 * 
 * Setter for property <code>legendHorizontalOffset</code>.
 * </p><p>
 * Default value is <code>0</code> 
 * @param {int} iLegendHorizontalOffset  new value for property <code>legendHorizontalOffset</code>
 * @return {sap.service.visualization.chart.Bar} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.service.visualization.chart.Bar.prototype.setLegendHorizontalOffset = function(iLegendHorizontalOffset) { return new sap.service.visualization.chart.Bar(); };

/**
 * 
 * Setter for property <code>legendVerticalOffset</code>.
 * </p><p>
 * Default value is <code>0</code> 
 * @param {int} iLegendVerticalOffset  new value for property <code>legendVerticalOffset</code>
 * @return {sap.service.visualization.chart.Bar} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.service.visualization.chart.Bar.prototype.setLegendVerticalOffset = function(iLegendVerticalOffset) { return new sap.service.visualization.chart.Bar(); };

/**
 * 
 * Setter for property <code>measures</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {object[]} aMeasures  new value for property <code>measures</code>
 * @return {sap.service.visualization.chart.Bar} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.service.visualization.chart.Bar.prototype.setMeasures = function(aMeasures) { return new sap.service.visualization.chart.Bar(); };

/**
 * 
 * Setter for property <code>selectionMode</code>.
 * </p><p>
 * Default value is <code>single</code> 
 * @param {string} sSelectionMode  new value for property <code>selectionMode</code>
 * @return {sap.service.visualization.chart.Bar} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.service.visualization.chart.Bar.prototype.setSelectionMode = function(sSelectionMode) { return new sap.service.visualization.chart.Bar(); };

/**
 * 
 * Setter for property <code>showLegend</code>.
 * </p><p>
 * Default value is <code>true</code> 
 * @param {boolean} bShowLegend  new value for property <code>showLegend</code>
 * @return {sap.service.visualization.chart.Bar} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.service.visualization.chart.Bar.prototype.setShowLegend = function(bShowLegend) { return new sap.service.visualization.chart.Bar(); };

/**
 * 
 * Setter for property <code>showTitle</code>.
 * </p><p>
 * Default value is <code>true</code> 
 * @param {boolean} bShowTitle  new value for property <code>showTitle</code>
 * @return {sap.service.visualization.chart.Bar} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.service.visualization.chart.Bar.prototype.setShowTitle = function(bShowTitle) { return new sap.service.visualization.chart.Bar(); };

/**
 * 
 * Setter for property <code>subTitle</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {string} sSubTitle  new value for property <code>subTitle</code>
 * @return {sap.service.visualization.chart.Bar} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.service.visualization.chart.Bar.prototype.setSubTitle = function(sSubTitle) { return new sap.service.visualization.chart.Bar(); };

/**
 * 
 * Setter for property <code>subTitleFormatString</code>.
 * </p><p>
 * Default value is <code>''</code> 
 * @param {string} sSubTitleFormatString  new value for property <code>subTitleFormatString</code>
 * @return {sap.service.visualization.chart.Bar} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.service.visualization.chart.Bar.prototype.setSubTitleFormatString = function(sSubTitleFormatString) { return new sap.service.visualization.chart.Bar(); };

/**
 * 
 * Setter for property <code>subTitleHorizontalAlign</code>.
 * </p><p>
 * Default value is <code>center</code> 
 * @param {string} sSubTitleHorizontalAlign  new value for property <code>subTitleHorizontalAlign</code>
 * @return {sap.service.visualization.chart.Bar} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.service.visualization.chart.Bar.prototype.setSubTitleHorizontalAlign = function(sSubTitleHorizontalAlign) { return new sap.service.visualization.chart.Bar(); };

/**
 * 
 * Setter for property <code>title</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {string} sTitle  new value for property <code>title</code>
 * @return {sap.service.visualization.chart.Bar} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.service.visualization.chart.Bar.prototype.setTitle = function(sTitle) { return new sap.service.visualization.chart.Bar(); };

/**
 * 
 * Setter for property <code>titleFormatString</code>.
 * </p><p>
 * Default value is <code>''</code> 
 * @param {string} sTitleFormatString  new value for property <code>titleFormatString</code>
 * @return {sap.service.visualization.chart.Bar} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.service.visualization.chart.Bar.prototype.setTitleFormatString = function(sTitleFormatString) { return new sap.service.visualization.chart.Bar(); };

/**
 * 
 * Setter for property <code>titleHorizontalAlign</code>.
 * </p><p>
 * Default value is <code>center</code> 
 * @param {string} sTitleHorizontalAlign  new value for property <code>titleHorizontalAlign</code>
 * @return {sap.service.visualization.chart.Bar} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.service.visualization.chart.Bar.prototype.setTitleHorizontalAlign = function(sTitleHorizontalAlign) { return new sap.service.visualization.chart.Bar(); };

/**
 * 
 * Setter for property <code>width</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {sap.ui.core.CSSSize} sWidth  new value for property <code>width</code>
 * @return {sap.service.visualization.chart.Bar} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.service.visualization.chart.Bar.prototype.setWidth = function(sWidth) { return new sap.service.visualization.chart.Bar(); };

/**
 * 
 * Setter for property <code>xAxis</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {object[]} aXAxis  new value for property <code>xAxis</code>
 * @return {sap.service.visualization.chart.Bar} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.service.visualization.chart.Bar.prototype.setXAxis = function(aXAxis) { return new sap.service.visualization.chart.Bar(); };

/**
 * 
 * Setter for property <code>yAxis</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {object[]} aYAxis  new value for property <code>yAxis</code>
 * @return {sap.service.visualization.chart.Bar} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.service.visualization.chart.Bar.prototype.setYAxis = function(aYAxis) { return new sap.service.visualization.chart.Bar(); };


// ---- sap.service.visualization.chart.Column --------------------------------------------------------------------------

/**
 * 
 * Constructor for a new chart/Column.
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
 * <li>{@link #getWidth width} : sap.ui.core.CSSSize</li>
 * <li>{@link #getHeight height} : sap.ui.core.CSSSize</li>
 * <li>{@link #getDeselectEnabled deselectEnabled} : boolean (default: true)</li>
 * <li>{@link #getSelectionMode selectionMode} : string (default: 'single')</li>
 * <li>{@link #getLegendFirst legendFirst} : boolean (default: false)</li>
 * <li>{@link #getLegendDirection legendDirection} : string (default: 'right')</li>
 * <li>{@link #getLegendVerticalOffset legendVerticalOffset} : int (default: 0)</li>
 * <li>{@link #getLegendHorizontalOffset legendHorizontalOffset} : int (default: 0)</li>
 * <li>{@link #getDefaultSelectedItems defaultSelectedItems} : object[]</li>
 * <li>{@link #getMeasures measures} : object[]</li>
 * <li>{@link #getBarMarker barMarker} : object</li>
 * <li>{@link #getShowLegend showLegend} : boolean (default: true)</li>
 * <li>{@link #getLegendFormatString legendFormatString} : string[] (default: [''])</li>
 * <li>{@link #getTitle title} : string</li>
 * <li>{@link #getTitleHorizontalAlign titleHorizontalAlign} : string (default: 'center')</li>
 * <li>{@link #getSubTitle subTitle} : string</li>
 * <li>{@link #getSubTitleHorizontalAlign subTitleHorizontalAlign} : string (default: 'center')</li>
 * <li>{@link #getShowTitle showTitle} : boolean (default: true)</li>
 * <li>{@link #getTitleFormatString titleFormatString} : string (default: '')</li>
 * <li>{@link #getSubTitleFormatString subTitleFormatString} : string (default: '')</li>
 * <li>{@link #getXAxis xAxis} : object[]</li>
 * <li>{@link #getYAxis yAxis} : object[]</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getDataset dataset} : sap.service.visualization.dataset.SimpleDMDataset</li></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link sap.service.visualization.chart.Column#event:selectData selectData} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
 * </li>
 * </ul> 
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * </p><p>
 * Is used for show a Column chart with feeding data. The API
 * provides data feeding, and a set of behavior of the column chart.
 * @extends sap.ui.core.Control
 * @version 1.15.1-SNAPSHOT
 * @constructor   
 * @public
 * @deprecated Since version 1.7.2. 
 * This library has been deprecated in favor of the new charting library sap.viz. Please migrate as soon as possible as this older library will be removed from the SAPUI5 delivery in one of the next releases.
 * 
 */
sap.service.visualization.chart.Column = function(sId,mSettings) {};
/**
 * 
 * this event is bind to chart, the chart will response all the information of the rectangle of you selected on column. 
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 */
sap.service.visualization.chart.Column.prototype.selectData = function(oControlEvent) { return null; };

/**
 * 
 * Attach event handler <code>fnFunction</code> to the 'selectData' event of this <code>sap.service.visualization.chart.Column</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.service.visualization.chart.Column</code>.<br/> itself. 
 * </p><p>
 * this event is bind to chart, the chart will response all the information of the rectangle of you selected on column. 
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener=this] Context object to call the event handler with. Defaults to this <code>sap.service.visualization.chart.Column</code>.<br/> itself.
 * @return {sap.service.visualization.chart.Column} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.service.visualization.chart.Column.prototype.attachSelectData = function(oData,fnFunction,oListener) { return new sap.service.visualization.chart.Column(); };

/**
 * 
 * Destroys the dataset in the aggregation 
 * named <code>dataset</code>.
 * @return {sap.service.visualization.chart.Column} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.service.visualization.chart.Column.prototype.destroyDataset = function() { return new sap.service.visualization.chart.Column(); };

/**
 * 
 * Detach event handler <code>fnFunction</code> from the 'selectData' event of this <code>sap.service.visualization.chart.Column</code>.<br/>
 * </p><p>
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.service.visualization.chart.Column} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.service.visualization.chart.Column.prototype.detachSelectData = function(fnFunction,oListener) { return new sap.service.visualization.chart.Column(); };

/**
 * 
 * Creates a new subclass of class sap.service.visualization.chart.Column with name <code>sClassName</code> 
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
sap.service.visualization.chart.Column.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * 
 * Fire event selectData to attached listeners.
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.service.visualization.chart.Column} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.service.visualization.chart.Column.prototype.fireSelectData = function(mArguments) { return new sap.service.visualization.chart.Column(); };

/**
 * 
 * Getter for property <code>barMarker</code>.
 * for each object:{barMarkerSize//It is for all measures. When the bar size is too large, it only can draw the limited value. It can not be less than 0.}.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {object} the value of property <code>barMarker</code>
 * @public
 * 
 */
sap.service.visualization.chart.Column.prototype.getBarMarker = function() { return new Object(); };

/**
 * 
 * Getter for aggregation <code>dataset</code>.<br/>
 * chart use this aggregation to get data feed.
 * @return {sap.service.visualization.dataset.SimpleDMDataset}
 * @public
 * 
 */
sap.service.visualization.chart.Column.prototype.getDataset = function() { return new sap.service.visualization.dataset.SimpleDMDataset(); };

/**
 * 
 * Getter for property <code>defaultSelectedItems</code>.
 * the default selected column index.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {object[]} the value of property <code>defaultSelectedItems</code>
 * @public
 * 
 */
sap.service.visualization.chart.Column.prototype.getDefaultSelectedItems = function() { return new Array(); };

/**
 * 
 * Getter for property <code>deselectEnabled</code>.
 * de-selectable for measure items. Be noted that it cannot be updated after chart initialization.
 * </p><p>
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>deselectEnabled</code>
 * @public
 * 
 */
sap.service.visualization.chart.Column.prototype.getDeselectEnabled = function() { return false; };

/**
 * 
 * Getter for property <code>height</code>.
 * the chart height.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {sap.ui.core.CSSSize} the value of property <code>height</code>
 * @public
 * 
 */
sap.service.visualization.chart.Column.prototype.getHeight = function() { return new sap.ui.core.CSSSize(); };

/**
 * 
 * Getter for property <code>legendDirection</code>.
 * the position of legend located at, left|right|top|bottom.
 * </p><p>
 * Default value is <code>right</code>
 * @return {string} the value of property <code>legendDirection</code>
 * @public
 * 
 */
sap.service.visualization.chart.Column.prototype.getLegendDirection = function() { return ""; };

/**
 * 
 * Getter for property <code>legendFirst</code>.
 * first ensure to plot legend, then the chart area plot.
 * </p><p>
 * Default value is <code>false</code>
 * @return {boolean} the value of property <code>legendFirst</code>
 * @public
 * 
 */
sap.service.visualization.chart.Column.prototype.getLegendFirst = function() { return false; };

/**
 * 
 * Getter for property <code>legendFormatString</code>.
 * the format style for legend. the format for title number default is [''], numeric :'0.00', Currency: '$"#,##0.00"' ,percent:'0.00%',Date:'M/dd/yyyy', time:'h:mm:ss A/P'. If feed not enough then reuse the last one.
 * </p><p>
 * Default value is <code>['']</code>
 * @return {string[]} the value of property <code>legendFormatString</code>
 * @public
 * 
 */
sap.service.visualization.chart.Column.prototype.getLegendFormatString = function() { return new Array(); };

/**
 * 
 * Getter for property <code>legendHorizontalOffset</code>.
 * the offset of the legend, used to adjust the position of legend. if position top or bottom, positive, legend will move right, minus left.
 * </p><p>
 * Default value is <code>0</code>
 * @return {int} the value of property <code>legendHorizontalOffset</code>
 * @public
 * 
 */
sap.service.visualization.chart.Column.prototype.getLegendHorizontalOffset = function() { return 0; };

/**
 * 
 * Getter for property <code>legendVerticalOffset</code>.
 * the offset of the legend, used to adjust the position of legend.if left or right, positive, legend will move up,minus down.
 * </p><p>
 * Default value is <code>0</code>
 * @return {int} the value of property <code>legendVerticalOffset</code>
 * @public
 * 
 */
sap.service.visualization.chart.Column.prototype.getLegendVerticalOffset = function() { return 0; };

/**
 * 
 * Getter for property <code>measures</code>.
 * for each object:{ valueAxis: 0, should be valid index in your value axis (can be xAxis or yAxis) columnMarkerSize: 20}.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {object[]} the value of property <code>measures</code>
 * @public
 * 
 */
sap.service.visualization.chart.Column.prototype.getMeasures = function() { return new Array(); };

/**
 * 
 * Getter for property <code>selectionMode</code>.
 * default value is false, single: you can just select one slice; none : no slice can be selected.
 * </p><p>
 * Default value is <code>single</code>
 * @return {string} the value of property <code>selectionMode</code>
 * @public
 * 
 */
sap.service.visualization.chart.Column.prototype.getSelectionMode = function() { return ""; };

/**
 * 
 * Getter for property <code>showLegend</code>.
 * show/hide legend.
 * </p><p>
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>showLegend</code>
 * @public
 * 
 */
sap.service.visualization.chart.Column.prototype.getShowLegend = function() { return false; };

/**
 * 
 * Getter for property <code>showTitle</code>.
 * show/hide title.
 * </p><p>
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>showTitle</code>
 * @public
 * 
 */
sap.service.visualization.chart.Column.prototype.getShowTitle = function() { return false; };

/**
 * 
 * Getter for property <code>subTitle</code>.
 * sub title text.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {string} the value of property <code>subTitle</code>
 * @public
 * 
 */
sap.service.visualization.chart.Column.prototype.getSubTitle = function() { return ""; };

/**
 * 
 * Getter for property <code>subTitleFormatString</code>.
 * the format style for sub title. numeric :'0.00', Currency: '$"#,##0.00"' ,percent:'0.00%',Date:'M/dd/yyyy', time:'h:mm:ss A/P'.
 * </p><p>
 * Default value is <code>''</code>
 * @return {string} the value of property <code>subTitleFormatString</code>
 * @public
 * 
 */
sap.service.visualization.chart.Column.prototype.getSubTitleFormatString = function() { return ""; };

/**
 * 
 * Getter for property <code>subTitleHorizontalAlign</code>.
 * the title align left|center|right.
 * </p><p>
 * Default value is <code>center</code>
 * @return {string} the value of property <code>subTitleHorizontalAlign</code>
 * @public
 * 
 */
sap.service.visualization.chart.Column.prototype.getSubTitleHorizontalAlign = function() { return ""; };

/**
 * 
 * Getter for property <code>title</code>.
 * title text.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {string} the value of property <code>title</code>
 * @public
 * 
 */
sap.service.visualization.chart.Column.prototype.getTitle = function() { return ""; };

/**
 * 
 * Getter for property <code>titleFormatString</code>.
 * the format style for main title. numeric :'0.00', Currency: '$"#,##0.00"' ,percent:'0.00%',Date:'M/dd/yyyy', time:'h:mm:ss A/P'.
 * </p><p>
 * Default value is <code>''</code>
 * @return {string} the value of property <code>titleFormatString</code>
 * @public
 * 
 */
sap.service.visualization.chart.Column.prototype.getTitleFormatString = function() { return ""; };

/**
 * 
 * Getter for property <code>titleHorizontalAlign</code>.
 * the title align left|center|right.
 * </p><p>
 * Default value is <code>center</code>
 * @return {string} the value of property <code>titleHorizontalAlign</code>
 * @public
 * 
 */
sap.service.visualization.chart.Column.prototype.getTitleHorizontalAlign = function() { return ""; };

/**
 * 
 * Getter for property <code>width</code>.
 * the chart width.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {sap.ui.core.CSSSize} the value of property <code>width</code>
 * @public
 * 
 */
sap.service.visualization.chart.Column.prototype.getWidth = function() { return new sap.ui.core.CSSSize(); };

/**
 * 
 * Getter for property <code>xAxis</code>.
 * for each object:{
 * showMajorTicks : true,// default value = undefined,show/hide major grid line and only works on value axis
 * showMinorTicks : true,// default value = false,show/hide minor grid line and only works on value axis. If showMajor is false, this option will not work
 * title : 'X Axis Title',
 * titleFormatString : '', //refer to legend format.
 * labelsFormatString : [''],//refer to legend format.
 * showTitle : true,//show or hide title showLabels : true, show or hide labels
 * gridLine : {
 * showMajor : false, //the major grid line
 * majorThickness : 1, the thickness for major tick.
 * showMinor : false, //the minor grid line.
 * minorThickness : 1, the thickness of minor tick.
 * showSub : true, //default value=false, show/hide sub grid line and only works on dimension axis }
 * }.
 * For major and minor ticks, they only works on value axis, it takes effect but the behavior is unexpected.
 * Set the grid line releated properties.For value axis, only showMajor and showMinor options work.
 * If showSub is set to true on value axis, it takes effect but the behavior is unexpected.
 * For dimension axis, only showSub option works.
 * If showMajor and showMinor options are set to true on dimension axis, it takes effect but the behavior is unexpected.
 * </p><p>
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {object[]} the value of property <code>xAxis</code>
 * @public
 * 
 */
sap.service.visualization.chart.Column.prototype.getXAxis = function() { return new Array(); };

/**
 * 
 * Getter for property <code>yAxis</code>.
 * the same as xAxis.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {object[]} the value of property <code>yAxis</code>
 * @public
 * 
 */
sap.service.visualization.chart.Column.prototype.getYAxis = function() { return new Array(); };

/**
 * 
 * Setter for property <code>barMarker</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {object} oBarMarker  new value for property <code>barMarker</code>
 * @return {sap.service.visualization.chart.Column} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.service.visualization.chart.Column.prototype.setBarMarker = function(oBarMarker) { return new sap.service.visualization.chart.Column(); };

/**
 * 
 * Setter for the aggregated <code>dataset</code>.
 * @param oDataset {sap.service.visualization.dataset.SimpleDMDataset}
 * @return {sap.service.visualization.chart.Column} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.service.visualization.chart.Column.prototype.setDataset = function(oDataset) { return new sap.service.visualization.chart.Column(); };

/**
 * 
 * Setter for property <code>defaultSelectedItems</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {object[]} aDefaultSelectedItems  new value for property <code>defaultSelectedItems</code>
 * @return {sap.service.visualization.chart.Column} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.service.visualization.chart.Column.prototype.setDefaultSelectedItems = function(aDefaultSelectedItems) { return new sap.service.visualization.chart.Column(); };

/**
 * 
 * Setter for property <code>deselectEnabled</code>.
 * </p><p>
 * Default value is <code>true</code> 
 * @param {boolean} bDeselectEnabled  new value for property <code>deselectEnabled</code>
 * @return {sap.service.visualization.chart.Column} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.service.visualization.chart.Column.prototype.setDeselectEnabled = function(bDeselectEnabled) { return new sap.service.visualization.chart.Column(); };

/**
 * 
 * Setter for property <code>height</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {sap.ui.core.CSSSize} sHeight  new value for property <code>height</code>
 * @return {sap.service.visualization.chart.Column} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.service.visualization.chart.Column.prototype.setHeight = function(sHeight) { return new sap.service.visualization.chart.Column(); };

/**
 * 
 * Setter for property <code>legendDirection</code>.
 * </p><p>
 * Default value is <code>right</code> 
 * @param {string} sLegendDirection  new value for property <code>legendDirection</code>
 * @return {sap.service.visualization.chart.Column} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.service.visualization.chart.Column.prototype.setLegendDirection = function(sLegendDirection) { return new sap.service.visualization.chart.Column(); };

/**
 * 
 * Setter for property <code>legendFirst</code>.
 * </p><p>
 * Default value is <code>false</code> 
 * @param {boolean} bLegendFirst  new value for property <code>legendFirst</code>
 * @return {sap.service.visualization.chart.Column} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.service.visualization.chart.Column.prototype.setLegendFirst = function(bLegendFirst) { return new sap.service.visualization.chart.Column(); };

/**
 * 
 * Setter for property <code>legendFormatString</code>.
 * </p><p>
 * Default value is <code>['']</code> 
 * @param {string[]} aLegendFormatString  new value for property <code>legendFormatString</code>
 * @return {sap.service.visualization.chart.Column} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.service.visualization.chart.Column.prototype.setLegendFormatString = function(aLegendFormatString) { return new sap.service.visualization.chart.Column(); };

/**
 * 
 * Setter for property <code>legendHorizontalOffset</code>.
 * </p><p>
 * Default value is <code>0</code> 
 * @param {int} iLegendHorizontalOffset  new value for property <code>legendHorizontalOffset</code>
 * @return {sap.service.visualization.chart.Column} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.service.visualization.chart.Column.prototype.setLegendHorizontalOffset = function(iLegendHorizontalOffset) { return new sap.service.visualization.chart.Column(); };

/**
 * 
 * Setter for property <code>legendVerticalOffset</code>.
 * </p><p>
 * Default value is <code>0</code> 
 * @param {int} iLegendVerticalOffset  new value for property <code>legendVerticalOffset</code>
 * @return {sap.service.visualization.chart.Column} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.service.visualization.chart.Column.prototype.setLegendVerticalOffset = function(iLegendVerticalOffset) { return new sap.service.visualization.chart.Column(); };

/**
 * 
 * Setter for property <code>measures</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {object[]} aMeasures  new value for property <code>measures</code>
 * @return {sap.service.visualization.chart.Column} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.service.visualization.chart.Column.prototype.setMeasures = function(aMeasures) { return new sap.service.visualization.chart.Column(); };

/**
 * 
 * Setter for property <code>selectionMode</code>.
 * </p><p>
 * Default value is <code>single</code> 
 * @param {string} sSelectionMode  new value for property <code>selectionMode</code>
 * @return {sap.service.visualization.chart.Column} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.service.visualization.chart.Column.prototype.setSelectionMode = function(sSelectionMode) { return new sap.service.visualization.chart.Column(); };

/**
 * 
 * Setter for property <code>showLegend</code>.
 * </p><p>
 * Default value is <code>true</code> 
 * @param {boolean} bShowLegend  new value for property <code>showLegend</code>
 * @return {sap.service.visualization.chart.Column} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.service.visualization.chart.Column.prototype.setShowLegend = function(bShowLegend) { return new sap.service.visualization.chart.Column(); };

/**
 * 
 * Setter for property <code>showTitle</code>.
 * </p><p>
 * Default value is <code>true</code> 
 * @param {boolean} bShowTitle  new value for property <code>showTitle</code>
 * @return {sap.service.visualization.chart.Column} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.service.visualization.chart.Column.prototype.setShowTitle = function(bShowTitle) { return new sap.service.visualization.chart.Column(); };

/**
 * 
 * Setter for property <code>subTitle</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {string} sSubTitle  new value for property <code>subTitle</code>
 * @return {sap.service.visualization.chart.Column} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.service.visualization.chart.Column.prototype.setSubTitle = function(sSubTitle) { return new sap.service.visualization.chart.Column(); };

/**
 * 
 * Setter for property <code>subTitleFormatString</code>.
 * </p><p>
 * Default value is <code>''</code> 
 * @param {string} sSubTitleFormatString  new value for property <code>subTitleFormatString</code>
 * @return {sap.service.visualization.chart.Column} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.service.visualization.chart.Column.prototype.setSubTitleFormatString = function(sSubTitleFormatString) { return new sap.service.visualization.chart.Column(); };

/**
 * 
 * Setter for property <code>subTitleHorizontalAlign</code>.
 * </p><p>
 * Default value is <code>center</code> 
 * @param {string} sSubTitleHorizontalAlign  new value for property <code>subTitleHorizontalAlign</code>
 * @return {sap.service.visualization.chart.Column} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.service.visualization.chart.Column.prototype.setSubTitleHorizontalAlign = function(sSubTitleHorizontalAlign) { return new sap.service.visualization.chart.Column(); };

/**
 * 
 * Setter for property <code>title</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {string} sTitle  new value for property <code>title</code>
 * @return {sap.service.visualization.chart.Column} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.service.visualization.chart.Column.prototype.setTitle = function(sTitle) { return new sap.service.visualization.chart.Column(); };

/**
 * 
 * Setter for property <code>titleFormatString</code>.
 * </p><p>
 * Default value is <code>''</code> 
 * @param {string} sTitleFormatString  new value for property <code>titleFormatString</code>
 * @return {sap.service.visualization.chart.Column} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.service.visualization.chart.Column.prototype.setTitleFormatString = function(sTitleFormatString) { return new sap.service.visualization.chart.Column(); };

/**
 * 
 * Setter for property <code>titleHorizontalAlign</code>.
 * </p><p>
 * Default value is <code>center</code> 
 * @param {string} sTitleHorizontalAlign  new value for property <code>titleHorizontalAlign</code>
 * @return {sap.service.visualization.chart.Column} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.service.visualization.chart.Column.prototype.setTitleHorizontalAlign = function(sTitleHorizontalAlign) { return new sap.service.visualization.chart.Column(); };

/**
 * 
 * Setter for property <code>width</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {sap.ui.core.CSSSize} sWidth  new value for property <code>width</code>
 * @return {sap.service.visualization.chart.Column} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.service.visualization.chart.Column.prototype.setWidth = function(sWidth) { return new sap.service.visualization.chart.Column(); };

/**
 * 
 * Setter for property <code>xAxis</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {object[]} aXAxis  new value for property <code>xAxis</code>
 * @return {sap.service.visualization.chart.Column} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.service.visualization.chart.Column.prototype.setXAxis = function(aXAxis) { return new sap.service.visualization.chart.Column(); };

/**
 * 
 * Setter for property <code>yAxis</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {object[]} aYAxis  new value for property <code>yAxis</code>
 * @return {sap.service.visualization.chart.Column} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.service.visualization.chart.Column.prototype.setYAxis = function(aYAxis) { return new sap.service.visualization.chart.Column(); };


// ---- sap.service.visualization.chart.Combination --------------------------------------------------------------------------

/**
 * 
 * Constructor for a new chart/Combination.
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
 * <li>{@link #getWidth width} : sap.ui.core.CSSSize</li>
 * <li>{@link #getHeight height} : sap.ui.core.CSSSize</li>
 * <li>{@link #getDeselectEnabled deselectEnabled} : boolean (default: true)</li>
 * <li>{@link #getSelectionMode selectionMode} : string (default: 'single')</li>
 * <li>{@link #getDefaultSelectedItems defaultSelectedItems} : object[]</li>
 * <li>{@link #getLegendFirst legendFirst} : boolean (default: false)</li>
 * <li>{@link #getLegendDirection legendDirection} : string (default: 'right')</li>
 * <li>{@link #getLegendVerticalOffset legendVerticalOffset} : int (default: 0)</li>
 * <li>{@link #getLegendHorizontalOffset legendHorizontalOffset} : int (default: 0)</li>
 * <li>{@link #getMeasures measures} : object[]</li>
 * <li>{@link #getLineMarkerAndThickness lineMarkerAndThickness} : object (default: { lineMarkerSize: 10,lineThickness: 1})</li>
 * <li>{@link #getBarMarker barMarker} : object</li>
 * <li>{@link #getShowLegend showLegend} : boolean (default: true)</li>
 * <li>{@link #getLegendFormatString legendFormatString} : string[] (default: [''])</li>
 * <li>{@link #getTitle title} : string</li>
 * <li>{@link #getTitleHorizontalAlign titleHorizontalAlign} : string (default: 'center')</li>
 * <li>{@link #getSubTitle subTitle} : string</li>
 * <li>{@link #getSubTitleHorizontalAlign subTitleHorizontalAlign} : string (default: 'center')</li>
 * <li>{@link #getShowTitle showTitle} : boolean (default: true)</li>
 * <li>{@link #getTitleFormatString titleFormatString} : string (default: '')</li>
 * <li>{@link #getSubTitleFormatString subTitleFormatString} : string (default: '')</li>
 * <li>{@link #getXAxis xAxis} : object[]</li>
 * <li>{@link #getYAxis yAxis} : object[]</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getDataset dataset} : sap.service.visualization.dataset.SimpleDMDataset</li></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link sap.service.visualization.chart.Combination#event:selectData selectData} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
 * </li>
 * </ul> 
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * </p><p>
 * Is used for show a Combination chart with feeding data. The API
 * provides data feeding, and a set of behavior of the combination chart.
 * @extends sap.ui.core.Control
 * @version 1.15.1-SNAPSHOT
 * @constructor   
 * @public
 * @deprecated Since version 1.7.2. 
 * This library has been deprecated in favor of the new charting library sap.viz. Please migrate as soon as possible as this older library will be removed from the SAPUI5 delivery in one of the next releases.
 * 
 */
sap.service.visualization.chart.Combination = function(sId,mSettings) {};
/**
 * 
 * this event is bind to chart, the chart will response all the information of the rectangle of you selected on column. 
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 */
sap.service.visualization.chart.Combination.prototype.selectData = function(oControlEvent) { return null; };

/**
 * 
 * Attach event handler <code>fnFunction</code> to the 'selectData' event of this <code>sap.service.visualization.chart.Combination</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.service.visualization.chart.Combination</code>.<br/> itself. 
 * </p><p>
 * this event is bind to chart, the chart will response all the information of the rectangle of you selected on column. 
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener=this] Context object to call the event handler with. Defaults to this <code>sap.service.visualization.chart.Combination</code>.<br/> itself.
 * @return {sap.service.visualization.chart.Combination} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.service.visualization.chart.Combination.prototype.attachSelectData = function(oData,fnFunction,oListener) { return new sap.service.visualization.chart.Combination(); };

/**
 * 
 * Destroys the dataset in the aggregation 
 * named <code>dataset</code>.
 * @return {sap.service.visualization.chart.Combination} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.service.visualization.chart.Combination.prototype.destroyDataset = function() { return new sap.service.visualization.chart.Combination(); };

/**
 * 
 * Detach event handler <code>fnFunction</code> from the 'selectData' event of this <code>sap.service.visualization.chart.Combination</code>.<br/>
 * </p><p>
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.service.visualization.chart.Combination} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.service.visualization.chart.Combination.prototype.detachSelectData = function(fnFunction,oListener) { return new sap.service.visualization.chart.Combination(); };

/**
 * 
 * Creates a new subclass of class sap.service.visualization.chart.Combination with name <code>sClassName</code> 
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
sap.service.visualization.chart.Combination.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * 
 * Fire event selectData to attached listeners.
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.service.visualization.chart.Combination} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.service.visualization.chart.Combination.prototype.fireSelectData = function(mArguments) { return new sap.service.visualization.chart.Combination(); };

/**
 * 
 * Getter for property <code>barMarker</code>.
 * for each object:{barMarkerSize//It is for all measures. When the bar size is too large, it only can draw the limited value. It can not be less than 0.}.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {object} the value of property <code>barMarker</code>
 * @public
 * 
 */
sap.service.visualization.chart.Combination.prototype.getBarMarker = function() { return new Object(); };

/**
 * 
 * Getter for aggregation <code>dataset</code>.<br/>
 * chart use this aggregation to get data feed.
 * @return {sap.service.visualization.dataset.SimpleDMDataset}
 * @public
 * 
 */
sap.service.visualization.chart.Combination.prototype.getDataset = function() { return new sap.service.visualization.dataset.SimpleDMDataset(); };

/**
 * 
 * Getter for property <code>defaultSelectedItems</code>.
 * the default selected item index. for each object should be like: {measureIndex: 0, dimensionItemIndex : 3}
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {object[]} the value of property <code>defaultSelectedItems</code>
 * @public
 * 
 */
sap.service.visualization.chart.Combination.prototype.getDefaultSelectedItems = function() { return new Array(); };

/**
 * 
 * Getter for property <code>deselectEnabled</code>.
 * deselect enabled, first click the slice it will break away from the pie, then click other place the slice will be back.
 * </p><p>
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>deselectEnabled</code>
 * @public
 * 
 */
sap.service.visualization.chart.Combination.prototype.getDeselectEnabled = function() { return false; };

/**
 * 
 * Getter for property <code>height</code>.
 * the chart height.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {sap.ui.core.CSSSize} the value of property <code>height</code>
 * @public
 * 
 */
sap.service.visualization.chart.Combination.prototype.getHeight = function() { return new sap.ui.core.CSSSize(); };

/**
 * 
 * Getter for property <code>legendDirection</code>.
 * the position of legend located at, left|right|top|bottom.
 * </p><p>
 * Default value is <code>right</code>
 * @return {string} the value of property <code>legendDirection</code>
 * @public
 * 
 */
sap.service.visualization.chart.Combination.prototype.getLegendDirection = function() { return ""; };

/**
 * 
 * Getter for property <code>legendFirst</code>.
 * first ensure to plot legend, then the chart area plot.
 * </p><p>
 * Default value is <code>false</code>
 * @return {boolean} the value of property <code>legendFirst</code>
 * @public
 * 
 */
sap.service.visualization.chart.Combination.prototype.getLegendFirst = function() { return false; };

/**
 * 
 * Getter for property <code>legendFormatString</code>.
 * the format style for legend. the format for legend number default is [''], numeric :'0.00', Currency: $"#,##0.00",percent:'0.00%',Date:'M/dd/yyyy', time:'h:mm:ss A/P'. If feed not enough then reuse the last one.
 * </p><p>
 * Default value is <code>['']</code>
 * @return {string[]} the value of property <code>legendFormatString</code>
 * @public
 * 
 */
sap.service.visualization.chart.Combination.prototype.getLegendFormatString = function() { return new Array(); };

/**
 * 
 * Getter for property <code>legendHorizontalOffset</code>.
 * the offset of the legend, used to adjust the position of legend. if position top or bottom, positive, legend will move right, minus left.
 * </p><p>
 * Default value is <code>0</code>
 * @return {int} the value of property <code>legendHorizontalOffset</code>
 * @public
 * 
 */
sap.service.visualization.chart.Combination.prototype.getLegendHorizontalOffset = function() { return 0; };

/**
 * 
 * Getter for property <code>legendVerticalOffset</code>.
 * the offset of the legend, used to adjust the position of legend.if left or right, positive, legend will move up,minus down.
 * </p><p>
 * Default value is <code>0</code>
 * @return {int} the value of property <code>legendVerticalOffset</code>
 * @public
 * 
 */
sap.service.visualization.chart.Combination.prototype.getLegendVerticalOffset = function() { return 0; };

/**
 * 
 * Getter for property <code>lineMarkerAndThickness</code>.
 * for each object:{ lineMarkerSize: 0, //It is for all measures in line chart. When it is too large, it can only draw limited size. The default value is undefined means that the size is auto-calculated by viz chart. lineThickness: It is for all measures in line chart}.
 * </p><p>
 * Default value is <code>{ lineMarkerSize: 10,lineThickness: 1}</code>
 * @return {object} the value of property <code>lineMarkerAndThickness</code>
 * @public
 * 
 */
sap.service.visualization.chart.Combination.prototype.getLineMarkerAndThickness = function() { return new Object(); };

/**
 * 
 * Getter for property <code>measures</code>.
 * for each object:{type:bar|line, valueAxis: 0, Set valid index in your value axis (can be xAxis or yAxis),lineThickness: 3,//Set the line size of measure member.markerSymbol:circle,triangle,diamond,Set marker symbol of measure.}.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {object[]} the value of property <code>measures</code>
 * @public
 * 
 */
sap.service.visualization.chart.Combination.prototype.getMeasures = function() { return new Array(); };

/**
 * 
 * Getter for property <code>selectionMode</code>.
 * default value is false, single: you can just select one slice; none : no slice can be selected.
 * </p><p>
 * Default value is <code>single</code>
 * @return {string} the value of property <code>selectionMode</code>
 * @public
 * 
 */
sap.service.visualization.chart.Combination.prototype.getSelectionMode = function() { return ""; };

/**
 * 
 * Getter for property <code>showLegend</code>.
 * show/hide legend.
 * </p><p>
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>showLegend</code>
 * @public
 * 
 */
sap.service.visualization.chart.Combination.prototype.getShowLegend = function() { return false; };

/**
 * 
 * Getter for property <code>showTitle</code>.
 * show/hide title.
 * </p><p>
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>showTitle</code>
 * @public
 * 
 */
sap.service.visualization.chart.Combination.prototype.getShowTitle = function() { return false; };

/**
 * 
 * Getter for property <code>subTitle</code>.
 * sub title text.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {string} the value of property <code>subTitle</code>
 * @public
 * 
 */
sap.service.visualization.chart.Combination.prototype.getSubTitle = function() { return ""; };

/**
 * 
 * Getter for property <code>subTitleFormatString</code>.
 * the format style for sub title. numeric :'0.00', Currency: '$"#,##0.00"' ,percent:'0.00%',Date:'M/dd/yyyy', time:'h:mm:ss A/P'.
 * </p><p>
 * Default value is <code>''</code>
 * @return {string} the value of property <code>subTitleFormatString</code>
 * @public
 * 
 */
sap.service.visualization.chart.Combination.prototype.getSubTitleFormatString = function() { return ""; };

/**
 * 
 * Getter for property <code>subTitleHorizontalAlign</code>.
 * the title align left|center|right.
 * </p><p>
 * Default value is <code>center</code>
 * @return {string} the value of property <code>subTitleHorizontalAlign</code>
 * @public
 * 
 */
sap.service.visualization.chart.Combination.prototype.getSubTitleHorizontalAlign = function() { return ""; };

/**
 * 
 * Getter for property <code>title</code>.
 * title text.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {string} the value of property <code>title</code>
 * @public
 * 
 */
sap.service.visualization.chart.Combination.prototype.getTitle = function() { return ""; };

/**
 * 
 * Getter for property <code>titleFormatString</code>.
 * the format style for main title. numeric :'0.00', Currency: '$"#,##0.00"' ,percent:'0.00%',Date:'M/dd/yyyy', time:'h:mm:ss A/P'.
 * </p><p>
 * Default value is <code>''</code>
 * @return {string} the value of property <code>titleFormatString</code>
 * @public
 * 
 */
sap.service.visualization.chart.Combination.prototype.getTitleFormatString = function() { return ""; };

/**
 * 
 * Getter for property <code>titleHorizontalAlign</code>.
 * the title align left|center|right.
 * </p><p>
 * Default value is <code>center</code>
 * @return {string} the value of property <code>titleHorizontalAlign</code>
 * @public
 * 
 */
sap.service.visualization.chart.Combination.prototype.getTitleHorizontalAlign = function() { return ""; };

/**
 * 
 * Getter for property <code>width</code>.
 * the chart width.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {sap.ui.core.CSSSize} the value of property <code>width</code>
 * @public
 * 
 */
sap.service.visualization.chart.Combination.prototype.getWidth = function() { return new sap.ui.core.CSSSize(); };

/**
 * 
 * Getter for property <code>xAxis</code>.
 * for each object:{
 * showMajorTicks : true,// default value = undefined,show/hide major grid line and only works on value axis
 * showMinorTicks : true,// default value = false,show/hide minor grid line and only works on value axis. If showMajor is false, this option will not work
 * title : 'X Axis Title',
 * titleFormatString : '', //refer to legend number format.
 * labelsFormatString : [''],//refer to legend number format.
 * showTitle : true,//show or hide title showLabels : true, show or hide labels
 * gridLine : {
 * showMajor : false, //the major grid line
 * majorThickness : 1, the thickness for major tick.
 * showMinor : false, //the minor grid line.
 * minorThickness : 1, the thickness of minor tick.
 * showSub : true, //default value=false, show/hide sub grid line and only works on dimension axis }
 * }.
 * For major and minor ticks, they only works on value axis, it takes effect but the behavior is unexpected.
 * Set the grid line releated properties.For value axis, only showMajor and showMinor options work.
 * If showSub is set to true on value axis, it takes effect but the behavior is unexpected.
 * For dimension axis, only showSub option works.
 * If showMajor and showMinor options are set to true on dimension axis, it takes effect but the behavior is unexpected.
 * </p><p>
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {object[]} the value of property <code>xAxis</code>
 * @public
 * 
 */
sap.service.visualization.chart.Combination.prototype.getXAxis = function() { return new Array(); };

/**
 * 
 * Getter for property <code>yAxis</code>.
 * the same as xAxis.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {object[]} the value of property <code>yAxis</code>
 * @public
 * 
 */
sap.service.visualization.chart.Combination.prototype.getYAxis = function() { return new Array(); };

/**
 * 
 * Setter for property <code>barMarker</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {object} oBarMarker  new value for property <code>barMarker</code>
 * @return {sap.service.visualization.chart.Combination} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.service.visualization.chart.Combination.prototype.setBarMarker = function(oBarMarker) { return new sap.service.visualization.chart.Combination(); };

/**
 * 
 * Setter for the aggregated <code>dataset</code>.
 * @param oDataset {sap.service.visualization.dataset.SimpleDMDataset}
 * @return {sap.service.visualization.chart.Combination} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.service.visualization.chart.Combination.prototype.setDataset = function(oDataset) { return new sap.service.visualization.chart.Combination(); };

/**
 * 
 * Setter for property <code>defaultSelectedItems</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {object[]} aDefaultSelectedItems  new value for property <code>defaultSelectedItems</code>
 * @return {sap.service.visualization.chart.Combination} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.service.visualization.chart.Combination.prototype.setDefaultSelectedItems = function(aDefaultSelectedItems) { return new sap.service.visualization.chart.Combination(); };

/**
 * 
 * Setter for property <code>deselectEnabled</code>.
 * </p><p>
 * Default value is <code>true</code> 
 * @param {boolean} bDeselectEnabled  new value for property <code>deselectEnabled</code>
 * @return {sap.service.visualization.chart.Combination} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.service.visualization.chart.Combination.prototype.setDeselectEnabled = function(bDeselectEnabled) { return new sap.service.visualization.chart.Combination(); };

/**
 * 
 * Setter for property <code>height</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {sap.ui.core.CSSSize} sHeight  new value for property <code>height</code>
 * @return {sap.service.visualization.chart.Combination} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.service.visualization.chart.Combination.prototype.setHeight = function(sHeight) { return new sap.service.visualization.chart.Combination(); };

/**
 * 
 * Setter for property <code>legendDirection</code>.
 * </p><p>
 * Default value is <code>right</code> 
 * @param {string} sLegendDirection  new value for property <code>legendDirection</code>
 * @return {sap.service.visualization.chart.Combination} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.service.visualization.chart.Combination.prototype.setLegendDirection = function(sLegendDirection) { return new sap.service.visualization.chart.Combination(); };

/**
 * 
 * Setter for property <code>legendFirst</code>.
 * </p><p>
 * Default value is <code>false</code> 
 * @param {boolean} bLegendFirst  new value for property <code>legendFirst</code>
 * @return {sap.service.visualization.chart.Combination} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.service.visualization.chart.Combination.prototype.setLegendFirst = function(bLegendFirst) { return new sap.service.visualization.chart.Combination(); };

/**
 * 
 * Setter for property <code>legendFormatString</code>.
 * </p><p>
 * Default value is <code>['']</code> 
 * @param {string[]} aLegendFormatString  new value for property <code>legendFormatString</code>
 * @return {sap.service.visualization.chart.Combination} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.service.visualization.chart.Combination.prototype.setLegendFormatString = function(aLegendFormatString) { return new sap.service.visualization.chart.Combination(); };

/**
 * 
 * Setter for property <code>legendHorizontalOffset</code>.
 * </p><p>
 * Default value is <code>0</code> 
 * @param {int} iLegendHorizontalOffset  new value for property <code>legendHorizontalOffset</code>
 * @return {sap.service.visualization.chart.Combination} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.service.visualization.chart.Combination.prototype.setLegendHorizontalOffset = function(iLegendHorizontalOffset) { return new sap.service.visualization.chart.Combination(); };

/**
 * 
 * Setter for property <code>legendVerticalOffset</code>.
 * </p><p>
 * Default value is <code>0</code> 
 * @param {int} iLegendVerticalOffset  new value for property <code>legendVerticalOffset</code>
 * @return {sap.service.visualization.chart.Combination} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.service.visualization.chart.Combination.prototype.setLegendVerticalOffset = function(iLegendVerticalOffset) { return new sap.service.visualization.chart.Combination(); };

/**
 * 
 * Setter for property <code>lineMarkerAndThickness</code>.
 * </p><p>
 * Default value is <code>{ lineMarkerSize: 10,lineThickness: 1}</code> 
 * @param {object} oLineMarkerAndThickness  new value for property <code>lineMarkerAndThickness</code>
 * @return {sap.service.visualization.chart.Combination} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.service.visualization.chart.Combination.prototype.setLineMarkerAndThickness = function(oLineMarkerAndThickness) { return new sap.service.visualization.chart.Combination(); };

/**
 * 
 * Setter for property <code>measures</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {object[]} aMeasures  new value for property <code>measures</code>
 * @return {sap.service.visualization.chart.Combination} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.service.visualization.chart.Combination.prototype.setMeasures = function(aMeasures) { return new sap.service.visualization.chart.Combination(); };

/**
 * 
 * Setter for property <code>selectionMode</code>.
 * </p><p>
 * Default value is <code>single</code> 
 * @param {string} sSelectionMode  new value for property <code>selectionMode</code>
 * @return {sap.service.visualization.chart.Combination} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.service.visualization.chart.Combination.prototype.setSelectionMode = function(sSelectionMode) { return new sap.service.visualization.chart.Combination(); };

/**
 * 
 * Setter for property <code>showLegend</code>.
 * </p><p>
 * Default value is <code>true</code> 
 * @param {boolean} bShowLegend  new value for property <code>showLegend</code>
 * @return {sap.service.visualization.chart.Combination} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.service.visualization.chart.Combination.prototype.setShowLegend = function(bShowLegend) { return new sap.service.visualization.chart.Combination(); };

/**
 * 
 * Setter for property <code>showTitle</code>.
 * </p><p>
 * Default value is <code>true</code> 
 * @param {boolean} bShowTitle  new value for property <code>showTitle</code>
 * @return {sap.service.visualization.chart.Combination} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.service.visualization.chart.Combination.prototype.setShowTitle = function(bShowTitle) { return new sap.service.visualization.chart.Combination(); };

/**
 * 
 * Setter for property <code>subTitle</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {string} sSubTitle  new value for property <code>subTitle</code>
 * @return {sap.service.visualization.chart.Combination} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.service.visualization.chart.Combination.prototype.setSubTitle = function(sSubTitle) { return new sap.service.visualization.chart.Combination(); };

/**
 * 
 * Setter for property <code>subTitleFormatString</code>.
 * </p><p>
 * Default value is <code>''</code> 
 * @param {string} sSubTitleFormatString  new value for property <code>subTitleFormatString</code>
 * @return {sap.service.visualization.chart.Combination} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.service.visualization.chart.Combination.prototype.setSubTitleFormatString = function(sSubTitleFormatString) { return new sap.service.visualization.chart.Combination(); };

/**
 * 
 * Setter for property <code>subTitleHorizontalAlign</code>.
 * </p><p>
 * Default value is <code>center</code> 
 * @param {string} sSubTitleHorizontalAlign  new value for property <code>subTitleHorizontalAlign</code>
 * @return {sap.service.visualization.chart.Combination} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.service.visualization.chart.Combination.prototype.setSubTitleHorizontalAlign = function(sSubTitleHorizontalAlign) { return new sap.service.visualization.chart.Combination(); };

/**
 * 
 * Setter for property <code>title</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {string} sTitle  new value for property <code>title</code>
 * @return {sap.service.visualization.chart.Combination} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.service.visualization.chart.Combination.prototype.setTitle = function(sTitle) { return new sap.service.visualization.chart.Combination(); };

/**
 * 
 * Setter for property <code>titleFormatString</code>.
 * </p><p>
 * Default value is <code>''</code> 
 * @param {string} sTitleFormatString  new value for property <code>titleFormatString</code>
 * @return {sap.service.visualization.chart.Combination} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.service.visualization.chart.Combination.prototype.setTitleFormatString = function(sTitleFormatString) { return new sap.service.visualization.chart.Combination(); };

/**
 * 
 * Setter for property <code>titleHorizontalAlign</code>.
 * </p><p>
 * Default value is <code>center</code> 
 * @param {string} sTitleHorizontalAlign  new value for property <code>titleHorizontalAlign</code>
 * @return {sap.service.visualization.chart.Combination} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.service.visualization.chart.Combination.prototype.setTitleHorizontalAlign = function(sTitleHorizontalAlign) { return new sap.service.visualization.chart.Combination(); };

/**
 * 
 * Setter for property <code>width</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {sap.ui.core.CSSSize} sWidth  new value for property <code>width</code>
 * @return {sap.service.visualization.chart.Combination} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.service.visualization.chart.Combination.prototype.setWidth = function(sWidth) { return new sap.service.visualization.chart.Combination(); };

/**
 * 
 * Setter for property <code>xAxis</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {object[]} aXAxis  new value for property <code>xAxis</code>
 * @return {sap.service.visualization.chart.Combination} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.service.visualization.chart.Combination.prototype.setXAxis = function(aXAxis) { return new sap.service.visualization.chart.Combination(); };

/**
 * 
 * Setter for property <code>yAxis</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {object[]} aYAxis  new value for property <code>yAxis</code>
 * @return {sap.service.visualization.chart.Combination} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.service.visualization.chart.Combination.prototype.setYAxis = function(aYAxis) { return new sap.service.visualization.chart.Combination(); };


// ---- sap.service.visualization.chart.Line --------------------------------------------------------------------------

/**
 * 
 * Constructor for a new chart/Line.
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
 * <li>{@link #getWidth width} : sap.ui.core.CSSSize</li>
 * <li>{@link #getHeight height} : sap.ui.core.CSSSize</li>
 * <li>{@link #getDeselectEnabled deselectEnabled} : boolean (default: true)</li>
 * <li>{@link #getSelectionMode selectionMode} : string (default: 'single')</li>
 * <li>{@link #getDefaultSelectedItems defaultSelectedItems} : object[]</li>
 * <li>{@link #getLegendFirst legendFirst} : boolean (default: false)</li>
 * <li>{@link #getLegendDirection legendDirection} : string (default: 'right')</li>
 * <li>{@link #getLegendVerticalOffset legendVerticalOffset} : int (default: 0)</li>
 * <li>{@link #getLegendHorizontalOffset legendHorizontalOffset} : int (default: 0)</li>
 * <li>{@link #getMeasures measures} : object[]</li>
 * <li>{@link #getLineMarkerAndThickness lineMarkerAndThickness} : object (default: { lineMarkerSize: 10,lineThickness: 1})</li>
 * <li>{@link #getShowLegend showLegend} : boolean (default: true)</li>
 * <li>{@link #getLegendFormatString legendFormatString} : string[] (default: [''])</li>
 * <li>{@link #getTitle title} : string</li>
 * <li>{@link #getTitleHorizontalAlign titleHorizontalAlign} : string (default: 'center')</li>
 * <li>{@link #getSubTitle subTitle} : string</li>
 * <li>{@link #getSubTitleHorizontalAlign subTitleHorizontalAlign} : string (default: 'center')</li>
 * <li>{@link #getShowTitle showTitle} : boolean (default: true)</li>
 * <li>{@link #getTitleFormatString titleFormatString} : string (default: '')</li>
 * <li>{@link #getSubTitleFormatString subTitleFormatString} : string (default: '')</li>
 * <li>{@link #getXAxis xAxis} : object[]</li>
 * <li>{@link #getYAxis yAxis} : object[]</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getDataset dataset} : sap.service.visualization.dataset.SimpleDMDataset</li></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link sap.service.visualization.chart.Line#event:selectData selectData} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
 * </li>
 * </ul> 
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * </p><p>
 * Is used for show a Line chart with feeding data. The API
 * provides data feeding, and a set of behavior of the line chart.
 * @extends sap.ui.core.Control
 * @version 1.15.1-SNAPSHOT
 * @constructor   
 * @public
 * @deprecated Since version 1.7.2. 
 * This library has been deprecated in favor of the new charting library sap.viz. Please migrate as soon as possible as this older library will be removed from the SAPUI5 delivery in one of the next releases.
 * 
 */
sap.service.visualization.chart.Line = function(sId,mSettings) {};
/**
 * 
 * this event is bind to chart, the chart will response all the information of the rectangle of you selected on column. 
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 */
sap.service.visualization.chart.Line.prototype.selectData = function(oControlEvent) { return null; };

/**
 * 
 * Attach event handler <code>fnFunction</code> to the 'selectData' event of this <code>sap.service.visualization.chart.Line</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.service.visualization.chart.Line</code>.<br/> itself. 
 * </p><p>
 * this event is bind to chart, the chart will response all the information of the rectangle of you selected on column. 
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener=this] Context object to call the event handler with. Defaults to this <code>sap.service.visualization.chart.Line</code>.<br/> itself.
 * @return {sap.service.visualization.chart.Line} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.service.visualization.chart.Line.prototype.attachSelectData = function(oData,fnFunction,oListener) { return new sap.service.visualization.chart.Line(); };

/**
 * 
 * Destroys the dataset in the aggregation 
 * named <code>dataset</code>.
 * @return {sap.service.visualization.chart.Line} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.service.visualization.chart.Line.prototype.destroyDataset = function() { return new sap.service.visualization.chart.Line(); };

/**
 * 
 * Detach event handler <code>fnFunction</code> from the 'selectData' event of this <code>sap.service.visualization.chart.Line</code>.<br/>
 * </p><p>
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.service.visualization.chart.Line} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.service.visualization.chart.Line.prototype.detachSelectData = function(fnFunction,oListener) { return new sap.service.visualization.chart.Line(); };

/**
 * 
 * Creates a new subclass of class sap.service.visualization.chart.Line with name <code>sClassName</code> 
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
sap.service.visualization.chart.Line.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * 
 * Fire event selectData to attached listeners.
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.service.visualization.chart.Line} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.service.visualization.chart.Line.prototype.fireSelectData = function(mArguments) { return new sap.service.visualization.chart.Line(); };

/**
 * 
 * Getter for aggregation <code>dataset</code>.<br/>
 * chart use this aggregation to get data feed.
 * @return {sap.service.visualization.dataset.SimpleDMDataset}
 * @public
 * 
 */
sap.service.visualization.chart.Line.prototype.getDataset = function() { return new sap.service.visualization.dataset.SimpleDMDataset(); };

/**
 * 
 * Getter for property <code>defaultSelectedItems</code>.
 * the default selected item index. for each object should be like: {measureIndex: 0, dimensionItemIndex : 3}
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {object[]} the value of property <code>defaultSelectedItems</code>
 * @public
 * 
 */
sap.service.visualization.chart.Line.prototype.getDefaultSelectedItems = function() { return new Array(); };

/**
 * 
 * Getter for property <code>deselectEnabled</code>.
 * deselect enabled, first click the slice it will break away from the pie, then click other place the slice will be back.
 * </p><p>
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>deselectEnabled</code>
 * @public
 * 
 */
sap.service.visualization.chart.Line.prototype.getDeselectEnabled = function() { return false; };

/**
 * 
 * Getter for property <code>height</code>.
 * the chart height.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {sap.ui.core.CSSSize} the value of property <code>height</code>
 * @public
 * 
 */
sap.service.visualization.chart.Line.prototype.getHeight = function() { return new sap.ui.core.CSSSize(); };

/**
 * 
 * Getter for property <code>legendDirection</code>.
 * the position of legend located at, left|right|top|bottom.
 * </p><p>
 * Default value is <code>right</code>
 * @return {string} the value of property <code>legendDirection</code>
 * @public
 * 
 */
sap.service.visualization.chart.Line.prototype.getLegendDirection = function() { return ""; };

/**
 * 
 * Getter for property <code>legendFirst</code>.
 * first ensure to plot legend, then the chart area plot.
 * </p><p>
 * Default value is <code>false</code>
 * @return {boolean} the value of property <code>legendFirst</code>
 * @public
 * 
 */
sap.service.visualization.chart.Line.prototype.getLegendFirst = function() { return false; };

/**
 * 
 * Getter for property <code>legendFormatString</code>.
 * the format style for legend. the format for title number default is [''], numeric :'0.00', Currency: '$"#,##0.00"' ,percent:'0.00%',Date:'M/dd/yyyy', time:'h:mm:ss A/P'. If feed not enough then reuse the last one.
 * </p><p>
 * Default value is <code>['']</code>
 * @return {string[]} the value of property <code>legendFormatString</code>
 * @public
 * 
 */
sap.service.visualization.chart.Line.prototype.getLegendFormatString = function() { return new Array(); };

/**
 * 
 * Getter for property <code>legendHorizontalOffset</code>.
 * the offset of the legend, used to adjust the position of legend. if position top or bottom, positive, legend will move right, minus left.
 * </p><p>
 * Default value is <code>0</code>
 * @return {int} the value of property <code>legendHorizontalOffset</code>
 * @public
 * 
 */
sap.service.visualization.chart.Line.prototype.getLegendHorizontalOffset = function() { return 0; };

/**
 * 
 * Getter for property <code>legendVerticalOffset</code>.
 * the offset of the legend, used to adjust the position of legend.if left or right, positive, legend will move up,minus down.
 * </p><p>
 * Default value is <code>0</code>
 * @return {int} the value of property <code>legendVerticalOffset</code>
 * @public
 * 
 */
sap.service.visualization.chart.Line.prototype.getLegendVerticalOffset = function() { return 0; };

/**
 * 
 * Getter for property <code>lineMarkerAndThickness</code>.
 * for each object:{ lineMarkerSize: 0,It is for all measures in line chart. When it is too large, it can only draw limited size. The default value is undefined means that the size is auto-calculated by viz chart. lineThickness: It is for all measures in line chart.}.
 * </p><p>
 * Default value is <code>{ lineMarkerSize: 10,lineThickness: 1}</code>
 * @return {object} the value of property <code>lineMarkerAndThickness</code>
 * @public
 * 
 */
sap.service.visualization.chart.Line.prototype.getLineMarkerAndThickness = function() { return new Object(); };

/**
 * 
 * Getter for property <code>measures</code>.
 * for each object:{ valueAxis: 0, should be valid index in your value axis (can be xAxis or yAxis),markerSymbol:circle,// circle|| triangle||diamond, lineThickness: 3, // Set the line size of measure member.}.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {object[]} the value of property <code>measures</code>
 * @public
 * 
 */
sap.service.visualization.chart.Line.prototype.getMeasures = function() { return new Array(); };

/**
 * 
 * Getter for property <code>selectionMode</code>.
 * default value is false, single: you can just select one slice; none : no slice can be selected.
 * </p><p>
 * Default value is <code>single</code>
 * @return {string} the value of property <code>selectionMode</code>
 * @public
 * 
 */
sap.service.visualization.chart.Line.prototype.getSelectionMode = function() { return ""; };

/**
 * 
 * Getter for property <code>showLegend</code>.
 * show/hide legend.
 * </p><p>
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>showLegend</code>
 * @public
 * 
 */
sap.service.visualization.chart.Line.prototype.getShowLegend = function() { return false; };

/**
 * 
 * Getter for property <code>showTitle</code>.
 * show/hide title.
 * </p><p>
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>showTitle</code>
 * @public
 * 
 */
sap.service.visualization.chart.Line.prototype.getShowTitle = function() { return false; };

/**
 * 
 * Getter for property <code>subTitle</code>.
 * sub title text.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {string} the value of property <code>subTitle</code>
 * @public
 * 
 */
sap.service.visualization.chart.Line.prototype.getSubTitle = function() { return ""; };

/**
 * 
 * Getter for property <code>subTitleFormatString</code>.
 * the format style for sub title. numeric :'0.00', Currency: '$"#,##0.00"' ,percent:'0.00%',Date:'M/dd/yyyy', time:'h:mm:ss A/P'.
 * </p><p>
 * Default value is <code>''</code>
 * @return {string} the value of property <code>subTitleFormatString</code>
 * @public
 * 
 */
sap.service.visualization.chart.Line.prototype.getSubTitleFormatString = function() { return ""; };

/**
 * 
 * Getter for property <code>subTitleHorizontalAlign</code>.
 * the title align left|center|right.
 * </p><p>
 * Default value is <code>center</code>
 * @return {string} the value of property <code>subTitleHorizontalAlign</code>
 * @public
 * 
 */
sap.service.visualization.chart.Line.prototype.getSubTitleHorizontalAlign = function() { return ""; };

/**
 * 
 * Getter for property <code>title</code>.
 * title text.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {string} the value of property <code>title</code>
 * @public
 * 
 */
sap.service.visualization.chart.Line.prototype.getTitle = function() { return ""; };

/**
 * 
 * Getter for property <code>titleFormatString</code>.
 * the format style for main title. numeric :'0.00', Currency: '$"#,##0.00"' ,percent:'0.00%',Date:'M/dd/yyyy', time:'h:mm:ss A/P'.
 * </p><p>
 * Default value is <code>''</code>
 * @return {string} the value of property <code>titleFormatString</code>
 * @public
 * 
 */
sap.service.visualization.chart.Line.prototype.getTitleFormatString = function() { return ""; };

/**
 * 
 * Getter for property <code>titleHorizontalAlign</code>.
 * the title align left|center|right.
 * </p><p>
 * Default value is <code>center</code>
 * @return {string} the value of property <code>titleHorizontalAlign</code>
 * @public
 * 
 */
sap.service.visualization.chart.Line.prototype.getTitleHorizontalAlign = function() { return ""; };

/**
 * 
 * Getter for property <code>width</code>.
 * the chart width.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {sap.ui.core.CSSSize} the value of property <code>width</code>
 * @public
 * 
 */
sap.service.visualization.chart.Line.prototype.getWidth = function() { return new sap.ui.core.CSSSize(); };

/**
 * 
 * Getter for property <code>xAxis</code>.
 * for each object:{
 * showMajorTicks : true,// default value = undefined,show/hide major grid line and only works on value axis
 * showMinorTicks : true,// default value = false,show/hide minor grid line and only works on value axis. If showMajor is false, this option will not work
 * title : 'X Axis Title',
 * titleFormatString : '', //refer to legend number format.
 * labelsFormatString : [''],//refer to legend number format.
 * showTitle : true,//show or hide title showLabels : true, show or hide labels
 * gridLine : {
 * showMajor : false, //the major grid line
 * majorThickness : 1, the thickness for major tick.
 * showMinor : false, //the minor grid line.
 * minorThickness : 1, the thickness of minor tick.
 * showSub : true, //default value=false, show/hide sub grid line and only works on dimension axis }
 * }.
 * For major and minor ticks, they only works on value axis, it takes effect but the behavior is unexpected.
 * Set the grid line releated properties.For value axis, only showMajor and showMinor options work.
 * If showSub is set to true on value axis, it takes effect but the behavior is unexpected.
 * For dimension axis, only showSub option works.
 * If showMajor and showMinor options are set to true on dimension axis, it takes effect but the behavior is unexpected.
 * </p><p>
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {object[]} the value of property <code>xAxis</code>
 * @public
 * 
 */
sap.service.visualization.chart.Line.prototype.getXAxis = function() { return new Array(); };

/**
 * 
 * Getter for property <code>yAxis</code>.
 * the same as xAxis.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {object[]} the value of property <code>yAxis</code>
 * @public
 * 
 */
sap.service.visualization.chart.Line.prototype.getYAxis = function() { return new Array(); };

/**
 * 
 * Setter for the aggregated <code>dataset</code>.
 * @param oDataset {sap.service.visualization.dataset.SimpleDMDataset}
 * @return {sap.service.visualization.chart.Line} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.service.visualization.chart.Line.prototype.setDataset = function(oDataset) { return new sap.service.visualization.chart.Line(); };

/**
 * 
 * Setter for property <code>defaultSelectedItems</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {object[]} aDefaultSelectedItems  new value for property <code>defaultSelectedItems</code>
 * @return {sap.service.visualization.chart.Line} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.service.visualization.chart.Line.prototype.setDefaultSelectedItems = function(aDefaultSelectedItems) { return new sap.service.visualization.chart.Line(); };

/**
 * 
 * Setter for property <code>deselectEnabled</code>.
 * </p><p>
 * Default value is <code>true</code> 
 * @param {boolean} bDeselectEnabled  new value for property <code>deselectEnabled</code>
 * @return {sap.service.visualization.chart.Line} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.service.visualization.chart.Line.prototype.setDeselectEnabled = function(bDeselectEnabled) { return new sap.service.visualization.chart.Line(); };

/**
 * 
 * Setter for property <code>height</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {sap.ui.core.CSSSize} sHeight  new value for property <code>height</code>
 * @return {sap.service.visualization.chart.Line} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.service.visualization.chart.Line.prototype.setHeight = function(sHeight) { return new sap.service.visualization.chart.Line(); };

/**
 * 
 * Setter for property <code>legendDirection</code>.
 * </p><p>
 * Default value is <code>right</code> 
 * @param {string} sLegendDirection  new value for property <code>legendDirection</code>
 * @return {sap.service.visualization.chart.Line} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.service.visualization.chart.Line.prototype.setLegendDirection = function(sLegendDirection) { return new sap.service.visualization.chart.Line(); };

/**
 * 
 * Setter for property <code>legendFirst</code>.
 * </p><p>
 * Default value is <code>false</code> 
 * @param {boolean} bLegendFirst  new value for property <code>legendFirst</code>
 * @return {sap.service.visualization.chart.Line} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.service.visualization.chart.Line.prototype.setLegendFirst = function(bLegendFirst) { return new sap.service.visualization.chart.Line(); };

/**
 * 
 * Setter for property <code>legendFormatString</code>.
 * </p><p>
 * Default value is <code>['']</code> 
 * @param {string[]} aLegendFormatString  new value for property <code>legendFormatString</code>
 * @return {sap.service.visualization.chart.Line} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.service.visualization.chart.Line.prototype.setLegendFormatString = function(aLegendFormatString) { return new sap.service.visualization.chart.Line(); };

/**
 * 
 * Setter for property <code>legendHorizontalOffset</code>.
 * </p><p>
 * Default value is <code>0</code> 
 * @param {int} iLegendHorizontalOffset  new value for property <code>legendHorizontalOffset</code>
 * @return {sap.service.visualization.chart.Line} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.service.visualization.chart.Line.prototype.setLegendHorizontalOffset = function(iLegendHorizontalOffset) { return new sap.service.visualization.chart.Line(); };

/**
 * 
 * Setter for property <code>legendVerticalOffset</code>.
 * </p><p>
 * Default value is <code>0</code> 
 * @param {int} iLegendVerticalOffset  new value for property <code>legendVerticalOffset</code>
 * @return {sap.service.visualization.chart.Line} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.service.visualization.chart.Line.prototype.setLegendVerticalOffset = function(iLegendVerticalOffset) { return new sap.service.visualization.chart.Line(); };

/**
 * 
 * Setter for property <code>lineMarkerAndThickness</code>.
 * </p><p>
 * Default value is <code>{ lineMarkerSize: 10,lineThickness: 1}</code> 
 * @param {object} oLineMarkerAndThickness  new value for property <code>lineMarkerAndThickness</code>
 * @return {sap.service.visualization.chart.Line} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.service.visualization.chart.Line.prototype.setLineMarkerAndThickness = function(oLineMarkerAndThickness) { return new sap.service.visualization.chart.Line(); };

/**
 * 
 * Setter for property <code>measures</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {object[]} aMeasures  new value for property <code>measures</code>
 * @return {sap.service.visualization.chart.Line} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.service.visualization.chart.Line.prototype.setMeasures = function(aMeasures) { return new sap.service.visualization.chart.Line(); };

/**
 * 
 * Setter for property <code>selectionMode</code>.
 * </p><p>
 * Default value is <code>single</code> 
 * @param {string} sSelectionMode  new value for property <code>selectionMode</code>
 * @return {sap.service.visualization.chart.Line} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.service.visualization.chart.Line.prototype.setSelectionMode = function(sSelectionMode) { return new sap.service.visualization.chart.Line(); };

/**
 * 
 * Setter for property <code>showLegend</code>.
 * </p><p>
 * Default value is <code>true</code> 
 * @param {boolean} bShowLegend  new value for property <code>showLegend</code>
 * @return {sap.service.visualization.chart.Line} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.service.visualization.chart.Line.prototype.setShowLegend = function(bShowLegend) { return new sap.service.visualization.chart.Line(); };

/**
 * 
 * Setter for property <code>showTitle</code>.
 * </p><p>
 * Default value is <code>true</code> 
 * @param {boolean} bShowTitle  new value for property <code>showTitle</code>
 * @return {sap.service.visualization.chart.Line} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.service.visualization.chart.Line.prototype.setShowTitle = function(bShowTitle) { return new sap.service.visualization.chart.Line(); };

/**
 * 
 * Setter for property <code>subTitle</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {string} sSubTitle  new value for property <code>subTitle</code>
 * @return {sap.service.visualization.chart.Line} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.service.visualization.chart.Line.prototype.setSubTitle = function(sSubTitle) { return new sap.service.visualization.chart.Line(); };

/**
 * 
 * Setter for property <code>subTitleFormatString</code>.
 * </p><p>
 * Default value is <code>''</code> 
 * @param {string} sSubTitleFormatString  new value for property <code>subTitleFormatString</code>
 * @return {sap.service.visualization.chart.Line} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.service.visualization.chart.Line.prototype.setSubTitleFormatString = function(sSubTitleFormatString) { return new sap.service.visualization.chart.Line(); };

/**
 * 
 * Setter for property <code>subTitleHorizontalAlign</code>.
 * </p><p>
 * Default value is <code>center</code> 
 * @param {string} sSubTitleHorizontalAlign  new value for property <code>subTitleHorizontalAlign</code>
 * @return {sap.service.visualization.chart.Line} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.service.visualization.chart.Line.prototype.setSubTitleHorizontalAlign = function(sSubTitleHorizontalAlign) { return new sap.service.visualization.chart.Line(); };

/**
 * 
 * Setter for property <code>title</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {string} sTitle  new value for property <code>title</code>
 * @return {sap.service.visualization.chart.Line} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.service.visualization.chart.Line.prototype.setTitle = function(sTitle) { return new sap.service.visualization.chart.Line(); };

/**
 * 
 * Setter for property <code>titleFormatString</code>.
 * </p><p>
 * Default value is <code>''</code> 
 * @param {string} sTitleFormatString  new value for property <code>titleFormatString</code>
 * @return {sap.service.visualization.chart.Line} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.service.visualization.chart.Line.prototype.setTitleFormatString = function(sTitleFormatString) { return new sap.service.visualization.chart.Line(); };

/**
 * 
 * Setter for property <code>titleHorizontalAlign</code>.
 * </p><p>
 * Default value is <code>center</code> 
 * @param {string} sTitleHorizontalAlign  new value for property <code>titleHorizontalAlign</code>
 * @return {sap.service.visualization.chart.Line} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.service.visualization.chart.Line.prototype.setTitleHorizontalAlign = function(sTitleHorizontalAlign) { return new sap.service.visualization.chart.Line(); };

/**
 * 
 * Setter for property <code>width</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {sap.ui.core.CSSSize} sWidth  new value for property <code>width</code>
 * @return {sap.service.visualization.chart.Line} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.service.visualization.chart.Line.prototype.setWidth = function(sWidth) { return new sap.service.visualization.chart.Line(); };

/**
 * 
 * Setter for property <code>xAxis</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {object[]} aXAxis  new value for property <code>xAxis</code>
 * @return {sap.service.visualization.chart.Line} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.service.visualization.chart.Line.prototype.setXAxis = function(aXAxis) { return new sap.service.visualization.chart.Line(); };

/**
 * 
 * Setter for property <code>yAxis</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {object[]} aYAxis  new value for property <code>yAxis</code>
 * @return {sap.service.visualization.chart.Line} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.service.visualization.chart.Line.prototype.setYAxis = function(aYAxis) { return new sap.service.visualization.chart.Line(); };


// ---- sap.service.visualization.chart.Pie --------------------------------------------------------------------------

/**
 * 
 * Constructor for a new chart/Pie.
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
 * <li>{@link #getWidth width} : sap.ui.core.CSSSize</li>
 * <li>{@link #getHeight height} : sap.ui.core.CSSSize</li>
 * <li>{@link #getAllDeSelectable allDeSelectable} : boolean (default: true)</li>
 * <li>{@link #getAllSelectable allSelectable} : boolean (default: true)</li>
 * <li>{@link #getSelectionMode selectionMode} : string (default: 'single')</li>
 * <li>{@link #getLegendFirst legendFirst} : boolean (default: false)</li>
 * <li>{@link #getLegendDirection legendDirection} : string (default: 'right')</li>
 * <li>{@link #getLegendVerticalOffset legendVerticalOffset} : int (default: 0)</li>
 * <li>{@link #getLegendHorizontalOffset legendHorizontalOffset} : int (default: 0)</li>
 * <li>{@link #getDefaultSelectedSliceIndexes defaultSelectedSliceIndexes} : int[]</li>
 * <li>{@link #getSectorColors sectorColors} : string[] (default: ['#748CB2','#9CC677','#EACF5E','#F9AD79','#D16A7C','#8873A2','#3A95B3','#B6D949','#FDD36C','#F47958','#A65084','#0063B1','#0DA841','#FCB71D','#F05620','#B22D6E','#3C368E','\'#8FB2CF'])</li>
 * <li>{@link #getShowLegend showLegend} : boolean (default: true)</li>
 * <li>{@link #getLegendFormatString legendFormatString} : string[] (default: [''])</li>
 * <li>{@link #getTitle title} : string</li>
 * <li>{@link #getTitleHorizontalAlign titleHorizontalAlign} : string (default: 'center')</li>
 * <li>{@link #getSubTitle subTitle} : string</li>
 * <li>{@link #getSubTitleHorizontalAlign subTitleHorizontalAlign} : string (default: 'center')</li>
 * <li>{@link #getShowTitle showTitle} : boolean (default: true)</li>
 * <li>{@link #getTitleFormatString titleFormatString} : string (default: '')</li>
 * <li>{@link #getSubTitleFormatString subTitleFormatString} : string (default: '')</li>
 * <li>{@link #getTooltipTextFormatString tooltipTextFormatString} : string[]</li>
 * <li>{@link #getTooltipMainValueFormatString tooltipMainValueFormatString} : string[]</li>
 * <li>{@link #getTooltipSubValueFormatString tooltipSubValueFormatString} : string[]</li>
 * <li>{@link #getPieType pieType} : string (default: 'pie')</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getDataset dataset} : sap.service.visualization.dataset.SimpleDMDataset</li></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link sap.service.visualization.chart.Pie#event:selectData selectData} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
 * </li>
 * </ul> 
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * </p><p>
 * Is used for show a Pie chart with feeding data. The API
 * provides data feeding, and a set of behavior of the pie chart.
 * @extends sap.ui.core.Control
 * @version 1.15.1-SNAPSHOT
 * @constructor   
 * @public
 * @deprecated Since version 1.7.2. 
 * This library has been deprecated in favor of the new charting library sap.viz. Please migrate as soon as possible as this older library will be removed from the SAPUI5 delivery in one of the next releases.
 * 
 */
sap.service.visualization.chart.Pie = function(sId,mSettings) {};
/**
 * 
 * this event is bind to chart, the chart will response all the information of the slice of you selected on pie. 
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 */
sap.service.visualization.chart.Pie.prototype.selectData = function(oControlEvent) { return null; };

/**
 * 
 * Attach event handler <code>fnFunction</code> to the 'selectData' event of this <code>sap.service.visualization.chart.Pie</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.service.visualization.chart.Pie</code>.<br/> itself. 
 * </p><p>
 * this event is bind to chart, the chart will response all the information of the slice of you selected on pie. 
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener=this] Context object to call the event handler with. Defaults to this <code>sap.service.visualization.chart.Pie</code>.<br/> itself.
 * @return {sap.service.visualization.chart.Pie} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.service.visualization.chart.Pie.prototype.attachSelectData = function(oData,fnFunction,oListener) { return new sap.service.visualization.chart.Pie(); };

/**
 * 
 * Destroys the dataset in the aggregation 
 * named <code>dataset</code>.
 * @return {sap.service.visualization.chart.Pie} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.service.visualization.chart.Pie.prototype.destroyDataset = function() { return new sap.service.visualization.chart.Pie(); };

/**
 * 
 * Detach event handler <code>fnFunction</code> from the 'selectData' event of this <code>sap.service.visualization.chart.Pie</code>.<br/>
 * </p><p>
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.service.visualization.chart.Pie} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.service.visualization.chart.Pie.prototype.detachSelectData = function(fnFunction,oListener) { return new sap.service.visualization.chart.Pie(); };

/**
 * 
 * Creates a new subclass of class sap.service.visualization.chart.Pie with name <code>sClassName</code> 
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
sap.service.visualization.chart.Pie.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * 
 * Fire event selectData to attached listeners.
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.service.visualization.chart.Pie} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.service.visualization.chart.Pie.prototype.fireSelectData = function(mArguments) { return new sap.service.visualization.chart.Pie(); };

/**
 * 
 * Getter for property <code>allDeSelectable</code>.
 * deselect enabled, first click the slice it will break away from the pie, then click other place the slice will be back. To be deprecated.
 * </p><p>
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>allDeSelectable</code>
 * @public
 * 
 */
sap.service.visualization.chart.Pie.prototype.getAllDeSelectable = function() { return false; };

/**
 * 
 * Getter for property <code>allSelectable</code>.
 * the sectors selectable or not. To be deprecated.
 * </p><p>
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>allSelectable</code>
 * @public
 * 
 */
sap.service.visualization.chart.Pie.prototype.getAllSelectable = function() { return false; };

/**
 * 
 * Getter for aggregation <code>dataset</code>.<br/>
 * chart use this aggregation to get data feed.
 * @return {sap.service.visualization.dataset.SimpleDMDataset}
 * @public
 * 
 */
sap.service.visualization.chart.Pie.prototype.getDataset = function() { return new sap.service.visualization.dataset.SimpleDMDataset(); };

/**
 * 
 * Getter for property <code>defaultSelectedSliceIndexes</code>.
 * the default selected slice index.To be deprecated.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {int[]} the value of property <code>defaultSelectedSliceIndexes</code>
 * @public
 * 
 */
sap.service.visualization.chart.Pie.prototype.getDefaultSelectedSliceIndexes = function() { return new Array(); };

/**
 * 
 * Getter for property <code>height</code>.
 * the chart height.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {sap.ui.core.CSSSize} the value of property <code>height</code>
 * @public
 * 
 */
sap.service.visualization.chart.Pie.prototype.getHeight = function() { return new sap.ui.core.CSSSize(); };

/**
 * 
 * Getter for property <code>legendDirection</code>.
 * the position of legend located at, left|right|top|bottom.
 * </p><p>
 * Default value is <code>right</code>
 * @return {string} the value of property <code>legendDirection</code>
 * @public
 * 
 */
sap.service.visualization.chart.Pie.prototype.getLegendDirection = function() { return ""; };

/**
 * 
 * Getter for property <code>legendFirst</code>.
 * first ensure to plot legend, then the chart area plot.
 * </p><p>
 * Default value is <code>false</code>
 * @return {boolean} the value of property <code>legendFirst</code>
 * @public
 * 
 */
sap.service.visualization.chart.Pie.prototype.getLegendFirst = function() { return false; };

/**
 * 
 * Getter for property <code>legendFormatString</code>.
 * the format style for legend. the format for legend default is [''], numeric :'0.00', Currency: '$"#,##0.00"' ,percent:'0.00%',Date:'M/dd/yyyy', time:'h:mm:ss A/P'. If feed not enough then reuse the last one.
 * </p><p>
 * Default value is <code>['']</code>
 * @return {string[]} the value of property <code>legendFormatString</code>
 * @public
 * 
 */
sap.service.visualization.chart.Pie.prototype.getLegendFormatString = function() { return new Array(); };

/**
 * 
 * Getter for property <code>legendHorizontalOffset</code>.
 * the offset of the legend, used to adjust the position of legend. if position top or bottom, positive, legend will move right, minus left.
 * </p><p>
 * Default value is <code>0</code>
 * @return {int} the value of property <code>legendHorizontalOffset</code>
 * @public
 * 
 */
sap.service.visualization.chart.Pie.prototype.getLegendHorizontalOffset = function() { return 0; };

/**
 * 
 * Getter for property <code>legendVerticalOffset</code>.
 * the offset of the legend, used to adjust the position of legend.if left or right, positive, legend will move up,minus down.
 * </p><p>
 * Default value is <code>0</code>
 * @return {int} the value of property <code>legendVerticalOffset</code>
 * @public
 * 
 */
sap.service.visualization.chart.Pie.prototype.getLegendVerticalOffset = function() { return 0; };

/**
 * 
 * Getter for property <code>pieType</code>.
 * pie|donut
 * </p><p>
 * Default value is <code>pie</code>
 * @return {string} the value of property <code>pieType</code>
 * @public
 * 
 */
sap.service.visualization.chart.Pie.prototype.getPieType = function() { return ""; };

/**
 * 
 * Getter for property <code>sectorColors</code>.
 * for example['#000000','#000000','#000000'],//array of color string, if supply not enough, reuse the laset one.
 * </p><p>
 * Default value is <code>['#748CB2','#9CC677','#EACF5E','#F9AD79','#D16A7C','#8873A2','#3A95B3','#B6D949','#FDD36C','#F47958','#A65084','#0063B1','#0DA841','#FCB71D','#F05620','#B22D6E','#3C368E','#8FB2CF]</code>
 * @return {string[]} the value of property <code>sectorColors</code>
 * @public
 * 
 */
sap.service.visualization.chart.Pie.prototype.getSectorColors = function() { return new Array(); };

/**
 * 
 * Getter for property <code>selectionMode</code>.
 * supported value: (single|multiple), single: you can just select one slice; multiple : multiple slices can be selected. To be deprecated.
 * </p><p>
 * Default value is <code>single</code>
 * @return {string} the value of property <code>selectionMode</code>
 * @public
 * 
 */
sap.service.visualization.chart.Pie.prototype.getSelectionMode = function() { return ""; };

/**
 * 
 * Getter for property <code>showLegend</code>.
 * show/hide legend.
 * </p><p>
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>showLegend</code>
 * @public
 * 
 */
sap.service.visualization.chart.Pie.prototype.getShowLegend = function() { return false; };

/**
 * 
 * Getter for property <code>showTitle</code>.
 * show/hide title.
 * </p><p>
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>showTitle</code>
 * @public
 * 
 */
sap.service.visualization.chart.Pie.prototype.getShowTitle = function() { return false; };

/**
 * 
 * Getter for property <code>subTitle</code>.
 * sub title text.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {string} the value of property <code>subTitle</code>
 * @public
 * 
 */
sap.service.visualization.chart.Pie.prototype.getSubTitle = function() { return ""; };

/**
 * 
 * Getter for property <code>subTitleFormatString</code>.
 * the format style for sub title. numeric :'0.00', Currency: '$"#,##0.00"' ,percent:'0.00%',Date:'M/dd/yyyy', time:'h:mm:ss A/P'.
 * </p><p>
 * Default value is <code>''</code>
 * @return {string} the value of property <code>subTitleFormatString</code>
 * @public
 * 
 */
sap.service.visualization.chart.Pie.prototype.getSubTitleFormatString = function() { return ""; };

/**
 * 
 * Getter for property <code>subTitleHorizontalAlign</code>.
 * the title align left|center|right.
 * </p><p>
 * Default value is <code>center</code>
 * @return {string} the value of property <code>subTitleHorizontalAlign</code>
 * @public
 * 
 */
sap.service.visualization.chart.Pie.prototype.getSubTitleHorizontalAlign = function() { return ""; };

/**
 * 
 * Getter for property <code>title</code>.
 * title text.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {string} the value of property <code>title</code>
 * @public
 * 
 */
sap.service.visualization.chart.Pie.prototype.getTitle = function() { return ""; };

/**
 * 
 * Getter for property <code>titleFormatString</code>.
 * the format style for main title. numeric :'0.00', Currency: '$"#,##0.00"' ,percent:'0.00%',Date:'M/dd/yyyy', time:'h:mm:ss A/P'.
 * </p><p>
 * Default value is <code>''</code>
 * @return {string} the value of property <code>titleFormatString</code>
 * @public
 * 
 */
sap.service.visualization.chart.Pie.prototype.getTitleFormatString = function() { return ""; };

/**
 * 
 * Getter for property <code>titleHorizontalAlign</code>.
 * the title align left|center|right.
 * </p><p>
 * Default value is <code>center</code>
 * @return {string} the value of property <code>titleHorizontalAlign</code>
 * @public
 * 
 */
sap.service.visualization.chart.Pie.prototype.getTitleHorizontalAlign = function() { return ""; };

/**
 * 
 * Getter for property <code>tooltipMainValueFormatString</code>.
 * the format style for main tool tip. same with legend.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {string[]} the value of property <code>tooltipMainValueFormatString</code>
 * @public
 * 
 */
sap.service.visualization.chart.Pie.prototype.getTooltipMainValueFormatString = function() { return new Array(); };

/**
 * 
 * Getter for property <code>tooltipSubValueFormatString</code>.
 * the format style for sub tool tip. same with legend.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {string[]} the value of property <code>tooltipSubValueFormatString</code>
 * @public
 * 
 */
sap.service.visualization.chart.Pie.prototype.getTooltipSubValueFormatString = function() { return new Array(); };

/**
 * 
 * Getter for property <code>tooltipTextFormatString</code>.
 * the format style for text tool tip. same with legend.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {string[]} the value of property <code>tooltipTextFormatString</code>
 * @public
 * 
 */
sap.service.visualization.chart.Pie.prototype.getTooltipTextFormatString = function() { return new Array(); };

/**
 * 
 * Getter for property <code>width</code>.
 * the chart width.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {sap.ui.core.CSSSize} the value of property <code>width</code>
 * @public
 * 
 */
sap.service.visualization.chart.Pie.prototype.getWidth = function() { return new sap.ui.core.CSSSize(); };

/**
 * 
 * Setter for property <code>allDeSelectable</code>.
 * </p><p>
 * Default value is <code>true</code> 
 * @param {boolean} bAllDeSelectable  new value for property <code>allDeSelectable</code>
 * @return {sap.service.visualization.chart.Pie} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.service.visualization.chart.Pie.prototype.setAllDeSelectable = function(bAllDeSelectable) { return new sap.service.visualization.chart.Pie(); };

/**
 * 
 * Setter for property <code>allSelectable</code>.
 * </p><p>
 * Default value is <code>true</code> 
 * @param {boolean} bAllSelectable  new value for property <code>allSelectable</code>
 * @return {sap.service.visualization.chart.Pie} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.service.visualization.chart.Pie.prototype.setAllSelectable = function(bAllSelectable) { return new sap.service.visualization.chart.Pie(); };

/**
 * 
 * Setter for the aggregated <code>dataset</code>.
 * @param oDataset {sap.service.visualization.dataset.SimpleDMDataset}
 * @return {sap.service.visualization.chart.Pie} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.service.visualization.chart.Pie.prototype.setDataset = function(oDataset) { return new sap.service.visualization.chart.Pie(); };

/**
 * 
 * Setter for property <code>defaultSelectedSliceIndexes</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {int[]} aDefaultSelectedSliceIndexes  new value for property <code>defaultSelectedSliceIndexes</code>
 * @return {sap.service.visualization.chart.Pie} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.service.visualization.chart.Pie.prototype.setDefaultSelectedSliceIndexes = function(aDefaultSelectedSliceIndexes) { return new sap.service.visualization.chart.Pie(); };

/**
 * 
 * Setter for property <code>height</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {sap.ui.core.CSSSize} sHeight  new value for property <code>height</code>
 * @return {sap.service.visualization.chart.Pie} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.service.visualization.chart.Pie.prototype.setHeight = function(sHeight) { return new sap.service.visualization.chart.Pie(); };

/**
 * 
 * Setter for property <code>legendDirection</code>.
 * </p><p>
 * Default value is <code>right</code> 
 * @param {string} sLegendDirection  new value for property <code>legendDirection</code>
 * @return {sap.service.visualization.chart.Pie} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.service.visualization.chart.Pie.prototype.setLegendDirection = function(sLegendDirection) { return new sap.service.visualization.chart.Pie(); };

/**
 * 
 * Setter for property <code>legendFirst</code>.
 * </p><p>
 * Default value is <code>false</code> 
 * @param {boolean} bLegendFirst  new value for property <code>legendFirst</code>
 * @return {sap.service.visualization.chart.Pie} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.service.visualization.chart.Pie.prototype.setLegendFirst = function(bLegendFirst) { return new sap.service.visualization.chart.Pie(); };

/**
 * 
 * Setter for property <code>legendFormatString</code>.
 * </p><p>
 * Default value is <code>['']</code> 
 * @param {string[]} aLegendFormatString  new value for property <code>legendFormatString</code>
 * @return {sap.service.visualization.chart.Pie} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.service.visualization.chart.Pie.prototype.setLegendFormatString = function(aLegendFormatString) { return new sap.service.visualization.chart.Pie(); };

/**
 * 
 * Setter for property <code>legendHorizontalOffset</code>.
 * </p><p>
 * Default value is <code>0</code> 
 * @param {int} iLegendHorizontalOffset  new value for property <code>legendHorizontalOffset</code>
 * @return {sap.service.visualization.chart.Pie} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.service.visualization.chart.Pie.prototype.setLegendHorizontalOffset = function(iLegendHorizontalOffset) { return new sap.service.visualization.chart.Pie(); };

/**
 * 
 * Setter for property <code>legendVerticalOffset</code>.
 * </p><p>
 * Default value is <code>0</code> 
 * @param {int} iLegendVerticalOffset  new value for property <code>legendVerticalOffset</code>
 * @return {sap.service.visualization.chart.Pie} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.service.visualization.chart.Pie.prototype.setLegendVerticalOffset = function(iLegendVerticalOffset) { return new sap.service.visualization.chart.Pie(); };

/**
 * 
 * Setter for property <code>pieType</code>.
 * </p><p>
 * Default value is <code>pie</code> 
 * @param {string} sPieType  new value for property <code>pieType</code>
 * @return {sap.service.visualization.chart.Pie} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.service.visualization.chart.Pie.prototype.setPieType = function(sPieType) { return new sap.service.visualization.chart.Pie(); };

/**
 * 
 * Setter for property <code>sectorColors</code>.
 * </p><p>
 * Default value is <code>['#748CB2','#9CC677','#EACF5E','#F9AD79','#D16A7C','#8873A2','#3A95B3','#B6D949','#FDD36C','#F47958','#A65084','#0063B1','#0DA841','#FCB71D','#F05620','#B22D6E','#3C368E','#8FB2CF]</code> 
 * @param {string[]} aSectorColors  new value for property <code>sectorColors</code>
 * @return {sap.service.visualization.chart.Pie} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.service.visualization.chart.Pie.prototype.setSectorColors = function(aSectorColors) { return new sap.service.visualization.chart.Pie(); };

/**
 * 
 * Setter for property <code>selectionMode</code>.
 * </p><p>
 * Default value is <code>single</code> 
 * @param {string} sSelectionMode  new value for property <code>selectionMode</code>
 * @return {sap.service.visualization.chart.Pie} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.service.visualization.chart.Pie.prototype.setSelectionMode = function(sSelectionMode) { return new sap.service.visualization.chart.Pie(); };

/**
 * 
 * Setter for property <code>showLegend</code>.
 * </p><p>
 * Default value is <code>true</code> 
 * @param {boolean} bShowLegend  new value for property <code>showLegend</code>
 * @return {sap.service.visualization.chart.Pie} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.service.visualization.chart.Pie.prototype.setShowLegend = function(bShowLegend) { return new sap.service.visualization.chart.Pie(); };

/**
 * 
 * Setter for property <code>showTitle</code>.
 * </p><p>
 * Default value is <code>true</code> 
 * @param {boolean} bShowTitle  new value for property <code>showTitle</code>
 * @return {sap.service.visualization.chart.Pie} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.service.visualization.chart.Pie.prototype.setShowTitle = function(bShowTitle) { return new sap.service.visualization.chart.Pie(); };

/**
 * 
 * Setter for property <code>subTitle</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {string} sSubTitle  new value for property <code>subTitle</code>
 * @return {sap.service.visualization.chart.Pie} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.service.visualization.chart.Pie.prototype.setSubTitle = function(sSubTitle) { return new sap.service.visualization.chart.Pie(); };

/**
 * 
 * Setter for property <code>subTitleFormatString</code>.
 * </p><p>
 * Default value is <code>''</code> 
 * @param {string} sSubTitleFormatString  new value for property <code>subTitleFormatString</code>
 * @return {sap.service.visualization.chart.Pie} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.service.visualization.chart.Pie.prototype.setSubTitleFormatString = function(sSubTitleFormatString) { return new sap.service.visualization.chart.Pie(); };

/**
 * 
 * Setter for property <code>subTitleHorizontalAlign</code>.
 * </p><p>
 * Default value is <code>center</code> 
 * @param {string} sSubTitleHorizontalAlign  new value for property <code>subTitleHorizontalAlign</code>
 * @return {sap.service.visualization.chart.Pie} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.service.visualization.chart.Pie.prototype.setSubTitleHorizontalAlign = function(sSubTitleHorizontalAlign) { return new sap.service.visualization.chart.Pie(); };

/**
 * 
 * Setter for property <code>title</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {string} sTitle  new value for property <code>title</code>
 * @return {sap.service.visualization.chart.Pie} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.service.visualization.chart.Pie.prototype.setTitle = function(sTitle) { return new sap.service.visualization.chart.Pie(); };

/**
 * 
 * Setter for property <code>titleFormatString</code>.
 * </p><p>
 * Default value is <code>''</code> 
 * @param {string} sTitleFormatString  new value for property <code>titleFormatString</code>
 * @return {sap.service.visualization.chart.Pie} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.service.visualization.chart.Pie.prototype.setTitleFormatString = function(sTitleFormatString) { return new sap.service.visualization.chart.Pie(); };

/**
 * 
 * Setter for property <code>titleHorizontalAlign</code>.
 * </p><p>
 * Default value is <code>center</code> 
 * @param {string} sTitleHorizontalAlign  new value for property <code>titleHorizontalAlign</code>
 * @return {sap.service.visualization.chart.Pie} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.service.visualization.chart.Pie.prototype.setTitleHorizontalAlign = function(sTitleHorizontalAlign) { return new sap.service.visualization.chart.Pie(); };

/**
 * 
 * Setter for property <code>tooltipMainValueFormatString</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {string[]} aTooltipMainValueFormatString  new value for property <code>tooltipMainValueFormatString</code>
 * @return {sap.service.visualization.chart.Pie} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.service.visualization.chart.Pie.prototype.setTooltipMainValueFormatString = function(aTooltipMainValueFormatString) { return new sap.service.visualization.chart.Pie(); };

/**
 * 
 * Setter for property <code>tooltipSubValueFormatString</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {string[]} aTooltipSubValueFormatString  new value for property <code>tooltipSubValueFormatString</code>
 * @return {sap.service.visualization.chart.Pie} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.service.visualization.chart.Pie.prototype.setTooltipSubValueFormatString = function(aTooltipSubValueFormatString) { return new sap.service.visualization.chart.Pie(); };

/**
 * 
 * Setter for property <code>tooltipTextFormatString</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {string[]} aTooltipTextFormatString  new value for property <code>tooltipTextFormatString</code>
 * @return {sap.service.visualization.chart.Pie} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.service.visualization.chart.Pie.prototype.setTooltipTextFormatString = function(aTooltipTextFormatString) { return new sap.service.visualization.chart.Pie(); };

/**
 * 
 * Setter for property <code>width</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {sap.ui.core.CSSSize} sWidth  new value for property <code>width</code>
 * @return {sap.service.visualization.chart.Pie} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.service.visualization.chart.Pie.prototype.setWidth = function(sWidth) { return new sap.service.visualization.chart.Pie(); };


// ---- sap.service.visualization.ChartOption --------------------------------------------------------------------------

/**
 * 
 * Constructor for a new ChartOption.
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
 * parse all the ChartOptions for charts.
 * @extends sap.ui.core.Element
 * @version 1.15.1-SNAPSHOT
 * @constructor   
 * @public
 * @deprecated Since version 1.7.2. 
 * This library has been deprecated in favor of the new charting library sap.viz. Please migrate as soon as possible as this older library will be removed from the SAPUI5 delivery in one of the next releases.
 * 
 */
sap.service.visualization.ChartOption = function(sId,mSettings) {};
/**
 * 
 * Creates a new subclass of class sap.service.visualization.ChartOption with name <code>sClassName</code> 
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
sap.service.visualization.ChartOption.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };


// ---- sap.service.visualization.dataset --------------------------------------------------------------------------


// ---- sap.service.visualization.dataset.SimpleDMDataset --------------------------------------------------------------------------

/**
 * 
 * Constructor for a new dataset/SimpleDMDataset.
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
 * <li>{@link #getDimensionName dimensionName} : string</li>
 * <li>{@link #getDimensionItems dimensionItems} : string[]</li>
 * <li>{@link #getMeasureNames measureNames} : string[]</li>
 * <li>{@link #getData data} : object[]</li>
 * <li>{@link #getTabularData tabularData} : object[]</li></ul>
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
 * the element used for feeding dataset for all kinds of charts.
 * @extends sap.ui.core.Element
 * @version 1.15.1-SNAPSHOT
 * @constructor   
 * @public
 * @deprecated Since version 1.7.2. 
 * This library has been deprecated in favor of the new charting library sap.viz. Please migrate as soon as possible as this older library will be removed from the SAPUI5 delivery in one of the next releases.
 * 
 */
sap.service.visualization.dataset.SimpleDMDataset = function(sId,mSettings) {};
/**
 * 
 * Binder for property <code>data</code>.
 * @param {string} sPath path to a property in the model 
 * @param {function} [fnFormatter=null] the formatter function
 * @param {sap.ui.model.BindingMode} [sMode=Default] the binding mode to be used for this property binding (e.g. one way) 
 * @return {sap.service.visualization.dataset.SimpleDMDataset} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.service.visualization.dataset.SimpleDMDataset.prototype.bindData = function(sPath,fnFormatter,sMode) { return new sap.service.visualization.dataset.SimpleDMDataset(); };

/**
 * 
 * Binder for property <code>dimensionItems</code>.
 * @param {string} sPath path to a property in the model 
 * @param {function} [fnFormatter=null] the formatter function
 * @param {sap.ui.model.BindingMode} [sMode=Default] the binding mode to be used for this property binding (e.g. one way) 
 * @return {sap.service.visualization.dataset.SimpleDMDataset} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.service.visualization.dataset.SimpleDMDataset.prototype.bindDimensionItems = function(sPath,fnFormatter,sMode) { return new sap.service.visualization.dataset.SimpleDMDataset(); };

/**
 * 
 * Binder for property <code>dimensionName</code>.
 * @param {string} sPath path to a property in the model 
 * @param {function} [fnFormatter=null] the formatter function
 * @param {sap.ui.model.BindingMode} [sMode=Default] the binding mode to be used for this property binding (e.g. one way) 
 * @return {sap.service.visualization.dataset.SimpleDMDataset} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.service.visualization.dataset.SimpleDMDataset.prototype.bindDimensionName = function(sPath,fnFormatter,sMode) { return new sap.service.visualization.dataset.SimpleDMDataset(); };

/**
 * 
 * Binder for property <code>measureNames</code>.
 * @param {string} sPath path to a property in the model 
 * @param {function} [fnFormatter=null] the formatter function
 * @param {sap.ui.model.BindingMode} [sMode=Default] the binding mode to be used for this property binding (e.g. one way) 
 * @return {sap.service.visualization.dataset.SimpleDMDataset} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.service.visualization.dataset.SimpleDMDataset.prototype.bindMeasureNames = function(sPath,fnFormatter,sMode) { return new sap.service.visualization.dataset.SimpleDMDataset(); };

/**
 * 
 * Binder for property <code>tabularData</code>.
 * @param {string} sPath path to a property in the model 
 * @param {function} [fnFormatter=null] the formatter function
 * @param {sap.ui.model.BindingMode} [sMode=Default] the binding mode to be used for this property binding (e.g. one way) 
 * @return {sap.service.visualization.dataset.SimpleDMDataset} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.service.visualization.dataset.SimpleDMDataset.prototype.bindTabularData = function(sPath,fnFormatter,sMode) { return new sap.service.visualization.dataset.SimpleDMDataset(); };

/**
 * 
 * Creates a new subclass of class sap.service.visualization.dataset.SimpleDMDataset with name <code>sClassName</code> 
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
sap.service.visualization.dataset.SimpleDMDataset.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * 
 * Getter for property <code>data</code>.
 * An array of measures, with each measure as an array.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {object[]} the value of property <code>data</code>
 * @public
 * 
 */
sap.service.visualization.dataset.SimpleDMDataset.prototype.getData = function() { return new Array(); };

/**
 * 
 * Getter for property <code>dimensionItems</code>.
 * An array of dimension items.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {string[]} the value of property <code>dimensionItems</code>
 * @public
 * 
 */
sap.service.visualization.dataset.SimpleDMDataset.prototype.getDimensionItems = function() { return new Array(); };

/**
 * 
 * Getter for property <code>dimensionName</code>.
 * A name for the dimension (index into measures array)
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {string} the value of property <code>dimensionName</code>
 * @public
 * 
 */
sap.service.visualization.dataset.SimpleDMDataset.prototype.getDimensionName = function() { return ""; };

/**
 * 
 * Getter for property <code>measureNames</code>.
 * An array of measures names.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {string[]} the value of property <code>measureNames</code>
 * @public
 * 
 */
sap.service.visualization.dataset.SimpleDMDataset.prototype.getMeasureNames = function() { return new Array(); };

/**
 * 
 * Getter for property <code>tabularData</code>.
 * An array of objects of equal structure, each containing a dimension label and a set of measures.
 * When this property is used, the values of the other properties are determined automatically:
 * the dimensionName is derived from the first property name in the first measure object,
 * the measureNames are derived from the remaining property names of the same object,
 * the dimensionItems (labels) are determined from the values of the property named after the dimensionName
 * and the data (measures) are determined from the remaining properties of all measure objects
 * </p><p>
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {object[]} the value of property <code>tabularData</code>
 * @public
 * 
 */
sap.service.visualization.dataset.SimpleDMDataset.prototype.getTabularData = function() { return new Array(); };

/**
 * 
 * Setter for property <code>data</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {object[]} aData  new value for property <code>data</code>
 * @return {sap.service.visualization.dataset.SimpleDMDataset} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.service.visualization.dataset.SimpleDMDataset.prototype.setData = function(aData) { return new sap.service.visualization.dataset.SimpleDMDataset(); };

/**
 * 
 * setDataTable(dataTable) dataTable the control contains all the data set.
 * @type void
 * @public
 */
sap.service.visualization.dataset.SimpleDMDataset.prototype.setDataTable = function() { return null; };

/**
 * 
 * Setter for property <code>dimensionItems</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {string[]} aDimensionItems  new value for property <code>dimensionItems</code>
 * @return {sap.service.visualization.dataset.SimpleDMDataset} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.service.visualization.dataset.SimpleDMDataset.prototype.setDimensionItems = function(aDimensionItems) { return new sap.service.visualization.dataset.SimpleDMDataset(); };

/**
 * 
 * Setter for property <code>dimensionName</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {string} sDimensionName  new value for property <code>dimensionName</code>
 * @return {sap.service.visualization.dataset.SimpleDMDataset} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.service.visualization.dataset.SimpleDMDataset.prototype.setDimensionName = function(sDimensionName) { return new sap.service.visualization.dataset.SimpleDMDataset(); };

/**
 * 
 * Setter for property <code>measureNames</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {string[]} aMeasureNames  new value for property <code>measureNames</code>
 * @return {sap.service.visualization.dataset.SimpleDMDataset} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.service.visualization.dataset.SimpleDMDataset.prototype.setMeasureNames = function(aMeasureNames) { return new sap.service.visualization.dataset.SimpleDMDataset(); };

/**
 * 
 * Setter for property <code>tabularData</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {object[]} aTabularData  new value for property <code>tabularData</code>
 * @return {sap.service.visualization.dataset.SimpleDMDataset} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.service.visualization.dataset.SimpleDMDataset.prototype.setTabularData = function(aTabularData) { return new sap.service.visualization.dataset.SimpleDMDataset(); };

/**
 * 
 * Unbinder for property <code>data</code>.
 * @return {sap.service.visualization.dataset.SimpleDMDataset} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.service.visualization.dataset.SimpleDMDataset.prototype.unbindData = function() { return new sap.service.visualization.dataset.SimpleDMDataset(); };

/**
 * 
 * Unbinder for property <code>dimensionItems</code>.
 * @return {sap.service.visualization.dataset.SimpleDMDataset} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.service.visualization.dataset.SimpleDMDataset.prototype.unbindDimensionItems = function() { return new sap.service.visualization.dataset.SimpleDMDataset(); };

/**
 * 
 * Unbinder for property <code>dimensionName</code>.
 * @return {sap.service.visualization.dataset.SimpleDMDataset} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.service.visualization.dataset.SimpleDMDataset.prototype.unbindDimensionName = function() { return new sap.service.visualization.dataset.SimpleDMDataset(); };

/**
 * 
 * Unbinder for property <code>measureNames</code>.
 * @return {sap.service.visualization.dataset.SimpleDMDataset} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.service.visualization.dataset.SimpleDMDataset.prototype.unbindMeasureNames = function() { return new sap.service.visualization.dataset.SimpleDMDataset(); };

/**
 * 
 * Unbinder for property <code>tabularData</code>.
 * @return {sap.service.visualization.dataset.SimpleDMDataset} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.service.visualization.dataset.SimpleDMDataset.prototype.unbindTabularData = function() { return new sap.service.visualization.dataset.SimpleDMDataset(); };


// ---- sap.service.visualization.Themings --------------------------------------------------------------------------

/**
 * 
 * Constructor for a new Themings.
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
 * parse all the themings settings for all charts.
 * @extends sap.ui.core.Element
 * @version 1.15.1-SNAPSHOT
 * @constructor   
 * @public
 * @deprecated Since version 1.7.2. 
 * This library has been deprecated in favor of the new charting library sap.viz. Please migrate as soon as possible as this older library will be removed from the SAPUI5 delivery in one of the next releases.
 * 
 */
sap.service.visualization.Themings = function(sId,mSettings) {};
/**
 * 
 * Creates a new subclass of class sap.service.visualization.Themings with name <code>sClassName</code> 
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
sap.service.visualization.Themings.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

// ---- static fields of namespaces ---------------------------------------------------------------------
