--
-- PostgreSQL database dump
--

-- Dumped from database version 12.9 (Ubuntu 12.9-2.pgdg20.04+1)
-- Dumped by pg_dump version 12.9 (Ubuntu 12.9-2.pgdg20.04+1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

DROP DATABASE universe;
--
-- Name: universe; Type: DATABASE; Schema: -; Owner: freecodecamp
--

CREATE DATABASE universe WITH TEMPLATE = template0 ENCODING = 'UTF8' LC_COLLATE = 'C.UTF-8' LC_CTYPE = 'C.UTF-8';


ALTER DATABASE universe OWNER TO freecodecamp;

\connect universe

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: galaxy; Type: TABLE; Schema: public; Owner: freecodecamp
--

CREATE TABLE public.galaxy (
    galaxy_id integer NOT NULL,
    name character varying,
    radius numeric(4,2) NOT NULL,
    age integer NOT NULL,
    has_life boolean,
    about text
);


ALTER TABLE public.galaxy OWNER TO freecodecamp;

--
-- Name: galaxy_galaxy_id_seq; Type: SEQUENCE; Schema: public; Owner: freecodecamp
--

CREATE SEQUENCE public.galaxy_galaxy_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.galaxy_galaxy_id_seq OWNER TO freecodecamp;

--
-- Name: galaxy_galaxy_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: freecodecamp
--

ALTER SEQUENCE public.galaxy_galaxy_id_seq OWNED BY public.galaxy.galaxy_id;


--
-- Name: moon; Type: TABLE; Schema: public; Owner: freecodecamp
--

CREATE TABLE public.moon (
    moon_id integer NOT NULL,
    name character varying(30),
    radius numeric(4,2) NOT NULL,
    age integer NOT NULL,
    has_life boolean,
    about text,
    planet_id integer
);


ALTER TABLE public.moon OWNER TO freecodecamp;

--
-- Name: moon_moon_id_seq; Type: SEQUENCE; Schema: public; Owner: freecodecamp
--

CREATE SEQUENCE public.moon_moon_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.moon_moon_id_seq OWNER TO freecodecamp;

--
-- Name: moon_moon_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: freecodecamp
--

ALTER SEQUENCE public.moon_moon_id_seq OWNED BY public.moon.moon_id;


--
-- Name: planet; Type: TABLE; Schema: public; Owner: freecodecamp
--

CREATE TABLE public.planet (
    planet_id integer NOT NULL,
    name character varying(30),
    radius numeric(4,2) NOT NULL,
    age integer NOT NULL,
    has_life boolean,
    about text,
    star_id integer
);


ALTER TABLE public.planet OWNER TO freecodecamp;

--
-- Name: planet_planet_id_seq; Type: SEQUENCE; Schema: public; Owner: freecodecamp
--

CREATE SEQUENCE public.planet_planet_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.planet_planet_id_seq OWNER TO freecodecamp;

--
-- Name: planet_planet_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: freecodecamp
--

ALTER SEQUENCE public.planet_planet_id_seq OWNED BY public.planet.planet_id;


--
-- Name: star; Type: TABLE; Schema: public; Owner: freecodecamp
--

CREATE TABLE public.star (
    star_id integer NOT NULL,
    name character varying(30),
    radius numeric(4,2) NOT NULL,
    age integer NOT NULL,
    has_life boolean,
    about text,
    galaxy_id integer
);


ALTER TABLE public.star OWNER TO freecodecamp;

--
-- Name: star_star_id_seq; Type: SEQUENCE; Schema: public; Owner: freecodecamp
--

CREATE SEQUENCE public.star_star_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.star_star_id_seq OWNER TO freecodecamp;

--
-- Name: star_star_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: freecodecamp
--

ALTER SEQUENCE public.star_star_id_seq OWNED BY public.star.star_id;


--
-- Name: sun; Type: TABLE; Schema: public; Owner: freecodecamp
--

CREATE TABLE public.sun (
    sun_id integer NOT NULL,
    name character varying(30),
    radius numeric(4,2) NOT NULL,
    age integer NOT NULL,
    has_life boolean
);


ALTER TABLE public.sun OWNER TO freecodecamp;

--
-- Name: sun_sun_id_seq; Type: SEQUENCE; Schema: public; Owner: freecodecamp
--

CREATE SEQUENCE public.sun_sun_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.sun_sun_id_seq OWNER TO freecodecamp;

--
-- Name: sun_sun_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: freecodecamp
--

ALTER SEQUENCE public.sun_sun_id_seq OWNED BY public.sun.sun_id;


--
-- Name: galaxy galaxy_id; Type: DEFAULT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.galaxy ALTER COLUMN galaxy_id SET DEFAULT nextval('public.galaxy_galaxy_id_seq'::regclass);


--
-- Name: moon moon_id; Type: DEFAULT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.moon ALTER COLUMN moon_id SET DEFAULT nextval('public.moon_moon_id_seq'::regclass);


--
-- Name: planet planet_id; Type: DEFAULT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.planet ALTER COLUMN planet_id SET DEFAULT nextval('public.planet_planet_id_seq'::regclass);


--
-- Name: star star_id; Type: DEFAULT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.star ALTER COLUMN star_id SET DEFAULT nextval('public.star_star_id_seq'::regclass);


--
-- Name: sun sun_id; Type: DEFAULT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.sun ALTER COLUMN sun_id SET DEFAULT nextval('public.sun_sun_id_seq'::regclass);


--
-- Data for Name: galaxy; Type: TABLE DATA; Schema: public; Owner: freecodecamp
--

INSERT INTO public.galaxy VALUES (1, 'Adeola', 44.56, 70, false, 'find out');
INSERT INTO public.galaxy VALUES (2, 'Tade', 49.56, 70, true, 'find out');
INSERT INTO public.galaxy VALUES (3, 'Tade', 98.01, 45, false, 'kindly search online');
INSERT INTO public.galaxy VALUES (4, 'Ismail', 89.56, 50, false, 'Ask google');
INSERT INTO public.galaxy VALUES (5, 'Bola', 15.78, 260, true, 'I do not know');
INSERT INTO public.galaxy VALUES (6, 'Kola', 34.17, 56, false, 'google it');


--
-- Data for Name: moon; Type: TABLE DATA; Schema: public; Owner: freecodecamp
--

INSERT INTO public.moon VALUES (1, 'alao', 45.89, 49, false, 'bing it', 3);
INSERT INTO public.moon VALUES (2, 'kola', 47.89, 49, false, 'bing it', 1);
INSERT INTO public.moon VALUES (3, 'alade', 98.40, 54, false, 'google it', 7);
INSERT INTO public.moon VALUES (4, 'ayinla', 39.01, 97, true, 'google it', 5);
INSERT INTO public.moon VALUES (5, 'ajao', 98.62, 44, true, 'find out', 5);
INSERT INTO public.moon VALUES (6, 'anike', 39.00, 67, false, 'find out', 7);
INSERT INTO public.moon VALUES (8, 'anike', 98.66, 44, true, 'find out', 11);
INSERT INTO public.moon VALUES (9, 'alade', 39.03, 67, false, 'find out', 14);
INSERT INTO public.moon VALUES (10, 'aduke', 67.66, 54, false, 'assigment ', 11);
INSERT INTO public.moon VALUES (11, 'arike', 39.43, 76, false, 'google it', 1);
INSERT INTO public.moon VALUES (12, 'ajao', 78.40, 75, false, 'find out', 8);
INSERT INTO public.moon VALUES (13, 'alade', 65.43, 27, true, 'safari it', 13);
INSERT INTO public.moon VALUES (14, 'aduke', 67.06, 74, false, 'assigment ', 6);
INSERT INTO public.moon VALUES (15, 'arike', 39.93, 76, false, 'google it', 4);
INSERT INTO public.moon VALUES (16, 'ajao', 74.40, 75, false, 'find out', 2);
INSERT INTO public.moon VALUES (17, 'alade', 65.53, 27, true, 'safari it', 12);
INSERT INTO public.moon VALUES (18, 'aduke', 17.06, 74, false, 'assigment ', 3);
INSERT INTO public.moon VALUES (19, 'arike', 81.03, 56, false, 'google it', 13);
INSERT INTO public.moon VALUES (20, 'ajao', 74.00, 75, false, 'find out', 14);
INSERT INTO public.moon VALUES (21, 'alade', 55.53, 27, true, 'safari it', 5);
INSERT INTO public.moon VALUES (22, 'aduke', 21.06, 74, false, 'assigment', 11);
INSERT INTO public.moon VALUES (23, 'adisa', 14.03, 56, false, 'google 2', 13);
INSERT INTO public.moon VALUES (24, 'ajao', 74.10, 75, false, 'find out', 8);
INSERT INTO public.moon VALUES (25, 'alade', 95.03, 27, true, 'safari it', 1);


--
-- Data for Name: planet; Type: TABLE DATA; Schema: public; Owner: freecodecamp
--

INSERT INTO public.planet VALUES (1, 'alao', 45.89, 49, false, 'bing it', 3);
INSERT INTO public.planet VALUES (2, 'kola', 47.89, 49, false, 'bing it', 1);
INSERT INTO public.planet VALUES (3, 'arike', 45.69, 49, true, 'bing it', 2);
INSERT INTO public.planet VALUES (4, 'adisa', 47.80, 50, false, 'bing it', 2);
INSERT INTO public.planet VALUES (5, 'akani', 78.69, 13, true, 'bing it', 3);
INSERT INTO public.planet VALUES (6, 'aweni', 45.78, 60, true, 'bing it', 4);
INSERT INTO public.planet VALUES (7, 'aduke', 98.69, 18, true, 'find out', 4);
INSERT INTO public.planet VALUES (8, 'alade', 45.90, 20, true, 'find out', 1);
INSERT INTO public.planet VALUES (11, 'ajao', 98.62, 44, true, 'find out', 5);
INSERT INTO public.planet VALUES (12, 'anike', 39.00, 67, false, 'find out', 7);
INSERT INTO public.planet VALUES (13, 'alade', 98.40, 54, false, 'google it', 7);
INSERT INTO public.planet VALUES (14, 'ayinla', 39.01, 97, true, 'google it', 5);


--
-- Data for Name: star; Type: TABLE DATA; Schema: public; Owner: freecodecamp
--

INSERT INTO public.star VALUES (1, 'john', 10.28, 45, true, 'assignment', 2);
INSERT INTO public.star VALUES (2, 'paul', 19.28, 75, false, 'assignment', 1);
INSERT INTO public.star VALUES (3, 'david', 70.28, 55, true, 'assignment', 5);
INSERT INTO public.star VALUES (4, 'grace', 11.58, 45, true, 'assignment', 4);
INSERT INTO public.star VALUES (5, 'jim', 17.38, 85, false, 'assignment', 6);
INSERT INTO public.star VALUES (7, 'mike', 34.87, 76, true, 'google it now', 3);


--
-- Data for Name: sun; Type: TABLE DATA; Schema: public; Owner: freecodecamp
--

INSERT INTO public.sun VALUES (1, 'iyanda', 45.78, 19, true);
INSERT INTO public.sun VALUES (2, 'abike', 45.80, 34, false);
INSERT INTO public.sun VALUES (3, 'akande', 45.76, 25, true);


--
-- Name: galaxy_galaxy_id_seq; Type: SEQUENCE SET; Schema: public; Owner: freecodecamp
--

SELECT pg_catalog.setval('public.galaxy_galaxy_id_seq', 6, true);


--
-- Name: moon_moon_id_seq; Type: SEQUENCE SET; Schema: public; Owner: freecodecamp
--

SELECT pg_catalog.setval('public.moon_moon_id_seq', 25, true);


--
-- Name: planet_planet_id_seq; Type: SEQUENCE SET; Schema: public; Owner: freecodecamp
--

SELECT pg_catalog.setval('public.planet_planet_id_seq', 14, true);


--
-- Name: star_star_id_seq; Type: SEQUENCE SET; Schema: public; Owner: freecodecamp
--

SELECT pg_catalog.setval('public.star_star_id_seq', 8, true);


--
-- Name: sun_sun_id_seq; Type: SEQUENCE SET; Schema: public; Owner: freecodecamp
--

SELECT pg_catalog.setval('public.sun_sun_id_seq', 3, true);


--
-- Name: galaxy galaxy_pkey; Type: CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.galaxy
    ADD CONSTRAINT galaxy_pkey PRIMARY KEY (galaxy_id);


--
-- Name: galaxy galaxy_radius_key; Type: CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.galaxy
    ADD CONSTRAINT galaxy_radius_key UNIQUE (radius);


--
-- Name: moon moon_pkey; Type: CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.moon
    ADD CONSTRAINT moon_pkey PRIMARY KEY (moon_id);


--
-- Name: moon moon_radius_key; Type: CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.moon
    ADD CONSTRAINT moon_radius_key UNIQUE (radius);


--
-- Name: planet planet_pkey; Type: CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.planet
    ADD CONSTRAINT planet_pkey PRIMARY KEY (planet_id);


--
-- Name: planet planet_radius_key; Type: CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.planet
    ADD CONSTRAINT planet_radius_key UNIQUE (radius);


--
-- Name: star star_pkey; Type: CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.star
    ADD CONSTRAINT star_pkey PRIMARY KEY (star_id);


--
-- Name: star star_radius_key; Type: CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.star
    ADD CONSTRAINT star_radius_key UNIQUE (radius);


--
-- Name: sun sun_pkey; Type: CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.sun
    ADD CONSTRAINT sun_pkey PRIMARY KEY (sun_id);


--
-- Name: sun sun_radius_key; Type: CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.sun
    ADD CONSTRAINT sun_radius_key UNIQUE (radius);


--
-- Name: moon moon_planet_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.moon
    ADD CONSTRAINT moon_planet_id_fkey FOREIGN KEY (planet_id) REFERENCES public.planet(planet_id);


--
-- Name: planet planet_star_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.planet
    ADD CONSTRAINT planet_star_id_fkey FOREIGN KEY (star_id) REFERENCES public.star(star_id);


--
-- Name: star star_galaxy_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.star
    ADD CONSTRAINT star_galaxy_id_fkey FOREIGN KEY (galaxy_id) REFERENCES public.galaxy(galaxy_id);


--
-- PostgreSQL database dump complete
--

