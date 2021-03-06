sap.ui.define([
	"sap/suite/statusindicator/SimpleShape",
	"sap/suite/statusindicator/SimpleShapeRenderer"
], function (SimpleShape, SimpleShapeRenderer) {
	"use strict";

	/**
	 * Constructor for a new Rectangle.
	 *
	 * @param {string} [sId] id for the new control, generated automatically if no id is given
	 * @param {object} [mSettings] initial settings for the new control
	 *
	 * @class
	 * Status indicator shape in the form of a rectangle.
	 * @extends sap.suite.statusindicator.SimpleShape
	 *
	 * @author SAP SE
	 * @version ${version}
	 * @since 1.67
	 *
	 * @public
	 * @alias sap.suite.statusindicator.Rectangle
	 * @ui5-metamodel This control/element will also be described in the UI5 (legacy) design time metamodel.
	 */
	var Rectangle = SimpleShape.extend("sap.suite.statusindicator.Rectangle",
		/** @lends sap.suite.statusindicator.Rectangle.prototype */ {
			metadata: {
				library: "sap.suite.statusindicator",
				properties: {

					/**
					 * Defines the x coordinate of the upper-left corner of the rectangle.
					 */
					x: {type: "int", defaultValue: 0},

					/**
					 * Defines the y coordinate of the upper-left corner of the rectangle.
					 */
					y: {type: "int", defaultValue: 0},

					/**
					 * Defines the horizontal corner radius of the rectangle. If set to 0, the corners
					 * are not rounded.
					 */
					rx: {type: "int", defaultValue: 0},

					/**
					 * Defines the vertical corner radius of the rectangle. If set to 0, the corners
					 * are not rounded.
					 */
					ry: {type: "int", defaultValue: 0},

					/**
					 * Defines the width of the rectangle.
					 */
					width: {type: "int", defaultValue: 0},

					/**
					 * Defines the height of the rectangle.
					 */
					height: {type: "int", defaultValue: 0}
				}
			},
			renderer: SimpleShapeRenderer
		});

	Rectangle.prototype._renderSimpleShapeElement = function (oRm, mAttributes) {
		oRm.openStart("rect");
		this._renderElementAttributes(oRm, mAttributes);
		oRm.attr("x", this.getX());
		oRm.attr("y", this.getY());
		oRm.attr("width", this.getWidth());
		oRm.attr("height", this.getHeight());
		oRm.attr("rx", this.getRx());
		oRm.attr("ry", this.getRy());
		oRm.attr("stroke-width", this.getStrokeWidth());
		oRm.attr("stroke", this._getCssStrokeColor());
		oRm.openEnd();
		oRm.close("rect");
	};

	return Rectangle;
});
