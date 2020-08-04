result_p = document.createElement('p');

function calculate_x ( first_num, second_num ) { 

    var x = 0;

    while ( second_num != 0 ) {
        x += first_num;
        second_num --;

        console.log(x);
    };

    // return x;

 }


$("#submit-btn").click( function ( event ) {
    event.preventDefault();

    first_num = parseInt($("#first_Num").val());
    second_num = parseInt($("#second_Num").val());

    if ( !( isNaN ( first_num ) ) && !( isNaN ( second_num ) ) ) {
        
        calculate_x( first_num, second_num );

        result_p.textContent = "x = " + x;
        $("#result").html(result_p);

    } else  {
        
        result_p.textContent = "Te rog introdu numere. :)";
        $("#result").html( result_p );
        
    }



    $("#first_Num").val("");
    $("#second_Num").val("");

//    console.log($x);

});

