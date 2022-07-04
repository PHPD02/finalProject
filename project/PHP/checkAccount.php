<?php
    include('sql.php');

    spl_autoload_register(function($className){
        require_once $className . '.php';
    });
    session_start();

    if (!isset($_REQUEST['account'])) header("Location: http://localhost:3000/");

    $account = $_REQUEST['account']; $passwd = $_REQUEST['passwd'];
    $sql = "SELECT * FROM member WHERE account = ?";

    $stmt = $mysqli->prepare($sql);
    $stmt->bind_param('s', $account);
    $stmt->execute();

    $result = $stmt->get_result();
    $finalresult = -1;

    if ($result->num_rows > 0){
        $member = $result->fetch_object();
        // var_dump($member);
        if (password_verify($passwd, $member->passwd)){
            $_SESSION['member'] = $member;
            // $s = json_decode( $member,false);
            $s = json_encode($member);
            // $s = mysqli_free_result($member);
            // var_dump( $member->id);
            // $s = $member;
            $uId = $member->id;
            // $_SESSION['cart'] = new Cart();
            // echo "Welcome!";
            $finalresult =$uId;
            echo $s;
            // $deco = json_decode($member);
            // echo $deco;
            
            // header("Location: main.php");

        }else{
            echo $finalresult;
            // echo "密碼錯誤 or something wrong";
            // header("Location: login.php");
        }
    }else{
        echo $finalresult;
        // echo "無此帳號";
        // header("Location: login.php");
    }
?>