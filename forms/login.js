
/**
 * Fired when the button is clicked.
 * @public
 * @param {JSEvent} event
 * @properties={typeid:24,uuid:"2334887B-F64C-4FB2-AC6B-532635338911"}
 * @AllowToRunInFind
 */
function onLogin(event)
{
	if(globals.username == null)
	{
		elements.fld_username.addStyleClass('invalid_alert');
		elements.fld_username.requestFocus();
		plugins.dialogs.showErrorDialog("Login Failed","Please enter a username and password to login","OK");
		return;
	}
	else if(globals.password == null)
	{
		elements.fld_password.addStyleClass('invalid_alert');
		elements.fld_password.requestFocus();
		plugins.dialogs.showErrorDialog("Login Failed","Please enter a username and password to login","OK");
		return;	
	}
	
	if(globals.username != null)
	{
		elements.fld_username.removeStyleClass('invalid_alert');
		if(globals.password != null)
		{
			elements.fld_password.removeStyleClass('invalid_alert');
			var fs = datasources.db.example_data.mywallet.getFoundSet();
			fs.loadAllRecords();
			var fsCount = fs.getSize();
			for(var i = 1; i <= fsCount; i++)
			{
				fs.setSelectedIndex(i);
				if(globals.username == fs.name && globals.password == fs.password)
				{
					application.sleep(2000);
					globals.id = fs.record_id;
					forms.main_form.controller.show();
					//forms.mywallet_navbar.controller.show();
					return;
				}
			}
			plugins.dialogs.showErrorDialog("Login Failed","Please enter a correct username and password to login","OK");
//			if(fs.find())
//			{     
//			    fs.name = globals.username;
//			    //var count = fs.search();	
//			    if (fs.search())
//			    {
//			    	if(globals.password == password)
//					{
//						application.sleep(2000);
//						forms.main_form.foundset.loadRecords();
//						forms.main_form.controller.show();
//					}
//					else
//					{
//						plugins.dialogs.showErrorDialog("Login Failed","Please enter a correct username and password to login","OK");
//					}
//			    }
//			    else
//				{
//					plugins.dialogs.showErrorDialog("Login Failed","This user does not exist, please enter correct username to login","OK");
//				}
			
		}
		else
		{
			plugins.dialogs.showErrorDialog("Login Failed","Please enter a password to login","OK");
		}
	}
	else
	{
		plugins.dialogs.showErrorDialog("Login Failed","Please enter a username to login","OK");
	}
}

/**
 * Click event. dataTarget parameter is used to identify inner html elements (by their data-target attribute).
 *
 * @param {JSEvent} event
 * @param {String} dataTarget
 *
 * @properties={typeid:24,uuid:"AC4EEC0E-25D6-4105-813E-06DB2A6A40CC"}
 */
function onRegister(event, dataTarget)
{
	forms.sign_up.controller.show();
}

/**
 * Click event. dataTarget parameter is used to identify inner html elements (by their data-target attribute).
 *
 * @param {JSEvent} event
 * @param {String} param
 *
 * @properties={typeid:24,uuid:"7C6CB58D-942C-4400-B203-EFE7B8ECA7AC"}
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
