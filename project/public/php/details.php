<?php
include('serverHeader.php');
include('sql.php');
// INNER JOIN 內部連接
$sql = "SELECT *,ROW_NUMBER() OVER(ORDER BY orderId DESC) sn FROM orderdetails LIMIT 1";

$result = $mysqli->query($sql);


$dataArray = array();

while ($details = $result->fetch_object()) {
  // echo json_encode($carts);
  $dataArray[] = $details;
}
$Data = json_encode($dataArray);
echo $Data;