# ACM Hackathon project.

## Available Scripts
In the project directory, you can run:
 `npm start`

## Inspiration™️

We were inspired to help democratize efficiency and harness data to achieve more efficient HVAC solutions after we saw how inefficient and expensive it was to air condition and heat empty rooms at UCSC and the damage that climate change induced weather events can have on rural communities.
![Esparanza](https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Hope_Bay-2016-Trinity_Peninsula%E2%80%93Esperanza_Station_03.jpg/640px-Hope_Bay-2016-Trinity_Peninsula%E2%80%93Esperanza_Station_03.jpg)

## What it does

![workingbox](https://github.com/sierrajanson/ACMHacks2024/blob/main/Images/Greenbox_lineup.jpg?raw=true)
![website](https://github.com/sierrajanson/ACMHacks2024/blob/main/Images/Homepage_react.png?raw=true)
Greenbox is a family of hardware devices and software that has the capability to work entirely off the grid while providing highly accurate data and ML powered suggestions for energy saving! We're 1/10th the cost of a Google Nest and similar devices at just 30$ for a single device,no wifi and no subscription service required!

Currently we have implemented:

- Temperature
- Pressure
- GPS (Device owner view only)
- Humidity
- IAQ (Air Quality)
- People counter (Using Bluetooth and Wifi)
- Store and forward capability

## How we built it

![3d_print_footage](https://github.com/sierrajanson/ACMHacks2024/blob/main/Images/3d_print.gif?raw=true)
At the core of each Greenbox is an ESP32 Microntroller equipped with a 915mhz LoRa module and sensors that work together to generate a digital map of an area which includes the number of people, temperature, air quality etc. Each Greenbox then forms a mesh with other units where they use LoRa to communicate over incredibly long distances (Over 516 Miles!) to acess a Wifi endpoint from where they can upload their data to the backend for further processing and storage. This data then gets sent to the frontend where end users can make more informed decisions when planning locations to meet, play, study and eat at.

## Challenges we ran into


This was truly a fullstack project and we mean it! We worked with the lowest level of code all the way from microcontrollers, I2C devices to the MQTT protocol, Cloud database, Huggingface Docker API implementation and React js while hand soldering and 3d printing the finished version. We were definetly crunched by time but are ultimately proud of the data pipeline, frontend and backend that we setup!

## What we learned

![map](https://github.com/sierrajanson/ACMHacks2024/blob/main/Images/nodes.png?raw=true)
It's safe to say that everyone in our team learnt a lot about deep technical topics that are usually confined to a specific field of study but due to the nature of this project had to be learnt and implemented on the go! We enjoyed working on and pulling off a seemingly impossible task and had two devices and software ready within 2 days.

## What's next for Greenbox?🍃

![us](https://github.com/sierrajanson/ACMHacks2024/blob/main/Images/team.jpg?raw=true)

- Building out a "bring your own model" architecture to allow users to setup reccomendation models to suit their own needs.
- We have plans for manufacturing custom PCBs locally that cut down on component costs and reduce the footprint of the devices.
- We are also investigating integrations with home heating and cooling solutions along with adoption in public transit systems like the Santa Cruz Metro for more efficient heat, energy and transit user management.
- Injest pipeline improvements to allow the VOC sensor to flag fires and buildups of dangerous gasses.
