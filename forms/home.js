/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"9CBE5CC6-643B-4299-928A-916EEB1DCD1D"}
 */
function onShow(firstShow, event)
{
//	var win = application.createWindow("registeration_popup",JSWindow.MODAL_DIALOG, application.getWindow('home'));
//	win.setInitialBounds(-1, -1, 375, 220);
//	win.title = "Welcome";
//	win.show(forms.registeration_popup);
//	win.getTransparent();
//	application.sleep(5000);
//	win.controller.getWindow().hide();
//	

}

/**
 * Click event. dataTarget parameter is used to identify inner html elements (by their data-target attribute).
 *
 * @param {JSEvent} event
 * @param {String} dataTarget
 *
 * @properties={typeid:24,uuid:"8F461FD0-FED8-4618-97AF-27942D2DD088"}
 */
function onWelcomeClose(event, dataTarget)
{	
	elements.lbl_welcome.visible = false;
}

/**
 * Click event. dataTarget parameter is used to identify inner html elements (by their data-target attribute).
 *
 * @param {JSEvent} event
 * @param {String} dataTarget
 *
 * @properties={typeid:24,uuid:"71E64D5F-F9FB-4313-A5FA-00F082032F8C"}
 */
function onAction1(event, dataTarget)
{
	elements.lbl_1.visible = false;
}

/**
 * Click event. dataTarget parameter is used to identify inner html elements (by their data-target attribute).
 *
 * @param {JSEvent} event
 * @param {String} dataTarget
 *
 * @properties={typeid:24,uuid:"6B2A6033-40BD-4E1B-84CC-E326B7B0C8D1"}
 */
function onAction2(event, dataTarget)
{
	elements.lbl_2.visible = false;
}

/**
 * Click event. dataTarget parameter is used to identify inner html elements (by their data-target attribute).
 *
 * @param {JSEvent} event
 * @param {String} dataTarget
 *
 * @properties={typeid:24,uuid:"61A53D47-4C31-4A87-BBA5-9E2C3313C4DC"}
 */
function onAction3(event, dataTarget)
{
	elements.lbl_3.visible = false;
}
