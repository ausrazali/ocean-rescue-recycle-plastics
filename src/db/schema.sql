-- MySQL

CREATE DATABASE ocean_rescue_recycle_plastics;

USE ocean_rescue_recycle_plastics;

CREATE TABLE visitor (
    visitor_id VARCHAR(10),
    visitor_email VARCHAR(255),
    visitor_name VARCHAR(255),
    visitor_country VARCHAR(255),
    opt_in BOOL,
    terms_agreement BOOL,
    vstr_id_ctr INT(10),
    CONSTRAINT PK_Visitor PRIMARY KEY (visitor_id)
);

CREATE TABLE visitor_pledge (
    visitor_id VARCHAR(10),
    pledge TINYTEXT,
    CONSTRAINT PK_Visitor_Pledge PRIMARY KEY (visitor_id, pledge),
    CONSTRAINT FK_Visitor_Pledge_Visitor FOREIGN KEY (visitor_id) REFERENCES visitor (visitor_id)
);

CREATE TABLE contact_form (
    form_id VARCHAR(15),
    submitter_email VARCHAR(255),
    submitter_name VARCHAR(255),
    submission_datetime DATETIME,
    form_message TEXT,
    form_status ENUM('pending', 'replied'),
    msg_id_ctr INT(10),
    CONSTRAINT PK_Contact_Form PRIMARY KEY (form_id)
);