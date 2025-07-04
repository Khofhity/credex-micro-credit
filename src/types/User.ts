export interface User {
  id: string;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  phone: string;
  dateOfBirth: string;
  address: {
    street: string;
    city: string;
    state: string;
    zipCode: string;
    country: string;
  };
  accountType: 'individual' | 'business';
  kycStatus: 'pending' | 'verified' | 'rejected';
  accountBalance: number;
  creditScore: number;
  joinDate: string;
  lastLogin: string;
  isActive: boolean;
  securityQuestions: {
    question: string;
    answer: string;
  }[];
  twoFactorEnabled: boolean;
}

export interface LoanApplication {
  id: string;
  userId: string;
  amount: number;
  purpose: string;
  term: number;
  interestRate: number;
  status: 'pending' | 'approved' | 'rejected' | 'disbursed';
  applicationDate: string;
  approvalDate?: string;
  monthlyPayment: number;
  totalPayment: number;
  remainingBalance: number;
  nextPaymentDate?: string;
}

export interface Transaction {
  id: string;
  userId: string;
  type: 'deposit' | 'withdrawal' | 'loan_payment' | 'loan_disbursement' | 'transfer';
  amount: number;
  description: string;
  date: string;
  status: 'completed' | 'pending' | 'failed';
  reference: string;
}

export interface SavingsGoal {
  id: string;
  userId: string;
  title: string;
  targetAmount: number;
  currentAmount: number;
  targetDate: string;
  category: string;
  isActive: boolean;
}