import {
    Entity,
    BaseEntity,
    CreateDateColumn,
    UpdateDateColumn,
    PrimaryGeneratedColumn,
    Column,
} from 'typeorm';

@Entity()
export class CommonEntity extends BaseEntity {
    constructor(id?: number) {
        super();
        if (id) {
            this.id = id;
        }
    }

    @PrimaryGeneratedColumn()
    id: number | undefined;

    @CreateDateColumn()
    create_at: Date;

    @Column('text', { default: 'TBD' })
    created_by: string;

    @UpdateDateColumn()
    updated_at: Date;

    @Column('text', { default: 'TBD' })
    updated_by: string;
}
