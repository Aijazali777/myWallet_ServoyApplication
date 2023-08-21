
/**
 * Click event. dataTarget parameter is used to identify inner html elements (by their data-target attribute).
 *
 * @param {JSEvent} event
 * @param {String} dataTarget
 *
 * @properties={typeid:24,uuid:"D9D72B3B-CD81-41BF-B64F-E4CFCEB9F51B"}
 */
function availBonus(event, dataTarget)
{
	foundset.loadRecords(globals.id);
	if(status == 'new')
	{
		balance += 500;
		application.output(" 500 PKR added to your account");
		status = 'Active';
		elements.lbl_bonus.visible = false;
		application.updateUI();
	}
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"320475AC-C98E-413A-A16C-688BFFD3D7B8"}
 */
function onShow(firstShow, event)
{
	if(status == 'new')
	{
		elements.lbl_bonus.visible = true;
	}
}

/**
 * Callback method when form is (re)loaded.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"F1B0660F-7D53-46D3-9969-9C5E93EDFB9A"}
 */
function onLoad(event)
{
	foundset.loadRecords(globals.id);
}
