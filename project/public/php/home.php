<?php
// 引入抬頭
include('sql.php');
$sql = "SELECT name,region,picture FROM restaurant limit 25";
// 資料準備
$stmt = $mysqli->prepare($sql);
// 資料執行
$stmt->execute();
// 取得拿取到的結果
$result = $stmt->get_result();
// var_dump($result);
$data = array();
if($result->num_rows > 0){
  while($row = $result->fetch_object()){
    $data[] = $row;
  }
}
$dataToClient = json_encode(JSON_UNESCAPED_UNICODE);
echo $dataToClicent ;

?>