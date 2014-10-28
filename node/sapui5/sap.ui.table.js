
// ---- _global_ --------------------------------------------------------------------------


// ---- sap --------------------------------------------------------------------------


// ---- sap.ui --------------------------------------------------------------------------


// ---- sap.ui.table --------------------------------------------------------------------------


// ---- sap.ui.table.Column --------------------------------------------------------------------------

/**
 * 
 * Constructor for a new Column.
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
 * <li>{@link #getFlexible flexible} : boolean (default: true)</li>
 * <li>{@link #getResizable resizable} : boolean (default: true)</li>
 * <li>{@link #getHAlign hAlign} : sap.ui.commons.layout.HAlign (default: sap.ui.commons.layout.HAlign.Begin)</li>
 * <li>{@link #getSorted sorted} : boolean (default: false)</li>
 * <li>{@link #getSortOrder sortOrder} : sap.ui.table.SortOrder (default: sap.ui.table.SortOrder.Ascending)</li>
 * <li>{@link #getSortProperty sortProperty} : string</li>
 * <li>{@link #getFiltered filtered} : boolean (default: false)</li>
 * <li>{@link #getFilterProperty filterProperty} : string</li>
 * <li>{@link #getFilterValue filterValue} : string</li>
 * <li>{@link #getFilterOperator filterOperator} : string</li>
 * <li>{@link #getGrouped grouped} : boolean (default: false)</li>
 * <li>{@link #getVisible visible} : boolean (default: true)</li>
 * <li>{@link #getFilterType filterType} : any</li>
 * <li>{@link #getName name} : string</li>
 * <li>{@link #getShowFilterMenuEntry showFilterMenuEntry} : boolean (default: true)</li>
 * <li>{@link #getShowSortMenuEntry showSortMenuEntry} : boolean (default: true)</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getLabel label} : sap.ui.core.Control</li>
 * <li>{@link #getMultiLabels multiLabels} : sap.ui.core.Control[]</li>
 * <li>{@link #getTemplate template} : sap.ui.core.Control</li>
 * <li>{@link #getMenu menu} : sap.ui.commons.Menu</li></ul>
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
 * The column allows to define column specific properties that will be applied when rendering the table.
 * @extends sap.ui.core.Element
 * @version 1.15.1-SNAPSHOT
 * @constructor   
 * @public
 * 
 */
sap.ui.table.Column = function(sId,mSettings) {};
/**
 * 
 * Adds some multiLabel <code>oMultiLabel</code> 
 * to the aggregation named <code>multiLabels</code>.
 * @param {sap.ui.core.Control}
 *            oMultiLabel the multiLabel to add; if empty, nothing is inserted
 * @return {sap.ui.table.Column} <code>this</code> to allow method chaining
 * @public
 * @since 1.13.1
 * 
 */
sap.ui.table.Column.prototype.addMultiLabel = function(oMultiLabel) { return new sap.ui.table.Column(); };

/**
 * 
 * Destroys the label in the aggregation 
 * named <code>label</code>.
 * @return {sap.ui.table.Column} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.table.Column.prototype.destroyLabel = function() { return new sap.ui.table.Column(); };

/**
 * 
 * Destroys the menu in the aggregation 
 * named <code>menu</code>.
 * @return {sap.ui.table.Column} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.table.Column.prototype.destroyMenu = function() { return new sap.ui.table.Column(); };

/**
 * 
 * Destroys all the multiLabels in the aggregation 
 * named <code>multiLabels</code>.
 * @return {sap.ui.table.Column} <code>this</code> to allow method chaining
 * @public
 * @since 1.13.1
 * 
 */
sap.ui.table.Column.prototype.destroyMultiLabels = function() { return new sap.ui.table.Column(); };

/**
 * 
 * Destroys the template in the aggregation 
 * named <code>template</code>.
 * @return {sap.ui.table.Column} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.table.Column.prototype.destroyTemplate = function() { return new sap.ui.table.Column(); };

/**
 * 
 * Creates a new subclass of class sap.ui.table.Column with name <code>sClassName</code> 
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
sap.ui.table.Column.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * 
 * Getter for property <code>filtered</code>.
 * flag, if the column is filtered or not (displays the filter indicator, does not trigger the filter method!)
 * </p><p>
 * Default value is <code>false</code>
 * @return {boolean} the value of property <code>filtered</code>
 * @public
 * 
 */
sap.ui.table.Column.prototype.getFiltered = function() { return false; };

/**
 * 
 * Getter for property <code>filterOperator</code>.
 * @see sap.ui.model.FilterOperator (default value: "Contains")
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {string} the value of property <code>filterOperator</code>
 * @public
 * 
 */
sap.ui.table.Column.prototype.getFilterOperator = function() { return ""; };

/**
 * 
 * Getter for property <code>filterProperty</code>.
 * Specifies the binding property on which the column will filter.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {string} the value of property <code>filterProperty</code>
 * @public
 * 
 */
sap.ui.table.Column.prototype.getFilterProperty = function() { return ""; };

/**
 * 
 * Getter for property <code>filterType</code>.
 * Type of Filter. This is used to transform the search term to the specified type, to make sure that the right columns are displayed. This should be the same as defined in binding for this column. Alternativly, you can pass a function which does the conversion. The functions only parameter is the string to convert. By default the filter type is String.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {any} the value of property <code>filterType</code>
 * @public
 * @since 1.9.2
 * 
 */
sap.ui.table.Column.prototype.getFilterType = function() { return null; };

/**
 * 
 * Getter for property <code>filterValue</code>.
 * Specifies the value of the filter as string (will be converted into the propert data type).
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {string} the value of property <code>filterValue</code>
 * @public
 * 
 */
sap.ui.table.Column.prototype.getFilterValue = function() { return ""; };

/**
 * 
 * Getter for property <code>flexible</code>.
 * Is the width of the column flexible (grows on resize)?
 * </p><p>
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>flexible</code>
 * @public
 * 
 */
sap.ui.table.Column.prototype.getFlexible = function() { return false; };

/**
 * 
 * Getter for property <code>grouped</code>.
 * flag, if the column is grouped or not (hides the column!)
 * </p><p>
 * Default value is <code>false</code>
 * @return {boolean} the value of property <code>grouped</code>
 * @public
 * 
 */
sap.ui.table.Column.prototype.getGrouped = function() { return false; };

/**
 * 
 * Getter for property <code>hAlign</code>.
 * Horizontal alignment of the column content. Controls with a text align do not inherit the horizontal alignment. You have to set the text align directly on the template.
 * </p><p>
 * Default value is <code>Begin</code>
 * @return {sap.ui.commons.layout.HAlign} the value of property <code>hAlign</code>
 * @public
 * 
 */
sap.ui.table.Column.prototype.getHAlign = function() { return new sap.ui.commons.layout.HAlign(); };

/**
 * 
 * Getter for aggregation <code>label</code>.<br/>
 * Label (header renderer) of the column which is displayed in the column header. Define a control for each header row in the table. This aggregation is for the standard behaviour, if you only want to display one single row header.
 * @return {sap.ui.core.Control}
 * @public
 * 
 */
sap.ui.table.Column.prototype.getLabel = function() { return new sap.ui.core.Control(); };

/**
 * 
 * Getter for aggregation <code>menu</code>.<br/>
 * The menu used by the column. By default the {@link sap.ui.table.ColumnMenu} is used.
 * @return {sap.ui.commons.Menu}
 * @public
 * 
 */
sap.ui.table.Column.prototype.getMenu = function() { return new sap.ui.commons.Menu(); };

/**
 * 
 * Getter for aggregation <code>multiLabels</code>.<br/>
 * Labels (header renderer) of the column which are displayed in the column header. Define a control for each header row in the table. Use this aggregation, if you want to use multiple headers per column.
 * @return {sap.ui.core.Control[]}
 * @public
 * @since 1.13.1
 * 
 */
sap.ui.table.Column.prototype.getMultiLabels = function() { return new Array(); };

/**
 * 
 * Getter for property <code>name</code>.
 * The name of the column which is used in the column visibility menu item as text. If not set as fallback the column menu tries to get the text from the nested Label.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {string} the value of property <code>name</code>
 * @public
 * @since 1.11.1
 * 
 */
sap.ui.table.Column.prototype.getName = function() { return ""; };

/**
 * 
 * Getter for property <code>resizable</code>.
 * Is the column resizable or not?
 * </p><p>
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>resizable</code>
 * @public
 * 
 */
sap.ui.table.Column.prototype.getResizable = function() { return false; };

/**
 * 
 * Getter for property <code>showFilterMenuEntry</code>.
 * Define if the filter menu entry is displayed
 * </p><p>
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>showFilterMenuEntry</code>
 * @public
 * @since 1.13.0
 * 
 */
sap.ui.table.Column.prototype.getShowFilterMenuEntry = function() { return false; };

/**
 * 
 * Getter for property <code>showSortMenuEntry</code>.
 * Define if the sort menu entries are displayed
 * </p><p>
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>showSortMenuEntry</code>
 * @public
 * @since 1.13.0
 * 
 */
sap.ui.table.Column.prototype.getShowSortMenuEntry = function() { return false; };

/**
 * 
 * Getter for property <code>sorted</code>.
 * flag, if the column is sorted or not (displays the sorting indicator, does not trigger the sort method!)
 * </p><p>
 * Default value is <code>false</code>
 * @return {boolean} the value of property <code>sorted</code>
 * @public
 * 
 */
sap.ui.table.Column.prototype.getSorted = function() { return false; };

/**
 * 
 * Getter for property <code>sortOrder</code>.
 * @see sap.ui.table.SortOrder (default value: "Ascending")
 * </p><p>
 * Default value is <code>Ascending</code>
 * @return {sap.ui.table.SortOrder} the value of property <code>sortOrder</code>
 * @public
 * 
 */
sap.ui.table.Column.prototype.getSortOrder = function() { return new sap.ui.table.SortOrder(); };

/**
 * 
 * Getter for property <code>sortProperty</code>.
 * Specifies the binding property on which the column will sort.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {string} the value of property <code>sortProperty</code>
 * @public
 * 
 */
sap.ui.table.Column.prototype.getSortProperty = function() { return ""; };

/**
 * 
 * Getter for aggregation <code>template</code>.<br/>
 * Template (cell renderer) of this column. A template is decoupled from the column which means after changing the templates' properties or aggregations an explicit invalidation of the column or table is required. The default is: sap.ui.commons.TextView.
 * @return {sap.ui.core.Control}
 * @public
 * 
 */
sap.ui.table.Column.prototype.getTemplate = function() { return new sap.ui.core.Control(); };

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
sap.ui.table.Column.prototype.getVisible = function() { return false; };

/**
 * 
 * Getter for property <code>width</code>.
 * Width of the column.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {sap.ui.core.CSSSize} the value of property <code>width</code>
 * @public
 * 
 */
sap.ui.table.Column.prototype.getWidth = function() { return new sap.ui.core.CSSSize(); };

