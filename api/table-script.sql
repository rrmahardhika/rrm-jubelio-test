-- Table: public.Products

-- DROP TABLE IF EXISTS public."Products";

CREATE TABLE IF NOT EXISTS public."Products"
(
    "Name" character varying(35) COLLATE pg_catalog."default" NOT NULL,
    "SKU" character varying(50) COLLATE pg_catalog."default" NOT NULL,
    "Image" character varying(255) COLLATE pg_catalog."default" NOT NULL,
    "Description" text COLLATE pg_catalog."default",
    "Price" bigint NOT NULL,
    CONSTRAINT "Products_pkey" PRIMARY KEY ("SKU")
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public."Products"
    OWNER to postgres;