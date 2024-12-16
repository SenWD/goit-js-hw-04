
function calcAverageCalories(days){ 
  
    var totalPrice = 0;
    var dayNmb = 0;
    //var myValues = [];
    
    
    var myValues = Object.values(days);
    //console.log("myvalues =",myValues);
          for ( var price of myValues) {
            
              totalPrice += Number(price.calories); 
              dayNmb++;
        /* myValues,indexOf(price)..... sayaç yerine kullanmayı dene.... **** 
          }    
           
     /*     
    
      const  dayCal = Math.round(totalPrice / dayNmb);
     
      if (dayCal === NAN) {console.log(`${dayCal = 0}`); }
    
      console.log("ortalama -total : ",dayCal);
    }
    
        
    
    
    
    console.log(
      calcAverageCalories([
        { day: "monday", calories: 3010 },
        { day: "tuesday", calories: 3200 },
        { day: "wednesday", calories: 3120 },
        { day: "thursday", calories: 2900 },
        { day: "friday", calories: 3450 },
        { day: "saturday", calories: 3280 },
        { day: "sunday", calories: 3300 }
      ])
    ); // 3180
    
    
    console.log(
      calcAverageCalories([
        { day: "monday", calories: 2040 },
        { day: "tuesday", calories: 2270 },
        { day: "wednesday", calories: 2420 },
        { day: "thursday", calories: 1900 },
        { day: "friday", calories: 2370 }, 
        { day: "saturday", calories: 2280 },
        { day: "sunday", calories: 2610 }
      ])
    ); // 2270
    
    console.log(
      calcAverageCalories([])
    ); // 0
    
    */
    
    /*
    