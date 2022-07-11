<?php
    $var1 = '10'; $var2 = false;
    $var3 = $var1 + $var2;
    $var4 = $var1 - $var2;
    $var5 = $var1 * $var2;
    //$var6 = (int)($var1 / $var2);
    //$var7 = $var1 % $var2;
    echo "{$var1} + {$var2} = {$var3}<br />";
    echo "{$var1} - {$var2} = {$var4}<br />";
    echo "{$var1} x {$var2} = {$var5}<br />";
    //echo "{$var1} / {$var2} = {$var6} ...... {$var7}<br />";
?> 

<?php
    // header('Access-Control-Allow-Origin: http://localhost:3000');
    // // $user = $_POST['name'];
    // echo ("Hello from server: ");

    // header('Access-Control-Allow-Origin: *');
    // $mysqli = new mysqli('localhost', 'root', '', 'finalproject', 3306);
    // $mysqli->set_charset('utf8');

    // spl_autoload_register(function($className) {
    //     require_once $className . '.php';
    // });
    // // session_start();

    // $sql = "SELECT * FROM menu WHERE menuItemId <= 20";

    // $result=$mysqli->query($sql);
    // $data = $result->fetch_object();
    
    // // var_dump($result);
    // // var_dump($data);

    // while ($menu = $result->fetch_object()){
    //     echo "{$menu->menuItemId}<br />";
    //     echo "{$menu->restaurantId}<br />";
    //     echo "{$menu->dish}<br />";
    //     echo "{$menu->type}<br />";
    //     echo "{$menu->introduce}<br />";
    //     echo "{$menu->picture}<br />";
    //     echo "{$menu->cost}<br />";
    //     echo "<hr />";
    // }
    // echo ("hi");

?>

