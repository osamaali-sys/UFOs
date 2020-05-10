// import the data from data.js
const tableData = data;

// Reference the HTML table using d3
var tbody = d3.select("tbody");

function buildTable(data) {
    // First, clear out any existing data
    tbody.html("");
  
    // Next, loop through each object in the data
    // and append a row and cells for each value in the row
    data.forEach((dataRow) => {
      // Append a row to the table body
      let row = tbody.append("tr");
  
      // Loop through each field in the dataRow and add
      // each value as a table cell (td)
      Object.values(dataRow).forEach((val) => {
        let cell = row.append("td");
        cell.text(val);
        }
      );
    });
  }
//--------11111--------------------------------------------------------
  // Keep track of all filters
  var filters = {};
  // This function will replace your handleClick 
  function updateFilters() {


  }

  function filterTable() {
      // Set the filteredData to the tableData
      let filteredData = tableData;

      // Loop through all of the filters and keep any data that  
      // matches the filter values

      // Finally, rebuild the table using the filtered Data
      buildTable(filteredData);
  }

  // Attach an event to listen for changes to each filter
  // Hint: You'll need to select the event and what it is listening for 
  //within each set of parenthesis
  d3.selectAll("#filter-btn").on("click", updateFilters);

    // Build the table when the page loads


    //----2222------------------------------------------------------------
  
  
    function handleClick() {
//     // Grab the datetime value from the filter
    let date = d3.select("#datetime").property("value");
    let city = d3.select("#city").property("value");
    let country = d3.select("#country").property("value");
    let state = d3.select("#state").property("value");
    let shape = d3.select("#shape").property("value");
    
    let filteredData = tableData;
    
//      // Check to see if a date was entered and filter the
//     // data using that date.
    if (date) {
      // Apply `filter` to the table data to only keep the
      // rows where the `datetime` value matches the filter value
      filteredData = filteredData.filter(row => row.datetime === date);
    };

    if (city) {
      // Apply `filter` to the table data to only keep the
      // rows where the `datetime` value matches the filter value
      filteredData = filteredData.filter(row => row.city === city);
    };
    
    if (country) {
      // Apply `filter` to the table data to only keep the
      // rows where the `datetime` value matches the filter value
      filteredData = filteredData.filter(row => row.country === country);
    }

    if (state) {
      // Apply `filter` to the table data to only keep the
      // rows where the `datetime` value matches the filter value
      filteredData = filteredData.filter(row => row.state === state);
    }

    if (shape) {
      // Apply `filter` to the table data to only keep the
      // rows where the `datetime` value matches the filter value
      filteredData = filteredData.filter(row => row.shape === shape);
    }


//      // Rebuild the table using the filtered data
//     // @NOTE: If no date was entered, then filteredData will
//     // just be the original tableData.
    buildTable(filteredData);
    }
  
//   // Attach an event to listen for the form button
  d3.selectAll("#filter-btn").on("click", handleClick);
  
//   // Build the table when the page loads
  buildTable(tableData);