/*!
 * ${copyright}
 */

// Provides the Design Time Metadata for the sap.m.Page control
sap.ui.define([],
	function () {
		"use strict";

		return {
			actions: {
				rename: function (oPage) {
					// When a custom header is added the title is not visualized and we do not need a rename action.
					if (oPage.getCustomHeader()) {
						return;
					}

					return {
						changeType: "rename",
						domRef: function (oControl) {
							return oControl.$("title-inner")[0];
						}
					};
				}
			},
			aggregations: {
				headerContent: {
					domRef: ":sap-domref > .sapMPageHeader > .sapMBarRight"
				},
				subHeader: {
					domRef: ":sap-domref > .sapMPageSubHeader"
				},
				customHeader: {
					domRef: ":sap-domref > .sapMPageHeader"
				},
				content: {
					domRef: ":sap-domref > section",
					actions: {
						move: "moveControls"
					}
				},
				footer: {
					domRef: ":sap-domref > .sapMPageFooter"
				},
				landmarkInfo: {
					ignore: true
				}
			},
			name: {
				singular: "PAGE_NAME",
				plural: "PAGE_NAME_PLURAL"
			}
		};

	}, /* bExport= */ false);
