$i = 1;
$x = 0;
$result_p = document.createElement('p');

$("#submit-btn").click( function ( event ) {
    event.preventDefault();

    $first_num = parseInt($("#first_Num").val());
    $second_num = parseInt($("#second_Num").val());

    if ( !( isNaN ( $first_num ) ) && !( isNaN ( $second_num ) ) ) {
        do {
            $i += 1;
            $x += $first_num;

            $result_p.textContent = "x = " + $x;
            $("#result").html($result_p);
            
           // console.log($x);
            
        } while ( $i <= $second_num );

    } else  {
        
        $result_p.textContent = "Te rog introdu numere. :)";
        $("#result").html( $result_p );
        
    }

    $("#first_Num").val("");
    $("#second_Num").val("");

//    console.log($x);

});