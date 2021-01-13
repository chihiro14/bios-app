# 実装イメージ

昔作ったbios画面風のなんちゃってwebアプリ画面をreactで作ってみたい。
serverにi18nを入れて国際化対応 → クライアント側で言語選択できる、だけの機能を持った簡単なアプリ。

Dockerで環境構築するにあたって、
・imageの取得
・二つの環境を立ち上げられるようにする
・コンテナ間通信が必要になる(?)
この辺が勉強できそうかなと。


# imageの構築
`docker-compose build`

# コンテナの構築・起動
`docker-compose up`
-dでバックグランドで起動

# コンテナの停止
`Ctrl+C`
 もしくは
 `docker-compose stop （バックグランドで起動している場合）`

# コンテナの再開（コンテナの起動のみ）
`docker-compose start`

