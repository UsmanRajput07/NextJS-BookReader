export type Book={
    _id: string,
    title: string,
    genre: string,
    file: string,
    coverImg: string,
    author: User
    description: string
}

export type User={
  name: string,
}