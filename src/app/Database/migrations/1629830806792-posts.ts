import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class posts1629830806792 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "tb_posts",
            columns: [
                {
                    name: 'id',
                    type: 'uuid',
                    isPrimary: true,
                    generationStrategy: 'uuid',
                    isGenerated: true,
                    default: 'uuid_generate_v4()',
                },
                {
                    name: 'str_title',
                    type: 'varchar',
                    

                },
                {
                    name: 'str_body',
                    type: 'text'
                },
                {
                    name: 'created_at',
                    type: 'timestamp with time zone',
                    default: 'now()'
                },
                {
                    name: 'updated_at',
                    type: 'timestamp with time zone',
                    default: 'now()'
                },
                {
                    name: 'deleted_at',
                    type: 'timestamp with time zone',
                    isNullable: true,
                    default: 'null'
                }
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("tb_posts")
    }

}
