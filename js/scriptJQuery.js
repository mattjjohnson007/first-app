$('#load').click(function () {
    // add loading image to div
    $('#loading').html('<img src="loading.gif"> loading...');
    
    // run ajax request
    $.ajax({
        type: "GET",
        dataType: "json",
        url: "https://nhl.com",
        success: function (d) {
            // replace div's content with returned data
            $('#loading').html(d);
        }
    });
});

//$.ajax(Teams.json)

localStorage.clear();