export type Book={
    _id: string,
    title: string,
    genre: string,
    file: string,
    coverImg: number,
    author: User
}

export type User={
  name: string,
}