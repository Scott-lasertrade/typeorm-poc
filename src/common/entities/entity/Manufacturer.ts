import { Entity, Column } from 'typeorm';
import { VersionControlledEntity } from '../utils/VersionControlledEntity';

@Entity('manufacturer')
export class Manufacturer extends VersionControlledEntity {
    @Column('varchar')
    name: string;

    @Column('boolean', { default: true })
    is_approved: boolean;
}
