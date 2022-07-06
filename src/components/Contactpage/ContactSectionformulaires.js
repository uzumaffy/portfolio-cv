import React from 'react';
import ContactComent from './ContactComent';
import ContactSectionBouton from './ContactSectionBouton';
import ContactSectionNameEmail from './ContactSectionNameEmail';
import ContactSubject from './ContactSubject';

export default function ContactSectionformulaires() {
  return (
    <div>
      <ContactSectionNameEmail />
      <ContactSubject />
      <ContactComent/>
      <ContactSectionBouton/>
    </div>
  );
}
