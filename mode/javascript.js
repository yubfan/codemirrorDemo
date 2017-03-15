debugger;
(function() {
    var editor = CodeMirror.fromTextArea($("#script_once_code")[0], { //script_once_code为你的textarea的ID号
        lineNumbers: true, //是否显示行号
        mode: "text/javascript",
        　 //默认脚本编码
        lineWrapping: true, //是否强制换行
    });
     editor.setOption("theme", 'erlang-dark');
    //选择界面风格JS
    $('#select').change(function() {
        var theme = $('#select').val();
        editor.setOption("theme", theme); //editor.setOption()为codeMirror提供的设置风格的方法
    });

    //选择脚本类型JS
    var txt1 = $("#script_once_code").val();
    var txt2 = '';
    var txt3 = $("#code2").val();
    $(".ck-code").click(function() {
        var txt = editor.getValue(); //editor.getValue()获取textarea中的值
        var lang = $(this).prop("id");
        if (lang == "script_once_type1") {
            editor.setOption("mode", "shell"); //editor.setOption()设置脚本类型
            editor.setValue(txt1); // editor.setValue()设置textarea中的值
        } else if (lang == "script_once_type2") {
            editor.setOption("mode", "perl");
            editor.setValue(txt2);
        } else if(lang == "script_once_type3"){
            editor.setOption("mode", "python");
            editor.setValue(txt3);

        }else {
            editor.setOption("mode", "javascript");
            editor.setValue(txt3);

        }
    });


})();