/**
 * 
 * Checks for the provided <code>sap.ui.core.Control</code> in the aggregation named <code>multiLabels</code> 
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.core.Control}
 *            oMultiLabel the multiLabel whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * @since 1.13.1
 * 
 */
sap.ui.table.Column.prototype.indexOfMultiLabel = function(oMultiLabel) { return 0; };

/**
 * 
 * Inserts a multiLabel into the aggregation named <code>multiLabels</code>.
 * @param {sap.ui.core.Control}
 *          oMultiLabel the multiLabel to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the multiLabel should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the multiLabel is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the multiLabel is inserted at 
 *             the last position        
 * @return {sap.ui.table.Column} <code>this</code> to allow method chaining
 * @public
 * @since 1.13.1
 * 
 */
sap.ui.table.Column.prototype.insertMultiLabel = function(oMultiLabel,iIndex) { return new sap.ui.table.Column(); };

/**
 * 
 * Removes all the controls in the aggregation named <code>multiLabels</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.core.Control[]} an array of the removed elements (might be empty)
 * @public
 * @since 1.13.1
 * 
 */
sap.ui.table.Column.prototype.removeAllMultiLabels = function() { return new Array(); };

/**
 * 
 * Removes an multiLabel from the aggregation named <code>multiLabels</code>.
 * @param {int | string | sap.ui.core.Control} vMultiLabel the multiLabel to remove or its index or id
 * @return {sap.ui.core.Control} the removed multiLabel or null
 * @public
 * @since 1.13.1
 * 
 */
sap.ui.table.Column.prototype.removeMultiLabel = function(vMultiLabel) { return new sap.ui.core.Control(); };

/**
 * 
 * Setter for property <code>filtered</code>.
 * </p><p>
 * Default value is <code>false</code> 
 * @param {boolean} bFiltered  new value for property <code>filtered</code>
 * @return {sap.ui.table.Column} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.table.Column.prototype.setFiltered = function(bFiltered) { return new sap.ui.table.Column(); };

/**
 * 
 * Setter for property <code>filterOperator</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {string} sFilterOperator  new value for property <code>filterOperator</code>
 * @return {sap.ui.table.Column} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.table.Column.prototype.setFilterOperator = function(sFilterOperator) { return new sap.ui.table.Column(); };

/**
 * 
 * Setter for property <code>filterProperty</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {string} sFilterProperty  new value for property <code>filterProperty</code>
 * @return {sap.ui.table.Column} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.table.Column.prototype.setFilterProperty = function(sFilterProperty) { return new sap.ui.table.Column(); };

/**
 * 
 * Setter for property <code>filterType</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {any} oFilterType  new value for property <code>filterType</code>
 * @return {sap.ui.table.Column} <code>this</code> to allow method chaining
 * @public
 * @since 1.9.2
 * 
 */
sap.ui.table.Column.prototype.setFilterType = function(oFilterType) { return new sap.ui.table.Column(); };

/**
 * 
 * Setter for property <code>filterValue</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {string} sFilterValue  new value for property <code>filterValue</code>
 * @return {sap.ui.table.Column} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.table.Column.prototype.setFilterValue = function(sFilterValue) { return new sap.ui.table.Column(); };

/**
 * 
 * Setter for property <code>flexible</code>.
 * </p><p>
 * Default value is <code>true</code> 
 * @param {boolean} bFlexible  new value for property <code>flexible</code>
 * @return {sap.ui.table.Column} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.table.Column.prototype.setFlexible = function(bFlexible) { return new sap.ui.table.Column(); };

/**
 * 
 * Setter for property <code>grouped</code>.
 * </p><p>
 * Default value is <code>false</code> 
 * @param {boolean} bGrouped  new value for property <code>grouped</code>
 * @return {sap.ui.table.Column} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.table.Column.prototype.setGrouped = function(bGrouped) { return new sap.ui.table.Column(); };

/**
 * 
 * Setter for property <code>hAlign</code>.
 * </p><p>
 * Default value is <code>Begin</code> 
 * @param {sap.ui.commons.layout.HAlign} oHAlign  new value for property <code>hAlign</code>
 * @return {sap.ui.table.Column} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.table.Column.prototype.setHAlign = function(oHAlign) { return new sap.ui.table.Column(); };

/**
 * 
 * Setter for the aggregated <code>label</code>.
 * @param oLabel {sap.ui.core.Control}
 * @return {sap.ui.table.Column} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.table.Column.prototype.setLabel = function(oLabel) { return new sap.ui.table.Column(); };

/**
 * 
 * Setter for the aggregated <code>menu</code>.
 * @param oMenu {sap.ui.commons.Menu}
 * @return {sap.ui.table.Column} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.table.Column.prototype.setMenu = function(oMenu) { return new sap.ui.table.Column(); };

/**
 * 
 * Setter for property <code>name</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {string} sName  new value for property <code>name</code>
 * @return {sap.ui.table.Column} <code>this</code> to allow method chaining
 * @public
 * @since 1.11.1
 * 
 */
sap.ui.table.Column.prototype.setName = function(sName) { return new sap.ui.table.Column(); };

/**
 * 
 * Setter for property <code>resizable</code>.
 * </p><p>
 * Default value is <code>true</code> 
 * @param {boolean} bResizable  new value for property <code>resizable</code>
 * @return {sap.ui.table.Column} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.table.Column.prototype.setResizable = function(bResizable) { return new sap.ui.table.Column(); };

/**
 * 
 * Setter for property <code>showFilterMenuEntry</code>.
 * </p><p>
 * Default value is <code>true</code> 
 * @param {boolean} bShowFilterMenuEntry  new value for property <code>showFilterMenuEntry</code>
 * @return {sap.ui.table.Column} <code>this</code> to allow method chaining
 * @public
 * @since 1.13.0
 * 
 */
sap.ui.table.Column.prototype.setShowFilterMenuEntry = function(bShowFilterMenuEntry) { return new sap.ui.table.Column(); };

/**
 * 
 * Setter for property <code>showSortMenuEntry</code>.
 * </p><p>
 * Default value is <code>true</code> 
 * @param {boolean} bShowSortMenuEntry  new value for property <code>showSortMenuEntry</code>
 * @return {sap.ui.table.Column} <code>this</code> to allow method chaining
 * @public
 * @since 1.13.0
 * 
 */
sap.ui.table.Column.prototype.setShowSortMenuEntry = function(bShowSortMenuEntry) { return new sap.ui.table.Column(); };

/**
 * 
 * Setter for property <code>sorted</code>.
 * </p><p>
 * Default value is <code>false</code> 
 * @param {boolean} bSorted  new value for property <code>sorted</code>
 * @return {sap.ui.table.Column} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.table.Column.prototype.setSorted = function(bSorted) { return new sap.ui.table.Column(); };

/**
 * 
 * Setter for property <code>sortOrder</code>.
 * </p><p>
 * Default value is <code>Ascending</code> 
 * @param {sap.ui.table.SortOrder} oSortOrder  new value for property <code>sortOrder</code>
 * @return {sap.ui.table.Column} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.table.Column.prototype.setSortOrder = function(oSortOrder) { return new sap.ui.table.Column(); };

/**
 * 
 * Setter for property <code>sortProperty</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {string} sSortProperty  new value for property <code>sortProperty</code>
 * @return {sap.ui.table.Column} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.table.Column.prototype.setSortProperty = function(sSortProperty) { return new sap.ui.table.Column(); };

/**
 * 
 * Setter for the aggregated <code>template</code>.
 * @param oTemplate {sap.ui.core.Control}
 * @return {sap.ui.table.Column} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.table.Column.prototype.setTemplate = function(oTemplate) { return new sap.ui.table.Column(); };

/**
 * 
 * Setter for property <code>visible</code>.
 * </p><p>
 * Default value is <code>true</code> 
 * @param {boolean} bVisible  new value for property <code>visible</code>
 * @return {sap.ui.table.Column} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.table.Column.prototype.setVisible = function(bVisible) { return new sap.ui.table.Column(); };

/**
 * 
 * Setter for property <code>width</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {sap.ui.core.CSSSize} sWidth  new value for property <code>width</code>
 * @return {sap.ui.table.Column} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.table.Column.prototype.setWidth = function(sWidth) { return new sap.ui.table.Column(); };

/**
 * 
 * sorts the current column ascending or descending
 * @param {boolean} 
 *         bDescending
 *         sort order of the column (if undefined the default will be ascending)
 * @type sap.ui.table.Column
 * @public
 * @deprecated Since version 1.5.1. 
 * Please use the function "sap.ui.Table.prototype.sort".
 */
sap.ui.table.Column.prototype.sort = function(bDescending) { return new sap.ui.table.Column(); };

/**
 * 
 * toggles the sort order of the column
 * @type sap.ui.table.Column
 * @public
 * @deprecated Since version 1.5.1. 
 * Please use the function "sap.ui.Table.prototype.sort".
 */
sap.ui.table.Column.prototype.toggleSort = function() { return new sap.ui.table.Column(); };


// ---- sap.ui.table.ColumnMenu --------------------------------------------------------------------------

/**
 * 
 * Constructor for a new ColumnMenu.
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
 * In addition, all settings applicable to the base type {@link sap.ui.commons.Menu#constructor sap.ui.commons.Menu}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * The column menu provides all common actions that can be performed on a column.
 * @extends sap.ui.commons.Menu
 * @version 1.15.1-SNAPSHOT
 * @constructor   
 * @public
 * 
 */
sap.ui.table.ColumnMenu = function(sId,mSettings) {};
/**
 * 
 * Creates a new subclass of class sap.ui.table.ColumnMenu with name <code>sClassName</code> 
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
sap.ui.table.ColumnMenu.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };


// ---- sap.ui.table.DataTable --------------------------------------------------------------------------

/**
 * 
 * Constructor for a new DataTable.
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
 * <li>{@link #getExpandedVisibleRowCount expandedVisibleRowCount} : int</li>
 * <li>{@link #getExpanded expanded} : boolean (default: false)</li>
 * <li>{@link #getHierarchical hierarchical} : boolean (default: false)</li></ul>
 * </li>
 * <li>Aggregations
 * <ul></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link sap.ui.table.DataTable#event:rowSelect rowSelect} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
 * </li>
 * </ul> 
 * </p><p>
 * </p><p>
 * In addition, all settings applicable to the base type {@link sap.ui.table.TreeTable#constructor sap.ui.table.TreeTable}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * The DataTable control provides a set of sophisticated and comfort functions for table design. For example, you can make settings for the number of visible rows and a number for the displayed rows in the case the user expands the table. The first visible row can be explicitly set. For the selection of columns and rows, a Multi, a Single, a None, and an All mode are available. Setting the Editable property to true lets the user make changes on the table cell entries.
 * @extends sap.ui.table.TreeTable
 * @version 1.15.1-SNAPSHOT
 * @constructor   
 * @public
 * @deprecated Since version 1.5.1. 
 * The DataTable has been replaced via the Table/TreeTable control.
 * 
 */
