import { ValidationError, ValidationResult } from './form-validation';

export interface DevisFormData {
  projectType: string;
  serviceType: string;
  projectDetails: {
    location: string;
    timeframe: string;
    budget: string;
    description: string;
  };
  surface: {
    area: number;
    unit: string;
  };
  materials: string[];
  contactInfo: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    address: string;
    postalCode: string;
    city: string;
  };
}

export const validateEmail = (email: string): ValidationError | null => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email) return { message: 'L\'email est requis' };
  if (!emailRegex.test(email)) return { message: 'Format d\'email invalide' };
  return null;
};

export const validateRequired = (value: string, fieldName: string): ValidationError | null => {
  if (!value || value.trim() === '') {
    return { message: `${fieldName} est requis` };
  }
  return null;
};

export const validatePhone = (phone: string): ValidationError | null => {
  const phoneRegex = /^(\+\d{1,3}\s?)?\(?\d{1,4}\)?[\s.-]?\d{1,4}[\s.-]?\d{1,4}[\s.-]?\d{1,9}$/;
  if (!phone) return { message: 'Le numéro de téléphone est requis' };
  if (!phoneRegex.test(phone)) return { message: 'Format de téléphone invalide' };
  return null;
};

export const validatePostalCode = (postalCode: string): ValidationError | null => {
  const postalCodeRegex = /^\d{5}$/;
  if (!postalCode) return { message: 'Le code postal est requis' };
  if (!postalCodeRegex.test(postalCode)) return { message: 'Format de code postal invalide (5 chiffres)' };
  return null;
};

export const validateProjectType = (projectType: string): ValidationError | null => {
  if (!projectType) return { message: 'Le type de projet est requis' };
  return null;
};

export const validateServiceType = (serviceType: string): ValidationError | null => {
  if (!serviceType) return { message: 'Le type de service est requis' };
  return null;
};

export const validateSurface = (area: number): ValidationError | null => {
  if (!area || area <= 0) return { message: 'La surface doit être supérieure à 0' };
  return null;
};

export const validateContactInfo = (contactInfo: DevisFormData['contactInfo']): Record<string, ValidationError> => {
  const errors: Record<string, ValidationError> = {};
  
  const firstNameError = validateRequired(contactInfo.firstName, 'Le prénom');
  if (firstNameError) errors.firstName = firstNameError;
  
  const lastNameError = validateRequired(contactInfo.lastName, 'Le nom');
  if (lastNameError) errors.lastName = lastNameError;
  
  const emailError = validateEmail(contactInfo.email);
  if (emailError) errors.email = emailError;
  
  const phoneError = validatePhone(contactInfo.phone);
  if (phoneError) errors.phone = phoneError;
  
  const addressError = validateRequired(contactInfo.address, 'L\'adresse');
  if (addressError) errors.address = addressError;
  
  const postalCodeError = validatePostalCode(contactInfo.postalCode);
  if (postalCodeError) errors.postalCode = postalCodeError;
  
  const cityError = validateRequired(contactInfo.city, 'La ville');
  if (cityError) errors.city = cityError;
  
  return errors;
};

export const validateDevisStep = (
  step: number, 
  formData: DevisFormData
): ValidationResult => {
  const errors: Record<string, ValidationError> = {};
  
  // Validate based on current step
  switch (step) {
    case 0: // PROJECT_TYPE
      const projectTypeError = validateProjectType(formData.projectType);
      if (projectTypeError) errors.projectType = projectTypeError;
      break;
      
    case 1: // SERVICE_TYPE
      const serviceTypeError = validateServiceType(formData.serviceType);
      if (serviceTypeError) errors.serviceType = serviceTypeError;
      break;
      
    case 2: // PROJECT_DETAILS
      const locationError = validateRequired(formData.projectDetails.location, 'Le lieu');
      if (locationError) errors.location = locationError;
      break;
      
    case 3: // SURFACE
      const surfaceError = validateSurface(formData.surface.area);
      if (surfaceError) errors.area = surfaceError;
      break;
      
    case 4: // MATERIALS
      if (formData.materials.length === 0) {
        errors.materials = { message: 'Veuillez sélectionner un type de matériau' };
      }
      break;
      
    case 5: // CONTACT_INFO
      const contactErrors = validateContactInfo(formData.contactInfo);
      Object.assign(errors, contactErrors);
      break;
  }
  
  return {
    valid: Object.keys(errors).length === 0,
    errors
  };
};
