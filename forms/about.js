/**
 * Click event. dataTarget parameter is used to identify inner html elements (by their data-target attribute).
 *
 * @param {JSEvent} event
 * @param {String} param
 *
 * @properties={typeid:24,uuid:"7F95B784-82D6-48E7-9C75-168CDC662F75"}
 */
function onClickMenu(event, param)
{
	if(param == 'h_lbl_home')
	{
		forms.home.controller.show();
	}
	else if(param == 'h_lbl_about')
	{
		forms.about.controller.show();
	}
	else if(param == 'h_lbl_contact')
	{
		forms.contact.controller.show();
	}
	else if(param == 'h_lbl_login')
	{
		forms.login.controller.show();
	}
}
