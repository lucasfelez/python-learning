
  /*eslint-disable*/
  
 
 
  const range = {
    //these code below is for rectangular loader
    rectangle: function ({
      id,
      color,
      width,
      strokewidth,
      percent,
      rounded,
      fontsize,
      textcolor,
      textbold,
      indicator,
      trackcolor,
      unit,
      track,
      dashed,
      dashtrack,
      breakcolor
    }) {
      //code for error
      if (percent > 100) {
        console.log("percent cannot ne greater than 100");
      }
  
      if (document.getElementById(id)) {
        const moduleClickRect = document.getElementById(id);
        const moduleClickChildRect = document.getElementById(id).children[0];
        const moduleClickChildNextRect =
          document.getElementById(id).children[0].children[0];
        strokewidth ? (strokewidth = strokewidth) : (strokewidth = 1);
        width ? (width = width) : (width = 200);
        color ? (color = color) : (color = "black");
        unit ? (unit = unit) : (unit = "%");
        trackcolor
          ? (trackcolor = trackcolor)
          : (trackcolor = "rgba(0,0,0,0.07)");
  
        for (let i = 0; i < moduleClickRect.children.length; i++) {
          if (moduleClickRect.children[i].tagName === "SPAN") {
            moduleClickRect.children[i].remove();
          }
        } //code below is to display indicator in center
  
        if (moduleClickRect.children.length > 6)
          for (let p = 6; p < moduleClickRect.children.length; p++) {
            if (moduleClickRect.children[p].tagName === "DIV") {
              moduleClickRect.children[p].remove();
            }
          }
        const rollerIndicatorRect = document.createElement("span");
        moduleClickRect.appendChild(rollerIndicatorRect);
        rollerIndicatorRect.innerHTML = `${percent}${unit}`;
        rollerIndicatorRect.style.cssText = `position:absolute;top:calc(50% - ${
          fontsize / 2
        }px);
      left:calc(50% - ${fontsize / 2}px);
      text-align:center;
      width:${fontsize}px;
      height:${fontsize}px;
      display:${indicator == true ? "inline-flex" : "none"};
      justify-content:center;
      align-items:center;
      font-weight:${textbold ? textbold : 300};
      color:${textcolor ? textcolor : "black"};
      font-size:${fontsize}px;
      `;
  
        if (moduleClickRect.children.length > 2) {
          moduleClickRect.children[1].remove();
        } //end of display indicator in center
        //code for the display of track
  
        if (track && track == true) {
          const rangetrackRect = document.createElement("span");
          moduleClickRect.appendChild(rangetrackRect);
          rangetrackRect.style.cssText = `position:absolute;
      width:100%;
      height:100%;
      top:0;
      left:0;
      z-index:10;
      `;
          rangetrackRect.innerHTML = `
         <svg width=${width}px
         height=${width}px >
           <rect
            y:${0};
            x:${0};
            style='
            stroke:${trackcolor};
            stroke-width:${strokewidth}px;
            fill:transparent;
            width:${width};
            height:${width};
            '
           />
         </svg>
         `;
        } //end of code for the display of track
        //code for dashed display
  
        if (dashed && dashed == true) {
          let svgRect = document.createElement("span");
          svgRect.classList.add("roller_rx_range_rx");
          svgRect.style.cssText = `width:${width}px;
   height:${width}px;
   position:absolute;top:0;left:0;display:block;
   z-index:6;
   `;
          svgRect.innerHTML = `<svg width=${width}px height=${width}px>
      <rect
            y:${0};
            x:${0};
            style='
            stroke:${breakcolor};
            stroke-width:${strokewidth + 1}px;
            fill:transparent;
            width:${width};
            height:${width};
            stroke-dasharray:${dashtrack?dashtrack:"5 15"}
            '
           />
   </svg>`;
          moduleClickRect.appendChild(svgRect);
        } //   //end of code for the dashed display
  
        if (width) {
          moduleClickRect.style.cssText = `width:${width}px;
      height:${width}px;position:relative !important;
      
      `;
          moduleClickChildRect.style.cssText = `width:${width}px;
      height:${width}px;fill:transparent;
      `;
          moduleClickChildNextRect.style.cssText = `stroke:${color ? color : "black"};
      stroke-width:${strokewidth}px;
      y:${0};
      x:${0};
      fill:transparent;
      width:${width};
      height:${width};
      stroke-dashoffset:0 0;
      stroke-dasharray:${(percent * ((8 * width) / 2)) / 100} ${
            ((100 - percent) * ((8 * width) / 2)) / 100
          };
      stroke-linecap:${rounded ? "round" : "none"}
      `;
        }
      }
    },
  
    rectangleroller: function ({
      id,
      color,
      width,
      strokewidth,
      rounded,
      track,
      trackcolor
    }) {
      if(document.getElementById(id)){
        
      const moduleClickTang = document.getElementById(id);
     const moduleClickChildTang = moduleClickTang.children[0];
      const moduleClickChildNextTang =moduleClickTang.children[0].children[0]
      
      strokewidth ? (strokewidth = strokewidth) : (strokewidth = 1);
      width ? (width = width) : (width = 200);
      color ? (color = color) : (color = "black");
      trackcolor ? (trackcolor = trackcolor) : (trackcolor = "rgba(0,0,0,0.07)");
      const rangetrackTang = document.createElement("div");
      moduleClickTang.appendChild(rangetrackTang);
      rangetrackTang.style.cssText = `position:absolute;
      width:100%;
      height:100%;
      top:0;
      left:0;
      z-index:10;
      `;
      rangetrackTang.innerHTML = `
         <svg width=${width}px
         height=${width}px >
           <rect
            y:${0};
            x:${0};
            style='
            stroke:${trackcolor};
            stroke-width:${strokewidth}px;
            fill:transparent;
            width:${width};
            height:${width};
            '
           />
         </svg>
         `;
  
      if (width) {
        moduleClickTang.style.cssText = `width:${width}px;
      height:${width}px;position:relative;
      `;
        moduleClickChildTang.style.cssText = `width:${width}px;
      height:${width}px;fill:transparent;
      `;
        moduleClickChildNextTang.style.cssText = `stroke:${color ? color : "black"};
      stroke-width:${strokewidth}px;
      y:${0};
      x:${0};
      fill:transparent;
      width:${width};
      height:${width};
      stroke-dashoffset:0 0;
      stroke-dasharray:${(100 * ((0 * width) / 2)) / 100} ${
          (100 * ((8 * width) / 2)) / 100
        };
      stroke-linecap:${rounded ? "round" : "none"}
      `;
      }
  
      setTimeout(() => {
        moduleClickChildNextTang.style.cssText = `${
          moduleClickChildNextTang.style.cssText
        }
              transition:2.2s;
              stroke-dasharray:${(100 * ((8 * width) / 2)) / 100} ${
          (100 * ((0 * width) / 2)) / 100
        };
              `;
        setTimeout(() => {
          moduleClickChildNextTang.style.cssText = `${
            moduleClickChildNextTang.style.cssText
          }
                  transition:0s;
                  stroke-dasharray:${(100 * ((0 * width) / 2)) / 100} ${
            (100 * ((8 * width) / 2)) / 100
          };
                  `;
        }, 1700);
      }, 10);
      setInterval(() => {
        moduleClickChildNextTang.style.cssText = `${
          moduleClickChildNextTang.style.cssText
        }
              transition:2s;
              stroke-dasharray:${(100 * ((8 * width) / 2)) / 100} ${
          (100 * ((0 * width) / 2)) / 100
        };
              `;
        setTimeout(() => {
          moduleClickChildNextTang.style.cssText = `${
            moduleClickChildNextTang.style.cssText
          }
                  transition:0s;
                  stroke-dasharray:${(100 * ((0 * width) / 2)) / 100} ${
            (100 * ((8 * width) / 2)) / 100
          };
                  `;
        }, 1700);
      }, 2000);
    }
    },
  
  
  
    circle: function ({
      id,
      color,
      width,
      strokewidth,
      percent,
      rounded,
      fontsize,
      textcolor,
      textbold,
      indicator,
      track,
      trackcolor,
      trackfit,
      widetrack,
      dashed,
      unit,
      balltip,
      arrowtip,
      fillbackground,
      breakcolor,
      boxshadow,
      widestroke,
      gradient,
      dashtrack,
      extratext,
      extratextcolor,
    }) {
      //code for error
      if (percent > 100) {
        console.log("percent cannot be greater than 100");
      }
  
      if (document.getElementById(id)) {
        const moduleClick = document.getElementById(id);
        const moduleClickChild = moduleClick.children[0];
        const moduleClickChildNext = moduleClick.children[0].children[0];
        fillbackground ? (dashed = false) : (dashed = dashed);
        unit ? (unit = unit) : (unit = "%");
        width ? (width = width) : (width = 200);
        color ? (color = color) : (color = "black");
        trackfit ? (track = false) : (track = track);
        dashed ? (track = false) : (track = track);
        balltip || arrowtip ? strokewidth<width*0.04?strokewidth=width*0.04:strokewidth=strokewidth : (strokewidth = strokewidth);
        let rangevalue=5.8;
        widestroke?rangevalue=(rangevalue*0.99):rangevalue=5.8
  
        for (let i = 0; i < moduleClick.children.length; i++) {
          if (moduleClick.children[i].tagName === "SPAN") {
            moduleClick.children[i].remove();
          }
        } //code below is to display indicator in center
  
        for (let i = 0; i < moduleClick.children.length; i++) {
          if (moduleClick.children[i].tagName === "SPAN") {
            moduleClick.children[i].remove();
          }
        } //code below is to display indicator in center
  
        for (let i = 0; i < moduleClick.children.length; i++) {
          if (moduleClick.children[i].tagName === "SPAN") {
            moduleClick.children[i].remove();
          }
        } //code below is to display indicator in center
        // code to adjust the strokewide based on the width
  
        if (strokewidth) {
          if (strokewidth < width * 0.05) {
            strokewidth = strokewidth;
          } else {
            strokewidth = width * 0.05;
          }
        } // end of code to adjust the strokewide based on the width
  
        const rollerIndicator = document.createElement("span");
        rollerIndicator.classList.add("rollerindicator_div");
        const extratextadd = document.createElement("span");
        moduleClick.appendChild(rollerIndicator);
        rollerIndicator.innerHTML = `${percent}${unit}`; //code to show the percent in number
  
        rollerIndicator.style.cssText = `position:absolute;top:calc(50% - ${
          fontsize / 2
        }px);
     left:calc(0% + ${strokewidth*3}px);
     text-align:center;
     width:${width - (strokewidth*6)}px;
     height:${fontsize}px;
     display:${indicator == true ? "inline-flex" : "none"};
     justify-content:center;
     align-items:center;
     font-weight:${textbold ? textbold : 300};
     color:${textcolor ? textcolor : "black"};
     font-size:${fontsize}px;
     `; //end of code to show the percent in number
  
     if(extratext){
      extratextadd.classList.add("extratext_div");
      extratextadd.style.cssText = `position:absolute;top:calc(50% + ${
        fontsize/2
      }px);
      left:15%;
      text-align:center;
      display:block;
      padding-top:0.2em;
      width:70%;text-align:center;
      height:${fontsize}px;
      display:${indicator == true ? "inline-flex" : "none"};
      justify-content:center;
      align-items:center;line-height:14px;
      font-weight:${textbold ? textbold : 300};
      color:${extratextcolor ? extratextcolor : textcolor};
      font-size:${fontsize/3}px;
      `; //end of code to show the percent in number
        extratextadd.innerHTML=extratext
      moduleClick.appendChild(extratextadd)
    }
  
  
        if (track && track == true) {
          
          //code for track which the stroke move along
          const trackdiv = document.createElement("span");
          const rangetrack = document.createElement("span");
          trackdiv.appendChild(rangetrack);
          moduleClick.appendChild(trackdiv);
          trackdiv.style.cssText = `position:absolute;top:0;left:0;width:100%;height:100%;
      display:block !important;
      `;
          rangetrack.style.cssText = `position:absolute;
     width:calc(100% - ${strokewidth * 2}px);
     height:calc(100% - ${strokewidth * 2}px);
     border:${strokewidth + 1}px solid ${
            trackcolor ? trackcolor : "rgba(0,0,0,0.07)"
          };
     top:${strokewidth}px;left:${strokewidth}px;
     border-radius:50%;
     display:${track ? "inline-block" : "none"};
     z-index:-1
     `;
        } //end of code for track which the stroke move along
        //code below for dashed and trackfit
  
        if (dashed && dashed == true && moduleClick.children.length < 5) {
          let widewidth;
          widetrack
            ? (widewidth = strokewidth * 2)
            : (widewidth = strokewidth + 1);
          let svg2 = document.createElement("span");
          svg2.classList.add("roller_rx_range_rx");
          svg2.style.cssText = `width:${width}px;
          height:${width}px;transform:rotateZ(-90deg);
          position:absolute;top:0;left:0;`;
                svg2.innerHTML = `<svg width=${width}px height=${width}px>
          <circle cy=${width / 2} cx=${width / 2} 
          r=${width / 2 - strokewidth} 
          fill='transparent'
          style='
          stroke-width:${widewidth+1}px;
          stroke:${breakcolor};
          stroke-dashoffset:0 0;
          stroke-dasharray:${dashtrack?dashtrack:"5 15"};
          stroke-linecap:none;
          '
          />
          </svg>`;
          moduleClick.appendChild(svg2);
        }
  
        if (trackfit && trackfit == true && moduleClick.children.length < 5) {
          let widewidth;
          widetrack ? (widewidth = strokewidth * 2) : (widewidth = strokewidth);
          let svg = document.createElement("span");
          svg.classList.add("roller_rx_range_rx2");
          svg.style.cssText = `width:${width}px;
          height:${width}px;transform:rotateZ(-90deg);
          position:absolute;top:0;left:0;z-index:-1`;
                svg.innerHTML = `<svg width=${width}px height=${width}px>
          <circle cy=${width / 2} cx=${width / 2} 
          r=${width / 2 - strokewidth} 
          fill='transparent'
          style='
          stroke-width:${widewidth}px;
          stroke:${
            trackcolor ? trackcolor : "rgba(0,0,0,0.07)"
          };
          stroke-linecap:${rounded ? "round" : "none"};
          '
          />
          </svg>`;
          moduleClick.appendChild(svg);
        } //end of code for dashed and trackfit
  
        if (width) {
          moduleClick.style.cssText = `width:${width}px;
     height:${width}px;position:relative;
   
     `;
  
          if (fillbackground && fillbackground != "") {
            moduleClick.style.cssText = `${moduleClick.style.cssText};background:${fillbackground};
         border-radius:50%;
       `;
            dashed = false;
          } //code below for balltip
  
          if (balltip && balltip == true) {
            let ball = document.createElement("span");
            let tip = document.createElement("span");
            ball.style.cssText = `
               position:absolute;top:0;left:0;
               width:100%;height:100%;
               border-radius:50%;
               display:block;
               z-index:100;
               transform:rotateZ(${(percent / 100) * 360}deg)  
             `;
            tip.style.cssText = `
               position:absolute;top:0.5px;
               left:50%;width:${strokewidth * 2}px;
               height:${strokewidth * 2}px;
               border-radius:inherit;
               background:${color};
             `;
            ball.appendChild(tip);
            moduleClick.appendChild(ball);
          } //end of code for balltip
  
  
                     //code below for arrowtip
        
                     if (arrowtip && arrowtip == true) {
                      let ballbox = document.createElement("span");
                      let tipbox = document.createElement("span");
                      ballbox.style.cssText = `
                      position:absolute;top:0;left:0;
                      width:100%;height:100%;
                      border-radius:50%;
                      display:block;
                      transform:rotateZ(${(percent / 100) * 360}deg) 
                    `;
                      tipbox.style.cssText = `
                      position:absolute;top:${-strokewidth/2}px;
                      left:calc(50% + 2px);width:${strokewidth*3}px;
                      height:${strokewidth*3}px;
                      display:inline-block;
                    background:${color};
                    clip-path:polygon(0 0, 0 100%, 60% 50%);
                  border-radius:50px
                    `;
                      ballbox.appendChild(tipbox);
                      moduleClick.appendChild(ballbox);
                    } //end of code for arrowtip
              //end of code for arrowtip
          
  
     
  
          moduleClickChild.style.cssText = `width:${width}px;
     height:${width}px;transform:rotateZ(-90deg);z-index:20 !important;
     `;
          moduleClickChildNext.style.cssText = `
          stroke:${color ? color : "black"};
     stroke-width:${widestroke?(strokewidth*2)-1:strokewidth}px;
     cy:${width / 2};
     cx:${width / 2};
     r:${width / 2 - strokewidth};
     fill:transparent;
     stroke-dashoffset:0;
     stroke-dasharray: ${(percent * ((rangevalue * width) / 2)) / 100} ${
            ((100 - percent) * ((rangevalue * width) / 2)) / 100
          };
     stroke-linecap:${rounded ? "round" : "none"};
     animation:2s infinite linear svgroller
     `;
        } 
         
  
  
        //code for box shadow
          if(boxshadow && boxshadow.lastIndexOf(" ")){ 
         let shadow= document.createElement("span")
         let shadowinner= document.createElement("span")
            shadow.style.cssText=`
               width:100%;height:100%;
               border-radius:50%;
               position:absolute;top:0;left:0;
               
            `
            shadowinner.style.cssText=`
            position:absolute;top:${strokewidth*2}px;
            left:${strokewidth*2}px;width:calc(100% - ${4*strokewidth}px);
            height:calc(100% - ${4*strokewidth}px);
            border-radius:inherit;
            box-shadow: 2px 4px 10px rgba(0,0,0,${boxshadow.substring(0,boxshadow.lastIndexOf(" "))}),
         -2px -4px 10px rgba(0,0,0,${boxshadow.substring(0,boxshadow.lastIndexOf(" "))}),
         inset -2px -4px 10px rgba(0,0,0,${boxshadow.substring(boxshadow.lastIndexOf(" "),boxshadow.length)}),
        inset 2px 4px 10px rgba(0,0,0,${boxshadow.substring(boxshadow.lastIndexOf(" "),boxshadow.length)});
            `
            shadow.appendChild(shadowinner)
          moduleClick.appendChild(shadow)
        moduleClick.style.cssText=`
        ${moduleClick.style.cssText};
        box-shadow:inset 2px 6px 10px rgba(0,0,0,0.15),
        inset -2px -6px 10px rgba(0,0,0,0.15);
        border-radius:50%;
        `
          }
            //end of code for box shadow
  
            //code for gradient
              if(gradient){
                 let stop=""
                    if(gradient.colors){
                    for(let i=0;i<gradient.colors.length;i++){
                      stop=`${stop}  <stop
                      offset="${gradient.colors[i].substring(gradient.colors[i].lastIndexOf(" "),gradient.colors[i].length)}" style="stop-color:${gradient.colors[i].substring(0,gradient.colors[i].lastIndexOf(" "))}; stop-opacity:1"
                    ></stop>`
                    }
                  }
           
                  //code below for linear gradient 
                if(gradient.type=="linear-gradient"){
               
                moduleClickChild.innerHTML=`
                
                  <linearGradient id="gradcir${id}" cx="${gradient.orientation?gradient.orientation.x:0}%" cy="${gradient.orientation?gradient.orientation.y:0}%" r="${gradient.orientation?gradient.orientation.fill:100}%">
                  ${stop}
                  </linearGradient>
                  <circle
                  stroke="url(#gradcir${id})"
                  style='
                  stroke-width:${widestroke?(strokewidth*2):strokewidth}px;
                  cy:${width / 2};
                  cx:${width / 2};
                  r:${width / 2 - strokewidth};
                  fill:transparent;
                  stroke-dashoffset:0;
                  stroke-dasharray: ${(percent * ((rangevalue * width) / 2)) / 100} ${
                          ((100 - percent) * ((rangevalue * width) / 2)) / 100
                        };
                  stroke-linecap:${rounded ? "round" : "none"};
                  '
                  ></circle>
               
                `}
                 //end of code for linear gradient
  
             //code below for radial gradient
              if(gradient.type=="radial-gradient"){
               
              moduleClickChild.innerHTML=`
              
                <radialGradient id="gradcir2${id}" cx="${gradient.orientation?gradient.orientation.x:0}%" cy="${gradient.orientation?gradient.orientation.y:0}%" r="${gradient.orientation?gradient.orientation.fill:100}%">
                ${stop}
                </radialGradient>
                <circle
                stroke="url(#gradcir2${id})"
                style='
                stroke-width:${widestroke?(strokewidth*2):strokewidth}px;
                cy:${width / 2};
                cx:${width / 2};
                r:${width / 2 - strokewidth};
                fill:transparent;
                stroke-dashoffset:0;
                stroke-dasharray: ${(percent * ((rangevalue * width) / 2)) / 100} ${
                        ((100 - percent) * ((rangevalue * width) / 2)) / 100
                      };
                stroke-linecap:${rounded ? "round" : "none"};
                '
                ></circle>
             
              `
                    }
           //end of code for radial gradient
              }
            // end of code for gradient  
      
          
      }
     
    },
  
    
  
  
  
  
    semicircle: function ({
      id,
      color,
      width,
      strokewidth,
      percent,
      rounded,
      fontsize,
      textcolor,
      textbold,
      indicator,
      track,
      trackcolor,
      trackfit,
      widetrack,
      dashed,
      unit,
      balltip,
      arrowtip,
      fillbackground,
      breakcolor,
      boxshadow,
      widestroke,
      gradient,
      dashtrack,
      extratext,
      extratextcolor,
    }) {
      //code for error
      if (percent > 100) {
        console.log("percent cannot be greater than 100");
      }
  
      if (document.getElementById(id)) {
  
        const moduleClick = document.getElementById(id);
        const moduleClickChild = moduleClick.children[0];
        const moduleClickChildNext = moduleClick.children[0].children[0];
        fillbackground ? (dashed = false) : (dashed = dashed);
        unit ? (unit = unit) : (unit = "%");
        width ? (width = width) : (width = 200);
        color ? (color = color) : (color = "black");
        trackfit ? (track = false) : (track = track);
        dashed ? (track = false) : (track = track);
        balltip || arrowtip ? strokewidth<width*0.04?strokewidth=width*0.045:strokewidth=strokewidth : (strokewidth = strokewidth);
        let rangevalue=5.8;
        widestroke?rangevalue=(rangevalue*0.99):rangevalue=5.8
  
        for (let i = 0; i < moduleClick.children.length; i++) {
          if (moduleClick.children[i].tagName === "SPAN") {
            moduleClick.children[i].remove();
          }
        } //code below is to display indicator in center
  
        for (let i = 0; i < moduleClick.children.length; i++) {
          if (moduleClick.children[i].tagName === "SPAN") {
            moduleClick.children[i].remove();
          }
        } //code below is to display indicator in center
  
        for (let i = 0; i < moduleClick.children.length; i++) {
          if (moduleClick.children[i].tagName === "SPAN") {
            moduleClick.children[i].remove();
          }
        }
         //code below is to display indicator in center
        // code to adjust the strokewide based on the width
  
        if (strokewidth) {
          if (strokewidth < width * 0.04) {
            strokewidth = strokewidth;
          } else {
            strokewidth = width * 0.04;
          }
        } // end of code to adjust the strokewide based on the width
  
        const rollerIndicatorSemi = document.createElement("span");
        rollerIndicatorSemi.classList.add("rollerindicator_div");
        const extratextaddSemi = document.createElement("span");
    
        rollerIndicatorSemi.innerHTML = `${percent}${unit}`; //code to show the percent in number
        moduleClick.appendChild(rollerIndicatorSemi);
  
    
  
        rollerIndicatorSemi.style.cssText = `position:absolute;top:calc(25% - ${
          fontsize / 2
        }px);
     left:calc(0% + ${strokewidth*4}px);
     text-align:center;
     width:${width - (strokewidth*8)}px;
     height:${fontsize}px;
     display:${indicator == true ? "inline-flex" : "none"};
     justify-content:center;
     align-items:center;
     font-weight:${textbold ? textbold : 300};
     color:${textcolor ? textcolor : "black"};
     font-size:${fontsize}px;
     `; //end of code to show the percent in number
       
      if(extratext){
        extratextaddSemi.classList.add("extratext_div");
        extratextaddSemi.style.cssText = `position:absolute;top:calc(25% + ${
          fontsize/2
        }px);
          left:${strokewidth*4}px;
          text-align:center;
          display:block;
          width:${width-(strokewidth*8)}px;text-align:center;
          height:${fontsize}px;line-height:12.5px;
          display:${indicator == true ? "inline-block" : "none"};
          justify-content:center;padding-top:2%;
          align-items:center;
          font-weight:${textbold ? textbold : 300};
          color:${extratextcolor ? extratextcolor : textcolor};
          font-size:${fontsize/1.85}px;
          `; //end of code to show the percent in number
          extratextaddSemi.innerHTML=extratext
        moduleClick.appendChild(extratextaddSemi)
      }
  
        if (track && track == true) {
          //code for track which the stroke move along
          const trackdivSemi = document.createElement("span");
          const rangetrackSemi = document.createElement("span");
          trackdivSemi.appendChild(rangetrack);
          moduleClick.appendChild(trackdiv);
          trackdivSemi.style.cssText = `position:absolute;top:0;left:0;width:100%;height:100%;
      display:block !important;
      `;
          rangetrackSemi.style.cssText = `position:absolute;
     width:calc(100% - ${strokewidth * 2}px);
     height:calc(100% - ${strokewidth * 2}px);
     border:${strokewidth + 1}px solid ${
            trackcolor ? trackcolor : "rgba(0,0,0,0.07)"
          };
     top:${strokewidth}px;left:${strokewidth}px;
     border-radius:50%;
     display:${track ? "inline-block" : "none"};
     z-index:-1
     `;
        } //end of code for track which the stroke move along
        //code below for dashed and trackfit
  
        if (dashed && dashed == true && moduleClick.children.length < 5) {
          let widewidth;
          widetrack
            ? (widewidth = strokewidth * 2)
            : (widewidth = strokewidth + 1);
          let svgSemi = document.createElement("span");
          svgSemi.classList.add("roller_rx_range_rx");
          svgSemi.style.cssText = `width:${width}px;
          height:${width}px;
          position:absolute;top:0;left:0;`;
                svgSemi.innerHTML = `<svg width=${width}px height=${width}px>
          <circle cy=${width / 2} cx=${width / 2} 
          r=${width / 2 - strokewidth} 
          fill='transparent'
          style='
          stroke-width:${widewidth+1}px;
          stroke:${breakcolor};
          stroke-dashoffset:0 0;
          stroke-dasharray:${dashtrack?dashtrack:"5 15"};
          stroke-linecap:none;
          '
          />
          </svg>`;
          moduleClick.appendChild(svgSemi);
        }
  
        if (trackfit && trackfit == true && moduleClick.children.length < 5) {
          let widewidth;
          widetrack ? (widewidth = strokewidth * 2) : (widewidth = strokewidth);
          let svg = document.createElement("span");
          svg.classList.add("roller_rx_range_rx2");
          svg.style.cssText = `width:${width}px;
          height:${width}px;transform:rotateZ(-90deg);
          position:absolute;top:0;left:0;z-index:-1`;
                svg.innerHTML = `<svg width=${width}px height=${width}px>
          <circle cy=${width / 2} cx=${width / 2} 
          r=${width / 2 - strokewidth} 
          fill='transparent'
          style='
          stroke-width:${widewidth}px;
          stroke:${
            trackcolor ? trackcolor : "rgba(0,0,0,0.07)"
          };
          stroke-linecap:${rounded ? "round" : "none"};
          '
          />
          </svg>`;
          moduleClick.appendChild(svg);
        } //end of code for dashed and trackfit
  
        if (width) {
          moduleClick.style.cssText = `width:${width}px;
     height:${width}px;position:relative;
     `;
  
          if (fillbackground && fillbackground != "") {
            moduleClick.style.cssText = `${moduleClick.style.cssText};background:${fillbackground};
         border-radius:50%;
       `;
            dashed = false;
          } //code below for balltip
  
          if (balltip && balltip == true) {
            let ball = document.createElement("span");
            let tip = document.createElement("span");
            ball.style.cssText = `
               position:absolute;top:0;left:0;
               width:100%;height:100%;
               border-radius:50%;
               display:block;
               z-index:100;
               transform:rotateZ(${((percent / 100) * 180)-90-(width*0.035)+(strokewidth/3)}deg)  
             `;
            tip.style.cssText = `
               position:absolute;top:0.5px;
               left:50%;width:${strokewidth * 2}px;
               height:${strokewidth * 2}px;
               border-radius:inherit;
               background:${color};
             `;
            ball.appendChild(tip);
            moduleClick.appendChild(ball);
          } //end of code for balltip
  
  
            //code below for arrowtip
        
            if (arrowtip && arrowtip == true) {
              let ballbox = document.createElement("span");
              let tipbox = document.createElement("span");
              ballbox.style.cssText = `
              position:absolute;top:0;left:0;
              width:100%;height:100%;
              border-radius:50%;
              display:block;
              transform:rotateZ(${((percent / 100) * 180)-90-(width*0.03)+strokewidth/2.3}deg)  
            `;
              tipbox.style.cssText = `
              position:absolute;top:${-strokewidth/2}px;
              left:calc(50% + 2px);width:${strokewidth*3}px;
              height:${strokewidth*3}px;
              display:inline-block;
            background:${color};
            clip-path:polygon(0 0, 0 100%, 60% 50%);
          border-radius:50px
            `;
              ballbox.appendChild(tipbox);
              moduleClick.appendChild(ballbox);
            } //end of code for arrowtip
      //end of code for arrowtip
  
     
  
          moduleClickChild.style.cssText = `width:${width}px;
     height:${width}px;transform:rotateZ(0deg);z-index:20 !important;
     
     `;
          moduleClickChildNext.style.cssText = `
          stroke:${color ? color : "black"};
     stroke-width:${widestroke?(strokewidth*2)-1:strokewidth}px;
     cy:${width / 2};
     cx:${width / 2};
     r:${width / 2 - strokewidth};
     fill:transparent;
     stroke-dashoffset:0;
     stroke-dasharray: ${(percent*(percent>99?1:0.49+(strokewidth*0.0005)) * (((rangevalue) * width) / 2)) / 100} ${
      ((100 - percent*0.5) * (((rangevalue) * width) / 2)) / 100
        };
     stroke-linecap:${rounded ? "round" : "none"};
     animation:2s infinite linear svgroller
     `;
        } 
         
  
  
        //code for box shadow
          if(boxshadow && boxshadow.lastIndexOf(" ")){ 
         let shadow= document.createElement("span")
         let shadowinner= document.createElement("span")
            shadow.style.cssText=`
               width:100%;height:100%;
               border-radius:50%;
               position:absolute;top:0;left:0;
            `
            shadowinner.style.cssText=`
            position:absolute;top:${strokewidth*2}px;
            left:${strokewidth*2}px;width:calc(100% - ${4*strokewidth}px);
            height:calc(100% - ${4*strokewidth}px);
            border-radius:inherit;
            box-shadow: 2px 4px 10px rgba(0,0,0,${boxshadow.substring(0,boxshadow.lastIndexOf(" "))}),
         -2px -4px 10px rgba(0,0,0,${boxshadow.substring(0,boxshadow.lastIndexOf(" "))}),
         inset -2px -4px 10px rgba(0,0,0,${boxshadow.substring(boxshadow.lastIndexOf(" "),boxshadow.length)}),
        inset 2px 4px 10px rgba(0,0,0,${boxshadow.substring(boxshadow.lastIndexOf(" "),boxshadow.length)});
            `
            shadow.appendChild(shadowinner)
          moduleClick.appendChild(shadow)
        moduleClick.style.cssText=`
        ${moduleClick.style.cssText};
        box-shadow:inset 2px 6px 10px rgba(0,0,0,0.15),
        inset -2px -6px 10px rgba(0,0,0,0.15);
        border-radius:50%;
        `
          }
            //end of code for box shadow
  
            //code for gradient
              if(gradient){
                 let stop=""
                    if(gradient.colors){
                    for(let i=0;i<gradient.colors.length;i++){
                      stop=`${stop}  <stop
                      offset="${gradient.colors[i].substring(gradient.colors[i].lastIndexOf(" "),gradient.colors[i].length)}" style="stop-color:${gradient.colors[i].substring(0,gradient.colors[i].lastIndexOf(" "))}; stop-opacity:1"
                    ></stop>`
                    }
                  }
           
                  //code below for linear gradient 
                if(gradient.type=="linear-gradient"){
                  
                moduleClickChild.innerHTML=`
                
                  <linearGradient id='grad${id}' cx="${gradient.orientation?gradient.orientation.x:0}%" cy="${gradient.orientation?gradient.orientation.y:0}%" r="${gradient.orientation?gradient.orientation.fill:100}%">
                  ${stop}
                  </linearGradient>
                  <circle
                  stroke="url(#grad${id})"
                  style='
                  stroke-width:${widestroke?(strokewidth*2):strokewidth}px;
                  cy:${width / 2};
                  cx:${width / 2};
                  r:${width / 2 - strokewidth};
                  fill:transparent;
                  stroke-dashoffset:0;
                  stroke-dasharray: ${(percent*(percent>99?1:0.49+(strokewidth*0.0005)) * (((rangevalue) * width) / 2)) / 100} ${
                    ((100 - percent*0.5) * (((rangevalue) * width) / 2)) / 100
                      };
                  stroke-linecap:${rounded ? "round" : "none"};
                  '
                  ></circle>
               
                `}
                 //end of code for linear gradient
  
             //code below for radial gradient
              if(gradient.type=="radial-gradient"){
               
              moduleClickChild.innerHTML=`
              
                <radialGradient id="grad2${id}" cx="${gradient.orientation?gradient.orientation.x:0}%" cy="${gradient.orientation?gradient.orientation.y:0}%" r="${gradient.orientation?gradient.orientation.fill:100}%">
                ${stop}
                </radialGradient>
                <circle
                stroke="url(#grad2${id})"
                style='
                stroke-width:${widestroke?(strokewidth*2):strokewidth}px;
                cy:${width / 2};
                cx:${width / 2};
                r:${width / 2 - strokewidth};
                fill:transparent;
                stroke-dashoffset:0;
                stroke-dasharray: ${(percent*(percent>99?1:0.49+(strokewidth*0.0005)) * (((rangevalue) * width) / 2)) / 100} ${
                  ((100 - percent*0.5) * (((rangevalue) * width) / 2)) / 100
                    };
                stroke-linecap:${rounded ? "round" : "none"};
                '
                ></circle>
             
              `
                    }
           //end of code for radial gradient
              }
            // end of code for gradient  
          moduleClickChild.style.cssText=`
          ${moduleClickChild.style.cssText};transform:rotateZ(-180deg)
          `
          moduleClick.style.cssText=`
          ${moduleClick.style.cssText};height:${(width)-1}px;overflow-y:hidden;
          overflow-x:hidden;
          clip-path: polygon(49% 0%, 100% 0, 100% 49%, 68% 49%, 23% 49%, 0 49%, 0 0);
          `
          
      }
     
    },
  
    
    //the code below is for line svg
  
  
  
    line: function ({
      id,
      color,
      width,
      strokewidth,
      percent,
      animate,
      indicator,
      roundrange,
      trackcolor,
      textcolor,
      lineborder,
      boxshadow
    }) {
      //code for error
      if (percent > 100) {
        console.log("percent cannot ne greater than 100");
      }
  
      if (document.getElementById(id)) {
        const moduleClickLine = document.getElementById(id);
  
        if (moduleClickLine.children.length > 0) {
          for (let h = 0; h < moduleClickLine.children.length; h++) {
            moduleClickLine.children[h].remove();
          }
        }
  
        strokewidth ? (strokewidth = strokewidth) : (strokewidth = 1);
        width ? (width = width) : (width = 200);
        color ? (color = color) : (color = "black");
        trackcolor ? (trackcolor = trackcolor) : (trackcolor = "rgba(0,0,0,0.1)");
        textcolor ? (textcolor = textcolor) : (textcolor = "black");
        animate ? (roundrange = false) : (roundrange = roundrange);
  
        if (moduleClickLine.children.length > 0) {
          for (let h = 0; h < moduleClickLine.children.length; h++) {
            moduleClickLine.children[h].remove();
          }
        } //code below is to create new elwment
  
        let moduleClickChildLine = document.createElement("div");
        let moduleClickChildNextLine = document.createElement("span");
  
        if (width) {
          moduleClickChildLine.appendChild(moduleClickChildNextLine);
          moduleClickLine.appendChild(moduleClickChildLine);
  
          if (indicator && indicator == true && animate == false) {
            let rx_indicate = document.createElement("span");
            moduleClickLine.appendChild(rx_indicate);
            rx_indicate.innerHTML = `${percent}`;
            rx_indicate.style.cssText = `position:absolute;
         bottom:calc(100% - ${0}px);
         left:${percent}%;margin:0 !important;
         padding:0;
         border-radius:50px 50px 50px 0px;
         background:${color};
         color:${textcolor};
         display:inline-block;padding:7px;
         font-size:12px;font-weight:300;
         font-family:arial;
         `;
          }
  
          moduleClickLine.style.cssText = `width:${width} !important;position:relative; padding:0.4em 0.5em;border-radius:${roundrange};display:block`;
          moduleClickChildLine.style.cssText = `width:100%;
     height:${strokewidth}px;position:relative;background:${trackcolor};
     overflow:hidden !important;
     border-radius:${roundrange}
     `;
          moduleClickChildNextLine.style.cssText = `width:${percent}%;
     height:${strokewidth}px;background:${color};width:${percent}%;
     display:block;
     border-radius:inherit
     `;
  
  
        } //begin for code to animate
  
        if (animate && animate == true) {
          moduleClickChildNextLine.style.cssText = `${moduleClickChildNextLine.style.cssText}; width:30%`;
          moduleClickChildNextLine.classList.add("rx_liner");
        } //end of code to animate
        
           //code for lineborder
      if(lineborder && lineborder==true){
        moduleClickLine.style.cssText=`${moduleClickLine.style.cssText} border:${strokewidth/2}px solid ${color};
       `
      }
      //end of code for lineborder
  
       //code for box shadow
       if(boxshadow && boxshadow.lastIndexOf(" ")){ 
       
       moduleClickLine.style.cssText=`
       ${moduleClickLine.style.cssText};  
       box-shadow:inset 2px 4px 5px rgba(0,0,0,0.2),
       inset -2px -4px 5px rgba(0,0,0,0.2);
       `  
       moduleClickChildLine.style.cssText=`
       ${moduleClickChildLine.style.cssText}; 
       box-shadow:inset 2px 3px 4px rgba(0,0,0,${boxshadow.substring(boxshadow.lastIndexOf(" "),boxshadow.length)}),
       inset -2px -3px 4px rgba(0,0,0,${boxshadow.substring(boxshadow.lastIndexOf(" "),boxshadow.length)});
       ` }
       
           //end of code for box shadow
           
  
      }
    },
    roller: function ({
      id,
      color,
      width,
      strokewidth,
      percent,
      rounded,
      ratio,
      track
    }) {
      if (document.getElementById(id)) {
        const moduleClick = document.getElementById(id);
        const moduleClickChild = document.getElementById(id).children[0];
        const moduleClickChildNext =
          document.getElementById(id).children[0].children[0];
        width ? (width = width) : (width = 200);
        color ? (color = color) : (color = "black"); //code below for dashed and trackfit
  
        if (track && track === true) {
          let svg = document.createElement("div");
          svg.style.cssText = `width:${width}px;
    height:${width}px;transform:rotateZ(-90deg);
    position:absolute;top:0;left:0;z-index:-1`;
          svg.innerHTML = `<svg width=${width}px height=${width}px>
    <circle cy=${width / 2} cx=${width / 2} 
    r=${width / 2 - strokewidth} 
    fill='transparent'
    style='
    stroke-width:${strokewidth + 0.5}px;
    stroke:rgba(235,235,235,1);
    stroke-linecap:${rounded ? "round" : "none"};
    '
    />
    </svg>`;
          moduleClick.appendChild(svg); //end of code for dashed and trackfit
        }
  
        if (width) {
          moduleClick.style.cssText = `width:${width}px;
    height:${width}px;position:relative;
    
    `;
          moduleClickChild.style.cssText = `width:${width}px;
    height:${width}px;transform:rotateZ(-90deg);z-index:20 !important;
    `;
          moduleClickChildNext.style.cssText = `stroke:${color ? color : "black"};
    stroke-width:${strokewidth}px;
    cy:${width / 2};
    cx:${width / 2};
    r:${width / 2 - strokewidth};
    fill:transparent;
    stroke-dashoffset:0;
    stroke-dasharray: ${(percent * ((ratio * width) / 2)) / 100} ${
            ((100 - percent) * ((ratio * 2 * width) / 2)) / 100
          };
    stroke-linecap:${rounded ? "round" : "none"};
    animation:2s infinite linear svgroller
    `;
        }
  
        setTimeout(() => {
          moduleClickChild.style.cssText = `${moduleClickChild.style.cssText} transition:2s;transform:rotateZ(1440deg)`;
        }, 10);
        setInterval(() => {
          moduleClickChild.style.cssText = `${moduleClickChild.style.cssText} transition:1.6s;transform:rotateZ(720deg)`;
          setTimeout(() => {
            moduleClickChild.style.cssText = `${moduleClickChild.style.cssText} transition:linear 0s; transform:rotateZ(0deg)`;
          }, 1450);
        }, 1500);
      }
    },
  
  
    point: function ({
      id,
      pointcount,
      color,
      background,
      fillpoint,
      activecolor,
      titles,
      pointwidth,
      fontsize,
      pointtextlabel,
      disabledcolor
    }) 
    {
      if(document.getElementById(id) && titles.length==pointcount) {
  
        const moduleClickPoint = document.getElementById(id);
        pointcount?pointcount=pointcount:pointcount=1;
        color?color=color:color="white";
        background?background=background:background="darkblue";
        fillpoint?fillpoint=fillpoint:fillpoint=1;
    
            for(let p=0;p<moduleClickPoint.children.length;p++){
              moduleClickPoint.children[p].remove()
            };
            for(let p=0;p<moduleClickPoint.children.length;p++){
              moduleClickPoint.children[p].remove()
            };
            for(let p=0;p<moduleClickPoint.children.length;p++){
              moduleClickPoint.children[p].remove()
            };
          
    
            for(let i=0;i<pointcount;i++){
              let pointbox=document.createElement("div");
                let pointnumber=document.createElement("span");
                  let pointindicate=document.createElement("span");
                  let pointtext=document.createElement("span");
                    pointnumber.innerHTML= pointtextlabel=="number"?i+1:"&#10003;";
                    pointnumber.style.cssText=`
                      font-style:normal;width:${pointwidth}px;height:${pointwidth}px;
                      background:transparent;
                      color:${disabledcolor};display:flex;
                      border-radius:50%;
                      justify-content:center;
                      align-items:center;font-weight:700;
                      border:3px solid ${disabledcolor};
                      z-index:2;font-size:${fontsize}px
                    `
                    pointnumber.classList.add("point_number")
                    pointindicate.style.cssText=`
                   z-index:1;width:calc(100% - ${pointwidth}px);
                   height:4px;display:block;background: ${disabledcolor}; 
                  `
                  pointindicate.classList.add("point_indicate")
                pointbox.style.cssText=`
                  width:${100/pointcount}%;display:flex;
                  justify-content:right;
                  align-items:center;position:relative;
                `
               if(i>0){
                  pointbox.appendChild(pointindicate)
                  }
                  else{
                    pointbox.style.cssText=`${pointbox.style.cssText} width:auto`
                  }
            
  
                    if(titles){
                
                      pointtext.innerHTML=titles[i]
                        pointtext.style.cssText=`
                          position:absolute;width:100%;
                          text-align:right;background:transparent;
                          left:0;color:${disabledcolor};font-weight:500;
                          top:-90%;font-size:${fontsize}px
                        `
                        pointbox.appendChild(pointtext)
                    
                    } 
  
             
                    pointbox.appendChild(pointnumber);
              moduleClickPoint.appendChild(pointbox)
         
            }
  
             //code below is to indicate the moved progress point
         for(let j=0;j<pointcount;j++){
          if(j<fillpoint){
            moduleClickPoint.children[j].children[0].classList.add("point_filled_box")
            moduleClickPoint.children[j].children[0].style.cssText=`${moduleClickPoint.children[j].children[0].style.cssText};
            background:${background};
            border:none ;
            `
            moduleClickPoint.children[j].children[1].style.cssText=`${moduleClickPoint.children[j].children[1].style.cssText};
            background:transparent;color:${background};
                `          
                if(moduleClickPoint.children[j].children.length<3){
                  moduleClickPoint.children[j].children[1].style.cssText=`${moduleClickPoint.children[j].children[1].style.cssText};
            background:${background};color:${activecolor};
            border:none
                `
                moduleClickPoint.children[j].children[0].style.cssText=`${moduleClickPoint.children[j].children[0].style.cssText};
                background:transparent;color:${background};
                    `               
                }
               if(moduleClickPoint.children[j].children[2]){
                moduleClickPoint.children[j].children[2].style.cssText=`${moduleClickPoint.children[j].children[2].style.cssText};
                background:${background};color:${activecolor};
                border:none ;
                `
              }
             
          }
         
        }
         
             
          moduleClickPoint.style.cssText=`
            display:flex;width:100%;justify-content:center
          `
      }
    },
      
  
    piechart:function({
      id,
      width,
      strokewidth,
      piecolor,
      pierange,
      strokepattern,
      strokepatternbackground,
      stroketitle,
      pielabel
      })
      {
  
        let moduleClickPie=document.getElementById(id)
           if(moduleClickPie){ 
      
              for (let i = 0; i < moduleClickPie.children.length; i++) {
              if (moduleClickPie.children[i].tagName === "SPAN") {
                moduleClickPie.children[i].remove();
              }
            } //code below is to display indicator in center
  
            for (let i = 0; i < moduleClickPie.children.length; i++) {
              if (moduleClickPie.children[i].tagName === "SPAN") {
                moduleClickPie.children[i].remove();
              }
            } //code below is to display indicator in center
            for (let i = 0; i < moduleClickPie.children.length; i++) {
              if (moduleClickPie.children[i].tagName === "SPAN") {
                moduleClickPie.children[i].remove();
              }
            } //code below is to display indicator in center
  
      
    
         let percent=0;
  
         var sum = pierange.reduce(function(a, b){
              return a + b;
          }, 0);
          
           pierange = pierange.map( value => ((value/sum)*100))
       
    for(let p=0;p<(pierange.length);p++){
     let ratio=1-(strokewidth/width)
        if(strokewidth>=(width*.1) && strokewidth<(width*.2)){
          ratio=0.9-(strokewidth/width)
        }
         else if(strokewidth>=(width*.2) && strokewidth<(width*.25)){
          ratio=0.79-((strokewidth-1)/width)
        }
        else if(strokewidth>=(width*.25) && strokewidth<=(width*.3)){
          ratio=0.73-((strokewidth-2)/width)
        }
        else if(strokewidth>(width*.3) && strokewidth<(width*.35)){
          ratio=0.69-((strokewidth-3)/width)
        }
        else if(strokewidth>=(width*.35) && strokewidth<(width*.36)){
          ratio=0.64-((strokewidth-3)/width)
          console.warn("you have exceeeded to the negative value and not accepted. iNPUT A VALUE LESS THAN O.35% OF THE WIDTH")
        }
        else if(strokewidth>=(width*.36)){
          ratio=0
          console.warn("you have exceeeded to the negative value and not accepted. iNPUT A VALUE LESS THAN O.35% OF THE WIDTH")
        }
        let patternwidth
          if(strokepattern){
             patternwidth = strokepattern[p]>strokewidth?strokewidth:strokepattern[p]
          }
          else{
            patternwidth=strokewidth
          }
           
  
        percent=percent+pierange[p];
      let svgPie = document.createElement("span"); 
      svgPie.classList.add("stroke_svg_color")   
      svgPie.style.cssText = `width:${width}px;
      height:${width}px;z-index:${pierange.length-p};
      position:absolute;top:0;left:0;`;
       
  
            svgPie.innerHTML = `
            <svg  title=${stroketitle[p]} width=${width}px height=${width}px style="z-index:1">
             
            <circle  cy=${width / 2} cx=${width / 2} 
              r=${width / 2 - strokewidth} 
              fill='transparent'
              style='
              stroke-width:${patternwidth+1}px;
              stroke:${piecolor[p]};
              stroke-dashoffset:0 0;
              stroke-dasharray: ${(percent * (((5.8*ratio) * width) / 2)) / 100} ${
                ((100 - percent) * ( (((5.8*ratio) * width)-3) / 2)) / 100
              };
              stroke-linecap:none;
              '
              />
              </svg>
     
      
    ${strokepattern?`
      <svg width=${width}px height=${width}px style="position:absolute;top:0;left:0;z-index:-2">
      <circle cy=${width / 2} cx=${width / 2} 
      r=${width / 2 - strokewidth} 
      fill='transparent'
      style='
      stroke-width:${strokewidth+2}px;
      stroke:${strokepatternbackground};
      stroke-dashoffset:0 0;
      stroke-dasharray: ${(percent * (((5.8*ratio) * width) / 2)) / 100} ${
        ((100 - percent) * ( (((5.8*ratio) * width)-3) / 2)) / 100
      };
      stroke-linecap:none;
      '
      />
      </svg>
     `:''}
      `;
          
    
      moduleClickPie.appendChild(svgPie);
  
      }
     
      let textdiv=document.createElement("span")
        textdiv.classList.add("piechart_details")
           textdiv.style.cssText=`
              position:absolute;top:${strokewidth/2}px ;left:${width-(strokewidth/3)}px;background:white;
              width:150px;z-index:${pierange.length+2};transform:scale(0);transform-origin:0 0;
              border-radius:5px;display:block;transition:0.2s
           `
    if(pielabel && pielabel==true){  
      for(let i=0;i<pierange.length;i++){
         let contain=document.createElement("span");
           contain.style.cssText=`
             display:flex;width:138px;background:transparent;border-radius:5px;
             margin:0.1em;padding:0.2em 0.1em;justify-content:center;
             align-items:center;box-shadow:1px 2px 3px rgba(0,0,0,0.07),
             -1px -2px 3px rgba(0,0,0,0.07);
           `
          
             contain.innerHTML=`
               <span style='display:inline-block;border-radius:3px;width:10%;height:20px;padding-left:3px;background:${piecolor[i]}'></span>
                 <span style='display:inline-block;width:70%;background:;padding:0 0.2em;font-weight:600;
                 font-size:12px;color:rgba(0,0,0,0.5)'>${stroketitle[i].length>13?stroketitle[i].substring(0,12)+"..":stroketitle[i]}</span>
               <span style='display:inline-block;width:20%;font-size:13px;font-weight:600;text-align:right;padding-right:0.2em'>${pierange[i]}</span>
             `
  
           textdiv.appendChild(contain)
      }
  
   moduleClickPie.appendChild(textdiv)
        }
        //end of code for pielabel
          
        moduleClickPie.onmouseenter=function(e){
      
          textdiv.style.transform="scale(1)";
           let x_cursor=e.clientX
        let right_dist=e.target.parentElement.getBoundingClientRect().right-e.target.parentElement.clientWidth/2
        textdiv.style.transform="scale(1)";
     
     if(x_cursor>right_dist){
      textdiv.style.cssText=`${textdiv.style.cssText};left:${width-(strokewidth/3)}px;top:${strokewidth/2}px`
     }
     else if(x_cursor<right_dist){
      textdiv.style.cssText=`${textdiv.style.cssText};left:-120px;top:${strokewidth/2}px`
     }
     if(screen.width<426){
      textdiv.style.cssText=`${textdiv.style.cssText};left:30px;top:${width-(strokewidth/3)}px;`
     }
     
        }
      moduleClickPie.onmouseleave=function(){
        setTimeout(()=>{
          textdiv.style.transform="scale(0)"
        },300)
      }
  
   
   moduleClickPie.style.cssText=`width:${width}px;height:${width}px;position:relative !important`
  
    }
  
  },
  //end of code for piechart
  
  linechart: function ({
    id,
    linerchartrange,
    width,
    strokewidth,
    background,
    linerchartcolor,
    lineprop,
    boxshadow,
    roundrange,
  }) {
   
  
    if (document.getElementById(id)) {
      const moduleClicklinechart = document.getElementById(id);
        moduleClicklinechart.style.cssText=`
          width:${width};height:${strokewidth}px;
         border-radius:${roundrange} 
        `
        let liners=document.createElement("span")
          liners.style.cssText=`
             display:flex;width:100%;height:${strokewidth}px;
             background:${background?background:"rgba(0,0,0,0.1)"};
             border-radius:${roundrange};
             box-shadow:inset 3px 5px 6px rgba(0,0,0,${boxshadow?boxshadow.substring(0,boxshadow.lastIndexOf(" ")):'0'}),
                inset -3px -5px 6px rgba(0,0,0,${boxshadow?boxshadow.substring(0,boxshadow.lastIndexOf(" ")):'0'});
          `
        
       if(linerchartrange){
          for(let i=0;i<linerchartrange.length;i++){
            let linerange=document.createElement("span")
               let linetitle=document.createElement("span")
                 linetitle.innerHTML=`<span style='font-size:13px;font-weight:600'>${linerchartrange[i]}</span>
                 <span style="display:block;font-size:10px;font-weight:700;color:rgb(140,140,140)">${lineprop[i].length>8?lineprop[i].substring(0,7)+"..":lineprop[i]}</span>
                 `
                   linetitle.style.cssText=`
                     position:absolute;width:60px;background:rgb(240,240,240);
                     display:block;top:100%;padding:0.8em 0.2em 0.4em 0.2em;line-height:16px;
                     left:calc(50% - 30px);text-align:center;transform:scale(0);
                     transform-origin:0 0;transition:0.3s;border-radius:${roundrange};
                     clip-path: polygon(0 20%, 25% 20%, 50% 0, 69% 20%, 100% 20%, 100% 100%, 0 100%);
                   `
              linerange.style.cssText=`
                width:${linerchartrange[i]}%;height:${strokewidth}px;
                background:${linerchartcolor[i]};display:inline-block;
                position:relative;box-shadow:inset 3px 5px 6px rgba(0,0,0,${boxshadow?boxshadow.substring(boxshadow.lastIndexOf(" "),boxshadow.length):'0'}),
                inset -3px -5px 6px rgba(0,0,0,${boxshadow?boxshadow.substring(boxshadow.lastIndexOf(" "),boxshadow.length):'0'});border-radius:${roundrange}
              `
              linerange.appendChild(linetitle)
              liners.appendChild(linerange)
          
              linerange.onmouseenter=function(){
                linetitle.style.cssText=`${linetitle.style.cssText};transform:scale(1)`
              }
              linerange.onmouseleave=function(){
                linetitle.style.cssText=`${linetitle.style.cssText};transform:scale(0)`
              }
          }
        }
       moduleClicklinechart.appendChild(liners)
    }
  
  },
  
  //code for 2/3 circular progress bar
  
   
  quatercircle: function ({
    id,
    color,
    width,
    strokewidth,
    percent,
    rounded,
    fontsize,
    textcolor,
    textbold,
    indicator,
    track,
    trackcolor,
    trackfit,
    widetrack,
    dashed,
    unit,
    balltip,
    arrowtip,
    fillbackground,
    breakcolor,
    boxshadow,
    widestroke,
    gradient,
    dashtrack,
    extratext,
    extratextcolor,
  }) {
    //code for error
    if (percent > 100) {
      console.log("percent cannot be greater than 100");
    }
  
    if (document.getElementById(id)) {
  
      const moduleClick = document.getElementById(id);
      const moduleClickChild = moduleClick.children[0];
      const moduleClickChildNext = moduleClick.children[0].children[0];
      fillbackground ? (dashed = false) : (dashed = dashed);
      unit ? (unit = unit) : (unit = "%");
      width ? (width = width) : (width = 200);
      color ? (color = color) : (color = "black");
      trackfit ? (track = false) : (track = track);
      dashed ? (track = false) : (track = track);
      balltip || arrowtip ? strokewidth<width*0.04?strokewidth=width*0.045:strokewidth=strokewidth : (strokewidth = strokewidth);
      let rangevalue=5.8;
      widestroke?rangevalue=(rangevalue*0.99):rangevalue=5.8
  
      for (let i = 0; i < moduleClick.children.length; i++) {
        if (moduleClick.children[i].tagName === "SPAN") {
          moduleClick.children[i].remove();
        }
      } //code below is to display indicator in center
  
      for (let i = 0; i < moduleClick.children.length; i++) {
        if (moduleClick.children[i].tagName === "SPAN") {
          moduleClick.children[i].remove();
        }
      } //code below is to display indicator in center
  
      for (let i = 0; i < moduleClick.children.length; i++) {
        if (moduleClick.children[i].tagName === "SPAN") {
          moduleClick.children[i].remove();
        }
      }
       //code below is to display indicator in center
      // code to adjust the strokewide based on the width
  
      if (strokewidth) {
        if (strokewidth < width * 0.05) {
          strokewidth = strokewidth;
        } else {
          strokewidth = width * 0.05;
        }
      } // end of code to adjust the strokewide based on the width
  
      const rollerIndicatorSemi = document.createElement("span");
      rollerIndicatorSemi.classList.add("rollerindicator_div");
      const extratextaddSemi = document.createElement("span");
  
      rollerIndicatorSemi.innerHTML = `${percent}${unit}`; //code to show the percent in number
      moduleClick.appendChild(rollerIndicatorSemi);
  
      rollerIndicatorSemi.style.cssText = `position:absolute;top:calc(35% - ${
        fontsize / 2
      }px);
   left:calc(0% + ${strokewidth*3.5}px);
   text-align:center;
   width:${width - (strokewidth*7)}px;
   height:${fontsize}px;
   display:${indicator == true ? "inline-flex" : "none"};
   justify-content:center;
   align-items:center;
   font-weight:${textbold ? textbold : 300};
   color:${textcolor ? textcolor : "black"};
   font-size:${fontsize}px;
   `; //end of code to show the percent in number
     
    if(extratext){
      extratextaddSemi.classList.add("extratext_div");
      extratextaddSemi.style.cssText = `position:absolute;top:calc(35% + ${
        fontsize/2
      }px);
        left:${strokewidth*4}px;
        text-align:center;
        display:block;
        width:${width-(strokewidth*8)}px;text-align:center;
        height:${fontsize}px;line-height:12.5px;
        display:${indicator == true ? "inline-block" : "none"};
        justify-content:center;padding-top:2%;
        align-items:center;
        font-weight:${textbold ? textbold : 300};
        color:${extratextcolor ? extratextcolor : textcolor};
        font-size:${fontsize/1.85}px;
        `; //end of code to show the percent in number
        extratextaddSemi.innerHTML=extratext
      moduleClick.appendChild(extratextaddSemi)
    }
  
      if (track && track == true) {
        //code for track which the stroke move along
        const trackdivSemi = document.createElement("span");
        const rangetrackSemi = document.createElement("span");
        trackdivSemi.appendChild(rangetrack);
        moduleClick.appendChild(trackdiv);
        trackdivSemi.style.cssText = `position:absolute;top:0;left:0;width:100%;height:100%;
    display:block !important;
    `;
        rangetrackSemi.style.cssText = `position:absolute;
   width:calc(100% - ${strokewidth * 2}px);
   height:calc(100% - ${strokewidth * 2}px);
   border:${strokewidth + 1}px solid ${
          trackcolor ? trackcolor : "rgba(0,0,0,0.07)"
        };
   top:${strokewidth}px;left:${strokewidth}px;
   border-radius:50%;
   display:${track ? "inline-block" : "none"};
   z-index:-1
   `;
      } //end of code for track which the stroke move along
      //code below for dashed and trackfit
  
      if (dashed && dashed == true && moduleClick.children.length < 5) {
        let widewidth;
        widetrack
          ? (widewidth = strokewidth * 2)
          : (widewidth = strokewidth + 1);
        let svgSemi = document.createElement("span");
        svgSemi.classList.add("roller_rx_range_rx");
        svgSemi.style.cssText = `width:${width}px;
        height:${width}px;
        position:absolute;top:0;left:0;`;
              svgSemi.innerHTML = `<svg width=${width}px height=${width}px>
        <circle cy=${width / 2} cx=${width / 2} 
        r=${width / 2 - strokewidth} 
        fill='transparent'
        style='
        stroke-width:${widewidth+1}px;
        stroke:${breakcolor};
        stroke-dashoffset:0 0;
        stroke-dasharray:${dashtrack?dashtrack:"5 15"};
        stroke-linecap:none;
        '
        />
        </svg>`;
        moduleClick.appendChild(svgSemi);
      }
  
      if (trackfit && trackfit == true && moduleClick.children.length < 5) {
        let widewidth;
        widetrack ? (widewidth = strokewidth * 2) : (widewidth = strokewidth);
        let svg = document.createElement("span");
        svg.classList.add("roller_rx_range_rx2");
        svg.style.cssText = `width:${width}px;
        height:${width}px;transform:rotateZ(-90deg);
        position:absolute;top:0;left:0;z-index:-1`;
              svg.innerHTML = `<svg width=${width}px height=${width}px>
        <circle cy=${width / 2} cx=${width / 2} 
        r=${width / 2 - strokewidth} 
        fill='transparent'
        style='
        stroke-width:${widewidth}px;
        stroke:${
          trackcolor ? trackcolor : "rgba(0,0,0,0.07)"
        };
        stroke-linecap:${rounded ? "round" : "none"};
        '
        />
        </svg>`;
        moduleClick.appendChild(svg);
      } //end of code for dashed and trackfit
  
      if (width) {
        moduleClick.style.cssText = `width:${width}px;
   height:${width}px;position:relative;
   `;
  
        if (fillbackground && fillbackground != "") {
          moduleClick.style.cssText = `${moduleClick.style.cssText};background:${fillbackground};
       border-radius:50%;
     `;
          dashed = false;
        } //code below for balltip
  
        if (balltip && balltip == true) {
          let ball = document.createElement("span");
          let tip = document.createElement("span");
          ball.style.cssText = `
             position:absolute;top:0;left:0;
             width:100%;height:100%;
             border-radius:50%;
             display:block;
             z-index:100;
             transform:rotateZ(${-((percent*0.75 / 100) * 270)-(strokewidth*0.76)}deg);  
           `;
          tip.style.cssText = `
             position:absolute;top:0.5px;
             left:50%;width:${strokewidth * 2}px;
             height:${strokewidth * 2}px;
             border-radius:inherit;
             background:${color};
           `;
          ball.appendChild(tip);
          moduleClick.appendChild(ball);
        } //end of code for balltip
  
  
          //code below for arrowtip
      
          if (arrowtip && arrowtip == true) {
            let ballbox = document.createElement("span");
            let tipbox = document.createElement("span");
            ballbox.style.cssText = `
            position:absolute;top:1px;left:0;
            width:100%;height:100%;
            border-radius:50%;
            display:block;
            transform:rotateZ(${-((percent*0.75 / 100) * 270)-(strokewidth*0.4)}deg); 
          `;
            tipbox.style.cssText = `
            position:absolute;top:${-strokewidth/2-1}px;
            left:calc(50% + 2px);width:${strokewidth*3}px;
            height:${strokewidth*3}px;
            display:inline-block;
          background:${color};
          clip-path:polygon(0 0, 0 100%, 60% 50%);
        border-radius:50px
          `;
            ballbox.appendChild(tipbox);
            moduleClick.appendChild(ballbox);
          } //end of code for arrowtip
    //end of code for arrowtip
  
   
  
        moduleClickChild.style.cssText = `width:${width}px;
   height:${width}px;transform:rotateZ(0deg);z-index:20 !important;
   
   `;
        moduleClickChildNext.style.cssText = `
        stroke:${color ? color : "black"};
   stroke-width:${widestroke?(strokewidth*2)-1:strokewidth}px;
   cy:${width / 2};
   cx:${width / 2};
   r:${width / 2 - strokewidth};
   fill:transparent;
   stroke-dashoffset:0;
   stroke-dasharray: ${(percent*(percent>99?1:0.75+(strokewidth*0.0025)) * (((rangevalue) * width) / 2)) / 100} ${
    ((100 - percent*0.25) * (((rangevalue) * width) / 2)) / 100
      };
   stroke-linecap:${rounded ? "round" : "none"};
   animation:2s infinite linear svgroller
   `;
      } 
       
  
  
      //code for box shadow
        if(boxshadow && boxshadow.lastIndexOf(" ")){ 
       let shadow= document.createElement("span")
       let shadowinner= document.createElement("span")
          shadow.style.cssText=`
             width:100%;height:100%;
             border-radius:50%;
             position:absolute;top:0;left:0;
             
          `
          shadowinner.style.cssText=`
          position:absolute;top:${strokewidth*2}px;
          left:${strokewidth*2}px;width:calc(100% - ${4*strokewidth}px);
          height:calc(100% - ${4*strokewidth}px);
          border-radius:inherit;
          box-shadow: 2px 4px 10px rgba(0,0,0,${boxshadow.substring(0,boxshadow.lastIndexOf(" "))}),
       -2px -4px 10px rgba(0,0,0,${boxshadow.substring(0,boxshadow.lastIndexOf(" "))}),
       inset -2px -4px 10px rgba(0,0,0,${boxshadow.substring(boxshadow.lastIndexOf(" "),boxshadow.length)}),
      inset 2px 4px 10px rgba(0,0,0,${boxshadow.substring(boxshadow.lastIndexOf(" "),boxshadow.length)});
          `
          shadow.appendChild(shadowinner)
        moduleClick.appendChild(shadow)
      moduleClick.style.cssText=`
      ${moduleClick.style.cssText};
      box-shadow:inset 2px 6px 10px rgba(0,0,0,0.15),
      inset -2px -6px 10px rgba(0,0,0,0.15);
      border-radius:50%;
      `
        }
          //end of code for box shadow
  
          //code for gradient
            if(gradient){
               let stop=""
                  if(gradient.colors){
                  for(let i=0;i<gradient.colors.length;i++){
                    stop=`${stop}  <stop
                    offset="${gradient.colors[i].substring(gradient.colors[i].lastIndexOf(" "),gradient.colors[i].length)}" style="stop-color:${gradient.colors[i].substring(0,gradient.colors[i].lastIndexOf(" "))}; stop-opacity:1"
                  ></stop>`
                  }
                }
         
                //code below for linear gradient 
              if(gradient.type=="linear-gradient"){
             
              moduleClickChild.innerHTML=`
              
                <linearGradient id="gradquater${id}" cx="${gradient.orientation?gradient.orientation.x:0}%" cy="${gradient.orientation?gradient.orientation.y:0}%" r="${gradient.orientation?gradient.orientation.fill:100}%">
                ${stop}
                </linearGradient>
                <circle
                stroke="url(#gradquater${id})"
                style='
                stroke-width:${widestroke?(strokewidth*2):strokewidth}px;
                cy:${width / 2};
                cx:${width / 2};
                r:${width / 2 - strokewidth};
                fill:transparent;
                stroke-dashoffset:0;
                stroke-dasharray: ${(percent*(percent>99?1:0.75+(strokewidth*0.0025)) * (((rangevalue) * width) / 2)) / 100} ${
                  ((100 - percent*0.25) * (((rangevalue) * width) / 2)) / 100
                    };
                stroke-linecap:${rounded ? "round" : "none"};
                '
                ></circle>
             
              `}
               //end of code for linear gradient
  
           //code below for radial gradient
            if(gradient.type=="radial-gradient"){
             
            moduleClickChild.innerHTML=`
            
              <radialGradient id="gradquater2${id}" cx="${gradient.orientation?gradient.orientation.x:0}%" cy="${gradient.orientation?gradient.orientation.y:0}%" r="${gradient.orientation?gradient.orientation.fill:100}%">
              ${stop}
              </radialGradient>
              <circle
              stroke="url(#gradquater2${id})"
              style='
              stroke-width:${widestroke?(strokewidth*2):strokewidth}px;
              cy:${width / 2};
              cx:${width / 2};
              r:${width / 2 - strokewidth};
              fill:transparent;
              stroke-dashoffset:0;
              stroke-dasharray: ${(percent*(percent>99?1:0.75+(strokewidth*0.0025)) * (((rangevalue) * width) / 2)) / 100} ${
                ((100 - percent*0.25) * (((rangevalue) * width) / 2)) / 100
                  };
              stroke-linecap:${rounded ? "round" : "none"};
              '
              ></circle>
           
            `
                  }
         //end of code for radial gradient
            }
          // end of code for gradient 
          let calcwidth=strokewidth>50?0:strokewidth*3
        moduleClickChild.style.cssText=`
        ${moduleClickChild.style.cssText};transform:rotateZ(${-213.5-((percent/100)*(calcwidth))}deg)
        `
        moduleClick.style.cssText=`
        ${moduleClick.style.cssText};height:${(width)-1}px;overflow-y:hidden;
        overflow-x:hidden;
       clip-path: polygon(0 0, 100% 0, 100% 82%, 68% 61%, 29% 68%, 0 82%);                                                        
        `
    }
   
  },
  
  }
  

  
  export default range;