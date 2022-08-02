-- Table: menu

-- DROP TABLE menu;

CREATE TABLE menu
(
  id_menu serial NOT NULL,
  nom_menu character varying(20),
  route_menu character varying(20),
  rang_menu character varying(20),
  icon_menu character varying(50),
  sous_menu text DEFAULT ''::text,
  accessibilite integer,
  CONSTRAINT primary_key_table_menu PRIMARY KEY (id_menu)
)
WITH (
  OIDS=FALSE
);
ALTER TABLE menu
  OWNER TO postgres;


INSERT INTO public.menu(nom_menu, route_menu, rang_menu, icon_menu, sous_menu, accessibilite)VALUES ('Accueil', 'accueil', '2', 'bi bi-house-fill', '[]', 1);
INSERT INTO public.menu(nom_menu, route_menu, rang_menu, icon_menu, sous_menu, accessibilite)VALUES ('Menu', 'gestion-menu', '1', 'bi bi-list', null, 3);


-- Table: utilisateur

-- DROP TABLE utilisateur;

CREATE TABLE utilisateur
(
  id_utilisateur serial NOT NULL,
  nom_user character varying(100),
  prenom_user character varying(100),
  matricule character varying(20),
  password_user character varying(20),
  role_user character varying(60),
  CONSTRAINT primary_key_table_utilisateur PRIMARY KEY (id_utilisateur)
)
WITH (
  OIDS=FALSE
);
ALTER TABLE utilisateur
  OWNER TO postgres;


INSERT INTO public.utilisateur(nom_user, prenom_user, matricule, password_user, role_user)VALUES ('Développeur', 'App', 'T9000', 'admin', 'Administrateur');