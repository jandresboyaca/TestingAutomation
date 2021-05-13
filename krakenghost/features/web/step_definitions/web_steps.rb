$featurescenariostep = ''
$versionapp = '3.3.0'
_id = 0

if ENV["ADB_DEVICE_ARG"].nil?
  require 'kraken-mobile/steps/web/kraken_steps'

  Given(/^I set scenario "([^\"]*)"$/) do |scenario|
    $featurescenariostep = scenario
  end

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

  Then(/^I enter "([^\"]*)" into input field having xpath "([^\"]*)"$/) do |text, xpath|
    @driver.find_element(:xpath, xpath).send_keys(text)
    sleep 2
  end

  Then(/^I click on element having xpath "([^\"]*)"$/) do |xpath|
    @driver.find_element(:xpath, xpath).click
    sleep 2
  end

  # Hooks
  AfterStep do |_scenario|
    Dir.mkdir("./tvr") unless File.exist?("./tvr")
    Dir.mkdir("./tvr/#{$versionapp}") unless File.exist?("./tvr/#{$versionapp}")
    Dir.mkdir("./tvr/#{$versionapp}/#{$featurescenariostep}") unless File.exist?("./tvr/#{$versionapp}/#{$featurescenariostep}")
    path = "./tvr/#{$versionapp}/#{$featurescenariostep}/#{$featurescenariostep}_#{_id += 1}.png"
    @driver.save_screenshot(path)
    embed(path, 'image/png', File.basename(path))
  end

end