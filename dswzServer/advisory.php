<?php

//�������ݿ�
require_once('connect.php');

//���λ���������ֲ�ѯ������
$flag = $_GET['flag'];

//��ûص�����
$callback = $_GET['callback'];

//$flag == 1��ʾ��ѯ������һ���ж�������Ʒ��ѯ��Ϣ
if ($flag == 1) {

	$squery = mysql_query("select count(*) from advisory");
    $result = mysql_result($squery, 0);
	echo $callback.'('.$result.')';

//$flag == 2��ʾ��ѯ��Ʒ��ѯ����Ϣ
} else if ($flag == 2) {

	//���͵�������е���ѯ��Ϣ����ʼλ��
	$startIndex = $_GET['startIndex'];

	//���͵�������е���ѯ��Ϣ������
	$amount = $_GET['amount'];

	//ִ��SQL��䣬�����ݿ��л����Ʒ��ѯ��Ϣ
	$query = mysql_query("select * from advisory order by id asc limit ".$startIndex.", ".$amount);

	//���������ݿ��л�ȡ����Ʒ��ѯ��Ϣ
	while ($row = mysql_fetch_array($query)) {

		//��ʾ��ѯ��������
		$flag = 3;

		//�������飬��������ݿ��л�ȡ����Ʒ��ѯ��Ϣ
		$sayList[] = array(

			//id
			'id'=>$row['id'],

			//�û�ͷ������ӵ�ַ
			'memberimage'=>$row['memberimage'],

			//�û��Ļ�Ա�˺�
			'membernum'=>$row['membernum'],

			//�û��Ļ�Ա�ȼ�
			'membergrade'=>$row['membergrade'],

			//��ѯ������
			'question'=>$row['question'],

			//����Ĵ�
			'answer'=>$row['answer'],

			//��ѯ��ʱ��
			'time'=>$row['time']
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

