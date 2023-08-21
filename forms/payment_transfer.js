/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"4C109631-36F7-4DC7-A116-8FC31D44213D"}
 */
var accountName = '';
/**
 * @properties={typeid:35,uuid:"4DDEA6CF-621B-46B6-B86E-BC6E91C8D48A",variableType:-4}
 */
var accountNumber = null;
/**
 * @properties={typeid:35,uuid:"0E023D77-9D45-456F-BCFD-A114E208FD33",variableType:-4}
 */
var amount = null;

/**
 * Fired when the button is clicked.
 *
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"5D1B7603-16D9-4718-93BD-B9065DAF7271"}
 */
function done(event)
{
	transfer()
}

/**
 * @properties={typeid:24,uuid:"7F45BC2C-9F14-41F9-A8D8-B64EF07C9DC3"}
 */
function transfer()
{
	if(accountName == '')
	{
		plugins.dialogs.showErrorDialog('','Please enter Account name','OK');
	}
	else if(accountNumber == null )
	{
		plugins.dialogs.showErrorDialog('','Please enter Account number','OK');
	}
	else if(amount == null)
	{
		plugins.dialogs.showErrorDialog('','Please enter an Amount','OK');
	}
	
	if(accountName != '')
	{
		if(accountNumber != null)
		{
			var fsReceiver = datasources.db.example_data.mywallet.getFoundSet();
			fsReceiver.loadAllRecords();
			var fsReceiverCount = fsReceiver.getSize();
			for(var i=1; i<=fsReceiverCount; i++)
			{
				if(accountName == fsReceiver.name && accountNumber == fsReceiver.cnic)
				{
					if(amount <= balance)
					{	
						fsReceiver.balance = fsReceiver.balance+amount;
						fsReceiver.received = fsReceiver.received+amount;
						fsReceiver.transcation_text = "you have received "+amount+"PKR from "+name+"'s account "+cnic+" at "+application.getTimeStamp();
						balance = balance-amount;
						sent = balance-amount;
						transcation_text = "you have transfered "+amount+"PKR to "+fsReceiver.name+"'s account "+fsReceiver.cnic+" successfully at "+application.getTimeStamp();
						payees = "Account Name: "+fsReceiver.name+"\
						Account Number: "+fsReceiver.cnic;
						return;						
					}
					else
					{
						plugins.dialogs.showErrorDialog('Failed','You have insuffient balance in your account','OK');
					}
				}
			}
			plugins.dialogs.showErrorDialog('Failed','Please enter a correct Account name and Account number','OK');
		}
	}
	return
}

/**
 * Callback method when form is (re)loaded.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"FECE2FF3-BE55-4B31-9DD0-B5895053057C"}
 */
function onLoad(event)
{
	foundset.loadRecords(globals.id);
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"48DC7C88-5421-4142-9838-77A5A56D78CF"}
 */
function onShow(firstShow, event)
{
	foundset.loadRecords(globals.id);
	if(status != 'Active')
	{
		elements.fld_accountName.enabled = false;
		elements.fld_accountNumber.enabled = false;
		elements.fld_amount.enabled = false;
		elements.btn_done.enabled = false;
		elements.lbl_accountActiveNote.visible = true;
	}
	else
	{
		elements.fld_accountName.enabled = true;
		elements.fld_accountNumber.enabled = true;
		elements.fld_amount.enabled = true;
		elements.btn_done.enabled = true;
		elements.lbl_accountActiveNote.visible = false;
	}
}
