Contato={init:function(){Contato.list()},list:function(){$("a.list-group-item").click(function(t){t.preventDefault(),t.stopPropagation();var e=$(this),a=$(this).attr("href");$.ajax({url:a,dataType:"html",success:function(t){if($("#email_details").html(t),$(".list-group.email-item-list .selected").removeClass("selected"),e.addClass("selected"),e.find(".fa-circle-o").size()>0){e.find(".fa-circle-o").removeClass("fa-circle-o text-muted").addClass("fa-circle");var a=parseInt($(".badge.badge-primary").html());console.log(a),$(".badge.badge-primary").html(a-1)}}})})}},Contato.init();