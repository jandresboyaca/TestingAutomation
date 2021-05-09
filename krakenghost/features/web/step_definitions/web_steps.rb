if ENV["ADB_DEVICE_ARG"].nil?
  require 'kraken-mobile/steps/web/kraken_steps'

  Then(/^I store a variable with the current url$/) do
    $url_variable = @driver.current_url
    File.write('./.variable.txt', $url_variable)
    puts($url_variable)
  end

  Given(/^I navigate to page with the url stored in the variable$/) do
    $url_variable = IO.read("./.variable.txt")
    puts($url_variable)
    @driver.navigate.to $url_variable
    sleep 2
  end

  Then(/^I enter "([^\"]*)" into input field having class name "([^\"]*)"$/) do |text, classname|
    @driver.find_element(:class, classname).send_keys(text)
    sleep 2
  end

  Then(/^I click on element having css class "([^\"]*)"$/) do |classname|
    @driver.find_element(:class, classname).click
    sleep 2
  end

  Then(/^I click on element having title "([^\"]*)"$/) do |titlename|
    @driver.find_element(:title, titlename).click
    sleep 2
  end
end

