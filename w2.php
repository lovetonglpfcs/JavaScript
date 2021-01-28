<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        <?php
            $day = "wednesday";
            $Dcolor = "";
            switch($day) {
                case "monday" : $Dcolor = "Yellow"; break;
                case "tuesday" : $Dcolor = "Pink"; break;
                case "wednesday" : $Dcolor = "Green"; break;
                case "thursday" : $Dcolor = "Orange"; break;
                case "friday" : $Dcolor = "blue"; break;
                case "saturday" : $Dcolor = "purple"; break;
                case "sunday" : $Dcolor = "red"; break;
            }
            echo "<p color ="$Dcolor">$day color is $Dcolor.</p>";
        ?>
    </body>
</html>