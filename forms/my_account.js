
/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"1DDAFD1F-1FA9-4F6C-9F08-5888832C8DA4"}
 */
function onShow(firstShow, event)
{
	foundset.loadRecords(globals.id);
//	if(status == 'Blocked')
//	{
//		elements.fld_status.addStyleClass('btn-danger');
//	}
//	else
//	{
//		elements.fld_status.addStyleClass('form-control');
//	}
}

/**
 * Callback method when form is (re)loaded.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"CAA5C536-D2D6-49EC-B5BC-C1F7202743CD"}
 */
function onLoad(event)
{
	foundset.loadRecords(globals.id);
}
