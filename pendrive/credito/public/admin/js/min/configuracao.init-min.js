Configuracao={init:function(){Configuracao.novoUser(),Configuracao.removeUser(),Configuracao.salvarPerfil()},novoUser:function(){$("#novoUser").submit(function(){var a=$(this);return $.ajax({url:a.attr("action"),data:a.serialize(),type:"post",dataType:"json",success:function(e){e.success?(alert("Usuário cadastrado com sucesso!"),a.find("input").val(""),$("ul#usuario-list").append("<li>"+e.data.nome+'<div class="pull-right"><a class="remove" data-codi="'+e.data.codi+'"><i class="fa fa-times"></i> remover</a></div></li>')):e.error&&$.each(e.error,function(e,r){$.each(r,function(r,s){var i=a.find("input[name='"+e+"["+r+"]']"),t=$("input[name='"+e+"["+r+"]'] + small");i.addClass("error"),t.size()>0?t.html(s):$("<small>"+s+"</small>").insertAfter(i)})})}}),!1})},removeUser:function(){$("#usuario-list").on("click","a.remove",function(){var a=$(this),e=a.data("codi");confirm("Tem certeza que deseja remover este usuário?")&&$.ajax({url:"./removeUsuario/",data:{codi:e},type:"post",dataType:"json",success:function(e){e.success&&a.parents("li").remove()}})})},salvarPerfil:function(){$("#editarPerfil").submit(function(){var a=$(this);return $.ajax({url:a.attr("action"),data:a.serialize(),type:"post",dataType:"json",success:function(e){e.success?(alert(e.msg),a.find("input[type='password']").val("")):e.error&&$.each(e.error,function(e,r){$.each(r,function(r,s){var i=a.find("input[name='"+e+"["+r+"]']"),t=$("input[name='"+e+"["+r+"]'] + small");i.addClass("error"),t.size()>0?t.html(s):$("<small>"+s+"</small>").insertAfter(i)})})}}),!1})}},Configuracao.init();