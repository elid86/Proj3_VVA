# Proj3_VVA

## Purpose

  The purpose this project is to create aids to help visualize the radiation coming from the Always Safe nuclear power plant. The main goals to be accomplished are: 
  
    1. Visualize radiation measurements over time from both static and mobile sensors to identify areas where radiation over background is detected.
    
    2. Use visual analytics to represent and analyze uncertainty in the measurement of radiation across the city.
    
    3. Based on the uncertainty observed in point 2, determine if radiation measurements are reliable enough to locate areas of concern.
    
    4. Summarize the state of radiation measurements at the end of the available period and prepare a suggested course of action for the city. 
    
    
    
## Data Set
  Included in the datasets are three csv files: one for the static sensors' readings, another for the static sensors locations' and the final of the mobile sensors. 

  The static sensors are sensors that were given out and placed in a static location to measure the radiation levels over time. They do not move and should be a consistent way to measure the radiation. The data is the timestamp, the sensor number, and the radiation reading.

  The mobile sensors are sensors that were given to people of the town to put on top of their cars. The mobile sensors then submit the data through the users cell phone and log the location, time, radiation reading, and the user's name. 
  
  
  
## Plan 

1. Create a map of the location with a dot for each reading of a specific time where each dot is colored based on the radiation levels. It will also include a slider to allow the user to adjust which time they are viewing the readings for as well as an option to view only static readings, only mobile readings and both. This will allow us to visually see the location of the areas radiation levels and easily spot outlier readings to determine if certain sensors should be considered too unscertain to trust.

2. A line graph showing each sensors reading over time. This will be filterable by mobile, static and both as well as selecting which area(s) to view. The user will also be able to view the average reading for each area. This will allow the user to see if certain vehicles are transfering to and from extreme and mild levels of radiation to determine if they could be spreading the radiation of the vehicle 
  
