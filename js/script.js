  function firstCall() {
    return $.ajax({
      url: "http://www.json-generator.com/api/json/get/bVPJtfmTxe?indent=0",
      type: 'GET',
      dataType: 'json',
      timeout: 3000
    });
  }

  //function secondCall(data) {
  function secondCall() {
    return $.ajax({
      url: "http://www.json-generator.com/api/json/get/cegcvaSlea?indent=0",
      type: 'GET',
      dataType: 'jsonp',
      timeout: 3000,
      //firstCallData:data,
    });
  }

  function searchApplicant() {
    var value = $("#searchBox").val().toLowerCase();
    $("#applicantsTable tr").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  }

  Promise.all([firstCall(), secondCall(), ]).then(function(values) {
    console.log(values);
    processData(values[0].concat(values[1]));
  });

  function processData(data) {
    debugger;
    $("#applicantsTable").empty();
    for (i = 0; i < data.length; i++) {
      $("#applicantsTable").append('<tr><td><div class="heart"><input type="checkbox" value=""><span class="icon"></span></div></td><td>'+ data[i].firstName + ' ' + data[i].lastName +'</td><td>'+ data[i].gender +'</td></tr>');
    }
  }

/*  $(document).ready(function() {
    firstCall().done(function(data) {
        secondCall(data).done(function(response) {
            processData(this.firstCallData.concat(response));
          }).fail(function() {
            console.log("Second API call failed");
          });
      }).fail(function() {
        console.log("First API call failed");
      });
  });*/