sap.ui.table.DataTable = function(sId,mSettings) {};
/**
 * 
 * fired when the row selection of the table has been changed 
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {int} oControlEvent.getParameters.rowIndex row index which row has been selected or deselected
 * @param {object} oControlEvent.getParameters.rowContext binding context of the row index which row has been selected or deselected
 * @param {int[]} oControlEvent.getParameters.rowIndices array of row indices which selection has been changed (either selected or deselected)
 * @public
 */
sap.ui.table.DataTable.prototype.rowSelect = function(oControlEvent) { return null; };

/**
 * 
 * Attach event handler <code>fnFunction</code> to the 'rowSelect' event of this <code>sap.ui.table.DataTable</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ui.table.DataTable</code>.<br/> itself. 
 * </p><p>
 * fired when the row selection of the table has been changed 
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener=this] Context object to call the event handler with. Defaults to this <code>sap.ui.table.DataTable</code>.<br/> itself.
 * @return {sap.ui.table.DataTable} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.table.DataTable.prototype.attachRowSelect = function(oData,fnFunction,oListener) { return new sap.ui.table.DataTable(); };

/**
 * 
 * Detach event handler <code>fnFunction</code> from the 'rowSelect' event of this <code>sap.ui.table.DataTable</code>.<br/>
 * </p><p>
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.table.DataTable} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.table.DataTable.prototype.detachRowSelect = function(fnFunction,oListener) { return new sap.ui.table.DataTable(); };

/**
 * 
 * Creates a new subclass of class sap.ui.table.DataTable with name <code>sClassName</code> 
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
sap.ui.table.DataTable.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * 
 * Fire event rowSelect to attached listeners.
 * </p><p>
 * Expects following event parameters:
 * <ul>
 * <li>'rowIndex' of type <code>int</code> row index which row has been selected or deselected</li>
 * <li>'rowContext' of type <code>object</code> binding context of the row index which row has been selected or deselected</li>
 * <li>'rowIndices' of type <code>int[]</code> array of row indices which selection has been changed (either selected or deselected)</li>
 * </ul>
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.table.DataTable} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.ui.table.DataTable.prototype.fireRowSelect = function(mArguments) { return new sap.ui.table.DataTable(); };

/**
 * 
 * Getter for property <code>expanded</code>.
 * Flag whether the Table is expanded or not
 * </p><p>
 * Default value is <code>false</code>
 * @return {boolean} the value of property <code>expanded</code>
 * @public
 * 
 */
sap.ui.table.DataTable.prototype.getExpanded = function() { return false; };

/**
 * 
 * Getter for property <code>expandedVisibleRowCount</code>.
 * Count of visible rows when expanded
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {int} the value of property <code>expandedVisibleRowCount</code>
 * @public
 * 
 */
sap.ui.table.DataTable.prototype.getExpandedVisibleRowCount = function() { return 0; };

/**
 * 
 * Getter for property <code>hierarchical</code>.
 * Flag, whether the table displays its content hierarchical or not (**experimental**!!)
 * </p><p>
 * Default value is <code>false</code>
 * @return {boolean} the value of property <code>hierarchical</code>
 * @public
 * 
 */
sap.ui.table.DataTable.prototype.getHierarchical = function() { return false; };

/**
 * 
 * Setter for property <code>expanded</code>.
 * </p><p>
 * Default value is <code>false</code> 
 * @param {boolean} bExpanded  new value for property <code>expanded</code>
 * @return {sap.ui.table.DataTable} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.table.DataTable.prototype.setExpanded = function(bExpanded) { return new sap.ui.table.DataTable(); };

/**
 * 
 * Setter for property <code>expandedVisibleRowCount</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {int} iExpandedVisibleRowCount  new value for property <code>expandedVisibleRowCount</code>
 * @return {sap.ui.table.DataTable} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.table.DataTable.prototype.setExpandedVisibleRowCount = function(iExpandedVisibleRowCount) { return new sap.ui.table.DataTable(); };

/**
 * 
 * Setter for property <code>hierarchical</code>.
 * </p><p>
 * Default value is <code>false</code> 
 * @param {boolean} bHierarchical  new value for property <code>hierarchical</code>
 * @return {sap.ui.table.DataTable} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.table.DataTable.prototype.setHierarchical = function(bHierarchical) { return new sap.ui.table.DataTable(); };


// ---- sap.ui.table.NavigationMode --------------------------------------------------------------------------

// dummy function to make Eclipse aware of namespace
sap.ui.table.NavigationMode.toString = function() { return ""; };

// ---- sap.ui.table.Row --------------------------------------------------------------------------

/**
 * 
 * Constructor for a new Row.
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
 * <li>{@link #getCells cells} : sap.ui.core.Control[]</li></ul>
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
 * The row.
 * @extends sap.ui.core.Element
 * @version 1.15.1-SNAPSHOT
 * @constructor   
 * @public
 * 
 */
sap.ui.table.Row = function(sId,mSettings) {};
/**
 * 
 * Adds some cell <code>oCell</code> 
 * to the aggregation named <code>cells</code>.
 * @param {sap.ui.core.Control}
 *            oCell the cell to add; if empty, nothing is inserted
 * @return {sap.ui.table.Row} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.table.Row.prototype.addCell = function(oCell) { return new sap.ui.table.Row(); };

/**
 * 
 * Destroys all the cells in the aggregation 
 * named <code>cells</code>.
 * @return {sap.ui.table.Row} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.table.Row.prototype.destroyCells = function() { return new sap.ui.table.Row(); };

/**
 * 
 * Creates a new subclass of class sap.ui.table.Row with name <code>sClassName</code> 
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
sap.ui.table.Row.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * 
 * Getter for aggregation <code>cells</code>.<br/>
 * The controls for the cells.
 * @return {sap.ui.core.Control[]}
 * @public
 * 
 */
sap.ui.table.Row.prototype.getCells = function() { return new Array(); };

/**
 * 
 * Returns the index of the row in the table or -1 if not added to a table.
 * @type int
 * @public
 */
sap.ui.table.Row.prototype.getIndex = function() { return 0; };

/**
 * 
 * Checks for the provided <code>sap.ui.core.Control</code> in the aggregation named <code>cells</code> 
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.core.Control}
 *            oCell the cell whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * 
 */
sap.ui.table.Row.prototype.indexOfCell = function(oCell) { return 0; };

/**
 * 
 * Inserts a cell into the aggregation named <code>cells</code>.
 * @param {sap.ui.core.Control}
 *          oCell the cell to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the cell should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the cell is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the cell is inserted at 
 *             the last position        
 * @return {sap.ui.table.Row} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.table.Row.prototype.insertCell = function(oCell,iIndex) { return new sap.ui.table.Row(); };

/**
 * 
 * Removes all the controls in the aggregation named <code>cells</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.core.Control[]} an array of the removed elements (might be empty)
 * @public
 * 
 */
sap.ui.table.Row.prototype.removeAllCells = function() { return new Array(); };

/**
 * 
 * Removes an cell from the aggregation named <code>cells</code>.
 * @param {int | string | sap.ui.core.Control} vCell the cell to remove or its index or id
 * @return {sap.ui.core.Control} the removed cell or null
 * @public
 * 
 */
sap.ui.table.Row.prototype.removeCell = function(vCell) { return new sap.ui.core.Control(); };


// ---- sap.ui.table.SelectionBehavior --------------------------------------------------------------------------

// dummy function to make Eclipse aware of namespace
sap.ui.table.SelectionBehavior.toString = function() { return ""; };

// ---- sap.ui.table.SelectionMode --------------------------------------------------------------------------

// dummy function to make Eclipse aware of namespace
sap.ui.table.SelectionMode.toString = function() { return ""; };

// ---- sap.ui.table.SortOrder --------------------------------------------------------------------------

// dummy function to make Eclipse aware of namespace
sap.ui.table.SortOrder.toString = function() { return ""; };

// ---- sap.ui.table.Table --------------------------------------------------------------------------

/**
 * 
 * Constructor for a new Table.
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
 * <li>{@link #getRowHeight rowHeight} : int</li>
 * <li>{@link #getColumnHeaderHeight columnHeaderHeight} : int</li>
 * <li>{@link #getColumnHeaderVisible columnHeaderVisible} : boolean (default: true)</li>
 * <li>{@link #getVisibleRowCount visibleRowCount} : int (default: 10)</li>
 * <li>{@link #getFirstVisibleRow firstVisibleRow} : int (default: 0)</li>
 * <li>{@link #getSelectionMode selectionMode} : sap.ui.table.SelectionMode (default: sap.ui.table.SelectionMode.Multi)</li>
 * <li>{@link #getSelectionBehavior selectionBehavior} : sap.ui.table.SelectionBehavior (default: sap.ui.table.SelectionBehavior.RowSelector)</li>
 * <li>{@link #getSelectedIndex selectedIndex} : int (default: -1)</li>
 * <li>{@link #getAllowColumnReordering allowColumnReordering} : boolean (default: true)</li>
 * <li>{@link #getEditable editable} : boolean (default: true)</li>
 * <li>{@link #getVisible visible} : boolean (default: true)</li>
 * <li>{@link #getNavigationMode navigationMode} : sap.ui.table.NavigationMode (default: sap.ui.table.NavigationMode.Scrollbar)</li>
 * <li>{@link #getThreshold threshold} : int (default: 100)</li>
 * <li>{@link #getEnableColumnReordering enableColumnReordering} : boolean (default: true)</li>
 * <li>{@link #getEnableGrouping enableGrouping} : boolean (default: false)</li>
 * <li>{@link #getShowColumnVisibilityMenu showColumnVisibilityMenu} : boolean (default: false)</li>
 * <li>{@link #getShowNoData showNoData} : boolean (default: true)</li>
 * <li>{@link #getVisibleRowCountMode visibleRowCountMode} : sap.ui.table.VisibleRowCountMode (default: sap.ui.table.VisibleRowCountMode.Fixed)</li>
 * <li>{@link #getFixedColumnCount fixedColumnCount} : int (default: 0)</li>
 * <li>{@link #getFixedRowCount fixedRowCount} : int (default: 0)</li>
 * <li>{@link #getMinAutoRowCount minAutoRowCount} : int (default: 5)</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getTitle title} : sap.ui.core.Control|string</li>
 * <li>{@link #getFooter footer} : sap.ui.core.Control|string</li>
 * <li>{@link #getToolbar toolbar} : sap.ui.commons.Toolbar</li>
 * <li>{@link #getExtension extension} : sap.ui.core.Control[]</li>
 * <li>{@link #getColumns columns} : sap.ui.table.Column[]</li>
 * <li>{@link #getRows rows} : sap.ui.table.Row[]</li>
 * <li>{@link #getNoData noData} : sap.ui.core.Control</li></ul>
 * </li>
 * <li>Associations
 * <ul>
 * <li>{@link #getGroupBy groupBy} : string | sap.ui.table.Column</li></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link sap.ui.table.Table#event:rowSelectionChange rowSelectionChange} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.ui.table.Table#event:columnSelect columnSelect} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.ui.table.Table#event:columnResize columnResize} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.ui.table.Table#event:columnMove columnMove} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.ui.table.Table#event:sort sort} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.ui.table.Table#event:filter filter} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.ui.table.Table#event:group group} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.ui.table.Table#event:columnVisibility columnVisibility} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
 * </li>
 * </ul> 
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * The Table control provides a set of sophisticated and comfort functions for table design. For example, you can make settings for the number of visible rows. The first visible row can be explicitly set. For the selection of rows, a Multi, a Single, and a None mode are available.
 * @extends sap.ui.core.Control
 * @version 1.15.1-SNAPSHOT
 * @constructor   
 * @public
 * 
 */
