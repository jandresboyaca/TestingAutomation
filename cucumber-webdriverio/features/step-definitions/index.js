var {Given} = require('cucumber');
var {When} = require('cucumber');
var {Then} = require('cucumber');
var {expect} = require('chai');
var faker = require('faker');

Given('I navigate to Ghost page', () => {
    browser.url('/ghost/#/signin/');
    if($('button=Cerrar').isDisplayed()) {
        $('button=Cerrar').click();
    }
});

When('I Sing In login', () => {
    var classObject = $(`input[class="email ember-text-field gh-input ember-view"]`);
    classObject.click();
    classObject.keys("admin@test.com");

    var classObject = $(`input[class="password ember-text-field gh-input ember-view"]`);
    classObject.click();
    classObject.keys("123456789*");

    var classObject = $(`button[class="login gh-btn gh-btn-blue gh-btn-block gh-btn-icon ember-view"]`);
    classObject.click();
});

When(/^I enter (.*) into input field having class name (.*)$/ , (user,classname) => {
    var classObject = $(`input[class="${classname}"]`);
    classObject.clearValue();
    classObject.click();
    classObject.keys(user);
});

When(/^I enter (.*) into input field by id (.*)$/ , (user,idname) => {
    var classObject = $(`input[id="${idname}"]`);
    classObject.clearValue();
    classObject.click();
    classObject.keys(user);
});

When(/^I enter faker (.*) concat id (.*)$/ , (idname,ids) => {
    var classObject = $(`input[id="${idname}"]`);
    classObject.clearValue();
    classObject.click();
    classObject.keys(generateFaker(ids));
});

When(/^I enter faker (.*) concat class (.*)$/ , (idname,classname) => {
    var classObject = $(`input[class="${idname}"]`);
    classObject.clearValue();
    classObject.click();
    classObject.keys(generateFaker(classname));
});

When(/^I set number id (.*)$/ , (idname) => {
    var ids = idname;
});

When(/^I click on element having css button (.*)$/ , (classname) => {
    if($(`button[class="${classname}"]`).waitForClickable({ timeout: 3000 })){
        var classObject = $(`button[class="${classname}"]`);
        classObject.click();
    }
});

When(/^I click on element having link text (.*)$/ , (linkText) => {
    if($(`=${linkText}`).waitForClickable({ timeout: 3000 })){
        var classObject = $(`=${linkText}`);
        classObject.click();
    }
});

When(/^I click on element having article (.*)$/ , (classname) => {
    var classObject = $(`article[class="${classname}"]`);
    classObject.click();
});

Then('I expect to not be able to login', () => {
    $(`button[class="gh-btn gh-btn-green"]`).waitForDisplayed(500000);
});

Then(/^I expect to see (.*) text in the button (.*)$/ , (text,button) => {
    var classObject = $(`a[class="${button}"]`);
    expect(classObject.getText()).to.include(text);
});

Then('Sing out' , () => {
    var classObject = $(`div[class="ember-view ember-basic-dropdown-trigger  flex items-center outline-0 pointer space-between pa2 pl4 pr3 mt3 mb6"]`);
    classObject.click();
    var classSingOut = $(`a[class="dropdown-item user-menu-signout ember-view"]`);
    classSingOut.click();
});

function generateFaker(ids) {
    return faker.name.firstName().toLowerCase() + faker.name.lastName().toLowerCase() + ids + "@test.com";
}

/*
Then(/^I expect to see (.*)$/ , (text) => {
    if($(`=${text}`).waitForExist(5000)){
        var classObject = $(`=${text}`);
        console.log("classObject-------------------------",classObject.getText())
    }
});
*/
/*
When('should reload my session with current capabilities', () => {
    browser.url('/ghost/#/tags/');
    if($('button=Cerrar').isDisplayed()) {
        $('button=Cerrar').click();
    }
    browser.url('/ghost/#/staff/');
    if($('button=Cerrar').isDisplayed()) {
        $('button=Cerrar').click();
    }
});
*/
/*
When('I open the login screen', () => {
    $('button.loginButton').waitForExist(5000);
    $('button.loginButton').waitForDisplayed(5000);
    $('button.loginButton').click();
});

When('I fill a wrong email and password', () => {
    var cajaLogIn = $('.cajaLogIn');

    var mailInput = $('input[name="email"]');
    mailInput.click();
    mailInput.setValue('wrongemail@example.com');

    var passwordInput = $('input[name="password"]');
    passwordInput.click();
    passwordInput.setValue('123467891');
});

When('I try to login', () => {
    $('button=Ingresar').click();
});

Then('I expect to not be able to login', () => {
    $('.notice.alert.alert-danger').waitForDisplayed(5000);
});

When(/^I fill with (.*) and (.*)$/ , (email, password) => {


    var mailInput = $('input[name="email"]');
    mailInput.click();
    mailInput.keys(email);

    var passwordInput = $('input[name="password"]');
    passwordInput.click();
    passwordInput.keys(password)
});

Then('I expect to see {string}', error => {
    $('.notice.alert.alert-danger').waitForDisplayed(5000);
    var alertText = browser.$('.notice.alert.alert-danger').getText();
    expect(alertText).to.include(error);
});
*/
/*
Then('I expect to a good screen {string}', message => {
    $('.chat-portalstyles__JoinChat-emvmjv-6.copRXr.fullWidth.btn').waitForDisplayed(5000);
    var buttonText = browser.$('.chat-portalstyles__JoinChat-emvmjv-6.copRXr.fullWidth.btn').getText();
    expect(buttonText).to.include(message);
});
*/
