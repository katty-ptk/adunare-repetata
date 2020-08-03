
$("#submit-btn").click(function ( event ) {
    event.preventDefault();

    $first_num = parseInt($("#first_Num").val());
    $second_num = parseInt($("#second_Num").val());

    if ( isNaN ( $first_num ) || isNaN ( $second_num ) ) {
        
        $result = '<p class="error" id="input-error">Te rog introdu numere. :)</p>';
        $(".result").html($result);
    
    } else {

        $i = 0;
        $x = 0;

        while ( $i < $second_num ) {

            $x += $first_num;
            $i++;

            $result_p = document.createElement('p');
            $result_p.textContent = "x = " + $x;
            $("#result").html($result_p);
            
        }

    }


    // alert($first_num + $second_num)

});