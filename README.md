# React-SRP-PostLikeApp

Reactの**SRP（単一責任の原則）**を意識して、投稿一覧と「いいね」機能を実装した練習用アプリです。

投稿データの表示、投稿カードのUI、いいね機能をそれぞれ分離し、コンポーネントとカスタムフックの責務を分けています。

## 概要

投稿一覧を表示し、それぞれの投稿に対して「いいね」を追加できるアプリです。

「いいね」の状態管理にはカスタムフック `useLike` を使用し、投稿表示のUIとは分離しています。

また、投稿1件の表示を `PostCard` コンポーネントとして切り出しています。

## 主な機能

* 投稿一覧の表示
* 投稿タイトル・本文の表示
* 投稿ごとの「いいね」機能
* いいね数のカウントアップ
* ハートアイコンによるいいねUI
* いいねボタンのクリックアニメーション

## 使用技術

* React
* TypeScript
* Tailwind CSS
* Vite

## ディレクトリ構成

```text
src/
├── App.tsx
├── data/
│   └── Posts.ts
└── features/
    └── post/
        ├── components/
        │   ├── PostList.tsx
        │   └── PostCard.tsx
        ├── hooks/
        │   └── useLike.ts
        └── types/
            └── PostType.ts
```

## 責務分離

### App.tsx

アプリ全体のエントリーポイントです。

`PostList` を表示する役割だけを担当します。

### PostList.tsx

投稿一覧を管理するコンポーネントです。

* 投稿データを取得
* `posts.map()` による一覧表示
* `useLike` の利用
* `PostCard` へのprops受け渡し

を担当します。

### PostCard.tsx

1件の投稿を表示するUIコンポーネントです。

```text
PostCard
├── 投稿タイトル
├── 投稿本文
└── いいねボタン
```

いいねの状態管理自体は行わず、`likeCount` と `onLike` をpropsとして受け取ります。

### useLike.ts

いいね機能の状態と処理を担当するカスタムフックです。

```text
post.id → likeCount
```

という形で投稿ごとのいいね数を管理します。

```tsx
const [likes, setLikes] = useState<Record<number, number>>({});
```

`Record<number, number>` を使用することで、投稿IDごとにいいね数を管理しています。

### PostType.ts

投稿データの型を定義します。

```tsx
export type PostType = {
  id: number;
  title: string;
  content: string;
};
```

### Posts.ts

投稿のローカルデータを管理します。

## データの流れ

```text
Posts.ts
   ↓
PostList
   ↓
PostCard

useLike
   ↓
likes
   ↓
PostList
   ↓
PostCard
```

`PostCard` は「表示」、`useLike` は「いいねの状態・ロジック」というように責務を分離しています。

## SRPを意識したポイント

このアプリでは、1つのコンポーネントに複数の責務を持たせないようにしています。

| ファイル           | 責務       |
| -------------- | -------- |
| `App.tsx`      | アプリの構成   |
| `PostList.tsx` | 投稿一覧の管理  |
| `PostCard.tsx` | 1件の投稿UI  |
| `useLike.ts`   | いいね状態・処理 |
| `PostType.ts`  | 投稿データの型  |
| `Posts.ts`     | 投稿データ    |

このように責務を分離することで、各処理を変更・再利用しやすい構成にしています。

## 今後の発展

現在はローカルデータとReactのstateを使用しています。

今後は以下のように発展させることができます。

```text
PostCard
   ↓
PostList
   ↓
Custom Hook
   ↓
API
   ↓
Prisma
   ↓
PostgreSQL
```

これにより、投稿データやいいね情報をデータベースに保存する構成へ拡張できます。

## 学習目的

* SRP（単一責任の原則）
* Reactコンポーネントの責務分離
* Custom Hookによるロジック分離
* TypeScriptの型定義
* `Record` を使用したデータ管理
* propsによるコンポーネント間のデータ受け渡し
* Tailwind CSSによるUI実装
