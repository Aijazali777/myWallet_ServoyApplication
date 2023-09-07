
/**
 * Fired when the button is clicked.
 * @public
 * @param {JSEvent} event
 * @properties={typeid:24,uuid:"EF41855C-BF26-4FD8-8182-39061ABF3342"}
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
 * @properties={typeid:24,uuid:"564C59AD-A64D-40A0-A011-F2F4B9660718"}
 */
function onRegister(event, dataTarget)
{
	forms.sign_up.controller.show();
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"3E8FC613-C7CC-4C36-B1C7-9B6CC40A8A43"}
 */
function onShow(firstShow, event)
{
	//EXAMPLE: slide an object to the right 200px
	elements.lbl_login.cssPosition = 100,-1,-1,500;
//	var count = 20
//	var multiplier = 10
//	var sleepTime = 20
//
//	var i = 1;
//	while ( i < count )
//	{
//	   
//	   elements.lbl_login.getClientProperty('cssPosition');
//	   application.sleep(sleepTime)
//	   application.updateUI()
//	   i++
//	}
}
