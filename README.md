# GROW Flower Power BLE App
GROW Flower Power BLE is an electron desktop application that can connect to Flower Power sensors via bluetooth and read live and historical data.

## Install
Installing the application and its dependencies for development purposes requires:
- [nodejs](https://nodejs.org/en/) v10.0.0 and above
- A package manager. Either [Yarn](https://yarnpkg.com/en/) or [npm](https://www.npmjs.com/get-npm) will do.

Once ready to go install the application dependencies
```
yarn install
```
and start the application.
```
yarn start
```

## Distribute
Once the node app has been installed it is possible to create a distribution for the underlying OS with
```
yarn dist
```
This command will create a new /dist folder and generate an executable of the application that can be installed as a regular software package.

## Download
To do

## Contribute
To do

## To Do
In no specific order:

- [ ] handle connection to multiple sensors
- [ ] parse sensor historical data
- [ ] save historical data / push it somewhere
- [ ] improve error handling
- [ ] write tests
- [ ] improve UI
- [ ] implement user authentication

## License
MIT.
