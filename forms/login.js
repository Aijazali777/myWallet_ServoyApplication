
/**
 * Fired when the button is clicked.
 * @public
 * @param {JSEvent} event
 * @properties={typeid:24,uuid:"2334887B-F64C-4FB2-AC6B-532635338911"}
 * @AllowToRunInFind
 */
function onLogin(event)
{
	if(globals.username == null || globals.password == null)
	{
		plugins.dialogs.showErrorDialog("Login Failed","Please enter a username and password to login","OK");
		return;
	}
	
	if(globals.username != null)
	{
		if(globals.password != null)
		{
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
					//forms.main_form.foundset.loadRecords(record_id);
					//forms.dashboard.foundset.loadRecords(record_id);
					//forms.my_account.foundset.loadRecords(record_id);
					forms.main_form.controller.show();
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
