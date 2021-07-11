<html>

<head>

<title>Membuat matrik</title>

</head>



<body>

<?php

    $baris=$_POST['baris'];

    $kolom=$_POST['kolom'];

    

//For

    for($i=1;$i<=$baris;$i++){

        for($j=1;$j<=$kolom;$j++){

         

            echo "($i,$j)&nbsp&nbsp&nbsp&nbsp&nbsp"; 

        }

        echo "<br /><br />";

    }     

?>

</body>

</html>
