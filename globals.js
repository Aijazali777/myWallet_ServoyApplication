/**
 * @properties={typeid:35,uuid:"3A203471-3311-4675-8FFF-586624970A39",variableType:-4}
 * type {Number}
 */
var id;
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"8C643EAA-EBAE-4EB0-A574-AC5E81A52CBB"}
 */
var username = '';
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"1B90FE29-6113-4337-B2B5-52E5DB0C6ECC"}
 */
var password = ''
	
/**
 * @type {Date}
 * @properties={typeid:35,uuid:"32A120A3-7245-46C0-96C1-71C6277DAB46",variableType:93}
 */
var currentDateTime = application.getTimeStamp();
/**
 * Callback method for when solution is opened.
 * When deeplinking into solutions, the argument part of the deeplink url will be passed in as the first argument
 * All query parameters + the argument of the deeplink url will be passed in as the second argument
 * For more information on deeplinking, see the chapters on the different Clients in the Deployment Guide.
 *
 * @param {String} arg startup argument part of the deeplink url with which the Client was started
 * @param {Object<Array<String>|String>} queryParams all query parameters of the deeplink url with which the Client was started, key>string if there was one value else key>Array<String>
 *
 * @properties={typeid:24,uuid:"3E556C02-1042-4AA3-B8AC-AD53A7334B60"}
 */
function onSolutionOpen(arg, queryParams)
{
	/** @type {Date} */
	var startTime = application.getTimeStamp();
	application.output("Start Time: "+startTime);
	plugins.scheduler.addCronJob("UpdateRoutine","0/10 * * * * ?",welcome,startTime,stopTime);
	/** @type {Date} */
	var stopTime = application.getTimeStamp();
	application.output("stopTime: "+stopTime);
}
/**
 * @properties={typeid:24,uuid:"3C0F22F5-E7F9-4FFD-8473-B8EBB7DDB843"}
 */
function welcome()
{
	forms.home.elements.lbl_1.visible = true;
	forms.home.elements.lbl_2.visible = true;
	forms.home.elements.lbl_3.visible = true;
}
/**
 * Click event. dataTarget parameter is used to identify inner html elements (by their data-target attribute).
 *
 * @param {JSEvent} event
 * @param {String} dataTarget
 *
 * @properties={typeid:24,uuid:"105A9721-0FDD-4ED0-9598-327D28C761C1"}
 */
function onRefresh(event, dataTarget)
{
	forms.loading.controller.show();
}

/**
 * Click event. dataTarget parameter is used to identify inner html elements (by their data-target attribute).
 *
 * @param {JSEvent} event
 * @param {String} param
 *
 * @properties={typeid:24,uuid:"2140DF7C-9045-4A38-AF4A-2E5E096CFD14"}
 */
function onClickMenu(event, param)
{
	if(param == 'h_lbl_home')
	{
		forms.loading.controller.show();
		forms.home.controller.show();
	}
	else if(param == 'h_lbl_about')
	{
		forms.loading.controller.show();
		forms.about.controller.show();
	}
	else if(param == 'h_lbl_contact')
	{
		forms.loading.controller.show();
		forms.contact.controller.show();
	}
	else if(param == 'h_lbl_login')
	{
		forms.loading.controller.show();
		forms.login.controller.show();
	}
}
