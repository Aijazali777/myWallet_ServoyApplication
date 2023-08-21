
/**
 * Fired when the button is clicked.
 *
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"F49C99C4-2B06-4194-8103-3B1655126A3E"}
 */
function setPassword(event)
{
	password = globals.password;
	application.sleep(1000);
	application.getActiveWindow().hide();
	plugins.dialogs.showInfoDialog("Info","Password has been set successfully!",'OK');
	forms.login.controller.show();
	globals.password = '';
}
