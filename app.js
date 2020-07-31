// x = a + a + a + ... + a (b ori) // 

$("#submit-btn").click(function (event) {
    event.preventDefault();

    $first_num = parseInt($("#first_Num").val());
    $second_num = parseInt($("#second_Num").val());

    // input error checking
    if (isNaN($first_num) || isNaN($second_num)) {
        $input_error_text = '<p id="error-text">Te rog introdu numere. :)</p>';
        $("#input-error-text-p").html($input_error_text);
        return false;
    }

    // default values for i and x
    $i = 0;
    $x = 0;

    while ($i < $second_num) {
        // $first_num += parseInt($first_num);
        $x += $first_num; // x = 0 + a de b ori
        $i++;
    }

    // append the result to html without using append :DD
    $result = document.createElement('p');
    $result.textContent = "x = " + $x;
    $("#result").html($result);

    console.log($x);

  //  alert($first_num);
 //   alert('working');
});