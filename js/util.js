/**
 * Created by Administrator on 2017/4/5.
 * һЩͨ�õ�js�ű�
 */

//ͼƬ�ֲ�
function setBanner() {

    //���СԲ��
    var $circleLis = $(".circle-list li");

    //����ֲ�ͼ
    var $bannerLis = $(".banner-list li");

    //�ֲ�ͼ��ͼƬ���±�
    var thatIndex = 0;

    //���ڴ�����ʱ��
    var timer = null;

    //��СԲ����ӵ���¼�
    $circleLis.on("click", function() {

        //�����ǰ�û�ѡ�е�СԲ����±������ڲ��ŵ��ֲ�ͼ���±겻ͬ
        //�Ų��ŵ�ǰ���û������СԲ���Ӧ���ֲ�ͼ
        if($(this).index() != thatIndex) {

            //�����ֲ�ͼ���±�ΪСԲ����±�
            thatIndex = $(this).index();

            //ѡ�е�ǰ�����СԲ��
            $(this).addClass("current").siblings("li").removeClass("current");

            //�����ֲ�ͼ
            $bannerLis.removeClass("active");

            //����СԲ����±꣬ѡ�ж�Ӧ���ֲ�ͼ
            var $banner = $bannerLis.eq(thatIndex);

            //�����ֲ�ͼ
            $banner.addClass("active");
            $banner.css("opacity", "0");
            animate($banner[0], {opacity : 100}, 40);
        }
    });

    //������ʱ��,�����Զ������ֲ�ͼ
    timer = setInterval(autoPlayBanner, 3000);

    //���������ֲ�ͼ�ϵ�ʱ����ͣ�����ֲ�ͼ
    $(".banner-list").mouseenter(function() {
        clearInterval(timer);
    });

    //������뿪�ֲ�ͼʱ�����������ֲ�ͼ
    $(".banner-list").mouseleave(function() {
        timer = setInterval(autoPlayBanner, 3000);
    });

    //�Զ������ֲ�ͼ
    function autoPlayBanner() {

        //��������������һ��
        //�ӵ�1�ſ�ʼ����
        thatIndex = ++thatIndex > $bannerLis.length - 1 ? 0 : thatIndex;

        //ѡ��СԲ��
        $circleLis.removeClass("current");
        $circleLis.eq(thatIndex).addClass("current");

        //�����ֲ�ͼ
        $bannerLis.removeClass("active");

        //����СԲ����±꣬ѡ�ж�Ӧ���ֲ�ͼ
        var $banner = $bannerLis.eq(thatIndex);

        //�����ֲ�ͼ
        $banner.addClass("active");
        $banner.css("opacity", "0");
        animate($banner[0], {opacity : 100}, 40);
    }
}


/***
 * ������ݵ�ͨ�÷���
 * @param url �����url
 * @param method ����ķ�ʽ
 * @param dataType �������������
 * @param data ���ݵĲ���
 * @param callback �ص�����
 * @param jsonp ��һ��jsonp��������д�ص�����������,���ֵ��������� "callback=?"�е�callback
 * @param jsonpCallback Ϊjsonp����ָ��һ���ص�������,���ֵ������ȡ��jQuery�Զ����ɵ����������
 */
function getData(url, method, dataType, parem, callback) {
    $.ajax({
        url: url,
        type: method,
        dataType: dataType,
        data: parem,
        success:callback
    });
}


/***
 * �����ջ���ַ
 * @param id ��ǩ��id
 * @param data �ӷ������˴�����������
 * @param flag ��־λ(1:ʡ��2:�У�3:��)
 * @param callback �ص�����
 */
function setAddress(id, data, flag, callback) {

    $("#" + id + " .select-options").children("li").remove();

    //����json����
    $.each(data, function(index, obj) {
        var $li = $("<li></li>").html(obj.name).attr("value", obj.code);
        $("#" + id + " .select-options").append($li);
    });

    var code = $("#" + id + " .select-options").children("li:eq(0)").attr("value");
    var name = $("#" + id + " .select-options").children("li:eq(0)")[0].innerHTML;
    $("#" + id + " .select-name").html(name);

    if(flag != null) {
        var parem = {"citycode": code, "flag": flag};
        getData(config.addressUrl, 'get', 'jsonp', parem, callback);
    }
}


/**
 * �ı��ջ���ַ
 * @param id ��ǩ��id
 * @param flag ��־λ(1:ʡ��2:�У�3:��)
 * @param callback �ص�����
 */
function changeAddress(id, flag, callback) {

    $("#" + id).mouseenter(function() {
        $("#" + id + " .select-options").show();
    });

    $("#" + id).mouseleave(function() {
        $("#" + id + "  .select-options").hide();
    });

    $("#" + id + " .select-options li").click(function() {
        $("#" + id + " .select-name").html($(this)[0].innerHTML);
        $("#" + id + " .select-options").hide();

        var code = $(this).attr("value");

        if(flag != null) {
            var code = $(this).attr("value");
            var parem = {"citycode": code, "flag": flag};
            getData(config.addressUrl, 'get', 'jsonp', parem, callback);
        }
    });
}


/***
 * ���ñ�ǩ��overflow-y����
 * @param id ��ǩ��id
 */
function setOverflowY(id) {

    var $dom = $("#" + id + " .select-options");
    var $li = $("#" + id + " .select-options li")
    var height = $dom.height();

    if(height < 122) {
        $dom.css("overflow-y", "inherit");
        $li.css("width", "100%");
    } else {
        $dom.css("overflow-y", "scroll");
        $li.css("width", "93px");
    }
}