// ~/stores/useListItem.ts
import { defineStore } from 'pinia'
import { apiFetch } from '~/utils/api'

export interface ListItem {
  id: string
  name: string
  slug: string
  seoTitle?: string
  seoDescription?: string
}

interface ItemState {
  items: ListItem[]
  meta: { generatedAt?: string } | null
  loading: boolean
  error: string | null
}

export const useItemList = defineStore('ListItem', {
  state: (): ItemState => ({
    items: [],
    meta: null,
    loading: true,
    error: null,
  }),

  actions: {
    async fetchItemList() {
      if (this.items.length) return
      this.loading = true
      this.error = null
      try {
        const res = await apiFetch<{ items: any[]; meta?: any }>('/navitems/')
        this.items = res.items.map(i => ({
          id: i._id,
          name: i.name,
          slug: i.slug,
          seoTitle: i.seoTitle,
          seoDescription: i.seoDescription,
        }))
        this.meta = res.meta || null
      } catch (err: any) {
        this.error = err.message || 'Failed to load navigation.'
      } finally {
        this.loading = false
      }
    },
  },
})
