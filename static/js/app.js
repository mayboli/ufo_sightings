// Assigning data from data.js to variable
var tableData = data;

// Getting a reference to the table body
var tbody = d3.select("tbody");

// Looping through data
data.forEach(function(tableData) {

    // Adding rows
    var row = tbody.append("tr");

    // Using a loop to add data into rows 
    Object.entries(tableData).forEach(function([key, value]) {

        var cell = tbody.append("td");
        cell.text(value);
    });
        
});


// Getting a reference to the filter button
var filterBtn = d3.select("#filter-btn");

// Defining the button click
filterBtn.on("click", function() {

    // Prevent page from refreshing
    d3.event.preventDefault();

    // Console log the event that occurred (button click)
    console.log(d3.event.target);

    // Select input element and get value property
    var inputElement = d3.select("#datetime");
    var inputValue = inputElement.property("value");

    // Filtering data
    var filteredData = tableData.filter(sighting => sighting.datetime  === inputValue);
    console.log(filteredData);

    // Removing previous data on table-body
    tbody.selectAll("*").remove();

    // Looping through the filtered data
    filteredData.forEach(function(ufoSightings) {

        // Adding new rows
        var row = tbody.append("tr");
    
        // Adding data into table-body
        Object.entries(ufoSightings).forEach(function([key, value]) {

            var cell = tbody.append("td");
            cell.text(value);
        });
            
    });
});
  