sap.ui.table.Table = function(sId,mSettings) {};
/**
 * 
 * fired when a table column is moved. 
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {sap.ui.table.Column} oControlEvent.getParameters.column moved column.
 * @param {int} oControlEvent.getParameters.newPos new position of the column.
 * @public
 */
sap.ui.table.Table.prototype.columnMove = function(oControlEvent) { return null; };

/**
 * 
 * fired when a table column is resized. 
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {sap.ui.table.Column} oControlEvent.getParameters.column resized column.
 * @param {int} oControlEvent.getParameters.width new width of the table in pixel.
 * @public
 */
sap.ui.table.Table.prototype.columnResize = function(oControlEvent) { return null; };

/**
 * 
 * fired when a column of the table has been selected 
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {sap.ui.table.Column} oControlEvent.getParameters.column reference to the selected column
 * @public
 */
sap.ui.table.Table.prototype.columnSelect = function(oControlEvent) { return null; };

/**
 * 
 * fired when the visibility of a table column is changed. 
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {sap.ui.table.Column} oControlEvent.getParameters.column affected column.
 * @param {boolean} oControlEvent.getParameters.visible new value of the visible property.
 * @public
 */
sap.ui.table.Table.prototype.columnVisibility = function(oControlEvent) { return null; };

/**
 * 
 * fired when the table is filtered. 
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {sap.ui.table.Column} oControlEvent.getParameters.column filtered column.
 * @param {string} oControlEvent.getParameters.value filter value.
 * @public
 */
sap.ui.table.Table.prototype.filter = function(oControlEvent) { return null; };

/**
 * 
 * fired when the table is grouped. 
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {sap.ui.table.Column} oControlEvent.getParameters.column grouped column.
 * @public
 */
sap.ui.table.Table.prototype.group = function(oControlEvent) { return null; };

/**
 * 
 * fired when the row selection of the table has been changed (the event parameters can be used to determine selection changes - to find out the selected rows you should better use the table selection API) 
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {int} oControlEvent.getParameters.rowIndex row index which has been clicked so that the selection has been changed (either selected or deselected)
 * @param {object} oControlEvent.getParameters.rowContext binding context of the row which has been clicked so that selection has been changed
 * @param {int[]} oControlEvent.getParameters.rowIndices array of row indices which selection has been changed (either selected or deselected)
 * @public
 */
sap.ui.table.Table.prototype.rowSelectionChange = function(oControlEvent) { return null; };

/**
 * 
 * fired when the table is sorted. 
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {sap.ui.table.Column} oControlEvent.getParameters.column sorted column.
 * @param {sap.ui.table.SortOrder} oControlEvent.getParameters.sortOrder Sort Order
 * @param {boolean} oControlEvent.getParameters.columnAdded If column was added to sorter this is true. If new sort is started this is set to false
 * @public
 */
sap.ui.table.Table.prototype.sort = function(oControlEvent) { return null; };

/**
 * 
 * Adds some column <code>oColumn</code> 
 * to the aggregation named <code>columns</code>.
 * @param {sap.ui.table.Column}
 *            oColumn the column to add; if empty, nothing is inserted
 * @return {sap.ui.table.Table} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.table.Table.prototype.addColumn = function(oColumn) { return new sap.ui.table.Table(); };

/**
 * 
 * Adds some extension <code>oExtension</code> 
 * to the aggregation named <code>extension</code>.
 * @param {sap.ui.core.Control}
 *            oExtension the extension to add; if empty, nothing is inserted
 * @return {sap.ui.table.Table} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.table.Table.prototype.addExtension = function(oExtension) { return new sap.ui.table.Table(); };

/**
 * 
 * Adds some row <code>oRow</code> 
 * to the aggregation named <code>rows</code>.
 * @param {sap.ui.table.Row}
 *            oRow the row to add; if empty, nothing is inserted
 * @return {sap.ui.table.Table} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.table.Table.prototype.addRow = function(oRow) { return new sap.ui.table.Table(); };

/**
 * 
 * Adds the given selection interval to the selection. In case of single selection the "indexTo" value will be used for as selected index.
 * @param {int} 
 *         iIndexFrom
 *         Index from which .
 * @param {int} 
 *         iIndexTo
 *         Indices of the items that shall additionally be selected.
 * @type sap.ui.table.Table
 * @public
 */
sap.ui.table.Table.prototype.addSelectionInterval = function(iIndexFrom,iIndexTo) { return new sap.ui.table.Table(); };

/**
 * 
 * Attach event handler <code>fnFunction</code> to the 'columnMove' event of this <code>sap.ui.table.Table</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ui.table.Table</code>.<br/> itself. 
 * </p><p>
 * fired when a table column is moved. 
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener=this] Context object to call the event handler with. Defaults to this <code>sap.ui.table.Table</code>.<br/> itself.
 * @return {sap.ui.table.Table} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.table.Table.prototype.attachColumnMove = function(oData,fnFunction,oListener) { return new sap.ui.table.Table(); };

/**
 * 
 * Attach event handler <code>fnFunction</code> to the 'columnResize' event of this <code>sap.ui.table.Table</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ui.table.Table</code>.<br/> itself. 
 * </p><p>
 * fired when a table column is resized. 
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener=this] Context object to call the event handler with. Defaults to this <code>sap.ui.table.Table</code>.<br/> itself.
 * @return {sap.ui.table.Table} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.table.Table.prototype.attachColumnResize = function(oData,fnFunction,oListener) { return new sap.ui.table.Table(); };

/**
 * 
 * Attach event handler <code>fnFunction</code> to the 'columnSelect' event of this <code>sap.ui.table.Table</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ui.table.Table</code>.<br/> itself. 
 * </p><p>
 * fired when a column of the table has been selected 
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener=this] Context object to call the event handler with. Defaults to this <code>sap.ui.table.Table</code>.<br/> itself.
 * @return {sap.ui.table.Table} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.table.Table.prototype.attachColumnSelect = function(oData,fnFunction,oListener) { return new sap.ui.table.Table(); };

/**
 * 
 * Attach event handler <code>fnFunction</code> to the 'columnVisibility' event of this <code>sap.ui.table.Table</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ui.table.Table</code>.<br/> itself. 
 * </p><p>
 * fired when the visibility of a table column is changed. 
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener=this] Context object to call the event handler with. Defaults to this <code>sap.ui.table.Table</code>.<br/> itself.
 * @return {sap.ui.table.Table} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.table.Table.prototype.attachColumnVisibility = function(oData,fnFunction,oListener) { return new sap.ui.table.Table(); };

/**
 * 
 * Attach event handler <code>fnFunction</code> to the 'filter' event of this <code>sap.ui.table.Table</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ui.table.Table</code>.<br/> itself. 
 * </p><p>
 * fired when the table is filtered. 
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener=this] Context object to call the event handler with. Defaults to this <code>sap.ui.table.Table</code>.<br/> itself.
 * @return {sap.ui.table.Table} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.table.Table.prototype.attachFilter = function(oData,fnFunction,oListener) { return new sap.ui.table.Table(); };

/**
 * 
 * Attach event handler <code>fnFunction</code> to the 'group' event of this <code>sap.ui.table.Table</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ui.table.Table</code>.<br/> itself. 
 * </p><p>
 * fired when the table is grouped. 
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener=this] Context object to call the event handler with. Defaults to this <code>sap.ui.table.Table</code>.<br/> itself.
 * @return {sap.ui.table.Table} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.table.Table.prototype.attachGroup = function(oData,fnFunction,oListener) { return new sap.ui.table.Table(); };

/**
 * 
 * Attach event handler <code>fnFunction</code> to the 'rowSelectionChange' event of this <code>sap.ui.table.Table</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ui.table.Table</code>.<br/> itself. 
 * </p><p>
 * fired when the row selection of the table has been changed (the event parameters can be used to determine selection changes - to find out the selected rows you should better use the table selection API) 
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener=this] Context object to call the event handler with. Defaults to this <code>sap.ui.table.Table</code>.<br/> itself.
 * @return {sap.ui.table.Table} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.table.Table.prototype.attachRowSelectionChange = function(oData,fnFunction,oListener) { return new sap.ui.table.Table(); };

/**
 * 
 * Attach event handler <code>fnFunction</code> to the 'sort' event of this <code>sap.ui.table.Table</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ui.table.Table</code>.<br/> itself. 
 * </p><p>
 * fired when the table is sorted. 
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener=this] Context object to call the event handler with. Defaults to this <code>sap.ui.table.Table</code>.<br/> itself.
 * @return {sap.ui.table.Table} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.table.Table.prototype.attachSort = function(oData,fnFunction,oListener) { return new sap.ui.table.Table(); };

/**
 * 
 * Binder for aggregation <code>columns</code>.
 * @param {string} sPath path to a list in the model 
 * @param {sap.ui.core.Element} oTemplate the control template for this aggregation
 * @param {sap.ui.model.Sorter} oSorter the initial sort order (optional)
 * @param {array} aFilters the predefined filters for this aggregation (optional)
 * @return {sap.ui.table.Table} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.table.Table.prototype.bindColumns = function(sPath,oTemplate,oSorter,aFilters) { return new sap.ui.table.Table(); };

/**
 * 
 * Binder for aggregation <code>rows</code>.
 * @param {string} sPath path to a list in the model 
 * @param {sap.ui.core.Element} oTemplate the control template for this aggregation
 * @param {sap.ui.model.Sorter} oSorter the initial sort order (optional)
 * @param {array} aFilters the predefined filters for this aggregation (optional)
 * @return {sap.ui.table.Table} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.table.Table.prototype.bindRows = function(sPath,oTemplate,oSorter,aFilters) { return new sap.ui.table.Table(); };

/**
 * 
 * Removes complete selection.
 * @type sap.ui.table.Table
 * @public
 */
sap.ui.table.Table.prototype.clearSelection = function() { return new sap.ui.table.Table(); };

