let open_btn = document.getElementById("open");
 let close_btn = document.getElementById("close");
 let link_group = document.getElementById("link-group");
     function menuOpen(){
       open_btn.style.display="none";
       close_btn.style.display="block";
       link_group.style.right = "0%";
     }
     function menuClose(){
       open_btn.style.display="block";
       close_btn.style.display="none";
       link_group.style.right = "-100%";
     }