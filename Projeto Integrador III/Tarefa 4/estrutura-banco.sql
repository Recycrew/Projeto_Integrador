CREATE DATABASE IF NOT EXISTS RecycrewDB;

USE RecycrewDB;

CREATE TABLE tblDoador(
	IdDoador       	  INT PRIMARY KEY AUTO_INCREMENT,
	NomeDoador      	VARCHAR(30) NOT NULL,
	Email           	VARCHAR(30) NOT NULL,
	EndDoador       	VARCHAR(100) NOT NULL,
	DataNasc        	VARCHAR(8),
	Telefone        	VARCHAR(11) NOT NULL,
	TipoDocumento   	ENUM('CPF', 'CNPJ'),
	NumDocumento    	VARCHAR(18) NOT NULL
);

CREATE TABLE tblColetor (
	IdColetor      	INT PRIMARY KEY AUTO_INCREMENT,
	NomeColetor     	VARCHAR(30) NOT NULL,
	Email           	VARCHAR(30) NOT NULL,
	EndColetor      	VARCHAR(100) NOT NULL,
	DataNasc        	VARCHAR(8),
	Telefone        	VARCHAR(11) NOT NULL,
	TipoDocumento   	ENUM('CPF', 'CNPJ'),
	NumDocumento    	VARCHAR(18) NOT NULL,
	CapacidadeMax   	VARCHAR(10) 
);

CREATE TABLE tblColeta (
  IdColeta       	    INT PRIMARY KEY AUTO_INCREMENT,
  DataHoraColeta  	  DATETIME,
  EnderecoColeta       VARCHAR(100) NOT NULL,
  QuantidadeMaterial   VARCHAR(10),
  StatusColeta    	    ENUM('PROGRAMADA', 'EM ANDAMENTO', 'CANCELADA', 'FINALIZADA'),
  FkIdDoador          INT NOT NULL,
  FkIdColetor         INT NOT NULL
);

CREATE TABLE tblMaterial (
  IdMaterial  	  INT PRIMARY KEY AUTO_INCREMENT,
  Reciclavel      CHAR(1),
  NomeMaterial   VARCHAR(30),
  TipoMaterial   VARCHAR(30)
);

CREATE TABLE tblPatrocinador (
  IdPatrocinador     	INT PRIMARY KEY AUTO_INCREMENT,
  NomePatrocinador    	VARCHAR(40),
  TelefonePatrocinador	VARCHAR(11),
  SitePatrocinador    	VARCHAR(50),
  EmailPatrocinador   	VARCHAR(30),
  EnderecoPatrocinador VARCHAR(100)
);

CREATE TABLE tblEmpresaIndicada (
  IdEmpresaIndicada  	INT PRIMARY KEY AUTO_INCREMENT,
  NomeEmpresa         	VARCHAR(40),
  TelefoneEmpresa     	VARCHAR(11),
  SiteEmpresa         	VARCHAR(50),
  EmailEmpresa        	VARCHAR(80),
  EnderecoEmpresa      VARCHAR(100),
  CapacidadeMinima     VARCHAR(10)
);

CREATE TABLE tblTAColetorMaterial (
	PkIdColetorMaterial INT PRIMARY KEY AUTO_INCREMENT,
  FkIdColetor INT NOT NULL,
  FkIdMaterial INT NOT NULL
);

CREATE TABLE tblTAColetaMaterial (
	PkIdColetaMaterial INT PRIMARY KEY AUTO_INCREMENT, 
  FkIdColeta INT NOT NULL,
  FkIdMaterial INT NOT NULL
);

CREATE TABLE tblTAColetaPatrocinador (
	PkIdColetaPatrocinador INT PRIMARY KEY AUTO_INCREMENT,
  FkIdColeta INT NOT NULL, 
  FkIdPatrocinador INT NOT NULL
);

CREATE TABLE tblTAColetaEmpresaIndicada (
	PkIdColetaEmpresaIndicada INT PRIMARY KEY AUTO_INCREMENT,
  FkIdColeta INT NOT NULL, 
  FkIdEmpresaindicada INT NOT NULL
);