/**
 * 
 * Destroys all the columns in the aggregation 
 * named <code>columns</code>.
 * @return {sap.ui.table.Table} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.table.Table.prototype.destroyColumns = function() { return new sap.ui.table.Table(); };

/**
 * 
 * Destroys all the extension in the aggregation 
 * named <code>extension</code>.
 * @return {sap.ui.table.Table} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.table.Table.prototype.destroyExtension = function() { return new sap.ui.table.Table(); };

/**
 * 
 * Destroys the footer in the aggregation 
 * named <code>footer</code>.
 * @return {sap.ui.table.Table} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.table.Table.prototype.destroyFooter = function() { return new sap.ui.table.Table(); };

/**
 * 
 * Destroys the noData in the aggregation 
 * named <code>noData</code>.
 * @return {sap.ui.table.Table} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.table.Table.prototype.destroyNoData = function() { return new sap.ui.table.Table(); };

/**
 * 
 * Destroys all the rows in the aggregation 
 * named <code>rows</code>.
 * @return {sap.ui.table.Table} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.table.Table.prototype.destroyRows = function() { return new sap.ui.table.Table(); };

/**
 * 
 * Destroys the title in the aggregation 
 * named <code>title</code>.
 * @return {sap.ui.table.Table} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.table.Table.prototype.destroyTitle = function() { return new sap.ui.table.Table(); };

/**
 * 
 * Destroys the toolbar in the aggregation 
 * named <code>toolbar</code>.
 * @return {sap.ui.table.Table} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.table.Table.prototype.destroyToolbar = function() { return new sap.ui.table.Table(); };

/**
 * 
 * Detach event handler <code>fnFunction</code> from the 'columnMove' event of this <code>sap.ui.table.Table</code>.<br/>
 * </p><p>
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.table.Table} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.table.Table.prototype.detachColumnMove = function(fnFunction,oListener) { return new sap.ui.table.Table(); };

/**
 * 
 * Detach event handler <code>fnFunction</code> from the 'columnResize' event of this <code>sap.ui.table.Table</code>.<br/>
 * </p><p>
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.table.Table} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.table.Table.prototype.detachColumnResize = function(fnFunction,oListener) { return new sap.ui.table.Table(); };

/**
 * 
 * Detach event handler <code>fnFunction</code> from the 'columnSelect' event of this <code>sap.ui.table.Table</code>.<br/>
 * </p><p>
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.table.Table} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.table.Table.prototype.detachColumnSelect = function(fnFunction,oListener) { return new sap.ui.table.Table(); };

/**
 * 
 * Detach event handler <code>fnFunction</code> from the 'columnVisibility' event of this <code>sap.ui.table.Table</code>.<br/>
 * </p><p>
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.table.Table} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.table.Table.prototype.detachColumnVisibility = function(fnFunction,oListener) { return new sap.ui.table.Table(); };

/**
 * 
 * Detach event handler <code>fnFunction</code> from the 'filter' event of this <code>sap.ui.table.Table</code>.<br/>
 * </p><p>
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.table.Table} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.table.Table.prototype.detachFilter = function(fnFunction,oListener) { return new sap.ui.table.Table(); };

/**
 * 
 * Detach event handler <code>fnFunction</code> from the 'group' event of this <code>sap.ui.table.Table</code>.<br/>
 * </p><p>
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.table.Table} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.table.Table.prototype.detachGroup = function(fnFunction,oListener) { return new sap.ui.table.Table(); };

/**
 * 
 * Detach event handler <code>fnFunction</code> from the 'rowSelectionChange' event of this <code>sap.ui.table.Table</code>.<br/>
 * </p><p>
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.table.Table} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.table.Table.prototype.detachRowSelectionChange = function(fnFunction,oListener) { return new sap.ui.table.Table(); };

/**
 * 
 * Detach event handler <code>fnFunction</code> from the 'sort' event of this <code>sap.ui.table.Table</code>.<br/>
 * </p><p>
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.table.Table} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.table.Table.prototype.detachSort = function(fnFunction,oListener) { return new sap.ui.table.Table(); };

/**
 * 
 * Creates a new subclass of class sap.ui.table.Table with name <code>sClassName</code> 
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
sap.ui.table.Table.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * 
 * filter the given column by the given value
 * @param {sap.ui.table.Column} 
 *         oColumn
 *         column to be filtered
 * @param {string} 
 *         sValue
 *         filter value as string (will be converted)
 * @type sap.ui.table.Table
 * @public
 */
sap.ui.table.Table.prototype.filter = function(oColumn,sValue) { return new sap.ui.table.Table(); };

/**
 * 
 * Fire event columnMove to attached listeners.
 * </p><p>
 * Listeners may prevent the default action of this event using the preventDefault-method on the event object.
 * * 
 * Expects following event parameters:
 * <ul>
 * <li>'column' of type <code>sap.ui.table.Column</code> moved column.</li>
 * <li>'newPos' of type <code>int</code> new position of the column.</li>
 * </ul>
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {boolean} whether to prevent the default action
 * @protected
 * 
 */
sap.ui.table.Table.prototype.fireColumnMove = function(mArguments) { return false; };

/**
 * 
 * Fire event columnResize to attached listeners.
 * </p><p>
 * Listeners may prevent the default action of this event using the preventDefault-method on the event object.
 * * 
 * Expects following event parameters:
 * <ul>
 * <li>'column' of type <code>sap.ui.table.Column</code> resized column.</li>
 * <li>'width' of type <code>int</code> new width of the table in pixel.</li>
 * </ul>
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {boolean} whether to prevent the default action
 * @protected
 * 
 */
sap.ui.table.Table.prototype.fireColumnResize = function(mArguments) { return false; };

/**
 * 
 * Fire event columnSelect to attached listeners.
 * </p><p>
 * Listeners may prevent the default action of this event using the preventDefault-method on the event object.
 * * 
 * Expects following event parameters:
 * <ul>
 * <li>'column' of type <code>sap.ui.table.Column</code> reference to the selected column</li>
 * </ul>
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {boolean} whether to prevent the default action
 * @protected
 * 
 */
sap.ui.table.Table.prototype.fireColumnSelect = function(mArguments) { return false; };

/**
 * 
 * Fire event columnVisibility to attached listeners.
 * </p><p>
 * Listeners may prevent the default action of this event using the preventDefault-method on the event object.
 * * 
 * Expects following event parameters:
 * <ul>
 * <li>'column' of type <code>sap.ui.table.Column</code> affected column.</li>
 * <li>'visible' of type <code>boolean</code> new value of the visible property.</li>
 * </ul>
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {boolean} whether to prevent the default action
 * @protected
 * 
 */
sap.ui.table.Table.prototype.fireColumnVisibility = function(mArguments) { return false; };

/**
 * 
 * Fire event filter to attached listeners.
 * </p><p>
 * Listeners may prevent the default action of this event using the preventDefault-method on the event object.
 * * 
 * Expects following event parameters:
 * <ul>
 * <li>'column' of type <code>sap.ui.table.Column</code> filtered column.</li>
 * <li>'value' of type <code>string</code> filter value.</li>
 * </ul>
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {boolean} whether to prevent the default action
 * @protected
 * 
 */
sap.ui.table.Table.prototype.fireFilter = function(mArguments) { return false; };

/**
 * 
 * Fire event group to attached listeners.
 * </p><p>
 * Listeners may prevent the default action of this event using the preventDefault-method on the event object.
 * * 
 * Expects following event parameters:
 * <ul>
 * <li>'column' of type <code>sap.ui.table.Column</code> grouped column.</li>
 * </ul>
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {boolean} whether to prevent the default action
 * @protected
 * 
 */
sap.ui.table.Table.prototype.fireGroup = function(mArguments) { return false; };

/**
 * 
 * Fire event rowSelectionChange to attached listeners.
 * </p><p>
 * Expects following event parameters:
 * <ul>
 * <li>'rowIndex' of type <code>int</code> row index which has been clicked so that the selection has been changed (either selected or deselected)</li>
 * <li>'rowContext' of type <code>object</code> binding context of the row which has been clicked so that selection has been changed</li>
 * <li>'rowIndices' of type <code>int[]</code> array of row indices which selection has been changed (either selected or deselected)</li>
 * </ul>
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.table.Table} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.ui.table.Table.prototype.fireRowSelectionChange = function(mArguments) { return new sap.ui.table.Table(); };

/**
 * 
 * Fire event sort to attached listeners.
 * </p><p>
 * Listeners may prevent the default action of this event using the preventDefault-method on the event object.
 * * 
 * Expects following event parameters:
 * <ul>
 * <li>'column' of type <code>sap.ui.table.Column</code> sorted column.</li>
 * <li>'sortOrder' of type <code>sap.ui.table.SortOrder</code> Sort Order</li>
 * <li>'columnAdded' of type <code>boolean</code> If column was added to sorter this is true. If new sort is started this is set to false</li>
 * </ul>
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {boolean} whether to prevent the default action
 * @protected
 * 
 */
sap.ui.table.Table.prototype.fireSort = function(mArguments) { return false; };

/**
 * 
 * Getter for property <code>allowColumnReordering</code>.
 * Flag to enable or disable column reordering
 * </p><p>
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>allowColumnReordering</code>
 * @public
 * @deprecated Since version 1.5.2. 
 * Use the property enableColumnReordering instead.
 * 
 */
sap.ui.table.Table.prototype.getAllowColumnReordering = function() { return false; };

/**
 * 
 * Getter for property <code>columnHeaderHeight</code>.
 * Height of the column header of the Table in pixel.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {int} the value of property <code>columnHeaderHeight</code>
 * @public
 * 
 */
sap.ui.table.Table.prototype.getColumnHeaderHeight = function() { return 0; };

/**
 * 
 * Getter for property <code>columnHeaderVisible</code>.
 * Flag whether the column header is visible or not.
 * </p><p>
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>columnHeaderVisible</code>
 * @public
 * 
 */
sap.ui.table.Table.prototype.getColumnHeaderVisible = function() { return false; };

/**
 * 
 * Getter for aggregation <code>columns</code>.<br/>
 * Columns of the Table
 * @return {sap.ui.table.Column[]}
 * @public
 * 
 */
sap.ui.table.Table.prototype.getColumns = function() { return new Array(); };

/**
 * 
 * Returns the context of a row by its index.
 * @param {int} 
 *         iIndex
 *         Index of the row to return the context from.
 * @type object
 * @public
 */
sap.ui.table.Table.prototype.getContextByIndex = function(iIndex) { return new Object(); };

/**
 * 
 * Getter for property <code>editable</code>.
 * Flag whether the controls of the Table are editable or not (currently this only controls the background color!)
 * </p><p>
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>editable</code>
 * @public
 * 
 */
sap.ui.table.Table.prototype.getEditable = function() { return false; };

/**
 * 
 * Getter for property <code>enableColumnReordering</code>.
 * Flag to enable or disable column reordering
 * </p><p>
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>enableColumnReordering</code>
 * @public
 * 
 */
sap.ui.table.Table.prototype.getEnableColumnReordering = function() { return false; };

/**
 * 
 * Getter for property <code>enableGrouping</code>.
 * Flag to enable or disable column grouping. (experimental)
 * </p><p>
 * Default value is <code>false</code>
 * @return {boolean} the value of property <code>enableGrouping</code>
 * @public
 * 
 */
