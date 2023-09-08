
/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"4585D0F2-C9C6-4BDE-A4C5-DDBBB3ADC9A8"}
 */
function onShow(firstShow, event)
{
	//elements.lbl_loading.addStyleClass('fa-spin');
	application.sleep(300);
	forms.home.controller.show();
}
