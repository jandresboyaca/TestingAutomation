# How to run it?

## Initial Config

1. docker run -v /var/lib/ghost/content  --entrypoint "bin/sh" --name data-ghost deploysoft/ghost-backup:1
2. docker run -p 2368:2368 --volumes-from data-ghost deploysoft/ghost:3.3.0


## Cypress

1. git clone https://github.com/jandresboyaca/TestingAutomation.git
2. cd  TestingAutomation
3. npm install
4. node_modules/.bin/cypress run
5. **enjoy it :)**


## Kraken

1. cd krakenghost 
2. bundle exec kraken-mobile run --properties=properties.json
3. **enjoy it :)**
