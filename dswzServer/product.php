<?php

//�������ݿ�
require_once('connect.php');

//���λ���������ֲ�ѯ������
$flag = $_GET['flag'];

//��ûص�����
$callback = $_GET['callback'];

//$flag == 1��ʾ��ѯ������һ���ж�������Ʒ��Ϣ
if ($flag == 1) {

	$squery = mysql_query("select count(*) from product");
    $result = mysql_result($squery, 0);
	echo $callback.'('.$result.')';

//$flag == 2��ʾ��ѯ��Ʒ��Ϣ
} else if ($flag == 2) {

	//���͵�������е���Ʒ��Ϣ����ʼλ��
	$startIndex = $_GET['startIndex'];

	//���͵�������е���Ʒ��Ϣ������
	$amount = $_GET['amount'];

	//ִ��SQL��䣬�����ݿ��л����Ʒ��Ϣ
	$query = mysql_query("select * from product order by id asc limit ".$startIndex.", ".$amount);

	//���������ݿ��л�ȡ������Ʒ��Ϣ
	while ($row = mysql_fetch_array($query)) {

		//��ʾ��ѯ��������
		$flag = 3;

		//�������飬��������ݿ��л�ȡ����Ʒ��Ϣ
		$sayList[] = array(

			//id
			'id'=>$row['id'],

			//��ƷͼƬ
			'productimage'=>$row['productimage'],

			//��Ʒ����
			'productname'=>$row['productname'],

			//��Ʒ�۸�
			'productprice'=>$row['productprice'],

			//��������
			'commentnum'=>$row['commentnum']
	      );
	}


	//��������ݿ��в�ѯ��������
	if ($flag == 3) {

		//������ת����Json���󣬲��ҷ��͵������
		echo $callback.'('.json_encode($sayList).')';
	} else {
		echo $callback.'('.'null'.')';
	}
}

?>
