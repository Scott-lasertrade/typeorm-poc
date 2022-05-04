import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialSetup1635981526022 implements MigrationInterface {
  name = "InitialSetup1635981526022";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`CREATE TABLE typeorm_metadata (
                "type" varchar(255) NOT NULL,
                "database" varchar(255) DEFAULT NULL,
                "schema" varchar(255) DEFAULT NULL,
                "table" varchar(255) DEFAULT NULL,
                "name" varchar(255) DEFAULT NULL,
                "value" text
            )`);
    await queryRunner.query(
      `CREATE TABLE "manufacturer" ("id" SERIAL NOT NULL, "create_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "name" character varying NOT NULL, CONSTRAINT "PK_81fc5abca8ed2f6edc79b375eeb" PRIMARY KEY ("id"))`
    );
    await queryRunner.query(
      `
            INSERT INTO "manufacturer" (id, name) VALUES 
            (1, '3D Aesthetics'),
            (2, 'Aesthetic Bureau'),
            (3, 'Allergan'),
            (4, 'Alma'),
            (5, 'BTL'),
            (6, 'Candela'),
            (7, 'Canfield'),
            (8, 'Clinical Pro'),
            (9, 'Cryomed'),
            (10, 'Cutera'),
            (11, 'Cynosure'),
            (12, 'Deka'),
            (13, 'Dermal Solutions'),
            (14, 'Dermapen'),
            (15, 'Endymed'),
            (16, 'Global Beauty Group'),
            (17, 'Healthtec'),
            (18, 'Karl Storz'),
            (19, 'Kernel Medical'),
            (20, 'Laseraid'),
            (21, 'Lumenis'),
            (22, 'Lutronic'),
            (23, 'Merz Aesthetics'),
            (24, 'Olympus'),
            (25, 'Omnilux'),
            (26, 'Quanta System'),
            (27, 'Solta Medical'),
            (28, 'Spectrum'),
            (29, 'Venus Concept'),
            (30, 'Zimmer');
            `
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `
            DELETE FROM "manufacturer" WHERE name in 
            (
                '3D Aesthetics',
                'Aesthetic Bureau',
                'Allergan',
                'Alma',
                'BTL',
                'Candela',
                'Canfield',
                'Clinical Pro',
                'Cryomed',
                'Cutera',
                'Cynosure',
                'Deka',
                'Dermal Solutions',
                'Dermapen',
                'Endymed',
                'Global Beauty Group',
                'Healthtec',
                'Karl Storz',
                'Kernel Medical',
                'Laseraid',
                'Lumenis',
                'Lutronic',
                'Merz Aesthetics',
                'Olympus',
                'Omnilux',
                'Quanta System',
                'Solta Medical',
                'Spectrum',
                'Venus Concept',
                'Zimmer'
            );
            `
    );
    await queryRunner.query(`DROP TABLE "manufacturer"`);
    await queryRunner.query(`DROP TABLE typeorm_metadata`);
  }
}
