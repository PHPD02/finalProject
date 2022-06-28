<?php
    include('sql.php');

    spl_autoload_register(function($className){
        require_once $className . '.php';
    });
    session_start();

    if (!isset($_REQUEST['account'])) header("Location: login.php");

    $account = $_REQUEST['account']; $passwd = $_REQUEST['passwd'];
    $sql = "SELECT * FROM member WHERE account = ?";

    $stmt = $mysqli->prepare($sql);
    $stmt->bind_param('s', $account);
    $stmt->execute();

    $result = $stmt->get_result();
    if ($result->num_rows > 0){
        $member = $result->fetch_object();
        // var_dump($member);
        if (password_verify($passwd, $member->passwd)){
            $_SESSION['member'] = $member;
            // $_SESSION['cart'] = new Cart();
            echo "Welcome!";
            // header("Location: main.php");

        }else{
            echo "something wrong";
            // header("Location: login.php");
        }
    }else{
        echo "無此帳號";
        // header("Location: login.php");
    }
?>