sap.ui.table.Table.prototype.getEnableGrouping = function() { return false; };

/**
 * 
 * Getter for aggregation <code>extension</code>.<br/>
 * Extension section of the Table (if not set it will be hidden)
 * @return {sap.ui.core.Control[]}
 * @public
 * 
 */
sap.ui.table.Table.prototype.getExtension = function() { return new Array(); };

/**
 * 
 * Getter for property <code>firstVisibleRow</code>.
 * First visible row.
 * </p><p>
 * Default value is <code>0</code>
 * @return {int} the value of property <code>firstVisibleRow</code>
 * @public
 * 
 */
sap.ui.table.Table.prototype.getFirstVisibleRow = function() { return 0; };

/**
 * 
 * Getter for property <code>fixedColumnCount</code>.
 * Number of columns that are fix on the left. When you use a horizontal scroll bar, only the columns which are not fixed, will scroll. Fixed columns need a defined width for the feature to work.
 * </p><p>
 * Default value is <code>0</code>
 * @return {int} the value of property <code>fixedColumnCount</code>
 * @public
 * 
 */
sap.ui.table.Table.prototype.getFixedColumnCount = function() { return 0; };

/**
 * 
 * Getter for property <code>fixedRowCount</code>.
 * Number of rows that are fix on the top. When you use a vertical scroll bar, only the rows which are not fixed, will scroll.
 * </p><p>
 * Default value is <code>0</code>
 * @return {int} the value of property <code>fixedRowCount</code>
 * @public
 * 
 */
sap.ui.table.Table.prototype.getFixedRowCount = function() { return 0; };

/**
 * 
 * Getter for aggregation <code>footer</code>.<br/>
 * Control or text of footer section of the Table (if not set it will be hidden)
 * @return {sap.ui.core.Control|string}
 * @public
 * 
 */
sap.ui.table.Table.prototype.getFooter = function() { return new sap.ui.core.Control(); };

/**
 * 
 * Group By Column (experimental)
 * @return {string} Id of the element which is the current target of the <code>groupBy</code> association, or null
 * @public
 * 
 */
sap.ui.table.Table.prototype.getGroupBy = function() { return ""; };

/**
 * 
 * Getter for property <code>minAutoRowCount</code>.
 * This property is used to set the minimum count of visible rows when the property visibleRowCountMode is set to Auto.
 * For any other visibleRowCountMode, it is ignored.
 * </p><p>
 * Default value is <code>5</code>
 * @return {int} the value of property <code>minAutoRowCount</code>
 * @public
 * 
 */
sap.ui.table.Table.prototype.getMinAutoRowCount = function() { return 0; };

/**
 * 
 * Getter for property <code>navigationMode</code>.
 * Flag whether to use the scroll mode or paging mode.
 * </p><p>
 * Default value is <code>Scrollbar</code>
 * @return {sap.ui.table.NavigationMode} the value of property <code>navigationMode</code>
 * @public
 * 
 */
sap.ui.table.Table.prototype.getNavigationMode = function() { return new sap.ui.table.NavigationMode(); };

/**
 * 
 * Getter for aggregation <code>noData</code>.<br/>
 * This control is shown, in case there is no data available to be displayed in the Table.
 * @return {sap.ui.core.Control}
 * @public
 * 
 */
sap.ui.table.Table.prototype.getNoData = function() { return new sap.ui.core.Control(); };

/**
 * 
 * Getter for property <code>rowHeight</code>.
 * Height of a row of the Table in pixel.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {int} the value of property <code>rowHeight</code>
 * @public
 * 
 */
sap.ui.table.Table.prototype.getRowHeight = function() { return 0; };

/**
 * 
 * Getter for aggregation <code>rows</code>.<br/>
 * Rows of the Table
 * @return {sap.ui.table.Row[]}
 * @public
 * 
 */
sap.ui.table.Table.prototype.getRows = function() { return new Array(); };

/**
 * 
 * Getter for property <code>selectedIndex</code>.
 * Zero-based index of selected item. Index value for no selection is -1. When multi-selection is enabled and multiple items are selected, the method returns the lead selected item. Sets the zero-based index of the currently selected item. This method removes any previous selections. When the given index is invalid, the call is ignored.
 * </p><p>
 * Default value is <code>-1</code>
 * @return {int} the value of property <code>selectedIndex</code>
 * @public
 * 
 */
sap.ui.table.Table.prototype.getSelectedIndex = function() { return 0; };

/**
 * 
 * Zero-based indices of selected items, wrapped in an array. An empty array means "no selection".
 * @type int[]
 * @public
 */
sap.ui.table.Table.prototype.getSelectedIndices = function() { return new Array(); };

/**
 * 
 * Getter for property <code>selectionBehavior</code>.
 * Selection behavior of the Table.
 * </p><p>
 * Default value is <code>RowSelector</code>
 * @return {sap.ui.table.SelectionBehavior} the value of property <code>selectionBehavior</code>
 * @public
 * 
 */
sap.ui.table.Table.prototype.getSelectionBehavior = function() { return new sap.ui.table.SelectionBehavior(); };

/**
 * 
 * Getter for property <code>selectionMode</code>.
 * Selection mode of the Table.
 * </p><p>
 * Default value is <code>Multi</code>
 * @return {sap.ui.table.SelectionMode} the value of property <code>selectionMode</code>
 * @public
 * 
 */
sap.ui.table.Table.prototype.getSelectionMode = function() { return new sap.ui.table.SelectionMode(); };

/**
 * 
 * Getter for property <code>showColumnVisibilityMenu</code>.
 * Flag to show or hide the column visibility menu.
 * </p><p>
 * Default value is <code>false</code>
 * @return {boolean} the value of property <code>showColumnVisibilityMenu</code>
 * @public
 * 
 */
sap.ui.table.Table.prototype.getShowColumnVisibilityMenu = function() { return false; };

/**
 * 
 * Getter for property <code>showNoData</code>.
 * Flag whether to show the no data overlay or not once the table is empty.
 * </p><p>
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>showNoData</code>
 * @public
 * 
 */
sap.ui.table.Table.prototype.getShowNoData = function() { return false; };

/**
 * 
 * Getter for property <code>threshold</code>.
 * Threshold to fetch the next chunk of data. The minimal threshold can be the visible row count of the Table. If the value is 0 then the thresholding is disabled.
 * </p><p>
 * Default value is <code>100</code>
 * @return {int} the value of property <code>threshold</code>
 * @public
 * 
 */
sap.ui.table.Table.prototype.getThreshold = function() { return 0; };

/**
 * 
 * Getter for aggregation <code>title</code>.<br/>
 * Control or text of title section of the Table (if not set it will be hidden)
 * @return {sap.ui.core.Control|string}
 * @public
 * 
 */
sap.ui.table.Table.prototype.getTitle = function() { return new sap.ui.core.Control(); };

/**
 * 
 * Getter for aggregation <code>toolbar</code>.<br/>
 * Toolbar of the Table (if not set it will be hidden)
 * @return {sap.ui.commons.Toolbar}
 * @public
 * 
 */
sap.ui.table.Table.prototype.getToolbar = function() { return new sap.ui.commons.Toolbar(); };

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
sap.ui.table.Table.prototype.getVisible = function() { return false; };

/**
 * 
 * Getter for property <code>visibleRowCount</code>.
 * Count of visible rows (will overwrite the height property).
 * </p><p>
 * Default value is <code>10</code>
 * @return {int} the value of property <code>visibleRowCount</code>
 * @public
 * 
 */
sap.ui.table.Table.prototype.getVisibleRowCount = function() { return 0; };

/**
 * 
 * Getter for property <code>visibleRowCountMode</code>.
 * This defines how the table handles the visible rows in the table. The default behavior is, that a fixed row count is defined. If you change it to auto the visibleRowCount property is changed by the table automatically. It will then adjust its maximum row count to the space it is allowed to cover (limited by the surrounding container) and its minimum row count to the value of the property minAutoRowCount (default value : 5) In manual mode the user can change the visibleRowCount interactively.
 * </p><p>
 * Default value is <code>Fixed</code>
 * @return {sap.ui.table.VisibleRowCountMode} the value of property <code>visibleRowCountMode</code>
 * @public
 * @since 1.9.2
 * 
 */
sap.ui.table.Table.prototype.getVisibleRowCountMode = function() { return new sap.ui.table.VisibleRowCountMode(); };

/**
 * 
 * Getter for property <code>width</code>.
 * Width of the Table.
 * </p><p>
 * Default value is <code>auto</code>
 * @return {sap.ui.core.CSSSize} the value of property <code>width</code>
 * @public
 * 
 */
sap.ui.table.Table.prototype.getWidth = function() { return new sap.ui.core.CSSSize(); };

/**
 * 
 * Checks for the provided <code>sap.ui.table.Column</code> in the aggregation named <code>columns</code> 
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.table.Column}
 *            oColumn the column whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * 
 */
sap.ui.table.Table.prototype.indexOfColumn = function(oColumn) { return 0; };

/**
 * 
 * Checks for the provided <code>sap.ui.core.Control</code> in the aggregation named <code>extension</code> 
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.core.Control}
 *            oExtension the extension whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * 
 */
sap.ui.table.Table.prototype.indexOfExtension = function(oExtension) { return 0; };

/**
 * 
 * Checks for the provided <code>sap.ui.table.Row</code> in the aggregation named <code>rows</code> 
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.table.Row}
 *            oRow the row whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * 
 */
sap.ui.table.Table.prototype.indexOfRow = function(oRow) { return 0; };

/**
 * 
 * Inserts a column into the aggregation named <code>columns</code>.
 * @param {sap.ui.table.Column}
 *          oColumn the column to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the column should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the column is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the column is inserted at 
 *             the last position        
 * @return {sap.ui.table.Table} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.table.Table.prototype.insertColumn = function(oColumn,iIndex) { return new sap.ui.table.Table(); };

/**
 * 
 * Inserts a extension into the aggregation named <code>extension</code>.
 * @param {sap.ui.core.Control}
 *          oExtension the extension to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the extension should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the extension is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the extension is inserted at 
 *             the last position        
 * @return {sap.ui.table.Table} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.table.Table.prototype.insertExtension = function(oExtension,iIndex) { return new sap.ui.table.Table(); };

/**
 * 
 * Inserts a row into the aggregation named <code>rows</code>.
 * @param {sap.ui.table.Row}
 *          oRow the row to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the row should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the row is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the row is inserted at 
 *             the last position        
 * @return {sap.ui.table.Table} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.table.Table.prototype.insertRow = function(oRow,iIndex) { return new sap.ui.table.Table(); };

/**
 * 
 * Returns whether the given index is selected.
 * @param {int} 
 *         iIndex
 *         Index which is checked for selection state.
 * @type boolean
 * @public
 */
sap.ui.table.Table.prototype.isIndexSelected = function(iIndex) { return false; };

