import { create } from 'zustand'

export const storeConfig = create((set) => ({
  volume: 0,
  songState: true,
  backdropColor: '#65677e',

  setAudioState: (value) => {
    set({ volume: value })
  },
  setSongState: (value) => {
    set({ songState: value })
  },
  setBackdropColor: (color) => {
    set({ backdropColor: color })
  }
}))
