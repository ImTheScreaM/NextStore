import {create} from 'zustand'
import { persist } from 'zustand/middleware'

export const useCategory = create() (
	persist(
		(set,get) => ({
			category:"",
			setCategory: (name:string) => {
				set({category:name})
			}
		}),
		{
			name:'category',
		}
	)
)