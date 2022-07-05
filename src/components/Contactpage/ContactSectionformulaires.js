import React from 'react';
import ContactSectionComent from '../../pages/ContactComent';
import ContactSectionBouton from './ContactSectionBouton';
import ContactSectionNameEmail from './ContactSectionNameEmail';
import ContactSubject from './ContactSubject';

export default function ContactSectionformulaires() {
  return (
    <div>
      <ContactSectionNameEmail />
      <ContactSubject />
      <ContactSectionComent />
      <ContactSectionBouton/>
    </div>
  );
}
