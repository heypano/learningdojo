/**
 * Created by pano on 2/9/16.
 */
// Single root element for templates
// cannot have data-dojo-type

define([
    "dojo/_base/declare",
    "dijit/_WidgetBase",
    "dijit/_TemplatedMixin",
    "dijit/_WidgetsInTemplateMixin",
    "dojo/text!./templates/ExpenseReport.html",
],function(declare, _WidgetBase, TemplatedMixin, WidgetsInTemplateMixin){
    var ExpenseReport = declare([_WidgetBase, TemplatedMixin, WidgetsInTemplateMixin],{

    });
    return ExpenseReport;
})