// ✅ store/signupStore.ts
import { create } from 'zustand'

type PersonalDetails = {
  firstName: string
  lastName: string
  age?: number
}

type SignupState = {
  email: string
  phone: string
  address: string
  personalDetails: PersonalDetails
  setEmail: (email: string) => void
  setPhone: (phone: string) => void
  setAddress: (address: string) => void
  setPersonalDetails: (details: PersonalDetails) => void
  reset: () => void
}

export const useSignupStore = create<SignupState>((set) => ({
  email: '',
  phone: '',
  address: '',
  personalDetails: { firstName: '', lastName: '' },

  setEmail: (email) => set({ email }),
  setPhone: (phone) => set({ phone }),
  setAddress: (address) => set({ address }),
  setPersonalDetails: (details) => set({ personalDetails: details }),

  reset: () =>
    set({
      email: '',
      phone: '',
      address: '',
      personalDetails: { firstName: '', lastName: '' },
    }),
}))
