<?php
    header('Access-Control-Allow-Origin: http://localhost:3000');
    include("sql.php");

    if (isset($_REQUEST["account"])){
        $account = $_REQUEST['account'];
        $passwd = password_hash($_REQUEST['passwd'], PASSWORD_DEFAULT);
        $realname = $_REQUEST['realname'];

        // $icon = null; $icontype = null;
        // if ($_FILES['icon']['error'] == 0){
        //     // var_dump($_FILES);
        //     $icon = addslashes(file_get_contents($_FILES['icon']['tmp_name'])) ;
            
        //     $icon = mysqli_real_escape_string(file_get_contents($_FILES['icon']['tmp_name']));

        //     $icontype = $_FILES['icon']['type'];
        // }
        try{
            $sql = "INSERT INTO member (account,passwd,realname) VALUES " .
            "('{$account}','{$passwd}','{$realname}')";
        if ($mysqli->query($sql)){
            // echo var_dump($mysqli->query($sql));
            // header("Location: http://localhost:3000/login3");
            echo "註冊成功!";
        }else{
            echo "此帳號已註冊!";
            // echo "ERROR: " . $sql;
            // header("Location: www.google.com");
        }
        }catch(Exception $e){
            // header("Location: http://localhost:3000/register");
            // ob_flush();
            // flush();
            // sleep(2);
            echo "something wrong or 此帳號已註冊!";
            
            
            // echo "here";
            
            
        }

        

    }


?>