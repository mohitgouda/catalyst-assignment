  function firstCall() {
    return $.ajax({
      url: "http://www.json-generator.com/api/json/get/bVPJtfmTxe?indent=0",
      type: 'GET',
      dataType: 'json',
      timeout: 3000
    });
  }

  function secondCall() {
    return $.ajax({
      url: "http://www.json-generator.com/api/json/get/cegcvaSlea?indent=0",
      type: 'GET',
      dataType: 'jsonp',
      timeout: 3000,
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
    var uniqueAges = [];
    for (i = 0; i < data.length; i++) {
      $("#applicantsTable").append('<tr><td><div class="heart"><input type="checkbox" value=""><span class="icon"></span></div></td><td>'+ data[i].firstName + ' ' + data[i].lastName +'</td><td>'+ data[i].gender +'</td></tr>');
      if(uniqueAges.indexOf(data[i].age) === -1){
        uniqueAges.push(data[i].age);        
      } 
    }
    uniqueAges.sort();
    $("#ageSelector").empty();
    $("#ageSelector").append('<option value="" selected>Select Age</option>');
    for (j = 0; j < uniqueAges.length; j++) {
      $("#ageSelector").append('<option value="'+uniqueAges[j]+'">'+uniqueAges[j]+'</option>');
    }
    console.log(uniqueAges);
  }
