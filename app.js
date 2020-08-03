result_p = document.createElement('p');

calculate_x = () => { 
    first_num = parseInt($("#first_Num").val());
    second_num = parseInt($("#second_Num").val());

    x = 0;
    i = 1;

    while ( i <= second_num ) {
        x += first_num;

        result_p.textContent = "x = " + x;
        $("#result").html(result_p);

        i ++;

        console.log(x);
    };

 }


$("#submit-btn").click( function ( event ) {
    event.preventDefault();

    first_num = parseInt($("#first_Num").val());
    second_num = parseInt($("#second_Num").val());

    if ( !( isNaN ( first_num ) ) && !( isNaN ( second_num ) ) ) {
        calculate_x();
    } else  {
        
        result_p.textContent = "Te rog introdu numere. :)";
        $("#result").html( result_p );
        
    }



    $("#first_Num").val("");
    $("#second_Num").val("");

//    console.log($x);

});