sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
], function (Controller, JSONModel) {
        "use strict";
        
        
        return Controller.extend("fiori_projesi.controller.View1", {
            onInit: function () {
                var that = this;
                var newModel = new JSONModel();
                newModel.loadData("model/personel.json");
                newModel.attachRequestCompleted(function(oEvent){
                    if (oEvent.getParameter("success")) {
                        var data = oEvent.getSource().getData().personel;
                        var newModel1 = new JSONModel(data);
                        that.getView().setModel(newModel1, "personel");
                    }
                });
            }

        });
    });