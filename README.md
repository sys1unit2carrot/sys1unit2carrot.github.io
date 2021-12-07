# sys1unit2carrot.github.io
## うにてぃっぷすURL
うにてぃっぷす：[https://sys1unit2carrot.github.io/view/index.html](https://sys1unit2carrot.github.io/view/index.html)  
サンプルページ：[https://sys1unit2carrot.github.io/view/sample/sample.html](https://sys1unit2carrot.github.io/view/sample/sample.html)
<br><br>

## 概要
  「うにてぃっぷす」は、KCSC System1 Unit2 のメンバーが利用できるTipsサイトです。  
  備忘録として残したい内容があれば記載してください。  
  また、まだまだ不便なところもあるのでお手すきの際に改良していただけると幸いです。  
<br><br>

## 記事追加手順

### 1. 言語ディレクトリ・HTMLファイル作成
  記事はHTMLファイルで追加していきます。  
  該当する言語ディレクトリの中に新しくHTMLファイルを作成してください。  
  言語ディレクトリは `/view` 以下に存在します。  
  該当する言語ディレクトリがない場合は `/view` 以下に作成してください。  
  
### 2. HTMLファイル編集
  新規作成したHTMLファイルの中身に `view/sample/sample.html` の中身をコピー&ペーストし、記事にしたい内容を書き込みます。  
  本文を編集する際に使用するclassの付け方などは「記載方法」を確認してください。  

  - ページ名編集  
  `<head>` 内にある `<title>` でページ名を変更します。  
  「うにてぃっぷす - 」の後に記事のタイトルを記載してください。  
  ~~~HTML
    <title>うにてぃっぷす - [ここにタイトルを記載してください]</title>
  ~~~  

  - Tipsタイトル編集  
  Tipsのタイトルを変更します。「ページ名編集」と同じタイトルを記載してください。  
  ~~~HTML
    <!--Tipsタイトル-->
    <div id="tips_title">[ここにタイトルを記載してください]</div>
  ~~~

### 3. カテゴリ追加
  追加するTipsのカテゴリ(言語)をホーム画面に追加します。  
  `view/index.html` のTips一覧部に以下のように記載してください。  
  ~~~HTML
    <div class="lang_div">
      <div id="lang_[言語名(英語)]" class="heading_2">[言語名]</div>
    </div>
  ~~~
  既に追加されている場合は次の手順に進んでください。  

### 4. index.html編集
  `view/index.html` のTips一覧に「2. HTMLファイル編集」で作成した記事のタイトルを記載します。  
  ページリンクはHTMLの相対パスで記載し、言語ごとのカテゴリブロックに以下のように記載してください。  
  ~~~HTML
    <a href="../view/[言語ディレクトリ名]/[作成したhtml名].html" class="tips_contents">・[Tips名]</a>
  ~~~

### 5. Githubにプッシュ
  作成したHTMLファイルをcommitし、Githubにプッシュします。  
  プッシュしたら [こちら](https://sys1unit2carrot.github.io/view/index.html) にアクセスして確認してみてください。  
  反映されない場合はキャッシュを削除してからアクセスしてみてください。  
<br><br>

## 記載方法
  本文を編集する際に必要になるクラスの使用方法です。  
  既に実装されている記事のHTMLも参考にするとさらに分かりやすいかと思います。  
### 見出し
  - `heading_1`  
  目次に記載される単位の題字です。  
  idは`subtitle_`の後ろに数字を記載してください。(目次出力の際に必要になります。)  
  ~~~HTML
    【 例 】
    <div id="subtitle_1" class="heading_1">xxxについて</div>
    　・
    　・
    　・
    <div id="subtitle_2" class="heading_1">yyyについて</div>
  ~~~

  - `heading_2`  
  2番目に大きい題字です。目次には記載されません。  
  デザインの関係上、以下のように `lang_div`クラスとセットで使用してください。  
  ~~~HTML
    【 例 】
    <div class="lang_div">
      <p class="heading_2">xxxについて</p>

      ~ 本文 ~

    </div>
  ~~~

  - `heading_3`  
  3番目に大きい題字です。目次には記載されません。
  ~~~HTML
    【 例 】
    <p class="heading_3">xxxについて</p>
  ~~~
  
### 画像
  スクリーンショットなどの画像を差し込みたい場合は以下の手順で記載してください。
  1. 圧縮してjpg形式にする
  ペイントアプリ等を使用し、画像を圧縮してjpg型に変更してください。  
  2. Github上に追加する
  `pictures/screenshots/` 以下に画像を追加してください。  
  3. HTMLに記載する
  以下の例を参考に、画像を差し込みたい場所に `imgタグ` を記載してください。  
  `alt`には日本語で画像内容の説明を記載してください。  
  ~~~HTML
  【 例 】
  <img src="../../pictures/screenshots/[画像名].jpg" alt="[画像内容]" title="[画像名]" class="image_in_main_text">
  ~~~


### コード
  コードを記載する場合は`<code>`を使用すると便利です。  
  以下の例を参考にしてください。  
  ~~~HTML
  【 例 】
  <p class="main_text">このように、<code>タグ名</code>や<code>メソッド名</code>などを記載すると便利です。</p>
  ~~~

### コードブロック
  コードを複数行記載する場合は `code_frame` クラスを使用すると便利です。  
  1行の文字数が長くなってしまった場合、コードブロックを横スクロールして表示します。  
  以下の例を参考にしてください。  
  ~~~HTML
  【 例 】
  <div class="code_frame">
    <p class="code">ここにコードを記載してください。</p>
    <p class="code">タグを複数切ることで改行することもできます。</p>
  </div>
  ~~~
  
### リンク
  リンクを記載する場合は以下の例を参考にしてください。
  ~~~HTML
  【 例 】
  <a href="[遷移したいリンク]" target="_blank" rel="noopener" class="link_in_contents">[遷移したいリンク]</a>
  ~~~
