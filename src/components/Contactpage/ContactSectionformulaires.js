import React from 'react';
import ContactSectionComent from '../../pages/ContactComent';
import ContactSectionNameEmail from './ContactSectionNameEmail';
import ContactSubject from './ContactSubject';

export default function ContactSectionformulaires() {
  return (
    <div>
      <ContactSectionNameEmail />
      <ContactSubject />
      <ContactSectionComent />
    </div>
  );
}
