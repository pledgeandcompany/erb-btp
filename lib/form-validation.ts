export type ValidationError = {
  message: string;
};

export type ValidationResult = {
  valid: boolean;
  errors: Record<string, ValidationError>;
};

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

export const validateMinLength = (value: string, minLength: number): ValidationError | null => {
  if (value.length < minLength) {
    return { message: `Doit contenir au moins ${minLength} caractères` };
  }
  return null;
};

export const validateContactForm = (data: {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}): ValidationResult => {
  const errors: Record<string, ValidationError> = {};
  
  const nameError = validateRequired(data.name, 'Le nom');
  if (nameError) errors.name = nameError;
  
  const emailError = validateEmail(data.email);
  if (emailError) errors.email = emailError;
  
  const phoneError = validatePhone(data.phone);
  if (phoneError) errors.phone = phoneError;
  
  const subjectError = validateRequired(data.subject, 'Le sujet');
  if (subjectError) errors.subject = subjectError;
  
  const messageError = validateMinLength(data.message, 10);
  if (messageError) errors.message = messageError;
  
  return {
    valid: Object.keys(errors).length === 0,
    errors
  };
};
