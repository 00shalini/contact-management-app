// src/actions/contactActions.ts

import { Contact } from "../types/types";

export const ADD_CONTACT = "ADD_CONTACT";
export const EDIT_CONTACT = "EDIT_CONTACT";
export const DELETE_CONTACT = "DELETE_CONTACT";

export interface AddContactAction {
  type: typeof ADD_CONTACT;
  payload: Contact;
}

export interface EditContactAction {
  type: typeof EDIT_CONTACT;
  payload: Contact;
}

export interface DeleteContactAction {
  type: typeof DELETE_CONTACT;
  payload: string; // Contact ID
}

export type ContactActionTypes =
  | AddContactAction
  | EditContactAction
  | DeleteContactAction;

export const addContact = (contact: Contact): ContactActionTypes => ({
  type: ADD_CONTACT,
  payload: contact,
});

export const editContact = (contact: Contact): ContactActionTypes => ({
  type: EDIT_CONTACT,
  payload: contact,
});

export const deleteContact = (id: string): ContactActionTypes => ({
  type: DELETE_CONTACT,
  payload: id,
});
