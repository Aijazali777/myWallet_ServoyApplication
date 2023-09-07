/**
 * Click event. dataTarget parameter is used to identify inner html elements (by their data-target attribute).
 *
 * @param {JSEvent} event
 * @param {String} param
 *
 * @properties={typeid:24,uuid:"2140DF7C-9045-4A38-AF4A-2E5E096CFD14"}
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
