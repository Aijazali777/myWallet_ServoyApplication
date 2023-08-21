
/**
* @properties={typeid:35,uuid:"3DA75641-9394-413E-9515-B4787BA2841A",variableType:-4}
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
* @properties={typeid:24,uuid:"78F023E5-4B0E-4CF5-BCDD-5227AE0941DB"}
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
* @param {object} menuItemId
* @param {JSEvent} event
*
* @return {boolean}
*
* @private
*
* @properties={typeid:24,uuid:"FD261CFF-361F-423D-AF1E-D67FE6892CBE"}
*/
function onMenuItemSelected(menuItemId, event) 
{
	
	var item = elements.sidenav.getMenuItem(menuItemId);
	var form = forms[item.data.formName];
	if(item.data.formName == 'logout')
	{
		forms.login.controller.show();
	}
	else
	{
		scopes.svyNavigation.open(new scopes.svyNavigation.NavigationItem(item.data.formName,item.text,item.text));
	}
	return true;
}

/**
* @private
* @param {scopes.svyNavigation.NavigationEvent} event
* @properties={typeid:24,uuid:"9ACC8EAB-89FD-4F25-B312-F4D97A09B833"}
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
* Callback method when form is (re)loaded.
*
* @param {JSEvent} event the event that triggered the action
*
* @properties={typeid:24,uuid:"05439FCE-5BDF-46B3-8BEE-F2177B29E0EC"}
*/
function onLoad(event) 
{
	initMenu();
	scopes.svyNavigation.addNavigationListener(onNavigation);
	var menuItems = [],
	menuItem,
	/** @type {CustomType<bootstrapextracomponents-navbar.subMenuItem>} */ 
	subMenuItem;
	menuItem = elements.navbar.createMenuItem('Aijaz.Ali', globals.username, 'RIGHT');
	menuItem.iconName = 'fas fa-user';
	menuItem.subMenuItems = [];
	menuItems.push(menuItem);
	
	//Change password submenu
	subMenuItem = {};
	subMenuItem.text = 'Change password';
	subMenuItem.itemId = 'Change Password';
	menuItem.subMenuItems.push(subMenuItem);
	
	//Divider
	subMenuItem = {};
	subMenuItem.isDivider = true;
	menuItem.subMenuItems.push(subMenuItem);
	
	//Logout
	subMenuItem = {};
	subMenuItem.text = 'Logout';
	subMenuItem.itemId = 'Logout';
	menuItem.subMenuItems.push(subMenuItem);
	elements.navbar.menuItems = menuItems;
	//scopes.svyNavigation.reset(new scopes.svyNavigation.NavigationItem('main_form','main_form'))
}


/**
 * @properties={typeid:24,uuid:"25D6CF85-0C4A-4D3E-82E7-97C0B47D0887"}
 * @override
 */
function initNavigationForm() {

// init the sidenav menu
	var menuItems = loadMenuItems();
	elements.sidenav.setRootMenuItems(menuItems);

	// init the navbar menu
	var navbarItems = loadNavbarItems();
	elements.navbar.setMenuItems(navbarItems);
}
/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 * @override
 *
 * @properties={typeid:24,uuid:"E8D63711-74ED-4E0A-983B-E1F554275715"}
 */
function onShow(firstShow, event)
{
	foundset.loadRecords(globals.id);
}
