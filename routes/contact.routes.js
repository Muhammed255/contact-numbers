import express from 'express';
import contactController from '../controllers/contact.controller';

export const contactRoutes = express.Router();

contactRoutes.post('/new-contact', contactController.create_contact);