/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"CA8468A4-172C-4AF5-B8FB-34A618F5C8E9"}
 */
var uName = '';
/**
 * @properties={typeid:35,uuid:"0ABD9BF0-F60B-4247-8BF5-B10A7F9B8E83",variableType:-4}
 */
var uAge = null;
/**
 * @properties={typeid:35,uuid:"757D6256-0443-4019-AEF2-BBD5FF1C18F5",variableType:-4}
 */
var uCnic = null;
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"27BA55D6-9E60-42A3-8B41-9F2A89054AD0"}
 */
var uCity = '';
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"B0473528-0ADA-4932-B973-CA9244CAAA84"}
 */
var uCountry = '';
/**
 * @properties={typeid:35,uuid:"041319D6-E3C9-4ACF-A4DD-C05C81095604",variableType:-4}
 */
var uContact = null;
/**
 * @properties={typeid:35,uuid:"1D4F3126-A8F7-4AB0-94CB-2AAA2D6B09EC",variableType:-4}
 */
var uOpeningDate = null;
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"AB74CFB1-D13C-45BD-8EFB-D42D840D2DA5"}
 */
var uProductName = '';

/**
 * Fired when the button is clicked.
 *
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"A7196E90-A0CB-4A9F-8209-F1FB54BAAA69"}
 */
function onRegister(event)
{
	application.sleep(2000);
	
	foundset.newRecord();
	name = uName;
	age = uAge;
	cnic = uCnic;
	city = uCity;
	country = uCountry
	contact = uContact;
	opening_date = uOpeningDate;
	productname = uProductName;
	status = 'new';
	balance = 0;
	sent = 0;
	received = 0;
	
	var win = application.createWindow("registeration_popup",JSWindow.MODAL_DIALOG, application.getWindow('registeration'));
	win.setInitialBounds(-1, -1, 375, 220);
	win.title = "";
	win.show(forms.registeration_popup);
}
