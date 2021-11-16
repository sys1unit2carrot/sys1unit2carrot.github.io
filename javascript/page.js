// デザイン切り替え
function chenge_css_btn() {
  var css = "";
  var elem = document.getElementById("css_design");
  var select_design = document.getElementById("select_design").value;
  switch (select_design) {
    case "simple_green":
      css = "stylesheet.css";
      break;
    case "pop_blue":
      css = "stylesheet_pop.css";
      break;
    case "pop_pink":
      css ="stylesheet_pop_pink.css";
      break;
    default: // エラー
      css = "stylesheet.css";
      alert('変更できませんでした。');
      break;
  }
  var page_css = "../../stylesheets/" + css;
  elem.href = page_css;
  localStorage.setItem('css_design_name', css);
}

// デザイン読み込み
window.onload = function(){
  var elem = document.getElementById("css_design");

  var load_design = localStorage.getItem('css_design_name');
  if (load_design != null) {
    var page_css = "../../stylesheets/" + load_design;
    elem.href = page_css;
  }
}
