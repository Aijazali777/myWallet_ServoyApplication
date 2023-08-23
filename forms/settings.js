/**
 * @properties={typeid:35,uuid:"E6F8131E-D905-490B-971B-76AD4A36DC20",variableType:-4}
 */

var statusFlag = null;

/**
 * @properties={typeid:24,uuid:"9702E06D-1C79-4811-86B8-7B51448133FE"}
 */
function onDataChange(oldValue,newValue,event)
{
	if(statusFlag)
	{
		status = 'Active';
	}
	else if(!statusFlag)
	{
		status = 'Blocked';
	}
}

/**
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"A30F37DB-ED8B-4939-BCCB-F705102FD43A"}
 */
function onSwitch(event)
{
	if(elements.switch_1.onText == 'On')
	{
		status = 'Active';
	}
	else if(elements.switch_1.offText == 'Off')
	{
		status = 'Blocked';
	}
}

/**
 * Callback method when form is (re)loaded.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"7A0EF955-6589-4A8C-A44B-B4B7B4999FED"}
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
 * @properties={typeid:24,uuid:"F02D0192-30BD-4C11-B6C8-A92015022D95"}
 */
function onShow(firstShow, event)
{
	if(status == 'Active')
	{
		statusFlag = true;
	}
	else if(status == 'new')
	{
		balance = balance+500;
		reward = reward+500;
		forms.dashboard.elements.lbl_bonus.visible = false;
		statusFlag = true;
	}
	else
	{
		statusFlag = false;
	}
}

/**
 * Click event. dataTarget parameter is used to identify inner html elements (by their data-target attribute).
 *
 * @param {JSEvent} event
 * @param {String} dataTarget
 *
 * @properties={typeid:24,uuid:"2CEFF8B4-789C-4827-BC87-32A2F09390A1"}
 */
function onToggle(event, dataTarget)
{
	elements.lbl_status.text === "Off" ? elements.lbl_status.text = "On" : elements.lbl_status.text = "Off";
	elements.lbl_status.text === "On" ? elements.btn_status.imageStyleClass = "fa fa-toggle-on fa-2x pointer" : elements.btn_status.imageStyleClass = "fa fa-toggle-off fa-2x pointer";
}
