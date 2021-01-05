// from data.js
var tableData = data;

// YOUR CODE HERE!
//select the tbody element
var tablebody = d3.select("tbody");

//For each item in the array list, create a row element, add columns and update those column values with the current dictionary item values.
tableData.forEach(sightings => {
    var row = tablebody.append("tr");
    Object.entries(sightings).forEach(([key,value])=> {
        var td = row.append("td")
        td.text(value);
    })
});

// select the button element from the index.html file
var button = d3.select("#filter-btn");
button.on("click", runEnter);
//d3.selectAll("#state").on("change", runEnter);

function runEnter(){

   /*  d3.event.preventDefault();
    var dropdownMenu = d3.select("#state");
    var selectedState = dropdownMenu.property("value"); */
    var inputvalue = d3.select("#datetime");
    var inputdate = inputvalue.property("value");
   /*  var inputcity = d3.select("#city");
    var cityname = inputcity.property("value");
 */
    var filteredrows = [];
   /*  if (cityname === '' && selectedState === `allstates` && inputdate === ``)
    {
        // Filter criteria is not used
        console.log(`None of the filter criteria are used, display all data`);
        filteredrows = data;
    }
    else if (cityname === '' && selectedState === `allstates`)
    { */
        //Only displaying data for a given date
        console.log(`Only filter data for given date`);
        filteredrows = data.filter(sightings => sightings.datetime === inputdate );
   /*  }
    else if (cityname === '' && inputdate === ``)
    {
        //Only displaying data for a selected state
        console.log(`Only filter data for selected state`);
        filteredrows = data.filter(sightings => sightings.state === selectedState );
    }
    else if (selectedState === 'allstates' && inputdate === ``)
    {
        //Only displaying data for a given city
        console.log(`Only filter data for selected city`);
        filteredrows = data.filter(sightings => sightings.city === cityname );
    }
    else if (cityname === '' )
    {
        // City is not used in select criteria
        console.log(`Filter data for selected state and date`);
        filteredrows = data.filter(sightings => (sightings.state === selectedState && sightings.datetime === inputdate ));
    }
    else if (inputdate === '' )
    {
        //Date is not used in select criteria
        console.log(`Filter data for selected state and city`);
        filteredrows = data.filter(sightings => (sightings.state === selectedState && sightings.city === cityname ));
    }
    else if (selectedState === 'allstates' )
    {
        // State is not used in select criteria
        console.log(`Filter data for selected date and city`);
        filteredrows = data.filter(sightings => (sightings.datetime === inputdate && sightings.city === cityname ));
    }
    else
    {
        //Filter data based on all three criteria, city, state and date
        console.log(`Use all 3 criteria to filter data`);
        filteredrows = data.filter(sightings => (sightings.datetime === inputdate && sightings.state === selectedState && sightings.city === cityname));
    }
 */
    //Display the filtered rows on console
    console.log(filteredrows);

    //Clear the existing table data
    tablebody.selectAll("tr").remove();

    // Display filtered rows in the table
    filteredrows.forEach(sightings => {
        console.log(`Adding rows`);
        var row = tablebody.append("tr");
        Object.entries(sightings).forEach(([key,value])=> {
            var td = row.append("td")
            td.text(value);
        })
    });

}