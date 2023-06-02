# electron と nuxt と server-fn を組み合わせたもの

-   server-fn では JSON で扱える型しかやり取りできないので結局それ用の型は必要
    -   だとすると nuxt + electron-trpc のほうが良さそう（デバッグ周りが辛いのも解決しそう）
    -   今回作った環境は全て vite ベースなので速くて使いやすそう
