-- FK_COLETA
ALTER TABLE tblColeta
ADD FOREIGN KEY (FkIdDoador) REFERENCES tblDoador(IdDoador);

ALTER TABLE tblColeta
ADD FOREIGN KEY (FkIdColetor) REFERENCES tblColetor(IdColetor);

-- TA_COLETOR_MATERIAL
ALTER TABLE tblTAColetorMaterial
ADD FOREIGN KEY (FkIdColetor) REFERENCES tblColetor(IdColetor);

ALTER TABLE tblTAColetorMaterial
ADD FOREIGN KEY (FkIdMaterial) REFERENCES tblMaterial(IdMaterial);

-- TA_COLETA_MATERIAL
ALTER TABLE tblTAColetaMaterial
ADD FOREIGN KEY (FkIdColeta) REFERENCES tblColeta(IdColeta);

ALTER TABLE tblTAColetaMaterial
ADD FOREIGN KEY (FkIdMaterial) REFERENCES tblMaterial(idMaterial);

-- TA_COLETA_PATROCINADOR
ALTER TABLE tblTAColetaPatrocinador
ADD FOREIGN KEY (FkIdColeta) REFERENCES tblColeta(IdColeta);

ALTER TABLE tblTAColetaPatrocinador
ADD FOREIGN KEY (FkIdPatrocinador) REFERENCES tblPatrocinador(IdPatrocinador);

-- TA_COLETA_EMPRESAINDICADA
ALTER TABLE tblTAColetaEmpresaIndicada
ADD FOREIGN KEY (FkIdColeta) REFERENCES tblColeta(IdColeta);

ALTER TABLE tblTAColetaEmpresaIndicada
ADD FOREIGN KEY (FkIdEmpresaIndicada) REFERENCES tblEmpresaIndicada(IdEmpresaIndicada);