/**
 * 
 * Removes all the controls in the aggregation named <code>columns</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.table.Column[]} an array of the removed elements (might be empty)
 * @public
 * 
 */
sap.ui.table.Table.prototype.removeAllColumns = function() { return new Array(); };

/**
 * 
 * Removes all the controls in the aggregation named <code>extension</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.core.Control[]} an array of the removed elements (might be empty)
 * @public
 * 
 */
sap.ui.table.Table.prototype.removeAllExtension = function() { return new Array(); };

/**
 * 
 * Removes all the controls in the aggregation named <code>rows</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.table.Row[]} an array of the removed elements (might be empty)
 * @public
 * 
 */
sap.ui.table.Table.prototype.removeAllRows = function() { return new Array(); };

/**
 * 
 * Removes an column from the aggregation named <code>columns</code>.
 * @param {int | string | sap.ui.table.Column} vColumn the column to remove or its index or id
 * @return {sap.ui.table.Column} the removed column or null
 * @public
 * 
 */
sap.ui.table.Table.prototype.removeColumn = function(vColumn) { return new sap.ui.table.Column(); };

/**
 * 
 * Removes an extension from the aggregation named <code>extension</code>.
 * @param {int | string | sap.ui.core.Control} vExtension the extension to remove or its index or id
 * @return {sap.ui.core.Control} the removed extension or null
 * @public
 * 
 */
sap.ui.table.Table.prototype.removeExtension = function(vExtension) { return new sap.ui.core.Control(); };

/**
 * 
 * Removes an row from the aggregation named <code>rows</code>.
 * @param {int | string | sap.ui.table.Row} vRow the row to remove or its index or id
 * @return {sap.ui.table.Row} the removed row or null
 * @public
 * 
 */
sap.ui.table.Table.prototype.removeRow = function(vRow) { return new sap.ui.table.Row(); };

/**
 * 
 * Removes the given selection interval from the selection. In case of single selection this call removeSelectedIndex with the "indexTo" value.
 * @param {int} 
 *         iIndexFrom
 *         Index from which .
 * @param {int} 
 *         iIndexTo
 *         Indices of the items that shall additionally be selected.
 * @type sap.ui.table.Table
 * @public
 */
sap.ui.table.Table.prototype.removeSelectionInterval = function(iIndexFrom,iIndexTo) { return new sap.ui.table.Table(); };

/**
 * 
 * Add all rows to the selection.
 * @type sap.ui.table.Table
 * @public
 */
sap.ui.table.Table.prototype.selectAll = function() { return new sap.ui.table.Table(); };

/**
 * 
 * Setter for property <code>allowColumnReordering</code>.
 * </p><p>
 * Default value is <code>true</code> 
 * @param {boolean} bAllowColumnReordering  new value for property <code>allowColumnReordering</code>
 * @return {sap.ui.table.Table} <code>this</code> to allow method chaining
 * @public
 * @deprecated Since version 1.5.2. 
 * Use the property enableColumnReordering instead.
 * 
 */
sap.ui.table.Table.prototype.setAllowColumnReordering = function(bAllowColumnReordering) { return new sap.ui.table.Table(); };

/**
 * 
 * Setter for property <code>columnHeaderHeight</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {int} iColumnHeaderHeight  new value for property <code>columnHeaderHeight</code>
 * @return {sap.ui.table.Table} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.table.Table.prototype.setColumnHeaderHeight = function(iColumnHeaderHeight) { return new sap.ui.table.Table(); };

/**
 * 
 * Setter for property <code>columnHeaderVisible</code>.
 * </p><p>
 * Default value is <code>true</code> 
 * @param {boolean} bColumnHeaderVisible  new value for property <code>columnHeaderVisible</code>
 * @return {sap.ui.table.Table} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.table.Table.prototype.setColumnHeaderVisible = function(bColumnHeaderVisible) { return new sap.ui.table.Table(); };

/**
 * 
 * Setter for property <code>editable</code>.
 * </p><p>
 * Default value is <code>true</code> 
 * @param {boolean} bEditable  new value for property <code>editable</code>
 * @return {sap.ui.table.Table} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.table.Table.prototype.setEditable = function(bEditable) { return new sap.ui.table.Table(); };

/**
 * 
 * Setter for property <code>enableColumnReordering</code>.
 * </p><p>
 * Default value is <code>true</code> 
 * @param {boolean} bEnableColumnReordering  new value for property <code>enableColumnReordering</code>
 * @return {sap.ui.table.Table} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.table.Table.prototype.setEnableColumnReordering = function(bEnableColumnReordering) { return new sap.ui.table.Table(); };

/**
 * 
 * Setter for property <code>enableGrouping</code>.
 * </p><p>
 * Default value is <code>false</code> 
 * @param {boolean} bEnableGrouping  new value for property <code>enableGrouping</code>
 * @return {sap.ui.table.Table} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.table.Table.prototype.setEnableGrouping = function(bEnableGrouping) { return new sap.ui.table.Table(); };

/**
 * 
 * Setter for property <code>firstVisibleRow</code>.
 * </p><p>
 * Default value is <code>0</code> 
 * @param {int} iFirstVisibleRow  new value for property <code>firstVisibleRow</code>
 * @return {sap.ui.table.Table} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.table.Table.prototype.setFirstVisibleRow = function(iFirstVisibleRow) { return new sap.ui.table.Table(); };

/**
 * 
 * Setter for property <code>fixedColumnCount</code>.
 * </p><p>
 * Default value is <code>0</code> 
 * @param {int} iFixedColumnCount  new value for property <code>fixedColumnCount</code>
 * @return {sap.ui.table.Table} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.table.Table.prototype.setFixedColumnCount = function(iFixedColumnCount) { return new sap.ui.table.Table(); };

/**
 * 
 * Setter for property <code>fixedRowCount</code>.
 * </p><p>
 * Default value is <code>0</code> 
 * @param {int} iFixedRowCount  new value for property <code>fixedRowCount</code>
 * @return {sap.ui.table.Table} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.table.Table.prototype.setFixedRowCount = function(iFixedRowCount) { return new sap.ui.table.Table(); };

/**
 * 
 * Setter for the aggregated <code>footer</code>.
 * @param oFooter {sap.ui.core.Control|string}
 * @return {sap.ui.table.Table} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.table.Table.prototype.setFooter = function(oFooter) { return new sap.ui.table.Table(); };

/**
 * 
 * Group By Column (experimental)
 * @param {string | sap.ui.table.Column} vGroupBy 
 *    Id of an element which becomes the new target of this <code>groupBy</code> association.
 *    Alternatively, an element instance may be given.
 * @return {sap.ui.table.Table} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.table.Table.prototype.setGroupBy = function(vGroupBy) { return new sap.ui.table.Table(); };

/**
 * 
 * Setter for property <code>minAutoRowCount</code>.
 * </p><p>
 * Default value is <code>5</code> 
 * @param {int} iMinAutoRowCount  new value for property <code>minAutoRowCount</code>
 * @return {sap.ui.table.Table} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.table.Table.prototype.setMinAutoRowCount = function(iMinAutoRowCount) { return new sap.ui.table.Table(); };

/**
 * 
 * Setter for property <code>navigationMode</code>.
 * </p><p>
 * Default value is <code>Scrollbar</code> 
 * @param {sap.ui.table.NavigationMode} oNavigationMode  new value for property <code>navigationMode</code>
 * @return {sap.ui.table.Table} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.table.Table.prototype.setNavigationMode = function(oNavigationMode) { return new sap.ui.table.Table(); };

/**
 * 
 * Setter for the aggregated <code>noData</code>.
 * @param oNoData {sap.ui.core.Control}
 * @return {sap.ui.table.Table} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.table.Table.prototype.setNoData = function(oNoData) { return new sap.ui.table.Table(); };

/**
 * 
 * Setter for property <code>rowHeight</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {int} iRowHeight  new value for property <code>rowHeight</code>
 * @return {sap.ui.table.Table} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.table.Table.prototype.setRowHeight = function(iRowHeight) { return new sap.ui.table.Table(); };

/**
 * 
 * Setter for property <code>selectedIndex</code>.
 * </p><p>
 * Default value is <code>-1</code> 
 * @param {int} iSelectedIndex  new value for property <code>selectedIndex</code>
 * @return {sap.ui.table.Table} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.table.Table.prototype.setSelectedIndex = function(iSelectedIndex) { return new sap.ui.table.Table(); };

/**
 * 
 * Setter for property <code>selectionBehavior</code>.
 * </p><p>
 * Default value is <code>RowSelector</code> 
 * @param {sap.ui.table.SelectionBehavior} oSelectionBehavior  new value for property <code>selectionBehavior</code>
 * @return {sap.ui.table.Table} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.table.Table.prototype.setSelectionBehavior = function(oSelectionBehavior) { return new sap.ui.table.Table(); };

/**
 * 
 * Sets the given selection interval as selection. In case of single selection the "indexTo" value will be used for as selected index.
 * @param {int} 
 *         iIndexFrom
 *         Index from which .
 * @param {int} 
 *         iIndexTo
 *         Indices of the items that shall additionally be selected.
 * @type sap.ui.table.Table
 * @public
 */
sap.ui.table.Table.prototype.setSelectionInterval = function(iIndexFrom,iIndexTo) { return new sap.ui.table.Table(); };

/**
 * 
 * Setter for property <code>selectionMode</code>.
 * </p><p>
 * Default value is <code>Multi</code> 
 * @param {sap.ui.table.SelectionMode} oSelectionMode  new value for property <code>selectionMode</code>
 * @return {sap.ui.table.Table} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.table.Table.prototype.setSelectionMode = function(oSelectionMode) { return new sap.ui.table.Table(); };

/**
 * 
 * Setter for property <code>showColumnVisibilityMenu</code>.
 * </p><p>
 * Default value is <code>false</code> 
 * @param {boolean} bShowColumnVisibilityMenu  new value for property <code>showColumnVisibilityMenu</code>
 * @return {sap.ui.table.Table} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.table.Table.prototype.setShowColumnVisibilityMenu = function(bShowColumnVisibilityMenu) { return new sap.ui.table.Table(); };

/**
 * 
 * Setter for property <code>showNoData</code>.
 * </p><p>
 * Default value is <code>true</code> 
 * @param {boolean} bShowNoData  new value for property <code>showNoData</code>
 * @return {sap.ui.table.Table} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.table.Table.prototype.setShowNoData = function(bShowNoData) { return new sap.ui.table.Table(); };

/**
 * 
 * Setter for property <code>threshold</code>.
 * </p><p>
 * Default value is <code>100</code> 
 * @param {int} iThreshold  new value for property <code>threshold</code>
 * @return {sap.ui.table.Table} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.table.Table.prototype.setThreshold = function(iThreshold) { return new sap.ui.table.Table(); };

/**
 * 
 * Setter for the aggregated <code>title</code>.
 * @param oTitle {sap.ui.core.Control|string}
 * @return {sap.ui.table.Table} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.table.Table.prototype.setTitle = function(oTitle) { return new sap.ui.table.Table(); };

/**
 * 
 * Setter for the aggregated <code>toolbar</code>.
 * @param oToolbar {sap.ui.commons.Toolbar}
 * @return {sap.ui.table.Table} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.table.Table.prototype.setToolbar = function(oToolbar) { return new sap.ui.table.Table(); };

/**
 * 
 * Setter for property <code>visible</code>.
 * </p><p>
 * Default value is <code>true</code> 
 * @param {boolean} bVisible  new value for property <code>visible</code>
 * @return {sap.ui.table.Table} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.table.Table.prototype.setVisible = function(bVisible) { return new sap.ui.table.Table(); };

/**
 * 
 * Setter for property <code>visibleRowCount</code>.
 * </p><p>
 * Default value is <code>10</code> 
 * @param {int} iVisibleRowCount  new value for property <code>visibleRowCount</code>
 * @return {sap.ui.table.Table} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.table.Table.prototype.setVisibleRowCount = function(iVisibleRowCount) { return new sap.ui.table.Table(); };

/**
 * 
 * Setter for property <code>visibleRowCountMode</code>.
 * </p><p>
 * Default value is <code>Fixed</code> 
 * @param {sap.ui.table.VisibleRowCountMode} oVisibleRowCountMode  new value for property <code>visibleRowCountMode</code>
 * @return {sap.ui.table.Table} <code>this</code> to allow method chaining
 * @public
 * @since 1.9.2
 * 
 */
