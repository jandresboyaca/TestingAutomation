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
let count = 0;
When(/^I click on element having article (.*)$/ , (classname) => {
    if(count == 0){
        var classObject = $(`article[class="${classname}"]`);
        classObject.click();
    } else {
        var classObject = $$(`article[class="${classname}"]`);
        classObject[classObject.length - 1].click();
    }
    count++;
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
