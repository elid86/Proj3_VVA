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
  
  
  
## Findings
  Below shows the findings for the questions asked in the mini challenge document. 
  
    
  2. Most showed mostly consistent ranges amongst their readings (such as sensor 14 visualized visualized below). But, by viewing each of the sensors over time, it is easier to see those that have a more broad range of readings and contain outlier readings. Below, we can see sensor 15 didn't have any readings from late wednesday evening to late friday evening. This could have been due to the sensor completely shutting down or other issues. Sensor 4 shows a potential outlier value Friday at roughly 00:00 and a very large outlier at around 21:00. Lastly, sensor 12 at first glance appears more consistent but the range of readings is incredibly large towards the second half of the timeset. 
<img width="493" alt="Screen Shot 2019-05-10 at 1 23 50 PM" src="https://user-images.githubusercontent.com/45048090/57548648-1c772580-7327-11e9-9db6-3873097d864f.png"><img width="519" alt="Screen Shot 2019-05-10 at 1 23 38 PM" src="https://user-images.githubusercontent.com/45048090/57549114-4aa93500-7328-11e9-9e2d-715a50c84540.png"><img width="496" alt="Screen Shot 2019-05-10 at 1 23 56 PM" src="https://user-images.githubusercontent.com/45048090/57549119-4ed55280-7328-11e9-8548-85eaf9b35b42.png"><img width="495" alt="Screen Shot 2019-05-10 at 1 24 07 PM" src="https://user-images.githubusercontent.com/45048090/57549121-51d04300-7328-11e9-9924-4d89dd29456f.png">

  3. The first thing we have noticed, when viewing all the sensors at once they mostly stay within the same general range and seem to have very similar readings. However, towards late wedensday all sensors who begin showing an increase in uncertanty begin around the same time.  However, even though their ranges increase, their average values still look to be around the same area. As if they are all affected at once from the earthquake and that begins causing sensor issues but the actual amount of radiation isn't showing much change. 
  <img width="483" alt="Screen Shot 2019-05-10 at 1 45 26 PM" src="https://user-images.githubusercontent.com/45048090/57550099-f6538480-732a-11e9-87b0-66f06494e8f4.png">
  
  Secondly, sensors closest to the powerplant, 13, 15 and 12, showed a lot of inconsistency in their readings. As mentioned before, sensor 15 didn't have any readings for an entire two days. However, sensor 9 is located in old town and is the next closest to the plant and while the values ranges are still fairly large, they do show a consistent increase in readings after roughly 14:00 thursday. During which time the ranges increased as well. Even more so, sensor 1 is across the town from the plant and contains a very small consistent range through the entire time. This makes us think that the more affected the sensor is by radiation, the more incosistent the readings. For this reason, we recommend using both static and mobile to give a reference of each general areas' readings from the static but using the mobile would hopefully allow more readings unaffected by outside issues (earthquake and plant). However, depending on where those sensors where in reference to the plant could affect their readings as well so monitor them closely. 
 
<img width="487" alt="Screen Shot 2019-05-10 at 1 38 12 PM" src="https://user-images.githubusercontent.com/45048090/57549593-9ad4c700-7329-11e9-995b-8916d37dbc50.png">
<img width="492" alt="Screen Shot 2019-05-10 at 1 36 17 PM" src="https://user-images.githubusercontent.com/45048090/57549818-37976480-732a-11e9-9e6d-63ad3f8764e4.png">

4. As mentioned in the previous response, it seems as though the earthquake combined with the location in reference to the plant caused more inaccuracy amongst the sensors. Becuase of this, the city should attempt to replace the static sensors in areas close to the plant as well as ones on vehicles that were close the plant at the time of the earthquake. Mobile sensors do give more data which is always helpful, especially for areas we don't have sensors. However, we should still keep the static sensors where they are to continue that consistent base reading for the areas. 

5. We used the data as a static collection. The benefits of this gave us an overlook of before, during and after the earthquake to help analyze how it affects the sensors in a general situation. If we were reading them as they came in at the time of the incedent, we would have not known which readings to see as inconsistent and which to see and an extreme fluxation of radiation. For example, on Wednesday evening at 19:05 sensor 12 seems to have sky rocketed with radiation and being as it is the 3rd closest it makes sense. But, the two closest sensors are pretty average. If people were just looking at sensor 12 for that area live they would probably call for an immediate evacuation without realizing it's just a sensor misreading.
<img width="520" alt="Screen Shot 2019-05-10 at 2 08 34 PM" src="https://user-images.githubusercontent.com/45048090/57550976-6f53db80-732d-11e9-8cb6-37bbc5871b98.png">
