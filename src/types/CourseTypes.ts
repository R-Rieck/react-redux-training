export interface Store {
    courses: Course[];
}

export interface Course {
    id: number;
    title: string | null;
    slug: string,
    authorId: number,
    category: string
}

export interface Author {
    id: number,
    name: string
}