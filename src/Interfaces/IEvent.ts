import { IAnswer } from "./IAnswer"

export interface IEvents {
    Newspaper: React.ReactNode
    src: string
    content: React.ReactNode
    answers: IAnswer[]
}