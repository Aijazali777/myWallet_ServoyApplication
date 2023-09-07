// An Array of Objects
/**
 * @properties={typeid:35,uuid:"18B34C60-A185-4A2E-80D7-DF58BFC3D106",variableType:-4}
 */
var menu = 
[
	{
		text:'Home',
		formName:'dashboard',
		iconName:'fa fa-home'
	},
	{
		text:'My Account',
		formName:'my_account',
		iconName:'fa fa-user'
	},
	{
		text:'Credit Card',
		formName:'credit_card',
		iconName:'fa-solid fa-credit-card'
	},
	{
		text:'Payment Transfer',
		formName:'payment_transfer',
		iconName:'fa-solid fa-money-bill-trend-up'
	},
	{
		text:'My Payees',
		formName:'my_payees',
		iconName:'fa-solid fa-users'
	},
	{
		text:'View Transcations',
		formName:'view_transcations',
		iconName:'fa-solid fa-money-bill-transfer'
	},
	{
		id:7,
		text:'Settings',
		formName:'settings',
		iconName:'fa-solid fa-gear'
	},
	{
		text:'Admin',
		formName:'admin',
		iconName:'fa-solid fa-user-gear'
	},
	{
		id:9,
		text:'Complaint',
		formName:'complaint',
		iconName:'fa-solid fa-pen-to-square'
	},
	{
		text:'Feedback',
		formName:'feedback',
		iconName:'fa-solid fa-comment'
	},
	{
		text:'Logout',
		formName:'logout',
		iconName:'fa-solid fa-lock'
	}
];

/**
* @private
* @properties={typeid:24,uuid:"6B677F25-2280-431B-83FF-B81279B3B56F"}
*/
function initMenu()
{
	for(var i in menu)
	{
		var item = menu[i];
		var menuItem = 
		{
			id: application.getUUID().toString(),
			text: item.text,
			data: { text: item.text, formName: item.formName},
			styleClass: '',
			iconStyleClass: item.iconName
		};
		elements.sidenav.addMenuItem(menuItem);
	}
}
/**
 * @param {scopes.svyNavigation.NavigationEvent} event
 * @properties={typeid:24,uuid:"5DF9DD61-0C45-4EAA-A741-F723AA4D8B59"}
 */
function onNavigation(event) 
{
	var type = event.getEventType();
	var item = event.getNavigationItem();
	if(type == scopes.svyNavigation.NAVIGATION_EVENT.AFTER_OPEN)
	{
		var form = forms[item.getFormName()];
		var data = item.getCustomData();
		
		if(data && data.pk)
		{
			form.foundset.loadRecords(data.pk);
		}
	
		elements.sidenav.containedForm = form;
	}
}

/**
 * TODO generated, please specify type and doc for the params
 * @param menuItemID
 *
 * @properties={typeid:24,uuid:"91C86B5E-858F-4278-8BB5-19B1017D39BD"}
 */
function getMenuItemFormName(menuItemID) {
	
	/** @type {String} */
	var formName = menuItemID;
	return formName;
}

/**
 * Called whenever a menu item from the sidenav is selected with the JSEvent and the menuItemId clicked on.
 * 
 * @param {String} menuItemId
 * @param {JSEvent} event
 *
 * @return {boolean}
 *
 * @private
 *
 * @properties={typeid:24,uuid:"96C3952F-F375-4D50-983F-123014818DF8"}
 */
function onMenuItemSelectedHandler(menuItemId, event) {

	if (onMenuItemSelected(menuItemId, event) === false) {
		return false;
	}

	// form to navigate too
	var formName = getMenuItemFormName(menuItemId)
	var form = forms[formName];

	// open the selected navigation item
	if (menuItemId && formName && form) {
		var menuItem = elements.sidenav.getMenuItem(menuItemId);

		// TODO will always be a new navigation item !?!?
		var item = new scopes.svyNavigation.NavigationItem(formName, menuItem.text);
		return scopes.svyNavigation.open(item);
	}

	return true;
}

/**
* @param {object} menuItemId
* @param {JSEvent} event
*
* @return {boolean}
*
* @properties={typeid:24,uuid:"0BE05E5C-809D-4F5E-9344-F4067F692D36"}
*/
function onMenuItemSelected(menuItemId, event) 
{
	
	var item = elements.sidenav.getMenuItem(menuItemId);
	var form = forms[item.data.formName];
	if(item.data.formName == 'logout')
	{
		var succuss = plugins.dialogs.showQuestionDialog("Logout","Are you sure, you want to Logout?",'Yes','No');
		if(succuss == 'Yes')
			forms.login.controller.show();
	}
	else
	{
		scopes.svyNavigation.open(new scopes.svyNavigation.NavigationItem(item.data.formName,item.text,item.text));
	}
	return true;
}

/**
 * Callback method when form is (re)loaded.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"DC45AF69-5DAF-4C4C-8A7B-71B9C2D376E8"}
 */
function onLoad(event)
{
	initMenu();
	scopes.svyNavigation.addNavigationListener(onNavigation);
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 * @override
 *
 * @properties={typeid:24,uuid:"D767339F-5988-4973-AB3B-F63A22A8B70A"}
 */
function onShow(firstShow, event)
{
	foundset.loadRecords(globals.id);
}
