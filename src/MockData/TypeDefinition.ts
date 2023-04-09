export type Post = {
    name: string,
    age: number,
    url: string,
    note?: string
}

export type PostType = Post[] | React.ReactNode