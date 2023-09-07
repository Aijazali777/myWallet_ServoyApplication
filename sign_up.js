/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"5E154466-92EF-4FC7-8F31-E5F5D0FFA94A"}
 */
var uName = '';
/**
 * @properties={typeid:35,uuid:"891A4242-1715-4AB4-92BB-3BC28FE3EE9C",variableType:-4}
 */
var uAge = null;
/**
 * @properties={typeid:35,uuid:"1FD4C660-4BD1-46B3-B0DD-E9808550C17B",variableType:-4}
 */
var uCnic = null;
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"8C8882A6-895F-46A0-A051-004B43435B0E"}
 */
var uCity = '';
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"44852512-56C2-4323-A578-50B1BA7CE54E"}
 */
var uCountry = '';
/**
 * @properties={typeid:35,uuid:"8660C5AC-C77A-4471-A04E-270111B4CE84",variableType:-4}
 */
var uContact = null;
/**
 * @properties={typeid:35,uuid:"C83FD607-927F-4C10-BA73-CCE8DE2F20ED",variableType:-4}
 */
var uOpeningDate = null;
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"1BF7A2B3-2705-4EB6-A730-3A0A219D770E"}
 */
var uProductName = '';
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"A22BBB1A-0427-40C7-9FEF-48C58580041E"}
 */
var uAddress = '';

/**
 * Fired when the button is clicked.
 *
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"7D0A0DB3-2B88-402A-8561-729CB88BCEFE"}
 */
function onRegister(event)
{
	application.sleep(2000);
	
	foundset.newRecord();
	name = uName;
	age = uAge;
	cnic = uCnic;
	city = uCity;
	country = uCountry
	contact = uContact;
	productname = uProductName;
	address = uAddress;
	status = 'new';
	opening_date = application.getTimeStamp();
	balance = 0;
	sent = 0;
	received = 0;
	reward = 0;
	rating = 0;
	complain = '';
	transcation_text = '';
	
	var win = application.createWindow("registeration_popup",JSWindow.MODAL_DIALOG, application.getWindow('registeration'));
	win.setInitialBounds(-1, -1, 375, 220);
	win.title = "";
	win.show(forms.registeration_popup);
}

/**
 * Fired when the button is clicked.
 *
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"1C8D9914-B04B-4577-8721-A0B75D8FE5A0"}
 */
function onCancel(event)
{
	var succuss = plugins.dialogs.showQuestionDialog("Cancel","Are you sure, you want to Cancel?",'Yes','No');
	if(succuss == 'Yes')
		forms.login.controller.show();
}

/**
 * Click event. dataTarget parameter is used to identify inner html elements (by their data-target attribute).
 *
 * @param {JSEvent} event
 * @param {String} param
 *
 * @properties={typeid:24,uuid:"E621659D-557E-4D35-97FD-0BCEDB235EE7"}
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
