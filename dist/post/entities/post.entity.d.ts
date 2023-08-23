import { User } from 'src/user/entities/user.entity';
export declare class Post {
    id: string;
    postname: string;
    user: User;
    userId: string;
    postorder: number;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date;
}
