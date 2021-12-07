// デザイン切り替え
function chenge_css_btn() {
  var css = "";
  var select_box = document.getElementById("select_design");
  var elem = document.getElementById("css_design");
  var select_design = document.getElementById("select_design").value;
  switch (select_design) {
    case "simple_green":
      css = "stylesheet.css";
      break;
    case "simple_darkmode_purple":
      css = "stylesheet_darkmode_purple.css";
      break;
    case "pop_blue":
      css = "stylesheet_pop.css";
      break;
    case "pop_pink":
      css = "stylesheet_pop_pink.css";
      break;
    case "pop_yellow":
      css = "stylesheet_pop_yellow.css";
      break;
    case "pop_accessibility":
      css ="stylesheet_pop_accessibility.css";
      break;
    case "stylish_blue":
      css = "stylesheet_stylish_blue.css";
      break;
    case "stylish_accessibility":
      css = "stylesheet_stylish_accessibility.css";
      break;
    default: // エラー
      css = "stylesheet.css";
      alert('変更できませんでした。');
      break;
  }
  var index_num = select_box.selectedIndex;
  var page_css = "../../stylesheets/" + css;
  elem.href = page_css;
  localStorage.setItem('css_design_name', css);
  localStorage.setItem('css_design_index', index_num);
}

// デザイン読み込み
window.onload = function(){
  var elem = document.getElementById("css_design");
  var load_design = localStorage.getItem('css_design_name');
  var load_design_index = localStorage.getItem('css_design_index');

  if (load_design != null) {
    var page_css = "../../stylesheets/" + load_design;
    elem.href = page_css;
    var select_box = document.getElementById("select_design");
    select_box.options[load_design_index].selected = true;
  }

  // もくじ
  var elements = document.querySelectorAll(".heading_1");
  if (elements && elements.length) {
    let contents = '';
    elements.forEach((elements, i) => {
      contents += `<a href="#${elements.id}" class="index_lang">・${elements.textContent}</a>`;
    })
    document.getElementById("table_of_contents_index").innerHTML += `${contents}`;
  };

  // code表示変換
  var code = document.getElementsByClassName("code");
  if (code != null) {
    for (var i = 0; i < code.length; i++) {
      var code_sentence =code[i];
      code_sentence.innerHTML = code_sentence.innerHTML.replace(/</g,'&lt;').replace(/>/,'&gt;');
    };
  };
};
