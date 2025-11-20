import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateTableUser1675388649812 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      CREATE TABLE public.user (
        id integer NOT NULL,
        name character varying NOT NULL,
        email character varying NOT NULL,
        cpf character varying NOT NULL,
        crefito character varying,
        phone character varying NOT NULL,
        isFisioterapeuta boolean NOT NULL,
        password character varying NOT NULL,
        type_user integer NOT NULL,
        created_at timestamp without time zone DEFAULT now() NOT NULL,
        updated_at timestamp without time zone DEFAULT now() NOT NULL,
        PRIMARY KEY (id)
      );

      CREATE SEQUENCE public.user_id_seq
        AS integer
        START WITH 1
        INCREMENT BY 1
        NO MINVALUE
        NO MAXVALUE
        CACHE 1;

      ALTER SEQUENCE public.user_id_seq OWNED BY public.user.id;

      ALTER TABLE ONLY public.user 
        ALTER COLUMN id SET DEFAULT nextval('public.user_id_seq'::regclass);
    `);

    // Consider adding indexes for better performance
    await queryRunner.query(`
      CREATE UNIQUE INDEX user_email_idx ON public.user (email);
      CREATE UNIQUE INDEX user_cpf_idx ON public.user (cpf);
      CREATE INDEX user_type_user_idx ON public.user (type_user);
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    // Drop sequence first to avoid dependency issues
    await queryRunner.query(`DROP SEQUENCE IF EXISTS public.user_id_seq CASCADE;`);
    await queryRunner.query(`DROP TABLE IF EXISTS public.user CASCADE;`);
  }
}