sap.ui.table.Table.prototype.setVisibleRowCountMode = function(oVisibleRowCountMode) { return new sap.ui.table.Table(); };

/**
 * 
 * Setter for property <code>width</code>.
 * </p><p>
 * Default value is <code>auto</code> 
 * @param {sap.ui.core.CSSSize} sWidth  new value for property <code>width</code>
 * @return {sap.ui.table.Table} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.table.Table.prototype.setWidth = function(sWidth) { return new sap.ui.table.Table(); };

/**
 * 
 * sorts the given column ascending or descending
 * @param {sap.ui.table.Column} 
 *         oColumn
 *         column to be sorted
 * @param {sap.ui.table.SortOrder} 
 *         oSortOrder
 *         sort order of the column (if undefined the default will be ascending)
 * @type sap.ui.table.Table
 * @public
 */
sap.ui.table.Table.prototype.sort = function(oColumn,oSortOrder) { return new sap.ui.table.Table(); };

/**
 * 
 * Unbinder for aggregation <code>columns</code>.
 * @return {sap.ui.table.Table} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.table.Table.prototype.unbindColumns = function() { return new sap.ui.table.Table(); };

/**
 * 
 * Unbinder for aggregation <code>rows</code>.
 * @return {sap.ui.table.Table} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.table.Table.prototype.unbindRows = function() { return new sap.ui.table.Table(); };


// ---- sap.ui.table.TreeTable --------------------------------------------------------------------------

/**
 * 
 * Constructor for a new TreeTable.
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
 * <li>{@link #getExpandFirstLevel expandFirstLevel} : boolean (default: false)</li></ul>
 * </li>
 * <li>Aggregations
 * <ul></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link sap.ui.table.TreeTable#event:toggleOpenState toggleOpenState} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
 * </li>
 * </ul> 
 * </p><p>
 * </p><p>
 * In addition, all settings applicable to the base type {@link sap.ui.table.Table#constructor sap.ui.table.Table}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * The TreeTable Control.
 * @extends sap.ui.table.Table
 * @version 1.15.1-SNAPSHOT
 * @constructor   
 * @public
 * 
 */
sap.ui.table.TreeTable = function(sId,mSettings) {};
/**
 * 
 * fired when a node has been expanded or collapsed (only available in hierachical mode) 
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {int} oControlEvent.getParameters.rowIndex index of the expanded/collapsed row
 * @param {object} oControlEvent.getParameters.rowContext binding context of the selected row
 * @param {boolean} oControlEvent.getParameters.expanded flag whether the node has been expanded or collapsed
 * @public
 */
sap.ui.table.TreeTable.prototype.toggleOpenState = function(oControlEvent) { return null; };

/**
 * 
 * Attach event handler <code>fnFunction</code> to the 'toggleOpenState' event of this <code>sap.ui.table.TreeTable</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ui.table.TreeTable</code>.<br/> itself. 
 * </p><p>
 * fired when a node has been expanded or collapsed (only available in hierachical mode) 
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener=this] Context object to call the event handler with. Defaults to this <code>sap.ui.table.TreeTable</code>.<br/> itself.
 * @return {sap.ui.table.TreeTable} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.table.TreeTable.prototype.attachToggleOpenState = function(oData,fnFunction,oListener) { return new sap.ui.table.TreeTable(); };

/**
 * 
 * collapses the row for the given row index
 * @param {int} 
 *         iRowIndex
 *         index of the row to collapse
 * @type sap.ui.table.TreeTable
 * @public
 */
sap.ui.table.TreeTable.prototype.collapse = function(iRowIndex) { return new sap.ui.table.TreeTable(); };

/**
 * 
 * Detach event handler <code>fnFunction</code> from the 'toggleOpenState' event of this <code>sap.ui.table.TreeTable</code>.<br/>
 * </p><p>
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.table.TreeTable} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.table.TreeTable.prototype.detachToggleOpenState = function(fnFunction,oListener) { return new sap.ui.table.TreeTable(); };

/**
 * 
 * expands the row for the given row index
 * @param {int} 
 *         iRowIndex
 *         index of the row to expand
 * @type sap.ui.table.TreeTable
 * @public
 */
sap.ui.table.TreeTable.prototype.expand = function(iRowIndex) { return new sap.ui.table.TreeTable(); };

/**
 * 
 * Creates a new subclass of class sap.ui.table.TreeTable with name <code>sClassName</code> 
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
sap.ui.table.TreeTable.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * 
 * Fire event toggleOpenState to attached listeners.
 * </p><p>
 * Expects following event parameters:
 * <ul>
 * <li>'rowIndex' of type <code>int</code> index of the expanded/collapsed row</li>
 * <li>'rowContext' of type <code>object</code> binding context of the selected row</li>
 * <li>'expanded' of type <code>boolean</code> flag whether the node has been expanded or collapsed</li>
 * </ul>
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.table.TreeTable} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.ui.table.TreeTable.prototype.fireToggleOpenState = function(mArguments) { return new sap.ui.table.TreeTable(); };

/**
 * 
 * Getter for property <code>expandFirstLevel</code>.
 * Flag to enable or disable expanding of first level.
 * </p><p>
 * Default value is <code>false</code>
 * @return {boolean} the value of property <code>expandFirstLevel</code>
 * @public
 * 
 */
sap.ui.table.TreeTable.prototype.getExpandFirstLevel = function() { return false; };

/**
 * 
 * returns whether the row is expanded or collapsed
 * @param {int} 
 *         iRowIndex
 *         index of the row to check
 * @type boolean
 * @public
 */
sap.ui.table.TreeTable.prototype.isExpanded = function(iRowIndex) { return false; };

/**
 * 
 * Setter for property <code>expandFirstLevel</code>.
 * </p><p>
 * Default value is <code>false</code> 
 * @param {boolean} bExpandFirstLevel  new value for property <code>expandFirstLevel</code>
 * @return {sap.ui.table.TreeTable} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.table.TreeTable.prototype.setExpandFirstLevel = function(bExpandFirstLevel) { return new sap.ui.table.TreeTable(); };


// ---- sap.ui.table.VisibleRowCountMode --------------------------------------------------------------------------

// dummy function to make Eclipse aware of namespace
sap.ui.table.VisibleRowCountMode.toString = function() { return ""; };
// ---- static fields of namespaces ---------------------------------------------------------------------

// ---- sap.ui.table.NavigationMode --------------------------------------------------------------------------

/**
 * 
 * Uses the paginator control. 
 * @public
 * @memberOf sap.ui.table.NavigationMode
 */
sap.ui.table.NavigationMode.Paginator = null;

/**
 * 
 * Uses the scrollbar control. 
 * @public
 * @memberOf sap.ui.table.NavigationMode
 */
sap.ui.table.NavigationMode.Scrollbar = null;


// ---- sap.ui.table.SelectionBehavior --------------------------------------------------------------------------

/**
 * 
 * Rows can be selected on the complete row. 
 * @public
 * @memberOf sap.ui.table.SelectionBehavior
 */
sap.ui.table.SelectionBehavior.Row = null;

/**
 * 
 * Rows can only be selected on the row (and the selector is hidden). 
 * @public
 * @memberOf sap.ui.table.SelectionBehavior
 */
sap.ui.table.SelectionBehavior.RowOnly = null;

/**
 * 
 * Rows can only be selected on the row selector. 
 * @public
 * @memberOf sap.ui.table.SelectionBehavior
 */
sap.ui.table.SelectionBehavior.RowSelector = null;


// ---- sap.ui.table.SelectionMode --------------------------------------------------------------------------

/**
 * 
 * Select multiple rows at a time. 
 * @public
 * @memberOf sap.ui.table.SelectionMode
 */
sap.ui.table.SelectionMode.Multi = null;

/**
 * 
 * No rows can be selected. 
 * @public
 * @memberOf sap.ui.table.SelectionMode
 */
sap.ui.table.SelectionMode.None = null;

/**
 * 
 * Select one row at a time. 
 * @public
 * @memberOf sap.ui.table.SelectionMode
 */
sap.ui.table.SelectionMode.Single = null;


// ---- sap.ui.table.SortOrder --------------------------------------------------------------------------

/**
 * 
 * Sort Order: ascending. 
 * @public
 * @memberOf sap.ui.table.SortOrder
 */
sap.ui.table.SortOrder.Ascending = null;

/**
 * 
 * Sort Order: descending. 
 * @public
 * @memberOf sap.ui.table.SortOrder
 */
sap.ui.table.SortOrder.Descending = null;


// ---- sap.ui.table.VisibleRowCountMode --------------------------------------------------------------------------

/**
 * 
 * The table automatically fills the height of the surrounding container. The visibleRowCount property is automatically changed accordingly. All rows need the same height, otherwise the auto mode doesn't always work as expected. 
 * @public
 * @memberOf sap.ui.table.VisibleRowCountMode
 */
sap.ui.table.VisibleRowCountMode.Auto = null;

/**
 * 
 * The table always has as many rows as defined in the visibleRowCount property. 
 * @public
 * @memberOf sap.ui.table.VisibleRowCountMode
 */
sap.ui.table.VisibleRowCountMode.Fixed = null;

/**
 * 
 * After rendering the table has as many rows as defined in visibleRowCount property. The user is able to change the visible rows by moving a grip with the mouse. The visibleRowCount property is changed accordingly. 
 * @public
 * @memberOf sap.ui.table.VisibleRowCountMode
 */
sap.ui.table.VisibleRowCountMode.Interactive = null;

