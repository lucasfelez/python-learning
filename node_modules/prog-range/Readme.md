# range.js
===========

[![npm version](https://d25lcipzij17d.cloudfront.net/badge.svg?id=js&r=r&type=6e&v=1.7.1&x2=0)]()


It is a light weight library, which provides well customizable svg progress-range. The library does **not require any rendering from the server**, as the whole svg is created on the **client's browser**. However, as it is heavily dependent on the browser.

A smooth progress bar javascript library forked from [(ranges.js)](https://github.com/azudi/ranges/tree/main/range).

[View landing page (demos)](https://azudi.github.io/ranges/)


### Contributing ###

If you wish to contribute to the project, please send the pull requests to the develop branch. Before submitting any changes, try and test that the changes work with all the support browsers. If some CSS property isn't supported or is incomplete, please create appropriate tests for it as well before submitting any code changes.


### Building ###

Clone git repository:

   $ git clone git://github.com/azudi/ranges.git

### Usage

```html
<body>
  
<!-- your target element -->
 <div id="circle-div"><svg><circle/></svg>
 </div>

<script>
let people=new range.circle({
  id:"circle-div",
  width:150,
  strokewidth:15,
  percent:70,
  rounded:false,
  fontsize:33,
  color:"red",
  textcolor:"red",
  textbold:100,
  track:true,
  indicator:true,
  animate:false,
  trackcolor:"",
  unit:"%",
  })

  // Code below is to activate on clickevent listener to activate dynamic percent update. the code can be manipulated to desired use
                     let count=0;
                        let condition=true;
                         document.querySelector("#circle-div").addEventListener("click",function(){
                       
                          let interval=setInterval(() => {
                            if(!condition){
                              let people=new range.circle({
                                  id:"circle-div",
                                  width:180,
                                  strokewidth:15,
                                  percent:count++,
                                  rounded:false,
                                  fontsize:33,
                                  color:"red",
                                  textcolor:"red",
                                  textbold:100,
                                  track:true,
                                  indicator:true,
                                  trackcolor:"",
                                  trackfit:true,
                                  unit:"%",
                                  })
                          }
                          else{
                                  clearInterval(interval)
                                }
                      
                             }, 500);
                       
                           
                             condition=!condition;
                         })

  </script>
</body>
```

### Options
```js
{
    id:                "circle-div",       // id of the element  (--string)
    width:                      180,       // width of the element as a progress bar in px  (--number)
    strokewidth:                 15,       // width of the stroke in px   (--number)
    percent:                     4         // precentage  of the stroke  (--number)
    rounded:                   true,       // the curve of the edges of the stroke(true/false)
    fontsize:                    25,       // the fontsize of the text indicator  (--number)
    textcolor:                "red",       // color of the text indicator  (-- string)
    color:                    "red",       // the color of the stroke  ( --string)
    textbold:                   600,       // the fontweight of the indicator text  (--number)
    indicator:                 true,       // If the indicator is to be visible (true/false)
    track:                     true,       // these is set to the default background track
    roundrange: "5px 10px 50px 0px",       // these is set to border-radius of the liner progress bar  (--string)
    trackcolor:  "rgb(245,245,245)",       // these is set to the background color of the track  (--string)
    trackfit:                  true,       // these is set to track to be fit to the progress bar  (true/false)
    animate:                   true,       // to animate the liner progress bar (can only functio if the ranges.css is loaded)   (true/false)
    widetrack:                 true,       // these is set to the track to be wider than the progress bar  (true/false)
    dashed:                    true,       // these is to set track in dashed track  (true/false)
    dashtrack:                 "2 3",       // these is to set track breaking intervals in dashed track. It can recieve more than two parameter  (true/false)
    unit:                       "%",       // the unit to be displayed in the indicator  (string)
    balltip:                   true,       // set the end tip of the stroke to be round  (true/false)
    arrowtip:                  true,       // set the end of the stroke to be an arrow  (true/false)
    lineborder:                  true,     // set the line function to have a visible border   (true/false)
    boxshadow:                 "0.3 0.1",  // set the inset box shadow of the track--  first value is for the inner-shadow and second is for the outer shadow   (-string)
    fillbackground:           "red",       // these is set to the background color of the progress bar (if fillbackground is set, dashed is set to false) (--string)
    gradient:                  object,     // set the background gradient of the stroke   
    type:           "linear gradient",     // To set the type of gradient --property of gradient-- (--string)
    colors:                    object,     // To set the gradient color --property of gradient-- (["red 0%","orange 30%","teal 100%"])
    orientation:               object,     // To set the gradient orientation --property of gradient-- (x:orientation along the x-axis, y:orientation along the y-axis, fill:capacity occupied by the gradient)  
    breakcolor:  "rgb(245,245,245)",       // To set the dashed track breaks color -- (these color should be the same with the background color || if background is  transparent set to the background of the parent element)   (--string) 
    ratio:                        2,       // To set the number of divided tracks (only available in roller function)   (--number)
    pointcount:                  5,       // set the number of point to be displayed-- only in point function  (--number)
    background:              "navy",       // set the background of the success box -- only in point function  (--string)
    fillpoint:                    3,       // set the number of success box to be checked --only in point function (--number)
    pointwidth:                   35,       // To set the width of the point-box --only in point function (--number)
    activecolor:               "white",      // change the color of the success point-box --only in point function (--string)
    extratext:     "uprise in bitcoin",      // And added text below the range indicator (It can contain html characters and if use in a full range will not be centralize)--only in circle and semicircle function (--string)
    disabledcolor: "rgba(70,70,70,0.3)",     // color   of non-success box to be checked --only in point function (--string)
    titles:    ["Account","BVN","Contact","Verified","Active"],       // the titles to be displayed on each point-box (the pointcount and the titles must be the same to avoid errors) --only in point function (--object)
       

     // PROPERTIES BELOW IS TO IDENTIFY SPECIFIC PROPERTIES TO ITS OBJECT

    // ROLLER
    ratio:             2,      // to set the number of divisible stroke in a roller (--number)

    //SEMICIRCLE AND CIRCLE AND QUATERCIRCLE
    extratext:             "Uprise in Bitcoin",      // To add an extra text for description (--string)
    gradient:                object,                 // To set the backround gradient  (--object)

    //LINE
      lineborder:               true,      // To set if there is border (--true/false)
      roundrange:             "50px",      // To set round edges of the linear progress bar (--string)

    //POINT
      pointcount:                  5,          // The number of point that should be displayed  (--number)
      activecolor:                  "navy",     // The set the background of the active point  (--string)
      fillpoint:                   3,          // To set number of active point (--number)
      pointwidth:                   35,         // Set the width of the points (--number)
      disabledcolor:                "rgba(230,230,230,0.07",         // Set the color and background of non-active point (--strings)
      titles:      ["Account","BVN","Contact","Verified","Active"]   // The title given to each point and is displayed ontop of the point 
      pointtextlabel:              "number",    // To set the point inner-text (options are number/check)  (--string)        
   
   
   // PIECHART
       piecolor:               ["white","red","green","teal"],      // To set the colors of the pie strokes (--object)
       pierange:               [40,20,20,10],      // To set the percentage of the pie strokes (--object)
       strokepattern:           [40,18,26,35],     // To set the width of the pie strokes  (if not set the the stroke width is set to the stroke width) (--object)
       strokewidth:                        40,      // To set pie stroketitle display (true/false)
       pielabel:                        true,      // To set the max-width of the pie strokes (--object)
       stroketitle:             ["Money arrival","Depature","Gross outcome display","Intrest"],  // The stroke title (not more than 13 characters)  (--object)
       strokepatternbackground:      "white",  // The stroke background color if the stroke pattern is set (--string)

    // LINECHART
     linerchartcolor:               ["white","red","green","teal"],      // To set the colors of the line strokes (--object)
    linerchartrange:               [40,20,20,10],      // To set the percentage of the line strokes (--object)
    strokewidth:                        40,      // To set the max-height of the pie strokes (--number)
    roundrange:
    lineprop:             ["january","Feduary","March","April"],  // The stroke title (not more than 7 characters)  (--oblect)
    boxshadow:      "0.1 0.2",  // To set the background shadow of the stroke (--string)

   // NOTE: THE BALLTIP AND ARROWTIP SHOULD NOT BE USE TOGETHER TO AVOID MERGING ERRORS
   // NOTE: FOR SHORT PERCENT UPDATE AVOID THE USE OF PROPERTY WITH INTENSE GRAPHIC EXAMPLE(box-shadow;arrowtip,balltip,lineargradient)
   // AVOID THE USE OF PIECHART FOR SHORT PIERANGE CHANGES
   //NOTE THAT WHILE USING ARROWTIP OR BALLTIP THE STROKEWIDTH IS SET TO 0.045% THE WIDTH, FOR BEST UI DISPLAY
    //NOTE THAT WHILE USING ARROWTIP OR BALLTIP IN QUATERCIRCLE AND SEMICIRCLE IS NOT TOTALLY COMPACTIBLE IN ALL WIDTH AND RANGES  
}
```


### Install


 ### CDNs

--Javascript
```
<script type="text/javascript" src="https://azudi.github.io/ranges/range/range.js"></script>
```

--CSS
```
<link rel="stylesheet" type="text/css" href="https://azudi.github.io/ranges/range/range.css"/>
```
You can copy and include the following css link for (only line object  animation) and set animate to true


#### NPM

Also available on npm https://www.npmjs.com/package/prog-range

```
npm install prog-range
```

Import it using

```
import range from 'prog-range';
```

Import css for only line object animation

```
import 'range/module/range.css';
```


### Credits

Original library: [prog-range](https://github.com/azudi/ranges/tree/main/range)

Original library author: [jerry azubuike](https://twitter.com/@JerryAzubuike5)

Original library author linkedin: [jerry azubuike](https://www.linkedin.com/in/jerry-azubuike-801752222)


### License

ISC License
